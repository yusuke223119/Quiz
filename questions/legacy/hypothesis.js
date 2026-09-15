const allQuestions = [
  {
    id: 1,
    category: "仮説検定",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      仮説検定に関する次のア〜ウの言葉が表す語句の組み合わせとして正しいものを、下の表の1〜4から選べ。<br>
      <br>
      ア. 帰無仮説が正しいにも関わらず、帰無仮説を棄却すること。<br>
      イ. 帰無仮説が正しくないときに、正しく帰無仮説を棄却できる確率。<br>
      ウ. 帰無仮説が正しいと仮定した下で、実際に観測されたデータが得られる確率。<br>
      <br>
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
            <td class='border border-slate-300 p-1 bg-slate-50'>1</td>
            <td class='border border-slate-300 p-1'>第一種の過誤</td>
            <td class='border border-slate-300 p-1'>有意水準</td>
            <td class='border border-slate-300 p-1'>t値</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>2</td>
            <td class='border border-slate-300 p-1'>第一種の過誤</td>
            <td class='border border-slate-300 p-1'>検出力</td>
            <td class='border border-slate-300 p-1'>P値</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>3</td>
            <td class='border border-slate-300 p-1'>第二種の過誤</td>
            <td class='border border-slate-300 p-1'>検出力</td>
            <td class='border border-slate-300 p-1'>t値</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>4</td>
            <td class='border border-slate-300 p-1'>第二種の過誤</td>
            <td class='border border-slate-300 p-1'>有意水準</td>
            <td class='border border-slate-300 p-1'>P値</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["1", "2", "3", "4"],
    answer: "2",
    explanation: `
      正解は 2 です。<br>
      <br>
      <b>ア：第一種の過誤</b><br>
      実際には帰無仮説が真であるのに、誤ってこれを棄却してしまう「あわてんぼうの誤り」です。<br>
      <br>
      <b>イ：検出力</b><br>
      帰無仮説が偽である（対立仮説が真である）ときに、正しく帰無仮説を棄却できる確率です。第二種の過誤確率\\(\\beta\\)を用いて\\(1 - \\beta\\) と表記されます。<br>
      <br>
      <b>ウ：P値</b><br>
      帰無仮説が正しいと仮定したとき、手元のデータ以上に極端な結果が得られる確率です。この値が小さいほど、その結果は「偶然とは言い難い」と判断されます。
    `
  },
  {
    id: 2,
    category: "仮説検定",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      \\(X_1, \\dots, X_{100}\\) は正規分布 \\(N(\\mu, 25)\\) に従う確率変数とする。<br>
      このとき、標本平均は
      \\begin{equation}
      \\bar{X} = \\displaystyle\\frac{1}{100}\\sum_{i=1}^{100} X_i = 1
      \\end{equation}
      であった。ここで、<br>
      \\[
      H_0 : \\mu = 0 \\quad \\text{vs} \\quad H_1 : \\mu \\neq 0
      \\]
      の仮説検定を行う。なお有意水準は 5% とする。このとき、<br>
      \\begin{equation}
      Z = \\displaystyle\\frac{\\bar{X}-0}{\\sqrt{\\frac{25}{100}}}
      \\end{equation}
      は\\(\\boxed{\\text{(ア)}}\\)に従い、p値と有意水準の大小を比較することで、帰無仮説 \\(H_0\\) は\\(\\boxed{\\text{(イ)}}\\)される。<br>
      <br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-1'>ア</th>
            <th class='border border-slate-300 p-1'>イ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1</td>
            <td class='border border-slate-300 p-1'>\\(N(0, 1)\\)</td>
            <td class='border border-slate-300 p-1'>棄却</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>2</td>
            <td class='border border-slate-300 p-1'>\\(N(0, 1)\\)</td>
            <td class='border border-slate-300 p-1'>採択</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>3</td>
            <td class='border border-slate-300 p-1'>\\(N(0, 25)\\)</td>
            <td class='border border-slate-300 p-1'>棄却</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>4</td>
            <td class='border border-slate-300 p-1'>\\(N(0, 25)\\)</td>
            <td class='border border-slate-300 p-1'>採択</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["1", "2", "3", "4"],
    answer: "1",
    explanation: `
      正解は 1 です。<br>
      <br>
      <b>1. 統計量 Z の分布</b><br>
      標本平均 \\(\\bar{X}\\) は \\(N(\\mu, \\sigma^2/n)\\) に従います。ここでは \\(\\mu=0, \\sigma^2=25, n=100\\) なので、<br>
      \\(\\bar{X} \\sim N(0, 25/100)\\) です。<br>
      これを標準化した \\(Z = \\frac{\\bar{X}-0}{\\sqrt{25/100}}\\) は、標準正規分布 <b>\\(N(0, 1)\\)</b> に従います。<br>
      <br>
      <b>2. 検定の結果</b><br>
      実際に Z の値を計算すると：<br>
      \\(Z = \\frac{1-0}{5/10} = \\frac{1}{0.5} = 2\\)<br>
      有意水準 5% の両側検定における棄却限界値は 1.96 です。<br>
      \\(|Z| = 2 > 1.96\\) であるため、p値は 0.05 より小さくなり、帰無仮説は <b>棄却</b> されます。
    `
  },
  {
    id: 3,
    category: "仮説検定",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      \\(X_1, \\dots, X_9\\) は \\(N(0, \\sigma^2)\\) に従うとする。このとき、
      \\begin{equation}
      S^2 = \\displaystyle\\frac{1}{9}\\sum_{i=1}^{9} (X_i - \\bar{X})^2 = 6
      \\end{equation}
      であった。ここで、
      \\[
      H_0 : \\sigma^2 = 4 \\quad \\text{vs} \\quad H_1 : \\sigma^2 > 4
      \\]
      の片側検定を行う。ただし、有意水準は 5% とする。このとき、\\(H_0\\) の下で
      \\begin{equation}
      \\chi^2 = \\boxed{\\text{(ア)}}
      \\end{equation}
      は\\(\\boxed{\\text{(イ)}}\\)に従い、p値と有意水準を比べることによって、帰無仮説は\\(\\boxed{\\text{(ウ)}}\\)される。<br>
      <br>
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
            <td class='border border-slate-300 p-1 bg-slate-50'>1</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{9S^2}{\\sigma^2}\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\chi^2(9)\\)</td>
            <td class='border border-slate-300 p-1'>棄却</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>2</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{8S^2}{\\sigma^2}\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\chi^2(8)\\)</td>
            <td class='border border-slate-300 p-1'>採択</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>3</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{9S^2}{\\sigma^2}\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\chi^2(9)\\)</td>
            <td class='border border-slate-300 p-1'>棄却</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>4</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{8S^2}{\\sigma^2}\\)</td>
            <td class='border border-slate-300 p-1'>\\(\\chi^2(8)\\)</td>
            <td class='border border-slate-300 p-1'>採択</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["1", "2", "3", "4"],
    answer: "4",
    explanation: `
      正解は 4 です。<br>
      <br>
      <b>1. 検定統計量と分布（ア・イ）</b><br>
      標本分散 \\(S^2\\) と母分散 \\(\\sigma^2\\) の関係について、統計量 \\(\\frac{nS^2}{\\sigma^2}\\) は自由度 \\(n-1\\) のカイ二乗分布に従います。本問では \\(n=9\\) であるため、<br>
      \\[ \\chi^2 = \\frac{9S^2}{\\sigma^2} \\sim \\chi^2(8) \\]<br>
      に従います。<br>
      <br>
      <b>2. 検定の結果（ウ）</b><br>
      \\(H_0: \\sigma^2=4\\) の下で具体的な値を計算すると：<br>
      \\[ \\chi^2 = \\frac{9 \\times 6}{4} = \\frac{54}{4} = 13.5 \\]<br>
      自由度 8 のカイ二乗分布における上側 5% 点の値は統計数値表より 15.507 です。<br>
      \\(13.5 < 15.507\\) であるため、検定統計量は棄却域に入りません。したがって、p値は 0.05 より大きく、帰無仮説は採択されます。
    `
  },
  {
    id: 4,
    category: "仮説検定",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      ある飲料の表示内容量は 200mL である。この表示の正当性を確かめるため、統計的仮説検定を行う。<br>
      記述統計表は以下の通りであった。
      <table class='w-full border-collapse border border-slate-300 text-center text-sm my-2'>
        <tr class='bg-slate-100'>
          <th class='border border-slate-300 p-1'></th>
          <th class='border border-slate-300 p-1'>サンプル数</th>
          <th class='border border-slate-300 p-1'>平均値</th>
          <th class='border border-slate-300 p-1'>不偏分散</th>
        </tr>
        <tr>
          <td class='border border-slate-300 p-1 bg-slate-50'>内容量</td>
          <td class='border border-slate-300 p-1'>25</td>
          <td class='border border-slate-300 p-1'>199.2</td>
          <td class='border border-slate-300 p-1'>1.96</td>
        </tr>
      </table>
      この飲料の内容量は平均 \\(\\mu\\), 分散 \\(\\sigma^2\\) の正規分布に従うとする。このとき、仮説は
      \\[
      H_0 : \\mu = 200 \\quad \\text{vs} \\quad H_1 : \\mu \\neq 200
      \\]
      である。ここで、標本平均 \\(\\bar{X}\\), 標本不偏分散 \\(s^2\\), サンプル数 \\(n\\) を用いて、
      \\begin{equation}
      t = \\boxed{\\text{(ア)}}
      \\end{equation}
      は帰無仮説\\(H_0\\)の下で\\(\\boxed{\\text{(イ)}}\\)に従う。ゆえに、\\(t\\)値はおよそ\\(\\boxed{\\text{(ウ)}}\\)と計算でき、分布表を見ることにより帰無仮説 \\(H_0\\) は棄却される。
      <br><br>
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
            <td class='border border-slate-300 p-1 bg-slate-50'>1</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{\\bar{X}-\\mu}{\\sqrt{s^2/n}}\\)</td>
            <td class='border border-slate-300 p-1'>\\(t(n-1)\\)</td>
            <td class='border border-slate-300 p-1'>-2.85</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>2</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{\\bar{X}-\\mu}{\\sqrt{s^2/n}}\\)</td>
            <td class='border border-slate-300 p-1'>\\(t(n)\\)</td>
            <td class='border border-slate-300 p-1'>-2.85</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>3</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{\\bar{X}-\\mu}{s^2/\\sqrt{n-1}}\\)</td>
            <td class='border border-slate-300 p-1'>\\(t(n)\\)</td>
            <td class='border border-slate-300 p-1'>-2.91</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>4</td>
            <td class='border border-slate-300 p-1'>\\(\\displaystyle\\frac{\\bar{X}-\\mu}{s^2/\\sqrt{n-1}}\\)</td>
            <td class='border border-slate-300 p-1'>\\(t(n-1)\\)</td>
            <td class='border border-slate-300 p-1'>-2.91</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["1", "2", "3", "4"],
    answer: "1",
    explanation: `
      正解は 1 です。<br>
      <br>
      <b>1. 統計量の形と分布（ア・イ）</b><br>
      母分散が未知で、不偏分散 \\(s^2\\) を用いる場合、検定統計量は以下の形になります。
      \\[ t = \\frac{\\bar{X} - \\mu}{\\sqrt{s^2 / n}} \\]
      この統計量は、自由度 \\(n-1\\) の \\(t\\) 分布に従います。サンプル数が 25 なので、自由度は 24 です。<br>
      <br>
      <b>2. 計算値の確認（ウ）</b><br>
      与えられた数値を代入します：<br>
      ・\\(\\bar{X} - \\mu = 199.2 - 200 = -0.8\\)<br>
      ・\\(\\sqrt{s^2 / n} = \\sqrt{1.96 / 25} = \\frac{1.4}{5} = 0.28\\)<br>
      よって、\\(t = -0.8 / 0.28 \\approx -2.857\\) となり、選択肢の「-2.85」と一致します。<br>
      <br>
      <b>3. 判定</b><br>
      自由度 24 の \\(t\\) 分布において、両側 5% の棄却限界値は約 2.064 です。計算された \\(|-2.857|\\) はこれより大きいため、帰無仮説は棄却されます。
    `
  },
  {
    id: 5,
    category: "仮説検定",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      ある仮説検定を行ったところ、p値は 0.03 であった。有意水準を 5% とするとき、最も適切な記述はどれか。<br>
      ① 帰無仮説が正しい確率が 3% であることを意味する。<br>
      ② 帰無仮説の下で、観測された結果以上に極端な結果が得られる確率が 3% であり、有意水準 5% で帰無仮説は棄却される。<br>
      ③ 対立仮説が正しい確率が 97% であることを意味する。<br>
      ④ p値が 0 でない以上、帰無仮説は棄却できない。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      p値は「<b>帰無仮説が正しいと仮定したとき</b>に、実際に観測された結果と同等かそれ以上に極端な結果が得られる確率」です。<br>
      p値 \\(= 0.03 < 0.05 = \\) 有意水準なので、帰無仮説は棄却されます。<br>
      ①や③はよくある誤解です。p値は「仮説そのものが正しい確率」ではありません。仮説は確率変数ではないため、「帰無仮説が正しい確率」という量は（この枠組みでは）定義されないことに注意してください。
    `
  },
  {
    id: 6,
    category: "仮説検定",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      母分散が既知の正規母集団の母平均について、
      \\[
      H_0 : \\mu = \\mu_0 \\quad \\text{vs} \\quad H_1 : \\mu > \\mu_0
      \\]
      の片側検定を有意水準 5% で行う。検定統計量を \\(Z\\)（標準正規分布に従う）とするとき、棄却域として正しいものはどれか。<br>
      ① \\(|Z| > 1.96\\)<br>
      ② \\(Z > 1.645\\)<br>
      ③ \\(Z > 1.96\\)<br>
      ④ \\(Z < -1.645\\)
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      対立仮説が \\(\\mu > \\mu_0\\)（右片側）なので、棄却域は分布の右裾だけに設けます。<br>
      標準正規分布の上側 5% 点は 1.645 なので、棄却域は \\(Z > 1.645\\) です。<br>
      ①の \\(|Z| > 1.96\\) は<b>両側</b>検定（上下の裾に 2.5% ずつ）の棄却域です。片側か両側かで使う分位点が変わる点は頻出なので、上側5%点 1.645 と上側2.5%点 1.96 をセットで覚えておきましょう。
    `
  },
  {
    id: 7,
    category: "仮説検定",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      サンプルサイズを固定したまま、有意水準を 5% から 1% に変更した。このときに起こることとして、最も適切な記述はどれか。<br>
      ① 第一種の過誤の確率は小さくなるが、第二種の過誤の確率は大きくなる。<br>
      ② 第一種の過誤と第二種の過誤の確率が両方とも小さくなる。<br>
      ③ 第一種の過誤の確率は大きくなり、第二種の過誤の確率は小さくなる。<br>
      ④ 検出力が高くなる。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      有意水準 \\(\\alpha\\) は第一種の過誤（帰無仮説が正しいのに棄却する誤り）の確率そのものです。これを 5% → 1% に下げると、棄却域が狭くなるため帰無仮説は棄却されにくくなります。<br>
      その結果、対立仮説が正しい場合でも棄却できない確率、すなわち第二種の過誤の確率 \\(\\beta\\) は大きくなり、検出力 \\(1-\\beta\\) は低下します（④は誤り）。<br>
      サンプルサイズが一定のとき、\\(\\alpha\\) と \\(\\beta\\) はトレードオフの関係にあります。両方を同時に小さくするには、サンプルサイズを増やすしかありません。
    `
  },
  {
    id: 8,
    category: "仮説検定",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      9人の社員に研修を行い、研修前後のテストの得点差（後 − 前）\\(d_i\\) を調べたところ、差の平均は \\(\\bar{d} = 4\\)、差の不偏標準偏差は \\(s_d = 6\\) であった。得点差は正規分布に従うとする。<br>
      「研修前後で平均点に差がない」という帰無仮説
      \\[
      H_0 : \\mu_d = 0 \\quad \\text{vs} \\quad H_1 : \\mu_d \\neq 0
      \\]
      を有意水準 5% で検定するとき、検定統計量 \\(t\\) の値と結論の組み合わせとして正しいものはどれか。ただし、自由度 8 の \\(t\\) 分布の上側 2.5% 点は 2.306 である。<br>
      ① \\(t = 2.0\\)、帰無仮説は棄却される<br>
      ② \\(t = 2.0\\)、帰無仮説は棄却されない<br>
      ③ \\(t = 6.0\\)、帰無仮説は棄却される<br>
      ④ \\(t = 0.67\\)、帰無仮説は棄却されない
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      対応のあるデータでは、個体ごとの差 \\(d_i\\) をひとつの標本とみなして1標本の \\(t\\) 検定を行います。
      \\begin{align}
      t = \\frac{\\bar{d} - 0}{s_d / \\sqrt{n}} = \\frac{4}{6 / \\sqrt{9}} = \\frac{4}{2} = 2.0
      \\end{align}
      自由度は \\(n - 1 = 8\\) で、両側 5% の棄却限界値は 2.306 です。<br>
      \\(|t| = 2.0 < 2.306\\) なので棄却域に入らず、帰無仮説は棄却されません。「差の平均が 4 点ある」ように見えても、ばらつきとサンプルサイズを考慮すると統計的に有意とは言えない、という例です。
    `
  },
  {
    id: 9,
    category: "仮説検定",
    difficulty: 3,
    priority: 3,
    type: "選択式",
    question: `
      2つの独立なグループ A, B からそれぞれ \\(n_1 = 8\\)、\\(n_2 = 8\\) 人を抽出してテストを行ったところ、標本平均は \\(\\bar{X}_A = 58\\)、\\(\\bar{X}_B = 52\\) であった。両群の母集団は正規分布に従い、母分散は等しいと仮定する。プールした不偏分散は \\(s^2 = 16\\) と計算された。<br>
      「両群の母平均は等しい」という帰無仮説を有意水準 5% で両側検定するとき、検定統計量 \\(t\\) の値・自由度・結論の組み合わせとして正しいものはどれか。ただし、自由度 14 の \\(t\\) 分布の上側 2.5% 点は 2.145 である。<br>
      ① \\(t = 3.0\\)、自由度 14、帰無仮説は棄却される<br>
      ② \\(t = 3.0\\)、自由度 16、帰無仮説は棄却される<br>
      ③ \\(t = 1.5\\)、自由度 14、帰無仮説は棄却されない<br>
      ④ \\(t = 1.06\\)、自由度 14、帰無仮説は棄却されない
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      等分散を仮定した2標本 \\(t\\) 検定の統計量は次の通りです。
      \\begin{align}
      t = \\frac{\\bar{X}_A - \\bar{X}_B}{\\sqrt{s^2 \\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}
        = \\frac{58 - 52}{\\sqrt{16 \\left(\\frac{1}{8} + \\frac{1}{8}\\right)}}
        = \\frac{6}{\\sqrt{4}} = 3.0
      \\end{align}
      自由度は \\(n_1 + n_2 - 2 = 8 + 8 - 2 = 14\\) です（平均を2つ推定しているため 2 を引きます）。<br>
      \\(|t| = 3.0 > 2.145\\) なので、帰無仮説は棄却され、両群の母平均には有意な差があると判断されます。
    `
  },
  {
    id: 10,
    category: "仮説検定",
    difficulty: 3,
    priority: 3,
    type: "選択式",
    question: `
      ある政策への賛成率を調べるため、地域 A では 100 人中 40 人、地域 B では 100 人中 55 人が賛成と回答した。<br>
      「両地域の母比率は等しい（\\(H_0: p_A = p_B\\)）」を有意水準 5% で両側検定する。プールした標本比率 \\(\\hat{p} = \\frac{40+55}{200} = 0.475\\) を用いるとき、検定統計量 \\(Z\\) のおよその値と結論の組み合わせとして正しいものはどれか。<br>
      ① \\(Z \\approx 1.50\\)、帰無仮説は棄却されない<br>
      ② \\(Z \\approx 2.12\\)、帰無仮説は棄却される<br>
      ③ \\(Z \\approx 2.12\\)、帰無仮説は棄却されない<br>
      ④ \\(Z \\approx 3.00\\)、帰無仮説は棄却される
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      母比率の差の検定では、帰無仮説の下で比率が共通と考え、プールした比率 \\(\\hat{p}\\) で標準誤差を計算します。
      \\begin{align}
      Z &= \\frac{\\hat{p}_B - \\hat{p}_A}{\\sqrt{\\hat{p}(1-\\hat{p})\\left(\\frac{1}{n_A} + \\frac{1}{n_B}\\right)}} \\\\
        &= \\frac{0.55 - 0.40}{\\sqrt{0.475 \\times 0.525 \\times \\left(\\frac{1}{100} + \\frac{1}{100}\\right)}} \\\\
        &= \\frac{0.15}{\\sqrt{0.0049875}} \\approx \\frac{0.15}{0.0706} \\approx 2.12
      \\end{align}
      \\(|Z| = 2.12 > 1.96\\)（両側 5% 点）なので、帰無仮説は棄却され、両地域の賛成率には有意な差があると判断されます。
    `
  },
  {
    id: 11,
    category: "仮説検定",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      あるサイコロを 60 回投げたところ、各目の出た回数は次の通りであった。<br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm my-2'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>目</th>
            <th class='border border-slate-300 p-1'>1</th>
            <th class='border border-slate-300 p-1'>2</th>
            <th class='border border-slate-300 p-1'>3</th>
            <th class='border border-slate-300 p-1'>4</th>
            <th class='border border-slate-300 p-1'>5</th>
            <th class='border border-slate-300 p-1'>6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>観測度数</td>
            <td class='border border-slate-300 p-1'>5</td>
            <td class='border border-slate-300 p-1'>10</td>
            <td class='border border-slate-300 p-1'>15</td>
            <td class='border border-slate-300 p-1'>10</td>
            <td class='border border-slate-300 p-1'>10</td>
            <td class='border border-slate-300 p-1'>10</td>
          </tr>
        </tbody>
      </table>
      「どの目も等しい確率 \\(1/6\\) で出る」という帰無仮説の適合度検定を行うとき、カイ二乗統計量 \\(\\chi^2\\) の値と自由度の組み合わせとして正しいものはどれか。<br>
      ① \\(\\chi^2 = 5.0\\)、自由度 5<br>
      ② \\(\\chi^2 = 5.0\\)、自由度 6<br>
      ③ \\(\\chi^2 = 2.5\\)、自由度 5<br>
      ④ \\(\\chi^2 = 50\\)、自由度 5
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      帰無仮説の下での期待度数は、どの目も \\(60 \\times \\frac{1}{6} = 10\\) 回です。カイ二乗統計量は
      \\begin{align}
      \\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i} = \\frac{(5-10)^2}{10} + \\frac{(15-10)^2}{10} + 0 + 0 + 0 + 0 = 2.5 + 2.5 = 5.0
      \\end{align}
      自由度はカテゴリ数 \\(-1 = 6 - 1 = 5\\) です。<br>
      参考：自由度 5 のカイ二乗分布の上側 5% 点は 11.07 なので、\\(\\chi^2 = 5.0 < 11.07\\) となり、この結果からは「サイコロに偏りがある」とは言えません。
    `
  },
  {
    id: 12,
    category: "仮説検定",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      喫煙の有無とある疾患の有無について、100 人分のデータを 2×2 のクロス表に集計した。行の合計（喫煙あり／なし）はそれぞれ 50 人、列の合計（疾患あり／なし）はそれぞれ 40 人と 60 人であった。<br>
      このクロス表に対して独立性のカイ二乗検定を行うとき、「喫煙あり かつ 疾患あり」のセルの期待度数と、検定の自由度の組み合わせとして正しいものはどれか。<br>
      ① 期待度数 20、自由度 1<br>
      ② 期待度数 20、自由度 4<br>
      ③ 期待度数 25、自由度 1<br>
      ④ 期待度数 10、自由度 2
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      独立性の検定における期待度数は「（行の合計 × 列の合計）÷ 総計」で計算します。
      \\begin{align}
      E = \\frac{50 \\times 40}{100} = 20
      \\end{align}
      自由度は（行数 \\(-1\\)）×（列数 \\(-1\\)）\\(= (2-1)(2-1) = 1\\) です。<br>
      \\(r \\times c\\) のクロス表の自由度が \\((r-1)(c-1)\\) になるのは、行と列の合計（周辺度数）が固定されているとき、自由に決められるセルの数がそれだけしかないためです。
    `
  },
  {
    id: 13,
    category: "仮説検定",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      仮説検定の検出力（\\(1 - \\beta\\)）を高める方法として、最も適切なものはどれか。ただし、他の条件は一定とする。<br>
      ① サンプルサイズを大きくする。<br>
      ② 有意水準を 5% から 1% に下げる。<br>
      ③ 測定のばらつき（誤差分散）が大きくなるように測定方法を変える。<br>
      ④ 真の効果（母平均の差）が小さいほど検出力は自動的に高くなるので、何もしなくてよい。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      検出力は「対立仮説が正しいときに、正しく帰無仮説を棄却できる確率」です。検出力を決める主な要素は次の4つです。<br>
      ・サンプルサイズ \\(n\\)：大きいほど検出力は<b>上がる</b>（①が正解）<br>
      ・有意水準 \\(\\alpha\\)：小さくすると検出力は<b>下がる</b>（②は逆効果）<br>
      ・ばらつき \\(\\sigma\\)：大きいほど検出力は<b>下がる</b>（③は逆効果）<br>
      ・効果の大きさ：真の差が大きいほど検出力は<b>上がる</b>（④は逆）<br>
      実験計画の段階で、目標とする検出力（例：80%）から必要なサンプルサイズを逆算するのが標準的な手順です。
    `
  },
  {
    id: 14,
    category: "仮説検定",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      ある検定を有意水準 5% で行ったところ、p値は 0.30 となり帰無仮説は棄却されなかった。この結果の解釈として最も適切なものはどれか。<br>
      ① 帰無仮説が正しいことが証明された。<br>
      ② 帰無仮説を棄却するだけの十分な証拠が得られなかった、としか言えない。<br>
      ③ 対立仮説が誤りであることが示された。<br>
      ④ p値が 0.05 の 6 倍なので、帰無仮説が正しい可能性は対立仮説の 6 倍である。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      仮説検定は「帰無仮説を棄却できるかどうか」を判断する枠組みであり、棄却されなかったからといって帰無仮説が正しいと<b>証明</b>されるわけではありません。<br>
      サンプルサイズが小さくて検出力が不足していただけかもしれず、「差がない」と「差があるとは言えない」は別物です。<br>
      このため、結論は「有意差は認められなかった」という消極的な表現にとどめるのが正しい姿勢です。④のようにp値の比を仮説の確からしさの比と解釈することはできません。
    `
  }
];