const allQuestions = [
  {
    id: 1,
    category: "分散分析",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      一元配置分散分析（ANOVA）における帰無仮説として、正しいものはどれか。<br>
      ① すべての群の母平均が等しい。<br>
      ② すべての群の母分散が等しい。<br>
      ③ 少なくとも1つの群の母平均が他と異なる。<br>
      ④ 少なくとも1つの群の母分散が他と異なる。<br>
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です．<br>
      <解説> <br>
      分散分析（ANOVA）は、3つ以上の群（水準）の平均値に差があるかどうかを検定する手法です。<br>
      帰無仮説 \\(H_0\\) は「すべての群の母平均が等しい（\\(\\mu_1 = \\mu_2 = \\dots = \\mu_k\\)）」となります。対立仮説 \\(H_1\\) は「少なくとも1つの群の母平均が異なる」です。
    `
  },
  {
    id: 2,
    category: "分散分析",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      3つの異なる指導法の効果を比較するため、各指導法につき 6人ずつ、合計 18人の生徒にテストを行った。このデータに対して一元配置分散分析を行う。<br>
      このとき、「群間（水準間）」の自由度と「群内」の自由度の組合せとして正しいものはどれか。<br>
      ① 群間: 2、群内: 15<br>
      ② 群間: 2、群内: 17<br>
      ③ 群間: 3、群内: 15<br>
      ④ 群間: 3、群内: 18<br>
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です．<br>
      <解説> <br>
      全体のサンプルサイズを \\(N\\)、群の数を \\(k\\) とします。本問では \\(N = 18\\)、\\(k = 3\\) です。<br>
      ・全体の自由度: \\(N - 1 = 18 - 1 = 17\\)<br>
      ・群間の自由度: \\(k - 1 = 3 - 1 = 2\\)<br>
      ・群内の自由度: \\(N - k = 18 - 3 = 15\\)<br>
      （群間の自由度 + 群内の自由度 = 全体の自由度 となります）
    `
  },
  {
    id: 3,
    category: "分散分析",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      あるデータに対して一元配置分散分析を行った。分散分析表の一部が以下の通りであるとき、検定統計量 F値 はいくらか。<br>
      ・群間の平方和: 80、自由度: 2<br>
      ・群内の平方和: 150、自由度: 15<br>
      ① 0.53<br>
      ② 1.88<br>
      ③ 4.0<br>
      ④ 8.0<br>
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です．<br>
      <解説> <br>
      F値は「群間の平均平方」を「群内の平均平方」で割ることで求められます。<br>
      まず、それぞれの平均平方（分散）を計算します。<br>
      ・群間の平均平方 = (群間の平方和) / (群間の自由度) = 80 / 2 = 40<br>
      ・群内の平均平方 = (群内の平方和) / (群内の自由度) = 150 / 15 = 10<br>
      したがって、F値は以下のようになります。<br>
      \\begin{align}
      F &= \\frac{\\text{群間の平均平方}}{\\text{群内の平均平方}} \\\\
      &= \\frac{40}{10} = 4.0
      \\end{align}
    `
  },
  {
    id: 4,
    category: "分散分析",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      二元配置分散分析において、2つの要因（例えば「温度」と「湿度」）が組み合わさることで、それぞれの単独の効果の和とは異なる特有の効果が生じることがある。<br>
      この効果を統計学の用語で何と呼ぶか。<br>
      ① ブロック効果<br>
      ② 交互作用<br>
      ③ 疑似相関<br>
      ④ 多重共線性
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です．<br>
      <解説> <br>
      二元配置分散分析では、個別の要因がもたらす効果を「主効果」、2つの要因の組合せによって生じる相乗的な効果を「交互作用（interaction）」と呼びます。<br>
      例えば、温度を上げること自体は効果がないが、湿度が高い条件下で温度を上げると急激な変化が起こる、といった場合は「温度と湿度の交互作用が有意である」と判断されます。
    `
  },
  {
    id: 5,
    category: "分散分析",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      4 つの群（各 6 人、合計 \\(N = 24\\)）のデータに一元配置分散分析を行ったところ、分散分析表の一部は次の通りであった。<br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm my-2'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>変動要因</th>
            <th class='border border-slate-300 p-1'>平方和</th>
            <th class='border border-slate-300 p-1'>自由度</th>
            <th class='border border-slate-300 p-1'>平均平方</th>
            <th class='border border-slate-300 p-1'>F値</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>群間</td>
            <td class='border border-slate-300 p-1'>90</td>
            <td class='border border-slate-300 p-1'>（ア）</td>
            <td class='border border-slate-300 p-1'>（イ）</td>
            <td class='border border-slate-300 p-1'>（オ）</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>群内</td>
            <td class='border border-slate-300 p-1'>（ウ）</td>
            <td class='border border-slate-300 p-1'>20</td>
            <td class='border border-slate-300 p-1'>（エ）</td>
            <td class='border border-slate-300 p-1'></td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>全体</td>
            <td class='border border-slate-300 p-1'>190</td>
            <td class='border border-slate-300 p-1'>23</td>
            <td class='border border-slate-300 p-1'></td>
            <td class='border border-slate-300 p-1'></td>
          </tr>
        </tbody>
      </table>
      このとき、F値（オ）はいくらか。<br>
      ① 1.5<br>
      ② 4.5<br>
      ③ 6.0<br>
      ④ 18.0
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      分散分析表の空欄を順に埋めていきます。<br>
      ・（ア）群間の自由度：群の数 \\(- 1 = 4 - 1 = 3\\)<br>
      ・（ウ）群内の平方和：全体 \\(-\\) 群間 \\(= 190 - 90 = 100\\)<br>
      ・（イ）群間の平均平方：\\(90 / 3 = 30\\)<br>
      ・（エ）群内の平均平方：\\(100 / 20 = 5\\)<br>
      よって、
      \\begin{align}
      F = \\frac{30}{5} = 6.0
      \\end{align}
      「平方和と自由度は足し算で分解できる」「平均平方 = 平方和 ÷ 自由度」「F = 群間の平均平方 ÷ 群内の平均平方」の3点を使えば、表の一部からすべての空欄が復元できます。この形式は試験でも頻出です。
    `
  },
  {
    id: 6,
    category: "分散分析",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      4 つの群の母平均を比較する際、「2 群ずつの \\(t\\) 検定を有意水準 5% で 6 回繰り返す」のではなく、分散分析を用いることが推奨される。その理由として最も適切なものはどれか。<br>
      ① 検定を繰り返すと、全体として第一種の過誤が起こる確率が名目の 5% を大きく超えてしまうから。<br>
      ② \\(t\\) 検定は 2 群の比較には使えないから。<br>
      ③ 分散分析の方が計算が簡単だから。<br>
      ④ 分散分析はサンプルサイズが小さくても常に正確な結果を与えるから。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      有意水準 5% の検定を独立に 6 回繰り返すと、「少なくとも1回はどこかで誤って有意になる」確率は
      \\begin{align}
      1 - 0.95^6 \\approx 0.26
      \\end{align}
      まで膨らみます。これを検定の多重性の問題と呼びます。<br>
      分散分析は「すべての群の母平均が等しい」という帰無仮説を<b>1回の \\(F\\) 検定</b>で判定するため、全体の第一種の過誤を有意水準以内にコントロールできます。<br>
      なお、分散分析で有意になった後に「どの群間に差があるか」を調べるには、多重比較法（テューキーの方法など）を使います。
    `
  }
];