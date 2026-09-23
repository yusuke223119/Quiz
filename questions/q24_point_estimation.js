// 分野24. 点推定②：一致性・推定量の比較
const allQuestions = [
  {
    id: 1,
    category: "点推定②：一致性・推定量の比較",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      母数 \\(\\theta\\) の推定量を \\(\\hat{\\theta}_n\\) とする。任意の \\(\\varepsilon>0\\) に対して
      \\[
        P\\left(\\lvert\\hat{\\theta}_n-\\theta\\rvert>\\varepsilon\\right)\\to 0\\qquad(n\\to\\infty)
      \\]
      が成り立つとき、\\(\\hat{\\theta}_n\\) を \\(\\theta\\) の【 A 】という。<br><br>
      平均 \\(\\mu\\)、有限な分散 \\(\\sigma^2\\) をもつ母集団から得られた独立同一分布の標本 \\(X_1,\\ldots,X_n\\) について、標本平均
      \\[
        \\bar X=\\dfrac{1}{n}\\sum_{i=1}^{n}X_i
      \\]
      は【 B 】より
      \\[
        \\bar X\\xrightarrow{P}\\mu
      \\]
      を満たす。よって、標本平均 \\(\\bar X\\) は母平均 \\(\\mu\\) の【 A 】である。<br><br>
      【 A 】、【 B 】に入る語句の組合せとして最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>A</th>
            <th class='border border-slate-300 p-2'>B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>一致推定量</td>
            <td class='border border-slate-300 p-2'>大数の法則</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>一致推定量</td>
            <td class='border border-slate-300 p-2'>中心極限定理</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>不偏推定量</td>
            <td class='border border-slate-300 p-2'>大数の法則</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>不偏推定量</td>
            <td class='border border-slate-300 p-2'>中心極限定理</td>
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
      推定量 \\(\\hat{\\theta}_n\\) が母数 \\(\\theta\\) に確率収束する、すなわち任意の \\(\\varepsilon>0\\) に対して
      \\[
        P\\left(\\lvert\\hat{\\theta}_n-\\theta\\rvert>\\varepsilon\\right)\\to 0
      \\]
      が成り立つとき、\\(\\hat{\\theta}_n\\) を \\(\\theta\\) の<b>一致推定量</b>といいます。一方、大数の法則によれば、独立同一分布に従う確率変数の標本平均は、一定の条件のもとで母平均に確率収束します。
      \\[
        \\bar X\\xrightarrow{P}\\mu
      \\]
      <br><br>
      <b>2. 計算・判定プロセス</b><br>
      問題文の
      \\[
        P\\left(\\lvert\\hat{\\theta}_n-\\theta\\rvert>\\varepsilon\\right)\\to 0
      \\]
      は、\\(\\hat{\\theta}_n\\) が \\(\\theta\\) に確率収束することを意味します。したがって【 A 】は<b>一致推定量</b>です。また、標本平均について
      \\[
        \\bar X\\xrightarrow{P}\\mu
      \\]
      が成り立つことを保証する代表的な結果が<b>大数の法則</b>です。したがって【 B 】は大数の法則です。以上より、
      \\[
        \\boxed{\\text{A：一致推定量、B：大数の法則}}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：大数の法則によって標本平均は母平均に確率収束するため、標本平均は母平均の一致推定量です。<br>
      ・<b>② 誤り</b>：一致推定量は正しいですが、標本平均が母平均に確率収束することを表す代表的な法則は大数の法則です。<br>
      ・<b>③ 誤り</b>：大数の法則は正しいですが、確率収束によって定義されるのは不偏推定量ではなく一致推定量です。<br>
      ・<b>④ 誤り</b>：不偏性と一致性、大数の法則と中心極限定理の両方を取り違えています。<br>
      なお、中心極限定理は標本平均そのものが母平均へ近づくことではなく、標準化された標本平均の分布が正規分布に近づくことを表します。大数の法則と中心極限定理は区別しておく必要があります。
    `
  },
  {
    id: 2,
    category: "点推定②：一致性・推定量の比較",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      母平均 \\(\\mu\\)、有限な母分散 \\(\\sigma^2\\) をもつ母集団から、互いに独立に同一の分布に従う標本
      \\[
        X_1,X_2,\\ldots,X_n
      \\]
      を抽出する。母平均 \\(\\mu\\) の推定量として
      \\[
        T_n=\\bar X+\\dfrac{1}{n},\\qquad \\bar X=\\dfrac{1}{n}\\sum_{i=1}^{n}X_i
      \\]
      を考える。<br><br>
      このとき、推定量 \\(T_n\\) の不偏性と一致性について、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① \\(T_n\\) は不偏推定量であり、一致推定量でもある。<br><br>
      ② \\(T_n\\) は不偏推定量であるが、一致推定量ではない。<br><br>
      ③ \\(T_n\\) は不偏推定量ではないが、一致推定量である。<br><br>
      ④ \\(T_n\\) は不偏推定量でも一致推定量でもない。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      母数 \\(\\theta\\) の推定量 \\(\\hat{\\theta}_n\\) が
      \\[
        E[\\hat{\\theta}_n]=\\theta
      \\]
      を満たすとき、不偏推定量といいます。一方、
      \\[
        \\hat{\\theta}_n\\xrightarrow{P}\\theta
      \\]
      が成り立つとき、一致推定量といいます。不偏性は各標本サイズにおける推定量の<b>期待値</b>に関する性質であり、一致性は標本サイズを大きくしたときの<b>確率収束</b>に関する性質です。したがって、両者は同じ性質ではありません。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      まず \\(T_n\\) の期待値を求めます。
      \\[
        E[T_n]=E\\left[\\bar X+\\dfrac{1}{n}\\right]=E[\\bar X]+\\dfrac{1}{n}
      \\]
      \\(E[\\bar X]=\\mu\\) だから、
      \\[
        E[T_n]=\\mu+\\dfrac{1}{n}
      \\]
      です。有限の \\(n\\) では一般に
      \\[
        E[T_n]\\neq\\mu
      \\]
      なので、\\(T_n\\) は不偏推定量ではありません。<br>
      一方、大数の法則より
      \\[
        \\bar X\\xrightarrow{P}\\mu
      \\]
      です。また、
      \\[
        \\dfrac{1}{n}\\to 0
      \\]
      です。したがって、
      \\[
        T_n=\\bar X+\\dfrac{1}{n}\\xrightarrow{P}\\mu
      \\]
      です。よって \\(T_n\\) は一致推定量です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(T_n\\) は一致推定量ではありますが、\\(E[T_n]=\\mu+\\dfrac{1}{n}\\) なので不偏推定量ではありません。<br>
      ・<b>② 誤り</b>：不偏性についての判定が誤っており、一致性についての判定も逆です。<br>
      ・<b>③ 正しい</b>：有限の \\(n\\) ではバイアスをもちますが、そのバイアスは \\(n\\to\\infty\\) で0となり、\\(T_n\\) は \\(\\mu\\) に確率収束します。<br>
      ・<b>④ 誤り</b>：\\(T_n\\) は不偏ではありませんが、一致性はもちます。<br>
      この例から、<b>不偏でないことは、一致性がないことを意味しない</b>ことがわかります。
    `
  },
  {
    id: 3,
    category: "点推定②：一致性・推定量の比較",
    difficulty: 3,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(X_1,X_2,\\ldots,X_n\\) は互いに独立で、いずれも母数 \\(\\lambda>0\\) のポアソン分布に従うものとする。すなわち、
      \\[
        X_i\\sim\\operatorname{Poi}(\\lambda)
      \\]
      であり、
      \\[
        E[X_i]=\\lambda,\\qquad V(X_i)=\\lambda
      \\]
      である。<br><br>
      母数 \\(\\lambda\\) の推定量として標本平均
      \\[
        \\bar X=\\dfrac{1}{n}\\sum_{i=1}^{n}X_i
      \\]
      を考える。<br><br>
      ここで、任意の確率変数 \\(Y\\) と任意の \\(\\varepsilon>0\\) に対して成り立つチェビシェフの不等式
      \\[
        P\\left(\\lvert Y-E[Y]\\rvert\\ge\\varepsilon\\right)\\le\\dfrac{V(Y)}{\\varepsilon^2}
      \\]
      を用いる。<br><br>
      以下は、\\(\\bar X\\) が \\(\\lambda\\) の一致推定量であることを示す過程である。空欄【 A 】〜【 C 】に入るものの組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <div class='p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm leading-relaxed'>
        （証明）<br><br>
        まず、
        \\[
          E[\\bar X]=\\dfrac{1}{n}\\sum_{i=1}^{n}E[X_i]=\\lambda
        \\]
        である。また、\\(X_i\\) が互いに独立であることから、
        \\[
          V(\\bar X)=V\\left(\\dfrac{1}{n}\\sum_{i=1}^{n}X_i\\right)=\\dfrac{1}{n^2}\\sum_{i=1}^{n}V(X_i)
        \\]
        であり、これは【 A 】に等しい。<br><br>
        したがって、任意の \\(\\varepsilon>0\\) に対してチェビシェフの不等式より、
        \\[
          P\\left(\\lvert\\bar X-\\lambda\\rvert\\ge\\varepsilon\\right)\\le\\dfrac{V(\\bar X)}{\\varepsilon^2}
        \\]
        が成り立ち、右辺は【 B 】に等しい。<br><br>
        \\(\\lambda>0\\) と \\(\\varepsilon>0\\) を固定すると、\\(n\\to\\infty\\) のとき【 B 】は【 C 】に収束する。確率は0以上であるから、はさみうちにより
        \\[
          P\\left(\\lvert\\bar X-\\lambda\\rvert\\ge\\varepsilon\\right)\\to 0
        \\]
        となる。よって \\(\\bar X\\xrightarrow{P}\\lambda\\) であり、\\(\\bar X\\) は \\(\\lambda\\) の一致推定量である。
      </div><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>A</th>
            <th class='border border-slate-300 p-2'>B</th>
            <th class='border border-slate-300 p-2'>C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>\\(\\lambda\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{\\lambda}{\\varepsilon^2}\\)</td>
            <td class='border border-slate-300 p-2'>\\(0\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{\\lambda}{n}\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{\\lambda}{n\\varepsilon^2}\\)</td>
            <td class='border border-slate-300 p-2'>\\(0\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{\\lambda}{n}\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{\\lambda}{n\\varepsilon^2}\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\infty\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{\\lambda}{n^2}\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{\\lambda}{n^2\\varepsilon^2}\\)</td>
            <td class='border border-slate-300 p-2'>\\(0\\)</td>
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
      独立な確率変数について、
      \\[
        V\\left(\\sum_{i=1}^{n}X_i\\right)=\\sum_{i=1}^{n}V(X_i)
      \\]
      が成り立ちます。また、
      \\[
        V(aX)=a^2V(X)
      \\]
      です。チェビシェフの不等式
      \\[
        P(\\lvert Y-E[Y]\\rvert\\ge\\varepsilon)\\le\\dfrac{V(Y)}{\\varepsilon^2}
      \\]
      を用いて、推定量が真の母数から一定以上離れる確率を上から評価できます。この上界が \\(n\\to\\infty\\) で0に収束すれば、確率収束、すなわち一致性が示されます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      標本平均の分散は、\\(X_i\\) が互いに独立であることから、
      \\[
        V(\\bar X)=V\\left(\\dfrac{1}{n}\\sum_{i=1}^{n}X_i\\right)=\\dfrac{1}{n^2}\\sum_{i=1}^{n}V(X_i)
      \\]
      です。\\(V(X_i)=\\lambda\\) なので、
      \\[
        V(\\bar X)=\\dfrac{1}{n^2}\\cdot n\\lambda=\\dfrac{\\lambda}{n}
      \\]
      です。したがって【 A 】は \\(\\dfrac{\\lambda}{n}\\) です。<br>
      チェビシェフの不等式より、
      \\[
        P(\\lvert\\bar X-\\lambda\\rvert\\ge\\varepsilon)\\le\\dfrac{V(\\bar X)}{\\varepsilon^2}=\\dfrac{\\lambda}{n\\varepsilon^2}
      \\]
      です。したがって【 B 】は \\(\\dfrac{\\lambda}{n\\varepsilon^2}\\) です。<br>
      \\(\\lambda>0\\) と \\(\\varepsilon>0\\) を固定すると、
      \\[
        \\dfrac{\\lambda}{n\\varepsilon^2}\\to 0\\qquad(n\\to\\infty)
      \\]
      です。したがって【 C 】は \\(0\\) です。確率は0以上なので、
      \\[
        0\\le P(\\lvert\\bar X-\\lambda\\rvert\\ge\\varepsilon)\\le\\dfrac{\\lambda}{n\\varepsilon^2}\\to 0
      \\]
      です。よって、
      \\[
        P(\\lvert\\bar X-\\lambda\\rvert\\ge\\varepsilon)\\to 0
      \\]
      となり、
      \\[
        \\boxed{\\bar X\\xrightarrow{P}\\lambda}
      \\]
      です。すなわち \\(\\bar X\\) は \\(\\lambda\\) の一致推定量です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：独立な \\(n\\) 個の標本を平均することで、標本平均の分散は \\(\\lambda\\) ではなく \\(\\lambda/n\\) となります。チェビシェフの上界も \\(\\lambda/\\varepsilon^2\\) のままでは \\(n\\to\\infty\\) で0に収束しません。<br>
      ・<b>② 正しい</b>：\\(V(\\bar X)=\\lambda/n\\) であり、チェビシェフの上界 \\(\\lambda/(n\\varepsilon^2)\\) が0に収束することから一致性が示されます。<br>
      ・<b>③ 誤り</b>：【 A 】と【 B 】は正しいですが、上界は \\(n\\) が大きくなると0に近づきます。\\(\\infty\\) に発散するわけではありません。<br>
      ・<b>④ 誤り</b>：\\(1/n\\) 倍した確率変数の分散には \\(1/n^2\\) が掛かりますが、\\(n\\) 個の独立な確率変数の分散を加えるため、最終的には \\(\\lambda/n\\) となります。
    `
  },
  {
    id: 4,
    category: "点推定②：一致性・推定量の比較",
    difficulty: 3,
    priority: 2,
    type: "選択式",
    question: `
      母平均 \\(\\mu\\)、母分散 \\(\\sigma^2\\) をもつ母集団から、互いに独立に同一の分布に従う標本
      \\[
        X_1,X_2,\\ldots,X_n\\qquad(n>1)
      \\]
      を抽出する。<br><br>
      母平均 \\(\\mu\\) の推定量として、
      \\[
        T_1=\\dfrac{1}{n}\\sum_{k=1}^{n}X_k,
      \\]
      \\[
        T_2=X_1,
      \\]
      \\[
        T_3=\\dfrac{2}{n(n+1)}\\sum_{k=1}^{n}kX_k
      \\]
      を考える。これらはいずれも \\(\\mu\\) の不偏推定量である。<br><br>
      ここで、
      \\[
        \\sum_{k=1}^{n}k^2=\\dfrac{n(n+1)(2n+1)}{6}
      \\]
      を用いてよい。<br><br>
      \\(T_1,T_2,T_3\\) の分散の大小関係として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① \\(V(T_1)\\lt V(T_3)\\lt V(T_2)\\)<br><br>
      ② \\(V(T_1)\\lt V(T_2)\\lt V(T_3)\\)<br><br>
      ③ \\(V(T_2)\\lt V(T_3)\\lt V(T_1)\\)<br><br>
      ④ \\(V(T_1)=V(T_2)=V(T_3)\\)
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      独立な確率変数 \\(X_1,\\ldots,X_n\\) について、
      \\[
        V\\left(\\sum_{k=1}^{n}a_k X_k\\right)=\\sum_{k=1}^{n}a_k^2 V(X_k)
      \\]
      が成り立ちます。同じ母数を推定する不偏推定量同士を比較する場合、分散が小さい推定量ほど、推定値が真の母数の周辺に集中しやすいです。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(T_1\\) は標本平均なので、
      \\[
        V(T_1)=\\dfrac{\\sigma^2}{n}
      \\]
      です。\\(T_2=X_1\\) なので、
      \\[
        V(T_2)=\\sigma^2
      \\]
      です。\\(T_3\\) については、標本が互いに独立なので、
      \\[
        V(T_3)=\\left(\\dfrac{2}{n(n+1)}\\right)^2\\sum_{k=1}^{n}k^2 V(X_k)
      \\]
      です。\\(V(X_k)=\\sigma^2\\) および
      \\[
        \\sum_{k=1}^{n}k^2=\\dfrac{n(n+1)(2n+1)}{6}
      \\]
      より、
      \\[
        V(T_3)=\\dfrac{4\\sigma^2}{n^2(n+1)^2}\\cdot\\dfrac{n(n+1)(2n+1)}{6}
      \\]
      です。したがって、
      \\[
        V(T_3)=\\dfrac{2(2n+1)}{3n(n+1)}\\sigma^2
      \\]
      です。まず \\(T_1\\) と \\(T_3\\) を比較すると、
      \\[
        \\dfrac{V(T_3)}{V(T_1)}=\\dfrac{2(2n+1)}{3(n+1)}
      \\]
      です。\\(n>1\\) では、
      \\[
        2(2n+1)>3(n+1)
      \\]
      であるため、
      \\[
        V(T_1)\\lt V(T_3)
      \\]
      です。また、
      \\[
        \\dfrac{2(2n+1)}{3n(n+1)}\\lt 1\\qquad(n>1)
      \\]
      なので、
      \\[
        V(T_3)\\lt V(T_2)
      \\]
      です。よって、
      \\[
        \\boxed{V(T_1)\\lt V(T_3)\\lt V(T_2)}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：3つの分散を計算すると、\\(V(T_1)\\lt V(T_3)\\lt V(T_2)\\) となります。<br>
      ・<b>② 誤り</b>：\\(T_2=X_1\\) は1個の標本しか利用しておらず、分散は \\(\\sigma^2\\) であるため、\\(T_3\\) より分散が大きいです。<br>
      ・<b>③ 誤り</b>：\\(T_2\\) の分散が最も小さいわけではありません。むしろ3つの中で最も大きいです。<br>
      ・<b>④ 誤り</b>：3つはいずれも不偏推定量ですが、不偏性が同じだからといって分散まで等しくなるわけではありません。<br>
      この問題のように、<b>同じ母数に対する不偏推定量であっても、その分散は異なりうる</b>です。不偏推定量同士では、一般に分散の小さい推定量の方が真の母数の周辺に集中しやすいです。このような分散に基づく推定量の比較は、推定量の有効性と関係します。
    `
  }
];
