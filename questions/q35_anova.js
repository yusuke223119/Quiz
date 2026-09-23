// 分野35. 一元配置分散分析（F比）
const allQuestions = [
  {
    id: 1,
    category: "一元配置分散分析",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      3種類の指導法 A、B、C による平均得点に差があるかを調べるため、一元配置分散分析を行うことにした。<br><br>
      各指導法を受けた集団の母平均をそれぞれ
      \\[
        \\mu_A,\\qquad \\mu_B,\\qquad \\mu_C
      \\]
      とする。<br><br>
      このとき、一元配置分散分析における帰無仮説 \\(H_0\\) と対立仮説 \\(H_1\\) の組合せとして最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
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
            <td class='border border-slate-300 p-2'>\\(\\mu_A\\neq\\mu_B\\neq\\mu_C\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\mu_A=\\mu_B=\\mu_C\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(\\mu_A=\\mu_B=\\mu_C\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\mu_A\\neq\\mu_B\\neq\\mu_C\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(\\mu_A=\\mu_B=\\mu_C\\)</td>
            <td class='border border-slate-300 p-2'>少なくとも1つの母平均が他と異なる</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(\\sigma_A^2=\\sigma_B^2=\\sigma_C^2\\)</td>
            <td class='border border-slate-300 p-2'>少なくとも1つの母分散が他と異なる</td>
          </tr>
        </tbody>
      </table>
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      一元配置分散分析は、<b>3群以上を含む複数の群の母平均が等しいかどうか</b>を検定する代表的な方法です。\\(k\\) 個の群の母平均を
      \\[
        \\mu_1,\\mu_2,\\ldots,\\mu_k
      \\]
      とすると、帰無仮説は
      \\[
        H_0:\\mu_1=\\mu_2=\\cdots=\\mu_k
      \\]
      です。これに対する対立仮説は、
      \\[
        H_1:\\text{少なくとも1つの母平均が他と異なる}
      \\]
      です。「分散分析」という名称ですが、検定の主な目的は<b>複数の母平均の比較</b>です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      この問題では3種類の指導法の母平均を比較するため、帰無仮説は
      \\[
        H_0:\\mu_A=\\mu_B=\\mu_C
      \\]
      となります。帰無仮説が成り立たないとは、3つの母平均がすべて互いに異なることだけを意味するのではありません。例えば、
      \\[
        \\mu_A=\\mu_B\\neq\\mu_C
      \\]
      の場合にも帰無仮説は成立しません。したがって対立仮説は、
      \\[
        \\boxed{\\text{少なくとも1つの母平均が他と異なる}}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：帰無仮説と対立仮説が逆になっています。<br>
      ・<b>② 誤り</b>：対立仮説は「3群すべての母平均が互いに異なる」ことに限定されません。<br>
      ・<b>③ 正しい</b>：一元配置分散分析における帰無仮説と対立仮説を正しく表しています。<br>
      ・<b>④ 誤り</b>：一元配置分散分析で検定したい中心的な仮説は母平均の等しさであり、母分散の等しさそのものを検定するものではありません。
    `
  },
  {
    id: 2,
    category: "一元配置分散分析",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      一元配置分散分析における変動の分解とF統計量について、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 全変動は群間変動から群内変動を引いたものであり、群内変動が大きいほど、F統計量は大きくなる。<br>
      ② 全変動は群間変動と群内変動に分解でき、群間の平均平方が群内の平均平方に比べて大きいほど、F統計量は大きくなる。<br>
      ③ 群間変動は同じ群に属する観測値どうしのばらつきを表し、群内変動は各群の平均と全体平均の違いを表す。<br>
      ④ F統計量は群内の平均平方を群間の平均平方で割って求めるため、群平均の違いが大きいほどF統計量は小さくなる。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      一元配置分散分析では、データ全体の変動を
      \\[
        \\boxed{\\text{全変動}=\\text{群間変動}+\\text{群内変動}}
      \\]
      と分解します。平方和で表せば、
      \\[
        SS_T=SS_B+SS_W
      \\]
      となります。ここで、\\(SS_T\\) は全平方和、\\(SS_B\\) は群間平方和、\\(SS_W\\) は群内平方和です。<br><br>
      <b>群間変動</b>は各群の平均と全体平均の違いによる変動、<b>群内変動</b>は同じ群の中に存在する個体差による変動を表します。F統計量は、
      \\[
        F=\\dfrac{\\text{群間の平均平方}}{\\text{群内の平均平方}}=\\dfrac{MS_B}{MS_W}
      \\]
      によって求めます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      帰無仮説のもとでは各群の母平均は等しいため、群平均どうしの差は標本変動によって生じたものと考えます。一方、実際に母平均に差があれば、各群の平均は全体平均から離れやすくなり、群間変動が大きくなります。したがって、
      \\[
        \\dfrac{\\text{群間の変動}}{\\text{群内の変動}}
      \\]
      に対応するF統計量が十分に大きければ、母平均がすべて等しいという帰無仮説に対する証拠となります。つまり、一元配置分散分析では、単に「群間変動が大きいか」ではなく、<b>群内のばらつきと比較して群間のばらつきがどの程度大きいか</b>を評価しています。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：全変動は群間変動と群内変動の差ではなく和です。また、他の条件が同じなら群内変動が大きいほどF統計量は小さくなります。<br>
      ・<b>② 正しい</b>：全変動は群間変動と群内変動に分解され、\\(F=MS_B/MS_W\\) です。<br>
      ・<b>③ 誤り</b>：群間変動と群内変動の説明が逆です。<br>
      ・<b>④ 誤り</b>：F統計量は \\(MS_W/MS_B\\) ではなく \\(MS_B/MS_W\\) です。
    `
  },
  {
    id: 3,
    category: "一元配置分散分析",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      3つの群について一元配置分散分析を行ったところ、次の分散分析表が得られた。ただし、表中の一部が欠けている。<br><br>
      <b>分散分析表</b>
      <div class='overflow-x-auto'>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>変動要因</th>
            <th class='border border-slate-300 p-2'>平方和</th>
            <th class='border border-slate-300 p-2'>自由度</th>
            <th class='border border-slate-300 p-2'>平均平方</th>
            <th class='border border-slate-300 p-2'>F値</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>群間</td>
            <td class='border border-slate-300 p-2'>60</td>
            <td class='border border-slate-300 p-2'>2</td>
            <td class='border border-slate-300 p-2'><b>(A)</b></td>
            <td class='border border-slate-300 p-2'><b>(C)</b></td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>群内</td>
            <td class='border border-slate-300 p-2'>270</td>
            <td class='border border-slate-300 p-2'>27</td>
            <td class='border border-slate-300 p-2'><b>(B)</b></td>
            <td class='border border-slate-300 p-2'></td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>全体</td>
            <td class='border border-slate-300 p-2'>330</td>
            <td class='border border-slate-300 p-2'>29</td>
            <td class='border border-slate-300 p-2'></td>
            <td class='border border-slate-300 p-2'></td>
          </tr>
        </tbody>
      </table>
      </div><br>
      表中の (A)、(B)、(C) の組合せとして最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>(A)</th>
            <th class='border border-slate-300 p-2'>(B)</th>
            <th class='border border-slate-300 p-2'>(C)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>30</td>
            <td class='border border-slate-300 p-2'>27</td>
            <td class='border border-slate-300 p-2'>1.11</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>30</td>
            <td class='border border-slate-300 p-2'>10</td>
            <td class='border border-slate-300 p-2'>0.33</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>20</td>
            <td class='border border-slate-300 p-2'>10</td>
            <td class='border border-slate-300 p-2'>2.00</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>30</td>
            <td class='border border-slate-300 p-2'>10</td>
            <td class='border border-slate-300 p-2'>3.00</td>
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
      平均平方は、
      \\[
        \\text{平均平方}=\\dfrac{\\text{平方和}}{\\text{自由度}}
      \\]
      によって求めます。したがって、群間平均平方と群内平均平方は、
      \\[
        MS_B=\\dfrac{SS_B}{df_B},\\qquad MS_W=\\dfrac{SS_W}{df_W}
      \\]
      です。F統計量は、
      \\[
        F=\\dfrac{MS_B}{MS_W}
      \\]
      で求めます。\\(k\\) 群、総標本サイズ \\(N\\) の一元配置分散分析では、自由度は
      \\[
        df_B=k-1,\\quad df_W=N-k,\\quad df_T=N-1
      \\]
      となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      群間平均平方は、
      \\[
        (A)=MS_B=\\dfrac{60}{2}=30
      \\]
      です。群内平均平方は、
      \\[
        (B)=MS_W=\\dfrac{270}{27}=10
      \\]
      です。したがってF値は、
      \\[
        (C)=F=\\dfrac{30}{10}=3.00
      \\]
      です。よって、
      \\[
        \\boxed{(A)=30,\\qquad (B)=10,\\qquad (C)=3.00}
      \\]
      となります。<br><br>
      また、この表では群間自由度が2なので、\\(k-1=2\\) より群数は3です。全体自由度が29なので、\\(N-1=29\\) より総標本サイズは30であり、
      \\[
        df_W=N-k=30-3=27
      \\]
      と表の値とも一致します。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：群内平均平方は平方和を自由度で割るため、\\(270/27=10\\) です。<br>
      ・<b>② 誤り</b>：平均平方は正しいですが、F値の分子と分母を逆にしています。<br>
      ・<b>③ 誤り</b>：群間平均平方は \\(60/2=30\\) であり、20ではありません。<br>
      ・<b>④ 正しい</b>：\\(60/2=30,\\ 270/27=10,\\ 30/10=3.00\\) です。
    `
  },
  {
    id: 4,
    category: "一元配置分散分析",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      3種類の学習方法 A、B、C によって平均得点に差があるかを調べるため、一元配置分散分析を行ったところ、次の結果を得た。<br><br>
      各学習方法に対応する母平均を
      \\[
        \\mu_A,\\qquad \\mu_B,\\qquad \\mu_C
      \\]
      とする。<br><br>
      <b>分散分析表</b>
      <div class='overflow-x-auto'>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>変動要因</th>
            <th class='border border-slate-300 p-2'>平方和</th>
            <th class='border border-slate-300 p-2'>自由度</th>
            <th class='border border-slate-300 p-2'>平均平方</th>
            <th class='border border-slate-300 p-2'>F値</th>
            <th class='border border-slate-300 p-2'>p値</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>群間</td>
            <td class='border border-slate-300 p-2'>120</td>
            <td class='border border-slate-300 p-2'>2</td>
            <td class='border border-slate-300 p-2'>60</td>
            <td class='border border-slate-300 p-2'>6.00</td>
            <td class='border border-slate-300 p-2'>0.006</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>群内</td>
            <td class='border border-slate-300 p-2'>270</td>
            <td class='border border-slate-300 p-2'>27</td>
            <td class='border border-slate-300 p-2'>10</td>
            <td class='border border-slate-300 p-2'></td>
            <td class='border border-slate-300 p-2'></td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>全体</td>
            <td class='border border-slate-300 p-2'>390</td>
            <td class='border border-slate-300 p-2'>29</td>
            <td class='border border-slate-300 p-2'></td>
            <td class='border border-slate-300 p-2'></td>
            <td class='border border-slate-300 p-2'></td>
          </tr>
        </tbody>
      </table>
      </div><br>
      有意水準を5%とする。<br><br>
      この分散分析の結果について、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 3群の母平均がすべて等しいという帰無仮説を棄却する。少なくとも1つの母平均が他と異なると考えられるが、この分散分析の結果だけでは具体的にどの群間に差があるかまでは分からない。<br>
      ② 3群の母平均がすべて等しいという帰無仮説を棄却する。したがって、\\(\\mu_A,\\mu_B,\\mu_C\\) はすべて互いに異なると結論できる。<br>
      ③ p値が0.006であるため、5%有意水準では3群の母平均がすべて等しいという帰無仮説を棄却しない。<br>
      ④ F値が6.00であるため、標本平均が最も大きかった群の母平均は、他のすべての群の母平均より有意に大きいと結論できる。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "①",
    explanation: `
      正解は①です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      一元配置分散分析では、
      \\[
        H_0:\\mu_A=\\mu_B=\\mu_C
      \\]
      を検定します。p値を用いる場合、有意水準を \\(\\alpha\\) とすると、\\(p<\\alpha\\) なら帰無仮説を棄却します。ただし、帰無仮説を棄却した場合に分かるのは、
      \\[
        \\boxed{\\text{少なくとも1つの母平均が他と異なる}}
      \\]
      ということです。通常の一元配置分散分析だけから、具体的にどの群とどの群に差があるかまでは特定できません。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      分散分析表から \\(p=0.006\\) と読み取れます。有意水準は \\(\\alpha=0.05\\) なので、
      \\[
        0.006<0.05
      \\]
      です。したがって、
      \\[
        H_0:\\mu_A=\\mu_B=\\mu_C
      \\]
      を棄却します。これにより、少なくとも1つの母平均が他と異なることを示す統計的証拠が得られたと判断します。<br><br>
      しかし、例えば \\(\\mu_A=\\mu_B\\neq\\mu_C\\) なのか、\\(\\mu_A\\neq\\mu_B=\\mu_C\\) なのかなど、具体的な群間の違いはこのANOVA表だけからは判断できません。どの群間に差があるかを詳しく調べる場合には、多重比較などの方法を用います。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：\\(p=0.006<0.05\\) なので帰無仮説を棄却します。ただし、通常のANOVAだけでは具体的にどの群間に差があるかまでは分かりません。<br>
      ・<b>② 誤り</b>：帰無仮説の棄却は、3群すべての母平均が互いに異なることを意味しません。<br>
      ・<b>③ 誤り</b>：\\(0.006<0.05\\) なので、5%有意水準では帰無仮説を棄却します。<br>
      ・<b>④ 誤り</b>：F検定が有意であるだけでは、標本平均が最大の群が他のすべての群より有意に大きいとは結論できません。
    `
  }
];
