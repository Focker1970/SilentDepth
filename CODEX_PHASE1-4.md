# SilentDepth — Phase 1〜4 実装サマリー（Codex引き継ぎ用）

作成日: 2026-07-02（難易度スイッチ追記: 2026-07-02、戦闘海域拡大追記: 2026-07-03）  
対象ファイル: `script.js`（3330行）、`index.html`（450行）  
設計背景: `Uボート位置.txt` を元にアナログ可視化システムを段階実装。  
詳細設計: `PLAN_UBOAT_POSITION.md`、`PLAN_UBOAT_AREA.md`

---

## コア設計原則

**`contact.x` / `contact.y` はプレイヤーに見せない。**

- `state.contacts[]` = シミュレーション真値（内部専用）
- `state.observedContacts` = プレイヤー知識層（Phase 1で追加）

情報フロー:
```
ソナー(方位のみ) ──┐
                   ├→ TDC → 進角計算 → fireTorpedo
潜望鏡(距離のみ) ──┤
プロット盤(交差) ──┘
```

---

## Phase 1: 情報モデル分離

### state への追加（script.js:366〜417）

```js
// state オブジェクト内に追加
difficulty: "easy",       // "easy" | "historical"（script.js:342）
periscopeControl: {
  reticleReading: 3.0,    // レティクル読取値（目盛り数）
  focusContactId: null,   // 潜望鏡の焦点コンタクトID
  suspectedType: null,    // 直前測定時の艦種
  lastMeasuredRange: null // 直前測定距離(m)
},
tdc: {
  bearing: null,              // 目標方位(度)
  range: null,                // 距離(m)
  speedKt: 3.0,              // 目標速力(kt)
  aob: 90,                   // 艦首角(度)
  gyroAngle: null,            // TDC出力: 進角(度)
  absoluteFireBearing: null,  // TDC出力: 絶対発射方位
  valid: false               // 発射可否フラグ
},
// ...
observedContacts: new Map(), // id → ObservedEntry
observedSampleTimer: 0
```

**ObservedEntry 構造:**

```js
{
  id: contactId,         // state.contacts[i].id と一致
  identified: false,
  suspectedType: null,
  bearingLog: [
    { time, bearing, subX, subY }, // max 12件
    ...
  ],
  lastRange: null,       // measurePeriscopeRange() が書き込む
  estimatedSpeed: null,
  plotEstimate: null,
  lastSeenTime: state.time
}
```

### 追加関数（script.js:1211〜1256）

```js
function getOrCreateObserved(contactId)
// observedContacts から取得、なければ初期構造で新規作成して返す

function updateObservedContacts(deltaTime)
// OBSERVATION_INTERVAL=3秒 ごとに sonarContacts から bearingLog に追記
// BEARING_LOG_LIMIT=12 を超えたら古いものを shift で削除
// state.time, sub.x, sub.y を記録
```

### 呼び出し箇所

- `update()` ループ内: `updateObservedContacts(deltaTime)` （script.js:2628）
- `resetGame()`: `state.observedContacts.clear()` （script.js:1986）

---

## Phase 2: ソナー方位化 + プロット盤

### buildSonarContacts の変更（script.js:1191〜1209）

**変更前:** `return { contact, range, relBearing, strength, audible }`  
**変更後:** `return { contact, relBearing, strength, audible }`  
→ range を返さない。プレイヤーに距離情報を与えない。

### 追加関数: drawBearingPlot（script.js:2751〜2805）

```js
function drawBearingPlot(camera)
// ソナー席・航海長席のみ表示 (station !== "sonar" && station !== "navigation" で return)
// observedContacts の bearingLog 全サンプルを方位線として描画
//   - 古いサンプル: alpha = max(0, 0.55 - age * 0.04) の破線（時間で減衰）
//   - 最新サンプル: 輝度高い実線 + ラベル（接触名 + 方位度数）
// 線の方向: toRadians(sample.bearing) の方向へ canvas 端まで延長
```

### render() への追加（script.js:3147）

```js
drawBearingPlot(camera);  // drawContacts の後、drawTorpedoes の前に挿入
```

---

## Phase 3: 潜望鏡レティクル距離測定

### 定数（script.js:128〜130）

```js
const MAST_HEIGHT = { escort: 14, flagship: 18, convoy: 12 }; // メートル
const MAST_K = 1600;          // 焦点距離換算係数
const RETICLE_TICK_SPACING = 20; // Canvas ピクセル / 目盛り1本
```

### DOM 要素取得（script.js:93〜101）

```js
const reticleDecButton      = document.getElementById("reticle-dec");
const reticleIncButton      = document.getElementById("reticle-inc");
const reticleResetButton    = document.getElementById("reticle-reset");
const rangeMeasureButton    = document.getElementById("range-measure");
const periscopeMeasureCard  = document.getElementById("periscope-measure-card");
const periscopeContactNode  = document.getElementById("periscope-contact");
const reticleReadingNode    = document.getElementById("reticle-reading");
const periscopeRangeResultNode = document.getElementById("periscope-range-result");
const typeSelectNode        = document.getElementById("periscope-type-select");
```

### 追加関数（script.js:2956〜3014）

```js
function updatePeriscopeControl()
// 潜望鏡内で visualDetected な contact を focusContactId に設定
// station==="captain" && viewMode==="periscope" のときだけ periscopeMeasureCard を表示
// reticleReadingNode のテキストを更新

function measurePeriscopeRange()
// typeSelectNode.value で艦種取得 → MAST_HEIGHT から mastH 取得
// 距離算出: measured = round(MAST_K * mastH / (reticleReading * RETICLE_TICK_SPACING))
// ctrl.lastMeasuredRange = measured
// focusContactId があれば getOrCreateObserved() で observed.lastRange に記録
// addLog() と setStatus() でプレイヤーに通知
```

### drawOpticsOverlay の改修（script.js:3016〜3133）

潜望鏡モード (`viewMode === "periscope"`) のブランチ:

1. **暗幕 + 円形くり抜き**
   ```js
   ctx.fillRect(0,0,w,h);
   ctx.globalCompositeOperation = "destination-out";
   ctx.arc(cx, cy, R=170, 0, Math.PI*2); ctx.fill();
   ctx.globalCompositeOperation = "source-over";
   ```

2. **レティクル目盛り**（水平線上に i=1〜8 の目盛り）
   ```js
   RETICLE_TICK_SPACING=20px 間隔、4の倍数に数字ラベル
   ```

3. **艦影シルエット（円内クリップ）**
   ```js
   ctx.save();
   ctx.beginPath(); ctx.arc(cx,cy,R,...); ctx.clip();
   // 各 contact の pixH = clamp(MAST_K * mastH / rng, 3, R*1.5)
   // hullW = clamp(pixH * 2.4, 8, 90)
   // px = cx + (relB / FOV) * R  (FOV = stable?38:32)
   ctx.fillRect(px - hullW/2, cy - 5, hullW, 11);   // 船体
   ctx.fillRect(px - 1.5, cy - pixH, 3, pixH);       // マスト
   // focusContactId なら黄色の選択枠を描画
   ctx.restore();
   ```

4. **読取値インジケータ（黄破線）**
   ```js
   readX = cx + reticleReading * RETICLE_TICK_SPACING
   // readX が円内なら縦の黄色破線を描画
   ```

### HTML 追加（index.html:229〜254）

`data-panel="captain"` セクション内:

```html
<div class="console-card" id="periscope-measure-card" style="display:none">
  <span class="label">Periscope Measurement</span>
  <p id="periscope-contact" class="support-text">焦点目標: なし</p>
  <select id="periscope-type-select">
    <option value="">-- 不明 --</option>
    <option value="convoy">商船</option>
    <option value="flagship">重要輸送船</option>
    <option value="escort">駆逐艦</option>
  </select>
  <strong id="reticle-reading">3.0</strong>
  <button id="reticle-dec">−0.5</button>
  <button id="reticle-reset">リセット</button>
  <button id="reticle-inc">+0.5</button>
  <button id="range-measure">距離測定 → TDC</button>
  <p id="periscope-range-result">距離: 未測定</p>
</div>
```

### イベントリスナー（script.js:3224〜3237）

```js
reticleDecButton?.addEventListener("click", () => {
  state.periscopeControl.reticleReading = Math.max(0.5, +(reticleReading - 0.5).toFixed(1));
  updatePeriscopeControl();
});
reticleIncButton?.addEventListener("click", () => { /* +0.5, max 8.0 */ });
reticleResetButton?.addEventListener("click", () => {
  state.periscopeControl.reticleReading = 3.0;
  periscopeRangeResultNode.textContent = "距離: 未測定";
  updatePeriscopeControl();
});
rangeMeasureButton?.addEventListener("click", measurePeriscopeRange);
```

### update() ループへの追加（script.js:1902〜1903）

```js
updateTDCDisplay();
updatePeriscopeControl();
```

---

## Phase 4: TDC 統合

### DOM 要素取得（script.js:102〜113）

```js
const tdcBearingNode      = document.getElementById("tdc-bearing");
const tdcRangeNode        = document.getElementById("tdc-range");
const tdcSpeedNode        = document.getElementById("tdc-speed");
const tdcAobNode          = document.getElementById("tdc-aob");
const tdcGyroNode         = document.getElementById("tdc-gyro");
const tdcValidNode        = document.getElementById("tdc-valid");
const tdcSyncBearingButton = document.getElementById("tdc-sync-bearing");
const tdcSyncRangeButton   = document.getElementById("tdc-sync-range");
const tdcSpeedDecButton    = document.getElementById("tdc-speed-dec");
const tdcSpeedIncButton    = document.getElementById("tdc-speed-inc");
const tdcAobDecButton      = document.getElementById("tdc-aob-dec");
const tdcAobIncButton      = document.getElementById("tdc-aob-inc");
```

### 追加関数（script.js:2894〜2954）

```js
function computeTDCSolution()
// 正弦定理で進角を計算:
//   sinLead = (tdc.speedKt / TORPEDO_SPEED) * sin(toRadians(tdc.aob))
//   if |sinLead| > 1 → valid=false (解なし)
//   leadAngle = asin(sinLead) * 180 / PI
//   absoluteFireBearing = tdc.bearing + leadAngle
//   gyroAngle = normalizeAngle(absoluteFireBearing - sub.heading)
//   valid = |gyroAngle| <= TORPEDO_GYRO_LIMIT(80°)
//         && (range===null || range <= TORPEDO_MAX_RANGE(1800))

function syncTDCBearing()
// sonarContacts[0] から bearing(sub, contact) を tdc.bearing に書き込み
// → computeTDCSolution() → updateTDCDisplay()

function syncTDCRange()
// periscopeControl.lastMeasuredRange を tdc.range に書き込み
// → computeTDCSolution() → updateTDCDisplay()

function updateTDCDisplay()
// #tdc-bearing, #tdc-range, #tdc-speed, #tdc-aob, #tdc-gyro, #tdc-valid を更新
// tdc.valid=true なら #tdc-valid を緑"発射可"、false なら赤"範囲外"
```

### fireTorpedo での TDC 使用（script.js:2229〜2233）

```js
const usesTDC = state.tdc.valid && state.tdc.absoluteFireBearing !== null;
const fireHeading = usesTDC ? state.tdc.absoluteFireBearing : target.leadBearing;
const fireGyro    = usesTDC ? state.tdc.gyroAngle           : target.gyroAngle;
const fireLife    = (usesTDC && state.tdc.range !== null)
  ? state.tdc.range / (TORPEDO_SPEED * 6.6) + 12
  : target.interceptTime + 12;
```

TDC が valid でない場合は従来の自動計算 (`target.leadBearing` 等) にフォールバック。  
Historical モードでは後述の難易度チェックで発射自体がブロックされる。

### HTML 追加（index.html:339〜372）

`data-panel="torpedo"` セクション内、Firing Sequence カードの直後:

```html
<div class="console-card" id="tdc-card">
  <span class="label">Torpedo Data Computer</span>
  <dl class="duty-list compact-duty">
    <div>
      <dt>方位 Bearing</dt>
      <dd><strong id="tdc-bearing">---</strong>°
          <button id="tdc-sync-bearing">ソナー同期</button></dd>
    </div>
    <div>
      <dt>距離 Range</dt>
      <dd><strong id="tdc-range">---</strong>m
          <button id="tdc-sync-range">潜望鏡同期</button></dd>
    </div>
    <div>
      <dt>目標速力 Speed</dt>
      <dd><button id="tdc-speed-dec">−</button>
          <strong id="tdc-speed">3.0</strong>kt
          <button id="tdc-speed-inc">+</button></dd>
    </div>
    <div>
      <dt>艦首角 AOB</dt>
      <dd><button id="tdc-aob-dec">−5°</button>
          <strong id="tdc-aob">+90</strong>°
          <button id="tdc-aob-inc">+5°</button></dd>
    </div>
  </dl>
  <div>
    <span>TDC出力 進角:</span>
    <strong id="tdc-gyro">---</strong>°
    <span id="tdc-valid">---</span>
  </div>
</div>
```

### イベントリスナー（script.js:3239〜3260）

```js
tdcSyncBearingButton?.addEventListener("click", syncTDCBearing);
tdcSyncRangeButton?.addEventListener("click", syncTDCRange);
tdcSpeedDecButton?.addEventListener("click", () => {
  state.tdc.speedKt = Math.max(0, +((state.tdc.speedKt - 0.5).toFixed(1)));
  computeTDCSolution(); updateTDCDisplay();
});
tdcSpeedIncButton?.addEventListener("click", () => { /* +0.5, max 20 */ });
tdcAobDecButton?.addEventListener("click", () => {
  state.tdc.aob = normalizeAngle(state.tdc.aob - 5);
  computeTDCSolution(); updateTDCDisplay();
});
tdcAobIncButton?.addEventListener("click", () => { /* +5 */ });
```

---

## 難易度スイッチ（Easy / Historical）

### 概要

| モード | 発射条件 |
|--------|---------|
| Easy（デフォルト） | TDC未入力でも自動計算でフォールバック発射可 |
| Historical | `tdc.valid === true` でなければ発射ブロック |

### state への追加（script.js:342）

```js
difficulty: "easy",  // "easy" | "historical"
```

### DOM 要素取得（script.js:114〜115）

```js
const difficultyToggleButton = document.getElementById("difficulty-toggle");
const difficultyLabelNode    = document.getElementById("difficulty-label");
```

### 追加関数: toggleDifficulty（script.js:2903〜2917）

```js
function toggleDifficulty()
// state.difficulty を "easy" ↔ "historical" で切替
// difficultyToggleButton のテキストと色を更新（Easy=緑 / Historical=黄）
// setStatus() でモード変更をプレイヤーに通知
```

### fireTorpedo への追加ガード（script.js:2220〜2223）

既存の `!target.shotValid` チェックの直後、`sub.torpedoes -= 1` の直前に挿入:

```js
if (state.difficulty === "historical" && !state.tdc.valid) {
  setStatus("Historical モード: TDCで方位・距離・速力・AOBを入力して発射解を完成させてください。", "warning");
  addLog("雷撃保留。TDC未入力（Historicalモード）。");
  return;
}
```

### HTML 追加（index.html: log-head 内）

```html
<div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
  <button id="restart" class="restart-button" type="button">新任務</button>
  <div style="display:flex;align-items:center;gap:6px">
    <span style="font-size:11px;color:#a5c1cd">難易度:</span>
    <button id="difficulty-toggle" type="button" style="color:#9bd9a5;...">Easy</button>
  </div>
</div>
```

### イベントリスナー（script.js:3285）

```js
difficultyToggleButton?.addEventListener("click", toggleDifficulty);
```

---

## 戦闘海域拡大（Uボート戦闘海域広さ.txt 準拠）

### 目的

資料の「スケールの極端なギャップ」を成立させる。ソナー範囲 > 視認範囲 > 魚雷射程 の順序を修正し、狭くて即接敵になっていた戦場を「静かな狩り→一瞬の判断」の2段階に再構成。

### 変更 A: ワールド 2.5× 拡大（script.js:123〜124）

```js
const WORLD = { width: 6000, height: 3750 };       // 旧: 2400×1500
const ESCAPE_ZONE = { x: 5400, y: 3200, radius: 240 }; // 旧: (2140, 1240, r180)
```

### 変更 B: 自艦初期位置（script.js:402〜403, 1974〜1975）

```js
// state.submarine と resetGame() の両方
x: 500,   // 旧: 320
y: 2600,  // 旧: 1030
```

### 変更 C: コンボイ再配置（script.js:1110〜1114）

```js
state.contacts = [
  createContact("flagship", { x: 4200, y: 1400, heading: 10 }),
  createContact("convoy",   { x: 4400, y: 1600, heading: 8 }),
  createContact("convoy",   { x: 4600, y: 1300, heading: 12 }),
  createContact("escort",   { x: 3900, y: 1700, heading: 16 }),
  createContact("escort",   { x: 4800, y: 1100, heading: 4 })
];
```

自艦-コンボイ間の初期距離 ≈ 3900 px（ソナー圏外）。

### 変更 D: ソナー範囲 1.67× 拡大（script.js:1202）

```js
const strength = clamp(
  1 - range / 2000 + contact.speed / 12 - sub.depth / 500 + (silentRunning ? 0.08 : 0),
  0, 1
);
// 旧: range / 1200
```

### 変更 E: 視認距離拡大（script.js:1276〜1280）

```js
if (viewMode === "binocular" && sub.depth < 5) {
  visible = range < 2400 && relBearing < 55;    // 旧: 1400
} else if (viewMode === "periscope" && sub.depth < 18) {
  visible =
    range < (nav.periscopeStable ? 2100 : 1900) &&  // 旧: 1020 / 900
    relBearing < (nav.periscopeStable ? 38 : 32);
}
```

これで `視認距離(2100) > 魚雷射程(1800)` の順序が成立し、「見て測って撃つ」フローが強制される。

### 変更 F: 駆逐艦挙動チューニング（script.js:2351〜2364）

| パラメータ | 旧 | 新 |
|-----------|-----|-----|
| 探知チェック距離 | 620 | **800** |
| 追跡最高速度 | 6.6 | **5.5** |
| 哨戒速度 | 4.8 | **3.6** |
| alert 上昇率 | +0.18/s | **+0.09/s** |
| alert 減衰率 | -0.08/s | **-0.05/s** |

```js
const hearsSub = range < 800 - sub.depth * 0.8 + sub.noise * 260 || contact.alert > 0.55;
// ...
contact.speed += (5.5 - contact.speed) * Math.min(1, deltaTime * 0.8);
contact.alert = clamp(contact.alert + deltaTime * 0.09 + sub.noise * 0.02, 0, 1);
// else:
contact.speed += (3.6 - contact.speed) * Math.min(1, deltaTime * 0.4);
contact.alert = clamp(contact.alert - deltaTime * 0.05, 0, 1);
```

### 距離階層（変更後）

```
ソナー範囲:  2000 px  ← 遠方から微かに聞こえる
視認範囲:    1900〜2400 px  ← 潜望鏡・双眼鏡
魚雷有効:    1800 px  ← 「至近戦」の維持（変更なし）
firingWindow: 1400 px  ← フェーズ判定の「攻撃圏」（変更なし）
攻撃射程:    190 px  ← 駆逐艦の爆雷（変更なし）
```

### 想定タイムライン

| 経過時間 | 状況 |
|---------|------|
| 0秒 | ワールド西側で漂う、静寂 |
| 60〜90秒 | 巡航3ktで東進、ソナーがざわつき始める |
| 2〜3分 | 潜望鏡深度で艦影が視認可能に |
| 3〜4分 | 距離測定→TDC入力→発射 |
| 発射後 | 駆逐艦警戒上昇、離脱海域(5400, 3200)まで逃走 |

---

## ゲームプレイループ（統合後）

```
1. ソナー席
   → buildSonarContacts() で relBearing + audibility のみ取得
   → updateObservedContacts() が 3秒ごと bearingLog に記録
   → drawBearingPlot() でマップに方位線を描画
   → 複数の線の交差点でプレイヤーが位置を推定

2. 艦長席（潜望鏡モード）
   → 潜望鏡円内に艦影シルエットが高さ比で描画される
   → typeSelectNode で艦種を選択（商船/重要輸送船/駆逐艦）
   → reticle-dec/inc でマストが何目盛りか調整
   → "距離測定 → TDC" ボタン → measurePeriscopeRange()
   → measured = MAST_K * mastH / (reading * TICK_SPACING) を計算
   → lastMeasuredRange と observed.lastRange に保存

3. 雷撃席 TDCカード
   → "ソナー同期" → syncTDCBearing() で tdc.bearing 設定
   → "潜望鏡同期" → syncTDCRange() で tdc.range 設定
   → Speed ±0.5 で目標速力を手動調整
   → AOB ±5° で艦首角を手動調整
   → computeTDCSolution() が自動的に進角を計算
   → tdc-valid が "発射可" になったら発射シーケンスへ

4. 発射
   → fireTorpedo() が tdc.valid を確認
   → Historical モード かつ tdc.valid=false → ブロック（メッセージ表示）
   → tdc.valid=true → tdc.absoluteFireBearing で魚雷を誘導
   → Easy モード かつ tdc.valid=false → 旧自動計算にフォールバック
```

---

## 定数一覧

| 定数 | 値 | 意味 |
|------|-----|------|
| `MAST_HEIGHT.escort` | 14 | 駆逐艦マスト高(m) |
| `MAST_HEIGHT.flagship` | 18 | 重要輸送船マスト高(m) |
| `MAST_HEIGHT.convoy` | 12 | 商船マスト高(m) |
| `MAST_K` | 1600 | 潜望鏡焦点距離係数 |
| `RETICLE_TICK_SPACING` | 20 | Canvas px / 目盛り1本 |
| `TORPEDO_SPEED` | 22 | 魚雷速力(kt相当) |
| `TORPEDO_MAX_RANGE` | 1800 | 最大有効距離(m) |
| `TORPEDO_GYRO_LIMIT` | 80 | 最大進角(度) |

---

## 参照行番号（script.js）

| Phase | 対象 | 行番号 |
|-------|------|--------|
| 1 | `state.periscopeControl` 定義 | 366〜371 |
| 1 | `state.tdc` 定義 | 372〜380 |
| 1 | `state.observedContacts` 定義 | 416〜417 |
| 1 | `getOrCreateObserved()` | 1211〜1227 |
| 1 | `updateObservedContacts()` | 1229〜1256 |
| 2 | `buildSonarContacts()` | 1191〜1209 |
| 2 | `drawBearingPlot()` | 2751〜2805 |
| 2 | `render()` 内の呼び出し | 3147 |
| 3 | 定数 MAST_HEIGHT/K/TICK | 128〜130 |
| 3 | DOM refs（レティクル系） | 93〜101 |
| 3 | `updatePeriscopeControl()` | 2956〜2982 |
| 3 | `measurePeriscopeRange()` | 2984〜3014 |
| 3 | `drawOpticsOverlay()` | 3016〜3133 |
| 3 | イベントリスナー（レティクル） | 3224〜3237 |
| 4 | DOM refs（TDC系） | 102〜113 |
| 4 | `computeTDCSolution()` | 2894〜2917 |
| 4 | `syncTDCBearing()` | 2919〜2929 |
| 4 | `syncTDCRange()` | 2931〜2941 |
| 4 | `updateTDCDisplay()` | 2943〜2954 |
| 4 | `fireTorpedo()` TDC分岐 | 2229〜2233 |
| 4 | イベントリスナー（TDC） | 3239〜3260 |
| 難易度 | `state.difficulty` 定義 | 342 |
| 難易度 | DOM refs（difficulty系） | 114〜115 |
| 難易度 | `toggleDifficulty()` | 2903〜2917 |
| 難易度 | `fireTorpedo()` Historical ガード | 2220〜2223 |
| 難易度 | イベントリスナー（difficulty） | 3285 |
| 海域 | `WORLD` / `ESCAPE_ZONE` | 123〜124 |
| 海域 | 自艦初期位置（state / resetGame） | 402〜403 / 1974〜1975 |
| 海域 | `seedContacts()` 座標 | 1110〜1114 |
| 海域 | `buildSonarContacts()` ソナー距離式 | 1202 |
| 海域 | `updateVisualContacts()` 視認距離 | 1276〜1280 |
| 海域 | `updateContacts()` 駆逐艦挙動 | 2351〜2364 |

---

## 参照行番号（index.html）

| Phase | 要素ID | 行番号 |
|-------|--------|--------|
| 3 | `#periscope-measure-card` | 229〜254 |
| 3 | `#periscope-type-select` | 234〜239 |
| 3 | `#reticle-reading` | 243 |
| 3 | `#range-measure` | 251 |
| 3 | `#periscope-range-result` | 253 |
| 4 | `#tdc-card` | 339〜372 |
| 4 | `#tdc-bearing` / `#tdc-sync-bearing` | 344 |
| 4 | `#tdc-range` / `#tdc-sync-range` | 348 |
| 4 | `#tdc-speed` / `#tdc-speed-dec` / `#tdc-speed-inc` | 353〜355 |
| 4 | `#tdc-aob` / `#tdc-aob-dec` / `#tdc-aob-inc` | 362〜363 |
| 4 | `#tdc-gyro` / `#tdc-valid` | 369〜370 |
| 難易度 | `#difficulty-toggle`（log-head内） | 172 |

---

## 未実装（Phase 5 オプション）

- Marinequadrat グリッド座標系 + エニグマ電文ミッション
- 戦略層のゲームループ（司令部通信 → 航海長が迎撃点計算）
- Phase 1〜4 完成後に実装可否を判断

---

## 公開情報（2026-07-05）

| 項目 | 値 |
|------|-----|
| GitHub | https://github.com/Focker1970/SilentDepth |
| 公開URL | https://silentdepth.pages.dev/ |
| ホスティング | Cloudflare Pages |
| デプロイ | `git push origin main` で自動デプロイ |

現時点の公開バージョンは Phase 0・Phase 2 P1 完了、Phase 1 P1 一部完了の状態。
