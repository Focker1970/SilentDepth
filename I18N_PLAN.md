# SilentDepth 多言語化実装計画

## 目的

本書は、`SilentDepth` を海外プレイヤーにも公開できるようにするための多言語化計画である。
まずは `日本語 / English` の2言語対応を対象とし、UI・HUD・ログ・マニュアルを段階的に切り替えられる状態を作る。

---

## 基本方針

- 日本語UIを消すのではなく、`JP / EN` 切替式にする
- まずは `遊べる入口` を英語化する
- 物理計算やゲームロジックは触らず、表示文言の分離を先行する
- ドイツ語復唱は演出として維持し、必要に応じて英語グロスを併記する
- `index.html` と `manual/` を先に対応し、その後ログ・細部文言へ広げる

---

## 到達目標

### Phase A 完了条件

対応する実装フェーズ:
- `Phase 1-2`

- ヘッダー、役職名、主要ボタン、HUD見出しが `JP / EN` で切替できる
- 言語設定が `localStorage` に保存される
- プレイマニュアル索引に日本語版・英語版の導線がある

### Phase B 完了条件

対応する実装フェーズ:
- `Phase 3-4`

- 右サイドの各役職説明、Duty Board、Campaign Status が切替できる
- 艦長ノート、報告文、フェーズ名など主要テキストが切替できる
- プレイヤーが英語UIだけでも Stage I を最後まで遊べる

### Phase C 完了条件

対応する実装フェーズ:
- `Phase 5-6`

- `manual/` 一式の英語版を用意する
- Bridge Log、警告、チュートリアル補助文も切替できる
- 公開版で日本語ユーザーと英語ユーザーが同じビルドを利用できる

---

## 多言語化方針

### 1. 文言の分離

`index.html` と `script.js` に直接書かれている文言を、言語辞書経由で描画する。

想定構造:

```js
const I18N = {
  ja: {
    stage: "Stage",
    alert: "Alert",
    captain: "艦長",
  },
  en: {
    stage: "Stage",
    alert: "Alert",
    captain: "Captain",
  },
};
```

### 2. 切替UI

ヘッダー `Control` 内に `JP / EN` 切替ボタンを置く。

- 初期値は `ja`
- 切替時に画面文言を再描画
- 設定は `localStorage` に保存

### 3. 英語表現の考え方

直訳ではなく、海外プレイヤーに通じる海戦ゲーム語彙へ寄せる。

例:

- `艦長` -> `Captain`
- `ソナー員` -> `Sonar`
- `雷撃士` -> `Torpedo Officer`
- `航海長` -> `Navigator`
- `静粛` -> `Silent Running`
- `接敵維持` -> `Maintain Contact`
- `被探知回避` -> `Avoid Detection`
- `急速潜航` -> `Alarm Dive`

### 4. ドイツ語復唱との関係

- 音声本体はドイツ語のままでよい
- UI上の意味説明は `日本語 / 英語` で切替可能にする
- 将来的には `German + EN gloss` を標準表示にする

---

## 置換対象一覧

### A. 最優先

- `index.html` ヘッダー文言
- 役職タブ名
- 艦長席主要コマンド
- ソナー / 雷撃 / 航海長の主要ボタン
- Tactical Strip
- Campaign Status 見出し
- プレイマニュアル導線

### B. 優先

- Duty Board 各項目
- Captain Notes / Captain Intent
- Report To Captain
- Firing Sequence
- Solution Metrics
- Navigation Metrics
- Alarm Dive カード
- Mission Decision カード

### C. 後追い

- Bridge Log
- ステータス文
- 動的報告文
- エラー文
- チュートリアル補助文
- 音声説明文

### D. マニュアル

- `manual/index.html`
- `manual/overview.html`
- `manual/captain.html`
- `manual/sonar.html`
- `manual/torpedo.html`
- `manual/navigation.html`
- `manual/campaign.html`

---

## 事前調査

多言語化着手前に、現在の文言量を把握して見積もりを固める。

現時点の確認結果:

- `script.js`: `9,095` 行
- 日本語を含む行: `985` 行
- 重量帯: 役職定義、Alarm Dive、復唱テンプレート、Bridge Log、各部署報告、HUD要約

着手前の追加タスク:

- [ ] `script.js` 内の日本語文言をカテゴリ別に棚卸しする
- [ ] 静的ラベル / 動的ログ / 音声グロス / チュートリアル補助文に分類する
- [ ] `辞書化しやすい定型句` と `ロジック内直書き` を分けて一覧化する

---

## 実装対象ファイル

- `index.html`
- `script.js`
- `style.css`
- `manual/index.html`
- `manual/*.html`

必要に応じて追加:

- `i18n.js`
- `manual/en/*.html`

---

## 実装方式案

### 案1: `script.js` 内に辞書を内包

利点:

- 初期実装が速い
- 依存ファイルが増えない

弱点:

- 文言が増えると管理しにくい

### 案2: `i18n.js` または `i18n.json` に分離

利点:

- 文言管理がしやすい
- 将来 `de` や `fr` を足しやすい

弱点:

- 初回の組み替えが少し増える

### 推奨

最初から `i18n.js` 分離で始める。
今回の `SilentDepth` は HUD 文言、ログ、マニュアル導線が多く、今後さらに増えるため。

---

## JP / EN 切替の実装タスク

## Phase 0: 文言棚卸し

- [ ] `script.js` の日本語文言を grep ベースで洗い出す
- [ ] 文言件数と分布を記録する
- [ ] 優先度 `静的UI / HUD / 動的報告 / ログ / マニュアル` に分類する
- [ ] 英語化対象と当面日本語固定の対象を切り分ける

## Phase 1: 言語切替の土台

- [ ] `script.js` に `currentLanguage` 状態を追加する
- [ ] `localStorage` に `silentdepth_language` を保存する
- [ ] ヘッダーに `JP / EN` 切替UIを追加する
- [ ] 起動時に保存済み言語を読み込む
- [ ] 言語切替時に再描画を実行する

## Phase 2: 静的ラベルの切替

- [ ] ヘッダー `Stage / Zone / Alert / Light / Time / Control` を辞書化する
- [ ] 役職タブ `艦長 / ソナー員 / 雷撃士 / 航海長` を辞書化する
- [ ] Tactical Strip 見出しを辞書化する
- [ ] 右サイド各セクション見出しを辞書化する
- [ ] ボタン文言を辞書化する

## Phase 3: HUD内容の切替

- [ ] Battle Phase 名称を `ja / en` 両対応にする
- [ ] Immediate Objective 文言を切替可能にする
- [ ] Duty Board の項目ラベルを切替可能にする
- [ ] 各メトリクス見出しを切替可能にする
- [ ] Alarm Dive カードの文言を切替可能にする

## Phase 4: 動的テキストの切替

- [ ] Bridge Log の固定語彙を辞書化する
- [ ] Captain Notes の定型文を辞書化する
- [ ] ソナー報告の定型文を辞書化する
- [ ] 雷撃報告の定型文を辞書化する
- [ ] 航海長報告の定型文を辞書化する

## Phase 5: マニュアルの英語対応

- [ ] `manual/` の英語版構成を決める
- [ ] `manual/index.html` に `JP / EN` 導線を追加する
- [ ] 英語版 `overview / captain / sonar / torpedo / navigation / campaign` を作成する
- [ ] 上級資料への英語導線を追加する

## Phase 6: 公開対応

- [ ] 公開URLで `JP / EN` が正常に切替できるか確認する
- [ ] モバイル幅で言語切替UIが崩れないか確認する
- [ ] 英語UIで Stage I を最初から最後まで通し確認する
- [ ] プレイマニュアル英語版のリンク切れを確認する

---

## 優先実装順

1. `JP / EN` 切替土台
2. ヘッダーと主要ボタン
3. 役職名とHUD見出し
4. 主要報告文
5. マニュアル英語版
6. ログ全文言

---

## 用語統一案

| 日本語 | 英語候補 |
| --- | --- |
| 艦長 | Captain |
| ソナー員 | Sonar |
| 雷撃士 | Torpedo Officer |
| 航海長 | Navigator |
| 方位 | Bearing |
| 距離 | Range |
| 射程 | Range |
| 速力 | Speed |
| 深度 | Depth |
| 発射解 | Firing Solution |
| TMA 解 | Firing Solution |
| 急速潜航 | Alarm Dive |
| 潜望鏡深度 | Periscope Depth |
| 浮上双眼鏡 | Surface Binoculars |
| 被探知回避 | Avoid Detection |
| 接敵維持 | Maintain Contact |
| 静粛 | Silent Running |
| 深深度退避 | Deep Evasion |
| 全速離脱 | Full Speed Egress |

---

## リスクと注意点

- `script.js` に動的文言が多いため、静的HTMLだけ直しても不十分
- 英語で文字数が伸びるため、ヘッダーや右サイドで折返し確認が必要
- 既存の日本語ログ生成ロジックは、定型句分解が必要になる可能性がある
- マニュアルを日本語だけ残すと、海外プレイヤー導線が途中で切れる
- 辞書キーが欠落した場合のフォールバック方針を先に決める必要がある

対応方針:

- ヘッダー帯は折返し許可を前提にする
- 右サイドのボタン群は `font-size: clamp()` と `min-width` 再調整で崩れを抑える
- 長い英語ラベルは必要に応じて短縮形を採用する
- 辞書キー欠落時は、初期実装では `日本語へフォールバック` を採用する

---

## 公開とリポジトリ前提

- 実装対象は `/Users/masatoueda/Documents/なんでも/SilentDepth/`
- このディレクトリは git 管理下にある
- 公開先は GitHub + Cloudflare Pages
- 公開確認は `https://silentdepth.pages.dev/` で行う

---

## まず着手すべき最小セット

- ヘッダーに `JP / EN` 切替
- 役職タブと主要コマンドの英語化
- Tactical Strip と右サイド見出しの英語化
- 英語版 `manual/index.html`

この4点が入るだけで、海外プレイヤーは「どう遊び始めるか」までは理解できるようになる。
