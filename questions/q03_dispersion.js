// 分野03. 散らばりの指標と偏差値（分散、標準偏差、標準化、変動係数）
const allQuestions = [
  {
    id: 1,
    category: "散らばりの指標と偏差値",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      ある小テスト（10点満点）を5人の学生が受験したところ、得点はそれぞれ以下の通りであった。<br><br>
      <b>データの値（点）：</b>3, 5, 6, 7, 9<br><br>
      この5人の得点データの「標本分散」と「標準偏差」の組み合わせとして最も適切なものを、次の ①〜④ のうちから1つ選べ。ただし、解は近似値ではなく厳密な値で表記されている。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-1'>標本分散</th>
            <th class='border border-slate-300 p-1'>標準偏差</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-1'>4.0</td>
            <td class='border border-slate-300 p-1'>2 点</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-1'>4.0</td>
            <td class='border border-slate-300 p-1'>4 点</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-1'>5.0</td>
            <td class='border border-slate-300 p-1'>\\(\\sqrt{5}\\) 点</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-1'>20.0</td>
            <td class='border border-slate-300 p-1'>\\(2\\sqrt{5}\\) 点</td>
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
      平均値、標本分散、標準偏差はそれぞれ
      \\[
        \\bar{x}=\\frac{1}{n}\\sum_{i=1}^{n}x_i,\\qquad
        s^2=\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})^2,\\qquad
        s=\\sqrt{s^2}
      \\]
      で求めます。ここで標本分散は \\(n\\) で割るものとし、\\(n-1\\) で割る不偏分散とは区別します。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      平均値は
      \\[
        \\bar{x}=\\frac{3+5+6+7+9}{5}=6
      \\]
      です。偏差平方は順に \\(9,1,0,1,9\\) であり、偏差平方和は20です。したがって、
      \\[
        s^2=\\frac{20}{5}=4.0,\qquad s=\\sqrt{4}=2\\ \\text{（点）}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：標本分散4.0、標準偏差2点と一致します。<br>
      ・<b>② 誤り</b>：標準偏差を求める際に平方根を取っていません。<br>
      ・<b>③ 誤り</b>：偏差平方和を \\(n-1=4\\) で割った不偏分散5.0を用いた結果です。<br>
      ・<b>④ 誤り</b>：偏差平方和20をそのまま分散としています。
    `
  },
  {
    id: 2,
    category: "散らばりの指標と偏差値",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      あるデータ \\(X\\)（データ数 \\(n\\)）の平均値が \\(\\bar{x}=50\\)、標準偏差が \\(s_x=10\\) であったとする。<br><br>
      すべてのデータ \\(x_i\\) に対して次の一次変換を行い、新しいデータ \\(Y\\)（\\(y_i\\)）を作成した。
      \\[
        y_i=-2x_i+30
      \\]
      この新しいデータ \\(Y\\) の「平均値 \\(\\bar{y}\\)」、「標本分散 \\(s_y^2\\)」、「標準偏差 \\(s_y\\)」の組み合わせとして最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-1'>平均値</th>
            <th class='border border-slate-300 p-1'>標本分散</th>
            <th class='border border-slate-300 p-1'>標準偏差</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-1'>−70</td>
            <td class='border border-slate-300 p-1'>400</td>
            <td class='border border-slate-300 p-1'>20</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-1'>−70</td>
            <td class='border border-slate-300 p-1'>−200</td>
            <td class='border border-slate-300 p-1'>−20</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-1'>−70</td>
            <td class='border border-slate-300 p-1'>200</td>
            <td class='border border-slate-300 p-1'>20</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-1'>130</td>
            <td class='border border-slate-300 p-1'>400</td>
            <td class='border border-slate-300 p-1'>20</td>
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
      一次変換 \\(Y=aX+b\\) に対して、
      \\[
        \\bar{y}=a\\bar{x}+b,\qquad s_y^2=a^2s_x^2,\qquad s_y=|a|s_x
      \\]
      が成り立ちます。定数の加算 \\(b\\) は位置だけを移動させ、散らばりには影響しません。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(a=-2,b=30,s_x^2=10^2=100\\) より、
      \\[
        \\bar{y}=(-2)\\times50+30=-70
      \\]
      \\[
        s_y^2=(-2)^2\\times100=400,\qquad
        s_y=|-2|\\times10=20
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：平均値−70、標本分散400、標準偏差20と全て一致します。<br>
      ・<b>② 誤り</b>：分散と標準偏差は常に0以上であり、負にはなりません。<br>
      ・<b>③ 誤り</b>：分散を \\(a^2\\) 倍ではなく \\(|a|\\) 倍にしています。<br>
      ・<b>④ 誤り</b>：平均値の計算で \\(-2\\times50\\) の符号を誤っています。
    `
  },
  {
    id: 3,
    category: "散らばりの指標と偏差値",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      データの散らばりを表す指標の1つに「変動係数（CV）」がある。変動係数は、平均値を \\(\\bar{x}\\)、標準偏差を \\(s\\) としたとき、
      \\[
        \\mathrm{CV}=\\frac{s}{\\bar{x}}
      \\]
      と定義される（標準偏差を平均値で割った無次元量）。<br><br>
      異なる2つのグループの測定データについて、次の結果が得られた。<br>
      ・グループA（マウスの体重）：平均値20 g、標準偏差4 g<br>
      ・グループB（ウシの体重）：平均値500 kg、標準偏差50 kg<br><br>
      この定義式を踏まえ、2つのグループの散らばりに関する記述として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 標準偏差のみで比較するとグループB（50 kg）の方が大きいため、グループBの方が相対的な散らばりも大きくなる。<br>
      ② グループAの変動係数は0.20（20%）、グループBは0.10（10%）となり、平均値に対する相対的なばらつきはグループAの方が大きい。<br>
      ③ 変動係数は測定単位（gやkg）に依存して数値が変化するため、単位が異なるデータの散らばりを比較することはできない。<br>
      ④ 変動係数の値が大きいほど、データ全体の中心値に対する集中の度合い（ばらつきの小ささ）が高いことを意味する。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本概念</b><br>
      変動係数 \\(\\mathrm{CV}=s/\\bar{x}\\) は単位を持たないため、測定単位やスケールが大きく異なるデータ同士の「平均値に対する相対的なばらつき」を比較できます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\[
        \\mathrm{CV}_A=\\frac{4}{20}=0.20=20\\%,\qquad
        \\mathrm{CV}_B=\\frac{50}{500}=0.10=10\\%
      \\]
      したがって、相対的なばらつきはグループAの方が大きいと判断できます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：標準偏差はデータのスケールに影響されるため、単位や平均値が異なるデータの相対比較には適しません。<br>
      ・<b>② 正しい</b>：変動係数はAが20%、Bが10%であり、Aの方が相対的な散らばりが大きくなります。<br>
      ・<b>③ 誤り</b>：分子と分母の単位が相殺されるため、変動係数は無次元量です。<br>
      ・<b>④ 誤り</b>：変動係数が大きいほど、平均値に対するばらつきが大きいことを意味します。
    `
  },
  {
    id: 4,
    category: "散らばりの指標と偏差値",
    difficulty: 3,
    priority: 3,
    type: "選択式",
    question: `
      ある高校で生徒1,000人が受験した「英語」と「数学」のテストについて、生徒Xさんの得点、学年平均点、標準偏差は以下の表の通りであった。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>教科</th>
            <th class='border border-slate-300 p-1'>生徒Xの得点</th>
            <th class='border border-slate-300 p-1'>学年平均点</th>
            <th class='border border-slate-300 p-1'>標準偏差</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>英語</td>
            <td class='border border-slate-300 p-1'>70 点</td>
            <td class='border border-slate-300 p-1'>55 点</td>
            <td class='border border-slate-300 p-1'>10 点</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>数学</td>
            <td class='border border-slate-300 p-1'>90 点</td>
            <td class='border border-slate-300 p-1'>60 点</td>
            <td class='border border-slate-300 p-1'>15 点</td>
          </tr>
        </tbody>
      </table>
      <br>
      データ \\(x\\) のZスコアを \\(z=(x-\\text{平均値})/\\text{標準偏差}\\) とするとき、偏差値は \\(T=50+10z\\) で定義される。両教科の得点分布は正規分布に従い、\\(Z=1.0\\)（偏差値60）以上の割合は約16%、\\(Z=2.0\\)（偏差値70）以上の割合は約2.3%であるとする。<br><br>
      生徒Xさんの両教科の成績に関する記述として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 生徒Xさんの偏差値は英語が65、数学が70であり、数学の学内順位は上位約2.3%（約23位以内）に位置していると推測できる。<br>
      ② 生徒Xさんの偏差値は英語が65、数学が60であり、相対的な学内順位は英語の方が高い。<br>
      ③ 生徒Xさんの両教科の平均点からの差（偏差）は数学（+30点）が英語（+15点）の2倍であるため、偏差値も数学が英語の2倍になる。<br>
      ④ 生徒Xさんの数学の偏差値は70であり、正規分布の性質から数学の学内順位は上位約16%（約160位以内）に位置していると推測できる。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本公式</b><br>
      標準化得点と偏差値は
      \\[
        z=\\frac{x-\\mu}{\\sigma},\qquad T=50+10z
      \\]
      で求めます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      英語については
      \\[
        z=\\frac{70-55}{10}=1.5,\qquad T=50+10\\times1.5=65
      \\]
      数学については
      \\[
        z=\\frac{90-60}{15}=2.0,\qquad T=50+10\\times2.0=70
      \\]
      です。数学は \\(Z=2.0\\) なので上位約2.3%にあたり、1,000人中では
      \\[
        1{,}000\\times0.023=23
      \\]
      より、約23位以内と推測できます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：偏差値の計算と正規分布に基づく上位割合の解釈がともに正しい記述です。<br>
      ・<b>② 誤り</b>：数学の偏差値は60ではなく70であり、相対的な順位も数学の方が高くなります。<br>
      ・<b>③ 誤り</b>：素点の偏差が2倍でも、標準偏差が異なるためZスコアは単純に2倍になりません。また、偏差値は \\(50+10z\\) という一次変換です。<br>
      ・<b>④ 誤り</b>：上位約16%は \\(Z=1.0\\) の場合です。\\(Z=2.0\\) では上位約2.3%です。
    `
  }
];
