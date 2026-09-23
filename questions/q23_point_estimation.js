// 分野23. 点推定①：推定量・不偏性
const allQuestions = [
  {
    id: 1,
    category: "点推定①：推定量・不偏性",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      母集団の分布に含まれる未知の母数 \\(\\theta\\) を、母集団から得られた標本 \\(X_1,\\ldots,X_n\\) に基づいて推定することを考える。標本から計算される統計量 \\(\\hat{\\theta}\\) を用いて \\(\\theta\\) を推定するとき、\\(\\hat{\\theta}\\) を \\(\\theta\\) の推定量という。<br><br>
      推定量には、推定量として望ましいとされるいくつかの性質がある。<br><br>
      推定量 \\(\\hat{\\theta}\\) が
      \\[
        E[\\hat{\\theta}]=\\theta
      \\]
      を満たすとき、\\(\\hat{\\theta}\\) は【 A 】をもつという。また、標本サイズ \\(n\\) を大きくしたとき、\\(\\hat{\\theta}\\) が真の母数 \\(\\theta\\) に確率的に近づく性質を【 B 】という。<br><br>
      さらに、同じ母数 \\(\\theta\\) に対する複数の不偏推定量を比較する場合、一般にその分散が【 C 】推定量ほど、真の母数 \\(\\theta\\) の周辺に集中しやすい。<br><br>
      【 A 】〜【 C 】に入る語句の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
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
            <td class='border border-slate-300 p-2'>不偏性</td>
            <td class='border border-slate-300 p-2'>一致性</td>
            <td class='border border-slate-300 p-2'>小さい</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>不偏性</td>
            <td class='border border-slate-300 p-2'>一致性</td>
            <td class='border border-slate-300 p-2'>大きい</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>一致性</td>
            <td class='border border-slate-300 p-2'>不偏性</td>
            <td class='border border-slate-300 p-2'>小さい</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>一致性</td>
            <td class='border border-slate-300 p-2'>不偏性</td>
            <td class='border border-slate-300 p-2'>大きい</td>
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
      母数 \\(\\theta\\) の推定量 \\(\\hat{\\theta}\\) が
      \\[
        E[\\hat{\\theta}]=\\theta
      \\]
      を満たすとき、\\(\\hat{\\theta}\\) は<b>不偏性</b>をもつといいます。また、標本サイズ \\(n\\) を大きくしたとき、推定量が真の母数に確率的に近づく性質を<b>一致性</b>といいます。同じ母数を推定する不偏推定量が複数存在する場合、一般に分散が小さい推定量ほど、推定値が真の母数の周辺に集中しやすいです。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(E[\\hat{\\theta}]=\\theta\\) は、推定量が平均的に真の母数からずれていないことを表しているため、【 A 】は<b>不偏性</b>です。標本サイズを大きくしたときに推定量が真の母数に近づく性質は、【 B 】の<b>一致性</b>です。不偏推定量同士を比較すると、分散が小さいほど真の母数の周辺への集中度が高くなるため、【 C 】は<b>小さい</b>です。したがって、
      \\[
        \\boxed{\\text{A：不偏性、B：一致性、C：小さい}}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：不偏性、一致性、分散が小さいという3つの関係を正しく表しています。<br>
      ・<b>② 誤り</b>：AとBは正しいですが、推定量の分散は一般に小さい方が真の母数の周辺に集中しやすいです。<br>
      ・<b>③ 誤り</b>：不偏性と一致性が逆になっています。\\(E[\\hat{\\theta}]=\\theta\\) は不偏性を表します。<br>
      ・<b>④ 誤り</b>：不偏性と一致性が逆であることに加え、分散についても大きい方が望ましいわけではありません。
    `
  },
  {
    id: 2,
    category: "点推定①：推定量・不偏性",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      母平均 \\(\\mu\\) をもつ母集団から、互いに独立に \\(n\\) 個の標本
      \\[
        X_1,X_2,\\ldots,X_n
      \\]
      を抽出する。ただし、
      \\[
        E[X_i]=\\mu
      \\]
      とする。<br><br>
      母平均 \\(\\mu\\) の推定量として、
      \\[
        T=\\dfrac{1}{n+1}\\sum_{i=1}^{n}X_i
      \\]
      を考える。<br><br>
      推定量 \\(T\\) のバイアスを
      \\[
        \\operatorname{Bias}(T)=E[T]-\\mu
      \\]
      と定義するとき、\\(T\\) のバイアスと不偏性について、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① \\(\\operatorname{Bias}(T)=0\\) であり、\\(T\\) は不偏推定量である。<br><br>
      ② \\(\\operatorname{Bias}(T)=-\\dfrac{\\mu}{n+1}\\) であり、\\(T\\) は不偏推定量である。<br><br>
      ③ \\(\\operatorname{Bias}(T)=-\\dfrac{\\mu}{n+1}\\) であり、\\(T\\) は一般には不偏推定量ではない。<br><br>
      ④ \\(\\operatorname{Bias}(T)=\\dfrac{\\mu}{n+1}\\) であり、\\(T\\) は一般には不偏推定量ではない。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      母数 \\(\\theta\\) の推定量 \\(\\hat{\\theta}\\) のバイアスは、
      \\[
        \\operatorname{Bias}(\\hat{\\theta})=E[\\hat{\\theta}]-\\theta
      \\]
      で定義されます。したがって、
      \\[
        \\operatorname{Bias}(\\hat{\\theta})=0
      \\]
      すなわち
      \\[
        E[\\hat{\\theta}]=\\theta
      \\]
      であることと、\\(\\hat{\\theta}\\) が不偏推定量であることは同値です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(T\\) の期待値を計算すると、
      \\[
        E[T]=E\\left[\\dfrac{1}{n+1}\\sum_{i=1}^{n}X_i\\right]
      \\]
      です。期待値の線形性より、
      \\[
        E[T]=\\dfrac{1}{n+1}\\sum_{i=1}^{n}E[X_i]=\\dfrac{n}{n+1}\\mu
      \\]
      です。したがって、
      \\[
        \\operatorname{Bias}(T)=\\dfrac{n}{n+1}\\mu-\\mu=-\\dfrac{\\mu}{n+1}
      \\]
      です。一般にはこのバイアスは0ではないため、\\(T\\) は不偏推定量ではありません。
      \\[
        \\boxed{\\operatorname{Bias}(T)=-\\dfrac{\\mu}{n+1}}
      \\]
      <br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(T\\) の期待値は \\(\\mu\\) ではなく \\(\\dfrac{n}{n+1}\\mu\\) なので、一般にはバイアスは0ではありません。<br>
      ・<b>② 誤り</b>：バイアスの計算自体は正しいですが、バイアスが0でない推定量は一般には不偏推定量ではありません。<br>
      ・<b>③ 正しい</b>：バイアスは \\(-\\dfrac{\\mu}{n+1}\\) であり、一般には0でないため不偏推定量ではありません。<br>
      ・<b>④ 誤り</b>：バイアスは「推定量の期待値－母数」で定義されるため、符号が逆です。<br>
      なお、この推定量では
      \\[
        -\\dfrac{\\mu}{n+1}\\to 0\\qquad(n\\to\\infty)
      \\]
      となります。バイアスが有限の \\(n\\) で0でないことと、一致性をもつかどうかは別の問題です。
    `
  },
  {
    id: 3,
    category: "点推定①：推定量・不偏性",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      母平均 \\(\\mu\\)、母分散 \\(\\sigma^2\\) をもつ母集団から、互いに独立に \\(n\\) 個の標本
      \\[
        X_1,X_2,\\ldots,X_n
      \\]
      を抽出し、標本平均を \\(\\bar X\\) とする。<br><br>
      ここで、
      \\[
        V_n=\\dfrac{1}{n}\\sum_{i=1}^n(X_i-\\bar X)^2
      \\]
      とおくと、その期待値は
      \\[
        E[V_n]=\\dfrac{n-1}{n}\\sigma^2
      \\]
      となることが知られている。<br><br>
      このとき、母分散 \\(\\sigma^2\\) の不偏推定量として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① \\(\\dfrac{1}{n}\\sum_{i=1}^n(X_i-\\bar X)^2\\)<br><br>
      ② \\(\\dfrac{1}{n-1}\\sum_{i=1}^n(X_i-\\bar X)^2\\)<br><br>
      ③ \\(\\dfrac{1}{n+1}\\sum_{i=1}^n(X_i-\\bar X)^2\\)<br><br>
      ④ \\(\\dfrac{1}{n-1}\\sum_{i=1}^n(X_i-\\mu)^2\\)
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      母分散 \\(\\sigma^2\\) の不偏推定量とは、その期待値が \\(\\sigma^2\\) に等しくなる推定量です。標本平均からの偏差平方和を \\(n\\) で割った
      \\[
        V_n=\\dfrac{1}{n}\\sum_{i=1}^n(X_i-\\bar X)^2
      \\]
      については、
      \\[
        E[V_n]=\\dfrac{n-1}{n}\\sigma^2
      \\]
      となるため、母分散を平均的にやや小さく見積もります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(V_n\\) の期待値は、
      \\[
        E[V_n]=\\dfrac{n-1}{n}\\sigma^2
      \\]
      です。これを \\(\\sigma^2\\) にするには、\\(V_n\\) を
      \\[
        \\dfrac{n}{n-1}
      \\]
      倍すればよいです。したがって、
      \\[
        \\dfrac{n}{n-1}V_n=\\dfrac{n}{n-1}\\cdot\\dfrac{1}{n}\\sum_{i=1}^n(X_i-\\bar X)^2
      \\]
      より、
      \\[
        S^2=\\dfrac{1}{n-1}\\sum_{i=1}^n(X_i-\\bar X)^2
      \\]
      です。実際、
      \\[
        E[S^2]=\\sigma^2
      \\]
      となるので、\\(S^2\\) は母分散の不偏推定量です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：期待値は \\(\\dfrac{n-1}{n}\\sigma^2\\) であり、一般に母分散を過小評価するため不偏ではありません。<br>
      ・<b>② 正しい</b>：\\(n-1\\) で割ることによって下方へのバイアスが補正され、期待値が \\(\\sigma^2\\) となります。<br>
      ・<b>③ 誤り</b>：\\(n+1\\) で割ると①よりさらに小さな値となり、不偏性を得ることはできません。<br>
      ・<b>④ 誤り</b>：母平均 \\(\\mu\\) は未知の母数であり、通常は標本から計算できないため、これは \\(\\sigma^2\\) の推定量として用いることができません。<br>
      このように、不偏分散で分母を \\(n-1\\) とするのは単なる慣習ではなく、標本平均 \\(\\bar X\\) を用いることで生じる下方へのバイアスを補正するためです。
    `
  },
  {
    id: 4,
    category: "点推定①：推定量・不偏性",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      母平均 \\(\\mu\\)、母分散 \\(\\sigma^2\\) をもつ母集団から、互いに独立に \\(n\\) 個の標本
      \\[
        X_1,X_2,\\ldots,X_n
      \\]
      を抽出する。ただし、
      \\[
        E[X_k]=\\mu\\qquad(k=1,\\ldots,n)
      \\]
      とする。<br><br>
      母平均 \\(\\mu\\) の推定量として、次の4つを考える。
      \\[
        T_1=\\dfrac{1}{n}\\sum_{k=1}^{n}X_k,
      \\]
      \\[
        T_2=X_1,
      \\]
      \\[
        T_3=\\dfrac{2}{n(n+1)}\\sum_{k=1}^{n}kX_k,
      \\]
      \\[
        T_4=\\dfrac{1}{n}\\sum_{k=1}^{n}kX_k.
      \\]
      ただし、
      \\[
        \\sum_{k=1}^{n}k=\\dfrac{n(n+1)}{2}
      \\]
      を用いてよい。<br><br>
      母平均 \\(\\mu\\) の不偏推定量となるものの組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(T_1\\)</th>
            <th class='border border-slate-300 p-2'>\\(T_2\\)</th>
            <th class='border border-slate-300 p-2'>\\(T_3\\)</th>
            <th class='border border-slate-300 p-2'>\\(T_4\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>○</td>
            <td class='border border-slate-300 p-2'>×</td>
            <td class='border border-slate-300 p-2'>×</td>
            <td class='border border-slate-300 p-2'>×</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>○</td>
            <td class='border border-slate-300 p-2'>○</td>
            <td class='border border-slate-300 p-2'>×</td>
            <td class='border border-slate-300 p-2'>×</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>○</td>
            <td class='border border-slate-300 p-2'>×</td>
            <td class='border border-slate-300 p-2'>○</td>
            <td class='border border-slate-300 p-2'>×</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>○</td>
            <td class='border border-slate-300 p-2'>○</td>
            <td class='border border-slate-300 p-2'>○</td>
            <td class='border border-slate-300 p-2'>×</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["①", "②", "③", "④"],
    answer: "④",
    explanation: `
      正解は④です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      推定量 \\(T\\) が母数 \\(\\mu\\) の不偏推定量であるための条件は、
      \\[
        E[T]=\\mu
      \\]
      です。推定量の形が標本平均である必要はありません。標本から作られる異なる統計量であっても、その期待値が \\(\\mu\\) ならば母平均の不偏推定量となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(T_1\\) について、
      \\[
        E[T_1]=\\dfrac{1}{n}\\sum_{k=1}^n E[X_k]=\\dfrac{1}{n}(n\\mu)=\\mu
      \\]
      です。よって \\(T_1\\) は不偏推定量です。<br>
      \\(T_2\\) について、
      \\[
        E[T_2]=E[X_1]=\\mu
      \\]
      です。よって、標本を1個しか使っていない \\(T_2\\) も不偏推定量です。<br>
      \\(T_3\\) について、
      \\[
        E[T_3]=\\dfrac{2}{n(n+1)}\\sum_{k=1}^n kE[X_k]
      \\]
      です。\\(E[X_k]=\\mu\\) より、
      \\[
        E[T_3]=\\dfrac{2\\mu}{n(n+1)}\\sum_{k=1}^n k
      \\]
      です。ここで、
      \\[
        \\sum_{k=1}^n k=\\dfrac{n(n+1)}{2}
      \\]
      だから、
      \\[
        E[T_3]=\\dfrac{2\\mu}{n(n+1)}\\cdot\\dfrac{n(n+1)}{2}=\\mu
      \\]
      です。よって \\(T_3\\) も不偏推定量です。<br>
      一方、\\(T_4\\) について、
      \\[
        E[T_4]=\\dfrac{1}{n}\\sum_{k=1}^n k\\mu=\\dfrac{\\mu}{n}\\cdot\\dfrac{n(n+1)}{2}=\\dfrac{n+1}{2}\\mu
      \\]
      です。一般には \\(\\mu\\) と一致しないため、\\(T_4\\) は不偏推定量ではありません。したがって、
      \\[
        \\boxed{T_1,\\ T_2,\\ T_3}
      \\]
      が不偏推定量です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：標本平均 \\(T_1\\) だけでなく、\\(T_2=X_1\\) と \\(T_3\\) も期待値が \\(\\mu\\) なので不偏推定量です。<br>
      ・<b>② 誤り</b>：\\(T_1,T_2\\) に加えて、\\(T_3\\) も不偏推定量です。<br>
      ・<b>③ 誤り</b>：\\(T_2=X_1\\) も \\(E[X_1]=\\mu\\) なので不偏推定量です。<br>
      ・<b>④ 正しい</b>：\\(T_1,T_2,T_3\\) の期待値はいずれも \\(\\mu\\) に等しいです。一方、\\(T_4\\) は一般には不偏ではありません。<br>
      なお、\\(T_1,T_2,T_3\\) がすべて不偏であることは、これらが同じ程度に望ましい推定量であることを意味しません。推定量の分散なども比較する必要があります。
    `
  }
];
