// 分野02. 代表値（平均・中央値・最頻値の比較・性質）
const allQuestions = [
  {
    id: 1,
    category: "代表値",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      ある小規模事業所の従業員 10 人の勤続年数（単位：年）を調べたところ、以下のデータが得られた。<br><br>
      <b>データの値（年）：</b>1, 2, 2, 3, 4, 5, 6, 8, 9, 30<br><br>
      このデータにおける平均値（算術平均）、中央値（メディアン）、最頻値（モード）の数値の組み合わせとして最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-1'>平均値</th>
            <th class='border border-slate-300 p-1'>中央値</th>
            <th class='border border-slate-300 p-1'>最頻値</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-1'>7.0 年</td>
            <td class='border border-slate-300 p-1'>4.5 年</td>
            <td class='border border-slate-300 p-1'>2 年</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-1'>7.0 年</td>
            <td class='border border-slate-300 p-1'>4.0 年</td>
            <td class='border border-slate-300 p-1'>2 年</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-1'>6.3 年</td>
            <td class='border border-slate-300 p-1'>4.5 年</td>
            <td class='border border-slate-300 p-1'>3 年</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-1'>6.3 年</td>
            <td class='border border-slate-300 p-1'>5.0 年</td>
            <td class='border border-slate-300 p-1'>2 年</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本公式</b><br>
      ・<b>平均値（Mean）</b>：全データの総和をデータ数で割った値。<br>
      ・<b>中央値（Median）</b>：昇順に並べた中央の値。データ数 \\(n\\) が偶数の場合、中央に位置する2つの値（\\(n/2\\) 番目と \\(n/2+1\\) 番目）の平均をとります。<br>
      ・<b>最頻値（Mode）</b>：データの中で最も多く出現する値。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      データの総和は
      \\[
        1+2+2+3+4+5+6+8+9+30=70
      \\]
      であるため、平均値は
      \\[
        \\frac{70}{10}=7.0\\ \\text{（年）}
      \\]
      です。データ数は10（偶数）なので、5番目の値4と6番目の値5の平均をとり、
      \\[
        \\text{中央値}=\\frac{4+5}{2}=4.5\\ \\text{（年）}
      \\]
      となります。最も多く出現する値は2（2回）なので、最頻値は2年です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：平均値7.0年、中央値4.5年、最頻値2年と全て一致します。<br>
      ・<b>② 誤り</b>：中央値について、中央の2値の平均をとらず5番目の値をそのまま採用しています。<br>
      ・<b>③ 誤り</b>：平均値および最頻値の計算が誤っています。<br>
      ・<b>④ 誤り</b>：平均値および中央値の計算が誤っています。
    `
  },
  {
    id: 2,
    category: "代表値",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      ある大学の同じ科目を受講している3つのクラス（A組、B組、C組）で小テストを実施した。各クラスの人数および平均点は以下の表の通りである。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>クラス</th>
            <th class='border border-slate-300 p-1'>人数（人）</th>
            <th class='border border-slate-300 p-1'>平均点（点）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>A組</td>
            <td class='border border-slate-300 p-1'>20</td>
            <td class='border border-slate-300 p-1'>60</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>B組</td>
            <td class='border border-slate-300 p-1'>30</td>
            <td class='border border-slate-300 p-1'>70</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>C組</td>
            <td class='border border-slate-300 p-1'>50</td>
            <td class='border border-slate-300 p-1'>80</td>
          </tr>
        </tbody>
      </table>
      <br>
      この科目を受講している受講生全体（100人）の平均点として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 68.0 点<br>
      ② 70.0 点<br>
      ③ 73.0 点<br>
      ④ 75.0 点
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本公式</b><br>
      ・全体の平均値 = 各群の総和の合計 ÷ 全データ数<br>
      ・各クラスの総得点 = クラスの人数 × クラスの平均点<br><br>
      <b>2. 計算・判定プロセス</b><br>
      各クラスの総得点は、A組が \\(20\\times60=1{,}200\\) 点、B組が \\(30\\times70=2{,}100\\) 点、C組が \\(50\\times80=4{,}000\\) 点です。したがって、
      \\[
        \\frac{1{,}200+2{,}100+4{,}000}{20+30+50}
        =\\frac{7{,}300}{100}
        =73.0\\ \\text{（点）}
      \\]
      となります。各クラスの人数が異なるため、平均点の単純平均ではなく、人数を重みとする<b>加重平均</b>を求めます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：人数を重みにした計算結果と一致しません。<br>
      ・<b>② 誤り</b>：各クラスの平均点を単純平均した \\((60+70+80)/3=70\\) という誤答です。<br>
      ・<b>③ 正しい</b>：人数比を重みとした加重平均により73.0点となります。<br>
      ・<b>④ 誤り</b>：人数を重みにした計算結果と一致しません。
    `
  },
  {
    id: 3,
    category: "代表値",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      ある地域の世帯年収の分布（全1,000世帯）についてヒストグラムを作成したところ、以下のような「右側に長く裾を引いた分布」が得られた。<br>
      ![世帯年収のヒストグラム](picture/q02_3_hist.png)
      この分布から推測される平均値 A、中央値 B、最頻値 C の位置関係、およびその理由に関する記述として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 最も度数が高い山が左側（2〜3百万円）にあるため、最頻値 C が最も小さく、右側の高所得層（外れ値）に引っぱられて平均値 A が最も大きくなる（C &lt; B &lt; A）。<br>
      ② データの全体数が1,000世帯と大きいため、平均値 A、中央値 B、最頻値 C はほぼ同等の数値（A ≒ B ≒ C）に収束する。<br>
      ③ 右側に長い裾を持つ分布では、中央に位置するデータ数が多いため、中央値 B が最も大きくなり、平均値 A が最も小さくなる（A &lt; C &lt; B）。<br>
      ④ 各データを愚直に足し合わせると平均値 A が最頻値 C よりも左側（小さい側）にシフトするため、大小関係は A &lt; B &lt; C となる。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本概念・考察手順</b><br>
      ・<b>最頻値 C（Mode）</b>：度数が最も高い「山の頂上」に位置します（この図では2〜3百万円の階級）。<br>
      ・<b>中央値 B（Median）</b>：データを小さい順に並べた50%地点、すなわちヒストグラムの面積を左右に二等分する位置です。<br>
      ・<b>平均値 A（Mean）</b>：全ての値を考慮するため、右側の裾にある大きな値の影響を最も強く受け、右側へ引っぱられます。<br>
      したがって、図から
      \\[
        \\text{最頻値 C}<\\text{中央値 B}<\\text{平均値 A}
      \\]
      と推測できます。<br><br>
      <b>2. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：山が左にあるため最頻値 C が最小で、右裾の大きな値の影響により平均値 A が最大となります。<br>
      ・<b>② 誤り</b>：データ数が多くても、分布が非対称である限り3つの代表値が一致するとは限りません。<br>
      ・<b>③ 誤り</b>：平均値と中央値の大小関係が逆です。<br>
      ・<b>④ 誤り</b>：平均値は右側へシフトするため、A &lt; B &lt; C にはなりません。
    `
  },
  {
    id: 4,
    category: "代表値",
    difficulty: 3,
    priority: 2,
    type: "選択式",
    question: `
      \\(n\\) 個の実数データ \\(x_1,x_2,\\ldots,x_n\\) に対する代表値の数学的性質に関する記述として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 平均値からの各データの偏差の和 \\(\\sum_{i=1}^{n}(x_i-\\bar{x})\\) は、データ全体の散らばり具合（分散）に比例した正の値となる。<br>
      ② 各データ \\(x_i\\) からの2乗誤差の総和 \\(\\sum_{i=1}^{n}(x_i-c)^2\\) を最小にする定数 \\(c\\) は、データの中央値（Median）である。<br>
      ③ 各データ \\(x_i\\) からの絶対誤差の総和 \\(\\sum_{i=1}^{n}|x_i-c|\\) を最小にする定数 \\(c\\) は、データの中央値（Median）である。<br>
      ④ データ内に極端な外れ値が含まれている場合、外れ値の大きさを変えると中央値は大きく変動するが、平均値はほとんど変化しない。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本概念・定理</b><br>
      ・平均値からの偏差の和は常に0です。
      \\[
        \\sum_{i=1}^{n}(x_i-\\bar{x})=0
      \\]
      ・2乗誤差の総和を最小にする定数 \\(c\\) は<b>平均値</b>です。<br>
      ・絶対誤差の総和を最小にする定数 \\(c\\) は<b>中央値</b>です。データ数が偶数の場合、中央の2値の間にある任意の値が最小値を与えます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      2乗誤差を \\(S(c)=\\sum_{i=1}^{n}(x_i-c)^2\\) とおくと、
      \\[
        S'(c)=-2\\sum_{i=1}^{n}(x_i-c)=0
        \\quad\\Longrightarrow\\quad
        c=\\frac{1}{n}\\sum_{i=1}^{n}x_i=\\bar{x}
      \\]
      となり、平均値で最小化されることが確認できます。一方、絶対誤差は中央値より左右にあるデータ数が釣り合う位置で最小化されます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：平均値からの偏差の和は常に0であり、分散の大きさには依存しません。<br>
      ・<b>② 誤り</b>：2乗誤差の総和を最小化するのは中央値ではなく<b>平均値</b>です。<br>
      ・<b>③ 正しい</b>：絶対誤差の総和を最小化するのは中央値です。<br>
      ・<b>④ 誤り</b>：外れ値の影響を大きく受けるのは平均値です。中央値は外れ値に対して強健（ロバスト）です。
    `
  }
];
