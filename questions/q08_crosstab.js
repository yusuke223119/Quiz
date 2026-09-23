// 分野08. カテゴリカルデータ・2元クロス表
const allQuestions = [
  {
    id: 1,
    category: "カテゴリカルデータ・2元クロス表",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      ある大学で250人の学生について、学年と主な通学手段を調査したところ、次の2元クロス表が得られた。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>学年＼通学手段</th>
            <th class='border border-slate-300 p-1'>徒歩・自転車</th>
            <th class='border border-slate-300 p-1'>公共交通</th>
            <th class='border border-slate-300 p-1'>自動車</th>
            <th class='border border-slate-300 p-1'>計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>1年</td>
            <td class='border border-slate-300 p-1'>40</td>
            <td class='border border-slate-300 p-1'>30</td>
            <td class='border border-slate-300 p-1'>10</td>
            <td class='border border-slate-300 p-1'>80</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>2年</td>
            <td class='border border-slate-300 p-1'>30</td>
            <td class='border border-slate-300 p-1'>40</td>
            <td class='border border-slate-300 p-1'>20</td>
            <td class='border border-slate-300 p-1'>90</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>3年</td>
            <td class='border border-slate-300 p-1'>20</td>
            <td class='border border-slate-300 p-1'>30</td>
            <td class='border border-slate-300 p-1'>30</td>
            <td class='border border-slate-300 p-1'>80</td>
          </tr>
          <tr class='bg-slate-50 font-bold'>
            <td class='border border-slate-300 p-1'>計</td>
            <td class='border border-slate-300 p-1'>90</td>
            <td class='border border-slate-300 p-1'>100</td>
            <td class='border border-slate-300 p-1'>60</td>
            <td class='border border-slate-300 p-1'>250</td>
          </tr>
        </tbody>
      </table>
      <br>
      この表に関する記述として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 2年生で公共交通を利用する学生は100人である。<br>
      ② 自動車を利用する学生のうち、3年生は30人である。<br>
      ③ 徒歩・自転車を利用する学生は、全体で40人である。<br>
      ④ 1年生または2年生である学生は250人である。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本概念</b><br>
      ・2つの質的変数について、それぞれのカテゴリーの組合せごとに度数を整理した表を<b>2元クロス表</b>といいます。<br>
      ・行と列が交差するセルには、2つの条件を同時に満たす観測数が示されます。<br>
      ・各行の合計や各列の合計を<b>周辺度数</b>といいます。<br>
      ・表を読むときには、「特定のセルの度数」と「行・列全体の周辺度数」を区別することが重要です。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      「自動車」の列と「3年」の行が交差するセルを見ると30人です。したがって、「自動車を利用する学生のうち、3年生は30人である」という②が正しいです。なお、1年生と2年生の合計は
      \\[
        80 + 90 = 170
      \\]
      人です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：2年生かつ公共交通を利用する学生は40人です。100人は公共交通を利用する学生全体の周辺度数です。<br>
      ・<b>② 正しい</b>：「3年」と「自動車」の交差するセルは30人です。<br>
      ・<b>③ 誤り</b>：徒歩・自転車を利用する学生は \\(40 + 30 + 20 = 90\\) 人です。40人は1年生かつ徒歩・自転車を利用する学生の人数です。<br>
      ・<b>④ 誤り</b>：1年生または2年生である学生は \\(80 + 90 = 170\\) 人です。250人は調査対象者全体の人数です。
    `
  },
  {
    id: 2,
    category: "カテゴリカルデータ・2元クロス表",
    difficulty: 1,
    priority: 2,
    type: "選択式",
    question: `
      ある大学で300人の学生について、居住形態と朝食を食べる頻度を調査したところ、次の結果が得られた。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>居住形態＼朝食頻度</th>
            <th class='border border-slate-300 p-1'>毎日</th>
            <th class='border border-slate-300 p-1'>ときどき</th>
            <th class='border border-slate-300 p-1'>ほとんど食べない</th>
            <th class='border border-slate-300 p-1'>計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>一人暮らし</td>
            <td class='border border-slate-300 p-1'>45</td>
            <td class='border border-slate-300 p-1'>35</td>
            <td class='border border-slate-300 p-1'>20</td>
            <td class='border border-slate-300 p-1'>100</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>家族と同居</td>
            <td class='border border-slate-300 p-1'>120</td>
            <td class='border border-slate-300 p-1'>60</td>
            <td class='border border-slate-300 p-1'>20</td>
            <td class='border border-slate-300 p-1'>200</td>
          </tr>
          <tr class='bg-slate-50 font-bold'>
            <td class='border border-slate-300 p-1'>計</td>
            <td class='border border-slate-300 p-1'>165</td>
            <td class='border border-slate-300 p-1'>95</td>
            <td class='border border-slate-300 p-1'>40</td>
            <td class='border border-slate-300 p-1'>300</td>
          </tr>
        </tbody>
      </table>
      <br>
      朝食を<b>毎日食べる学生のうち、一人暮らしの学生の割合</b>として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 15.0%<br>
      ② 27.3%<br>
      ③ 45.0%<br>
      ④ 55.0%
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本公式</b><br>
      クロス表から割合を求めるときは、「何のうちの割合を求めているか」を確認して分母を決めることが重要です。「BのうちAである割合」であれば
      \\[
        \\frac{\\text{AかつBである度数}}{\\text{Bである度数}}
      \\]
      と計算します。「AのうちB」と「BのうちA」では、一般に分母が異なるため、割合も異なります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      問われているのは「朝食を毎日食べる学生のうち、一人暮らし」です。したがって、分母は朝食を毎日食べる学生全体の165人です。このうち一人暮らしは45人なので、
      \\[
        \\frac{45}{165} \\approx 0.2727
      \\]
      よって約27.3%となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(45 / 300 = 0.15\\) とした値です。これは全学生のうち「一人暮らしかつ朝食を毎日食べる」学生の割合であり、問われている条件付き割合ではありません。<br>
      ・<b>② 正しい</b>：\\(45 / 165 \\approx 0.273\\) より、約27.3%です。<br>
      ・<b>③ 誤り</b>：\\(45 / 100 = 0.45\\) とした値です。これは「一人暮らしの学生のうち、朝食を毎日食べる学生の割合」であり、条件が逆になっています。<br>
      ・<b>④ 誤り</b>：\\(165 / 300 = 0.55\\) は全学生のうち朝食を毎日食べる割合です。問われている条件付き割合ではありません。
    `
  },
  {
    id: 3,
    category: "カテゴリカルデータ・2元クロス表",
    difficulty: 2,
    priority: 2,
    type: "選択式",
    question: `
      ある店舗で、来店客を年代別に分け、商品Aと商品Bのどちらを購入したかを集計したところ、次の結果が得られた。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>年代＼購入商品</th>
            <th class='border border-slate-300 p-1'>商品A</th>
            <th class='border border-slate-300 p-1'>商品B</th>
            <th class='border border-slate-300 p-1'>計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>20代</td>
            <td class='border border-slate-300 p-1'>60</td>
            <td class='border border-slate-300 p-1'>40</td>
            <td class='border border-slate-300 p-1'>100</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>30代</td>
            <td class='border border-slate-300 p-1'>90</td>
            <td class='border border-slate-300 p-1'>60</td>
            <td class='border border-slate-300 p-1'>150</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>40代</td>
            <td class='border border-slate-300 p-1'>80</td>
            <td class='border border-slate-300 p-1'>120</td>
            <td class='border border-slate-300 p-1'>200</td>
          </tr>
          <tr class='bg-slate-50 font-bold'>
            <td class='border border-slate-300 p-1'>計</td>
            <td class='border border-slate-300 p-1'>230</td>
            <td class='border border-slate-300 p-1'>220</td>
            <td class='border border-slate-300 p-1'>450</td>
          </tr>
        </tbody>
      </table>
      <br>
      この表から読み取れることとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 商品Aを購入した人数が最も多いのは30代なので、商品Aを選ぶ割合も30代が最も高い。<br>
      ② 20代と30代では商品Aを選んだ割合は等しく、40代ではそれらより低い。<br>
      ③ 40代では商品Bを購入した人数が120人なので、40代全体のうち80%が商品Bを購入している。<br>
      ④ 商品Aの購入者は230人、商品Bの購入者は220人なので、すべての年代で商品Aを選ぶ割合の方が高い。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本公式</b><br>
      グループごとの傾向を比較するとき、各グループの人数が異なる場合には、単純な度数ではなく<b>各グループ内の割合</b>を比較することが重要です。各年代で商品Aを選んだ割合は
      \\[
        \\frac{\\text{商品Aの購入者数}}{\\text{その年代の人数}}
      \\]
      によって求めます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      ・20代の商品A購入割合：
      \\[
        \\frac{60}{100} = 0.60 = 60\\%
      \\]
      ・30代の商品A購入割合：
      \\[
        \\frac{90}{150} = 0.60 = 60\\%
      \\]
      ・40代の商品A購入割合：
      \\[
        \\frac{80}{200} = 0.40 = 40\\%
      \\]
      したがって、20代と30代では商品Aを選んだ割合がともに60%で等しく、40代では40%と低くなっています。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：30代の商品A購入者90人は3年代で最も多いですが、30代自体の人数も20代より多いです。商品Aを選んだ割合は20代、30代ともに60%です。<br>
      ・<b>② 正しい</b>：20代60%、30代60%、40代40%です。<br>
      ・<b>③ 誤り</b>：40代の商品B購入割合は \\(120 / 200 = 0.60\\) より60%であり、80%ではありません。<br>
      ・<b>④ 誤り</b>：全体の人数だけから各年代の割合の大小を判断することはできません。実際、40代では商品Bを選んだ割合60%が商品Aの40%を上回っています。
    `
  },
  {
    id: 4,
    category: "カテゴリカルデータ・2元クロス表",
    difficulty: 3,
    priority: 1,
    type: "選択式",
    question: `
      ある2つの治療法A、Bについて、患者を「軽症」と「重症」に分けて治療結果を集計したところ、次の結果が得られた。<br><br>
      <b>軽症患者</b>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm mb-4'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>治療法＼結果</th>
            <th class='border border-slate-300 p-1'>成功</th>
            <th class='border border-slate-300 p-1'>失敗</th>
            <th class='border border-slate-300 p-1'>計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>A</td>
            <td class='border border-slate-300 p-1'>18</td>
            <td class='border border-slate-300 p-1'>2</td>
            <td class='border border-slate-300 p-1'>20</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>B</td>
            <td class='border border-slate-300 p-1'>72</td>
            <td class='border border-slate-300 p-1'>18</td>
            <td class='border border-slate-300 p-1'>90</td>
          </tr>
          <tr class='bg-slate-50 font-bold'>
            <td class='border border-slate-300 p-1'>計</td>
            <td class='border border-slate-300 p-1'>90</td>
            <td class='border border-slate-300 p-1'>20</td>
            <td class='border border-slate-300 p-1'>110</td>
          </tr>
        </tbody>
      </table>
      <b>重症患者</b>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm mb-4'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>治療法＼結果</th>
            <th class='border border-slate-300 p-1'>成功</th>
            <th class='border border-slate-300 p-1'>失敗</th>
            <th class='border border-slate-300 p-1'>計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>A</td>
            <td class='border border-slate-300 p-1'>27</td>
            <td class='border border-slate-300 p-1'>63</td>
            <td class='border border-slate-300 p-1'>90</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>B</td>
            <td class='border border-slate-300 p-1'>2</td>
            <td class='border border-slate-300 p-1'>8</td>
            <td class='border border-slate-300 p-1'>10</td>
          </tr>
          <tr class='bg-slate-50 font-bold'>
            <td class='border border-slate-300 p-1'>計</td>
            <td class='border border-slate-300 p-1'>29</td>
            <td class='border border-slate-300 p-1'>71</td>
            <td class='border border-slate-300 p-1'>100</td>
          </tr>
        </tbody>
      </table>
      以上を軽症・重症に分けずに集計すると、次の表になる。<br><br>
      <b>全患者</b>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm mb-4'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'>治療法＼結果</th>
            <th class='border border-slate-300 p-1'>成功</th>
            <th class='border border-slate-300 p-1'>失敗</th>
            <th class='border border-slate-300 p-1'>計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>A</td>
            <td class='border border-slate-300 p-1'>45</td>
            <td class='border border-slate-300 p-1'>65</td>
            <td class='border border-slate-300 p-1'>110</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>B</td>
            <td class='border border-slate-300 p-1'>74</td>
            <td class='border border-slate-300 p-1'>26</td>
            <td class='border border-slate-300 p-1'>100</td>
          </tr>
          <tr class='bg-slate-50 font-bold'>
            <td class='border border-slate-300 p-1'>計</td>
            <td class='border border-slate-300 p-1'>119</td>
            <td class='border border-slate-300 p-1'>91</td>
            <td class='border border-slate-300 p-1'>210</td>
          </tr>
        </tbody>
      </table>
      これらの表から読み取れる内容として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 全患者ではAの成功割合が高く、軽症患者と重症患者に分けてもAの成功割合が高い。<br>
      ② 全患者ではBの成功割合が高いが、軽症患者と重症患者に分けると、いずれでもAの成功割合が高い。<br>
      ③ 軽症患者ではAの成功割合が高いが、重症患者ではAとBの成功割合は等しい。<br>
      ④ 軽症患者と重症患者の割合が治療法AとBで異なっていても、全体の成功割合には影響しない。
    `,
    choices: ["①", "②", "③", "④"],
    answer: "②",
    explanation: `
      正解は②です。<br>
      <解説><br>
      <b>1. 基本概念</b><br>
      クロス表を全体で集計した場合の割合と、別の変数によって層別した場合の割合とでは、大小関係が異なることがあります。特に、比較するグループ間で各層に属する人数の構成が大きく異なる場合には、全体の割合だけを見ると層別した結果とは異なる関係が現れることがあります。このような集計による関係の逆転は、<b>シンプソンのパラドックス</b>として知られています。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      ・軽症患者の成功割合：
      \\[
        A:\\ \\frac{18}{20}=90\\%,\\qquad B:\\ \\frac{72}{90}=80\\%
      \\]
      よって、軽症患者ではAの方が高いです。<br>
      ・重症患者の成功割合：
      \\[
        A:\\ \\frac{27}{90}=30\\%,\\qquad B:\\ \\frac{2}{10}=20\\%
      \\]
      よって、重症患者でもAの方が高いです。<br>
      ・全患者の成功割合：
      \\[
        A:\\ \\frac{45}{110}\\approx40.9\\%,\\qquad B:\\ \\frac{74}{100}=74.0\\%
      \\]
      全体ではBの方が高くなります。これは、治療法Aは重症患者が多く（90/110）、治療法Bは軽症患者が多い（90/100）ためです。層別では常に \\(A>B\\) でも、全体では \\(B>A\\) となる逆転が生じています。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：層別ではAの成功割合が高いですが、全患者ではBの成功割合の方が高いです。<br>
      ・<b>② 正しい</b>：全体ではB（74.0%）＞A（約40.9%）ですが、軽症ではA 90%＞B 80%、重症ではA 30%＞B 20%です。<br>
      ・<b>③ 誤り</b>：重症患者でもA 30%、B 20%であり、成功割合は等しくありません。<br>
      ・<b>④ 誤り</b>：各治療法における軽症・重症の構成比の違いが、全体の成功割合の大小を逆転させる原因になっています。
    `
  }
];
