// 分野34. 線形回帰：結果表の読み取り
const allQuestions = [
  {
    id: 1,
    category: "線形回帰：結果表の読み取り",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      あるデータについて、目的変数 \\(Y\\)、説明変数 \\(X\\) として単回帰分析を行ったところ、次の結果を得た。<br><br>
      <b>回帰分析の結果</b>
      <div class='overflow-x-auto'>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'></th>
            <th class='border border-slate-300 p-2'>Estimate</th>
            <th class='border border-slate-300 p-2'>Std. Error</th>
            <th class='border border-slate-300 p-2'>t value</th>
            <th class='border border-slate-300 p-2'>Pr(&gt;|t|)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>(Intercept)</td>
            <td class='border border-slate-300 p-2'>12.000</td>
            <td class='border border-slate-300 p-2'>3.000</td>
            <td class='border border-slate-300 p-2'>4.000</td>
            <td class='border border-slate-300 p-2'>&lt; 0.001</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(X\\)</td>
            <td class='border border-slate-300 p-2'>2.500</td>
            <td class='border border-slate-300 p-2'>0.500</td>
            <td class='border border-slate-300 p-2'>5.000</td>
            <td class='border border-slate-300 p-2'>&lt; 0.001</td>
          </tr>
        </tbody>
      </table>
      </div><br>
      この結果から得られる回帰式と、\\(X\\) の回帰係数の解釈の組合せとして最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>回帰式と解釈</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2 text-left'>\\(\\hat Y=12+2.5X\\) であり、\\(X\\) が1単位大きいとき、\\(Y\\) の予測値は2.5大きくなる。</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2 text-left'>\\(\\hat Y=2.5+12X\\) であり、\\(X\\) が1単位大きいとき、\\(Y\\) の予測値は12大きくなる。</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2 text-left'>\\(\\hat Y=12+0.5X\\) であり、\\(X\\) が1単位大きいとき、\\(Y\\) の予測値は0.5大きくなる。</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2 text-left'>\\(\\hat Y=12+5X\\) であり、\\(X\\) が1単位大きいとき、\\(Y\\) の予測値は5大きくなる。</td>
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
      単回帰モデル \\(Y_i=\\beta_0+\\beta_1 X_i+\\varepsilon_i\\) に対して、推定された回帰式は
      \\[
        \\hat Y=\\hat\\beta_0+\\hat\\beta_1 X
      \\]
      と表されます。回帰分析の結果表における Estimate は、各回帰係数の推定値を表します。(Intercept) の Estimate が切片 \\(\\hat\\beta_0\\)、\\(X\\) の Estimate が傾き \\(\\hat\\beta_1\\) に対応します。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      結果表から \\(\\hat\\beta_0=12\\)、\\(\\hat\\beta_1=2.5\\) と読み取れます。したがって、推定された回帰式は
      \\[
        \\boxed{\\hat Y=12+2.5X}
      \\]
      です。傾きが2.5なので、\\(X\\) が1単位大きいとき、回帰式による \\(Y\\) の予測値は2.5大きくなります。なお、Std. Error は回帰係数の標準誤差、t value は回帰係数についての \\(t\\) 統計量であり、回帰式そのものを作る際には Estimate を用います。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：(Intercept) の推定値12が切片、\\(X\\) の推定値2.5が傾きです。<br>
      ・<b>② 誤り</b>：切片と傾きを逆にしています。<br>
      ・<b>③ 誤り</b>：0.5は \\(X\\) の回帰係数の標準誤差であり、回帰係数そのものではありません。<br>
      ・<b>④ 誤り</b>：5.0は \\(X\\) の \\(t\\) 値であり、回帰係数そのものではありません。
    `
  },
  {
    id: 2,
    category: "線形回帰：結果表の読み取り",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      あるデータについて、目的変数 \\(Y\\)、説明変数 \\(X\\) として単回帰分析を行ったところ、次の結果を得た。ただし、\\(X\\) の t value の一部が欠けている。<br><br>
      <b>回帰分析の結果</b>
      <div class='overflow-x-auto'>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'></th>
            <th class='border border-slate-300 p-2'>Estimate</th>
            <th class='border border-slate-300 p-2'>Std. Error</th>
            <th class='border border-slate-300 p-2'>t value</th>
            <th class='border border-slate-300 p-2'>Pr(&gt;|t|)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>(Intercept)</td>
            <td class='border border-slate-300 p-2'>8.000</td>
            <td class='border border-slate-300 p-2'>2.000</td>
            <td class='border border-slate-300 p-2'>4.000</td>
            <td class='border border-slate-300 p-2'>&lt; 0.001</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(X\\)</td>
            <td class='border border-slate-300 p-2'>1.200</td>
            <td class='border border-slate-300 p-2'>0.500</td>
            <td class='border border-slate-300 p-2'><b>?</b></td>
            <td class='border border-slate-300 p-2'>0.023</td>
          </tr>
        </tbody>
      </table>
      </div><br>
      \\(X\\) の母回帰係数を \\(\\beta_1\\) とし、
      \\[
        H_0:\\beta_1=0,\\qquad H_1:\\beta_1\\neq 0
      \\]
      を考える。<br><br>
      \\(X\\) の \\(t\\) 値と検定結果の組合せとして最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(t\\) 値と検定結果</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2 text-left'>\\(t=2.40\\) であり、5%有意水準では \\(H_0\\) を棄却するが、1%有意水準では棄却しない。</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2 text-left'>\\(t=2.40\\) であり、5%有意水準でも1%有意水準でも \\(H_0\\) を棄却する。</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2 text-left'>\\(t=0.42\\) であり、5%有意水準では \\(H_0\\) を棄却しない。</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2 text-left'>\\(t=1.70\\) であり、5%有意水準では \\(H_0\\) を棄却するが、1%有意水準では棄却しない。</td>
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
      回帰係数 \\(\\beta_1\\) について \\(H_0:\\beta_1=0\\) を検定する場合、\\(t\\) 統計量は
      \\[
        t=\\dfrac{\\hat\\beta_1-0}{SE(\\hat\\beta_1)}
      \\]
      で計算されます。結果表では、Estimate は回帰係数の推定値、Std. Error は回帰係数の標準誤差、t value は \\(t\\) 統計量、Pr(&gt;|t|) は両側検定のp値を表しています。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      \\(X\\) の推定値と標準誤差は \\(\\hat\\beta_1=1.200\\)、\\(SE(\\hat\\beta_1)=0.500\\) です。したがって、
      \\[
        t=\\dfrac{1.200}{0.500}=2.40
      \\]
      です。結果表よりp値は \\(p=0.023\\) です。5%有意水準では
      \\[
        0.023\\lt 0.05
      \\]
      なので \\(H_0\\) を棄却します。一方、1%有意水準では
      \\[
        0.023\\gt 0.01
      \\]
      なので \\(H_0\\) を棄却しません。したがって
      \\[
        \\boxed{t=2.40}
      \\]
      であり、5%水準では有意、1%水準では有意ではありません。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：\\(1.200/0.500=2.40\\) であり、\\(0.01\\lt 0.023\\lt 0.05\\) なので、5%水準では棄却しますが1%水準では棄却しません。<br>
      ・<b>② 誤り</b>：\\(t\\) 値は正しいですが、p値は0.01より大きいため1%水準では棄却できません。<br>
      ・<b>③ 誤り</b>：Std. Error / Estimate とすると約0.42になりますが、\\(t\\) 値は Estimate / Std. Error で計算します。<br>
      ・<b>④ 誤り</b>：\\(t\\) 値の計算が誤っています。
    `
  },
  {
    id: 3,
    category: "線形回帰：結果表の読み取り",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      標本サイズ30のデータについて、目的変数 \\(Y\\)、説明変数 \\(X\\) として単回帰分析を行ったところ、次の結果を得た。<br><br>
      <b>回帰分析の結果</b>
      <div class='overflow-x-auto'>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'></th>
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
            <td class='border border-slate-300 p-2'>2.500</td>
            <td class='border border-slate-300 p-2'>4.080</td>
            <td class='border border-slate-300 p-2'>&lt; 0.001</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(X\\)</td>
            <td class='border border-slate-300 p-2'>1.500</td>
            <td class='border border-slate-300 p-2'>0.378</td>
            <td class='border border-slate-300 p-2'>3.968</td>
            <td class='border border-slate-300 p-2'>&lt; 0.001</td>
          </tr>
        </tbody>
      </table>
      </div><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>モデル全体の指標</th>
            <th class='border border-slate-300 p-2'>結果</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>Residual standard error</td>
            <td class='border border-slate-300 p-2'>4.20</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>Residual degrees of freedom</td>
            <td class='border border-slate-300 p-2'>28</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>Multiple R-squared</td>
            <td class='border border-slate-300 p-2'>0.360</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>Adjusted R-squared</td>
            <td class='border border-slate-300 p-2'>0.337</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>F-statistic</td>
            <td class='border border-slate-300 p-2'>15.75</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>F-statistic degrees of freedom</td>
            <td class='border border-slate-300 p-2'>1, 28</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>F-test p-value</td>
            <td class='border border-slate-300 p-2'>&lt; 0.001</td>
          </tr>
        </tbody>
      </table><br>
      この結果について、次の記述 A〜E を考える。<br><br>
      <b>A.</b> この回帰モデルの決定係数は0.360であり、目的変数 \\(Y\\) の標本内の変動の36.0%が回帰モデルによって説明されている。<br><br>
      <b>B.</b> 自由度調整済み決定係数は0.337であり、この値には説明変数の個数などに対する調整が反映されている。<br><br>
      <b>C.</b> F検定のp値は0.001より小さいので、5%有意水準では、説明変数の回帰係数がすべて0であるという帰無仮説を棄却する。<br><br>
      <b>D.</b> 決定係数が0.360なので、\\(X\\) と \\(Y\\) の相関係数は必ず0.360である。<br><br>
      <b>E.</b> F検定で有意であることから、\\(X\\) が \\(Y\\) に因果的な影響を与えていることが証明されたといえる。<br><br>
      正しいものをすべて選んだ組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>正しいもの</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>A・B</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>A・B・C</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>B・C・D</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>A・C・E</td>
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
      決定係数は
      \\[
        R^2=1-\\dfrac{SSE}{SST}
      \\]
      であり、目的変数の標本内の変動のうち、回帰モデルによって説明される割合を表します。自由度調整済み決定係数は、説明変数を追加することに対する調整を行った指標であり、通常の \\(R^2\\) と異なり、説明変数を追加すると低下する場合があります。<br><br>
      重回帰モデル \\(Y=\\beta_0+\\beta_1 X_1+\\cdots+\\beta_p X_p+\\varepsilon\\) におけるモデル全体のF検定では、一般に \\(H_0:\\beta_1=\\beta_2=\\cdots=\\beta_p=0\\) という帰無仮説を検定します。単回帰の場合には説明変数が1個なので \\(H_0:\\beta_1=0\\) となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      ・<b>Aは正しい。</b>結果表には \\(R^2=0.360\\) とあるので、目的変数の標本内変動の36.0%が、この回帰モデルによって説明されています。<br>
      ・<b>Bは正しい。</b>結果表から \\(\\bar R^2=0.337\\) と読み取れます。通常の \\(R^2\\) とは異なり、説明変数の個数などを考慮した指標です。<br>
      ・<b>Cは正しい。</b>F検定のp値は0.001未満であるため \\(p\\lt 0.001\\lt 0.05\\) です。よって5%有意水準ではモデル全体の帰無仮説を棄却します。<br>
      ・<b>Dは誤り。</b>切片を含む単回帰では \\(R^2=r^2\\) です。したがって \\(|r|=\\sqrt{0.360}=0.60\\) です。さらに、この問題では回帰係数が正なので \\(r=0.60\\) であり、0.360ではありません。<br>
      ・<b>Eは誤り。</b>回帰モデルのF検定が有意であることは、回帰係数について統計的な関係が認められることを示しますが、それだけで因果関係が証明されるわけではありません。<br><br>
      よって正しいものは
      \\[
        \\boxed{\\mathrm{A,\\ B,\\ C}}
      \\]
      です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：A、Bに加えてCも正しいです。<br>
      ・<b>② 正しい</b>：A、B、Cはいずれも正しいです。<br>
      ・<b>③ 誤り</b>：Dが誤りです。単回帰では \\(R^2=r^2\\) です。<br>
      ・<b>④ 誤り</b>：Eが誤りです。統計的有意性だけから因果関係を結論することはできません。
    `
  },
  {
    id: 4,
    category: "線形回帰：結果表の読み取り",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      100人について、試験得点 \\(Y\\) を目的変数、1日当たりの学習時間 \\(X_1\\)、睡眠時間 \\(X_2\\)、性別を表すダミー変数 \\(D\\) を説明変数として重回帰分析を行った。<br><br>
      ダミー変数 \\(D\\) は
      \\[
        D=\\begin{cases}1 & \\text{男性}\\\\ 0 & \\text{女性}\\end{cases}
      \\]
      と定義した。得られた結果は次のとおりである。<br><br>
      <b>回帰分析の結果</b>
      <div class='overflow-x-auto'>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'></th>
            <th class='border border-slate-300 p-2'>Estimate</th>
            <th class='border border-slate-300 p-2'>Std. Error</th>
            <th class='border border-slate-300 p-2'>t value</th>
            <th class='border border-slate-300 p-2'>Pr(&gt;|t|)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>(Intercept)</td>
            <td class='border border-slate-300 p-2'>40.000</td>
            <td class='border border-slate-300 p-2'>5.000</td>
            <td class='border border-slate-300 p-2'>8.000</td>
            <td class='border border-slate-300 p-2'>&lt; 0.001</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>学習時間 \\(X_1\\)</td>
            <td class='border border-slate-300 p-2'>3.000</td>
            <td class='border border-slate-300 p-2'>0.800</td>
            <td class='border border-slate-300 p-2'>3.750</td>
            <td class='border border-slate-300 p-2'>&lt; 0.001</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>睡眠時間 \\(X_2\\)</td>
            <td class='border border-slate-300 p-2'>1.200</td>
            <td class='border border-slate-300 p-2'>0.900</td>
            <td class='border border-slate-300 p-2'>1.333</td>
            <td class='border border-slate-300 p-2'>0.186</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>男性ダミー \\(D\\)</td>
            <td class='border border-slate-300 p-2'>-4.000</td>
            <td class='border border-slate-300 p-2'>1.500</td>
            <td class='border border-slate-300 p-2'>-2.667</td>
            <td class='border border-slate-300 p-2'>0.009</td>
          </tr>
        </tbody>
      </table>
      </div><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>モデル全体の指標</th>
            <th class='border border-slate-300 p-2'>結果</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>Residual standard error</td>
            <td class='border border-slate-300 p-2'>6.20</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>Residual degrees of freedom</td>
            <td class='border border-slate-300 p-2'>96</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>Multiple R-squared</td>
            <td class='border border-slate-300 p-2'>0.520</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>Adjusted R-squared</td>
            <td class='border border-slate-300 p-2'>0.505</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>F-statistic</td>
            <td class='border border-slate-300 p-2'>34.67</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>F-statistic degrees of freedom</td>
            <td class='border border-slate-300 p-2'>3, 96</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50 text-left'>F-test p-value</td>
            <td class='border border-slate-300 p-2'>&lt; 0.001</td>
          </tr>
        </tbody>
      </table><br>
      この結果について、次の記述 A〜E を考える。<br><br>
      <b>A.</b> 他の説明変数を一定とすると、学習時間が1時間長いことに対応して、試験得点の予測値は3点高い。<br><br>
      <b>B.</b> 睡眠時間の回帰係数は正であるが、5%有意水準では \\(H_0:\\beta_2=0\\) を棄却できない。<br><br>
      <b>C.</b> 学習時間と睡眠時間を同じ値に固定すると、男性の試験得点の予測値は女性より4点低い。<br><br>
      <b>D.</b> モデル全体のF検定のp値は0.001未満なので、5%有意水準では、3つの説明変数の母回帰係数がすべて0であるという帰無仮説を棄却する。<br><br>
      <b>E.</b> 学習時間のp値が0.001未満であるため、学習時間を1時間増加させれば、必ず試験得点が平均3点上昇するという因果効果が証明された。<br><br>
      正しいものをすべて選んだ組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>正しいもの</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>A・B・C</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>A・B・C・D</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>A・C・D・E</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>B・C・D・E</td>
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
      この重回帰モデルは
      \\[
        Y_i=\\beta_0+\\beta_1 X_{1i}+\\beta_2 X_{2i}+\\beta_3 D_i+\\varepsilon_i
      \\]
      と表されます。重回帰分析では、ある説明変数の回帰係数は、<b>他の説明変数を一定としたときの関係</b>として解釈します。個々の回帰係数については \\(H_0:\\beta_j=0\\) を \\(t\\) 検定によって検討します。一方、モデル全体のF検定では \\(H_0:\\beta_1=\\beta_2=\\beta_3=0\\) を検定します。したがって、個々の係数についての \\(t\\) 検定と、モデル全体についてのF検定は区別する必要があります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      ・<b>Aは正しい。</b>学習時間 \\(X_1\\) の Estimate は3.000です。したがって、睡眠時間と性別を一定とした場合、学習時間が1時間長いことに対応して試験得点の予測値は3点高いです。<br>
      ・<b>Bは正しい。</b>睡眠時間の推定された回帰係数は \\(\\hat\\beta_2=1.200\\) で正です。しかし、そのp値は \\(p=0.186\\gt 0.05\\) なので、5%有意水準では \\(H_0:\\beta_2=0\\) を棄却できません。<br>
      ・<b>Cは正しい。</b>男性ダミーは \\(D=1\\) が男性、\\(D=0\\) が女性と定義されています。男性の場合 \\(\\hat Y=40+3X_1+1.2X_2-4\\)、女性の場合 \\(\\hat Y=40+3X_1+1.2X_2\\) です。したがって、学習時間と睡眠時間が同じなら \\(\\hat Y_{\\mathrm{男性}}-\\hat Y_{\\mathrm{女性}}=-4\\) です。よって男性の予測値は女性より4点低いです。<br>
      ・<b>Dは正しい。</b>モデル全体のF検定について \\(p\\lt 0.001\\lt 0.05\\) なので、\\(H_0:\\beta_1=\\beta_2=\\beta_3=0\\) を5%有意水準で棄却します。これは、少なくとも1つの説明変数の母回帰係数が0ではないことを示す統計的証拠があることを意味します。<br>
      ・<b>Eは誤り。</b>学習時間の回帰係数が統計的に有意であっても、それだけで「学習時間を1時間増加させるという介入によって得点が平均3点上昇する」という因果効果が証明されたわけではありません。回帰係数の通常の解釈は、他の説明変数を一定とした場合の条件付き平均の関係です。<br><br>
      よって正しいものは
      \\[
        \\boxed{\\mathrm{A,\\ B,\\ C,\\ D}}
      \\]
      です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：A、B、CだけでなくDも正しいです。<br>
      ・<b>② 正しい</b>：A、B、C、Dはいずれも正しく、Eのみ誤りです。<br>
      ・<b>③ 誤り</b>：Eが誤りであり、Bが抜けています。<br>
      ・<b>④ 誤り</b>：Eが誤りであり、Aが抜けています。
    `
  }
];
