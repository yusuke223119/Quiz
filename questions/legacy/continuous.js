const allQuestions = [
  {
    id: 1,
    category: "連続型確率分布",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      確率変数 \\( X \\) は正規分布 \\( \\mathcal{N}(3,4) \\) に従うとする．このとき，確率 \\(\\mathrm{P}(-3\\le X \\le 1)\\) はいくらか．<br>
      ① 0.16<br>
      ② 0.25<br>
      ③ 0.40<br>
      ④ 0.63<br>
      ⑤ 0.88
    `,
    choices: ["①", "②", "③","④","⑤"],
    answer: "①",
    explanation: `
      正解は①です．<br>
      <解説> <br>
      \\( X \\) の期待値は 3, 分散は 2 より，標準化した\\( Z = \\frac{X-3}{2} \\)は \\( \\mathcal{N}(0,1) \\) に従う. したがって，<br>
      \\begin{align}
      \\mathrm{P}(-3\\le X\\le 1) &= \\mathrm{P}(-3 \\le Z \\le -1) \\\\
        &= \\mathrm{P}(1 \\le Z \\le 3) \\\\
        &= Q(1)-Q(3) \\\\
        &= 0.1587 - 0.0013 \\\\
        &= 0.1574 \\approx 0.16 ,
      \\end{align}
      ただし，\\(Q\\) は標準正規分布の上側確率とする．
      `
  },
  {
    id: 2,
    category: "連続型確率分布",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      1時間に患者が平均5人訪れる病院において，次の患者が訪れるまでの時間をXとし，指数分布に従うとする．<br>
      8分以内に次の患者が訪れる確率はいくらか．以下の表を用いてもよい．<br>
      ① 0.24<br>
      ② 0.39<br>
      ③ 0.49<br>
      ④ 0.55<br>
      ⑤ 0.70
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>\\(x\\)</th>
            <th class='border border-slate-300 p-1'>\\(e^{-x}\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1/3</td>
            <td class='border border-slate-300 p-1'>0.7165</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1/2</td>
            <td class='border border-slate-300 p-1'>0.6065</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>2/3</td>
            <td class='border border-slate-300 p-1'>0.5134</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1</td>
            <td class='border border-slate-300 p-1'>0.3679</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>4/3</td>
            <td class='border border-slate-300 p-1'>0.2636</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>3/2</td>
            <td class='border border-slate-300 p-1'>0.2231</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["①", "②", "③","④","⑤"],
    answer: "③",
    explanation: `
      正解は③です．<br>
      <解説> <br>
      \\(X\\) が指数分布 \\(\\mathrm{Exp}(\\lambda)\\) に従うとき，これは単位時間当たりのある事象の平均発生回数 \\(\\lambda\\) に対して，次に事象が発生するまでの待ち時間 \\(X\\) をモデル化するときによく用いられる．このとき，<br>
      \\begin{align}
      \\mathrm{E}[X] &= 1/\\lambda, \\\\
      \\mathrm{Var}[X] &= 1/\\lambda^2, \\\\
      f(x|\\lambda) &= \\lambda e^{-\\lambda x},\\ x\\ge 0,\\\\
      P(X\\ge x) &= 1-e^{-\\lambda x}
      \\end{align}
      が成り立つ．ただし，\\(f(x|\\lambda)\\) は \\(X\\) の確率密度関数．本問題では \\(\\lambda = 5\\) とすればよい．よって，求める確率は
      \\begin{align}
      \\mathrm{P}(X\\le 8/60) &= 1-e^{-5\\times 8/60} \\\\
      &= 1-e^{-4/3} \\\\
      &\\approx 1-0.5134 \\approx 0.49.
      \\end{align}
      `
  },
  {
    id: 3,
    category: "連続型確率分布",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      確率変数 \\(Z\\) が標準正規分布 \\(\\mathcal{N}(0,1)\\) に従うとき、確率 \\(\\mathrm{P}(Z \\ge 1.96)\\) の値として最も近いものはどれか。<br>
      ① 0.050<br>
      ② 0.025<br>
      ③ 0.975<br>
      ④ 0.005
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      標準正規分布表（上側確率）で \\(z = 1.96\\) を引くと 0.025 です。<br>
      これは「上側 2.5% 点が 1.96」であることを意味し、両側合わせて 5% となるため、信頼係数 95% の区間推定や有意水準 5% の両側検定で最も頻繁に使う数値です。<br>
      あわせて「上側 5% 点は 1.645」も覚えておくと、片側検定や信頼係数 90% の問題に即答できます。
    `
  },
  {
    id: 4,
    category: "連続型確率分布",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      ある工場で作られる製品の重さ \\(X\\)（g）は正規分布 \\(\\mathcal{N}(50, 10^2)\\) に従う。<br>
      重さが 65g 以上になる確率として最も近いものはどれか。統計数値表を用いてよい。<br>
      ① 0.0668<br>
      ② 0.9332<br>
      ③ 0.1587<br>
      ④ 0.0228
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      標準化を行います。
      \\begin{align}
      Z = \\frac{X - 50}{10} \\quad \\Rightarrow \\quad \\mathrm{P}(X \\ge 65) = \\mathrm{P}\\left(Z \\ge \\frac{65-50}{10}\\right) = \\mathrm{P}(Z \\ge 1.5)
      \\end{align}
      標準正規分布表より \\(\\mathrm{P}(Z \\ge 1.5) = 0.0668\\) です。<br>
      ②の 0.9332 は「65g 以下」の確率、③は \\(z=1\\)、④は \\(z=2\\) のときの上側確率です。
    `
  },
  {
    id: 5,
    category: "連続型確率分布",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(X\\) は区間 \\([0, 10]\\) 上の一様分布に従う。<br>
      確率 \\(\\mathrm{P}(2 \\le X \\le 5)\\) の値はいくらか。<br>
      ① 0.2<br>
      ② 0.3<br>
      ③ 0.5<br>
      ④ 0.7
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      一様分布では、確率は区間の長さに比例します。全体の長さが \\(10 - 0 = 10\\)、求める区間の長さが \\(5 - 2 = 3\\) なので、
      \\begin{align}
      \\mathrm{P}(2 \\le X \\le 5) = \\frac{3}{10} = 0.3
      \\end{align}
      となります。確率密度関数が \\(f(x) = \\frac{1}{10}\\)（\\(0 \\le x \\le 10\\)）の長方形であることをイメージすると分かりやすいです。
    `
  },
  {
    id: 6,
    category: "連続型確率分布",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(X\\) が区間 \\([a, b]\\) 上の一様分布に従うとき、期待値 \\(\\mathrm{E}[X]\\) と分散 \\(\\mathrm{Var}[X]\\) の組合せとして正しいものはどれか。<br>
      ① \\(\\mathrm{E}[X] = \\frac{a+b}{2}\\)、\\(\\mathrm{Var}[X] = \\frac{(b-a)^2}{12}\\)<br>
      ② \\(\\mathrm{E}[X] = \\frac{a+b}{2}\\)、\\(\\mathrm{Var}[X] = \\frac{(b-a)^2}{6}\\)<br>
      ③ \\(\\mathrm{E}[X] = \\frac{b-a}{2}\\)、\\(\\mathrm{Var}[X] = \\frac{(b-a)^2}{12}\\)<br>
      ④ \\(\\mathrm{E}[X] = \\frac{b-a}{2}\\)、\\(\\mathrm{Var}[X] = \\frac{(a+b)^2}{6}\\)
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      一様分布 \\(U(a, b)\\) の期待値は区間の中央
      \\begin{align}
      \\mathrm{E}[X] = \\frac{a+b}{2}
      \\end{align}
      であり、分散は
      \\begin{align}
      \\mathrm{Var}[X] = \\frac{(b-a)^2}{12}
      \\end{align}
      です。「期待値は<b>和</b>を2で割る、分散は<b>幅の2乗</b>を12で割る」と覚えましょう。分母の 12 は導出すると積分計算から自然に出てくる値で、統計検定2級では公式として頻出です。
    `
  },
  {
    id: 7,
    category: "連続型確率分布",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      指数分布に従う待ち時間 \\(X\\) には、「すでに 10 分待ったという条件の下で、さらに 5 分以上待つ確率は、最初から 5 分以上待つ確率と等しい」という性質がある。<br>
      この性質を何と呼ぶか。<br>
      ① 無記憶性<br>
      ② 再生性<br>
      ③ 不偏性<br>
      ④ 一致性
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      指数分布の「無記憶性」は、式では次のように表されます。
      \\begin{align}
      \\mathrm{P}(X > s + t \\mid X > s) = \\mathrm{P}(X > t)
      \\end{align}
      「これまでどれだけ待ったか」という履歴が将来に影響しない、という性質です。連続型では指数分布、離散型では幾何分布だけがこの性質を持ちます。<br>
      ②の再生性は「同じ族の分布に従う独立な変数の和が、また同じ族の分布に従う」性質（正規分布・ポアソン分布などが持つ）で、別の概念です。
    `
  },
  {
    id: 8,
    category: "連続型確率分布",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      確率変数 \\(X \\sim \\mathcal{N}(1, 4)\\)、\\(Y \\sim \\mathcal{N}(2, 9)\\) が互いに独立であるとき、和 \\(X + Y\\) が従う分布はどれか。<br>
      ① \\(\\mathcal{N}(3, 13)\\)<br>
      ② \\(\\mathcal{N}(3, 5)\\)<br>
      ③ \\(\\mathcal{N}(3, 36)\\)<br>
      ④ \\(\\mathcal{N}(2, 13)\\)
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      正規分布には再生性があり、独立な正規変数の和はまた正規分布に従います。<br>
      期待値は和：\\(\\mathrm{E}[X+Y] = 1 + 2 = 3\\)<br>
      分散も（独立なら）和：\\(\\mathrm{Var}[X+Y] = 4 + 9 = 13\\)<br>
      よって \\(X + Y \\sim \\mathcal{N}(3, 13)\\) です。<br>
      ②は分散ではなく標準偏差（2 と 3）を足してしまった誤りです。なお、差 \\(X - Y\\) の場合も分散は<b>足し算</b>になり \\(\\mathcal{N}(-1, 13)\\) となる点に注意してください。
    `
  },
  {
    id: 9,
    category: "連続型確率分布",
    difficulty: 3,
    priority: 3,
    type: "選択式",
    question: `
      ある試験の得点 \\(X\\) は正規分布 \\(\\mathcal{N}(60, 15^2)\\) に従う。<br>
      上位 10% に入るために必要な最低点として最も近いものはどれか。ただし、標準正規分布の上側 10% 点は 1.28 である。<br>
      ① 75.0 点<br>
      ② 79.2 点<br>
      ③ 84.6 点<br>
      ④ 88.2 点
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      上位 10% に入る境界の点数を \\(x\\) とすると、標準化した値が上側 10% 点の 1.28 に一致します。
      \\begin{align}
      \\frac{x - 60}{15} = 1.28 \\quad \\Rightarrow \\quad x = 60 + 1.28 \\times 15 = 60 + 19.2 = 79.2
      \\end{align}
      このように「確率（割合）から逆に境界値を求める」タイプの問題では、分布表を逆向きに引いて \\(z\\) を求め、\\(x = \\mu + z\\sigma\\) で元のスケールに戻します。
    `
  },
  {
    id: 10,
    category: "連続型確率分布",
    difficulty: 3,
    priority: 2,
    type: "選択式",
    question: `
      2つの確率変数の「独立」と「無相関」の関係について、最も適切な記述はどれか。<br>
      ① どんな確率変数でも、無相関ならば独立である。<br>
      ② 独立ならば無相関である。さらに、2変量正規分布に従う場合に限っては、無相関ならば独立も成り立つ。<br>
      ③ 独立であっても無相関になるとは限らない。<br>
      ④ 相関係数が 0 であることと独立であることは、常に同値である。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      一般に「独立 \\(\\Rightarrow\\) 無相関」は常に成り立ちますが、逆の「無相関 \\(\\Rightarrow\\) 独立」は一般には成り立ちません（例：\\(X\\) と \\(X^2\\) は無相関になり得るが独立ではない）。<br>
      ただし、\\((X, Y)\\) が<b>2変量正規分布</b>に従う場合は特別で、無相関（\\(\\rho = 0\\)）ならば独立であることが示せます。<br>
      「正規分布のときだけ逆も成り立つ」という点が試験で問われるポイントです。
    `
  }
];