// 分野31. 2標本の母平均の検定
const allQuestions = [
  {
    id: 1,
    category: "2標本の母平均の検定",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      互いに独立な2つの正規母集団について、それぞれの母平均を \\(\\mu_1,\\mu_2\\) とする。母標準偏差は既知であり、
      \\[
        \\sigma_1=8,\\qquad \\sigma_2=6
      \\]
      である。<br><br>
      それぞれの母集団から独立に無作為標本を抽出したところ、
      \\[
        n_1=64,\\qquad \\bar X_1=52
      \\]
      \\[
        n_2=36,\\qquad \\bar X_2=48
      \\]
      を得た。<br><br>
      母平均に差があるかを調べるため、
      \\[
        H_0:\\mu_1=\\mu_2,\\qquad H_1:\\mu_1\\neq\\mu_2
      \\]
      を有意水準5%で検定する。<br><br>
      帰無仮説のもとで、標本平均の差を標準化した
      \\[
        Z=\\dfrac{\\bar X_1-\\bar X_2}{\\sqrt{\\sigma_1^2/n_1+\\sigma_2^2/n_2}}
      \\]
      を検定統計量として用いる。<br><br>
      検定統計量の値【A】、帰無仮説のもとで従う分布【B】、検定結果【C】の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br>
      必要に応じて、標準正規分布表を用いても良い。<br><br>
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
            <td class='border border-slate-300 p-2'>約 \\(0.40\\)</td>
            <td class='border border-slate-300 p-2'>\\(N(0,1)\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>約 \\(2.83\\)</td>
            <td class='border border-slate-300 p-2'>\\(N(0,1)\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>約 \\(2.00\\)</td>
            <td class='border border-slate-300 p-2'>\\(t_{98}\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>約 \\(2.83\\)</td>
            <td class='border border-slate-300 p-2'>\\(N(0,1)\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
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
      独立な2標本について、
      \\[
        \\bar X_1\\sim N\\left(\\mu_1,\\dfrac{\\sigma_1^2}{n_1}\\right),\\qquad \\bar X_2\\sim N\\left(\\mu_2,\\dfrac{\\sigma_2^2}{n_2}\\right)
      \\]
      です。独立性より、
      \\[
        \\bar X_1-\\bar X_2\\sim N\\left(\\mu_1-\\mu_2,\\,\\dfrac{\\sigma_1^2}{n_1}+\\dfrac{\\sigma_2^2}{n_2}\\right)
      \\]
      です。帰無仮説 \\(H_0:\\mu_1=\\mu_2\\) のもとでは \\(\\mu_1-\\mu_2=0\\) なので、
      \\[
        Z=\\dfrac{\\bar X_1-\\bar X_2}{\\sqrt{\\sigma_1^2/n_1+\\sigma_2^2/n_2}}\\sim N(0,1)
      \\]
      となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      標本平均の差は \\(\\bar X_1-\\bar X_2=52-48=4\\) です。差の標準誤差は、
      \\[
        \\sqrt{\\dfrac{8^2}{64}+\\dfrac{6^2}{36}}=\\sqrt{1+1}=\\sqrt{2}
      \\]
      です。したがって、
      \\[
        Z=\\dfrac{4}{\\sqrt{2}}\\approx 2.83
      \\]
      です。有意水準5%の両側検定では、標準正規分布表より
      \\[
        |Z|\\ge 1.96
      \\]
      が棄却域となります。今回は \\(2.83>1.96\\) なので、
      \\[
        \\boxed{H_0\\text{を棄却する}}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：差の標準誤差は \\(\\sqrt{2}\\) であり、検定統計量は約 \\(2.83\\) となります。<br>
      ・<b>② 誤り</b>：検定統計量と分布は正しいですが、\\(|Z|>1.96\\) なので \\(H_0\\) を棄却します。<br>
      ・<b>③ 誤り</b>：母分散は既知なので、\\(t\\) 分布ではなく標準正規分布を用います。<br>
      ・<b>④ 正しい</b>：\\(Z\\approx 2.83\\) であり、標準正規分布の5%両側検定では \\(H_0\\) を棄却します。
    `
  },
  {
    id: 2,
    category: "2標本の母平均の検定",
    difficulty: 3,
    priority: 3,
    type: "選択式",
    question: `
      互いに独立な2つの正規母集団について、
      \\[
        X_1,\\ldots,X_{10}\\sim N(\\mu_1,\\sigma^2),
      \\]
      \\[
        Y_1,\\ldots,Y_{10}\\sim N(\\mu_2,\\sigma^2)
      \\]
      とする。2つの母分散は等しいが、共通の母分散 \\(\\sigma^2\\) は未知である。<br><br>
      標本から、
      \\[
        \\bar X=54,\\qquad S_X^2=9
      \\]
      \\[
        \\bar Y=50,\\qquad S_Y^2=16
      \\]
      を得た。<br><br>
      母平均に差があるかを調べるため、
      \\[
        H_0:\\mu_1=\\mu_2,\\qquad H_1:\\mu_1\\neq\\mu_2
      \\]
      を有意水準5%で検定する。<br><br>
      まず、各標本について
      \\[
        U_1=\\dfrac{(10-1)S_X^2}{\\sigma^2},\\qquad U_2=\\dfrac{(10-1)S_Y^2}{\\sigma^2}
      \\]
      とおく。また、プールした分散を
      \\[
        S_p^2=\\dfrac{(10-1)S_X^2+(10-1)S_Y^2}{(10-1)+(10-1)}
      \\]
      とする。<br><br>
      \\(U_1,U_2\\) は独立であることに注意して、プールした分散に対応する \\(\\chi^2\\) 分布の自由度【A】、\\(S_p^2\\) の値【B】、検定統計量
      \\[
        T=\\dfrac{\\bar X-\\bar Y}{S_p\\sqrt{1/10+1/10}}
      \\]
      の値【C】、帰無仮説のもとで \\(T\\) が従う分布【D】の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br>
      必要に応じて、 \\(t\\) 分布表を用いても良い。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>A</th>
            <th class='border border-slate-300 p-2'>B</th>
            <th class='border border-slate-300 p-2'>C</th>
            <th class='border border-slate-300 p-2'>D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>18</td>
            <td class='border border-slate-300 p-2'>\\(12.5\\)</td>
            <td class='border border-slate-300 p-2'>約 \\(2.53\\)</td>
            <td class='border border-slate-300 p-2'>\\(t_{18}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>9</td>
            <td class='border border-slate-300 p-2'>\\(12.5\\)</td>
            <td class='border border-slate-300 p-2'>約 \\(2.53\\)</td>
            <td class='border border-slate-300 p-2'>\\(t_9\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>18</td>
            <td class='border border-slate-300 p-2'>\\(25.0\\)</td>
            <td class='border border-slate-300 p-2'>約 \\(1.79\\)</td>
            <td class='border border-slate-300 p-2'>\\(t_{18}\\)</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>20</td>
            <td class='border border-slate-300 p-2'>\\(12.5\\)</td>
            <td class='border border-slate-300 p-2'>約 \\(2.53\\)</td>
            <td class='border border-slate-300 p-2'>\\(t_{20}\\)</td>
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
      正規母集団から大きさ \\(n\\) の標本を取ると、
      \\[
        \\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi_{n-1}^2
      \\]
      となります。したがって第1標本について \\(U_1=9S_X^2/\\sigma^2\\sim\\chi_9^2\\)、第2標本について \\(U_2=9S_Y^2/\\sigma^2\\sim\\chi_9^2\\) です。2標本は独立なので \\(U_1,U_2\\) も独立であり、独立な \\(\\chi^2\\) 変数の和について、
      \\[
        U_1+U_2\\sim\\chi_{9+9}^2=\\chi_{18}^2
      \\]
      です。つまり、自由度18は暗記するものではなく、
      \\[
        \\boxed{(n_1-1)+(n_2-1)=n_1+n_2-2}
      \\]
      と、2つの標本分散が持つ自由度を足したものです。<br><br>
      一方、帰無仮説 \\(H_0:\\mu_1=\\mu_2\\) のもとでは、
      \\[
        Z=\\dfrac{\\bar X-\\bar Y}{\\sigma\\sqrt{1/n_1+1/n_2}}\\sim N(0,1)
      \\]
      です。正規母集団では標本平均と標本分散が独立であるため、この \\(Z\\) とプールした分散から作る \\(\\chi^2\\) 変数も独立です。したがって、\\(Z\\sim N(0,1)\\)、\\(U\\sim\\chi_{18}^2\\) に対して、
      \\[
        \\dfrac{Z}{\\sqrt{U/18}}\\sim t_{18}
      \\]
      です。これが等分散を仮定した2標本 \\(t\\) 検定の仕組みです。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      まず自由度は \\((10-1)+(10-1)=18\\) です。プールした分散は、
      \\[
        S_p^2=\\dfrac{9\\times 9+9\\times 16}{18}=\\dfrac{225}{18}=12.5
      \\]
      です。このとき、
      \\[
        \\dfrac{18S_p^2}{\\sigma^2}=\\dfrac{9S_X^2+9S_Y^2}{\\sigma^2}\\sim\\chi_{18}^2
      \\]
      です。次に \\(S_p=\\sqrt{12.5}\\) なので、
      \\[
        T=\\dfrac{54-50}{\\sqrt{12.5}\\sqrt{1/10+1/10}}=\\dfrac{4}{\\sqrt{2.5}}\\approx 2.53
      \\]
      です。したがって \\(T\\sim t_{18}\\) です。さらに5%両側検定では、\\(t\\) 分布表より自由度18の臨界値は約 \\(2.101\\) です。\\(|T|=2.53>2.101\\) なので、\\(H_0\\) を棄却します。<br><br>
      この問題の流れをまとめると、標本平均の差を標準化すると \\(N(0,1)\\)、2つの標本分散から \\(\\chi_9^2+\\chi_9^2=\\chi_{18}^2\\)、正規変数を \\(\\sqrt{\\chi^2\\text{変数}/18}\\) で割ると \\(t_{18}\\) となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：2つの標本分散の自由度 \\(9+9=18\\) がプールされます。\\(S_p^2=12.5\\)、\\(T\\approx 2.53\\) となり、\\(T\\sim t_{18}\\) です。<br>
      ・<b>② 誤り</b>：自由度9は一方の標本分散だけの自由度です。2つの独立な \\(\\chi^2\\) 変数を加えるため、自由度も \\(9+9=18\\) となります。<br>
      ・<b>③ 誤り</b>：\\(S_X^2+S_Y^2=25\\) と単純に加えるのではなく、それぞれの自由度を考慮して共通分散を推定します。<br>
      ・<b>④ 誤り</b>：自由度は標本サイズ \\(10+10=20\\) ではありません。それぞれの標本で平均を推定するため1ずつ自由度を使い、\\(9+9=18\\) となります。
    `
  },
  {
    id: 3,
    category: "2標本の母平均の検定",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      10人の被験者について、あるトレーニングを実施する前と実施した後に同じ能力テストを行った。各被験者について、
      \\[
        D_i=(\\text{トレーニング後の得点})-(\\text{トレーニング前の得点})
      \\]
      と定義する。<br><br>
      10人について差 \\(D_i\\) を計算したところ、
      \\[
        n=10,\\qquad \\bar D=2.0,\\qquad S_D=2.5
      \\]
      であった。<br><br>
      トレーニングによって平均得点が変化したかを調べるため、
      \\[
        H_0:\\mu_D=0,\\qquad H_1:\\mu_D\\neq 0
      \\]
      を有意水準5%で検定する。<br><br>
      対応のある2標本では、10組の観測値から得られる10個の差 \\(D_1,\\ldots,D_{10}\\) を1つの標本と考える。<br><br>
      検定統計量
      \\[
        T=\\dfrac{\\bar D}{S_D/\\sqrt n}
      \\]
      の値【A】、自由度【B】、検定結果【C】の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br>
      必要に応じて、 \\(t\\) 分布表を用いても良い。<br><br>
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
            <td class='border border-slate-300 p-2'>約 \\(0.80\\)</td>
            <td class='border border-slate-300 p-2'>9</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>約 \\(2.53\\)</td>
            <td class='border border-slate-300 p-2'>18</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>約 \\(2.53\\)</td>
            <td class='border border-slate-300 p-2'>9</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>約 \\(2.53\\)</td>
            <td class='border border-slate-300 p-2'>19</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
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
      対応のある2標本では、2つの標本を独立なものとして扱うのではなく、各ペアの差 \\(D_i=Y_i-X_i\\) を考えます。すると問題は、\\(D_1,\\ldots,D_n\\) という1つの標本について \\(H_0:\\mu_D=0\\) を検定する<b>1標本 \\(t\\) 検定</b>に帰着します。検定統計量は
      \\[
        T=\\dfrac{\\bar D}{S_D/\\sqrt n}
      \\]
      であり、\\(T\\sim t_{n-1}\\) です。自由度が \\(2n-2\\) などにならないことが重要です。元の観測値が20個あっても、検定に用いている標本は \\(D_1,\\ldots,D_{10}\\) という<b>10個の差</b>だからです。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      差の標準誤差は \\(S_D/\\sqrt n=2.5/\\sqrt{10}\\) です。よって、
      \\[
        T=\\dfrac{2.0}{2.5/\\sqrt{10}}\\approx 2.53
      \\]
      です。10個の差から差の標本平均を1つ推定しているため、自由度は \\(10-1=9\\) です。したがって \\(T\\sim t_9\\) です。\\(t\\) 分布表より、自由度9の5%両側検定の臨界値は約 \\(2.262\\) です。したがって \\(|T|=2.53>2.262\\) なので、
      \\[
        \\boxed{H_0\\text{を棄却する}}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(2.0/2.5=0.80\\) ではありません。標本平均の標準誤差 \\(S_D/\\sqrt{10}\\) で割る必要があります。<br>
      ・<b>② 誤り</b>：介入前10個と介入後10個を独立な2標本として扱ってはいけません。10個の差を用いるため自由度は9です。<br>
      ・<b>③ 正しい</b>：10個の差に対する1標本 \\(t\\) 検定なので、\\(T\\approx 2.53\\)、自由度9となり、5%水準で \\(H_0\\) を棄却します。<br>
      ・<b>④ 誤り</b>：観測値の総数20から1を引くのではありません。差の標本サイズは10なので自由度は9です。
    `
  },
  {
    id: 4,
    category: "2標本の母平均の検定",
    difficulty: 3,
    priority: 2,
    type: "選択式",
    question: `
      互いに独立な2つの正規母集団について、それぞれの母平均を \\(\\mu_1,\\mu_2\\) とする。2つの母分散は等しいものとするが、その共通母分散は未知である。<br><br>
      それぞれの母集団から独立に無作為標本を抽出したところ、
      \\[
        n_1=16,\\qquad \\bar X_1=74,\\qquad S_1^2=16
      \\]
      \\[
        n_2=16,\\qquad \\bar X_2=70,\\qquad S_2^2=16
      \\]
      を得た。<br><br>
      第1の母集団の母平均の方が大きいといえるかを調べるため、
      \\[
        H_0:\\mu_1=\\mu_2,\\qquad H_1:\\mu_1>\\mu_2
      \\]
      を検定する。<br><br>
      各標本について \\(\\dfrac{(n_i-1)S_i^2}{\\sigma^2}\\sim\\chi_{n_i-1}^2\\) であること、および独立な \\(\\chi^2\\) 変数の和では自由度も加えられることを利用せよ。また、プールした分散
      \\[
        S_p^2=\\dfrac{(n_1-1)S_1^2+(n_2-1)S_2^2}{n_1+n_2-2}
      \\]
      を用いて検定統計量を求め、付属の \\(t\\) 分布表からp値の範囲を判断せよ。<br><br>
      検定統計量の値【A】、自由度【B】、片側p値の範囲【C】、有意水準5%での検定結果【D】の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>A</th>
            <th class='border border-slate-300 p-2'>B</th>
            <th class='border border-slate-300 p-2'>C</th>
            <th class='border border-slate-300 p-2'>D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>約 \\(2.83\\)</td>
            <td class='border border-slate-300 p-2'>15</td>
            <td class='border border-slate-300 p-2'>\\(0.005\\lt p\\lt 0.01\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>約 \\(2.83\\)</td>
            <td class='border border-slate-300 p-2'>30</td>
            <td class='border border-slate-300 p-2'>\\(0.0025\\lt p\\lt 0.005\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>約 \\(2.00\\)</td>
            <td class='border border-slate-300 p-2'>30</td>
            <td class='border border-slate-300 p-2'>\\(0.025\\lt p\\lt 0.05\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>約 \\(2.83\\)</td>
            <td class='border border-slate-300 p-2'>30</td>
            <td class='border border-slate-300 p-2'>\\(0.05\\lt p\\lt 0.10\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
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
      帰無仮説 \\(H_0:\\mu_1=\\mu_2\\) のもとでは、
      \\[
        \\dfrac{\\bar X_1-\\bar X_2}{\\sigma\\sqrt{1/n_1+1/n_2}}\\sim N(0,1)
      \\]
      です。次に、共通母分散 \\(\\sigma^2\\) の推定を考えます。第1標本では \\(15S_1^2/\\sigma^2\\sim\\chi_{15}^2\\)、第2標本では \\(15S_2^2/\\sigma^2\\sim\\chi_{15}^2\\) です。2標本は独立なので、これらを加えると、
      \\[
        \\dfrac{15S_1^2+15S_2^2}{\\sigma^2}\\sim\\chi_{15+15}^2=\\chi_{30}^2
      \\]
      です。したがって自由度は \\(15+15=30\\) となります。プールした分散を使えば \\(30S_p^2/\\sigma^2\\sim\\chi_{30}^2\\) です。正規母集団では標本平均と標本分散が独立なので、\\(Z\\sim N(0,1)\\)、\\(U\\sim\\chi_{30}^2\\) という独立な2つの確率変数から
      \\[
        \\dfrac{Z}{\\sqrt{U/30}}\\sim t_{30}
      \\]
      が得られます。したがって、
      \\[
        T=\\dfrac{\\bar X_1-\\bar X_2}{S_p\\sqrt{1/n_1+1/n_2}}\\sim t_{30}
      \\]
      です。つまり、平均の差は正規分布、プールした分散は \\(\\chi^2\\) 分布、両者を組み合わせると \\(t\\) 分布、という構造になっています。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      プールした分散は、
      \\[
        S_p^2=\\dfrac{15\\times 16+15\\times 16}{30}=16
      \\]
      なので \\(S_p=4\\) です。差の標準誤差は、
      \\[
        S_p\\sqrt{\\dfrac{1}{16}+\\dfrac{1}{16}}=4\\sqrt{\\dfrac{1}{8}}=\\sqrt{2}
      \\]
      です。したがって、
      \\[
        T=\\dfrac{74-70}{\\sqrt{2}}\\approx 2.83
      \\]
      です。自由度は2つの標本分散の自由度を足して \\((16-1)+(16-1)=15+15=30\\) です。よって \\(T\\sim t_{30}\\) です。<br><br>
      \\(t\\) 分布表から、自由度30について上側0.005点は \\(2.750\\) です。また上側0.0025点は約 \\(3.030\\) です。今回は
      \\[
        2.750\\lt 2.83\\lt 3.030
      \\]
      なので、
      \\[
        \\boxed{0.0025\\lt p\\lt 0.005}
      \\]
      です。したがって \\(p\\lt 0.05\\) であり、有意水準5%では
      \\[
        \\boxed{H_0\\text{を棄却する}}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：自由度15は一方の標本分散だけを考えた場合です。2つの独立な標本分散をプールするため、自由度は \\(15+15=30\\) となります。<br>
      ・<b>② 正しい</b>：2つの標本分散の自由度はそれぞれ15であり、プールすると \\(15+15=30\\) となります。\\(T\\approx 2.83\\)、片側p値は \\(0.0025\\lt p\\lt 0.005\\) なので \\(H_0\\) を棄却します。<br>
      ・<b>③ 誤り</b>：差の標準誤差は \\(\\sqrt{2}\\) なので、検定統計量は \\(4/\\sqrt{2}\\approx 2.83\\) です。<br>
      ・<b>④ 誤り</b>：検定統計量と自由度は正しいですが、\\(T=2.83\\) に対応する片側p値は0.05より十分小さく、\\(H_0\\) を棄却します。
    `
  }
];
