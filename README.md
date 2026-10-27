# WEC 特定技能サービス LP

ワールドエンタプライズ株式会社 海外人材開発事業部「WEC」の特定技能外国人採用・支援サービスのLP。

## 構成
| ファイル | 内容 |
|---|---|
| `index.html` + `src/main.js` | トップ(LP本体。中身は main.js に記述) |
| `case-study-*.html` | 導入事例(空港・食品・ビル) |
| `download.html` | 資料ダウンロード |
| `thanks.html` | フォーム送信完了 |
| `src/style.css` | 全ページ共通のスタイル |
| `public/` | 画像などそのまま公開されるファイル |
| `.env` | 公開URL(`VITE_SITE_URL`)。OGP・sitemap・robots に使われる |

## よくある修正
- 文言の修正:トップは `src/main.js`、事例は各 `case-study-*.html`
- 画像の差し替え:`public/` に同じ名前で上書き(横幅は最大2400px、1枚500KB以下目安)
- ページの追加:HTMLを作り、`vite.config.js` の `pages` に追加

## 開発・ビルド
```
npm install
npm run dev     # ローカル確認 http://localhost:5173
npm run build   # dist/ に公開用ファイルを出力
```

## 公開(Netlify / Cloudflare Pages / Vercel 共通)
- ビルドコマンド:`npm run build`
- 公開ディレクトリ:`dist`
- main ブランチに反映すると自動で公開される

## フォーム
問い合わせ・資料DLは Formspree(`https://formspree.io/f/mykdaakn`)に送信。通知先メールは Formspree 側の設定で変更する。

## アクセス解析
Google アナリティクス `G-17BVVQ814J`(全ページの head に記述)
