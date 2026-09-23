// 分野14. 確率変数（質量・密度・分布関数）
const allQuestions = [
  {
    id: 1,
    category: "確率変数（質量・密度・分布関数）",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      離散型確率変数 \\(X\\) の確率分布が次の表で与えられている。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>\\(x\\)</th>
            <th class='border border-slate-300 p-2'>0</th>
            <th class='border border-slate-300 p-2'>1</th>
            <th class='border border-slate-300 p-2'>2</th>
            <th class='border border-slate-300 p-2'>3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(P(X=x)\\)</td>
            <td class='border border-slate-300 p-2'>0.1</td>
            <td class='border border-slate-300 p-2'>0.2</td>
            <td class='border border-slate-300 p-2'>\\(a\\)</td>
            <td class='border border-slate-300 p-2'>0.3</td>
          </tr>
        </tbody>
      </table>
      <br>
      このとき、\\(a\\) の値として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 0.2<br><br>
      ② 0.3<br><br>
      ③ 0.4<br><br>
      ④ 0.6
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      離散型確率変数 \\(X\\) が取り得る各値について、
      \\[
        0\\le P(X=x)\\le 1
      \\]
      が成り立ちます。また、取り得るすべての値について確率を合計すると1になります。
      \\[
        \\sum_x P(X=x)=1
      \\]
      したがって、確率分布表に未知の確率が含まれている場合には、確率の総和が1になることを利用して求められます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      表の確率をすべて加えると、
      \\[
        0.1+0.2+a+0.3=1
      \\]
      です。したがって、
      \\[
        a=1-(0.1+0.2+0.3)=1-0.6=0.4
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(a=0.2\\) とすると確率の総和は0.8となり、1になりません。<br>
      ・<b>② 誤り</b>：\\(a=0.3\\) とすると確率の総和は0.9となります。<br>
      ・<b>③ 正しい</b>：\\(0.1+0.2+0.4+0.3=1\\) となり、確率分布の条件を満たします。<br>
      ・<b>④ 誤り</b>：\\(a=0.6\\) とすると確率の総和が1.2となり、1を超えてしまいます。
    `
  },
  {
    id: 2,
    category: "確率変数（質量・密度・分布関数）",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      離散型確率変数 \\(X\\) の確率分布が次の表で与えられている。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>\\(x\\)</th>
            <th class='border border-slate-300 p-2'>\\(-1\\)</th>
            <th class='border border-slate-300 p-2'>0</th>
            <th class='border border-slate-300 p-2'>1</th>
            <th class='border border-slate-300 p-2'>2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(P(X=x)\\)</td>
            <td class='border border-slate-300 p-2'>0.1</td>
            <td class='border border-slate-300 p-2'>0.3</td>
            <td class='border border-slate-300 p-2'>0.4</td>
            <td class='border border-slate-300 p-2'>0.2</td>
          </tr>
        </tbody>
      </table>
      <br>
      累積分布関数を
      \\[
        F(x)=P(X\\le x)
      \\]
      とする。このとき、\\(F(1)\\) の値として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 0.4<br><br>
      ② 0.7<br><br>
      ③ 0.8<br><br>
      ④ 1.0
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      確率変数 \\(X\\) の累積分布関数（CDF）は、
      \\[
        F(x)=P(X\\le x)
      \\]
      と定義されます。離散型確率変数の場合、\\(x\\) 以下の値を取る確率をすべて加えることで求められます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(F(1)\\) は、
      \\[
        F(1)=P(X\\le 1)
      \\]
      です。\\(X\\le 1\\) を満たす値は \\(-1,\\ 0,\\ 1\\) なので、
      \\[
        F(1)=P(X=-1)+P(X=0)+P(X=1)=0.1+0.3+0.4=0.8
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：0.4は \\(P(X=1)\\) であり、\\(P(X\\le 1)\\) ではありません。<br>
      ・<b>② 誤り</b>：\\(X=-1\\) の確率0.1を含めていません。<br>
      ・<b>③ 正しい</b>：\\(X=-1,0,1\\) の確率を合計すると0.8となります。<br>
      ・<b>④ 誤り</b>：1.0は \\(X=2\\) まで含めた、すべての確率の合計です。
    `
  },
  {
    id: 3,
    category: "確率変数（質量・密度・分布関数）",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      連続型確率変数 \\(X\\) の確率密度関数が、
      \\[
        f(x)=
        \\begin{cases}
        cx & (0\\le x\\le 2)\\\\
        0 & (\\text{それ以外})
        \\end{cases}
      \\]
      で与えられている。ただし、\\(c\\) は正の定数である。<br><br>
      このとき、\\(c\\) の値と \\(P(0\\le X\\le 1)\\) の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(c\\)</th>
            <th class='border border-slate-300 p-2'>\\(P(0\\le X\\le 1)\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{4}\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{8}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{2}\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{4}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(1\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{2}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{2}\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{2}\\)</td>
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
      連続型確率変数の確率密度関数 \\(f(x)\\) は、
      \\[
        f(x)\\ge 0
      \\]
      かつ、
      \\[
        \\int_{-\\infty}^{\\infty}f(x)\\,dx=1
      \\]
      を満たします。また、区間 \\(a\\le X\\le b\\) に入る確率は、
      \\[
        P(a\\le X\\le b)=\\int_a^b f(x)\\,dx
      \\]
      で求められます。確率密度 \\(f(x)\\) そのものではなく、確率密度関数の下の<b>面積</b>が確率を表します。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      まず、確率密度関数全体の面積が1になることから、
      \\[
        \\int_0^2 cx\\,dx=1
      \\]
      です。積分すると、
      \\[
        c\\left[\\dfrac{x^2}{2}\\right]_0^2=2c=1
      \\]
      なので、
      \\[
        c=\\dfrac{1}{2}
      \\]
      となります。次に、
      \\[
        P(0\\le X\\le 1)=\\int_0^1 \\dfrac{x}{2}\\,dx=\\dfrac{1}{2}\\left[\\dfrac{x^2}{2}\\right]_0^1=\\dfrac{1}{4}
      \\]
      となります。したがって、
      \\[
        c=\\dfrac{1}{2},\\qquad P(0\\le X\\le 1)=\\dfrac{1}{4}
      \\]
      です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(c=\\dfrac{1}{4}\\) とすると、確率密度関数全体の積分値が \\(\\dfrac{1}{2}\\) となり、1になりません。<br>
      ・<b>② 正しい</b>：正規化条件から \\(c=\\dfrac{1}{2}\\)、区間積分から \\(P(0\\le X\\le 1)=\\dfrac{1}{4}\\) となります。<br>
      ・<b>③ 誤り</b>：\\(c=1\\) とすると確率密度関数全体の積分値が2となり、確率密度関数の条件を満たしません。<br>
      ・<b>④ 誤り</b>：\\(c=\\dfrac{1}{2}\\) は正しいですが、区間確率は密度を積分して求めるため、\\(\\dfrac{1}{2}\\) ではなく \\(\\dfrac{1}{4}\\) となります。
    `
  },
  {
    id: 4,
    category: "確率変数（質量・密度・分布関数）",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      連続型確率変数 \\(X\\) の累積分布関数が、
      \\[
        F(x)=
        \\begin{cases}
        0 & (x\\lt 0)\\\\[2mm]
        \\dfrac{x^2}{4} & (0\\le x\\lt 2)\\\\[2mm]
        1 & (x\\ge 2)
        \\end{cases}
      \\]
      で与えられている。<br><br>
      このとき、\\(P(1\\lt X\\le 1.5)\\) の値として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① \\(\\displaystyle\\dfrac{1}{16}\\)<br><br>
      ② \\(\\displaystyle\\dfrac{1}{4}\\)<br><br>
      ③ \\(\\displaystyle\\dfrac{5}{16}\\)<br><br>
      ④ \\(\\displaystyle\\dfrac{9}{16}\\)
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      累積分布関数は、
      \\[
        F(x)=P(X\\le x)
      \\]
      と定義されます。したがって、\\(a\\lt b\\) に対して、
      \\[
        P(a\\lt X\\le b)=F(b)-F(a)
      \\]
      が成り立ちます。また、連続型確率変数では任意の一点 \\(a\\) について、
      \\[
        P(X=a)=0
      \\]
      です。このため、区間の端点を含むかどうかは確率に影響しません。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      求める確率は、
      \\[
        P(1\\lt X\\le 1.5)=F(1.5)-F(1)
      \\]
      です。\\(0\\le x\\lt 2\\) では \\(F(x)=\\dfrac{x^2}{4}\\) なので、
      \\[
        F(1.5)=\\dfrac{(1.5)^2}{4}=\\dfrac{2.25}{4}=\\dfrac{9}{16}
      \\]
      であり、
      \\[
        F(1)=\\dfrac{1}{4}=\\dfrac{4}{16}
      \\]
      です。      したがって、
      \\[
        P(1\\lt X\\le 1.5)=\\dfrac{9}{16}-\\dfrac{4}{16}=\\dfrac{5}{16}
      \\]
      となります。なお、\\(X\\) は連続型なので、
      \\[
        P(X=1)=P(X=1.5)=0
      \\]
      です。したがって例えば、
      \\[
        P(1\\lt X\\le 1.5)=P(1\\le X\\le 1.5)=P(1\\lt X\\lt 1.5)
      \\]
      です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：累積分布関数の差を正しく計算した値ではありません。<br>
      ・<b>② 誤り</b>：\\(\\dfrac{1}{4}\\) は \\(F(1)=P(X\\le 1)\\) の値であり、求める区間確率ではありません。<br>
      ・<b>③ 正しい</b>：\\(F(1.5)-F(1)=\\dfrac{9}{16}-\\dfrac{4}{16}=\\dfrac{5}{16}\\) となります。<br>
      ・<b>④ 誤り</b>：\\(\\dfrac{9}{16}\\) は \\(F(1.5)=P(X\\le 1.5)\\) の値であり、\\(1\\) 以下の部分も含んでいます。
    `
  }
];
