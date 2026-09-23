// 総合演習 大問04. 連続型確率変数
const comprehensiveSet = {
  id: 4,
  title: "連続型確率変数",
  category: "確率変数",
  difficulty: 2,
  priority: 3,
  stem: `
    連続型確率変数 \\(X\\) の確率密度関数が、定数 \\(c>0\\) を用いて
    \\[
      f(x)=
      \\begin{cases}
      cx(2-x), & 0\\le x\\le 2,\\\\
      0, & \\text{その他}
      \\end{cases}
    \\]
    と表されている。
  `,
  parts: [
    {
      id: 1,
      difficulty: 2,
      priority: 3,
      question: `
        定数 \\(c\\) の値として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
        ① \\(\\dfrac{1}{2}\\)<br>
        ② \\(\\dfrac{2}{3}\\)<br>
        ③ \\(\\dfrac{3}{4}\\)<br>
        ④ \\(\\dfrac{3}{2}\\)
      `,
      choices: ["①", "②", "③", "④"],
      answer: "③",
      explanation: `
        正解は③です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        確率密度関数 \\(f(x)\\) は、
        \\[
          f(x)\\ge 0,\\qquad
          \\int_{-\\infty}^{\\infty}f(x)\\,dx=1
        \\]
        を満たす必要があります。この問題では \\(0\\le x\\le 2\\) 以外で \\(f(x)=0\\) なので、
        \\[
          \\int_0^2 cx(2-x)\\,dx=1
        \\]
        を満たすように \\(c\\) を定めればよいです。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        \\(x(2-x)=2x-x^2\\) より、
        \\[
          \\int_0^2 cx(2-x)\\,dx
          =c\\int_0^2(2x-x^2)\\,dx
          =c\\left[x^2-\\dfrac{x^3}{3}\\right]_0^2
          =c\\left(4-\\dfrac{8}{3}\\right)
          =\\dfrac{4c}{3}.
        \\]
        確率密度関数の積分は1であるから、
        \\[
          \\dfrac{4c}{3}=1
        \\]
        となり、
        \\[
          c=\\dfrac{3}{4}.
        \\]
        <br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：\\(c=1/2\\) とすると、確率密度関数の積分は \\(2/3\\) となり、1になりません。<br>
        ・<b>② 誤り</b>：\\(c=2/3\\) とすると、積分は \\(8/9\\) となります。<br>
        ・<b>③ 正しい</b>：\\(c=3/4\\) とすれば、全範囲での積分が1になります。<br>
        ・<b>④ 誤り</b>：\\(c=3/2\\) とすると、積分は2となります。確率密度関数では、全範囲での積分が1でなければなりません。
      `
    },
    {
      id: 2,
      difficulty: 2,
      priority: 3,
      question: `
        \\[
          P\\left(\\dfrac12\\le X\\le 1\\right)
        \\]
        の値として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
        ① \\(\\dfrac{5}{32}\\)<br>
        ② \\(\\dfrac{9}{32}\\)<br>
        ③ \\(\\dfrac{11}{32}\\)<br>
        ④ \\(\\dfrac{1}{2}\\)
      `,
      choices: ["①", "②", "③", "④"],
      answer: "③",
      explanation: `
        正解は③です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        連続型確率変数 \\(X\\) の確率密度関数を \\(f(x)\\) とすると、
        \\[
          P(a\\le X\\le b)=\\int_a^b f(x)\\,dx
        \\]
        です。問1より、
        \\[
          f(x)=\\dfrac{3}{4}x(2-x)
        \\]
        です。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        求める確率は、
        \\[
          P\\left(\\dfrac12\\le X\\le 1\\right)
          =\\int_{1/2}^{1}\\dfrac{3}{4}x(2-x)\\,dx
        \\]
        です。したがって、
        \\[
          \\begin{aligned}
          P\\left(\\dfrac12\\le X\\le 1\\right)
          &=\\dfrac{3}{4}\\left[x^2-\\dfrac{x^3}{3}\\right]_{1/2}^{1}\\\\
          &=\\dfrac{3}{4}\\left\\{\\dfrac{2}{3}-\\left(\\dfrac{1}{4}-\\dfrac{1}{24}\\right)\\right\\}\\\\
          &=\\dfrac{3}{4}\\left(\\dfrac{2}{3}-\\dfrac{5}{24}\\right)\\\\
          &=\\dfrac{3}{4}\\cdot\\dfrac{11}{24}\\\\
          &=\\dfrac{11}{32}.
          \\end{aligned}
        \\]
        よって、正しい値は \\(\\dfrac{11}{32}\\) です。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：積分区間や原始関数への代入を誤った場合に得られうる値です。<br>
        ・<b>② 誤り</b>：\\(\\dfrac{9}{32}\\) にはなりません。確率は密度関数を区間全体で積分して求める必要があります。<br>
        ・<b>③ 正しい</b>：定積分を正しく計算すると \\(\\dfrac{11}{32}\\) となります。<br>
        ・<b>④ 誤り</b>：区間 \\([1/2,1]\\) の長さが全区間 \\([0,2]\\) の一定割合だからといって、その割合がそのまま確率になるわけではありません。これは \\(X\\) が一様分布の場合にのみ成り立つ考え方です。
      `
    },
    {
      id: 3,
      difficulty: 3,
      priority: 3,
      question: `
        確率変数 \\(X\\) の期待値 \\(E[X]\\) と分散 \\(V[X]\\) の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>\\(E[X]\\)</th>
                <th class='border border-slate-300 p-2'>\\(V[X]\\)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>\\(1\\)</td>
                <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{5}\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>\\(1\\)</td>
                <td class='border border-slate-300 p-2'>\\(\\dfrac{6}{5}\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>\\(\\dfrac{6}{5}\\)</td>
                <td class='border border-slate-300 p-2'>\\(\\dfrac{1}{5}\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>\\(\\dfrac{6}{5}\\)</td>
                <td class='border border-slate-300 p-2'>\\(\\dfrac{6}{5}\\)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      choices: ["①", "②", "③", "④"],
      answer: "①",
      explanation: `
        正解は①です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        連続型確率変数 \\(X\\) について、
        \\[
          E[X]=\\int_{-\\infty}^{\\infty}xf(x)\\,dx
        \\]
        です。また、
        \\[
          E[X^2]=\\int_{-\\infty}^{\\infty}x^2f(x)\\,dx
        \\]
        を用いると、分散は
        \\[
          V[X]=E[X^2]-\\{E[X]\\}^2
        \\]
        と求められます。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        まず期待値を求めます。
        \\[
          E[X]
          =\\int_0^2 x\\cdot\\dfrac{3}{4}x(2-x)\\,dx
          =\\dfrac{3}{4}\\int_0^2(2x^2-x^3)\\,dx
          =\\dfrac{3}{4}\\left[\\dfrac{2}{3}x^3-\\dfrac{1}{4}x^4\\right]_0^2
          =1.
        \\]
        次に \\(E[X^2]\\) を求めます。
        \\[
          E[X^2]
          =\\int_0^2 x^2\\cdot\\dfrac{3}{4}x(2-x)\\,dx
          =\\dfrac{3}{4}\\int_0^2(2x^3-x^4)\\,dx
          =\\dfrac{3}{4}\\left[\\dfrac{1}{2}x^4-\\dfrac{1}{5}x^5\\right]_0^2
          =\\dfrac{6}{5}.
        \\]
        したがって、
        \\[
          V[X]=\\dfrac{6}{5}-1^2=\\dfrac{1}{5}.
        \\]
        よって、
        \\[
          E[X]=1,\\qquad V[X]=\\dfrac{1}{5}.
        \\]
        なお、密度関数は \\(x=1\\) を中心として左右対称なので、\\(E[X]=1\\) は対称性から判断することもできます。<br><br>
        また、一般に以下の第一種オイラー積分の公式が成り立ちます。(統計検定2級では覚える必要はありません。)
        \\[
          \\int_\\alpha^\\beta (x-\\alpha)^m(x-\\beta)^n\\,dx
          =\\dfrac{m!n!}{(m+n+1)!}(\\beta-\\alpha)^{m+n+1}
        \\]
        これを用いると、
        \\begin{align*}
          \\int_0^2 x^2\\cdot\\dfrac{3}{4}x(2-x)\\,dx
          &=\\dfrac{3}{4}\\int_0^2 x^2\\cdot x(2-x)\\,dx \\\\
          &=\\dfrac{3}{4}\\cdot\\dfrac{2!1!}{(2+1+1)!}(2-0)^{2+1+1} \\\\
          &=\\dfrac{3}{4}\\cdot\\dfrac{2!1!}{4!}(2)^{4} = \\dfrac{6}{5}
        \\end{align*}
        と求めることができます。第一種オイラー積分の被積分関数\\(\\alpha=0,\\beta=1\\)としたものはベータ関数とも呼ばれ、ベイズ統計の分野でベータ分布に従う確率変数の確率密度関数を表すことがあります。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 正しい</b>：\\(E[X]=1\\)、\\(E[X^2]=6/5\\) なので、\\(V[X]=1/5\\) です。<br>
        ・<b>② 誤り</b>：\\(6/5\\) は \\(E[X^2]\\) であって、分散ではありません。分散を求めるには \\(\\{E[X]\\}^2\\) を引く必要があります。<br>
        ・<b>③ 誤り</b>：\\(6/5\\) を \\(E[X]\\) としていますが、これは \\(E[X^2]\\) の値です。<br>
        ・<b>④ 誤り</b>：\\(E[X^2]\\) と、期待値および分散を混同しています。
      `
    }
  ]
};
