// 分野30. 1標本の検定：母平均・母比率
const allQuestions = [
  {
    id: 1,
    category: "1標本の検定：母平均・母比率",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      ある工場で製造される製品の内容量は正規分布に従い、従来の平均内容量は \\(500\\mathrm{g}\\) である。製造工程を変更した後、内容量が変化したかを調べるために、大きさ \\(n=100\\) の無作為標本を抽出したところ、
      \\[
        \\bar X=503,\\qquad \\sigma=10
      \\]
      であった。ただし、母標準偏差 \\(\\sigma=10\\) は既知である。<br><br>
      次の仮説を有意水準5%で検定する。
      \\[
        H_0:\\mu=500,\\qquad H_1:\\mu\\neq 500
      \\]
      検定統計量の値【A】と検定結果【B】の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br>
      必要に応じて、付属の標準正規分布表を用いてください。<br><br>
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
            <td class='border border-slate-300 p-2'>\\(0.30\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(3.00\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(3.00\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(0.30\\)</td>
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
      母標準偏差 \\(\\sigma\\) が既知で、正規母集団の母平均について \\(H_0:\\mu=\\mu_0\\) を検定する場合、検定統計量は
      \\[
        Z=\\dfrac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}
      \\]
      とします。帰無仮説 \\(H_0\\) のもとでは \\(Z\\sim N(0,1)\\) です。有意水準5%の両側検定では、標準正規分布表より棄却域は
      \\[
        |Z|\\ge 1.96
      \\]
      となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      検定統計量を計算すると、
      \\[
        Z=\\dfrac{503-500}{10/\\sqrt{100}}=\\dfrac{3}{1}=3.00
      \\]
      です。したがって、
      \\[
        |Z|=3.00>1.96
      \\]
      であり、検定統計量は棄却域に入ります。よって、有意水準5%で
      \\[
        \\boxed{H_0\\text{を棄却する}}
      \\]
      と判断します。平均内容量が500gから変化したことを示す統計的な証拠があると判断されます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：標準誤差は \\(\\sigma/\\sqrt n=1\\) であり、検定統計量は \\(0.30\\) ではなく \\(3.00\\) です。<br>
      ・<b>② 誤り</b>：検定統計量は正しいですが、\\(3.00\\) は棄却域に入るため、検定結果が誤っています。<br>
      ・<b>③ 正しい</b>：検定統計量は \\(Z=3.00\\) であり、\\(|Z|>1.96\\) なので \\(H_0\\) を棄却します。<br>
      ・<b>④ 誤り</b>：検定統計量の計算が誤っています。また、正しい統計量 \\(Z=3.00\\) を用いれば \\(H_0\\) は棄却されます。
    `
  },
  {
    id: 2,
    category: "1標本の検定：母平均・母比率",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      正規母集団から大きさ \\(n=16\\) の無作為標本を抽出したところ、
      \\[
        \\bar X=52,\\qquad S^2=16
      \\]
      を得た。ただし、母分散 \\(\\sigma^2\\) は未知である。<br><br>
      母平均 \\(\\mu\\) について、
      \\[
        H_0:\\mu=50,\\qquad H_1:\\mu\\neq 50
      \\]
      を有意水準5%で検定する。<br><br>
      検定統計量の値【A】、帰無仮説のもとで検定統計量が従う分布【B】、検定結果【C】の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br>
      必要に応じて、付属の \\(t\\) 分布表を用いてください。<br><br>
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
            <td class='border border-slate-300 p-2'>\\(2.00\\)</td>
            <td class='border border-slate-300 p-2'>\\(t_{15}\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(2.00\\)</td>
            <td class='border border-slate-300 p-2'>\\(t_{15}\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(2.00\\)</td>
            <td class='border border-slate-300 p-2'>\\(N(0,1)\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(0.50\\)</td>
            <td class='border border-slate-300 p-2'>\\(t_{16}\\)</td>
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
      正規母集団の母平均を検定するとき、母分散が未知であれば、不偏分散 \\(S^2\\) を用いて
      \\[
        T=\\dfrac{\\bar X-\\mu_0}{S/\\sqrt n}
      \\]
      を検定統計量とします。帰無仮説 \\(H_0:\\mu=\\mu_0\\) のもとで、
      \\[
        T\\sim t_{n-1}
      \\]
      です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(S^2=16\\) なので \\(S=4\\) です。検定統計量は、
      \\[
        T=\\dfrac{52-50}{4/\\sqrt{16}}=\\dfrac{2}{1}=2.00
      \\]
      です。自由度は \\(n-1=15\\) なので、\\(T\\sim t_{15}\\) です。有意水準5%の両側検定では、\\(t\\) 分布表から自由度15の上側2.5%点は約 \\(2.131\\) です。したがって、
      \\[
        |T|=2.00\\lt 2.131
      \\]
      であり、棄却域には入りません。よって、
      \\[
        \\boxed{H_0\\text{を棄却しない}}
      \\]
      と判断します。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：検定統計量と分布は正しいですが、\\(|T|=2.00\\lt 2.131\\) なので \\(H_0\\) は棄却されません。<br>
      ・<b>② 正しい</b>：\\(T=2.00\\)、自由度15の \\(t\\) 分布を用い、有意水準5%では \\(H_0\\) を棄却しません。<br>
      ・<b>③ 誤り</b>：母分散が未知であり、正規母集団からの有限標本なので、標準正規分布ではなく自由度15の \\(t\\) 分布を用います。<br>
      ・<b>④ 誤り</b>：\\(S^2=16\\) から \\(S=4\\) として標準誤差 \\(S/\\sqrt n\\) を計算する必要があります。また、自由度は \\(n\\) ではなく \\(n-1=15\\) です。
    `
  },
  {
    id: 3,
    category: "1標本の検定：母平均・母比率",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      ある学習方法を導入する前のテスト得点の母平均は70点であった。新しい学習方法を導入した後、平均得点が<b>上昇したといえるか</b>を調べるため、正規母集団から大きさ \\(n=25\\) の無作為標本を抽出したところ、
      \\[
        \\bar X=72,\\qquad S=5
      \\]
      であった。母分散は未知である。<br><br>
      この検定について、対立仮説【A】、検定統計量の値【B】、有意水準5%での検定結果【C】の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br>
      必要に応じて、付属の \\(t\\) 分布表を用いてください。<br><br>
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
            <td class='border border-slate-300 p-2'>\\(H_1:\\mu\\lt 70\\)</td>
            <td class='border border-slate-300 p-2'>\\(-2.00\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(H_1:\\mu>70\\)</td>
            <td class='border border-slate-300 p-2'>\\(2.00\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(H_1:\\mu\\neq 70\\)</td>
            <td class='border border-slate-300 p-2'>\\(2.00\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(H_1:\\mu>70\\)</td>
            <td class='border border-slate-300 p-2'>\\(2.00\\)</td>
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
      「母平均が上昇したか」を調べるので、
      \\[
        H_0:\\mu=70,\\qquad H_1:\\mu>70
      \\]
      という<b>上側片側検定</b>を行います。母分散は未知であり、正規母集団からの標本なので、
      \\[
        T=\\dfrac{\\bar X-\\mu_0}{S/\\sqrt n}
      \\]
      を用います。帰無仮説のもとで、
      \\[
        T\\sim t_{n-1}=t_{24}
      \\]
      です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      検定統計量は、
      \\[
        T=\\dfrac{72-70}{5/\\sqrt{25}}=\\dfrac{2}{1}=2.00
      \\]
      です。自由度24の \\(t\\) 分布表から、上側確率5%の点は約 \\(1.711\\) です。今回は上側片側検定なので、
      \\[
        T\\ge 1.711
      \\]
      が棄却域となります。実際には \\(2.00>1.711\\) なので \\(H_0\\) を棄却します。また、\\(t\\) 分布表を見ると、自由度24について
      \\[
        1.711\\lt 2.00\\lt 2.064
      \\]
      です。上側確率はそれぞれ5%、2.5%に対応するため、片側検定のp値は
      \\[
        \\boxed{0.025\\lt p\\lt 0.05}
      \\]
      と判断できます。したがって、有意水準5%では、母平均が70点より上昇したことを示す統計的な証拠があると判断されます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：「上昇したか」という問題設定に対して、\\(H_1:\\mu\\lt 70\\) とするのは不適切です。<br>
      ・<b>② 誤り</b>：仮説と検定統計量は正しいですが、\\(T=2.00>1.711\\) なので \\(H_0\\) を棄却します。<br>
      ・<b>③ 誤り</b>：「上昇したか」という方向を指定しているため、両側検定ではなく上側片側検定を行います。<br>
      ・<b>④ 正しい</b>：「上昇したか」を調べるので \\(H_1:\\mu>70\\) とし、\\(T=2.00\\) は上側5%の棄却域に入ります。
    `
  },
  {
    id: 4,
    category: "1標本の検定：母平均・母比率",
    difficulty: 3,
    priority: 3,
    type: "選択式",
    question: `
      ある商品の従来の購入率は40%であった。新しい広告を導入した後、購入率が<b>上昇したといえるか</b>を調べるため、無作為に400人を抽出したところ、180人が商品を購入していた。<br><br>
      広告導入後の母購入率を \\(p\\) とし、
      \\[
        H_0:p=0.40,\\qquad H_1:p>0.40
      \\]
      として有意水準5%で検定する。帰無仮説のもとで二項分布を正規分布で近似するものとする。<br><br>
      検定統計量の値【A】、帰無仮説のもとで検定統計量が近似的に従う分布【B】、検定結果【C】の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br>
      必要に応じて、付属の標準正規分布表を用いてください。<br><br>
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
            <td class='border border-slate-300 p-2'>約 \\(2.04\\)</td>
            <td class='border border-slate-300 p-2'>\\(N(0,1)\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>約 \\(2.04\\)</td>
            <td class='border border-slate-300 p-2'>\\(N(0,1)\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>約 \\(2.01\\)</td>
            <td class='border border-slate-300 p-2'>\\(t_{399}\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>約 \\(0.00\\)</td>
            <td class='border border-slate-300 p-2'>\\(N(0,1)\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
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
      各人について、商品を購入した場合を1、購入しなかった場合を0と考えると、購入者数 \\(X\\) は二項分布に従います。帰無仮説 \\(H_0:p=p_0\\) のもとでは、
      \\[
        X\\sim\\operatorname{Bin}(n,p_0)
      \\]
      です。標本サイズが十分に大きい場合、二項分布を正規分布で近似できるため、
      \\[
        \\hat p=\\dfrac{X}{n}
      \\]
      について、
      \\[
        \\dfrac{\\hat p-p_0}{\\sqrt{p_0(1-p_0)/n}}\\approx N(0,1)
      \\]
      を利用できます。検定では、帰無仮説が正しいと仮定したときの分布を考えるため、標準誤差には \\(\\hat p\\) ではなく、帰無仮説で指定された \\(p_0\\) を用います。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      標本比率は、
      \\[
        \\hat p=\\dfrac{180}{400}=0.45
      \\]
      です。帰無仮説のもとでは \\(p_0=0.40\\) です。したがって検定統計量は、
      \\[
        Z=\\dfrac{0.45-0.40}{\\sqrt{0.40(1-0.40)/400}}
      \\]
      です。分母を計算すると、
      \\[
        \\sqrt{\\dfrac{0.40\\times 0.60}{400}}=\\sqrt{0.0006}\\approx 0.02449
      \\]
      です。よって、
      \\[
        Z\\approx\\dfrac{0.05}{0.02449}\\approx 2.04
      \\]
      です。帰無仮説のもとで \\(Z\\approx N(0,1)\\) です。今回は上側片側検定です。標準正規分布表から上側5%点は約 \\(1.645\\) なので、
      \\[
        Z\\ge 1.645
      \\]
      が棄却域となります。実際には \\(2.04>1.645\\) なので、
      \\[
        \\boxed{H_0\\text{を棄却する}}
      \\]
      となります。また、標準正規分布表から片側p値はおよそ \\(p\\simeq 0.021\\) であり、\\(p\\lt 0.05\\) であることからも同じ結論が得られます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：検定統計量は約 \\(2.04\\) であり、帰無仮説のもとで近似的に標準正規分布に従います。上側5%点を超えるため \\(H_0\\) を棄却します。<br>
      ・<b>② 誤り</b>：【A】【B】は正しいですが、\\(2.04>1.645\\) なので \\(H_0\\) を棄却します。<br>
      ・<b>③ 誤り</b>：母比率の大標本検定では、二項分布の正規近似により標準正規分布を用います。\\(t\\) 分布は用いません。また、標準誤差に \\(\\hat p\\) を用いると約 \\(2.01\\) になりますが、検定では帰無仮説の \\(p_0\\) を用います。<br>
      ・<b>④ 誤り</b>：観測された標本比率は \\(180/400=0.45\\) であり、帰無仮説の \\(p_0=0.40\\) ではありません。検定統計量は0にはなりません。
    `
  }
];
