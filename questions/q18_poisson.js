// 分野18. ポアソン分布・幾何分布
const allQuestions = [
  {
    id: 1,
    category: "ポアソン分布・幾何分布",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(X\\) がパラメータ \\(\\lambda\\) のポアソン分布 \\(\\operatorname{Poi}(\\lambda)\\) に従うとき、その確率質量関数は
      \\[
        P(X=k)=e^{-\\lambda}\\dfrac{\\lambda^k}{k!},\\qquad k=0,1,2,\\ldots
      \\]
      で与えられる。<br><br>
      あるコールセンターに1時間の間にかかってくる電話の件数 \\(X\\) は、平均2件のポアソン分布に従うとする。<br><br>
      このとき、1時間に電話が1件以上かかってくる確率 \\(P(X\\ge 1)\\)、\\(E[X]\\)の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(P(X\\ge 1)\\)</th>
            <th class='border border-slate-300 p-2'>\\(E[X]\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>\\(e^{-2}\\)</td>
            <td class='border border-slate-300 p-2'>1</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(e^{-2}\\)</td>
            <td class='border border-slate-300 p-2'>2</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(1-e^{-2}\\)</td>
            <td class='border border-slate-300 p-2'>1</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(1-e^{-2}\\)</td>
            <td class='border border-slate-300 p-2'>2</td>
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
      確率変数 \\(X\\) がパラメータ \\(\\lambda\\) のポアソン分布に従うとき、
      \\[
        X\\sim\\operatorname{Poi}(\\lambda)
      \\]
      と表し、その確率関数は、
      \\[
        P(X=k)=e^{-\\lambda}\\dfrac{\\lambda^k}{k!},\\qquad k=0,1,2,\\ldots
      \\]
      です。また、ポアソン分布では期待値と分散がともに \\(\\lambda\\) となり、
      \\[
        E[X]=\\lambda,\\qquad V[X]=\\lambda
      \\]
      が成り立ちます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      今回は1時間あたり平均2件なので、
      \\[
        X\\sim\\operatorname{Poi}(2)
      \\]
      です。「1件以上」の余事象は「0件」であるから、
      \\[
        P(X\\ge 1)=1-P(X=0)
      \\]
      と計算できます。ポアソン分布の確率関数より、
      \\[
        P(X=0)=e^{-2}\\dfrac{2^0}{0!}=e^{-2}
      \\]
      なので、
      \\[
        P(X\\ge 1)=1-e^{-2}
      \\]
      となります。また、
      \\[
        E[X]=2,\\qquad V[X]=2
      \\]
      です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(e^{-2}\\) は \\(P(X=0)\\) であり、「1件以上」の確率ではありません。ポアソン分布では期待値は2となります。<br>
      ・<b>② 誤り</b>：\\(e^{-2}\\) は \\(P(X=0)\\) であり、「1件以上」の確率ではありません。期待値は正しいです。<br>
      ・<b>③ 誤り</b>：確率は正しいですが、期待値は1ではなく2です。<br>
      ・<b>④ 正しい</b>：確率と期待値は正しいです。
    `
  },
  {
    id: 2,
    category: "ポアソン分布・幾何分布",
    difficulty: 2,
    priority: 1,
    type: "選択式",
    question: `
      確率変数 \\(X\\) がパラメータ \\(\\lambda\\) のポアソン分布 \\(\\operatorname{Poi}(\\lambda)\\) に従うとき、その確率質量関数は
      \\[
        P(X=k)=e^{-\\lambda}\\dfrac{\\lambda^k}{k!},\\qquad k=0,1,2,\\ldots
      \\]
      で与えられる。<br><br>
      ある病院では、午前中に救急搬送される内科系患者数 \\(X\\) と外科系患者数 \\(Y\\) がそれぞれ
      \\[
        X\\sim\\operatorname{Poi}(2),\\qquad Y\\sim\\operatorname{Poi}(3)
      \\]
      に従い、\\(X,Y\\) は互いに独立であるとする。<br><br>
      <b>独立なポアソン分布に従う確率変数の和も、ポアソン分布に従うことが知られている。</b><br><br>
      午前中に救急搬送される患者の総数を \\(Z=X+Y\\) とする。このとき、\\(Z\\) の分布と \\(P(Z=0)\\) の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(Z\\) の分布</th>
            <th class='border border-slate-300 p-2'>\\(P(Z=0)\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>\\(\\operatorname{Poi}(5)\\)</td>
            <td class='border border-slate-300 p-2'>\\(e^{-5}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(\\operatorname{Poi}(5)\\)</td>
            <td class='border border-slate-300 p-2'>\\(e^{-2}+e^{-3}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(\\operatorname{Poi}(6)\\)</td>
            <td class='border border-slate-300 p-2'>\\(e^{-6}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(\\operatorname{Poi}(5)\\)</td>
            <td class='border border-slate-300 p-2'>\\(1-e^{-5}\\)</td>
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
      互いに独立な確率変数 \\(X,Y\\) が、
      \\[
        X\\sim\\operatorname{Poi}(\\lambda_1),\\qquad Y\\sim\\operatorname{Poi}(\\lambda_2)
      \\]
      に従うとき、その和について、
      \\[
        X+Y\\sim\\operatorname{Poi}(\\lambda_1+\\lambda_2)
      \\]
      が成り立ちます。これをポアソン分布の再生性といいます。また、\\(Z\\sim\\operatorname{Poi}(\\lambda)\\) なら、
      \\[
        P(Z=0)=e^{-\\lambda}
      \\]
      です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(X,Y\\) は互いに独立であり、
      \\[
        X\\sim\\operatorname{Poi}(2),\\qquad Y\\sim\\operatorname{Poi}(3)
      \\]
      なので、再生性より、
      \\[
        Z=X+Y\\sim\\operatorname{Poi}(2+3)=\\operatorname{Poi}(5)
      \\]
      となります。したがって、
      \\[
        P(Z=0)=e^{-5}\\dfrac{5^0}{0!}=e^{-5}
      \\]
      です。また、\\(Z=0\\) となるのは、内科系患者と外科系患者がともに0人の場合です。独立性から、
      \\[
        P(Z=0)=P(X=0)P(Y=0)=e^{-2}e^{-3}=e^{-5}
      \\]
      と計算しても同じ結果が得られます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：再生性よりパラメータを加えて \\(\\operatorname{Poi}(5)\\) となり、0人である確率は \\(e^{-5}\\) です。<br>
      ・<b>② 誤り</b>：\\(Z=0\\) には「\\(X=0\\) または \\(Y=0\\)」ではなく、「\\(X=0\\) かつ \\(Y=0\\)」が必要です。独立性より確率を掛けて \\(e^{-2}e^{-3}=e^{-5}\\) とします。<br>
      ・<b>③ 誤り</b>：再生性ではパラメータを掛けるのではなく加えるため、\\(2\\times 3=6\\) とはなりません。<br>
      ・<b>④ 誤り</b>：\\(1-e^{-5}\\) は \\(P(Z\\ge 1)\\)、すなわち救急搬送患者が1人以上いる確率です。
    `
  },
  {
    id: 3,
    category: "ポアソン分布・幾何分布",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      ある試行では、1回ごとの成功確率が0.2であり、各試行の結果は互いに独立である。この試行を成功するまで繰り返し、初めて成功するまでに行った試行回数を \\(X\\) とする。<br><br>
      初めて4回目の試行で成功する確率 \\(P(X=4)\\) として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① \\((0.2)^4\\)<br><br>
      ② \\((0.8)^4\\)<br><br>
      ③ \\((0.8)^3(0.2)\\)<br><br>
      ④ \\((0.2)^3(0.8)\\)
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      成功確率 \\(p\\) の独立な試行を、初めて成功するまで繰り返します。初めて成功するまでの試行回数 \\(X\\) は幾何分布に従い、
      \\[
        P(X=k)=(1-p)^{k-1}p,\\qquad k=1,2,\\ldots
      \\]
      です。この定義では、期待値と分散は、
      \\[
        E[X]=\\dfrac{1}{p},\\qquad V[X]=\\dfrac{1-p}{p^2}
      \\]
      となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      「初めて4回目に成功する」ということは、失敗、失敗、失敗、成功 という順番になる必要があります。成功確率は0.2なので、失敗確率は
      \\[
        1-0.2=0.8
      \\]
      です。各試行は独立だから、
      \\[
        P(X=4)=(0.8)^3(0.2)=0.1024
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：4回すべて成功する確率を計算しており、「4回目に初めて成功」という条件を表していません。<br>
      ・<b>② 誤り</b>：これは4回連続して失敗する確率です。<br>
      ・<b>③ 正しい</b>：最初の3回が失敗し、4回目が成功する確率なので、\\((0.8)^3(0.2)\\) となります。<br>
      ・<b>④ 誤り</b>：成功確率と失敗確率を逆にしています。
    `
  },
  {
    id: 4,
    category: "ポアソン分布・幾何分布",
    difficulty: 2,
    priority: 1,
    type: "選択式",
    question: `
      成功確率が毎回一定で、各試行が互いに独立である試行を、初めて成功するまで繰り返す。すでに5回連続で失敗していることが分かった。<br><br>
      このとき、今後の試行についての説明として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① すでに5回連続で失敗しているため、次の試行で成功する確率は、試行を始めた時点での成功確率より高くなる。<br><br>
      ② すでに5回連続で失敗しているため、次の試行で成功する確率は、試行を始めた時点での成功確率より低くなる。<br><br>
      ③ これまで5回失敗したという事実によらず、この時点から初めて成功するまでに必要な試行回数の確率分布は、試行を始めた時点と同じである。<br><br>
      ④ 5回連続で失敗したという情報だけから、次の試行で成功するか失敗するかを確定できる。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      幾何分布には<b>無記憶性</b>と呼ばれる性質があります。初めて成功するまでの試行回数を \\(X\\) とすると、
      \\[
        P(X>s+t\\mid X>s)=P(X>t)
      \\]
      が成り立ちます。これは、「すでに何回失敗したか」という過去の情報によって、その時点から先の待ち時間の分布が変化しないことを意味します。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      各試行は独立で、成功確率は毎回一定です。したがって、過去に5回連続で失敗していたとしても、6回目以降の試行の成功確率が変化することはありません。5回目までの結果を知らない状態で試行を始めた場合と、5回失敗した後から改めて考えた場合とで、「この時点から初めて成功するまでに何回かかるか」という確率分布は同じです。これが幾何分布の無記憶性です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：「5回も失敗したので、そろそろ成功しやすくなる」と考えるのは誤りです。成功確率は毎回一定です。<br>
      ・<b>② 誤り</b>：過去の失敗によって次の試行の成功確率が低下することもありません。各試行は互いに独立です。<br>
      ・<b>③ 正しい</b>：過去に何回失敗したかによらず、その時点から成功までに必要な試行回数の分布は同じです。これは幾何分布の無記憶性そのものです。<br>
      ・<b>④ 誤り</b>：過去に5回失敗したことから次の試行の結果を確定することはできません。次の試行も、それまでと同じ成功確率・失敗確率を持ちます。
    `
  }
];
