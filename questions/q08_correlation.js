// 分野08. 共分散・相関・偏相関
const allQuestions = [
  {
    id: 1,
    category: "共分散・相関・偏相関",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      あるクラス5人の「勉強時間 \\(X\\)（時間）」と「テストの点数 \\(Y\\)（点）」のデータから、次の要約統計量が得られた。<br><br>
      ・\\(X\\) の標準偏差：\\(s_x=2.0\\)<br>
      ・\\(Y\\) の標準偏差：\\(s_y=10.0\\)<br>
      ・\\(X\\) と \\(Y\\) の共分散：\\(s_{xy}=16.0\\)<br><br>
      このとき、勉強時間 \\(X\\) とテストの点数 \\(Y\\) の間のピアソンの積率相関係数 \\(r\\) の値として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 0.80<br>
      ② 0.16<br>
      ③ −0.80<br>
      ④ 0.64
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本公式</b><br>
      ピアソンの積率相関係数は、共分散を2変量の標準偏差の積で割った値です。
      \\[
        r=\\frac{s_{xy}}{s_xs_y}
      \\]
      共分散を標準化することで単位の影響が取り除かれ、\\(-1\\le r\\le1\\) となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      与えられた値を代入すると、
      \\[
        r=\\frac{16.0}{2.0\\times10.0}
         =\\frac{16.0}{20.0}
         =0.80
      \\]
      です。共分散が正なので、相関係数の符号も正になります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：定義式から相関係数は0.80となります。<br>
      ・<b>② 誤り</b>：共分散を標準偏差の積で割っていません。<br>
      ・<b>③ 誤り</b>：共分散が正であるため、相関係数も正です。<br>
      ・<b>④ 誤り</b>：これは \\(r^2=0.80^2=0.64\\) とした値であり、相関係数そのものではありません。
    `
  },
  {
    id: 2,
    category: "共分散・相関・偏相関",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      2つの変量 \\(X\\) と \\(Y\\) からなるデータについて、相関係数を計算したところ \\(r_{XY}=0.60\\) であった。<br><br>
      すべてのデータに対して次の一次変換を行い、新しい変量 \\(U\\) と \\(V\\) を作成した。
      \\[
        U=-2X+10,\\qquad V=3Y-5
      \\]
      このとき、\\(U\\) と \\(V\\) の間の相関係数 \\(r_{UV}\\) の値として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 0.60<br>
      ② −0.60<br>
      ③ −0.30<br>
      ④ 0.12
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本公式</b><br>
      \\(U=aX+b\\)、\\(V=cY+d\\) と変換すると、
      \\[
        r_{UV}=\\frac{ac}{|a||c|}r_{XY}
              =\\operatorname{sign}(ac)r_{XY}
      \\]
      となります。係数の絶対値や定数の加算は相関係数の絶対値に影響しません。一方、一方だけに負の係数を掛けると相関係数の符号が反転します。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      今回は \\(a=-2\\)、\\(c=3\\) なので、
      \\[
        ac=(-2)\\times3=-6<0
      \\]
      です。係数の積が負であるため、
      \\[
        r_{UV}=-r_{XY}=-0.60
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(X\\) にだけ負の係数を掛けているため、符号は反転します。<br>
      ・<b>② 正しい</b>：係数の符号の積が負なので、相関係数は−0.60です。<br>
      ・<b>③ 誤り</b>：係数−2で相関係数を割るものではありません。<br>
      ・<b>④ 誤り</b>：一次変換の係数の大きさを相関係数に直接掛けるものではありません。
    `
  },
  {
    id: 3,
    category: "共分散・相関・偏相関",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      相関関係および確率変数の独立性・無相関に関する次の記述 A、B、C について、正誤の組み合わせとして最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <b>A：</b>2つの変数 \\(X\\) と \\(Y\\) の間に高い正の相関係数が観察されても、第三の変数 \\(Z\\) が両方に影響を与えているだけの「擬似相関」である可能性があり、直ちに \\(X\\) が \\(Y\\) の直接的な原因であるとは結論付けられない。<br><br>
      <b>B：</b>相関係数が定義できる2つの確率変数 \\(X\\) と \\(Y\\) が互いに独立ならば無相関となるが、無相関であっても、必ずしも互いに独立であるとは限らない。例えば、左右対称な分布に従う \\(X\\) と \\(Y=X^2\\) には非線形な関係があるが、無相関となる場合がある。<br><br>
      <b>C：</b>ピアソンの積率相関係数は2変数間の直線的な関係の強さを測る指標であるため、明確な曲線的関係が存在しても、相関係数が0付近になることがある。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-1'>A</th>
            <th class='border border-slate-300 p-1'>B</th>
            <th class='border border-slate-300 p-1'>C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-1'>正</td>
            <td class='border border-slate-300 p-1'>正</td>
            <td class='border border-slate-300 p-1'>正</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-1'>正</td>
            <td class='border border-slate-300 p-1'>誤</td>
            <td class='border border-slate-300 p-1'>正</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-1'>誤</td>
            <td class='border border-slate-300 p-1'>正</td>
            <td class='border border-slate-300 p-1'>誤</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-1'>正</td>
            <td class='border border-slate-300 p-1'>正</td>
            <td class='border border-slate-300 p-1'>誤</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本概念・各記述の判定</b><br>
      ・<b>Aは正しい</b>：相関は2変数の共変動を示しますが、それだけでは因果関係を証明できません。第三の変数による擬似相関や、因果の逆方向などを検討する必要があります。<br>
      ・<b>Bは正しい</b>：有限な分散を持ち相関係数が定義できる場合、独立ならば \\(E[XY]=E[X]E[Y]\\) なので \\(\\operatorname{Cov}(X,Y)=0\\) となります。しかし逆は一般には成り立ちません。例えば \\(X\\) が原点対称な分布に従い \\(Y=X^2\\) とすると、明確な従属関係があっても \\(E[X^3]=0\\) であるため無相関となる場合があります。<br>
      ・<b>Cは正しい</b>：ピアソンの相関係数が捉えるのは線形関係です。U字型などの非線形関係では、負方向と正方向の変化が打ち消し合い、相関係数が0付近になることがあります。<br><br>
      <b>2. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：A、B、Cはいずれも正しい記述です。<br>
      ・<b>② 誤り</b>：Bも正しい記述です。<br>
      ・<b>③ 誤り</b>：AとCはいずれも正しい記述です。<br>
      ・<b>④ 誤り</b>：Cも正しい記述です。
    `
  }
];
