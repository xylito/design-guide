import { DESIGN_LANGUAGES, THEME_CATEGORIES, ALL_30_REPOSITORIES, ORDERED_THEME_IDS } from './data.js';
import { DESIGN_MD_MAP } from './design-md-map.js';
import { THEME_KO } from './theme-ko.js';

export const I18N = {
  ko: {
    langBtn: 'EN',
    langTitle: '영문으로 변경 (단축키: L)',
    heroBadge: '스프린트 v4.12 • 자율 에이전트 커널 가속 활성화',
    heroPrimary: '프로덕션 배포하기',
    heroSecondary: '단축키 모음 ⌘K',
    panelPill: '실시간 커널 시스템 지표',
    panelStatus: '실시간 동기화됨',
    labelLatency: '응답 지연시간',
    subLatency: 'P99 목표치: < 20ms',
    labelUptime: '가동률',
    subUptime: '최근 365일 무중단',
    labelVelocity: '에이전트 속도',
    subVelocity: '하드웨어 가속 구동',
    stripToggle: '자율 코드 정제 엔진 활성화',
    btnStrip: '부하 이벤트 시뮬레이션',
    featuresTag: '시스템 아키텍처',
    featuresTitle: '타협 없는 몰입을 위한 엔지니어링',
    featuresDesc: '모든 곡률, 그림자, 타이포그래피 간격은 인지 부하를 제로로 만들기 위해 수학적으로 조율되었습니다.',
    componentsTag: 'DESIGN TOKEN LAB',
    componentsTitle: '마이크로 인터랙션 & 상태',
    componentsDesc: '직접 버튼과 컴포넌트를 클릭하며 각 디자인 언어가 규정하는 물리 법칙과 피드백을 경험해보세요.',
    cardButtonTitle: '버튼 계층 구조 (Button Hierarchy)',
    cardButtonDesc: 'Primary, Secondary, Ghost, Destructive 액션 스타일',
    demoBtnPrimary: 'Primary Action',
    demoBtnSecondary: 'Secondary Action',
    demoBtnGhost: 'Ghost Action',
    demoBtnDestructive: 'Destructive',
    cardInputTitle: '입력 필드 및 상태 (Input & Toggles)',
    cardInputDesc: '포커스 링, 플레이스홀더, 토글 스위치 반응성',
    demoInputPlaceholder: '커맨드 입력 또는 검색...',
    chipActive: '● 활성 상태 (Active)',
    chipPending: '◐ 처리 중 (Processing)',
    chipNeutral: 'Beta v2.4',
    ecosystemTag: 'FRONTIER ECOSYSTEM LEADERBOARD',
    ecosystemTitle: '62대 프론트엔드 & 모바일 디자인 시스템',
    searchPlaceholder: '레포 이름, 키워드, 카테고리 검색 (예: ios, spotify, dracula, duolingo, toss, bento)...',
    repoCountUnit: '개 표시 중',
    noResult: '검색 결과가 없습니다.',
    noResultSub: "다른 검색어나 '전체보기' 필터를 선택해보세요.",
    btnApply: '스타일 적용',
    btnInspect: '규칙 & 프롬프트',
    categories: {
      all: '전체보기 (62)',
      editorial: '📖 1. Editorial & Print (도면·인쇄물)',
      saas: '💼 2. Modern SaaS & FinTech (모던 스탠다드)',
      dark_dev: '⚡ 3. Dark & Developer (개발자·터미널)',
      hardware: '🎛️ 4. Hardware & Industrial (로봇·계기판)',
      expressive: '🎨 5. Expressive & Retro (질감·서브컬처)'
    },
    dockTitle: 'STYLE PICKER',
    dockKey: '1-7키',
    dockRepos: '62 Repos',
    dockShuffle: 'Shuffle',
    dockPrompt: 'Prompt',
    manifestoTag: 'AI 에이전트 불변의 설계 규칙',
    manifestoWhy: '이 디자인 언어가 AI 에이전트에 강력한 이유',
    manifestoPhilTitle: '핵심 디자인 철학 및 원칙',
    manifestoAntiTitle: '배제할 안티 패턴 (AI Slop 방지)',
    manifestoCta: '전체 DESIGN.md 확인 및 프롬프트 복사',
    footerCopy: 'AI 엔지니어링 팀을 위한 최신 프론트엔드 디자인 시스템 쇼케이스 • Antigravity Agent Showcase',
    footerBtnInspector: 'DESIGN.md 프롬프트 복사',
    footerBtnTop: '맨 위로 가기 ↑',
    modalSwatchesTitle: 'Color Tokens (클릭 시 HEX 복사)',
    modalRulesTitle: 'Typography & Layout Rules',
    modalPromptTitle: 'Claude Code / Cursor / Windsurf / Gemini 주입용 DESIGN.md',
    modalPromptHint: '프로젝트 루트의 DESIGN.md 또는 .cursorrules에 바로 붙여넣으세요',
    copyPromptBtn: '프롬프트 전체 복사',
    copiedToast: '클립보드에 복사되었습니다!',
    themeAppliedToast: '스타일 적용',
    tutorialBtn: '가이드',
    tutorialBtnTitle: '튜토리얼 가이드 (단축키: ?)',
    tutorialPill: 'ONBOARDING GUIDE',
    tutorialSkip: '건너뛰기 [ESC]',
    tutorialPrev: '◀ 이전',
    tutorialNext: '다음 ▶',
    tutorialStart: '시작하기 🚀',
    tutSlide1Title: '62대 프론티어 디자인 시스템 탐색',
    tutSlide1Desc: 'Linear, Toss, Apple iOS HIG, Neobrutalism, 8-Bit NES 등 62개 최신 프론트엔드 & 모바일 디자인 언어가 완벽하게 준비되어 있습니다.',
    tutBox1Title: '카드 클릭 즉시 적용',
    tutBox1Sub: '그리드의 카드를 누르면 전체 화면에 해당 스타일이 즉각 주입됩니다.',
    tutBox2Title: '좌우 방향키 [←] [→]',
    tutBox2Sub: '키보드 방향키 또는 하단 독(Dock)으로 62개 테마를 자유롭게 순회하세요.',
    tutBox3Title: '단축키 [1~7] 퀵 체인지',
    tutBox3Sub: 'Linear(1), Toss(2), iOS(3), Spotify(4), Duolingo(5), Dracula(6), Win98(7)',
    tutSlide2Title: '실시간 한/영 언어 전환 (L 단축키)',
    tutSlide2Desc: '디자인 토큰, 안티패턴, 아키텍처 철학부터 버튼 인터랙션까지 모든 콘텐츠가 한국어와 영어로 실시간 매핑됩니다.',
    tutLangInstruction: '지금 키보드의 [L] 키를 누르거나 아래 버튼을 클릭하여 언어를 변경해보세요!',
    tutLangTestBtn: '언어 전환 테스트 (현재: 한국어)',
    tutTipText: '💡 언제 어디서나 L 키를 누르면 페이지 전체 언어가 즉시 변경됩니다.',
    tutSlide3Title: 'AI 에이전트 주입용 DESIGN.md & 컴포넌트',
    tutSlide3Desc: 'Cursor, Claude Code, Gemini 등의 AI 코딩 어시스턴트에 프롬프트로 바로 주입할 수 있는 표준 디자인 가이드라인을 제공합니다.',
    tutBox4Title: 'DESIGN.md 원클릭 다운로드',
    tutBox4Sub: "히어로 섹션의 '.md 다운로드' 버튼으로 프로젝트 루트에 바로 넣을 수 있는 문서를 다운로드하세요.",
    tutBox5Title: '실제 스타일 컴포넌트 키트',
    tutBox5Sub: "'스타일 컴포넌트' 버튼을 눌러 버튼, 폼 인풋, 토글 노브의 실제 디자인을 직접 조작해보세요."
  },
  en: {
    langBtn: '한국어',
    langTitle: 'Switch to Korean (Key: L)',
    heroBadge: 'RELEASE v4.12 • KERNEL ACCELERATED',
    heroPrimary: 'Deploy to Production',
    heroSecondary: 'Keyboard Shortcuts ⌘K',
    panelPill: 'Live Kernel System Metrics',
    panelStatus: 'Live Synced',
    labelLatency: 'Latency P99',
    subLatency: 'Target SLA: < 20ms',
    labelUptime: 'Availability',
    subUptime: '365-Day Zero Downtime',
    labelVelocity: 'Agent Velocity',
    subVelocity: 'Hardware Accelerated',
    stripToggle: 'Autonomous Refinement Engine',
    btnStrip: 'Simulate Load Spike',
    featuresTag: 'SYSTEM ARCHITECTURE',
    featuresTitle: 'Engineered for Uncompromising Focus',
    featuresDesc: 'Every curve, shadow, and line interval has been engineered to eliminate cognitive friction.',
    componentsTag: 'DESIGN TOKEN LAB',
    componentsTitle: 'Micro-Interactions & States',
    componentsDesc: 'Interact directly with buttons and components to experience the physics and feedback prescribed by each design system.',
    cardButtonTitle: 'Button Hierarchy & States',
    cardButtonDesc: 'Primary, Secondary, Ghost, and Destructive action styling',
    demoBtnPrimary: 'Primary Action',
    demoBtnSecondary: 'Secondary Action',
    demoBtnGhost: 'Ghost Action',
    demoBtnDestructive: 'Destructive',
    cardInputTitle: 'Input Fields & Indicators',
    cardInputDesc: 'Focus rings, placeholder ergonomics, and live status pills',
    demoInputPlaceholder: 'Type a command or search...',
    chipActive: '● Active Status',
    chipPending: '◐ Processing',
    chipNeutral: 'Beta v2.4',
    ecosystemTag: 'FRONTIER ECOSYSTEM LEADERBOARD',
    ecosystemTitle: '62 Frontier Frontend & Mobile Design Systems',
    searchPlaceholder: 'Search repos, keywords, categories (e.g., ios, spotify, dracula, duolingo, toss, bento)...',
    repoCountUnit: 'displayed',
    noResult: 'No repositories found.',
    noResultSub: "Try another query or reset the filter to 'All Systems'.",
    btnApply: 'Apply Style',
    btnInspect: 'Rules & Prompt',
    categories: {
      all: 'All Systems (62)',
      editorial: '📖 1. Editorial & Print',
      saas: '💼 2. Modern SaaS & FinTech',
      dark_dev: '⚡ 3. Dark & Developer',
      hardware: '🎛️ 4. Hardware & Industrial',
      expressive: '🎨 5. Expressive & Retro'
    },
    dockTitle: 'STYLE PICKER',
    dockKey: 'Keys 1-7',
    dockRepos: '62 Repos',
    dockShuffle: 'Shuffle',
    dockPrompt: 'Prompt',
    manifestoTag: 'IMMUTABLE RULES FOR AI AGENTS',
    manifestoWhy: 'Why This System Works for AI Agents',
    manifestoPhilTitle: 'Core Architectural Principles',
    manifestoAntiTitle: 'Strict Anti-Patterns (Prevent AI Slop)',
    manifestoCta: 'Inspect Full DESIGN.md & Copy Prompt',
    footerCopy: 'Modern frontend design systems showcase engineered for AI coding agents • Antigravity Agent Showcase',
    footerBtnInspector: 'Copy DESIGN.md Prompt',
    footerBtnTop: 'Back to Top ↑',
    modalSwatchesTitle: 'Color Tokens (Click to copy HEX)',
    modalRulesTitle: 'Typography & Layout Rules',
    modalPromptTitle: 'DESIGN.md for Claude Code, Cursor & Windsurf',
    modalPromptHint: 'Paste into project root DESIGN.md or .cursorrules directly',
    copyPromptBtn: 'Copy Full DESIGN.md',
    copiedToast: 'Copied to clipboard!',
    themeAppliedToast: 'Theme applied',
    tutorialBtn: 'Guide',
    tutorialBtnTitle: 'Tutorial Guide (Key: ?)',
    tutorialPill: 'ONBOARDING GUIDE',
    tutorialSkip: 'Skip [ESC]',
    tutorialPrev: '◀ Prev',
    tutorialNext: 'Next ▶',
    tutorialStart: 'Get Started 🚀',
    tutSlide1Title: 'Explore 62 Frontier Design Systems',
    tutSlide1Desc: '62 frontier frontend and mobile design languages—including Linear, Toss, Apple iOS HIG, Neobrutalism, and 8-Bit NES—fully interactive.',
    tutBox1Title: 'Instant Theme Injection',
    tutBox1Sub: 'Click anywhere on any card in the catalog to instantly apply that design language.',
    tutBox2Title: 'Arrow Keys [←] [→]',
    tutBox2Sub: 'Cycle through all 62 themes effortlessly using keyboard arrows or the floating dock.',
    tutBox3Title: 'Quick Keys [1–7]',
    tutBox3Sub: 'Linear(1), Toss(2), iOS(3), Spotify(4), Duolingo(5), Dracula(6), Win98(7)',
    tutSlide2Title: 'Instant Dual-Language Switching (Key: L)',
    tutSlide2Desc: 'All design tokens, anti-patterns, architectural philosophies, and interactive components are fully localized in Korean and English.',
    tutLangInstruction: 'Press the [L] key on your keyboard or click the button below to toggle language right now!',
    tutLangTestBtn: 'Toggle Language Test (Current: English)',
    tutTipText: '💡 Press L anywhere, anytime to toggle the entire site between Korean and English.',
    tutSlide3Title: 'DESIGN.md for AI Agents & Component Kit',
    tutSlide3Desc: 'Production-ready standardized rules crafted to inject directly into AI coding assistants like Cursor, Claude Code, and Gemini.',
    tutBox4Title: 'One-Click DESIGN.md Download',
    tutBox4Sub: "Click the '.md Download' button in the hero section to save a clean DESIGN.md file for your project.",
    tutBox5Title: 'Live Interactive Component Kit',
    tutBox5Sub: 'Click the "Style Components" button to test actual buttons, inputs, and toggles tailored to each theme.'
  }
};

class DesignShowcaseApp {
  constructor() {
    this.currentLang = 'ko'; // Default language is Korean
    const allThemeKeys = Object.keys(DESIGN_LANGUAGES);
    const randomThemeKey = allThemeKeys[Math.floor(Math.random() * allThemeKeys.length)] || 'linear';
    this.currentThemeId = randomThemeKey;
    this.isShowcaseExpanded = false;
    this.orderedThemeIds = ORDERED_THEME_IDS;
    this.currentCategory = 'all';
    this.currentSearchQuery = '';
    this.repositories = ALL_30_REPOSITORIES;
    this.currentTutSlide = 0;
    this.totalTutSlides = 3;

    this.initElements();
    this.populateThemeSelectors();
    this.bindEvents();
    this.applyTheme(this.currentThemeId, false);
    this.renderEcosystemCards();
    this.applyLanguage(this.currentLang);

    // Auto-open tutorial for new visitors
    setTimeout(() => {
      try {
        const seen = localStorage.getItem('design_guide_tutorial_viewed');
        if (!seen) {
          this.openTutorial();
        }
      } catch (e) {
        this.openTutorial();
      }
    }, 300);
  }

  t(key) {
    return I18N[this.currentLang]?.[key] || I18N['en']?.[key] || key;
  }

  initElements() {
    // Body & Themes
    this.body = document.body;

    // Floating Language Toggle & Tutorial Button
    this.btnLangToggle = document.getElementById('btn-lang-toggle');
    this.btnTutorialTrigger = document.getElementById('btn-tutorial-trigger');
    this.tutorialBtnText = document.getElementById('tutorial-btn-text');
    this.btnTopDownload = document.getElementById('btn-top-download');
    this.btnModalDownloadPrompt = document.getElementById('btn-modal-download-prompt');
    this.langIndicatorText = document.getElementById('lang-indicator-text');

    // Onboarding Tutorial Overlay Elements
    this.tutorialOverlay = document.getElementById('tutorial-overlay');
    this.btnTutorialClose = document.getElementById('btn-tutorial-close');
    this.btnTutorialSkip = document.getElementById('btn-tutorial-skip');
    this.btnTutPrev = document.getElementById('btn-tut-prev');
    this.btnTutNext = document.getElementById('btn-tut-next');
    this.tutCarouselTrack = document.getElementById('tutorial-carousel-track');
    this.tutCarouselViewport = document.getElementById('tut-carousel-viewport');
    this.tutStepCounter = document.getElementById('tutorial-step-counter');
    this.tutDots = document.querySelectorAll('.tut-dot');
    this.tutBtnLangTest = document.getElementById('tut-btn-lang-test');
    this.tutNextText = document.getElementById('tut-next-text');

    // Header elements (legacy/optional)
    this.logoText = document.getElementById('logo-text');
    this.logoMark = document.getElementById('logo-mark');
    this.headerThemeLabel = document.getElementById('header-theme-label');
    this.headerCtaText = document.getElementById('header-cta-text');
    this.headerThemeSelect = document.getElementById('header-theme-select');

    // Hero elements
    this.heroBadgeText = document.getElementById('hero-badge-text');
    this.heroTitle = document.getElementById('hero-title');
    this.heroSubtitle = document.getElementById('hero-subtitle');
    this.heroPrimaryText = document.getElementById('hero-primary-text');
    this.heroSecondaryText = document.getElementById('hero-secondary-text');
    this.btnHeroPrimary = document.getElementById('btn-hero-primary');
    this.btnHeroSecondary = document.getElementById('btn-hero-secondary');
    this.btnHeroDownload = document.getElementById('btn-hero-download');
    this.componentsModal = document.getElementById('components-modal');
    this.btnCloseCompModal = document.getElementById('btn-close-comp-modal');
    this.compModalTitle = document.getElementById('comp-modal-title');
    this.compModalThemeBadge = document.getElementById('comp-modal-theme-badge');

    // Hero Showcase elements
    this.panelPillText = document.getElementById('panel-title-pill');
    this.valLatency = document.getElementById('val-latency');
    this.valUptime = document.getElementById('val-uptime');
    this.valVelocity = document.getElementById('val-velocity');
    this.btnStripPulse = document.getElementById('btn-strip-pulse');

    // Features Section
    this.featuresTag = document.getElementById('features-tag');
    this.featuresTitle = document.getElementById('features-title');
    this.featuresDesc = document.getElementById('features-desc');
    this.featuresGrid = document.getElementById('features-grid');

    // Interactive Component Lab Section
    this.componentsTag = document.getElementById('components-tag');
    this.componentsTitle = document.getElementById('components-title');
    this.componentsDesc = document.getElementById('components-desc');
    this.cardButtonTitle = document.getElementById('card-button-title');
    this.cardButtonDesc = document.getElementById('card-button-desc');
    this.demoBtnPrimary = document.getElementById('demo-btn-primary');
    this.demoBtnSecondary = document.getElementById('demo-btn-secondary');
    this.demoBtnGhost = document.getElementById('demo-btn-ghost');
    this.demoBtnDestructive = document.getElementById('demo-btn-destructive');
    this.cardInputTitle = document.getElementById('card-input-title');
    this.cardInputDesc = document.getElementById('card-input-desc');
    this.demoTextInput = document.getElementById('demo-text-input');
    this.chipActive = document.getElementById('chip-active');
    this.chipPending = document.getElementById('chip-pending');
    this.chipNeutral = document.getElementById('chip-neutral');

    // Repositories Ecosystem Section
    this.ecosystemTag = document.getElementById('ecosystem-tag');
    this.ecosystemTitle = document.getElementById('ecosystem-title');
    this.ecosystemGrid = document.getElementById('ecosystem-grid');
    this.repoSearchInput = document.getElementById('repo-search-input');
    this.repoCountBadge = document.getElementById('repo-count-badge');
    this.categoryFilterBtns = document.querySelectorAll('.cat-filter-btn');

    // Manifesto Section
    this.manifestoTitle = document.getElementById('manifesto-title');
    this.manifestoPhilosophyList = document.getElementById('manifesto-philosophy-list');
    this.manifestoAntipatternList = document.getElementById('manifesto-antipattern-list');

    // Footer
    this.footerBrand = document.getElementById('footer-brand');

    // Dock buttons & Selector
    this.dockButtons = document.querySelectorAll('.dock-btn');
    this.dockThemeSelect = document.getElementById('dock-theme-select');
    this.btnShuffle = document.getElementById('btn-shuffle-theme');
    this.btnDockEcosystem = document.getElementById('btn-dock-ecosystem');
    this.btnOpenInspector = document.getElementById('btn-open-inspector');
    this.btnOpenInspectorFooter = document.getElementById('btn-open-inspector-footer');
    this.footerBtnInspector = document.getElementById('footer-btn-inspector');
    this.btnThemeBadge = document.getElementById('btn-theme-badge');

    // Inspector Modal elements
    this.modal = document.getElementById('inspector-modal');
    this.btnCloseModal = document.getElementById('btn-close-modal');
    this.modalTitle = document.getElementById('modal-title');
    this.modalThemeBadge = document.getElementById('modal-theme-badge');
    this.modalColorSwatches = document.getElementById('modal-color-swatches');
    this.modalInfoBox = document.getElementById('modal-info-box');
    this.modalPromptContent = document.getElementById('modal-prompt-content');
    this.btnCopyPrompt = document.getElementById('btn-copy-prompt');

    // Arrow Navigation Elements
    this.btnHeaderPrev = document.getElementById('btn-header-prev');
    this.btnHeaderNext = document.getElementById('btn-header-next');
    this.btnDockPrev = document.getElementById('btn-dock-prev');
    this.btnDockNext = document.getElementById('btn-dock-next');
    this.btnSidePrev = document.getElementById('btn-side-prev');
    this.btnSideNext = document.getElementById('btn-side-next');

    // Toast
    this.toast = document.getElementById('toast');
    this.toastMessage = document.getElementById('toast-message');
    this.toastTimer = null;
  }

  applyLanguage(lang) {
    this.currentLang = lang;
    document.documentElement.lang = lang;

    
    const topDownloadText = document.getElementById('top-download-text');
    if (topDownloadText) {
      topDownloadText.textContent = this.currentLang === 'ko' ? 'DESIGN.md 다운로드' : 'Download DESIGN.md';
    }
    const modalDlBtnText = document.getElementById('modal-dl-btn-text');
    if (modalDlBtnText) {
      modalDlBtnText.textContent = this.currentLang === 'ko' ? '.md 다운로드' : 'Download .md';
    }

    
    const heroPrimaryText = document.getElementById('hero-primary-text');
    if (heroPrimaryText) heroPrimaryText.textContent = this.currentLang === 'ko' ? '스타일 컴포넌트 모음' : 'Style Components Kit';
    const heroSecondaryText = document.getElementById('hero-secondary-text');
    if (heroSecondaryText) heroSecondaryText.textContent = this.currentLang === 'ko' ? '가이드라인 ↗' : 'Guidelines ↗';
    const heroDownloadText = document.getElementById('hero-download-text');
    if (heroDownloadText) heroDownloadText.textContent = this.currentLang === 'ko' ? 'DESIGN.md 다운로드' : 'Download DESIGN.md';

    if (this.langIndicatorText) {
      this.langIndicatorText.textContent = this.t('langBtn');
    }
    if (this.btnLangToggle) {
      this.btnLangToggle.title = this.t('langTitle');
    }

    // Hero Widget & Metrics
    const statusText = document.getElementById('panel-status-text');
    if (statusText) statusText.textContent = this.t('panelStatus');

    const labelLatency = document.getElementById('label-latency');
    if (labelLatency) labelLatency.textContent = this.t('labelLatency');

    const subLatency = document.getElementById('sub-latency');
    if (subLatency) subLatency.textContent = this.t('subLatency');

    const labelUptime = document.getElementById('label-uptime');
    if (labelUptime) labelUptime.textContent = this.t('labelUptime');

    const subUptime = document.getElementById('sub-uptime');
    if (subUptime) subUptime.textContent = this.t('subUptime');

    const labelVelocity = document.getElementById('label-velocity');
    if (labelVelocity) labelVelocity.textContent = this.t('labelVelocity');

    const subVelocity = document.getElementById('sub-velocity');
    if (subVelocity) subVelocity.textContent = this.t('subVelocity');

    const stripToggleLabel = document.getElementById('strip-toggle-label');
    if (stripToggleLabel) stripToggleLabel.textContent = this.t('stripToggle');

    const btnStripText = document.getElementById('btn-strip-text');
    if (btnStripText) btnStripText.textContent = this.t('btnStrip');

    // Features Section
    if (this.featuresTag) this.featuresTag.textContent = this.t('featuresTag');
    if (this.featuresTitle) this.featuresTitle.textContent = this.t('featuresTitle');
    if (this.featuresDesc) this.featuresDesc.textContent = this.t('featuresDesc');

    // Component Lab
    if (this.componentsTag) this.componentsTag.textContent = this.t('componentsTag');
    if (this.componentsTitle) this.componentsTitle.textContent = this.t('componentsTitle');
    if (this.componentsDesc) this.componentsDesc.textContent = this.t('componentsDesc');
    if (this.cardButtonTitle) this.cardButtonTitle.textContent = this.t('cardButtonTitle');
    if (this.cardButtonDesc) this.cardButtonDesc.textContent = this.t('cardButtonDesc');
    if (this.demoBtnPrimary) this.demoBtnPrimary.textContent = this.t('demoBtnPrimary');
    if (this.demoBtnSecondary) this.demoBtnSecondary.textContent = this.t('demoBtnSecondary');
    if (this.demoBtnGhost) this.demoBtnGhost.textContent = this.t('demoBtnGhost');
    if (this.demoBtnDestructive) this.demoBtnDestructive.textContent = this.t('demoBtnDestructive');
    if (this.cardInputTitle) this.cardInputTitle.textContent = this.t('cardInputTitle');
    if (this.cardInputDesc) this.cardInputDesc.textContent = this.t('cardInputDesc');
    if (this.demoTextInput) this.demoTextInput.placeholder = this.t('demoInputPlaceholder');
    if (this.chipActive) this.chipActive.textContent = this.t('chipActive');
    if (this.chipPending) this.chipPending.textContent = this.t('chipPending');
    if (this.chipNeutral) this.chipNeutral.textContent = this.t('chipNeutral');

    // Manifesto Section Titles
    const manifestoTag = document.getElementById('manifesto-tag');
    if (manifestoTag) manifestoTag.textContent = this.t('manifestoTag');

    const manifestoCol1 = document.getElementById('manifesto-col1-title');
    if (manifestoCol1) manifestoCol1.textContent = this.t('manifestoPhilTitle');

    const manifestoCol2 = document.getElementById('manifesto-col2-title');
    if (manifestoCol2) manifestoCol2.textContent = this.t('manifestoAntiTitle');

    const manifestoCta = document.getElementById('manifesto-cta-text');
    if (manifestoCta) manifestoCta.textContent = this.t('manifestoCta');

    // Footer
    const footerCopy = document.getElementById('footer-copy');
    if (footerCopy) footerCopy.textContent = this.t('footerCopy');
    const footerBtnInspector = document.getElementById('footer-btn-inspector');
    if (footerBtnInspector) footerBtnInspector.textContent = this.t('footerBtnInspector');
    const footerBtnTop = document.getElementById('footer-btn-top');
    if (footerBtnTop) footerBtnTop.textContent = this.t('footerBtnTop');

    // Ecosystem Section
    if (this.ecosystemTag) this.ecosystemTag.textContent = this.t('ecosystemTag');
    if (this.ecosystemTitle) this.ecosystemTitle.textContent = this.t('ecosystemTitle');
    if (this.repoSearchInput) this.repoSearchInput.placeholder = this.t('searchPlaceholder');

    // Category Filter Buttons
    this.categoryFilterBtns.forEach(btn => {
      const cat = btn.dataset.category;
      if (cat && I18N[this.currentLang].categories[cat]) {
        btn.textContent = I18N[this.currentLang].categories[cat];
      }
    });

    // Re-apply active theme in current language (updates Hero & Features & Manifesto)
    this.applyTheme(this.currentThemeId, false);

    // Re-render cards with updated button texts and previews
    this.renderEcosystemCards();

    // Tutorial Modal Elements Localization
    if (this.tutorialBtnText) this.tutorialBtnText.textContent = this.t('tutorialBtn');
    if (this.btnTutorialTrigger) this.btnTutorialTrigger.title = this.t('tutorialBtnTitle');
    const tutPill = document.getElementById('tut-pill-text');
    if (tutPill) tutPill.textContent = this.t('tutorialPill');
    if (this.btnTutorialSkip) this.btnTutorialSkip.textContent = this.t('tutorialSkip');
    const tutPrevText = document.getElementById('tut-prev-text');
    if (tutPrevText) tutPrevText.textContent = this.t('tutorialPrev');
    if (this.tutNextText) {
      this.tutNextText.textContent = this.currentTutSlide === (this.totalTutSlides - 1)
        ? this.t('tutorialStart')
        : this.t('tutorialNext');
    }
    const tutS1Title = document.getElementById('tut-slide1-title');
    if (tutS1Title) tutS1Title.textContent = this.t('tutSlide1Title');
    const tutS1Desc = document.getElementById('tut-slide1-desc');
    if (tutS1Desc) tutS1Desc.textContent = this.t('tutSlide1Desc');
    const tutB1Title = document.getElementById('tut-b1-title');
    if (tutB1Title) tutB1Title.textContent = this.t('tutBox1Title');
    const tutB1Sub = document.getElementById('tut-b1-sub');
    if (tutB1Sub) tutB1Sub.textContent = this.t('tutBox1Sub');
    const tutB2Title = document.getElementById('tut-b2-title');
    if (tutB2Title) tutB2Title.textContent = this.t('tutBox2Title');
    const tutB2Sub = document.getElementById('tut-b2-sub');
    if (tutB2Sub) tutB2Sub.textContent = this.t('tutBox2Sub');
    const tutB3Title = document.getElementById('tut-b3-title');
    if (tutB3Title) tutB3Title.textContent = this.t('tutBox3Title');
    const tutB3Sub = document.getElementById('tut-b3-sub');
    if (tutB3Sub) tutB3Sub.textContent = this.t('tutBox3Sub');

    const tutS2Title = document.getElementById('tut-slide2-title');
    if (tutS2Title) tutS2Title.textContent = this.t('tutSlide2Title');
    const tutS2Desc = document.getElementById('tut-slide2-desc');
    if (tutS2Desc) tutS2Desc.textContent = this.t('tutSlide2Desc');
    const tutLangInstr = document.getElementById('tut-lang-instruction');
    if (tutLangInstr) {
      tutLangInstr.innerHTML = this.currentLang === 'ko'
        ? '지금 키보드의 <strong>[L]</strong> 키를 누르거나 아래 버튼을 클릭하여 언어를 변경해보세요!'
        : 'Press the <strong>[L]</strong> key on your keyboard or click the button below to toggle language right now!';
    }
    const tutLangBtnLabel = document.getElementById('tut-lang-btn-label');
    if (tutLangBtnLabel) tutLangBtnLabel.textContent = this.t('tutLangTestBtn');
    const tutTipBox = document.getElementById('tut-tip-box');
    if (tutTipBox) {
      tutTipBox.innerHTML = `<span>${this.t('tutTipText')}</span>`;
    }

    const tutS3Title = document.getElementById('tut-slide3-title');
    if (tutS3Title) tutS3Title.textContent = this.t('tutSlide3Title');
    const tutS3Desc = document.getElementById('tut-slide3-desc');
    if (tutS3Desc) tutS3Desc.textContent = this.t('tutSlide3Desc');
    const tutB4Title = document.getElementById('tut-b4-title');
    if (tutB4Title) tutB4Title.textContent = this.t('tutBox4Title');
    const tutB4Sub = document.getElementById('tut-b4-sub');
    if (tutB4Sub) tutB4Sub.textContent = this.t('tutBox4Sub');
    const tutB5Title = document.getElementById('tut-b5-title');
    if (tutB5Title) tutB5Title.textContent = this.t('tutBox5Title');
    const tutB5Sub = document.getElementById('tut-b5-sub');
    if (tutB5Sub) tutB5Sub.textContent = this.t('tutBox5Sub');
  }

  populateThemeSelectors() {
    const generateOptions = () => {
      let html = '';
      THEME_CATEGORIES.forEach(cat => {
        html += `<optgroup label="${cat.name}">`;
        cat.themes.forEach(themeId => {
          const t = DESIGN_LANGUAGES[themeId];
          if (t) {
            html += `<option value="${t.id}">${t.name}</option>`;
          }
        });
        html += `</optgroup>`;
      });
      return html;
    };

    const optionsHtml = generateOptions();
    if (this.headerThemeSelect) {
      this.headerThemeSelect.innerHTML = optionsHtml;
    }
    if (this.dockThemeSelect) {
      this.dockThemeSelect.innerHTML = optionsHtml;
    }
  }

  bindEvents() {
    // Language Toggle
    if (this.btnLangToggle) {
      this.btnLangToggle.addEventListener('click', () => {
        const nextLang = this.currentLang === 'ko' ? 'en' : 'ko';
        this.applyLanguage(nextLang);
        this.showToast(nextLang === 'ko' ? '한국어로 전환되었습니다. (단축키: L)' : 'Switched to English. (Key: L)', 1200);
      });
    }

    // Dock tab switching
    this.dockButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTheme = btn.dataset.themeTarget;
        if (targetTheme && DESIGN_LANGUAGES[targetTheme]) {
          this.applyTheme(targetTheme);
        }
      });
    });

    // Header & Dock Selectors
    if (this.headerThemeSelect) {
      this.headerThemeSelect.addEventListener('change', (e) => {
        this.applyTheme(e.target.value);
      });
    }
    if (this.dockThemeSelect) {
      this.dockThemeSelect.addEventListener('change', (e) => {
        this.applyTheme(e.target.value);
      });
    }

    // Shuffle button
    if (this.btnShuffle) {
      this.btnShuffle.addEventListener('click', () => this.shuffleTheme());
    }

    // Scroll to Ecosystem Button in Dock
    if (this.btnDockEcosystem) {
      this.btnDockEcosystem.addEventListener('click', () => {
        const section = document.getElementById('ecosystem');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Category Filter Buttons
    this.categoryFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.categoryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.dataset.category || 'all';
        this.renderEcosystemCards();
      });
    });

    // Search Input
    if (this.repoSearchInput) {
      this.repoSearchInput.addEventListener('input', (e) => {
        this.currentSearchQuery = e.target.value.trim().toLowerCase();
        this.renderEcosystemCards();
      });
    }

    // Modal triggers (including Hero "가이드라인 ↗" button)
    const openTriggers = [
      this.btnOpenInspector,
      this.btnOpenInspectorFooter,
      this.footerBtnInspector,
      this.btnThemeBadge,
      this.btnHeroSecondary
    ];
    openTriggers.forEach(el => {
      if (el) {
        el.addEventListener('click', () => this.openThemeInspectorModal(this.currentThemeId));
      }
    });

    // Hero Primary button (Left of 가이드라인): Smooth scroll to Micro-interactions (#components)
    if (this.btnHeroPrimary) {
      this.btnHeroPrimary.addEventListener('click', () => {
        this.openComponentsModal();
      });
    }

    if (this.btnCloseCompModal) {
      this.btnCloseCompModal.addEventListener('click', () => {
        this.closeComponentsModal();
      });
    }

    if (this.componentsModal) {
      this.componentsModal.addEventListener('click', (e) => {
        if (e.target === this.componentsModal) {
          this.closeComponentsModal();
        }
      });
    }

    if (this.btnHeroDownload) {
      this.btnHeroDownload.addEventListener('click', () => {
        this.downloadThemeDesignMd(this.currentThemeId);
      });
    }

    // Modal Close
    if (this.btnCloseModal) {
      this.btnCloseModal.addEventListener('click', () => this.closeInspectorModal());
    }
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeInspectorModal();
        }
      });
    }

    
    // Top DESIGN.md Download Button
    if (this.btnTopDownload) {
      this.btnTopDownload.addEventListener('click', () => {
        this.downloadThemeDesignMd(this.currentThemeId);
      });
    }

    // Modal DESIGN.md Download Button
    if (this.btnModalDownloadPrompt) {
      this.btnModalDownloadPrompt.addEventListener('click', () => {
        const themeId = this.modal?.dataset?.theme || this.currentThemeId;
        this.downloadThemeDesignMd(themeId);
      });
    }

    // Copy Prompt button in Modal
    if (this.btnCopyPrompt) {
      this.btnCopyPrompt.addEventListener('click', () => {
        if (this.modalPromptContent) {
          const textToCopy = this.modalPromptContent.textContent;
          this.copyToClipboard(textToCopy, '프롬프트 및 설정 규칙이 클립보드에 복사되었습니다!');
        }
      });
    }

    // Interactive Hero Showcase button simulation
    if (this.btnStripPulse) {
      this.btnStripPulse.addEventListener('click', () => this.simulateLoadEvent());
    }

    // Arrow navigation buttons (Header, Dock, Floating Side Chevrons)
    const prevThemeButtons = [this.btnHeaderPrev, this.btnDockPrev, this.btnSidePrev];
    const nextThemeButtons = [this.btnHeaderNext, this.btnDockNext, this.btnSideNext];

    prevThemeButtons.forEach((btn) => {
      if (btn) btn.addEventListener('click', () => this.stepTheme(-1));
    });

    nextThemeButtons.forEach((btn) => {
      if (btn) btn.addEventListener('click', () => this.stepTheme(1));
    });

    // Onboarding Tutorial Trigger Button
    if (this.btnTutorialTrigger) {
      this.btnTutorialTrigger.addEventListener('click', () => {
        this.openTutorial();
      });
    }

    // Tutorial Close & Skip Buttons
    if (this.btnTutorialClose) {
      this.btnTutorialClose.addEventListener('click', () => {
        this.closeTutorial();
      });
    }
    if (this.btnTutorialSkip) {
      this.btnTutorialSkip.addEventListener('click', () => {
        this.closeTutorial();
      });
    }

    // Tutorial Prev & Next Navigation
    if (this.btnTutPrev) {
      this.btnTutPrev.addEventListener('click', () => {
        this.goToTutSlide(this.currentTutSlide - 1);
      });
    }
    if (this.btnTutNext) {
      this.btnTutNext.addEventListener('click', () => {
        if (this.currentTutSlide >= this.totalTutSlides - 1) {
          this.closeTutorial();
        } else {
          this.goToTutSlide(this.currentTutSlide + 1);
        }
      });
    }

    // Tutorial Step Indicator Dots
    this.tutDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.dataset.index, 10);
        if (!isNaN(idx)) {
          this.goToTutSlide(idx);
        }
      });
    });

    // Tutorial Slide 2 Interactive Language Test Button
    if (this.tutBtnLangTest) {
      this.tutBtnLangTest.addEventListener('click', () => {
        const nextLang = this.currentLang === 'ko' ? 'en' : 'ko';
        this.applyLanguage(nextLang);
        this.showToast(nextLang === 'ko' ? '한국어로 전환되었습니다! (단축키: L)' : 'Switched to English! (Key: L)', 1200);
      });
    }

    // Tutorial Overlay Backdrop Click
    if (this.tutorialOverlay) {
      this.tutorialOverlay.addEventListener('click', (e) => {
        if (e.target === this.tutorialOverlay) {
          this.closeTutorial();
        }
      });
    }

    // Mobile Touch Swipe Handling on Tutorial Carousel
    if (this.tutCarouselViewport) {
      let touchStartX = 0;
      this.tutCarouselViewport.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.tutCarouselViewport.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diffX = touchEndX - touchStartX;
        if (diffX < -45) {
          if (this.currentTutSlide >= this.totalTutSlides - 1) {
            this.closeTutorial();
          } else {
            this.goToTutSlide(this.currentTutSlide + 1);
          }
        } else if (diffX > 45) {
          this.goToTutSlide(this.currentTutSlide - 1);
        }
      }, { passive: true });
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        return;
      }

      // Tutorial Overlay Active Keyboard Navigation
      if (this.tutorialOverlay && this.tutorialOverlay.classList.contains('open')) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.goToTutSlide(this.currentTutSlide - 1);
          return;
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          if (this.currentTutSlide >= this.totalTutSlides - 1) {
            this.closeTutorial();
          } else {
            this.goToTutSlide(this.currentTutSlide + 1);
          }
          return;
        } else if (e.key === 'Escape') {
          e.preventDefault();
          this.closeTutorial();
          return;
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (this.currentTutSlide >= this.totalTutSlides - 1) {
            this.closeTutorial();
          } else {
            this.goToTutSlide(this.currentTutSlide + 1);
          }
          return;
        }
      }

      // Help/Tutorial Re-open Shortcut: '?'
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        this.openTutorial();
        return;
      }

      // Left & Right Arrow Theme Stepping (when tutorial is closed)
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.stepTheme(-1);
        return;
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.stepTheme(1);
        return;
      }

      // Language Toggle Shortcut: 'L' or 'l' or Korean 'ㅣ' or physical KeyL
      if (e.key === 'l' || e.key === 'L' || e.key === 'ㅣ' || e.code === 'KeyL') {
        e.preventDefault();
        const nextLang = this.currentLang === 'ko' ? 'en' : 'ko';
        this.applyLanguage(nextLang);
        this.showToast(nextLang === 'ko' ? '한국어로 전환되었습니다. (단축키: L)' : 'Switched to English. (Key: L)', 1200);
        return;
      }

      const key = e.key.toUpperCase();
      const quickKeys = ['linear', 'toss', 'ios_hig', 'spotify', 'duolingo', 'dracula', 'win98'];
      if (key >= '1' && key <= '7') {
        const idx = parseInt(key, 10) - 1;
        if (quickKeys[idx]) {
          this.applyTheme(quickKeys[idx]);
        }
      } else if (key === 'R') {
        this.shuffleTheme();
      } else if (key === 'E') {
        const section = document.getElementById('ecosystem');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      } else if (key === 'I') {
        if (this.modal.classList.contains('open')) {
          this.closeInspectorModal();
        } else {
          this.openThemeInspectorModal(this.currentThemeId);
        }
      } else if (e.key === 'Escape') {
        this.closeTutorial();
        this.closeInspectorModal();
        this.closeComponentsModal();
      }
    });
  }

  stepTheme(direction) {
    const allKeys = this.orderedThemeIds;
    if (!allKeys || allKeys.length === 0) return;

    let currentIndex = allKeys.indexOf(this.currentThemeId);
    if (currentIndex === -1) currentIndex = 0;

    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) {
      nextIndex = allKeys.length - 1;
    } else if (nextIndex >= allKeys.length) {
      nextIndex = 0;
    }

    const nextThemeId = allKeys[nextIndex];
    const theme = DESIGN_LANGUAGES[nextThemeId];
    if (!theme) return;

    this.applyTheme(nextThemeId, true);

    if (this.modal && this.modal.classList.contains('open')) {
      this.openThemeInspectorModal(nextThemeId);
    }

    const categoryObj = THEME_CATEGORIES.find(c => c.id === theme.category);
    const catLabel = categoryObj ? categoryObj.name.replace(/^[^\s]+\s+/, '') : theme.category;

    this.showToast(`[${nextIndex + 1}/${allKeys.length}] ${theme.name} • ${catLabel}`, 1500);
  }

  applyTheme(themeId, animate = true) {
    const theme = DESIGN_LANGUAGES[themeId];
    if (!theme) return;

    this.currentThemeId = themeId;
    this.body.dataset.theme = themeId;

    // Fluidly morph ambient lighting mesh and background glow
    this.updateAmbientMesh(theme);

    // Trigger dynamic component morphing & spatial shift
    if (animate) {
      this.body.classList.remove('theme-morphing');
      void this.body.offsetWidth; // Force reflow to re-trigger spring keyframes
      this.body.classList.add('theme-morphing');

      if (this.morphTimer) clearTimeout(this.morphTimer);
      this.morphTimer = setTimeout(() => {
        this.body.classList.remove('theme-morphing');
      }, 750);
    }

    // Sync Dropdown Selectors
    if (this.headerThemeSelect) {
      this.headerThemeSelect.value = themeId;
    }
    if (this.dockThemeSelect) {
      this.dockThemeSelect.value = themeId;
    }

    // Update Dock active state
    this.dockButtons.forEach(btn => {
      const isActive = btn.dataset.themeTarget === themeId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Update Header Content
    if (this.logoText) this.logoText.textContent = theme.navBrand;
    if (this.logoMark) {
      const marks = {
        ios_hig: '🍎',
        material_you: '🟣',
        spotify: '🟢',
        instagram: '📸',
        duolingo: '🦉',
        airbnb: '🏠',
        uber: '🚗',
        revolut: '💳',
        discord: '💬',
        telegram: '✈️',
        bento: '🍱',
        nord: '❄️',
        dracula: '🧛',
        catppuccin: '☕',
        gruvbox: '📻',
        tokyonight: '🗼',
        solarized: '☀️',
        baseweb: '🚖',
        radix: '⚛️',
        rawbrutalist: '📰',
        linear: '⚡',
        toss: '💙',
        win98: '💾',
        nes: '👾',
        papercss: '✏️',
        neumorphism: '⚪',
        neobrutalism: '★',
        blueprint: '📐',
        tufte: '📜',
        notion: '📝',
        impeccable: '⚡',
        shadcn: '▲',
        stripe: '💳',
        tremor: '📈',
        polaris: '🛍️',
        antd: '🐜',
        geist: '▲',
        midday: '☀️',
        primer: '🐙',
        tui: '📟',
        carbon: '◼️',
        teenage: '🎛️',
        nothing: '🔴',
        augmented: '🛡️',
        fluent: '🪟',
        spatial: '👓',
        mui: 'Ⓜ️',
        heroui: '✦',
        daisyui: '🌼',
        atlassian: '🔷'
      };
      this.logoMark.textContent = marks[themeId] || '◆';
    }
    if (this.headerThemeLabel) this.headerThemeLabel.textContent = theme.name;
    if (this.headerCtaText) this.headerCtaText.textContent = theme.ctaPrimary;

    // Update Hero Content & Manifesto with Korean localization support
    const koMeta = THEME_KO[themeId];
    const isKo = this.currentLang === 'ko' && !!koMeta;

    if (this.heroBadgeText) {
      this.heroBadgeText.textContent = isKo ? koMeta.heroBadge : theme.heroBadge;
    }
    if (this.heroTitle) {
      this.heroTitle.textContent = isKo ? koMeta.heroTitle : theme.heroTitle;
    }
    if (this.heroSubtitle) {
      this.heroSubtitle.textContent = isKo ? koMeta.heroSubtitle : theme.heroSubtitle;
    }
    if (this.heroPrimaryText) {
      this.heroPrimaryText.textContent = isKo ? '스타일 컴포넌트 모음' : 'Style Components Kit';
    }
    if (this.heroSecondaryText) {
      this.heroSecondaryText.textContent = isKo ? '가이드라인 ↗' : 'Guidelines ↗';
    }
    const heroDownloadText = document.getElementById('hero-download-text');
    if (heroDownloadText) {
      heroDownloadText.textContent = isKo ? 'DESIGN.md 다운로드' : 'Download DESIGN.md';
    }

    // Update Showcase Widget Label
    const pillText = document.getElementById('panel-pill-text');
    if (pillText) {
      pillText.textContent = isKo ? `${theme.name.toUpperCase()} 지표` : `${theme.name.toUpperCase()} METRICS`;
    }

    // Render Features Grid
    this.renderFeatures(isKo ? koMeta.features : theme.features);

    // Render Manifesto lists
    this.renderManifesto(theme, isKo ? koMeta : null);

    // Update Footer Brand
    if (this.footerBrand) {
      this.footerBrand.textContent = `${theme.navBrand} • DESIGN SYSTEM`;
    }

    if (animate) {
      this.showToast(isKo ? `스타일 변경: ${theme.name}` : `Theme applied: ${theme.name}`, 1500);
    }
  }

  renderFeatures(features) {
    if (!this.featuresGrid || !features) return;

    this.featuresGrid.innerHTML = '';
    features.forEach((f) => {
      const card = document.createElement('div');
      card.className = 'feature-card';
      card.innerHTML = `
        <div class="feature-tag">${f.tag}</div>
        <h3 class="feature-title">${f.title}</h3>
        <p class="feature-desc">${f.desc}</p>
        <div class="feature-meta">${f.meta}</div>
      `;
      this.featuresGrid.appendChild(card);
    });
  }

  updateAmbientMesh(theme) {
    const orb1 = document.querySelector('.glow-orb.orb-1');
    const orb2 = document.querySelector('.glow-orb.orb-2');
    const orb3 = document.querySelector('.glow-orb.orb-3');
    if (!orb1 || !orb2 || !orb3) return;

    const accent = theme.tokens?.accent || '#5E6AD2';
    const bg = theme.tokens?.bg || '#08090A';
    const surface = theme.tokens?.surface || '#0F1012';

    // Spatial coordinates & opacity morphing per theme category
    const catConfigs = {
      editorial: [
        { x: -60, y: -40, scale: 1.15, opacity: 0.28 },
        { x: 50, y: 30, scale: 0.95, opacity: 0.2 },
        { x: -20, y: 60, scale: 1.05, opacity: 0.18 }
      ],
      saas: [
        { x: 40, y: -60, scale: 1.12, opacity: 0.38 },
        { x: -45, y: 50, scale: 1.2, opacity: 0.32 },
        { x: 30, y: -20, scale: 0.95, opacity: 0.26 }
      ],
      dark_dev: [
        { x: 80, y: 30, scale: 1.25, opacity: 0.45 },
        { x: -60, y: -45, scale: 1.15, opacity: 0.4 },
        { x: 40, y: 70, scale: 1.05, opacity: 0.35 }
      ],
      hardware: [
        { x: -75, y: 45, scale: 1.2, opacity: 0.42 },
        { x: 55, y: -50, scale: 1.08, opacity: 0.38 },
        { x: -35, y: -30, scale: 1.12, opacity: 0.3 }
      ],
      expressive: [
        { x: 70, y: -35, scale: 1.3, opacity: 0.5 },
        { x: -55, y: 65, scale: 1.2, opacity: 0.45 },
        { x: 35, y: 45, scale: 1.15, opacity: 0.4 }
      ]
    };

    const cfg = catConfigs[theme.category] || catConfigs.saas;

    // Fluidly morph colors and coordinates
    orb1.style.background = `radial-gradient(circle, ${accent}88 0%, transparent 70%)`;
    orb1.style.transform = `translate(${cfg[0].x}px, ${cfg[0].y}px) scale(${cfg[0].scale})`;
    orb1.style.opacity = cfg[0].opacity;

    orb2.style.background = `radial-gradient(circle, ${surface !== bg ? surface : accent}77 0%, transparent 70%)`;
    orb2.style.transform = `translate(${cfg[1].x}px, ${cfg[1].y}px) scale(${cfg[1].scale})`;
    orb2.style.opacity = cfg[1].opacity;

    orb3.style.background = `radial-gradient(circle, ${accent}55 0%, transparent 70%)`;
    orb3.style.transform = `translate(${cfg[2].x}px, ${cfg[2].y}px) scale(${cfg[2].scale})`;
    orb3.style.opacity = cfg[2].opacity;
  }

  renderManifesto(theme, koMeta = null) {
    if (this.manifestoTitle) {
      if (koMeta) {
        this.manifestoTitle.textContent = `${theme.name} — AI 에이전트를 위한 디자인 아키텍처`;
      } else {
        this.manifestoTitle.textContent = `Why ${theme.name} Works for AI Agents`;
      }
    }

    const philList = (koMeta && koMeta.philosophy) ? koMeta.philosophy : theme.philosophy;
    if (this.manifestoPhilosophyList) {
      this.manifestoPhilosophyList.innerHTML = '';
      if (Array.isArray(philList)) {
        philList.forEach(rule => {
          const li = document.createElement('li');
          li.textContent = rule;
          this.manifestoPhilosophyList.appendChild(li);
        });
      }
    }

    const antiList = (koMeta && koMeta.antiPatterns) ? koMeta.antiPatterns : theme.antiPatterns;
    if (this.manifestoAntipatternList) {
      this.manifestoAntipatternList.innerHTML = '';
      if (Array.isArray(antiList)) {
        antiList.forEach(anti => {
          const li = document.createElement('li');
          li.textContent = anti;
          this.manifestoAntipatternList.appendChild(li);
        });
      }
    }
  }

  renderEcosystemCards() {
    if (!this.ecosystemGrid) return;

    const filtered = this.repositories.filter(repo => {
      const matchCat = this.currentCategory === 'all' || repo.category === this.currentCategory;
      if (!matchCat) return false;

      if (!this.currentSearchQuery) return true;

      const q = this.currentSearchQuery;
      return (
        repo.name.toLowerCase().includes(q) ||
        repo.repo.toLowerCase().includes(q) ||
        repo.desc.toLowerCase().includes(q) ||
        repo.categoryLabel.toLowerCase().includes(q)
      );
    });

    if (this.repoCountBadge) {
      this.repoCountBadge.textContent = `${filtered.length} / ${this.repositories.length} ${this.t('repoCountUnit')}`;
    }

    this.ecosystemGrid.innerHTML = '';

    if (filtered.length === 0) {
      this.ecosystemGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; opacity: 0.7;">
          <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">${this.t('noResult')}</p>
          <p style="font-size: 0.9rem;">${this.t('noResultSub')}</p>
        </div>
      `;
      return;
    }

    filtered.forEach(repo => {
      const card = document.createElement('div');
      card.className = 'repo-card';
      card.dataset.previewTheme = repo.themeId; // Enable individual live theme preview styling

      let rankClass = '';
      if (repo.rank === 1) rankClass = 'gold';
      else if (repo.rank === 2) rankClass = 'silver';
      else if (repo.rank === 3) rankClass = 'bronze';

      const repoUrl = repo.url || `https://github.com/${repo.repo}`;

      card.innerHTML = `
        <div class="repo-card-top">
          <span class="repo-rank-pill ${rankClass}">#${repo.rank}</span>
          <span class="repo-star-badge">⭐ ${repo.starsFormatted}</span>
        </div>

        <div class="repo-title-group">
          <div class="repo-name-row">
            <h3 class="repo-name">${repo.name}</h3>
            <span class="repo-category-tag">${repo.categoryLabel}</span>
          </div>
          <span style="font-size: 0.75rem; opacity: 0.6; font-family: monospace;">${repo.repo}</span>
        </div>

        <p class="repo-desc">${repo.desc}</p>

        <div class="repo-ai-box">
          <strong>${this.currentLang === 'ko' ? 'AI 에이전트 역할 및 워크플로우' : 'AI Agent Role & Workflow'}</strong>
          <span>${repo.roleInAI}</span>
        </div>

        <div class="repo-theme-tag">
          <span>${this.currentLang === 'ko' ? '🎨 전용 스타일 ID:' : '🎨 Dedicated Theme ID:'}</span>
          <strong>${repo.themeId}</strong>
        </div>

        <div class="repo-card-actions">
          <button type="button" class="btn-repo-apply" title="${repo.name} - ${this.t('btnApply')}">
            <span>${this.t('btnApply')}</span>
            <span>⚡</span>
          </button>
          <button type="button" class="btn-repo-inspect" title="${repo.name} - ${this.t('btnInspect')}">
            <span>${this.t('btnInspect')}</span>
          </button>
          <a href="${repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-repo-github" title="GitHub">
            <span>↗</span>
          </a>
        </div>
      `;

      // Click anywhere on card to automatically apply theme & expand showcase
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-repo-inspect')) {
          this.openRepoInspectorModal(repo);
          return;
        }
        if (e.target.closest('.btn-repo-github')) {
          return;
        }
        this.applyTheme(repo.themeId);
        this.expandShowcase();
      });

      // Apply button also explicitly calls apply & expand
      const btnApply = card.querySelector('.btn-repo-apply');
      if (btnApply) {
        btnApply.addEventListener('click', (e) => {
          e.stopPropagation();
          this.applyTheme(repo.themeId);
          this.expandShowcase();
        });
      }

      // Inspect rules modal button
      const btnInspect = card.querySelector('.btn-repo-inspect');
      if (btnInspect) {
        btnInspect.addEventListener('click', () => {
          this.openRepoInspectorModal(repo);
        });
      }

      this.ecosystemGrid.appendChild(card);
    });
  }

  openThemeInspectorModal(themeId) {
    const theme = DESIGN_LANGUAGES[themeId];
    if (!theme) return;

    if (this.modalTitle) this.modalTitle.textContent = `${theme.name} Prompt & Tokens`;
    if (this.modalThemeBadge) this.modalThemeBadge.textContent = theme.badge;

    if (this.modalColorSwatches) {
      this.modalColorSwatches.innerHTML = '';
      Object.entries(theme.tokens).forEach(([key, val]) => {
        if (key.startsWith('font')) return;
        const swatch = document.createElement('div');
        swatch.className = 'swatch-card';
        swatch.title = '클릭하여 복사';
        swatch.innerHTML = `
          <div class="swatch-box" style="background: ${val};"></div>
          <span class="swatch-name">${key}</span>
          <span class="swatch-hex">${val}</span>
        `;
        swatch.addEventListener('click', () => {
          this.copyToClipboard(val, `컬러 토큰 [${key}: ${val}] 복사됨!`);
        });
        this.modalColorSwatches.appendChild(swatch);
      });
    }

    const isKo = this.currentLang === 'ko';
    if (this.modalInfoBox) {
      this.modalInfoBox.innerHTML = `
        <div><strong>${isKo ? 'DESIGN.md 저장 위치:' : 'DESIGN.md Location:'}</strong> <code>design-systems/${themeId}/DESIGN.md</code></div>
        <div><strong>${isKo ? '제목 폰트:' : 'Heading Font:'}</strong> ${theme.tokens.fontHeading || 'Default'}</div>
        <div><strong>${isKo ? '슬로건:' : 'Tagline:'}</strong> ${theme.tagline}</div>
        <div><strong>${isKo ? '핵심 안티 패턴:' : 'Core Anti-Patterns:'}</strong> ${theme.antiPatterns.join(' ')}</div>
      `;
    }

    const fullSpec = DESIGN_MD_MAP[themeId] || theme.prompt;
    if (this.modalPromptContent) {
      this.modalPromptContent.textContent = fullSpec;
    }

    this.modal.dataset.theme = themeId;
    const dialog = this.modal.querySelector('.modal-dialog');
    if (dialog) dialog.dataset.theme = themeId;

    this.modal.classList.add('open');
    this.modal.setAttribute('aria-hidden', 'false');
  }

  openRepoInspectorModal(repo) {
    if (!repo) return;

    this.modal.dataset.theme = repo.themeId;
    const dialog = this.modal.querySelector('.modal-dialog');
    if (dialog) dialog.dataset.theme = repo.themeId;

    const theme = DESIGN_LANGUAGES[repo.themeId];
    const installCmd = repo.installCmd || `npm install ${repo.repo.split('/')[1] || repo.themeId}`;
    const fullSpec = DESIGN_MD_MAP[repo.themeId] || (theme ? theme.prompt : repo.desc);
    const isKo = this.currentLang === 'ko';

    if (this.modalTitle) this.modalTitle.textContent = `#${repo.rank} ${repo.name} (${repo.starsFormatted} ⭐)`;
    if (this.modalThemeBadge) this.modalThemeBadge.textContent = repo.categoryLabel;

    if (this.modalColorSwatches) {
      this.modalColorSwatches.innerHTML = `
        <div class="swatch-card" style="grid-column: 1 / -1; padding: 1rem;">
          <div style="font-size: 0.8rem; opacity: 0.7; margin-bottom: 0.35rem;">${isKo ? '설치 및 초기화 CLI 명령:' : 'Installation / Setup CLI:'}</div>
          <code class="modal-install-code">${installCmd}</code>
        </div>
      `;
    }

    const repoUrl = repo.url || `https://github.com/${repo.repo}`;

    if (this.modalInfoBox) {
      this.modalInfoBox.innerHTML = `
        <div><strong>${isKo ? 'DESIGN.md 저장 위치:' : 'DESIGN.md Location:'}</strong> <code>design-systems/${repo.themeId}/DESIGN.md</code></div>
        <div><strong>${isKo ? '공식 저장소:' : 'Repository:'}</strong> <a href="${repoUrl}" target="_blank" rel="noopener noreferrer" class="modal-repo-link">${repo.repo}</a></div>
        <div><strong>${isKo ? '카테고리:' : 'Category:'}</strong> ${repo.categoryLabel} (${isKo ? '스타 수' : 'Stars'}: ${repo.starsFormatted})</div>
        <div><strong>${isKo ? 'AI 에이전트 역할:' : 'AI Role:'}</strong> ${repo.roleInAI}</div>
        <div><strong>${isKo ? '전용 스타일 테마 ID:' : 'Dedicated Theme ID:'}</strong> <code>${repo.themeId}</code></div>
      `;
    }

    if (this.modalPromptContent) {
      this.modalPromptContent.textContent = fullSpec;
    }

    this.modal.classList.add('open');
    this.modal.setAttribute('aria-hidden', 'false');
  }

  
  downloadThemeDesignMd(themeId = this.currentThemeId) {
    const theme = DESIGN_LANGUAGES[themeId];
    if (!theme) return;

    let content = DESIGN_MD_MAP[themeId];
    if (!content) {
      content = `# DESIGN.md - ${theme.name} (${theme.badge})
> ${theme.tagline}

## 1. Design Tokens & Color Palette
| Token | Value |
|---|---|
${Object.entries(theme.tokens).map(([k, v]) => `| \`${k}\` | \`${v}\` |`).join('\n')}

## 2. Typography Rules
- **Heading Font**: ${theme.tokens.fontHeading || 'Pretendard, sans-serif'}
- **Body Font**: ${theme.tokens.fontBody || 'Pretendard, sans-serif'}
- **Mono Font**: ${theme.tokens.fontMono || 'JetBrains Mono, monospace'}

## 3. Philosophy & Core Principles
${(theme.philosophy || []).map(p => `- **${p.title}**: ${p.desc}`).join('\n')}

## 4. Anti-Patterns (Strictly Avoid)
${(theme.antiPatterns || []).map(a => `- ❌ ${a}`).join('\n')}

## 5. AI Coding Agent Prompt (Cursor / Claude Code / Gemini)
\`\`\`markdown
${theme.prompt}
\`\`\`
`;
    }

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${themeId}-DESIGN.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    const isKo = this.currentLang === 'ko';
    this.showToast(isKo ? `✓ [${theme.name}] DESIGN.md 다운로드 완료!` : `✓ [${theme.name}] DESIGN.md downloaded!`);
  }

  
  
  expandShowcase() {
    if (!this.isShowcaseExpanded) {
      this.isShowcaseExpanded = true;
      document.body.classList.remove('catalog-initial-view');
      document.body.classList.add('showcase-expanded-anim');
      setTimeout(() => {
        document.body.classList.remove('showcase-expanded-anim');
      }, 700);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  openComponentsModal() {
    const theme = DESIGN_LANGUAGES[this.currentThemeId];
    if (!theme || !this.componentsModal) return;

    this.componentsModal.dataset.theme = this.currentThemeId;
    const dialog = this.componentsModal.querySelector('.modal-dialog');
    if (dialog) dialog.dataset.theme = this.currentThemeId;

    const isKo = this.currentLang === 'ko';
    if (this.compModalTitle) {
      this.compModalTitle.textContent = isKo ? `${theme.name} 스타일 컴포넌트 모음` : `${theme.name} Component Kit`;
    }
    if (this.compModalThemeBadge) {
      this.compModalThemeBadge.textContent = theme.badge;
    }

    this.componentsModal.classList.add('open');
    this.componentsModal.setAttribute('aria-hidden', 'false');
  }

  closeComponentsModal() {
    if (this.componentsModal) {
      this.componentsModal.classList.remove('open');
      this.componentsModal.setAttribute('aria-hidden', 'true');
    }
  }

  closeInspectorModal() {
    if (this.modal) {
      this.modal.classList.remove('open');
      this.modal.setAttribute('aria-hidden', 'true');
    }
  }

  openTutorial() {
    if (!this.tutorialOverlay) return;
    this.tutorialOverlay.classList.add('open');
    this.tutorialOverlay.setAttribute('aria-hidden', 'false');
    this.goToTutSlide(0);
  }

  closeTutorial() {
    if (!this.tutorialOverlay) return;
    this.tutorialOverlay.classList.remove('open');
    this.tutorialOverlay.setAttribute('aria-hidden', 'true');
    try {
      localStorage.setItem('design_guide_tutorial_viewed', 'true');
    } catch (e) {}
  }

  goToTutSlide(index) {
    if (index < 0) index = 0;
    if (index >= this.totalTutSlides) index = this.totalTutSlides - 1;
    this.currentTutSlide = index;

    if (this.tutCarouselTrack) {
      this.tutCarouselTrack.style.transform = `translateX(-${index * (100 / this.totalTutSlides)}%)`;
    }

    if (this.tutStepCounter) {
      this.tutStepCounter.textContent = `${index + 1} / ${this.totalTutSlides}`;
    }

    if (this.tutDots) {
      this.tutDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
      });
    }

    if (this.btnTutPrev) {
      this.btnTutPrev.disabled = index === 0;
    }

    if (this.btnTutNext && this.tutNextText) {
      if (index === this.totalTutSlides - 1) {
        this.btnTutNext.classList.add('btn-start-exploring');
        this.tutNextText.textContent = this.t('tutorialStart');
      } else {
        this.btnTutNext.classList.remove('btn-start-exploring');
        this.tutNextText.textContent = this.t('tutorialNext');
      }
    }
  }

  shuffleTheme() {
    const allKeys = Object.keys(DESIGN_LANGUAGES);
    const currentIndex = allKeys.indexOf(this.currentThemeId);
    let nextIndex = Math.floor(Math.random() * allKeys.length);
    if (nextIndex === currentIndex) {
      nextIndex = (currentIndex + 1) % allKeys.length;
    }
    this.applyTheme(allKeys[nextIndex]);
  }

  simulateLoadEvent() {
    if (this.valLatency && this.valVelocity) {
      const randomLatency = (Math.random() * 8 + 8).toFixed(1) + 'ms';
      const randomVelocity = Math.floor(Math.random() * 800 + 1200) + ' TPS';
      this.valLatency.textContent = randomLatency;
      this.valVelocity.textContent = randomVelocity;
      this.showToast('실시간 메트릭 스트림 동기화 완료', 1000);
    }
  }

  copyToClipboard(text, successMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast(successMessage);
      }).catch(() => {
        this.fallbackCopy(text, successMessage);
      });
    } else {
      this.fallbackCopy(text, successMessage);
    }
  }

  fallbackCopy(text, successMessage) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      this.showToast(successMessage);
    } catch (err) {
      this.showToast('복사에 실패했습니다.', 2000);
    }
    document.body.removeChild(textarea);
  }

  showToast(message, duration = 2000) {
    if (!this.toast || !this.toastMessage) return;

    this.toastMessage.textContent = message;
    this.toast.classList.add('visible');

    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toast.classList.remove('visible');
    }, duration);
  }
}

// Instantiate App on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new DesignShowcaseApp();
});
