// 分野33. 線形回帰：回帰直線・決定係数・重回帰の基礎
const allQuestions = [
  {
    id: 1,
    category: "線形回帰：回帰直線・決定係数・重回帰の基礎",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      \\(n\\) 組のデータ \\((x_i,y_i)\\) について、\\(X\\) から \\(Y\\) を予測する単回帰直線
      \\[
        \\hat y=a+bx
      \\]
      を最小二乗法によって求める。<br><br>
      次の値が得られている。
      \\[
        \\bar x=4,\\qquad \\bar y=10,
      \\]
      \\[
        \\sum_{i=1}^{n}(x_i-\\bar x)^2=20,\\qquad \\sum_{i=1}^{n}(x_i-\\bar x)(y_i-\\bar y)=30.
      \\]
      このとき、最小二乗法によって得られる回帰直線として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>回帰直線</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>\\(\\hat y=4+1.5x\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(\\hat y=2+2x\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(\\hat y=10+1.5x\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(\\hat y=4+0.67x\\)</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      最小二乗法では、各観測値 \\(y_i\\) と回帰直線による予測値 \\(\\hat y_i=a+bx_i\\) との差である残差 \\(e_i=y_i-\\hat y_i\\) の平方和
      \\[
        \\sum_{i=1}^{n}e_i^2=\\sum_{i=1}^{n}\\{y_i-(a+bx_i)\\}^2
      \\]
      が最小になるように \\(a,b\\) を決めます。単回帰における傾き \\(b\\) は
      \\[
        b=\\dfrac{\\sum_{i=1}^{n}(x_i-\\bar x)(y_i-\\bar y)}{\\sum_{i=1}^{n}(x_i-\\bar x)^2}
      \\]
      であり、切片 \\(a\\) は
      \\[
        a=\\bar y-b\\bar x
      \\]
      で求められます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      まず傾きを求めると \\(b=30/20=1.5\\) です。次に切片を求めると
      \\[
        a=10-1.5\\times 4=4
      \\]
      です。したがって回帰直線は
      \\[
        \\boxed{\\hat y=4+1.5x}
      \\]
      となります。傾きが1.5であることは、\\(X\\) が1単位大きいとき、回帰直線による \\(Y\\) の予測値が平均的に1.5だけ大きくなることを表しています。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：傾きは \\(30/20=1.5\\)、切片は \\(10-1.5\\times 4=4\\) です。<br>
      ・<b>② 誤り</b>：回帰直線は \\((\\bar x,\\bar y)=(4,10)\\) を通りますが、\\(2+2\\times 4=10\\) という条件だけでは最小二乗回帰直線とは限りません。傾きは1.5です。<br>
      ・<b>③ 誤り</b>：傾きは正しいですが、切片が誤っています。回帰直線は \\((4,10)\\) を通らなければなりません。<br>
      ・<b>④ 誤り</b>：分子と分母を逆にすると \\(20/30\\approx 0.67\\) となりますが、傾きの公式では分子が偏差積和、分母が \\(X\\) の偏差平方和です。
    `
  },
  {
    id: 2,
    category: "線形回帰：回帰直線・決定係数・重回帰の基礎",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      5組のデータ \\((x_i,y_i)\\) について、次の値が得られた。
      \\[
        n=5,\\qquad \\bar x=4,\\qquad \\bar y=10,
      \\]
      \\[
        \\sum_{i=1}^{5}x_i^2=100,\\qquad \\sum_{i=1}^{5}y_i^2=545,
      \\]
      また、\\(X\\) と \\(Y\\) の相関係数は
      \\[
        r=\\dfrac{2}{3}
      \\]
      であった。<br><br>
      \\(X\\) から \\(Y\\) を予測する単回帰直線を \\(\\hat y=a+bx\\) とする。このとき、回帰直線として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>回帰直線</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>\\(\\hat y=6+x\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(\\hat y=4+1.5x\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(\\hat y=8+0.5x\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(\\hat y=10+\\dfrac{2}{3}x\\)</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      データの分散は、「二乗の平均－平均の二乗」を用いて
      \\[
        s_X^2=\\dfrac1n\\sum_{i=1}^{n}x_i^2-\\bar x^2,\\qquad s_Y^2=\\dfrac1n\\sum_{i=1}^{n}y_i^2-\\bar y^2
      \\]
      と計算できます。\\(X\\) から \\(Y\\) を予測する単回帰直線の傾き \\(b\\) と相関係数 \\(r\\) には
      \\[
        b=r\\dfrac{s_Y}{s_X}
      \\]
      という関係があります。切片は \\(a=\\bar y-b\\bar x\\) で求められます。なお、分散を \\(1/n\\) ではなく \\(1/(n-1)\\) で定義しても、\\(s_Y/s_X\\) では共通する係数が打ち消されるため、回帰係数 \\(b\\) は同じになります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      まず \\(X\\) の分散を求めると
      \\[
        s_X^2=\\dfrac{100}{5}-4^2=20-16=4
      \\]
      なので \\(s_X=2\\) です。次に \\(Y\\) の分散を求めると
      \\[
        s_Y^2=\\dfrac{545}{5}-10^2=109-100=9
      \\]
      なので \\(s_Y=3\\) です。相関係数が \\(r=2/3\\) なので、
      \\[
        b=r\\dfrac{s_Y}{s_X}=\\dfrac{2}{3}\\times\\dfrac{3}{2}=1
      \\]
      です。切片は
      \\[
        a=\\bar y-b\\bar x=10-1\\times 4=6
      \\]
      です。よって
      \\[
        \\boxed{\\hat y=6+x}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：\\(s_X=2,\\ s_Y=3\\) なので、\\(b=(2/3)(3/2)=1\\)、\\(a=10-4=6\\) となります。<br>
      ・<b>② 誤り</b>：\\(s_Y/s_X=3/2\\) をそのまま傾きとしています。傾きを求めるには相関係数 \\(r\\) も掛ける必要があります。<br>
      ・<b>③ 誤り</b>：回帰直線は \\((\\bar x,\\bar y)=(4,10)\\) を通りますが、傾きは0.5ではなく1です。<br>
      ・<b>④ 誤り</b>：相関係数 \\(r=2/3\\) がそのまま回帰直線の傾きになるとは限りません。傾きは \\(r(s_Y/s_X)\\) です。
    `
  },
  {
    id: 3,
    category: "線形回帰：回帰直線・決定係数・重回帰の基礎",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      線形回帰分析における決定係数 \\(R^2\\) および自由度調整済み決定係数について、次の記述 A〜E を考える。<br><br>
      <b>A.</b> 決定係数 \\(R^2\\) は、目的変数の観測された変動のうち、回帰モデルによって説明される変動の割合を表す指標である。<br><br>
      <b>B.</b> 同じデータに対して説明変数を追加して回帰分析を行った場合、通常の決定係数 \\(R^2\\) は原則として低下しない。<br><br>
      <b>C.</b> 自由度調整済み決定係数は、説明変数を追加した場合に低下することがある。<br><br>
      <b>D.</b> 決定係数 \\(R^2\\) が0.80であれば、目的変数の変動の80%が説明変数によって因果的に生じていることを意味する。<br><br>
      <b>E.</b> 切片を含む単回帰分析では、説明変数 \\(X\\) と目的変数 \\(Y\\) の相関係数を \\(r\\) とすると、常に \\(R^2=r\\) が成り立つ。<br><br>
      正しいものをすべて選んだ組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>正しいもの</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>A・B</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>A・B・C</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>A・C・D</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>B・C・E</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      目的変数の全変動を \\(SST=\\sum_{i=1}^{n}(y_i-\\bar y)^2\\)、残差平方和を \\(SSE=\\sum_{i=1}^{n}(y_i-\\hat y_i)^2\\) とすると、切片を含む通常の線形回帰では
      \\[
        R^2=1-\\dfrac{SSE}{SST}
      \\]
      と表されます。説明変数を追加すると、最小二乗法によって最小化された \\(SSE\\) は原則として増加しません。そのため、通常の \\(R^2\\) も原則として低下しません。<br><br>
      一方、標本サイズを \\(n\\)、説明変数の個数を \\(p\\) とすると、自由度調整済み決定係数は
      \\[
        \\bar R^2=1-\\dfrac{SSE/(n-p-1)}{SST/(n-1)}
      \\]
      と表されます。説明変数を増やすことに対する調整が入るため、モデルの説明力をほとんど改善しない変数を追加すると、自由度調整済み \\(R^2\\) は低下することがあります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      ・<b>Aは正しい。</b>\\(R^2\\) は、目的変数の標本内の変動のうち、回帰モデルによって説明される変動の割合を表します。<br>
      ・<b>Bは正しい。</b>説明変数を追加すると、既存の説明変数だけを用いたモデルも新しいモデルの特殊な場合として表現できます。そのため最小二乗法による \\(SSE\\) は増加せず、通常の \\(R^2\\) は低下しません。<br>
      ・<b>Cは正しい。</b>自由度調整済み \\(R^2\\) には説明変数の個数に対する調整があるため、説明力の乏しい変数を追加すると低下することがあります。<br>
      ・<b>Dは誤り。</b>高い \\(R^2\\) は回帰モデルが標本内の変動をよく説明していることを示しますが、それだけで因果関係を示すものではありません。<br>
      ・<b>Eは誤り。</b>切片を含む単回帰分析では
      \\[
        \\boxed{R^2=r^2}
      \\]
      が成り立ちます。したがって、例えば \\(r=-0.8\\) なら \\(R^2=(-0.8)^2=0.64\\) です。<br><br>
      よって、正しいものは
      \\[
        \\boxed{\\mathrm{A,\\ B,\\ C}}
      \\]
      です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：A、BだけでなくCも正しいです。<br>
      ・<b>② 正しい</b>：A、B、Cはいずれも正しく、D、Eは誤りです。<br>
      ・<b>③ 誤り</b>：Dが誤りであり、Bが抜けています。<br>
      ・<b>④ 誤り</b>：Eは誤りです。単回帰では \\(R^2=r\\) ではなく \\(R^2=r^2\\) です。
    `
  },
  {
    id: 4,
    category: "線形回帰：回帰直線・決定係数・重回帰の基礎",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      目的変数 \\(Y\\) を、連続変数 \\(X\\) と0または1をとるダミー変数 \\(D\\) によって説明する重回帰モデル
      \\[
        Y_i=\\beta_0+\\beta_1 X_i+\\beta_2 D_i+\\varepsilon_i
      \\]
      を考える。ここで、
      \\[
        D_i=\\begin{cases}1 & \\text{グループA}\\\\ 0 & \\text{グループB}\\end{cases}
      \\]
      とする。<br><br>
      重回帰分析、ダミー変数および多重共線性について、次の記述 A〜E を考える。<br><br>
      <b>A.</b> \\(\\beta_1\\) は、他の説明変数 \\(D\\) を一定としたとき、\\(X\\) が1単位大きいことに対応する \\(Y\\) の条件付き平均の差を表す。<br><br>
      <b>B.</b> \\(\\beta_2\\) は、\\(X\\) を一定としたときのグループAとグループBの条件付き平均の差を表す。<br><br>
      <b>C.</b> 説明変数どうしに非常に強い線形関係があると、個々の回帰係数の推定値が不安定になったり、その標準誤差が大きくなったりすることがある。<br><br>
      <b>D.</b> 多重共線性が強い場合、決定係数 \\(R^2\\) は必ず0に近くなる。<br><br>
      <b>E.</b> ある説明変数の回帰係数が統計的に有意であれば、その説明変数が目的変数に因果的な影響を与えていることが証明されたといえる。<br><br>
      正しいものをすべて選んだ組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>正しいもの</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>A・B</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>A・B・C</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>B・C・D</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>A・C・E</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      重回帰モデル
      \\[
        Y_i=\\beta_0+\\beta_1 X_{1i}+\\cdots+\\beta_p X_{pi}+\\varepsilon_i
      \\]
      では、ある説明変数の回帰係数は、<b>他の説明変数を一定としたときの関係</b>として解釈します。0と1をとるダミー変数を用いることで、カテゴリの違いを回帰モデルに組み込むことができます。多重共線性とは、複数の説明変数の間に強い線形関係が存在する状態をいいます。強い多重共線性があると、それぞれの説明変数の効果をデータから切り分けることが難しくなり、回帰係数の推定が不安定になることがあります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      ・<b>Aは正しい。</b>\\(D\\) を一定にすると
      \\[
        E[Y\\mid X+1,D]-E[Y\\mid X,D]=\\beta_1
      \\]
      です。したがって、\\(\\beta_1\\) は他の説明変数 \\(D\\) を一定とした場合の \\(X\\) の1単位の違いに対応する条件付き平均の差です。<br>
      ・<b>Bは正しい。</b>グループAでは \\(D=1\\) なので \\(E[Y\\mid X,D=1]=\\beta_0+\\beta_1 X+\\beta_2\\) です。一方、グループBでは \\(D=0\\) なので \\(E[Y\\mid X,D=0]=\\beta_0+\\beta_1 X\\) です。したがって、同じ \\(X\\) における両者の差は \\(\\beta_2\\) です。<br>
      ・<b>Cは正しい。</b>説明変数どうしが非常に強く相関している場合、それぞれの説明変数に対応する回帰係数を個別に推定することが難しくなります。このため、推定値がデータのわずかな変化によって大きく変わったり、標準誤差が大きくなったりすることがあります。<br>
      ・<b>Dは誤り。</b>多重共線性は、個々の回帰係数の推定を不安定にする問題です。モデル全体として目的変数をよく説明できる場合もあり、強い多重共線性があるからといって \\(R^2\\) が必ず小さくなるわけではありません。<br>
      ・<b>Eは誤り。</b>回帰係数の統計的有意性は、設定した回帰モデルのもとで係数が0と異なるという統計的証拠に関するものです。観察データの回帰係数が有意であるという事実だけから、因果関係が証明されたとはいえません。<br><br>
      よって正しいものは
      \\[
        \\boxed{\\mathrm{A,\\ B,\\ C}}
      \\]
      です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：A、BだけでなくCも正しいです。<br>
      ・<b>② 正しい</b>：A、B、Cはいずれも正しく、D、Eは誤りです。<br>
      ・<b>③ 誤り</b>：Dが誤りであり、Aが抜けています。<br>
      ・<b>④ 誤り</b>：Eが誤りであり、Bが抜けています。
    `
  }
];
