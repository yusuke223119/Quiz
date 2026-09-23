# 統計検定2級対策アプリ

統計検定2級の学習用クイズアプリです。静的な HTML / JavaScript / CSS で動きます。進捗・星・復習はブラウザの `localStorage` に保存します。

キャッチコピー: **See the world through data.**

## 画面

| タブ | ファイル | 内容 |
| --- | --- | --- |
| ホーム | `index.html` | 学習状況、続きから、章カード |
| 学習 | `category.html` → `quiz.html` | 分野別演習（01〜35） |
| 総合演習 | `comprehensive.html` → `comprehensive-quiz.html` | 大問形式（問1〜問3をまとめて判定） |
| 模試 | `mock.html` → `mock-quiz.html` | 本番形式。正答率つき |
| 復習 | `review.html` | 保存した問題の解き直し |

問題画面では統計数値表（正規 / t / χ² / F 5% / F 2.5%）をポップアップで開けます。難易度（基礎・標準・応用）と重要度（A / B / C）は各問題ファイルから読みます。分野・総合は全問正解で星が付きます。

## 起動

リポジトリのルートで:

```bash
python3 -m http.server 8765
```

ブラウザで [http://127.0.0.1:8765/index.html](http://127.0.0.1:8765/index.html) を開きます。ファイルを直接開くと問題データの読み込みに失敗することがあります。

## 構成

```text
/
├── index.html                 # ホーム
├── category.html              # 分野別の章選択
├── quiz.html                  # 分野別の問題
├── comprehensive.html         # 総合演習の大問一覧
├── comprehensive-quiz.html    # 総合演習の問題
├── mock.html                  # 模試一覧
├── mock-quiz.html             # 模試の問題
├── review.html                # 復習
├── Explanation.html           # 分野別の結果
├── app.css                    # 共通スタイル
├── nav.js                     # 下部タブ
├── bookmarks.js               # 復習・星・進捗
├── main.js / menu_data.js     # 分野別メニュー
├── comprehensive_data.js      # 総合演習メニュー
├── mock_data.js               # 模試メニュー
├── stats-table.js             # 統計数値表ポップアップ
├── priority.js                # 重要度バッジ
├── questions/                 # 問題データ
│   ├── q01_*.js … q35_*.js    # 分野別
│   ├── c01_*.js … c12_*.js    # 総合演習
│   └── mock01.js              # 模試
├── picture/                   # 図と統計数値表
├── icons/                     # 章カード用アイコン
└── scripts/                   # 図表・数値表の生成
```

## データについて

進捗は「解答したか」ではなく **正解したか** で上がります。キーは `quizAnswered`（正解）、`quizGenreStars`（全問正解した分野・総合）、`quizBookmarks`（復習）、`quizLastStudy`（続きから）です。

お助け AI は Web 版では Supabase 経由の Gemini です。API キーはリポジトリに含めていません。

## GitHub Pages

公開版: [https://yusuke223119.github.io/Quiz/](https://yusuke223119.github.io/Quiz/)

ローカル確認は上記の `http.server` を使ってください。
