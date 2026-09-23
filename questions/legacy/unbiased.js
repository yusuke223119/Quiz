// questions.js
const allQuestions = [
  {
    id: 1,
    category: "不偏推定",
    difficulty: 2,
    priority: 1,
    type: "選択式",
    question: `
      以下の図は横軸にサンプルサイズ、縦軸に推定量の実現値を示した図である。<br>
      以下の図において、推定量が不偏推定量を示していると考えられる番号の組合せとして正しいものを選択せよ。<br>
      ![推定量の比較](picture/unbiased.png)
    `,
    choices: ["1 と 2", "1 と 4", "2 と 3", "3 と 4"],
    answer: "1 と 4",
    explanation: `
      図中の点線は母集団の真値を表しています。
      グラフ1（標本平均）とグラフ4（不偏分散）は、サンプルサイズ \\(n\\) が小さい段階から期待値が真値と一致しており、不偏性を満たしています。<br>
      一方で、グラフ2とグラフ3（標本分散）は、サンプルサイズが小さい時に真値を下回るバイアスが見られるため、不偏推定量ではありません。
    `
  },
  {
    id: 2,
    category: "不偏推定",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(X_1, X_2\\) は独立に平均 \\(\\mu\\)、分散 \\(\\sigma^2\\) の分布に従うとする。<br>
      次の推定量のうち、\\(\\mu\\) の不偏推定量であって、分散が最小である推定量を選べ。<br>
    `,
    choices: ["① \\(\\frac{1}{3}X_1 + \\frac{2}{3}X_2\\)", "② \\(\\frac{1}{4}X_1 + \\frac{3}{4}X_2\\)", "③ \\(\\frac{1}{2}X_1 + \\frac{1}{2}X_2\\)", "④ \\(X_1\\)"],
    answer: "③ \\(\\frac{1}{2}X_1 + \\frac{1}{2}X_2\\)",
    explanation: `
      【解説】<br>
      まず、与えられた選択肢はすべて係数の和が1（\\(w_1 + w_2 = 1\\)）であるため、すべて \\(\\mu\\) の不偏推定量です。<br><br>
      不偏推定量 \\(w_1 X_1 + w_2 X_2\\) の分散は、独立性より次のように計算できます：<br>
      \\(\\mathrm{Var}[w_1 X_1 + w_2 X_2] = w_1^2 \\sigma^2 + w_2^2 \\sigma^2 = (w_1^2 + w_2^2) \\sigma^2\\)<br><br>
      この \\(w_1^2 + w_2^2\\) を、\\(w_1 + w_2 = 1\\) という制約の下で最小にするのは \\(w_1 = w_2 = 1/2\\) のときです。<br>
      したがって、標本平均である ③ が最も分散が小さくなります（最良不偏推定量）。 `
  },
  {
    id: 3,
    category: "不偏推定",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(X_1, \\dots, X_n\\) は独立に平均 \\(\\mu\\) の分布に従うとする。<br>
      次の ①, ②, ③, ④ のうち、\\(\\mu\\) の不偏推定量として正しいものをすべて選べ。<br>
      ① \\(\\displaystyle \\frac{1}{n} \\sum_{i=1}^{n} X_i\\)<br>
      ② \\(\\displaystyle \\sum_{i=1}^{n} X_i\\)<br>
      ③ \\(\\displaystyle \\frac{2}{n(n+1)} \\sum_{i=1}^{n} i X_i\\)<br>
      ④ \\(X_1\\)
    `,
    choices: ["1. ①", "2. ②, ④", "3. ①, ③, ④", "4. ①, ④"],
    answer: "3. ①, ③, ④",
    explanation: `
      期待値が \\(\\mu\\) に一致するものを探します。<br>
      ① 標本平均の期待値は \\(\\mathrm{E}[\\bar{X}] = \\mu\\) であり不偏推定量です。<br>
      ② 期待値は \\(n\\mu\\) となり、不偏ではありません。<br>
      ③ 重み付き平均の一種です。\\(\\mathrm{E}[\\sum_{i=1}^{n} i X_i] = \\mu \\sum_{i=1}^{n} i = \\mu \\frac{n(n+1)}{2}\\) となるため、係数を掛けたこの式も期待値は \\(\\mu\\) となり、不偏推定量です。<br>
      ④ 第1標本のみでも、その期待値は分布の平均 \\(\\mu\\) に一致するため、不偏推定量です。
    `
  },
  {
    id: 4,
    category: "不偏推定",
    difficulty: 3,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(X_1, \\dots, X_n\\) は独立に平均 \\(\\mu\\)、分散 \\(\\sigma^2\\) の分布に従うとする。
      このとき、標本平均を \\(\\bar{X}\\) として、不偏分散 
      \\begin{equation}
      S^2 = \\frac{1}{n-1} \\displaystyle\\sum_{i=1}^n (X_i - \\bar{X})^2
      \\end{equation}
      が \\(\\sigma^2\\) の不偏推定量であることを証明する。<br>
      次の ア～ウ に入る式の組合せとして適切なものはどれか。<br><br>
      
      【証明の過程】<br>
      \\begin{align}
      \\displaystyle\\sum_{i=1}^n (X_i - \\bar{X})^2 &= \\displaystyle\\sum_{i=1}^n \\{(X_i - \\mu) - (\\bar{X} - \\mu)\\}^2 \\\\
      &= \\displaystyle\\sum_{i=1}^n \\left[ (X_i - \\mu)^2 - 2(X_i - \\mu)(\\bar{X} - \\mu) + (\\bar{X} - \\mu)^2 \\right] \\\\
      &= \\displaystyle\\sum_{i=1}^n (X_i - \\mu)^2 \\\\
       &\\qquad - 2(\\bar{X} - \\mu) \\displaystyle\\sum_{i=1}^n (X_i - \\mu) + \\displaystyle\\sum_{i=1}^n (\\bar{X} - \\mu)^2
      \\end{align}
      ここで、
      \\begin{equation} \\displaystyle\\sum_{i=1}^n (X_i - \\mu)(\\bar{X} - \\mu) = \\boxed{\\text{ア}} \\end{equation}
      であることと、
      \\begin{equation}
        \\mathrm{Var}[\\bar{X}] = \\mathrm{E}[(\\bar{X} - \\mu)^2] = \\boxed{\\text{イ}}
      \\end{equation} 
      より、
      \\begin{equation}
        \\mathrm{E}\\left[ \\displaystyle\\sum_{i=1}^n (X_i - \\bar{X})^2 \\right] = n Var(X_i) - n Var(\\bar{X}) = \\boxed{\\text{ウ}}
      \\end{equation}
      したがって、
      \\begin{equation}
        \\mathrm{E}[S^2] = \\mathrm{E}\\left[ \\frac{1}{n-1} \\displaystyle\\sum_{i=1}^n (X_i - \\bar{X})^2 \\right] = \\sigma^2
      \\end{equation}  
      
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-1'>ア</th>
            <th class='border border-slate-300 p-1'>イ</th>
            <th class='border border-slate-300 p-1'>ウ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\sum_{i=1}^n (\\bar{X}-\\mu)^2\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\sigma^2\\)</td>
            <td class='border border-slate-300 p-1'>\\(n\\sigma^2\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\sum_{i=1}^n (\\bar{X}-\\mu)^2\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{\\sigma^2}{n}\\)</td>
            <td class='border border-slate-300 p-1'>\\((n-1)\\sigma^2\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-1'>\\(n\\displaystyle\\sum_{i=1}^n (\\bar{X}-\\mu)^2\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\sigma^2\\)</td>
            <td class='border border-slate-300 p-1'>\\(n\\sigma^2\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-1'>\\(n\\displaystyle\\sum_{i=1}^n (\\bar{X}-\\mu)^2\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{\\sigma^2}{n}\\)</td>
            <td class='border border-slate-300 p-1'>\\((n-1)\\sigma^2\\)</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      【解説】<br>
      ア：\\( \\sum_{i=1}^n (X_i - \\mu) = n(\\bar{X} - \\mu)\\) となるため、展開すると \\(n(\\bar{X} - \\mu)^2\\) となります。これは項数で書き換えると \\( \\sum_{i=1}^n (\\bar{X} - \\mu)^2\\) と等価です。<br>
      イ：標本平均の分散は元の分散の \\(1/n\\) になるため、\\(\\mathrm{Var}[\\bar{X}] = \\frac{\\sigma^2}{n}\\) です。<br>
      ウ：\\(\\mathrm{E}\\left[\\sum (X_i - \\mu)^2 \\right] = n\\sigma^2\\) および \\(\\mathrm{E}[n(\\bar{X} - \\mu)^2] = n \\cdot \\frac{\\sigma^2}{n} = \\sigma^2\\) なので、それらの差は \\((n-1)\\sigma^2\\) となります。
    `
  },
  {
    id: 5,
    category: "区間推定",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      母標準偏差が \\(\\sigma = 10\\) と分かっている正規母集団から \\(n = 100\\) 個の標本を抽出したところ、標本平均は \\(\\bar{X} = 50\\) であった。<br>
      母平均 \\(\\mu\\) の信頼係数 95% の信頼区間として正しいものはどれか。ただし、標準正規分布の上側 2.5% 点は 1.96 である。<br>
      ① \\([48.04,\\ 51.96]\\)<br>
      ② \\([48.36,\\ 51.64]\\)<br>
      ③ \\([49.80,\\ 50.20]\\)<br>
      ④ \\([30.4,\\ 69.6]\\)
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      母分散既知の場合、母平均の 95% 信頼区間は次の式で求めます。
      \\begin{align}
      \\bar{X} \\pm 1.96 \\times \\frac{\\sigma}{\\sqrt{n}} = 50 \\pm 1.96 \\times \\frac{10}{\\sqrt{100}} = 50 \\pm 1.96
      \\end{align}
      よって \\([48.04,\\ 51.96]\\) です。<br>
      ②は上側 5% 点の 1.645 を使った場合（信頼係数 90%）、④は \\(\\sqrt{n}\\) で割り忘れて \\(\\sigma\\) をそのまま使った誤りです。標準誤差 \\(\\sigma/\\sqrt{n}\\) を使う点に注意しましょう。
    `
  },
  {
    id: 6,
    category: "区間推定",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      ある市の有権者から無作為に \\(n = 400\\) 人を選んで調査したところ、80 人（標本比率 \\(\\hat{p} = 0.2\\)）がある政策に賛成した。<br>
      母比率 \\(p\\) の信頼係数 95% の信頼区間として最も近いものはどれか。ただし、標準正規分布の上側 2.5% 点は 1.96 である。<br>
      ① \\([0.161,\\ 0.239]\\)<br>
      ② \\([0.180,\\ 0.220]\\)<br>
      ③ \\([0.167,\\ 0.233]\\)<br>
      ④ \\([0.196,\\ 0.204]\\)
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      母比率の 95% 信頼区間は次の式で求めます。
      \\begin{align}
      \\hat{p} \\pm 1.96 \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}} = 0.2 \\pm 1.96 \\sqrt{\\frac{0.2 \\times 0.8}{400}}
      \\end{align}
      根号の中は \\(\\frac{0.16}{400} = 0.0004\\)、その平方根は 0.02 なので、
      \\begin{align}
      0.2 \\pm 1.96 \\times 0.02 = 0.2 \\pm 0.0392
      \\end{align}
      よって \\([0.161,\\ 0.239]\\) が最も近い区間です。③は 1.645（信頼係数 90%）を使った場合の区間です。
    `
  },
  {
    id: 7,
    category: "区間推定",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      「母平均 \\(\\mu\\) の信頼係数 95% の信頼区間」の解釈として、最も適切なものはどれか。<br>
      ① 母平均 \\(\\mu\\) がこの区間に入る確率は 95% である（\\(\\mu\\) は確率的に変動する）。<br>
      ② 同じ方法で標本抽出と区間の計算を何度も繰り返すと、得られた区間のうちおよそ 95% が母平均 \\(\\mu\\) を含む。<br>
      ③ 母集団のデータの 95% がこの区間に含まれる。<br>
      ④ 次に抽出する標本平均が 95% の確率でこの区間に入る。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      母平均 \\(\\mu\\) は未知ではあるものの「固定された定数」であり、確率的に変動するのは<b>標本から計算される区間の方</b>です。<br>
      したがって「\\(\\mu\\) が区間に入る確率」という①の表現は不正確で、正しくは「区間の作り方（手続き）が 95% の確率で \\(\\mu\\) を捕まえる」と解釈します。<br>
      ③はデータの散らばりの範囲（予測区間や分位点）との混同、④は標本平均の分布との混同で、いずれも信頼区間の解釈としては誤りです。
    `
  },
  {
    id: 8,
    category: "区間推定",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      母分散既知の正規母集団に対する母平均の信頼係数 95% の信頼区間について、区間の幅を現在の半分にしたい。<br>
      信頼係数を変えない場合、サンプルサイズ \\(n\\) をおよそ何倍にすればよいか。<br>
      ① 2 倍<br>
      ② 4 倍<br>
      ③ \\(\\sqrt{2}\\) 倍<br>
      ④ 16 倍
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      信頼区間の幅は
      \\begin{align}
      2 \\times 1.96 \\times \\frac{\\sigma}{\\sqrt{n}}
      \\end{align}
      であり、\\(\\sqrt{n}\\) に反比例します。<br>
      幅を \\(\\frac{1}{2}\\) にするには \\(\\sqrt{n}\\) を 2 倍、すなわち \\(n\\) を <b>4 倍</b>にする必要があります。<br>
      「精度を2倍にするにはデータは4倍必要」という関係は、標本調査の設計でよく使われる重要な感覚です。
    `
  }
];