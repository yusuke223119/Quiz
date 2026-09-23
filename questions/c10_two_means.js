// 総合演習 大問10. 2つの母平均の比較
const comprehensiveSet = {
  id: 10,
  title: "2つの母平均の比較",
  category: "仮説検定",
  difficulty: 3,
  priority: 2,
  stem: `
    ある企業では、異なる2種類の研修方法 A、B の実施後に、同一の試験を行った。研修方法 A を受けた15人と研修方法 B を受けた20人は互いに異なる対象者であり、それぞれ無作為に抽出されたものとする。<br><br>
    得られた結果は次のとおりであった。
    <div class='overflow-x-auto mt-4 mb-4'>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>研修方法</th>
            <th class='border border-slate-300 p-2'>標本サイズ</th>
            <th class='border border-slate-300 p-2'>標本平均</th>
            <th class='border border-slate-300 p-2'>不偏分散</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>A</td>
            <td class='border border-slate-300 p-2'>\\(n_A=15\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\bar x_A=52\\)</td>
            <td class='border border-slate-300 p-2'>\\(s_A^2=36\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>B</td>
            <td class='border border-slate-300 p-2'>\\(n_B=20\\)</td>
            <td class='border border-slate-300 p-2'>\\(\\bar x_B=47\\)</td>
            <td class='border border-slate-300 p-2'>\\(s_B^2=9\\)</td>
          </tr>
        </tbody>
      </table>
    </div>
    A、Bそれぞれの母集団は正規分布に従うものとする。
  `,
  parts: [
    {
      id: 1,
      difficulty: 3,
      priority: 2,
      question: `
        研修方法 A、B における試験得点の母分散をそれぞれ \\(\\sigma_A^2,\\sigma_B^2\\) とする。<br><br>
        2つの母分散が等しいかを調べるため、
        \\[
          H_0:\\sigma_A^2=\\sigma_B^2,\\qquad H_1:\\sigma_A^2\\neq\\sigma_B^2
        \\]
        として、有意水準5%で検定する。<br><br>
        検定統計量と検定結果の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
        なお、\\(F_{\\nu_1,\\nu_2}(\\alpha)\\) は、自由度 \\((\\nu_1,\\nu_2)\\) の \\(F\\) 分布の上側確率が \\(\\alpha\\) となる点を表すものとする。必要ならば、付属のF分布表を用いてよい。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>検定統計量</th>
                <th class='border border-slate-300 p-2'>自由度</th>
                <th class='border border-slate-300 p-2'>検定結果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>\\(F=\\dfrac{36}{9}=4.00\\)</td>
                <td class='border border-slate-300 p-2'>\\((14,19)\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>\\(F=\\dfrac{36}{9}=4.00\\)</td>
                <td class='border border-slate-300 p-2'>\\((14,19)\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>\\(F=\\dfrac{36}{9}=4.00\\)</td>
                <td class='border border-slate-300 p-2'>\\((15,20)\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>\\(F=\\dfrac{6}{3}=2.00\\)</td>
                <td class='border border-slate-300 p-2'>\\((14,19)\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
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
        独立な2つの正規母集団から標本を得たとき、
        \\[
          H_0:\\sigma_A^2=\\sigma_B^2
        \\]
        の下では、不偏分散の比
        \\[
          F=\\dfrac{S_A^2}{S_B^2}
        \\]
        は自由度 \\((n_A-1,n_B-1)\\) の \\(F\\) 分布に従います。今回は \\(H_1:\\sigma_A^2\\neq\\sigma_B^2\\) なので両側検定です。大きい方の不偏分散を分子にして \\(F\\ge 1\\) とする場合、有意水準5%の両側検定では上側2.5%点と比較します。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        Aの不偏分散の方が大きいため、
        \\[
          F=\\dfrac{36}{9}=4.00.
        \\]
        分子側の自由度は \\(n_A-1=14\\)、分母側の自由度は \\(n_B-1=19\\) なので、自由度 \\((14,19)\\) の \\(F\\) 分布を用います。\\(F\\) 分布表から上側2.5%点を確認すると、\\(F=4.00\\) は棄却域に入ります。したがって、
        \\[
          H_0:\\sigma_A^2=\\sigma_B^2\\text{ を棄却する}
        \\]
        と判断します。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 正しい</b>：不偏分散の比は4.00であり、自由度は \\((14,19)\\) となります。両側5%の検定では帰無仮説を棄却します。<br>
        ・<b>② 誤り</b>：検定統計量と自由度は正しいですが、\\(F=4.00\\) は棄却域に入ります。<br>
        ・<b>③ 誤り</b>：\\(F=4.00\\) は正しいですが、\\(F\\) 分布の自由度には標本サイズそのものではなく、それぞれ \\(n_A-1,n_B-1\\) を用います。<br>
        ・<b>④ 誤り</b>：比較するのは標準偏差 \\(6/3\\) ではなく、不偏分散 \\(36/9\\) の比です。
      `
    },
    {
      id: 2,
      difficulty: 3,
      priority: 1,
      question: `
        続いて、研修方法 A、B の母平均をそれぞれ \\(\\mu_A,\\mu_B\\) とし、2つの母平均に差があるかを検討する。<br><br>
        ここでは、2つの母分散が等しいとは仮定しないものとする。<br><br>
        このとき用いる検定統計量と自由度の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
        ただし、
        \\[
          S_p^2=\\dfrac{(n_A-1)S_A^2+(n_B-1)S_B^2}{n_A+n_B-2}
        \\]
        とし、\\(\\nu\\) は
        \\[
          \\nu=\\dfrac{\\left(\\dfrac{S_A^2}{n_A}+\\dfrac{S_B^2}{n_B}\\right)^2}{\\dfrac{(S_A^2/n_A)^2}{n_A-1}+\\dfrac{(S_B^2/n_B)^2}{n_B-1}}
        \\]
        で定められる値とする。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>検定統計量</th>
                <th class='border border-slate-300 p-2'>自由度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>\\(T=\\dfrac{\\bar X_A-\\bar X_B}{\\sqrt{\\dfrac{S_A^2}{n_A}+\\dfrac{S_B^2}{n_B}}}\\)</td>
                <td class='border border-slate-300 p-2'>\\(\\nu\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>\\(T=\\dfrac{\\bar X_A-\\bar X_B}{\\sqrt{\\dfrac{S_A^2}{n_A}+\\dfrac{S_B^2}{n_B}}}\\)</td>
                <td class='border border-slate-300 p-2'>\\(n_A+n_B-2\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>\\(T=\\dfrac{\\bar X_A-\\bar X_B}{S_p\\sqrt{\\dfrac{1}{n_A}+\\dfrac{1}{n_B}}}\\)</td>
                <td class='border border-slate-300 p-2'>\\(\\nu\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>\\(T=\\dfrac{\\bar X_A-\\bar X_B}{S_p\\sqrt{\\dfrac{1}{n_A}+\\dfrac{1}{n_B}}}\\)</td>
                <td class='border border-slate-300 p-2'>\\(n_A+n_B-2\\)</td>
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
        独立な2標本について、2つの母分散が等しいと仮定しない場合には、それぞれの標本から推定した分散を別々に用いて、
        \\[
          \\sqrt{\\dfrac{S_A^2}{n_A}+\\dfrac{S_B^2}{n_B}}
        \\]
        によって標本平均の差の標準誤差を推定します。また、その検定統計量を近似的に \\(t\\) 分布で評価する際の自由度には、問題文で与えられた \\(\\nu\\) を用います。一方、母分散が等しいと仮定する場合には、2群の分散をまとめた \\(S_p^2\\) を用い、自由度は \\(n_A+n_B-2\\) となります。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        今回は「2つの母分散が等しいとは仮定しない」とされています。したがって、標本平均の差の標準誤差には
        \\[
          \\sqrt{\\dfrac{S_A^2}{n_A}+\\dfrac{S_B^2}{n_B}}
        \\]
        を用い、自由度には単純な \\(n_A+n_B-2\\) ではなく、問題文で定義された \\(\\nu\\) を用います。よって、
        \\[
          T=\\dfrac{\\bar X_A-\\bar X_B}{\\sqrt{S_A^2/n_A+S_B^2/n_B}},\\qquad \\text{自由度 }\\nu
        \\]
        が適切です。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 正しい</b>：各群の不偏分散を別々に標準誤差へ用い、自由度には \\(\\nu\\) を用いています。<br>
        ・<b>② 誤り</b>：標準誤差は適切ですが、自由度として \\(n_A+n_B-2\\) を用いています。<br>
        ・<b>③ 誤り</b>：自由度は \\(\\nu\\) ですが、標準誤差の計算に等分散を仮定して作られる \\(S_p\\) を用いています。<br>
        ・<b>④ 誤り</b>：これは2つの母分散が等しいと仮定した場合に用いられる検定統計量と自由度の組合せです。
      `
    },
    {
      id: 3,
      difficulty: 3,
      priority: 1,
      question: `
        問2の方法を用いて、
        \\[
          H_0:\\mu_A=\\mu_B,\\qquad H_1:\\mu_A\\neq\\mu_B
        \\]
        として、有意水準5%で検定する。<br><br>
        検定統計量、自由度および検定結果の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
        自由度 \\(\\nu\\) は問2で与えられた式によって計算し、小数第1位まで求めるものとする。
        また、検定統計量の従う分布の自由度は \\(\\nu\\) に最も近い整数で近似せよ。
        必要ならば、付属のt分布表を用いてよい。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>検定統計量</th>
                <th class='border border-slate-300 p-2'>自由度</th>
                <th class='border border-slate-300 p-2'>検定結果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>\\(T\\approx 1.96\\)</td>
                <td class='border border-slate-300 p-2'>\\(\\nu\\approx 19.2\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>\\(T\\approx 2.96\\)</td>
                <td class='border border-slate-300 p-2'>\\(\\nu\\approx 19.2\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>\\(T\\approx 2.96\\)</td>
                <td class='border border-slate-300 p-2'>\\(\\nu=33\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>\\(T\\approx 3.42\\)</td>
                <td class='border border-slate-300 p-2'>\\(\\nu\\approx 19.2\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      choices: ["①", "②", "③", "④"],
      answer: "②",
      explanation: `
        正解は②です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        2つの母分散が等しいとは仮定しない独立2標本の母平均の比較では、
        \\[
          T=\\dfrac{\\bar X_A-\\bar X_B}{\\sqrt{S_A^2/n_A+S_B^2/n_B}}
        \\]
        を用います。その自由度は、
        \\[
          \\nu=\\dfrac{\\left(S_A^2/n_A+S_B^2/n_B\\right)^2}{\\dfrac{(S_A^2/n_A)^2}{n_A-1}+\\dfrac{(S_B^2/n_B)^2}{n_B-1}}
        \\]
        により近似します。今回は \\(H_1:\\mu_A\\neq\\mu_B\\) なので両側検定です。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        まず、標本平均の差は
        \\[
          \\bar x_A-\\bar x_B=52-47=5.
        \\]
        標準誤差は、
        \\[
          \\sqrt{\\dfrac{36}{15}+\\dfrac{9}{20}}=\\sqrt{2.4+0.45}=\\sqrt{2.85}\\approx 1.69.
        \\]
        したがって、
        \\[
          T=\\dfrac{5}{\\sqrt{2.85}}\\approx 2.96.
        \\]
        次に自由度を求めると、
        \\[
          \\nu=\\dfrac{(2.4+0.45)^2}{\\dfrac{2.4^2}{14}+\\dfrac{0.45^2}{19}}=\\dfrac{2.85^2}{\\dfrac{5.76}{14}+\\dfrac{0.2025}{19}}\\approx 19.2.
        \\]
        自由度は整数ではないため、\\(t\\) 分布表を利用する際には、安全側に自由度19として考えることができます。自由度19の \\(t\\) 分布における両側5%の臨界値は約2.09です。
        \\[
          |T|\\approx 2.96>2.09
        \\]
        であるため、
        \\[
          H_0:\\mu_A=\\mu_B\\text{ を棄却する}
        \\]
        と判断します。したがって、このデータからは、AとBの母平均に差があることを示す統計的な証拠が得られています。ただし、この検定結果だけから研修方法の違いが得点差の原因であると結論づけることはできません。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：標本平均の差5を標準誤差約1.69で割るため、検定統計量は約1.96ではなく約2.96となります。<br>
        ・<b>② 正しい</b>：\\(T\\approx 2.96\\)、自由度は約19.2であり、両側5%の棄却域に入ります。<br>
        ・<b>③ 誤り</b>：検定統計量は正しいですが、\\(33=15+20-2\\) は母分散が等しいと仮定する場合の自由度であり、ここでは用いません。<br>
        ・<b>④ 誤り</b>：各標本平均の差の標準誤差は \\(\\sqrt{S_A^2/n_A+S_B^2/n_B}\\) で計算します。また、\\(T\\approx 2.96\\) は5%水準で棄却域に入ります。
      `
    }
  ]
};
