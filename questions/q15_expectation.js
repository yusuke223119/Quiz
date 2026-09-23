// 分野15. 期待値・分散とモーメント
const allQuestions = [
  {
    id: 1,
    category: "期待値・分散とモーメント",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      離散型確率変数 \\(X\\) の確率分布が次の表で与えられている。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>\\(x\\)</th>
            <th class='border border-slate-300 p-2'>0</th>
            <th class='border border-slate-300 p-2'>1</th>
            <th class='border border-slate-300 p-2'>2</th>
            <th class='border border-slate-300 p-2'>3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(P(X=x)\\)</td>
            <td class='border border-slate-300 p-2'>0.1</td>
            <td class='border border-slate-300 p-2'>0.2</td>
            <td class='border border-slate-300 p-2'>0.4</td>
            <td class='border border-slate-300 p-2'>0.3</td>
          </tr>
        </tbody>
      </table>
      <br>
      このとき、\\(X\\) の期待値 \\(E[X]\\) として、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      ① 1.5<br><br>
      ② 1.8<br><br>
      ③ 1.9<br><br>
      ④ 2.0
    `,
    choices: ["①", "②", "③", "④"],
    answer: "③",
    explanation: `
      正解は③です。<br>
      <解説><br>
      <b>1. 基本概念・公式</b><br>
      離散型確率変数 \\(X\\) の期待値は、\\(X\\) が取り得る各値を、その値を取る確率で重み付けして足し合わせたものです。
      \\[
        E[X]=\\sum_x xP(X=x)
      \\]
      期待値は確率変数を多数回観測したときの長期的な平均に対応します。また、期待値は、必ずしも \\(X\\) が実際に取り得る値である必要はありません。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      与えられた確率分布を用いると、
      \\[
        E[X]=0\\times 0.1+1\\times 0.2+2\\times 0.4+3\\times 0.3
      \\]
      です。したがって、
      \\[
        E[X]=0+0.2+0.8+0.9=1.9
      \\]
      となります。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：\\(X\\) が取り得る値の単純平均 \\((0+1+2+3)/4\\) を計算した値です。各値が生じる確率が異なるため、確率による重み付けが必要です。<br>
      ・<b>② 誤り</b>：各値とその確率を正しく掛け合わせて合計した値ではありません。<br>
      ・<b>③ 正しい</b>：\\(\\sum_x xP(X=x)=1.9\\) となります。<br>
      ・<b>④ 誤り</b>：\\(X=2\\) は最も確率が高い値ですが、最も起こりやすい値と期待値は一般には一致しません。
    `
  },
  {
    id: 2,
    category: "期待値・分散とモーメント",
    difficulty: 1,
    priority: 3,
    type: "選択式",
    question: `
      離散型確率変数 \\(X\\) の確率分布が次の表で与えられている。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-2'>\\(x\\)</th>
            <th class='border border-slate-300 p-2'>0</th>
            <th class='border border-slate-300 p-2'>1</th>
            <th class='border border-slate-300 p-2'>2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-2 bg-slate-50'>\\(P(X=x)\\)</td>
            <td class='border border-slate-300 p-2'>0.2</td>
            <td class='border border-slate-300 p-2'>0.5</td>
            <td class='border border-slate-300 p-2'>0.3</td>
          </tr>
        </tbody>
      </table>
      <br>
      このとき、\\(X\\) の分散 \\(V[X]\\) と標準偏差の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(V[X]\\)</th>
            <th class='border border-slate-300 p-2'>標準偏差</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>0.49</td>
            <td class='border border-slate-300 p-2'>0.7</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>0.49</td>
            <td class='border border-slate-300 p-2'>0.49</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>1.21</td>
            <td class='border border-slate-300 p-2'>1.1</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>1.70</td>
            <td class='border border-slate-300 p-2'>\\(\\approx 1.30\\)</td>
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
      確率変数 \\(X\\) の分散は、
      \\[
        V[X]=E[(X-E[X])^2]
      \\]
      と定義されます。また、次の公式を利用して計算することもできます。
      \\[
        V[X]=E[X^2]-E[X]^2
      \\]
      標準偏差は分散の正の平方根です。
      \\[
        \\operatorname{SD}(X)=\\sqrt{V[X]}
      \\]
      <br>
      <b>2. 計算・判定プロセス</b><br>
      まず期待値を求めます。
      \\[
        E[X]=0\\times 0.2+1\\times 0.5+2\\times 0.3=1.1
      \\]
      次に \\(E[X^2]\\) を求めます。
      \\[
        E[X^2]=0^2\\times 0.2+1^2\\times 0.5+2^2\\times 0.3=0+0.5+1.2=1.7
      \\]
      よって、
      \\[
        V[X]=1.7-(1.1)^2=1.7-1.21=0.49
      \\]
      となります。標準偏差は、
      \\[
        \\sqrt{0.49}=0.7
      \\]
      です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 正しい</b>：分散は0.49、その平方根である標準偏差は0.7です。<br>
      ・<b>② 誤り</b>：0.49は分散であり、標準偏差ではありません。標準偏差を求めるには平方根を取ります。<br>
      ・<b>③ 誤り</b>：1.21は \\(E[X]^2=(1.1)^2\\) であり、分散ではありません。<br>
      ・<b>④ 誤り</b>：1.70は \\(E[X^2]\\) です。分散を求めるには、ここから \\(E[X]^2\\) を引く必要があります。
    `
  },
  {
    id: 3,
    category: "期待値・分散とモーメント",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      確率変数 \\(X\\) について、
      \\[
        E[X]=10,\\qquad V[X]=4
      \\]
      である。<br><br>
      新しい確率変数 \\(Y\\) を
      \\[
        Y=3X+5
      \\]
      と定める。このとき、\\(E[Y]\\) と \\(V[Y]\\) の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>\\(E[Y]\\)</th>
            <th class='border border-slate-300 p-2'>\\(V[Y]\\)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>35</td>
            <td class='border border-slate-300 p-2'>17</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>35</td>
            <td class='border border-slate-300 p-2'>12</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>35</td>
            <td class='border border-slate-300 p-2'>36</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'>105</td>
            <td class='border border-slate-300 p-2'>36</td>
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
      確率変数 \\(X\\) を
      \\[
        Y=aX+b
      \\]
      と線形変換したとき、期待値について、
      \\[
        E[Y]=aE[X]+b
      \\]
      が成り立ちます。一方、分散については、
      \\[
        V[Y]=a^2V[X]
      \\]
      が成り立ちます。定数 \\(b\\) を加えても分布全体が平行移動するだけなので、散らばりを表す分散は変化しません。一方、\\(a\\) 倍すると偏差も \\(a\\) 倍されるため、偏差の2乗を用いる分散は \\(a^2\\) 倍されます。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      期待値は、
      \\[
        E[Y]=E[3X+5]=3E[X]+5=3\\times 10+5=35
      \\]
      となります。分散は、
      \\[
        V[Y]=V[3X+5]=3^2V[X]=9\\times 4=36
      \\]
      となります。したがって、
      \\[
        E[Y]=35,\\qquad V[Y]=36
      \\]
      です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：分散について \\(3V[X]+5=17\\) としています。分散では加えた定数5は影響せず、係数3は2乗します。<br>
      ・<b>② 誤り</b>：\\(3V[X]=12\\) としていますが、分散は係数3ではなく \\(3^2\\) 倍されます。<br>
      ・<b>③ 正しい</b>：\\(E[Y]=3\\times 10+5=35\\)、\\(V[Y]=3^2\\times 4=36\\) です。<br>
      ・<b>④ 誤り</b>：分散は正しいですが、期待値について定数5を含めず誤った計算をしています。
    `
  },
  {
    id: 4,
    category: "期待値・分散とモーメント",
    difficulty: 2,
    priority: 3,
    type: "選択式",
    question: `
      確率変数 \\(X\\) と定数 \\(a,b\\) について、次の記述を考える。ただし、必要な期待値および分散は存在するものとする。<br><br>
      1.
      \\[
        E[aX+b]=aE[X]+b
      \\]
      2.
      \\[
        V[aX+b]=aV[X]+b
      \\]
      3.
      \\[
        E[X^2]=E[X]^2
      \\]
      4.
      \\[
        E[X^2]=V[X]+E[X]^2
      \\]
      上の記述のうち、一般に正しいものをすべて選んだ組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。<br><br>
      <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
        <thead>
          <tr class='bg-slate-100'>
            <th class='border border-slate-300 p-1'></th>
            <th class='border border-slate-300 p-2'>1</th>
            <th class='border border-slate-300 p-2'>2</th>
            <th class='border border-slate-300 p-2'>3</th>
            <th class='border border-slate-300 p-2'>4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>①</td>
            <td class='border border-slate-300 p-2'>○</td>
            <td class='border border-slate-300 p-2'></td>
            <td class='border border-slate-300 p-2'></td>
            <td class='border border-slate-300 p-2'></td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>②</td>
            <td class='border border-slate-300 p-2'>○</td>
            <td class='border border-slate-300 p-2'>○</td>
            <td class='border border-slate-300 p-2'></td>
            <td class='border border-slate-300 p-2'></td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>③</td>
            <td class='border border-slate-300 p-2'>○</td>
            <td class='border border-slate-300 p-2'></td>
            <td class='border border-slate-300 p-2'></td>
            <td class='border border-slate-300 p-2'>○</td>
          </tr>
          <tr>
            <td class='border border-slate-300 p-1 bg-slate-50'>④</td>
            <td class='border border-slate-300 p-2'></td>
            <td class='border border-slate-300 p-2'></td>
            <td class='border border-slate-300 p-2'>○</td>
            <td class='border border-slate-300 p-2'>○</td>
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
      期待値の線形性より、
      \\[
        E[aX+b]=aE[X]+b
      \\]
      が成り立ちます。分散については、
      \\[
        V[aX+b]=a^2V[X]
      \\]
      が成り立ちます。また、分散について、
      \\[
        V[X]=E[X^2]-E[X]^2
      \\]
      という関係があります。これを変形すると、
      \\[
        E[X^2]=V[X]+E[X]^2
      \\]
      となります。<br><br>
      <b>2. 計算・判定プロセス</b><br>
      記述1は、期待値の線形性そのものであるため正しいです。<br>
      記述2は誤りです。正しくは、
      \\[
        V[aX+b]=a^2V[X]
      \\]
      です。<br>
      記述3は一般には成り立ちません。実際、
      \\[
        E[X^2]-E[X]^2=V[X]
      \\]
      なので、記述3が成り立つのは \\(V[X]=0\\) となる特殊な場合に限られます。<br>
      記述4は分散の公式を変形したものであり、正しいです。<br>
      したがって、一般に正しいのは<b>1と4</b>です。<br><br>
      <b>3. 各選択肢の吟味</b><br>
      ・<b>① 誤り</b>：記述1は正しいですが、記述4も正しいです。<br>
      ・<b>② 誤り</b>：記述2は誤りです。分散では係数 \\(a\\) は2乗され、定数 \\(b\\) は影響しません。<br>
      ・<b>③ 正しい</b>：記述1と記述4がともに一般に成立します。<br>
      ・<b>④ 誤り</b>：記述4は正しいですが、記述3は一般には成立しません。記述3が成立するのは \\(V[X]=0\\) の場合に限られます。
    `
  }
];
