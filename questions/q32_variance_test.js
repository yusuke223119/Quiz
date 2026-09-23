// 分野32. その他の検定（母分散・等分散・適合度・独立性）
const allQuestions = [
  {
    id: 1,
    category: "その他の検定",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      正規母集団 \\(N(\\mu,\\sigma^2)\\) から大きさ \\(n=10\\) の無作為標本を抽出したところ、不偏分散は
      \\[
        S^2=8
      \\]
      であった。<br><br>
      母分散が \\(4\\) と異なるかを調べるため、
      \\[
        H_0:\\sigma^2=4,\\qquad H_1:\\sigma^2\\neq 4
      \\]
      を有意水準5%で検定する。<br><br>
      正規母集団について、帰無仮説のもとでは
      \\[
        Q=\\dfrac{(n-1)S^2}{\\sigma_0^2}
      \\]
      が自由度 \\(n-1\\) の \\(\\chi^2\\) 分布に従うことを利用する。<br><br>
      検定統計量の値【A】、自由度【B】、検定結果【C】の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br>
      必要に応じて、 \\(\\chi^2\\) 分布表を用いても良い。<br><br>
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
            <td class='border border-slate-300 p-2'>\\(18\\)</td>
            <td class='border border-slate-300 p-2'>9</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(18\\)</td>
            <td class='border border-slate-300 p-2'>9</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(20\\)</td>
            <td class='border border-slate-300 p-2'>10</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(2\\)</td>
            <td class='border border-slate-300 p-2'>9</td>
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
      正規母集団から大きさ \\(n\\) の無作為標本を抽出したとき、
      \\[
        \\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi_{n-1}^2
      \\]
      が成り立ちます。帰無仮説 \\(H_0:\\sigma^2=\\sigma_0^2\\) のもとでは、
      \\[
        Q=\\dfrac{(n-1)S^2}{\\sigma_0^2}\\sim\\chi_{n-1}^2
      \\]
      です。今回は両側検定なので、検定統計量が \\(\\chi^2\\) 分布の上側または下側の極端な領域に入ったときに \\(H_0\\) を棄却します。有意水準5%を左右に2.5%ずつ配分するため、棄却域は
      \\[
        Q\\ge\\chi_{0.025}^2(9)\\qquad\\text{または}\\qquad Q\\le\\chi_{0.975}^2(9)
      \\]
      となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      検定統計量は、
      \\[
        Q=\\dfrac{(10-1)\\times 8}{4}=\\dfrac{72}{4}=18
      \\]
      です。自由度は \\(n-1=9\\) です。\\(\\chi^2\\) 分布表から、
      \\[
        \\chi_{0.025}^2(9)\\approx 19.023,\\qquad \\chi_{0.975}^2(9)\\approx 2.700
      \\]
      です。したがって棄却域は
      \\[
        Q\\le 2.700\\qquad\\text{または}\\qquad Q\\ge 19.023
      \\]
      です。今回は
      \\[
        2.700\\lt 18\\lt 19.023
      \\]
      なので棄却域に入りません。よって、
      \\[
        \\boxed{H_0\\text{を棄却しない}}
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：\\(Q=18\\)、自由度9であり、5%両側検定の棄却域には入りません。<br>
      ・<b>② 誤り</b>：検定統計量と自由度は正しいですが、\\(18\\lt 19.023\\) なので上側棄却域には入らず、下側棄却域にも入りません。<br>
      ・<b>③ 誤り</b>：検定統計量では \\(nS^2\\) ではなく \\((n-1)S^2\\) を用います。自由度も \\(n\\) ではなく \\(n-1=9\\) です。<br>
      ・<b>④ 誤り</b>：\\(S^2/\\sigma_0^2=8/4=2\\) だけでは \\(\\chi^2\\) 統計量になりません。\\((n-1)\\) を掛ける必要があります。
    `
  },
  {
    id: 2,
    category: "その他の検定",
    difficulty: 3,
    priority: 2,
    type: "選択式",
    question: `
      互いに独立な2つの正規母集団から、それぞれ大きさ10の無作為標本を抽出したところ、
      \\[
        n_1=10,\\qquad S_1^2=18
      \\]
      \\[
        n_2=10,\\qquad S_2^2=4
      \\]
      を得た。<br><br>
      2つの母分散が等しいかを調べるため、
      \\[
        H_0:\\sigma_1^2=\\sigma_2^2,\\qquad H_1:\\sigma_1^2\\neq\\sigma_2^2
      \\]
      を有意水準5%で検定する。<br><br>
      正規母集団について、
      \\[
        U_1=\\dfrac{(n_1-1)S_1^2}{\\sigma_1^2}\\sim\\chi_{n_1-1}^2
      \\]
      \\[  
        U_2=\\dfrac{(n_2-1)S_2^2}{\\sigma_2^2}\\sim\\chi_{n_2-1}^2
      \\]
      であり、\\(U_1,U_2\\) は独立である。このとき、
      \\[
        \\dfrac{U_1/(n_1-1)}{U_2/(n_2-1)}=\\dfrac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}
      \\]
      を利用する。<br><br>
      \\(H_0\\) のもとで用いるF統計量の値【A】、分子・分母の自由度【B】、有意水準5%での検定結果【C】の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br>
      ここでは大きい方の標本分散を分子に置き、両側検定を上側2.5%点との比較によって行うものとする。<br>
      必要に応じて、F分布表を用いても良い。<br><br>
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
            <td class='border border-slate-300 p-2'>\\(2.25\\)</td>
            <td class='border border-slate-300 p-2'>\\((9,9)\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>\\(4.50\\)</td>
            <td class='border border-slate-300 p-2'>\\((9,9)\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>\\(4.50\\)</td>
            <td class='border border-slate-300 p-2'>\\((9,9)\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>\\(4.50\\)</td>
            <td class='border border-slate-300 p-2'>\\((10,10)\\)</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
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
      正規母集団の標本分散について、
      \\[
        U_1=\\dfrac{(n_1-1)S_1^2}{\\sigma_1^2}\\sim\\chi_{n_1-1}^2 
      \\]
      \\[  
        U_2=\\dfrac{(n_2-1)S_2^2}{\\sigma_2^2}\\sim\\chi_{n_2-1}^2
      \\]
      です。2標本が独立なので \\(U_1,U_2\\) も独立です。独立な \\(\\chi^2\\) 変数をそれぞれの自由度で割り、その比を取ると、
      \\[
        \\dfrac{U_1/(n_1-1)}{U_2/(n_2-1)}\\sim F_{n_1-1,n_2-1}
      \\]
      です。左辺を整理すると \\(\\dfrac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}\\) です。帰無仮説 \\(H_0:\\sigma_1^2=\\sigma_2^2\\) のもとでは母分散が約分されるので、
      \\[
        \\boxed{F=\\dfrac{S_1^2}{S_2^2}\\sim F_{n_1-1,n_2-1}}
      \\]
      となります。つまりF検定は、\\(\\chi^2\\) 変数を自由度で割ったものの比がF分布に従う、という定義をそのまま母分散の比較に利用したものです。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      今回は \\(S_1^2=18>S_2^2=4\\) なので、大きい方を分子に置くと、
      \\[
        F=\\dfrac{18}{4}=4.50
      \\]
      です。分子側の自由度は \\(n_1-1=9\\)、分母側の自由度も \\(n_2-1=9\\) です。したがって \\(F\\sim F_{9,9}\\) です。<br><br>
      今回は5%の両側検定であり、大きい方の分散を分子に置いているので、F分布の上側2.5%点と比較します。F分布表より
      \\[
        F_{0.025}(9,9)\\approx 4.03
      \\]
      です。今回は \\(4.50>4.03\\) なので、
      \\[
        \\boxed{H_0\\text{を棄却する}}
      \\]
      となります。したがって、2つの母分散が異なることを示す統計的な証拠があると判断されます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(18/4=4.50\\) であり、\\(2.25\\) ではありません。<br>
      ・<b>② 誤り</b>：統計量と自由度は正しいですが、\\(4.50>4.03\\) なので \\(H_0\\) を棄却します。<br>
      ・<b>③ 正しい</b>：\\(F=18/4=4.50\\)、自由度は \\((9,9)\\) であり、上側2.5%点を超えるので \\(H_0\\) を棄却します。<br>
      ・<b>④ 誤り</b>：F分布の自由度は標本サイズそのものではなく、それぞれ \\(n_i-1\\) なので \\((9,9)\\) です。
    `
  },
  {
    id: 3,
    category: "その他の検定",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      ある遺伝形質について、4つの型 A、B、C、D が理論上
      \\[
        9:3:3:1
      \\]
      の比率で現れると考えられている。<br><br>
      160個体を観察したところ、次の結果を得た。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>型</th>
            <th class='border border-slate-300 p-2'>A</th>
            <th class='border border-slate-300 p-2'>B</th>
            <th class='border border-slate-300 p-2'>C</th>
            <th class='border border-slate-300 p-2'>D</th>
            <th class='border border-slate-300 p-2'>合計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>観測度数</td>
            <td class='border border-slate-300 p-2'>108</td>
            <td class='border border-slate-300 p-2'>20</td>
            <td class='border border-slate-300 p-2'>24</td>
            <td class='border border-slate-300 p-2'>8</td>
            <td class='border border-slate-300 p-2'>160</td>
          </tr>
        </tbody>
      </table><br>
      観測結果が理論上の比率 \\(9:3:3:1\\) に適合しているかを、有意水準5%で検定する。
      \\[
        H_0:\\text{4つの型が }9:3:3:1\\text{ の比率で現れる}
      \\]
      とする。
      検定統計量の値【A】、従う分布の自由度【B】、有意水準5%での検定結果【C】の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br>
      必要に応じて、\\(\\chi^2\\) 分布表を用いて良い。<br><br>
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
            <td class='border border-slate-300 p-2'>約8.53</td>
            <td class='border border-slate-300 p-2'>3</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>約8.53</td>
            <td class='border border-slate-300 p-2'>4</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>約4.27</td>
            <td class='border border-slate-300 p-2'>3</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>約8.53</td>
            <td class='border border-slate-300 p-2'>3</td>
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
      適合度の検定では、まず帰無仮説が正しいとしたときに各カテゴリが何個ずつ現れると予想されるか、すなわち<b>期待度数</b>を求めます。理論上の確率を \\(p_i\\)、全体の個体数を \\(n\\) とすると \\(E_i=np_i\\) です。その後、
      \\[
        X^2=\\sum_i\\dfrac{(O_i-E_i)^2}{E_i}
      \\]
      によって観測度数と期待度数のずれを測ります。今回は4カテゴリであり、比率 \\(9:3:3:1\\) はあらかじめ与えられているので、自由度は \\(4-1=3\\) となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      比率の合計は \\(9+3+3+1=16\\) です。したがって理論上の確率は
      \\[
        \\left(\\dfrac{9}{16},\\dfrac{3}{16},\\dfrac{3}{16},\\dfrac{1}{16}\\right)
      \\]
      です。160個体について期待度数を求めると、
      \\[
        E_A=160\\times\\dfrac{9}{16}=90
      \\]
      \\[
        E_B=160\\times\\dfrac{3}{16}=30
      \\]
      \\[
        E_C=160\\times\\dfrac{3}{16}=30
      \\]
      \\[
        E_D=160\\times\\dfrac{1}{16}=10
      \\]
      です。よって、
      \\begin{align*}
        X^2=\\dfrac{(108-90)^2}{90}&+\\dfrac{(20-30)^2}{30} \\\\
        &+\\dfrac{(24-30)^2}{30}+\\dfrac{(8-10)^2}{10}
      \\end{align*}
      です。各項を計算すると、
      \\begin{align*}
        X^2&=\\dfrac{324}{90}+\\dfrac{100}{30}+\\dfrac{36}{30}+\\dfrac{4}{10} \\\\
        &=3.6+3.333\\cdots+1.2+0.4\\approx 8.53
      \\end{align*}
      です。自由度は \\(4-1=3\\) です。\\(\\chi^2\\) 分布表より、自由度3の上側5%点は約 \\(7.815\\) です。今回は \\(8.53>7.815\\) なので、
      \\[
        \\boxed{H_0\\text{を棄却する}}
      \\]
      となります。したがって、観測結果は理論上の \\(9:3:3:1\\) という比率から、有意水準5%でみて無視できない程度にずれていると判断されます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(8.53>7.815\\) なので、5%水準で \\(H_0\\) を棄却します。<br>
      ・<b>② 誤り</b>：検定統計量は正しいですが、自由度はカテゴリ数4ではなく \\(4-1=3\\) です。<br>
      ・<b>③ 誤り</b>：\\(\\chi^2\\) 統計量は約8.53であり、約4.27ではありません。<br>
      ・<b>④ 正しい</b>：\\(X^2\\approx 8.53\\)、自由度3となり、5%水準で \\(H_0\\) を棄却します。
    `
  },
  {
    id: 4,
    category: "その他の検定",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      100人について、性別と商品の選択を調査したところ、次の分割表を得た。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'></th>
            <th class='border border-slate-300 p-2'>商品A</th>
            <th class='border border-slate-300 p-2'>商品B</th>
            <th class='border border-slate-300 p-2'>合計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>男性</td>
            <td class='border border-slate-300 p-2'>30</td>
            <td class='border border-slate-300 p-2'>20</td>
            <td class='border border-slate-300 p-2'>50</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>女性</td>
            <td class='border border-slate-300 p-2'>20</td>
            <td class='border border-slate-300 p-2'>30</td>
            <td class='border border-slate-300 p-2'>50</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>合計</td>
            <td class='border border-slate-300 p-2'>50</td>
            <td class='border border-slate-300 p-2'>50</td>
            <td class='border border-slate-300 p-2'>100</td>
          </tr>
        </tbody>
      </table><br>
      性別と商品の選択に関連があるかを、有意水準5%で検定する。帰無仮説を
      \\[
        H_0:\\text{性別と商品の選択は独立である}
      \\]
      とする。<br><br>
      独立であると仮定したとき、\\(i\\) 行 \\(j\\) 列の期待度数は、
      \\[
        E_{ij}=\\dfrac{(\\text{第}i\\text{行の合計})(\\text{第}j\\text{列の合計})}{\\text{総数}}
      \\]
      によって求められる。<br><br>
      検定統計量の値【A】、従う分布の自由度【B】、有意水準5%での検定結果【C】の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br>
      必要に応じて、\\(\\chi^2\\) 分布表を用いて良い。<br><br>
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
            <td class='border border-slate-300 p-2'>4.00</td>
            <td class='border border-slate-300 p-2'>1</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>4.00</td>
            <td class='border border-slate-300 p-2'>1</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却する</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>2.00</td>
            <td class='border border-slate-300 p-2'>2</td>
            <td class='border border-slate-300 p-2'>\\(H_0\\) を棄却しない</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>0</td>
            <td class='border border-slate-300 p-2'>1</td>
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
      独立性の検定では、\\(H_0:\\text{2つのカテゴリ変数は独立}\\) と仮定したときの期待度数と、実際の観測度数を比較します。独立なら \\(P(A_i\\cap B_j)=P(A_i)P(B_j)\\) なので、各セルの期待度数は
      \\[
        \\boxed{E_{ij}=\\dfrac{(\\text{行合計})(\\text{列合計})}{\\text{総数}}}
      \\]
      となります。検定統計量は適合度の検定と同様に
      \\[
        X^2=\\sum_{i,j}\\dfrac{(O_{ij}-E_{ij})^2}{E_{ij}}
      \\]
      です。\\(r\\) 行 \\(c\\) 列の分割表では、自由度は
      \\[
        \\boxed{(r-1)(c-1)}
      \\]
      となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      例えば「男性・商品A」の期待度数は
      \\[
        E_{11}=\\dfrac{50\\times 50}{100}=25
      \\]
      です。今回はすべての行合計・列合計が50なので、4セルすべての期待度数が25となります。したがって、
      \\begin{align*}
        X^2=\\dfrac{(30-25)^2}{25}&+\\dfrac{(20-25)^2}{25} \\\\
        &+\\dfrac{(20-25)^2}{25}+\\dfrac{(30-25)^2}{25}
      \\end{align*}
      です。よって \\(X^2=1+1+1+1=4.00\\) です。\\(2\\times 2\\) 分割表なので、自由度は \\((2-1)(2-1)=1\\) です。\\(\\chi^2\\) 分布表より、自由度1の上側5%点は約 \\(3.841\\) です。今回は \\(4.00>3.841\\) なので、
      \\[
        \\boxed{H_0\\text{を棄却する}}
      \\]
      となります。したがって、性別と商品の選択が独立であるという仮説は5%水準で棄却されます。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：検定統計量と自由度は正しいですが、検定統計量は5%臨界値を上回っているため \\(H_0\\) を棄却します。<br>
      ・<b>② 正しい</b>：\\(X^2=4.00\\)、自由度1です。\\(4.00>3.841\\) なので \\(H_0\\) を棄却します。<br>
      ・<b>③ 誤り</b>：\\(\\chi^2\\) 統計量は4.00です。また、\\(2\\times 2\\) 表の自由度は \\((2-1)(2-1)=1\\) です。<br>
      ・<b>④ 誤り</b>：観測度数そのものを期待度数とすると統計量は0になります。帰無仮説である「独立」を仮定して期待度数を計算する必要があります。
    `
  }
];
