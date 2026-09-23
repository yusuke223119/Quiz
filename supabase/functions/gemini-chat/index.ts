import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { prompt } = await req.json()
    const apiKey = Deno.env.get('GEMINI_API_KEY')

    if (!apiKey) {
      throw new Error("APIキーが設定されていません。SupabaseのSecretsを確認してください。")
    }

   // モデル名を gemini-2.5-flash に更新
    const res = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        contents: [{ 
          parts: [{ text: prompt }] 
        }] 
      })
    })

    const data = await res.json()

    // Geminiからの応答があるか慎重にチェック
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      const aiResponse = data.candidates[0].content.parts[0].text
      return new Response(JSON.stringify({ answer: aiResponse }), { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      })
    } else {
      // Gemini側でエラーやブロックが起きた場合の内容を返す
      console.error("Gemini Error Detail:", data)
      throw new Error(data.error?.message || "AIが回答を生成できませんでした。")
    }

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { 
      status: 500, 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
    })
  }
})