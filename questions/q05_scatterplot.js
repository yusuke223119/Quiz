// 分野05. 散布図と相関係数（共分散、相関係数の性質、無相関と独立、擬似相関）
// 問05-4（Challenge）は調整中のため未収録
const allQuestions = [
  {
    id: 1,
    category: "散布図と相関係数",
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
      ピアソンの積率相関係数は、共分散を2変量の標準偏差の積で割った
      \\[
        r=\\frac{s_{xy}}{s_xs_y}
      \\]
      で定義されます。標準化により単位の影響が取り除かれ、\\(-1\\le r\\le1\\) となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      与えられた数値を代入すると、
      \\[
        r=\\frac{16.0}{2.0\\times10.0}
        =\\frac{16.0}{20.0}
        =0.80
      \\]
      です。共分散が正なので、相関係数の符号も正になります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：定義式による計算結果0.80と一致します。<br>
      ・<b>② 誤り</b>：共分散を標準偏差の積で割っていない誤計算です。<br>
      ・<b>③ 誤り</b>：共分散が正であるため、相関係数も正です。<br>
      ・<b>④ 誤り</b>：相関係数ではなく、決定係数 \\(r^2=0.80^2=0.64\\) と混同しています。
    `
  },
  {
    id: 2,
    category: "散布図と相関係数",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      2つの変量 \\(X\\) と \\(Y\\) からなるデータについて、相関係数を計算したところ \\(r_{XY}=0.60\\) であった。<br><br>
      全てのデータに次の一次変換を行い、新しい変量 \\(U\\) と \\(V\\) を作成した。
      \\[
        U=-2X+10,\\qquad V=3Y-5
      \\]
      このとき、\\(U\\) と \\(V\\) の間の相関係数 \\(r_{UV}\\) として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
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
      \\(U=aX+b\\)、\\(V=cY+d\\) と変換したとき、
      \\[
        r_{UV}=\\frac{ac}{|ac|}r_{XY}
        =\\operatorname{sign}(ac)r_{XY}
      \\]
      となります。係数の絶対値と平行移動は相関係数の絶対値に影響しませんが、係数の符号の積が負なら相関係数の符号が反転します。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      今回は \\(a=-2\\)、\\(c=3\\) なので、
      \\[
        ac=(-2)\\times3=-6<0
      \\]
      です。したがって、
      \\[
        r_{UV}=-r_{XY}=-0.60
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(X\\) 側の係数が負であることを考慮していません。<br>
      ・<b>② 正しい</b>：係数の符号の積が負なので、相関係数の符号だけが反転して−0.60になります。<br>
      ・<b>③ 誤り</b>：相関係数を変換係数−2で割るものではありません。<br>
      ・<b>④ 誤り</b>：相関係数に変換係数の大きさを直接掛けるものではありません。
    `
  },
  {
    id: 3,
    category: "散布図と相関係数",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      相関関係および確率変数の独立性・無相関に関する次の記述 A、B、C について、正誤の組み合わせとして最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <b>A：</b>2つの変数 \\(X\\) と \\(Y\\) の間に高い正の相関係数が観察された場合でも、共通の要因（第三の変数 \\(Z\\)）が両方に影響しているだけの「擬似相関」である可能性があり、直ちに \\(X\\) が \\(Y\\) の直接的な原因であるとは結論付けられない。<br><br>
      <b>B：</b>相関係数が定義できる2つの確率変数 \\(X\\) と \\(Y\\) が互いに独立ならば無相関となるが、無相関であっても必ずしも互いに独立であるとは限らない。例えば、左右対称な分布に従う \\(X\\) と \\(Y=X^2\\) には非線形な関係があっても、無相関となる場合がある。<br><br>
      <b>C：</b>ピアソンの積率相関係数は2変数間の直線的な関係の強さを測る指標であるため、明確な曲線的関係が存在していても、相関係数が0付近になることがある。<br><br>
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
      <b>1. 基本概念・判定</b><br>
      ・<b>Aは正しい</b>：相関は共変動を表しますが、それだけでは因果関係を証明できません。第三の変数が両方に影響する交絡や擬似相関を検討する必要があります。<br>
      ・<b>Bは正しい</b>：期待値・分散が存在する独立な確率変数では \\(E[XY]=E[X]E[Y]\\) なので、
      \\[
        \\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]=0
      \\]
      となります。一方、無相関は線形な共変動がないことしか意味せず、独立までは保証しません。<br>
      ・<b>Cは正しい</b>：ピアソンの相関係数は線形関係を測るため、U字型などの曲線関係を捉えられない場合があります。<br><br>
      <b>2. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：A、B、Cは全て正しい記述です。<br>
      ・<b>② 誤り</b>：Bも正しい記述です。<br>
      ・<b>③ 誤り</b>：AとCも正しい記述です。<br>
      ・<b>④ 誤り</b>：Cも正しい記述です。
    `
  }
];
