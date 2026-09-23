// 総合演習 大問12. 線形回帰モデルの比較
const comprehensiveSet = {
  id: 12,
  title: "線形回帰モデルの比較",
  category: "回帰分析",
  difficulty: 3,
  priority: 3,
  stem: `
    ある調査では、新卒就職者200人について、最終学歴と初任給を調べた。目的変数 \\(Y\\) を1か月当たりの初任給（万円）とする。<br><br>
    対象者の最終学歴と教育年数を次のように対応させた。
    <div class='overflow-x-auto mt-4 mb-4'>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>最終学歴</th>
            <th class='border border-slate-300 p-2'>教育年数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>高校卒</td>
            <td class='border border-slate-300 p-2'>12年</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>短大・高専卒</td>
            <td class='border border-slate-300 p-2'>14年</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>大学卒</td>
            <td class='border border-slate-300 p-2'>16年</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>大学院卒</td>
            <td class='border border-slate-300 p-2'>18年</td>
          </tr>
        </tbody>
      </table>
    </div>
    このデータに対して、最終学歴の情報を異なる方法で用いた2つの線形回帰モデルを考えた。<br><br>
    <b>モデル1：教育年数を用いたモデル</b><br>
    教育年数を \\(X_i\\) として、
    \\[
      Y_i=\\beta_0+\\beta_1X_i+\\varepsilon_i
    \\]
    とした。推定結果は次のとおりであった。
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
            <td class='border border-slate-300 p-2'>7.40</td>
            <td class='border border-slate-300 p-2'>1.50</td>
            <td class='border border-slate-300 p-2'>4.93</td>
            <td class='border border-slate-300 p-2'>&lt;0.001</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>教育年数</td>
            <td class='border border-slate-300 p-2'>1.00</td>
            <td class='border border-slate-300 p-2'>0.10</td>
            <td class='border border-slate-300 p-2'>10.00</td>
            <td class='border border-slate-300 p-2'>&lt;0.001</td>
          </tr>
        </tbody>
      </table>
    </div>
    <b>モデル2：最終学歴をダミー変数で表したモデル</b><br>
    高校卒を基準とし、
    \\[
      D_{1i}=
      \\begin{cases}
        1 & （短大・高専卒）\\\\
        0 & （それ以外）
      \\end{cases}
      ,\\qquad
      D_{2i}=
      \\begin{cases}
        1 & （大学卒）\\\\
        0 & （それ以外）
      \\end{cases}
      ,\\qquad
      D_{3i}=
      \\begin{cases}
        1 & （大学院卒）\\\\
        0 & （それ以外）
      \\end{cases}
    \\]
    として、
    \\[
      Y_i=\\gamma_0+\\gamma_1D_{1i}+\\gamma_2D_{2i}+\\gamma_3D_{3i}+\\varepsilon_i
    \\]
    とした。推定結果は次のとおりであった。
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
            <td class='border border-slate-300 p-2'>19.80</td>
            <td class='border border-slate-300 p-2'>0.45</td>
            <td class='border border-slate-300 p-2'>44.00</td>
            <td class='border border-slate-300 p-2'>&lt;0.001</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>短大・高専卒</td>
            <td class='border border-slate-300 p-2'>1.10</td>
            <td class='border border-slate-300 p-2'>0.65</td>
            <td class='border border-slate-300 p-2'>1.69</td>
            <td class='border border-slate-300 p-2'>0.093</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>大学卒</td>
            <td class='border border-slate-300 p-2'>3.90</td>
            <td class='border border-slate-300 p-2'>0.60</td>
            <td class='border border-slate-300 p-2'>6.50</td>
            <td class='border border-slate-300 p-2'>&lt;0.001</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>大学院卒</td>
            <td class='border border-slate-300 p-2'>6.70</td>
            <td class='border border-slate-300 p-2'>0.75</td>
            <td class='border border-slate-300 p-2'>8.93</td>
            <td class='border border-slate-300 p-2'>&lt;0.001</td>
          </tr>
        </tbody>
      </table>
    </div>
    また、2つのモデルについて、次の結果が得られた。
    <div class='overflow-x-auto mt-4'>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>指標</th>
            <th class='border border-slate-300 p-2'>モデル1</th>
            <th class='border border-slate-300 p-2'>モデル2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(R^2\\)</td>
            <td class='border border-slate-300 p-2'>0.335</td>
            <td class='border border-slate-300 p-2'>0.372</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>自由度調整済み \\(R^2\\)</td>
            <td class='border border-slate-300 p-2'>0.332</td>
            <td class='border border-slate-300 p-2'>0.362</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>残差標準誤差</td>
            <td class='border border-slate-300 p-2'>3.10</td>
            <td class='border border-slate-300 p-2'>3.03</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  parts: [
    {
      id: 1,
      difficulty: 3,
      priority: 3,
      question: `
        モデル1について、次の記述 (a)〜(c) を考える。<br><br>
        <b>(a)</b> 教育年数の回帰係数の推定値が1.00であることから、このモデルでは、教育年数が1年長いことに対応して、予測される初任給は1.00万円高くなる。<br><br>
        <b>(b)</b> 教育年数の行に示された \\(p\\) 値は、
        \\[
          H_0:\\beta_1=0,\\qquad H_1:\\beta_1\\neq 0
        \\]
        という帰無仮説と対立仮説に基づく両側検定の \\(p\\) 値である。<br><br>
        <b>(c)</b> 誤差項が互いに独立に正規分布 \\(N(0,\\sigma^2)\\) に従うと仮定する。帰無仮説 \\(H_0:\\beta_1=0\\) のもとで、
        \\[
          T=\\dfrac{\\hat{\\beta}_1}{SE(\\hat{\\beta}_1)}
        \\]
        は標準正規分布に従う。<br><br>
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
                <td class='border border-slate-300 p-2'>(b)、(c)</td>
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
      answer: "②",
      explanation: `
        正解は②です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        単回帰モデル \\(Y_i=\\beta_0+\\beta_1X_i+\\varepsilon_i\\) において、\\(\\beta_1\\) は \\(X\\) が1単位異なることに対応する \\(Y\\) の条件付き平均の差を表します。また、通常の回帰出力で回帰係数に対して表示される \\(p\\) 値は、\\(H_0:\\beta_j=0\\) を検定するための \\(t\\) 検定に対応します。正規線形回帰モデルの仮定のもとで、母誤差分散 \\(\\sigma^2\\) を標本から推定して標準誤差を求めた場合、
        \\[
          T=\\dfrac{\\hat{\\beta}_j-\\beta_{j,0}}{SE(\\hat{\\beta}_j)}
        \\]
        は帰無仮説のもとで \\(t\\) 分布に従います。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        モデル1の推定された回帰式は \\(\\hat Y=7.40+1.00X\\) です。したがって、教育年数が1年異なると、予測される初任給は1.00万円異なります。また、教育年数の行の Pr(&gt;|t|) は、\\(H_0:\\beta_1=0\\) に対する両側 \\(t\\) 検定の \\(p\\) 値です。今回は標本数が \\(n=200\\) で、切片と傾きの2つの係数を推定しているため、帰無仮説のもとで検定統計量は
        \\[
          T\\sim t_{200-2}=t_{198}
        \\]
        に従います。したがって、標準正規分布に従うとした (c) は誤りです。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：(a) だけでなく、回帰出力の \\(p\\) 値が係数を0とする帰無仮説の検定に対応するとした (b) も正しいです。<br>
        ・<b>② 正しい</b>：(a)、(b) が正しく、(c) が誤りです。<br>
        ・<b>③ 誤り</b>：(b) は正しいですが、(c) の検定統計量は標準正規分布ではなく、自由度198の \\(t\\) 分布に従います。<br>
        ・<b>④ 誤り</b>：(c) が誤っています。
      `
    },
    {
      id: 2,
      difficulty: 3,
      priority: 3,
      question: `
        モデル2について、次の記述 (a)〜(c) を考える。<br><br>
        <b>(a)</b> モデル2による大学卒者の予測初任給は、
        \\[
          19.80+3.90=23.70
        \\]
        万円であり、高校卒者の予測初任給との差は3.90万円である。<br><br>
        <b>(b)</b> モデル2では、高校卒から短大・高専卒、短大・高専卒から大学卒、大学卒から大学院卒という各学歴区分間の予測初任給の差が、すべて等しくなるとは仮定していない。<br><br>
        <b>(c)</b> 高校卒を表すダミー変数を新たに作成し、切片を残したまま4つの学歴区分すべてに対応するダミー変数を説明変数として用いれば、高校卒者についても回帰係数を直接推定できるため、現在のモデル2より適切なモデルとなる。<br><br>
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
                <td class='border border-slate-300 p-2'>(b)、(c)</td>
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
      answer: "②",
      explanation: `
        正解は②です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        カテゴリ変数をダミー変数によって線形回帰モデルに組み込む場合、1つのカテゴリを基準カテゴリとして扱うことができます。今回は高校卒が基準なので、
        \\[
          \\hat Y=19.80+1.10D_1+3.90D_2+6.70D_3
        \\]
        です。切片19.80は高校卒者の予測初任給を表し、各ダミー変数の係数は、それぞれの学歴区分と高校卒との差を表します。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        大学卒者では \\(D_1=0,\\ D_2=1,\\ D_3=0\\) なので、
        \\[
          \\hat Y=19.80+3.90=23.70.
        \\]
        一方、高校卒者ではすべてのダミー変数が0なので、\\(\\hat Y=19.80\\) です。したがって両者の予測値の差は \\(23.70-19.80=3.90\\) 万円です。<br><br>
        また、各学歴の予測値は、高校卒 19.80、短大・高専卒 \\(19.80+1.10=20.90\\)、大学卒 \\(19.80+3.90=23.70\\)、大学院卒 \\(19.80+6.70=26.50\\) となります。したがって、隣接する学歴区分間の差は 1.10、2.80、2.80 であり、これらが等しくなるという制約はモデル2にはありません。<br><br>
        さらに、高校卒ダミー \\(D_H\\) も作成すると、各観測について必ず \\(D_H+D_1+D_2+D_3=1\\) が成り立ちます。切片に対応する変数もすべての観測で1であるため、切片と4つのダミー変数との間に完全な線形関係が生じます。このような完全多重共線性が存在すると、通常の最小二乗法では回帰係数を一意に定めることができません。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：(a) だけでなく、モデル2が学歴区分間の差を一定と仮定していないとする (b) も正しいです。<br>
        ・<b>② 正しい</b>：(a)、(b) が正しく、(c) が誤りです。<br>
        ・<b>③ 誤り</b>：(b) は正しいですが、(c) のように切片と4つすべての学歴ダミーを同時に入れると完全多重共線性が生じます。<br>
        ・<b>④ 誤り</b>：(c) が誤っています。
      `
    },
    {
      id: 3,
      difficulty: 3,
      priority: 3,
      question: `
        モデル1とモデル2の比較について、次の記述 (a)〜(c) を考える。<br><br>
        <b>(a)</b> 同じ目的変数と同じ標本を用いた最小二乗法による線形回帰において、あるモデルに説明変数を追加した場合、通常の決定係数 \\(R^2\\) は小さくなることはない。一方、自由度調整済み決定係数は小さくなることがある。<br><br>
        <b>(b)</b> モデル2の自由度調整済み決定係数 \\(0.362\\) はモデル1の \\(0.332\\) より大きいので、予測対象やモデルの解釈、未知のデータに対する予測性能などを考慮する必要はなく、モデル2を必ず採用すべきである。<br><br>
        <b>(c)</b> モデル1に \\(X=9\\) を代入すれば、中学校卒業者の初任給の予測値を計算できる。また、モデル1の決定係数が十分に高ければ、推定に用いたデータの教育年数が12～18年の範囲に限られていたとしても、\\(X=9\\) における予測の妥当性は保証される。<br><br>
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
      answer: "①",
      explanation: `
        正解は①です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        決定係数は
        \\[
          R^2=1-\\dfrac{\\mathrm{RSS}}{\\mathrm{TSS}}
        \\]
        で定義されます。同じ目的変数と同じ標本について、既存のモデルに説明変数を追加して最小二乗法で推定し直した場合、追加した説明変数の係数を0とすれば元のモデルと同じ当てはまりを再現できます。そのため、残差平方和 \\(\\mathrm{RSS}\\) は増加せず、通常の \\(R^2\\) は低下しません。一方、自由度調整済み決定係数は、説明変数を増やすことに対する調整を行っているため、説明変数を追加しても当てはまりが十分に改善しなければ低下することがあります。また、観測された説明変数の範囲外について回帰式を用いて予測することを<b>外挿</b>といいます。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        (a) のように、説明変数を追加したモデルでは、通常の決定係数は原則として低下しません。しかし、自由度調整済み決定係数は低下することがあります。したがって (a) は正しいです。<br><br>
        今回は自由度調整済み決定係数がモデル1で0.332、モデル2で0.362であり、この基準ではモデル2の方が高いです。しかし、自由度調整済み決定係数はモデルを評価する1つの指標であり、その大小だけで常に採用すべきモデルが一意に決まるわけではありません。モデルを使用する目的、解釈のしやすさ、仮定の妥当性、未知のデータに対する予測性能なども問題となり得ます。したがって (b) は誤りです。<br><br>
        また、モデル1は \\(\\hat Y=7.40+1.00X\\) なので、形式上は \\(X=9\\) を代入して \\(\\hat Y=7.40+1.00\\times 9=16.40\\) 万円という予測値を計算できます。しかし、モデル推定に用いた教育年数は12～18年であり、\\(9\\lt 12\\) なので、これは観測範囲外への外挿です。決定係数が高かったとしても、観測された範囲の外側で同じ線形関係が成立することまでは保証されません。したがって (c) は、「予測値を計算できる」という部分は正しいものの、「予測の妥当性が保証される」という部分が誤っているため、記述全体としては誤りです。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 正しい</b>：(a) のみが正しく、(b)、(c) は誤りです。<br>
        ・<b>② 誤り</b>：自由度調整済み決定係数が大きいことだけから、モデル2を必ず採用すべきとはいえないため、(b) は誤りです。<br>
        ・<b>③ 誤り</b>：\\(X=9\\) における予測値を形式上計算することはできますが、決定係数が高いことによって外挿の妥当性が保証されるわけではないため、(c) は誤りです。<br>
        ・<b>④ 誤り</b>：(b)、(c) が誤っています。
      `
    }
  ]
};
