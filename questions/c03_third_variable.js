// 総合演習 大問03. 相関と第3の変数
const comprehensiveSet = {
  id: 3,
  title: "相関と第3の変数",
  category: "記述統計",
  difficulty: 2,
  priority: 2,
  stem: `
    ある小学校の1年生から6年生までの児童を対象として、握力、算数テストの得点、学年を調査した。学年については、1年生を1、2年生を2、…、6年生を6として数値化した。<br><br>
    握力を \\(X\\)、算数テストの得点を \\(Y\\)、学年を \\(Z\\) としたところ、3変数間の相関係数は次のようになった。
    <div class='overflow-x-auto mt-4'>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'></th>
            <th class='border border-slate-300 p-2'>握力 \\(X\\)</th>
            <th class='border border-slate-300 p-2'>算数得点 \\(Y\\)</th>
            <th class='border border-slate-300 p-2'>学年 \\(Z\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>握力 \\(X\\)</td>
            <td class='border border-slate-300 p-2'>1.00</td>
            <td class='border border-slate-300 p-2'>0.73</td>
            <td class='border border-slate-300 p-2'>0.80</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>算数得点 \\(Y\\)</td>
            <td class='border border-slate-300 p-2'>0.73</td>
            <td class='border border-slate-300 p-2'>1.00</td>
            <td class='border border-slate-300 p-2'>0.80</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>学年 \\(Z\\)</td>
            <td class='border border-slate-300 p-2'>0.80</td>
            <td class='border border-slate-300 p-2'>0.80</td>
            <td class='border border-slate-300 p-2'>1.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  parts: [
    {
      id: 1,
      difficulty: 2,
      priority: 3,
      question: `
        上の表から判断できることとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
        ① 握力と算数得点には比較的強い正の相関がみられるが、この結果だけから、握力が強くなることによって算数得点が高くなるとはいえない。<br><br>
        ② 握力と算数得点の相関係数が0.73であることから、握力が1単位増加すると、算数得点は平均して0.73単位増加する。<br><br>
        ③ 握力と学年、算数得点と学年の相関係数がともに0.80であることから、同じ学年の児童に限っても、握力と算数得点の相関係数は0.73となる。<br><br>
        ④ 握力と算数得点の相関係数が正であることから、すべての児童について、握力が強い児童ほど算数得点も高い。
      `,
      choices: ["①", "②", "③", "④"],
      answer: "①",
      explanation: `
        正解は①です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        相関係数は、2つの変数の線形な関係の方向と強さを表す指標であり、
        \\[
          -1\\le r\\le 1
        \\]
        の範囲をとります。\\(r\\) が正なら、一方が大きいほど他方も大きい傾向があります。ただし、相関係数は因果関係を示すものではありません。また、第3の変数が両方の変数と関連している場合、その影響によって2変数間に相関が生じたり、相関が強く見えたりすることがあります。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        握力 \\(X\\) と算数得点 \\(Y\\) の相関係数は
        \\[
          r_{XY}=0.73
        \\]
        であり、比較的強い正の相関がみられます。一方で、学年 \\(Z\\) は
        \\[
          r_{XZ}=0.80,\\qquad r_{YZ}=0.80
        \\]
        と、握力と算数得点の双方に強く関連しています。したがって、\\(r_{XY}=0.73\\) だけを根拠として、握力が算数得点を高めるという因果関係を結論づけることはできません。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 正しい</b>：\\(r_{XY}=0.73\\) から正の相関は読み取れますが、相関だけから因果関係を結論づけることはできません。<br>
        ・<b>② 誤り</b>：相関係数は回帰直線の傾きではありません。単位をもたない指標であり、「\\(X\\) が1増えると \\(Y\\) が0.73増える」という意味ではありません。<br>
        ・<b>③ 誤り</b>：0.73は学年を考慮せずに求めた相関係数です。学年の影響を考慮した後にも同じ相関が残るとは限りません。<br>
        ・<b>④ 誤り</b>：正の相関は全体として右上がりの傾向があることを意味するのであって、すべての観測値について大小関係が一致することを意味しません。
      `
    },
    {
      id: 2,
      difficulty: 2,
      priority: 2,
      question: `
        学年 \\(Z\\) の影響を取り除いたときの、握力 \\(X\\) と算数得点 \\(Y\\) の偏相関係数を求めたい。<br><br>
        3変数 \\(X,Y,Z\\) の相関係数をそれぞれ \\(r_{XY},r_{XZ},r_{YZ}\\) とすると、\\(Z\\) の影響を取り除いた \\(X\\) と \\(Y\\) の偏相関係数は
        \\[
          r_{XY\\cdot Z}=\\dfrac{r_{XY}-r_{XZ}r_{YZ}}{\\sqrt{(1-r_{XZ}^2)(1-r_{YZ}^2)}}
        \\]
        で与えられる。<br><br>
        学年の影響を取り除いた握力と算数得点の偏相関係数として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
        ① \\(0.09\\)<br>
        ② \\(0.25\\)<br>
        ③ \\(0.64\\)<br>
        ④ \\(0.73\\)
      `,
      choices: ["①", "②", "③", "④"],
      answer: "②",
      explanation: `
        正解は②です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        偏相関係数は、第3の変数との線形な関連を取り除いたうえで、2変数間にどの程度の線形な関連が残るかを表します。学年 \\(Z\\) の影響を取り除いた握力 \\(X\\) と算数得点 \\(Y\\) の偏相関係数は、
        \\[
          r_{XY\\cdot Z}=\\dfrac{r_{XY}-r_{XZ}r_{YZ}}{\\sqrt{(1-r_{XZ}^2)(1-r_{YZ}^2)}}
        \\]
        によって求められます。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        表より、
        \\[
          r_{XY}=0.73,\\qquad r_{XZ}=0.80,\\qquad r_{YZ}=0.80
        \\]
        です。したがって、
        \\[
          r_{XY\\cdot Z}=\\dfrac{0.73-(0.80)(0.80)}{\\sqrt{(1-0.80^2)(1-0.80^2)}}
          =\\dfrac{0.73-0.64}{\\sqrt{0.36\\times 0.36}}
          =\\dfrac{0.09}{0.36}=0.25.
        \\]
        学年を考慮する前には0.73であった相関が、学年との線形な関連を取り除くと0.25まで小さくなります。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：\\(0.73-0.80\\times 0.80=0.09\\) だけを計算し、分母による標準化を行っていません。<br>
        ・<b>② 正しい</b>：偏相関係数は \\(0.25\\) です。<br>
        ・<b>③ 誤り</b>：\\(0.80\\times 0.80=0.64\\) をそのまま偏相関係数としています。<br>
        ・<b>④ 誤り</b>：0.73は学年の影響を取り除く前の単相関係数です。
      `
    },
    {
      id: 3,
      difficulty: 3,
      priority: 1,
      question: `
        問2の結果の解釈に関する次の (a)〜(c) の記述を考える。<br><br>
        <b>(a)</b> 握力と算数得点の間にみられた正の相関の一部は、学年が高い児童ほど握力が強く、算数得点も高いという両者と学年との関連によって説明されると考えられる。<br><br>
        <b>(b)</b> 学年の影響を取り除いた偏相関係数の値から、学年を同じにすれば、握力を強くすることによって算数得点を高くできるといえる。<br><br>
        <b>(c)</b> 学年の影響を取り除くと偏相関係数の値から、学年を考慮せずに求めた相関係数0.73を、そのまま握力と算数得点の直接的な関係の強さと解釈することは適切ではない。<br><br>
        正しいものをすべて選んだ組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>(a)</th>
                <th class='border border-slate-300 p-2'>(b)</th>
                <th class='border border-slate-300 p-2'>(c)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'></td>
                <td class='border border-slate-300 p-2'></td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'></td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'></td>
                <td class='border border-slate-300 p-2'>○</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
                <td class='border border-slate-300 p-2'>○</td>
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
        単相関係数は、第3の変数の影響を区別せずに2変数間の線形な関連を測ります。これに対して偏相関係数は、第3の変数との線形な関連を取り除いたうえで、2変数間に残る線形な関連を測ります。ただし、偏相関係数もあくまで変数間の関連を表す指標であり、それだけから因果関係を結論づけることはできません。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        学年を考慮する前には、
        \\[
          r_{XY}=0.73
        \\]
        という比較的強い正の相関がみられました。一方、学年との線形な関連を取り除くと、
        \\[
          r_{XY\\cdot Z}=0.25
        \\]
        まで低下しています。これは、握力と算数得点にみられた単相関の少なくとも一部が、両者と学年との関連を反映していたことと整合的です。ただし、偏相関係数が0.25であることだけから、握力を変化させれば算数得点が変化するという因果関係を結論づけることはできません。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：(a) は正しいですが、(c) も正しいです。学年が握力と算数得点の双方と強く関連しており、学年を考慮すると両者の相関が大幅に小さくなっています。<br>
        ・<b>② 誤り</b>：(b) は因果関係を断定しています。偏相関係数が正であっても、それだけから握力を強くすることによって算数得点が高くなるとはいえません。<br>
        ・<b>③ 正しい</b>：(a), (c) はともに、単相関0.73と偏相関0.25の違いを適切に解釈しています。<br>
        ・<b>④ 誤り</b>：(b) が誤っています。偏相関によって学年との線形な関連を取り除いても、因果関係が証明されるわけではありません。
      `
    }
  ]
};
