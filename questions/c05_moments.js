// 総合演習 大問05. 分布の形とモーメント
const comprehensiveSet = {
  id: 5,
  title: "分布の形とモーメント",
  category: "確率分布",
  difficulty: 2,
  priority: 3,
  stem: `
    確率変数 \\(X\\) の平均を \\(\\mu=E[X]\\)、分散を \\(\\sigma^2=V[X]\\) とする。また、平均まわりの3次モーメントおよび4次モーメントを
    \\[
      \\mu_3=E[(X-\\mu)^3],\\qquad
      \\mu_4=E[(X-\\mu)^4]
    \\]
    とする。<br><br>
    このとき、歪度および尖度をそれぞれ
    \\[
      \\text{歪度}=\\dfrac{\\mu_3}{\\sigma^3},
      \\qquad
      \\text{尖度}=\\dfrac{\\mu_4}{\\sigma^4}-3
    \\]
    と定義する。
  `,
  parts: [
    {
      id: 1,
      difficulty: 2,
      priority: 3,
      question: `
        確率変数 \\(X\\) が正規分布に従うとき、上で定義した歪度と尖度の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>歪度</th>
                <th class='border border-slate-300 p-2'>尖度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>\\(0\\)</td>
                <td class='border border-slate-300 p-2'>\\(0\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>\\(0\\)</td>
                <td class='border border-slate-300 p-2'>\\(3\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>\\(-1\\)</td>
                <td class='border border-slate-300 p-2'>\\(0\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>\\(-1\\)</td>
                <td class='border border-slate-300 p-2'>\\(3\\)</td>
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
        歪度は分布の左右の非対称性を表す指標です。平均を中心として左右対称な分布では、平均まわりの3次モーメントが
        \\[
          \\mu_3=E[(X-\\mu)^3]=0
        \\]
        となるため、歪度は0となります。<br><br>
        また、正規分布では
        \\[
          \\mu_4=3\\sigma^4
        \\]
        です。本問では尖度を
        \\[
          \\dfrac{\\mu_4}{\\sigma^4}-3
        \\]
        と定義しているため、正規分布の尖度は0となります。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        正規分布は平均を中心として左右対称なので、
        \\[
          \\text{歪度}=0.
        \\]
        また、
        \\[
          \\text{尖度}=\\dfrac{3\\sigma^4}{\\sigma^4}-3=0.
        \\]
        したがって、
        \\[
          (\\text{歪度},\\text{尖度})=(0,0)
        \\]
        です。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 正しい</b>：正規分布は左右対称であり、本問の定義による尖度も0です。<br>
        ・<b>② 誤り</b>：\\(\\mu_4/\\sigma^4\\) は正規分布では3ですが、本問ではそこから3を引いた値を尖度と定義しています。<br>
        ・<b>③ 誤り</b>：正規分布は左右対称なので、歪度は\\(-1\\) ではなく0です。<br>
        ・<b>④ 誤り</b>：正規分布は左右対称なので、歪度は\\(-1\\) ではなく0です。
      `
    },
    {
      id: 2,
      difficulty: 3,
      priority: 2,
      question: `
        確率変数 \\(X\\) が区間 \\([-1,1]\\) 上の一様分布に従うとする。<br><br>
        このとき、\\(X\\) の歪度と尖度の組合せとして、最も適切なものを、次の ①〜④ のうちから1つ選べ。
        <div class='overflow-x-auto mt-4'>
          <table class='w-full border-collapse border border-slate-300 text-center text-sm'>
            <thead>
              <tr class='bg-slate-100'>
                <th class='border border-slate-300 p-2'></th>
                <th class='border border-slate-300 p-2'>歪度</th>
                <th class='border border-slate-300 p-2'>尖度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>①</td>
                <td class='border border-slate-300 p-2'>\\(0\\)</td>
                <td class='border border-slate-300 p-2'>\\(-\\dfrac{6}{5}\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>②</td>
                <td class='border border-slate-300 p-2'>\\(0\\)</td>
                <td class='border border-slate-300 p-2'>\\(\\dfrac{9}{5}\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>③</td>
                <td class='border border-slate-300 p-2'>\\(0\\)</td>
                <td class='border border-slate-300 p-2'>\\(\\dfrac{6}{5}\\)</td>
              </tr>
              <tr>
                <td class='border border-slate-300 p-2 bg-slate-50'>④</td>
                <td class='border border-slate-300 p-2'>\\(-\\dfrac{6}{5}\\)</td>
                <td class='border border-slate-300 p-2'>\\(0\\)</td>
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
        \\(X\\sim U(-1,1)\\) の確率密度関数は
        \\[
          f(x)=
          \\begin{cases}
          \\dfrac12,&-1\\le x\\le 1,\\\\
          0,&\\text{その他}
          \\end{cases}
        \\]
        です。この分布は0を中心として左右対称なので、
        \\[
          E[X]=0,\\qquad \\mu_3=E[X^3]=0
        \\]
        であり、歪度は0となります。尖度を求めるには、2次モーメントと4次モーメントを用います。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        まず、
        \\[
          E[X^2]=\\int_{-1}^{1}x^2\\dfrac12\\,dx=\\dfrac13.
        \\]
        \\(E[X]=0\\) なので、
        \\[
          \\sigma^2=V[X]=\\dfrac13.
        \\]
        よって、
        \\[
          \\sigma^4=\\dfrac19.
        \\]
        また、
        \\[
          \\mu_4=E[X^4]=\\int_{-1}^{1}x^4\\dfrac12\\,dx=\\dfrac15.
        \\]
        したがって、
        \\[
          \\text{尖度}=\\dfrac{1/5}{1/9}-3=\\dfrac95-3=-\\dfrac65.
        \\]
        よって、歪度は0、尖度は \\(-6/5\\) です。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 正しい</b>：一様分布は左右対称なので歪度は0であり、尖度は \\(-6/5\\) となります。<br>
        ・<b>② 誤り</b>：\\(9/5\\) は \\(\\mu_4/\\sigma^4\\) の値であり、本問で定義された尖度ではありません。ここから3を引く必要があります。<br>
        ・<b>③ 誤り</b>：一様分布の尖度は正ではなく負です。<br>
        ・<b>④ 誤り</b>：\\(-6/5\\) は尖度の値です。また、一様分布は左右対称なので歪度は0です。
      `
    },
    {
      id: 3,
      difficulty: 3,
      priority: 2,
      question: `
        標準正規分布、区間 \\([-1,1]\\) 上の一様分布、および自由度 \\(\\nu\\) の \\(t\\) 分布について考える。<br><br>
        自由度 \\(\\nu>4\\) の \\(t\\) 分布では、本問で定義した尖度が
        \\[
          \\dfrac{6}{\\nu-4}
        \\]
        で与えられるものとする。<br><br>
        これらの分布に関する次の (a)〜(c) の記述を考える。<br><br>
        <b>(a)</b> 標準正規分布、一様分布、\\(t\\) 分布はいずれも中心について左右対称であるため、歪度は0である。<br><br>
        <b>(b)</b> 本問で定義した尖度を比較すると、一様分布は正規分布より小さく、自由度 \\(\\nu>4\\) の \\(t\\) 分布は正規分布より大きい。<br><br>
        <b>(c)</b> \\(t\\) 分布では、自由度 \\(\\nu\\) が大きくなるほど尖度は大きくなるため、正規分布よりも裾の重い形がより顕著になる。<br><br>
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
      answer: "②",
      explanation: `
        正解は②です。<br>
        <解説><br>
        <b>1. 基本概念・公式</b><br>
        左右対称な分布では、3次の中心モーメントが0となるため、歪度も0となります。また、本問で定義した尖度について、
        \\[
          \\text{一様分布}=-\\dfrac65,\\qquad
          \\text{正規分布}=0
        \\]
        です。一方、自由度 \\(\\nu>4\\) の \\(t\\) 分布では、
        \\[
          \\text{尖度}=\\dfrac{6}{\\nu-4}>0.
        \\]
        したがって、尖度について
        \\[
          \\text{一様分布}<\\text{正規分布}<t\\text{分布}
        \\]
        という関係が成り立ちます。<br><br>
        <b>2. 計算・判定プロセス</b><br>
        (a)について、3つの分布はいずれも中心について左右対称なので、歪度は0です。したがって正しいです。<br><br>
        (b)について、
        \\[
          -\\dfrac65<0<\\dfrac{6}{\\nu-4}
        \\]
        であるから正しいです。<br><br>
        (c)について、
        \\[
          \\dfrac{6}{\\nu-4}
        \\]
        は \\(\\nu\\) が大きくなるほど小さくなり、
        \\[
          \\lim_{\\nu\\to\\infty}\\dfrac{6}{\\nu-4}=0
        \\]
        となります。したがって、自由度が大きくなるほど \\(t\\) 分布の尖度は正規分布の尖度0に近づくので、(c)は誤りです。<br><br>
        <b>3. 各選択肢の吟味</b><br>
        ・<b>① 誤り</b>：(a)だけでなく(b)も正しいです。一様分布の尖度は負、正規分布は0、\\(t\\) 分布は正です。<br>
        ・<b>② 正しい</b>：(a), (b)が正しく、(c)が誤りです。<br>
        ・<b>③ 誤り</b>：(a)は正しく、(c)は誤りです。<br>
        ・<b>④ 誤り</b>：(c)が誤っています。\\(t\\) 分布の自由度が大きくなるほど尖度は小さくなり、分布の形は正規分布に近づいていきます。
      `
    }
  ]
};
