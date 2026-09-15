const allQuestions = [
  {
    id: 1,
    category: "確率の基礎",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      事象 \\(A, B\\) について、\\(\\mathrm{P}(A) = 0.4\\)、\\(\\mathrm{P}(B) = 0.5\\)、\\(\\mathrm{P}(A \\cap B) = 0.2\\) であるとき、\\(\\mathrm{P}(A \\cup B)\\) の値はいくらか。<br>
      ① 0.7<br>
      ② 0.9<br>
      ③ 0.2<br>
      ④ 0.1
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      加法定理を用います。
      \\begin{align}
      \\mathrm{P}(A \\cup B) = \\mathrm{P}(A) + \\mathrm{P}(B) - \\mathrm{P}(A \\cap B) = 0.4 + 0.5 - 0.2 = 0.7
      \\end{align}
      単純に足すと \\(A \\cap B\\) の部分を二重に数えてしまうため、共通部分を1回分引く必要があります。②の 0.9 はこの引き算を忘れた誤りです。
    `
  },
  {
    id: 2,
    category: "確率の基礎",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      事象 \\(A, B\\) について、\\(\\mathrm{P}(A \\cap B) = 0.12\\)、\\(\\mathrm{P}(B) = 0.3\\) であるとき、条件付き確率 \\(\\mathrm{P}(A \\mid B)\\) の値はいくらか。<br>
      ① 0.036<br>
      ② 0.18<br>
      ③ 0.4<br>
      ④ 2.5
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      条件付き確率の定義より
      \\begin{align}
      \\mathrm{P}(A \\mid B) = \\frac{\\mathrm{P}(A \\cap B)}{\\mathrm{P}(B)} = \\frac{0.12}{0.3} = 0.4
      \\end{align}
      「\\(B\\) が起きたという条件の下での \\(A\\) の確率」は、\\(B\\) の世界に視野を狭めて、その中で \\(A \\cap B\\) が占める割合を測るイメージです。<br>
      ④のように 1 を超える値が出たら、分母と分子を取り違えています。
    `
  },
  {
    id: 3,
    category: "確率の基礎",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      事象 \\(A, B\\) は独立であり、\\(\\mathrm{P}(A) = 0.3\\)、\\(\\mathrm{P}(B) = 0.4\\) であるとする。<br>
      このとき、\\(\\mathrm{P}(A \\cup B)\\) の値はいくらか。<br>
      ① 0.7<br>
      ② 0.58<br>
      ③ 0.12<br>
      ④ 0.42
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      独立な事象では乗法定理が単純な積になります。
      \\begin{align}
      \\mathrm{P}(A \\cap B) = \\mathrm{P}(A)\\,\\mathrm{P}(B) = 0.3 \\times 0.4 = 0.12
      \\end{align}
      これを加法定理に代入して、
      \\begin{align}
      \\mathrm{P}(A \\cup B) = 0.3 + 0.4 - 0.12 = 0.58
      \\end{align}
      ①の 0.7 は独立性を使わずにそのまま足した誤りです。「独立」と「排反（同時に起こらない）」は別の概念であることに注意しましょう。排反なら \\(\\mathrm{P}(A \\cap B) = 0\\) ですが、独立ならむしろ \\(\\mathrm{P}(A \\cap B) > 0\\) です。
    `
  },
  {
    id: 4,
    category: "確率の基礎",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      袋の中に赤玉 3 個と白玉 2 個が入っている。玉を戻さずに（非復元で）2 個続けて取り出すとき、2 個とも赤玉である確率はいくらか。<br>
      ① 0.36<br>
      ② 0.30<br>
      ③ 0.60<br>
      ④ 0.15
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      乗法定理を用います。1個目が赤である確率は \\(\\frac{3}{5}\\)。赤を1個取り出した後は「赤2個・白2個の計4個」が残るので、2個目も赤である条件付き確率は \\(\\frac{2}{4}\\) です。
      \\begin{align}
      \\mathrm{P}(\\text{赤赤}) = \\frac{3}{5} \\times \\frac{2}{4} = \\frac{6}{20} = 0.30
      \\end{align}
      ①の 0.36 は \\(\\frac{3}{5} \\times \\frac{3}{5}\\)、すなわち玉を<b>戻す</b>（復元抽出の）場合の答えです。復元か非復元かで2回目の確率が変わる点がポイントです。
    `
  },
  {
    id: 5,
    category: "確率の基礎",
    difficulty: 3,
    priority: 3,
    type: "選択式",
    question: `
      ある病気の有病率は 1% である。この病気の検査は、病気の人に対しては 90% の確率で陽性となり（感度）、病気でない人に対しても 10% の確率で誤って陽性となる（偽陽性）。<br>
      ある人がこの検査で陽性となったとき、実際に病気である確率として最も近いものはどれか。<br>
      ① 約 90%<br>
      ② 約 50%<br>
      ③ 約 8%<br>
      ④ 約 1%
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      病気である事象を \\(D\\)、陽性となる事象を \\(+\\) として、ベイズの定理を使います。
      \\begin{align}
      \\mathrm{P}(D \\mid +) = \\frac{\\mathrm{P}(+ \\mid D)\\,\\mathrm{P}(D)}{\\mathrm{P}(+ \\mid D)\\,\\mathrm{P}(D) + \\mathrm{P}(+ \\mid D^c)\\,\\mathrm{P}(D^c)}
      \\end{align}
      数値を代入すると、
      \\begin{align}
      \\mathrm{P}(D \\mid +) = \\frac{0.9 \\times 0.01}{0.9 \\times 0.01 + 0.1 \\times 0.99} = \\frac{0.009}{0.009 + 0.099} = \\frac{0.009}{0.108} \\approx 0.083
      \\end{align}
      検査の精度が 90% でも、有病率が 1% と低いために「陽性者の大半は偽陽性」となり、実際に病気である確率は約 8% にとどまります。直感に反するベイズの定理の代表例で、試験でも頻出です。
    `
  },
  {
    id: 6,
    category: "確率の基礎",
    difficulty: 3,
    priority: 3,
    type: "選択式",
    question: `
      ある製品は工場 A で全体の 60%、工場 B で全体の 40% が生産されている。不良品の発生率は工場 A で 1%、工場 B で 2% である。<br>
      製品全体から1個を無作為に選んだところ不良品であった。この不良品が工場 A で生産されたものである確率として最も近いものはどれか。<br>
      ① 0.30<br>
      ② 0.43<br>
      ③ 0.57<br>
      ④ 0.60
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      不良品である事象を \\(F\\) として、ベイズの定理を使います。<br>
      各工場由来の不良品の割合は、<br>
      工場 A：\\(0.6 \\times 0.01 = 0.006\\)<br>
      工場 B：\\(0.4 \\times 0.02 = 0.008\\)<br>
      よって、
      \\begin{align}
      \\mathrm{P}(A \\mid F) = \\frac{0.006}{0.006 + 0.008} = \\frac{6}{14} = \\frac{3}{7} \\approx 0.43
      \\end{align}
      生産シェアでは工場 A が多数派（60%）ですが、不良率が低いため、「不良品である」という情報を得たあとの確率（事後確率）は 43% まで下がります。事前確率が観測情報によって更新される、というベイズの定理の考え方そのものです。
    `
  }
];
