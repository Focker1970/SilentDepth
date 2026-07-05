# SilentDepth 統合プラン: アナログ可視化システム

参照資料: `Uボート位置.txt`
対象ゲーム: `index.html` / `script.js` / `style.css`
作成日: 2026-07-02

---

## 設計の核

**"contact.x と contact.y は、艦長にとっては存在しない情報である"**

現行コードは `contact.x, contact.y` を UI に直接露出している。この露出を段階的に閉じ、以下のアナログ手続きで距離・位置を得るように再構成する。

- ソナー → 方位のみ
- 潜望鏡レティクル → 距離のみ
- プロット盤（方位線の累積）→ 速度と概略位置
- TDC → 上記3つを統合して発射解を得る

---

## 元プランからの見直しポイント

### 弱点1: 資料と矛盾する記述があった

元プラン テーマ1で「艦長席+潜望鏡モード → 実位置表示」と書いた。
資料の「3. 潜望鏡のレティクル」は、潜望鏡でも距離は自動では出ない、レティクル目盛りで艦長が読む と明言している。神の目マップに戻る抜け道を残していた。

### 弱点2: 4テーマが「並列」で書かれていたが、実は依存関係がある

正しい依存関係:

```
[ソナー] 方位のみ ──┐
                    ├→ [TDC] 進角計算 → 発射
[潜望鏡] 距離のみ ──┤
                    │
[プロット盤] 速度推定 ─┘
```

TDCは他3つのアウトプットの合流点で、単独では成立しない。
元プランはTDCを P2 に落としていたが、これはむしろ「他3つが揃った後の必然」。
優先度ではなく順序で並べるべきだった。

### 弱点3: Marinequadratが「テキスト置換」で終わっていた

「AM 53」と表示するだけでは、単なるフレーバー。
資料が本当に示唆しているのは、司令部からグリッド情報を暗号電文で受け取り、航海長が海図で迎撃地点を計算するという戦略層のゲームループ。
Phase 2 扱いとし、Phase 1-4 が完成した後で検討する。

### 弱点4: 抜けていた要素

資料に「艦種別のマスト高（図鑑で確認）」とある。これは艦種識別ミニゲームが本来含意されていた。
元プランでは自動的にflagship/escort/convoyを区別していたが、この識別自体を艦長のスキルにできる。

---

## Phase 1: 情報モデルの分離（土台）

**目的**: 「実位置」と「観測位置」を分ける。以降の全ての変更の前提。

現行の state 構造改修:

```
state.contacts[]（従来）は「実位置」= シミュレーション用
  → UIには一切露出しない

新規 state.observedContacts[] を追加
  {
    id, type未確定/確定,
    bearingLog: [{time, bearing, subX, subY}],  ← ソナー由来
    lastRange: null | number,                    ← 潜望鏡由来
    estimatedSpeed: null | number,               ← プロット盤で推定
    plotEstimate: { x, y, uncertainty } | null   ← TMA計算結果
  }
```

**影響ファイル**: `script.js` (state 定義、`updateContacts`, `buildSonarContacts`)
**難易度**: 中（現行コードが `contact.x, contact.y` に直接依存している箇所を洗い出す必要）

---

## Phase 2: ソナーは方位だけ返す

**目的**: ソナー席から「距離」の自動表示を消す。

現行 `buildSonarContacts()` (script.js:299) は距離を返している:

```js
return { contact, range, relBearing, strength, audible };
```

これを:

```js
return { observedId, relBearing, strength, audible };  // range を消す
```

`sonarListNode` の表示から距離を削除。強度からの粗い距離感（「近い/中/遠い」）は残す。

**新規追加**: 方位ログの累積とプロット盤描画

- `buildSonarContacts()` 内で bearingLog に追記（3秒ごと）
- `drawContacts()` を改修し、ソナー席+航海長席では方位線のみ描画
- 自艦が移動すると方位線の起点も変わり、複数線の交差点が「推定位置」

**影響ファイル**: `script.js` (`buildSonarContacts`, `drawContacts`, `updateHud` のソナー表示)
**難易度**: 中

---

## Phase 3: 潜望鏡レティクルで距離を測る

**目的**: 距離情報の唯一の入手経路を潜望鏡経由に限定する。

現行 `drawOpticsOverlay()` (script.js:1239) を改修:

```
潜望鏡ブランチに:
1. 中央水平線 + 縦目盛り線を追加（ミル目盛り相当）
2. 検出済みcontactを艦種別シルエットで描画
   - 距離に応じた見かけの高さ = mastHeight * K / actualRange
   - mastHeight: escort=14m, flagship=18m, convoy=12m
3. 艦種は最初「?」表示、艦長が識別ボタンで確定
```

UI追加（艦長席パネル）:

- 「距離測定」ボタン: レティクル読取値から距離推定 → `observedContacts` に `lastRange` 保存
- 「艦種識別」プルダウン: プレイヤーが判断してタグ付け（誤識別するとマスト高が違い距離もズレる）

**影響ファイル**: `script.js` (`drawOpticsOverlay`, 新規UI用ハンドラ), `index.html` (艦長パネル拡張)
**難易度**: 中〜大（識別ミニゲームまでやるなら大）

---

## Phase 4: TDCが3つの入力を統合

**目的**: 「バラバラの数値をTDCに集約」の儀式を作る。

現行 `computeTorpedoSolution()` (script.js:229) を書き換え:

```js
function computeTorpedoSolutionFromTDC(observed, tdc) {
  // tdc.range, tdc.speed, tdc.aob, tdc.bearing から計算
  // ソナー実測値ではなく、プレイヤー入力値で計算する
  // 入力ミスがあればそのまま外れる
}
```

雷撃席UI (`data-panel="torpedo"`) を大改修:

- 距離ダイアル（潜望鏡測定値を「同期」ボタンでコピー）
- 速度ダイアル（プロット盤推定値を手動入力）
- AOBダイアル（潜望鏡観測から手動入力）
- 方位ダイアル（ソナー最新方位を「同期」で自動）
- 出力: 進角ダイアル（TDC出力）
- 「Los！」ボタン: TDC値で `fireTorpedo` 実行

現行の自動計算は debug モードとして残す（開発用）。

**影響ファイル**: `script.js` (`fireTorpedo`, `computeTorpedoSolution`, TDC state), `index.html` (torpedo panel全体)
**難易度**: 大

---

## Phase 5(オプション): 戦略層

Phase 1-4が完成した後の話。
Marinequadratグリッド + 暗号電文ミッション。
今回は詳細プランから外す。実装するかは基礎ができた後で判断。

---

## 実装順序の推奨

1. **Phase 1**（情報モデル分離）← ここは必ず最初
2. **Phase 2**（ソナー方位化）← 短時間で目に見える変化
3. **Phase 3**（潜望鏡レティクル）
4. **Phase 4**（TDC統合）

Phase 2 と Phase 3 の間で一度動作確認するとバグを抑えられる。

---

## 難易度切替の扱い

TDCの手動化は玄人向け。難易度スイッチを1つ入れることを提案:

- **Easy**: 現行の自動計算を残す（Phase 4のダイアルは参考表示のみ）
- **Historical**: プレイヤーがダイアル入力しないと発射不可

Phase 4 実装時に一緒に追加すれば、実装コストは大きくない。

---

## 現行コードの参照ポイント一覧

| Phase | 対象関数 / 定義 | 場所 |
|---|---|---|
| 1 | `state` 全体定義 | script.js:84-121 |
| 1 | `updateContacts` | script.js:795-845 |
| 2 | `buildSonarContacts` | script.js:299-316 |
| 2 | `drawContacts` | script.js:1103-1151 |
| 2 | `sonarListNode` 描画 | script.js:449-461 |
| 3 | `drawOpticsOverlay` | script.js:1239-1280 |
| 3 | 艦長パネル | index.html:152-179 |
| 4 | `computeTorpedoSolution` | script.js:229-297 |
| 4 | `fireTorpedo` | script.js:664-735 |
| 4 | 雷撃席パネル | index.html:203-229 |
