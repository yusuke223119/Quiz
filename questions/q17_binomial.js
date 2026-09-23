// 分野17. ベルヌーイ分布と二項分布
const allQuestions = [
  {
    id: 1,
    category: "ベルヌーイ分布と二項分布",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      次の①〜④のうち、確率変数 \\(X\\) が二項分布に従うと考えられるものとして、最も適切なものを1つ選べ。<br><br>
      ① 1個の公平なサイコロを10回独立に投げたとき、「6」が出た回数 \\(X\\)<br><br>
      ② 不良品が3個含まれている10個の製品から、5個を非復元抽出したとき、不良品が含まれる個数 \\(X\\)<br><br>
      ③ 1枚の公平なコインを、初めて表が出るまで繰り返し投げたときの投げた回数 \\(X\\)<br><br>
      ④ ある店舗に1時間の間に来店する客の人数 \\(X\\)
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      各試行において「成功」または「失敗」の2つの結果があり、次の条件を満たす試行を独立に \\(n\\) 回行ったとします。<br>
      ・試行回数 \\(n\\) があらかじめ固定されている。<br>
      ・各試行の成功確率 \\(p\\) が一定である。<br>
      ・各試行が互いに独立である。<br>
      このとき、成功回数 \\(X\\) は二項分布
      \\[
        X\\sim\\operatorname{Bin}(n,p)
      \\]
      に従います。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      ①では、サイコロを投げる回数は10回と固定されています。各試行について「6が出る」を成功とすれば、成功確率は常に
      \\[
        p=\\dfrac{1}{6}
      \\]
      であり、各試行は独立です。したがって、
      \\[
        X\\sim\\operatorname{Bin}\\left(10,\\dfrac{1}{6}\\right)
      \\]
      と考えることができます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：試行回数が固定され、各試行の成功確率が一定であり、試行も独立であるため、成功回数は二項分布に従います。<br>
      ・<b>② 誤り</b>：非復元抽出では、一度抽出した製品を戻さないため、抽出するたびに不良品を引く確率が変化します。このような場合の不良品数は一般に超幾何分布で扱います。<br>
      ・<b>③ 誤り</b>：試行回数があらかじめ固定されておらず、初めて成功するまでの試行回数を考えています。このような確率変数は幾何分布で扱います。<br>
      ・<b>④ 誤り</b>：一定時間内に発生する事象の回数を表すモデルとしては、一定の条件のもとでポアソン分布が用いられることが多いです。
    `
  },
  {
    id: 2,
    category: "ベルヌーイ分布と二項分布",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      ある選手が1回のフリースローを成功させる確率は0.8であり、各フリースローの結果は互いに独立であるとする。この選手が5回フリースローを行ったときの成功回数を \\(X\\) とする。<br><br>
      このとき、\\(P(X=4)\\)、\\(E[X]\\)、\\(V[X]\\) の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(P(X=4)\\)</th>
            <th class='border border-slate-300 p-2'>\\(E[X]\\)</th>
            <th class='border border-slate-300 p-2'>\\(V[X]\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>0.4096</td>
            <td class='border border-slate-300 p-2'>4</td>
            <td class='border border-slate-300 p-2'>0.8</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>0.4096</td>
            <td class='border border-slate-300 p-2'>4</td>
            <td class='border border-slate-300 p-2'>4</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>0.08192</td>
            <td class='border border-slate-300 p-2'>4</td>
            <td class='border border-slate-300 p-2'>0.8</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>0.4096</td>
            <td class='border border-slate-300 p-2'>0.8</td>
            <td class='border border-slate-300 p-2'>4</td>
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
      二項分布
      \\[
        X\\sim\\operatorname{Bin}(n,p)
      \\]
      の確率関数は、
      \\[
        P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}
      \\]
      です。また、期待値と分散はそれぞれ、
      \\[
        E[X]=np
      \\]
      \\[
        V[X]=np(1-p)
      \\]
      です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      今回は、
      \\[
        X\\sim\\operatorname{Bin}(5,0.8)
      \\]
      です。ちょうど4回成功する確率は、
      \\[
        \\begin{aligned}
        P(X=4)
        &=\\binom{5}{4}(0.8)^4(0.2)\\\\
        &=5\\times 0.4096\\times 0.2\\\\
        &=0.4096
        \\end{aligned}
      \\]
      となります。期待値は、
      \\[
        E[X]=5\\times 0.8=4
      \\]
      です。分散は、
      \\[
        V[X]=5\\times 0.8\\times 0.2=0.8
      \\]
      です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：二項分布の確率関数、期待値、分散の公式を適用すると、それぞれ \\(0.4096,\\ 4,\\ 0.8\\) となります。<br>
      ・<b>② 誤り</b>：\\(E[X]=4\\) は正しいですが、二項分布の分散は \\(np\\) ではなく \\(np(1-p)\\) です。<br>
      ・<b>③ 誤り</b>：\\(0.08192=(0.8)^4(0.2)\\) は、「特定の4回が成功し、特定の1回が失敗する」確率です。失敗する回の選び方が \\(\\binom{5}{4}=5\\) 通りあることを考慮する必要があります。<br>
      ・<b>④ 誤り</b>：0.8は1回の試行における成功確率 \\(p\\) であり、5回の成功回数 \\(X\\) の期待値ではありません。また、分散も4ではありません。
    `
  },
  {
    id: 3,
    category: "ベルヌーイ分布と二項分布",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(X\\) が成功確率 \\(p\\) のベルヌーイ分布に従うとする。すなわち、
      \\[
        P(X=1)=p,\\qquad P(X=0)=1-p
      \\]
      である。ベルヌーイ分布の分散を導出しよう。<br><br>
      \\(X\\) は0または1の値しか取らないため、
      \\[
        X^2=X
      \\]
      が常に成り立つ。したがって、
      \\[
        E[X]=p,\\qquad E[X^2]=\\boxed{\\mathrm{A}}
      \\]
      であり、
      \\[
        V[X]=E[X^2]-E[X]^2=\\boxed{\\mathrm{B}}
      \\]
      となる。<br><br>
      空欄 \\(\\mathrm{A},\\mathrm{B}\\) の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(\\mathrm{A}\\)</th>
            <th class='border border-slate-300 p-2'>\\(\\mathrm{B}\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>\\(p\\)</td>
            <td class='border border-slate-300 p-2'>\\(p(1-p)\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(p^2\\)</td>
            <td class='border border-slate-300 p-2'>\\(p(1-p)\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(p\\)</td>
            <td class='border border-slate-300 p-2'>\\(p^2\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(p^2\\)</td>
            <td class='border border-slate-300 p-2'>\\(p^2(1-p)\\)</td>
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
      ベルヌーイ分布に従う確率変数 \\(X\\) は、0または1のみを取ります。
      \\[
        X\\in\\{0,1\\}
      \\]
      0と1については、
      \\[
        0^2=0,\\qquad 1^2=1
      \\]
      なので、常に
      \\[
        X^2=X
      \\]
      が成り立ちます。また、分散について、
      \\[
        V[X]=E[X^2]-E[X]^2
      \\]
      が成り立ちます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(X^2=X\\) なので、
      \\[
        E[X^2]=E[X]=p
      \\]
      となります。したがって、
      \\[
        \\mathrm{A}=p
      \\]
      です。よって、
      \\[
        \\begin{aligned}
        V[X]
        &=E[X^2]-E[X]^2\\\\
        &=p-p^2\\\\
        &=p(1-p)
        \\end{aligned}
      \\]
      となるため、
      \\[
        \\mathrm{B}=p(1-p)
      \\]
      です。<br>
      さらに、独立なベルヌーイ確率変数 \\(X_1,\\ldots,X_n\\) がすべて成功確率 \\(p\\) を持つとき、
      \\[
        S=X_1+\\cdots+X_n
      \\]
      は二項分布 \\(\\operatorname{Bin}(n,p)\\) に従います。期待値の線形性より、
      \\[
        E[S]=\\sum_{i=1}^n E[X_i]=np
      \\]
      です。また、独立性より、
      \\[
        V[S]=\\sum_{i=1}^n V[X_i]=np(1-p)
      \\]
      となります。したがって、二項分布の期待値・分散の公式はベルヌーイ確率変数の和から導くことができます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：\\(X^2=X\\) より \\(E[X^2]=p\\) であり、\\(V[X]=p-p^2=p(1-p)\\) となります。<br>
      ・<b>② 誤り</b>：一般に \\(E[X^2]\\) と \\(E[X]^2\\) は異なります。ベルヌーイ分布では \\(E[X^2]=p\\) です。<br>
      ・<b>③ 誤り</b>：\\(\\mathrm{A}=p\\) は正しいですが、分散は \\(p^2\\) ではなく \\(p(1-p)\\) です。<br>
      ・<b>④ 誤り</b>：\\(E[X^2]=p^2\\) ではないため、その後の分散の計算も誤っています。
    `
  },
  {
    id: 4,
    category: "ベルヌーイ分布と二項分布",
    difficulty: 2,
    priority: 1,
    type: "選択式",
    question: `
      互いに独立な確率変数 \\(X,Y\\) が、
      \\[
        X\\sim\\operatorname{Bin}(10,0.3),\\qquad Y\\sim\\operatorname{Bin}(20,0.3)
      \\]
      に従っている。<br><br>
      このとき、\\(X+Y\\) の分布として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① \\(\\operatorname{Bin}(30,0.3)\\)<br><br>
      ② \\(\\operatorname{Bin}(30,0.6)\\)<br><br>
      ③ \\(\\operatorname{Bin}(200,0.3)\\)<br><br>
      ④ 一般に二項分布にはならない
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      互いに独立な確率変数 \\(X,Y\\) が、共通の成功確率 \\(p\\) を持つ二項分布
      \\[
        X\\sim\\operatorname{Bin}(n,p),\\qquad Y\\sim\\operatorname{Bin}(m,p)
      \\]
      に従うとき、
      \\[
        X+Y\\sim\\operatorname{Bin}(n+m,p)
      \\]
      が成り立ちます。これは二項分布の再生性と呼ばれる性質です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      今回、
      \\[
        X\\sim\\operatorname{Bin}(10,0.3)
      \\]
      は成功確率0.3の独立な10回の試行における成功回数、
      \\[
        Y\\sim\\operatorname{Bin}(20,0.3)
      \\]
      は成功確率0.3の独立な20回の試行における成功回数と考えることができます。\\(X,Y\\) は互いに独立で、成功確率もともに0.3であるため、両者を合わせれば成功確率0.3の30回の試行における成功回数となります。したがって、
      \\[
        X+Y\\sim\\operatorname{Bin}(30,0.3)
      \\]
      です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：独立で成功確率 \\(p=0.3\\) が共通なので、試行回数を加えて \\(\\operatorname{Bin}(30,0.3)\\) となります。<br>
      ・<b>② 誤り</b>：成功確率を \\(0.3+0.3=0.6\\) とすることはできません。和を取っても各試行の成功確率は0.3のままです。<br>
      ・<b>③ 誤り</b>：試行回数は \\(10\\times 20\\) ではなく \\(10+20=30\\) となります。<br>
      ・<b>④ 誤り</b>：今回は \\(X,Y\\) が独立で、かつ成功確率が共通であるため、二項分布の再生性を適用できます。ただし、例えば成功確率が異なる2つの二項分布の和は、一般には通常の二項分布にはなりません。
    `
  }
];
