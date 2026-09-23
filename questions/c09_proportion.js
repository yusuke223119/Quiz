// 総合演習 大問09. 母比率に関する推測
const comprehensiveSet = {
  id: 9,
  title: "母比率に関する推測",
  category: "仮説検定",
  difficulty: 2,
  priority: 3,
  stem: `
    ある動画配信サービスでは、無料体験を開始した利用者のうち、その後に有料会員へ移行する者の割合について調査している。<br><br>
    従来、このサービスでは無料体験利用者の40%が有料会員へ移行するとされていた。サービス内容を変更した後、無作為に抽出した400人について調べたところ、172人が有料会員へ移行した。
  `,
  parts: [
    {
      id: 1,
      difficulty: 2,
      priority: 3,
      question: `
        サービス内容の変更後、有料会員へ移行する割合が従来の40%より高くなったといえるかを、有意水準5%で検討する。<br><br>
        帰無仮説を \\(H_0:p=0.40\\)、対立仮説を \\(H_1:p>0.40\\) とする。ただし、\\(p\\) はサービス内容変更後の有料会員への移行割合である。
        また、検定統計量は正規分布に従うと近似できるものとする。<br><br>
        検定統計量と検定結果の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>検定統計量</th>
                <th class='border border-slate-300 p-2'>検定結果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>\\(Z=\\dfrac{0.43-0.40}{\\sqrt{0.40(1-0.40)/400}}\\approx 1.22\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>\\(Z=\\dfrac{0.43-0.40}{\\sqrt{0.40(1-0.40)/400}}\\approx 1.22\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>\\(Z=\\dfrac{0.43-0.40}{\\sqrt{0.43(1-0.43)/400}}\\approx 1.21\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>\\(Z=\\dfrac{0.43-0.40}{\\sqrt{0.43(1-0.43)/400}}\\approx 1.21\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
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
        標本サイズが十分大きいとき、標本比率 \\(\\hat p\\) は近似的に正規分布に従います。帰無仮説 \\(H_0:p=p_0\\) の下では、
        \\[
          E[\\hat p]=p_0,\\qquad V[\\hat p]=\\dfrac{p_0(1-p_0)}{n}
        \\]
        であるため、検定統計量
        \\[
          Z=\\dfrac{\\hat p-p_0}{\\sqrt{p_0(1-p_0)/n}}
        \\]
        は近似的に標準正規分布に従います。仮説検定では、「帰無仮説が正しいとしたときに、観測された結果がどの程度珍しいか」を評価するため、標準誤差も帰無仮説 \\(p=p_0\\) の下で計算します。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        今回の標本比率は
        \\[
          \\hat p=\\dfrac{172}{400}=0.43.
        \\]
        帰無仮説の下では \\(p_0=0.40\\) なので、
        \\[
          Z=\\dfrac{0.43-0.40}{\\sqrt{0.40(1-0.40)/400}}=\\dfrac{0.03}{\\sqrt{0.0006}}\\approx 1.22.
        \\]
        対立仮説は \\(H_1:p>0.40\\) であるため、上側片側検定です。標準正規分布において \\(Z=1.22\\) より大きな値をとる確率は約0.11であり、5%より大きいです。したがって、有意水準5%では \\(H_0\\) を棄却しないと判断します。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 正しい</b>：帰無仮説の下で \\(p=0.40\\) として標準誤差を求めると \\(Z\\approx 1.22\\) となり、有意水準5%では帰無仮説を棄却しません。<br>
        ・<b>② 誤り</b>：検定統計量は正しいですが、\\(Z\\approx 1.22\\) は上側5%の棄却域に入りません。<br>
        ・<b>③ 誤り</b>：結論は同じですが、帰無仮説の下での検定統計量を構成する際に、標本比率 \\(0.43\\) を用いて標準誤差を計算しています。<br>
        ・<b>④ 誤り</b>：標準誤差の構成と検定結果の両方が適切ではありません。
      `
    },
    {
      id: 2,
      difficulty: 3,
      priority: 3,
      question: `
        問1と同じデータについて、今度はサービス内容の変更によって有料会員への移行割合が従来の40%から<b>変化したかどうか</b>を検討することにした。<br><br>
        帰無仮説を
        \\[
          H_0:p=0.40
        \\]
        としたとき、対立仮説と \\(p\\) 値の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
        また、検定統計量は正規分布に従うと近似できるものとする。<br><br>
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>対立仮説</th>
                <th class='border border-slate-300 p-2'>\\(p\\) 値</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>\\(H_1:p>0.40\\)</td>
                <td class='border border-slate-300 p-2'>約 \\(0.1112\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>\\(H_1:p\\neq 0.40\\)</td>
                <td class='border border-slate-300 p-2'>約 \\(0.1112\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>\\(H_1:p\\neq 0.40\\)</td>
                <td class='border border-slate-300 p-2'>約 \\(0.2224\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>\\(H_1:p\\lt 0.40\\)</td>
                <td class='border border-slate-300 p-2'>約 \\(0.8888\\)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      choices: ["①", "②", "③", "④"],
      answer: "③",
      explanation: `
        正解は③です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        「母比率が基準値より高くなったか」を調べる場合には片側検定を用いますが、「母比率が基準値から変化したか」を調べる場合には、
        \\[
          H_1:p\\neq p_0
        \\]
        とする両側検定を用います。標準正規分布は0を中心に左右対称なので、観測された検定統計量が正の場合、両側検定の \\(p\\) 値は
        \\[
          2P(Z\\ge |z_{\\mathrm{obs}}|)
        \\]
        で求めます。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        問1より、観測された検定統計量は
        \\[
          z_{\\mathrm{obs}}\\approx 1.22
        \\]
        です。今回調べたいのは「40%より高くなったか」ではなく、「40%から変化したか」であるため、
        \\[
          H_1:p\\neq 0.40
        \\]
        とします。標準正規分布表から、
        \\[
          P(Z\\ge 1.22)\\approx 0.1112.
        \\]
        両側検定では正負両方向のずれを考えるため、
        \\[
          p\\text{値}\\approx 2\\times 0.1112=0.2224.
        \\]
        したがって、対立仮説は \\(H_1:p\\neq 0.40\\)、\\(p\\) 値は約0.2224です。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：\\(p\\) 値約0.11は問1の上側片側検定に対応します。「変化したか」という今回の問いには適しません。<br>
        ・<b>② 誤り</b>：対立仮説は正しいですが、約0.11は片側確率です。両側検定では反対側も含める必要があります。<br>
        ・<b>③ 正しい</b>：「変化したか」に対応するのは両側対立仮説であり、\\(p\\) 値は片側確率の約2倍となります。<br>
        ・<b>④ 誤り</b>：「変化したか」という問いに \\(p\\lt 0.40\\) という方向を限定した対立仮説を設定するのは適切ではありません。
      `
    },
    {
      id: 3,
      difficulty: 3,
      priority: 2,
      question: `
        この動画配信サービスでは、さらに異なる2種類の案内画面 A、B の効果を比較するため、それぞれ異なる利用者を無作為に抽出して表示した。その結果は次の表のようになった。
        <div class='overflow-x-auto mt-4 mb-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'>案内画面</th>
                <th class='border border-slate-300 p-2'>利用者数</th>
                <th class='border border-slate-300 p-2'>有料会員へ移行した人数</th>
                <th class='border border-slate-300 p-2'>標本比率</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>A</td>
                <td class='border border-slate-300 p-2'>300</td>
                <td class='border border-slate-300 p-2'>126</td>
                <td class='border border-slate-300 p-2'>0.42</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>B</td>
                <td class='border border-slate-300 p-2'>300</td>
                <td class='border border-slate-300 p-2'>102</td>
                <td class='border border-slate-300 p-2'>0.34</td>
              </tr>
            </tbody>
          </table>
        </div>
        Aを表示した利用者の母移行率を \\(p_A\\)、Bを表示した利用者の母移行率を \\(p_B\\) とする。<br><br>
        AとBで母移行率が異なるかを、
        \\[
          H_0:p_A=p_B,\\qquad H_1:p_A\\neq p_B
        \\]
        として、有意水準5%で検定する。<br><br>
        2つの標本は独立であり、標本サイズが十分大きいとき、\\(\\hat p_A-\\hat p_B\\) の標準誤差は
        \\[
          \\sqrt{\\dfrac{\\hat p_A(1-\\hat p_A)}{n_A}+\\dfrac{\\hat p_B(1-\\hat p_B)}{n_B}}
        \\]
        で近似できるものとする。また、検定統計量は正規分布に従うと近似できるものとする。<br><br>
        検定結果として、最も適切なものを、次の ①〜④ のうちから1つ選べ。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>検定統計量の絶対値</th>
                <th class='border border-slate-300 p-2'>検定結果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>約 \\(1.4\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>約 \\(2.0\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>約 \\(2.0\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>約 \\(2.8\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      choices: ["①", "②", "③", "④"],
      answer: "③",
      explanation: `
        正解は③です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        独立な2つの標本から得られた標本比率を \\(\\hat p_A,\\hat p_B\\) とすると、その差 \\(\\hat p_A-\\hat p_B\\) を用いて2つの母比率を比較できます。今回は、問題文で与えられた標準誤差
        \\[
          SE=\\sqrt{\\dfrac{\\hat p_A(1-\\hat p_A)}{n_A}+\\dfrac{\\hat p_B(1-\\hat p_B)}{n_B}}
        \\]
        を用いて、
        \\[
          Z=\\dfrac{\\hat p_A-\\hat p_B}{SE}
        \\]
        を計算します。また、\\(H_1:p_A\\neq p_B\\) であるため両側検定となります。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        標本比率の差は
        \\[
          \\hat p_A-\\hat p_B=0.42-0.34=0.08.
        \\]
        標準誤差は、
        \\[
          SE=\\sqrt{\\dfrac{0.42(0.58)}{300}+\\dfrac{0.34(0.66)}{300}}
          =\\sqrt{\\dfrac{0.2436+0.2244}{300}}
          =\\sqrt{0.00156}\\approx 0.0395.
        \\]
        したがって、
        \\[
          Z=\\dfrac{0.08}{0.0395}\\approx 2.03.
        \\]
        両側検定なので、標準正規分布において \\(P(|Z|\\ge 2.03)\\) を考えます。この確率は約0.04であり、5%を下回ります。したがって、有意水準5%では \\(H_0:p_A=p_B\\) を棄却すると判断します。すなわち、このデータからはAとBの母移行率に差があることを示す統計的な証拠が得られています。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：標本比率の差0.08を、差の標準誤差約0.0395で割ると、検定統計量の絶対値は約2.0となります。<br>
        ・<b>② 誤り</b>：検定統計量の大きさはおおむね正しいですが、両側 \\(p\\) 値は約0.04であり、有意水準5%では帰無仮説を棄却します。<br>
        ・<b>③ 正しい</b>：\\(|Z|\\approx 2.03\\) であり、両側 \\(p\\) 値は5%を下回るため、帰無仮説を棄却します。<br>
        ・<b>④ 誤り</b>：標本比率の差を各群の標準誤差のいずれか一方だけで割るなど、差の標準誤差を適切に計算しない場合に、検定統計量を過大評価する可能性があります。
      `
    }
  ]
};
