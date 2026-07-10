const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

const missionNode = document.getElementById("mission-text");
const stageBannerNode = document.getElementById("stage-banner");
const stageProgressNode = document.getElementById("stage-progress");
const stageSelectNode = document.getElementById("stage-select");
const zoneLabelNode = document.getElementById("zone-label");
const lightConditionNode = document.getElementById("light-condition");
const hullNode = document.getElementById("hull");
const batteryNode = document.getElementById("battery");
const depthNode = document.getElementById("depth");
const speedNode = document.getElementById("speed");
const noiseNode = document.getElementById("noise");
const torpedoesNode = document.getElementById("torpedoes");
const statusNode = document.getElementById("status");
const alertNode = document.getElementById("alert");
const clockNode = document.getElementById("clock");
const logNode = document.getElementById("log");
const hudPhaseNode = document.getElementById("hud-phase");
const hudPhaseNoteNode = document.getElementById("hud-phase-note");
const hudTriggerNode = document.getElementById("hud-trigger");
const hudTriggerNoteNode = document.getElementById("hud-trigger-note");
const hudObjectiveNode = document.getElementById("hud-objective");
const hudObjectiveNoteNode = document.getElementById("hud-objective-note");
const hudTorpedoStatusNode = document.getElementById("hud-torpedo-status");
const hudTorpedoNoteNode = document.getElementById("hud-torpedo-note");
const hudAcousticModeNode = document.getElementById("hud-acoustic-mode");
const hudAcousticNoteNode = document.getElementById("hud-acoustic-note");
const captainAlarmCardNode = document.getElementById("captain-alarm-card");
const alarmStateNode = document.getElementById("alarm-state");
const alarmTimerNode = document.getElementById("alarm-timer");
const alarmSummaryNode = document.getElementById("alarm-summary");
const alarmProgressNode = document.getElementById("alarm-progress");
const alarmOutlookNode = document.getElementById("alarm-outlook");
const alarmSkillSummaryNode = document.getElementById("alarm-skill-summary");
const alarmTaskListNode = document.getElementById("alarm-task-list");
const stationNameNode = document.getElementById("station-name");
const stationDescriptionNode = document.getElementById("station-description");
const phaseNameNode = document.getElementById("phase-name");
const phaseDescriptionNode = document.getElementById("phase-description");
const captainOrderNode = document.getElementById("captain-order");
const commandPriorityNode = document.getElementById("command-priority");
const sonarReportBriefNode = document.getElementById("sonar-report-brief");
const torpedoReportBriefNode = document.getElementById("torpedo-report-brief");
const navigationReportBriefNode = document.getElementById("navigation-report-brief");
const captainSummaryNode = document.getElementById("captain-summary");
const captainIntentNode = document.getElementById("captain-intent");
const sonarListNode = document.getElementById("sonar-list");
const torpedoSolutionNode = document.getElementById("torpedo-solution");
const navigationSummaryNode = document.getElementById("navigation-summary");
const sonarReportDetailNode = document.getElementById("sonar-report-detail");
const torpedoReportDetailNode = document.getElementById("torpedo-report-detail");
const navigationReportDetailNode = document.getElementById("navigation-report-detail");
const centerColumnNode = document.querySelector(".center-column");
const theatrePlotCardNode = document.getElementById("theatre-plot-card");
const theatrePlotLabelNode = document.getElementById("theatre-plot-label");
const theatrePlotNoteNode = document.getElementById("theatre-plot-note");
const theatrePlotCanvas = document.getElementById("theatre-plot-canvas");
const theatrePlotCtx = theatrePlotCanvas?.getContext("2d");
const captainDutyNode = document.getElementById("captain-duty");
const captainOpsNode = document.getElementById("captain-ops");
const captainReportNode = document.getElementById("captain-report");
const sonarDutyNode = document.getElementById("sonar-duty");
const sonarOpsNode = document.getElementById("sonar-ops");
const sonarReportNode = document.getElementById("sonar-report");
const torpedoDutyNode = document.getElementById("torpedo-duty");
const torpedoOpsNode = document.getElementById("torpedo-ops");
const torpedoReportNode = document.getElementById("torpedo-report");
const navigationDutyNode = document.getElementById("navigation-duty");
const navigationOpsNode = document.getElementById("navigation-ops");
const navigationReportNode = document.getElementById("navigation-report");
const torpedoSolutionRatingNode = document.getElementById("torpedo-solution-rating");
const torpedoGyroLimitNode = document.getElementById("torpedo-gyro-limit");
const torpedoSequenceStageNode = document.getElementById("torpedo-sequence-stage");
const torpedoSelectedTargetNode = document.getElementById("torpedo-selected-target");
const torpedoSelectedTubeNode = document.getElementById("torpedo-selected-tube");
const torpedoInputStatusNode = document.getElementById("torpedo-input-status");
const torpedoPrepareStatusNode = document.getElementById("torpedo-prepare-status");
const torpedoTubeStatusNode = document.getElementById("torpedo-tube-status");
const torpedoTubeBankNode = document.getElementById("torpedo-tube-bank");
const torpedoReserveCountNode = document.getElementById("torpedo-reserve-count");
const torpedoPostStatusNode = document.getElementById("torpedo-post-status");
const navApproachRatingNode = document.getElementById("nav-approach-rating");
const navHeadingErrorNode = document.getElementById("nav-heading-error");
const navDepthErrorNode = document.getElementById("nav-depth-error");
const navPeriscopeStabilityNode = document.getElementById("nav-periscope-stability");
const campaignTonnageNode = document.getElementById("campaign-tonnage");
const campaignHullNode = document.getElementById("campaign-hull");
const campaignBatteryNode = document.getElementById("campaign-battery");
const campaignReserveNode = document.getElementById("campaign-reserve");
const campaignResupplyNode = document.getElementById("campaign-resupply");
const campaignWolfpackNode = document.getElementById("campaign-wolfpack");
const campaignOutcomeNode = document.getElementById("campaign-outcome");
const campaignNoteNode = document.getElementById("campaign-note");
const campaignResupplyButton = document.getElementById("campaign-resupply-button");
const campaignDecisionCardNode = document.getElementById("campaign-decision-card");
const campaignDecisionSummaryNode = document.getElementById("campaign-decision-summary");
const campaignContinueButton = document.getElementById("campaign-continue-button");
const campaignReturnButton = document.getElementById("campaign-return-button");
const campaignSaveButton = document.getElementById("campaign-save-button");
const campaignResumeButton = document.getElementById("campaign-resume-button");
const campaignNewButton = document.getElementById("campaign-new-button");

const pingButton = document.getElementById("ping");
const captainPingButton = document.getElementById("captain-ping");
const silentButton = document.getElementById("silent");
const captainSilentButton = document.getElementById("captain-silent");
const fireButton = document.getElementById("fire");
const captainFireButton = document.getElementById("captain-fire");
const torpedoSelectButton = document.getElementById("torpedo-select");
const torpedoInputButton = document.getElementById("torpedo-input");
const torpedoPrepareButton = document.getElementById("torpedo-prepare");
const captainPeriscopeButton = document.getElementById("captain-periscope");
const captainBinocularButton = document.getElementById("captain-binocular");
const captainAlarmButton = document.getElementById("captain-alarm");
const captainNormalViewButton = document.getElementById("captain-normal-view");
const captainIntentApproachButton = document.getElementById("captain-intent-approach");
const captainIntentEvadeButton = document.getElementById("captain-intent-evade");
const captainIntentPeriscopeButton = document.getElementById("captain-intent-periscope");
const captainIntentSurfaceButton = document.getElementById("captain-intent-surface");
const captainIntentDeepButton = document.getElementById("captain-intent-deep");
const captainIntentQuietStarboardButton = document.getElementById("captain-intent-quiet-starboard");
const captainIntentEgressButton = document.getElementById("captain-intent-egress");
const surfaceAttackCardNode = document.getElementById("surface-attack-card");
const surfaceAttackSummaryNode = document.getElementById("surface-attack-summary");
const surfaceAttackDiveButton = document.getElementById("surface-attack-dive");
const surfaceAttackEgressButton = document.getElementById("surface-attack-egress");
const holdCourseButtons = [...document.querySelectorAll('[data-action="hold-course"]')];
const navHoldCourseButton = document.getElementById("nav-hold-course");
const audioToggleButton = document.getElementById("audio-toggle");
const voiceToggleButton = document.getElementById("voice-toggle");
const voiceModeToggleButton = document.getElementById("voice-mode-toggle");
const voiceStatusNode = document.getElementById("voice-status");
const restartButton = document.getElementById("restart");
const reticleDecButton = document.getElementById("reticle-dec");
const reticleIncButton = document.getElementById("reticle-inc");
const reticleResetButton = document.getElementById("reticle-reset");
const rangeMeasureButton = document.getElementById("range-measure");
const periscopeMeasureCard = document.getElementById("periscope-measure-card");
const opticsCardLabelNode = document.getElementById("optics-card-label");
const tdcCardNode = document.getElementById("tdc-card");
const periscopeContactNode = document.getElementById("periscope-contact");
const periscopeGuideNode = document.getElementById("periscope-guide");
const periscopeBearingNode = document.getElementById("periscope-bearing");
const periscopeRelativeNode = document.getElementById("periscope-relative");
const periscopeApparentNode = document.getElementById("periscope-apparent");
const periscopeAlignmentNode = document.getElementById("periscope-alignment");
const reticleReadingNode = document.getElementById("reticle-reading");
const periscopeRangeResultNode = document.getElementById("periscope-range-result");
const typeSelectNode = document.getElementById("periscope-type-select");
const periscopeLeftButton = document.getElementById("periscope-left");
const periscopeCenterButton = document.getElementById("periscope-center");
const periscopeRightButton = document.getElementById("periscope-right");
const opticsZoomWideButton = document.getElementById("optics-zoom-wide");
const opticsZoomStandardButton = document.getElementById("optics-zoom-standard");
const opticsZoomZoomButton = document.getElementById("optics-zoom-zoom");
const opticsTurnControlsNode = document.getElementById("optics-turn-controls");
const periscopeTypeRowNode = document.getElementById("periscope-type-row");
const periscopeReticleRowNode = document.getElementById("periscope-reticle-row");
const periscopeReticleControlsNode = document.getElementById("periscope-reticle-controls");
const periscopeRangeControlsNode = document.getElementById("periscope-range-controls");
const tdcBearingNode = document.getElementById("tdc-bearing");
const tdcRangeNode = document.getElementById("tdc-range");
const tdcSpeedNode = document.getElementById("tdc-speed");
const tdcAobNode = document.getElementById("tdc-aob");
const tdcSpeedSuggestNode = document.getElementById("tdc-speed-suggest");
const tdcAobSuggestNode = document.getElementById("tdc-aob-suggest");
const tdcEstimateNoteNode = document.getElementById("tdc-estimate-note");
const tdcGyroNode = document.getElementById("tdc-gyro");
const tdcValidNode = document.getElementById("tdc-valid");
const tdcSyncBearingButton = document.getElementById("tdc-sync-bearing");
const tdcSyncRangeButton = document.getElementById("tdc-sync-range");
const tdcApplySpeedButton = document.getElementById("tdc-apply-speed");
const tdcApplyAobButton = document.getElementById("tdc-apply-aob");
const tdcSpeedDecButton = document.getElementById("tdc-speed-dec");
const tdcSpeedIncButton = document.getElementById("tdc-speed-inc");
const tdcAobDecButton = document.getElementById("tdc-aob-dec");
const tdcAobIncButton = document.getElementById("tdc-aob-inc");
const difficultyToggleButton = document.getElementById("difficulty-toggle");
const difficultyLabelNode = document.getElementById("difficulty-label");
const timeScaleButtons = [...document.querySelectorAll("[data-timescale]")];

const speedButtons = [...document.querySelectorAll("[data-speed]")];
const depthButtons = [...document.querySelectorAll("[data-depth]")];
const turnButtons = [...document.querySelectorAll("[data-turn]")];
const stationTabs = [...document.querySelectorAll("[data-station]")];
const stationPanels = [...document.querySelectorAll("[data-panel]")];

const WORLD = { width: 12000, height: 8000 };
const WORLD_METERS_PER_SECOND_PER_KNOT = 0.5144;
const TACTICAL_PLOT_SCALE = 0.24;
const DEFAULT_ESCAPE_ZONE = { x: 11150, y: 7100, radius: 320 };
const TORPEDO_SPEED = 22;
const TORPEDO_MAX_RANGE = 2200;
const TORPEDO_GYRO_LIMIT = 80;
const TORPEDO_HIT_RADIUS = 28;
const TORPEDO_DUD_RATE = 0.08;
const ALARM_DIVE_DURATION = 30;
const BINOCULAR_SAFE_ESCORT_RANGE = 900;
const BINOCULAR_WARNING_ESCORT_RANGE = 1400;
const BINOCULAR_ALLOWED_DETECTION = 0.28;
const BINOCULAR_RISKY_DETECTION = 0.42;
const BINOCULAR_EXPOSURE_WARNING = 5;
const BINOCULAR_EXPOSURE_DANGER = 10;
const BINOCULAR_EXPOSURE_FORCED_DIVE = 15;
const BINOCULAR_RISKY_SHOT_ALARM_WINDOW = 12;
const SURFACE_ATTACK_DECISION_WINDOW = 8;
const SURFACE_EGRESS_CHASE_WINDOW = 24;
const ESCORT_SONAR_BLIND_RANGE = 120;
const ESCORT_ATTACK_RANGE = 210;
const ESCORT_CHASE_ATTACK_RANGE = 250;
const ESCORT_DEPTH_CHARGE_CAPACITY = 45;
const DEPTH_CHARGE_SINK_RATE_MIN = 2.6;
const DEPTH_CHARGE_SINK_RATE_MAX = 3.1;
const DEPTH_CHARGE_PATTERN_SPACING = 32;
const DEPTH_CHARGE_BASE_LETHAL_RADIUS = 28;
const DEPTH_CHARGE_BASE_DAMAGE_RADIUS = 85;
const DEPTH_CHARGE_JAM_BASE = 5.5;
const DEPTH_CHARGE_JAM_NEAR = 9;
const ESCORT_REACQUIRE_LOCKOUT = 5.5;
const UBOAT_CLASS = {
  name: "Type VII",
  lengthMeters: 67.1,
  practicalDepth: 230,
  crushDepth: 280,
  torpedoDepthMin: 10,
  torpedoDepthMax: 20
};
const TONNAGE_BY_TYPE = {
  convoy: 4200,
  flagship: 9000,
  escort: 1800
};
const CAMPAIGN_SAVE_KEY = "silentdepth-campaign-save-v1";
const MAST_HEIGHT = { escort: 14, flagship: 18, convoy: 12 };
const MAST_K = 1600;
const RETICLE_TICK_SPACING = 20;
const STATIONS = {
  captain: {
    label: "艦長席",
    description: "全体状況を把握し、速力と戦術命令を即断する。"
  },
  sonar: {
    label: "ソナー員席",
    description: "ヘッドホンで接触音を追い、方位と目標種別を聞き分ける。"
  },
  torpedo: {
    label: "雷撃席",
    description: "射角と距離を合わせ、最も良い一射を作る。"
  },
  navigation: {
    label: "航海長席",
    description: "深度、針路、離脱航路を管理して生還させる。"
  }
};

const ALARM_TASKS = {
  hatches: {
    label: "ハッチ閉鎖",
    role: "見張り員 / 当直将校",
    detail: "ハッチを閉鎖し、浸水を防ぐ。"
  },
  engines: {
    label: "機関切替",
    role: "機関員",
    detail: "ディーゼル停止、吸排気弁閉鎖、モーター起動。"
  },
  ballast: {
    label: "主バラスト注水",
    role: "機関長",
    detail: "ベント開放で主バラストへ注水する。"
  },
  planes: {
    label: "最大下げ角",
    role: "操舵手 / 潜舵手",
    detail: "潜舵を最大下げ角へ。"
  },
  bowShift: {
    label: "前部加重",
    role: "非番乗組員",
    detail: "前部へ移動し艦首を重くする。"
  }
};

const ALARM_TASK_FLOW = {
  hatches: { skill: "watch", baseDuration: 5.2, dependsOn: [] },
  engines: { skill: "engineer", baseDuration: 7.4, dependsOn: [] },
  ballast: { skill: "engineer", baseDuration: 5.8, dependsOn: ["engines"] },
  planes: { skill: "navigation", baseDuration: 4.8, dependsOn: [] },
  bowShift: { skill: "crew", baseDuration: 6.4, dependsOn: [] }
};

const GERMAN_REPEATERS = {
  alarmDiveStart: [
    {
      speakerRole: "captain",
      priority: "critical",
      germanText: "Alarm! Tauchen!",
      japaneseGloss: "アラーム、潜航",
      rate: 1.02,
      pitch: 0.9
    },
    {
      speakerRole: "watch",
      priority: "critical",
      germanText: "Alarmtauchen! Jawohl!",
      japaneseGloss: "急速潜航、了解",
      rate: 1.06,
      pitch: 1.12
    }
  ],
  alarmHatches: [
    {
      speakerRole: "watch",
      priority: "high",
      germanText: "Turmluk geschlossen!",
      japaneseGloss: "司令塔ハッチ閉鎖完了",
      rate: 1,
      pitch: 1.05
    }
  ],
  alarmEngines: [
    {
      speakerRole: "engineer",
      priority: "high",
      germanText: "Diesel stoppen! E-Maschinen laufen! Luftklappen dicht!",
      japaneseGloss: "ディーゼル停止、電動機始動、吸排気弁閉鎖完了",
      rate: 0.96,
      pitch: 0.82
    }
  ],
  alarmBallast: [
    {
      speakerRole: "engineer",
      priority: "high",
      germanText: "Hauptballast flutet!",
      japaneseGloss: "主バラスト注水中",
      rate: 0.94,
      pitch: 0.84
    }
  ],
  alarmPlanes: [
    {
      speakerRole: "navigation",
      priority: "high",
      germanText: "Tiefenruder hart runter!",
      japaneseGloss: "潜舵、最大下げ角",
      rate: 1,
      pitch: 0.9
    }
  ],
  alarmBowShift: [
    {
      speakerRole: "crew",
      priority: "normal",
      germanText: "Alles nach vorn!",
      japaneseGloss: "全員前へ",
      rate: 1.04,
      pitch: 1
    }
  ],
  alarmDiveSuccess: [
    {
      speakerRole: "navigation",
      priority: "high",
      germanText: "Tiefe erreicht!",
      japaneseGloss: "指定深度到達",
      rate: 0.98,
      pitch: 0.9
    }
  ],
  alarmDiveFailure: [
    {
      speakerRole: "engineer",
      priority: "critical",
      germanText: "Wassereinbruch! Tauchen verzögert!",
      japaneseGloss: "浸水、潜航遅延",
      rate: 1,
      pitch: 0.82
    }
  ],
  torpedoReady: [
    {
      speakerRole: "torpedo",
      priority: "high",
      germanText: "Rohr eins klar zum Schuss!",
      japaneseGloss: "一番発射管、発射準備完了",
      rate: 1.02,
      pitch: 0.94
    }
  ],
  torpedoFire: [
    {
      speakerRole: "captain",
      priority: "critical",
      germanText: "Los!",
      japaneseGloss: "撃て",
      rate: 1,
      pitch: 0.9
    }
  ],
  damageReport: [
    {
      speakerRole: "engineer",
      priority: "critical",
      germanText: "Wassereinbruch!",
      japaneseGloss: "浸水",
      rate: 1,
      pitch: 0.84
    }
  ],
  captainSpeedStop: [
    { speakerRole: "captain", priority: "high", germanText: "Maschinen stopp!", japaneseGloss: "機関停止", rate: 0.98, pitch: 0.88 }
  ],
  captainSpeedSlow: [
    { speakerRole: "captain", priority: "normal", germanText: "Langsame Fahrt voraus!", japaneseGloss: "微速前進", rate: 0.98, pitch: 0.9 }
  ],
  captainSpeedHalf: [
    { speakerRole: "captain", priority: "normal", germanText: "Halbe Fahrt voraus!", japaneseGloss: "半速前進", rate: 0.98, pitch: 0.9 }
  ],
  captainSpeedFull: [
    { speakerRole: "captain", priority: "high", germanText: "Äußerste Fahrt voraus!", japaneseGloss: "全速前進", rate: 1, pitch: 0.9 }
  ],
  captainDepth20: [
    { speakerRole: "captain", priority: "high", germanText: "Tauchen auf zwanzig Meter!", japaneseGloss: "20m へ潜航", rate: 0.98, pitch: 0.9 }
  ],
  captainDepth60: [
    { speakerRole: "captain", priority: "normal", germanText: "Tauchen auf sechzig Meter!", japaneseGloss: "60m へ潜航", rate: 0.98, pitch: 0.9 }
  ],
  captainDepth120: [
    { speakerRole: "captain", priority: "high", germanText: "Tauchen auf einhundertzwanzig Meter!", japaneseGloss: "120m へ潜航", rate: 0.98, pitch: 0.9 }
  ],
  captainDepth140: [
    { speakerRole: "captain", priority: "high", germanText: "Tauchen auf einhundertvierzig Meter!", japaneseGloss: "140m へ潜航", rate: 0.98, pitch: 0.9 }
  ],
  captainPeriscopeDepth: [
    { speakerRole: "captain", priority: "high", germanText: "Periskoptiefe halten!", japaneseGloss: "潜望鏡深度維持", rate: 0.98, pitch: 0.9 }
  ],
  captainPeriscopeUp: [
    { speakerRole: "captain", priority: "high", germanText: "Periskop hoch!", japaneseGloss: "潜望鏡上げ", rate: 1, pitch: 0.92 }
  ],
  captainPeriscopeDown: [
    { speakerRole: "captain", priority: "normal", germanText: "Periskop runter!", japaneseGloss: "潜望鏡下げ", rate: 1, pitch: 0.92 }
  ],
  captainRudderPort: [
    { speakerRole: "captain", priority: "normal", germanText: "Ruder hart Backbord!", japaneseGloss: "左舵一杯", rate: 1.02, pitch: 0.9 }
  ],
  captainRudderStarboard: [
    { speakerRole: "captain", priority: "normal", germanText: "Ruder hart Steuerbord!", japaneseGloss: "右舵一杯", rate: 1.02, pitch: 0.9 }
  ],
  helmNewCourse: [
    { speakerRole: "navigation", priority: "normal", germanText: "Neuer Kurs liegt an!", japaneseGloss: "新針路に乗った", rate: 1, pitch: 0.92 }
  ],
  helmDepthReached: [
    { speakerRole: "navigation", priority: "normal", germanText: "Tiefe erreicht!", japaneseGloss: "指定深度到達", rate: 0.98, pitch: 0.9 }
  ],
  helmDepth120Reached: [
    { speakerRole: "navigation", priority: "high", germanText: "Tiefe einhundertzwanzig Meter erreicht!", japaneseGloss: "120m 到達", rate: 0.98, pitch: 0.9 }
  ],
  watchTargetSighted: [
    { speakerRole: "watch", priority: "high", germanText: "Ziel in Sicht!", japaneseGloss: "目標視認", rate: 1.06, pitch: 1.06 }
  ],
  watchDestroyerSighted: [
    { speakerRole: "watch", priority: "high", germanText: "Zerstörer an Backbord!", japaneseGloss: "左舷に駆逐艦", rate: 1.06, pitch: 1.06 }
  ],
  watchSteamerSighted: [
    { speakerRole: "watch", priority: "normal", germanText: "Dampfer voraus!", japaneseGloss: "前方に商船", rate: 1.06, pitch: 1.06 }
  ],
  sonarContactAhead: [
    { speakerRole: "sonar", priority: "normal", germanText: "Schraubengeräusch voraus!", japaneseGloss: "前方にスクリュー音", rate: 1.02, pitch: 0.98 }
  ],
  sonarContactPort: [
    { speakerRole: "sonar", priority: "normal", germanText: "Schraubengeräusch Backbord!", japaneseGloss: "左舷にスクリュー音", rate: 1.02, pitch: 0.98 }
  ],
  sonarContactStarboard: [
    { speakerRole: "sonar", priority: "normal", germanText: "Schraubengeräusch Steuerbord!", japaneseGloss: "右舷にスクリュー音", rate: 1.02, pitch: 0.98 }
  ],
  sonarContactDestroyer: [
    { speakerRole: "sonar", priority: "high", germanText: "Schnelles Schraubengeräusch, vermutlich Zerstörer!", japaneseGloss: "高速スクリュー音、駆逐艦と思われる", rate: 1.02, pitch: 0.98 }
  ],
  sonarContactLost: [
    { speakerRole: "sonar", priority: "normal", germanText: "Kontakt verloren!", japaneseGloss: "接触喪失", rate: 1.02, pitch: 0.98 }
  ],
  sonarContactStronger: [
    { speakerRole: "sonar", priority: "normal", germanText: "Kontakt wird stärker!", japaneseGloss: "接触強まる", rate: 1.02, pitch: 0.98 }
  ],
  torpedoDataEntered: [
    { speakerRole: "torpedo", priority: "normal", germanText: "Daten eingegeben!", japaneseGloss: "諸元入力完了", rate: 1.02, pitch: 0.94 }
  ],
  torpedoSolutionReady: [
    { speakerRole: "torpedo", priority: "high", germanText: "Lösung steht!", japaneseGloss: "解成立", rate: 1.02, pitch: 0.94 }
  ],
  torpedoPrepareOrder: [
    { speakerRole: "captain", priority: "normal", germanText: "Rohr eins vorbereiten!", japaneseGloss: "一番発射管準備", rate: 1, pitch: 0.9 }
  ],
  torpedoPrepareAck: [
    { speakerRole: "torpedo", priority: "normal", germanText: "Rohr eins vorbereiten, jawohl!", japaneseGloss: "一番発射管準備、了解", rate: 1.02, pitch: 0.94 }
  ],
  torpedoHit: [
    { speakerRole: "torpedo", priority: "high", germanText: "Treffer!", japaneseGloss: "命中", rate: 1.04, pitch: 0.96 }
  ],
  torpedoMiss: [
    { speakerRole: "torpedo", priority: "high", germanText: "Daneben!", japaneseGloss: "外れ", rate: 1.04, pitch: 0.96 }
  ],
  damageEngine: [
    { speakerRole: "engineer", priority: "critical", germanText: "Maschinenschaden!", japaneseGloss: "機関損傷", rate: 1, pitch: 0.84 }
  ],
  engineAckStop: [
    { speakerRole: "engineer", priority: "normal", germanText: "Maschinen stopp, jawohl!", japaneseGloss: "機関停止、了解", rate: 0.98, pitch: 0.84 }
  ],
  engineStopped: [
    { speakerRole: "engineer", priority: "normal", germanText: "Maschinen gestoppt!", japaneseGloss: "機関停止完了", rate: 0.98, pitch: 0.84 }
  ],
  engineElectric: [
    { speakerRole: "engineer", priority: "normal", germanText: "E-Maschinen laufen!", japaneseGloss: "電動機運転中", rate: 0.98, pitch: 0.84 }
  ],
  engineDiesel: [
    { speakerRole: "engineer", priority: "normal", germanText: "Diesel laufen!", japaneseGloss: "ディーゼル運転中", rate: 0.98, pitch: 0.84 }
  ],
  engineBallastFlooded: [
    { speakerRole: "engineer", priority: "high", germanText: "Hauptballast geflutet!", japaneseGloss: "主バラスト注水完了", rate: 0.98, pitch: 0.84 }
  ]
};

const GERMAN_VOICE_FILE_ROOT = "audio/voice";
const GERMAN_VOICE_ASSET_VERSION = "20260703a";
function voiceAsset(fileName) {
  return `${GERMAN_VOICE_FILE_ROOT}/${fileName}?v=${GERMAN_VOICE_ASSET_VERSION}`;
}
const GERMAN_VOICE_FILES = {
  alarmDiveStart: [
    voiceAsset("captain_alarm_tauchen_alt.mp3"),
    voiceAsset("watch_alarmtauchen_jawohl.mp3")
  ],
  alarmHatches: [voiceAsset("watch_hatches_closed.mp3")],
  alarmEngines: [voiceAsset("engine_maschinen_gestoppt.mp3")],
  alarmBallast: [voiceAsset("engine_ballast_geflutet.mp3")],
  alarmPlanes: [voiceAsset("alarm_planes.mp3")],
  alarmDiveSuccess: [voiceAsset("helm_depth_reached.mp3")],
  torpedoReady: [voiceAsset("torpedo_rohr1_ready.mp3")],
  torpedoFire: [voiceAsset("captain_los.mp3")],
  damageReport: [voiceAsset("damage_wassereinbruch.mp3")],
  captainSpeedStop: [voiceAsset("captain_maschinen_stopp.mp3")],
  captainSpeedSlow: [voiceAsset("captain_langsame_fahrt.mp3")],
  captainSpeedHalf: [voiceAsset("captain_halbe_fahrt.mp3")],
  captainSpeedFull: [voiceAsset("captain_aeusserste_fahrt.mp3")],
  captainDepth20: [voiceAsset("captain_depth_020_order.mp3")],
  captainDepth60: [voiceAsset("captain_depth_060_order.mp3")],
  captainDepth120: [voiceAsset("captain_depth_120_order.mp3")],
  captainDepth140: [voiceAsset("captain_depth_140_order.mp3")],
  captainPeriscopeDepth: [voiceAsset("captain_periskoptiefe.mp3")],
  captainPeriscopeUp: [voiceAsset("captain_periscope_up.mp3")],
  captainPeriscopeDown: [voiceAsset("captain_periscope_down.mp3")],
  captainRudderPort: [voiceAsset("captain_ruder_backbord.mp3")],
  captainRudderStarboard: [voiceAsset("captain_ruder_steuerbord.mp3")],
  helmNewCourse: [voiceAsset("helm_neuer_kurs.mp3")],
  helmDepthReached: [voiceAsset("helm_depth_reached.mp3")],
  helmDepth120Reached: [voiceAsset("helm_depth_120_reached.mp3")],
  watchTargetSighted: [voiceAsset("watch_target_in_sight.mp3")],
  watchDestroyerSighted: [voiceAsset("watch_zerstoerer.mp3")],
  watchSteamerSighted: [voiceAsset("watch_dampfer.mp3")],
  sonarContact: [voiceAsset("sonar_contact.mp3")],
  sonarContactAhead: [voiceAsset("sonar_contact_ahead.mp3")],
  sonarContactPort: [voiceAsset("sonar_contact_port.mp3")],
  sonarContactStarboard: [voiceAsset("sonar_contact_starboard.mp3")],
  sonarContactDestroyer: [voiceAsset("sonar_contact_destroyer.mp3")],
  sonarContactLost: [voiceAsset("sonar_contact_lost.mp3")],
  sonarContactStronger: [voiceAsset("sonar_contact_stronger.mp3")],
  torpedoDataEntered: [voiceAsset("torpedo_daten.mp3")],
  torpedoSolutionReady: [voiceAsset("torpedo_solution_ready.mp3")],
  torpedoPrepareOrder: [voiceAsset("captain_rohr_vorbereiten.mp3")],
  torpedoPrepareAck: [voiceAsset("torpedo_rohr1_prepare_ack.mp3")],
  torpedoHit: [voiceAsset("torpedo_treffer.mp3")],
  torpedoMiss: [voiceAsset("torpedo_daneben.mp3")],
  damageEngine: [voiceAsset("damage_maschinenschaden.mp3")],
  engineAckStop: [voiceAsset("engine_maschinen_stopp_ack.mp3")],
  engineStopped: [voiceAsset("engine_maschinen_gestoppt.mp3")],
  engineElectric: [voiceAsset("engine_emaschinen_laufen.mp3")],
  engineDiesel: [voiceAsset("engine_diesel_laufen.mp3")],
  engineBallastFlooded: [voiceAsset("engine_ballast_geflutet.mp3")]
};

const ROLE_VOICE_ORDER = ["captain", "watch", "sonar", "torpedo", "engineer", "navigation", "crew"];
const ROLE_VOICE_PROFILES = {
  captain: { label: "艦長", cooldown: 0.9, voiceStyle: "command" },
  watch: { label: "見張り", cooldown: 1.1, voiceStyle: "watch" },
  sonar: { label: "ソナー員", cooldown: 1.8, voiceStyle: "report" },
  torpedo: { label: "雷撃士", cooldown: 1.2, voiceStyle: "combat" },
  engineer: { label: "機関部", cooldown: 1.2, voiceStyle: "engineering" },
  navigation: { label: "航海長", cooldown: 1.1, voiceStyle: "helm" },
  crew: { label: "乗組員", cooldown: 2.4, voiceStyle: "crew" }
};
const VOICE_PRIORITY_RULES = {
  critical: { rank: 0, repeatCooldown: 0.4 },
  high: { rank: 1, repeatCooldown: 1.6 },
  normal: { rank: 2, repeatCooldown: 3.2 }
};
const SONAR_SAMPLE_FILES = {
  escort: "audio/sonar_ship_escort.mp3",
  flagship: "audio/sonar_ship_flagship.mp3",
  convoy: "audio/sonar_ship_convoy.mp3"
};

const audioState = {
  context: null,
  masterGain: null,
  noiseGain: null,
  contactNodes: new Map(),
  enabled: false,
  voiceEnabled: true,
  voiceLanguage: "de-DE",
  voiceSourceMode: "asset",
  voiceQueue: [],
  voiceBusy: false,
  currentVoiceAudio: null,
  lastVoiceAt: new Map(),
  recentVoiceAt: new Map(),
  lastVoiceEntry: null,
  availableVoices: [],
  roleVoiceMap: new Map(),
  voicesInitialized: false,
  sonarSampleBuffers: new Map(),
  sonarSamplesLoading: null,
  useMediaElementSonarSamples: false,
  preferSonarSamples: false
};

let fallbackLoopHandle = null;

function drawFatalError(message) {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#04141d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff8b78";
  ctx.font = "bold 20px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillText("Startup Error", 36, 54);
  ctx.font = "14px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillText(String(message), 36, 82);
}

const BATTLE_PHASES = {
  alarmDive: "alarm_dive",
  patrol: "patrol",
  contact: "contact",
  submergedCombat: "submerged_combat",
  attack: "attack",
  egress: "egress",
  disabled: "disabled"
};

const ESCORT_AI_INTENTS = {
  escortReturn: "escort_return",
  investigateContact: "investigate_contact",
  attackRun: "attack_run",
  lostContactSearch: "lost_contact_search",
  surfacePursuit: "surface_pursuit"
};

const TORPEDO_SEQUENCE = {
  idle: "idle",
  targetSelected: "target_selected",
  dataEntered: "data_entered",
  preparing: "preparing",
  tubeReady: "tube_ready",
  fired: "fired",
  assessing: "assessing"
};

const TORPEDO_PREP_FLOW = {
  submerged: [
    { key: "flooded", label: "注水", duration: 18 },
    { key: "equalized", label: "均圧", duration: 12 },
    { key: "outerDoorOpen", label: "外扉開放", duration: 5 }
  ],
  surfaced: [
    { key: "outerDoorOpen", label: "外扉開放", duration: 4 }
  ]
};

const TORPEDO_TUBES = [
  { id: "bow-1", label: "I", arc: "bow" },
  { id: "bow-2", label: "II", arc: "bow" },
  { id: "bow-3", label: "III", arc: "bow" },
  { id: "bow-4", label: "IV", arc: "bow" },
  { id: "stern-1", label: "V", arc: "stern" }
];

const TORPEDO_RELOAD_TIME = {
  bow: { surfaced: 48, submerged: 78 },
  stern: { surfaced: 58, submerged: 92 }
};

function createTorpedoTubeBank() {
  return TORPEDO_TUBES.map((tube) => ({
    ...tube,
    loaded: true
  }));
}

function createTorpedoSequenceState() {
  return {
    stage: TORPEDO_SEQUENCE.idle,
    selectedTargetId: null,
    selectedTubeId: null,
    dataEntered: false,
    tubeReady: false,
    lastFiredTargetId: null,
    lastFiredTubeId: null,
    flooded: false,
    equalized: false,
    outerDoorOpen: false,
    prepMode: null,
    prepSteps: [],
    prepStepIndex: -1,
    prepStepRemaining: 0,
    postFireRemaining: 0
  };
}

function createAlarmDiveState() {
  const taskTimeline = {};
  for (const taskKey of Object.keys(ALARM_TASKS)) {
    taskTimeline[taskKey] = {
      startedAt: null,
      completedAt: null,
      duration: 0
    };
  }

  return {
    active: false,
    triggeredAutomatically: false,
    timer: ALARM_DIVE_DURATION,
    startedAt: 0,
    reason: "standby",
    resolved: null,
    autoEvasionHeading: null,
    taskTimeline,
    tasks: {
      hatches: false,
      engines: false,
      ballast: false,
      planes: false,
      bowShift: false
    }
  };
}

function cloneTubeBank(tubes = createTorpedoTubeBank()) {
  return tubes.map((tube) => ({ ...tube }));
}

function createCampaignState() {
  return {
    tonnageSunk: 0,
    shipsSunk: 0,
    missionsCleared: 0,
    hull: 100,
    battery: 100,
    reserveTorpedoes: 9,
    torpedoTubes: cloneTubeBank(createTorpedoTubeBank()),
    resupplyCount: 0,
    readyForResupply: false,
    lastOutcome: "出撃準備完了"
  };
}

function createWolfpackState() {
  return {
    enabled: false,
    events: [],
    nextEventIndex: 0,
    currentReport: "待機",
    currentDetail: "群狼作戦イベントなし。",
    reportTimer: 0
  };
}

const state = {
  running: true,
  time: 0,
  missionClockStart: 0,
  lastFrame: 0,
  pingFlash: 0,
  pingCooldown: 0,
  silentRunning: false,
  difficulty: "historical",
  station: "captain",
  viewMode: "normal",
  timeScale: 1,
  stageIndex: 0,
  alarmDiveCooldownUntil: 0,
  stageState: {
    cleared: false,
    failed: false,
    message: ""
  },
  battlePhase: BATTLE_PHASES.patrol,
  battlePhaseEnteredAt: 0,
  tacticalAdvantage: "neutral",
  submergedLoop: {
    stage: "shadow",
    focusContactId: null,
    updatedAt: 0
  },
  navigationTactical: {
    headingError: 0,
    depthError: 0,
    speedError: 0,
    stealthBonus: 0,
    approachRating: 0.5,
    solutionRating: 0.5,
    periscopeStable: false
  },
  torpedoSequence: createTorpedoSequenceState(),
  crewSkills: {
    captain: 1,
    watch: 1.08,
    engineer: 1.12,
    navigation: 1.05,
    crew: 0.97
  },
  periscopeControl: {
    reticleReading: 3.0,
    focusContactId: null,
    lastFocusContactId: null,
    bearingOffset: 0,
    periscopeZoom: 1,
    binocularZoom: 1,
    suspectedType: null,
    lastMeasuredRange: null,
    apparentReading: null,
    renderTargets: []
  },
  tdc: {
    targetId: null,
    bearing: null,
    range: null,
    speedKt: 3.0,
    aob: 90,
    gyroAngle: null,
    absoluteFireBearing: null,
    valid: false,
    suggestedSpeedKt: null,
    suggestedAob: null,
    estimateConfidence: 0,
    estimateNote: "潜望鏡観測ログが不足。"
  },
  alarmDive: createAlarmDiveState(),
  binocularAttackState: "blocked",
  binocularExposureTimer: 0,
  binocularAttackReason: "護衛接触を確認するまで浮上攻撃は禁止。",
  binocularRecentRiskyShotTimer: 0,
  postAttackDecision: {
    active: false,
    timer: 0,
    mode: null,
    reason: ""
  },
  runtimeError: null,
  phaseTrigger: {
    label: "接触なし",
    detail: "見張り・受動聴音とも静穏。",
    source: "passive_scan"
  },
  log: [],
  command: {
    captainOrder: "艦長命令: 接敵準備",
    priorityLabel: "通常",
    priorityTone: "normal",
    sonar: "受動聴音を継続",
    torpedo: "射撃諸元を待機",
    navigation: "現針路を維持"
  },
  plotCamera: {
    x: 0,
    y: 0
  },
  gridParallax: {
    x: 0,
    y: 0
  },
  commandIntent: "approach",
  campaign: createCampaignState(),
  wolfpack: createWolfpackState(),
  contactTactical: {
    focusContactId: null,
    precision: 0,
    positioning: 0,
    firingLane: 0,
    shadowAdvantage: 0,
    note: "接触なし。",
    relativeTargetBearing: null,
    estimatedRange: null
  },
  torpedoesInWater: [],
  depthChargesInWater: [],
  escapeZone: { ...DEFAULT_ESCAPE_ZONE },
  submarine: {
    x: 1800,
    y: 5200,
    heading: -18,
    targetHeading: -18,
    speed: 3,
    targetSpeed: 3,
    depth: 60,
    targetDepth: 60,
    hull: 100,
    battery: 100,
    noise: 0.18,
    reserveTorpedoes: 9,
    torpedoTubes: createTorpedoTubeBank(),
    detection: 0.1,
    trail: []
  },
  contacts: [],
  sonarContacts: [],
  observedContacts: new Map(),
  observedSampleTimer: 0,
  acousticJamming: {
    timer: 0,
    intensity: 0,
    source: null
  },
  advisorHints: [],
  contactAssessment: null,
  navigationAdvice: null,
  voiceRuntime: {
    lastDepthReachedTarget: null,
    lastPeriscopeMode: "normal",
    lastSolutionReadyAt: -Infinity,
    lastSurfaced: false,
    strongerContactAtById: new Map()
  },
  saveState: {
    hasSnapshot: false,
    lastSavedAt: 0,
    lastLoadedAt: 0
  }
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function canUseCampaignStorage() {
  try {
    return typeof window !== "undefined" && Boolean(window.localStorage);
  } catch {
    return false;
  }
}

function safeCampaignStorageGet() {
  if (!canUseCampaignStorage()) return null;
  try {
    return window.localStorage.getItem(CAMPAIGN_SAVE_KEY);
  } catch {
    return null;
  }
}

function syncSavePresence() {
  state.saveState.hasSnapshot = Boolean(safeCampaignStorageGet());
}

function serializeCampaignSnapshot() {
  syncCampaignOperationalState();
  return {
    version: 1,
    savedAt: Date.now(),
    stageIndex: state.stageIndex,
    campaign: {
      ...state.campaign,
      torpedoTubes: cloneTubeBank(state.campaign.torpedoTubes || createTorpedoTubeBank())
    }
  };
}

function saveCampaignSnapshot(mode = "manual") {
  if (!canUseCampaignStorage()) {
    if (mode === "manual") {
      setStatus("このブラウザではローカル保存を利用できない。", "bad");
    }
    return false;
  }
  try {
    const snapshot = serializeCampaignSnapshot();
    window.localStorage.setItem(CAMPAIGN_SAVE_KEY, JSON.stringify(snapshot));
    state.saveState.hasSnapshot = true;
    state.saveState.lastSavedAt = snapshot.savedAt;
    if (mode === "manual") {
      setStatus("Campaign Status を保存。再開時は現在ステージ冒頭から復元。", "good");
    }
    return true;
  } catch {
    if (mode === "manual") {
      setStatus("Campaign Status の保存に失敗。", "bad");
    }
    return false;
  }
}

function applyCampaignSnapshot(snapshot) {
  const nextCampaign = createCampaignState();
  const savedCampaign = snapshot?.campaign || {};
  state.campaign = {
    ...nextCampaign,
    ...savedCampaign,
    torpedoTubes: cloneTubeBank(savedCampaign.torpedoTubes || nextCampaign.torpedoTubes)
  };
  state.stageIndex = clamp(Math.round(snapshot?.stageIndex ?? 0), 0, STAGES.length - 1);
}

function loadCampaignSnapshot(mode = "manual") {
  const raw = safeCampaignStorageGet();
  if (!raw) {
    if (mode === "manual") {
      setStatus("保存済みキャンペーンがない。", "warning");
    }
    state.saveState.hasSnapshot = false;
    return false;
  }
  try {
    const snapshot = JSON.parse(raw);
    applyCampaignSnapshot(snapshot);
    state.saveState.hasSnapshot = true;
    state.saveState.lastLoadedAt = Date.now();
    resetGame();
    addLog("保存済みキャンペーンを復元。現在ステージ冒頭から再開。");
    if (mode === "manual") {
      setStatus("保存済み Campaign Status を再開。", "good");
    }
    return true;
  } catch {
    state.saveState.hasSnapshot = false;
    if (mode === "manual") {
      setStatus("保存データの読み込みに失敗。新規キャンペーンを推奨。", "bad");
    }
    return false;
  }
}

function startNewCampaign() {
  if (canUseCampaignStorage()) {
    try {
      window.localStorage.removeItem(CAMPAIGN_SAVE_KEY);
    } catch {
      // Ignore storage removal failures and still reset in-memory state.
    }
  }
  state.campaign = createCampaignState();
  state.stageIndex = 0;
  state.saveState.hasSnapshot = false;
  state.saveState.lastSavedAt = 0;
  state.saveState.lastLoadedAt = Date.now();
  resetGame();
  addLog("新規キャンペーンを開始。保存済みデータは破棄。");
  setStatus("新規キャンペーン開始。", "good");
}

function campaignStatusTone() {
  if (state.stageState.cleared) return "任務成功";
  if (state.stageState.failed) return "戦闘不能";
  if (state.campaign.readyForResupply) return "補給待ち";
  return "哨戒継続";
}

function nextStageIndex() {
  return state.stageIndex < STAGES.length - 1 ? state.stageIndex + 1 : 0;
}

function syncCampaignOperationalState() {
  const campaign = state.campaign;
  const sub = state.submarine;
  if (!campaign || !sub) return;
  campaign.hull = clamp(sub.hull, 0, 100);
  campaign.battery = clamp(sub.battery, 0, 100);
  campaign.reserveTorpedoes = Math.max(0, sub.reserveTorpedoes || 0);
  campaign.torpedoTubes = cloneTubeBank(sub.torpedoTubes || createTorpedoTubeBank());
}

function applyCampaignLoadout(stageSubmarine = {}) {
  const campaign = state.campaign;
  const defaultTubes = cloneTubeBank(createTorpedoTubeBank());
  return {
    ...stageSubmarine,
    hull: campaign.hull,
    battery: campaign.battery,
    reserveTorpedoes: campaign.reserveTorpedoes,
    torpedoTubes: cloneTubeBank(campaign.torpedoTubes?.length ? campaign.torpedoTubes : defaultTubes)
  };
}

function markMissionOutcome(outcomeText, cleared) {
  syncCampaignOperationalState();
  state.campaign.readyForResupply = true;
  state.campaign.lastOutcome = outcomeText;
  if (cleared) {
    state.campaign.missionsCleared += 1;
  }
  saveCampaignSnapshot("auto");
}

function advanceToStage(nextIndex, note) {
  state.campaign.readyForResupply = false;
  if (note) {
    state.campaign.lastOutcome = note;
  }
  state.stageIndex = clamp(Math.round(nextIndex), 0, STAGES.length - 1);
  resetGame();
  saveCampaignSnapshot("auto");
}

function continuePatrolToNextStage() {
  const nextIndex = nextStageIndex();
  advanceToStage(
    nextIndex,
    `継続哨戒。損耗を抱えたまま ${STAGES[nextIndex].name} へ移行。`
  );
  addLog("継続哨戒を決定。補給なしで次任務海域へ向かう。");
  setStatus("継続哨戒。損耗持越しで次任務へ移行。", "warning");
}

function returnToBaseAndResupply(nextIndex = state.stageIndex) {
  state.campaign.hull = 100;
  state.campaign.battery = 100;
  state.campaign.reserveTorpedoes = 9;
  state.campaign.torpedoTubes = cloneTubeBank(createTorpedoTubeBank());
  state.campaign.resupplyCount += 1;
  state.campaign.readyForResupply = false;
  state.campaign.lastOutcome = `帰投補給完了。${STAGES[nextIndex].name} へ再出撃準備よし。`;
  state.stageIndex = clamp(Math.round(nextIndex), 0, STAGES.length - 1);
  resetGame();
  addLog("帰投補給完了。船体修理、電池満充電、全発射管再装填済み。");
  setStatus("帰投補給完了。再出撃可能。", "good");
  saveCampaignSnapshot("auto");
}

function queueWolfpackReport(title, detail, tone = "warning") {
  state.wolfpack.currentReport = title;
  state.wolfpack.currentDetail = detail;
  state.wolfpack.reportTimer = 42;
  addLog(`群狼電文: ${detail}`);
  setStatus(detail, tone);
}

function createWolfpackEvents(stage) {
  if (stage.id !== "convoy_assault") {
    return [];
  }
  return [
    {
      id: "hq_contact_report",
      at: randomRange(70, 120),
      type: "hq_contact_report"
    },
    {
      id: "escort_diversion",
      at: randomRange(150, 235),
      type: "escort_diversion"
    },
    {
      id: "allied_attack",
      at: randomRange(250, 360),
      type: "allied_attack"
    }
  ].sort((a, b) => a.at - b.at);
}

function initWolfpackState(stage) {
  state.wolfpack = createWolfpackState();
  if (stage.id !== "convoy_assault") {
    state.wolfpack.currentReport = "訓練海域";
    state.wolfpack.currentDetail = "群狼作戦イベントなし。";
    return;
  }
  state.wolfpack.enabled = true;
  state.wolfpack.events = createWolfpackEvents(stage);
  state.wolfpack.currentReport = "群狼待機";
  state.wolfpack.currentDetail = "BdU と僚艦の電文待ち。";
}

function reinforceObservedContact(contact) {
  const observed = getOrCreateObserved(contact.id);
  const now = state.time;
  observed.suspectedType = contact.type;
  observed.identified = true;
  observed.identifyConfidence = 0.92;
  observed.intelStage = Math.max(observed.intelStage || 1, 4);
  observed.lastRange = Math.round(distance(state.submarine, contact) / 50) * 50;
  observed.rangeBand = sonarRangeBandLabel(observed.lastRange);
  observed.estimatedSpeed = Math.round(contact.speed * 2) / 2;
  observed.estimatedHeading = ((Math.round(contact.heading / 10) * 10) % 360 + 360) % 360;
  observed.lastSeenTime = now;
  observed.bearingLog = [
    { time: now - 18, bearing: bearing(state.submarine, contact), subX: state.submarine.x, subY: state.submarine.y, contactX: contact.x, contactY: contact.y, visual: false },
    { time: now - 12, bearing: bearing(state.submarine, contact), subX: state.submarine.x, subY: state.submarine.y, contactX: contact.x, contactY: contact.y, visual: false },
    { time: now - 6, bearing: bearing(state.submarine, contact), subX: state.submarine.x, subY: state.submarine.y, contactX: contact.x, contactY: contact.y, visual: false },
    { time: now, bearing: bearing(state.submarine, contact), subX: state.submarine.x, subY: state.submarine.y, contactX: contact.x, contactY: contact.y, visual: false }
  ];
}

function applyWolfpackEvent(event) {
  if (event.type === "hq_contact_report") {
    const target = state.contacts.find((contact) => contact.type === "flagship" && !contact.destroyed)
      || state.contacts.find((contact) => !contact.hostile && !contact.destroyed)
      || null;
    if (!target) return;
    reinforceObservedContact(target);
    queueWolfpackReport(
      "司令部接触電文",
      `BdU 報: ${contactLabel(target)} 推定 ${Math.round(distance(state.submarine, target))}m、針路 ${formatHeading(target.heading)}。接触整理を急げ。`,
      "good"
    );
    return;
  }

  if (event.type === "escort_diversion") {
    const escort = state.contacts.find((contact) => contact.type === "escort" && !contact.destroyed) || null;
    const protectedShip = state.contacts.find((contact) => contact.type === "flagship" && !contact.destroyed)
      || state.contacts.find((contact) => contact.type === "convoy" && !contact.destroyed)
      || null;
    if (!escort || !protectedShip) return;
    const diversionHeading = normalizeAngle(protectedShip.heading + chooseRandom([-85, 85]));
    escort.wolfpackDetachedUntil = state.time + randomRange(85, 130);
    escort.wolfpackDetachPoint = {
      x: clamp(protectedShip.x + Math.cos(toRadians(diversionHeading)) * 1100, 40, WORLD.width - 40),
      y: clamp(protectedShip.y + Math.sin(toRadians(diversionHeading)) * 1100, 40, WORLD.height - 40)
    };
    escort.alert = clamp(escort.alert - 0.12, 0.08, 1);
    queueWolfpackReport(
      "護衛転進",
      "僚艦接触の報で護衛1隻が転進。船団外縁に接近する隙が生じた。",
      "good"
    );
    return;
  }

  if (event.type === "allied_attack") {
    const candidateTargets = state.contacts.filter(
      (contact) => !contact.hostile && !contact.destroyed && contact.type !== "flagship"
    );
    const target =
      chooseRandom(candidateTargets.length ? candidateTargets : state.contacts.filter(
        (contact) => !contact.hostile && !contact.destroyed
      ));
    if (!target) return;
    target.hp -= 1;
    if (target.hp <= 0) {
      target.destroyed = true;
      target.detected = false;
      target.visualDetected = false;
      target.sonarDetected = false;
      target.detectionSource = null;
    }
    for (const escort of state.contacts.filter((contact) => contact.hostile && !contact.destroyed)) {
      escort.alert = clamp(escort.alert + 0.18, 0, 1);
      escort.chaseModeTimer = Math.max(escort.chaseModeTimer || 0, 28);
    }
    queueWolfpackReport(
      "僚艦雷撃成功",
      target.destroyed
        ? `僚艦が ${contactLabel(target)} を撃沈。護衛は広域警戒へ移行。`
        : `僚艦が ${contactLabel(target)} に命中。護衛警戒が一段上がった。`,
      "warning"
    );
  }
}

function updateWolfpackEvents(deltaTime) {
  if (!state.wolfpack.enabled) return;

  if (state.wolfpack.reportTimer > 0) {
    state.wolfpack.reportTimer = Math.max(0, state.wolfpack.reportTimer - deltaTime);
    if (state.wolfpack.reportTimer === 0) {
      state.wolfpack.currentReport = "群狼待機";
      state.wolfpack.currentDetail = "次の僚艦電文を待機。";
    }
  }

  while (
    state.wolfpack.nextEventIndex < state.wolfpack.events.length &&
    state.time >= state.wolfpack.events[state.wolfpack.nextEventIndex].at
  ) {
    applyWolfpackEvent(state.wolfpack.events[state.wolfpack.nextEventIndex]);
    state.wolfpack.nextEventIndex += 1;
  }
}

function randomRange(min, max) {
  return min + Math.random() * (max - min);
}

function acousticJammingFactor() {
  const jam = state.acousticJamming;
  if (!jam || jam.timer <= 0) return 0;
  return clamp(jam.intensity * clamp(jam.timer / DEPTH_CHARGE_JAM_BASE, 0.35, 1), 0, 1);
}

function triggerDepthChargeJamming(contact, success, range) {
  const intensity = clamp(
    (success ? 0.85 : 0.55) + clamp((260 - range) / 260, 0, 0.32),
    0.35,
    1
  );
  state.acousticJamming.timer = Math.max(
    state.acousticJamming.timer,
    success ? DEPTH_CHARGE_JAM_NEAR : DEPTH_CHARGE_JAM_BASE
  );
  state.acousticJamming.intensity = Math.max(state.acousticJamming.intensity, intensity);
  state.acousticJamming.source = contact?.id || null;
}

function toRadians(deg) {
  return (deg * Math.PI) / 180;
}

function normalizeAngle(angle) {
  let next = angle % 360;
  if (next > 180) next -= 360;
  if (next < -180) next += 360;
  return next;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function knotsToWorldSpeed(knots) {
  return knots * WORLD_METERS_PER_SECOND_PER_KNOT;
}

function bearing(from, to) {
  return (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;
}

function distancePointToSegment(point, start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const lengthSq = dx * dx + dy * dy;
  if (lengthSq <= 1e-6) {
    return distance(point, start);
  }
  const t = clamp(
    ((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSq,
    0,
    1
  );
  return distance(point, {
    x: start.x + dx * t,
    y: start.y + dy * t
  });
}

function inwardHeadingFromEdge(entity, margin = 260) {
  let vx = 0;
  let vy = 0;
  if (entity.x < margin) vx += 1;
  if (entity.x > WORLD.width - margin) vx -= 1;
  if (entity.y < margin) vy += 1;
  if (entity.y > WORLD.height - margin) vy -= 1;
  if (vx === 0 && vy === 0) return null;
  return normalizeAngle((Math.atan2(vy, vx) * 180) / Math.PI);
}

function edgeRecoveryState(entity, margin = 420) {
  const edgeHeading = inwardHeadingFromEdge(entity, margin);
  if (edgeHeading === null) {
    return { active: false, heading: null, strength: 0 };
  }
  const dx = Math.min(entity.x, WORLD.width - entity.x);
  const dy = Math.min(entity.y, WORLD.height - entity.y);
  const minEdgeDistance = Math.min(dx, dy);
  const strength = clamp(1 - minEdgeDistance / margin, 0, 1);
  return { active: true, heading: edgeHeading, strength };
}

function blendedEdgeCourse(currentHeading, edgeHeading) {
  const alongEdgeOffset = clamp(normalizeAngle(currentHeading - edgeHeading), -38, 38);
  return normalizeAngle(edgeHeading + alongEdgeOffset);
}

function computeEscortAttackSuccess(sub, contact, range, chaseMode) {
  let chance = chaseMode ? 0.14 : 0.07;
  if (sub.depth >= 90 && sub.depth <= 180) chance += 0.03;
  if (sub.depth > 210) chance -= 0.02;
  if (sub.depth >= 250) chance -= 0.05;
  if (state.silentRunning) chance -= 0.03;
  if (sub.speed <= 2) chance -= 0.02;
  if (sub.speed >= 6) chance += 0.04;
  if (range <= 120) chance += 0.05;
  if ((contact.alert || 0) > 0.72) chance += 0.04;
  return clamp(chance, 0.02, chaseMode ? 0.24 : 0.16);
}

function computeEscortAttackDamage(sub, chaseMode, success) {
  if (!success) {
    return sub.depth >= 220 ? 0 : sub.depth >= 140 ? 1 : 2;
  }
  const base = chaseMode ? randomRange(6, 11) : randomRange(4, 8);
  const depthMod = sub.depth >= 220 ? -2 : sub.depth >= 140 ? 0 : 1;
  const silentMod = state.silentRunning ? -1 : 0;
  return Math.max(1, Math.round(base + depthMod + silentMod));
}

function estimateDepthChargeSetDepth(sub, successChance) {
  const band = Math.round(clamp(sub.depth + randomRange(-40, 40) * (1 - successChance), 30, 260) / 10) * 10;
  return clamp(band, 30, 260);
}

function createDepthChargePattern(contact, sub, chaseMode, successChance, plannedDamage) {
  const centerDepth = estimateDepthChargeSetDepth(sub, successChance);
  const perp = toRadians(contact.heading + 90);
  const forward = toRadians(contact.heading);
  const pattern = [
    { lateral: 0, longitudinal: 0, depthOffset: 0 },
    { lateral: -1, longitudinal: -0.4, depthOffset: -15 },
    { lateral: 1, longitudinal: -0.2, depthOffset: 15 },
    { lateral: -0.5, longitudinal: 0.6, depthOffset: 25 },
    { lateral: 0.5, longitudinal: 0.8, depthOffset: -25 }
  ];

  return pattern.map((offset, index) => ({
    id: `dc-${contact.id}-${Math.random().toString(16).slice(2)}`,
    parentId: contact.id,
    x:
      contact.x +
      Math.cos(perp) * offset.lateral * DEPTH_CHARGE_PATTERN_SPACING +
      Math.cos(forward) * offset.longitudinal * DEPTH_CHARGE_PATTERN_SPACING,
    y:
      contact.y +
      Math.sin(perp) * offset.lateral * DEPTH_CHARGE_PATTERN_SPACING +
      Math.sin(forward) * offset.longitudinal * DEPTH_CHARGE_PATTERN_SPACING,
    depth: 0,
    sinkRate: randomRange(DEPTH_CHARGE_SINK_RATE_MIN, DEPTH_CHARGE_SINK_RATE_MAX),
    setDepth: clamp(centerDepth + offset.depthOffset, 25, 280),
    lethalRadius: DEPTH_CHARGE_BASE_LETHAL_RADIUS + (chaseMode ? 6 : 0),
    damageRadius: DEPTH_CHARGE_BASE_DAMAGE_RADIUS + (chaseMode ? 10 : 0),
    plannedDamage: Math.max(0, plannedDamage + (index === 0 ? 1 : 0) - Math.abs(offset.lateral)),
    successChance,
    chaseMode,
    armed: false
  }));
}

function availableDepthChargePattern(contact, sub, chaseMode, successChance, plannedDamage) {
  const remaining = contact.depthChargesRemaining ?? 0;
  if (remaining <= 0) return [];
  return createDepthChargePattern(contact, sub, chaseMode, successChance, plannedDamage).slice(
    0,
    Math.min(5, remaining)
  );
}

function resolveDepthChargeDetonation(depthCharge) {
  const sub = state.submarine;
  const horizontalRange = distance(depthCharge, sub);
  const depthDelta = Math.abs(sub.depth - depthCharge.setDepth);
  const inLethalBand =
    horizontalRange <= depthCharge.lethalRadius && depthDelta <= 18;
  const inDamageBand =
    horizontalRange <= depthCharge.damageRadius && depthDelta <= 42;
  let damage = 0;

  if (inLethalBand) {
    const proximityFactor =
      1 -
      clamp(horizontalRange / Math.max(1, depthCharge.lethalRadius), 0, 1) * 0.45 -
      clamp(depthDelta / 18, 0, 1) * 0.35;
    damage = Math.max(1, Math.round(depthCharge.plannedDamage * proximityFactor));
  } else if (inDamageBand) {
    const proximityFactor =
      1 -
      clamp(horizontalRange / Math.max(1, depthCharge.damageRadius), 0, 1) * 0.6 -
      clamp(depthDelta / 42, 0, 1) * 0.3;
    damage = Math.max(0, Math.round(depthCharge.plannedDamage * 0.5 * proximityFactor));
  }

  triggerDepthChargeJamming({ id: depthCharge.parentId }, damage > 0, horizontalRange);

  if (damage > 0) {
    sub.hull = clamp(sub.hull - damage, 0, 100);
    emitGermanRepeater("damageReport");
    addLog(
      `${depthCharge.chaseMode ? "追撃中の" : ""}爆雷爆発。設定深度 ${Math.round(
        depthCharge.setDepth
      )}m / 横距離 ${Math.round(horizontalRange)}m / 深度差 ${Math.round(depthDelta)}m / 船体損傷 ${Math.round(
        damage
      )}%。`
    );
    setStatus(
      depthCharge.chaseMode ? "追撃護衛の爆雷が至近爆発。回避継続。" : "駆逐艦の爆雷が至近。深度と静粛で回避を続けよ。",
      "bad"
    );
  } else {
    addLog(
      `${depthCharge.chaseMode ? "追撃中の" : ""}爆雷爆発。設定深度 ${Math.round(
        depthCharge.setDepth
      )}m で炸裂したが有効打なし。`
    );
    setStatus("爆雷は近かったが有効打なし。静粛と深度を維持。", "warning");
  }
}

async function loadSonarSampleBuffers(context) {
  if (audioState.sonarSamplesLoading) return audioState.sonarSamplesLoading;

  audioState.sonarSamplesLoading = Promise.all(
    Object.entries(SONAR_SAMPLE_FILES).map(async ([type, src]) => {
      try {
        const response = await fetch(src);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = await context.decodeAudioData(arrayBuffer.slice(0));
        audioState.sonarSampleBuffers.set(type, buffer);
      } catch (_error) {
        // Fallback stays on synthesized oscillator when a sample cannot be loaded.
      }
    })
  ).finally(() => {
    audioState.sonarSamplesLoading = null;
  });

  return audioState.sonarSamplesLoading;
}

function disposeContactAudioNode(node) {
  if (!node) return;
  try {
    node.source?.stop?.();
  } catch (_error) {}
  try {
    node.source?.disconnect?.();
    node.filter?.disconnect?.();
    node.gain?.disconnect?.();
    node.panner?.disconnect?.();
  } catch (_error) {}
}

function createContactAudioNode(contact) {
  const gain = audioState.context.createGain();
  gain.gain.value = 0;

  const panner = audioState.context.createStereoPanner();
  const filter = audioState.context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value =
    contact.type === "escort" ? 1180 : contact.type === "flagship" ? 260 : 420;
  filter.Q.value =
    contact.type === "escort" ? 0.85 : contact.type === "flagship" ? 1.35 : 1.1;

  let source;
  let sourceKind;

  source = audioState.context.createOscillator();
  source.type = contact.type === "escort" ? "sawtooth" : contact.type === "flagship" ? "square" : "triangle";
  source.frequency.value = contact.tone;
  source.connect(filter);
  source.start();
  sourceKind = "oscillator";

  filter.connect(gain);
  gain.connect(panner);
  panner.connect(audioState.masterGain);
  return { source, gain, panner, filter, sourceKind };
}

function formatClock(seconds) {
  const totalSeconds = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
      secs
    ).padStart(2, "0")}`;
  }
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function currentMissionClockSeconds() {
  return (state.missionClockStart + Math.max(0, state.time)) % 86400;
}

function lightConditionMeta() {
  const hours = currentMissionClockSeconds() / 3600;
  if (hours >= 21 || hours < 4.5) {
    return {
      key: "night",
      label: "夜間",
      visibilityFactor: 0.62,
      binocularDetectionFactor: 0.46,
      periscopeDetectionFactor: 0.72,
      exposureFactor: 0.58
    };
  }
  if (hours < 6.5) {
    return {
      key: "dawn",
      label: "黎明",
      visibilityFactor: 0.78,
      binocularDetectionFactor: 0.72,
      periscopeDetectionFactor: 0.86,
      exposureFactor: 0.82
    };
  }
  if (hours < 18.5) {
    return {
      key: "day",
      label: "昼間",
      visibilityFactor: 1,
      binocularDetectionFactor: 1,
      periscopeDetectionFactor: 1,
      exposureFactor: 1
    };
  }
  return {
    key: "dusk",
    label: "薄暮",
    visibilityFactor: 0.82,
    binocularDetectionFactor: 0.76,
    periscopeDetectionFactor: 0.88,
    exposureFactor: 0.84
  };
}

function lightVisualPalette() {
  const light = lightConditionMeta();
  switch (light.key) {
    case "night":
      return {
        chartTop: "#04111a",
        chartBottom: "#02070d",
        chartGlow: "rgba(119, 164, 205, 0.12)",
        grid: "rgba(118, 170, 210, 0.07)",
        escapeStroke: "rgba(138, 198, 235, 0.28)",
        escapeFill: "rgba(90, 138, 176, 0.08)",
        horizon: 0.42,
        skyTop: "#020812",
        skyBottom: "#0d1d33",
        seaTop: "#0b2430",
        seaBottom: "#041018",
        opticsMask: "rgba(1, 4, 7, 0.82)",
        opticsLine: "rgba(188, 226, 255, 0.68)",
        opticsTick: "rgba(188, 226, 255, 0.34)",
        opticsText: "rgba(223, 244, 255, 0.8)",
        opticsTint: "rgba(12, 28, 44, 0.18)",
        celestial: { kind: "moon", x: 0.74, y: 0.16, radius: 16, alpha: 0.3 }
      };
    case "dawn":
      return {
        chartTop: "#112133",
        chartBottom: "#08121a",
        chartGlow: "rgba(255, 193, 148, 0.14)",
        grid: "rgba(148, 205, 234, 0.08)",
        escapeStroke: "rgba(172, 224, 244, 0.32)",
        escapeFill: "rgba(121, 174, 201, 0.09)",
        horizon: 0.44,
        skyTop: "#15253b",
        skyBottom: "#d27f63",
        seaTop: "#21495b",
        seaBottom: "#0a1926",
        opticsMask: "rgba(4, 9, 12, 0.76)",
        opticsLine: "rgba(235, 246, 255, 0.7)",
        opticsTick: "rgba(235, 246, 255, 0.4)",
        opticsText: "rgba(235, 246, 255, 0.84)",
        opticsTint: "rgba(255, 188, 148, 0.1)",
        celestial: { kind: "sun", x: 0.26, y: 0.18, radius: 22, alpha: 0.2 }
      };
    case "dusk":
      return {
        chartTop: "#1a2334",
        chartBottom: "#08111a",
        chartGlow: "rgba(244, 164, 114, 0.14)",
        grid: "rgba(144, 201, 232, 0.08)",
        escapeStroke: "rgba(172, 224, 244, 0.32)",
        escapeFill: "rgba(121, 174, 201, 0.09)",
        horizon: 0.43,
        skyTop: "#1f2642",
        skyBottom: "#cf7055",
        seaTop: "#23455a",
        seaBottom: "#07131d",
        opticsMask: "rgba(4, 9, 12, 0.78)",
        opticsLine: "rgba(236, 247, 255, 0.7)",
        opticsTick: "rgba(236, 247, 255, 0.38)",
        opticsText: "rgba(236, 247, 255, 0.84)",
        opticsTint: "rgba(255, 164, 112, 0.12)",
        celestial: { kind: "sun", x: 0.71, y: 0.2, radius: 20, alpha: 0.18 }
      };
    default:
      return {
        chartTop: "#0a2536",
        chartBottom: "#04141d",
        chartGlow: "rgba(139, 220, 241, 0.18)",
        grid: "rgba(141, 219, 237, 0.08)",
        escapeStroke: "rgba(141, 219, 237, 0.34)",
        escapeFill: "rgba(141, 219, 237, 0.1)",
        horizon: 0.45,
        skyTop: "#86c7e4",
        skyBottom: "#dff1ff",
        seaTop: "#316e87",
        seaBottom: "#0b2433",
        opticsMask: "rgba(2, 8, 12, 0.72)",
        opticsLine: "rgba(228, 251, 255, 0.7)",
        opticsTick: "rgba(228, 251, 255, 0.42)",
        opticsText: "rgba(223, 250, 255, 0.86)",
        opticsTint: "rgba(255, 255, 255, 0.04)",
        celestial: { kind: "sun", x: 0.74, y: 0.16, radius: 24, alpha: 0.16 }
      };
  }
}

function formatSigned(value) {
  return `${value >= 0 ? "+" : ""}${Math.round(value)}`;
}

function formatHeading(value) {
  const normalized = ((Math.round(value) % 360) + 360) % 360;
  return `${String(normalized).padStart(3, "0")}°`;
}

function silhouetteAspectMeta(contact, sub = state.submarine) {
  const losBearing = bearing(contact, sub);
  const aspect = normalizeAngle(contact.heading - (losBearing + 180));
  const broadside = Math.abs(Math.sin(toRadians(aspect)));
  const headingTowardViewer = Math.cos(toRadians(aspect)) > 0;
  return { aspect, broadside, headingTowardViewer };
}

function drawPeriscopeContactSilhouette(contact, px, cy, focused = false) {
  const sub = state.submarine;
  const palette = lightVisualPalette();
  const { broadside, headingTowardViewer } = silhouetteAspectMeta(contact, sub);
  const pixH = contact.pixelHeight;
  const hullW = clamp(pixH * (0.8 + broadside * 1.9), 10, 120);
  const hullH = clamp(pixH * 0.085, 6, 14);
  const bowX = headingTowardViewer ? px - hullW / 2 : px + hullW / 2;
  const sternX = headingTowardViewer ? px + hullW / 2 : px - hullW / 2;
  const bridgeX =
    headingTowardViewer
      ? px + hullW * (contact.type === "escort" ? 0.06 : 0.14)
      : px - hullW * (contact.type === "escort" ? 0.06 : 0.14);
  const hullTop = cy - hullH / 2;
  const hullBottom = cy + hullH / 2;

  ctx.save();
  const darkSilhouette =
    palette.celestial?.kind === "sun"
      ? "rgba(31, 46, 58, 0.92)"
      : palette.celestial?.kind === "moon"
        ? "rgba(176, 201, 220, 0.88)"
        : "rgba(74, 98, 118, 0.9)";
  const detailSilhouette =
    palette.celestial?.kind === "sun"
      ? "rgba(96, 122, 142, 0.88)"
      : "rgba(216, 234, 246, 0.84)";
  ctx.fillStyle = darkSilhouette;
  ctx.beginPath();
  ctx.moveTo(bowX, cy);
  ctx.lineTo(px - hullW * 0.28, hullTop);
  ctx.lineTo(sternX, hullTop + hullH * 0.18);
  ctx.lineTo(sternX, hullBottom - hullH * 0.18);
  ctx.lineTo(px - hullW * 0.28, hullBottom);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(230, 242, 250, 0.55)";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = detailSilhouette;
  if (contact.type === "escort") {
    ctx.fillRect(bridgeX - 5, cy - pixH * 0.34, 10, pixH * 0.32);
    ctx.fillRect(bridgeX - 2, cy - pixH * 0.62, 4, pixH * 0.28);
    ctx.fillRect(bridgeX + (headingTowardViewer ? -10 : 6), cy - pixH * 0.28, 5, pixH * 0.18);
    ctx.beginPath();
    ctx.moveTo(bowX, cy);
    ctx.lineTo(bowX + (headingTowardViewer ? 10 : -10), cy - hullH * 0.9);
    ctx.lineTo(bowX + (headingTowardViewer ? 10 : -10), cy);
    ctx.closePath();
    ctx.fill();
  } else if (contact.type === "flagship") {
    ctx.fillRect(bridgeX - 8, cy - pixH * 0.3, 16, pixH * 0.28);
    ctx.fillRect(px - hullW * 0.18, cy - pixH * 0.55, 4, pixH * 0.52);
    ctx.fillRect(px + hullW * 0.2, cy - pixH * 0.5, 4, pixH * 0.46);
    ctx.fillRect(px - hullW * 0.02, cy - pixH * 0.22, hullW * 0.18, pixH * 0.12);
  } else {
    ctx.fillRect(bridgeX - 7, cy - pixH * 0.22, 14, pixH * 0.2);
    ctx.fillRect(px - hullW * 0.16, cy - pixH * 0.46, 3, pixH * 0.42);
    ctx.fillRect(px + hullW * 0.08, cy - pixH * 0.36, 3, pixH * 0.3);
  }

  if (focused) {
    ctx.strokeStyle = "rgba(255, 255, 130, 0.65)";
    ctx.lineWidth = 1.8;
    ctx.strokeRect(px - hullW / 2 - 8, cy - pixH - 10, hullW + 16, pixH + 28);
  }
  ctx.restore();

  return {
    hullW,
    pixH
  };
}

function noiseLabel(noise) {
  if (noise < 0.22) return "静穏";
  if (noise < 0.45) return "接敵";
  if (noise < 0.68) return "警戒";
  return "危険";
}

function isSurfaced(sub = state.submarine) {
  return sub.depth < 5;
}

function propulsionModeLabel(sub = state.submarine) {
  return isSurfaced(sub) ? "ディーゼル / 充電" : "電動機";
}

function currentPeriscopeBearing() {
  return normalizeAngle(state.submarine.heading + state.periscopeControl.bearingOffset);
}

function currentOpticsZoom() {
  if (state.viewMode === "periscope") return state.periscopeControl.periscopeZoom || 1;
  if (state.viewMode === "binocular") return state.periscopeControl.binocularZoom || 1;
  return 1;
}

function opticsZoomLabel() {
  const zoom = currentOpticsZoom();
  if (zoom <= 0.95) return "広角";
  if (zoom >= 1.8) return "高倍率";
  return "標準";
}

function setOpticsZoom(mode) {
  if (state.viewMode !== "periscope" && state.viewMode !== "binocular") {
    setStatus("潜望鏡または双眼鏡モードでのみ倍率変更できる。", "warning");
    return;
  }
  const zoomValue =
    mode === "wide"
      ? 0.78
      : mode === "zoom"
        ? 2
        : 1;
  if (state.viewMode === "periscope") {
    state.periscopeControl.periscopeZoom = zoomValue;
  } else {
    state.periscopeControl.binocularZoom = zoomValue;
  }
  updateButtons();
  updatePeriscopeControl();
  setStatus(`${state.viewMode === "periscope" ? "潜望鏡" : "双眼鏡"}倍率を ${opticsZoomLabel()} に変更。`, "good");
}

function loadedTubeCount(sub = state.submarine) {
  return (sub.torpedoTubes || []).filter((tube) => tube.loaded).length;
}

function totalTorpedoCount(sub = state.submarine) {
  return loadedTubeCount(sub) + (sub.reserveTorpedoes || 0);
}

function findTubeById(tubeId, sub = state.submarine) {
  return (sub.torpedoTubes || []).find((tube) => tube.id === tubeId) || null;
}

function tubeLabelById(tubeId) {
  return TORPEDO_TUBES.find((tube) => tube.id === tubeId)?.label || "--";
}

function isAftShot(contact, sub = state.submarine) {
  const rel = normalizeAngle(bearing(sub, contact) - sub.heading);
  return Math.abs(rel) >= 105;
}

function chooseTubeForContact(contact, preferCurrent = false) {
  const sub = state.submarine;
  const tubes = sub.torpedoTubes || [];
  const preferredArc = isAftShot(contact, sub) ? "stern" : "bow";
  const currentTube = preferCurrent ? findTubeById(state.torpedoSequence.selectedTubeId, sub) : null;
  if (currentTube && currentTube.arc === preferredArc) {
    return currentTube;
  }
  const byArc = tubes.filter((tube) => tube.arc === preferredArc);
  return (
    byArc.find((tube) => tube.loaded) ||
    byArc[0] ||
    tubes.find((tube) => tube.loaded) ||
    tubes[0] ||
    null
  );
}

function buildTorpedoPrepSteps(tube, prepMode) {
  const modeKey = prepMode === "surfaced" ? "surfaced" : "submerged";
  const steps = [];
  if (!tube.loaded) {
    steps.push({
      key: "reload",
      label: "再装填",
      duration: TORPEDO_RELOAD_TIME[tube.arc]?.[modeKey] ?? 80
    });
  }
  return [...steps, ...TORPEDO_PREP_FLOW[prepMode]];
}

function tubeBankSummary() {
  const seq = state.torpedoSequence;
  return (state.submarine.torpedoTubes || [])
    .map((tube) => {
      const active = seq.selectedTubeId === tube.id;
      const loading =
        active &&
        seq.prepStepIndex >= 0 &&
        seq.prepSteps[seq.prepStepIndex]?.key === "reload";
      const processing = active && seq.prepStepIndex >= 0 && !loading;
      const status = loading
        ? "再装填"
        : processing
          ? "準備中"
          : tube.loaded
            ? "装填"
            : "空";
      return `${tube.label}${active ? "*" : ""} ${status}`;
    })
    .join(" / ");
}

function phaseMeta(phase) {
  return {
    [BATTLE_PHASES.alarmDive]: {
      name: "急速潜航",
      description: "Alarm 発令。30秒以内に完全潜航と艦内切替を完了させる。"
    },
    [BATTLE_PHASES.patrol]: {
      name: "平常監視",
      description: "哨戒と接敵準備を維持。各部署は通常監視体制。"
    },
    [BATTLE_PHASES.contact]: {
      name: "索敵接触",
      description: "視認または聴音で接触を捕捉。接敵情報を整理する段階。"
    },
    [BATTLE_PHASES.submergedCombat]: {
      name: "潜航戦闘",
      description: "潜航して護衛の探知を避けつつ、ソナー主導で接敵を続ける。"
    },
    [BATTLE_PHASES.attack]: {
      name: "発射局面",
      description: "射撃解が成立。雷撃席と航海長席の同期を優先する。"
    },
    [BATTLE_PHASES.egress]: {
      name: "離脱行動",
      description: "主目標達成後。護衛との距離を取り離脱海域へ向かう。"
    },
    [BATTLE_PHASES.disabled]: {
      name: "戦闘不能",
      description: "艦の損傷が限界。任務続行不能。"
    }
  }[phase];
}

function deriveBattlePhase() {
  if (state.alarmDive.active) {
    return BATTLE_PHASES.alarmDive;
  }

  const stage = currentStage();
  const sub = state.submarine;
  const flagshipAlive = state.contacts.some(
    (contact) => contact.type === "flagship" && !contact.destroyed
  );
  const activeEscorts = state.contacts.filter(
    (contact) => contact.hostile && !contact.destroyed
  );
  const escortAlert = activeEscorts.length
    ? Math.max(...activeEscorts.map((contact) => contact.alert))
    : 0;
  const bestShot = getBestKnownTorpedoSolution();
  const tactical = state.contactTactical;
  const selectedShot = getSelectedTorpedoSolution();
  const hasContact =
    state.sonarContacts.length > 0 ||
    state.contacts.some((contact) => !contact.destroyed && contact.detected);
  const firingWindow =
    Boolean(bestShot?.shotValid || tactical.firingLane > 0.76) &&
    (bestShot?.range ?? tactical.estimatedRange ?? Infinity) < 1400 &&
    sub.depth >= UBOAT_CLASS.torpedoDepthMin &&
    sub.depth <= UBOAT_CLASS.torpedoDepthMax &&
    escortAlert < 0.88;
  const shouldSubmergeForCombat =
    hasContact &&
    (sub.depth > 20 ||
      state.silentRunning ||
      state.viewMode === "periscope" ||
      sub.detection > 0.28 ||
      escortAlert > 0.35);

  if (sub.hull <= 0 || !state.running) {
    return sub.hull <= 0
      ? BATTLE_PHASES.disabled
      : stage.id === "convoy_assault" && flagshipAlive
        ? state.battlePhase
        : BATTLE_PHASES.egress;
  }

  if (stage.id === "convoy_assault" && !flagshipAlive) {
    return BATTLE_PHASES.egress;
  }

  if (hasContact && firingWindow) {
    return BATTLE_PHASES.attack;
  }

  if (shouldSubmergeForCombat) {
    return BATTLE_PHASES.submergedCombat;
  }

  if (hasContact) {
    return BATTLE_PHASES.contact;
  }

  return BATTLE_PHASES.patrol;
}

function deriveTacticalAdvantage() {
  const sub = state.submarine;
  const bestShot = getBestKnownTorpedoSolution();
  const tactical = state.contactTactical;
  const activeEscorts = state.contacts.filter(
    (contact) => contact.hostile && !contact.destroyed
  );
  const nearestEscortRange = activeEscorts.length
    ? Math.min(...activeEscorts.map((contact) => distance(sub, contact)))
    : Infinity;
  const escortAlert = activeEscorts.length
    ? Math.max(...activeEscorts.map((contact) => contact.alert))
    : 0;
  const detectedByVisual = state.contacts.some(
    (contact) =>
      !contact.destroyed &&
      contact.detected &&
      (contact.detectionSource === "浮上視認" || contact.detectionSource === "潜望鏡視認")
  );
  const detectedByPassive = state.contacts.some(
    (contact) => !contact.destroyed && contact.detected && contact.detectionSource === "受動聴音"
  );

  if (
    sub.detection > 0.68 ||
    escortAlert > 0.68 ||
    nearestEscortRange < 280 ||
    (state.viewMode === "binocular" && sub.depth < 5)
  ) {
    return "enemy";
  }

  if (
    bestShot?.shotValid ||
    tactical.firingLane > 0.66 ||
    (detectedByVisual && sub.detection < 0.34) ||
    (detectedByPassive && state.silentRunning && nearestEscortRange > 520 && tactical.precision > 0.46)
  ) {
    return "player";
  }

  return "neutral";
}

function applyAdvantageCommandState() {
  if (state.alarmDive.active) return;

  if (state.battlePhase === BATTLE_PHASES.contact) {
    if (state.tacticalAdvantage === "player") {
      setCommandState({
        captainOrder: "艦長命令: 有利接敵を維持",
        priorityLabel: "通常",
        priorityTone: "normal",
        sonar: "接触を失わず静かに追尾",
        torpedo: "射撃諸元を前倒しで準備",
        navigation: "敵針路前方へ回り込む"
      });
    } else if (state.tacticalAdvantage === "enemy") {
      setCommandState({
        captainOrder: "艦長命令: 敵優位、被探知回避",
        priorityLabel: "警戒",
        priorityTone: "high",
        sonar: "護衛接近を最優先で監視",
        torpedo: "雷撃より回避を優先",
        navigation: "深度変更と離隔針路を準備"
      });
    } else {
      setCommandState({
        captainOrder: "艦長命令: 接敵情報を整理",
        priorityLabel: "通常",
        priorityTone: "normal",
        sonar: "方位と種別を継続更新",
        torpedo: "射点構築のため諸元待機",
        navigation: "現針路を保って接敵判断"
      });
    }
  }
}

function deriveSubmergedLoopStage() {
  const bestShot = getBestKnownTorpedoSolution();
  const primarySonar = state.sonarContacts[0];
  const tactical = state.contactTactical;

  if (!primarySonar) {
    return {
      stage: "reacquire",
      focusContactId: null
    };
  }

  if (tactical.precision < 0.32) {
    return {
      stage: "reacquire",
      focusContactId: primarySonar.contact.id
    };
  }

  if (bestShot?.shotValid) {
    return {
      stage: "ready",
      focusContactId: bestShot.contact.id
    };
  }

  if ((bestShot && bestShot.range < 1700) || tactical.firingLane >= 0.56) {
    return {
      stage: "solution",
      focusContactId: bestShot?.contact.id || primarySonar.contact.id
    };
  }

  if (primarySonar.range < 900 || tactical.positioning >= 0.46) {
    return {
      stage: "approach",
      focusContactId: primarySonar.contact.id
    };
  }

  return {
    stage: "shadow",
    focusContactId: primarySonar.contact.id
  };
}

function submergedLoopMeta(loopState) {
  const focusContact = state.contacts.find((contact) => contact.id === loopState.focusContactId);
  const targetLabel = focusContact ? contactLabel(focusContact) : "接触";
  const tactical = state.contactTactical;

  switch (loopState.stage) {
    case "reacquire":
      return {
        label: "接触再捕捉",
        detail: `接触精度 ${Math.round(tactical.precision * 100)}%。聴音基線を立て直す。`,
        sonar: "弱い接触を再探索",
        torpedo: "射撃計算を一時停止",
        navigation: "低速で静かに再接近"
      };
    case "shadow":
      return {
        label: "追尾維持",
        detail: `${targetLabel} を遠距離で保持。接触精度を積み増す。`,
        sonar: `${targetLabel} の方位変化を追尾`,
        torpedo: "まだ射点は遠い",
        navigation: "敵針路の前方へ回り込む"
      };
    case "approach":
      return {
        label: "接近運動",
        detail: `${targetLabel} へ前方進出中。回り込み評価 ${Math.round(tactical.positioning * 100)}%。`,
        sonar: "護衛位置も同時監視",
        torpedo: "進角試算を開始",
        navigation: "深度と針路を細かく補正"
      };
    case "solution":
      return {
        label: "射点構築",
        detail: `${targetLabel} への射点形成 ${Math.round(tactical.firingLane * 100)}%。`,
        sonar: "接触の速度変化を監視",
        torpedo: "AOB と進角を継続補正",
        navigation: "安定した射点を維持"
      };
    case "ready":
      return {
        label: "発射準備完了",
        detail: `${targetLabel} へ解あり。雷撃判断待ち。`,
        sonar: "命中後の護衛反応に備える",
        torpedo: "いつでも発射可能",
        navigation: "現針路保持、回避準備"
      };
    default:
      return {
        label: "潜航追尾",
        detail: "接触を追跡中。",
        sonar: "追尾継続",
        torpedo: "解の材料を収集中",
        navigation: "接近航路を維持"
      };
  }
}

function updateSubmergedLoop() {
  if (state.battlePhase !== BATTLE_PHASES.submergedCombat && state.battlePhase !== BATTLE_PHASES.attack) {
    state.submergedLoop = {
      stage: "shadow",
      focusContactId: null,
      updatedAt: state.time
    };
    return;
  }

  const nextLoop = deriveSubmergedLoopStage();
  if (
    nextLoop.stage !== state.submergedLoop.stage ||
    nextLoop.focusContactId !== state.submergedLoop.focusContactId
  ) {
    state.submergedLoop = {
      ...nextLoop,
      updatedAt: state.time
    };

    const meta = submergedLoopMeta(state.submergedLoop);
    addLog(`潜航戦闘ループ: ${meta.label}。`);

    if (state.battlePhase === BATTLE_PHASES.submergedCombat) {
      setCommandState({
        captainOrder: `艦長命令: ${meta.label}`,
        priorityLabel: state.submergedLoop.stage === "ready" ? "警戒" : "通常",
        priorityTone: state.submergedLoop.stage === "ready" ? "high" : "normal",
        sonar: meta.sonar,
        torpedo: meta.torpedo,
        navigation: meta.navigation
      });
    }
  }
}

function applyPhaseStatus(phase) {
  switch (phase) {
    case BATTLE_PHASES.alarmDive:
      setStatus("Alarm! 急速潜航。全員、戦闘配置。", "bad");
      addLog("戦闘フェーズ: 急速潜航。30秒で潜航完了を急げ。");
      break;
    case BATTLE_PHASES.patrol:
      setStatus("平常監視。受動聴音で広く索敵する。");
      addLog("戦闘フェーズ: 平常監視。");
      break;
    case BATTLE_PHASES.contact:
      setStatus("接触捕捉。艦長は接敵方針を決めよ。", "warning");
      addLog("戦闘フェーズ: 索敵接触。目標情報を統合。");
      break;
    case BATTLE_PHASES.submergedCombat:
      setStatus("潜航戦闘。静粛を保ちつつ射点へ接近。", "warning");
      addLog("戦闘フェーズ: 潜航戦闘。ソナー主導で追尾。");
      break;
    case BATTLE_PHASES.attack:
      setStatus("発射局面。射撃解成立、雷撃可能。", "good");
      addLog("戦闘フェーズ: 発射局面。最良射点を維持。");
      break;
    case BATTLE_PHASES.egress:
      setStatus("離脱行動。護衛との距離を保ち海域を離脱。", "good");
      addLog("戦闘フェーズ: 離脱行動。生還を優先。");
      break;
    case BATTLE_PHASES.disabled:
      setStatus("戦闘不能。艦の損傷が限界に達した。", "bad");
      addLog("戦闘フェーズ: 戦闘不能。");
      break;
    default:
      break;
  }
}

function updateBattlePhase() {
  const nextPhase = deriveBattlePhase();
  state.tacticalAdvantage = deriveTacticalAdvantage();
  applyAdvantageCommandState();
  if (nextPhase === state.battlePhase) return;
  state.battlePhase = nextPhase;
  state.battlePhaseEnteredAt = state.time;
  applyPhaseStatus(nextPhase);
}

function addLog(message) {
  state.log.unshift(`[${formatClock(currentMissionClockSeconds())}] ${message}`);
  state.log = state.log.slice(0, 14);
  logNode.innerHTML = state.log.map((entry) => `<li>${entry}</li>`).join("");
}

function setStatus(message, tone = "neutral") {
  statusNode.textContent = message;
  statusNode.dataset.tone = tone;
}

function setCommandState(nextState) {
  state.command = {
    ...state.command,
    ...nextState
  };
}

function getGermanVoices() {
  if (!("speechSynthesis" in window)) return [];
  const voices = window.speechSynthesis.getVoices?.() || [];
  return voices.filter(
    (voice) => voice.lang === audioState.voiceLanguage || voice.lang?.startsWith("de")
  );
}

function refreshVoiceAssignments() {
  if (!("speechSynthesis" in window)) {
    audioState.availableVoices = [];
    audioState.roleVoiceMap.clear();
    return;
  }

  const voices = getGermanVoices();
  audioState.availableVoices = voices;
  audioState.roleVoiceMap.clear();

  if (!voices.length) return;

  ROLE_VOICE_ORDER.forEach((role, index) => {
    audioState.roleVoiceMap.set(role, voices[index % voices.length]);
  });
}

function ensureVoiceAssignments() {
  if (!("speechSynthesis" in window)) return;
  if (!audioState.voicesInitialized) {
    audioState.voicesInitialized = true;
    refreshVoiceAssignments();
    window.speechSynthesis.addEventListener?.("voiceschanged", () => {
      refreshVoiceAssignments();
      updateButtons();
    });
  }
  if (!audioState.availableVoices.length) {
    refreshVoiceAssignments();
  }
}

function getVoiceForRole(role) {
  ensureVoiceAssignments();
  if (audioState.roleVoiceMap.has(role)) {
    return audioState.roleVoiceMap.get(role);
  }
  return (
    audioState.availableVoices[0] ||
    window.speechSynthesis?.getVoices?.().find((voice) => voice.lang === audioState.voiceLanguage) ||
    window.speechSynthesis?.getVoices?.()[0] ||
    null
  );
}

function addRepeatLog(entry) {
  addLog(`${entry.speakerRole}: "${entry.germanText}" (${entry.japaneseGloss})`);
}

function getVoiceRoleProfile(role) {
  return ROLE_VOICE_PROFILES[role] || { label: role || "乗組員", cooldown: 1.2, voiceStyle: "generic" };
}

function getVoicePriorityRule(priority) {
  return VOICE_PRIORITY_RULES[priority] || VOICE_PRIORITY_RULES.normal;
}

function buildVoiceRepeatKey(entry) {
  return `${entry.trigger || entry.germanText}:${entry.speakerRole}`;
}

function describeVoiceRuntime() {
  const base = describeVoiceMode();
  const queuedCount = audioState.voiceQueue.length;
  const lastEntry = audioState.lastVoiceEntry;
  if (!lastEntry) {
    return queuedCount > 0 ? `${base} 待機 ${queuedCount} 件。` : base;
  }
  const roleLabel = getVoiceRoleProfile(lastEntry.speakerRole).label;
  const latest = `${roleLabel}: ${lastEntry.japaneseGloss}`;
  return queuedCount > 0 ? `${base} 待機 ${queuedCount} 件。最新 ${latest}` : `${base} 最新 ${latest}`;
}

function stopVoicePlayback() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  if (audioState.currentVoiceAudio) {
    audioState.currentVoiceAudio.pause();
    audioState.currentVoiceAudio.src = "";
    audioState.currentVoiceAudio = null;
  }
  audioState.voiceQueue = [];
  audioState.voiceBusy = false;
  audioState.lastVoiceEntry = null;
  updateButtons();
}

function flushVoiceQueue() {
  if (audioState.voiceBusy || !audioState.voiceEnabled) return;

  const next = audioState.voiceQueue.shift();
  if (!next) return;

  audioState.voiceBusy = true;
  audioState.lastVoiceEntry = next;
  updateButtons();
  const shouldUseRecordedVoice = next.audioSrc && audioState.voiceSourceMode === "asset";
  if (shouldUseRecordedVoice) {
    const audio = new Audio(next.audioSrc);
    audio.preload = "auto";
    audio.volume = 0.92;
    audioState.currentVoiceAudio = audio;
    audio.onended = () => {
      audioState.currentVoiceAudio = null;
      audioState.voiceBusy = false;
      updateButtons();
      flushVoiceQueue();
    };
    audio.onerror = () => {
      audioState.currentVoiceAudio = null;
      audioState.voiceBusy = false;
      if ("speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined") {
        audioState.voiceQueue.unshift({ ...next, audioSrc: null });
      }
      updateButtons();
      flushVoiceQueue();
    };
    audio.play().catch(() => {
      audioState.currentVoiceAudio = null;
      audioState.voiceBusy = false;
      if ("speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined") {
        audioState.voiceQueue.unshift({ ...next, audioSrc: null });
      }
      updateButtons();
      flushVoiceQueue();
    });
    return;
  }

  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    audioState.voiceBusy = false;
    updateButtons();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(next.germanText);
  utterance.lang = audioState.voiceLanguage;
  utterance.rate = next.rate ?? 1;
  utterance.pitch = next.pitch ?? 1;
  utterance.volume = 0.88;

  const matchingVoice = getVoiceForRole(next.speakerRole);
  if (matchingVoice) {
    utterance.voice = matchingVoice;
  }

  utterance.onend = () => {
    audioState.voiceBusy = false;
    updateButtons();
    flushVoiceQueue();
  };
  utterance.onerror = () => {
    audioState.voiceBusy = false;
    updateButtons();
    flushVoiceQueue();
  };

  window.speechSynthesis.speak(utterance);
}

function queueVoiceLine(entry) {
  if (!audioState.voiceEnabled) return;

  const now = state.time;
  const roleProfile = getVoiceRoleProfile(entry.speakerRole);
  const priorityRule = getVoicePriorityRule(entry.priority);
  const repeatKey = buildVoiceRepeatKey(entry);
  const lastAt = audioState.lastVoiceAt.get(entry.speakerRole) ?? -Infinity;
  const lastRepeatAt = audioState.recentVoiceAt.get(repeatKey) ?? -Infinity;

  if (entry.priority !== "critical" && now - lastAt < roleProfile.cooldown) return;
  if (now - lastRepeatAt < (entry.repeatCooldown ?? priorityRule.repeatCooldown)) return;

  audioState.lastVoiceAt.set(entry.speakerRole, now);
  audioState.recentVoiceAt.set(repeatKey, now);
  if (entry.priority === "critical") {
    stopVoicePlayback();
  }

  const normalizedEntry = {
    ...entry,
    trigger: entry.trigger || null,
    voiceStyle: entry.voiceStyle || roleProfile.voiceStyle,
    roleLabel: roleProfile.label
  };
  const queuedEntry =
    audioState.voiceSourceMode === "tts" ? { ...normalizedEntry, audioSrc: null } : normalizedEntry;
  const insertIndex = audioState.voiceQueue.findIndex(
    (queued) => getVoicePriorityRule(queued.priority).rank > priorityRule.rank
  );
  if (insertIndex === -1) {
    audioState.voiceQueue.push(queuedEntry);
  } else {
    audioState.voiceQueue.splice(insertIndex, 0, queuedEntry);
  }
  updateButtons();
  flushVoiceQueue();
}

function describeVoiceMode() {
  const voiceCount = audioState.availableVoices.length;
  if (audioState.voiceSourceMode === "tts") {
    if (voiceCount >= 2) {
      return `復唱は役職別 TTS を優先。独語音声 ${voiceCount} 種を割当。`;
    }
    if (voiceCount === 1) {
      return "復唱は TTS 優先。ただし独語音声が 1 種のため声色差は小さい。";
    }
    return "復唱は TTS 優先。独語音声未検出時はブラウザ既定音声を使う。";
  }
  return "復唱は録音音声を優先。ボタンで役職別 TTS に切替可能。";
}

function toggleVoiceMode() {
  audioState.voiceSourceMode = audioState.voiceSourceMode === "tts" ? "asset" : "tts";
  stopVoicePlayback();
  ensureVoiceAssignments();
  updateButtons();
  setStatus(
    audioState.voiceSourceMode === "tts"
      ? "復唱を役職別 TTS 優先に変更。艦長・見張り・機関で声を分ける。"
      : "復唱を録音音声優先に変更。収録済みの号令音声を再生する。",
    "good"
  );
}

function toggleVoiceEnabled() {
  audioState.voiceEnabled = !audioState.voiceEnabled;
  if (!audioState.voiceEnabled) {
    stopVoicePlayback();
  } else {
    flushVoiceQueue();
  }
  updateButtons();
  setStatus(
    audioState.voiceEnabled
      ? "独語復唱を有効化。音響停止中でも号令・復唱を再生する。"
      : "独語復唱を停止。ソナー音響とは独立して無効化。",
    audioState.voiceEnabled ? "good" : "warning"
  );
}

function emitGermanRepeater(trigger) {
  const entries = GERMAN_REPEATERS[trigger] || [];
  const audioFiles = GERMAN_VOICE_FILES[trigger] || [];
  for (const [index, entry] of entries.entries()) {
    const nextEntry = audioFiles[index]
      ? { ...entry, trigger, audioSrc: audioFiles[index] }
      : { ...entry, trigger };
    addRepeatLog(nextEntry);
    if (audioState.voiceEnabled) {
      queueVoiceLine(nextEntry);
    }
  }
}

function emitSpeedVoice(value) {
  if (value <= 0) {
    emitGermanRepeater("captainSpeedStop");
    emitGermanRepeater("engineAckStop");
    return;
  }
  if (value <= 3) {
    emitGermanRepeater("captainSpeedSlow");
  } else if (value <= 6) {
    emitGermanRepeater("captainSpeedHalf");
  } else {
    emitGermanRepeater("captainSpeedFull");
  }
}

function emitDepthVoice(value) {
  if (value <= 20) {
    emitGermanRepeater("captainDepth20");
  } else if (value <= 60) {
    emitGermanRepeater("captainDepth60");
  } else if (value <= 120) {
    emitGermanRepeater("captainDepth120");
  } else if (value <= 140) {
    emitGermanRepeater("captainDepth140");
  }
}

function contactVoiceTrigger(contact) {
  const sonarEntry = state.sonarContacts.find((entry) => entry.contact.id === contact.id);
  if (contact.visualDetected) {
    if (contact.type === "escort") return "watchDestroyerSighted";
    if (contact.type === "flagship" || contact.type === "convoy") return "watchSteamerSighted";
    return "watchTargetSighted";
  }
  if (!sonarEntry) return "sonarContact";
  if (contact.type === "escort" && sonarEntry.strength > 0.42) return "sonarContactDestroyer";
  if (Math.abs(sonarEntry.relBearing) <= 25) return "sonarContactAhead";
  if (sonarEntry.relBearing < 0) return "sonarContactPort";
  return "sonarContactStarboard";
}

function alarmTaskCount() {
  return Object.values(state.alarmDive.tasks).filter(Boolean).length;
}

function alarmTaskDuration(taskKey) {
  const flow = ALARM_TASK_FLOW[taskKey];
  const skill = state.crewSkills[flow.skill] ?? 1;
  return flow.baseDuration / skill;
}

function alarmSkillSummary() {
  const average =
    (state.crewSkills.watch +
      state.crewSkills.engineer +
      state.crewSkills.navigation +
      state.crewSkills.crew) /
    4;
  if (average >= 1.08) return "精鋭";
  if (average >= 1) return "熟練";
  return "標準";
}

function alarmDiveDiveRate() {
  const { tasks } = state.alarmDive;
  return (
    0.1 +
    (tasks.engines ? 0.08 : 0) +
    (tasks.ballast ? 0.18 : 0) +
    (tasks.planes ? 0.14 : 0) +
    (tasks.bowShift ? 0.08 : 0)
  );
}

function computeDepthChangeRate(sub) {
  const descending = sub.targetDepth > sub.depth + 0.5;
  const ascending = sub.targetDepth < sub.depth - 0.5;
  if (!descending && !ascending) return 0;

  if (descending) {
    let rate =
      sub.depth < 20
        ? 0.34
        : sub.depth < 80
          ? 0.5
          : sub.depth < 160
            ? 0.58
            : 0.52;
    if (sub.targetSpeed >= 6) rate += 0.05;
    else if (sub.targetSpeed >= 3) rate += 0.02;
    if (state.silentRunning) rate -= 0.04;
    if (state.alarmDive.active) rate += alarmDiveDiveRate();
    return clamp(rate, 0.18, 0.9);
  }

  let rate =
    sub.depth > 160
      ? 0.34
      : sub.depth > 80
        ? 0.3
        : sub.depth > 20
          ? 0.26
          : 0.2;
  if (sub.targetSpeed >= 6) rate += 0.03;
  if (state.silentRunning) rate -= 0.03;
  if (state.alarmDive.active) rate = Math.max(rate, 0.18);
  return clamp(rate, 0.14, 0.42);
}

function alarmDiveOutlook() {
  const completed = alarmTaskCount();
  const sub = state.submarine;

  if (completed >= 5 && sub.depth >= 14) return "成功見込み";
  if (completed >= 3) return "際どい";
  return "危険";
}

function syncCaptainAlarmCard() {
  if (!captainAlarmCardNode) return;
  const visible = !!state.alarmDive.active;
  captainAlarmCardNode.hidden = !visible;
  captainAlarmCardNode.style.display = visible ? "block" : "none";
}

function startAlarmDive(reason = "enemy_contact", autoTriggered = false) {
  if (state.alarmDive.active || !state.running) return;
  if (state.time < (state.alarmDiveCooldownUntil || 0)) return;

  ensureAudio();
  if (audioState.context?.state === "suspended" && !autoTriggered) {
    audioState.context.resume().catch(() => {});
  }

  state.alarmDive = {
    ...createAlarmDiveState(),
    active: true,
    triggeredAutomatically: autoTriggered,
    startedAt: state.time,
    reason
  };
  for (const taskKey of Object.keys(ALARM_TASK_FLOW)) {
    state.alarmDive.taskTimeline[taskKey].duration = alarmTaskDuration(taskKey);
  }
  state.viewMode = "normal";
  state.silentRunning = false;
  state.submarine.targetDepth = Math.max(state.submarine.targetDepth, 120);
  if (state.submarine.targetSpeed > 0) {
    state.submarine.targetSpeed = Math.max(state.submarine.targetSpeed, 4);
  }
  state.battlePhase = BATTLE_PHASES.alarmDive;
  state.battlePhaseEnteredAt = state.time;
  setCommandState({
    captainOrder: "艦長命令: Alarm! 急速潜航",
    priorityLabel: "緊急",
    priorityTone: "critical",
    sonar: "護衛接近方位を叫報",
    torpedo: "発射管作業停止、固定確認",
    navigation: "最大下げ角、潜航深度 120m"
  });
  addLog(autoTriggered ? "敵優位接触。Alarm! を自動発令。" : "艦長発令: Alarm! 急速潜航。");
  playAlarmBell();
  emitGermanRepeater("alarmDiveStart");
  setStatus("Alarm! 急速潜航開始。各部署が自動手順へ移行。", "bad");
  state.alarmDiveCooldownUntil = state.time + 18;
  syncCaptainAlarmCard();
  updateButtons();
}

function completeAlarmTask(taskKey) {
  if (!state.alarmDive.active || state.alarmDive.tasks[taskKey]) return;

  state.alarmDive.tasks[taskKey] = true;
  state.alarmDive.taskTimeline[taskKey].completedAt = state.time;
  const task = ALARM_TASKS[taskKey];
  addLog(`${task.role}: ${task.label} 完了。`);

  if (taskKey === "engines" && state.submarine.targetSpeed > 0) {
    state.submarine.targetSpeed = 4;
  }
  if (taskKey === "ballast" || taskKey === "planes") {
    state.submarine.targetDepth = Math.max(state.submarine.targetDepth, 140);
  }

  const repeaterMap = {
    hatches: "alarmHatches",
    engines: "alarmEngines",
    ballast: "alarmBallast",
    planes: "alarmPlanes",
    bowShift: "alarmBowShift"
  };
  emitGermanRepeater(repeaterMap[taskKey]);
  setStatus(`${task.label} 完了。残り ${5 - alarmTaskCount()} タスク。`, "warning");
  updateButtons();
}

function resolveAlarmDive(success) {
  const completed = alarmTaskCount();
  const sub = state.submarine;
  const autoTriggered = state.alarmDive.triggeredAutomatically;
  const missing = Object.entries(state.alarmDive.tasks)
    .filter(([, done]) => !done)
    .map(([key]) => key);

  if (success) {
    sub.detection = clamp(sub.detection - (0.1 + completed * 0.02), 0, 1);
    emitGermanRepeater("alarmDiveSuccess");
    setStatus("急速潜航成功。潜航戦闘へ移行。", "good");
    addLog(`急速潜航成功。${completed} / 5 タスク完了で海中へ没入。`);
  } else {
    let damage = 0;
    if (missing.includes("hatches")) damage += 10;
    if (missing.includes("engines")) damage += 7;
    if (missing.includes("ballast")) damage += 8;
    if (missing.includes("planes")) damage += 5;
    if (missing.includes("bowShift")) damage += 4;
    sub.hull = clamp(sub.hull - damage, 0, 100);
    sub.battery = clamp(sub.battery - Math.max(4, missing.length * 2), 0, 100);
    sub.detection = clamp(sub.detection + 0.22, 0, 1);
    emitGermanRepeater("alarmDiveFailure");
    setStatus("急速潜航に遅れ。浸水または初動被害が発生。", "bad");
    addLog(
      `急速潜航失敗。未完了 ${missing.length} 項目、船体損傷 ${Math.round(damage)}%。`
    );
  }

  state.alarmDive.active = false;
  state.alarmDive.resolved = success ? "success" : "failure";
  state.alarmDiveCooldownUntil = Math.max(state.alarmDiveCooldownUntil || 0, state.time + 18);
  syncCaptainAlarmCard();
  if (sub.hull <= 0) {
    state.running = false;
    state.battlePhase = BATTLE_PHASES.disabled;
    applyPhaseStatus(BATTLE_PHASES.disabled);
  } else {
    if (success && autoTriggered && canStandDownToPatrol()) {
      standDownToPatrol("auto");
    } else {
      state.battlePhase = BATTLE_PHASES.submergedCombat;
      state.battlePhaseEnteredAt = state.time;
      applyPhaseStatus(BATTLE_PHASES.submergedCombat);
    }
  }
  updateButtons();
}

function canStandDownToPatrol() {
  if (state.alarmDive.active || !state.running) return false;
  const sub = state.submarine;
  const hostileContacts = state.contacts.filter((contact) => contact.hostile && !contact.destroyed);
  const closeEscort = hostileContacts.some((contact) => distance(sub, contact) < 1200);
  const hotEscort = hostileContacts.some((contact) => contact.alert > 0.42);
  const activeChase = hostileContacts.some((contact) => contact.chaseModeTimer > 0);
  return !closeEscort && !hotEscort && !activeChase && sub.detection < 0.34;
}

function standDownToPatrol(source = "manual") {
  if (!canStandDownToPatrol()) {
    setStatus("まだ通常監視へは戻れない。護衛接近または被探知の危険あり。", "warning");
    return false;
  }

  state.viewMode = "normal";
  state.silentRunning = false;
  state.submarine.targetDepth = 60;
  state.submarine.targetSpeed = 3;
  state.battlePhase = BATTLE_PHASES.patrol;
  state.battlePhaseEnteredAt = state.time;
  setCommandState({
    captainOrder: "艦長命令: Alarm 解除、通常監視",
    priorityLabel: "通常",
    priorityTone: "normal",
    sonar: "広域の受動聴音へ復帰",
    torpedo: "射撃待機、次接触に備える",
    navigation: "深度 60m、微速で哨戒継続"
  });
  applyPhaseStatus(BATTLE_PHASES.patrol);
  addLog(
    source === "auto"
      ? "急速潜航後、危険薄し。艦長自動判断で Alarm 解除、通常監視へ復帰。"
      : "艦長判断: Alarm 解除。通常監視へ復帰。"
  );
  setStatus("Alarm 解除。通常監視へ復帰。", "good");
  updateButtons();
  updateHud();
  return true;
}

function shouldAutoTriggerAlarmDive() {
  if (state.alarmDive.active || !state.running) return false;
  if (state.time < (state.alarmDiveCooldownUntil || 0)) return false;
  if (state.battlePhase === BATTLE_PHASES.disabled || state.battlePhase === BATTLE_PHASES.egress) {
    return false;
  }

  const sub = state.submarine;
  if (sub.depth > 20 && state.viewMode !== "binocular" && state.viewMode !== "periscope") {
    return false;
  }
  const surfacedRisk = state.viewMode === "binocular" || sub.depth < 8;
  const closeEscort = state.contacts.some(
    (contact) =>
      contact.hostile &&
      !contact.destroyed &&
      contact.detected &&
      distance(sub, contact) < 780
  );

  return (
    closeEscort &&
    (
      state.tacticalAdvantage === "enemy" ||
      sub.detection > 0.58 ||
      surfacedRisk ||
      state.binocularExposureTimer >= BINOCULAR_EXPOSURE_FORCED_DIVE ||
      state.binocularRecentRiskyShotTimer > 0
    )
  );
}

function updateBinocularAttackState(deltaTime) {
  const sub = state.submarine;
  const light = lightConditionMeta();
  state.binocularRecentRiskyShotTimer = Math.max(0, state.binocularRecentRiskyShotTimer - deltaTime);
  const escorts = state.contacts.filter((contact) => contact.hostile && !contact.destroyed);
  const nearestEscortRange = escorts.length
    ? Math.min(...escorts.map((contact) => distance(sub, contact)))
    : Infinity;
  const nearbyEscorts = escorts.filter((contact) => distance(sub, contact) <= BINOCULAR_WARNING_ESCORT_RANGE);
  const maxEscortAlert = nearbyEscorts.length ? Math.max(...nearbyEscorts.map((contact) => contact.alert)) : 0;
  const hasDetectedContact = state.contacts.some((contact) => !contact.destroyed && contact.detected);

  if (state.viewMode === "binocular") {
    let exposureGain = 1;
    if (nearestEscortRange <= BINOCULAR_WARNING_ESCORT_RANGE) exposureGain += 1.5;
    if (maxEscortAlert >= 0.45) exposureGain += 1.5;
    if (!state.silentRunning) exposureGain += 0.5;
    state.binocularExposureTimer += deltaTime * exposureGain * light.exposureFactor;
  } else {
    state.binocularExposureTimer = Math.max(0, state.binocularExposureTimer - deltaTime * 0.75);
  }

  if (!hasDetectedContact) {
    state.binocularAttackState = "blocked";
    state.binocularAttackReason = "有効な目標接触なし。";
    return;
  }

  if (sub.depth > 4) {
    state.binocularAttackState = "blocked";
    state.binocularAttackReason = "浮上深度 0-4m でのみ双眼鏡攻撃可。";
    return;
  }

  if (
    nearestEscortRange <= BINOCULAR_SAFE_ESCORT_RANGE ||
    maxEscortAlert >= 0.45 ||
    state.binocularExposureTimer >= BINOCULAR_EXPOSURE_FORCED_DIVE
  ) {
    state.binocularAttackState = "blocked";
    state.binocularAttackReason =
      state.binocularExposureTimer >= BINOCULAR_EXPOSURE_FORCED_DIVE
        ? "浮上露見時間が限界。即潜航を要する。"
        : "護衛艦が近すぎる。双眼鏡攻撃禁止。";
    return;
  }

  if (
    nearestEscortRange <= BINOCULAR_WARNING_ESCORT_RANGE ||
    sub.detection >= BINOCULAR_RISKY_DETECTION ||
    state.binocularExposureTimer >= BINOCULAR_EXPOSURE_WARNING
  ) {
    state.binocularAttackState = "risky";
    state.binocularAttackReason =
      state.binocularExposureTimer >= BINOCULAR_EXPOSURE_DANGER
        ? "長時間浮上中。発見危険が非常に高い。"
        : "護衛圏が近い。短時間の観測のみ許容。";
    return;
  }

  if (sub.detection < BINOCULAR_ALLOWED_DETECTION) {
    state.binocularAttackState = "allowed";
    state.binocularAttackReason = "護衛不在または遠距離。短時間の双眼鏡攻撃が可能。";
    return;
  }

  state.binocularAttackState = "risky";
  state.binocularAttackReason = "被探知率が上昇。双眼鏡攻撃は危険。";
}

function resolvePostAttackDecision(decision) {
  if (!state.postAttackDecision.active) return;

  if (decision === "dive") {
    state.postAttackDecision = {
      active: false,
      timer: 0,
      mode: "dive",
      reason: "艦長判断で即潜航"
    };
    addLog("艦長判断: 危険発射後、即潜航。");
    setStatus("危険発射後の即潜航を実施。", "bad");
    startAlarmDive("captain_order", false);
    return;
  }

  if (decision === "surface_egress") {
    state.postAttackDecision = {
      active: false,
      timer: 0,
      mode: "surface_egress",
      reason: "艦長判断で水上離脱"
    };
    state.viewMode = "binocular";
    state.submarine.targetDepth = 0;
    state.submarine.targetSpeed = 9;
    setCommandState({
      captainOrder: "艦長命令: 水上全速離脱",
      priorityLabel: "緊急",
      priorityTone: "critical",
      sonar: "護衛接近方位を監視",
      torpedo: "再装填より離脱優先",
      navigation: "全速で護衛圏外へ離脱"
    });
    addLog("艦長判断: 水上全速離脱。危険を承知で距離を稼ぐ。");
    setStatus("危険発射後の水上離脱を実施。護衛接近に注意。", "warning");
    for (const contact of state.contacts) {
      if (contact.hostile && !contact.destroyed) {
        contact.chaseModeTimer = SURFACE_EGRESS_CHASE_WINDOW;
        contact.alert = clamp(contact.alert + 0.3, 0, 1);
      }
    }
    updateButtons();
    updateHud();
  }
}

function updatePostAttackDecision(deltaTime) {
  if (!state.postAttackDecision.active) return;
  state.postAttackDecision.timer = Math.max(0, state.postAttackDecision.timer - deltaTime);
  if (state.postAttackDecision.timer > 0) return;

  addLog("危険発射後の判断が遅延。艦長自動命令: Alarm!");
  setStatus("判断遅延。艦長自動命令で急速潜航。", "bad");
  resolvePostAttackDecision("dive");
}

function updateAlarmDive(deltaTime) {
  if (!state.alarmDive.active) return;

  state.alarmDive.timer = Math.max(0, state.alarmDive.timer - deltaTime);
  state.viewMode = "normal";
  state.submarine.targetDepth = Math.max(state.submarine.targetDepth, 120);
  if (state.submarine.targetSpeed > 0) {
    state.submarine.targetSpeed = Math.max(state.submarine.targetSpeed, 4);
  }

  if (state.alarmDive.triggeredAutomatically) {
    const sub = state.submarine;
    const nearestHostile = state.contacts
      .filter((contact) => contact.hostile && !contact.destroyed)
      .map((contact) => ({ contact, range: distance(sub, contact) }))
      .sort((a, b) => a.range - b.range)[0];

    if (nearestHostile && nearestHostile.range < 1800) {
      const threatBearing = bearing(sub, nearestHostile.contact);
      const portEscape = normalizeAngle(threatBearing - 110);
      const starboardEscape = normalizeAngle(threatBearing + 110);
      const currentHeading = state.submarine.targetHeading;
      const desiredHeading =
        Math.abs(normalizeAngle(portEscape - currentHeading)) <=
        Math.abs(normalizeAngle(starboardEscape - currentHeading))
          ? portEscape
          : starboardEscape;

      state.submarine.targetHeading = desiredHeading;
      state.alarmDive.autoEvasionHeading = desiredHeading;
      setCommandState({
        captainOrder: "艦長命令: Alarm! 急速潜航・離隔回頭",
        priorityLabel: "緊急",
        priorityTone: "critical",
        sonar: `最寄り護衛 ${Math.round(nearestHostile.range)}m、接近方位を叫報`,
        torpedo: "発射管作業停止、固定確認",
        navigation: `自動回避針路 ${formatHeading(desiredHeading)}、深度 120m へ急速潜航`
      });
    } else {
      state.alarmDive.autoEvasionHeading = null;
    }
  }

  for (const [taskKey, flow] of Object.entries(ALARM_TASK_FLOW)) {
    if (state.alarmDive.tasks[taskKey]) continue;
    const timeline = state.alarmDive.taskTimeline[taskKey];
    if (timeline.startedAt === null) {
      const ready = flow.dependsOn.every((dependencyKey) => state.alarmDive.tasks[dependencyKey]);
      if (ready) {
        timeline.startedAt = state.time;
      }
    }
    if (
      timeline.startedAt !== null &&
      state.time - timeline.startedAt >= timeline.duration
    ) {
      completeAlarmTask(taskKey);
    }
  }

  const coreReady =
    state.alarmDive.tasks.hatches &&
    state.alarmDive.tasks.engines &&
    state.alarmDive.tasks.ballast &&
    state.alarmDive.tasks.planes;

  if (coreReady && state.submarine.depth >= 20) {
    resolveAlarmDive(true);
    return;
  }

  if (state.alarmDive.timer <= 0) {
    resolveAlarmDive(coreReady && state.submarine.depth >= 16 && alarmTaskCount() >= 4);
  }
}

function contactLabel(contact) {
  if (contact.type === "flagship") return "重要輸送船";
  if (contact.type === "escort") return "駆逐艦";
  return "商船";
}

function createContact(type, overrides = {}) {
  const preset = {
    convoy: { speed: 2.6, hp: 1, hostile: false, priority: false, tone: 110 },
    escort: { speed: 4.8, hp: 2, hostile: true, priority: false, tone: 180 },
    flagship: { speed: 3.1, hp: 2, hostile: false, priority: true, tone: 145 }
  }[type];
  const escortPersonality = chooseRandom(["cautious", "balanced", "aggressive"]);

  return {
    id: `${type}-${Math.random().toString(16).slice(2)}`,
    type,
    x: 0,
    y: 0,
    heading: 0,
    speed: preset.speed,
    hp: preset.hp,
    hostile: preset.hostile,
    priority: preset.priority,
    tone: preset.tone,
    destroyed: false,
    detected: false,
    visualDetected: false,
    sonarDetected: false,
    detectionSource: null,
    lastDetectionSource: null,
    everDetected: false,
    pinged: 0,
    alert: 0,
    attackCooldown: randomRange(8, 14),
    chaseModeTimer: 0,
    reacquireLockout: 0,
    trail: [],
    depthChargesRemaining: preset.hostile ? ESCORT_DEPTH_CHARGE_CAPACITY : 0,
    depthChargeCapacity: preset.hostile ? ESCORT_DEPTH_CHARGE_CAPACITY : 0,
    outOfDepthChargesReported: false,
    aiIntent: preset.hostile ? ESCORT_AI_INTENTS.escortReturn : null,
    aiIntentChangedAt: 0,
    aiDecisionCooldown: randomRange(1.1, 2.4),
    searchCenter: null,
    searchHeading: randomRange(0, 360),
    wolfpackDetachedUntil: 0,
    wolfpackDetachPoint: null,
    escortPersonality,
    ...overrides
  };
}

function randomCenteredOffset(range) {
  return randomRange(-range, range);
}

function chooseRandom(options) {
  return options[Math.floor(Math.random() * options.length)];
}

function escortPersonalityBias(contact) {
  if (contact.escortPersonality === "aggressive") {
    return { attackBias: 0.08, returnBias: -0.05, searchBias: 0.04 };
  }
  if (contact.escortPersonality === "cautious") {
    return { attackBias: -0.05, returnBias: 0.08, searchBias: 0.02 };
  }
  return { attackBias: 0, returnBias: 0, searchBias: 0 };
}

function nearestEscortProtectedShip(contact) {
  return state.contacts
    .filter(
      (other) =>
        !other.destroyed &&
        !other.hostile &&
        (other.type === "flagship" || other.type === "convoy")
    )
    .sort((a, b) => distance(contact, a) - distance(contact, b))[0] || null;
}

function setEscortIntent(contact, nextIntent, extra = {}) {
  if (contact.aiIntent !== nextIntent) {
    contact.aiIntent = nextIntent;
    contact.aiIntentChangedAt = state.time;
  }
  if (extra.searchCenter) {
    contact.searchCenter = { ...extra.searchCenter };
  }
  if (extra.searchHeading != null) {
    contact.searchHeading = extra.searchHeading;
  }
}

function evaluateEscortIntent(contact, sub, range, hearsSub, jam, surfaced) {
  const personality = escortPersonalityBias(contact);
  const protectedShip = nearestEscortProtectedShip(contact);
  const convoyDistance = protectedShip ? distance(contact, protectedShip) : Infinity;
  const chaseMode = (contact.chaseModeTimer || 0) > 0;
  const alert = contact.alert || 0;
  const hasDepthCharges = (contact.depthChargesRemaining ?? 0) > 0;
  const canSeeSurfaced =
    surfaced &&
    range < (state.viewMode === "binocular" ? 2200 : 1700) &&
    jam < 0.8;
  const attackUrgency =
    alert +
    (chaseMode ? 0.16 : 0) +
    (hearsSub ? 0.2 : 0) +
    (canSeeSurfaced ? 0.22 : 0) +
    personality.attackBias;

  if (canSeeSurfaced && attackUrgency > 0.55) {
    return ESCORT_AI_INTENTS.surfacePursuit;
  }
  if (
    hearsSub &&
    hasDepthCharges &&
    range < (chaseMode ? ESCORT_CHASE_ATTACK_RANGE * 1.45 : ESCORT_ATTACK_RANGE * 1.25) &&
    attackUrgency > 0.5
  ) {
    return ESCORT_AI_INTENTS.attackRun;
  }
  if (hearsSub && alert + personality.searchBias > 0.28) {
    return ESCORT_AI_INTENTS.investigateContact;
  }
  if ((chaseMode || alert > 0.34) && jam < 0.92) {
    return ESCORT_AI_INTENTS.lostContactSearch;
  }
  if (convoyDistance > 900 - personality.returnBias * 180 || alert < 0.18) {
    return ESCORT_AI_INTENTS.escortReturn;
  }
  return ESCORT_AI_INTENTS.investigateContact;
}

function escortIntentLabel(intent) {
  if (intent === "wolfpack_detached") {
    return "転進";
  }
  switch (intent) {
    case ESCORT_AI_INTENTS.attackRun:
      return "攻撃走";
    case ESCORT_AI_INTENTS.lostContactSearch:
      return "捜索";
    case ESCORT_AI_INTENTS.surfacePursuit:
      return "水上追撃";
    case ESCORT_AI_INTENTS.investigateContact:
      return "接触確認";
    case ESCORT_AI_INTENTS.escortReturn:
    default:
      return "護衛復帰";
  }
}

function rotateOffset(offset, angleDeg) {
  const radians = toRadians(angleDeg);
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  return {
    x: offset.x * cos - offset.y * sin,
    y: offset.x * sin + offset.y * cos
  };
}

function createStageFormation(anchor, baseHeading, members) {
  return members.map(({ type, offset, headingOffset = 0, speed, ...overrides }) => {
    const rotated = rotateOffset(offset, baseHeading);
    return createContact(type, {
      x: anchor.x + rotated.x,
      y: anchor.y + rotated.y,
      heading: normalizeAngle(baseHeading + headingOffset),
      ...(speed != null ? { speed } : {}),
      ...overrides
    });
  });
}

function createTrainingStageContacts() {
  const sector = chooseRandom([
    { x: 3850, y: 4180, heading: 4 },
    { x: 4580, y: 4520, heading: 12 },
    { x: 5020, y: 3920, heading: -6 },
    { x: 4260, y: 5050, heading: 18 }
  ]);
  const anchor = {
    x: sector.x + randomCenteredOffset(420),
    y: sector.y + randomCenteredOffset(320)
  };
  const heading = sector.heading + randomCenteredOffset(10);
  return [
    createContact("convoy", {
      x: anchor.x,
      y: anchor.y,
      heading,
      speed: randomRange(2.3, 2.9)
    })
  ];
}

function createDestroyerEscapeContacts() {
  const sector = chooseRandom([
    { x: 2860, y: 5480, heading: -22 },
    { x: 3320, y: 5090, heading: -8 },
    { x: 3460, y: 5660, heading: -34 },
    { x: 2740, y: 5180, heading: 2 }
  ]);
  const anchor = {
    x: sector.x + randomCenteredOffset(260),
    y: sector.y + randomCenteredOffset(220)
  };
  const heading = sector.heading + randomCenteredOffset(12);
  return [
    createContact("escort", {
      x: anchor.x,
      y: anchor.y,
      heading,
      speed: randomRange(5.4, 6.1),
      alert: randomRange(0.72, 0.84),
      chaseModeTimer: randomRange(75, 105)
    })
  ];
}

function createConvoyAssaultContacts() {
  const sector = chooseRandom([
    { x: 7420, y: 2740, heading: 16 },
    { x: 7920, y: 2460, heading: 8 },
    { x: 8320, y: 2280, heading: 2 },
    { x: 7680, y: 3020, heading: 20 }
  ]);
  const anchor = {
    x: sector.x + randomCenteredOffset(420),
    y: sector.y + randomCenteredOffset(280)
  };
  const heading = sector.heading + randomCenteredOffset(6);
  const formationJitter = 120;
  const lateralMirror = Math.random() < 0.5 ? -1 : 1;
  return createStageFormation(anchor, heading, [
    {
      type: "flagship",
      offset: { x: randomCenteredOffset(formationJitter), y: randomCenteredOffset(formationJitter) },
      headingOffset: randomCenteredOffset(3)
    },
    {
      type: "convoy",
      offset: {
        x: 280 + randomCenteredOffset(formationJitter),
        y: lateralMirror * (220 + randomCenteredOffset(formationJitter))
      },
      headingOffset: randomCenteredOffset(4)
    },
    {
      type: "convoy",
      offset: {
        x: 610 + randomCenteredOffset(formationJitter),
        y: lateralMirror * (-160 + randomCenteredOffset(formationJitter))
      },
      headingOffset: randomCenteredOffset(4)
    },
    {
      type: "escort",
      offset: {
        x: -520 + randomCenteredOffset(formationJitter),
        y: lateralMirror * (420 + randomCenteredOffset(formationJitter))
      },
      headingOffset: randomCenteredOffset(6),
      speed: randomRange(4.4, 5.2)
    },
    {
      type: "escort",
      offset: {
        x: 870 + randomCenteredOffset(formationJitter),
        y: lateralMirror * (-420 + randomCenteredOffset(formationJitter))
      },
      headingOffset: randomCenteredOffset(6),
      speed: randomRange(4.4, 5.2)
    }
  ]);
}

const STAGES = [
  {
    id: "training_shot",
    banner: "I / 雷撃訓練",
    name: "雷撃訓練",
    zone: "訓練海面",
    startClock: 11 * 3600 + 20 * 60,
    mission: "単独商船 1 隻を捕捉し、落ち着いて魚雷を命中させる基本訓練。",
    progress: "Stage 1 / 3",
    introLog: "訓練開始。単独商船 1 隻への基本雷撃を実施。",
    setup() {
      return {
        submarine: {
          x: 2400,
          y: 4700,
          heading: -12,
          targetHeading: -12,
          speed: 3,
          targetSpeed: 3,
          depth: 15,
          targetDepth: 15
        },
        escapeZone: { x: 10800, y: 6400, radius: 320 },
        contacts: createTrainingStageContacts()
      };
    },
    evaluate(state) {
      const targetAlive = state.contacts.some(
        (contact) => !contact.destroyed && (contact.type === "convoy" || contact.type === "flagship")
      );
      if (!targetAlive) {
        return {
          complete: true,
          successLog: "訓練商船撃沈。雷撃訓練を完了。",
          successStatus: "雷撃訓練完了。次は駆逐艦からの離脱。"
        };
      }
      return null;
    }
  },
  {
    id: "destroyer_escape",
    banner: "II / 駆逐艦回避",
    name: "駆逐艦回避",
    zone: "追撃回避海面",
    startClock: 17 * 3600 + 40 * 60,
    mission: "警戒中の駆逐艦 1 隻を振り切り、離脱海域へ到達せよ。雷撃より生残を優先する。",
    progress: "Stage 2 / 3",
    introLog: "訓練開始。駆逐艦の追尾を受けつつ離脱海域へ向かう。",
    setup() {
      return {
        submarine: {
          x: 2200,
          y: 5600,
          heading: -25,
          targetHeading: -25,
          speed: 6,
          targetSpeed: 6,
          depth: 60,
          targetDepth: 60,
          detection: 0.38
        },
        escapeZone: { x: 10450, y: 1700, radius: 360 },
        contacts: createDestroyerEscapeContacts()
      };
    },
    evaluate(state) {
      if (distance(state.submarine, state.escapeZone) < state.escapeZone.radius) {
        return {
          complete: true,
          successLog: "駆逐艦の追跡圏外へ離脱。回避訓練完了。",
          successStatus: "回避訓練完了。次は実戦コンボイ襲撃。"
        };
      }
      return null;
    }
  },
  {
    id: "convoy_assault",
    banner: "III / 船団襲撃",
    name: "船団襲撃",
    zone: "北大西洋船団航路",
    startClock: 22 * 3600 + 15 * 60,
    mission: "北大西洋のコンボイを追跡し、重要輸送船を雷撃して駆逐艦の反撃圏から離脱せよ。",
    progress: "Stage 3 / 3",
    introLog: "哨戒開始。北大西洋で連合軍コンボイの航跡を追う。",
    setup() {
      return {
        submarine: {
          x: 1800,
          y: 5200,
          heading: -18,
          targetHeading: -18,
          speed: 3,
          targetSpeed: 3,
          depth: 60,
          targetDepth: 60,
          detection: 0.1
        },
        escapeZone: { ...DEFAULT_ESCAPE_ZONE },
        contacts: createConvoyAssaultContacts()
      };
    },
    evaluate(state) {
      const flagshipAlive = state.contacts.some(
        (contact) => contact.type === "flagship" && !contact.destroyed
      );
      if (!flagshipAlive && distance(state.submarine, state.escapeZone) < state.escapeZone.radius) {
        return {
          complete: true,
          successLog: "離脱海域へ到達。実戦任務成功。",
          successStatus: "最終ステージ完了。再挑戦するか、新しい訓練へ戻れる。"
        };
      }
      return null;
    }
  }
];

function currentStage() {
  return STAGES[state.stageIndex] || STAGES[0];
}

function syncStageSelect() {
  if (!stageSelectNode) return;
  const nextValue = String(state.stageIndex);
  if (stageSelectNode.value !== nextValue) {
    stageSelectNode.value = nextValue;
  }
}

function seedContacts() {
  state.contacts = currentStage().setup().contacts;
}

function computeTorpedoSolution(contact) {
  const sub = state.submarine;
  const nav = state.navigationTactical;
  const relativeX = contact.x - sub.x;
  const relativeY = contact.y - sub.y;
  const contactVelocityX = Math.cos(toRadians(contact.heading)) * knotsToWorldSpeed(contact.speed);
  const contactVelocityY = Math.sin(toRadians(contact.heading)) * knotsToWorldSpeed(contact.speed);
  const torpedoSpeedWorld = knotsToWorldSpeed(TORPEDO_SPEED);

  const a =
    contactVelocityX * contactVelocityX +
    contactVelocityY * contactVelocityY -
    torpedoSpeedWorld * torpedoSpeedWorld;
  const b = 2 * (relativeX * contactVelocityX + relativeY * contactVelocityY);
  const c = relativeX * relativeX + relativeY * relativeY;

  let interceptTime = null;
  if (Math.abs(a) < 1e-6) {
    if (Math.abs(b) > 1e-6) {
      const linearTime = -c / b;
      if (linearTime > 0) interceptTime = linearTime;
    }
  } else {
    const discriminant = b * b - 4 * a * c;
    if (discriminant >= 0) {
      const sqrt = Math.sqrt(discriminant);
      const roots = [(-b - sqrt) / (2 * a), (-b + sqrt) / (2 * a)].filter(
        (value) => value > 0
      );
      if (roots.length) interceptTime = Math.min(...roots);
    }
  }

  if (!interceptTime) {
    return null;
  }

  const interceptX = contact.x + contactVelocityX * interceptTime;
  const interceptY = contact.y + contactVelocityY * interceptTime;
  const leadBearing = bearing(sub, { x: interceptX, y: interceptY });
  const gyroAngle = normalizeAngle(leadBearing - sub.heading);
  const range = distance(sub, contact);
  const interceptRange = distance(sub, { x: interceptX, y: interceptY });
  const aspect = normalizeAngle(contact.heading - (bearing(contact, sub) + 180));

  return {
    contact,
    range,
    interceptTime,
    interceptPoint: { x: interceptX, y: interceptY },
    interceptRange,
    leadBearing,
    gyroAngle,
    aspect,
    solutionRating: nav.solutionRating,
    effectiveGyroLimit: TORPEDO_GYRO_LIMIT - (1 - nav.solutionRating) * 12,
    shotValid:
      interceptRange <= TORPEDO_MAX_RANGE * (0.82 + nav.solutionRating * 0.18) &&
      Math.abs(gyroAngle) <= TORPEDO_GYRO_LIMIT - (1 - nav.solutionRating) * 12 &&
      sub.depth >= UBOAT_CLASS.torpedoDepthMin &&
      sub.depth <= UBOAT_CLASS.torpedoDepthMax
  };
}

function getBestTorpedoSolution() {
  return state.contacts
    .filter((contact) => !contact.destroyed)
    .map((contact) => computeTorpedoSolution(contact))
    .filter(Boolean)
    .sort((a, b) => {
      const validDelta = Number(b.shotValid) - Number(a.shotValid);
      if (validDelta !== 0) return validDelta;
      const qualityDelta = b.solutionRating - a.solutionRating;
      if (Math.abs(qualityDelta) > 0.001) return qualityDelta;
      return a.interceptTime - b.interceptTime || a.range - b.range;
    })[0] || null;
}

function playerContactLabel(contact) {
  if (!contact) return "未識別接触";
  if (contact.visualDetected) return contactLabel(contact);
  const observed = state.observedContacts.get(contact.id);
  if (observed?.identified && observed.suspectedType) {
    return contactLabel({ type: observed.suspectedType });
  }
  return "未識別接触";
}

function playerSonarLabel(contact) {
  if (!contact) return "未識別接触";
  if (contact.visualDetected) return contactLabel(contact);
  const observed = state.observedContacts.get(contact.id);
  if (observed?.identified && observed.suspectedType) {
    return contactLabel({ type: observed.suspectedType });
  }
  if (observed?.suspectedType) {
    const confidence = Math.round((observed.identifyConfidence || 0) * 100);
    return `${contactLabel({ type: observed.suspectedType })}らしき接触 ${confidence}%`;
  }
  if (contact.speed >= 4.2) return "高速スクリュー音";
  if (contact.speed >= 3) return "中速接触";
  return "低速接触";
}

function getSonarTypeConfidenceLabel(confidence) {
  if (confidence >= 0.82) return "高";
  if (confidence >= 0.58) return "中";
  return "低";
}

function estimateSonarContactType(contact, strength, observed) {
  const historyFactor = clamp((observed?.bearingLog.length || 0) / 6, 0, 1);
  const speedFactor = clamp(contact.speed / 5.2, 0, 1);
  const toneFactor = clamp((contact.tone - 100) / 90, 0, 1);

  const scores = {
    escort: strength * 0.55 + speedFactor * 0.8 + toneFactor * 0.4,
    convoy: strength * 0.42 + (1 - speedFactor) * 0.5 + (1 - toneFactor) * 0.26,
    flagship: strength * 0.48 + (1 - speedFactor) * 0.3 + 0.24 + (contact.priority ? 0.22 : 0)
  };

  if (contact.type === "escort") {
    scores.escort += 0.34;
  } else if (contact.type === "flagship") {
    scores.flagship += 0.3;
    scores.convoy += 0.08;
  } else {
    scores.convoy += 0.22;
  }

  const bestType = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  const sortedValues = Object.values(scores).sort((a, b) => b - a);
  const margin = (sortedValues[0] || 0) - (sortedValues[1] || 0);
  const confidence = clamp(strength * 0.5 + historyFactor * 0.22 + margin * 0.7, 0.18, 0.98);

  return { type: bestType, confidence };
}

function getBestKnownTorpedoSolution() {
  return state.contacts
    .filter((contact) => !contact.destroyed && contact.detected)
    .map((contact) => computeTorpedoSolution(contact))
    .filter(Boolean)
    .sort((a, b) => {
      const validDelta = Number(b.shotValid) - Number(a.shotValid);
      if (validDelta !== 0) return validDelta;
      const qualityDelta = b.solutionRating - a.solutionRating;
      if (Math.abs(qualityDelta) > 0.001) return qualityDelta;
      return a.interceptTime - b.interceptTime || a.range - b.range;
    })[0] || null;
}

function getPreferredTorpedoContact() {
  if (state.torpedoSequence.selectedTargetId) {
    return state.contacts.find(
      (contact) => contact.id === state.torpedoSequence.selectedTargetId && !contact.destroyed
    ) || null;
  }
  if (state.periscopeControl.focusContactId) {
    return state.contacts.find(
      (contact) => contact.id === state.periscopeControl.focusContactId && !contact.destroyed
    ) || null;
  }
  return getBestKnownTorpedoSolution()?.contact || null;
}

function buildSonarContacts() {
  const sub = state.submarine;
  const jam = acousticJammingFactor();
  state.sonarContacts = state.contacts
    .filter((contact) => !contact.destroyed)
    .map((contact) => {
      const range = distance(sub, contact);
      const relBearing = normalizeAngle(bearing(sub, contact) - sub.heading);
      const baseStrength = clamp(
        1 - range / 3200 + contact.speed / 12 - sub.depth / 500 + (state.silentRunning ? 0.08 : 0),
        0,
        1
      );
      const strength = clamp(baseStrength - jam * 0.55, 0, 1);
      const audible = strength > 0.035 + jam * 0.12 || contact.pinged > 0;
      contact.sonarDetected = audible;
      return { contact, relBearing, strength, audible, range };
    })
    .filter((entry) => entry.audible)
    .sort((a, b) => b.strength - a.strength);
}

function getOrCreateObserved(contactId) {
  let observed = state.observedContacts.get(contactId);
  if (!observed) {
    observed = {
      id: contactId,
      identified: false,
      suspectedType: null,
      identifyConfidence: 0,
      bearingLog: [],
      lastRange: null,
      rangeBand: null,
      estimatedSpeed: null,
      estimatedHeading: null,
      intelStage: 1,
      plotEstimate: null,
      lastSeenTime: state.time
    };
    state.observedContacts.set(contactId, observed);
  }
  return observed;
}

function sonarRangeBandLabel(range) {
  if (range < 900) return "近距離 1km未満";
  if (range < 1600) return "中距離 1-1.5km";
  if (range < 2400) return "遠距離 1.5-2.5km";
  return "遠方 2.5km超";
}

function updateObservedSonarIntel(observed, contact, sonarEntry) {
  const logs = observed.bearingLog || [];
  const samples = logs.length;
  const range = distance(state.submarine, contact);
  observed.intelStage = samples >= 8 ? 4 : samples >= 5 ? 3 : samples >= 3 ? 2 : 1;

  if (observed.intelStage >= 2) {
    observed.rangeBand = sonarRangeBandLabel(range);
    observed.lastRange = Math.round(range / 50) * 50;
  } else {
    observed.rangeBand = null;
  }

  if (observed.intelStage >= 3 && logs.length >= 2) {
    const first = logs[0];
    const last = logs[logs.length - 1];
    const dt = Math.max(1, last.time - first.time);
    const dist = Math.hypot(last.contactX - first.contactX, last.contactY - first.contactY);
    const speedKt = dist / dt / WORLD_METERS_PER_SECOND_PER_KNOT;
    const uncertainty = clamp((1 - (sonarEntry?.strength || 0.3)) * 1.8, 0.2, 1.8);
    observed.estimatedSpeed = Math.max(1, +(Math.round((speedKt + uncertainty) * 2) / 2).toFixed(1));
  } else {
    observed.estimatedSpeed = null;
  }

  if (observed.intelStage >= 4 && logs.length >= 2) {
    const first = logs[0];
    const last = logs[logs.length - 1];
    const heading = bearing(
      { x: first.contactX, y: first.contactY },
      { x: last.contactX, y: last.contactY }
    );
    observed.estimatedHeading = ((Math.round(heading / 10) * 10) % 360 + 360) % 360;
  } else {
    observed.estimatedHeading = null;
  }
}

function sonarIntelSummary(contact) {
  const observed = state.observedContacts.get(contact.id);
  if (!observed) {
    return {
      stage: 0,
      brief: "方位のみ",
      detail: "方位のみ。追尾継続が必要。"
    };
  }

  const parts = [`方位 ${Math.round(normalizeAngle(bearing(state.submarine, contact) - state.submarine.heading))}°`];
  if (observed.rangeBand) parts.push(observed.rangeBand);
  if (observed.estimatedSpeed !== null) parts.push(`速力推定 ${observed.estimatedSpeed.toFixed(1)}kt`);
  if (observed.estimatedHeading !== null) parts.push(`針路推定 ${formatHeading(observed.estimatedHeading)}`);

  return {
    stage: observed.intelStage || 1,
    brief:
      observed.intelStage >= 4
        ? "針路推定"
        : observed.intelStage === 3
          ? "速力推定"
          : observed.intelStage === 2
            ? "距離幅推定"
            : "方位捕捉",
    detail: parts.join(" / ")
  };
}

function sonarStageGaugeMarkup(stage) {
  const labels = ["方位", "距離", "速力", "針路"];
  return `<div class="sonar-stage">${labels
    .map(
      (label, index) =>
        `<span class="sonar-stage-step ${stage >= index + 1 ? "active" : ""}">${label}</span>`
    )
    .join("")}</div>`;
}

function sonarRelativeBearingLabel(relBearing) {
  const normalized = normalizeAngle(relBearing);
  if (normalized <= 20 || normalized >= 340) return "前方";
  if (normalized < 90) return "右舷前方";
  if (normalized <= 160) return "右舷";
  if (normalized < 200) return "後方";
  if (normalized <= 270) return "左舷";
  return "左舷前方";
}

function buildSonarAdvisorReport() {
  const lead = state.sonarContacts[0];
  if (!lead) {
    return {
      brief: "受動聴音継続",
      detail: "報告: 有意な接触なし。広域聴音を継続し、方位変化を待つ。",
      captainNote: "ソナー員報告: 接触なし。静粛を維持しつつ広域聴音を継続。",
      intent: "受動聴音を継続し、最初の接触方位を待つ。",
      hint: "ソナー接触待ち。現段階では進路を大きく変えず監視。"
    };
  }

  const contact = lead.contact;
  const observed = state.observedContacts.get(contact.id);
  const intel = sonarIntelSummary(contact);
  const bearingLabel = sonarRelativeBearingLabel(lead.relBearing);
  const typeName = observed?.suspectedType ? contactLabel({ type: observed.suspectedType }) : null;
  const typeConfidence = observed?.identifyConfidence != null
    ? getSonarTypeConfidenceLabel(observed.identifyConfidence)
    : null;

  let brief = `${bearingLabel} ${intel.brief}`;
  let detail = `報告: ${bearingLabel}に ${playerSonarLabel(contact)}。${intel.detail} / 強度 ${Math.round(
    lead.strength * 100
  )}%。`;
  let captainNote = `ソナー員報告: ${bearingLabel}に接触。${intel.detail}。`;
  let intent = "方位変化を追い、距離帯の確定を優先。";
  let hint = "まず接触維持。方位変化と強度推移を追って観測段階を上げる。";

  if (typeName) {
    detail += ` 艦種推定 ${typeName} / 信頼 ${typeConfidence}。`;
    captainNote += ` 艦種は ${typeName} 推定。`;
  }

  if ((observed?.intelStage || 1) >= 2) {
    intent = "距離幅は見え始めた。接触維持で速力推定へ進む。";
    hint = "まだ断定しない。距離帯を維持したまま追尾。";
  }
  if ((observed?.intelStage || 1) >= 3) {
    brief = `${bearingLabel} 速力推定`;
    intent = "速力推定が出た。前方回り込みの基準として艦長へ上申。";
    hint = "速力推定を使って航海長の回り込みコースを確認。";
  }
  if ((observed?.intelStage || 1) >= 4) {
    brief = `${bearingLabel} 針路推定`;
    intent = "針路推定が成立。射点形成に必要な接敵情報が揃いつつある。";
    hint = "針路推定を維持しつつ潜望鏡観測へ移る位置を作る。";
  }
  if (contact.hostile && lead.strength > 0.72) {
    captainNote += " 護衛急接近の恐れ。";
    intent = "護衛接近の恐れあり。静粛または回避優先。";
    hint = "護衛接近。深度変更か静粛航行で被探知を抑える。";
  }

  return { brief, detail, captainNote, intent, hint };
}

function navigationInterceptAdvice() {
  const focusContact = state.contactTactical.focusContactId
    ? state.contacts.find((contact) => contact.id === state.contactTactical.focusContactId && !contact.destroyed) || null
    : null;
  if (!focusContact) {
    return {
      heading: null,
      speed: null,
      waypoint: null,
      note: "有効な接触がなく、進路提案不可。"
    };
  }

  const sub = state.submarine;
  const observed = state.observedContacts.get(focusContact.id);
  const estimatedTargetHeading = observed?.estimatedHeading ?? ((Math.round(focusContact.heading / 10) * 10) % 360 + 360) % 360;
  const estimatedTargetSpeed = observed?.estimatedSpeed ?? Math.max(2, Math.round(focusContact.speed * 2) / 2);
  const rangeToTarget = observed?.lastRange ?? distance(sub, focusContact);
  const interceptOffset =
    state.commandIntent === "evade"
      ? 150
      : state.commandIntent === "periscope"
        ? 35
        : 55;
  const projectedSeconds = clamp(rangeToTarget / Math.max(1.2, estimatedTargetSpeed * WORLD_METERS_PER_SECOND_PER_KNOT) * 0.55, 120, 420);
  const targetProjected = {
    x: clamp(
      focusContact.x + Math.cos(toRadians(estimatedTargetHeading)) * knotsToWorldSpeed(estimatedTargetSpeed) * projectedSeconds,
      0,
      WORLD.width
    ),
    y: clamp(
      focusContact.y + Math.sin(toRadians(estimatedTargetHeading)) * knotsToWorldSpeed(estimatedTargetSpeed) * projectedSeconds,
      0,
      WORLD.height
    )
  };
  const waypointRadius =
    state.commandIntent === "evade"
      ? clamp(rangeToTarget * 0.18, 260, 540)
      : state.commandIntent === "periscope"
        ? clamp(rangeToTarget * 0.2, 280, 620)
        : clamp(rangeToTarget * 0.24, 340, 760);
  const waypointBearing = normalizeAngle(estimatedTargetHeading - interceptOffset);
  const waypoint = {
    x: clamp(
      targetProjected.x + Math.cos(toRadians(waypointBearing)) * waypointRadius,
      0,
      WORLD.width
    ),
    y: clamp(
      targetProjected.y + Math.sin(toRadians(waypointBearing)) * waypointRadius,
      0,
      WORLD.height
    )
  };
  const recommendedHeading = bearing(sub, waypoint);
  const recommendedSpeed =
    state.commandIntent === "evade"
      ? 3
      : state.contactTactical.precision < 0.4
        ? 2
        : state.contactTactical.positioning < 0.55
          ? 4
          : 3;

  return {
    heading: recommendedHeading,
    speed: recommendedSpeed,
    waypoint,
    note: `航海長具申: 針路 ${formatHeading(recommendedHeading)}、速力 ${recommendedSpeed.toFixed(1)}kt で進出。敵推定 針路 ${formatHeading(
      estimatedTargetHeading
    )} / 速力 ${estimatedTargetSpeed.toFixed(1)}kt。目標進出点 ${Math.round(waypointRadius)}m 先。`
  };
}

function buildNavigationAdvisor() {
  const advice = navigationInterceptAdvice();
  const tactical = state.contactTactical;
  const sub = state.submarine;
  const recommendedDepth =
    state.commandIntent === "periscope"
      ? 15
      : state.commandIntent === "evade" || tactical.precision < 0.35
        ? 140
        : 60;

  if (advice.heading === null) {
    return {
      brief: "進路提案待機",
      detail: "報告: 有効な接触がなく、進路提案不可。現針路を維持。",
      captainNote: "航海長具申: まだ接敵情報不足。現針路維持。",
      intent: "接敵情報が固まるまで針路を保持。",
      hint: "先にソナー接触を育てる。航海長の回り込み提案はその後。",
      heading: null,
      speed: null,
      depth: recommendedDepth,
      waypoint: null,
      status: "待機"
    };
  }

  let status = "接敵整理";
  let intent = "前方へ回り込み、射点形成を優先。";
  let hint = "航海長提案の針路に合わせ、接近効率を上げる。";

  if (state.commandIntent === "evade" || state.battlePhase === BATTLE_PHASES.egress) {
    status = "離脱優先";
    intent = "護衛との離隔を広げ、離脱針路を優先。";
    hint = "速力を抑えつつ深度を取り、離脱海域へ向けて針路維持。";
  } else if (state.commandIntent === "periscope" || tactical.firingLane >= 0.66) {
    status = "射点形成中";
    intent = "観測位置を保ち、潜望鏡安定を優先。";
    hint = "射点形成中。潜望鏡深度と低速維持で解を固める。";
  } else if (tactical.positioning < 0.45) {
    status = "回り込み不足";
    intent = "まだ前方位置が浅い。さらに回り込みを継続。";
    hint = "敵進路前方へもう一段回り込む。";
  } else if (tactical.precision >= 0.58 && tactical.positioning >= 0.58) {
    status = "先手維持";
    intent = "有利位置を維持し、観測へ移る余地あり。";
    hint = "いまは先手維持。無理に速度を上げず位置を保つ。";
  }

  return {
    brief: `${status} ${formatHeading(advice.heading)}`,
    detail: `報告: ${status}。推奨 針路 ${formatHeading(advice.heading)} / 速力 ${advice.speed.toFixed(
      1
    )}kt / 深度 ${recommendedDepth}m。${advice.note}`,
    captainNote: `航海長具申: ${status}。針路 ${formatHeading(advice.heading)}、速力 ${advice.speed.toFixed(
      1
    )}kt、深度 ${recommendedDepth}m。`,
    intent,
    hint,
    heading: advice.heading,
    speed: advice.speed,
    depth: recommendedDepth,
    waypoint: advice.waypoint,
    status
  };
}

function updateObservedContacts(deltaTime) {
  const OBSERVATION_INTERVAL = 3;
  const BEARING_LOG_LIMIT = 12;

  state.observedSampleTimer -= deltaTime;
  if (state.observedSampleTimer > 0) return;
  state.observedSampleTimer = OBSERVATION_INTERVAL;

  const sub = state.submarine;

  for (const entry of state.sonarContacts) {
    if (!entry.audible) continue;
    const contact = entry.contact;
    if (contact.destroyed) continue;

    const observed = getOrCreateObserved(contact.id);
    observed.bearingLog.push({
      time: state.time,
      bearing: bearing(sub, contact),
      subX: sub.x,
      subY: sub.y,
      contactX: contact.x,
      contactY: contact.y,
      visual: contact.visualDetected
    });
    if (observed.bearingLog.length > BEARING_LOG_LIMIT) {
      observed.bearingLog.shift();
    }

    if (!contact.visualDetected) {
      const estimate = estimateSonarContactType(contact, entry.strength, observed);
      observed.suspectedType = estimate.type;
      observed.identifyConfidence = estimate.confidence;
      observed.identified = estimate.confidence >= 0.78;
    }
    updateObservedSonarIntel(observed, contact, entry);
    observed.lastSeenTime = state.time;
  }
}

function contactTacticalLabel(value) {
  if (value >= 0.82) return "良";
  if (value >= 0.58) return "可";
  if (value >= 0.34) return "不安定";
  return "低";
}

function updateContactTacticalState() {
  const sub = state.submarine;
  const bestShot = getBestKnownTorpedoSolution();
  const primarySonar = state.sonarContacts[0] || null;
  const focusContact = bestShot?.contact || primarySonar?.contact || null;

  if (!focusContact || focusContact.destroyed) {
    state.contactTactical = {
      focusContactId: null,
      precision: 0,
      positioning: 0,
      firingLane: 0,
      shadowAdvantage: 0,
      note: "接触なし。",
      relativeTargetBearing: null,
      estimatedRange: null
    };
    return;
  }

  const observed = state.observedContacts.get(focusContact.id);
  const bearingSamples = observed?.bearingLog?.length || 0;
  const recentVisual = focusContact.visualDetected ? 0.2 : 0;
  const identifyBonus = Math.min(0.18, (observed?.identifyConfidence || 0) * 0.18);
  const sampleScore = clamp(bearingSamples / 6, 0, 1) * 0.52;
  const strengthScore = (primarySonar?.contact.id === focusContact.id ? primarySonar.strength : 0.18) * 0.24;
  const silentBonus = state.silentRunning ? 0.08 : 0;
  const precision = clamp(sampleScore + strengthScore + identifyBonus + recentVisual + silentBonus, 0, 1);

  const estimatedRange = observed?.lastRange || bestShot?.range || primarySonar?.range || distance(sub, focusContact);
  const relativeTargetBearing = Math.abs(normalizeAngle(bearing(focusContact, sub) - focusContact.heading));
  const aheadScore = 1 - clamp(relativeTargetBearing / 180, 0, 1);
  const beamPenalty = clamp(Math.abs(relativeTargetBearing - 90) / 90, 0, 1);
  const rangeScore = 1 - clamp(Math.abs(estimatedRange - 1400) / 1800, 0, 1);
  const depthScore =
    state.commandIntent === "evade"
      ? clamp(sub.depth / 180, 0, 1)
      : 1 - clamp(Math.abs(sub.depth - 60) / 120, 0, 1);
  const intentBonus =
    state.commandIntent === "approach"
      ? 0.08
      : state.commandIntent === "periscope"
        ? 0.05
        : state.commandIntent === "evade"
          ? -0.05
          : 0;
  const positioning = clamp(
    aheadScore * 0.46 + rangeScore * 0.24 + depthScore * 0.14 + (1 - beamPenalty) * 0.1 + intentBonus,
    0,
    1
  );

  const shotWindowBonus = bestShot?.shotValid ? 0.18 : bestShot ? bestShot.solutionRating * 0.12 : 0;
  const laneDepthFactor =
    sub.depth >= UBOAT_CLASS.torpedoDepthMin && sub.depth <= UBOAT_CLASS.torpedoDepthMax ? 1 : 0.56;
  const firingLane = clamp(
    precision * 0.42 + positioning * 0.36 + state.navigationTactical.solutionRating * 0.16 + shotWindowBonus,
    0,
    1
  ) * laneDepthFactor;
  const shadowAdvantage = clamp(precision * 0.45 + positioning * 0.55, 0, 1);

  let note = `接触精度 ${contactTacticalLabel(precision)} / 回り込み ${contactTacticalLabel(positioning)} / 射点形成 ${contactTacticalLabel(firingLane)}。`;
  if (precision < 0.36) {
    note += " 聴音ログが薄い。方位維持を優先。";
  } else if (positioning < 0.42) {
    note += " まだ敵前方へ出切れていない。並航追尾から前方進出へ。";
  } else if (firingLane < 0.58) {
    note += " 射点は未完成。静かに前方交差角を作る。";
  } else {
    note += " 有利位置。潜望鏡確認または雷撃準備へ移れる。";
  }

  state.contactTactical = {
    focusContactId: focusContact.id,
    precision,
    positioning,
    firingLane,
    shadowAdvantage,
    note,
    relativeTargetBearing,
    estimatedRange
  };
}

function updateVisualContacts() {
  const sub = state.submarine;
  const nav = state.navigationTactical;
  const light = lightConditionMeta();
  const stage = currentStage();
  const opticsBearing = state.viewMode === "periscope" ? currentPeriscopeBearing() : sub.heading;
  const visualTrainingBonus = stage.id === "training_shot" ? 420 : 0;
  const binocularRangeLimit = 3200 * light.visibilityFactor + visualTrainingBonus;
  const periscopeStableRange = 2400 * light.visibilityFactor + visualTrainingBonus;
  const periscopeUnstableRange = 2200 * light.visibilityFactor + visualTrainingBonus;

  for (const contact of state.contacts) {
    if (contact.destroyed) {
      contact.visualDetected = false;
      continue;
    }

    const range = distance(sub, contact);
    const relBearing = Math.abs(normalizeAngle(bearing(sub, contact) - opticsBearing));
    let visible = false;

    if (state.viewMode === "binocular" && sub.depth < 5) {
      visible = range < binocularRangeLimit && relBearing < 55;
    } else if (state.viewMode === "periscope" && sub.depth < 18) {
      visible =
        range < (nav.periscopeStable ? periscopeStableRange : periscopeUnstableRange) &&
        relBearing < (nav.periscopeStable ? 38 : 32);
    }

    contact.visualDetected = visible;
  }
}

function updateNavigationTacticalState() {
  const sub = state.submarine;
  const headingError = Math.abs(normalizeAngle(sub.targetHeading - sub.heading));
  const depthError = Math.abs(sub.targetDepth - sub.depth);
  const speedError = Math.abs(sub.targetSpeed - sub.speed);
  const periscopeStable =
    state.viewMode === "periscope" &&
    sub.targetDepth <= 14 &&
    sub.depth >= 11 &&
    sub.depth <= 15 &&
    headingError < 4 &&
    sub.speed <= 4.2;

  const lowSpeedFactor = 1 - clamp(sub.speed / 9, 0, 1);
  const headingFactor = 1 - clamp(headingError / 30, 0, 1);
  const depthFactor = 1 - clamp(depthError / 60, 0, 1);
  const stealthBonus = clamp(lowSpeedFactor * 0.08 + headingFactor * 0.04 + depthFactor * 0.04, 0, 0.14);
  const approachRating = clamp(0.25 + headingFactor * 0.35 + depthFactor * 0.2 + lowSpeedFactor * 0.2, 0, 1);
  const solutionRating = clamp(
    0.2 +
      headingFactor * 0.3 +
      depthFactor * 0.2 +
      (periscopeStable ? 0.2 : 0) +
      (sub.speed <= 4.2 ? 0.1 : 0),
    0,
    1
  );

  state.navigationTactical = {
    headingError,
    depthError,
    speedError,
    stealthBonus,
    approachRating,
    solutionRating,
    periscopeStable
  };
}

function detectionSourceLabel(contact) {
  if (contact.visualDetected) {
    return state.viewMode === "binocular" ? "浮上視認" : "潜望鏡視認";
  }
  if (contact.pinged > 0 && state.pingCooldown > 9) {
    return "能動ソナー";
  }
  if (contact.sonarDetected) {
    return "受動聴音";
  }
  return null;
}

function updateDetectionState() {
  for (const contact of state.contacts) {
    if (contact.destroyed) {
      contact.detected = false;
      contact.detectionSource = null;
      continue;
    }

    const source = detectionSourceLabel(contact);
    contact.detected = Boolean(source);
    contact.detectionSource = source;
    if (source) {
      contact.everDetected = true;
    }
  }
}

function updateContactEvents() {
  for (const contact of state.contacts) {
    if (contact.destroyed) continue;

    if (contact.detectionSource && !contact.lastDetectionSource) {
      const contactText =
        contact.detectionSource === "受動聴音" || contact.detectionSource === "能動ソナー"
          ? playerSonarLabel(contact)
          : playerContactLabel(contact);
      addLog(`${contact.detectionSource}で${contactText}を捕捉。`);
      setStatus(`${contact.detectionSource}で ${contactText} を発見。`, "warning");
      emitGermanRepeater(contactVoiceTrigger(contact));
    } else if (
      contact.detectionSource &&
      contact.lastDetectionSource &&
      contact.detectionSource !== contact.lastDetectionSource
    ) {
      const contactText =
        contact.detectionSource === "受動聴音" || contact.detectionSource === "能動ソナー"
          ? playerSonarLabel(contact)
          : playerContactLabel(contact);
      addLog(
        `${contactText} の追跡手段が ${contact.lastDetectionSource} から ${contact.detectionSource} へ移行。`
      );
      emitGermanRepeater(contactVoiceTrigger(contact));
    } else if (!contact.detectionSource && contact.lastDetectionSource) {
      addLog(`${playerSonarLabel(contact)} を見失う。${contact.lastDetectionSource}接触喪失。`);
      const observed = state.observedContacts.get(contact.id);
      if (observed) {
        observed.intelStage = Math.min(observed.intelStage || 1, 2);
        observed.estimatedHeading = null;
      }
      emitGermanRepeater("sonarContactLost");
    } else if (contact.detectionSource === "受動聴音") {
      const sonarEntry = state.sonarContacts.find((entry) => entry.contact.id === contact.id);
      if (sonarEntry && sonarEntry.strength > 0.55) {
        const lastAt = state.voiceRuntime.strongerContactAtById.get(contact.id) ?? -Infinity;
        if (state.time - lastAt > 10) {
          state.voiceRuntime.strongerContactAtById.set(contact.id, state.time);
          emitGermanRepeater("sonarContactStronger");
        }
      }
    }

    contact.lastDetectionSource = contact.detectionSource;
  }
}

function updateButtons() {
  const setButtonState = (button, className, enabled) => {
    if (button) {
      button.classList.toggle(className, enabled);
    }
  };
  const binocularBlockedForAttack =
    state.viewMode === "binocular" && state.binocularAttackState === "blocked";

  for (const button of speedButtons) {
    button.classList.toggle(
      "active",
      Number(button.dataset.speed) === state.submarine.targetSpeed
    );
  }

  for (const button of depthButtons) {
    button.classList.toggle(
      "active",
      Number(button.dataset.depth) === state.submarine.targetDepth
    );
  }

  for (const button of stationTabs) {
    button.classList.toggle("active", button.dataset.station === state.station);
  }

  for (const panel of stationPanels) {
    panel.classList.toggle("active", panel.dataset.panel === state.station);
  }

  centerColumnNode?.classList.toggle("torpedo-layout", state.station === "torpedo");
  if (tdcCardNode) {
    tdcCardNode.style.display = state.station === "torpedo" ? "" : "none";
  }

  for (const button of [silentButton, captainSilentButton]) {
    setButtonState(button, "active", state.silentRunning);
  }

  for (const button of [pingButton, captainPingButton]) {
    setButtonState(button, "dim", state.pingCooldown > 0);
  }

  for (const button of timeScaleButtons) {
    button.classList.toggle("active", Number(button.dataset.timescale) === state.timeScale);
  }

  setButtonState(captainPeriscopeButton, "active", state.viewMode === "periscope");
  setButtonState(captainBinocularButton, "active", state.viewMode === "binocular");
  setButtonState(captainBinocularButton, "dim", state.binocularAttackState === "blocked");
  setButtonState(captainAlarmButton, "active", state.alarmDive.active);
  const seqStage = state.torpedoSequence.stage;
  const torpedoSelectActive = seqStage === TORPEDO_SEQUENCE.idle;
  const torpedoSelectCompleted = seqStage !== TORPEDO_SEQUENCE.idle;
  const torpedoInputActive = seqStage === TORPEDO_SEQUENCE.targetSelected;
  const torpedoInputCompleted =
    seqStage === TORPEDO_SEQUENCE.dataEntered ||
    seqStage === TORPEDO_SEQUENCE.preparing ||
    seqStage === TORPEDO_SEQUENCE.tubeReady ||
    seqStage === TORPEDO_SEQUENCE.fired ||
    seqStage === TORPEDO_SEQUENCE.assessing;
  const torpedoPrepareActive =
    seqStage === TORPEDO_SEQUENCE.dataEntered || seqStage === TORPEDO_SEQUENCE.preparing;
  const torpedoPrepareCompleted =
    seqStage === TORPEDO_SEQUENCE.tubeReady ||
    seqStage === TORPEDO_SEQUENCE.fired ||
    seqStage === TORPEDO_SEQUENCE.assessing;
  const torpedoFireActive = seqStage === TORPEDO_SEQUENCE.tubeReady;
  const torpedoFireCompleted =
    seqStage === TORPEDO_SEQUENCE.fired || seqStage === TORPEDO_SEQUENCE.assessing;

  setButtonState(torpedoSelectButton, "active", torpedoSelectActive);
  setButtonState(torpedoSelectButton, "completed", torpedoSelectCompleted);
  setButtonState(torpedoInputButton, "active", torpedoInputActive);
  setButtonState(torpedoInputButton, "completed", torpedoInputCompleted);
  setButtonState(torpedoPrepareButton, "active", torpedoPrepareActive);
  setButtonState(torpedoPrepareButton, "completed", torpedoPrepareCompleted);
  setButtonState(fireButton, "active", torpedoFireActive);
  setButtonState(fireButton, "completed", torpedoFireCompleted);
  setButtonState(torpedoPrepareButton, "dim", binocularBlockedForAttack);
  setButtonState(fireButton, "dim", binocularBlockedForAttack);
  setButtonState(captainFireButton, "dim", binocularBlockedForAttack);
  setButtonState(audioToggleButton, "active", audioState.enabled);
  if (audioToggleButton) {
    audioToggleButton.textContent = audioState.enabled ? "音響停止" : "音響開始";
  }
  if (voiceToggleButton) {
    voiceToggleButton.textContent = audioState.voiceEnabled ? "ON" : "OFF";
    setButtonState(voiceToggleButton, "active", audioState.voiceEnabled);
    setButtonState(voiceToggleButton, "dim", !audioState.voiceEnabled);
  }
  if (voiceModeToggleButton) {
    voiceModeToggleButton.textContent =
      audioState.voiceSourceMode === "tts" ? "復唱: TTS" : "復唱: 録音";
    setButtonState(voiceModeToggleButton, "active", audioState.voiceSourceMode === "tts");
    setButtonState(voiceModeToggleButton, "dim", !audioState.voiceEnabled);
  }
  if (voiceStatusNode) {
    voiceStatusNode.textContent = audioState.voiceEnabled
      ? describeVoiceRuntime()
      : "独語復唱は停止中。ヘッダーの ON/OFF で再開。";
  }
  const zoomLabel = opticsZoomLabel();
  setButtonState(opticsZoomWideButton, "active", zoomLabel === "広角");
  setButtonState(opticsZoomStandardButton, "active", zoomLabel === "標準");
  setButtonState(opticsZoomZoomButton, "active", zoomLabel === "高倍率");
  if (captainBinocularButton) {
    captainBinocularButton.textContent =
      state.binocularAttackState === "allowed"
        ? "浮上双眼鏡"
        : state.binocularAttackState === "risky"
          ? "浮上双眼鏡 / 危険"
          : "浮上双眼鏡 / 禁止";
    captainBinocularButton.title = state.binocularAttackReason;
  }
  if (surfaceAttackCardNode) {
    surfaceAttackCardNode.style.display =
      state.station === "captain" && state.postAttackDecision.active ? "" : "none";
  }
  if (surfaceAttackSummaryNode) {
    surfaceAttackSummaryNode.textContent = state.postAttackDecision.active
      ? `危険発射後の判断待ち。残り ${state.postAttackDecision.timer.toFixed(1)} 秒。`
      : "危険な浮上発射後の判断待ち。";
  }
  if (restartButton) {
    restartButton.textContent = state.stageState.cleared
      ? state.stageIndex < STAGES.length - 1
        ? "次ステージ"
        : "最初から"
      : state.stageState.failed
        ? "再挑戦"
        : "新任務";
  }
  if (campaignResupplyButton) {
    campaignResupplyButton.textContent = state.campaign.readyForResupply
      ? "帰投補給を実施"
      : "帰投補給";
    setButtonState(campaignResupplyButton, "active", state.campaign.readyForResupply);
    setButtonState(
      campaignResupplyButton,
      "dim",
      !state.campaign.readyForResupply && state.running
    );
    campaignResupplyButton.title =
      state.campaign.readyForResupply
        ? "持越ダメージと残弾を補給・修理して再出撃準備を行う。"
        : `${campaignStatusTone()}。任務結果確定後に補給を実施できます。`;
  }
  if (campaignDecisionCardNode) {
    campaignDecisionCardNode.style.display = state.stageState.cleared ? "" : "none";
  }
  if (campaignDecisionSummaryNode) {
    const nextStage = STAGES[nextStageIndex()];
    campaignDecisionSummaryNode.textContent = state.stageState.cleared
      ? `任務完了。${nextStage.name} へ 損耗持越しで継続するか、帰投補給してから向かうかを選択。`
      : "任務完了後の行動を選択。";
  }
  if (campaignContinueButton) {
    setButtonState(campaignContinueButton, "active", state.stageState.cleared);
  }
  if (campaignReturnButton) {
    setButtonState(campaignReturnButton, "active", state.stageState.cleared);
  }
  if (campaignSaveButton) {
    setButtonState(campaignSaveButton, "active", true);
    campaignSaveButton.title = "現在の Campaign Status を保存。再開時は現在ステージ冒頭から復元。";
  }
  if (campaignResumeButton) {
    setButtonState(campaignResumeButton, "active", state.saveState.hasSnapshot);
    setButtonState(campaignResumeButton, "dim", !state.saveState.hasSnapshot);
  }
  if (campaignNewButton) {
    setButtonState(campaignNewButton, "active", true);
  }
  syncStageSelect();
}

function handleRestartAction() {
  if (state.stageState.cleared) {
    continuePatrolToNextStage();
    return;
  }
  resetGame();
}

function setStageIndex(nextIndex) {
  const normalized = clamp(Math.round(nextIndex), 0, STAGES.length - 1);
  if (normalized === state.stageIndex && state.running) {
    resetGame();
    return;
  }
  state.stageIndex = normalized;
  resetGame();
}

function getSelectedTorpedoSolution() {
  if (!state.torpedoSequence.selectedTargetId) return null;
  const target = state.contacts.find(
    (contact) => contact.id === state.torpedoSequence.selectedTargetId && !contact.destroyed
  );
  return target ? computeTorpedoSolution(target) : null;
}

function selectedTorpedoFireStatus() {
  const sub = state.submarine;
  const selectedShot = getSelectedTorpedoSolution();
  const selectedTube = findTubeById(state.torpedoSequence.selectedTubeId, sub);

  if (!selectedShot) {
    return {
      ready: false,
      label: "目標未確定",
      detail: "標的選定後、解を再確認する。"
    };
  }

  if (totalTorpedoCount(sub) <= 0) {
    return {
      ready: false,
      label: "魚雷枯渇",
      detail: "装填済み発射管も予備魚雷も尽きた。"
    };
  }

  if (!selectedTube) {
    return {
      ready: false,
      label: "発射管未選定",
      detail: "発射管を割り当てて準備を開始する。"
    };
  }

  if (!state.torpedoSequence.dataEntered) {
    return {
      ready: false,
      label: "諸元未入力",
      detail: "TDC または射撃諸元を入力する。"
    };
  }

  if (!state.torpedoSequence.tubeReady) {
    return {
      ready: false,
      label: "発射管未準備",
      detail: selectedTube.loaded
        ? `発射管 ${selectedTube.label} の注水・均圧・外扉開放の完了を待つ。`
        : `発射管 ${selectedTube.label} は空。再装填と発射準備の完了を待つ。`
    };
  }

  if (sub.depth < UBOAT_CLASS.torpedoDepthMin || sub.depth > UBOAT_CLASS.torpedoDepthMax) {
    return {
      ready: false,
      label: "深度不適",
      detail: `発射深度 ${UBOAT_CLASS.torpedoDepthMin}-${UBOAT_CLASS.torpedoDepthMax}m が必要。`
    };
  }

  if (state.viewMode === "binocular" && state.binocularAttackState === "blocked") {
    return {
      ready: false,
      label: "双眼鏡攻撃禁止",
      detail: state.binocularAttackReason
    };
  }

  if (!selectedShot.shotValid) {
    return {
      ready: false,
      label: "射点未成立",
      detail: "進角または射程が不適。さらに接敵して解を整える。"
    };
  }

  if (state.difficulty === "historical" && !state.tdc.valid) {
    return {
      ready: false,
      label: "TDC未完成",
      detail: "方位・距離・速力・AOB を入力し、TDC を発射可にする。"
    };
  }

  return {
    ready: true,
    label: "発射可能",
    detail: `${contactLabel(selectedShot.contact)} へ発射可能。`
  };
}

function updateTorpedoSequenceStage() {
  const seq = state.torpedoSequence;
  if (seq.stage === TORPEDO_SEQUENCE.fired || seq.stage === TORPEDO_SEQUENCE.assessing) return;

  if (seq.tubeReady) {
    seq.stage = TORPEDO_SEQUENCE.tubeReady;
  } else if (seq.prepStepIndex >= 0 || seq.prepMode) {
    seq.stage = TORPEDO_SEQUENCE.preparing;
  } else if (seq.dataEntered) {
    seq.stage = TORPEDO_SEQUENCE.dataEntered;
  } else if (seq.selectedTargetId) {
    seq.stage = TORPEDO_SEQUENCE.targetSelected;
  } else {
    seq.stage = TORPEDO_SEQUENCE.idle;
  }
}

function selectTorpedoTarget() {
  const focusedId = state.periscopeControl.focusContactId;
  const focusedContact = focusedId
    ? state.contacts.find(
        (contact) => contact.id === focusedId && !contact.destroyed && contact.detected
      ) || null
    : null;
  const focusedShot = focusedContact ? computeTorpedoSolution(focusedContact) : null;
  const bestShot = focusedShot || getBestKnownTorpedoSolution();
  if (!focusedContact && !bestShot) {
    setStatus("標的候補なし。接触を捕捉せよ。", "warning");
    return;
  }

  state.torpedoSequence.selectedTargetId = focusedContact
    ? focusedContact.id
    : bestShot.contact.id;
  const selectedContact = focusedContact || bestShot.contact;
  state.torpedoSequence.selectedTubeId = chooseTubeForContact(selectedContact, false)?.id ?? null;
  state.torpedoSequence.dataEntered = false;
  state.torpedoSequence.tubeReady = false;
  state.torpedoSequence.flooded = false;
  state.torpedoSequence.equalized = false;
  state.torpedoSequence.outerDoorOpen = false;
  state.torpedoSequence.prepMode = null;
  state.torpedoSequence.prepSteps = [];
  state.torpedoSequence.prepStepIndex = -1;
  state.torpedoSequence.prepStepRemaining = 0;
  state.torpedoSequence.postFireRemaining = 0;
  updateTorpedoSequenceStage();
  if (focusedContact) {
    addLog(
      `${contactLabel(focusedContact)} を雷撃目標に選定。潜望鏡焦点目標を固定。${
        focusedShot ? "" : " まだ会敵解は未完成。"
      }`
    );
    setStatus(
      focusedShot
        ? "雷撃目標を選定。焦点目標に対して諸元入力へ進め。"
        : "焦点目標を選定。まだ会敵解がないため接敵を続けよ。",
      focusedShot ? "good" : "warning"
    );
    return;
  }

  addLog(`${contactLabel(bestShot.contact)} を雷撃目標に選定。現時点の最有力射点を採用。`);
  setStatus("雷撃目標を選定。諸元入力へ進め。");
}

function enterTorpedoData() {
  const shot = getSelectedTorpedoSolution();
  if (!shot) {
    setStatus("先に標的を選定する必要がある。", "warning");
    return;
  }
  if (state.tdc.bearing === null) {
    setStatus("TDCの方位をソナー同期してください。", "warning");
    return;
  }

  const sameTarget =
    state.torpedoSequence.selectedTargetId &&
    state.torpedoSequence.selectedTargetId === shot.contact.id;
  const previousTubeId = state.torpedoSequence.selectedTubeId;
  const assignedTube = chooseTubeForContact(shot.contact, sameTarget);
  const preserveTubeReady =
    sameTarget &&
    previousTubeId === assignedTube?.id &&
    state.torpedoSequence.tubeReady &&
    state.torpedoSequence.prepStepIndex < 0;
  state.torpedoSequence.selectedTubeId = assignedTube?.id ?? null;

  computeTDCSolution();
  state.tdc.targetId = shot.contact.id;
  state.torpedoSequence.dataEntered = true;
  if (!preserveTubeReady) {
    state.torpedoSequence.tubeReady = false;
    state.torpedoSequence.flooded = false;
    state.torpedoSequence.equalized = false;
    state.torpedoSequence.outerDoorOpen = false;
    state.torpedoSequence.prepMode = null;
    state.torpedoSequence.prepSteps = [];
    state.torpedoSequence.prepStepIndex = -1;
    state.torpedoSequence.prepStepRemaining = 0;
  }
  updateTorpedoSequenceStage();
  emitGermanRepeater("torpedoDataEntered");
  if (state.tdc.valid || shot.shotValid) {
    emitGermanRepeater("torpedoSolutionReady");
    state.voiceRuntime.lastSolutionReadyAt = state.time;
  }
  const gyroStr = state.tdc.gyroAngle !== null ? ` 進角 ${formatSigned(Math.round(state.tdc.gyroAngle))}°` : "";
  addLog(
    `${contactLabel(shot.contact)} の諸元をTDCに確定。${gyroStr}${
      preserveTubeReady ? " 発射準備維持。" : ""
    }`
  );
  setStatus(
    preserveTubeReady
      ? "同一目標への再入力。発射準備を維持したまま諸元を更新。"
      : "諸元入力完了。発射準備へ進め。",
    "good"
  );
}

function prepareTorpedoTube() {
  const shot = getSelectedTorpedoSolution();
  const fireStatus = selectedTorpedoFireStatus();
  const sub = state.submarine;
  if (!shot || !state.torpedoSequence.dataEntered) {
    setStatus("先に標的選定と諸元入力を完了する必要がある。", "warning");
    return;
  }
  if (state.viewMode === "binocular" && state.binocularAttackState === "blocked") {
    setStatus(fireStatus.detail, "warning");
    return;
  }
  if (state.torpedoSequence.tubeReady) {
    setStatus("発射管はすでに準備完了。発射命令を待つ。", "good");
    return;
  }
  if (state.torpedoSequence.stage === TORPEDO_SEQUENCE.preparing) {
    setStatus("発射管処理中。完了まで待機。", "warning");
    return;
  }
  if (totalTorpedoCount(sub) <= 0) {
    setStatus("魚雷が尽きた。発射管準備はできない。", "bad");
    return;
  }

  const seq = state.torpedoSequence;
  const tube = chooseTubeForContact(shot.contact, true);
  if (!tube) {
    setStatus("使用可能な発射管がない。", "bad");
    return;
  }
  seq.selectedTubeId = tube.id;
  emitGermanRepeater("torpedoPrepareOrder");
  emitGermanRepeater("torpedoPrepareAck");
  const surfaced = isSurfaced(sub);
  const prepMode = surfaced ? "surfaced" : "submerged";
  const prepSteps = buildTorpedoPrepSteps(tube, prepMode);
  if (!tube.loaded && (sub.reserveTorpedoes || 0) <= 0) {
    setStatus(`発射管 ${tube.label} は空で、予備魚雷もない。`, "bad");
    return;
  }
  seq.tubeReady = false;
  seq.flooded = surfaced;
  seq.equalized = surfaced;
  seq.outerDoorOpen = false;
  seq.prepMode = prepMode;
  seq.prepSteps = prepSteps;
  seq.prepStepIndex = 0;
  seq.prepStepRemaining = prepSteps[0].duration / (state.crewSkills.engineer || 1);
  updateTorpedoSequenceStage();
  addLog(
    `${contactLabel(shot.contact)} へ発射管 ${tube.label} の準備開始。${
      !tube.loaded ? "再装填後に " : ""
    }${surfaced ? "浮上射法。" : "潜航射法で注水・均圧を実施。"}`
  );
  setStatus("発射管準備を開始。内部処理の完了を待つ。", "warning");
}

function updateTorpedoPreparation(deltaTime) {
  const seq = state.torpedoSequence;

  if (seq.postFireRemaining > 0) {
    seq.postFireRemaining = Math.max(0, seq.postFireRemaining - deltaTime);
    if (seq.postFireRemaining === 0 && seq.stage === TORPEDO_SEQUENCE.assessing) {
      seq.flooded = false;
      seq.equalized = false;
      seq.outerDoorOpen = false;
      seq.prepMode = null;
      seq.prepSteps = [];
      seq.selectedTubeId = null;
      seq.prepStepIndex = -1;
      seq.prepStepRemaining = 0;
    }
  }

  if (seq.tubeReady || seq.prepStepIndex < 0 || !seq.prepMode) return;

  seq.prepStepRemaining = Math.max(0, seq.prepStepRemaining - deltaTime);
  if (seq.prepStepRemaining > 0) return;

  const flow = seq.prepSteps;
  const step = flow[seq.prepStepIndex];
  if (!step) return;
  const tube = findTubeById(seq.selectedTubeId);

  if (step.key === "reload") {
    if (tube && !tube.loaded && (state.submarine.reserveTorpedoes || 0) > 0) {
      tube.loaded = true;
      state.submarine.reserveTorpedoes = Math.max(0, (state.submarine.reserveTorpedoes || 0) - 1);
    }
  } else if (step.key === "flooded") {
    seq.flooded = true;
    state.submarine.detection = clamp(state.submarine.detection + 0.02, 0, 1);
  } else if (step.key === "equalized") {
    seq.equalized = true;
  } else if (step.key === "outerDoorOpen") {
    seq.outerDoorOpen = true;
  }

  seq.prepStepIndex += 1;
  if (seq.prepStepIndex >= flow.length) {
    seq.tubeReady = true;
    seq.prepStepIndex = -1;
    seq.prepStepRemaining = 0;
    updateTorpedoSequenceStage();
    emitGermanRepeater("torpedoReady");
    setStatus("発射準備完了。艦長の発射命令を待つ。", "good");
    return;
  }

  seq.prepStepRemaining = flow[seq.prepStepIndex].duration / (state.crewSkills.engineer || 1);
}

function getContactTriggerMeta() {
  const sub = state.submarine;
  const detectedContact = state.contacts
    .filter((contact) => !contact.destroyed && contact.detected)
    .sort((a, b) => distance(sub, a) - distance(sub, b))[0];
  const strongest = state.sonarContacts[0];

  if (detectedContact?.detectionSource === "浮上視認") {
    return {
      label: "浮上視認",
      detail: `${contactLabel(detectedContact)} を双眼鏡で捕捉。`,
      source: "binocular"
    };
  }

  if (detectedContact?.detectionSource === "潜望鏡視認") {
    return {
      label: "潜望鏡視認",
      detail: `${contactLabel(detectedContact)} を潜望鏡で確認。`,
      source: "periscope"
    };
  }

  if (detectedContact?.detectionSource === "能動ソナー" && strongest) {
    return {
      label: "能動ソナー",
      detail: `${playerSonarLabel(strongest.contact)} の反応を強く捕捉。`,
      source: "active_ping"
    };
  }

  if (detectedContact?.detectionSource === "受動聴音" && strongest) {
    return {
      label: "受動聴音",
      detail: `${playerSonarLabel(strongest.contact)} 方位 ${Math.round(
        strongest.relBearing
      )} 度を聴知。`,
      source: "passive_sonar"
    };
  }

  return {
    label: "接触なし",
    detail: "見張り・受動聴音とも静穏。",
    source: "passive_scan"
  };
}

function phaseObjectiveMeta(phase, bestShot) {
  switch (phase) {
    case BATTLE_PHASES.alarmDive:
      return {
        label: "30秒で潜る",
        detail: "ハッチ、機関、注水、潜舵、前部加重を完了して海中へ消える。"
      };
    case BATTLE_PHASES.patrol:
      return {
        label: "索敵継続",
        detail: "コンボイ航跡の再捕捉と低探知維持を優先。"
      };
    case BATTLE_PHASES.contact:
      return {
        label:
          state.tacticalAdvantage === "player"
            ? "先手維持"
            : state.tacticalAdvantage === "enemy"
              ? "被探知回避"
              : "接敵整理",
        detail:
          state.tacticalAdvantage === "player"
            ? "こちらが先に接触。射点構築を急ぐ。"
            : state.tacticalAdvantage === "enemy"
              ? "敵優位の接触。深度変更か静粛で主導権を奪い返す。"
              : "方位、距離、種別を固めて潜航判断へつなぐ。"
      };
    case BATTLE_PHASES.submergedCombat: {
      const loopMeta = submergedLoopMeta(state.submergedLoop);
      return {
        label: loopMeta.label,
        detail: loopMeta.detail
      };
    }
    case BATTLE_PHASES.attack:
      return {
        label: "発射判断",
        detail: bestShot?.shotValid
          ? `${contactLabel(bestShot.contact)} へ射撃解あり。発射可否を決断。`
          : "射撃解の微修正を継続。"
      };
    case BATTLE_PHASES.egress:
      return {
        label: "離脱優先",
        detail: "護衛との距離を広げ、離脱海域へ向かう。"
      };
    case BATTLE_PHASES.disabled:
      return {
        label: "被害確認",
        detail: "任務継続不能。損傷評価が最優先。"
      };
    default:
      return {
        label: "監視継続",
        detail: "状況更新を待つ。"
      };
  }
}

function updateHud() {
  const sub = state.submarine;
  syncCampaignOperationalState();
  const nav = state.navigationTactical;
  const detectedContacts = state.contacts.filter(
    (contact) => !contact.destroyed && contact.detected
  ).length;
  const flagshipAlive = state.contacts.some(
    (contact) => contact.type === "flagship" && !contact.destroyed
  );
  const stationMeta = STATIONS[state.station];
  const bestShot = getBestKnownTorpedoSolution();
  const selectedShot = getSelectedTorpedoSolution();
  const flagship = state.contacts.find(
    (contact) => contact.type === "flagship" && !contact.destroyed
  );
  const phase = phaseMeta(state.battlePhase);
  const trigger = getContactTriggerMeta();
  const objective = phaseObjectiveMeta(state.battlePhase, bestShot);
  const loopMeta = submergedLoopMeta(state.submergedLoop);
  const stage = currentStage();
  const light = lightConditionMeta();
  const tactical = state.contactTactical;
  const alarmCompleted = alarmTaskCount();
  const selectedFire = selectedTorpedoFireStatus();
  const activeTube = findTubeById(state.torpedoSequence.selectedTubeId, sub);
  const nextImpactTorpedo = [...state.torpedoesInWater]
    .filter((torpedo) => (torpedo.interceptCountdown ?? 0) > 0)
    .sort((a, b) => (a.interceptCountdown ?? Infinity) - (b.interceptCountdown ?? Infinity))[0] || null;
  const activeChasers = state.contacts.filter(
    (contact) => contact.hostile && !contact.destroyed && (contact.chaseModeTimer || 0) > 0
  ).length;
  const binocularFocus = state.viewMode === "binocular"
    ? getPeriscopeVisuals().find((entry) => entry.id === state.periscopeControl.focusContactId) ?? null
    : null;
  const sonarAdvisor = buildSonarAdvisorReport();
  const navigationAdvisor = buildNavigationAdvisor();
  state.contactAssessment = sonarAdvisor;
  state.navigationAdvice = navigationAdvisor;
  state.advisorHints = [sonarAdvisor.hint, navigationAdvisor.hint].filter(Boolean);
  updateTDCEstimates();
  const tubeStatusText = state.torpedoSequence.tubeReady
    ? `${activeTube ? `管 ${activeTube.label}` : "使用管"} / ${
        state.torpedoSequence.prepMode === "surfaced" ? "外扉開放済み" : "注水・均圧・外扉完了"
      }`
    : (() => {
        const prepFlow = state.torpedoSequence.prepSteps?.length
          ? state.torpedoSequence.prepSteps
          : null;
        const currentStep =
          prepFlow && state.torpedoSequence.prepStepIndex >= 0
            ? prepFlow[state.torpedoSequence.prepStepIndex]
            : null;
        return currentStep
          ? `${activeTube ? `管 ${activeTube.label} / ` : ""}${currentStep.label} ${state.torpedoSequence.prepStepRemaining.toFixed(1)}s`
          : state.torpedoSequence.dataEntered
            ? "準備待機"
            : "待機";
      })();

  state.phaseTrigger = trigger;

  missionNode.textContent = stage.mission;
  stageBannerNode.textContent = stage.banner;
  stageProgressNode.textContent = state.stageState.cleared
    ? `${stage.progress} / クリア`
    : state.stageState.failed
      ? `${stage.progress} / 再挑戦`
      : stage.progress;
  zoneLabelNode.textContent = stage.zone;
  if (lightConditionNode) lightConditionNode.textContent = light.label;
  document.body.dataset.lightCondition = light.key;

  hullNode.textContent = `${Math.round(sub.hull)}%`;
  batteryNode.textContent = `${Math.round(sub.battery)}%`;
  depthNode.textContent = `${Math.round(sub.depth)}m`;
  speedNode.textContent = `${sub.speed.toFixed(1)}kt`;
  noiseNode.textContent = noiseLabel(sub.noise);
  torpedoesNode.textContent = `${loadedTubeCount(sub)}+${sub.reserveTorpedoes || 0}`;
  if (campaignTonnageNode) {
    campaignTonnageNode.textContent = `${state.campaign.tonnageSunk.toLocaleString("ja-JP")}t / ${state.campaign.shipsSunk}隻`;
  }
  if (campaignHullNode) {
    campaignHullNode.textContent = `${Math.round(state.campaign.hull)}%`;
  }
  if (campaignBatteryNode) {
    campaignBatteryNode.textContent = `${Math.round(state.campaign.battery)}%`;
  }
  if (campaignReserveNode) {
    campaignReserveNode.textContent = `${state.campaign.reserveTorpedoes || 0}本`;
  }
  if (campaignResupplyNode) {
    campaignResupplyNode.textContent = `${state.campaign.resupplyCount}回`;
  }
  if (campaignWolfpackNode) {
    campaignWolfpackNode.textContent = state.wolfpack.currentReport;
  }
  if (campaignOutcomeNode) {
    campaignOutcomeNode.textContent = state.campaign.lastOutcome;
  }
  if (campaignNoteNode) {
    campaignNoteNode.textContent = state.campaign.readyForResupply
      ? "任務結果を反映済み。帰投補給で修理・充電・再装填して次哨戒へ移る。"
      : `${state.wolfpack.currentDetail} 現在の持越状態: 船体 ${Math.round(state.campaign.hull)}% / 電池 ${Math.round(
          state.campaign.battery
        )}% / 予備魚雷 ${state.campaign.reserveTorpedoes || 0} 本。保存再開は現在ステージ冒頭から。`;
  }
  alertNode.textContent =
    state.battlePhase === BATTLE_PHASES.alarmDive
      ? "Alarm"
      : state.battlePhase === BATTLE_PHASES.attack
      ? "発射"
      : state.battlePhase === BATTLE_PHASES.submergedCombat
        ? "潜航"
        : state.battlePhase === BATTLE_PHASES.egress
          ? "離脱"
          : state.battlePhase === BATTLE_PHASES.disabled
            ? "不能"
            : sub.detection > 0.74
              ? "探知"
              : sub.detection > 0.34
                ? "警戒"
                : "静穏";
  clockNode.textContent = formatClock(currentMissionClockSeconds());

  stationNameNode.textContent = stationMeta.label;
  stationDescriptionNode.textContent = stationMeta.description;
  phaseNameNode.textContent = phase.name;
  phaseDescriptionNode.textContent = phase.description;
  hudPhaseNode.textContent = phase.name;
  hudPhaseNoteNode.textContent = phase.description;
  hudTriggerNode.textContent = trigger.label;
  hudTriggerNoteNode.textContent = trigger.detail;
  const binocularObjective =
    state.viewMode === "binocular"
      ? {
          label:
            state.binocularAttackState === "allowed"
              ? "双眼鏡攻撃可"
              : state.binocularAttackState === "risky"
                ? "双眼鏡攻撃危険"
                : "双眼鏡攻撃禁止",
          detail: `${state.binocularAttackReason} 露見 ${state.binocularExposureTimer.toFixed(1)}s`
        }
      : objective;
  hudObjectiveNode.textContent = binocularObjective.label;
  hudObjectiveNoteNode.textContent = binocularObjective.detail;
  hudTorpedoStatusNode.textContent = nextImpactTorpedo
    ? `Impact ${nextImpactTorpedo.interceptCountdown.toFixed(1)}s`
    : selectedFire.ready
    ? "Fire Authorized"
    : state.torpedoSequence.tubeReady
    ? "Tube Ready"
    : state.torpedoSequence.stage === TORPEDO_SEQUENCE.preparing
      ? "Tube Cycling"
      : bestShot?.shotValid
        ? "Solution Ready"
        : totalTorpedoCount(sub) <= 0
          ? "Empty"
          : state.alarmDive.active
            ? "Securing"
            : "Armed";
  hudTorpedoNoteNode.textContent = nextImpactTorpedo
    ? `走行中魚雷 ${state.torpedoesInWater.length} 本 / 命中音または失走報告を待機`
    : state.torpedoSequence.stage === TORPEDO_SEQUENCE.preparing
    ? `${state.torpedoSequence.prepMode === "surfaced" ? "浮上射法" : "潜航射法"} / ${
        tubeStatusText
      }`
    : state.torpedoSequence.selectedTargetId
      ? selectedFire.detail
    : bestShot
      ? `${playerContactLabel(bestShot.contact)} 距離 ${Math.round(bestShot.range)}m / 進角 ${formatSigned(
          bestShot.gyroAngle
        )}°`
      : state.alarmDive.active
        ? "急速潜航中。発射管作業停止。"
        : "発射管待機。射撃解なし。";
  const jam = acousticJammingFactor();
  hudAcousticModeNode.textContent = state.pingCooldown > 9
    ? "Active Return"
    : jam > 0.2
      ? "Depth Charge Jam"
      : audioState.enabled
        ? "Passive Live"
        : "Passive";
  hudAcousticNoteNode.textContent =
    state.pingCooldown > 9
      ? "直近のピング反応を解析中。"
      : jam > 0.2
        ? `爆雷反響で受動聴音が撹乱中。あと ${state.acousticJamming.timer.toFixed(1)} 秒ほど精度低下。`
      : audioState.enabled
        ? "ヘッドホンで左右定位を監視。"
        : "受動聴音ログのみ表示。";
  captainOrderNode.textContent = state.command.captainOrder;
  commandPriorityNode.textContent = state.command.priorityLabel;
  commandPriorityNode.dataset.priority = state.command.priorityTone;
  sonarReportBriefNode.textContent = sonarAdvisor.brief;
  torpedoReportBriefNode.textContent = state.command.torpedo;
  navigationReportBriefNode.textContent = navigationAdvisor.brief;

  captainSummaryNode.textContent = state.stageState.cleared
    ? `${stage.name} クリア。${state.stageState.message}`
    : stage.id === "training_shot"
    ? `${detectedContacts > 0 ? `${detectedContacts} 件の接触。` : "単独商船を探索中。"} 速力 ${sub.speed.toFixed(
        1
      )}kt、深度 ${Math.round(sub.depth)}m。${light.label}。潜望鏡観測から雷撃解構築までを確認。`
    : stage.id === "destroyer_escape"
    ? `駆逐艦回避訓練。離脱海域まで ${Math.round(distance(sub, state.escapeZone))}m。探知度 ${Math.round(
        sub.detection * 100
      )}%。${light.label}。機関 ${propulsionModeLabel(sub)}。`
    : flagshipAlive
    ? `探知度 ${Math.round(sub.detection * 100)}%。${
        detectedContacts > 0 ? `${detectedContacts} 件の接触あり。` : "接触はまだ薄い。"
      } 速力 ${sub.speed.toFixed(1)}kt、深度 ${Math.round(sub.depth)}m。${light.label}。接触精度 ${Math.round(
        tactical.precision * 100
      )}% / 回り込み ${Math.round(tactical.positioning * 100)}% / 射点形成 ${Math.round(
        tactical.firingLane * 100
      )}%。視察 ${
        state.viewMode === "periscope"
          ? "潜望鏡"
          : state.viewMode === "binocular"
            ? "浮上双眼鏡"
            : "通常"
      }。戦術優位 ${
        state.tacticalAdvantage === "player"
          ? "自艦優位"
          : state.tacticalAdvantage === "enemy"
            ? "敵優位"
            : "拮抗"
      }。機関 ${
        propulsionModeLabel(sub)
      }。${
        state.alarmDive.active
          ? ` 急速潜航 ${alarmCompleted}/5、残り ${state.alarmDive.timer.toFixed(1)} 秒。`
          : state.binocularRecentRiskyShotTimer > 0
            ? ` 双眼鏡危険発射後 ${state.binocularRecentRiskyShotTimer.toFixed(1)} 秒。即潜航を要する。`
            : activeChasers > 0
              ? ` 護衛 ${activeChasers} 隻が追撃中。`
            : state.viewMode === "binocular"
              ? ` 双眼鏡攻撃 ${state.binocularAttackState} / 露見 ${state.binocularExposureTimer.toFixed(
                  1
                )} 秒。`
            : ""
      } ${sonarAdvisor.captainNote} ${navigationAdvisor.captainNote}`
    : "重要輸送船は沈黙。駆逐艦との距離を保って離脱海域へ向かう。";
  captainIntentNode.textContent = state.stageState.cleared
    ? state.stageState.message
    : stage.id === "training_shot"
    ? "単独商船へ静かに接近し、潜望鏡観測から雷撃までの手順を確認する。"
    : stage.id === "destroyer_escape"
    ? "護衛接触を切りつつ離脱海域へ向かう。深度変更と静粛を優先。"
    : flagshipAlive
    ? state.binocularRecentRiskyShotTimer > 0
      ? "危険な浮上発射を実施。即潜航し、護衛の探知円から離脱する。"
      : state.viewMode === "binocular"
      ? state.binocularAttackReason
      : `${navigationAdvisor.intent} ${sonarAdvisor.intent}`
    : "敵護衛との間隔を広げつつ離脱海域へ退避する。";
  captainDutyNode.textContent = phase.name;
  captainOpsNode.textContent =
    state.battlePhase === BATTLE_PHASES.alarmDive
      ? "Alarm 発令、潜航タスク完了、戦闘配置"
      : state.battlePhase === BATTLE_PHASES.submergedCombat
      ? "深度、静粛、回避の優先順位を即断する"
      : state.battlePhase === BATTLE_PHASES.attack
        ? "観測、発射許可、回避準備"
      : state.battlePhase === BATTLE_PHASES.egress
          ? "離脱針路の維持と護衛回避"
      : "意図命令、観測、命令優先度の調整";
  captainReportNode.textContent = `${state.command.captainOrder} / 優先度 ${state.command.priorityLabel}`;
  syncCaptainAlarmCard();
  alarmStateNode.textContent = state.alarmDive.active
    ? "急速潜航中"
    : state.alarmDive.resolved === "success"
      ? "成功"
      : state.alarmDive.resolved === "failure"
        ? "失敗"
        : "待機";
  alarmTimerNode.textContent = `${state.alarmDive.timer.toFixed(1)}s`;
  alarmSummaryNode.textContent = state.alarmDive.active
    ? `原因: ${
        state.alarmDive.reason === "captain_order" ? "艦長発令" : "敵優位接触"
      }。潜航深度 ${Math.round(sub.depth)}m。各部署SOPで自動潜航中。`
    : "浮上中に敵航空機や駆逐艦に発見された際、30秒以内に完全潜航を完了させる。";
  alarmProgressNode.textContent = `${alarmCompleted} / 5`;
  alarmOutlookNode.textContent = state.alarmDive.active ? alarmDiveOutlook() : "通常";
  if (alarmSkillSummaryNode) {
    alarmSkillSummaryNode.textContent = alarmSkillSummary();
  }
  alarmTaskListNode.innerHTML = Object.entries(ALARM_TASKS)
    .map(([key, task]) => {
      const timeline = state.alarmDive.taskTimeline[key];
      const flow = ALARM_TASK_FLOW[key];
      const started = timeline.startedAt !== null;
      const completed = state.alarmDive.tasks[key];
      const waiting = !started;
      const remaining =
        started && !completed ? Math.max(0, timeline.duration - (state.time - timeline.startedAt)) : 0;
      const statusLabel = completed
        ? "完了"
        : waiting
          ? "待機"
          : `進行中 ${remaining.toFixed(1)}s`;
      const extra = waiting ? `${task.role}` : `${flow.skill} 練度 x${(state.crewSkills[flow.skill] ?? 1).toFixed(2)}`;
      return `<li class="${completed ? "done" : "critical"}"><span>${task.label}</span><strong>${statusLabel} / ${extra}</strong></li>`;
    })
    .join("");

  if (bestShot) {
    torpedoSolutionNode.textContent = `${playerContactLabel(bestShot.contact)} 距離 ${Math.round(
      bestShot.range
    )}m / 進角 ${formatSigned(bestShot.gyroAngle)}° / AOB ${formatSigned(
      bestShot.aspect
    )}° / 会敵 ${bestShot.interceptTime.toFixed(1)}秒 / 解精度 ${Math.round(
      bestShot.solutionRating * 100
    )}%。${
      bestShot.shotValid ? "解あり、発射可能。" : "まだ解が悪い。"
    }`;
  } else {
    torpedoSolutionNode.textContent = "有効な目標なし。";
  }
  if (
    bestShot &&
    (sub.depth < UBOAT_CLASS.torpedoDepthMin || sub.depth > UBOAT_CLASS.torpedoDepthMax)
  ) {
    torpedoSolutionNode.textContent += ` 発射深度は ${UBOAT_CLASS.torpedoDepthMin}-${UBOAT_CLASS.torpedoDepthMax}m を維持。`;
  }
  torpedoSolutionRatingNode.textContent = bestShot
    ? `${Math.round(bestShot.solutionRating * 100)}%`
    : "--";
  torpedoGyroLimitNode.textContent = bestShot
    ? `${Math.round(bestShot.effectiveGyroLimit)}°`
    : "--";
  torpedoSequenceStageNode.textContent =
    state.torpedoSequence.stage === TORPEDO_SEQUENCE.idle
      ? "標的待ち"
      : state.torpedoSequence.stage === TORPEDO_SEQUENCE.targetSelected
        ? "標的選定"
        : state.torpedoSequence.stage === TORPEDO_SEQUENCE.dataEntered
          ? "諸元入力"
          : state.torpedoSequence.stage === TORPEDO_SEQUENCE.preparing
            ? "発射管処理"
          : state.torpedoSequence.stage === TORPEDO_SEQUENCE.tubeReady
            ? "発射準備"
            : state.torpedoSequence.stage === TORPEDO_SEQUENCE.fired
              ? "発射済み"
              : "命中判定";
  torpedoSelectedTargetNode.textContent = selectedShot
    ? contactLabel(selectedShot.contact)
    : "未選定";
  if (torpedoSelectedTubeNode) {
    torpedoSelectedTubeNode.textContent = state.torpedoSequence.selectedTubeId
      ? `管 ${tubeLabelById(state.torpedoSequence.selectedTubeId)}`
      : state.torpedoSequence.lastFiredTubeId
        ? `前回 管 ${tubeLabelById(state.torpedoSequence.lastFiredTubeId)}`
        : "未選定";
  }
  torpedoInputStatusNode.textContent = state.torpedoSequence.dataEntered ? "完了" : "未入力";
  torpedoPrepareStatusNode.textContent = state.torpedoSequence.tubeReady ? "完了" : "未準備";
  if (torpedoTubeStatusNode) {
    torpedoTubeStatusNode.textContent = tubeStatusText;
  }
  if (torpedoTubeBankNode) {
    torpedoTubeBankNode.textContent = tubeBankSummary();
  }
  if (torpedoReserveCountNode) {
    torpedoReserveCountNode.textContent = `${sub.reserveTorpedoes || 0} 本`;
  }
  if (torpedoPostStatusNode) {
    const nextImpactTorpedo = [...state.torpedoesInWater]
      .filter((torpedo) => (torpedo.interceptCountdown ?? 0) > 0)
      .sort((a, b) => (a.interceptCountdown ?? Infinity) - (b.interceptCountdown ?? Infinity))[0] || null;
    torpedoPostStatusNode.textContent = nextImpactTorpedo
      ? state.torpedoSequence.postFireRemaining > 0
        ? `会敵まで ${nextImpactTorpedo.interceptCountdown.toFixed(1)}s / 排水・再整列 ${state.torpedoSequence.postFireRemaining.toFixed(1)}s`
        : `会敵まで ${nextImpactTorpedo.interceptCountdown.toFixed(1)}s`
      : state.torpedoSequence.postFireRemaining > 0
        ? `排水・再整列 ${state.torpedoSequence.postFireRemaining.toFixed(1)}s`
        : "なし";
  }

  sonarReportDetailNode.textContent = sonarAdvisor.detail;
  sonarDutyNode.textContent =
    state.battlePhase === BATTLE_PHASES.alarmDive
      ? "護衛接近の緊急警報"
      : state.battlePhase === BATTLE_PHASES.patrol
        ? "広域聴音監視"
        : "接触分類と方位更新";
  sonarOpsNode.textContent =
    state.battlePhase === BATTLE_PHASES.alarmDive
      ? "護衛方位の叫報、潜航完了まで接近監視"
      : state.battlePhase === BATTLE_PHASES.submergedCombat
      ? "護衛接近の早期警報、接触喪失防止"
      : "方位分類、距離推定、護衛判別";
  sonarReportNode.textContent =
    state.battlePhase === BATTLE_PHASES.alarmDive
      ? "急速潜航。護衛接近方位を連続報告。"
      : state.battlePhase === BATTLE_PHASES.submergedCombat
      ? `${loopMeta.label}。${loopMeta.sonar} / ${sonarAdvisor.brief}`
      : sonarAdvisor.detail;

  torpedoReportDetailNode.textContent = state.torpedoSequence.selectedTargetId
    ? `報告: ${selectedFire.label}。${selectedFire.detail}`
    : state.viewMode === "binocular" && binocularFocus
      ? `報告: 双眼鏡で ${contactLabel(binocularFocus)} を捕捉。方位 ${Math.round(
          normalizeAngle(bearing(sub, binocularFocus) - sub.heading)
        )}°。標的選定 -> 方位同期 -> 距離同期 -> Speed/AOB採用 -> 諸元入力。`
    : bestShot
      ? `報告: ${playerContactLabel(bestShot.contact)} に対し進角 ${formatSigned(
          bestShot.gyroAngle
        )}°、AOB ${formatSigned(bestShot.aspect)}°、解精度 ${Math.round(
          bestShot.solutionRating * 100
        )}%。${
          bestShot.shotValid ? "雷撃準備可。" : "なお射点修正を要す。"
        }`
      : "報告: 射撃解なし。目標諸元待ち。";
  torpedoDutyNode.textContent =
    state.battlePhase === BATTLE_PHASES.alarmDive
      ? "兵装固定"
      : selectedFire.ready
      ? "発射許可待ち"
      : state.torpedoSequence.stage === TORPEDO_SEQUENCE.tubeReady
      ? "発射許可待ち"
      : bestShot?.shotValid
      ? "発射準備完了"
      : state.battlePhase === BATTLE_PHASES.contact ||
          state.battlePhase === BATTLE_PHASES.submergedCombat
        ? "射点構築"
        : "射撃諸元待機";
  torpedoOpsNode.textContent =
    state.viewMode === "binocular"
      ? "双眼鏡捕捉、TDC同期、推定採用、発射判断"
      : "目標選定、進角確認、発射可否の判定";
  torpedoReportNode.textContent =
    state.battlePhase === BATTLE_PHASES.alarmDive
      ? "急速潜航。発射管作業を止め安全確認。"
      : state.battlePhase === BATTLE_PHASES.submergedCombat
      ? `${loopMeta.label}。${loopMeta.torpedo}`
      : torpedoReportDetailNode.textContent;

  const escapeBearing = normalizeAngle(bearing(sub, state.escapeZone) - sub.heading);
  const trainingTarget = state.contacts.find(
    (contact) => contact.type === "convoy" && !contact.destroyed
  );
  if (navigationSummaryNode) {
    navigationSummaryNode.textContent = stage.id === "training_shot" && trainingTarget
      ? `訓練商船まで推定 ${Math.round(distance(sub, trainingTarget))}m。現在針路から ${Math.round(
          normalizeAngle(bearing(sub, trainingTarget) - sub.heading)
        )} 度。接近効率 ${Math.round(nav.approachRating * 100)}%。`
      : flagshipAlive
      ? `重要輸送船まで推定 ${Math.round(distance(sub, flagship))}m。現在針路から ${Math.round(
          normalizeAngle(bearing(sub, flagship) - sub.heading)
        )} 度。接近効率 ${Math.round(nav.approachRating * 100)}% / 回り込み ${Math.round(
          tactical.positioning * 100
        )}% / 射点形成 ${Math.round(tactical.firingLane * 100)}%。`
      : `離脱海域まで ${Math.round(distance(sub, state.escapeZone))}m。現在針路から ${Math.round(
          escapeBearing
        )} 度。`;
  }
  navigationReportDetailNode.textContent = stage.id === "training_shot" && trainingTarget
    ? `報告: 現在針路 ${Math.round(sub.heading)} 度、訓練商船へ接近中。針路誤差 ${Math.round(
        nav.headingError
      )} 度 / 深度誤差 ${Math.round(nav.depthError)}m / 潜望鏡安定 ${
        nav.periscopeStable ? "良" : "不十分"
      }。`
    : flagshipAlive
    ? `${navigationAdvisor.detail} 針路誤差 ${Math.round(nav.headingError)}° / 深度誤差 ${Math.round(
        nav.depthError
      )}m / 回り込み ${Math.round(tactical.positioning * 100)}% / 射点形成 ${Math.round(
        tactical.firingLane * 100
      )}%。`
    : `報告: 離脱針路を維持。海域端まで ${Math.round(distance(sub, state.escapeZone))}m。`;
  navigationDutyNode.textContent =
    state.battlePhase === BATTLE_PHASES.alarmDive
      ? "最大下げ角で潜航"
      : state.battlePhase === BATTLE_PHASES.egress
        ? "離脱針路維持"
        : "深度と針路の安定保持";
  navigationOpsNode.textContent =
    state.battlePhase === BATTLE_PHASES.alarmDive
      ? "最大下げ角、潜航深度 120m、トリム急変管理"
      : state.battlePhase === BATTLE_PHASES.submergedCombat
      ? "深度変更、静粛維持、回避運動"
      : "深度、針路、速力、潜望鏡深度維持";
  navigationReportNode.textContent =
    state.battlePhase === BATTLE_PHASES.alarmDive
      ? `急速潜航。深度 ${Math.round(sub.depth)}m、潜降率を維持。`
      : state.battlePhase === BATTLE_PHASES.submergedCombat
      ? `${loopMeta.label}。${navigationAdvisor.detail}`
      : navigationReportDetailNode.textContent;
  navApproachRatingNode.textContent = `${Math.round(nav.approachRating * 100)}%`;
  navHeadingErrorNode.textContent = `${Math.round(nav.headingError)}°`;
  navDepthErrorNode.textContent = `${Math.round(nav.depthError)}m`;
  navPeriscopeStabilityNode.textContent = nav.periscopeStable ? "良" : "不十分";

  sonarListNode.innerHTML = state.sonarContacts.length
    ? state.sonarContacts
        .slice(0, 5)
        .map((entry) => {
          const observed = state.observedContacts.get(entry.contact.id);
          const intel = sonarIntelSummary(entry.contact);
          const escortIntentNote =
            entry.contact.hostile && entry.contact.aiIntent
              ? ` / 護衛:${escortIntentLabel(entry.contact.aiIntent)}`
              : "";
          const typeLabel = observed?.suspectedType
            ? ` / 推定 ${contactLabel({ type: observed.suspectedType })} ${Math.round(
                (observed.identifyConfidence || 0) * 100
              )}%`
            : "";
          return `<li class="sonar-contact-item"><div class="sonar-contact-line">${playerSonarLabel(
            entry.contact
          )} 方位 ${Math.round(entry.relBearing)} 度 / 強度 ${Math.round(entry.strength * 100)}% / ${
            intel.brief
          }${observed?.rangeBand ? ` / ${observed.rangeBand}` : ""}${
            observed?.estimatedSpeed != null ? ` / ${observed.estimatedSpeed.toFixed(1)}kt` : ""
          }${observed?.estimatedHeading != null ? ` / ${formatHeading(observed.estimatedHeading)}` : ""}${typeLabel}${escortIntentNote}</div>${sonarStageGaugeMarkup(
            intel.stage
          )}</li>`;
        })
        .join("")
    : "<li>受動聴音では有意な接触なし。</li>";
  updateTDCDisplay();
  updatePeriscopeControl();
}

function setStation(nextStation) {
  state.station = nextStation;
  updateButtons();
  updateHud();
}

function resetGame() {
  const stage = currentStage();
  const stageSetup = stage.setup();
  stopVoicePlayback();
  audioState.lastVoiceAt.clear();
  audioState.recentVoiceAt.clear();
  audioState.lastVoiceEntry = null;
  state.running = true;
  state.time = 0;
  state.missionClockStart = stage.startClock ?? 0;
  state.lastFrame = 0;
  state.alarmDiveCooldownUntil = 0;
  state.pingFlash = 0;
  state.pingCooldown = 0;
  state.silentRunning = false;
  state.viewMode = "normal";
  state.stageState = {
    cleared: false,
    failed: false,
    message: ""
  };
  state.commandIntent = "approach";
  state.battlePhase = BATTLE_PHASES.patrol;
  state.battlePhaseEnteredAt = 0;
  initWolfpackState(stage);
  state.alarmDive = createAlarmDiveState();
  syncCaptainAlarmCard();
  state.binocularAttackState = "blocked";
  state.binocularExposureTimer = 0;
  state.binocularAttackReason = "護衛接触を確認するまで浮上攻撃は禁止。";
  state.navigationTactical = {
    headingError: 0,
    depthError: 0,
    speedError: 0,
    stealthBonus: 0,
    approachRating: 0.5,
    solutionRating: 0.5,
    periscopeStable: false
  };
  state.contactTactical = {
    focusContactId: null,
    precision: 0,
    positioning: 0,
    firingLane: 0,
    shadowAdvantage: 0,
    note: "接触なし。",
    relativeTargetBearing: null,
    estimatedRange: null
  };
  state.torpedoSequence = createTorpedoSequenceState();
  state.periscopeControl = {
    reticleReading: 3.0,
    focusContactId: null,
    lastFocusContactId: null,
    bearingOffset: 0,
    suspectedType: null,
    lastMeasuredRange: null,
    apparentReading: null,
    renderTargets: []
  };
  state.tdc = {
    targetId: null,
    bearing: null,
    range: null,
    speedKt: 3.0,
    aob: 90,
    gyroAngle: null,
    absoluteFireBearing: null,
    valid: false,
    suggestedSpeedKt: null,
    suggestedAob: null,
    estimateConfidence: 0,
    estimateNote: "潜望鏡観測ログが不足。"
  };
  state.log = [];
  state.postAttackDecision = {
    active: false,
    timer: 0,
    mode: null,
    reason: ""
  };
  state.command = {
    captainOrder: "艦長命令: 接敵準備",
    priorityLabel: "通常",
    priorityTone: "normal",
    sonar: "受動聴音を継続",
    torpedo: "射撃諸元を待機",
    navigation: "現針路を維持"
  };
  state.torpedoesInWater = [];
  state.depthChargesInWater = [];
  state.escapeZone = { ...stageSetup.escapeZone };
  const sortieSubmarine = applyCampaignLoadout(stageSetup.submarine);
  state.submarine = {
    x: 1800,
    y: 5200,
    heading: -18,
    targetHeading: -18,
    speed: 3,
    targetSpeed: 3,
    depth: 60,
    targetDepth: 60,
    hull: 100,
    battery: 100,
    noise: 0.18,
    reserveTorpedoes: 9,
    torpedoTubes: createTorpedoTubeBank(),
    detection: 0.1,
    trail: [],
    ...sortieSubmarine,
    torpedoTubes: cloneTubeBank(sortieSubmarine.torpedoTubes || createTorpedoTubeBank()),
    reserveTorpedoes: sortieSubmarine.reserveTorpedoes ?? 9
  };
  const visibleWorldWidth = canvas.width / TACTICAL_PLOT_SCALE;
  const visibleWorldHeight = canvas.height / TACTICAL_PLOT_SCALE;
  state.plotCamera = {
    x: clamp(state.submarine.x - visibleWorldWidth * 0.44, 0, WORLD.width - visibleWorldWidth),
    y: clamp(state.submarine.y - visibleWorldHeight * 0.52, 0, WORLD.height - visibleWorldHeight)
  };
  state.gridParallax = {
    x: 0,
    y: 0
  };
  state.observedContacts.clear();
  state.observedSampleTimer = 0;
  state.voiceRuntime = {
    lastDepthReachedTarget: null,
    lastPeriscopeMode: "normal",
    lastSolutionReadyAt: -Infinity,
    lastSurfaced: false,
    strongerContactAtById: new Map()
  };
  state.contacts = stageSetup.contacts;
  updateNavigationTacticalState();
  buildSonarContacts();
  updateVisualContacts();
  updateDetectionState();
  updateSubmergedLoop();
  addLog(stage.introLog);
  addLog(
    `持越状態: 船体 ${Math.round(state.submarine.hull)}% / 電池 ${Math.round(
      state.submarine.battery
    )}% / 予備魚雷 ${state.submarine.reserveTorpedoes || 0} 本。`
  );
  addLog(
    `艦型 ${UBOAT_CLASS.name} / 全長 ${UBOAT_CLASS.lengthMeters}m / 実用深度 ${UBOAT_CLASS.practicalDepth}m。`
  );
  addLog("水上はディーゼルで推進・充電、潜航中は電動機で放電。");
  if (stage.id === "training_shot") {
    addLog("目標は単独商船。潜望鏡観測から雷撃までの一連を確認。");
  } else if (stage.id === "destroyer_escape") {
    addLog("優先は生残。深度と静粛で護衛の接触を切り、離脱海域へ向かう。");
  } else {
    addLog("優先目標は中央の重要輸送船。駆逐艦は二隻。");
  }
  setStatus(stage.mission, "good");
  updateBattlePhase();
  updateButtons();
  updateHud();
  render();
}

function setViewMode(mode) {
  if (state.alarmDive.active && mode !== "normal") {
    setStatus("急速潜航中は潜望鏡・双眼鏡へ移れない。", "warning");
    return;
  }

  state.viewMode = mode;

  if (mode === "periscope") {
    state.periscopeControl.bearingOffset = 0;
    state.submarine.targetDepth = Math.min(state.submarine.targetDepth, 14);
    emitGermanRepeater("captainPeriscopeUp");
    emitGermanRepeater("captainPeriscopeDepth");
    setCommandState({
      captainOrder: "艦長命令: 潜望鏡深度、前方監視",
      priorityLabel: "警戒",
      priorityTone: "high",
      sonar: "近距離スクリュー音を重点監視",
      navigation: "深度14m以内へ調整"
    });
    addLog("潜望鏡深度へ。艦長、上方監視。");
    setStatus("潜望鏡モード。視界を得るが被発見の危険が上がる。", "warning");
  } else if (mode === "binocular") {
    if (!isSurfaced(state.submarine)) {
      issueCaptainIntent("surface");
      setStatus("双眼鏡を使うには先に浮上が必要。まず浮上命令を実施。", "warning");
      return;
    }
    state.periscopeControl.bearingOffset = 0;
    state.submarine.targetDepth = 0;
    if (state.voiceRuntime.lastPeriscopeMode === "periscope") {
      emitGermanRepeater("captainPeriscopeDown");
    }
    setCommandState({
      captainOrder: "艦長命令: 浮上、双眼鏡で船団確認・ディーゼル充電",
      priorityLabel: "緊急",
      priorityTone: "critical",
      sonar: "音響より見張り支援に移行",
      navigation: "浮上コース保持、即時潜航準備、充電開始"
    });
    addLog("浮上。艦長、双眼鏡で船団を捜索。");
    setStatus(
      `浮上双眼鏡モード。${state.binocularAttackReason || "視界良好、ただし危険。"}`,
      state.binocularAttackState === "allowed" ? "warning" : "bad"
    );
  } else {
    state.periscopeControl.bearingOffset = 0;
    if (state.voiceRuntime.lastPeriscopeMode === "periscope") {
      emitGermanRepeater("captainPeriscopeDown");
    }
    setCommandState({
      captainOrder: "艦長命令: 通常監視、静かに接敵",
      priorityLabel: "通常",
      priorityTone: "normal",
      sonar: "受動聴音を継続",
      navigation: "通常潜航配置"
    });
    addLog("通常観測へ戻る。");
    setStatus("通常監視へ復帰。");
  }

  state.voiceRuntime.lastPeriscopeMode = mode;

  updateButtons();
  updateHud();
}

function commandSpeed(value) {
  if (state.alarmDive.active && value > 0 && value < 4) {
    value = 4;
  }
  state.submarine.targetSpeed = value;
  if (state.silentRunning && value > 4) {
    state.silentRunning = false;
    addLog("静粛航行を解除。");
  }
  const stopOrder = value <= 0;
  const alarmStopOrder = stopOrder && state.alarmDive.active;
  setCommandState({
    captainOrder: stopOrder ? "艦長命令: 機関停止" : `艦長命令: 速力 ${value} ノット`,
    priorityLabel: alarmStopOrder ? "緊急" : value >= 6 ? "警戒" : "通常",
    priorityTone: alarmStopOrder ? "critical" : value >= 6 ? "high" : "normal",
    navigation: stopOrder ? "機関停止、惰性を監視" : `機関 ${value} ノットへ調整`,
    sonar: stopOrder ? "自艦騒音低下を利用し聴音強化" : value >= 6 ? "自艦騒音増大を補正監視" : "静粛接近を支援"
  });
  emitSpeedVoice(value);
  if (alarmStopOrder) {
    addLog("Alarm! 中に艦長命令: 機関停止。惰性で潜航を継続。");
    setStatus("機関停止。惰性を保ちながら急速潜航を継続。", "warning");
  } else if (stopOrder) {
    addLog("艦長命令: 機関停止。");
    setStatus("機関停止を命令。惰性航走へ移る。");
  } else {
    addLog(`速力変更。目標 ${value} ノット。`);
    setStatus(`速力を ${value} ノットへ調整中。`);
  }
  updateButtons();
}

function commandDepth(value) {
  if (state.alarmDive.active) {
    value = Math.max(value, 120);
  }
  value = Math.min(value, UBOAT_CLASS.practicalDepth);
  state.submarine.targetDepth = value;
  if (value > 20 && state.viewMode !== "normal") {
    state.viewMode = "normal";
  }
  setCommandState({
    captainOrder: `艦長命令: 深度 ${value}m`,
    priorityLabel: value <= 20 ? "警戒" : "通常",
    priorityTone: value <= 20 ? "high" : "normal",
    navigation: `潜舵手、深度 ${value}m を実施`,
    sonar: value <= 20 ? "表層雑音を考慮して聴音" : "水中接触を継続追尾"
  });
  emitDepthVoice(value);
  state.voiceRuntime.lastDepthReachedTarget = null;
  addLog(`深度 ${value}m を指示。`);
  setStatus(`深度 ${value}m へ潜航。`);
  updateButtons();
}

function commandTurn(delta) {
  state.submarine.targetHeading = normalizeAngle(state.submarine.targetHeading + delta);
  emitGermanRepeater(delta < 0 ? "captainRudderPort" : "captainRudderStarboard");
  setCommandState({
    captainOrder: delta < 0 ? "艦長命令: 左へ回頭" : "艦長命令: 右へ回頭",
    priorityLabel: "通常",
    priorityTone: "normal",
    navigation: `新針路 ${Math.round(state.submarine.targetHeading)} 度へ回頭`,
    torpedo: "方位変化に伴い射点を再計算"
  });
  addLog(delta < 0 ? "取り舵。敵進路へ割り込む。" : "面舵。危険海面から離隔。");
  setStatus(`目標針路 ${Math.round(state.submarine.targetHeading)} 度。`);
}

function holdCourse() {
  state.submarine.targetHeading = state.submarine.heading;
  emitGermanRepeater("helmNewCourse");
  setCommandState({
    captainOrder: "艦長命令: 現針路保持",
    priorityLabel: "通常",
    priorityTone: "normal",
    navigation: `針路 ${Math.round(state.submarine.heading)} 度を保持`,
    torpedo: "安定した射点を維持"
  });
  addLog("現針路保持。");
  setStatus("針路を保持。");
}

function setSilentRunningDirect(enabled) {
  state.silentRunning = enabled;
}

function issueCaptainIntent(intent) {
  const sub = state.submarine;
  const deepDepth = Math.min(230, UBOAT_CLASS.practicalDepth);
  state.commandIntent = intent;

  switch (intent) {
    case "approach":
      sub.targetSpeed = 3;
      sub.targetDepth = 60;
      setSilentRunningDirect(true);
      setCommandState({
        captainOrder: "艦長命令: 接敵維持",
        priorityLabel: "通常",
        priorityTone: "normal",
        sonar: "受動聴音で接触を失わず追尾",
        torpedo: "射点成立に向けて諸元待機",
        navigation: "深度 60m、微速で敵前方へ回り込む"
      });
      emitSpeedVoice(3);
      emitDepthVoice(60);
      addLog("艦長命令: 接敵維持。航海長は微速・深度60mで接敵継続。");
      setStatus("接敵維持。航海長へ接近コースを下令。");
      break;
    case "evade":
      sub.targetSpeed = 3;
      sub.targetDepth = 140;
      setSilentRunningDirect(true);
      state.voiceRuntime.lastDepthReachedTarget = null;
      setCommandState({
        captainOrder: "艦長命令: 被探知回避",
        priorityLabel: "警戒",
        priorityTone: "high",
        sonar: "護衛接近方位を継続監視",
        torpedo: "射撃より回避を優先",
        navigation: "深度 140m、微速で離隔保持"
      });
      emitSpeedVoice(3);
      emitDepthVoice(140);
      addLog("艦長命令: 被探知回避。航海長は140mへ潜航、離隔を優先。");
      setStatus("被探知回避。航海長へ深深度の離隔針路を下令。", "warning");
      break;
    case "periscope":
      sub.targetSpeed = 3;
      sub.targetDepth = Math.max(15, UBOAT_CLASS.torpedoDepthMin);
      setSilentRunningDirect(true);
      state.voiceRuntime.lastDepthReachedTarget = null;
      setCommandState({
        captainOrder: "艦長命令: 潜望鏡深度へ",
        priorityLabel: "警戒",
        priorityTone: "high",
        sonar: "護衛方位の急変を警戒",
        torpedo: "観測後の諸元入力に備える",
        navigation: "深度 15m、微速で潜望鏡観測位置へ"
      });
      emitSpeedVoice(3);
      emitDepthVoice(sub.targetDepth);
      addLog("艦長命令: 潜望鏡深度へ。航海長は15mで観測位置を保持。");
      setStatus("潜望鏡深度へ。航海長が観測位置を調整。");
      break;
    case "surface":
      sub.targetSpeed = 3;
      sub.targetDepth = 0;
      setSilentRunningDirect(false);
      state.voiceRuntime.lastDepthReachedTarget = null;
      setCommandState({
        captainOrder: "艦長命令: 浮上",
        priorityLabel: "警戒",
        priorityTone: "high",
        sonar: "聴音より見張り支援を優先",
        torpedo: "水上観測または充電準備",
        navigation: "浮上針路を保持、即潜航準備"
      });
      emitSpeedVoice(3);
      addLog("艦長命令: 浮上。航海長は水上移行を実施。");
      setStatus("浮上命令。艦橋使用とディーゼル復帰の準備。", "warning");
      break;
    case "deep":
      sub.targetSpeed = 6;
      sub.targetDepth = deepDepth;
      setSilentRunningDirect(false);
      state.voiceRuntime.lastDepthReachedTarget = null;
      setCommandState({
        captainOrder: "艦長命令: 深深度退避",
        priorityLabel: "緊急",
        priorityTone: "critical",
        sonar: "爆雷接近音を最優先監視",
        torpedo: "兵装固定、回避優先",
        navigation: `深度 ${deepDepth}m、巡航で退避`
      });
      emitSpeedVoice(6);
      emitDepthVoice(deepDepth);
      addLog(`艦長命令: 深深度退避。航海長は ${deepDepth}m へ退避。`);
      setStatus("深深度退避。航海長へ圧力限界手前までの潜航を下令。", "bad");
      break;
    case "quiet_starboard":
      sub.targetSpeed = 3;
      sub.targetDepth = Math.max(sub.targetDepth, 60);
      sub.targetHeading = normalizeAngle(sub.targetHeading + 25);
      setSilentRunningDirect(true);
      state.voiceRuntime.lastDepthReachedTarget = null;
      emitGermanRepeater("captainRudderStarboard");
      emitSpeedVoice(3);
      setCommandState({
        captainOrder: "艦長命令: 静かに右へ回避",
        priorityLabel: "警戒",
        priorityTone: "high",
        sonar: "回頭中の接触変化を追尾",
        torpedo: "射線を捨てて回避優先",
        navigation: `右へ 25° 回頭、微速、深度 ${Math.round(sub.targetDepth)}m を維持`
      });
      addLog("艦長命令: 静かに右へ回避。航海長は微速右回頭。");
      setStatus("静かな右回避。航海長へ小回頭を下令。", "warning");
      break;
    case "egress":
      sub.targetSpeed = 9;
      sub.targetDepth = Math.max(sub.targetDepth, 60);
      setSilentRunningDirect(false);
      setCommandState({
        captainOrder: "艦長命令: 全速離脱",
        priorityLabel: "緊急",
        priorityTone: "critical",
        sonar: "護衛追撃方位を監視",
        torpedo: "再装填停止、離脱優先",
        navigation: `全速 ${sub.targetSpeed}kt、離脱針路を維持`
      });
      emitSpeedVoice(9);
      addLog("艦長命令: 全速離脱。航海長は離脱針路を維持。");
      setStatus("全速離脱。航海長へ離脱針路維持を下令。", "warning");
      break;
    default:
      return;
  }

  if (state.viewMode !== "normal" && intent !== "periscope") {
    state.viewMode = "normal";
  }
  updateButtons();
  updateHud();
}

function toggleSilent() {
  if (state.alarmDive.active) {
    setStatus("急速潜航中は静粛航行より潜航完了を優先。", "warning");
    return;
  }

  state.silentRunning = !state.silentRunning;
  if (state.silentRunning && state.submarine.targetSpeed > 4) {
    state.submarine.targetSpeed = 3;
  }
  setCommandState({
    captainOrder: state.silentRunning ? "艦長命令: 静粛航行" : "艦長命令: 通常航行",
    priorityLabel: state.silentRunning ? "警戒" : "通常",
    priorityTone: state.silentRunning ? "high" : "normal",
    sonar: state.silentRunning ? "接触識別を優先、雑音低下" : "通常聴音へ復帰",
    navigation: state.silentRunning ? "回転数を抑え接敵" : "標準機関出力"
  });
  addLog(state.silentRunning ? "静粛航行へ移行。" : "静粛航行を解除。");
  setStatus(
    state.silentRunning ? "静粛航行中。被探知を抑える。" : "通常航行へ復帰。",
    state.silentRunning ? "good" : "warning"
  );
  updateButtons();
}

function activePing() {
  if (state.pingCooldown > 0 || !state.running) return;

  state.pingCooldown = 12;
  state.pingFlash = 1.2;
  state.submarine.detection = clamp(state.submarine.detection + 0.18, 0, 1);

  for (const contact of state.contacts) {
    if (contact.destroyed) continue;
    if (distance(state.submarine, contact) < 900) {
      contact.pinged = 16;
    }
  }
  setCommandState({
    captainOrder: "艦長命令: 能動ソナー実施",
    priorityLabel: "緊急",
    priorityTone: "critical",
    sonar: "ピング反応を全力解析",
    navigation: "現針路保持、反応測定を支援"
  });

  addLog("能動ソナー。複数の反応を捕捉。");
  setStatus("ソナーピングを実施。位置を晒す危険あり。", "warning");
  buildSonarContacts();
  updateVisualContacts();
  updateDetectionState();
  updateContactEvents();
  updateButtons();
  updateHud();
}

function fireTorpedo() {
  const sub = state.submarine;
  const fireStatus = selectedTorpedoFireStatus();
  const firingTube = findTubeById(state.torpedoSequence.selectedTubeId, sub);
  const riskyBinocularShot =
    state.viewMode === "binocular" && state.binocularAttackState === "risky";
  if (!state.running) return;
  if (state.alarmDive.active) {
    setStatus("急速潜航中は雷撃できない。", "warning");
    return;
  }
  if (totalTorpedoCount(sub) <= 0) {
    addLog("発射管空。魚雷なし。");
    setStatus("魚雷がない。", "bad");
    return;
  }

  if (!state.torpedoSequence.tubeReady) {
    setStatus(fireStatus.detail, "warning");
    return;
  }
  if (!firingTube?.loaded) {
    setStatus("選択発射管が空。再装填からやり直す必要がある。", "warning");
    return;
  }

  const target = getSelectedTorpedoSolution();

  if (!target) {
    setCommandState({
      captainOrder: "艦長命令: 雷撃保留",
      priorityLabel: "警戒",
      priorityTone: "high",
      torpedo: "射撃解なし、再計算中"
    });
    addLog("雷撃断念。会敵解なし。");
    setStatus("目標への迎角が解けない。方位と距離の作り直しが必要。", "warning");
    return;
  }

  if (!target.shotValid) {
    const depthBlocked =
      sub.depth < UBOAT_CLASS.torpedoDepthMin || sub.depth > UBOAT_CLASS.torpedoDepthMax;
    setCommandState({
      captainOrder: "艦長命令: 射点修正",
      priorityLabel: "警戒",
      priorityTone: "high",
      torpedo: "進角または射程不適、再接敵を要請",
      navigation: "有利な雷撃針路を作る"
    });
    addLog("雷撃保留。進角または射程が不適。");
    setStatus(
      depthBlocked
        ? `発射深度は ${UBOAT_CLASS.torpedoDepthMin}-${UBOAT_CLASS.torpedoDepthMax}m が必要。`
        : "ジャイロ角か射程が不適切。さらに接敵して解を整える。",
      "warning"
    );
    return;
  }

  if (state.difficulty === "historical" && !state.tdc.valid) {
    setStatus(fireStatus.detail, "warning");
    addLog("雷撃保留。TDC未入力（Historicalモード）。");
    return;
  }

  const usesTDC = state.tdc.valid && state.tdc.absoluteFireBearing !== null;
  const fireHeading = usesTDC ? state.tdc.absoluteFireBearing : target.leadBearing;
  const fireGyro = usesTDC ? state.tdc.gyroAngle : target.gyroAngle;
  const fireLife = (usesTDC && state.tdc.range !== null)
    ? state.tdc.range / knotsToWorldSpeed(TORPEDO_SPEED) + 12
    : target.interceptTime + 12;

  firingTube.loaded = false;
  sub.detection = clamp(sub.detection + 0.14, 0, 1);
  state.torpedoSequence.stage = TORPEDO_SEQUENCE.fired;
  state.torpedoSequence.lastFiredTargetId = target.contact.id;
  state.torpedoSequence.lastFiredTubeId = firingTube.id;
  state.torpedoSequence.tubeReady = false;
  state.torpedoSequence.postFireRemaining = isSurfaced(sub) ? 6 : 14;
  emitGermanRepeater("torpedoFire");
  setCommandState({
    captainOrder: `艦長命令: ${contactLabel(target.contact)}へ雷撃`,
    priorityLabel: "緊急",
    priorityTone: "critical",
    torpedo: `進角 ${formatSigned(Math.round(fireGyro))}°${usesTDC ? " (TDC)" : ""}、発射済み`,
    sonar: "命中音と護衛反応を監視",
    navigation: "回避運動準備"
  });

  state.torpedoesInWater.push({
    id: `torpedo-${Math.random().toString(16).slice(2)}`,
    x: sub.x,
    y: sub.y,
    heading: fireHeading,
    speed: knotsToWorldSpeed(TORPEDO_SPEED),
    traveled: 0,
    targetId: target.contact.id,
    life: fireLife,
    interceptCountdown: target.interceptTime,
    hitChance: computeTorpedoHitChance(target, usesTDC)
  });
  addLog(
    `雷撃。管 ${firingTube.label} から ${contactLabel(target.contact)} へ進角 ${formatSigned(
      target.gyroAngle
    )}°、会敵 ${target.interceptTime.toFixed(1)} 秒。`
  );
  if (riskyBinocularShot) {
    addLog("危険な浮上双眼鏡発射。護衛艦の即時反応を誘発。");
    setStatus("危険な双眼鏡発射。護衛反応と Alarm! に備えよ。", "bad");
    state.binocularRecentRiskyShotTimer = BINOCULAR_RISKY_SHOT_ALARM_WINDOW;
    state.binocularExposureTimer = Math.max(
      state.binocularExposureTimer,
      BINOCULAR_EXPOSURE_DANGER + 2
    );
    state.postAttackDecision = {
      active: true,
      timer: SURFACE_ATTACK_DECISION_WINDOW,
      mode: null,
      reason: "危険な浮上発射後の離脱判断待ち"
    };
    sub.detection = clamp(sub.detection + 0.24, 0, 1);
  } else {
    setStatus("魚雷発射。走行中。", "good");
  }

  for (const contact of state.contacts) {
    if (contact.hostile && !contact.destroyed) {
      const rangeToSub = distance(sub, contact);
      const binocularBonus =
        riskyBinocularShot
          ? rangeToSub <= BINOCULAR_WARNING_ESCORT_RANGE
            ? 0.45
            : 0.25
          : 0;
      contact.alert = clamp(contact.alert + 0.4 + binocularBonus, 0, 1);
    }
  }

  buildSonarContacts();
  updateHud();
}

function updateSubmarine(deltaTime) {
  const sub = state.submarine;
  const nav = state.navigationTactical;
  const surfaced = isSurfaced(sub);
  const prevSurfaced = state.voiceRuntime.lastSurfaced;
  const prevX = sub.x;
  const prevY = sub.y;
  sub.speed +=
    (sub.targetSpeed - sub.speed) *
    Math.min(1, deltaTime * (state.silentRunning ? 0.8 : state.alarmDive.active ? 2.1 : 1.4));
  {
    const depthDiff = sub.targetDepth - sub.depth;
    const depthRate = computeDepthChangeRate(sub);
    if (Math.abs(depthDiff) <= depthRate * deltaTime) {
      sub.depth = sub.targetDepth;
    } else if (depthDiff !== 0) {
      sub.depth += Math.sign(depthDiff) * depthRate * deltaTime;
    }
  }

  const diff = normalizeAngle(sub.targetHeading - sub.heading);
  sub.heading = normalizeAngle(
    sub.heading +
      clamp(
        diff,
        -(state.silentRunning ? 16 : 22) * deltaTime,
        (state.silentRunning ? 16 : 22) * deltaTime
      )
  );

  const move = knotsToWorldSpeed(sub.speed) * deltaTime;
  sub.x = clamp(sub.x + Math.cos(toRadians(sub.heading)) * move, 40, WORLD.width - 40);
  sub.y = clamp(sub.y + Math.sin(toRadians(sub.heading)) * move, 40, WORLD.height - 40);
  const subEdgeState = edgeRecoveryState(sub, 520);
  if (subEdgeState.active) {
    const correctedHeading = blendedEdgeCourse(sub.targetHeading, subEdgeState.heading);
    const turnShare = state.battlePhase === BATTLE_PHASES.egress ? 0.38 : 0.22;
    sub.targetHeading = normalizeAngle(
      sub.targetHeading +
        normalizeAngle(correctedHeading - sub.targetHeading) * subEdgeState.strength * turnShare
    );
    sub.x = clamp(
      sub.x + Math.cos(toRadians(subEdgeState.heading)) * subEdgeState.strength * 2.6 * deltaTime,
      40,
      WORLD.width - 40
    );
    sub.y = clamp(
      sub.y + Math.sin(toRadians(subEdgeState.heading)) * subEdgeState.strength * 2.6 * deltaTime,
      40,
      WORLD.height - 40
    );
  }

  const movedX = sub.x - prevX;
  const movedY = sub.y - prevY;
  const gridFlowFactor = state.station === "captain" ? 0.22 : 0.58;
  state.gridParallax.x = (state.gridParallax.x * 0.92 + movedX * gridFlowFactor) % 500;
  state.gridParallax.y = (state.gridParallax.y * 0.92 + movedY * gridFlowFactor) % 500;

  const speedNoise = sub.speed / 12;
  const depthNoise = sub.depth < 50 ? 0.12 : sub.depth > 200 ? 0.08 : 0.02;
  const opticsNoise =
    state.viewMode === "binocular" ? 0.2 : state.viewMode === "periscope" ? 0.08 : 0;
  sub.noise = clamp(
    0.08 +
      speedNoise +
      depthNoise +
      opticsNoise -
      (state.silentRunning ? 0.16 : 0) -
      nav.stealthBonus,
    0.06,
    1
  );

  if (surfaced) {
    const dieselChargeRate =
      sub.speed <= 1
        ? 0.045
        : sub.speed <= 4
          ? 0.04
          : sub.speed <= 7
            ? 0.028
            : 0.015;
    sub.battery = clamp(sub.battery + deltaTime * dieselChargeRate, 0, 100);
  } else {
    const electricDrain =
      0.01 +
      sub.speed * 0.0048 +
      (state.silentRunning ? -0.004 : 0) +
      (sub.depth > 180 ? 0.01 : 0);
    sub.battery = clamp(
      sub.battery - deltaTime * Math.max(0.006, electricDrain),
      0,
      100
    );
  }

  if (!surfaced && sub.battery <= 0) {
    sub.targetSpeed = Math.min(sub.targetSpeed, 2);
    setStatus("電池切れ。出力が落ちる。", "bad");
  }

  if (sub.depth > UBOAT_CLASS.practicalDepth) {
    const overDepth = sub.depth - UBOAT_CLASS.practicalDepth;
    const pressureDamage = deltaTime * (0.3 + overDepth * 0.06);
    sub.hull = clamp(sub.hull - pressureDamage, 0, 100);
    setStatus(
      `実用深度 ${UBOAT_CLASS.practicalDepth}m 超過。船体に圧力がかかっている。`,
      "warning"
    );
  }

  if (sub.depth >= UBOAT_CLASS.crushDepth) {
    sub.hull = 0;
    setStatus(
      `圧壊深度 ${UBOAT_CLASS.crushDepth}m 到達。船体が限界を超えた。`,
      "bad"
    );
  }

  if (Math.abs(sub.depth - sub.targetDepth) < 3) {
    const roundedTarget = Math.round(sub.targetDepth);
    if (state.voiceRuntime.lastDepthReachedTarget !== roundedTarget) {
      state.voiceRuntime.lastDepthReachedTarget = roundedTarget;
      if (roundedTarget >= 118 && roundedTarget <= 122) {
        emitGermanRepeater("helmDepth120Reached");
      } else {
        emitGermanRepeater("helmDepthReached");
      }
    }
  }

  sub.detection = clamp(sub.detection - deltaTime * 0.04, 0, 1);
  sub.detection = clamp(sub.detection - deltaTime * nav.stealthBonus * 0.35, 0, 1);
  if (state.viewMode === "binocular" && sub.depth < 5) {
    const binocularDetectRate =
      state.binocularAttackState === "allowed"
        ? 0.08
        : state.binocularAttackState === "risky"
          ? 0.13
          : 0.18;
    sub.detection = clamp(
      sub.detection + deltaTime * binocularDetectRate * lightConditionMeta().binocularDetectionFactor,
      0,
      1
    );
  } else if (state.viewMode === "periscope" && sub.depth < 18) {
    sub.detection = clamp(
      sub.detection + deltaTime * 0.03 * lightConditionMeta().periscopeDetectionFactor,
      0,
      1
    );
  }
  if (state.alarmDive.active) {
    sub.detection = clamp(sub.detection + deltaTime * (sub.depth < 12 ? 0.06 : -0.02), 0, 1);
  }
  if (state.acousticJamming.timer > 0) {
    state.acousticJamming.timer = Math.max(0, state.acousticJamming.timer - deltaTime);
    if (state.acousticJamming.timer === 0) {
      state.acousticJamming.intensity = 0;
      state.acousticJamming.source = null;
    }
  }

  if (surfaced && !prevSurfaced) {
    emitGermanRepeater("engineDiesel");
  } else if (!surfaced && prevSurfaced) {
    emitGermanRepeater("engineElectric");
  }
  state.voiceRuntime.lastSurfaced = surfaced;
  sub.trail.push({ x: sub.x, y: sub.y, life: 1, speed: sub.speed });
  sub.trail = sub.trail
    .map((entry) => ({
      ...entry,
      life: entry.life - deltaTime * (0.32 - clamp((entry.speed || 0) / 9, 0, 1) * 0.12)
    }))
    .filter((entry) => entry.life > 0);
}

function updateContacts(deltaTime) {
  const sub = state.submarine;
  const jam = acousticJammingFactor();
  const surfaced = isSurfaced(sub);

  for (const contact of state.contacts) {
    if (contact.destroyed) continue;

    if (contact.hostile) {
      const range = distance(sub, contact);
      contact.chaseModeTimer = Math.max(0, (contact.chaseModeTimer || 0) - deltaTime);
      contact.reacquireLockout = Math.max(0, (contact.reacquireLockout || 0) - deltaTime);
      contact.aiDecisionCooldown = Math.max(0, (contact.aiDecisionCooldown || 0) - deltaTime);
      const chaseMode = contact.chaseModeTimer > 0;
      const silentFactor = state.silentRunning ? 120 : 0;
      const depthMasking = sub.depth >= 200 ? 120 : sub.depth >= 140 ? 70 : sub.depth >= 90 ? 35 : 0;
      const blindZone = range < ESCORT_SONAR_BLIND_RANGE;
      const effectiveRange =
        680 -
        sub.depth * 0.55 -
        depthMasking -
        silentFactor -
        jam * 250 +
        sub.noise * (210 - jam * 55);
      const reacquireBlocked = contact.reacquireLockout > 0;
      const hearsSub =
        !reacquireBlocked &&
        (
          (chaseMode && jam < 0.72) ||
          (!blindZone && range < effectiveRange) ||
          contact.alert > 0.55 + jam * 0.18
        );

      if (contact.aiDecisionCooldown <= 0) {
        const nextIntent = evaluateEscortIntent(contact, sub, range, hearsSub, jam, surfaced);
        const extra = {};
        if (
          nextIntent === ESCORT_AI_INTENTS.lostContactSearch &&
          contact.aiIntent !== ESCORT_AI_INTENTS.lostContactSearch
        ) {
          extra.searchCenter = { x: sub.x, y: sub.y };
          extra.searchHeading = bearing(contact, sub);
        }
        setEscortIntent(contact, nextIntent, extra);
        contact.aiDecisionCooldown = randomRange(1.2, 2.8);
      }

      const protectedShip = nearestEscortProtectedShip(contact);
      const intent = contact.aiIntent || ESCORT_AI_INTENTS.escortReturn;
      let desiredHeading = contact.heading;
      let speedTarget = 3.8;
      const detachedByWolfpack =
        (contact.wolfpackDetachedUntil || 0) > state.time && contact.wolfpackDetachPoint;

      if (detachedByWolfpack) {
        desiredHeading = bearing(contact, contact.wolfpackDetachPoint);
        speedTarget = 6.1;
        contact.alert = clamp(contact.alert - deltaTime * 0.018, 0.12, 1);
      } else if (intent === ESCORT_AI_INTENTS.attackRun) {
        desiredHeading = bearing(contact, sub);
        speedTarget = chaseMode ? 6.4 : 5.4;
        contact.alert = clamp(contact.alert + deltaTime * 0.08 + sub.noise * 0.01 - jam * 0.03, 0, 1);
        sub.detection = clamp(sub.detection + deltaTime * (chaseMode ? 0.05 : 0.026), 0, 1);
      } else if (intent === ESCORT_AI_INTENTS.surfacePursuit) {
        desiredHeading = bearing(contact, sub);
        speedTarget = 6.8;
        contact.chaseModeTimer = Math.max(contact.chaseModeTimer || 0, 22);
        contact.alert = clamp(contact.alert + deltaTime * 0.1 - jam * 0.015, 0, 1);
        sub.detection = clamp(sub.detection + deltaTime * 0.06, 0, 1);
      } else if (intent === ESCORT_AI_INTENTS.investigateContact) {
        desiredHeading = bearing(contact, sub);
        speedTarget = chaseMode ? 5.4 : 4.7;
        contact.alert = clamp(contact.alert + deltaTime * 0.035 + sub.noise * 0.008 - jam * 0.03, 0, 1);
      } else if (intent === ESCORT_AI_INTENTS.lostContactSearch) {
        const center = contact.searchCenter || { x: sub.x, y: sub.y };
        const centerRange = distance(contact, center);
        if (centerRange > 180) {
          desiredHeading = bearing(contact, center);
        } else {
          contact.searchHeading = normalizeAngle((contact.searchHeading || contact.heading) + deltaTime * 24);
          desiredHeading = contact.searchHeading;
        }
        speedTarget = 3.4;
        contact.alert = clamp(contact.alert - deltaTime * (0.018 + jam * 0.02), 0.12, 1);
      } else {
        if (protectedShip) {
          const offsetHeading = normalizeAngle(protectedShip.heading + 70);
          const offsetRange = protectedShip.priority ? 460 : 340;
          const returnPoint = {
            x: clamp(protectedShip.x + Math.cos(toRadians(offsetHeading)) * offsetRange, 0, WORLD.width),
            y: clamp(protectedShip.y + Math.sin(toRadians(offsetHeading)) * offsetRange, 0, WORLD.height)
          };
          desiredHeading = bearing(contact, returnPoint);
        } else {
          desiredHeading = normalizeAngle(contact.heading + randomRange(-4, 4));
        }
        speedTarget = 4.2;
        contact.alert = clamp(contact.alert - deltaTime * (0.05 + jam * 0.03), 0, 1);
      }

      contact.heading = normalizeAngle(
        contact.heading +
          clamp(normalizeAngle(desiredHeading - contact.heading), -20 * deltaTime, 20 * deltaTime)
      );
      contact.speed += (speedTarget - contact.speed) * Math.min(1, deltaTime * (intent === ESCORT_AI_INTENTS.attackRun || intent === ESCORT_AI_INTENTS.surfacePursuit ? 1.0 : 0.55));

      contact.attackCooldown -= deltaTime;
      const attackRange =
        intent === ESCORT_AI_INTENTS.surfacePursuit
          ? ESCORT_CHASE_ATTACK_RANGE
          : chaseMode
            ? ESCORT_CHASE_ATTACK_RANGE
            : ESCORT_ATTACK_RANGE;
      if ((contact.depthChargesRemaining ?? 0) <= 0) {
        if (!contact.outOfDepthChargesReported) {
          contact.outOfDepthChargesReported = true;
          addLog("駆逐艦は爆雷を使い果たした。以後は追尾のみ。");
        }
      }
      if (
        (contact.depthChargesRemaining ?? 0) > 0 &&
        contact.attackCooldown <= 0 &&
        range < attackRange &&
        !surfaced &&
        !detachedByWolfpack &&
        (intent === ESCORT_AI_INTENTS.attackRun || intent === ESCORT_AI_INTENTS.surfacePursuit) &&
        contact.alert > (chaseMode ? 0.52 : 0.64)
      ) {
        contact.attackCooldown = randomRange(chaseMode ? 10 : 12, chaseMode ? 16 : 20);
        const successChance = computeEscortAttackSuccess(sub, contact, range, chaseMode);
        const success = Math.random() <= successChance;
        const damage = computeEscortAttackDamage(sub, chaseMode, success);
        const salvo = availableDepthChargePattern(contact, sub, chaseMode, successChance, damage);
        contact.depthChargesRemaining = Math.max(0, (contact.depthChargesRemaining ?? 0) - salvo.length);
        state.depthChargesInWater.push(...salvo);
        contact.reacquireLockout = Math.max(
          contact.reacquireLockout || 0,
          ESCORT_REACQUIRE_LOCKOUT * (success ? 1.15 : 1)
        );
        addLog(
          `${chaseMode ? "追撃中の" : ""}駆逐艦が爆雷束 ${salvo.length} 発を投下。設定深度は ${Math.round(
            sub.depth
          )}m 付近を推定。残弾 ${contact.depthChargesRemaining}/${contact.depthChargeCapacity}。`
        );
        setStatus("駆逐艦が爆雷投下。沈降後の爆発深度に注意。", success ? "bad" : "warning");
        if (!success) {
          contact.alert = clamp(contact.alert - 0.06, 0, 1);
        }
      }
    }

    contact.pinged = Math.max(0, contact.pinged - deltaTime);

    contact.x = clamp(
      contact.x + Math.cos(toRadians(contact.heading)) * knotsToWorldSpeed(contact.speed) * deltaTime,
      30,
      WORLD.width - 30
    );
    contact.y = clamp(
      contact.y + Math.sin(toRadians(contact.heading)) * knotsToWorldSpeed(contact.speed) * deltaTime,
      30,
      WORLD.height - 30
    );
    const edgeState = edgeRecoveryState(contact, 620);
    if (edgeState.active) {
      const correctedHeading = blendedEdgeCourse(contact.heading, edgeState.heading);
      contact.heading = normalizeAngle(
        contact.heading +
          clamp(
            normalizeAngle(correctedHeading - contact.heading),
            -18 - edgeState.strength * 22,
            18 + edgeState.strength * 22
          )
      );
      contact.x = clamp(
        contact.x + Math.cos(toRadians(edgeState.heading)) * edgeState.strength * 2.1 * deltaTime,
        30,
        WORLD.width - 30
      );
      contact.y = clamp(
        contact.y + Math.sin(toRadians(edgeState.heading)) * edgeState.strength * 2.1 * deltaTime,
        30,
        WORLD.height - 30
      );
    }

    contact.trail.push({ x: contact.x, y: contact.y, life: 1 });
    contact.trail = contact.trail
      .map((entry) => ({ ...entry, life: entry.life - deltaTime * 0.18 }))
      .filter((entry) => entry.life > 0)
      .slice(-48);
  }
}

function computeTorpedoHitChance(solution, usesTDC) {
  const seq = state.torpedoSequence;
  const sub = state.submarine;
  const rangeFactor = clamp(1 - solution.range / (TORPEDO_MAX_RANGE * 1.1), 0.2, 1);
  const gyroFactor = clamp(
    1 - Math.abs(solution.gyroAngle) / Math.max(1, solution.effectiveGyroLimit),
    0.35,
    1
  );
  const sourceFactor = solution.contact.visualDetected ? 1 : 0.78;
  const tdcFactor = usesTDC ? 1 : state.difficulty === "historical" ? 0.85 : 0.93;
  const depthFactor =
    sub.depth >= UBOAT_CLASS.torpedoDepthMin && sub.depth <= UBOAT_CLASS.torpedoDepthMax ? 1 : 0.65;
  const prepFactor = seq.outerDoorOpen ? 1 : 0.72;
  const stealthFactor = state.silentRunning ? 1.04 : 0.98;
  const baseChance = clamp(
    solution.solutionRating *
      rangeFactor *
      gyroFactor *
      sourceFactor *
      tdcFactor *
      depthFactor *
      prepFactor *
      stealthFactor,
    0,
    0.97
  );
  const closeRangeBonus =
    solution.range <= 700
      ? 0.22
      : solution.range <= 1000
        ? 0.14
        : solution.range <= 1400
          ? 0.06
          : 0;
  const tdcBonus = usesTDC && solution.shotValid ? 0.12 : 0;
  const visualBonus = solution.contact.visualDetected ? 0.05 : 0;
  const stableShotFloor =
    usesTDC && solution.shotValid && solution.range <= 1000
      ? state.difficulty === "historical"
        ? 0.72
        : 0.8
      : state.difficulty === "historical"
        ? 0.22
        : 0.28;
  return clamp(
    Math.max(stableShotFloor, baseChance + closeRangeBonus + tdcBonus + visualBonus),
    state.difficulty === "historical" ? 0.22 : 0.28,
    0.98
  );
}

function resolveTorpedoHit(contact) {
  contact.hp -= 1;
  emitGermanRepeater("torpedoHit");
  addLog(`命中。${contactLabel(contact)} に魚雷1本。`);

  if (contact.hp <= 0) {
    contact.destroyed = true;
    contact.detected = false;
    contact.visualDetected = false;
    contact.sonarDetected = false;
    contact.detectionSource = null;
    state.campaign.tonnageSunk += TONNAGE_BY_TYPE[contact.type] || 0;
    state.campaign.shipsSunk += 1;
    addLog(`${contactLabel(contact)} 撃沈。`);
    setStatus(`${contactLabel(contact)} を撃沈。`, "good");
  } else {
    setStatus(`${contactLabel(contact)} に損傷。`, "good");
  }

  for (const other of state.contacts) {
    if (other.hostile && !other.destroyed) {
      other.alert = clamp(other.alert + 0.4, 0, 1);
    }
  }

  state.torpedoSequence = {
    ...createTorpedoSequenceState(),
    stage: TORPEDO_SEQUENCE.assessing,
    lastFiredTargetId: contact.id,
    lastFiredTubeId: state.torpedoSequence.lastFiredTubeId,
    postFireRemaining: isSurfaced(state.submarine) ? 4 : 10
  };
}

function updateTorpedoes(deltaTime) {
  const nextTorpedoes = [];

  for (const torpedo of state.torpedoesInWater) {
    torpedo.interceptCountdown = Math.max(0, (torpedo.interceptCountdown ?? 0) - deltaTime);
    const previous = { x: torpedo.x, y: torpedo.y };
    const step = torpedo.speed * deltaTime;
    torpedo.x += Math.cos(toRadians(torpedo.heading)) * step;
    torpedo.y += Math.sin(toRadians(torpedo.heading)) * step;
    torpedo.traveled += step;
    torpedo.life -= deltaTime;

    const target = state.contacts.find(
      (contact) => contact.id === torpedo.targetId && !contact.destroyed
    );

    const targetPrevious = target
      ? {
          x: target.x - Math.cos(toRadians(target.heading)) * knotsToWorldSpeed(target.speed) * deltaTime,
          y: target.y - Math.sin(toRadians(target.heading)) * knotsToWorldSpeed(target.speed) * deltaTime
        }
      : null;
    const directHit = target && distance(torpedo, target) <= TORPEDO_HIT_RADIUS;
    const pathHit =
      target &&
      targetPrevious &&
      (
        distancePointToSegment(target, previous, torpedo) <= TORPEDO_HIT_RADIUS ||
        distancePointToSegment(torpedo, targetPrevious, target) <= TORPEDO_HIT_RADIUS
      );

    if (directHit || pathHit) {
      const effectiveChance = Math.max(0, (torpedo.hitChance ?? 0.7) - TORPEDO_DUD_RATE);
      if (Math.random() <= effectiveChance) {
        resolveTorpedoHit(target);
      } else {
        emitGermanRepeater("torpedoMiss");
        state.torpedoSequence = {
          ...createTorpedoSequenceState(),
          stage: TORPEDO_SEQUENCE.assessing,
          lastFiredTargetId: torpedo.targetId,
          lastFiredTubeId: state.torpedoSequence.lastFiredTubeId,
          postFireRemaining: isSurfaced(state.submarine) ? 4 : 10
        };
        addLog(`魚雷は ${contactLabel(target)} を外れる。命中率 ${Math.round(effectiveChance * 100)}%。`);
        setStatus("雷撃失敗。敵は回避または信管不良。", "warning");
      }
      continue;
    }

    if (torpedo.traveled >= TORPEDO_MAX_RANGE || torpedo.life <= 0) {
      state.torpedoSequence = {
        ...createTorpedoSequenceState(),
        stage: TORPEDO_SEQUENCE.assessing,
        lastFiredTargetId: torpedo.targetId,
        lastFiredTubeId: state.torpedoSequence.lastFiredTubeId,
        postFireRemaining: isSurfaced(state.submarine) ? 4 : 10
      };
      addLog("魚雷失走。会敵せず。");
      continue;
    }

    nextTorpedoes.push(torpedo);
  }

  state.torpedoesInWater = nextTorpedoes;
}

function updateDepthCharges(deltaTime) {
  const nextDepthCharges = [];

  for (const depthCharge of state.depthChargesInWater) {
    depthCharge.depth += depthCharge.sinkRate * deltaTime;
    depthCharge.armed = depthCharge.depth >= depthCharge.setDepth * 0.7;

    if (depthCharge.depth >= depthCharge.setDepth) {
      resolveDepthChargeDetonation(depthCharge);
      continue;
    }

    nextDepthCharges.push(depthCharge);
  }

  state.depthChargesInWater = nextDepthCharges;
}

function updateMission() {
  const sub = state.submarine;
  const stage = currentStage();
  const stageOutcome = stage.evaluate(state);

  if (stageOutcome?.complete && !state.stageState.cleared) {
    state.running = false;
    state.stageState = {
      cleared: true,
      failed: false,
      message: stageOutcome.successStatus
    };
    markMissionOutcome(stageOutcome.successStatus, true);
    addLog(stageOutcome.successLog);
    setStatus(stageOutcome.successStatus, "good");
  }

  if (sub.hull <= 0 && !state.stageState.failed) {
    state.running = false;
    state.stageState = {
      cleared: false,
      failed: true,
      message: `${stage.name} 失敗。再挑戦。`
    };
    markMissionOutcome(`${stage.name} 失敗。帰投補給が必要。`, false);
    addLog("船体限界。任務失敗。");
    setStatus("潜水艦は戦闘不能。", "bad");
  }
}

function ensureAudio() {
  if (audioState.context) return;

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    setStatus("このブラウザは Web Audio に未対応。", "bad");
    return;
  }

  const context = new AudioContextClass();
  const masterGain = context.createGain();
  masterGain.gain.value = 0.24;
  masterGain.connect(context.destination);

  const noiseGain = context.createGain();
  noiseGain.gain.value = 0.05;
  noiseGain.connect(masterGain);

  const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
  const channel = buffer.getChannelData(0);
  for (let index = 0; index < channel.length; index += 1) {
    channel[index] = Math.random() * 2 - 1;
  }

  const noiseSource = context.createBufferSource();
  noiseSource.buffer = buffer;
  noiseSource.loop = true;

  const noiseFilter = context.createBiquadFilter();
  noiseFilter.type = "lowpass";
  noiseFilter.frequency.value = 420;

  noiseSource.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseSource.start();

  audioState.context = context;
  audioState.masterGain = masterGain;
  audioState.noiseGain = noiseGain;
  loadSonarSampleBuffers(context).catch(() => {});
}

function playAlarmBell() {
  ensureAudio();
  if (!audioState.context || !audioState.enabled) return;

  const now = audioState.context.currentTime;
  for (let index = 0; index < 6; index += 1) {
    const oscillator = audioState.context.createOscillator();
    const gain = audioState.context.createGain();
    oscillator.type = "square";
    oscillator.frequency.value = index % 2 === 0 ? 880 : 740;
    gain.gain.setValueAtTime(0.0001, now + index * 0.22);
    gain.gain.exponentialRampToValueAtTime(0.1, now + index * 0.22 + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.22 + 0.16);
    oscillator.connect(gain);
    gain.connect(audioState.masterGain);
    oscillator.start(now + index * 0.22);
    oscillator.stop(now + index * 0.22 + 0.17);
  }
}

function playAudioEnableCue() {
  if (!audioState.context || !audioState.masterGain) return;
  const now = audioState.context.currentTime;
  const oscillator = audioState.context.createOscillator();
  const gain = audioState.context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(440, now);
  oscillator.frequency.linearRampToValueAtTime(620, now + 0.16);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.05, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
  oscillator.connect(gain);
  gain.connect(audioState.masterGain);
  oscillator.start(now);
  oscillator.stop(now + 0.24);
}

function syncAudioGraph() {
  if (!audioState.context) return;

  const activeIds = new Set();
  const now = audioState.context.currentTime;

  for (const entry of state.sonarContacts.slice(0, 5)) {
    const { contact, strength, relBearing } = entry;
    activeIds.add(contact.id);

    let node = audioState.contactNodes.get(contact.id);
    if (!node) {
      if (node) {
        disposeContactAudioNode(node);
      }
      node = createContactAudioNode(contact);
      audioState.contactNodes.set(contact.id, node);
    }

    const pan = clamp(Math.sin(toRadians(relBearing)), -1, 1);
    const typeGain =
      contact.type === "escort" ? 0.22 : contact.type === "flagship" ? 0.28 : 0.24;
    const gainValue = audioState.enabled ? strength * typeGain : 0;
    const frequency = contact.tone + contact.speed * 8 + strength * 14;
    const filterFrequency =
      contact.type === "escort"
        ? 1120 + contact.speed * 40 + strength * 120
        : contact.type === "flagship"
          ? 220 + contact.speed * 16 + strength * 35
          : 360 + contact.speed * 22 + strength * 45;

    node.panner.pan.cancelScheduledValues(now);
    node.panner.pan.linearRampToValueAtTime(pan, now + 0.1);
    node.gain.gain.cancelScheduledValues(now);
    node.gain.gain.linearRampToValueAtTime(gainValue, now + 0.12);
    node.filter.frequency.cancelScheduledValues(now);
    node.filter.frequency.linearRampToValueAtTime(filterFrequency, now + 0.12);
    node.source.frequency.cancelScheduledValues(now);
    node.source.frequency.linearRampToValueAtTime(frequency, now + 0.12);
  }

  for (const [id, node] of audioState.contactNodes) {
    if (activeIds.has(id)) continue;
    node.gain.gain.setTargetAtTime(0, now, 0.08);
  }

  audioState.noiseGain.gain.setTargetAtTime(audioState.enabled ? 0.018 : 0, now, 0.12);
}

async function toggleAudio() {
  ensureAudio();
  ensureVoiceAssignments();
  if (!audioState.context) return;

  if (audioState.context.state === "suspended") {
    await audioState.context.resume();
  }

  audioState.enabled = !audioState.enabled;
  if (!audioState.enabled) {
    // ソナー音だけ停止。復唱は独立トグル側で管理する。
  } else {
    playAudioEnableCue();
  }
  syncAudioGraph();
  flushVoiceQueue();
  updateButtons();
  setStatus(
    audioState.enabled
      ? "音響を開始。ソナー環境音を再生する。"
      : "音響を停止。ソナー環境音のみ停止。",
    audioState.enabled ? "good" : "warning"
  );
}

function update(deltaTime) {
  if (!state.running) {
    buildSonarContacts();
    syncAudioGraph();
    updateHud();
    updateButtons();
    return;
  }

  state.time += deltaTime;
  state.pingFlash = Math.max(0, state.pingFlash - deltaTime);
  state.pingCooldown = Math.max(0, state.pingCooldown - deltaTime);
  updatePostAttackDecision(deltaTime);
  updateBinocularAttackState(deltaTime);
  updateWolfpackEvents(deltaTime);
  updateSubmarine(deltaTime);
  updateNavigationTacticalState();
  updateTorpedoPreparation(deltaTime);
  updateContacts(deltaTime);
  updateTorpedoes(deltaTime);
  updateDepthCharges(deltaTime);
  updateMission();
  buildSonarContacts();
  updateObservedContacts(deltaTime);
  updateVisualContacts();
  updateDetectionState();
  updateContactTacticalState();
  updateContactEvents();
  if (shouldAutoTriggerAlarmDive()) {
    startAlarmDive("enemy_contact", true);
  }
  updateBattlePhase();
  updateAlarmDive(deltaTime);
  updateSubmergedLoop();
  syncAudioGraph();
  updateHud();
  updateButtons();
  if (Date.now() - state.saveState.lastSavedAt > 8000) {
    saveCampaignSnapshot("auto");
  }
}

function toScreen(x, y, camera) {
  return { x: (x - camera.x) * TACTICAL_PLOT_SCALE, y: (y - camera.y) * TACTICAL_PLOT_SCALE };
}

function drawSceneBackground() {
  const palette = lightVisualPalette();
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, palette.chartTop);
  gradient.addColorStop(1, palette.chartBottom);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const glow = ctx.createRadialGradient(
    canvas.width * 0.52,
    canvas.height * 0.12,
    8,
    canvas.width * 0.52,
    canvas.height * 0.12,
    canvas.width * 0.42
  );
  glow.addColorStop(0, palette.chartGlow);
  glow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawOpticsSeascape(clipShape) {
  const palette = lightVisualPalette();
  const horizonY = canvas.height * palette.horizon;
  ctx.save();
  clipShape();
  const sky = ctx.createLinearGradient(0, 0, 0, horizonY);
  sky.addColorStop(0, palette.skyTop);
  sky.addColorStop(1, palette.skyBottom);
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, canvas.width, horizonY);

  const sea = ctx.createLinearGradient(0, horizonY, 0, canvas.height);
  sea.addColorStop(0, palette.seaTop);
  sea.addColorStop(1, palette.seaBottom);
  ctx.fillStyle = sea;
  ctx.fillRect(0, horizonY, canvas.width, canvas.height - horizonY);

  const celestial = palette.celestial;
  if (celestial) {
    ctx.save();
    ctx.globalAlpha = celestial.alpha;
    ctx.fillStyle = celestial.kind === "moon" ? "#e6f3ff" : "#fff1c7";
    ctx.beginPath();
    ctx.arc(canvas.width * celestial.x, canvas.height * celestial.y, celestial.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  ctx.strokeStyle = palette.opticsTick;
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i++) {
    const y = horizonY + 24 + i * 18;
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.14, y);
    ctx.quadraticCurveTo(canvas.width * 0.5, y - 10, canvas.width * 0.86, y);
    ctx.stroke();
  }

  ctx.fillStyle = palette.opticsTint;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

function drawGrid(camera) {
  const captainGridDrift =
    state.station === "captain"
      ? {
          x: state.gridParallax.x * 0.42,
          y: state.gridParallax.y * 0.42
        }
      : state.gridParallax;
  const gridCamera =
    state.station === "captain"
      ? {
          x: camera.x - captainGridDrift.x,
          y: camera.y - captainGridDrift.y
        }
      : camera;
  ctx.save();
  ctx.strokeStyle = lightVisualPalette().grid;
  ctx.lineWidth = 1;
  const gridStep = 500;
  for (
    let x = Math.floor(gridCamera.x / gridStep) * gridStep;
    x < gridCamera.x + canvas.width / TACTICAL_PLOT_SCALE;
    x += gridStep
  ) {
    const sx = (x - gridCamera.x) * TACTICAL_PLOT_SCALE;
    ctx.beginPath();
    ctx.moveTo(sx, 0);
    ctx.lineTo(sx, canvas.height);
    ctx.stroke();
  }
  for (
    let y = Math.floor(gridCamera.y / gridStep) * gridStep;
    y < gridCamera.y + canvas.height / TACTICAL_PLOT_SCALE;
    y += gridStep
  ) {
    const sy = (y - gridCamera.y) * TACTICAL_PLOT_SCALE;
    ctx.beginPath();
    ctx.moveTo(0, sy);
    ctx.lineTo(canvas.width, sy);
    ctx.stroke();
  }
  ctx.restore();
}

function drawEscape(camera) {
  const point = toScreen(state.escapeZone.x, state.escapeZone.y, camera);
  const radius = state.escapeZone.radius * TACTICAL_PLOT_SCALE;
  const palette = lightVisualPalette();
  ctx.save();
  ctx.setLineDash([8, 10]);
  ctx.strokeStyle = palette.escapeStroke;
  ctx.beginPath();
  ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = palette.escapeFill;
  ctx.fill();
  ctx.fillStyle = "#dffaff";
  ctx.font = "14px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillText("離脱海域", point.x - 24, point.y - radius - 10);
  ctx.restore();
}

function drawTrail(camera) {
  if (state.submarine.trail.length > 1) {
    ctx.save();
    ctx.lineCap = "round";
    for (let i = 1; i < state.submarine.trail.length; i += 1) {
      const prev = state.submarine.trail[i - 1];
      const curr = state.submarine.trail[i];
      const from = toScreen(prev.x, prev.y, camera);
      const to = toScreen(curr.x, curr.y, camera);
      const speedFactor = clamp((curr.speed || 0) / 9, 0, 1);
      ctx.strokeStyle = `rgba(141, 219, 237, ${curr.life * (0.18 + speedFactor * 0.18)})`;
      ctx.lineWidth = 2 + speedFactor * 6 + (1 - curr.life) * 2;
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
    }
    ctx.restore();
  }

  for (const entry of state.submarine.trail) {
    const point = toScreen(entry.x, entry.y, camera);
    const speedFactor = clamp((entry.speed || 0) / 9, 0, 1);
    ctx.fillStyle = `rgba(141, 219, 237, ${entry.life * (0.08 + speedFactor * 0.08)})`;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 8 + speedFactor * 6 + (1 - entry.life) * 18, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawContacts(camera) {
  const plotMode = state.station === "sonar" || state.station === "navigation";

  for (const contact of state.contacts) {
    if (contact.destroyed) continue;

    const point = toScreen(contact.x, contact.y, camera);
    if (
      point.x < -60 ||
      point.x > canvas.width + 60 ||
      point.y < -60 ||
      point.y > canvas.height + 60
    ) {
      continue;
    }

    if (plotMode) {
      continue;
    }

    if (!contact.detected) {
      ctx.strokeStyle = "rgba(141, 219, 237, 0.18)";
      ctx.beginPath();
      ctx.arc(point.x, point.y, 12, 0, Math.PI * 2);
      ctx.stroke();
      continue;
    }

    const color =
      contact.type === "escort"
        ? "#ff8771"
        : contact.type === "flagship"
          ? "#ffd57c"
          : "#9bd9a5";
    const chaseMode = (contact.chaseModeTimer || 0) > 0;
    const escortIntentText = contact.hostile
      ? escortIntentLabel(
          (contact.wolfpackDetachedUntil || 0) > state.time ? "wolfpack_detached" : contact.aiIntent
        )
      : null;
    const focusedOpticsTarget =
      state.station === "captain" &&
      state.viewMode === "binocular" &&
      state.periscopeControl.focusContactId === contact.id;
    ctx.save();
    ctx.translate(point.x, point.y);
    ctx.rotate(toRadians(contact.heading));
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(18, 0);
    ctx.lineTo(-12, -8);
    ctx.lineTo(-8, 0);
    ctx.lineTo(-12, 8);
    ctx.closePath();
    ctx.fill();

    if (contact.hostile && contact.alert > 0.45) {
      ctx.strokeStyle = "rgba(255, 135, 113, 0.4)";
      ctx.beginPath();
      ctx.arc(0, 0, 40, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (chaseMode) {
      ctx.strokeStyle = "rgba(255, 98, 78, 0.92)";
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.arc(0, 0, 54, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "#ffe3db";
      ctx.font = "11px Avenir Next, Hiragino Sans, sans-serif";
      ctx.fillText("追撃", -12, -60);
      ctx.lineWidth = 1;
    }
    if (contact.hostile && escortIntentText) {
      ctx.fillStyle = chaseMode ? "#ffe3db" : "rgba(255, 218, 206, 0.92)";
      ctx.font = "11px Avenir Next, Hiragino Sans, sans-serif";
      ctx.fillText(escortIntentText, -18, chaseMode ? -74 : -46);
    }
    if (focusedOpticsTarget) {
      ctx.strokeStyle = "rgba(255, 240, 130, 0.95)";
      ctx.lineWidth = 2;
      ctx.strokeRect(-20, -14, 40, 28);
      ctx.lineWidth = 1;
    }
    ctx.restore();
  }
}

function drawBearingPlot(camera) {
  if (state.station !== "sonar" && state.station !== "navigation") return;

  const LINE_RANGE = Math.max(canvas.width, canvas.height) * 2;
  const now = state.time;
  let contactIndex = 0;

  for (const observed of state.observedContacts.values()) {
    if (observed.bearingLog.length === 0) continue;

    for (const sample of observed.bearingLog) {
      const age = now - sample.time;
      const alpha = Math.max(0, 0.55 - age * 0.04);
      if (alpha <= 0) continue;

      const from = toScreen(sample.subX, sample.subY, camera);
      const rad = toRadians(sample.bearing);

      ctx.save();
      ctx.strokeStyle = `rgba(141, 219, 237, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(from.x + Math.cos(rad) * LINE_RANGE, from.y + Math.sin(rad) * LINE_RANGE);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    const latest = observed.bearingLog[observed.bearingLog.length - 1];
    const from = toScreen(latest.subX, latest.subY, camera);
    const rad = toRadians(latest.bearing);
    const labelDist = Math.min(LINE_RANGE * 0.4, 380);

    ctx.save();
    ctx.strokeStyle = "rgba(223, 250, 255, 0.85)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(from.x + Math.cos(rad) * LINE_RANGE, from.y + Math.sin(rad) * LINE_RANGE);
    ctx.stroke();

    const labelBase = observed.identified && observed.suspectedType
      ? contactLabel({ type: observed.suspectedType })
      : `接触${contactIndex + 1}`;
    const label = `${labelBase} ${Math.round(latest.bearing)}°`;
    ctx.fillStyle = "rgba(223, 250, 255, 0.75)";
    ctx.font = "11px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText(label, from.x + Math.cos(rad) * labelDist + 4, from.y + Math.sin(rad) * labelDist - 4);
    ctx.restore();

    contactIndex++;
  }
}

function getTorpedoPreview() {
  if (state.station !== "torpedo") return null;

  const selectedTarget = state.torpedoSequence.selectedTargetId
    ? state.contacts.find(
        (contact) =>
          contact.id === state.torpedoSequence.selectedTargetId && !contact.destroyed
      ) || null
    : null;
  const fallbackTarget = getPreferredTorpedoContact();
  const contact = selectedTarget || fallbackTarget;
  if (!contact) return null;

  const shot = computeTorpedoSolution(contact);
  const tdc = state.tdc;
  const usesTDC =
    state.torpedoSequence.dataEntered &&
    tdc.valid &&
    tdc.absoluteFireBearing !== null &&
    tdc.range !== null &&
    tdc.targetId === contact.id;

  if (!shot && !usesTDC) return null;

  const start = { x: state.submarine.x, y: state.submarine.y };
  const courseBearing = usesTDC ? tdc.absoluteFireBearing : shot.leadBearing;
  const plannedRange = usesTDC
    ? Math.min(tdc.range, TORPEDO_MAX_RANGE)
    : Math.min(shot.interceptRange, TORPEDO_MAX_RANGE);
  const end = {
    x: start.x + Math.cos(toRadians(courseBearing)) * plannedRange,
    y: start.y + Math.sin(toRadians(courseBearing)) * plannedRange
  };

  return {
    contact,
    usesTDC,
    courseBearing,
    plannedRange,
    start,
    end,
    interceptPoint: shot?.interceptPoint || end,
    gyroAngle: usesTDC ? tdc.gyroAngle : shot?.gyroAngle ?? null
  };
}

function drawTorpedoPreview(camera) {
  const preview = getTorpedoPreview();
  if (!preview) return;
  const fireStatus = selectedTorpedoFireStatus();
  const previewReady = fireStatus.ready && state.torpedoSequence.tubeReady;
  const previewPreparing =
    !previewReady &&
    (state.torpedoSequence.stage === TORPEDO_SEQUENCE.preparing || state.torpedoSequence.dataEntered);
  const lineStroke = previewReady
    ? "rgba(124, 232, 166, 0.95)"
    : previewPreparing
      ? "rgba(247, 200, 122, 0.92)"
      : "rgba(255, 135, 113, 0.84)";
  const lineFill = previewReady
    ? "#7ce8a6"
    : previewPreparing
      ? "#f7c87a"
      : "#ff8771";
  const ringStroke = previewReady
    ? "rgba(124, 232, 166, 0.34)"
    : previewPreparing
      ? "rgba(247, 200, 122, 0.36)"
      : "rgba(255, 135, 113, 0.28)";
  const statusLabel = previewReady
    ? "Ready"
    : previewPreparing
      ? "Preparing"
      : "Blocked";

  const subPoint = toScreen(preview.start.x, preview.start.y, camera);
  const endPoint = toScreen(preview.end.x, preview.end.y, camera);
  const interceptPoint = toScreen(preview.interceptPoint.x, preview.interceptPoint.y, camera);

  ctx.save();
  ctx.setLineDash([10, 8]);
  ctx.strokeStyle = lineStroke;
  ctx.lineWidth = preview.usesTDC ? 3 : 2;
  ctx.beginPath();
  ctx.moveTo(subPoint.x, subPoint.y);
  ctx.lineTo(endPoint.x, endPoint.y);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = lineFill;
  ctx.beginPath();
  ctx.arc(interceptPoint.x, interceptPoint.y, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = ringStroke;
  ctx.beginPath();
  ctx.arc(interceptPoint.x, interceptPoint.y, 20, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = previewReady ? "#dfffe9" : previewPreparing ? "#fff1c9" : "#ffd9d1";
  ctx.font = "12px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillText(
    `Torpedo Preview ${statusLabel} ${preview.usesTDC ? "TDC" : "Auto"} ${formatHeading(preview.courseBearing)}`,
    endPoint.x + 10,
    endPoint.y - 10
  );
  ctx.fillText(
    `${contactLabel(preview.contact)} ${Math.round(preview.plannedRange)}m / 進角 ${formatSigned(
      Math.round(preview.gyroAngle ?? 0)
    )}°`,
    interceptPoint.x + 12,
    interceptPoint.y + 18
  );
  if (!previewReady) {
    ctx.font = "11px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText(fireStatus.label, interceptPoint.x + 12, interceptPoint.y + 34);
  }
  ctx.restore();
}

function drawSubmarine(camera) {
  const sub = state.submarine;
  const point = toScreen(sub.x, sub.y, camera);

  ctx.save();
  ctx.translate(point.x, point.y);
  ctx.rotate(toRadians(sub.heading));
  ctx.fillStyle = "#dffaff";
  ctx.beginPath();
  ctx.moveTo(34, 0);
  ctx.quadraticCurveTo(10, -15, -22, -12);
  ctx.lineTo(-34, 0);
  ctx.lineTo(-22, 12);
  ctx.quadraticCurveTo(10, 15, 34, 0);
  ctx.fill();
  ctx.fillStyle = "#8ddbed";
  ctx.fillRect(-3, -18, 10, 12);
  ctx.restore();

  ctx.fillStyle = "#f2ffff";
  ctx.font = "bold 14px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillText("U-Boat", point.x + 18, point.y - 18);
  ctx.beginPath();
  ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
  ctx.fill();

  if (state.pingFlash > 0) {
    ctx.strokeStyle = `rgba(223, 250, 255, ${state.pingFlash * 0.55})`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 170 + (1 - state.pingFlash) * 520, 0, Math.PI * 2);
    ctx.stroke();
    ctx.lineWidth = 1;
  }
}

function drawTorpedoes(camera) {
  for (const torpedo of state.torpedoesInWater) {
    const point = toScreen(torpedo.x, torpedo.y, camera);
    ctx.save();
    ctx.translate(point.x, point.y);
    ctx.rotate(toRadians(torpedo.heading));
    ctx.fillStyle = "#f7f1cf";
    ctx.fillRect(-8, -2, 16, 4);
    ctx.fillStyle = "rgba(247, 241, 207, 0.2)";
    ctx.fillRect(-20, -1, 10, 2);
    ctx.restore();
  }
}

function drawDepthCharges(camera) {
  for (const depthCharge of state.depthChargesInWater) {
    const point = toScreen(depthCharge.x, depthCharge.y, camera);
    if (
      point.x < -40 ||
      point.x > canvas.width + 40 ||
      point.y < -40 ||
      point.y > canvas.height + 40
    ) {
      continue;
    }

    const depthRatio = clamp(depthCharge.depth / Math.max(1, depthCharge.setDepth), 0, 1);
    ctx.save();
    ctx.strokeStyle = depthCharge.armed ? "rgba(255, 155, 128, 0.85)" : "rgba(255, 214, 166, 0.72)";
    ctx.fillStyle = depthCharge.armed ? "rgba(255, 120, 90, 0.32)" : "rgba(255, 214, 166, 0.2)";
    ctx.beginPath();
    ctx.arc(point.x, point.y, 4 + depthRatio * 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.font = "10px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillStyle = "rgba(255, 234, 214, 0.84)";
    ctx.fillText(`${Math.round(depthCharge.depth)}m`, point.x + 8, point.y - 8);
    ctx.restore();
  }
}

function drawOverlay() {
  if (state.station === "captain") {
    const sub = state.submarine;
    const phase = phaseMeta(state.battlePhase);
    const trigger = getContactTriggerMeta();
    const objective = phaseObjectiveMeta(state.battlePhase, getBestKnownTorpedoSolution());
    const fire = selectedTorpedoFireStatus();
    const activeChasers = state.contacts.filter(
      (contact) => contact.hostile && !contact.destroyed && (contact.chaseModeTimer || 0) > 0
    ).length;
    const truncate = (text, max) => (text.length > max ? `${text.slice(0, max - 1)}…` : text);
    const phaseTone =
      state.alarmDive.active
        ? { fill: "rgba(255, 139, 120, 0.2)", stroke: "rgba(255, 139, 120, 0.45)", text: "#ffe0d9" }
        : state.battlePhase === BATTLE_PHASES.attack
          ? { fill: "rgba(255, 212, 123, 0.18)", stroke: "rgba(255, 212, 123, 0.4)", text: "#fff0c7" }
          : state.battlePhase === BATTLE_PHASES.contact || state.battlePhase === BATTLE_PHASES.submergedCombat
            ? { fill: "rgba(139, 220, 241, 0.14)", stroke: "rgba(139, 220, 241, 0.3)", text: "#dffaff" }
            : { fill: "rgba(140, 243, 187, 0.14)", stroke: "rgba(140, 243, 187, 0.28)", text: "#dfffe9" };
    const metricCards = [
      { label: "深度", value: `${Math.round(sub.depth)}m` },
      { label: "速力", value: `${sub.speed.toFixed(1)}kt` },
      { label: "機関", value: isSurfaced(sub) ? "ディーゼル" : "電動機" },
      { label: "被探知", value: `${Math.round(sub.detection * 100)}%` }
    ];
    const escortContacts = state.contacts.filter(
      (contact) => contact.hostile && !contact.destroyed
    );
    const escortThreat = escortContacts.length
      ? Math.max(...escortContacts.map((contact) => contact.alert))
      : 0;
    const escortIntentCounts = escortContacts.reduce((counts, contact) => {
      const key =
        (contact.wolfpackDetachedUntil || 0) > state.time
          ? "wolfpack_detached"
          : contact.aiIntent || ESCORT_AI_INTENTS.escortReturn;
      counts[key] = (counts[key] || 0) + 1;
      return counts;
    }, {});
    const threatTone =
      escortThreat > 0.66 || activeChasers > 0
        ? { fill: "rgba(255, 139, 120, 0.18)", stroke: "rgba(255, 139, 120, 0.34)", text: "#ffd9d1" }
        : escortThreat > 0.33
          ? { fill: "rgba(255, 212, 123, 0.16)", stroke: "rgba(255, 212, 123, 0.28)", text: "#fff0c7" }
          : { fill: "rgba(139, 220, 241, 0.12)", stroke: "rgba(139, 220, 241, 0.24)", text: "#dffaff" };

    ctx.save();

    ctx.fillStyle = phaseTone.fill;
    ctx.fillRect(18, 18, canvas.width - 36, 16);
    ctx.strokeStyle = phaseTone.stroke;
    ctx.strokeRect(18, 18, canvas.width - 36, 16);
    ctx.fillStyle = phaseTone.text;
    ctx.font = "bold 12px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText(
      `${phase.name} / ${truncate(phase.description, 52)}`,
      30,
      30
    );

    ctx.fillStyle = "rgba(2, 10, 16, 0.68)";
    ctx.fillRect(18, 42, 408, 132);
    ctx.strokeStyle = "rgba(141, 219, 237, 0.16)";
    ctx.strokeRect(18, 42, 408, 132);

    ctx.fillStyle = "#a8c7d3";
    ctx.font = "12px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText("艦長席 / Captain Control", 34, 64);

    ctx.fillStyle = "#f2ffff";
    ctx.font = "bold 34px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText(`針路 ${Math.round(sub.heading)}°`, 34, 102);

    const metricY = 118;
    const metricW = 88;
    const metricGap = 8;
    metricCards.forEach((card, index) => {
      const x = 34 + index * (metricW + metricGap);
      ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      ctx.strokeStyle = "rgba(141, 219, 237, 0.12)";
      ctx.beginPath();
      ctx.roundRect(x, metricY, metricW, 42, 10);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#96b9c6";
      ctx.font = "11px Avenir Next, Hiragino Sans, sans-serif";
      ctx.fillText(card.label, x + 10, metricY + 15);
      ctx.fillStyle = "#e9fcff";
      ctx.font = "bold 16px Avenir Next, Hiragino Sans, sans-serif";
      ctx.fillText(card.value, x + 10, metricY + 33);
    });

    ctx.fillStyle = "#9ec1cd";
    ctx.font = "12px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText(`接敵: ${truncate(trigger.label, 14)}`, 34, 176);
    ctx.fillText(`目標: ${truncate(objective.label, 14)}`, 178, 176);
    ctx.fillStyle = fire.ready ? "#8cf3bb" : state.alarmDive.active ? "#ffd47b" : "#dffaff";
    ctx.fillText(`雷撃: ${truncate(fire.label, 16)}`, 308, 176);

    if (activeChasers > 0) {
      ctx.fillStyle = "#ffb29d";
      ctx.font = "bold 12px Avenir Next, Hiragino Sans, sans-serif";
      ctx.fillText(`追撃護衛 ${activeChasers}隻`, 308, 102);
    }

    const meterX = 24;
    const meterY = canvas.height - 126;
    const meterW = 248;
    const meterH = 86;
    ctx.fillStyle = "rgba(2, 10, 16, 0.72)";
    ctx.fillRect(meterX, meterY, meterW, meterH);
    ctx.strokeStyle = threatTone.stroke;
    ctx.strokeRect(meterX, meterY, meterW, meterH);
    ctx.fillStyle = "#9fc2cf";
    ctx.font = "12px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText("護衛脅威 / Escort Threat", meterX + 14, meterY + 20);
    ctx.fillStyle = "rgba(255,255,255,0.05)";
    ctx.fillRect(meterX + 14, meterY + 34, meterW - 28, 14);
    ctx.fillStyle = threatTone.fill;
    ctx.fillRect(meterX + 14, meterY + 34, (meterW - 28) * escortThreat, 14);
    ctx.strokeStyle = threatTone.stroke;
    ctx.strokeRect(meterX + 14, meterY + 34, meterW - 28, 14);
    ctx.fillStyle = threatTone.text;
    ctx.font = "bold 18px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText(
      escortThreat > 0.66 || activeChasers > 0
        ? "危険"
        : escortThreat > 0.33
          ? "警戒"
          : "低脅威",
      meterX + 14,
      meterY + 68
    );
    ctx.font = "12px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText(
      `護衛 ${escortContacts.length} / 追撃 ${activeChasers} / 被探知 ${Math.round(sub.detection * 100)}%`,
      meterX + 86,
      meterY + 68
    );
    const escortIntentSummary = [
      escortIntentCounts.wolfpack_detached ? `転進 ${escortIntentCounts.wolfpack_detached}` : null,
      escortIntentCounts[ESCORT_AI_INTENTS.attackRun] ? `攻撃走 ${escortIntentCounts[ESCORT_AI_INTENTS.attackRun]}` : null,
      escortIntentCounts[ESCORT_AI_INTENTS.lostContactSearch] ? `捜索 ${escortIntentCounts[ESCORT_AI_INTENTS.lostContactSearch]}` : null,
      escortIntentCounts[ESCORT_AI_INTENTS.investigateContact] ? `確認 ${escortIntentCounts[ESCORT_AI_INTENTS.investigateContact]}` : null,
      escortIntentCounts[ESCORT_AI_INTENTS.escortReturn] ? `復帰 ${escortIntentCounts[ESCORT_AI_INTENTS.escortReturn]}` : null,
      escortIntentCounts[ESCORT_AI_INTENTS.surfacePursuit] ? `水上追撃 ${escortIntentCounts[ESCORT_AI_INTENTS.surfacePursuit]}` : null
    ]
      .filter(Boolean)
      .join(" / ");
    ctx.fillStyle = "#8faeb9";
    ctx.font = "11px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText(truncate(escortIntentSummary || "復帰", 34), meterX + 14, meterY + 82);

    if (state.runtimeError) {
      ctx.fillStyle = "#ff8b78";
      ctx.font = "11px Avenir Next, Hiragino Sans, sans-serif";
      ctx.fillText(`描画警告: ${truncate(state.runtimeError, 26)}`, 34, 198);
    }

    ctx.fillStyle = "rgba(223, 250, 255, 0.82)";
    ctx.font = "12px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText("RENDER OK", canvas.width - 108, 34);
    ctx.restore();
    return;
  }

  ctx.fillStyle = "rgba(2, 11, 17, 0.42)";
  ctx.fillRect(16, 16, 340, 108);
  ctx.fillStyle = "#dffaff";
  ctx.font = "13px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillText(`Station: ${STATIONS[state.station].label}`, 30, 38);
  ctx.font = "24px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillText(`針路 ${Math.round(state.submarine.heading)}°`, 30, 68);
  ctx.font = "14px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillStyle = "#a5c1cd";
  ctx.fillText(
    `深度 ${Math.round(state.submarine.depth)}m / 速力 ${state.submarine.speed.toFixed(
      1
    )}kt / 被探知 ${Math.round(state.submarine.detection * 100)}%`,
    30,
    92
  );
  ctx.fillText(
    `接敵起点: ${state.phaseTrigger.label} / フェーズ ${phaseMeta(state.battlePhase).name}`,
    30,
    114
  );
  const activeChasers = state.contacts.filter(
    (contact) => contact.hostile && !contact.destroyed && (contact.chaseModeTimer || 0) > 0
  ).length;
  if (activeChasers > 0) {
    ctx.fillStyle = "#ffb29d";
    ctx.fillText(`追撃護衛 ${activeChasers} 隻`, 30, 136);
  }
  if (state.runtimeError) {
    ctx.fillStyle = "#ff8b78";
    ctx.fillText(`描画警告: ${state.runtimeError}`, 30, activeChasers > 0 ? 158 : 138);
  }

  ctx.fillStyle = "rgba(223, 250, 255, 0.82)";
  ctx.font = "12px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillText("RENDER OK", canvas.width - 108, 34);
}

function drawNavigationShipMarker(x, y, heading, color, size = 10) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(toRadians(heading));
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(size, 0);
  ctx.lineTo(-size * 0.72, -size * 0.5);
  ctx.lineTo(-size * 0.4, 0);
  ctx.lineTo(-size * 0.72, size * 0.5);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function navigationPlotContacts() {
  return state.contacts
    .filter((contact) => {
      if (contact.destroyed) return false;
      const observed = state.observedContacts.get(contact.id);
      return (
        contact.detected ||
        contact.sonarDetected ||
        (observed?.bearingLog?.length || 0) > 0
      );
    })
    .map((contact) => {
      const observed = state.observedContacts.get(contact.id);
      const latest = observed?.bearingLog?.[observed.bearingLog.length - 1] || null;
      return {
        contact,
        x: latest?.contactX ?? contact.x,
        y: latest?.contactY ?? contact.y,
        heading: observed?.estimatedHeading ?? contact.heading,
        type: observed?.suspectedType ?? contact.type,
        focused: contact.id === state.contactTactical.focusContactId
      };
    });
}

function drawNavigationMainPlot() {
  const width = canvas.width;
  const height = canvas.height;
  const prediction = navigationPlotPrediction();
  const plotContacts = navigationPlotContacts();
  const rangeSeeds = [2200, 1600];
  for (const entry of plotContacts) {
    rangeSeeds.push(Math.abs(entry.x - state.submarine.x) / 0.42);
    rangeSeeds.push(Math.abs(entry.y - state.submarine.y) / 0.38);
  }
  if (prediction) {
    rangeSeeds.push(Math.abs(prediction.contact.x - state.submarine.x) / 0.42);
    rangeSeeds.push(Math.abs(prediction.contact.y - state.submarine.y) / 0.38);
    rangeSeeds.push(Math.abs(prediction.targetEnd.x - state.submarine.x) / 0.42);
    rangeSeeds.push(Math.abs(prediction.targetEnd.y - state.submarine.y) / 0.38);
    rangeSeeds.push(Math.abs(prediction.ownEnd.x - state.submarine.x) / 0.42);
    rangeSeeds.push(Math.abs(prediction.ownEnd.y - state.submarine.y) / 0.38);
    if (prediction.interceptPoint) {
      rangeSeeds.push(Math.abs(prediction.interceptPoint.x - state.submarine.x) / 0.42);
      rangeSeeds.push(Math.abs(prediction.interceptPoint.y - state.submarine.y) / 0.38);
    }
  }
  const NAV_PLOT_RANGE_X = Math.max(2200, Math.min(5200, ...rangeSeeds));
  const NAV_PLOT_RANGE_Y = Math.max(1600, Math.min(3800, ...rangeSeeds));
  const navPoint = (x, y) => ({
    x: width / 2 + ((x - state.submarine.x) / NAV_PLOT_RANGE_X) * (width * 0.42),
    y: height / 2 + ((y - state.submarine.y) / NAV_PLOT_RANGE_Y) * (height * 0.38)
  });
  drawSceneBackground();

  ctx.save();
  ctx.strokeStyle = "rgba(141, 219, 237, 0.12)";
  ctx.lineWidth = 1;
  for (let gx = 40; gx < width; gx += 90) {
    ctx.beginPath();
    ctx.moveTo(gx, 0);
    ctx.lineTo(gx, height);
    ctx.stroke();
  }
  for (let gy = 34; gy < height; gy += 70) {
    ctx.beginPath();
    ctx.moveTo(0, gy);
    ctx.lineTo(width, gy);
    ctx.stroke();
  }

  const subPoint = { x: width / 2, y: height / 2 };

  if (state.submarine.trail.length > 1) {
    ctx.save();
    ctx.strokeStyle = "rgba(141, 219, 237, 0.55)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    state.submarine.trail.forEach((entry, index) => {
      const point = navPoint(entry.x, entry.y);
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.stroke();
    ctx.restore();
  }

  ctx.strokeStyle = "rgba(141, 219, 237, 0.24)";
  ctx.beginPath();
  ctx.arc(subPoint.x, subPoint.y, 34, 0, Math.PI * 2);
  ctx.stroke();

  for (const entry of plotContacts) {
    const { contact } = entry;
    const point = navPoint(entry.x, entry.y);
    if (point.x < -80 || point.x > width + 80 || point.y < -80 || point.y > height + 80) continue;
    if (contact.trail?.length > 1) {
      ctx.save();
      ctx.strokeStyle =
        contact.id === prediction?.contact?.id
          ? "rgba(255, 214, 124, 0.48)"
          : contact.type === "escort"
            ? "rgba(255, 135, 113, 0.32)"
            : "rgba(155, 217, 165, 0.3)";
      ctx.lineWidth = contact.id === prediction?.contact?.id ? 2.2 : 1.4;
      ctx.beginPath();
      contact.trail.forEach((entry, index) => {
        const trailPoint = navPoint(entry.x, entry.y);
        if (index === 0) {
          ctx.moveTo(trailPoint.x, trailPoint.y);
        } else {
          ctx.lineTo(trailPoint.x, trailPoint.y);
        }
      });
      ctx.stroke();
      ctx.restore();
    }
    drawNavigationShipMarker(
      point.x,
      point.y,
      entry.heading,
      contact.id === prediction?.contact?.id
        ? "#fff1c9"
        : entry.type === "escort"
          ? "#ff8771"
          : entry.type === "flagship"
            ? "#ffd57c"
            : "#9bd9a5",
      contact.id === prediction?.contact?.id ? 10 : 7
    );
    if (contact.id === prediction?.contact?.id) {
      ctx.strokeStyle = "rgba(255, 241, 201, 0.54)";
      ctx.beginPath();
      ctx.arc(point.x, point.y, 18, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  drawNavigationShipMarker(subPoint.x, subPoint.y, state.submarine.heading, "#dffaff", 11);
  ctx.font = "bold 14px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillText("U-Boat", subPoint.x + 12, subPoint.y - 12);

  if (prediction) {
    const targetStart = navPoint(prediction.contact.x, prediction.contact.y);
    const targetEnd = navPoint(prediction.targetEnd.x, prediction.targetEnd.y);
    const ownEnd = navPoint(prediction.ownEnd.x, prediction.ownEnd.y);

    ctx.setLineDash([12, 8]);
    ctx.strokeStyle = "rgba(255, 214, 124, 0.92)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(targetStart.x, targetStart.y);
    ctx.lineTo(targetEnd.x, targetEnd.y);
    ctx.stroke();

    ctx.strokeStyle = "rgba(124, 232, 166, 0.94)";
    ctx.beginPath();
    ctx.moveTo(subPoint.x, subPoint.y);
    ctx.lineTo(ownEnd.x, ownEnd.y);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#ffeec4";
    ctx.font = "13px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText(
      `敵予測進路 ${formatHeading(prediction.targetHeading)} / ${prediction.targetSpeed.toFixed(1)}kt`,
      targetEnd.x + 10,
      targetEnd.y - 10
    );
    ctx.fillStyle = "#dffff0";
    ctx.fillText(
      `自艦提案 ${formatHeading(prediction.ownHeading)} / ${prediction.ownSpeed.toFixed(1)}kt`,
      ownEnd.x + 10,
      ownEnd.y + 18
    );

    if (prediction.interceptPoint) {
      const hit = navPoint(prediction.interceptPoint.x, prediction.interceptPoint.y);
      ctx.strokeStyle = "#ff8b78";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(hit.x - 10, hit.y - 10);
      ctx.lineTo(hit.x + 10, hit.y + 10);
      ctx.moveTo(hit.x + 10, hit.y - 10);
      ctx.lineTo(hit.x - 10, hit.y + 10);
      ctx.stroke();
      ctx.fillStyle = "#ffd9d1";
      ctx.fillText("雷撃予定点", hit.x + 14, hit.y - 12);
    }
  }

  ctx.fillStyle = "rgba(2, 11, 17, 0.46)";
  ctx.fillRect(18, 16, 448, 104);
  ctx.fillStyle = "#dffaff";
  ctx.font = "13px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillText("Station: 航海長席 / Navigation Plot", 32, 40);
  ctx.font = "22px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillText(`自艦 針路 ${Math.round(state.submarine.heading)}°`, 32, 70);
  ctx.font = "12px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillStyle = "#9ec1cd";
  ctx.fillText(`表示縮尺 ±${Math.round(NAV_PLOT_RANGE_X)}m / sonar接触 ${plotContacts.length}`, 32, 92);
  const advice = navigationInterceptAdvice();
  ctx.font = "14px Avenir Next, Hiragino Sans, sans-serif";
  ctx.fillStyle = "#a5c1cd";
  ctx.fillText(
    advice.heading !== null
      ? `具申 針路 ${formatHeading(advice.heading)} / 速力 ${advice.speed.toFixed(1)}kt`
      : "有効接触なし",
    32,
    112
  );
  ctx.fillText(`縮尺 ±${NAV_PLOT_RANGE_X}m / ${NAV_PLOT_RANGE_Y}m`, width - 236, 40);
  ctx.restore();
}

function theatrePlotMeta() {
  if (state.station === "captain") {
    return {
      label: "Theatre Plot",
      note: "艦長用。自艦、護衛圏、船団位置、離脱海域を俯瞰。"
    };
  }
  if (state.station === "sonar") {
    return {
      label: "Acoustic Plot",
      note: "ソナー用。受動聴音の接触方位と最終観測位置を整理。"
    };
  }
  if (state.station === "torpedo") {
    return {
      label: "Attack Plot",
      note: "雷撃用。標的、護衛圏、想定魚雷コースを俯瞰。"
    };
  }
  if (state.station === "navigation") {
    return {
      label: "Navigation Plot",
      note: "航海長用。敵予測進路、自艦提案針路、雷撃予定点を俯瞰。"
    };
  }
  return {
    label: "Theatre Plot",
    note: "広域状況図。"
  };
}

function navigationPlotPrediction() {
  const focusContact = state.contactTactical.focusContactId
    ? state.contacts.find((contact) => contact.id === state.contactTactical.focusContactId && !contact.destroyed) || null
    : null;
  if (!focusContact) return null;

  const advice = navigationInterceptAdvice();
  const observed = state.observedContacts.get(focusContact.id);
  const targetHeading = observed?.estimatedHeading ?? focusContact.heading;
  const targetSpeed = observed?.estimatedSpeed ?? focusContact.speed;
  const targetSeconds = 360;
  const ownSeconds = 420;

  const targetEnd = {
    x: clamp(
      focusContact.x + Math.cos(toRadians(targetHeading)) * knotsToWorldSpeed(targetSpeed) * targetSeconds,
      0,
      WORLD.width
    ),
    y: clamp(
      focusContact.y + Math.sin(toRadians(targetHeading)) * knotsToWorldSpeed(targetSpeed) * targetSeconds,
      0,
      WORLD.height
    )
  };

  const ownHeading = advice.heading ?? state.submarine.heading;
  const ownSpeed = advice.speed ?? Math.max(2, state.submarine.targetSpeed || state.submarine.speed);
  const ownEnd = advice.waypoint ?? {
    x: clamp(
      state.submarine.x + Math.cos(toRadians(ownHeading)) * knotsToWorldSpeed(ownSpeed) * ownSeconds,
      0,
      WORLD.width
    ),
    y: clamp(
      state.submarine.y + Math.sin(toRadians(ownHeading)) * knotsToWorldSpeed(ownSpeed) * ownSeconds,
      0,
      WORLD.height
    )
  };

  const preview = getTorpedoPreview();
  return {
    contact: focusContact,
    advice,
    targetHeading,
    targetSpeed,
    targetEnd,
    ownHeading,
    ownSpeed,
    ownEnd,
    interceptPoint: preview?.interceptPoint || null
  };
}

function theatrePoint(x, y, width, height, padding = 16) {
  return {
    x: padding + (x / WORLD.width) * (width - padding * 2),
    y: padding + (y / WORLD.height) * (height - padding * 2)
  };
}

function drawTheatrePlot() {
  if (!theatrePlotCanvas || !theatrePlotCtx || !theatrePlotCardNode) return;

  const show =
    state.station === "sonar" ||
    state.station === "torpedo";
  theatrePlotCardNode.style.display = show ? "" : "none";
  if (!show) return;
  theatrePlotCardNode.style.width = state.station === "captain" ? "220px" : "250px";

  const meta = theatrePlotMeta();
  if (theatrePlotLabelNode) theatrePlotLabelNode.textContent = meta.label;
  if (theatrePlotNoteNode) theatrePlotNoteNode.textContent = meta.note;

  const ctx2 = theatrePlotCtx;
  const width = theatrePlotCanvas.width;
  const height = theatrePlotCanvas.height;
  ctx2.clearRect(0, 0, width, height);
  ctx2.fillStyle = "#061a27";
  ctx2.fillRect(0, 0, width, height);

  ctx2.strokeStyle = "rgba(141, 219, 237, 0.12)";
  ctx2.lineWidth = 1;
  for (let gx = 16; gx < width; gx += 40) {
    ctx2.beginPath();
    ctx2.moveTo(gx, 0);
    ctx2.lineTo(gx, height);
    ctx2.stroke();
  }
  for (let gy = 16; gy < height; gy += 32) {
    ctx2.beginPath();
    ctx2.moveTo(0, gy);
    ctx2.lineTo(width, gy);
    ctx2.stroke();
  }

  const subPoint = theatrePoint(state.submarine.x, state.submarine.y, width, height);
  const escapePoint = theatrePoint(state.escapeZone.x, state.escapeZone.y, width, height);
  const escapeRadius = (state.escapeZone.radius / WORLD.width) * (width - 32);

  ctx2.strokeStyle = "rgba(141, 219, 237, 0.22)";
  ctx2.beginPath();
  ctx2.arc(escapePoint.x, escapePoint.y, escapeRadius, 0, Math.PI * 2);
  ctx2.stroke();

  ctx2.fillStyle = "#dffaff";
  ctx2.beginPath();
  ctx2.arc(subPoint.x, subPoint.y, 4, 0, Math.PI * 2);
  ctx2.fill();
  ctx2.fillStyle = "#dffaff";
  ctx2.font = "11px Avenir Next, Hiragino Sans, sans-serif";
  ctx2.fillText("U", subPoint.x + 8, subPoint.y - 8);

  if (state.station === "captain") {
    for (const contact of state.contacts) {
      if (contact.destroyed || !contact.detected) continue;
      const point = theatrePoint(contact.x, contact.y, width, height);
      ctx2.fillStyle =
        contact.type === "escort" ? "#ff8771" : contact.type === "flagship" ? "#ffd57c" : "#9bd9a5";
      ctx2.beginPath();
      ctx2.arc(point.x, point.y, contact.type === "escort" ? 4 : 3, 0, Math.PI * 2);
      ctx2.fill();
      if (contact.hostile) {
        ctx2.strokeStyle = "rgba(255, 135, 113, 0.18)";
        ctx2.beginPath();
        ctx2.arc(point.x, point.y, 12 + contact.alert * 12, 0, Math.PI * 2);
        ctx2.stroke();
      }
    }
  } else if (state.station === "sonar") {
    const lineRange = Math.max(width, height) * 1.4;
    let index = 1;
    for (const observed of state.observedContacts.values()) {
      const latest = observed.bearingLog[observed.bearingLog.length - 1];
      if (!latest) continue;
      const from = theatrePoint(latest.subX, latest.subY, width, height);
      const rad = toRadians(latest.bearing);
      ctx2.strokeStyle = "rgba(141, 219, 237, 0.62)";
      ctx2.setLineDash([5, 4]);
      ctx2.beginPath();
      ctx2.moveTo(from.x, from.y);
      ctx2.lineTo(from.x + Math.cos(rad) * lineRange, from.y + Math.sin(rad) * lineRange);
      ctx2.stroke();
      ctx2.setLineDash([]);
      ctx2.fillStyle = "#dffaff";
      ctx2.font = "10px Avenir Next, Hiragino Sans, sans-serif";
      ctx2.fillText(`S${index}`, from.x + Math.cos(rad) * 28, from.y + Math.sin(rad) * 28);
      if (latest.contactX !== undefined && latest.contactY !== undefined) {
        const guess = theatrePoint(latest.contactX, latest.contactY, width, height);
        ctx2.fillStyle = "rgba(141, 219, 237, 0.5)";
        ctx2.beginPath();
        ctx2.arc(guess.x, guess.y, 3, 0, Math.PI * 2);
        ctx2.fill();
      }
      index++;
    }
  } else if (state.station === "torpedo") {
    const preview = getTorpedoPreview();
    for (const contact of state.contacts) {
      if (contact.destroyed || !contact.detected) continue;
      const point = theatrePoint(contact.x, contact.y, width, height);
      ctx2.fillStyle =
        contact.id === state.torpedoSequence.selectedTargetId
          ? "#fff1c9"
          : contact.type === "escort"
            ? "#ff8771"
            : contact.type === "flagship"
              ? "#ffd57c"
              : "#9bd9a5";
      ctx2.beginPath();
      ctx2.arc(point.x, point.y, contact.id === state.torpedoSequence.selectedTargetId ? 5 : 3, 0, Math.PI * 2);
      ctx2.fill();
    }
    if (preview) {
      const start = theatrePoint(preview.start.x, preview.start.y, width, height);
      const end = theatrePoint(preview.end.x, preview.end.y, width, height);
      const hit = theatrePoint(preview.interceptPoint.x, preview.interceptPoint.y, width, height);
      ctx2.strokeStyle = state.torpedoSequence.tubeReady ? "#7ce8a6" : "#f7c87a";
      ctx2.setLineDash([8, 6]);
      ctx2.beginPath();
      ctx2.moveTo(start.x, start.y);
      ctx2.lineTo(end.x, end.y);
      ctx2.stroke();
      ctx2.setLineDash([]);
      ctx2.fillStyle = state.torpedoSequence.tubeReady ? "#7ce8a6" : "#f7c87a";
      ctx2.beginPath();
      ctx2.arc(hit.x, hit.y, 4, 0, Math.PI * 2);
      ctx2.fill();
    }
  } else if (state.station === "navigation") {
    const prediction = navigationPlotPrediction();
    for (const contact of state.contacts) {
      if (contact.destroyed || !contact.detected) continue;
      const point = theatrePoint(contact.x, contact.y, width, height);
      ctx2.fillStyle =
        contact.id === prediction?.contact?.id
          ? "#fff1c9"
          : contact.type === "escort"
            ? "#ff8771"
            : contact.type === "flagship"
              ? "#ffd57c"
              : "#9bd9a5";
      ctx2.beginPath();
      ctx2.arc(point.x, point.y, contact.id === prediction?.contact?.id ? 5 : 3, 0, Math.PI * 2);
      ctx2.fill();
    }

    if (prediction) {
      const targetStart = theatrePoint(prediction.contact.x, prediction.contact.y, width, height);
      const targetEnd = theatrePoint(prediction.targetEnd.x, prediction.targetEnd.y, width, height);
      const ownStart = theatrePoint(state.submarine.x, state.submarine.y, width, height);
      const ownEnd = theatrePoint(prediction.ownEnd.x, prediction.ownEnd.y, width, height);

      ctx2.setLineDash([10, 6]);
      ctx2.strokeStyle = "rgba(255, 214, 124, 0.9)";
      ctx2.lineWidth = 2;
      ctx2.beginPath();
      ctx2.moveTo(targetStart.x, targetStart.y);
      ctx2.lineTo(targetEnd.x, targetEnd.y);
      ctx2.stroke();

      ctx2.strokeStyle = "rgba(124, 232, 166, 0.92)";
      ctx2.beginPath();
      ctx2.moveTo(ownStart.x, ownStart.y);
      ctx2.lineTo(ownEnd.x, ownEnd.y);
      ctx2.stroke();
      ctx2.setLineDash([]);

      ctx2.fillStyle = "#ffeec4";
      ctx2.font = "11px Avenir Next, Hiragino Sans, sans-serif";
      ctx2.fillText(`敵予測 ${formatHeading(prediction.targetHeading)}`, targetEnd.x + 8, targetEnd.y - 8);
      ctx2.fillStyle = "#dffff0";
      ctx2.fillText(
        `自艦提案 ${formatHeading(prediction.ownHeading)} / ${prediction.ownSpeed.toFixed(1)}kt`,
        ownEnd.x + 8,
        ownEnd.y + 14
      );

      if (prediction.interceptPoint) {
        const hit = theatrePoint(prediction.interceptPoint.x, prediction.interceptPoint.y, width, height);
        ctx2.strokeStyle = "#ff8b78";
        ctx2.lineWidth = 2.2;
        ctx2.beginPath();
        ctx2.moveTo(hit.x - 7, hit.y - 7);
        ctx2.lineTo(hit.x + 7, hit.y + 7);
        ctx2.moveTo(hit.x + 7, hit.y - 7);
        ctx2.lineTo(hit.x - 7, hit.y + 7);
        ctx2.stroke();
        ctx2.fillStyle = "#ffd9d1";
        ctx2.fillText("雷撃予定点", hit.x + 10, hit.y - 10);
      }
    }
  }
}

function toggleDifficulty() {
  state.difficulty = state.difficulty === "easy" ? "historical" : "easy";
  if (difficultyToggleButton) {
    difficultyToggleButton.textContent = state.difficulty === "historical" ? "Historical" : "Easy";
    difficultyToggleButton.style.color = state.difficulty === "historical" ? "#f7c87a" : "#9bd9a5";
  }
  if (difficultyLabelNode) {
    difficultyLabelNode.textContent = state.difficulty === "historical" ? "Historical" : "Easy";
    difficultyLabelNode.style.color = state.difficulty === "historical" ? "#f7c87a" : "#9bd9a5";
  }
  const msg = state.difficulty === "historical"
    ? "Historicalモード: TDCで発射解を入力しないと発射不可。"
    : "Easyモード: TDCなしでも自動計算で発射可能。";
  setStatus(msg, "good");
}

function setTimeScale(value) {
  state.timeScale = value;
  updateButtons();
  setStatus(`時間倍率 ${value}x。`, "good");
}

function computeTDCSolution() {
  const tdc = state.tdc;
  if (tdc.bearing === null || tdc.speedKt === null || tdc.aob === null) {
    tdc.gyroAngle = null;
    tdc.absoluteFireBearing = null;
    tdc.valid = false;
    return;
  }
  const sinLead = (tdc.speedKt / TORPEDO_SPEED) * Math.sin(toRadians(tdc.aob));
  if (Math.abs(sinLead) > 1) {
    tdc.gyroAngle = null;
    tdc.absoluteFireBearing = null;
    tdc.valid = false;
    return;
  }
  const leadAngle = (Math.asin(sinLead) * 180) / Math.PI;
  const absoluteFireBearing = tdc.bearing + leadAngle;
  const gyroAngle = normalizeAngle(absoluteFireBearing - state.submarine.heading);
  tdc.gyroAngle = gyroAngle;
  tdc.absoluteFireBearing = absoluteFireBearing;
  tdc.valid =
    Math.abs(gyroAngle) <= TORPEDO_GYRO_LIMIT &&
    (tdc.range === null || tdc.range <= TORPEDO_MAX_RANGE);
}

function applySuggestedSpeed() {
  if (state.tdc.suggestedSpeedKt === null) {
    setStatus("速力推定値がまだありません。", "warning");
    return;
  }
  state.tdc.speedKt = state.tdc.suggestedSpeedKt;
  computeTDCSolution();
  updateTDCDisplay();
  setStatus(`推定速力 ${state.tdc.speedKt.toFixed(1)}kt を採用。`, "good");
}

function applySuggestedAob() {
  if (state.tdc.suggestedAob === null) {
    setStatus("AOB 推定値がまだありません。", "warning");
    return;
  }
  state.tdc.aob = state.tdc.suggestedAob;
  computeTDCSolution();
  updateTDCDisplay();
  setStatus(`推定 AOB ${formatSigned(Math.round(state.tdc.aob))}° を採用。`, "good");
}

function syncTDCBearing() {
  const selectedContact = state.torpedoSequence.selectedTargetId
    ? state.contacts.find(
        (contact) =>
          contact.id === state.torpedoSequence.selectedTargetId &&
          !contact.destroyed &&
          contact.detected
      ) || null
    : null;
  const binocularFocus =
    state.viewMode === "binocular"
      ? getPeriscopeVisuals().find((entry) => entry.id === state.periscopeControl.focusContactId) ?? null
      : null;
  const sonarEntry = state.sonarContacts[0];
  if (selectedContact) {
    state.tdc.bearing = bearing(state.submarine, selectedContact);
    state.tdc.targetId = selectedContact.id;
  } else if (binocularFocus) {
    state.tdc.bearing = bearing(state.submarine, binocularFocus);
    state.tdc.targetId = binocularFocus.id;
  } else if (sonarEntry) {
    state.tdc.bearing = bearing(state.submarine, sonarEntry.contact);
    state.tdc.targetId = sonarEntry.contact.id;
  } else {
    setStatus("ソナーまたは双眼鏡に有効な接触なし。", "warning");
    return;
  }
  computeTDCSolution();
  updateTDCDisplay();
  setStatus(
    `${selectedContact ? "選定標的" : binocularFocus ? "双眼鏡" : "ソナー"}から方位 ${Math.round(state.tdc.bearing)}° を同期。`,
    "good"
  );
}

function syncTDCRange() {
  let r = state.periscopeControl.lastMeasuredRange;
  const selectedTargetId = state.torpedoSequence.selectedTargetId || null;
  if (r === null && state.viewMode === "binocular") {
    const focus = getPeriscopeVisuals().find(
      (entry) => entry.id === state.periscopeControl.focusContactId
    ) ?? null;
    if (focus) {
      r = Math.round(focus.range);
      state.periscopeControl.lastMeasuredRange = r;
      const observed = getOrCreateObserved(focus.id);
      observed.lastRange = r;
    }
  }
  if (r === null) {
    setStatus(
      state.viewMode === "binocular"
        ? "双眼鏡で焦点目標を捕捉してから距離同期してください。"
        : "潜望鏡で距離測定を先に行ってください。",
      "warning"
    );
    return;
  }
  state.tdc.range = r;
  if (selectedTargetId) {
    state.tdc.targetId = selectedTargetId;
  }
  computeTDCSolution();
  updateTDCDisplay();
  setStatus(
    `${state.viewMode === "binocular" ? "双眼鏡" : "潜望鏡"}距離 ${r} m をTDCに設定。`,
    "good"
  );
}

function updateTDCEstimates() {
  const contact = getPreferredTorpedoContact();
  const tdc = state.tdc;
  tdc.suggestedSpeedKt = null;
  tdc.suggestedAob = null;
  tdc.estimateConfidence = 0;
  tdc.estimateNote = "潜望鏡観測ログが不足。";

  if (!contact) {
    updateTDCDisplay();
    return;
  }

  const observed = state.observedContacts.get(contact.id);
  const visualLog = (observed?.bearingLog || []).filter((entry) => entry.visual);

  if (visualLog.length >= 2) {
    const first = visualLog[Math.max(0, visualLog.length - 4)];
    const last = visualLog[visualLog.length - 1];
    const dt = Math.max(0.1, last.time - first.time);
    const moved = distance(
      { x: first.contactX, y: first.contactY },
      { x: last.contactX, y: last.contactY }
    );
    const speedKt = clamp((moved / dt) / WORLD_METERS_PER_SECOND_PER_KNOT, 0, 20);
    tdc.suggestedSpeedKt = +speedKt.toFixed(1);
    const binocularBoost = state.viewMode === "binocular" ? 0.18 : 0;
    tdc.estimateConfidence = clamp(dt / 12 + binocularBoost, 0.2, 1);
    tdc.estimateNote = `${
      state.viewMode === "binocular" ? "双眼鏡" : "潜望鏡"
    }追尾 ${dt.toFixed(0)} 秒。方位変化と見かけ移動から速力推定。`;
  }

  const losBearing = bearing(contact, state.submarine);
  const aob = normalizeAngle(contact.heading - (losBearing + 180));
  tdc.suggestedAob = Math.round(aob / 5) * 5;

  if (contact.visualDetected && tdc.suggestedSpeedKt !== null) {
    tdc.estimateNote += state.viewMode === "binocular"
      ? " 双眼鏡視界で艦影姿勢を補正。"
      : " 艦影の向きから AOB を補正。";
  } else if (contact.visualDetected) {
    tdc.estimateNote =
      state.viewMode === "binocular"
        ? "双眼鏡視認で AOB を推定。速度は追尾時間不足。"
        : "艦影の向きから AOB を推定。速度は観測時間不足。";
  } else {
    tdc.estimateNote = "視認不足。AOB は低信頼、速力は聴音接触依存。";
  }

  updateTDCDisplay();
}

function updateTDCDisplay() {
  const tdc = state.tdc;
  if (tdcBearingNode) tdcBearingNode.textContent = tdc.bearing !== null ? Math.round(tdc.bearing) : "---";
  if (tdcRangeNode) tdcRangeNode.textContent = tdc.range !== null ? tdc.range : "---";
  if (tdcSpeedNode) tdcSpeedNode.textContent = tdc.speedKt !== null ? tdc.speedKt.toFixed(1) : "---";
  if (tdcAobNode) tdcAobNode.textContent = tdc.aob !== null ? formatSigned(Math.round(tdc.aob)) : "---";
  if (tdcSpeedSuggestNode) {
    tdcSpeedSuggestNode.textContent =
      tdc.suggestedSpeedKt !== null ? tdc.suggestedSpeedKt.toFixed(1) : "---";
  }
  if (tdcAobSuggestNode) {
    tdcAobSuggestNode.textContent =
      tdc.suggestedAob !== null ? formatSigned(Math.round(tdc.suggestedAob)) : "---";
  }
  if (tdcEstimateNoteNode) {
    tdcEstimateNoteNode.textContent = tdc.estimateNote;
  }
  if (tdcGyroNode) tdcGyroNode.textContent = tdc.gyroAngle !== null ? formatSigned(Math.round(tdc.gyroAngle)) : "---";
  if (tdcValidNode) {
    tdcValidNode.textContent = tdc.valid ? "発射可" : tdc.gyroAngle !== null ? "範囲外" : "---";
    tdcValidNode.style.color = tdc.valid ? "#9bd9a5" : tdc.gyroAngle !== null ? "#ff8771" : "#a5c1cd";
  }
}

function updatePeriscopeControl() {
  const ctrl = state.periscopeControl;
  const visuals = getPeriscopeVisuals();

  if (visuals.length === 0) {
    ctrl.focusContactId = null;
  } else if (!ctrl.focusContactId || !visuals.find((c) => c.id === ctrl.focusContactId)) {
    ctrl.focusContactId = visuals[0].id;
  }

  if (ctrl.focusContactId !== ctrl.lastFocusContactId) {
    const observed = ctrl.focusContactId ? state.observedContacts.get(ctrl.focusContactId) : null;
    const suggestedType = observed?.suspectedType ?? "";
    ctrl.suspectedType = suggestedType || null;
    if (typeSelectNode) typeSelectNode.value = suggestedType;
    ctrl.lastFocusContactId = ctrl.focusContactId;
  }

  const isPeriscope = state.station === "captain" && state.viewMode === "periscope";
  const isBinocular = state.station === "captain" && state.viewMode === "binocular";
  const isVisible = isPeriscope || isBinocular;
  centerColumnNode?.classList.toggle("periscope-layout", isVisible);
  if (periscopeMeasureCard) {
    periscopeMeasureCard.style.display = isVisible ? "" : "none";
  }
  if (opticsCardLabelNode) {
    opticsCardLabelNode.textContent = isBinocular ? "Binocular Range Guide" : "Periscope Measurement";
  }
  if (periscopeTypeRowNode) {
    periscopeTypeRowNode.style.display = isPeriscope ? "" : "none";
  }
  if (periscopeReticleRowNode) {
    periscopeReticleRowNode.style.display = isPeriscope ? "" : "none";
  }
  if (periscopeReticleControlsNode) {
    periscopeReticleControlsNode.style.display = isPeriscope ? "" : "none";
  }
  if (periscopeRangeControlsNode) {
    periscopeRangeControlsNode.style.display = isPeriscope ? "" : "none";
  }

  if (isVisible) {
    const focus = visuals.find((c) => c.id === ctrl.focusContactId) ?? null;
    ctrl.apparentReading = focus ? focus.apparentReading : null;
    if (periscopeContactNode) {
      const aspectNote = focus
        ? (() => {
            const { aspect } = silhouetteAspectMeta(focus);
            return ` / 艦角 ${formatSigned(Math.round(aspect))}°`;
          })()
        : "";
      periscopeContactNode.textContent = focus
        ? `焦点目標: ${contactLabel(focus)} / ${Math.round(focus.range)}m 推定${aspectNote}`
        : "焦点目標: 視野内に艦なし";
    }
    if (periscopeGuideNode) {
      periscopeGuideNode.textContent = isBinocular
        ? focus
          ? `Tab または艦影クリックで目標切替。倍率 ${opticsZoomLabel()}。双眼鏡では焦点目標の概算距離をそのまま TDC 距離同期に使える。`
          : "双眼鏡で目標を捕捉すると、ここに概算距離ガイドを表示する。"
        : focus
          ? `黄色の上線をマスト頂部へ、中央水平線を喫水線へ合わせる。倍率 ${opticsZoomLabel()}。幅が広いほど横腹、細いほど船首・船尾向き。`
          : "視界内の艦影を潜望鏡で捉えると、ここに測距ガイドを表示する。";
    }
    if (periscopeBearingNode) {
      periscopeBearingNode.textContent = isBinocular
        ? formatHeading(normalizeAngle(state.submarine.heading + ctrl.bearingOffset))
        : formatHeading(currentPeriscopeBearing());
    }
    if (periscopeRelativeNode) {
      periscopeRelativeNode.textContent = `${formatSigned(ctrl.bearingOffset)}`;
    }
    if (periscopeApparentNode) {
      periscopeApparentNode.textContent = focus
        ? isBinocular
          ? `${Math.round(focus.range)} m 概算`
          : `${focus.apparentReading.toFixed(1)} 目盛`
        : isBinocular
          ? "-- m"
          : "-- 目盛";
    }
    if (periscopeAlignmentNode) {
      const delta = focus ? Math.abs(ctrl.reticleReading - focus.apparentReading) : null;
      periscopeAlignmentNode.textContent = isBinocular
        ? focus
          ? "簡易同期可"
          : "未捕捉"
        : delta === null
          ? "未照準"
          : delta <= 0.3
            ? "一致"
            : delta <= 0.8
              ? "微修正"
              : "ずれ大";
    }
    if (reticleReadingNode) {
      reticleReadingNode.textContent = ctrl.reticleReading.toFixed(1);
    }
    if (periscopeRangeResultNode) {
      periscopeRangeResultNode.textContent = isBinocular
        ? focus
          ? `概算距離: ${Math.round(focus.range)} m / TDC距離同期で反映`
          : "概算距離: 未捕捉"
        : periscopeRangeResultNode.textContent;
    }
  }
}

function getPeriscopeVisuals() {
  if (state.viewMode !== "periscope" && state.viewMode !== "binocular") return [];
  const sub = state.submarine;
  const stage = currentStage();
  const periscopeView = state.viewMode === "periscope";
  const zoom = currentOpticsZoom();
  const baseFOV = periscopeView ? (state.navigationTactical.periscopeStable ? 38 : 32) : 62;
  const FOV = baseFOV / zoom;
  const opticsBearing = periscopeView
    ? currentPeriscopeBearing()
    : normalizeAngle(sub.heading + state.periscopeControl.bearingOffset);
  const cy = canvas.height / 2;

  return state.contacts
    .filter((contact) => !contact.destroyed && contact.visualDetected)
    .map((contact) => {
      const range = distance(sub, contact);
      const relB = normalizeAngle(bearing(sub, contact) - opticsBearing);
      const mastH = MAST_HEIGHT[contact.type] || 12;
      const minPixelHeight = stage.id === "training_shot" ? 8 : state.viewMode === "binocular" ? 6 : 5;
      const pixelHeight = clamp(MAST_K * mastH * zoom / range, minPixelHeight, 170 * 1.5 * zoom);
      return {
        ...contact,
        range,
        relB,
        pixelHeight,
        apparentReading: pixelHeight / RETICLE_TICK_SPACING,
        screenX: canvas.width / 2 + (relB / FOV) * 170,
        screenWaterlineY: cy,
        screenTopY: cy - pixelHeight
      };
    })
    .filter((entry) => Math.abs(entry.relB) <= FOV)
    .sort((a, b) => a.relB - b.relB);
}

function cyclePeriscopeTarget(direction = 1) {
  if (state.viewMode !== "periscope" && state.viewMode !== "binocular") return;
  const visuals = getPeriscopeVisuals();
  if (visuals.length === 0) {
    setStatus("視野内に測距可能な目標なし。", "warning");
    return;
  }
  const currentIndex = visuals.findIndex((entry) => entry.id === state.periscopeControl.focusContactId);
  const nextIndex =
    currentIndex === -1
      ? 0
      : (currentIndex + direction + visuals.length) % visuals.length;
  state.periscopeControl.focusContactId = visuals[nextIndex].id;
  updateHud();
}

function turnPeriscope(delta) {
  if (state.viewMode !== "periscope" && state.viewMode !== "binocular") {
    setStatus("潜望鏡または双眼鏡モードでのみ回転できる。", "warning");
    return;
  }
  const limit = state.viewMode === "binocular" ? 120 : 90;
  state.periscopeControl.bearingOffset = clamp(
    normalizeAngle(state.periscopeControl.bearingOffset + delta),
    -limit,
    limit
  );
  updateHud();
}

function measurePeriscopeRange() {
  const ctrl = state.periscopeControl;
  const suspectedType = typeSelectNode?.value || null;
  const mastH = suspectedType ? (MAST_HEIGHT[suspectedType] ?? null) : null;
  const focus = getPeriscopeVisuals().find((entry) => entry.id === ctrl.focusContactId) ?? null;

  if (!mastH) {
    if (periscopeRangeResultNode) periscopeRangeResultNode.textContent = "艦種を選択してください。";
    return;
  }
  if (!focus) {
    if (periscopeRangeResultNode) periscopeRangeResultNode.textContent = "焦点目標が視野内にありません。";
    return;
  }
  if (ctrl.reticleReading <= 0) {
    if (periscopeRangeResultNode) periscopeRangeResultNode.textContent = "読取目盛が 0 です。";
    return;
  }

  const apparentReading = Math.max(0.5, focus.apparentReading);
  const alignmentError = ctrl.reticleReading - apparentReading;
  const observedReading = apparentReading + clamp(alignmentError * 0.35, -0.8, 0.8);
  const measured = Math.round(MAST_K * mastH / (observedReading * RETICLE_TICK_SPACING));
  ctrl.lastMeasuredRange = measured;
  ctrl.suspectedType = suspectedType;

  if (ctrl.focusContactId) {
    const observed = getOrCreateObserved(ctrl.focusContactId);
    observed.lastRange = measured;
    observed.identified = true;
    observed.suspectedType = suspectedType;
    observed.identifyConfidence = 1;
  }

  if (periscopeRangeResultNode) {
    const quality =
      Math.abs(alignmentError) <= 0.3
        ? "一致"
        : Math.abs(alignmentError) <= 0.8
          ? "近似"
          : "誤差大";
    periscopeRangeResultNode.textContent = `測定距離: ${measured} m / 読取 ${quality}`;
  }
  addLog(
    `潜望鏡測定: ${contactLabel({ type: suspectedType })} 距離 ${measured} m。読取 ${ctrl.reticleReading.toFixed(
      1
    )} / 実視 ${apparentReading.toFixed(1)}。`
  );
  setStatus(`距離 ${measured} m を測定。必要なら TDC距離同期 を実行。`, "good");
}

function drawOpticsOverlay() {
  if (state.station !== "captain" || state.viewMode === "normal") {
    return;
  }

  const palette = lightVisualPalette();
  ctx.save();
  ctx.strokeStyle = palette.opticsLine;
  ctx.fillStyle = palette.opticsMask;
  ctx.lineWidth = 2;

  if (state.viewMode === "periscope") {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const R = 170;
    const ctrl = state.periscopeControl;
    ctrl.renderTargets = [];

    // 暗幕 + 円形くり抜き
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";

    // 枠 + 十字線
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx - R, cy);
    ctx.lineTo(cx + R, cy);
    ctx.moveTo(cx, cy - R);
    ctx.lineTo(cx, cy + R);
    ctx.stroke();

    // レティクル目盛り
    ctx.strokeStyle = palette.opticsTick;
    ctx.lineWidth = 1;
    for (let i = 1; i <= 8; i++) {
      const tickLen = i % 4 === 0 ? 14 : i % 2 === 0 ? 8 : 5;
      for (const sign of [1, -1]) {
        const tx = cx + sign * i * RETICLE_TICK_SPACING;
        if (Math.abs(sign * i * RETICLE_TICK_SPACING) >= R) continue;
        ctx.beginPath();
        ctx.moveTo(tx, cy - tickLen);
        ctx.lineTo(tx, cy + tickLen);
        ctx.stroke();
      }
      if (i % 4 === 0) {
        ctx.fillStyle = palette.opticsTick;
        ctx.font = "9px monospace";
        for (const sign of [1, -1]) {
          const tx = cx + sign * i * RETICLE_TICK_SPACING;
          if (Math.abs(sign * i * RETICLE_TICK_SPACING) < R) {
            ctx.fillText(String(i), tx - 4, cy + 24);
          }
        }
      }
    }

    // 艦影シルエット（円内クリップ）
    drawOpticsSeascape(() => {
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();
    });
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();
    const opticsBearing = currentPeriscopeBearing();
    const visuals = getPeriscopeVisuals();
    for (const contact of visuals) {
      const px = contact.screenX;
      const focused = state.periscopeControl.focusContactId === contact.id;
      const silhouette = drawPeriscopeContactSilhouette(contact, px, cy, focused);
      ctrl.renderTargets.push({
        id: contact.id,
        left: px - silhouette.hullW / 2 - 12,
        right: px + silhouette.hullW / 2 + 12,
        top: cy - silhouette.pixH - 12,
        bottom: cy + 16
      });
    }
    ctx.restore();

    // 読取値インジケータ（黄色測距ガイド）
    const guideY = cy - ctrl.reticleReading * RETICLE_TICK_SPACING;
    if (cy - guideY < R) {
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 130, 0.82)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx - 38, guideY);
      ctx.lineTo(cx + 38, guideY);
      ctx.moveTo(cx - 12, cy);
      ctx.lineTo(cx + 12, cy);
      ctx.moveTo(cx, guideY);
      ctx.lineTo(cx, cy);
      ctx.stroke();
      ctx.fillStyle = "rgba(255, 255, 130, 0.88)";
      ctx.font = "10px monospace";
      ctx.fillText(`${ctrl.reticleReading.toFixed(1)} div`, cx + 46, guideY + 4);
      ctx.restore();
    }

    ctx.fillStyle = palette.opticsText;
    ctx.font = "12px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText(
      `Periscope ${formatHeading(opticsBearing)} / Relative ${formatSigned(
        state.periscopeControl.bearingOffset
      )}° / ${opticsZoomLabel()}`,
      cx - 132,
      cy + R + 28
    );
  } else {
    const ctrl = state.periscopeControl;
    ctrl.renderTargets = [];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(canvas.width / 2 - 110, canvas.height / 2, 115, 0, Math.PI * 2);
    ctx.arc(canvas.width / 2 + 110, canvas.height / 2, 115, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.beginPath();
    ctx.arc(canvas.width / 2 - 110, canvas.height / 2, 115, 0, Math.PI * 2);
    ctx.arc(canvas.width / 2 + 110, canvas.height / 2, 115, 0, Math.PI * 2);
    ctx.stroke();

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const binocularBearing = normalizeAngle(state.submarine.heading + state.periscopeControl.bearingOffset);
    const visuals = getPeriscopeVisuals();
    drawOpticsSeascape(() => {
      ctx.beginPath();
      ctx.arc(canvas.width / 2 - 110, canvas.height / 2, 115, 0, Math.PI * 2);
      ctx.arc(canvas.width / 2 + 110, canvas.height / 2, 115, 0, Math.PI * 2);
      ctx.clip();
    });
    ctx.save();
    ctx.beginPath();
    ctx.arc(canvas.width / 2 - 110, canvas.height / 2, 115, 0, Math.PI * 2);
    ctx.arc(canvas.width / 2 + 110, canvas.height / 2, 115, 0, Math.PI * 2);
    ctx.clip();
    for (const contact of visuals) {
      const px = contact.screenX;
      const focused = state.periscopeControl.focusContactId === contact.id;
      const silhouette = drawPeriscopeContactSilhouette(contact, px, cy, focused);
      ctrl.renderTargets.push({
        id: contact.id,
        left: px - silhouette.hullW / 2 - 12,
        right: px + silhouette.hullW / 2 + 12,
        top: cy - silhouette.pixH - 12,
        bottom: cy + 16
      });
    }
    ctx.restore();
    ctx.fillStyle = palette.opticsText;
    ctx.font = "12px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText(
      `Binocular ${formatHeading(binocularBearing)} / Relative ${formatSigned(
        state.periscopeControl.bearingOffset
      )}° / ${opticsZoomLabel()}`,
      cx - 132,
      cy + 150
    );
  }

  ctx.restore();
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (state.station === "navigation") {
    drawNavigationMainPlot();
    return;
  }
  drawSceneBackground();
  const visibleWorldWidth = canvas.width / TACTICAL_PLOT_SCALE;
  const visibleWorldHeight = canvas.height / TACTICAL_PLOT_SCALE;
  const captainView = state.station === "captain";
  const lookAheadDistance = clamp(
    state.submarine.speed * (captainView ? 96 : 42),
    0,
    captainView ? 620 : 260
  );
  const lookAheadX = Math.cos(toRadians(state.submarine.heading)) * lookAheadDistance;
  const lookAheadY = Math.sin(toRadians(state.submarine.heading)) * lookAheadDistance;
  const anchorX = captainView ? 0.28 : 0.44;
  const anchorY = captainView ? 0.62 : 0.52;
  const targetCamera = {
    x: clamp(
      state.submarine.x + lookAheadX - visibleWorldWidth * anchorX,
      0,
      WORLD.width - visibleWorldWidth
    ),
    y: clamp(
      state.submarine.y + lookAheadY - visibleWorldHeight * anchorY,
      0,
      WORLD.height - visibleWorldHeight
    )
  };
  const cameraFollow = captainView
    ? 0.18 + clamp(state.submarine.speed / 9, 0, 1) * 0.08
    : 0.12;
  state.plotCamera.x += (targetCamera.x - state.plotCamera.x) * cameraFollow;
  state.plotCamera.y += (targetCamera.y - state.plotCamera.y) * cameraFollow;
  const camera = {
    x: state.plotCamera.x,
    y: state.plotCamera.y
  };

  drawGrid(camera);
  drawEscape(camera);
  drawContacts(camera);
  drawBearingPlot(camera);
  drawTorpedoPreview(camera);
  drawTorpedoes(camera);
  drawDepthCharges(camera);
  drawSubmarine(camera);
  drawOpticsOverlay();
  drawOverlay();
  drawTheatrePlot();
}

function loop(timestamp) {
  try {
    const deltaTime = Math.min((timestamp - state.lastFrame) / 1000 || 0, 0.033) * state.timeScale;
    state.lastFrame = timestamp;
    update(deltaTime);
    render();
    state.runtimeError = null;
  } catch (error) {
    state.runtimeError = error instanceof Error ? error.message : String(error);
    setStatus(`描画エラー: ${state.runtimeError}`, "bad");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#04141d";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff8b78";
    ctx.font = "bold 20px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText("Rendering Error", 36, 54);
    ctx.font = "14px Avenir Next, Hiragino Sans, sans-serif";
    ctx.fillText(state.runtimeError, 36, 82);
  }
  requestAnimationFrame(loop);
}

function startFallbackLoop() {
  if (fallbackLoopHandle) return;
  fallbackLoopHandle = window.setInterval(() => {
    const now =
      typeof performance !== "undefined" && typeof performance.now === "function"
        ? performance.now()
        : Date.now();
    if (now - state.lastFrame < 250) return;

    try {
      update(0.016);
      render();
    } catch (error) {
      state.runtimeError = error instanceof Error ? error.message : String(error);
      setStatus(`描画エラー: ${state.runtimeError}`, "bad");
    }
  }, 250);
}

for (const button of speedButtons) {
  button.addEventListener("click", () => commandSpeed(Number(button.dataset.speed)));
}

for (const button of depthButtons) {
  button.addEventListener("click", () => commandDepth(Number(button.dataset.depth)));
}

for (const button of turnButtons) {
  button.addEventListener("click", () => commandTurn(Number(button.dataset.turn)));
}

for (const button of stationTabs) {
  button.addEventListener("click", () => setStation(button.dataset.station));
}

for (const button of holdCourseButtons) {
  button.addEventListener("click", holdCourse);
}
navHoldCourseButton?.addEventListener("click", holdCourse);
pingButton?.addEventListener("click", activePing);
captainPingButton?.addEventListener("click", activePing);
silentButton?.addEventListener("click", toggleSilent);
captainSilentButton?.addEventListener("click", toggleSilent);
torpedoSelectButton?.addEventListener("click", selectTorpedoTarget);
torpedoInputButton?.addEventListener("click", enterTorpedoData);
torpedoPrepareButton?.addEventListener("click", prepareTorpedoTube);
fireButton?.addEventListener("click", fireTorpedo);
captainFireButton?.addEventListener("click", fireTorpedo);
captainIntentApproachButton?.addEventListener("click", () => issueCaptainIntent("approach"));
captainIntentEvadeButton?.addEventListener("click", () => issueCaptainIntent("evade"));
captainIntentPeriscopeButton?.addEventListener("click", () => issueCaptainIntent("periscope"));
captainIntentSurfaceButton?.addEventListener("click", () => issueCaptainIntent("surface"));
captainIntentDeepButton?.addEventListener("click", () => issueCaptainIntent("deep"));
captainIntentQuietStarboardButton?.addEventListener("click", () => issueCaptainIntent("quiet_starboard"));
captainIntentEgressButton?.addEventListener("click", () => issueCaptainIntent("egress"));
captainPeriscopeButton?.addEventListener("click", () => setViewMode("periscope"));
captainBinocularButton?.addEventListener("click", () => setViewMode("binocular"));
captainNormalViewButton?.addEventListener("click", () => {
  if (!state.alarmDive.active && state.alarmDive.resolved === "success") {
    if (standDownToPatrol("manual")) {
      return;
    }
  }
  setViewMode("normal");
});
surfaceAttackDiveButton?.addEventListener("click", () => resolvePostAttackDecision("dive"));
surfaceAttackEgressButton?.addEventListener("click", () => resolvePostAttackDecision("surface_egress"));
periscopeLeftButton?.addEventListener("click", () => turnPeriscope(-10));
periscopeCenterButton?.addEventListener("click", () => {
  state.periscopeControl.bearingOffset = 0;
  updateHud();
});
periscopeRightButton?.addEventListener("click", () => turnPeriscope(10));
opticsZoomWideButton?.addEventListener("click", () => setOpticsZoom("wide"));
opticsZoomStandardButton?.addEventListener("click", () => setOpticsZoom("standard"));
opticsZoomZoomButton?.addEventListener("click", () => setOpticsZoom("zoom"));
reticleDecButton?.addEventListener("click", () => {
  state.periscopeControl.reticleReading = Math.max(0.5, +(state.periscopeControl.reticleReading - 0.5).toFixed(1));
  updatePeriscopeControl();
});
reticleIncButton?.addEventListener("click", () => {
  state.periscopeControl.reticleReading = Math.min(8.0, +(state.periscopeControl.reticleReading + 0.5).toFixed(1));
  updatePeriscopeControl();
});
reticleResetButton?.addEventListener("click", () => {
  state.periscopeControl.reticleReading = 3.0;
  if (periscopeRangeResultNode) periscopeRangeResultNode.textContent = "距離: 未測定";
  updatePeriscopeControl();
});
rangeMeasureButton?.addEventListener("click", measurePeriscopeRange);
typeSelectNode?.addEventListener("change", () => {
  state.periscopeControl.suspectedType = typeSelectNode.value || null;
});
tdcSyncBearingButton?.addEventListener("click", syncTDCBearing);
tdcSyncRangeButton?.addEventListener("click", syncTDCRange);
tdcApplySpeedButton?.addEventListener("click", applySuggestedSpeed);
tdcApplyAobButton?.addEventListener("click", applySuggestedAob);
tdcSpeedDecButton?.addEventListener("click", () => {
  state.tdc.speedKt = Math.max(0, +((state.tdc.speedKt - 0.5).toFixed(1)));
  computeTDCSolution();
  updateTDCDisplay();
});
tdcSpeedIncButton?.addEventListener("click", () => {
  state.tdc.speedKt = Math.min(20, +((state.tdc.speedKt + 0.5).toFixed(1)));
  computeTDCSolution();
  updateTDCDisplay();
});
tdcAobDecButton?.addEventListener("click", () => {
  state.tdc.aob = normalizeAngle(state.tdc.aob - 5);
  computeTDCSolution();
  updateTDCDisplay();
});
tdcAobIncButton?.addEventListener("click", () => {
  state.tdc.aob = normalizeAngle(state.tdc.aob + 5);
  computeTDCSolution();
  updateTDCDisplay();
});
difficultyToggleButton?.addEventListener("click", toggleDifficulty);
for (const button of timeScaleButtons) {
  button.addEventListener("click", () => setTimeScale(Number(button.dataset.timescale)));
}
captainAlarmButton?.addEventListener("click", () => startAlarmDive("captain_order", false));
audioToggleButton?.addEventListener("click", toggleAudio);
voiceToggleButton?.addEventListener("click", toggleVoiceEnabled);
voiceModeToggleButton?.addEventListener("click", toggleVoiceMode);
restartButton?.addEventListener("click", handleRestartAction);
campaignResupplyButton?.addEventListener("click", () => {
  if (!state.campaign.readyForResupply) {
    setStatus("補給は任務終了後に実施できます。", "warning");
    return;
  }
  returnToBaseAndResupply();
});
campaignContinueButton?.addEventListener("click", () => {
  if (!state.stageState.cleared) return;
  continuePatrolToNextStage();
});
campaignReturnButton?.addEventListener("click", () => {
  if (!state.stageState.cleared) return;
  returnToBaseAndResupply(nextStageIndex());
});
campaignSaveButton?.addEventListener("click", () => {
  saveCampaignSnapshot("manual");
  updateButtons();
});
campaignResumeButton?.addEventListener("click", () => {
  if (loadCampaignSnapshot("manual")) {
    updateButtons();
  }
});
campaignNewButton?.addEventListener("click", startNewCampaign);
stageSelectNode?.addEventListener("change", () => setStageIndex(Number(stageSelectNode.value)));
canvas?.addEventListener("click", (event) => {
  if (state.station !== "captain" || state.viewMode !== "periscope") return;
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;
  const hit = state.periscopeControl.renderTargets.find(
    (target) => x >= target.left && x <= target.right && y >= target.top && y <= target.bottom
  );
  if (!hit) return;
  state.periscopeControl.focusContactId = hit.id;
  updateHud();
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Digit1") commandSpeed(0);
  if (event.code === "Digit2") commandSpeed(3);
  if (event.code === "Digit3") commandSpeed(6);
  if (event.code === "Digit4") commandSpeed(9);
  if (event.code === "KeyQ") commandTurn(-25);
  if (event.code === "KeyE") commandTurn(25);
  if (event.code === "KeyW") commandDepth(20);
  if (event.code === "KeyS") commandDepth(140);
  if (event.code === "KeyP") activePing();
  if (event.code === "KeyR") toggleSilent();
  if (event.code === "KeyV") setViewMode("normal");
  if (event.code === "KeyA") turnPeriscope(-10);
  if (event.code === "KeyD") turnPeriscope(10);
  if (event.code === "Tab" && (state.viewMode === "periscope" || state.viewMode === "binocular")) {
    event.preventDefault();
    cyclePeriscopeTarget(event.shiftKey ? -1 : 1);
  }
  if (event.code === "KeyC") setStation("captain");
  if (event.code === "KeyO") setStation("sonar");
  if (event.code === "KeyT") setStation("torpedo");
  if (event.code === "KeyN") setStation("navigation");
  if (event.code === "Space") {
    event.preventDefault();
    fireTorpedo();
  }
});

try {
  drawFatalError("JavaScript loaded. Initializing renderer...");
  ensureVoiceAssignments();
  syncSavePresence();
  if (!loadCampaignSnapshot("auto")) {
    resetGame();
  }
  startFallbackLoop();
  requestAnimationFrame(loop);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  state.runtimeError = message;
  drawFatalError(message);
  if (statusNode) {
    setStatus(`起動エラー: ${message}`, "bad");
  }
}
