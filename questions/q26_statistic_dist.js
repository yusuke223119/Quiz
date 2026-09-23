// 分野26. 統計量が従う分布
const allQuestions = [
  {
    id: 1,
    category: "統計量が従う分布",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      正規母集団
      \\[
        N(\\mu,\\sigma^2)
      \\]
      から、大きさ \\(n\\) の無作為標本
      \\[
        X_1,X_2,\\ldots,X_n
      \\]
      を得たとする。標本平均を
      \\[
        \\bar X=\\dfrac{1}{n}\\sum_{i=1}^{n}X_i
      \\]
      とする。<br><br>
      このとき、\\(\\bar X\\) が従う分布と、それを標準化した統計量の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(\\bar X\\) の分布</th>
            <th class='border border-slate-300 p-2'>標準化した統計量</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>\\(\\bar X\\sim N\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\sim N(0,1)\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(\\bar X\\sim N(\\mu,\\sigma^2)\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{\\bar X-\\mu}{\\sigma}\\sim N(0,1)\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(\\bar X\\sim N\\left(\\mu,\\dfrac{\\sigma^2}{n^2}\\right)\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{\\bar X-\\mu}{\\sigma/n}\\sim N(0,1)\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(\\bar X\\sim N\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\dfrac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\sim t_{n-1}\\)</td>
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
      正規母集団
      \\[
        X_i\\sim N(\\mu,\\sigma^2)
      \\]
      から得られた標本の標本平均について、
      \\[
        E[\\bar X]=\\mu,\\qquad V(\\bar X)=\\dfrac{\\sigma^2}{n}
      \\]
      が成り立ちます。正規分布に従う独立な確率変数の線形結合も正規分布に従うので、
      \\[
        \\bar X\\sim N\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)
      \\]
      です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(\\bar X\\) の標準偏差は、
      \\[
        \\sqrt{V(\\bar X)}=\\dfrac{\\sigma}{\\sqrt n}
      \\]
      です。したがって標準化すると、
      \\[
        Z=\\dfrac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\sim N(0,1)
      \\]
      となります。ここで重要なのは、母集団自体が正規分布であるため、この結果は大標本近似ではなく、有限の \\(n\\) に対して厳密に成立することです。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：標本平均の平均は \\(\\mu\\)、分散は \\(\\sigma^2/n\\) であり、標準化すれば標準正規分布に従います。<br>
      ・<b>② 誤り</b>：標本平均をとることで分散は \\(\\sigma^2/n\\) になります。元の母分散 \\(\\sigma^2\\) のままではありません。<br>
      ・<b>③ 誤り</b>：標本平均の分散は \\(\\sigma^2/n^2\\) ではなく \\(\\sigma^2/n\\) であり、標準偏差は \\(\\sigma/\\sqrt n\\) です。<br>
      ・<b>④ 誤り</b>：母標準偏差 \\(\\sigma\\) を用いて標準化した統計量は標準正規分布に従います。母標準偏差が未知で、標本標準偏差 \\(S\\) を用いる場合に \\(t\\) 分布が現れます。
    `
  },
  {
    id: 2,
    category: "統計量が従う分布",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      正規母集団
      \\[
        N(\\mu,\\sigma^2)
      \\]
      から、大きさ \\(n\\) の無作為標本
      \\[
        X_1,X_2,\\ldots,X_n
      \\]
      を得たとする。標本平均を \\(\\bar X\\)、不偏分散を
      \\[
        S^2=\\dfrac{1}{n-1}\\sum_{i=1}^{n}(X_i-\\bar X)^2
      \\]
      とする。<br><br>
      このとき、
      \\[
        U=\\dfrac{(n-1)S^2}{\\sigma^2}
      \\]
      は【 A 】に従う。<br><br>
      また、
      \\[
        Z=\\dfrac{\\bar X-\\mu}{\\sigma/\\sqrt n}
      \\]
      と \\(U\\) は互いに独立であり、
      \\[
        T=\\dfrac{\\bar X-\\mu}{S/\\sqrt n}
      \\]
      は【 B 】に従う。<br><br>
      【 A 】、【 B 】に入る分布の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
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
            <td class='border border-slate-300 p-2'>自由度 \\(n-1\\) の \\(\\chi^2\\) 分布</td>
            <td class='border border-slate-300 p-2'>自由度 \\(n-1\\) の \\(t\\) 分布</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>自由度 \\(n\\) の \\(\\chi^2\\) 分布</td>
            <td class='border border-slate-300 p-2'>自由度 \\(n\\) の \\(t\\) 分布</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>自由度 \\(n-1\\) の \\(\\chi^2\\) 分布</td>
            <td class='border border-slate-300 p-2'>標準正規分布</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>自由度 \\(n-1\\) の \\(t\\) 分布</td>
            <td class='border border-slate-300 p-2'>自由度 \\(n-1\\) の \\(\\chi^2\\) 分布</td>
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
      正規母集団から得られた標本の不偏分散について、
      \\[
        \\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi_{n-1}^2
      \\]
      が成り立ちます。また、正規母集団では \\(\\bar X\\) と \\(S^2\\) は独立です。したがって、
      \\[
        \\dfrac{\\bar X-\\mu}{S/\\sqrt n}\\sim t_{n-1}
      \\]
      となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      まず、
      \\[
        U=\\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi_{n-1}^2
      \\]
      です。また、
      \\[
        Z=\\dfrac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\sim N(0,1)
      \\]
      です。\\(Z\\) と \\(U\\) は独立であるため、\\(t\\) 分布の定義より、
      \\[
        \\dfrac{Z}{\\sqrt{U/(n-1)}}\\sim t_{n-1}
      \\]
      です。左辺を整理すると、
      \\[
        \\dfrac{(\\bar X-\\mu)/(\\sigma/\\sqrt n)}{\\sqrt{\\left\\{(n-1)S^2/\\sigma^2\\right\\}/(n-1)}}=\\dfrac{\\bar X-\\mu}{S/\\sqrt n}
      \\]
      です。よって、
      \\[
        \\boxed{\\dfrac{\\bar X-\\mu}{S/\\sqrt n}\\sim t_{n-1}}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：標本分散から作られる \\(U\\) は自由度 \\(n-1\\) の \\(\\chi^2\\) 分布に従い、そこから作られる \\(T\\) は自由度 \\(n-1\\) の \\(t\\) 分布に従います。<br>
      ・<b>② 誤り</b>：どちらの自由度も \\(n\\) ではなく \\(n-1\\) です。<br>
      ・<b>③ 誤り</b>：母標準偏差 \\(\\sigma\\) を使う \\(Z\\) は標準正規分布に従いますが、\\(\\sigma\\) を \\(S\\) に置き換えた \\(T\\) は自由度 \\(n-1\\) の \\(t\\) 分布に従います。<br>
      ・<b>④ 誤り</b>：\\(\\chi^2\\) 分布と \\(t\\) 分布の対応が逆です。
    `
  },
  {
    id: 3,
    category: "統計量が従う分布",
    difficulty: 3,
    priority: 2,
    type: "選択式",
    question: `
      互いに独立な2つの正規母集団
      \\[
        N(\\mu_1,\\sigma_1^2),\\qquad N(\\mu_2,\\sigma_2^2)
      \\]
      から、それぞれ大きさ \\(n_1,n_2\\) の無作為標本を得たとする。それぞれの標本の不偏分散を \\(S_1^2,S_2^2\\) とする。<br><br>
      このとき、
      \\[
        U_1=\\dfrac{(n_1-1)S_1^2}{\\sigma_1^2},\\qquad U_2=\\dfrac{(n_2-1)S_2^2}{\\sigma_2^2}
      \\]
      が従う分布、および
      \\[
        R=\\dfrac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}
      \\]
      が従う分布の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(U_1\\)</th>
            <th class='border border-slate-300 p-2'>\\(U_2\\)</th>
            <th class='border border-slate-300 p-2'>\\(R\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>\\(\\chi_{n_1-1}^2\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\chi_{n_2-1}^2\\)</td>
            <td class='border border-slate-300 p-2'>\\(F_{n_1-1,n_2-1}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(\\chi_{n_1}^2\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\chi_{n_2}^2\\)</td>
            <td class='border border-slate-300 p-2'>\\(F_{n_1,n_2}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(t_{n_1-1}\\)</td>
            <td class='border border-slate-300 p-2'>\\(t_{n_2-1}\\)</td>
            <td class='border border-slate-300 p-2'>\\(F_{n_1-1,n_2-1}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(\\chi_{n_1-1}^2\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\chi_{n_2-1}^2\\)</td>
            <td class='border border-slate-300 p-2'>\\(t_{n_1+n_2-2}\\)</td>
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
      正規母集団から得られた標本の不偏分散について、
      \\[
        \\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi_{n-1}^2
      \\]
      が成り立ちます。また、互いに独立な
      \\[
        U_1\\sim\\chi_{\\nu_1}^2,\\qquad U_2\\sim\\chi_{\\nu_2}^2
      \\]
      に対して、
      \\[
        \\dfrac{U_1/\\nu_1}{U_2/\\nu_2}\\sim F_{\\nu_1,\\nu_2}
      \\]
      です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      第1標本について、
      \\[
        U_1=\\dfrac{(n_1-1)S_1^2}{\\sigma_1^2}\\sim\\chi_{n_1-1}^2
      \\]
      です。第2標本についても、
      \\[
        U_2=\\dfrac{(n_2-1)S_2^2}{\\sigma_2^2}\\sim\\chi_{n_2-1}^2
      \\]
      です。2標本は互いに独立なので \\(U_1,U_2\\) も独立です。\\(F\\) 分布の定義を使うと、
      \\[
        \\dfrac{U_1/(n_1-1)}{U_2/(n_2-1)}\\sim F_{n_1-1,n_2-1}
      \\]
      です。ここで、
      \\[
        \\dfrac{U_1}{n_1-1}=\\dfrac{S_1^2}{\\sigma_1^2},\\qquad \\dfrac{U_2}{n_2-1}=\\dfrac{S_2^2}{\\sigma_2^2}
      \\]
      なので、
      \\[
        \\boxed{\\dfrac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}\\sim F_{n_1-1,n_2-1}}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：それぞれの標本分散から自由度 \\(n_i-1\\) の \\(\\chi^2\\) 分布が得られ、それらの適切な比から \\(F\\) 分布が得られます。<br>
      ・<b>② 誤り</b>：\\(\\chi^2\\) 分布の自由度は \\(n_i\\) ではなく \\(n_i-1\\) です。したがって \\(F\\) 分布の自由度も誤っています。<br>
      ・<b>③ 誤り</b>：標本分散から直接得られるのは \\(t\\) 分布ではなく \\(\\chi^2\\) 分布です。<br>
      ・<b>④ 誤り</b>：独立な2つの \\(\\chi^2\\) 確率変数をそれぞれ自由度で割ったものの比から得られるのは \\(F\\) 分布です。<br>
      特に、2つの母分散が等しく \\(\\sigma_1^2=\\sigma_2^2\\) ならば、
      \\[
        \\dfrac{S_1^2}{S_2^2}\\sim F_{n_1-1,n_2-1}
      \\]
      となります。この性質は、2つの母分散を比較する際に利用されます。
    `
  },
  {
    id: 4,
    category: "統計量が従う分布",
    difficulty: 3,
    priority: 2,
    type: "選択式",
    question: `
      平均 \\(\\mu\\)、分散 \\(\\sigma^2\\) の母集団から、大きさ \\(n\\) の独立同一分布に従う無作為標本
      \\[
        X_1,X_2,\\ldots,X_n
      \\]
      を得たとする。標本平均を \\(\\bar X\\)、不偏分散を
      \\[
        S^2=\\dfrac{1}{n-1}\\sum_{i=1}^{n}(X_i-\\bar X)^2
      \\]
      とし、
      \\[
        U=\\dfrac{(n-1)S^2}{\\sigma^2},\\qquad T=\\dfrac{\\sqrt n(\\bar X-\\mu)}{S}
      \\]
      とする。<br><br>
      \\(\\bar X,U,T\\) が従う分布に関する記述として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 母集団が正規分布 \\(N(\\mu,\\sigma^2)\\) ならば、有限の標本サイズでも
      \\[
        \\bar X\\sim N\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right),\\qquad U\\sim\\chi_{n-1}^2,\\qquad T\\sim t_{n-1}
      \\]
      が厳密に成り立つ。一方、母集団が正規分布でなくても、適切な条件のもとで標本サイズが大きくなれば、標準化された標本平均や \\(T\\) の分布を標準正規分布で近似できる。<br><br>
      ② 母集団が正規分布であっても、有限の標本サイズでは \\(\\bar X\\) の分布は正規分布とは限らず、標本サイズが十分大きいときにのみ中心極限定理によって正規分布で近似できる。<br><br>
      ③ 母集団の分布によらず、有限の標本サイズについて
      \\[
        U\\sim\\chi_{n-1}^2,\\qquad T\\sim t_{n-1}
      \\]
      が厳密に成り立つ。<br><br>
      ④ 母集団が正規分布でなくても、標本サイズを十分大きくすれば、
      \\[
        U\\sim\\chi_{n-1}^2,\\qquad T\\sim t_{n-1}
      \\]
      が漸近的に厳密に成立する。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      母集団が正規分布 \\(N(\\mu,\\sigma^2)\\) であれば、有限の標本サイズ \\(n\\) について、
      \\[
        \\bar X\\sim N\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)
      \\]
      が厳密に成り立ちます。さらに、正規母集団では、
      \\[
        \\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi_{n-1}^2
      \\]
      および
      \\[
        \\dfrac{\\sqrt n(\\bar X-\\mu)}{S}\\sim t_{n-1}
      \\]
      も有限標本で厳密に成立します。<br><br>
      一方、母集団が正規分布でなくても、平均・分散などについて適切な条件が満たされれば、中心極限定理によって
      \\[
        \\dfrac{\\sqrt n(\\bar X-\\mu)}{\\sigma}\\xrightarrow{d}N(0,1)
      \\]
      となります。また、\\(S\\) が \\(\\sigma\\) の一致推定量となる条件のもとでは、
      \\[
        \\dfrac{\\sqrt n(\\bar X-\\mu)}{S}\\xrightarrow{d}N(0,1)
      \\]
      となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      <b>正規母集団の場合</b><br>
      正規分布の再生性から、標本サイズが小さくても
      \\[
        \\bar X\\sim N\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)
      \\]
      は厳密に成立します。また、正規母集団では標本平均と標本分散の間に必要な独立性が成り立つため、
      \\[
        U\\sim\\chi_{n-1}^2,\\qquad T\\sim t_{n-1}
      \\]
      も厳密に成立します。<br><br>
      <b>一般の母集団の場合</b><br>
      有限標本について、
      \\[
        U\\sim\\chi_{n-1}^2
      \\]
      や
      \\[
        T\\sim t_{n-1}
      \\]
      が一般に厳密に成立するわけではありません。しかし、大標本では中心極限定理などによって、
      \\[
        \\dfrac{\\sqrt n(\\bar X-\\mu)}{\\sigma}\\approx N(0,1)
      \\]
      と正規近似できます。さらに \\(\\sigma\\) を \\(S\\) で置き換えた統計量についても、適切な条件のもとで、
      \\[
        T=\\dfrac{\\sqrt n(\\bar X-\\mu)}{S}\\approx N(0,1)
      \\]
      と扱えます。したがって、
      \\[
        \\boxed{\\text{正規母集団：有限標本でも厳密な分布}}
      \\]
      と
      \\[
        \\boxed{\\text{一般の母集団：大標本で正規近似}}
      \\]
      を区別することが重要です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：正規母集団では正規分布・\\(\\chi^2\\) 分布・\\(t\\) 分布という有限標本での厳密な結果が得られます。一方、一般の母集団では適切な条件のもとで大標本における正規近似が利用できます。<br>
      ・<b>② 誤り</b>：母集団が正規分布ならば、標本サイズが小さくても標本平均は厳密に正規分布に従います。中心極限定理を待つ必要はありません。<br>
      ・<b>③ 誤り</b>：\\(U\\) の \\(\\chi^2\\) 分布や \\(T\\) の \\(t\\) 分布は、一般の母集団に対して有限標本で厳密に成立する性質ではありません。<br>
      ・<b>④ 誤り</b>：一般の母集団で大標本を考えたとき、\\(T\\) の代表的な漸近分布は標準正規分布です。また、\\(U\\) が一般に自由度 \\(n-1\\) の \\(\\chi^2\\) 分布に従うようになるわけでもありません。<br>
      「標本サイズが小さいから \\(t\\) 分布、大きいから正規分布」とだけ覚えるのは不正確です。正規母集団では、母分散が未知で \\(S^2\\) を用いることで、有限標本でも \\(t\\) 分布が厳密に現れます。一方、一般の母集団では、中心極限定理などによる大標本での近似として標準正規分布が現れる、という違いを理解しておくことが重要です。
    `
  }
];
