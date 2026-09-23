// 分野25. χ²分布・t分布・F分布
const allQuestions = [
  {
    id: 1,
    category: "χ²分布・t分布・F分布",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      確率変数 \\(Z_1,Z_2,\\ldots,Z_k\\) は互いに独立で、いずれも標準正規分布 \\(N(0,1)\\) に従うものとする。<br><br>
      ここで、
      \\[
        X=Z_1^2+Z_2^2+\\cdots+Z_k^2
      \\]
      とおく。<br><br>
      このとき、\\(X\\) が従う分布とその期待値 \\(E[X]\\) の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(X\\) の分布</th>
            <th class='border border-slate-300 p-2'>\\(E[X]\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>自由度 \\(k\\) の \\(\\chi^2\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(k\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>自由度 \\(k-1\\) の \\(\\chi^2\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(k-1\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>自由度 \\(k\\) の \\(t\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(0\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>自由度 \\(k\\) の \\(\\chi^2\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(2k\\)</td>
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
      互いに独立な標準正規確率変数
      \\[
        Z_1,\\ldots,Z_k\\sim N(0,1)
      \\]
      の二乗和
      \\[
        X=\\sum_{i=1}^{k}Z_i^2
      \\]
      は、自由度 \\(k\\) の \\(\\chi^2\\) 分布に従います。
      \\[
        X\\sim\\chi_k^2
      \\]
      自由度 \\(k\\) の \\(\\chi^2\\) 分布について、
      \\[
        E[X]=k,\\qquad V(X)=2k
      \\]
      が成り立ちます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(X\\) は \\(k\\) 個の独立な標準正規確率変数の二乗和なので、\\(\\chi^2\\) 分布の定義から
      \\[
        X\\sim\\chi_k^2
      \\]
      です。また、\\(Z_i\\sim N(0,1)\\) なので、
      \\[
        E[Z_i]=0,\\qquad V(Z_i)=1
      \\]
      です。分散の公式
      \\[
        V(Z_i)=E[Z_i^2]-\\{E[Z_i]\\}^2
      \\]
      より、
      \\[
        E[Z_i^2]=1
      \\]
      です。したがって、
      \\[
        E[X]=\\sum_{i=1}^{k}E[Z_i^2]=k
      \\]
      です。よって、
      \\[
        \\boxed{X\\sim\\chi_k^2,\\qquad E[X]=k}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：\\(k\\) 個の独立な標準正規確率変数の二乗和は自由度 \\(k\\) の \\(\\chi^2\\) 分布に従い、その期待値は \\(k\\) です。<br>
      ・<b>② 誤り</b>：この場合の自由度は \\(k-1\\) ではなく \\(k\\) です。自由度 \\(n-1\\) は、後に標本分散などを扱う際に現れます。<br>
      ・<b>③ 誤り</b>：標準正規確率変数の二乗和から得られるのは \\(t\\) 分布ではなく \\(\\chi^2\\) 分布です。<br>
      ・<b>④ 誤り</b>：\\(2k\\) は自由度 \\(k\\) の \\(\\chi^2\\) 分布の分散であり、期待値ではありません。
    `
  },
  {
    id: 2,
    category: "χ²分布・t分布・F分布",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      確率変数 \\(Z\\) と \\(U\\) は互いに独立で、
      \\[
        Z\\sim N(0,1),\\qquad U\\sim\\chi_\\nu^2
      \\]
      に従うものとする。<br><br>
      ここで、
      \\[
        T=\\dfrac{Z}{\\sqrt{U/\\nu}}
      \\]
      とおく。このとき、\\(T\\) は自由度 \\(\\nu\\) の【 A 】に従う。<br><br>
      また、自由度 \\(\\nu\\) が大きくなるにつれて、この分布は【 B 】に近づく。<br><br>
      【 A 】、【 B 】に入る語句の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
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
            <td class='border border-slate-300 p-2'>\\(t\\) 分布</td>
            <td class='border border-slate-300 p-2'>標準正規分布</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(t\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(\\chi^2\\) 分布</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(F\\) 分布</td>
            <td class='border border-slate-300 p-2'>標準正規分布</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(F\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(\\chi^2\\) 分布</td>
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
      標準正規分布に従う確率変数 \\(Z\\) と、それとは独立に自由度 \\(\\nu\\) の \\(\\chi^2\\) 分布に従う確率変数 \\(U\\) について、
      \\[
        T=\\dfrac{Z}{\\sqrt{U/\\nu}}
      \\]
      とすると、
      \\[
        T\\sim t_\\nu
      \\]
      となります。これが \\(t\\) 分布の基本的な構成です。\\(t\\) 分布は0を中心として左右対称な分布であり、標準正規分布より裾が厚いです。自由度が大きくなるにつれて \\(t\\) 分布は標準正規分布に近づき、
      \\[
        t_\\nu\\longrightarrow N(0,1)\\qquad(\\nu\\to\\infty)
      \\]
      となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      問題文では、
      \\[
        Z\\sim N(0,1),\\qquad U\\sim\\chi_\\nu^2
      \\]
      が互いに独立であり、
      \\[
        T=\\dfrac{Z}{\\sqrt{U/\\nu}}
      \\]
      と定義されています。これは自由度 \\(\\nu\\) の \\(t\\) 分布の定義そのものなので、【 A 】は<b>\\(t\\) 分布</b>です。また、自由度が大きくなると \\(U/\\nu\\) は1の周辺に集中するため、\\(T\\) の分布は標準正規分布に近づきます。したがって、
      \\[
        \\boxed{\\text{A：}t\\text{分布、B：標準正規分布}}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：与えられた比は自由度 \\(\\nu\\) の \\(t\\) 分布に従い、自由度が大きくなると標準正規分布に近づきます。<br>
      ・<b>② 誤り</b>：【A】は正しいですが、\\(t\\) 分布が自由度の増加によって近づくのは \\(\\chi^2\\) 分布ではなく標準正規分布です。<br>
      ・<b>③ 誤り</b>：標準正規分布への漸近は正しいですが、与えられた確率変数 \\(T\\) が従うのは \\(F\\) 分布ではなく \\(t\\) 分布です。<br>
      ・<b>④ 誤り</b>：与えられた確率変数の分布、自由度を大きくしたときの極限の両方が誤っています。
    `
  },
  {
    id: 3,
    category: "χ²分布・t分布・F分布",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      確率変数 \\(U_1,U_2\\) は互いに独立で、
      \\[
        U_1\\sim\\chi_{\\nu_1}^2,\\qquad U_2\\sim\\chi_{\\nu_2}^2
      \\]
      に従うものとする。<br><br>
      このとき、自由度 \\((\\nu_1,\\nu_2)\\) の \\(F\\) 分布に従う確率変数として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① \\(\\dfrac{U_1}{U_2}\\)<br><br>
      ② \\(\\dfrac{U_1/\\nu_1}{U_2/\\nu_2}\\)<br><br>
      ③ \\(\\dfrac{U_1+U_2}{\\nu_1+\\nu_2}\\)<br><br>
      ④ \\(\\dfrac{U_1/\\nu_2}{U_2/\\nu_1}\\)
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      互いに独立な確率変数
      \\[
        U_1\\sim\\chi_{\\nu_1}^2,\\qquad U_2\\sim\\chi_{\\nu_2}^2
      \\]
      に対して、
      \\[
        F=\\dfrac{U_1/\\nu_1}{U_2/\\nu_2}
      \\]
      とすると、
      \\[
        F\\sim F_{\\nu_1,\\nu_2}
      \\]
      となります。\\(F\\) 分布には2つの自由度があり、分子側の自由度が \\(\\nu_1\\)、分母側の自由度が \\(\\nu_2\\) です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(F\\) 分布は、2つの独立な \\(\\chi^2\\) 確率変数をそのまま割ったものではありません。それぞれを対応する自由度で割った
      \\[
        \\dfrac{U_1}{\\nu_1},\\qquad \\dfrac{U_2}{\\nu_2}
      \\]
      の比を取ります。したがって、
      \\[
        F=\\dfrac{U_1/\\nu_1}{U_2/\\nu_2}
      \\]
      であり、正解は②です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：2つの \\(\\chi^2\\) 確率変数をそのまま割っただけでは、一般に \\(F_{\\nu_1,\\nu_2}\\) にはなりません。それぞれを自由度で割る必要があります。<br>
      ・<b>② 正しい</b>：それぞれの \\(\\chi^2\\) 確率変数を対応する自由度で割ったものの比であり、\\(F\\) 分布の定義に一致します。<br>
      ・<b>③ 誤り</b>：\\(F\\) 分布は2つの \\(\\chi^2\\) 確率変数の和から構成される分布ではありません。<br>
      ・<b>④ 誤り</b>：\\(U_1\\) は \\(\\nu_1\\)、\\(U_2\\) は \\(\\nu_2\\) で割る必要があり、自由度の対応が逆になっています。<br>
      また、\\(\\chi^2\\) 分布と同様に、\\(F\\) 分布がとる値は0以上であり、一般に右に裾を引く形をしています。
    `
  },
  {
    id: 4,
    category: "χ²分布・t分布・F分布",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      正規分布、\\(\\chi^2\\) 分布、\\(t\\) 分布、\\(F\\) 分布の関係を整理すると、次の図のように表すことができる。<br>
      ![正規分布・χ²分布・t分布・F分布の関係](picture/q25_4_relations.png)
      ・互いに独立な標準正規確率変数 \\(Z_1,\\ldots,Z_k\\) の二乗和から【 A 】が得られる。<br>
      ・標準正規分布に従う確率変数 \\(Z\\) と、それとは独立な自由度 \\(\\nu\\) の【 A 】に従う確率変数 \\(U\\) から
      \\[
        \\dfrac{Z}{\\sqrt{U/\\nu}}
      \\]
      を作ると【 B 】が得られる。<br>
      ・互いに独立な2つの【 A 】に従う確率変数 \\(U_1,U_2\\) から
      \\[
        \\dfrac{U_1/\\nu_1}{U_2/\\nu_2}
      \\]
      を作ると【 C 】が得られる。<br><br>
      【 A 】〜【 C 】に入る分布の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
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
            <td class='border border-slate-300 p-2'>\\(\\chi^2\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(t\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(F\\) 分布</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(\\chi^2\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(F\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(t\\) 分布</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(t\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(\\chi^2\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(F\\) 分布</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(F\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(t\\) 分布</td>
            <td class='border border-slate-300 p-2'>\\(\\chi^2\\) 分布</td>
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
      正規分布、\\(\\chi^2\\) 分布、\\(t\\) 分布、\\(F\\) 分布は、次のように関係しています。<br>
      ・互いに独立な標準正規確率変数の二乗和は \\(\\chi^2\\) 分布に従います。<br>
      ・標準正規確率変数と、それとは独立な \\(\\chi^2\\) 確率変数から
      \\[
        T=\\dfrac{Z}{\\sqrt{U/\\nu}}
      \\]
      を作ると \\(t\\) 分布が得られます。<br>
      ・互いに独立な2つの \\(\\chi^2\\) 確率変数から
      \\[
        F=\\dfrac{U_1/\\nu_1}{U_2/\\nu_2}
      \\]
      を作ると \\(F\\) 分布が得られます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      図の【 A 】は、独立な標準正規確率変数の二乗和から得られるので \\(\\chi^2\\) 分布です。【 B 】は、標準正規分布との組合せ
      \\[
        \\dfrac{Z}{\\sqrt{U/\\nu}}
      \\]
      から得られるので \\(t\\) 分布です。【 C 】は、独立な2つの \\(\\chi^2\\) 分布の比
      \\[
        \\dfrac{U_1/\\nu_1}{U_2/\\nu_2}
      \\]
      から得られるので \\(F\\) 分布です。したがって、
      \\[
        \\boxed{\\text{A：}\\chi^2\\text{分布、B：}t\\text{分布、C：}F\\text{分布}}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：二乗和から \\(\\chi^2\\) 分布、標準正規との組合せから \\(t\\) 分布、2つの \\(\\chi^2\\) の比から \\(F\\) 分布が得られます。<br>
      ・<b>② 誤り</b>：【A】は正しいですが、\\(t\\) 分布と \\(F\\) 分布が逆です。<br>
      ・<b>③ 誤り</b>：二乗和から得られるのは \\(t\\) 分布ではなく \\(\\chi^2\\) 分布です。<br>
      ・<b>④ 誤り</b>：二乗和から得られるのは \\(F\\) 分布ではなく \\(\\chi^2\\) 分布です。
    `
  }
];
