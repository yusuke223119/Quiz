// 総合演習 大問01. 図表の読み取り①
const comprehensiveSet = {
  id: 1,
  title: "図表の読み取り①",
  category: "記述統計",
  difficulty: 2,
  priority: 3,
  stem: `
    ある試験を100人が受験した。試験は100点満点であり、受験者の得点を10点刻みで集計したところ、次の度数分布表が得られた。
    <div class='overflow-x-auto mt-4'>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>得点（点）</th>
            <th class='border border-slate-300 p-2'>度数（人）</th>
            <th class='border border-slate-300 p-2'>相対度数</th>
            <th class='border border-slate-300 p-2'>累積度数（人）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2'>0以上10未満</td>
            <td class='border border-slate-300 p-2'>1</td>
            <td class='border border-slate-300 p-2'>0.01</td>
            <td class='border border-slate-300 p-2'>1</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2'>10以上20未満</td>
            <td class='border border-slate-300 p-2'>1</td>
            <td class='border border-slate-300 p-2'>0.01</td>
            <td class='border border-slate-300 p-2'>2</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2'>20以上30未満</td>
            <td class='border border-slate-300 p-2'>2</td>
            <td class='border border-slate-300 p-2'>0.02</td>
            <td class='border border-slate-300 p-2'>4</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2'>30以上40未満</td>
            <td class='border border-slate-300 p-2'>4</td>
            <td class='border border-slate-300 p-2'>0.04</td>
            <td class='border border-slate-300 p-2'>8</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2'>40以上50未満</td>
            <td class='border border-slate-300 p-2'>8</td>
            <td class='border border-slate-300 p-2'>0.08</td>
            <td class='border border-slate-300 p-2'>16</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2'>50以上60未満</td>
            <td class='border border-slate-300 p-2'>12</td>
            <td class='border border-slate-300 p-2'>（ A ）</td>
            <td class='border border-slate-300 p-2'>28</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2'>60以上70未満</td>
            <td class='border border-slate-300 p-2'>20</td>
            <td class='border border-slate-300 p-2'>0.20</td>
            <td class='border border-slate-300 p-2'>（ B ）</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2'>70以上80未満</td>
            <td class='border border-slate-300 p-2'>（ C ）</td>
            <td class='border border-slate-300 p-2'>0.24</td>
            <td class='border border-slate-300 p-2'>72</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2'>80以上90未満</td>
            <td class='border border-slate-300 p-2'>18</td>
            <td class='border border-slate-300 p-2'>0.18</td>
            <td class='border border-slate-300 p-2'>90</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-2'>90以上100以下</td>
            <td class='border border-slate-300 p-2'>10</td>
            <td class='border border-slate-300 p-2'>0.10</td>
            <td class='border border-slate-300 p-2'>100</td>
          </tr>
          <tr class='bg-slate-50 font-bold'>
            <td class='border border-slate-300 p-2'>合計</td>
            <td class='border border-slate-300 p-2'>100</td>
            <td class='border border-slate-300 p-2'>1.00</td>
            <td class='border border-slate-300 p-2'>―</td>
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
        上の度数分布表の空欄（A）、（B）、（C）に入る値の組合せとして最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
        <div class='overflow-x-auto'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>（A）</th>
                <th class='border border-slate-300 p-2'>（B）</th>
                <th class='border border-slate-300 p-2'>（C）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>0.12</td>
                <td class='border border-slate-300 p-2'>48</td>
                <td class='border border-slate-300 p-2'>24</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>0.12</td>
                <td class='border border-slate-300 p-2'>48</td>
                <td class='border border-slate-300 p-2'>18</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>0.20</td>
                <td class='border border-slate-300 p-2'>40</td>
                <td class='border border-slate-300 p-2'>24</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>0.20</td>
                <td class='border border-slate-300 p-2'>48</td>
                <td class='border border-slate-300 p-2'>24</td>
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
        相対度数は
        \\[
          \\text{相対度数}=\\dfrac{\\text{その階級の度数}}{\\text{全体の度数}}
        \\]
        で求めます。また、累積度数は、その階級までの度数を順に合計したものです。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        受験者は100人なので、50点以上60点未満の相対度数は
        \\[
          \\dfrac{12}{100}=0.12
        \\]
        です。したがって \\((A)=0.12\\) です。<br><br>
        60点以上70点未満までの累積度数は
        \\[
          28+20=48
        \\]
        より \\((B)=48\\) です。<br><br>
        70点以上80点未満の相対度数は 0.24 なので、度数は
        \\[
          100\\times 0.24=24
        \\]
        です。したがって \\((C)=24\\) です。よって、正しい組合せは
        \\[
          (0.12,\\ 48,\\ 24)
        \\]
        です。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 正しい</b>：相対度数、累積度数、度数のすべてが表と整合します。<br>
        ・<b>② 誤り</b>：（C）では相対度数 0.24 に対応する度数を求める必要があり、100人中24人です。<br>
        ・<b>③ 誤り</b>：（A）で度数12をそのまま別の相対度数と取り違え、（B）でも累積度数を正しく計算できていません。<br>
        ・<b>④ 誤り</b>：（B）、（C）は正しいですが、50点以上60点未満の相対度数は 0.20 ではなく 0.12 です。
      `
    },
    {
      id: 2,
      difficulty: 3,
      priority: 3,
      question: `
        この100人の得点について箱ひげ図を作成した。<br><br>
        外れ値は、第1四分位数を \\(Q_1\\)、第3四分位数を \\(Q_3\\)、四分位範囲を
        \\[
          \\mathrm{IQR}=Q_3-Q_1
        \\]
        としたとき、
        \\[
          Q_1-1.5\\,\\mathrm{IQR}
        \\]
        より小さい値、または
        \\[
          Q_3+1.5\\,\\mathrm{IQR}
        \\]
        より大きい値とする。<br><br>
        次の ①〜④ の箱ひげ図のうち、上の度数分布表と整合するものとして最も適切なものを1つ選べ。<br>
        ![4つの箱ひげ図](picture/c01_2_boxplots.svg?v=3)
      `,
      choices: ["①", "②", "③", "④"],
      answer: "②",
      explanation: `
        正解は②です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        100人を得点の小さい順に並べると、第1四分位数は25番目付近、中央値は50番目付近、第3四分位数は75番目付近のデータによって決まります。したがって、度数分布表の累積度数を利用すれば、それぞれの四分位数がどの階級に含まれるかを判断できます。また、外れ値の判定には四分位範囲 \\(\\mathrm{IQR}=Q_3-Q_1\\) を利用します。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        50点未満の累積度数は16人、60点未満では28人です。したがって第1四分位数は
        \\[
          50\\le Q_1<60
        \\]
        でなければなりません。<br><br>
        また、70点未満は48人、80点未満では72人なので、中央値は
        \\[
          70\\le Q_2<80
        \\]
        にあります。<br><br>
        さらに80点未満は72人、90点未満では90人なので、第3四分位数は
        \\[
          80\\le Q_3<90
        \\]
        にあります。<br><br>
        この時点で①は \\(Q_2=68\\)、③は \\(Q_1=61\\) なので除外できます。②と④は、いずれも四分位数の属する階級については度数分布表と整合します。<br><br>
        ②について
        \\[
          \\mathrm{IQR}=84-56=28
        \\]
        なので、下側の外れ値判定の境界は
        \\[
          56-1.5\\times 28=14
        \\]
        です。0点以上10点未満の階級には1人存在します。この受験者の得点は必ず14点未満なので、少なくとも1人の下側外れ値が存在します。②にはこの外れ値が表示されているため、度数分布表と整合します。<br><br>
        一方、④では
        \\[
          \\mathrm{IQR}=82-54=28
        \\]
        であり、下側境界は
        \\[
          54-1.5\\times 28=12
        \\]
        です。0点以上10点未満の1人は必ず12点未満であるから、④にも下側外れ値が存在しなければなりません。しかし④では下側のひげが0点以上10点未満まで伸びており、外れ値としては表示されていないため、度数分布表と整合しません。したがって②が最も適切です。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：中央値68点は60点以上70点未満の階級にあります。しかし70点未満の受験者は48人しかいないため、中央値がこの階級に入ることはありません。<br>
        ・<b>② 正しい</b>：3つの四分位数がそれぞれ度数分布表から分かる階級と一致し、外れ値の表示についても整合します。<br>
        ・<b>③ 誤り</b>：第1四分位数61点は60点以上70点未満にありますが、第1四分位数は50点以上60点未満に存在しなければなりません。<br>
        ・<b>④ 誤り</b>：四分位数の位置自体は整合しますが、外れ値判定の下側境界が12点であるにもかかわらず、確実に12点未満である0点以上10点未満の受験者が外れ値として表示されず、ひげの端として描かれています。
      `
    },
    {
      id: 3,
      difficulty: 3,
      priority: 3,
      question: `
        上の度数分布表から読み取れる内容として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
        ① 平均値は中央値より小さい。<br><br>
        ② 50%以上の受験者が70点未満である。<br><br>
        ③ 得点は平均値を中心として左右対称に分布している。<br><br>
        ④ 四分位範囲は40点以下である。
      `,
      choices: ["①", "②", "③", "④"],
      answer: "④",
      explanation: `
        正解は④です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        度数分布表では個々の観測値は分かりませんが、累積度数を利用することで、中央値や四分位数がどの階級に含まれるかを判断できます。四分位範囲は
        \\[
          \\mathrm{IQR}=Q_3-Q_1
        \\]
        で定義されます。一方、階級別に集計されたデータからは、個々の得点が分からないため、平均値などを正確に求められない場合があります。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        第1四分位数は50点以上60点未満、第3四分位数は80点以上90点未満にあります。したがって
        \\[
          Q_1\\ge 50,\\qquad Q_3<90
        \\]
        です。よって
        \\[
          \\mathrm{IQR}=Q_3-Q_1<90-50=40
        \\]
        となります。したがって、四分位範囲は必ず40点より小さく、④が正しいです。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：度数分布表では各階級内の具体的な得点が分からないため、平均値を正確に特定できません。したがって、平均値と中央値の大小関係も断定できません。<br>
        ・<b>② 誤り</b>：70点未満の累積度数は48人です。したがって、70点未満の受験者は48%であり、50%以上ではありません。<br>
        ・<b>③ 誤り</b>：度数分布表から、平均値を中心とした左右対称な分布であるとは判断できません。また、平均値そのものも正確には特定できません。<br>
        ・<b>④ 正しい</b>：第1四分位数は50点以上60点未満、第3四分位数は80点以上90点未満にあるため、四分位範囲は40点より小さく、したがって40点以下です。
      `
    }
  ]
};
