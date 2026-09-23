// 総合演習 大問11. 線形回帰モデルの結果の読み取り
const comprehensiveSet = {
  id: 11,
  title: "線形回帰モデルの結果の読み取り",
  category: "回帰分析",
  difficulty: 2,
  priority: 3,
  stem: `
    ある小売企業では、店舗ごとの売上高と店舗特性との関係を調べるため、50店舗についてデータを収集した。<br><br>
    各店舗について、
    <ul class="list-disc pl-5 my-2 space-y-1">
      <li>\\(Y\\)：1か月当たりの売上高</li>
      <li>\\(X_1\\)：1か月当たりの広告費</li>
      <li>\\(X_2\\)：店舗面積</li>
    </ul>
    を測定し、次の線形回帰モデルを最小二乗法によって推定した。
    \\[
      Y_i=\\beta_0+\\beta_1X_{1i}+\\beta_2X_{2i}+\\varepsilon_i
    \\]
    得られた結果の一部は次のとおりである。
    <div class='overflow-x-auto mt-4 mb-4'>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>変数</th>
            <th class='border border-slate-300 p-2'>Estimate</th>
            <th class='border border-slate-300 p-2'>Std. Error</th>
            <th class='border border-slate-300 p-2'>t value</th>
            <th class='border border-slate-300 p-2'>Pr(&gt;|t|)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>(Intercept)</td>
            <td class='border border-slate-300 p-2'>10.200</td>
            <td class='border border-slate-300 p-2'>4.000</td>
            <td class='border border-slate-300 p-2'>2.550</td>
            <td class='border border-slate-300 p-2'>0.014</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(X_1\\)</td>
            <td class='border border-slate-300 p-2'>1.800</td>
            <td class='border border-slate-300 p-2'>0.400</td>
            <td class='border border-slate-300 p-2'><b>(A)</b></td>
            <td class='border border-slate-300 p-2'>&lt;0.001</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(X_2\\)</td>
            <td class='border border-slate-300 p-2'>-0.600</td>
            <td class='border border-slate-300 p-2'>0.300</td>
            <td class='border border-slate-300 p-2'>-2.000</td>
            <td class='border border-slate-300 p-2'>0.051</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class='overflow-x-auto mb-2'>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>指標</th>
            <th class='border border-slate-300 p-2'>値</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>Residual standard error</td>
            <td class='border border-slate-300 p-2'>7.20（自由度47）</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>Multiple R-squared</td>
            <td class='border border-slate-300 p-2'>0.520</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>Adjusted R-squared</td>
            <td class='border border-slate-300 p-2'>0.500</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>F-statistic</td>
            <td class='border border-slate-300 p-2'>25.46（自由度2, 47）</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>F検定の p-value</td>
            <td class='border border-slate-300 p-2'>&lt;0.001</td>
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
        上の回帰分析の結果から読み取れる内容として、最も適切なものを、次の ①〜④ のうちから1つ選べ。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2 w-12'></th>
                <th class='border border-slate-300 p-2'>内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50 text-center'>①</td>
                <td class='border border-slate-300 p-2'>店舗面積 \\(X_2\\) が同じ店舗どうしを比較したとき、広告費 \\(X_1\\) が1単位大きい店舗では、売上高 \\(Y\\) の予測値は平均的に1.8単位大きい。</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50 text-center'>②</td>
                <td class='border border-slate-300 p-2'>広告費 \\(X_1\\) を1単位増加させれば、他の条件にかかわらず売上高 \\(Y\\) は必ず1.8単位増加する。</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50 text-center'>③</td>
                <td class='border border-slate-300 p-2'>広告費 \\(X_1\\) と売上高 \\(Y\\) の相関係数は1.8である。</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50 text-center'>④</td>
                <td class='border border-slate-300 p-2'>店舗面積 \\(X_2\\) を考慮しない場合でも、広告費 \\(X_1\\) が1単位大きい店舗では、売上高 \\(Y\\) の予測値は平均的に1.8単位大きい。</td>
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
        重回帰モデル
        \\[
          Y=\\beta_0+\\beta_1X_1+\\beta_2X_2+\\varepsilon
        \\]
        における \\(\\beta_1\\) は、他の説明変数を一定としたときの \\(X_1\\) と \\(Y\\) の関係を表す偏回帰係数です。今回の推定された回帰式は、
        \\[
          \\hat Y=10.2+1.8X_1-0.6X_2
        \\]
        です。したがって、\\(X_2\\) を一定としたとき、\\(X_1\\) が1単位大きくなることに対応して、\\(Y\\) の予測値は1.8単位大きくなります。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        \\(X_1\\) の Estimate は \\(\\hat\\beta_1=1.8\\) です。ただし、これは \\(X_1\\) だけを説明変数とした単回帰の傾きではありません。\\(X_2\\) も同時にモデルへ含まれているため、\\(X_2\\) を一定とした上での \\(X_1\\) と \\(Y\\) の関係として解釈します。また、観察データから得られた回帰係数だけを根拠として、\\(X_1\\) を変化させれば \\(Y\\) が変化するという因果関係まで結論づけることはできません。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 正しい</b>：\\(X_2\\) を一定とした場合の \\(X_1\\) の偏回帰係数が1.8であることを適切に解釈しています。<br>
        ・<b>② 誤り</b>：回帰係数から「広告費を増加させれば売上高が必ず増加する」という因果関係や決定論的な関係を結論づけることはできません。<br>
        ・<b>③ 誤り</b>：1.8は偏回帰係数であり、相関係数ではありません。相関係数は必ず \\(-1\\) 以上1以下であるため、1.8という値をとることもありません。<br>
        ・<b>④ 誤り</b>：1.8は店舗面積 \\(X_2\\) を一定とした場合の偏回帰係数です。\\(X_2\\) を考慮しない単回帰を行った場合の傾きが1.8になるとは限りません。
      `
    },
    {
      id: 2,
      difficulty: 2,
      priority: 3,
      question: `
        回帰結果の <b>(A)</b> に入る値を求める。<br><br>
        さらに、広告費 \\(X_1\\) の回帰係数について、
        \\[
          H_0:\\beta_1=0,\\qquad H_1:\\beta_1\\neq 0
        \\]
        として、有意水準5%で検定する。<br><br>
        <b>(A)</b> に入る値と検定結果の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>\\((A)\\)</th>
                <th class='border border-slate-300 p-2'>検定結果</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>\\(4.500\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>\\(4.500\\)</td>
                <td class='border border-slate-300 p-2'>棄却しない</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>\\(0.222\\)</td>
                <td class='border border-slate-300 p-2'>棄却する</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>\\(0.222\\)</td>
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
        回帰係数 \\(\\beta_j\\) について、\\(H_0:\\beta_j=0\\) を検定するとき、検定統計量は
        \\[
          t=\\dfrac{\\hat\\beta_j-0}{SE(\\hat\\beta_j)}
        \\]
        で求めます。回帰分析の結果表における Estimate は回帰係数の推定値、Std. Error はその標準誤差、t value は推定値を標準誤差で割った値、Pr(&gt;|t|) は両側検定の \\(p\\) 値を表しています。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        \\(X_1\\) について、\\(\\hat\\beta_1=1.800\\)、\\(SE(\\hat\\beta_1)=0.400\\) なので、
        \\[
          (A)=\\dfrac{1.800}{0.400}=4.500.
        \\]
        また、結果表には \\(X_1\\) の \\(p\\) 値について \\(p\\lt 0.001\\) と示されています。これは有意水準5%より小さいため、
        \\[
          H_0:\\beta_1=0\\text{ を棄却する}
        \\]
        と判断します。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 正しい</b>：\\(1.800/0.400=4.500\\) であり、\\(p\\lt 0.001\\lt 0.05\\) なので帰無仮説を棄却します。<br>
        ・<b>② 誤り</b>：\\((A)\\) の値は正しいですが、\\(p\\) 値が0.05を下回っているため帰無仮説を棄却します。<br>
        ・<b>③ 誤り</b>：\\(0.222\\) は \\(0.400/1.800\\) と計算した値であり、分子と分母を逆にしています。検定結果については帰無仮説を棄却します。<br>
        ・<b>④ 誤り</b>：検定統計量の計算方法が誤っており、さらに \\(p\\lt 0.001\\) なので帰無仮説は棄却されます。
      `
    },
    {
      id: 3,
      difficulty: 3,
      priority: 3,
      question: `
        上の回帰分析の結果について、次の記述 (a)〜(c) を考える。<br><br>
        <b>(a)</b> 決定係数が0.520であることから、この標本における売上高 \\(Y\\) の変動の52.0%が、この回帰モデルによって説明されている。<br><br>
        <b>(b)</b> 店舗面積 \\(X_2\\) の回帰係数について \\(p=0.051\\) であるため、店舗面積 \\(X_2\\) と売上高 \\(Y\\) の間には関係がないことが示された。<br><br>
        <b>(c)</b> 結果表の \\(F\\) 検定は、
        \\[
          H_0:\\beta_1=\\beta_2=0
        \\]
        を帰無仮説とする検定であり、その \\(p\\) 値が0.001未満であることから、有意水準5%ではこの帰無仮説を棄却する。<br><br>
        正しいものの組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>正しいもの</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>(a) のみ</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>(a)、(b)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>(a)、(c)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>(a)、(b)、(c)</td>
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
        決定係数 \\(R^2\\) は、
        \\[
          R^2=1-\\dfrac{\\text{残差平方和}}{\\text{全平方和}}
        \\]
        で定義され、目的変数の標本内の変動のうち、回帰モデルによって説明される割合を表します。一方、各回帰係数についての \\(t\\) 検定は、それぞれの係数が0であるかを個別に検討します。複数の説明変数を含む回帰モデルに表示されるモデル全体の \\(F\\) 検定では、切片を除くすべての回帰係数が0であるという
        \\[
          H_0:\\beta_1=\\beta_2=\\cdots=\\beta_k=0
        \\]
        を検討します。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        今回は \\(R^2=0.520\\) なので、標本における \\(Y\\) の変動の52.0%が、この回帰モデルによって説明されていると解釈できます。したがって (a) は正しいです。<br><br>
        \\(X_2\\) については \\(p=0.051>0.05\\) なので、有意水準5%では \\(H_0:\\beta_2=0\\) を棄却しません。しかし、帰無仮説を棄却しないことは \\(\\beta_2=0\\) が証明されたことを意味しません。また、これは他の説明変数を含む今回の回帰モデルにおける係数の検定であり、\\(X_2\\) と \\(Y\\) のあらゆる関係が存在しないことを意味するものでもありません。したがって (b) は誤りです。<br><br>
        最後に、モデル全体の \\(F\\) 検定では \\(H_0:\\beta_1=\\beta_2=0\\) を検定しています。結果は \\(F=25.46\\)、\\(p\\lt 0.001\\) なので、有意水準5%では帰無仮説を棄却します。したがって (c) は正しいです。よって、正しいのは (a)、(c) です。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：(a) は正しいですが、モデル全体の \\(F\\) 検定について述べた (c) も正しいです。<br>
        ・<b>② 誤り</b>：(b) は、\\(p=0.051\\) で帰無仮説を棄却しないことを「関係がないことが示された」と解釈している点で誤りです。<br>
        ・<b>③ 正しい</b>：(a) と (c) が正しく、(b) が誤りです。<br>
        ・<b>④ 誤り</b>：(b) が誤っているため、すべてが正しいとはいえません。
      `
    }
  ]
};
