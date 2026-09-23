// 模試 第1回
//
// 問題番号 qNumber … 模試全体の通し番号。答案の「問 n」
// 回答番号 answer  … 選択肢 ①〜④。問題番号とは別
// id             … その大問の中での小問番号（問1, 問2, …）

function emptyPart(qNumber, localId) {
    return {
        id: localId,
        qNumber,
        question: `（問題番号 ${qNumber} の問題文をここに記入する）`,
        choices: ["①", "②", "③", "④"],
        answer: "①",
        explanation: `（問題番号 ${qNumber} の解説をここに記入する。この型では回答番号は①。）`
    };
}

function emptySection(id, startQ, count) {
    return {
        id,
        title: `（大問${id}のタイトル）`,
        stem: `（大問${id}の共通問題文をここに記入する）`,
        parts: Array.from({ length: count }, (_, i) => emptyPart(startQ + i, i + 1))
    };
}

const MOCK_QUESTION_COUNT = 35;

function fillToQuestionCount(sections, target = MOCK_QUESTION_COUNT) {
    const filled = sections.map(section => ({ ...section, parts: [...section.parts] }));
    let used = filled.reduce((n, section) => n + section.parts.length, 0);
    let nextId = (filled[filled.length - 1]?.id || 0) + 1;
    let nextQ = used + 1;
    while (used < target) {
        const count = Math.min(3, target - used);
        filled.push(emptySection(nextId, nextQ, count));
        used += count;
        nextQ += count;
        nextId += 1;
    }
    return filled;
}

const mockExam = {
    id: "mock01",
    title: "第1回",
    timeLimitMinutes: 90,
    sections: fillToQuestionCount([
        {
            id: 1,
            title: "度数分布表と箱ひげ図",
            stem: `
              ある小売店では、店舗A〜Dについて、30日間の1日あたりの来客数を調べた。次の表は、その結果を10人ごとの階級にまとめた度数分布表である。
              <div class='overflow-x-auto mt-4 mb-4'>
                <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                  <thead>
                    <tr class='bg-slate-100'>
                      <th class='border border-slate-300 p-2'>1日あたりの来客数</th>
                      <th class='border border-slate-300 p-2'>店舗A</th>
                      <th class='border border-slate-300 p-2'>店舗B</th>
                      <th class='border border-slate-300 p-2'>店舗C</th>
                      <th class='border border-slate-300 p-2'>店舗D</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>0人以上10人未満</td>
                      <td class='border border-slate-300 p-2'>0</td>
                      <td class='border border-slate-300 p-2'>4</td>
                      <td class='border border-slate-300 p-2'>0</td>
                      <td class='border border-slate-300 p-2'>0</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>10人以上20人未満</td>
                      <td class='border border-slate-300 p-2'>0</td>
                      <td class='border border-slate-300 p-2'>10</td>
                      <td class='border border-slate-300 p-2'>0</td>
                      <td class='border border-slate-300 p-2'>0</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>20人以上30人未満</td>
                      <td class='border border-slate-300 p-2'>6</td>
                      <td class='border border-slate-300 p-2'>10</td>
                      <td class='border border-slate-300 p-2'>2</td>
                      <td class='border border-slate-300 p-2'>7</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>30人以上40人未満</td>
                      <td class='border border-slate-300 p-2'>17</td>
                      <td class='border border-slate-300 p-2'>4</td>
                      <td class='border border-slate-300 p-2'>4</td>
                      <td class='border border-slate-300 p-2'>16</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>40人以上50人未満</td>
                      <td class='border border-slate-300 p-2'>7</td>
                      <td class='border border-slate-300 p-2'>2</td>
                      <td class='border border-slate-300 p-2'>8</td>
                      <td class='border border-slate-300 p-2'>6</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>50人以上60人未満</td>
                      <td class='border border-slate-300 p-2'>0</td>
                      <td class='border border-slate-300 p-2'>0</td>
                      <td class='border border-slate-300 p-2'>10</td>
                      <td class='border border-slate-300 p-2'>0</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>60人以上70人未満</td>
                      <td class='border border-slate-300 p-2'>0</td>
                      <td class='border border-slate-300 p-2'>0</td>
                      <td class='border border-slate-300 p-2'>6</td>
                      <td class='border border-slate-300 p-2'>0</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>70人以上80人未満</td>
                      <td class='border border-slate-300 p-2'>0</td>
                      <td class='border border-slate-300 p-2'>0</td>
                      <td class='border border-slate-300 p-2'>0</td>
                      <td class='border border-slate-300 p-2'>1</td>
                    </tr>
                    <tr class='bg-slate-50 font-bold'>
                      <td class='border border-slate-300 p-2'>合計</td>
                      <td class='border border-slate-300 p-2'>30</td>
                      <td class='border border-slate-300 p-2'>30</td>
                      <td class='border border-slate-300 p-2'>30</td>
                      <td class='border border-slate-300 p-2'>30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              同じデータから作成した箱ひげ図が次の（ア）〜（エ）である。
              ![4つの箱ひげ図](picture/m01_1_boxplots.svg?v=1)
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 1,
                    question: `
                      店舗A〜Dと箱ひげ図（ア）〜（エ）の対応として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      <div class='overflow-x-auto'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-1'></th>
                              <th class='border border-slate-300 p-2'>店舗A</th>
                              <th class='border border-slate-300 p-2'>店舗B</th>
                              <th class='border border-slate-300 p-2'>店舗C</th>
                              <th class='border border-slate-300 p-2'>店舗D</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
                              <td class='border border-slate-300 p-2'>（ア）</td>
                              <td class='border border-slate-300 p-2'>（エ）</td>
                              <td class='border border-slate-300 p-2'>（ウ）</td>
                              <td class='border border-slate-300 p-2'>（イ）</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
                              <td class='border border-slate-300 p-2'>（エ）</td>
                              <td class='border border-slate-300 p-2'>（ア）</td>
                              <td class='border border-slate-300 p-2'>（ウ）</td>
                              <td class='border border-slate-300 p-2'>（イ）</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
                              <td class='border border-slate-300 p-2'>（エ）</td>
                              <td class='border border-slate-300 p-2'>（ア）</td>
                              <td class='border border-slate-300 p-2'>（イ）</td>
                              <td class='border border-slate-300 p-2'>（ウ）</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
                              <td class='border border-slate-300 p-2'>（イ）</td>
                              <td class='border border-slate-300 p-2'>（ア）</td>
                              <td class='border border-slate-300 p-2'>（ウ）</td>
                              <td class='border border-slate-300 p-2'>（エ）</td>
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
                      度数分布表では、各階級に観測値がいくつ含まれているかを確認することで、データのおおよその中心や散らばりを把握できます。箱ひげ図では、箱の中央の線が中央値、箱の下端と上端がそれぞれ第1四分位数と第3四分位数を表します。また、一定の基準を超えて離れた値は、外れ値として個別に表示されることがあります。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      店舗Bでは、30日のうち24日が30人未満であり、4店舗の中で明らかに来客数の少ない側に分布しています。したがって、全体的に最も低い位置にある（ア）に対応します。<br>
                      店舗Cでは、30日のうち24日が40人以上であり、特に50人以上70人未満に16日が含まれます。したがって、箱全体が最も高い位置にある（ウ）に対応します。<br>
                      店舗Dでは、29日が20人以上50人未満にある一方、1日だけ70人以上80人未満です。他の大部分のデータから大きく離れた値が存在するため、上側に外れ値をもつ（イ）に対応します。<br>
                      残った店舗Aは（エ）に対応します。実際、店舗Aでは30日のすべてが20人以上50人未満に入り、特に30人以上40人未満に17日が集中しているため、比較的狭い範囲にまとまった箱ひげ図になります。したがって、
                      \\[
                        A=(エ),\\qquad B=(ア),\\qquad C=(ウ),\\qquad D=(イ)
                      \\]
                      です。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：店舗Bは低い階級に多くの観測値があるため（ア）に対応し、店舗Aが（エ）に対応します。<br>
                      ・<b>② 正しい</b>：4店舗それぞれの分布の特徴と箱ひげ図が一致しています。<br>
                      ・<b>③ 誤り</b>：店舗Cは全体として高い値に分布しているため（ウ）です。外れ値をもつ（イ）は店舗Dです。<br>
                      ・<b>④ 誤り</b>：70人以上80人未満の観測値を1つもつ店舗Dが（イ）に対応し、店舗Aは（エ）に対応します。
                    `
                },
                {
                    id: 2,
                    qNumber: 2,
                    question: `
                      問1の箱ひげ図から読み取れることとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① 中央値が最も大きいのは店舗Dである。<br><br>
                      ② 四分位範囲が最も小さいのは店舗Bである。<br><br>
                      ③ 第1四分位数が最も大きいのは店舗Cである。<br><br>
                      ④ データの範囲が最も大きいのは店舗Cである。
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "③",
                    explanation: `
                      正解は③です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      箱ひげ図では、箱の下端が第1四分位数 \\(Q_1\\)、箱の中の線が中央値 \\(Q_2\\)、箱の上端が第3四分位数 \\(Q_3\\) を表します。四分位範囲は
                      \\[
                        IQR=Q_3-Q_1
                      \\]
                      であり、データの中央50%の散らばりを表します。一方、データの範囲は
                      \\[
                        \\text{範囲}=\\text{最大値}-\\text{最小値}
                      \\]
                      です。箱ひげ図で外れ値として個別に表示された値も実際の観測値であるため、データの範囲を考えるときには含めます。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      店舗A〜Dと箱ひげ図の対応は、
                      \\[
                        A=(エ),\\qquad B=(ア),\\qquad C=(ウ),\\qquad D=(イ)
                      \\]
                      です。店舗Cに対応する（ウ）を見ると、箱の下端である第1四分位数が4店舗の中で最も高い位置にあります。したがって、第1四分位数が最も大きいのは店舗Cです。<br>
                      一方、店舗Dには70人台の外れ値が存在します。この値も含めて最大値と最小値の差を考えると、店舗Dの範囲が最も大きくなります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：中央値が最も大きいのは店舗Cです。<br>
                      ・<b>② 誤り</b>：四分位範囲が最も小さいのは店舗Aです。店舗Bでは箱が店舗Aより縦に長いです。<br>
                      ・<b>③ 正しい</b>：店舗Cの箱の下端が4店舗の中で最も高く、第1四分位数が最も大きいです。<br>
                      ・<b>④ 誤り</b>：店舗Dには上側に外れ値があり、その値まで含めるとデータの範囲は店舗Dが最も大きいです。外れ値と上側のひげの端を混同しないことが重要です。
                    `
                }
            ]
        },
        {
            id: 2,
            title: "変化率",
            stem: `
              ある企業の2022年から2025年までの売上高は、次の表のとおりであった。
              <div class='overflow-x-auto mt-4 mb-4'>
                <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                  <thead>
                    <tr class='bg-slate-100'>
                      <th class='border border-slate-300 p-2'>年</th>
                      <th class='border border-slate-300 p-2'>売上高（百万円）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>2022</td>
                      <td class='border border-slate-300 p-2'>500</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>2023</td>
                      <td class='border border-slate-300 p-2'>550</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>2024</td>
                      <td class='border border-slate-300 p-2'>（　）</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>2025</td>
                      <td class='border border-slate-300 p-2'>594</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              2024年から2025年にかけて、売上高は10%減少した。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 3,
                    question: `
                      2024年の売上高として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① 534.6百万円<br><br>
                      ② 600百万円<br><br>
                      ③ 654百万円<br><br>
                      ④ 660百万円
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "④",
                    explanation: `
                      正解は④です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      ある値 \\(x\\) が \\(r\\) の割合だけ減少した後の値は、
                      \\[
                        x(1-r)
                      \\]
                      で表されます。したがって、10%減少した場合、減少後の値は減少前の値の
                      \\[
                        1-0.10=0.90
                      \\]
                      倍となります。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      2024年の売上高を \\(x\\) 百万円とします。2024年から2025年にかけて売上高が10%減少し、2025年の売上高が594百万円であるから、
                      \\[
                        0.90x=594
                      \\]
                      が成り立ちます。したがって、
                      \\[
                        x=\\dfrac{594}{0.90}=660
                      \\]
                      となります。よって、2024年の売上高は
                      \\[
                        \\boxed{660\\text{百万円}}
                      \\]
                      です。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：594百万円をさらに10%減少させた値であり、変化の向きを取り違えています。<br>
                      ・<b>② 誤り</b>：2025年の594百万円に減少分として単純に6百万円を加えた値であり、10%の基準となる値を正しく扱えていません。<br>
                      ・<b>③ 誤り</b>：2025年の594百万円にその10%である59.4百万円を加える考え方に近いですが、10%は2025年ではなく2024年の売上高に対する割合です。<br>
                      ・<b>④ 正しい</b>：\\(594\\div 0.90=660\\) より、2024年の売上高は660百万円です。
                    `
                }
            ]
        },
        {
            id: 3,
            title: "ラスパイレス指数",
            stem: `
              ある2つの商品A、Bについて、基準年と比較年の価格および購入数量を調べたところ、次の表が得られた。
              <div class='overflow-x-auto mt-4 mb-4'>
                <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                  <thead>
                    <tr class='bg-slate-100'>
                      <th class='border border-slate-300 p-2'>商品</th>
                      <th class='border border-slate-300 p-2'>基準年の価格（円）</th>
                      <th class='border border-slate-300 p-2'>基準年の数量</th>
                      <th class='border border-slate-300 p-2'>比較年の価格（円）</th>
                      <th class='border border-slate-300 p-2'>比較年の数量</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>A</td>
                      <td class='border border-slate-300 p-2'>100</td>
                      <td class='border border-slate-300 p-2'>10</td>
                      <td class='border border-slate-300 p-2'>120</td>
                      <td class='border border-slate-300 p-2'>8</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>B</td>
                      <td class='border border-slate-300 p-2'>200</td>
                      <td class='border border-slate-300 p-2'>5</td>
                      <td class='border border-slate-300 p-2'>220</td>
                      <td class='border border-slate-300 p-2'>6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 4,
                    question: `
                      基準年を100としたとき、比較年のラスパイレス価格指数として最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① 105<br><br>
                      ② 110<br><br>
                      ③ 115<br><br>
                      ④ 120
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "③",
                    explanation: `
                      正解は③です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      ラスパイレス価格指数は、<b>基準年の数量をウェイトとして固定</b>し、基準年と比較年の価格を比較する指数です。基準年の価格と数量をそれぞれ \\(p_0,q_0\\)、比較年の価格を \\(p_1\\) とすると、
                      \\[
                        L=\\dfrac{\\sum p_1q_0}{\\sum p_0q_0}\\times 100
                      \\]
                      で求められます。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      基準年の価格と数量から、
                      \\[
                        \\sum p_0q_0=100\\times 10+200\\times 5=2000
                      \\]
                      です。次に、比較年の価格に<b>基準年の数量</b>を掛けると、
                      \\[
                        \\sum p_1q_0=120\\times 10+220\\times 5=2300
                      \\]
                      です。したがって、ラスパイレス価格指数は、
                      \\[
                        L=\\dfrac{2300}{2000}\\times 100=115
                      \\]
                      です。よって、最も適切なのは
                      \\[
                        \\boxed{115}
                      \\]
                      です。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：ラスパイレス価格指数の計算結果とは一致しません。<br>
                      ・<b>② 誤り</b>：個々の商品の価格変化率などを単純に扱うと、このような誤答につながります。<br>
                      ・<b>③ 正しい</b>：基準年の数量をウェイトとして計算すると115となります。<br>
                      ・<b>④ 誤り</b>：商品Aの価格上昇率20%だけに注目した場合に選びやすいです。ラスパイレス価格指数では、各商品の基準年の数量を考慮する必要があります。
                    `
                }
            ]
        },
        {
            id: 4,
            title: "散布図と相関",
            stem: `
              ある30個の観測値について、2つの変数 \\(X,Y\\) を測定した。次の図は、その観測結果を表した散布図である。
              ![XとYの散布図](picture/m01_4_scatter.svg?v=1)
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 5,
                    question: `
                      上の散布図について、相関係数 \\(r\\) の値と、\\(X,Y\\) の分散の大小関係の組合せとして最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      <div class='overflow-x-auto'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-1'></th>
                              <th class='border border-slate-300 p-2'>相関係数</th>
                              <th class='border border-slate-300 p-2'>分散</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
                              <td class='border border-slate-300 p-2'>\\(r\\simeq 0.7\\)</td>
                              <td class='border border-slate-300 p-2'>\\(V(X)\\gt V(Y)\\)</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
                              <td class='border border-slate-300 p-2'>\\(r\\simeq 0.7\\)</td>
                              <td class='border border-slate-300 p-2'>\\(V(X)\\lt V(Y)\\)</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
                              <td class='border border-slate-300 p-2'>\\(r\\simeq 0.2\\)</td>
                              <td class='border border-slate-300 p-2'>\\(V(X)\\gt V(Y)\\)</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
                              <td class='border border-slate-300 p-2'>\\(r\\simeq 0.2\\)</td>
                              <td class='border border-slate-300 p-2'>\\(V(X)\\lt V(Y)\\)</td>
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
                      相関係数は、2つの変数の線形的な関係の強さを表し、
                      \\[
                        -1\\leq r\\leq 1
                      \\]
                      の範囲の値をとります。\\(r\\) が1に近いほど強い正の相関があり、0に近いほど線形的な関係は弱いです。<br>
                      一方、分散は各変数そのものの散らばりの大きさを表します。横軸と縦軸の縮尺が同じであれば、散布図上での横方向・縦方向の広がりから、その大小を比較できます。<br><br>
                      <b>2. 判定プロセス</b><br>
                      散布図を見ると、\\(X\\) が大きいほど \\(Y\\) も大きくなる傾向が明確にみられます。一方で、すべての点が一直線の近くに集中しているわけではありません。したがって、\\(r\\simeq 0.2\\) のような弱い相関よりも、
                      \\[
                        r\\simeq 0.7
                      \\]
                      程度の相関が適切です。<br>
                      また、横軸と縦軸は同じ縮尺であり、点の広がりは横方向の方が大きいです。このため、
                      \\[
                        V(X)\\gt V(Y)
                      \\]
                      と判断できます。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 正しい</b>：正の相関は比較的強く、また \\(X\\) の方が大きく散らばっています。<br>
                      ・<b>② 誤り</b>：相関係数については適切ですが、分散の大小関係が逆です。<br>
                      ・<b>③ 誤り</b>：分散の大小関係は適切ですが、散布図から読み取れる相関は \\(0.2\\) より強いです。<br>
                      ・<b>④ 誤り</b>：相関係数、分散の大小関係のいずれも散布図と整合しません。
                    `
                },
                {
                    id: 2,
                    qNumber: 6,
                    question: `
                      上の散布図について、変数 \\(X\\) の分布を表すヒストグラムとして最も適切なものを、次の ①〜④ のうちから1つ選べ。
                      ![Xのヒストグラム](picture/m01_4_hists.svg?v=1)
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "①",
                    explanation: `
                      正解は①です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      散布図は \\(X\\) と \\(Y\\) の関係だけでなく、それぞれの変数単独の分布についても情報をもっています。散布図の各点を横軸方向に投影して \\(X\\) の値だけに注目すれば、\\(X\\) のヒストグラムに対応する分布を考えることができます。<br><br>
                      <b>2. 判定プロセス</b><br>
                      散布図を横軸方向について見ると、\\(X\\) は比較的小さい値から中央付近に多く集まっている一方、大きい値の方向にも少数の観測値が存在しています。したがって、\\(X\\) の分布は左右対称ではなく、<b>やや右に裾が長い単峰型の分布</b>と考えられます。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 正しい</b>：散布図における \\(X\\) の分布と同様に、中央付近に山があり、大きい値の方向にやや長い裾をもちます。<br>
                      ・<b>② 誤り</b>：左右対称な分布になっていますが、散布図の \\(X\\) は右側にやや長く広がっています。<br>
                      ・<b>③ 誤り</b>：左に裾が長い分布であり、散布図から読み取れる \\(X\\) の分布とは歪みの方向が逆です。<br>
                      ・<b>④ 誤り</b>：明確な2つの山をもちますが、散布図の \\(X\\) にそのような二峰性はみられません。
                    `
                },
                {
                    id: 3,
                    qNumber: 7,
                    question: `
                      上の変数 \\(X\\) を用いて、新しい変数
                      \\[
                        Z=\\dfrac{1}{2}X
                      \\]
                      を定義した。このとき、\\(Z\\) と \\(Y\\) の共分散および相関係数について、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① 共分散は \\(\\dfrac{1}{2}\\) 倍になり、相関係数も \\(\\dfrac{1}{2}\\) 倍になる。<br><br>
                      ② 共分散は \\(\\dfrac{1}{2}\\) 倍になるが、相関係数は変わらない。<br><br>
                      ③ 共分散は変わらないが、相関係数は \\(\\dfrac{1}{2}\\) 倍になる。<br><br>
                      ④ 共分散も相関係数も変わらない。
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "②",
                    explanation: `
                      正解は②です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      定数 \\(a\\) に対して、共分散には
                      \\[
                        \\operatorname{Cov}(aX,Y)=a\\operatorname{Cov}(X,Y)
                      \\]
                      という性質があります。一方、正の定数倍によって相関係数は変化しません。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      \\(Z=X/2\\) であるから、
                      \\[
                        \\operatorname{Cov}(Z,Y)=\\operatorname{Cov}\\left(\\dfrac{1}{2}X,Y\\right)=\\dfrac{1}{2}\\operatorname{Cov}(X,Y)
                      \\]
                      となります。一方、相関係数については、
                      \\[
                        r_{ZY}=\\dfrac{\\operatorname{Cov}(Z,Y)}{\\sqrt{V(Z)}\\sqrt{V(Y)}}
                      \\]
                      です。\\(Z=X/2\\) より、
                      \\[
                        V(Z)=\\dfrac{1}{4}V(X)
                      \\]
                      なので、
                      \\[
                        \\sqrt{V(Z)}=\\dfrac{1}{2}\\sqrt{V(X)}
                      \\]
                      となります。したがって、
                      \\[
                        r_{ZY}=\\dfrac{\\dfrac{1}{2}\\operatorname{Cov}(X,Y)}{\\dfrac{1}{2}\\sqrt{V(X)}\\sqrt{V(Y)}}=r_{XY}
                      \\]
                      となり、相関係数は変化しません。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：共分散は \\(\\dfrac{1}{2}\\) 倍になりますが、相関係数は変わりません。<br>
                      ・<b>② 正しい</b>：共分散は変数の尺度の影響を受けますが、正の定数倍では相関係数は変化しません。<br>
                      ・<b>③ 誤り</b>：共分散と相関係数の変化を逆に捉えています。<br>
                      ・<b>④ 誤り</b>：相関係数は変わりませんが、共分散は \\(\\dfrac{1}{2}\\) 倍になります。
                    `
                }
            ]
        },
        {
            id: 5,
            title: "時系列データと自己相関",
            stem: `
              ある指標について、36時点にわたって観測した結果を時系列順に並べたところ、次の図が得られた。
              ![時系列グラフ](picture/m01_5_series.svg?v=1)
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 8,
                    question: `
                      この時系列データに対応するコレログラムとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
                      ![4つのコレログラム](picture/m01_5_correlograms.svg?v=1)
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "①",
                    explanation: `
                      正解は①です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      自己相関とは、同じ時系列について、異なる時点の値の間の相関を表すものです。ラグ \\(k\\) の自己相関は、時系列 \\(X_t\\) と、それを \\(k\\) 時点ずらした \\(X_{t-k}\\) との相関を表します。コレログラムは、横軸にラグ、縦軸に各ラグにおける自己相関係数をとったグラフです。<br><br>
                      <b>2. 判定プロセス</b><br>
                      与えられた時系列グラフでは、高い値の後には比較的高い値が、低い値の後には比較的低い値が続く傾向がみられます。したがって、隣接する時点の値には比較的強い正の関係があり、<b>ラグ1の自己相関は正で大きい</b>と考えられます。<br>
                      一方、時点が離れるにつれて値の類似性は弱くなっているため、ラグが大きくなるにつれて自己相関も小さくなると考えられます。この特徴に最もよく対応するのは、正の自己相関がラグ1から徐々に減衰している<b>コレログラム①</b>です。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 正しい</b>：ラグ1では大きな正の自己相関をもち、ラグが大きくなるにつれて自己相関が徐々に減衰しており、与えられた時系列の特徴と整合します。<br>
                      ・<b>② 誤り</b>：各ラグの自己相関がほぼ0である場合、隣接する時点どうしにも明確な線形的関係がみられない系列に対応します。与えられた時系列では近い時点の値が似る傾向があります。<br>
                      ・<b>③ 誤り</b>：自己相関の符号が正負交互に現れる場合、値が上下に交互に変動するような系列が想定されます。与えられた時系列にはそのような特徴はみられません。<br>
                      ・<b>④ 誤り</b>：特定の間隔のラグで大きな自己相関が繰り返し現れる場合、周期的な変動をもつ系列が考えられます。与えられた時系列には明確な周期性はみられません。
                    `
                }
            ]
        },
        {
            id: 6,
            title: "実験計画法",
            stem: `
              ある農場で、3種類の肥料A、B、Cが作物の収穫量に与える影響を比較する実験を行うことにした。<br><br>
              この実験では、畑を土壌条件が似ている区画ごとにいくつかのグループに分け、各グループの中で肥料A、B、Cを使用する区画を無作為に決定した。また、それぞれの肥料を複数の区画に使用して収穫量を測定した。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 9,
                    question: `
                      この実験におけるフィッシャーの実験計画法の三原則に関する記述として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      <div class='overflow-x-auto'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-1'></th>
                              <th class='border border-slate-300 p-2'>土壌条件が似ている区画をグループに分ける</th>
                              <th class='border border-slate-300 p-2'>各肥料を複数の区画に使用する</th>
                              <th class='border border-slate-300 p-2'>肥料を無作為に割り付ける</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
                              <td class='border border-slate-300 p-2'>無作為化</td>
                              <td class='border border-slate-300 p-2'>局所管理</td>
                              <td class='border border-slate-300 p-2'>反復</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
                              <td class='border border-slate-300 p-2'>局所管理</td>
                              <td class='border border-slate-300 p-2'>反復</td>
                              <td class='border border-slate-300 p-2'>無作為化</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
                              <td class='border border-slate-300 p-2'>反復</td>
                              <td class='border border-slate-300 p-2'>無作為化</td>
                              <td class='border border-slate-300 p-2'>局所管理</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
                              <td class='border border-slate-300 p-2'>局所管理</td>
                              <td class='border border-slate-300 p-2'>無作為化</td>
                              <td class='border border-slate-300 p-2'>反復</td>
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
                      フィッシャーの実験計画法の三原則は、<b>無作為化・反復・局所管理</b>です。<br>
                      ・<b>無作為化</b>：実験単位への処理の割付を無作為に行うことです。実験者が意図していない要因による系統的な偏りを防ぐことを目的とします。<br>
                      ・<b>反復</b>：同じ処理を複数の実験単位に適用することです。これにより、偶然によるばらつきを評価し、処理間の差をより適切に比較できます。<br>
                      ・<b>局所管理</b>：性質の似た実験単位をグループ（ブロック）にまとめ、その中で処理を比較することです。既知の要因によるばらつきを小さくすることを目的とします。<br><br>
                      <b>2. 判定プロセス</b><br>
                      問題文の各操作を三原則に対応させます。<br>
                      <b>土壌条件が似ている区画ごとにグループに分ける</b>操作は、土壌条件という収穫量に影響しうる要因をそろえた上で肥料を比較するものなので、局所管理に対応します。<br>
                      <b>それぞれの肥料を複数の区画に使用する</b>操作は、同じ処理を複数の実験単位に適用しているため、反復に対応します。<br>
                      <b>各グループ内で肥料を使用する区画を無作為に決める</b>操作は、処理の割付をランダムに行っているため、無作為化に対応します。<br>
                      したがって、
                      \\[
                        \\boxed{\\text{局所管理・反復・無作為化}}
                      \\]
                      の組合せとなります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：土壌条件が似ている区画をまとめることは局所管理であり、無作為化ではありません。また、複数の区画で同じ肥料を使用することは反復に対応します。<br>
                      ・<b>② 正しい</b>：グループ分けが局所管理、同じ肥料を複数の区画に使用することが反復、肥料のランダムな割付が無作為化にそれぞれ対応しています。<br>
                      ・<b>③ 誤り</b>：三原則の対応がいずれも異なります。特に、処理を無作為に割り付ける操作が無作為化です。<br>
                      ・<b>④ 誤り</b>：局所管理については正しいですが、反復と無作為化の対応が逆になっています。
                    `
                }
            ]
        },
        {
            id: 7,
            title: "標本抽出法",
            stem: `
              全国の高校生を対象として、生活習慣に関する調査を行うことにした。<br><br>
              全国の高校の一覧から50校を無作為に選び、<b>選ばれた50校に在籍するすべての生徒</b>を調査対象とした。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 10,
                    question: `
                      この標本抽出法として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① 単純無作為抽出法<br><br>
                      ② 系統抽出法<br><br>
                      ③ 層化抽出法<br><br>
                      ④ クラスター抽出法
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "④",
                    explanation: `
                      正解は④です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      代表的な標本抽出法には、次のようなものがあります。<br>
                      ・<b>単純無作為抽出法</b>：母集団を構成する各個体が等しい確率で選ばれるように、個体を直接無作為抽出する方法です。<br>
                      ・<b>系統抽出法</b>：母集団を一定の順序に並べ、最初の1つを無作為に選んだ後、一定の間隔ごとに個体を抽出する方法です。<br>
                      ・<b>層化抽出法</b>：母集団を性質の異なるいくつかの層に分け、<b>各層から</b>標本を抽出する方法です。<br>
                      ・<b>クラスター抽出法</b>：母集団を学校や地域などの集団（クラスター）に分け、<b>いくつかのクラスターを抽出し、そのクラスターに属する個体を調査する</b>方法です。<br><br>
                      <b>2. 判定プロセス</b><br>
                      この調査では、高校生一人ひとりを全国から直接抽出しているのではありません。まず全国の高校から50校を無作為に選び、その後、選ばれた高校に在籍するすべての生徒を調査しています。つまり、「高校」をクラスターとして、その一部を抽出しています。したがって、この抽出方法は<b>クラスター抽出法</b>です。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：単純無作為抽出法であれば、全国の高校生一人ひとりから直接無作為に標本を選びます。この調査では、まず高校を抽出しています。<br>
                      ・<b>② 誤り</b>：系統抽出法では、名簿などから一定の間隔ごとに対象者を抽出します。問題文ではそのような操作は行われていません。<br>
                      ・<b>③ 誤り</b>：層化抽出法では、例えば地域などによって母集団をいくつかの層に分け、各層から標本を抽出します。この調査では、すべての高校から生徒を抽出するのではなく、一部の高校そのものを選んでいます。<br>
                      ・<b>④ 正しい</b>：高校をクラスターとして一部の高校を無作為に選び、選ばれた高校に所属する生徒全員を調査しているため、クラスター抽出法に該当します。
                    `
                }
            ]
        },
        {
            id: 8,
            title: "事象の独立性と排反性",
            stem: `
              2つの事象 \\(A,B\\) について、
              \\[
                P(A)=0.4,\\qquad P(B)=0.5,\\qquad P(A\\cup B)=0.7
              \\]
              であることが分かっている。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 11,
                    question: `
                      事象 \\(A,B\\) の独立性および排反性について、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      <div class='overflow-x-auto'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-1'></th>
                              <th class='border border-slate-300 p-2'>独立性</th>
                              <th class='border border-slate-300 p-2'>排反性</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
                              <td class='border border-slate-300 p-2'>独立である</td>
                              <td class='border border-slate-300 p-2'>排反である</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
                              <td class='border border-slate-300 p-2'>独立である</td>
                              <td class='border border-slate-300 p-2'>排反ではない</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
                              <td class='border border-slate-300 p-2'>独立ではない</td>
                              <td class='border border-slate-300 p-2'>排反である</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
                              <td class='border border-slate-300 p-2'>独立ではない</td>
                              <td class='border border-slate-300 p-2'>排反ではない</td>
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
                      2つの事象 \\(A,B\\) について、確率の加法定理より、
                      \\[
                        P(A\\cup B)=P(A)+P(B)-P(A\\cap B)
                      \\]
                      が成り立ちます。また、\\(A,B\\) が<b>独立</b>であるための条件は、
                      \\[
                        P(A\\cap B)=P(A)P(B)
                      \\]
                      です。一方、\\(A,B\\) が<b>排反</b>であるとは、2つの事象が同時には起こらないことであり、
                      \\[
                        P(A\\cap B)=0
                      \\]
                      が成り立ちます。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      まず、加法定理から、
                      \\[
                        P(A\\cap B)=P(A)+P(B)-P(A\\cup B)
                      \\]
                      なので、
                      \\[
                        P(A\\cap B)=0.4+0.5-0.7=0.2
                      \\]
                      となります。次に、
                      \\[
                        P(A)P(B)=0.4\\times 0.5=0.2
                      \\]
                      です。したがって、
                      \\[
                        P(A\\cap B)=P(A)P(B)
                      \\]
                      が成立するため、\\(A,B\\) は<b>独立</b>です。一方、
                      \\[
                        P(A\\cap B)=0.2\\neq 0
                      \\]
                      なので、\\(A,B\\) は<b>排反ではありません</b>。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：\\(A,B\\) は独立ですが、\\(P(A\\cap B)=0.2\\) なので排反ではありません。<br>
                      ・<b>② 正しい</b>：\\(P(A\\cap B)=P(A)P(B)=0.2\\) より独立であり、\\(P(A\\cap B)\\neq 0\\) より排反ではありません。<br>
                      ・<b>③ 誤り</b>：\\(A,B\\) は独立であり、また排反ではありません。<br>
                      ・<b>④ 誤り</b>：排反ではない点は正しいですが、\\(A,B\\) は独立です。
                    `
                }
            ]
        },
        {
            id: 9,
            title: "球の取り出しと確率",
            stem: `
              袋の中に、赤球が4個、白球が3個、青球が2個の計9個の球が入っている。<br><br>
              この袋から、2個の球を同時に無作為に取り出す。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 12,
                    question: `
                      取り出した2個の球が<b>同じ色</b>である確率として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① \\(\\dfrac{2}{9}\\)<br><br>
                      ② \\(\\dfrac{1}{4}\\)<br><br>
                      ③ \\(\\dfrac{5}{18}\\)<br><br>
                      ④ \\(\\dfrac{1}{3}\\)
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "③",
                    explanation: `
                      正解は③です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      9個の球から2個を同時に取り出す組合せの総数は、\\(\\binom{9}{2}\\) です。2個が同じ色となるのは、赤球を2個取り出す、白球を2個取り出す、青球を2個取り出す、のいずれかの場合です。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      9個から2個を取り出す組合せは、
                      \\[
                        \\binom{9}{2}=36
                      \\]
                      通りです。同じ色の球を2個取り出す組合せは、
                      \\[
                        \\binom{4}{2}+\\binom{3}{2}+\\binom{2}{2}=6+3+1=10
                      \\]
                      通りです。したがって、求める確率は、
                      \\[
                        \\dfrac{10}{36}=\\dfrac{5}{18}
                      \\]
                      となります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：同じ色になる組合せの数を正しく数えた結果とは一致しません。<br>
                      ・<b>② 誤り</b>：球の色が3種類あることだけから単純に確率を決めることはできません。各色の球の個数が異なるためです。<br>
                      ・<b>③ 正しい</b>：全36通りのうち、同じ色となる組合せが10通りなので、確率は \\(\\dfrac{5}{18}\\) です。<br>
                      ・<b>④ 誤り</b>：「3色のうち1色」のように考えることはできません。赤・白・青で球の個数が異なっています。
                    `
                },
                {
                    id: 2,
                    qNumber: 13,
                    question: `
                      取り出した2個の球のうち、<b>少なくとも1個が赤球であることが分かった</b>。このとき、取り出した2個がともに赤球である条件付き確率として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① \\(\\dfrac{1}{6}\\)<br><br>
                      ② \\(\\dfrac{2}{9}\\)<br><br>
                      ③ \\(\\dfrac{3}{13}\\)<br><br>
                      ④ \\(\\dfrac{1}{3}\\)
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "③",
                    explanation: `
                      正解は③です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      事象 \\(A,B\\) に対して、条件付き確率は、
                      \\[
                        P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}
                      \\]
                      で定義されます。この問題では、\\(A\\) を「2個とも赤球である」、\\(B\\) を「少なくとも1個が赤球である」と考えます。\\(A\\) が起これば必ず \\(B\\) も起こるため、
                      \\[
                        A\\subset B
                      \\]
                      です。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      全体の組合せは \\(\\binom{9}{2}=36\\) 通りです。赤球以外の球は \\(3+2=5\\) 個なので、赤球を1個も含まない組合せは \\(\\binom{5}{2}=10\\) 通りです。したがって、少なくとも1個が赤球である組合せは、
                      \\[
                        36-10=26
                      \\]
                      通りとなります。このうち、2個とも赤球である組合せは \\(\\binom{4}{2}=6\\) 通りです。よって、求める条件付き確率は、
                      \\[
                        \\dfrac{6}{26}=\\dfrac{3}{13}
                      \\]
                      となります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：条件として「少なくとも1個が赤球」と分かっているため、もとの36通りをそのまま標本空間として扱うことはできません。<br>
                      ・<b>② 誤り</b>：条件付き確率では、条件を満たす26通りの中で2個とも赤球となる場合を考える必要があります。<br>
                      ・<b>③ 正しい</b>：少なくとも1個が赤球である26通りのうち、2個とも赤球であるのは6通りなので、\\(\\dfrac{6}{26}=\\dfrac{3}{13}\\) です。<br>
                      ・<b>④ 誤り</b>：「少なくとも1個が赤球」という情報を得た後でも、残り1個が赤球となる確率を単純に球の色の種類から求めることはできません。
                    `
                }
            ]
        },
        {
            id: 10,
            title: "確率変数の線形変換",
            stem: `
              2つの確率変数 \\(X,Y\\) について、
              \\[
                E(X)=2,\\qquad E(Y)=1
              \\]
              \\[
                V(X)=4,\\qquad V(Y)=1,\\qquad \\operatorname{Cov}(X,Y)=1
              \\]
              であることが分かっている。<br><br>
              ここで、新しい確率変数 \\(U,W\\) を
              \\[
                U=X+Y,\\qquad W=X-Y
              \\]
              と定義する。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 14,
                    question: `
                      \\(E(U^2)\\) の値として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① \\(7\\)<br><br>
                      ② \\(9\\)<br><br>
                      ③ \\(14\\)<br><br>
                      ④ \\(16\\)
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "④",
                    explanation: `
                      正解は④です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      確率変数 \\(U\\) の分散について、
                      \\[
                        V(U)=E(U^2)-\\{E(U)\\}^2
                      \\]
                      が成り立ちます。したがって、
                      \\[
                        E(U^2)=V(U)+\\{E(U)\\}^2
                      \\]
                      です。また、2つの確率変数の和の分散は、
                      \\[
                        V(X+Y)=V(X)+V(Y)+2\\operatorname{Cov}(X,Y)
                      \\]
                      で求められます。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      まず、\\(U=X+Y\\) なので、期待値の線形性より、
                      \\[
                        E(U)=E(X)+E(Y)=2+1=3
                      \\]
                      となります。次に、
                      \\[
                        \\begin{aligned}
                        V(U)
                        &=V(X+Y)\\\\
                        &=V(X)+V(Y)+2\\operatorname{Cov}(X,Y)\\\\
                        &=4+1+2\\times 1\\\\
                        &=7
                        \\end{aligned}
                      \\]
                      です。よって、
                      \\[
                        \\begin{aligned}
                        E(U^2)
                        &=V(U)+\\{E(U)\\}^2\\\\
                        &=7+3^2\\\\
                        &=16
                        \\end{aligned}
                      \\]
                      となります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：\\(7\\) は \\(V(U)\\) の値であり、\\(E(U^2)\\) ではありません。<br>
                      ・<b>② 誤り</b>：\\(9\\) は \\(\\{E(U)\\}^2=3^2\\) の値です。一般に \\(E(U^2)\\) と \\(\\{E(U)\\}^2\\) は等しくありません。<br>
                      ・<b>③ 誤り</b>：分散と期待値の関係を正しく適用した値ではありません。<br>
                      ・<b>④ 正しい</b>：\\(E(U^2)=V(U)+\\{E(U)\\}^2=7+9=16\\) です。
                    `
                },
                {
                    id: 2,
                    qNumber: 15,
                    question: `
                      \\(U\\) と \\(W\\) の相関係数 \\(\\rho_{UW}\\) として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① \\(\\dfrac{1}{\\sqrt{21}}\\)<br><br>
                      ② \\(\\dfrac{3}{\\sqrt{21}}\\)<br><br>
                      ③ \\(\\dfrac{1}{\\sqrt{3}}\\)<br><br>
                      ④ \\(\\dfrac{3}{\\sqrt{7}}\\)
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "②",
                    explanation: `
                      正解は②です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      2つの確率変数 \\(U,W\\) の相関係数は、
                      \\[
                        \\rho_{UW}=\\dfrac{\\operatorname{Cov}(U,W)}{\\sqrt{V(U)}\\sqrt{V(W)}}
                      \\]
                      で定義されます。また、共分散 \\(\\operatorname{Cov}(aX+bY,cX+dY)\\) は、共分散の双線形性を用いて展開できます。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      まず、\\(U=X+Y\\)、\\(W=X-Y\\) なので、
                      \\[
                        \\begin{aligned}
                        \\operatorname{Cov}(U,W)
                        &=\\operatorname{Cov}(X+Y,X-Y)\\\\
                        &=\\operatorname{Cov}(X,X)-\\operatorname{Cov}(X,Y)+\\operatorname{Cov}(Y,X)-\\operatorname{Cov}(Y,Y)
                        \\end{aligned}
                      \\]
                      です。ここで、\\(\\operatorname{Cov}(X,X)=V(X)\\)、\\(\\operatorname{Cov}(Y,Y)=V(Y)\\) および \\(\\operatorname{Cov}(X,Y)=\\operatorname{Cov}(Y,X)\\) であるため、
                      \\[
                        \\operatorname{Cov}(U,W)=V(X)-V(Y)=4-1=3
                      \\]
                      となります。また、問10-1より \\(V(U)=7\\) です。一方、
                      \\[
                        \\begin{aligned}
                        V(W)
                        &=V(X-Y)\\\\
                        &=V(X)+V(Y)-2\\operatorname{Cov}(X,Y)\\\\
                        &=4+1-2\\\\
                        &=3
                        \\end{aligned}
                      \\]
                      です。したがって、
                      \\[
                        \\rho_{UW}=\\dfrac{3}{\\sqrt{7}\\sqrt{3}}=\\dfrac{3}{\\sqrt{21}}
                      \\]
                      となります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：\\(U,W\\) の共分散を正しく計算すると \\(3\\) であり、分子は1ではありません。<br>
                      ・<b>② 正しい</b>：\\(\\operatorname{Cov}(U,W)=3\\)、\\(V(U)=7\\)、\\(V(W)=3\\) より、相関係数は \\(\\dfrac{3}{\\sqrt{21}}\\) です。<br>
                      ・<b>③ 誤り</b>：相関係数の計算では、共分散だけでなく \\(U,W\\) の両方の標準偏差で割る必要があります。<br>
                      ・<b>④ 誤り</b>：\\(W\\) の標準偏差 \\(\\sqrt{3}\\) を分母に含めていません。
                    `
                }
            ]
        },
        {
            id: 11,
            title: "連続確率変数",
            stem: `
              連続確率変数 \\(X\\) の確率密度関数 \\(f(x)\\) が、
              \\[
                f(x)=
                \\begin{cases}
                cx^2 & (0\\leq x\\leq 2)\\\\
                0 & (\\text{その他})
                \\end{cases}
              \\]
              で与えられている。ただし、\\(c\\) は正の定数とする。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 16,
                    question: `
                      定数 \\(c\\) の値として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① \\(\\dfrac{1}{8}\\)<br><br>
                      ② \\(\\dfrac{1}{4}\\)<br><br>
                      ③ \\(\\dfrac{3}{8}\\)<br><br>
                      ④ \\(\\dfrac{3}{4}\\)
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "③",
                    explanation: `
                      正解は③です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      確率密度関数 \\(f(x)\\) は、\\(f(x)\\geq 0\\) かつ
                      \\[
                        \\int_{-\\infty}^{\\infty}f(x)\\,dx=1
                      \\]
                      を満たします。この問題では \\(0\\leq x\\leq 2\\) 以外では \\(f(x)=0\\) なので、
                      \\[
                        \\int_0^2 cx^2\\,dx=1
                      \\]
                      が成り立ちます。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      \\[
                        \\begin{aligned}
                        \\int_0^2 cx^2\\,dx
                        &=c\\left[\\dfrac{x^3}{3}\\right]_0^2\\\\
                        &=c\\dfrac{8}{3}
                        \\end{aligned}
                      \\]
                      これが1に等しいので、
                      \\[
                        \\dfrac{8}{3}c=1
                      \\]
                      より、
                      \\[
                        c=\\dfrac{3}{8}
                      \\]
                      となります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：\\(c=\\dfrac{1}{8}\\) とすると、確率密度関数を全範囲で積分しても1になりません。<br>
                      ・<b>② 誤り</b>：\\(x^2\\) の積分を正しく行い、全確率を1とする条件を用いるとこの値にはなりません。<br>
                      ・<b>③ 正しい</b>：\\(\\int_0^2 cx^2\\,dx=1\\) を満たすのは \\(c=\\dfrac{3}{8}\\) です。<br>
                      ・<b>④ 誤り</b>：\\(c=\\dfrac{3}{4}\\) とすると、確率密度関数の積分値は1を超えます。
                    `
                },
                {
                    id: 2,
                    qNumber: 17,
                    question: `
                      確率変数 \\(X\\) の分散 \\(V(X)\\) として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① \\(\\dfrac{3}{20}\\)<br><br>
                      ② \\(\\dfrac{3}{10}\\)<br><br>
                      ③ \\(\\dfrac{3}{2}\\)<br><br>
                      ④ \\(\\dfrac{12}{5}\\)
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "①",
                    explanation: `
                      正解は①です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      連続確率変数 \\(X\\) の期待値および2乗の期待値は、
                      \\[
                        E(X)=\\int_{-\\infty}^{\\infty}xf(x)\\,dx,\\qquad
                        E(X^2)=\\int_{-\\infty}^{\\infty}x^2f(x)\\,dx
                      \\]
                      で求められます。分散は、
                      \\[
                        V(X)=E(X^2)-\\{E(X)\\}^2
                      \\]
                      です。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      問11-1より、\\(c=\\dfrac{3}{8}\\) です。まず、\\(E(X)\\) を求めます。
                      \\[
                        \\begin{aligned}
                        E(X)
                        &=\\int_0^2 x\\cdot\\dfrac{3}{8}x^2\\,dx\\\\
                        &=\\dfrac{3}{8}\\int_0^2 x^3\\,dx\\\\
                        &=\\dfrac{3}{8}\\left[\\dfrac{x^4}{4}\\right]_0^2\\\\
                        &=\\dfrac{3}{8}\\cdot 4\\\\
                        &=\\dfrac{3}{2}
                        \\end{aligned}
                      \\]
                      次に、\\(E(X^2)\\) を求めます。
                      \\[
                        \\begin{aligned}
                        E(X^2)
                        &=\\int_0^2 x^2\\cdot\\dfrac{3}{8}x^2\\,dx\\\\
                        &=\\dfrac{3}{8}\\int_0^2 x^4\\,dx\\\\
                        &=\\dfrac{3}{8}\\left[\\dfrac{x^5}{5}\\right]_0^2\\\\
                        &=\\dfrac{3}{8}\\cdot\\dfrac{32}{5}\\\\
                        &=\\dfrac{12}{5}
                        \\end{aligned}
                      \\]
                      したがって、
                      \\[
                        \\begin{aligned}
                        V(X)
                        &=E(X^2)-\\{E(X)\\}^2\\\\
                        &=\\dfrac{12}{5}-\\left(\\dfrac{3}{2}\\right)^2\\\\
                        &=\\dfrac{12}{5}-\\dfrac{9}{4}\\\\
                        &=\\dfrac{48-45}{20}\\\\
                        &=\\dfrac{3}{20}
                        \\end{aligned}
                      \\]
                      となります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 正しい</b>：\\(E(X)=\\dfrac{3}{2}\\)、\\(E(X^2)=\\dfrac{12}{5}\\) より、\\(V(X)=\\dfrac{3}{20}\\) です。<br>
                      ・<b>② 誤り</b>：期待値と2乗の期待値から分散を正しく計算した値ではありません。<br>
                      ・<b>③ 誤り</b>：\\(\\dfrac{3}{2}\\) は \\(E(X)\\) の値であり、分散ではありません。<br>
                      ・<b>④ 誤り</b>：\\(\\dfrac{12}{5}\\) は \\(E(X^2)\\) の値であり、分散を求めるにはさらに \\(\\{E(X)\\}^2\\) を引く必要があります。
                    `
                }
            ]
        },
        {
            id: 12,
            title: "幾何分布",
            stem: `
              ある試行では、1回の試行で成功する確率が \\(0.2\\) であり、各試行の結果は互いに独立であるものとする。<br><br>
              成功するまで試行を繰り返し、<b>初めて成功するまでに行った試行回数</b>を確率変数 \\(X\\) とする。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 18,
                    question: `
                      初めて4回目の試行で成功する確率として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① \\(0.0256\\)<br><br>
                      ② \\(0.0819\\)<br><br>
                      ③ \\(0.1024\\)<br><br>
                      ④ \\(0.4096\\)
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "③",
                    explanation: `
                      正解は③です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      初めて \\(k\\) 回目の試行で成功するためには、最初の \\(k-1\\) 回で失敗し、\\(k\\) 回目で成功する必要があります。1回の試行で成功する確率を \\(p\\) とすると、失敗する確率は \\(1-p\\) であるため、
                      \\[
                        P(X=k)=(1-p)^{k-1}p
                      \\]
                      となります。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      この問題では \\(p=0.2\\) なので、失敗する確率は \\(1-p=0.8\\) です。初めて4回目で成功するためには、失敗→失敗→失敗→成功となればよいです。各試行は互いに独立であるため、
                      \\[
                        \\begin{aligned}
                        P(X=4)
                        &=(0.8)^3\\times 0.2\\\\
                        &=0.512\\times 0.2\\\\
                        &=0.1024
                        \\end{aligned}
                      \\]
                      となります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：「3回失敗した後、4回目で成功する」という事象の確率を正しく表していません。<br>
                      ・<b>② 誤り</b>：4回目までの試行結果の並びを正しく考慮した値ではありません。<br>
                      ・<b>③ 正しい</b>：\\((0.8)^3\\times 0.2=0.1024\\) です。<br>
                      ・<b>④ 誤り</b>：\\(0.8^4=0.4096\\) は4回すべて失敗する確率であり、4回目に初めて成功する確率ではありません。
                    `
                },
                {
                    id: 2,
                    qNumber: 19,
                    question: `
                      確率変数 \\(X\\) が従う分布と、その期待値 \\(E(X)\\) の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      <div class='overflow-x-auto'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-1'></th>
                              <th class='border border-slate-300 p-2'>分布</th>
                              <th class='border border-slate-300 p-2'>\\(E(X)\\)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
                              <td class='border border-slate-300 p-2'>二項分布</td>
                              <td class='border border-slate-300 p-2'>\\(4\\)</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
                              <td class='border border-slate-300 p-2'>二項分布</td>
                              <td class='border border-slate-300 p-2'>\\(5\\)</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
                              <td class='border border-slate-300 p-2'>幾何分布</td>
                              <td class='border border-slate-300 p-2'>\\(4\\)</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
                              <td class='border border-slate-300 p-2'>幾何分布</td>
                              <td class='border border-slate-300 p-2'>\\(5\\)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "④",
                    explanation: `
                      正解は④です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      成功確率 \\(p\\) の独立な試行を成功するまで繰り返し、<b>初めて成功するまでの試行回数</b>を \\(X\\) とすると、\\(X\\) は幾何分布に従います。このとき、
                      \\[
                        P(X=k)=(1-p)^{k-1}p\\qquad(k=1,2,\\ldots)
                      \\]
                      であり、その期待値は
                      \\[
                        E(X)=\\dfrac{1}{p}
                      \\]
                      です。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      この問題では、試行回数をあらかじめ固定して成功回数を数えているのではなく、<b>初めて成功するまでの試行回数</b>を数えています。したがって、\\(X\\) が従うのは二項分布ではなく<b>幾何分布</b>です。また、\\(p=0.2\\) なので、
                      \\[
                        E(X)=\\dfrac{1}{0.2}=5
                      \\]
                      となります。よって、
                      \\[
                        \\boxed{\\text{幾何分布 ― }5}
                      \\]
                      です。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：二項分布は、一定回数の試行における成功回数などを表す場合に用いられます。また、期待値も4ではありません。<br>
                      ・<b>② 誤り</b>：期待値は5ですが、\\(X\\) が従う分布は二項分布ではありません。<br>
                      ・<b>③ 誤り</b>：幾何分布であることは正しいですが、初めて成功するまでの<b>試行回数</b>を数える場合、期待値は4ではなく5です。<br>
                      ・<b>④ 正しい</b>：\\(X\\) は成功確率 \\(0.2\\) の幾何分布に従い、\\(E(X)=1/0.2=5\\) です。<br><br>
                      なお、幾何分布については「初めて成功するまでの<b>失敗回数</b>」を確率変数とする定義もあります。この定義では期待値は
                      \\[
                        \\dfrac{1-p}{p}=\\dfrac{0.8}{0.2}=4
                      \\]
                      となります。本問では「初めて成功するまでに行った<b>試行回数</b>」と明記しているため、期待値は5です。
                    `
                }
            ]
        },
        {
            id: 13,
            title: "標本平均の分布",
            stem: `
              ある母集団から無作為に抽出された標本 \\(X_1,X_2,\\ldots,X_{25}\\) が互いに独立に、
              \\[
                X_i\\sim N(50,10^2)
              \\]
              に従うものとする。<br><br>
              標本平均を
              \\[
                \\bar{X}=\\dfrac{1}{25}\\sum_{i=1}^{25}X_i
              \\]
              とする。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 20,
                    question: `
                      \\[
                        P(\\bar{X}\\geq 54)
                      \\]
                      の値として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      必要であれば、標準正規分布について次の値を用いてよい。
                      \\[
                        P(Z\\leq 1)=0.8413,\\qquad P(Z\\leq 2)=0.9772
                      \\]
                      <br>
                      ① \\(0.0228\\)<br><br>
                      ② \\(0.1587\\)<br><br>
                      ③ \\(0.4772\\)<br><br>
                      ④ \\(0.9772\\)
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "①",
                    explanation: `
                      正解は①です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      母集団が正規分布 \\(X_i\\sim N(\\mu,\\sigma^2)\\) に従い、\\(X_1,\\ldots,X_n\\) が互いに独立であるとき、標本平均 \\(\\bar{X}\\) も正規分布に従い、
                      \\[
                        \\bar{X}\\sim N\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)
                      \\]
                      となります。したがって、
                      \\[
                        E(\\bar{X})=\\mu,\\qquad V(\\bar{X})=\\dfrac{\\sigma^2}{n}
                      \\]
                      であり、標本平均の標準偏差（標準誤差）は \\(\\sigma/\\sqrt{n}\\) です。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      この問題では \\(\\mu=50\\)、\\(\\sigma=10\\)、\\(n=25\\) なので、
                      \\[
                        E(\\bar{X})=50,\\qquad V(\\bar{X})=\\dfrac{10^2}{25}=4
                      \\]
                      となります。したがって、
                      \\[
                        \\bar{X}\\sim N(50,2^2)
                      \\]
                      です。ここで \\(\\bar{X}=54\\) を標準化すると、
                      \\[
                        Z=\\dfrac{54-50}{2}=2
                      \\]
                      であるから、
                      \\[
                        \\begin{aligned}
                        P(\\bar{X}\\geq 54)
                        &=P(Z\\geq 2)\\\\
                        &=1-P(Z\\leq 2)\\\\
                        &=1-0.9772\\\\
                        &=0.0228
                        \\end{aligned}
                      \\]
                      です。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 正しい</b>：\\(P(Z\\geq 2)=1-0.9772=0.0228\\) です。<br>
                      ・<b>② 誤り</b>：\\(0.1587\\) は \\(P(Z\\geq 1)\\) に対応する値であり、標本平均の標準誤差を正しく用いていません。<br>
                      ・<b>③ 誤り</b>：\\(0.4772\\) は \\(P(0\\leq Z\\leq 2)\\) に対応する値であり、本問で求める上側確率ではありません。<br>
                      ・<b>④ 誤り</b>：\\(0.9772\\) は \\(P(Z\\leq 2)\\) であり、本問ではその補確率を求める必要があります。
                    `
                }
            ]
        },
        {
            id: 14,
            title: "歪度",
            stem: `
              分布の形を表す指標の一つとして、歪度を考える。確率変数 \\(X\\) の平均を \\(\\mu\\)、標準偏差を \\(\\sigma\\) とすると、歪度は一般に
              \\[
                \\gamma_1=E\\left[\\left(\\dfrac{X-\\mu}{\\sigma}\\right)^3\\right]
              \\]
              で定義される。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 21,
                    question: `
                      分布の歪度に関する次の（ア）〜（ウ）の記述を考える。<br><br>
                      <b>（ア）</b> 分布の右側の裾が左側より長い場合、歪度は正の値をとる。<br><br>
                      <b>（イ）</b> 分布の平均が0以上であれば、歪度は正の値をとる。<br><br>
                      <b>（ウ）</b> 分布の中央値が0であれば、歪度は0である。<br><br>
                      正しいものをすべて選んだ組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
                      <div class='overflow-x-auto mt-4'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-2'></th>
                              <th class='border border-slate-300 p-2'>（ア）</th>
                              <th class='border border-slate-300 p-2'>（イ）</th>
                              <th class='border border-slate-300 p-2'>（ウ）</th>
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
                              <td class='border border-slate-300 p-2'></td>
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
                    answer: "①",
                    explanation: `
                      正解は①です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      確率変数 \\(X\\) の平均を \\(\\mu\\)、標準偏差を \\(\\sigma\\) とすると、歪度は一般に
                      \\[
                        \\gamma_1=E\\left[\\left(\\dfrac{X-\\mu}{\\sigma}\\right)^3\\right]
                      \\]
                      で定義されます。歪度は、分布が左右対称な形からどの程度、どちらの方向に歪んでいるかを表す指標です。右側の裾が長い分布では歪度は正、左側の裾が長い分布では歪度は負、左右対称な分布では歪度は0となります。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      <b>（ア）</b> 分布の右側の裾が左側より長い場合、分布は右に歪んでいるといい、歪度は正の値をとります。したがって、（ア）は正しいです。<br><br>
                      <b>（イ）</b> 歪度は分布の位置ではなく、分布の形の非対称性を表します。例えば、確率変数 \\(X\\) に定数 \\(a\\) を加えて \\(Y=X+a\\) としても、分布全体が平行移動するだけであり、歪度は変化しません。したがって、平均が0以上であることから歪度が正であるとはいえません。よって、（イ）は誤りです。<br><br>
                      <b>（ウ）</b> 中央値が0であるという情報は、分布の位置に関する情報であり、分布が左右対称であることを意味しません。中央値が0であっても、右側または左側に長い裾を持つ分布は存在します。したがって、（ウ）は誤りです。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 正しい</b>：正しい記述は（ア）のみです。<br>
                      ・<b>② 誤り</b>：（イ）は、平均の位置と歪度の符号を混同しています。<br>
                      ・<b>③ 誤り</b>：（ウ）は、中央値が0であることから左右対称性を結論しているため誤りです。<br>
                      ・<b>④ 誤り</b>：（イ）と（ウ）が誤りです。
                    `
                },
                {
                    id: 2,
                    qNumber: 22,
                    question: `
                      次の（ア）〜（ウ）の確率分布を考える。<br><br>
                      <b>（ア）</b> 連続一様分布<br><br>
                      <b>（イ）</b> \\(t\\) 分布<br><br>
                      <b>（ウ）</b> ポアソン分布<br><br>
                      歪度が0である分布をすべて選んだ組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
                      <div class='overflow-x-auto mt-4'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-2'></th>
                              <th class='border border-slate-300 p-2'>（ア）</th>
                              <th class='border border-slate-300 p-2'>（イ）</th>
                              <th class='border border-slate-300 p-2'>（ウ）</th>
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
                              <td class='border border-slate-300 p-2'></td>
                              <td class='border border-slate-300 p-2'></td>
                              <td class='border border-slate-300 p-2'>○</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                              <td class='border border-slate-300 p-2'>○</td>
                              <td class='border border-slate-300 p-2'>○</td>
                              <td class='border border-slate-300 p-2'></td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                              <td class='border border-slate-300 p-2'></td>
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
                      歪度は分布の左右非対称性を表す指標です。左右対称な分布では、平均を中心とする3次の偏差が互いに打ち消し合うため、歪度は0となります。一方、右側の裾が長い分布では歪度は正となります。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      <b>（ア）連続一様分布</b> 連続一様分布は、その区間の中央を中心として左右対称な形をしています。したがって、歪度は0です。<br><br>
                      <b>（イ）\\(t\\) 分布</b> \\(t\\) 分布は0を中心として左右対称な分布です。したがって、歪度は0です。<br><br>
                      <b>（ウ）ポアソン分布</b> パラメータを \\(\\lambda\\gt 0\\) とするポアソン分布の歪度は
                      \\[
                        \\dfrac{1}{\\sqrt{\\lambda}}
                      \\]
                      であり、正の値をとります。\\(\\lambda\\) が大きくなると分布は左右対称な形に近づき、歪度も0に近づきますが、有限の \\(\\lambda\\gt 0\\) に対して歪度が0になるわけではありません。したがって、歪度が0であるのは（ア）と（イ）です。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：連続一様分布だけでなく、\\(t\\) 分布も左右対称であり、歪度は0です。<br>
                      ・<b>② 誤り</b>：ポアソン分布の歪度は正であり、0ではありません。<br>
                      ・<b>③ 正しい</b>：連続一様分布と \\(t\\) 分布はいずれも左右対称であり、歪度は0です。<br>
                      ・<b>④ 誤り</b>：ポアソン分布の歪度は正であり、0ではありません。
                    `
                }
            ]
        },
        {
            id: 15,
            title: "不偏性と一致性",
            stem: `
              母平均 \\(\\mu\\)、母分散 \\(\\sigma^2\\)（\\(0\\lt\\sigma^2\\lt\\infty\\)）の母集団から得られた無作為標本を
              \\[
                X_1,X_2,\\ldots,X_n
              \\]
              とする。<br><br>
              母平均 \\(\\mu\\) の推定量として、次の3つを考える。
              \\[
                T_1=\\bar{X},\\qquad T_2=\\dfrac{n}{n+1}\\bar{X},\\qquad T_3=X_1
              \\]
              ただし、
              \\[
                \\bar{X}=\\dfrac{1}{n}\\sum_{i=1}^n X_i
              \\]
              である。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 23,
                    question: `
                      \\(T_1,T_2,T_3\\) の不偏性と一致性について述べたものとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      <div class='overflow-x-auto'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-1'></th>
                              <th class='border border-slate-300 p-2'>\\(T_1\\)</th>
                              <th class='border border-slate-300 p-2'>\\(T_2\\)</th>
                              <th class='border border-slate-300 p-2'>\\(T_3\\)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
                              <td class='border border-slate-300 p-2'>不偏かつ一致</td>
                              <td class='border border-slate-300 p-2'>一致のみ</td>
                              <td class='border border-slate-300 p-2'>不偏のみ</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
                              <td class='border border-slate-300 p-2'>不偏かつ一致</td>
                              <td class='border border-slate-300 p-2'>不偏かつ一致</td>
                              <td class='border border-slate-300 p-2'>不偏のみ</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
                              <td class='border border-slate-300 p-2'>不偏かつ一致</td>
                              <td class='border border-slate-300 p-2'>どちらでもない</td>
                              <td class='border border-slate-300 p-2'>不偏かつ一致</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
                              <td class='border border-slate-300 p-2'>不偏のみ</td>
                              <td class='border border-slate-300 p-2'>一致のみ</td>
                              <td class='border border-slate-300 p-2'>一致のみ</td>
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
                      母数 \\(\\theta\\) の推定量 \\(T_n\\) が \\(E(T_n)=\\theta\\) を満たすとき、\\(T_n\\) を \\(\\theta\\) の<b>不偏推定量</b>といいます。一方、\\(n\\to\\infty\\) のとき、任意の \\(\\varepsilon\\gt 0\\) に対して
                      \\[
                        P(|T_n-\\theta|\\gt\\varepsilon)\\to 0
                      \\]
                      となる、すなわち \\(T_n\\xrightarrow{p}\\theta\\) となるとき、\\(T_n\\) を \\(\\theta\\) の<b>一致推定量</b>といいます。不偏性は各標本サイズにおける期待値についての性質であり、一致性は標本サイズを大きくしたときの推定量の性質です。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      まず、\\(T_1=\\bar{X}\\) について、\\(E(T_1)=E(\\bar{X})=\\mu\\) なので、\\(T_1\\) は不偏推定量です。また、\\(V(\\bar{X})=\\sigma^2/n\\to 0\\) であり、大数の法則から \\(\\bar{X}\\xrightarrow{p}\\mu\\) となるため、\\(T_1\\) は一致推定量でもあります。<br>
                      次に、\\(T_2=\\dfrac{n}{n+1}\\bar{X}\\) について、
                      \\[
                        E(T_2)=\\dfrac{n}{n+1}E(\\bar{X})=\\dfrac{n}{n+1}\\mu
                      \\]
                      です。有限の \\(n\\) では一般に \\(\\dfrac{n}{n+1}\\mu\\neq\\mu\\) なので、\\(T_2\\) は不偏推定量ではありません。一方、\\(\\dfrac{n}{n+1}\\to 1\\) かつ \\(\\bar{X}\\xrightarrow{p}\\mu\\) であるから、
                      \\[
                        T_2=\\dfrac{n}{n+1}\\bar{X}\\xrightarrow{p}\\mu
                      \\]
                      です。したがって、\\(T_2\\) は一致推定量です。<br>
                      最後に、\\(T_3=X_1\\) について、\\(E(T_3)=E(X_1)=\\mu\\) なので、不偏推定量です。しかし、標本サイズ \\(n\\) を大きくしても \\(T_3\\) は常に \\(X_1\\) だけを用いており、\\(V(T_3)=V(X_1)=\\sigma^2\\) のままです。したがって、一般には \\(X_1\\xrightarrow{p}\\mu\\) とはならず、\\(T_3\\) は一致推定量ではありません。<br>
                      以上より、
                      <div class='overflow-x-auto mt-3 mb-3'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-2'>推定量</th>
                              <th class='border border-slate-300 p-2'>不偏性</th>
                              <th class='border border-slate-300 p-2'>一致性</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class='border border-slate-300 p-2'>\\(T_1=\\bar{X}\\)</td>
                              <td class='border border-slate-300 p-2'>○</td>
                              <td class='border border-slate-300 p-2'>○</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-2'>\\(T_2=\\dfrac{n}{n+1}\\bar{X}\\)</td>
                              <td class='border border-slate-300 p-2'>×</td>
                              <td class='border border-slate-300 p-2'>○</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-2'>\\(T_3=X_1\\)</td>
                              <td class='border border-slate-300 p-2'>○</td>
                              <td class='border border-slate-300 p-2'>×</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      となります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 正しい</b>：\\(T_1\\) は不偏かつ一致、\\(T_2\\) は不偏ではないが一致、\\(T_3\\) は不偏だが一致ではありません。<br>
                      ・<b>② 誤り</b>：\\(T_2\\) について、\\(E(T_2)=\\dfrac{n}{n+1}\\mu\\) であるため、一般には不偏推定量ではありません。<br>
                      ・<b>③ 誤り</b>：\\(T_2\\) は一致推定量である一方、\\(T_3=X_1\\) は一般には一致推定量ではありません。<br>
                      ・<b>④ 誤り</b>：\\(T_3=X_1\\) について \\(E(X_1)=\\mu\\) であるため、\\(T_3\\) も不偏推定量です。また、\\(T_3\\) は一般には一致推定量ではありません。
                    `
                }
            ]
        },
        {
            id: 16,
            title: "母平均の区間推定",
            stem: `
              正規母集団 \\(N(\\mu,\\sigma^2)\\) から大きさ \\(n=16\\) の無作為標本
              \\[
                X_1,X_2,\\ldots,X_{16}
              \\]
              を得た。<br><br>
              この標本について、標本平均および不偏分散はそれぞれ
              \\[
                \\bar{X}=50,\\qquad S^2=64
              \\]
              であった。ただし、母分散 \\(\\sigma^2\\) は未知である。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 24,
                    question: `
                      このとき、不偏分散 \\(S^2\\) と母分散 \\(\\sigma^2\\) について成り立つ関係として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ①
                      \\[
                        \\dfrac{16S^2}{\\sigma^2}\\sim\\chi^2_{16}
                      \\]
                      ②
                      \\[
                        \\dfrac{15S^2}{\\sigma^2}\\sim\\chi^2_{15}
                      \\]
                      ③
                      \\[
                        \\dfrac{15S^2}{\\sigma^2}\\sim t_{15}
                      \\]
                      ④
                      \\[
                        \\dfrac{16S^2}{\\sigma^2}\\sim t_{16}
                      \\]
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "②",
                    explanation: `
                      正解は②です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      正規母集団 \\(N(\\mu,\\sigma^2)\\) から大きさ \\(n\\) の無作為標本を取り、不偏分散を
                      \\[
                        S^2=\\dfrac{1}{n-1}\\sum_{i=1}^n(X_i-\\bar{X})^2
                      \\]
                      とすると、
                      \\[
                        \\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2_{n-1}
                      \\]
                      が成り立ちます。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      本問では \\(n=16\\) なので \\(n-1=15\\) です。したがって、
                      \\[
                        \\dfrac{15S^2}{\\sigma^2}\\sim\\chi^2_{15}
                      \\]
                      となります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：不偏分散を用いる場合、自由度は \\(n\\) ではなく \\(n-1\\) です。<br>
                      ・<b>② 正しい</b>：\\(\\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2_{n-1}\\) より、自由度15のカイ二乗分布に従います。<br>
                      ・<b>③ 誤り</b>：標本分散から作られるこの統計量が従うのは \\(t\\) 分布ではなくカイ二乗分布です。<br>
                      ・<b>④ 誤り</b>：分布の種類と自由度のいずれも正しくありません。
                    `
                },
                {
                    id: 2,
                    qNumber: 25,
                    question: `
                      母平均 \\(\\mu\\) の95%信頼区間として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ただし、自由度15の \\(t\\) 分布について、上側確率2.5%となる点を
                      \\[
                        t_{0.025,15}=2.131
                      \\]
                      とする。<br>
                      ①
                      \\[
                        46.08\\leq\\mu\\leq 53.92
                      \\]
                      ②
                      \\[
                        47.87\\leq\\mu\\leq 52.13
                      \\]
                      ③
                      \\[
                        45.74\\leq\\mu\\leq 54.26
                      \\]
                      ④
                      \\[
                        41.48\\leq\\mu\\leq 58.52
                      \\]
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "③",
                    explanation: `
                      正解は③です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      正規母集団から無作為標本を取り、母分散 \\(\\sigma^2\\) が未知の場合、
                      \\[
                        \\dfrac{\\bar{X}-\\mu}{S/\\sqrt{n}}\\sim t_{n-1}
                      \\]
                      が成り立ちます。したがって、母平均 \\(\\mu\\) の95%信頼区間は、
                      \\[
                        \\bar{X}\\pm t_{0.025,n-1}\\dfrac{S}{\\sqrt{n}}
                      \\]
                      で求められます。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      本問では \\(S^2=64\\) なので \\(S=8\\) です。また \\(n=16\\) であるから、標準誤差は
                      \\[
                        \\dfrac{S}{\\sqrt{n}}=\\dfrac{8}{\\sqrt{16}}=\\dfrac{8}{4}=2
                      \\]
                      となります。よって、95%信頼区間は、
                      \\[
                        \\begin{aligned}
                        \\bar{X}\\pm t_{0.025,15}\\dfrac{S}{\\sqrt{n}}
                        &=50\\pm 2.131\\times 2\\\\
                        &=50\\pm 4.262
                        \\end{aligned}
                      \\]
                      です。したがって、
                      \\[
                        45.738\\leq\\mu\\leq 54.262
                      \\]
                      であり、小数第2位まで表すと
                      \\[
                        \\boxed{45.74\\leq\\mu\\leq 54.26}
                      \\]
                      となります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：\\(t\\) 分布ではなく標準正規分布の \\(1.96\\) を用いて、\\(50\\pm 1.96\\times 2\\) とした場合に得られる区間です。<br>
                      ・<b>② 誤り</b>：標準誤差を1として計算した場合に得られる区間であり、\\(S=8\\)、\\(n=16\\) から標準誤差は2となります。<br>
                      ・<b>③ 正しい</b>：\\(50\\pm 2.131\\times 2\\) より、約 \\([45.74,54.26]\\) となります。<br>
                      ・<b>④ 誤り</b>：標準誤差の計算で \\(\\sqrt{n}\\) による調整を正しく行っていません。
                    `
                },
                {
                    id: 3,
                    qNumber: 26,
                    question: `
                      問15-2で求めた95%信頼区間の解釈として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① 今回得られた区間 \\(45.74\\leq\\mu\\leq 54.26\\) に、母平均 \\(\\mu\\) が含まれる確率は95%である。<br><br>
                      ② 母集団から新たに1個の観測値を取り出したとき、その観測値が \\(45.74\\) 以上 \\(54.26\\) 以下となる確率は95%である。<br><br>
                      ③ 同じ母集団から標本を繰り返し抽出して同じ方法で信頼区間を構成すると、得られる信頼区間の幅の95%が \\(8.52\\) 以下となる。<br><br>
                      ④ 同じ母集団から標本を繰り返し抽出し、同じ方法で95%信頼区間を構成すると、そのようにして得られる区間のおよそ95%が真の母平均 \\(\\mu\\) を含む。
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "④",
                    explanation: `
                      正解は④です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      頻度論における95%信頼区間の「95%」は、母数そのものに確率を与えたものではなく、<b>信頼区間を構成する方法の被覆確率</b>を表しています。同じ標本抽出と区間推定を多数回繰り返したとき、その方法によって構成される区間の約95%が真の母数を含む、という意味です。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      母平均 \\(\\mu\\) は未知ではあるが、頻度論では固定された値として扱います。一方、標本 \\(X_1,\\ldots,X_n\\) は標本抽出のたびに変化するため、
                      \\[
                        \\bar{X}\\pm t_{0.025,n-1}\\dfrac{S}{\\sqrt{n}}
                      \\]
                      という信頼区間の両端が標本ごとに変化します。この区間構成を繰り返したとき、その約95%が固定された真の母平均 \\(\\mu\\) を含むように作られています。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：頻度論では、標本を観測して区間が確定した後に、固定された母平均 \\(\\mu\\) がその区間に入る確率を95%と解釈するわけではありません。<br>
                      ・<b>② 誤り</b>：信頼区間は母平均 \\(\\mu\\) を推定するための区間であり、個々の観測値が入る範囲を示すものではありません。<br>
                      ・<b>③ 誤り</b>：95%という値は信頼区間の幅に関する確率を意味するものではありません。<br>
                      ・<b>④ 正しい</b>：同じ方法で信頼区間を繰り返し構成した場合、その約95%が真の母平均 \\(\\mu\\) を含むというのが95%信頼区間の頻度論的な解釈です。
                    `
                }
            ]
        },
        {
            id: 17,
            title: "母比率の検定",
            stem: `
              ある製品について、従来、購入を希望する人の割合は40%であるとされていた。<br><br>
              この割合に変化が生じているかを調べるため、無作為に100人を抽出して調査したところ、50人がこの製品の購入を希望した。<br><br>
              母比率を \\(p\\) とし、有意水準5%で、
              \\[
                H_0:p=0.40
              \\]
              \\[
                H_1:p\\neq 0.40
              \\]
              として検定を行う。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 27,
                    question: `
                      標本比率を \\(\\hat{p}\\)、標本サイズを \\(n\\)、帰無仮説で仮定する母比率を \\(p_0\\) とする。<br><br>
                      この検定で用いる検定統計量 \\(Z\\) として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ①
                      \\[
                        Z=\\dfrac{\\hat{p}-p_0}{\\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}}
                      \\]
                      ②
                      \\[
                        Z=\\dfrac{\\hat{p}-p_0}{\\sqrt{\\dfrac{p_0(1-p_0)}{n}}}
                      \\]
                      ③
                      \\[
                        Z=\\dfrac{\\hat{p}-p_0}{\\sqrt{p_0(1-p_0)}}
                      \\]
                      ④
                      \\[
                        Z=\\dfrac{\\hat{p}-p_0}{\\sqrt{\\dfrac{p_0(1-p_0)}{n-1}}}
                      \\]
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "②",
                    explanation: `
                      正解は②です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      帰無仮説 \\(H_0:p=p_0\\) のもとで、標本サイズが十分に大きいとき、標本比率 \\(\\hat{p}\\) は近似的に
                      \\[
                        \\hat{p}\\sim N\\left(p_0,\\dfrac{p_0(1-p_0)}{n}\\right)
                      \\]
                      に従います。したがって、標準化した検定統計量は、
                      \\[
                        Z=\\dfrac{\\hat{p}-p_0}{\\sqrt{\\dfrac{p_0(1-p_0)}{n}}}
                      \\]
                      となり、帰無仮説のもとで近似的に標準正規分布 \\(N(0,1)\\) に従います。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      本問では、\\(\\hat{p}=50/100=0.50\\)、\\(p_0=0.40\\)、\\(n=100\\) です。したがって、
                      \\[
                        \\begin{aligned}
                        Z
                        &=\\dfrac{0.50-0.40}{\\sqrt{\\dfrac{0.40(1-0.40)}{100}}}\\\\
                        &=\\dfrac{0.10}{\\sqrt{0.0024}}\\\\
                        &\\approx\\dfrac{0.10}{0.0490}\\\\
                        &\\approx 2.04
                        \\end{aligned}
                      \\]
                      です。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：帰無仮説 \\(H_0:p=p_0\\) のもとで検定統計量を構成するため、標準誤差には帰無仮説で仮定された \\(p_0\\) を用います。<br>
                      ・<b>② 正しい</b>：帰無仮説のもとでの標本比率の分散 \\(p_0(1-p_0)/n\\) を用いて標準化しています。<br>
                      ・<b>③ 誤り</b>：標本比率の分散には標本サイズ \\(n\\) が含まれ、標準誤差は \\(\\sqrt{p_0(1-p_0)/n}\\) です。<br>
                      ・<b>④ 誤り</b>：母比率の検定では、ここで \\(n-1\\) による自由度調整を行うものではありません。
                    `
                },
                {
                    id: 2,
                    qNumber: 28,
                    question: `
                      問16-1で得られた検定統計量は、
                      \\[
                        Z\\approx 2.04
                      \\]
                      であった。<br><br>
                      標準正規分布に従う確率変数を \\(Z_0\\) としたとき、
                      \\[
                        P(Z_0\\geq 2.04)=0.0207
                      \\]
                      であることを用いる。<br><br>
                      この検定のp値として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① \\(0.0207\\)<br><br>
                      ② \\(0.0414\\)<br><br>
                      ③ \\(0.0500\\)<br><br>
                      ④ \\(0.9586\\)
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "②",
                    explanation: `
                      正解は②です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      p値とは、帰無仮説が正しいと仮定したときに、観測された検定統計量と同程度以上に帰無仮説から離れた値が得られる確率です。本問の対立仮説は \\(H_1:p\\neq 0.40\\) であるため、<b>両側検定</b>を行います。標準正規分布は0を中心に対称であるため、観測された検定統計量が \\(z\\gt 0\\) の場合、両側検定のp値は
                      \\[
                        2P(Z_0\\geq z)
                      \\]
                      で求められます。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      本問では \\(Z\\approx 2.04\\) であり、\\(P(Z_0\\geq 2.04)=0.0207\\) が与えられています。両側検定なので、p値は
                      \\[
                        2P(Z_0\\geq 2.04)=2\\times 0.0207=0.0414
                      \\]
                      です。また、\\(0.0414\\lt 0.05\\) であるため、有意水準5%では帰無仮説 \\(H_0:p=0.40\\) を<b>棄却する</b>ことになります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：\\(0.0207\\) は \\(Z\\geq 2.04\\) となる片側の確率です。本問は両側検定なので、反対側の裾も考慮する必要があります。<br>
                      ・<b>② 正しい</b>：両側検定なので、\\(2\\times 0.0207=0.0414\\) がp値となります。<br>
                      ・<b>③ 誤り</b>：\\(0.05\\) は本問で設定された有意水準であり、p値そのものではありません。<br>
                      ・<b>④ 誤り</b>：\\(0.9586=1-0.0414\\) ですが、p値は帰無仮説のもとで観測値と同程度以上に極端な結果が得られる確率として求めます。
                    `
                }
            ]
        },
        {
            id: 18,
            title: "2標本の平均と分散の検定",
            stem: `
              互いに独立な2つの正規母集団
              \\[
                N(\\mu_X,\\sigma_X^2),\\qquad N(\\mu_Y,\\sigma_Y^2)
              \\]
              から、それぞれ独立に無作為標本を抽出したところ、次の結果を得た。
              <div class='overflow-x-auto mt-4 mb-4'>
                <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                  <thead>
                    <tr class='bg-slate-100'>
                      <th class='border border-slate-300 p-2'></th>
                      <th class='border border-slate-300 p-2'>標本サイズ</th>
                      <th class='border border-slate-300 p-2'>標本平均</th>
                      <th class='border border-slate-300 p-2'>不偏分散</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>標本X</td>
                      <td class='border border-slate-300 p-2'>\\(n_1=10\\)</td>
                      <td class='border border-slate-300 p-2'>\\(\\bar{X}=52\\)</td>
                      <td class='border border-slate-300 p-2'>\\(S_X^2=18\\)</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>標本Y</td>
                      <td class='border border-slate-300 p-2'>\\(n_2=10\\)</td>
                      <td class='border border-slate-300 p-2'>\\(\\bar{Y}=48\\)</td>
                      <td class='border border-slate-300 p-2'>\\(S_Y^2=14\\)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              以下では、必要に応じて2つの母集団の母分散が等しいと仮定する。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 29,
                    question: `
                      2つの母分散が等しく、\\(\\sigma_X^2=\\sigma_Y^2=\\sigma^2\\) であるとする。また、\\(H_0:\\mu_X=\\mu_Y\\) のもとで、プールした不偏分散を
                      \\[
                        S_p^2=\\dfrac{(n_1-1)S_X^2+(n_2-1)S_Y^2}{n_1+n_2-2}
                      \\]
                      とする。<br><br>
                      このとき、
                      \\[
                        Z=\\dfrac{\\bar{X}-\\bar{Y}}{\\sigma\\sqrt{\\dfrac{1}{n_1}+\\dfrac{1}{n_2}}}
                      \\]
                      および
                      \\[
                        Q=\\dfrac{(n_1+n_2-2)S_p^2}{\\sigma^2}
                      \\]
                      を考える。<br><br>
                      \\(Z\\)、\\(Q\\)、および
                      \\[
                        T=\\dfrac{\\bar{X}-\\bar{Y}}{S_p\\sqrt{\\dfrac{1}{n_1}+\\dfrac{1}{n_2}}}
                      \\]
                      がそれぞれ従う分布の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      <div class='overflow-x-auto'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-1'></th>
                              <th class='border border-slate-300 p-2'>\\(Z\\)</th>
                              <th class='border border-slate-300 p-2'>\\(Q\\)</th>
                              <th class='border border-slate-300 p-2'>\\(T\\)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
                              <td class='border border-slate-300 p-2'>標準正規分布</td>
                              <td class='border border-slate-300 p-2'>カイ二乗分布</td>
                              <td class='border border-slate-300 p-2'>\\(t\\) 分布</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
                              <td class='border border-slate-300 p-2'>標準正規分布</td>
                              <td class='border border-slate-300 p-2'>\\(t\\) 分布</td>
                              <td class='border border-slate-300 p-2'>カイ二乗分布</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
                              <td class='border border-slate-300 p-2'>\\(t\\) 分布</td>
                              <td class='border border-slate-300 p-2'>カイ二乗分布</td>
                              <td class='border border-slate-300 p-2'>標準正規分布</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
                              <td class='border border-slate-300 p-2'>カイ二乗分布</td>
                              <td class='border border-slate-300 p-2'>標準正規分布</td>
                              <td class='border border-slate-300 p-2'>\\(F\\) 分布</td>
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
                      2つの独立な正規母集団の母分散が共通して \\(\\sigma^2\\) であり、帰無仮説 \\(H_0:\\mu_X=\\mu_Y\\) が成り立つとき、
                      \\[
                        \\bar{X}-\\bar{Y}\\sim N\\left(0,\\,\\sigma^2\\left(\\dfrac{1}{n_1}+\\dfrac{1}{n_2}\\right)\\right)
                      \\]
                      です。したがって、
                      \\[
                        Z=\\dfrac{\\bar{X}-\\bar{Y}}{\\sigma\\sqrt{\\dfrac{1}{n_1}+\\dfrac{1}{n_2}}}\\sim N(0,1)
                      \\]
                      です。また、プールした不偏分散について、
                      \\[
                        Q=\\dfrac{(n_1+n_2-2)S_p^2}{\\sigma^2}\\sim\\chi^2_{n_1+n_2-2}
                      \\]
                      が成り立ちます。さらに、正規母集団では \\(Z\\) と \\(Q\\) は独立であり、
                      \\[
                        \\dfrac{Z}{\\sqrt{Q/(n_1+n_2-2)}}
                      \\]
                      は自由度 \\(n_1+n_2-2\\) の \\(t\\) 分布に従います。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      本問では \\(n_1=n_2=10\\) なので \\(n_1+n_2-2=18\\) です。したがって、\\(Z\\sim N(0,1)\\)、\\(Q\\sim\\chi^2_{18}\\)、そして \\(T\\sim t_{18}\\) です。つまり、\\(Z\\) は標準正規分布、\\(Q\\) はカイ二乗分布、\\(T\\) は \\(t\\) 分布に従います。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 正しい</b>：\\(Z\\) は標準正規分布、\\(Q\\) はカイ二乗分布、これらから構成される \\(T\\) は \\(t\\) 分布に従います。<br>
                      ・<b>② 誤り</b>：分散から構成される \\(Q\\) は \\(t\\) 分布ではなくカイ二乗分布に従います。<br>
                      ・<b>③ 誤り</b>：母分散 \\(\\sigma^2\\) を用いて標準化した \\(Z\\) は標準正規分布に従い、母分散を標本から推定した結果として \\(T\\) が \\(t\\) 分布に従います。<br>
                      ・<b>④ 誤り</b>：\\(Z\\)、\\(Q\\)、\\(T\\) のいずれについても分布の対応が正しくありません。
                    `
                },
                {
                    id: 2,
                    qNumber: 30,
                    question: `
                      2つの母集団の母分散が等しいと仮定する。母平均について \\(H_0:\\mu_X=\\mu_Y\\) を検定するとき、検定統計量
                      \\[
                        T=\\dfrac{\\bar{X}-\\bar{Y}}{S_p\\sqrt{\\dfrac{1}{n_1}+\\dfrac{1}{n_2}}}
                      \\]
                      の値として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① \\(1.12\\)<br><br>
                      ② \\(1.79\\)<br><br>
                      ③ \\(2.24\\)<br><br>
                      ④ \\(2.83\\)
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "③",
                    explanation: `
                      正解は③です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      2つの母分散が等しい場合、共通の母分散を推定するために、プールした不偏分散
                      \\[
                        S_p^2=\\dfrac{(n_1-1)S_X^2+(n_2-1)S_Y^2}{n_1+n_2-2}
                      \\]
                      を用います。このとき、帰無仮説 \\(H_0:\\mu_X=\\mu_Y\\) のもとで、
                      \\[
                        T=\\dfrac{\\bar{X}-\\bar{Y}}{S_p\\sqrt{\\dfrac{1}{n_1}+\\dfrac{1}{n_2}}}
                      \\]
                      は自由度 \\(n_1+n_2-2\\) の \\(t\\) 分布に従います。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      まず、プールした不偏分散を求めます。
                      \\[
                        \\begin{aligned}
                        S_p^2
                        &=\\dfrac{(10-1)\\times 18+(10-1)\\times 14}{10+10-2}\\\\
                        &=\\dfrac{9\\times 18+9\\times 14}{18}\\\\
                        &=\\dfrac{162+126}{18}\\\\
                        &=16
                        \\end{aligned}
                      \\]
                      よって \\(S_p=4\\) です。したがって、
                      \\[
                        \\begin{aligned}
                        T
                        &=\\dfrac{52-48}{4\\sqrt{\\dfrac{1}{10}+\\dfrac{1}{10}}}\\\\
                        &=\\dfrac{4}{4\\sqrt{0.2}}\\\\
                        &=\\dfrac{1}{\\sqrt{0.2}}\\\\
                        &=\\sqrt{5}\\\\
                        &\\approx 2.24
                        \\end{aligned}
                      \\]
                      です。したがって、検定統計量は
                      \\[
                        \\boxed{T\\approx 2.24}
                      \\]
                      となります。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：標本平均の差と標準誤差を正しく用いた値ではありません。<br>
                      ・<b>② 誤り</b>：プールした分散および標本サイズを正しく反映した値ではありません。<br>
                      ・<b>③ 正しい</b>：\\(S_p^2=16\\) より、\\(T=\\sqrt{5}\\approx 2.24\\) です。<br>
                      ・<b>④ 誤り</b>：2つの標本平均の差の標準誤差を正しく計算した値ではありません。
                    `
                },
                {
                    id: 3,
                    qNumber: 31,
                    question: `
                      次に、2つの正規母集団の母分散について \\(H_0:\\sigma_X^2=\\sigma_Y^2\\) を検定する。検定統計量を
                      \\[
                        F=\\dfrac{S_X^2}{S_Y^2}
                      \\]
                      とするとき、帰無仮説のもとで \\(F\\) が従う分布と、今回得られた \\(F\\) の値の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      <div class='overflow-x-auto'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-1'></th>
                              <th class='border border-slate-300 p-2'>分布</th>
                              <th class='border border-slate-300 p-2'>\\(F\\) の値</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
                              <td class='border border-slate-300 p-2'>\\(F(10,10)\\)</td>
                              <td class='border border-slate-300 p-2'>\\(1.29\\)</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
                              <td class='border border-slate-300 p-2'>\\(F(9,9)\\)</td>
                              <td class='border border-slate-300 p-2'>\\(1.13\\)</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
                              <td class='border border-slate-300 p-2'>\\(F(18,18)\\)</td>
                              <td class='border border-slate-300 p-2'>\\(1.29\\)</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
                              <td class='border border-slate-300 p-2'>\\(F(9,9)\\)</td>
                              <td class='border border-slate-300 p-2'>\\(1.29\\)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "④",
                    explanation: `
                      正解は④です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      正規母集団から得られた不偏分散について、
                      \\[
                        \\dfrac{(n_1-1)S_X^2}{\\sigma_X^2}\\sim\\chi^2_{n_1-1},\\qquad
                        \\dfrac{(n_2-1)S_Y^2}{\\sigma_Y^2}\\sim\\chi^2_{n_2-1}
                      \\]
                      が成り立ちます。2つの標本が独立であり、帰無仮説 \\(H_0:\\sigma_X^2=\\sigma_Y^2\\) が成り立つとき、
                      \\[
                        F=\\dfrac{S_X^2}{S_Y^2}
                      \\]
                      は、自由度 \\((n_1-1,n_2-1)\\) の \\(F\\) 分布に従います。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      本問では \\(n_1=n_2=10\\) なので \\(n_1-1=n_2-1=9\\) です。したがって、帰無仮説のもとで \\(F\\sim F(9,9)\\) となります。また、\\(S_X^2=18\\)、\\(S_Y^2=14\\) なので、
                      \\[
                        F=\\dfrac{18}{14}=\\dfrac{9}{7}\\approx 1.29
                      \\]
                      です。よって、分布は \\(F(9,9)\\)、得られた値は約 \\(1.29\\) です。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：\\(F\\) 値は正しいですが、\\(F\\) 分布の自由度は標本サイズそのものではなく、それぞれ \\(n_1-1\\)、\\(n_2-1\\) です。<br>
                      ・<b>② 誤り</b>：自由度は正しいですが、分散比は \\(18/14\\approx 1.29\\) であり、1.13ではありません。<br>
                      ・<b>③ 誤り</b>：\\(18\\) は2標本t検定における自由度 \\(n_1+n_2-2\\) であり、分散比の \\(F\\) 分布の自由度ではありません。<br>
                      ・<b>④ 正しい</b>：\\(F=S_X^2/S_Y^2=18/14\\approx 1.29\\) であり、帰無仮説のもとで \\(F(9,9)\\) に従います。
                    `
                }
            ]
        },
        {
            id: 19,
            title: "カイ二乗適合度検定",
            stem: `
              ある6面サイコロを120回振ったところ、各目が出た回数は次のようになった。
              <div class='overflow-x-auto mt-4 mb-4'>
                <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                  <thead>
                    <tr class='bg-slate-100'>
                      <th class='border border-slate-300 p-2'>出た目</th>
                      <th class='border border-slate-300 p-2'>1</th>
                      <th class='border border-slate-300 p-2'>2</th>
                      <th class='border border-slate-300 p-2'>3</th>
                      <th class='border border-slate-300 p-2'>4</th>
                      <th class='border border-slate-300 p-2'>5</th>
                      <th class='border border-slate-300 p-2'>6</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>観測度数</td>
                      <td class='border border-slate-300 p-2'>14</td>
                      <td class='border border-slate-300 p-2'>18</td>
                      <td class='border border-slate-300 p-2'>20</td>
                      <td class='border border-slate-300 p-2'>22</td>
                      <td class='border border-slate-300 p-2'>21</td>
                      <td class='border border-slate-300 p-2'>25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              このサイコロの各目が等しい確率で出るかを調べるため、
              \\[
                H_0:\\text{各目が出る確率はすべて }\\dfrac{1}{6}
              \\]
              として、有意水準5%でカイ二乗適合度検定を行う。<br><br>
              自由度5のカイ二乗分布の上側5%点は、
              \\[
                \\chi^2_{0.05}(5)=11.07
              \\]
              である。
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 32,
                    question: `
                      検定統計量の値と検定結果の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      <div class='overflow-x-auto'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-1'></th>
                              <th class='border border-slate-300 p-2'>検定統計量</th>
                              <th class='border border-slate-300 p-2'>検定結果</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
                              <td class='border border-slate-300 p-2'>\\(\\chi^2=3.50\\)</td>
                              <td class='border border-slate-300 p-2'>帰無仮説を棄却しない</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
                              <td class='border border-slate-300 p-2'>\\(\\chi^2=3.50\\)</td>
                              <td class='border border-slate-300 p-2'>帰無仮説を棄却する</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
                              <td class='border border-slate-300 p-2'>\\(\\chi^2=11.07\\)</td>
                              <td class='border border-slate-300 p-2'>帰無仮説を棄却しない</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
                              <td class='border border-slate-300 p-2'>\\(\\chi^2=11.07\\)</td>
                              <td class='border border-slate-300 p-2'>帰無仮説を棄却する</td>
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
                      カイ二乗適合度検定では、各カテゴリーについて、帰無仮説のもとでの期待度数と実際の観測度数との差を利用します。観測度数を \\(O_i\\)、期待度数を \\(E_i\\) とすると、検定統計量は
                      \\[
                        \\chi^2=\\sum_{i=1}^{k}\\dfrac{(O_i-E_i)^2}{E_i}
                      \\]
                      です。本問では6つの目があり、帰無仮説のもとで各目が出る確率はすべて \\(1/6\\) なので、各目の期待度数は
                      \\[
                        E_i=120\\times\\dfrac{1}{6}=20
                      \\]
                      となります。また、帰無仮説のもとで検定統計量は近似的に自由度 \\(6-1=5\\) のカイ二乗分布に従います。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      検定統計量を計算すると、
                      \\[
                        \\begin{aligned}
                        \\chi^2
                        &=\\dfrac{(14-20)^2}{20}+\\dfrac{(18-20)^2}{20}+\\dfrac{(20-20)^2}{20}\\\\
                        &\\quad+\\dfrac{(22-20)^2}{20}+\\dfrac{(21-20)^2}{20}+\\dfrac{(25-20)^2}{20}\\\\
                        &=\\dfrac{36+4+0+4+1+25}{20}\\\\
                        &=\\dfrac{70}{20}\\\\
                        &=3.50
                        \\end{aligned}
                      \\]
                      です。有意水準5%における棄却域は \\(\\chi^2\\gt 11.07\\) です。今回は \\(3.50\\lt 11.07\\) なので、帰無仮説は<b>棄却しない</b>です。したがって、この結果から「各目が等しい確率で出る」という帰無仮説に反する十分な証拠は得られていません。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 正しい</b>：検定統計量は \\(3.50\\) であり、5%点の \\(11.07\\) より小さいため、帰無仮説を棄却しません。<br>
                      ・<b>② 誤り</b>：検定統計量 \\(3.50\\) は棄却域に入っていないため、帰無仮説は棄却できません。<br>
                      ・<b>③ 誤り</b>：\\(11.07\\) は検定統計量ではなく、自由度5のカイ二乗分布における上側5%点です。<br>
                      ・<b>④ 誤り</b>：\\(11.07\\) は観測データから計算された検定統計量ではなく、棄却するかどうかを判断するための臨界値です。
                    `
                }
            ]
        },
        {
            id: 20,
            title: "線形回帰分析",
            stem: `
              30組のデータについて、目的変数を \\(y\\)、説明変数を \\(x_1,x_2\\) として、次の重回帰モデルを考える。
              \\[
                y_i=\\beta_0+\\beta_1x_{1i}+\\beta_2x_{2i}+\\varepsilon_i
              \\]
              Rを用いて最小二乗法による推定を行ったところ、次の結果を得た。
              <p class='mt-3 mb-2 text-sm text-slate-600'>Call: <code class='text-slate-800'>lm(formula = y ~ x1 + x2, data = dat)</code></p>
              <div class='overflow-x-auto mt-2 mb-4'>
                <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                  <thead>
                    <tr class='bg-slate-100'>
                      <th class='border border-slate-300 p-2'>Residuals</th>
                      <th class='border border-slate-300 p-2'>Min</th>
                      <th class='border border-slate-300 p-2'>1Q</th>
                      <th class='border border-slate-300 p-2'>Median</th>
                      <th class='border border-slate-300 p-2'>3Q</th>
                      <th class='border border-slate-300 p-2'>Max</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'></td>
                      <td class='border border-slate-300 p-2'>-8.214</td>
                      <td class='border border-slate-300 p-2'>-2.741</td>
                      <td class='border border-slate-300 p-2'>-0.315</td>
                      <td class='border border-slate-300 p-2'>2.486</td>
                      <td class='border border-slate-300 p-2'>9.102</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class='overflow-x-auto mb-4'>
                <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                  <thead>
                    <tr class='bg-slate-100'>
                      <th class='border border-slate-300 p-2'>Coefficients</th>
                      <th class='border border-slate-300 p-2'>Estimate</th>
                      <th class='border border-slate-300 p-2'>Std. Error</th>
                      <th class='border border-slate-300 p-2'>t value</th>
                      <th class='border border-slate-300 p-2'>Pr(&gt;|t|)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>(Intercept)</td>
                      <td class='border border-slate-300 p-2'>10.0000</td>
                      <td class='border border-slate-300 p-2'>4.0000</td>
                      <td class='border border-slate-300 p-2'>2.500</td>
                      <td class='border border-slate-300 p-2'>0.0188 *</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>\\(x_1\\)</td>
                      <td class='border border-slate-300 p-2'>2.4000</td>
                      <td class='border border-slate-300 p-2'>0.8000</td>
                      <td class='border border-slate-300 p-2'><b>(A)</b></td>
                      <td class='border border-slate-300 p-2'>0.0057 **</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50'>\\(x_2\\)</td>
                      <td class='border border-slate-300 p-2'>-1.2000</td>
                      <td class='border border-slate-300 p-2'>0.6000</td>
                      <td class='border border-slate-300 p-2'>-2.000</td>
                      <td class='border border-slate-300 p-2'>0.0556 .</td>
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
                      <td class='border border-slate-300 p-2'>4.80（自由度27）</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50 text-left'>Multiple R-squared</td>
                      <td class='border border-slate-300 p-2'>0.350</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50 text-left'>Adjusted R-squared</td>
                      <td class='border border-slate-300 p-2'>0.302</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50 text-left'>F-statistic</td>
                      <td class='border border-slate-300 p-2'>7.27（自由度2, 27）</td>
                    </tr>
                    <tr>
                      <td class='border border-slate-300 p-2 bg-slate-50 text-left'>F検定の p-value</td>
                      <td class='border border-slate-300 p-2'>0.0030</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            `,
            parts: [
                {
                    id: 1,
                    qNumber: 33,
                    question: `
                      上の出力の (A) に入る値として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
                      ① \\(0.300\\)<br>
                      ② \\(1.920\\)<br>
                      ③ \\(3.000\\)<br>
                      ④ \\(4.800\\)
                    `,
                    choices: ["①", "②", "③", "④"],
                    answer: "③",
                    explanation: `
                      正解は③です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      回帰係数 \\(\\beta_j\\) について、
                      \\[
                        H_0:\\beta_j=0
                      \\]
                      を検定するとき、\\(t\\) 統計量は
                      \\[
                        t=\\dfrac{\\hat\\beta_j}{\\operatorname{SE}(\\hat\\beta_j)}
                      \\]
                      で求めます。Rの回帰結果では、Estimate が回帰係数の推定値、Std. Error がその標準誤差、t value が両者から計算された \\(t\\) 値を表しています。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      \\(x_1\\) について、
                      \\[
                        \\hat\\beta_1=2.4000,\\qquad \\operatorname{SE}(\\hat\\beta_1)=0.8000
                      \\]
                      です。したがって、
                      \\[
                        t=\\dfrac{2.4000}{0.8000}=3.000
                      \\]
                      よって、(A) に入る値は \\(3.000\\) です。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：回帰係数を標準誤差で割った値ではありません。<br>
                      ・<b>② 誤り</b>：\\(x_1\\) の Estimate と Std. Error から得られる値ではありません。<br>
                      ・<b>③ 正しい</b>：\\(2.4000/0.8000=3.000\\) です。<br>
                      ・<b>④ 誤り</b>：\\(4.800\\) は出力に示された残差標準誤差であり、\\(x_1\\) の \\(t\\) 値ではありません。
                    `
                },
                {
                    id: 2,
                    qNumber: 34,
                    question: `
                      上の回帰分析の出力について、次の（ア）〜（ウ）の記述を考える。<br><br>
                      <b>（ア）</b> Adjusted R-squared: 0.302 は、説明変数の数などを考慮して調整された決定係数を表している。<br><br>
                      <b>（イ）</b> \\(x_1\\) の Pr(&gt;|t|) は、他の説明変数をモデルに含めた上で、
                      \\[
                        H_0:\\beta_1=0
                      \\]
                      を帰無仮説とする両側検定のp値を表している。<br><br>
                      <b>（ウ）</b> 推定された回帰式を用いると、\\(x_1=2,\\ x_2=3\\) のときの \\(y\\) の予測値は、
                      \\[
                        10+2.4\\times 2-1.2\\times 3=11.2
                      \\]
                      である。<br><br>
                      正しいものをすべて選んだ組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
                      <div class='overflow-x-auto mt-4'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-2'></th>
                              <th class='border border-slate-300 p-2'>（ア）</th>
                              <th class='border border-slate-300 p-2'>（イ）</th>
                              <th class='border border-slate-300 p-2'>（ウ）</th>
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
                              <td class='border border-slate-300 p-2'></td>
                              <td class='border border-slate-300 p-2'>○</td>
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
                    answer: "④",
                    explanation: `
                      正解は④です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      Rによる線形回帰の出力には、回帰係数だけでなく、標準誤差、\\(t\\) 値、p値、残差標準誤差、決定係数、自由度調整済み決定係数などが表示されます。推定された回帰式は
                      \\[
                        \\hat y=10+2.4x_1-1.2x_2
                      \\]
                      です。また、Pr(&gt;|t|) は各回帰係数について、係数が0であるという帰無仮説に対する両側検定のp値を表します。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      <b>（ア）</b> Multiple R-squared: 0.350 は通常の決定係数であり、\\(R^2=0.350\\) です。一方、Adjusted R-squared: 0.302 は、説明変数の数と標本サイズを考慮して調整された決定係数です。したがって、（ア）は正しいです。<br><br>
                      <b>（イ）</b> \\(x_1\\) のp値 0.0057 は、\\(H_0:\\beta_1=0\\) に対する両側検定のp値です。重回帰モデルなので、これは \\(x_2\\) もモデルに含めた上での \\(x_1\\) の回帰係数についての検定です。したがって、（イ）は正しいです。<br><br>
                      <b>（ウ）</b> \\(x_1=2,\\ x_2=3\\) を回帰式に代入すると、
                      \\[
                        \\begin{aligned}
                        \\hat y
                        &=10+2.4(2)-1.2(3)\\\\
                        &=10+4.8-3.6\\\\
                        &=11.2
                        \\end{aligned}
                      \\]
                      です。したがって、（ウ）も正しいです。よって、正しい記述は（ア）、（イ）、（ウ）のすべてです。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 誤り</b>：（ア）だけでなく、（イ）と（ウ）も正しいです。<br>
                      ・<b>② 誤り</b>：（ア）と（イ）に加えて、（ウ）も正しいです。<br>
                      ・<b>③ 誤り</b>：（イ）と（ウ）に加えて、（ア）も正しいです。<br>
                      ・<b>④ 正しい</b>：（ア）、（イ）、（ウ）はすべて正しいです。
                    `
                },
                {
                    id: 3,
                    qNumber: 35,
                    question: `
                      上の回帰分析について、次の（ア）〜（ウ）の記述を考える。<br><br>
                      <b>（ア）</b> \\(x_2\\) を一定としたとき、\\(x_1\\) が1単位大きい観測では、モデルによる \\(y\\) の予測値は2.4大きい。<br><br>
                      <b>（イ）</b> \\(x_1\\) のp値は0.05より小さいため、\\(x_1\\) を1単位増加させることによって \\(y\\) が2.4増加するという因果関係が示されたといえる。<br><br>
                      <b>（ウ）</b> 一般に、複数の回帰モデルを比較するときには、決定係数 \\(R^2\\) が最も大きいモデルを必ず採用すべきである。<br><br>
                      正しいものをすべて選んだ組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
                      <div class='overflow-x-auto mt-4'>
                        <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
                          <thead>
                            <tr class='bg-slate-100'>
                              <th class='border border-slate-300 p-2'></th>
                              <th class='border border-slate-300 p-2'>（ア）</th>
                              <th class='border border-slate-300 p-2'>（イ）</th>
                              <th class='border border-slate-300 p-2'>（ウ）</th>
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
                              <td class='border border-slate-300 p-2'></td>
                              <td class='border border-slate-300 p-2'>○</td>
                            </tr>
                            <tr>
                              <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                              <td class='border border-slate-300 p-2'></td>
                              <td class='border border-slate-300 p-2'>○</td>
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
                    answer: "①",
                    explanation: `
                      正解は①です。<br>
                      <解説><br>
                      <b>1. 基本概念・公式</b><br>
                      重回帰モデル
                      \\[
                        \\hat y=\\hat\\beta_0+\\hat\\beta_1x_1+\\hat\\beta_2x_2
                      \\]
                      において、\\(\\hat\\beta_1\\) は、他の説明変数を一定としたときの \\(x_1\\) と予測値 \\(\\hat y\\) の関係を表します。また、回帰係数のp値は、その係数が0であるという帰無仮説に対する統計的な検定に用いられますが、それだけで因果関係が示されるわけではありません。決定係数 \\(R^2\\) は、モデルが目的変数の変動をどの程度説明しているかを表す指標ですが、モデル選択は \\(R^2\\) の大小だけで決めるものではありません。<br><br>
                      <b>2. 計算・判定プロセス</b><br>
                      <b>（ア）</b> \\(x_1\\) の推定された回帰係数は \\(\\hat\\beta_1=2.4\\) です。したがって、\\(x_2\\) を一定としたとき、\\(x_1\\) が1単位大きい観測では、モデルによる \\(y\\) の予測値は2.4大きいです。よって、（ア）は正しいです。<br><br>
                      <b>（イ）</b> \\(x_1\\) のp値は \\(0.0057\\lt 0.05\\) なので、5%水準では \\(H_0:\\beta_1=0\\) を棄却します。しかし、これは回帰モデルにおいて \\(x_1\\) の係数が0であるという仮説に対する結果であり、\\(x_1\\) を人為的に変化させたときの因果効果を示すものではありません。よって、（イ）は誤りです。<br><br>
                      <b>（ウ）</b> 通常の決定係数 \\(R^2\\) は、説明変数を追加しても減少しません。したがって、単に \\(R^2\\) が大きいモデルを選ぶと、不要な説明変数を含む複雑なモデルが選ばれる可能性があります。モデルを比較するときには、自由度調整済み決定係数なども含め、モデルの目的や説明変数の妥当性などを考慮する必要があります。よって、（ウ）は誤りです。<br><br>
                      <b>3. 各選択肢の吟味</b><br>
                      ・<b>① 正しい</b>：正しい記述は（ア）のみです。<br>
                      ・<b>② 誤り</b>：（イ）は、統計的な関連から因果関係まで結論しているため適切ではありません。<br>
                      ・<b>③ 誤り</b>：（ウ）のように、決定係数が最も大きいという理由だけで必ずそのモデルを採用すべきとはいえません。<br>
                      ・<b>④ 誤り</b>：（イ）と（ウ）が誤りです。
                    `
                }
            ]
        }
    ])
};
