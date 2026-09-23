// 分野09. 時系列データの処理
const allQuestions = [
  {
    id: 1,
    category: "時系列データの処理",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      ある企業の年間売上高が、次のように推移した。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>年</th>
            <th class='border border-slate-300 p-1'>売上高（百万円）</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class='border border-slate-300 p-1'>2022年</td><td class='border border-slate-300 p-1'>100</td></tr>
          <tr><td class='border border-slate-300 p-1'>2023年</td><td class='border border-slate-300 p-1'>120</td></tr>
          <tr><td class='border border-slate-300 p-1'>2024年</td><td class='border border-slate-300 p-1'>114</td></tr>
          <tr><td class='border border-slate-300 p-1'>2025年</td><td class='border border-slate-300 p-1'>125.4</td></tr>
        </tbody>
      </table>
      <br>
      2023年から2024年にかけての売上高の成長率として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① −6%<br>
      ② −5%<br>
      ③ 5%<br>
      ④ 95%
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本公式</b><br>
      ある時点から次の時点への成長率は
      \\[
        成長率 = \\frac{\\text{新しい値} - \\text{元の値}}{\\text{元の値}} \\times 100
      \\]
      によって求められます。また、
      \\[
        \\frac{\\text{新しい値}}{\\text{元の値}}
      \\]
      は成長率そのものではなく、元の値に対する倍率を表します。例えば倍率が0.95なら、新しい値は元の値の95%であり、成長率は \\(-5\\%\\) です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      2023年の売上高は120百万円、2024年は114百万円です。したがって、
      \\[
        \\frac{114 - 120}{120} \\times 100 = \\frac{-6}{120} \\times 100 = -5\\%
      \\]
      よって、2023年から2024年にかけて売上高は5%減少しています。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：売上高は6百万円減少していますが、6は減少率ではなく減少額です。元の120百万円で割る必要があります。<br>
      ・<b>② 正しい</b>：\\((114 - 120) / 120 \\times 100 = -5\\%\\) です。<br>
      ・<b>③ 誤り</b>：変化の大きさは5%ですが、売上高は減少しているため符号は負となります。<br>
      ・<b>④ 誤り</b>：\\(114 / 120 \\times 100 = 95\\%\\) は2024年の売上高が2023年の95%であることを表します。成長率は \\(95\\% - 100\\% = -5\\%\\) です。
    `
  },
  {
    id: 2,
    category: "時系列データの処理",
    difficulty: 2,
    priority: 1,
    type: "選択式",
    question: `
      ある商品の年間販売額は、2022年から2024年にかけて次のように推移した。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>年</th>
            <th class='border border-slate-300 p-1'>販売額（百万円）</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class='border border-slate-300 p-1'>2022年</td><td class='border border-slate-300 p-1'>100</td></tr>
          <tr><td class='border border-slate-300 p-1'>2023年</td><td class='border border-slate-300 p-1'>120</td></tr>
          <tr><td class='border border-slate-300 p-1'>2024年</td><td class='border border-slate-300 p-1'>90</td></tr>
        </tbody>
      </table>
      <br>
      2022年から2024年まで、毎年一定の率で販売額が変化したと仮定したとき、実際の2024年の販売額と一致する1年あたりの平均成長率として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 約 −10.0%<br>
      ② 約 −5.1%<br>
      ③ −2.5%<br>
      ④ 5.0%
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本公式</b><br>
      複数期間にわたる平均成長率を求める場合、各期間の成長率を単純に算術平均するのではなく、成長倍率の<b>幾何平均</b>を用います。2期間の成長倍率を \\(r_1\\)、\\(r_2\\) とすると、平均成長倍率は
      \\[
        \\sqrt{r_1 \\times r_2}
      \\]
      です。平均成長倍率から1を引けば、1期間あたりの平均成長率が得られます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      ・2022年から2023年の成長倍率：
      \\[
        \\frac{120}{100} = 1.20
      \\]
      ・2023年から2024年の成長倍率：
      \\[
        \\frac{90}{120} = 0.75
      \\]
      ・平均成長倍率：
      \\[
        \\sqrt{1.20 \\times 0.75} = \\sqrt{0.90} \\approx 0.949
      \\]
      ・よって平均成長率は
      \\[
        0.949 - 1 \\approx -0.051
      \\]
      すなわち約 \\(-5.1\\%\\) です。実際、
      \\[
        100 \\times 0.949^2 \\approx 90
      \\]
      となり、2024年の販売額とほぼ一致します。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：2022年の100から2024年の90への全期間での変化率は \\(-10\\%\\) ですが、これは1年あたりの平均成長率ではありません。<br>
      ・<b>② 正しい</b>：成長倍率の幾何平均 \\(\\sqrt{1.20 \\times 0.75}\\) から1を引くと、約 \\(-5.1\\%\\) となります。<br>
      ・<b>③ 誤り</b>：2022年から2023年は20%増、2023年から2024年は25%減なので、その算術平均をとると \\((20\\% - 25\\%) / 2 = -2.5\\%\\) となります。しかし、成長率は乗法的に累積するため、単純な算術平均では適切な平均成長率になりません。<br>
      ・<b>④ 誤り</b>：1年あたり5%増加すると、2年間で販売額は100より大きくなるため、2024年の90とは一致しません。
    `
  },
  {
    id: 3,
    category: "時系列データの処理",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      ある商品の月別販売数を調べたところ、次のように推移していた。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>月</th>
            <th class='border border-slate-300 p-1'>1月</th>
            <th class='border border-slate-300 p-1'>2月</th>
            <th class='border border-slate-300 p-1'>3月</th>
            <th class='border border-slate-300 p-1'>4月</th>
            <th class='border border-slate-300 p-1'>5月</th>
            <th class='border border-slate-300 p-1'>6月</th>
            <th class='border border-slate-300 p-1'>7月</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>販売数</td>
            <td class='border border-slate-300 p-1'>100</td>
            <td class='border border-slate-300 p-1'>130</td>
            <td class='border border-slate-300 p-1'>80</td>
            <td class='border border-slate-300 p-1'>140</td>
            <td class='border border-slate-300 p-1'>90</td>
            <td class='border border-slate-300 p-1'>150</td>
            <td class='border border-slate-300 p-1'>110</td>
          </tr>
        </tbody>
      </table>
      <br>
      また、元の販売数と3か月移動平均を折れ線グラフに表した。<br>
      ![月別販売数と3か月移動平均](picture/q09_3_moving_average.png)
      3月を中心とする3か月移動平均の値と、移動平均を用いる目的について述べたものとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 3か月移動平均は約116.7であり、短期的な変動を平滑化して時系列の傾向を把握しやすくする。<br>
      ② 3か月移動平均は350であり、短期的な変動をより強調する。<br>
      ③ 3か月移動平均は約103.3であり、各月の成長率を求めるために用いる。<br>
      ④ 3か月移動平均は80であり、時系列から長期的な傾向を取り除くために用いる。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本概念</b><br>
      ・<b>移動平均</b>とは、連続する一定期間のデータの平均を順次計算する方法です。<br>
      ・3か月の中心移動平均では、ある月とその前後1か月の合計を3で割ります。<br>
      ・移動平均を用いることで、月ごとの一時的・短期的な変動が平滑化され、時系列に含まれる比較的長期的な傾向（トレンド）を把握しやすくなります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      3月を中心とする3か月移動平均では、2月・3月・4月の販売数を使用します。したがって、
      \\[
        \\frac{130 + 80 + 140}{3} = \\frac{350}{3} \\approx 116.7
      \\]
      よって、3月を中心とする3か月移動平均は約116.7です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：\\((130 + 80 + 140) / 3 \\approx 116.7\\) であり、移動平均は短期的な変動を平滑化して、時系列の傾向を見やすくするために用いられます。<br>
      ・<b>② 誤り</b>：350は3か月分の販売数の合計であり、平均ではありません。また、移動平均は短期的な変動を強調するのではなく平滑化します。<br>
      ・<b>③ 誤り</b>：約103.3は2月を中心とする3か月移動平均（\\((100+130+80)/3\\)）であり、3月を中心とする値ではありません。また、移動平均の主な目的は各月の成長率を求めることではありません。<br>
      ・<b>④ 誤り</b>：80は3月単月の販売数であり、3か月移動平均ではありません。また、この場合の移動平均は短期的な変動をならし、トレンドを把握しやすくするために用います。
    `
  },
  {
    id: 4,
    category: "時系列データの処理",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      ある時系列データについて、各時点と一定期間前の時点との相関を調べたところ、次のコレログラムが得られた。<br>
      ![ラグ1からラグ6までのコレログラム](picture/q09_4_correlogram.png)
      図から読み取れる自己相関係数は、おおむね次の通りである。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>ラグ</th>
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
            <td class='border border-slate-300 p-1 bg-slate-50'>自己相関係数</td>
            <td class='border border-slate-300 p-1'>0.80</td>
            <td class='border border-slate-300 p-1'>0.62</td>
            <td class='border border-slate-300 p-1'>0.43</td>
            <td class='border border-slate-300 p-1'>0.24</td>
            <td class='border border-slate-300 p-1'>0.08</td>
            <td class='border border-slate-300 p-1'>−0.03</td>
          </tr>
        </tbody>
      </table>
      <br>
      この時系列の系列相関について、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① ラグ1では強い正の系列相関があり、ラグが大きくなるにつれて系列相関は弱くなっている。<br>
      ② ラグ1では強い負の系列相関があり、隣り合う時点では値が逆方向に動く傾向が強い。<br>
      ③ ラグ1からラグ6まで自己相関係数がすべてほぼ0なので、系列相関はみられない。<br>
      ④ ラグが大きくなるほど自己相関係数が大きくなっており、離れた時点ほど強く関連している。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本概念</b><br>
      ・時系列データでは、ある時点の値と、それ以前の時点の値との間に相関がみられることがあります。これを<b>系列相関（自己相関）</b>といいます。<br>
      ・ラグ \\(k\\) の自己相関は、ある時点の値と \\(k\\) 期前の値との関連の強さを表します。<br>
      ・<b>コレログラム</b>は、横軸にラグ、縦軸に自己相関係数をとり、ラグごとの自己相関を視覚的に表したものです。<br>
      ・自己相関係数が1に近いほど強い正の関連、\\(-1\\) に近いほど強い負の関連、0に近いほど線形な関連が弱いことを表します。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      ラグ1の自己相関係数は約0.80であり、強い正の系列相関がみられます。ラグ2では約0.62、ラグ3では約0.43、ラグ4では約0.24と、ラグが大きくなるにつれて自己相関係数が小さくなっています。ラグ5、6では0に近くなっています。したがって、この図からは、近い時点どうしでは正の関連が強く、時点が離れるにつれてその関連が弱くなる様子が読み取れます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：ラグ1では自己相関係数が約0.80と大きな正の値をとり、その後はラグが大きくなるにつれて0に近づいています。<br>
      ・<b>② 誤り</b>：ラグ1の自己相関係数は \\(-0.80\\) ではなく \\(+0.80\\) であり、強い正の系列相関がみられます。<br>
      ・<b>③ 誤り</b>：ラグ1〜3などでは自己相関係数が明らかに0から離れているため、「すべてほぼ0」とはいえません。<br>
      ・<b>④ 誤り</b>：実際にはラグが大きくなるにつれて自己相関係数は小さくなっています。
    `
  }
];
