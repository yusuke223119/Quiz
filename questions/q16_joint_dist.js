// 分野16. 同時分布・共分散
const allQuestions = [
  {
    id: 1,
    category: "同時分布・共分散",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      2つの離散型確率変数 \\(X,Y\\) の同時確率分布が次の表で与えられている。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>\\(X\\backslash Y\\)</th>
            <th class='border border-slate-300 p-2'>\\(Y=0\\)</th>
            <th class='border border-slate-300 p-2'>\\(Y=1\\)</th>
            <th class='border border-slate-300 p-2'>\\(Y=2\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(X=0\\)</td>
            <td class='border border-slate-300 p-2'>0.10</td>
            <td class='border border-slate-300 p-2'>0.20</td>
            <td class='border border-slate-300 p-2'>0.10</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(X=1\\)</td>
            <td class='border border-slate-300 p-2'>0.15</td>
            <td class='border border-slate-300 p-2'>0.25</td>
            <td class='border border-slate-300 p-2'>0.20</td>
          </tr>
        </tbody>
      </table>
      <br>
      このとき、\\(P(X=1)\\) と \\(P(X=1\\mid Y=1)\\) の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(P(X=1)\\)</th>
            <th class='border border-slate-300 p-2'>\\(P(X=1\\mid Y=1)\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>0.40</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{4}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>0.60</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{4}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>0.60</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{5}{9}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>0.60</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{5}{12}\\)</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      2つの確率変数 \\(X,Y\\) の同時確率分布から \\(X\\) の周辺確率を求めるには、\\(Y\\) のすべての値について確率を足し合わせます。
      \\[
        P(X=x)=\\sum_y P(X=x,Y=y)
      \\]
      条件付き確率は、
      \\[
        P(X=x\\mid Y=y)=\\dfrac{P(X=x,Y=y)}{P(Y=y)}
      \\]
      で求められます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      まず、\\(X=1\\) の周辺確率を求めます。
      \\[
        P(X=1)=0.15+0.25+0.20=0.60
      \\]
      次に、
      \\[
        P(Y=1)=0.20+0.25=0.45
      \\]
      です。したがって、
      \\[
        P(X=1\\mid Y=1)=\\dfrac{P(X=1,Y=1)}{P(Y=1)}=\\dfrac{0.25}{0.45}=\\dfrac{5}{9}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：0.40は \\(P(X=0)\\) です。また、条件付き確率では同時確率0.25をそのまま用いることはできません。<br>
      ・<b>② 誤り</b>：\\(P(X=1)=0.60\\) は正しいですが、\\(P(X=1\\mid Y=1)\\) は \\(0.25\\) ではありません。<br>
      ・<b>③ 正しい</b>：\\(P(X=1)=0.60\\)、\\(P(X=1\\mid Y=1)=5/9\\) です。<br>
      ・<b>④ 誤り</b>：条件 \\(Y=1\\) のもとでは、分母には \\(P(Y=1)=0.45\\) を用いる必要があります。
    `
  },
  {
    id: 2,
    category: "同時分布・共分散",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      2つの離散型確率変数 \\(X,Y\\) の同時確率分布が次の表で与えられている。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>\\(X\\backslash Y\\)</th>
            <th class='border border-slate-300 p-2'>\\(Y=0\\)</th>
            <th class='border border-slate-300 p-2'>\\(Y=1\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(X=-1\\)</td>
            <td class='border border-slate-300 p-2'>0</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{4}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(X=0\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{2}\\)</td>
            <td class='border border-slate-300 p-2'>0</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(X=1\\)</td>
            <td class='border border-slate-300 p-2'>0</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{4}\\)</td>
          </tr>
        </tbody>
      </table>
      <br>
      このとき、\\(X\\) と \\(Y\\) の関係について、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① \\(X\\) と \\(Y\\) は独立であり、共分散は0である<br><br>
      ② \\(X\\) と \\(Y\\) は独立であるが、共分散は0ではない<br><br>
      ③ \\(X\\) と \\(Y\\) は独立ではないが、共分散は0である<br><br>
      ④ \\(X\\) と \\(Y\\) は独立ではなく、共分散も0ではない
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      \\(X,Y\\) が独立であるためには、すべての \\(x,y\\) について、
      \\[
        P(X=x,Y=y)=P(X=x)P(Y=y)
      \\]
      が成立する必要があります。共分散は、
      \\[
        \\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]
      \\]
      です。共分散が0であることを「無相関」といいます。独立ならば無相関ですが、一般に無相関だからといって独立とは限りません。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      まず、
      \\[
        E[X]=(-1)\\dfrac{1}{4}+0\\cdot\\dfrac{1}{2}+1\\cdot\\dfrac{1}{4}=0
      \\]
      です。また、
      \\[
        E[Y]=0\\cdot\\dfrac{1}{2}+1\\left(\\dfrac{1}{4}+\\dfrac{1}{4}\\right)=\\dfrac{1}{2}
      \\]
      です。\\(E[XY]\\) は、
      \\[
        E[XY]=(-1)(1)\\dfrac{1}{4}+(1)(1)\\dfrac{1}{4}=0
      \\]
      となります。よって、
      \\[
        \\operatorname{Cov}(X,Y)=0-(0)\\left(\\dfrac{1}{2}\\right)=0
      \\]
      であり、\\(X,Y\\) は無相関です。一方、
      \\[
        P(X=0,Y=1)=0
      \\]
      ですが、
      \\[
        P(X=0)P(Y=1)=\\dfrac{1}{2}\\cdot\\dfrac{1}{2}=\\dfrac{1}{4}
      \\]
      です。両者が一致しないので、\\(X,Y\\) は独立ではありません。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：共分散は0ですが、\\(X,Y\\) は独立ではありません。<br>
      ・<b>② 誤り</b>：\\(X,Y\\) は独立ではなく、また共分散は0です。<br>
      ・<b>③ 正しい</b>：\\(X,Y\\) は独立ではありませんが、共分散は0です。「無相関なら独立」とは限らないことを示す例です。<br>
      ・<b>④ 誤り</b>：\\(X,Y\\) は独立ではないという部分は正しいですが、共分散は0です。
    `
  },
  {
    id: 3,
    category: "同時分布・共分散",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      2つの確率変数 \\(X,Y\\) について、
      \\[
        V[X]=4,\\qquad V[Y]=9,\\qquad \\operatorname{Cov}(X,Y)=2
      \\]
      である。<br><br>
      このとき、
      \\[
        V[2X-Y]
      \\]
      として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 13<br><br>
      ② 17<br><br>
      ③ 25<br><br>
      ④ 33
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      2つの確率変数 \\(X,Y\\) と定数 \\(a,b\\) について、
      \\[
        V[aX+bY]=a^2V[X]+b^2V[Y]+2ab\\operatorname{Cov}(X,Y)
      \\]
      が成り立ちます。特に、
      \\[
        V[X+Y]=V[X]+V[Y]+2\\operatorname{Cov}(X,Y)
      \\]
      \\[
        V[X-Y]=V[X]+V[Y]-2\\operatorname{Cov}(X,Y)
      \\]
      です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(2X-Y\\) では、\\(a=2,\\ b=-1\\) です。したがって、
      \\[
        \\begin{aligned}
        V[2X-Y]
        &=2^2V[X]+(-1)^2V[Y]+2(2)(-1)\\operatorname{Cov}(X,Y)\\\\
        &=4(4)+9-4(2)\\\\
        &=16+9-8\\\\
        &=17
        \\end{aligned}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：係数や共分散項を正しく処理した値ではありません。<br>
      ・<b>② 正しい</b>：\\(4(4)+9-4(2)=17\\) です。<br>
      ・<b>③ 誤り</b>：\\(4V[X]+V[Y]=25\\) としており、共分散の項を無視した場合の値です。\\(X,Y\\) が無相関とは与えられていないため、共分散項を省略できません。<br>
      ・<b>④ 誤り</b>：共分散項の符号を正にすると \\(16+9+8=33\\) となります。しかし \\(2X-Y\\) では係数の積が \\(2\\times(-1)\\lt 0\\) なので、共分散項は負になります。
    `
  },
  {
    id: 4,
    category: "同時分布・共分散",
    difficulty: 3,
    priority: 3,
    type: "選択式",
    question: `
      2つの確率変数 \\(X,Y\\) について、
      \\[
        E[X]=1,\\qquad E[Y]=2,\\qquad E[XY]=3,
      \\]
      \\[
        V[X]=2,\\qquad V[Y]=3
      \\]
      である。<br><br>
      ここで、新しい確率変数 \\(U,W\\) を
      \\[
        U=2X+Y,\\qquad W=X-2Y
      \\]
      と定める。<br><br>
      このとき、\\(V[U]\\) と \\(V[W]\\) の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(V[U]\\)</th>
            <th class='border border-slate-300 p-2'>\\(V[W]\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>11</td>
            <td class='border border-slate-300 p-2'>14</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>15</td>
            <td class='border border-slate-300 p-2'>10</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>15</td>
            <td class='border border-slate-300 p-2'>18</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>19</td>
            <td class='border border-slate-300 p-2'>10</td>
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
      共分散は、
      \\[
        \\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]
      \\]
      で求められます。また、線形結合の分散について、
      \\[
        V[aX+bY]=a^2V[X]+b^2V[Y]+2ab\\operatorname{Cov}(X,Y)
      \\]
      が成り立ちます。したがって、共分散が直接与えられていない場合でも、\\(E[X]\\)、\\(E[Y]\\)、\\(E[XY]\\) が分かれば共分散を求め、線形結合の分散を計算できます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      まず、\\(X,Y\\) の共分散を求めます。
      \\[
        \\begin{aligned}
        \\operatorname{Cov}(X,Y)
        &=E[XY]-E[X]E[Y]\\\\
        &=3-(1)(2)\\\\
        &=1
        \\end{aligned}
      \\]
      次に、\\(U=2X+Y\\) なので、
      \\[
        \\begin{aligned}
        V[U]
        &=4V[X]+V[Y]+4\\operatorname{Cov}(X,Y)\\\\
        &=4(2)+3+4(1)\\\\
        &=15
        \\end{aligned}
      \\]
      となります。一方、\\(W=X-2Y\\) なので、
      \\[
        \\begin{aligned}
        V[W]
        &=V[X]+4V[Y]-4\\operatorname{Cov}(X,Y)\\\\
        &=2+4(3)-4(1)\\\\
        &=10
        \\end{aligned}
      \\]
      となります。したがって、
      \\[
        V[U]=15,\\qquad V[W]=10
      \\]
      です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(V[U]\\)、\\(V[W]\\) のいずれについても、共分散項を正しく取り入れた値ではありません。<br>
      ・<b>② 正しい</b>：\\(\\operatorname{Cov}(X,Y)=1\\) を求めたうえで線形結合の分散公式を適用すると、\\(V[U]=15\\)、\\(V[W]=10\\) となります。<br>
      ・<b>③ 誤り</b>：\\(V[U]=15\\) は正しいですが、\\(W=X-2Y\\) では共分散項が負になるため、\\(V[W]=18\\) とはなりません。<br>
      ・<b>④ 誤り</b>：\\(V[W]=10\\) は正しいですが、\\(U=2X+Y\\) について係数と共分散項を正しく計算すると \\(V[U]=15\\) です。
    `
  }
];
