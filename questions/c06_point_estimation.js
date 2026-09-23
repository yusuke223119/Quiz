// 総合演習 大問06. 点推定
const comprehensiveSet = {
  id: 6,
  title: "点推定",
  category: "点推定",
  difficulty: 2,
  priority: 3,
  stem: `
    \\(X_1,X_2,\\ldots,X_n\\) は、平均 \\(\\mu\\)、分散 \\(\\sigma^2\\) の母集団から得られた独立な無作為標本である。ただし \\(n\\ge 3\\) とする。<br><br>
    母平均 \\(\\mu\\) の推定量として、次の4つを考える。
    \\[
      T_1=\\dfrac{X_1+X_2}{2},
      \\qquad
      T_2=\\dfrac{1}{n}\\sum_{k=1}^{n}X_k,
    \\]
    \\[
      T_3=\\dfrac{2}{n(n+1)}\\sum_{k=1}^{n}kX_k,
      \\qquad
      T_4=\\dfrac{1}{n+1}\\sum_{k=1}^{n}X_k.
    \\]
  `,
  parts: [
    {
      id: 1,
      difficulty: 2,
      priority: 3,
      question: `
        \\(T_1,T_2,T_3,T_4\\) のうち、\\(\\mu\\) の不偏推定量をすべて選んだものとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>\\(T_1\\)</th>
                <th class='border border-slate-300 p-2'>\\(T_2\\)</th>
                <th class='border border-slate-300 p-2'>\\(T_3\\)</th>
                <th class='border border-slate-300 p-2'>\\(T_4\\)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'></td>
                <td class='border border-slate-300 p-2'></td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'></td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'></td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'></td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      choices: ["①", "②", "③", "④"],
      answer: "③",
      explanation: `
        正解は③です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        推定量 \\(T\\) が母数 \\(\\mu\\) の不偏推定量であるとは、
        \\[
          E[T]=\\mu
        \\]
        が成り立つことをいいます。また、期待値の線形性より、定数 \\(a_1,\\ldots,a_n\\) に対して
        \\[
          E\\left[\\sum_{k=1}^{n}a_kX_k\\right]
          =\\sum_{k=1}^{n}a_kE[X_k]
        \\]
        が成り立ちます。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        \\(E[X_k]=\\mu\\) であるから、
        \\[
          E[T_1]=\\dfrac{E[X_1]+E[X_2]}{2}=\\mu.
        \\]
        また、
        \\[
          E[T_2]=\\dfrac1n\\sum_{k=1}^{n}E[X_k]=\\dfrac1n\\cdot n\\mu=\\mu.
        \\]
        \\(T_3\\) については、
        \\[
          E[T_3]=\\dfrac{2}{n(n+1)}\\sum_{k=1}^{n}kE[X_k].
        \\]
        ここで、
        \\[
          \\sum_{k=1}^{n}k=\\dfrac{n(n+1)}{2}
        \\]
        であるから、
        \\[
          E[T_3]=\\dfrac{2\\mu}{n(n+1)}\\cdot\\dfrac{n(n+1)}{2}=\\mu.
        \\]
        一方、
        \\[
          E[T_4]=\\dfrac{1}{n+1}\\sum_{k=1}^{n}E[X_k]=\\dfrac{n}{n+1}\\mu\\neq\\mu.
        \\]
        したがって、不偏推定量は \\(T_1,T_2,T_3\\) です。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：\\(T_1,T_2\\) に加えて、\\(T_3\\) も係数の和が1となるため不偏推定量です。<br>
        ・<b>② 誤り</b>：\\(T_2,T_3\\) だけでなく、\\(T_1\\) も不偏推定量です。<br>
        ・<b>③ 正しい</b>：\\(T_1,T_2,T_3\\) はすべて期待値が \\(\\mu\\) となります。<br>
        ・<b>④ 誤り</b>：\\(T_4\\) の期待値は \\(\\dfrac{n}{n+1}\\mu\\) であり、一般には \\(\\mu\\) と一致しません。
      `
    },
    {
      id: 2,
      difficulty: 3,
      priority: 3,
      question: `
        不偏推定量 \\(T_1,T_2,T_3\\) の分散を比較したとき、\\(n\\ge 3\\) における大小関係として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
        ① \\(V[T_1]\\lt V[T_2]\\lt V[T_3]\\)<br>
        ② \\(V[T_2]\\lt V[T_3]\\lt V[T_1]\\)<br>
        ③ \\(V[T_3]\\lt V[T_2]\\lt V[T_1]\\)<br>
        ④ \\(V[T_1]=V[T_2]=V[T_3]\\)
      `,
      choices: ["①", "②", "③", "④"],
      answer: "②",
      explanation: `
        正解は②です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        独立な確率変数 \\(X_1,\\ldots,X_n\\) と定数 \\(a_1,\\ldots,a_n\\) に対して、
        \\[
          V\\left[\\sum_{k=1}^{n}a_kX_k\\right]
          =\\sum_{k=1}^{n}a_k^2V[X_k]
        \\]
        が成り立ちます。また、不偏推定量同士を比較する場合、分散が小さい推定量ほど、推定値が母数の周辺に集中しやすいです。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        まず、
        \\[
          V[T_1]=V\\left[\\dfrac{X_1+X_2}{2}\\right]=\\dfrac14(\\sigma^2+\\sigma^2)=\\dfrac{\\sigma^2}{2}.
        \\]
        次に、
        \\[
          V[T_2]=V\\left[\\dfrac1n\\sum_{k=1}^{n}X_k\\right]=\\dfrac{\\sigma^2}{n}.
        \\]
        \\(T_3\\) については、
        \\[
          V[T_3]=\\left(\\dfrac{2}{n(n+1)}\\right)^2\\sum_{k=1}^{n}k^2\\sigma^2.
        \\]
        ここで、
        \\[
          \\sum_{k=1}^{n}k^2=\\dfrac{n(n+1)(2n+1)}{6}
        \\]
        より、
        \\[
          V[T_3]=\\dfrac{2(2n+1)}{3n(n+1)}\\sigma^2.
        \\]
        \\(T_2\\) と \\(T_3\\) を比較すると、
        \\[
          \\dfrac{V[T_3]}{V[T_2]}=\\dfrac{2(2n+1)}{3(n+1)}>1\\qquad(n>1)
        \\]
        なので、
        \\[
          V[T_2]\\lt V[T_3].
        \\]
        また \\(n\\ge 3\\) では、
        \\[
          \\dfrac{2(2n+1)}{3n(n+1)}\\lt\\dfrac12
        \\]
        であるため、
        \\[
          V[T_3]\\lt V[T_1].
        \\]
        よって、
        \\[
          V[T_2]\\lt V[T_3]\\lt V[T_1]
        \\]
        となります。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：\\(T_1\\) は \\(X_1,X_2\\) の2個しか利用しないため、その分散は \\(\\sigma^2/2\\) であり、\\(n\\ge 3\\) では3つの中で最も大きいです。<br>
        ・<b>② 正しい</b>：\\(T_2\\) は標本全体を等しい重みで利用し、この3つの不偏推定量の中で最も分散が小さいです。<br>
        ・<b>③ 誤り</b>：\\(T_3\\) も標本全体を利用しますが、各観測値への重みが均等ではないため、\\(T_2\\) より分散が大きいです。<br>
        ・<b>④ 誤り</b>：3つはすべて不偏であっても、分散まで等しいとは限りません。不偏性と推定量のばらつきは別の性質です。
      `
    },
    {
      id: 3,
      difficulty: 3,
      priority: 2,
      question: `
        推定量 \\(T_n\\) が、任意の \\(\\varepsilon>0\\) に対して
        \\[
          P(|T_n-\\mu|\\ge\\varepsilon)\\to 0\\qquad(n\\to\\infty)
        \\]
        を満たすとき、\\(T_n\\) を \\(\\mu\\) の一致推定量という。<br><br>
        必要ならば、平均と分散が存在する確率変数 \\(Y\\) と任意の \\(\\varepsilon>0\\) に対して成り立つChebyshevの不等式
        \\[
          P\\left(|Y-E[Y]|\\ge\\varepsilon\\right)\\le\\dfrac{V[Y]}{\\varepsilon^2}
        \\]
        を用いてよい。<br><br>
        \\(T_1,T_2,T_3,T_4\\) のうち、\\(\\mu\\) の一致推定量をすべて選んだものとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>\\(T_1\\)</th>
                <th class='border border-slate-300 p-2'>\\(T_2\\)</th>
                <th class='border border-slate-300 p-2'>\\(T_3\\)</th>
                <th class='border border-slate-300 p-2'>\\(T_4\\)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'></td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'></td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'></td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'></td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      choices: ["①", "②", "③", "④"],
      answer: "③",
      explanation: `
        正解は③です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        一致性とは、標本サイズ \\(n\\) を大きくしたとき、推定量が推定対象である母数に確率的に近づいていく性質です。特に不偏推定量 \\(T_n\\) について、
        \\[
          E[T_n]=\\mu,\\qquad V[T_n]\\to 0
        \\]
        ならば、Chebyshevの不等式より
        \\[
          P(|T_n-\\mu|\\ge\\varepsilon)\\le\\dfrac{V[T_n]}{\\varepsilon^2}\\to 0
        \\]
        となるので、\\(T_n\\) は一致推定量です。ただし、推定量が不偏であることは、一致性の必要条件ではありません。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        \\(T_1\\) は不偏ですが、
        \\[
          V[T_1]=\\dfrac{\\sigma^2}{2}
        \\]
        であり、\\(n\\) を大きくしても分散は小さくなりません。実際、\\(T_1\\) は常に最初の2個の観測値だけから作られているため、標本サイズを増やしても推定精度は改善しません。したがって、一般には一致推定量ではありません。<br><br>
        \\(T_2\\) については、
        \\[
          E[T_2]=\\mu,\\qquad V[T_2]=\\dfrac{\\sigma^2}{n}\\to 0.
        \\]
        よってChebyshevの不等式から、\\(T_2\\) は \\(\\mu\\) に確率収束し、一致推定量です。<br><br>
        \\(T_3\\) についても、
        \\[
          E[T_3]=\\mu
        \\]
        であり、
        \\[
          V[T_3]=\\dfrac{2(2n+1)}{3n(n+1)}\\sigma^2\\to 0.
        \\]
        したがって \\(T_3\\) も一致推定量です。<br><br>
        最後に \\(T_4\\) は不偏推定量ではありませんが、
        \\[
          T_4=\\dfrac{1}{n+1}\\sum_{k=1}^{n}X_k=\\dfrac{n}{n+1}\\bar X.
        \\]
        標本平均 \\(\\bar X=T_2\\) は \\(\\mu\\) に確率収束し、さらに
        \\[
          \\dfrac{n}{n+1}\\to 1
        \\]
        です。したがって、
        \\[
          T_4=\\dfrac{n}{n+1}\\bar X
        \\]
        も \\(\\mu\\) に確率収束し、\\(T_4\\) も一致推定量です。<br><br>
        以上から、一致推定量は \\(T_2,T_3,T_4\\) です。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：\\(T_1\\) は不偏ではありますが一致推定量ではありません。一方、不偏ではない \\(T_4\\) は一致推定量です。<br>
        ・<b>② 誤り</b>：\\(T_2,T_3\\) は一致推定量ですが、\\(T_4\\) も一致推定量です。「不偏でないから一致しない」と考えるのは誤りです。<br>
        ・<b>③ 正しい</b>：\\(T_2,T_3,T_4\\) はいずれも \\(n\\to\\infty\\) で \\(\\mu\\) に確率収束します。<br>
        ・<b>④ 誤り</b>：\\(T_1\\) は標本サイズが増加しても最初の2個の観測値しか利用せず、一般には \\(\\mu\\) に確率収束しません。
      `
    }
  ]
};
