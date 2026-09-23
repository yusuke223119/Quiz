// 分野29. 仮説検定の基礎
const allQuestions = [
  {
    id: 1,
    category: "仮説検定の基礎",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      ある工場では、製品の平均内容量が \\(500\\mathrm{g}\\) となるように製造している。製造方法を変更した後、製品の平均内容量が \\(500\\mathrm{g}\\) から<b>変化したかどうか</b>を検討することにした。<br><br>
      変更後の製品の母平均を \\(\\mu\\) とするとき、設定すべき帰無仮説 \\(H_0\\) と対立仮説 \\(H_1\\) の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(H_0\\)</th>
            <th class='border border-slate-300 p-2'>\\(H_1\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>\\(\\mu\\neq 500\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\mu=500\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(\\mu=500\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\mu\\neq 500\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(\\mu=500\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\mu>500\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(\\mu=500\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\mu\\lt 500\\)</td>
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
      仮説検定では、まず「差がない」「変化がない」などの基準となる仮説を<b>帰無仮説 \\(H_0\\)</b> として設定します。それに対して、検証したい主張を<b>対立仮説 \\(H_1\\)</b> として設定します。対立仮説が
      \\[
        H_1:\\mu\\neq\\mu_0
      \\]
      のように両方向の差を考える場合を<b>両側検定</b>といいます。一方、
      \\[
        H_1:\\mu>\\mu_0
      \\]
      または
      \\[
        H_1:\\mu\\lt\\mu_0
      \\]
      のように一方向だけを考える場合を<b>片側検定</b>といいます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      今回調べたいのは、平均内容量が \\(500\\mathrm{g}\\) から「変化したかどうか」です。増加した場合と減少した場合のどちらも変化に含まれるため、
      \\[
        H_1:\\mu\\neq 500
      \\]
      と設定します。その基準となる帰無仮説は、
      \\[
        H_0:\\mu=500
      \\]
      です。したがって、これは両側検定であり、②が正しいです。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：帰無仮説と対立仮説が逆になっています。<br>
      ・<b>② 正しい</b>：「500gから変化したか」を調べるので、\\(H_0:\\mu=500\\)、\\(H_1:\\mu\\neq 500\\) とします。<br>
      ・<b>③ 誤り</b>：「500gより増加したか」だけを調べる場合の片側検定です。<br>
      ・<b>④ 誤り</b>：「500gより減少したか」だけを調べる場合の片側検定です。
    `
  },
  {
    id: 2,
    category: "仮説検定の基礎",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      ある仮説検定において、帰無仮説 \\(H_0\\) が正しいとき、検定統計量 \\(Z\\) は標準正規分布
      \\[
        Z\\sim N(0,1)
      \\]
      に従うことが分かっている。<br><br>
      有意水準5%で<b>両側検定</b>を行うとき、帰無仮説 \\(H_0\\) の棄却域として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br>
      必要に応じて、標準正規分布表を用いても良い。<br><br>
      ①
      \\[
        Z\\ge 1.645
      \\]
      ②
      \\[
        |Z|\\ge 1.645
      \\]
      ③
      \\[
        Z\\ge 1.96
      \\]
      ④
      \\[
        |Z|\\ge 1.96
      \\]
    `,
    choices: ["①", "②", "③", "④"],
    answer: "④",
    explanation: `
      正解は④です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      <b>有意水準</b>とは、帰無仮説が正しいにもかかわらず、それを棄却してしまう確率をどこまで許容するかを定める基準です。両側検定では、有意水準 \\(\\alpha\\) を分布の左右に分けます。有意水準5%なら、
      \\[
        \\dfrac{0.05}{2}=0.025
      \\]
      ずつを左右の棄却域に割り当てます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      標準正規分布表から、上側確率が0.025となる点は約 \\(1.96\\) です。標準正規分布は0を中心として左右対称なので、
      \\[
        Z\\le -1.96
      \\]
      または
      \\[
        Z\\ge 1.96
      \\]
      のとき \\(H_0\\) を棄却します。まとめると、
      \\[
        \\boxed{|Z|\\ge 1.96}
      \\]
      が棄却域となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(Z\\ge 1.645\\) は標準正規分布を用いた有意水準5%の上側片側検定の棄却域です。<br>
      ・<b>② 誤り</b>：左右それぞれ5%を棄却域としてしまうため、全体では10%となります。<br>
      ・<b>③ 誤り</b>：上側だけを棄却域としており、両側検定になっていません。<br>
      ・<b>④ 正しい</b>：左右それぞれ2.5%を棄却域とする、有意水準5%の両側検定です。
    `
  },
  {
    id: 3,
    category: "仮説検定の基礎",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      ある仮説検定を行ったところ、p値は
      \\[
        p=0.032
      \\]
      であった。<br><br>
      この検定結果についての記述として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 帰無仮説が正しい確率は3.2%である。<br><br>
      ② 対立仮説が正しい確率は96.8%である。<br><br>
      ③ 有意水準5%では帰無仮説を棄却するが、有意水準1%では帰無仮説を棄却しない。<br><br>
      ④ 有意水準5%でも有意水準1%でも帰無仮説を棄却する。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      p値は、<b>帰無仮説 \\(H_0\\) が正しいと仮定したもとで、観測された結果と同程度以上に帰無仮説から離れた結果が得られる確率</b>です。p値と有意水準 \\(\\alpha\\) を比較し、
      \\[
        p\\le\\alpha
      \\]
      ならば、帰無仮説を棄却します。一方、
      \\[
        p>\\alpha
      \\]
      ならば、帰無仮説を棄却しません。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      有意水準5%では、
      \\[
        0.032\\lt 0.05
      \\]
      なので、帰無仮説を棄却します。有意水準1%では、
      \\[
        0.032>0.01
      \\]
      なので、帰無仮説を棄却しません。したがって、
      \\[
        \\boxed{\\text{5%では棄却するが、1%では棄却しない}}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：p値は「帰無仮説が正しい確率」ではありません。帰無仮説が正しいと仮定したうえで計算される確率です。<br>
      ・<b>② 誤り</b>：p値から「対立仮説が正しい確率」を \\(1-p\\) として求めることはできません。<br>
      ・<b>③ 正しい</b>：\\(0.032\\lt 0.05\\) ですが \\(0.032>0.01\\) なので、5%では棄却し、1%では棄却しません。<br>
      ・<b>④ 誤り</b>：有意水準1%では \\(p=0.032>0.01\\) なので棄却できません。
    `
  },
  {
    id: 4,
    category: "仮説検定の基礎",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      仮説検定における過誤について、次の文章の【A】〜【C】に当てはまる語句の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      帰無仮説 \\(H_0\\) が真であるにもかかわらず \\(H_0\\) を棄却する誤りを【A】という。一方、対立仮説 \\(H_1\\) が真であるにもかかわらず \\(H_0\\) を棄却しない誤りを【B】という。<br><br>
      【A】を犯す確率を \\(\\alpha\\) とすると、通常、仮説検定ではこの確率があらかじめ定めた値以下になるように棄却域を設定する。この基準となる値を【C】という。<br><br>
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
            <td class='border border-slate-300 p-2'>第一種の過誤</td>
            <td class='border border-slate-300 p-2'>第二種の過誤</td>
            <td class='border border-slate-300 p-2'>有意水準</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>第二種の過誤</td>
            <td class='border border-slate-300 p-2'>第一種の過誤</td>
            <td class='border border-slate-300 p-2'>有意水準</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>第一種の過誤</td>
            <td class='border border-slate-300 p-2'>第二種の過誤</td>
            <td class='border border-slate-300 p-2'>検出力</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>第二種の過誤</td>
            <td class='border border-slate-300 p-2'>第一種の過誤</td>
            <td class='border border-slate-300 p-2'>信頼係数</td>
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
      帰無仮説 \\(H_0\\) が真であるにもかかわらず \\(H_0\\) を棄却することを<b>第一種の過誤</b>といいます。対立仮説 \\(H_1\\) が真であるにもかかわらず \\(H_0\\) を棄却しないことを<b>第二種の過誤</b>といいます。第一種の過誤を犯す確率は、
      \\[
        P(H_0\\text{を棄却}\\mid H_0\\text{が真})
      \\]
      で表され、この確率を制御する基準が<b>有意水準</b>です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      帰無仮説が真なのに棄却する場合は、
      \\[
        \\boxed{\\text{第一種の過誤}}
      \\]
      です。対立仮説が真なのに帰無仮説を棄却しない場合は、
      \\[
        \\boxed{\\text{第二種の過誤}}
      \\]
      です。有意水準を \\(\\alpha\\) とすると、通常は
      \\[
        P(H_0\\text{を棄却}\\mid H_0\\text{が真})\\le\\alpha
      \\]
      となるように棄却域を設定します。したがって、【A】第一種の過誤、【B】第二種の過誤、【C】有意水準となり、①が正しいです。<br>
      なお、第二種の過誤を犯す確率を \\(\\beta\\) とすると、
      \\[
        1-\\beta
      \\]
      を<b>検出力</b>といい、対立仮説が真であるときに帰無仮説を正しく棄却できる確率を表します。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：第一種・第二種の過誤および有意水準の対応がすべて正しいです。<br>
      ・<b>② 誤り</b>：第一種の過誤と第二種の過誤が逆になっています。<br>
      ・<b>③ 誤り</b>：【A】と【B】は正しいですが、【C】が誤っています。検出力は \\(1-\\beta\\) であり、対立仮説が真のときに帰無仮説を正しく棄却する確率です。<br>
      ・<b>④ 誤り</b>：第一種・第二種の過誤が逆であり、【C】も誤っています。信頼係数は区間推定で用いられる概念であり、有意水準 \\(\\alpha\\) とは通常 \\(1-\\alpha\\) の関係にあります。
    `
  }
];
