// 総合演習 大問08. 母平均と母分散に関する検定
const comprehensiveSet = {
  id: 8,
  title: "母平均と母分散に関する検定",
  category: "仮説検定",
  difficulty: 2,
  priority: 3,
  stem: `
    ある工場では、製品1個当たりの重量について、従来の製造工程では母平均が500 g、母標準偏差が10 gであることが知られていた。製品の重量は正規分布に従うものとする。<br><br>
    製造工程を変更した後、製品を無作為に25個抽出して重量を測定したところ、標本平均および不偏標準偏差はそれぞれ
    \\[
      \\bar x=504.5\\text{ g},\\qquad s=13.0\\text{ g}
    \\]
    であった。
  `,
  parts: [
    {
      id: 1,
      difficulty: 2,
      priority: 3,
      question: `
        まず、工程変更後も母標準偏差は従来と同じ
        \\[
          \\sigma=10\\text{ g}
        \\]
        であると仮定する。<br><br>
        工程変更後の母平均 \\(\\mu\\) が従来の500 gから変化したかを調べるため、
        \\[
          H_0:\\mu=500,\\qquad H_1:\\mu\\neq 500
        \\]
        として、有意水準5%で検定する。<br><br>
        検定統計量と検定結果の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>検定統計量</th>
                <th class='border border-slate-300 p-2'>検定結果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>\\(Z=2.25\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>\\(Z=2.25\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>\\(Z\\approx 1.73\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>\\(Z\\approx 1.73\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      choices: ["①", "②", "③", "④"],
      answer: "①",
      explanation: `
        正解は①です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        母集団が正規分布に従い、母分散 \\(\\sigma^2\\) が既知の場合、帰無仮説 \\(H_0:\\mu=\\mu_0\\) の下で、
        \\[
          Z=\\dfrac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}
        \\]
        は標準正規分布に従います。今回は「500 gから変化したか」を調べるため、\\(H_1:\\mu\\neq 500\\) とする両側検定です。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        この問では母標準偏差を \\(\\sigma=10\\) と仮定しているので、標本から得られた \\(s=13\\) ではなく、\\(\\sigma=10\\) を用います。したがって、
        \\[
          Z=\\dfrac{504.5-500}{10/\\sqrt{25}}=\\dfrac{4.5}{2}=2.25.
        \\]
        標準正規分布において両側5%の棄却域は
        \\[
          |Z|\\ge 1.96
        \\]
        です。今回は \\(|2.25|>1.96\\) なので、\\(H_0\\) を棄却すると判断します。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 正しい</b>：母標準偏差10 gを用いると \\(Z=2.25\\) となり、両側5%の棄却域に入ります。<br>
        ・<b>② 誤り</b>：検定統計量は正しいですが、\\(2.25>1.96\\) なので帰無仮説を棄却します。<br>
        ・<b>③ 誤り</b>：この問では母標準偏差を10 gと仮定しているため、標本から得られた \\(s=13\\) を標準誤差の計算に用いるのは適切ではありません。<br>
        ・<b>④ 誤り</b>：\\(s=13\\) を用いている点が、この問の設定と一致しません。
      `
    },
    {
      id: 2,
      difficulty: 3,
      priority: 2,
      question: `
        工程変更後のデータでは、不偏標準偏差が13.0 gであり、従来の母標準偏差10 gより大きな値となった。<br><br>
        そこで、工程変更後に製品重量のばらつきが従来より大きくなったかを調べるため、工程変更後の母分散を \\(\\sigma^2\\) として、
        \\[
          H_0:\\sigma^2=100,\\qquad H_1:\\sigma^2>100
        \\]
        とし、有意水準5%で検定する。<br><br>
        検定統計量と検定結果の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
        必要ならば、\\(\\chi^2\\) 分布表を用いてよい。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>検定統計量</th>
                <th class='border border-slate-300 p-2'>検定結果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>\\(\\chi^2=42.25\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>\\(\\chi^2=40.56\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>\\(\\chi^2=40.56\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>\\(\\chi^2=31.20\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      choices: ["①", "②", "③", "④"],
      answer: "②",
      explanation: `
        正解は②です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        正規母集団から大きさ \\(n\\) の無作為標本を得たとき、不偏分散を \\(S^2\\) とすると、
        \\[
          \\dfrac{(n-1)S^2}{\\sigma^2}
        \\]
        は自由度 \\(n-1\\) の \\(\\chi^2\\) 分布に従います。したがって、\\(H_0:\\sigma^2=\\sigma_0^2\\) を検定するときには、
        \\[
          \\chi^2=\\dfrac{(n-1)S^2}{\\sigma_0^2}
        \\]
        を検定統計量として用います。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        今回は \\(n=25\\)、\\(S=13\\)、\\(\\sigma_0=10\\) なので、\\(S^2=169\\)、\\(\\sigma_0^2=100\\) です。よって、
        \\[
          \\chi^2=\\dfrac{(25-1)\\times 169}{100}=\\dfrac{4056}{100}=40.56.
        \\]
        自由度は \\(25-1=24\\) です。今回の対立仮説は \\(H_1:\\sigma^2>100\\) なので、\\(\\chi^2\\) 分布の上側を用いる片側検定です。自由度24の \\(\\chi^2\\) 分布の上側5%点は約36.4であるから、
        \\[
          40.56>36.4.
        \\]
        したがって、\\(H_0\\) を棄却すると判断します。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：不偏分散を用いる場合、検定統計量の係数は \\(n\\) ではなく \\(n-1\\) です。<br>
        ・<b>② 正しい</b>：検定統計量は40.56であり、自由度24の上側5%点を上回るため、帰無仮説を棄却します。<br>
        ・<b>③ 誤り</b>：検定統計量は正しいですが、40.56は上側5%の棄却域に入っています。<br>
        ・<b>④ 誤り</b>：母分散の検定では標準偏差そのものの比ではなく、分散の比を用いて検定統計量を構成します。
      `
    },
    {
      id: 3,
      difficulty: 3,
      priority: 3,
      question: `
        最後に、工程変更後の母標準偏差が10 gであるとは仮定せず、母分散を未知として、工程変更後の母平均 \\(\\mu\\) が500 gから変化したかを検討する。
        \\[
          H_0:\\mu=500,\\qquad H_1:\\mu\\neq 500
        \\]
        として、有意水準5%で検定する。<br><br>
        検定統計量と検定結果の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
        必要ならば、\\(t\\) 分布表を用いてよい。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>検定統計量</th>
                <th class='border border-slate-300 p-2'>検定結果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>\\(T=\\dfrac{504.5-500}{10/\\sqrt{25}}=2.25\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>\\(T=\\dfrac{504.5-500}{13/\\sqrt{25}}\\approx 1.73\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>\\(T=\\dfrac{504.5-500}{13/\\sqrt{25}}\\approx 1.73\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>\\(T=\\dfrac{504.5-500}{13/\\sqrt{24}}\\approx 1.70\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      choices: ["①", "②", "③", "④"],
      answer: "③",
      explanation: `
        正解は③です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        正規母集団から得られた標本について母分散が未知の場合、
        \\[
          T=\\dfrac{\\bar X-\\mu_0}{S/\\sqrt n}
        \\]
        は、帰無仮説 \\(H_0:\\mu=\\mu_0\\) の下で自由度 \\(n-1\\) の \\(t\\) 分布に従います。母標準偏差 \\(\\sigma\\) が未知であるため、標本から求めた不偏標準偏差 \\(S\\) を用いる点が、問1との重要な違いです。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        今回は母分散を未知として扱うので、\\(\\bar x=504.5\\)、\\(s=13\\)、\\(n=25\\) を用いて、
        \\[
          T=\\dfrac{504.5-500}{13/\\sqrt{25}}=\\dfrac{4.5}{2.6}\\approx 1.73.
        \\]
        自由度は \\(n-1=24\\) です。また、\\(H_1:\\mu\\neq 500\\) なので両側検定です。自由度24の \\(t\\) 分布について、両側有意水準5%に対応する臨界値は約2.06です。したがって、
        \\[
          |1.73|\\lt 2.06
        \\]
        であるから、\\(H_0\\) を棄却しないと判断します。<br><br>
        問1では母標準偏差を10 gと仮定したため標準誤差は \\(10/\\sqrt{25}=2\\) であったのに対し、この問では標本から得られた13 gを用いるため、\\(13/\\sqrt{25}=2.6\\) となります。この違いにより、同じ標本平均504.5 gを用いても検定結果が異なっています。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：母分散を未知としているため、従来の母標準偏差10 gを用いるのではなく、今回の標本から得られた \\(s=13\\) を用います。<br>
        ・<b>② 誤り</b>：検定統計量は正しいですが、\\(|T|\\approx 1.73\\) は自由度24の両側5%の棄却域に入りません。<br>
        ・<b>③ 正しい</b>：\\(T\\approx 1.73\\) であり、自由度24の \\(t\\) 分布の臨界値約2.06より絶対値が小さいため、帰無仮説を棄却しません。<br>
        ・<b>④ 誤り</b>：\\(t\\) 分布の自由度は \\(n-1=24\\) ですが、標本平均の標準誤差は \\(S/\\sqrt n\\) であり、\\(S/\\sqrt{n-1}\\) ではありません。
      `
    }
  ]
};
