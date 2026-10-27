export const THEME_CATEGORIES = [
  {
    "id": "editorial",
    "name": "📖 1. Editorial & Print (도면·인쇄물)",
    "themes": [
      "hallmark",
      "impeccable",
      "tufte",
      "blueprint",
      "notion",
      "rawbrutalist",
      "notion_mobile"
    ]
  },
  {
    "id": "saas",
    "name": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "themes": [
      "toss",
      "shadcn",
      "stripe",
      "tremor",
      "polaris",
      "antd",
      "toss_mobile",
      "stripe_mobile",
      "revolut",
      "bento",
      "bento_prod",
      "radix",
      "baseweb"
    ]
  },
  {
    "id": "dark_dev",
    "name": "⚡ 3. Dark & Developer (개발자·터미널)",
    "themes": [
      "geist",
      "linear",
      "midday",
      "primer",
      "tui",
      "linear_mobile",
      "geist_mobile",
      "nord",
      "dracula",
      "catppuccin",
      "gruvbox",
      "tokyonight",
      "solarized"
    ]
  },
  {
    "id": "hardware",
    "name": "🎛️ 4. Hardware & Industrial (로봇·계기판)",
    "themes": [
      "carbon",
      "teenage",
      "nothing",
      "augmented",
      "cyberpunk_hud"
    ]
  },
  {
    "id": "expressive",
    "name": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "themes": [
      "mui",
      "material_you",
      "fluent",
      "spatial",
      "ios_hig",
      "heroui",
      "daisyui",
      "neumorphism",
      "win98",
      "nes",
      "papercss",
      "atlassian",
      "neobrutalism",
      "duolingo",
      "spotify",
      "instagram",
      "airbnb",
      "uber",
      "discord",
      "telegram",
      "glassmorphism_app",
      "neumorphism_touch",
      "daisyui_brutal",
      "win98_mobile",
      "nes_arcade"
    ]
  }
];

export const ORDERED_THEME_IDS = THEME_CATEGORIES.flatMap(cat => cat.themes);

export const DESIGN_LANGUAGES = {
  hallmark: {
    id: "hallmark",
    name: "Hallmark Anti-AI-Slop",
    category: "editorial",
    badge: "Together AI Anti-Slop",
    tagline: "48개 머티리얼과 3단계 품질 게이트로 AI 슬롭을 근절하는 디자인 규율",
    navBrand: "HALLMARK.DEV",
    heroBadge: "MATERIALS OVER TEMPLATES • V2",
    heroTitle: "Build real products, not generic AI slop.",
    heroSubtitle: "Say goodbye to purple neon gradients, repetitive 3-card grids, and contrast failures. Governed by 3-tier quality gates and paired token discipline.",
    ctaPrimary: "Explore 48 Materials",
    ctaSecondary: "View Quality Gates ↗",
    tokens: {
      bg: "#0B0F17",
      surface: "#111827",
      border: "rgba(255, 255, 255, 0.08)",
      accent: "#3B82F6",
      accentGlow: "rgba(59, 130, 246, 0.2)",
      textPrimary: "#F9FAFB",
      textMuted: "#9CA3AF",
      fontHeading: "'Inter', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', monospace"
    },
    features: [
      { tag: "GATES // 01", title: "3-Tier Quality Gates", desc: "Floor(대비 4.5:1/오버플로), Reflex(클리셰 방지), Finish(크래프트) 3단계 엄격 판정.", meta: "STATUS: ENFORCED" },
      { tag: "MATERIALS // 02", title: "48 Curated Materials", desc: "고정된 템플릿 복붙을 거부하고 Cobalt, Studio, Swiss 등 48종 고유 소재를 조립.", meta: "TOTAL: 48" },
      { tag: "LINTER // 03", title: "Headless Browser Sloplint", desc: "8개 뷰포트에서 Puppeteer로 실시간 렌더링하며 AI 슬롭과 대비율 자동 감지.", meta: "VIEWPORTS: 8" }
    ],
    philosophy: [
      "Materials over templates: UI must be shaped by user's Job-to-be-done.",
      "Paired token contract: Background color changes must explicitly declare text color.",
      "Show, don't describe: Real screenshots and facts over invented statistics."
    ],
    antiPatterns: [
      "No generic purple-to-blue neon gradients.",
      "No uppercase tracked eyebrow badge pills above headlines.",
      "No single-word colored highlights in hero titles.",
      "No copy-paste 3-card grids without semantic reason."
    ],
    prompt: "[DESIGN.md - Hallmark Anti-AI-Slop Archetype]\nRole: Senior Anti-Slop Interface Architect (Together AI Hallmark Discipline).\nCore Philosophy: Materials over templates. Build UI driven strictly by the user's Job-to-be-done.\nRules:\n1. Floor Gate: Enforce WCAG AA 4.5:1 contrast ratio across all foreground-background pairs. Never ship unstyled color pairings.\n2. Reflex Gate: Do not add uppercase badge pills above titles. Do not color single words in headlines. No copy-paste 3-card grids.\n3. Typography: Clean sans-serif ('Inter', system-ui) paired with monospace metadata ('JetBrains Mono')."
  },

  // ==========================================
  // 1. EDITORIAL & PRINT (도면·인쇄물)
  // ==========================================
  impeccable: {
    id: "impeccable",
    name: "Impeccable Minimal",
    category: "editorial",
    badge: "Anti-AI-Slop Editorial",
    tagline: "군더더기를 0으로 수렴시킨 하이엔드 에디토리얼 다크",
    navBrand: "IMPECCABLE.STYLE",
    heroBadge: "CURATED EDITORIAL DIRECTION",
    heroTitle: "Precision design, uncompromised by templates.",
    heroSubtitle: "Eliminating generic gradients, arbitrary card nesting, and fluffy padding. Form follows intent with mathematical discipline.",
    ctaPrimary: "Audit Components",
    ctaSecondary: "Read Guidelines ↗",
    tokens: { bg: "#070809", surface: "#0E1013", border: "rgba(255,255,255,0.08)", accent: "#6366F1", textPrimary: "#FFFFFF", fontHeading: "'Inter', sans-serif" },
    features: [
      { tag: "RULES // 01", title: "Deterministic Linting", desc: "62 visual anti-pattern detectors running without LLM overhead.", meta: "STATUS: ACTIVE" },
      { tag: "CANON // 02", title: "Optical Alignment", desc: "Eliminating 1px misalignment across heterogeneous nested elements.", meta: "TOLERANCE: 0PX" },
      { tag: "PALETTE // 03", title: "Restrained Spectrum", desc: "Strict 4-token color limit. No uncontrolled hex proliferation.", meta: "TOKENS: 4" }
    ],
    philosophy: ["Zero decorative fluff. Every pixel serves direct hierarchy.", "Strict typography scale with negative tracking.", "No arbitrary nested cards."],
    antiPatterns: ["No generic purple-to-blue gradients.", "No uncontrolled border radii."],
    prompt: `[DESIGN.md - Impeccable Minimal Archetype]\nRole: Senior Editorial Systems Designer.\nStyle: Strict 4-token monochrome palette (#070809 canvas, #0E1013 cards, #6366F1 accent). Hairline 1px borders. Inter typography with -0.02em tracking.`
  },

  tufte: {
    id: "tufte",
    name: "Tufte Academic Print",
    category: "editorial",
    badge: "Edward Tufte Data Print",
    tagline: "에드워드 터프티의 데이터 시각화 철학, 군더더기 없는 논문 미학",
    navBrand: "TUFTE // ANALYTICA",
    heroBadge: "MAXIMAL DATA-INK RATIO • 0PX NOISE",
    heroTitle: "Above all else show the data.",
    heroSubtitle: "Clutter and confusion are failures of design, not attributes of information. Expansive margins, classical serif typography, and zero chartjunk.",
    ctaPrimary: "Examine Monograph",
    ctaSecondary: "Margin Notes ↗",
    tokens: { bg: "#FFFFF8", surface: "#FFFFF8", border: "#EAE7D6", accent: "#A00000", textPrimary: "#111111", fontHeading: "'Cormorant Garamond', Georgia, serif" },
    features: [
      { tag: "AXIOM I", title: "Data-Ink Ratio", desc: "A large share of ink on a graphic should present data-information.", meta: "EFFICIENCY: 100%" },
      { tag: "AXIOM II", title: "Integrated Sidenotes", desc: "Notes and explanations placed directly beside the point of reference.", meta: "CHARTJUNK: 0%" },
      { tag: "AXIOM III", title: "High-Density Typography", desc: "Cormorant Garamond classical book typesetting with generous line rhythm.", meta: "LEAD: 1.6" }
    ],
    philosophy: ["Above all else show the data. Eliminate decorative non-data ink.", "Use classical book serif typography and expansive academic margin notes.", "Strict 0px border-radius, no artificial cards, transparent reading experience."],
    antiPatterns: ["No rounded cards or tech badges.", "No unnecessary drop shadows or gradients."],
    prompt: `[DESIGN.md - Tufte Academic Print Archetype]\nRole: Academic Information Architect.\nGuidelines: Canvas #FFFFF8, Ink #111111, Accent Vermillion #A00000. 0px border radius everywhere. Pure typography-driven layout inspired by Edward Tufte.`
  },

  blueprint: {
    id: "blueprint",
    name: "Blueprint CAD Schematic",
    category: "editorial",
    badge: "Engineering Schematic",
    tagline: "코발트 블루 모눈종이와 정밀 하드웨어 설계 도면 감성",
    navBrand: "CAD//SCHEMATIC.04",
    heroBadge: "REV-2.4 // SCALE 1:1 // METRIC",
    heroTitle: "Precision hardware schematic draft.",
    heroSubtitle: "Architectural cobalt blue foundation overlaid with 1px cyan drafting grid lines, corner crosshair markers, and technical annotation coordinates.",
    ctaPrimary: "Compile Blueprint",
    ctaSecondary: "CAD Tolerances >",
    tokens: { bg: "#0A2463", surface: "#081E52", border: "rgba(0, 240, 255, 0.45)", accent: "#00F0FF", textPrimary: "#E6F4F1", fontHeading: "'Space Mono', monospace" },
    features: [
      { tag: "SPEC // 01", title: "Orthographic Projection", desc: "Millimeter-precision grid interval aligned to engineering standard DIN 476.", meta: "TOLERANCE: ±0.02" },
      { tag: "COORD // 02", title: "Vector Telemetry Layer", desc: "Direct coordinate overlay with datum plane reference markers (+).", meta: "DATUM: X-74.2" },
      { tag: "SHEET // 03", title: "Technical Drafting Border", desc: "Cyan hairline schematics with monospaced dimensional callouts.", meta: "DRAFT: ISO-A1" }
    ],
    philosophy: ["Cobalt blue drafting paper (#0A2463) with visible cyan coordinate grids.", "All elements framed with 1px technical wireframe borders and corner crosses (+).", "100% monospaced drafting annotations."],
    antiPatterns: ["No soft pastel gradients or rounded squircles.", "No generic sans-serif fonts."],
    prompt: `[DESIGN.md - Blueprint CAD Schematic Archetype]\nRole: Senior Hardware Systems Draftsman.\nStyle: Cobalt blue background #0A2463 with fine cyan grid lines. Borders 1px solid rgba(0, 240, 255, 0.5). Monospace technical annotations.`
  },

  notion: {
    id: "notion",
    name: "Notion Warm Workspace",
    category: "editorial",
    badge: "Warm Knowledge Base",
    tagline: "따뜻한 아이보리와 자연스러운 콜아웃 블록의 위키 감성",
    navBrand: "notion·notes",
    heroBadge: "PAGE // KNOWLEDGE ARTIFACT",
    heroTitle: "Thinking made visible, calm, and coherent.",
    heroSubtitle: "Warm cream surfaces, clean callout cards, effortless serif-to-sans transitions, and a clutter-free document layout that reads like an executive summary.",
    ctaPrimary: "Duplicate Workspace",
    ctaSecondary: "View Callout Blocks ↗",
    tokens: { bg: "#F7F6F3", surface: "#FFFFFF", border: "#E9E9E7", accent: "#2383E2", textPrimary: "#37352F", fontHeading: "'Plus Jakarta Sans', sans-serif" },
    features: [
      { tag: "CALLOUT 01", title: "Structured Block Hierarchy", desc: "Distinct shaded cards with light left border highlights.", meta: "BLOCK: H1" },
      { tag: "TYPO 02", title: "Warm Neutral Tones", desc: "Soft warm charcoal text (#37352F) eliminating eye strain on long reads.", meta: "CONTRAST: AAA" },
      { tag: "LAYOUT 03", title: "Document Flow Rhythm", desc: "Spacious margin bounds prioritizing sustained readability.", meta: "WIDTH: 840PX" }
    ],
    philosophy: ["Warm ivory canvas (#F7F6F3) and pure white card blocks.", "Gentle 4px border radius and muted gray dividers (#E9E9E7).", "Readable, distraction-free document architecture."],
    antiPatterns: ["No aggressive dark neon tones.", "No harsh black drop shadows."],
    prompt: `[DESIGN.md - Notion Warm Workspace Archetype]\nRole: Product Knowledge Architect.\nStyle: Canvas #F7F6F3, Surface #FFFFFF, Border #E9E9E7. Text #37352F. Clean 4px radius, callout containers with left highlight accents.`
  },

  // ==========================================
  // 2. MODERN SAAS & FINTECH (모던 스탠다드)
  // ==========================================
  toss: {
    id: "toss",
    name: "Toss TDS (핀테크 스쿼클)",
    category: "saas",
    badge: "Tactile Squircle & Spring",
    tagline: "부드러운 28px 스쿼클 곡률과 기분 좋은 스프링 인터랙션",
    navBrand: "toss·core",
    heroBadge: "쉽고 편한 금융의 모든 것",
    heroTitle: "금융의 모든 것, 터치 한 번으로 쉽게.",
    heroSubtitle: "28px 매끄러운 스쿼클 카드, 시그니처 토스 블루, 그리고 손끝에 감기는 스프링 애니메이션으로 금융을 재해석합니다.",
    ctaPrimary: "간편 송금 시작하기",
    ctaSecondary: "혜택 모아보기",
    tokens: { bg: "#F2F4F6", surface: "#FFFFFF", border: "rgba(0,0,0,0.04)", accent: "#3182F6", textPrimary: "#191F28", fontHeading: "'Plus Jakarta Sans', sans-serif" },
    features: [
      { tag: "무료 송금", title: "수수료 평생 0원", desc: "복잡한 인증서 없이 터치 한 번으로 끝나는 즉시 송금.", meta: "0원 수수료" },
      { tag: "신용 분석", title: "실시간 신용점수 올리기", desc: "공과금 납부 내역 제출로 신용도를 즉시 상향 관리.", meta: "+35점 상승" },
      { tag: "자산 연결", title: "모든 계좌 한눈에 보기", desc: "은행, 증권, 카드 잔액을 한곳에 모아 직관적으로 표시.", meta: "실시간 연동" }
    ],
    philosophy: ["Ultra-smooth squircle cards with 28px radius.", "Tactile spring feedback cubic-bezier(0.34, 1.56, 0.64, 1).", "Signature Toss Blue #3182F6 and gentle white elevation."],
    antiPatterns: ["No sharp corners (0px) or industrial grids.", "No cold intimidating financial jargon."],
    prompt: `[DESIGN.md - Toss TDS Archetype]\nRole: Senior Fintech Product Designer.\nStyle: Canvas #F2F4F6, Card #FFFFFF, Accent Toss Blue #3182F6. Border-radius: 28px. Bouncy spring micro-interactions.`
  },

  shadcn: {
    id: "shadcn",
    name: "shadcn/ui Minimal",
    category: "saas",
    badge: "De Facto Industry Standard",
    tagline: "미니멀리스트 Zinc 다크 모드와 완벽한 소유권 컴포넌트",
    navBrand: "SHADCN.UI",
    heroBadge: "TAILWIND V4 • RADIX PRIMITIVES",
    heroTitle: "The foundation for modern web engineering.",
    heroSubtitle: "Beautifully designed components that you copy and paste into your apps. Accessible. Customizable. Open Source.",
    ctaPrimary: "Copy Components",
    ctaSecondary: "Browse Registry ↗",
    tokens: { bg: "#09090B", surface: "#09090B", border: "rgba(255,255,255,0.1)", accent: "#FAFAFA", textPrimary: "#FAFAFA", fontHeading: "'Inter', sans-serif" },
    features: [
      { tag: "ZERO RUNTIME", title: "Copy-Paste Architecture", desc: "You own the code. No bloated npm dependencies.", meta: "OWNERSHIP: 100%" },
      { tag: "A11Y READY", title: "Radix Headless Roots", desc: "WAI-ARIA compliance out of the box on all triggers.", meta: "WCAG: AA" },
      { tag: "SEMANTIC", title: "Strict Token System", desc: "Tailwind tokens for background, foreground, and muteds.", meta: "ZINC MATRIX" }
    ],
    philosophy: ["Zinc dark #09090B with clean 1px hairline border.", "Solid white primary button with high contrast.", "Accessible Radix keyboard primitives."],
    antiPatterns: ["No messy inline CSS.", "No custom color hex outside project tokens."],
    prompt: `[DESIGN.md - shadcn/ui Minimal Archetype]\nRole: Lead Design Systems Engineer.\nStyle: Canvas #09090B, Surface #09090B, Border rgba(255,255,255,0.1), Accent #FAFAFA. Radius 8px. Radix UI headless interaction foundation.`
  },

  stripe: {
    id: "stripe",
    name: "Stripe Crisp FinTech",
    category: "saas",
    badge: "The Benchmark Dashboard",
    tagline: "다층 레이어 그림자, 인디고 악센트, 글로벌 결제의 표준",
    navBrand: "STRIPE//PAY",
    heroBadge: "PAYMENTS INFRASTRUCTURE v8.2",
    heroTitle: "Financial infrastructure for the internet.",
    heroSubtitle: "Millions of companies evaluate Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online with unmatched reliability.",
    ctaPrimary: "Start with Stripe",
    ctaSecondary: "API Reference ↗",
    tokens: { bg: "#F7FAFC", surface: "#FFFFFF", border: "#E2E8F0", accent: "#635BFF", textPrimary: "#0A2540", fontHeading: "'Plus Jakarta Sans', sans-serif" },
    features: [
      { tag: "GLOBAL SCALE", title: "99.999% Reliability", desc: "Redundant systems across 46 countries with zero downtime.", meta: "UPTIME: 99.999%" },
      { tag: "CRISP DEPTH", title: "Multi-Tier Elevation", desc: "0 2px 5px rgba(50,50,93,0.1) creates crystalline depth.", meta: "SHADOW: L3" },
      { tag: "CONVERSION", title: "Optimized Checkout Flow", desc: "Adaptive payment methods increasing conversion by 11.9%.", meta: "DELTA: +11.9%" }
    ],
    philosophy: ["Off-white canvas #F7FAFC with pristine white cards.", "Signature Stripe Indigo #635BFF accent.", "Multi-layered realistic elevation shadows."],
    antiPatterns: ["No harsh 100% black shadows.", "No sloppy unstructured typography."],
    prompt: `[DESIGN.md - Stripe Crisp FinTech Archetype]\nRole: Financial Infrastructure UI Lead.\nStyle: Canvas #F7FAFC, Cards #FFFFFF, Indigo #635BFF. Multi-tier soft shadows (0 4px 6px -1px rgba(50,50,93,0.11)). Radius 8px.`
  },

  tremor: {
    id: "tremor",
    name: "Tremor Analytics",
    category: "saas",
    badge: "Data-Dense Dashboard",
    tagline: "정밀한 에메랄드 KPI 지표와 고밀도 분석 대시보드",
    navBrand: "TREMOR.ANALYTICS",
    heroBadge: "TELEMETRY ENGINE // PROD",
    heroTitle: "Modular dashboards for modern engineering.",
    heroSubtitle: "Dense information hierarchies, clean sparklines, and muted delta tags (+14.2%) tailored for high-frequency performance observability.",
    ctaPrimary: "Deploy Telemetry",
    ctaSecondary: "Inspect Charts ↗",
    tokens: { bg: "#090E17", surface: "#111827", border: "#1F2937", accent: "#10B981", textPrimary: "#F3F4F6", fontHeading: "'Inter', sans-serif" },
    features: [
      { tag: "METRIC 01", title: "Revenue Velocity", desc: "$142,850.00 ARR with real-time stream synchronization.", meta: "+24.8% YOY" },
      { tag: "METRIC 02", title: "P99 Compute Latency", desc: "Optimistic WebAssembly pipeline resolving in sub-12ms intervals.", meta: "11.8MS" },
      { tag: "METRIC 03", title: "Resource Saturation", desc: "Multi-cluster memory headroom running at optimal thresholds.", meta: "42.1% USAGE" }
    ],
    philosophy: ["Dark navy background #090E17 with deep slate cards #111827.", "Vibrant Emerald #10B981 indicators for positive performance.", "High information density without visual clutter."],
    antiPatterns: ["No low-density cartoon cards.", "No bright childish colors without data meaning."],
    prompt: `[DESIGN.md - Tremor Analytics Archetype]\nRole: Senior Telemetry Dashboard Architect.\nStyle: Background #090E17, Surface #111827, Border #1F2937. Emerald accent #10B981. High information density with delta badges.`
  },

  polaris: {
    id: "polaris",
    name: "Shopify Polaris",
    category: "saas",
    badge: "Merchant Trust System",
    tagline: "포레스트 그린과 신뢰도 높은 이커머스 어드민 감성",
    navBrand: "SHOPIFY//POLARIS",
    heroBadge: "COMMERCE ENGINE v12.4",
    heroTitle: "The commerce platform built for global growth.",
    heroSubtitle: "Designed to help merchants manage inventory, process orders, and build trust with customers across omnichannel storefronts.",
    ctaPrimary: "Manage Storefront",
    ctaSecondary: "Orders Overview ↗",
    tokens: { bg: "#F6F6F7", surface: "#FFFFFF", border: "#E1E3E5", accent: "#008060", textPrimary: "#202223", fontHeading: "-apple-system, sans-serif" },
    features: [
      { tag: "ORDERS", title: "Fulfillment Pipeline", desc: "Automated routing across global warehouse partner hubs.", meta: "99.8% ON-TIME" },
      { tag: "PAYMENTS", title: "Shop Pay Accelerated", desc: "One-click checkout boosting customer conversion rates.", meta: "+50% SPEED" },
      { tag: "SECURITY", title: "PCI DSS Level 1 Certified", desc: "Full end-to-end tokenized compliance on every transaction.", meta: "VERIFIED" }
    ],
    philosophy: ["Merchant canvas #F6F6F7 with pure white cards.", "Shopify Forest Green #008060 accent.", "Rounded 12px corners that project calm reliability."],
    antiPatterns: ["No aggressive dark hackers modes in commerce context.", "No ambiguous unlabeled buttons."],
    prompt: `[DESIGN.md - Shopify Polaris Archetype]\nRole: E-Commerce Experience Lead.\nStyle: Canvas #F6F6F7, Surface #FFFFFF, Border #E1E3E5, Forest Green #008060. Radius 12px. Clean tabular layouts and reassurance banners.`
  },

  antd: {
    id: "antd",
    name: "Ant Design Enterprise",
    category: "saas",
    badge: "Enterprise Standard",
    tagline: "앤트 블루와 4px 각진 모서리의 엄격한 기업용 B2B 시스템",
    navBrand: "ANT.ENTERPRISE",
    heroBadge: "B2B DESIGN SYSTEM 5.0",
    heroTitle: "An enterprise-class UI design language.",
    heroSubtitle: "Engineered for complex workflows, rigorous form controls, deep data tables, and strict hierarchical typography scales.",
    ctaPrimary: "Create Entity",
    ctaSecondary: "Table Schema ↗",
    tokens: { bg: "#F5F5F5", surface: "#FFFFFF", border: "#F0F0F0", accent: "#1677FF", textPrimary: "#1F1F1F", fontHeading: "-apple-system, sans-serif" },
    features: [
      { tag: "GRID 01", title: "Dense Table Pagination", desc: "Dynamic sorting, batch operations, and column reordering.", meta: "PAGE SIZE: 50" },
      { tag: "FORM 02", title: "Cascading Validation", desc: "Strict schema verification with inline feedback messages.", meta: "STATUS: VALID" },
      { tag: "HIERARCHY 03", title: "System Breadcrumbs", desc: "Multi-level enterprise navigational tree supporting 10+ tiers.", meta: "TIER 04" }
    ],
    philosophy: ["Enterprise gray background #F5F5F5 and crisp white cards #FFFFFF.", "Compact 4px border-radius and Ant Blue #1677FF primary.", "Strict data-density and formal component hierarchy."],
    antiPatterns: ["No playful emojis or oversized bubbly buttons.", "No casual unstructured margins."],
    prompt: `[DESIGN.md - Ant Design Enterprise Archetype]\nRole: Enterprise Software Architect.\nStyle: Canvas #F5F5F5, Cards #FFFFFF, Border #F0F0F0, Ant Blue #1677FF. Radius 4px. High density table and form layouts.`
  },

  // ==========================================
  // 3. DARK & DEVELOPER (개발자·터미널)
  // ==========================================
  geist: {
    id: "geist",
    name: "Vercel Geist Monochrome",
    category: "dark_dev",
    badge: "Pure Black & Wireframe",
    tagline: "순수 블랙, 칼 같은 흑백 대비, 교차점(+) 격자 그리드",
    navBrand: "▲ VERCEL.GEIST",
    heroBadge: "FRAMEWORK DEFINED INFRASTRUCTURE",
    heroTitle: "Develop. Preview. Ship. At global speed.",
    heroSubtitle: "Zero color noise. Pure black and stark white. Precision hairline grid lines with crosshair intersection markers (+) for hyper-focused engineers.",
    ctaPrimary: "Deploy to Edge",
    ctaSecondary: "Documentation ↗",
    tokens: { bg: "#000000", surface: "#000000", border: "#222222", accent: "#FFFFFF", textPrimary: "#FFFFFF", fontHeading: "'Inter', sans-serif" },
    features: [
      { tag: "EDGE // 01", title: "Instant Global Invalidation", desc: "Edge functions executing in 18 regions worldwide.", meta: "+ CROSSHAIR" },
      { tag: "SCALE // 02", title: "Zero Configuration Builds", desc: "Automatic framework detection and asset optimization.", meta: "+ CROSSHAIR" },
      { tag: "OBSERVE // 03", title: "Real-Time Log Stream", desc: "Streaming console telemetry with zero buffered delay.", meta: "+ CROSSHAIR" }
    ],
    philosophy: ["Pitch black background #000000 with razor-thin #222222 grid rules.", "Absolute monochrome typography without saturated colors.", "Crosshair markers (+) at structural intersections."],
    antiPatterns: ["Never use colorful card gradients.", "No drop shadows or soft rounded pastels."],
    prompt: `[DESIGN.md - Vercel Geist Monochrome Archetype]\nRole: Principal Frontend Platform Architect.\nStyle: Pure Black #000000, 1px solid #222222 borders, stark White #FFFFFF typography. Radius 6px. Zero shadows. Crosshair intersection markers (+).`
  },

  linear: {
    id: "linear",
    name: "Linear Precision Dark",
    category: "dark_dev",
    badge: "Obsidian & 1px Hairline",
    tagline: "옵시디언 다크와 상단 1px 그라데이션 광택의 정밀성",
    navBrand: "LINEAR.CORE",
    heroBadge: "CYCLE 42 • SPRINT ACCELERATED",
    heroTitle: "The issue tracking tool you'll actually enjoy.",
    heroSubtitle: "Obsidian dark precision, razor-sharp 1px borders, subtle gradient highlights, and lightning-fast keyboard-first interactions.",
    ctaPrimary: "Start Issue Cycle",
    ctaSecondary: "Command Menu ⌘K",
    tokens: { bg: "#08090A", surface: "#0F1012", border: "rgba(255,255,255,0.08)", accent: "#5E6AD2", textPrimary: "#F7F8F8", fontHeading: "'Inter', sans-serif" },
    features: [
      { tag: "SYNC // 01", title: "Sub-50ms Synchronized State", desc: "Optimistic updates with background CRDT conflict resolution.", meta: "STATUS: NOMINAL" },
      { tag: "ROUTING // 02", title: "Deterministic Linear Pipeline", desc: "Zero-latency issue triage powered by native WebAssembly runtime.", meta: "LATENCY: 14MS" },
      { tag: "KEYBOARD // 03", title: "Command Palette Architecture", desc: "Everything reachable in two keystrokes. Built for terminal natives.", meta: "SHORTCUT: ⌘+K" }
    ],
    philosophy: ["Obsidian canvas #08090A and card surface #0F1012.", "Top 1px gradient highlight simulating directional overhead light.", "Monospaced status metadata chips and keyboard shortcuts."],
    antiPatterns: ["No heavy drop shadows or bubbly borders.", "Never use raw pure white background."],
    prompt: `[DESIGN.md - Linear Precision Dark Archetype]\nRole: Senior Systems Product Designer.\nStyle: Canvas #08090A, Surface #0F1012, Border 1px solid rgba(255,255,255,0.08), Accent #5E6AD2. Card top-edge highlight. Keyboard-driven shortcuts (⌘K).`
  },

  midday: {
    id: "midday",
    name: "Midday Financial",
    category: "dark_dev",
    badge: "Obsidian & Blaze Orange",
    tagline: "딥 옵시디언과 블레이즈 오렌지의 고감도 핀테크 감성",
    navBrand: "MIDDAY.AI",
    heroBadge: "TRANSACTIONS ENGINE v4.1",
    heroTitle: "Run your business without the financial chaos.",
    heroSubtitle: "Engineered with v0-grade dark minimalism, stark monochrome card surfaces, blaze orange (#F54900) highlights, and monospaced currency ledgers.",
    ctaPrimary: "Connect Financial Feed",
    ctaSecondary: "Ledger View ↗",
    tokens: { bg: "#0C0C0C", surface: "#141414", border: "rgba(255,255,255,0.08)", accent: "#F54900", textPrimary: "#F5F5F5", fontHeading: "'JetBrains Mono', monospace" },
    features: [
      { tag: "LEDGER 01", title: "Automated Reconciliation", desc: "Real-time bank feed ingestion mapped to tax categories.", meta: "$48,290.00" },
      { tag: "INVOICE 02", title: "One-Click Invoicing", desc: "International multi-currency invoices payable in crypto and fiat.", meta: "PAID: TODAY" },
      { tag: "RUNWAY 03", title: "Burn Rate Predictor", desc: "Deterministic cashflow forecasting updated every midnight.", meta: "14.2 MONTHS" }
    ],
    philosophy: ["Deep obsidian canvas #0C0C0C with blaze orange #F54900 accents.", "Monospaced currency figures and status tags.", "High contrast without visual fatigue."],
    antiPatterns: ["No soft pastel gradients.", "No cluttered multi-colored chart legends."],
    prompt: `[DESIGN.md - Midday Financial Archetype]\nRole: AI-Native FinTech Design Engineer.\nStyle: Background #0C0C0C, Cards #141414, Accent Blaze Orange #F54900. JetBrains Mono typography for currency figures.`
  },

  primer: {
    id: "primer",
    name: "GitHub Primer",
    category: "dark_dev",
    badge: "Developer Canvas",
    tagline: "깃허브 다크와 커밋 그린(#238636)의 전 세계 개발자 공용어",
    navBrand: "GITHUB//PRIMER",
    heroBadge: "MAIN BRANCH • COMMIT 8F2A1C",
    heroTitle: "Where the world builds software together.",
    heroSubtitle: "The design system behind millions of repositories. GitHub Dark (#0D1117), commit diff green (#238636), and familiar developer-native primitives.",
    ctaPrimary: "Create Pull Request",
    ctaSecondary: "Browse Commits ↗",
    tokens: { bg: "#0D1117", surface: "#161B22", border: "#30363D", accent: "#238636", textPrimary: "#E6EDF3", fontHeading: "-apple-system, sans-serif" },
    features: [
      { tag: "DIFF // 01", title: "Code Review Ergonomics", desc: "Side-by-side split diff viewing with syntax highlight hooks.", meta: "+148 -12" },
      { tag: "ACTION // 02", title: "Continuous CI/CD Matrix", desc: "Multi-platform container runners executing on merge events.", meta: "PASSING" },
      { tag: "ISSUE // 03", title: "Milestone Tracking Board", desc: "Scrum burn-down charts directly wired into git tags.", meta: "V2.4 RELEASE" }
    ],
    philosophy: ["GitHub Dark background #0D1117 with surface #161B22.", "Signature Commit Diff Green #238636 primary button.", "Crisp 6px border radius with border #30363D."],
    antiPatterns: ["No flashy neon disco colors.", "No non-semantic decorative badges."],
    prompt: `[DESIGN.md - GitHub Primer Archetype]\nRole: Developer Tooling Lead.\nStyle: Background #0D1117, Cards #161B22, Border #30363D, Commit Green #238636. Radius 6px. Code-first layout.`
  },

  tui: {
    id: "tui",
    name: "Terminal TUI (ASCII)",
    category: "dark_dev",
    badge: "100% Monospace CLI",
    tagline: "문자 격자 정렬, 아스키 박스 드로잉, 해커 CLI 콘솔",
    navBrand: "TTY//0.SYSTEM",
    heroBadge: "SYS_KERNEL: ONLINE // PORT 8080",
    heroTitle: "Terminal interface stream initialized.",
    heroSubtitle: "Every single element aligns to a strict 100% monospace character grid. Pure phosphor green (#38EF7D) on void black, styled with ASCII border lines.",
    ctaPrimary: "[EXECUTE_BINARY]",
    ctaSecondary: "[HELP_DOCS_--MAN]",
    tokens: { bg: "#0C1017", surface: "#05080C", border: "#38EF7D", accent: "#38EF7D", textPrimary: "#38EF7D", fontHeading: "'Space Mono', monospace" },
    features: [
      { tag: "TTY//01", title: "+-- PIPE: INGESTION --+", desc: "| Streaming syslog stdin at 10400 bps with zero packet drops. |", meta: "STATUS: 200" },
      { tag: "TTY//02", title: "+-- STACK: MEMORY --+", desc: "| Allocating 512MB heap block to sandbox virtual container. |", meta: "HEAP: OK" },
      { tag: "TTY//03", title: "+-- PROCESS: DAEMON --+", desc: "| PID 4128 polling background socket telemetry listener. |", meta: "DAEMON: RUN" }
    ],
    philosophy: ["100% Monospace font strictly required across all elements.", "Phosphor green text #38EF7D on terminal black #0C1017.", "Borders styled with ASCII-inspired lines and brackets ([ ])."],
    antiPatterns: ["Strictly NO rounded corners (0px only).", "No proportional sans-serif fonts."],
    prompt: `[DESIGN.md - Terminal TUI Archetype]\nRole: UNIX Kernel Hacker & CLI Systems Architect.\nStyle: Canvas #0C1017, Text & Accent #38EF7D (Phosphor Green). Strict 0px radius. 100% Space Mono typography. ASCII-styled borders.`
  },

  // ==========================================
  // 4. HARDWARE & INDUSTRIAL (로봇·계기판)
  // ==========================================
  carbon: {
    id: "carbon",
    name: "IBM Carbon Industrial",
    category: "hardware",
    badge: "Mission Critical Enterprise",
    tagline: "엄격한 0px 모서리, 2px 포커스 림, 산업용 블루와 그레이",
    navBrand: "IBM//CARBON.v11",
    heroBadge: "MISSION CRITICAL SYSTEM • GRID 2X",
    heroTitle: "Built for mission-critical cloud telemetry.",
    heroSubtitle: "Zero decorative curves. Strict 0px geometric corners, high-contrast industrial blue (#0F62FE), and disciplined 2px focus borders.",
    ctaPrimary: "Deploy Infrastructure",
    ctaSecondary: "Resource Specs ↗",
    tokens: { bg: "#161616", surface: "#262626", border: "#393939", accent: "#0F62FE", textPrimary: "#F4F4F4", fontHeading: "'Inter', sans-serif" },
    features: [
      { tag: "GRID 2X", title: "Industrial Proportion", desc: "Rigorous 8px spatial intervals governing all component boundaries.", meta: "RATIO: 1:1" },
      { tag: "STATUS 02", title: "Fail-Safe Redundancy", desc: "Immediate visual alerting through high-contrast status tokens.", meta: "CRITICAL" },
      { tag: "ACCESS 03", title: "Keyboard Precision Focus", desc: "Uncompromising 2px solid contrast ring on every focused state.", meta: "FOCUS: 2PX" }
    ],
    philosophy: ["Strictly 0px border-radius across all containers and buttons.", "Industrial gray palette (#161616 / #262626) with IBM Blue #0F62FE.", "Robust high-contrast state outlines."],
    antiPatterns: ["Never use rounded squircles or soft blurred shadows.", "No playful informal copy."],
    prompt: `[DESIGN.md - IBM Carbon Industrial Archetype]\nRole: Senior Cloud Infrastructure Lead.\nStyle: Background #161616, Cards #262626, Border #393939, IBM Blue #0F62FE. Strictly 0px border radius. Crisp 2px focus indicators.`
  },

  teenage: {
    id: "teenage",
    name: "Teenage Engineering Tactile",
    category: "hardware",
    badge: "Braun & Synthesizer Industrial",
    tagline: "매트 알루미늄 그레이, 음각 패널, 세이프티 오렌지 다이얼",
    navBrand: "TE-ENGINEERING",
    heroBadge: "OP-Z // SYNTHESIZER UNIT // HARDWARE",
    heroTitle: "Tactile hardware you can almost touch.",
    heroSubtitle: "Matte anodized aluminum surfaces (#E2E0DC), recessed grooved inset borders, physical button clicks, and safety orange (#FF4F00) rotary dials.",
    ctaPrimary: "PRESS SWITCH [REC]",
    ctaSecondary: "ROTARY DIAL ↗",
    tokens: { bg: "#E2E0DC", surface: "#D5D3CE", border: "#B8B5AE", accent: "#FF4F00", textPrimary: "#1A1918", fontHeading: "'Space Mono', monospace" },
    features: [
      { tag: "KNOB // 01", title: "Analog Parameter Dial", desc: "Tactile step modulation mapped to sub-millimeter precision.", meta: "FILTER: 420HZ" },
      { tag: "CHASSIS 02", title: "Anodized Matte Aluminum", desc: "Recessed CNC machined grooves creating tactile physical depth.", meta: "CNC: CNC-04" },
      { tag: "SWITCH 03", title: "Mechanical Spring Actuator", desc: "Crisp physical detent actuation feedback on every click.", meta: "FORCE: 60G" }
    ],
    philosophy: ["Matte aluminum gray #E2E0DC with recessed inset grooves.", "Safety orange #FF4F00 as the primary physical accent.", "Tactile physical hardware push-button feeling."],
    antiPatterns: ["No high-gloss shiny reflections.", "No generic modern SaaS blue."],
    prompt: `[DESIGN.md - Teenage Engineering Tactile Archetype]\nRole: Industrial Hardware & Synthesizer Designer.\nStyle: Matte aluminum #E2E0DC, recessed inset shadows, Safety Orange #FF4F00 accent. Space Mono typography.`
  },

  nothing: {
    id: "nothing",
    name: "Nothing Dot-Matrix",
    category: "hardware",
    badge: "Glyph & Dot Matrix",
    tagline: "순수 블랙/화이트 대비, 점선(Dotted) 분할선, 레드 LED 포인트",
    navBrand: "NOTHING (R)",
    heroBadge: "GLYPH INTERFACE • DOT MATRIX v2",
    heroTitle: "Pure transparency. Less distraction.",
    heroSubtitle: "Black-and-white minimalist tech aesthetic. Dotted (dot-matrix) dividers, red (#D71921) recording LED indicator, and glyph-like geometric clarity.",
    ctaPrimary: "ACTIVATE GLYPH",
    ctaSecondary: "DOT SPEC ↗",
    tokens: { bg: "#000000", surface: "#121212", border: "#444444", accent: "#D71921", textPrimary: "#FFFFFF", fontHeading: "'Space Mono', monospace" },
    features: [
      { tag: "GLYPH 01", title: "Luminous Light Array", desc: "Segmented notification patterns replacing screen notification fatigue.", meta: "LIGHT: 100%" },
      { tag: "DOTS 02", title: "Dot-Matrix Typography", desc: "Technical industrial typography inspired by vintage LED displays.", meta: "PITCH: 3MM" },
      { tag: "MINIMAL 03", title: "Raw Monochrome Contrast", desc: "Eliminating superfluous color to spotlight the red LED recording dot.", meta: "RED: #D71921" }
    ],
    philosophy: ["Pure black #000000 and white typography with signature red LED dot #D71921.", "Dotted borders (border: 2px dotted #444) for dividers.", "Dot-matrix technical inspiration."],
    antiPatterns: ["No colorful pastel gradients.", "No soft blurred drop shadows."],
    prompt: `[DESIGN.md - Nothing Dot-Matrix Archetype]\nRole: Hardware Interface Designer.\nStyle: Black #000000, White #FFFFFF, Signature Red LED #D71921. Dotted borders (2px dotted #444444). Space Mono typography.`
  },

  augmented: {
    id: "augmented",
    name: "Augmented Cyberpunk HUD",
    category: "hardware",
    badge: "Sci-Fi Polygon HUD",
    tagline: "45도 사선 모서리 절단(clip-path)과 네온 사이버네틱 발광",
    navBrand: "AUGMENTED//HUD.7",
    heroBadge: "TARGET LOCK: ENGAGED // SECTOR-09",
    heroTitle: "Tactical cybernetic HUD telemetry.",
    heroSubtitle: "Angled 45-degree chamfered polygon containers (clip-path), neon cyan (#00F0FF) glow outlines, live status indicators, and sci-fi cockpit telemetry.",
    ctaPrimary: "[ENGAGE_RADAR]",
    ctaSecondary: "[TACTICAL_SCAN_>]",
    tokens: { bg: "#080C14", surface: "#0D1424", border: "#00F0FF", accent: "#00F0FF", textPrimary: "#E0F7FF", fontHeading: "'Space Mono', monospace" },
    features: [
      { tag: "RADAR // 01", title: "Target Acquisition Grid", desc: "Long-range sensor telemetry scanning at 120Hz refresh rate.", meta: "LOCKED" },
      { tag: "SHIELD // 02", title: "Energy Deflection Matrix", desc: "Autonomous kinetic shield modulation running at peak flux.", meta: "98.4% FLUX" },
      { tag: "AVIONICS // 03", title: "Sub-Orbital Thruster Vector", desc: "Multi-axis plasma vectoring with dynamic yaw stabilization.", meta: "VECTOR: 45°" }
    ],
    philosophy: ["45-degree chamfered polygon clip-path on all cards and buttons.", "Glowing neon cyan #00F0FF and tactical amber borders.", "Sci-fi tactical HUD telemetry layout."],
    antiPatterns: ["Strictly NO rounded pill shapes.", "No soft consumer pastels."],
    prompt: `[DESIGN.md - Augmented Cyberpunk HUD Archetype]\nRole: Sci-Fi Avionics & HUD Interface Architect.\nStyle: Void dark #080C14, Neon Cyan #00F0FF. 45-degree chamfered clip-path on containers. Monospace HUD typography.`
  },

  // ==========================================
  // 5. EXPRESSIVE & RETRO (질감·서브컬처)
  // ==========================================
  fluent: {
    id: "fluent",
    name: "Microsoft Fluent 2 (Mica)",
    category: "expressive",
    badge: "Windows 11 Mica & Acrylic",
    tagline: "은은한 불투명 유리 질감(Mica)과 섬세한 상단 빛 반사",
    navBrand: "MICROSOFT//FLUENT",
    heroBadge: "WINDOWS 11 NATIVE DESIGN SYSTEM",
    heroTitle: "Natural, effortless, and intuitive experiences.",
    heroSubtitle: "Layered semi-transparent Mica and Acrylic materials reflecting desktop backdrops, gentle 8px corner curves, and subtle luminous top edge highlights.",
    ctaPrimary: "Launch Fluent Shell",
    ctaSecondary: "Explore Controls ↗",
    tokens: { bg: "#1F242C", surface: "rgba(40, 48, 58, 0.75)", border: "rgba(255,255,255,0.14)", accent: "#0078D4", textPrimary: "#FFFFFF", fontHeading: "'Segoe UI', 'Inter', sans-serif" },
    features: [
      { tag: "MICA // 01", title: "Translucent Material Depth", desc: "Subtle acrylic material blending foreground cards with desktop tone.", meta: "BLUR: 30PX" },
      { tag: "REVEAL // 02", title: "Luminous Edge Reflection", desc: "Top hairline highlight capturing overhead workspace light.", meta: "LIGHT: 100%" },
      { tag: "COGNITIVE // 03", title: "Calm Visual Hierarchy", desc: "Restrained Segoe UI typography scale with smooth hover transitions.", meta: "FLUENT 2" }
    ],
    philosophy: ["Semi-translucent Mica acrylic surface with backdrop blur.", "Gentle 8px radius with top edge luminous reflection.", "Fluent Windows Blue #0078D4 primary accent."],
    antiPatterns: ["No harsh unblurred flat cards.", "No jarring high-saturation neon clashes."],
    prompt: `[DESIGN.md - Microsoft Fluent 2 Mica Archetype]\nRole: Fluent Design System Architect.\nStyle: Canvas #1F242C, Acrylic cards rgba(40,48,58,0.75) with backdrop-filter blur(30px). Fluent Blue #0078D4. 8px radius.`
  },

  spatial: {
    id: "spatial",
    name: "Apple Cupertino Spatial",
    category: "expressive",
    badge: "visionOS Spatial Glass",
    tagline: "연속 곡률 20px, 고채도 프로스티드 글래스, 빛의 굴절과 깊이",
    navBrand: "APPLE//SPATIAL",
    heroBadge: "SPATIAL COMPUTING OS 2.4",
    heroTitle: "Interfaces that inhabit your physical space.",
    heroSubtitle: "Continuous 20px curvature, multi-layer frosted glass (blur 28px saturate 180%), specular edge rim lighting, and vibrant ambient refraction.",
    ctaPrimary: "Enter Spatial Mode",
    ctaSecondary: "Explore Depth Layers ⊙",
    tokens: { bg: "#0B0C1E", surface: "rgba(255, 255, 255, 0.08)", border: "rgba(255, 255, 255, 0.22)", accent: "#8B5CF6", textPrimary: "#FFFFFF", fontHeading: "'Outfit', sans-serif" },
    features: [
      { tag: "OPTICS // 01", title: "Specular Rim Refraction", desc: "Dynamic gradient border simulating physical light catching crystal.", meta: "BLUR: 28PX" },
      { tag: "AURORA // 02", title: "Chromatic Ambient Mesh", desc: "Vibrant cosmic orbs floating behind glass to reveal optical depth.", meta: "SATURATE: 180%" },
      { tag: "PHYSICS // 03", title: "Volumetric Floating Panels", desc: "Multi-tier z-axis elevation suspended naturally in mid-air.", meta: "Z-INDEX: +24" }
    ],
    philosophy: ["Heavy backdrop blur (blur 28px saturate 180%) on translucent cards.", "Continuous 20px curvature with specular white rim border.", "Pill-shaped translucent controls with ambient glow."],
    antiPatterns: ["No opaque flat cardboard boxes.", "No harsh black outlines."],
    prompt: `[DESIGN.md - Apple Cupertino Spatial Archetype]\nRole: visionOS Spatial Experience Architect.\nStyle: Cosmic indigo #0B0C1E, Frosted glass cards (blur 28px, saturate 180%). Specular edge rim borders. Curvature 20px.`
  },

  mui: {
    id: "mui",
    name: "Material 3 Expressive",
    category: "expressive",
    badge: "Google Material You",
    tagline: "딥 퍼플 톤, 부드러운 알약 쉐이프, 우아한 엘리베이션",
    navBrand: "MUI//MATERIAL.3",
    heroBadge: "MATERIAL DESIGN 3 SPECIFICATION",
    heroTitle: "Personal, adaptive, and expressive design.",
    heroSubtitle: "Deep tonal purple (#6750A4), friendly 16px card corners, prominent pill buttons, and soft elevated layers that respond gracefully to touch.",
    ctaPrimary: "Explore Components",
    ctaSecondary: "Elevation Tokens ↗",
    tokens: { bg: "#FEF7FF", surface: "#FFFFFF", border: "#E7E0EC", accent: "#6750A4", textPrimary: "#1D1B20", fontHeading: "'Roboto', 'Inter', sans-serif" },
    features: [
      { tag: "TONAL // 01", title: "Dynamic Color Harmonies", desc: "Palette algorithms generating 5 complementary tonal ranges.", meta: "PALETTE: M3" },
      { tag: "SHAPE // 02", title: "Expressive Rounding Scale", desc: "Comfortable 16px card corners and 9999px pill action buttons.", meta: "RADIUS: 16PX" },
      { tag: "ELEVATION 03", title: "Diffusion Shadow Layers", desc: "Tonal shadow tints creating organic tactile physical height.", meta: "LEVEL: 2" }
    ],
    philosophy: ["Soft lilac canvas #FEF7FF and pure white cards.", "Deep purple #6750A4 primary with pill-shaped action buttons.", "Soft multi-layered diffuse elevation shadows."],
    antiPatterns: ["No harsh 0px brutalist sharp edges.", "No cold industrial monochrome."],
    prompt: `[DESIGN.md - Material 3 Expressive Archetype]\nRole: Google Material You Specialist.\nStyle: Canvas #FEF7FF, Card #FFFFFF, Border #E7E0EC, Primary Purple #6750A4. Radius 16px for cards, 9999px for buttons.`
  },

  heroui: {
    id: "heroui",
    name: "HeroUI Glass (NextUI)",
    category: "expressive",
    badge: "Velvet Dark & Neon Violet",
    tagline: "칠흑 같은 벨벳 블랙 위 영롱한 네온 바이올렛 광원 효과",
    navBrand: "HERO.UI//NEXT",
    heroBadge: "VELVET DARK • BACKDROP SATURATE",
    heroTitle: "Make beautiful websites regardless of your design experience.",
    heroSubtitle: "Pitch black canvas (#000000), velvet violet glow accents (#7828C8), sleek translucent cards, and smooth micro-interactions built for high-end SaaS.",
    ctaPrimary: "Deploy HeroUI",
    ctaSecondary: "Glass Tokens ↗",
    tokens: { bg: "#000000", surface: "#111111", border: "rgba(255, 255, 255, 0.12)", accent: "#7828C8", textPrimary: "#FFFFFF", fontHeading: "'Outfit', sans-serif" },
    features: [
      { tag: "VELVET // 01", title: "Pitch Black Contrast", desc: "Pure black backdrop making vibrant violet glows leap off the screen.", meta: "GLOW: #7828C8" },
      { tag: "GLASS // 02", title: "Translucent Card Shading", desc: "Backdrop blur layered with delicate white border reflections.", meta: "BLUR: 20PX" },
      { tag: "RIPPLE // 03", title: "Chromatic Feedback", desc: "Fluid radial burst ripple animations on every touch event.", meta: "RIPPLE: ACTIVE" }
    ],
    philosophy: ["Deep black #000000 canvas with neon violet #7828C8 accents.", "Translucent dark glass cards with 16px radius.", "Smooth glowing hover states."],
    antiPatterns: ["No dull washed-out grays.", "No thick clumsy borders."],
    prompt: `[DESIGN.md - HeroUI Glass Archetype]\nRole: High-Impact Frontend Visual Lead.\nStyle: Black #000000, Surface #111111, Accent Neon Violet #7828C8. 16px radius, frosted glass backdrop filters.`
  },

  daisyui: {
    id: "daisyui",
    name: "DaisyUI Synthwave Brutal",
    category: "expressive",
    badge: "Retro Synthwave Neon",
    tagline: "딥 바이올렛, 네온 핑크, 네온 옐로우의 80년대 신스웨이브",
    navBrand: "DAISY//SYNTHWAVE",
    heroBadge: "SYNTHWAVE THEME • 100% RETRO",
    heroTitle: "Outrun the boring web with neon energy.",
    heroSubtitle: "Deep synthwave purple canvas (#1A103C), high-voltage hot pink (#FF5ACD) buttons, electric cyan (#00E5FF) highlights, and 80s arcade nostalgia.",
    ctaPrimary: "HIT THE OVERDRIVE",
    ctaSecondary: "NEON MATRIX ↗",
    tokens: { bg: "#1A103C", surface: "#271A52", border: "#4D3880", accent: "#FF5ACD", textPrimary: "#F9F5FD", fontHeading: "'Space Grotesk', sans-serif" },
    features: [
      { tag: "NEON // 01", title: "Hot Pink Glowing Buttons", desc: "Saturated button glow (0 0 16px #FF5ACD) that demands instant clicks.", meta: "GLOW: 100%" },
      { tag: "PURPLE 02", title: "Outrun Night Sky", desc: "Deep rich violet surfaces inspired by 80s retro sunset aesthetics.", meta: "#1A103C" },
      { tag: "PUNCH // 03", title: "Bold Typography Pop", desc: "Space Grotesk headings styled with glowing cyberpunk attitude.", meta: "POP: MAX" }
    ],
    philosophy: ["Synthwave purple canvas #1A103C and deep purple cards #271A52.", "Hot pink #FF5ACD with glowing neon drop shadows.", "Playful 80s retro attitude."],
    antiPatterns: ["No corporate gray-on-gray fatigue.", "No dull low-contrast elements."],
    prompt: `[DESIGN.md - DaisyUI Synthwave Archetype]\nRole: Retro Creative Technologist.\nStyle: Canvas #1A103C, Cards #271A52, Accent Hot Pink #FF5ACD. Glowing neon shadows. Space Grotesk typography.`
  },

  neumorphism: {
    id: "neumorphism",
    name: "Soft Neumorphism",
    category: "expressive",
    badge: "Embossed Tactile Depth",
    tagline: "배경과 동일한 표면에서 솟아오르는 양각/음각 플라스틱 질감",
    navBrand: "SOFT//NEUMORPH",
    heroBadge: "EXTRUDED SURFACE • ZERO BORDER",
    heroTitle: "Surfaces extruded directly from the canvas.",
    heroSubtitle: "Cards and buttons share the exact same gray-blue plastic material (#E0E5EC) as the background, shaped purely through dual-directional light and shadow.",
    ctaPrimary: "Push Embossed Button",
    ctaSecondary: "Debossed Inset Panel",
    tokens: { bg: "#E0E5EC", surface: "#E0E5EC", border: "transparent", accent: "#3B82F6", textPrimary: "#2D3748", fontHeading: "'Plus Jakarta Sans', sans-serif" },
    features: [
      { tag: "EXTRUDE 01", title: "Dual Light Shading", desc: "Top-left white reflection (#FFF) and bottom-right dark shadow (#A3B1C6).", meta: "9PX BLUR" },
      { tag: "TACTILE 02", title: "Physical Inset Depression", desc: "Buttons visibly depress into the surface on active click states.", meta: "DEPRESSED" },
      { tag: "BORDERLESS", title: "Zero Hard Outlines", desc: "Pure morphological depth without a single stroke divider.", meta: "STROKE: 0PX" }
    ],
    philosophy: ["Canvas and surfaces MUST share the exact same color #E0E5EC.", "Zero borders. Depth is created strictly via dual shadows (9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff).", "Buttons push into the surface on click using inset shadows."],
    antiPatterns: ["Never use hard outline borders.", "Never make card background color different from canvas color."],
    prompt: `[DESIGN.md - Soft Neumorphism Archetype]\nRole: Physical Skeuomorphic Material Designer.\nStyle: Background & Surface #E0E5EC. Border: none. box-shadow: 9px 9px 18px #a3b1c6, -9px -9px 18px #ffffff. Active inset shadows. Radius 16px.`
  },

  win98: {
    id: "win98",
    name: "98.css Classic Win95",
    category: "expressive",
    badge: "Windows 95/98 Nostalgia",
    tagline: "네이비 타이틀 바, 입체 회색 픽셀 베벨, 90년대 클래식 OS",
    navBrand: "C:\\WINDOWS\\SYSTEM98",
    heroBadge: "MICROSOFT WINDOWS 98 [VERSION 4.10]",
    heroTitle: "Welcome to Windows 98. It's ready.",
    heroSubtitle: "Classic desktop teal (#008080), 3D beveled outset gray buttons (#C0C0C0), signature navy blue title bars (#000080), and satisfying pixel clicks.",
    ctaPrimary: "OK [Enter]",
    ctaSecondary: "Cancel [Esc]",
    tokens: { bg: "#008080", surface: "#C0C0C0", border: "#808080", accent: "#000080", textPrimary: "#000000", fontHeading: "-apple-system, 'MS Sans Serif', sans-serif" },
    features: [
      { tag: "BEVEL 01", title: "3D Outset Beveled Borders", desc: "Top-left white #FFFFFF and bottom-right gray #808080 creating 3D depth.", meta: "BEVEL: 2PX" },
      { tag: "TITLEBAR", title: "Active Window Focus", desc: "High-contrast navy titlebar (#000080) with iconic close [X] box.", meta: "FOCUS: TRUE" },
      { tag: "PIXEL 03", title: "Tactile Button Depression", desc: "Buttons invert their bevel lighting on mouse-down click.", meta: "INSET 3D" }
    ],
    philosophy: ["Desktop teal background #008080 with gray windows #C0C0C0.", "Strictly 0px radius with 3D beveled outset borders (white top/left, dark gray bottom/right).", "Navy title bars #000080 with crisp pixelated buttons."],
    antiPatterns: ["Strictly NO rounded corners (0px only).", "No modern flat blurry shadows."],
    prompt: `[DESIGN.md - 98.css Classic Win95 Archetype]\nRole: Retro Desktop Operating System Engineer.\nStyle: Canvas #008080, Window #C0C0C0, Titlebar #000080. 3D Bevel borders: white #FFF top-left, gray #808080 bottom-right. 0px radius.`
  },

  nes: {
    id: "nes",
    name: "NES.css 8-Bit Arcade",
    category: "expressive",
    badge: "Retro 8-Bit Gaming",
    tagline: "계단식 픽셀 아트 보더, 8비트 아케이드 RPG 감성",
    navBrand: "ARCADE//8-BIT.NES",
    heroBadge: "PRESS START • PLAYER 1 READY",
    heroTitle: "It's dangerous to go alone! Take this.",
    heroSubtitle: "Stepped pixel art borders, chunky 8-bit arcade colors (Crimson Red, Pixel Green, Coin Yellow), and nostalgic retro video game dialog cards.",
    ctaPrimary: "▶ START GAME",
    ctaSecondary: "CONTINUE...",
    tokens: { bg: "#212529", surface: "#FFFFFF", border: "#000000", accent: "#209CEE", textPrimary: "#FFFFFF", fontHeading: "'Space Mono', monospace" },
    features: [
      { tag: "LVL 99", title: "Stepped Pixel Art Borders", desc: "Multi-layered drop-shadow trickery simulating retro CRT scanlines.", meta: "PIXEL: 4PX" },
      { tag: "ITEM 02", title: "Primary 8-Bit Palette", desc: "Vibrant arcade red, coin yellow, and 1-up green command states.", meta: "LIVES: x3" },
      { tag: "EXP 03", title: "Dialog Box Interaction", desc: "Chunky monospace text prompts with classic gaming typewriter rhythm.", meta: "GOLD: 9999" }
    ],
    philosophy: ["Pixelated stepped borders (box-shadow or chunky 4px black outlines).", "Arcade colors: Blue #209CEE, Red #E76E55, Yellow #F7D51D, Green #92CC41.", "Chunky retro gaming dialogue boxes."],
    antiPatterns: ["Strictly NO smooth modern anti-aliased curves.", "No gentle subtle pastels."],
    prompt: `[DESIGN.md - NES.css 8-Bit Arcade Archetype]\nRole: 8-Bit Video Game UI Designer.\nStyle: Canvas #212529, Surface #FFFFFF with 4px black pixel borders. Pixelated button push states. Arcade gaming colors.`
  },

  papercss: {
    id: "papercss",
    name: "PaperCSS Sketchbook",
    category: "expressive",
    badge: "Hand-Drawn Whiteboard",
    tagline: "삐뚤빼뚤한 불규칙 손그림 외곽선과 연필 스케치 그림자",
    navBrand: "PAPER.SKETCHBOOK",
    heroBadge: "HAND-DRAWN PROTOTYPE • DRAFT #01",
    heroTitle: "Ideas sketched by hand on real paper.",
    heroSubtitle: "Asymmetrical organic border-radius (255px 15px 225px 15px...), pencil sketch drop shadows, and friendly blueprint hand-drawn whiteboard notes.",
    ctaPrimary: "Sketch An Idea ✎",
    ctaSecondary: "Erase Draft",
    tokens: { bg: "#FFFDF9", surface: "#FFFFFF", border: "#41403E", accent: "#0071DE", textPrimary: "#41403E", fontHeading: "'Plus Jakarta Sans', sans-serif" },
    features: [
      { tag: "NOTE // 01", title: "Hand-Drawn Border Wobble", desc: "Irregular border-radius values simulating natural human pen strokes.", meta: "WOBBLE: 8°" },
      { tag: "SKETCH 02", title: "Pencil Graphite Shading", desc: "Soft offset pencil drop shadow that feels hand-stamped onto paper.", meta: "GRAPHITE" },
      { tag: "ANALOG 03", title: "Informal Whiteboard Poise", desc: "Unpretentious warmth inviting collaborative feedback.", meta: "PAPER: WARM" }
    ],
    philosophy: ["Warm paper canvas #FFFDF9 with wobbly hand-drawn borders.", "Asymmetrical border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px.", "Pencil sketch shadows box-shadow: 2px 8px 4px -6px rgba(0,0,0,0.3)."],
    antiPatterns: ["No rigid mathematical straight lines.", "No clinical high-tech dark glows."],
    prompt: `[DESIGN.md - PaperCSS Sketchbook Archetype]\nRole: Creative Whiteboard Illustrator.\nStyle: Canvas #FFFDF9, Ink #41403E. Border: 2px solid #41403E with border-radius: 255px 15px 225px 15px/15px 225px 15px 255px. Pencil drop shadow.`
  },

  atlassian: {
    id: "atlassian",
    name: "Atlassian Productivity",
    category: "expressive",
    badge: "Jira / Confluence ADS",
    tagline: "3px 모서리, 단단한 섀도우, 코발트 블루와 대문자 배지",
    navBrand: "ATLASSIAN//JIRA",
    heroBadge: "SPRINT 14 • KANBAN BOARD",
    heroTitle: "Move work forward with clarity and poise.",
    heroSubtitle: "Crisp 3px corner radiuses, structured Jira Kanban card borders, firm solid shadows (0 1px 1px rgba(9,30,66,0.25)), and cobalt blue (#0052CC) action states.",
    ctaPrimary: "Create Issue",
    ctaSecondary: "Kanban Board ↗",
    tokens: { bg: "#F4F5F7", surface: "#FFFFFF", border: "#DFE1E6", accent: "#0052CC", textPrimary: "#172B4D", fontHeading: "-apple-system, sans-serif" },
    features: [
      { tag: "IN PROGRESS", title: "Kanban Card Column", desc: "Structured issue tiles with priority status flags and avatar stacks.", meta: "STORY: 8" },
      { tag: "LOZENGE", title: "Uppercase Status Badges", desc: "High-contrast semantic tags for IN REVIEW, APPROVED, and BLOCKED.", meta: "STATUS: OK" },
      { tag: "METRIC 03", title: "Velocity Sprint Burndown", desc: "Deterministic team velocity tracking against cycle time milestones.", meta: "42 PTS" }
    ],
    philosophy: ["Atlassian light canvas #F4F5F7 and crisp white cards #FFFFFF.", "Crisp 3px border-radius and firm shadow 0 1px 1px rgba(9,30,66,0.25).", "Cobalt blue #0052CC primary and uppercase lozenge badges."],
    antiPatterns: ["No oversized bubbly 24px+ radiuses.", "No moody dark hacker modes in corporate project tracking."],
    prompt: `[DESIGN.md - Atlassian Productivity Archetype]\nRole: Atlassian Design System (ADS) Architect.\nStyle: Canvas #F4F5F7, Cards #FFFFFF, Border #DFE1E6, Cobalt Blue #0052CC. Radius 3px. Firm solid shadow (0 1px 1px rgba(9,30,66,0.25)).`
  },

  neobrutalism: {
    id: "neobrutalism",
    name: "Neo-Brutalism Pop",
    category: "expressive",
    badge: "Retro Pop & Hard Shadows",
    tagline: "3px 블랙 외곽선, 하드 섀도우, 사이버 옐로우와 네오 민트",
    navBrand: "RADICAL.UI★",
    heroBadge: "⚡ 100% RAW & UNAPOLOGETIC",
    heroTitle: "Make Things That Slap. No Corporate BS.",
    heroSubtitle: "Bold typography, thick 3px solid black outlines, zero-blur drop shadows (box-shadow: 5px 5px 0 #000), and high-voltage retro pop colors.",
    ctaPrimary: "GRAB THE BUNDLE ➔",
    ctaSecondary: "READ MANIFESTO ✌️",
    tokens: { bg: "#FFF9E6", surface: "#FFFFFF", border: "#000000", accent: "#FFE600", textPrimary: "#000000", fontHeading: "'Archivo Black', sans-serif" },
    features: [
      { tag: "STYLE #01", title: "Zero-Blur Hard Shadows", desc: "box-shadow: 5px 5px 0px #000. Real tactile physical depth.", meta: "POP: MAX" },
      { tag: "VIBE #02", title: "High-Voltage Electric Pop", desc: "Cyber Yellow, Neo Mint, and Bubblegum destroying grayscale boredom.", meta: "#FFE600" },
      { tag: "ATTITUDE #03", title: "Tilted Badges & Stickers", desc: "Micro-rotations (-2deg) give components rebel personality.", meta: "-2.5DEG" }
    ],
    philosophy: ["Thick 3px solid black outlines on all interactive elements.", "Completely unblurred hard drop shadows (box-shadow: 5px 5px 0 #000).", "Tactile push-down states (translate 3px, 3px)."],
    antiPatterns: ["Strictly NO smooth blurred shadows.", "No timid polite pastels without solid black anchoring."],
    prompt: `[DESIGN.md - Neo-Brutalist Retro Pop Archetype]\nRole: Rebellious Creative Technologist.\nStyle: Canvas #FFF9E6, Ink #000000, Accent Cyber Yellow #FFE600 & Neo Mint #05FFA1. 3px solid black borders, 5px 5px 0 #000 hard drop shadows.`
  }
,

  // New Theme: Apple iOS HIG (SwiftUI)
  ios_hig: {
    "id": "ios_hig",
    "name": "Apple iOS HIG (SwiftUI)",
    "category": "mobile_app",
    "badge": "Apple Human Interface",
    "tagline": "반투명 프로스티드 글래스와 진동 햅틱, 하단 탭 바 중심 일체감",
    "navBrand": "iOS//HIG",
    "heroBadge": "SF PRO • SQUIRCLE 20PX • SWIFTUI",
    "heroTitle": "Designed for touch, fluid by nature.",
    "heroSubtitle": "Continuous curvature squircle containers, multi-depth blur panels, and seamless gesture navigation following Apple HIG.",
    "ctaPrimary": "Open SwiftUI Sheet",
    "ctaSecondary": "Haptic Feedback ↗",
    "tokens": {
        "bg": "#000000",
        "surface": "rgba(28, 28, 30, 0.82)",
        "border": "rgba(255, 255, 255, 0.12)",
        "accent": "#007AFF",
        "textPrimary": "#FFFFFF",
        "fontHeading": "-apple-system, BlinkMacSystemFont, sans-serif"
    },
    "features": [
        {
            "tag": "SQUIRCLE",
            "title": "Continuous Curvature",
            "desc": "Superellipse corner smoothing eliminating harsh optical corners.",
            "meta": "SMOOTH: 100%"
        },
        {
            "tag": "VIBRANCY",
            "title": "Layered Blur Panels",
            "desc": "Frosted glass materials maintaining ambient legibility.",
            "meta": "BLUR: 25PX"
        },
        {
            "tag": "HAPTIC",
            "title": "Tactile Sensory Rhythm",
            "desc": "Cohesive touch feedback on segmented switches and modal pulls.",
            "meta": "TAPTIC: OK"
        }
    ],
    "philosophy": [
        "Strict adherence to Apple HIG continuous curvature (20px squircle).",
        "Frosted glass materials with backdrop-filter vibrancy.",
        "Bottom-sheet navigation and fluid springs."
    ],
    "antiPatterns": [
        "No harsh 90-degree squared boxes.",
        "No loud ungrounded neon without dark backdrop."
    ],
    "prompt": "[DESIGN.md - Apple iOS HIG Archetype]\nRole: Senior Apple Platform Interface Designer.\nStyle: Canvas #000000, Frosted Glass rgba(28,28,30,0.85), Accent iOS Blue #007AFF. Continuous curvature 20px squircles. System San Francisco typography."
},

  // New Theme: Material You (Dynamic Color)
  material_you: {
    "id": "material_you",
    "name": "Material You (Dynamic Color)",
    "category": "mobile_app",
    "badge": "Google Android M3",
    "tagline": "배경화면 컬러 추출과 28px 유기적 캡슐, 톤온톤 다이내믹 팔레트",
    "navBrand": "Android//M3",
    "heroBadge": "DYNAMIC COLOR EXTRACTION • M3",
    "heroTitle": "Personal, adaptive, and expressively yours.",
    "heroSubtitle": "Organic pill containers, dynamic tonal palette derived from user wallpaper, and friendly rounded micro-interactions.",
    "ctaPrimary": "Extract Wallpaper Tone",
    "ctaSecondary": "Dynamic Tokens ↗",
    "tokens": {
        "bg": "#FDF8F5",
        "surface": "#F3EBE6",
        "border": "rgba(184, 93, 59, 0.15)",
        "accent": "#B85D3B",
        "textPrimary": "#2A1A14",
        "fontHeading": "'Roboto', 'Plus Jakarta Sans', sans-serif"
    },
    "features": [
        {
            "tag": "DYNAMIC",
            "title": "Monet Algorithmic Color",
            "desc": "Seeds 5 key tonal palettes directly from device imagery.",
            "meta": "TONES: 5"
        },
        {
            "tag": "CAPSULE",
            "title": "28px Tonal Containers",
            "desc": "Friendly organic rounded pill shapes for primary touch targets.",
            "meta": "PILL: 28PX"
        },
        {
            "tag": "EXPRESSIVE",
            "title": "Human Centric Depth",
            "desc": "Gentle warm shadows that avoid cold industrial harshness.",
            "meta": "ELEVATION: 2"
        }
    ],
    "philosophy": [
        "Organic pill shapes with generous 28px curvature.",
        "Warm terracotta/sand tonal palettes extracted algorithmically.",
        "Human-centric warmth and fluid layout ripples."
    ],
    "antiPatterns": [
        "No cold emotionless wireframes.",
        "No razor-sharp 0px rectangular edges."
    ],
    "prompt": "[DESIGN.md - Material You Archetype]\nRole: Google Android M3 Design Architect.\nStyle: Canvas #FDF8F5, Surface #F3EBE6, Accent #B85D3B. 28px pill buttons and organic cards. Humanist warmth."
},

  // New Theme: Spotify Wrapped Vibrant Dark
  spotify: {
    "id": "spotify",
    "name": "Spotify Wrapped Vibrant Dark",
    "category": "mobile_app",
    "badge": "Vibrant Streaming Dark",
    "tagline": "암흑 배경 위 네온 그린(#1DB954)과 핫핑크 그라데이션의 몰입감",
    "navBrand": "SPOTIFY.MUSIC",
    "heroBadge": "WRAPPED 2026 • HIGH VOLTAGE",
    "heroTitle": "Soundtrack your life with neon vibrance.",
    "heroSubtitle": "Pitch-black canvas overlaid with explosive Spotify Green (#1DB954) accents, vibrant album artwork gradients, and zero-distraction dark mode.",
    "ctaPrimary": "Play Top Track ▶",
    "ctaSecondary": "View Wrapped ↗",
    "tokens": {
        "bg": "#121212",
        "surface": "#181818",
        "border": "#282828",
        "accent": "#1DB954",
        "textPrimary": "#FFFFFF",
        "fontHeading": "'Plus Jakarta Sans', sans-serif"
    },
    "features": [
        {
            "tag": "AUDIO",
            "title": "High-Contrast Neon",
            "desc": "Spotify Green #1DB954 exploding over true pitch black.",
            "meta": "ENERGY: MAX"
        },
        {
            "tag": "MEDIA",
            "title": "Album Art Centric",
            "desc": "Dynamic color blooming matched to active track metadata.",
            "meta": "BLOOM: ON"
        },
        {
            "tag": "PILL",
            "title": "Smooth Capsule Targets",
            "desc": "Fully rounded action buttons designed for thumb accuracy.",
            "meta": "TOUCH: 48PX"
        }
    ],
    "philosophy": [
        "Pure pitch black #121212 foundation.",
        "High-voltage Spotify Green #1DB954 accents.",
        "Card focus centered strictly on rich multimedia previews."
    ],
    "antiPatterns": [
        "No bland gray-on-gray monotony.",
        "No small difficult-to-tap targets."
    ],
    "prompt": "[DESIGN.md - Spotify Wrapped Archetype]\nRole: Senior Mobile Audio Experience Lead.\nStyle: Canvas #121212, Surface #181818, Accent #1DB954. Full capsule buttons. High contrast neon over dark."
},

  // New Theme: Instagram Stories & Reels UI
  instagram: {
    "id": "instagram",
    "name": "Instagram Stories & Reels UI",
    "category": "mobile_app",
    "badge": "Edge-to-Edge Media",
    "tagline": "전체 화면 몰입형 미디어, 상단 진행 바, 투명 플로팅 아이콘",
    "navBrand": "instagram·media",
    "heroBadge": "IMMERSIVE REELS • 16:9 EDGE",
    "heroTitle": "Stories in motion, uncontained by borders.",
    "heroSubtitle": "Edge-to-edge media cards, micro progress bars, floating frosted icon pill buttons, and vibrant sunset brand gradients.",
    "ctaPrimary": "Share Story",
    "ctaSecondary": "Watch Reel ↗",
    "tokens": {
        "bg": "#000000",
        "surface": "rgba(255, 255, 255, 0.08)",
        "border": "rgba(255, 255, 255, 0.12)",
        "accent": "#E1306C",
        "textPrimary": "#FFFFFF",
        "fontHeading": "-apple-system, sans-serif"
    },
    "features": [
        {
            "tag": "PROGRESS",
            "title": "Micro Story Bars",
            "desc": "Segmented timer bars along top edge for glanceable sequencing.",
            "meta": "TICKS: 5S"
        },
        {
            "tag": "FLOATING",
            "title": "Overlaid Transparent Controls",
            "desc": "Translucent glass icons floating effortlessly over video canvas.",
            "meta": "OPACITY: 0.8"
        },
        {
            "tag": "GRADIENT",
            "title": "Sunset Radial Accents",
            "desc": "Iconic yellow-orange-magenta-purple brand gradient glow.",
            "meta": "SPECTRUM"
        }
    ],
    "philosophy": [
        "Full bleed edge-to-edge media presentation.",
        "Minimal UI chrome prioritizing user-generated visuals.",
        "Floating transparent glass pill controls."
    ],
    "antiPatterns": [
        "No heavy opaque sidebars or borders blocking video frames.",
        "No static rigid desktop layouts."
    ],
    "prompt": "[DESIGN.md - Instagram Stories Archetype]\nRole: Mobile Social Product Architect.\nStyle: Canvas #000000, Overlays rgba(255,255,255,0.1), Sunset Accent #E1306C. Edge-to-edge media orientation."
},

  // New Theme: Duolingo Playful Gamification
  duolingo: {
    "id": "duolingo",
    "name": "Duolingo Playful Gamification",
    "category": "mobile_app",
    "badge": "Playful Learning Game",
    "tagline": "두툼한 볼륨감의 굵은 3D 입체 베벨 버튼과 경쾌한 캐릭터 컬러",
    "navBrand": "duo·lingo",
    "heroBadge": "STREAK 128 DAYS 🔥 • LEVEL UP",
    "heroTitle": "Learn a language, bite by bite.",
    "heroSubtitle": "Chunky 3D push-down buttons (border-bottom 4px), joyful feather green (#58CC02), and friendly gamified achievement cards.",
    "ctaPrimary": "START LESSON (+10 XP)",
    "ctaSecondary": "Leaderboard ↗",
    "tokens": {
        "bg": "#FFFFFF",
        "surface": "#F7F7F7",
        "border": "#E5E5E5",
        "accent": "#58CC02",
        "textPrimary": "#4B4B4B",
        "fontHeading": "'Plus Jakarta Sans', sans-serif"
    },
    "features": [
        {
            "tag": "BEVEL",
            "title": "3D Chunky Push Buttons",
            "desc": "Satisfying 4px solid bottom borders that depress upon click.",
            "meta": "BEVEL: 4PX"
        },
        {
            "tag": "GAMIFIED",
            "title": "Streak Counter Telemetry",
            "desc": "Fiery orange streak gems and XP counters motivating daily habits.",
            "meta": "+10 XP"
        },
        {
            "tag": "JOYFUL",
            "title": "Friendly Bouncy Curves",
            "desc": "20px generous radius with expressive high-contrast outlines.",
            "meta": "RADIUS: 20PX"
        }
    ],
    "philosophy": [
        "Chunky 3D buttons with deep bottom bevels (translateY on active).",
        "Cheerful primary palette: Feather Green #58CC02 and Sunburst Yellow #FFC800.",
        "Delightful gamification micro-rewards."
    ],
    "antiPatterns": [
        "Strictly NO boring solemn enterprise grayscale.",
        "No flat unclickable-looking text links."
    ],
    "prompt": "[DESIGN.md - Duolingo Gamified Archetype]\nRole: Senior Gamification & Mobile UI Lead.\nStyle: Canvas #FFFFFF, Cards #F7F7F7, Accent Feather Green #58CC02. Chunky 3D buttons with 4px bottom bevels. 20px radius."
},

  // New Theme: Airbnb Soft Hospitality
  airbnb: {
    "id": "airbnb",
    "name": "Airbnb Soft Hospitality",
    "category": "mobile_app",
    "badge": "Soft Travel Hospitality",
    "tagline": "따뜻한 코랄 레드(#FF385C) 포인트와 부드러운 16px 숙소 카드",
    "navBrand": "airbnb·stays",
    "heroBadge": "EXPERIENCES • ANYWHERE",
    "heroTitle": "Belong anywhere with gentle warmth.",
    "heroSubtitle": "Welcoming 16px rounded cards, signature Rausch coral red (#FF385C), soft elevation shadows, and human-first typography.",
    "ctaPrimary": "Explore Stays",
    "ctaSecondary": "View on Map ↗",
    "tokens": {
        "bg": "#FFFFFF",
        "surface": "#FFFFFF",
        "border": "#EBEBEB",
        "accent": "#FF385C",
        "textPrimary": "#222222",
        "fontHeading": "'Plus Jakarta Sans', sans-serif"
    },
    "features": [
        {
            "tag": "RAUSCH",
            "title": "Warm Coral Red Point",
            "desc": "Signature brand warmth inspiring exploration and hospitality.",
            "meta": "#FF385C"
        },
        {
            "tag": "PREVIEW",
            "title": "Soft Rounded Tiles",
            "desc": "16px rounded image carousels with subtle price pill badges.",
            "meta": "16PX ROUND"
        },
        {
            "tag": "SEARCH",
            "title": "Floating Pill Search Bar",
            "desc": "Expansive pill-shaped inputs with gentle multi-tier shadows.",
            "meta": "SHADOW: L2"
        }
    ],
    "philosophy": [
        "Clean white canvas with Rausch coral red #FF385C accents.",
        "Friendly 16px border-radius and welcoming generous imagery.",
        "Human-first search pills with smooth elevation."
    ],
    "antiPatterns": [
        "No aggressive dark hackers modes in hospitality context.",
        "No harsh black drop shadows."
    ],
    "prompt": "[DESIGN.md - Airbnb Hospitality Archetype]\nRole: Consumer Experience Design Lead.\nStyle: Canvas #FFFFFF, Cards #FFFFFF, Accent Coral #FF385C. Radius 16px. Soft realistic elevation and friendly typography."
},

  // New Theme: Uber Base Web & App
  uber: {
    "id": "uber",
    "name": "Uber Base Web & App",
    "category": "mobile_app",
    "badge": "Mobility High-Contrast",
    "tagline": "모빌리티 특화 고대비 흑백, 거대한 하단 CTA, 실시간 경로 벡터",
    "navBrand": "Uber//Move",
    "heroBadge": "DISPATCH KERNEL • REALTIME",
    "heroTitle": "Go anywhere, get anything seamlessly.",
    "heroSubtitle": "Stark monochrome contrast, prominent full-width action buttons, crisp 8px radii, and hyper-reliable mobility layouts.",
    "ctaPrimary": "Request Ride Now",
    "ctaSecondary": "View Route ↗",
    "tokens": {
        "bg": "#000000",
        "surface": "#141414",
        "border": "#2E2E2E",
        "accent": "#276EF1",
        "textPrimary": "#FFFFFF",
        "fontHeading": "-apple-system, sans-serif"
    },
    "features": [
        {
            "tag": "CONTRAST",
            "title": "High-Contrast Monochrome",
            "desc": "Pure black and crisp white ensuring sunlight visibility on city streets.",
            "meta": "RATIO: 21:1"
        },
        {
            "tag": "ACTION",
            "title": "Full-Width Primary CTA",
            "desc": "Unmissable bottom action button engineered for walking thumbs.",
            "meta": "HEIGHT: 56PX"
        },
        {
            "tag": "TELEMETRY",
            "title": "Live Route Vectoring",
            "desc": "Minimalist blue vector routes on dark desaturated maps.",
            "meta": "GPS: ACTIVE"
        }
    ],
    "philosophy": [
        "High contrast monochrome for rapid glanceability on the move.",
        "Generous touch targets with 8px radius.",
        "Utilitarian clarity over unnecessary decorative fluff."
    ],
    "antiPatterns": [
        "No subtle hard-to-read low contrast text.",
        "No dainty undersized click targets."
    ],
    "prompt": "[DESIGN.md - Uber Base Mobile Archetype]\nRole: Senior Mobility Systems Designer.\nStyle: Canvas #000000, Surface #141414, Accent Blue #276EF1. 8px radius, maximum contrast and oversized primary action buttons."
},

  // New Theme: Revolut Neo-Bank Dark
  revolut: {
    "id": "revolut",
    "name": "Revolut Neo-Bank Dark",
    "category": "mobile_app",
    "badge": "Next-Gen Fintech",
    "tagline": "블랙 스틸 질감의 카드 프리뷰, 실시간 자산 차트, 네온 악센트",
    "navBrand": "REVOLUT.PRO",
    "heroBadge": "MULTI-CURRENCY • 0% FX",
    "heroTitle": "One app for all things money.",
    "heroSubtitle": "Black steel metallic card textures, sub-second FX conversions, vibrant electric green/cyan delta charts, and high-density vaults.",
    "ctaPrimary": "Exchange Currency",
    "ctaSecondary": "Analytics Vault ↗",
    "tokens": {
        "bg": "#0D0F14",
        "surface": "#141822",
        "border": "#212838",
        "accent": "#00E5FF",
        "textPrimary": "#FFFFFF",
        "fontHeading": "'Plus Jakarta Sans', sans-serif"
    },
    "features": [
        {
            "tag": "METALLIC",
            "title": "Brushed Steel Cards",
            "desc": "Subtle specular gradients evoking physical platinum cards.",
            "meta": "FINISH: METAL"
        },
        {
            "tag": "ANALYTICS",
            "title": "Electric Cyan Sparks",
            "desc": "Real-time exchange tickers with sharp contrast delta badges.",
            "meta": "FX: LIVE"
        },
        {
            "tag": "VAULT",
            "title": "Layered Wealth Modules",
            "desc": "Crisp 16px rounded surfaces with deep navy backdrop.",
            "meta": "SECURITY: 2FA"
        }
    ],
    "philosophy": [
        "Luxury dark palette #0D0F14 with brushed steel surfaces.",
        "Electric cyan #00E5FF and green highlights for currency velocity.",
        "16px rounded containers projecting modern financial sophistication."
    ],
    "antiPatterns": [
        "No cartoonish or playful childish graphics.",
        "No antiquated banking beige."
    ],
    "prompt": "[DESIGN.md - Revolut Neo-Bank Archetype]\nRole: Lead Fintech Systems Architect.\nStyle: Canvas #0D0F14, Surface #141822, Accent Cyan #00E5FF. 16px radius. Luxury dark metallic financial interface."
},

  // New Theme: Discord Gamified Chat UI
  discord: {
    "id": "discord",
    "name": "Discord Gamified Chat UI",
    "category": "mobile_app",
    "badge": "Gaming Community Chat",
    "tagline": "좌측 원형 서버 내비게이션, 블러플(#5865F2), 채널 다크 모드",
    "navBrand": "discord·chat",
    "heroBadge": "VOICE CONNECTED 🟢 • #GENERAL",
    "heroTitle": "Your place to talk, hang out, and game.",
    "heroSubtitle": "Dark chat canvas (#313338), signature Blurple (#5865F2) action buttons, circular server indicators, and relaxed micro-reactions.",
    "ctaPrimary": "Join Server Voice",
    "ctaSecondary": "Invite Friends ↗",
    "tokens": {
        "bg": "#313338",
        "surface": "#2B2D31",
        "border": "#1E1F22",
        "accent": "#5865F2",
        "textPrimary": "#DBDEE1",
        "fontHeading": "'Plus Jakarta Sans', sans-serif"
    },
    "features": [
        {
            "tag": "BLURPLE",
            "title": "Signature Discord Purple",
            "desc": "High-contrast action brand color recognizable by gaming subcultures.",
            "meta": "#5865F2"
        },
        {
            "tag": "SERVER",
            "title": "Circular Icon Dock",
            "desc": "Vertical dock with pill hover indicator and server badges.",
            "meta": "DOCK: LEFT"
        },
        {
            "tag": "CHAT",
            "title": "Embedded Message Blocks",
            "desc": "Left-highlighted card bubbles for rich media attachments.",
            "meta": "EMBED: ON"
        }
    ],
    "philosophy": [
        "Gaming-friendly deep slate canvas #313338.",
        "Iconic Discord Blurple #5865F2 accent.",
        "Relaxed 8px radius with avatar circular accents."
    ],
    "antiPatterns": [
        "No blinding white backgrounds in voice/chat context.",
        "No rigid corporate table grids."
    ],
    "prompt": "[DESIGN.md - Discord Chat Archetype]\nRole: Community Gaming UX Architect.\nStyle: Canvas #313338, Surface #2B2D31, Accent Blurple #5865F2. 8px radius with circular icon accents."
},

  // New Theme: Telegram Minimal Messenger
  telegram: {
    "id": "telegram",
    "name": "Telegram Minimal Messenger",
    "category": "mobile_app",
    "badge": "Ultra-Fast Messenger",
    "tagline": "가벼운 성능, 빠른 로딩, 네이티브 말풍선 라운드(12px) 감성",
    "navBrand": "telegram·fast",
    "heroBadge": "CLOUD ENCRYPTED • 0.01S SYNC",
    "heroTitle": "Pure instant messaging, simple and fast.",
    "heroSubtitle": "Streamlined message bubbles, signature Sky Blue (#2EA6FF) action badges, zero overhead, and native platform fluidity.",
    "ctaPrimary": "Send Quick Message",
    "ctaSecondary": "Channel Feed ↗",
    "tokens": {
        "bg": "#0E1621",
        "surface": "#17212B",
        "border": "#242F3D",
        "accent": "#2EA6FF",
        "textPrimary": "#F5F5F5",
        "fontHeading": "-apple-system, sans-serif"
    },
    "features": [
        {
            "tag": "SPEED",
            "title": "Sub-10ms UI Responsiveness",
            "desc": "Zero heavy DOM nesting, instant bubble rendering.",
            "meta": "LATENCY: 5MS"
        },
        {
            "tag": "BUBBLE",
            "title": "12px Asymmetrical Bubbles",
            "desc": "Subtle tails directing sender/receiver speech rhythm.",
            "meta": "RADIUS: 12PX"
        },
        {
            "tag": "SKY BLUE",
            "title": "Vibrant Cyan Badge",
            "desc": "Clean read checkmarks (✓✓) and channel follower pills.",
            "meta": "#2EA6FF"
        }
    ],
    "philosophy": [
        "Clean minimal night navy canvas #0E1621.",
        "Asymmetrical 12px rounded message bubbles.",
        "Telegram Sky Blue #2EA6FF for instant readability."
    ],
    "antiPatterns": [
        "No sluggish animations delaying typing.",
        "No messy multi-colored text clutter."
    ],
    "prompt": "[DESIGN.md - Telegram Messenger Archetype]\nRole: High-Performance Mobile Messaging Lead.\nStyle: Canvas #0E1621, Surface #17212B, Accent Sky Blue #2EA6FF. 12px bubbles with instant response speed."
},

  // New Theme: SuperApp Bento Grid
  bento: {
    "id": "bento",
    "name": "SuperApp Bento Grid",
    "category": "mobile_app",
    "badge": "Dense Modular Bento",
    "tagline": "모듈형 박스들을 여백 없이 맞물려 정보 밀도를 극대화한 아시안 슈퍼앱",
    "navBrand": "BENTO//SUPERAPP",
    "heroBadge": "MULTI-SERVICE • MODULAR BENTO",
    "heroTitle": "Everything in one view, modular and dense.",
    "heroSubtitle": "Asymmetrical bento grid tiles with 14px rounded corners, interlocking service modules, and micro-app shortcuts.",
    "ctaPrimary": "Explore Bento Hub",
    "ctaSecondary": "Widget Grid ↗",
    "tokens": {
        "bg": "#F3F4F6",
        "surface": "#FFFFFF",
        "border": "#E5E7EB",
        "accent": "#1677FF",
        "textPrimary": "#111827",
        "fontHeading": "'Plus Jakarta Sans', sans-serif"
    },
    "features": [
        {
            "tag": "BENTO",
            "title": "Interlocking Asymmetric Tiles",
            "desc": "1x1, 2x1, and 2x2 grid tiles harmoniously packed.",
            "meta": "DENSITY: MAX"
        },
        {
            "tag": "PAY",
            "title": "Unified Service Shortcuts",
            "desc": "Ride, food, banking, and tickets accessible in a single screen.",
            "meta": "SERVICES: 16"
        },
        {
            "tag": "CLEAN",
            "title": "Subtle Hairline Separation",
            "desc": "Soft 1px borders avoiding visual cacophony.",
            "meta": "BORDER: 1PX"
        }
    ],
    "philosophy": [
        "Dense bento grid architecture packing multiple disparate utilities.",
        "Smooth 14px rounded tiles with subtle borders.",
        "Vibrant high-contrast utility icons."
    ],
    "antiPatterns": [
        "No sparse single-function screens with wasted white space.",
        "No unstructured messy collage."
    ],
    "prompt": "[DESIGN.md - Bento SuperApp Archetype]\nRole: Asian SuperApp Experience Architect.\nStyle: Canvas #F3F4F6, Surface #FFFFFF, Accent #1677FF. 14px bento grid modules packed efficiently."
},

  // New Theme: Nord Arctic Mobile
  nord: {
    "id": "nord",
    "name": "Nord Arctic Mobile",
    "category": "developer_cult",
    "badge": "Arctic Ice Studio",
    "tagline": "빙하 블루(#88C0D0)와 다크 슬레이트(#2E3440)의 저채도 극지방 미학",
    "navBrand": "NORD.ARCTIC",
    "heroBadge": "POLAR NIGHT • FROST #88C0D0",
    "heroTitle": "An arctic, north-bluish clean palette.",
    "heroSubtitle": "Designed for eye comfort during marathon sessions. Low saturation glacier cyans, deep slate polar canvases, and balanced typographic contrast.",
    "ctaPrimary": "Deploy Frost Kernel",
    "ctaSecondary": "Palette Tokens ↗",
    "tokens": {
        "bg": "#2E3440",
        "surface": "#3B4252",
        "border": "#4C566A",
        "accent": "#88C0D0",
        "textPrimary": "#ECEFF4",
        "fontHeading": "'JetBrains Mono', 'Inter', sans-serif"
    },
    "features": [
        {
            "tag": "POLAR",
            "title": "Low-Saturation Serenity",
            "desc": "Subtle blue-gray undertones eliminating ocular strain.",
            "meta": "#2E3440"
        },
        {
            "tag": "FROST",
            "title": "Glacier Cyan Accents",
            "desc": "Four distinct frost tones (#8FBCBB, #88C0D0, #81A1C1, #5E81AC).",
            "meta": "FROST: 4"
        },
        {
            "tag": "SNOW",
            "title": "Crisp Text Hierarchy",
            "desc": "Snow Storm whites (#D8DEE9, #E5E9F0, #ECEFF4) for readable code.",
            "meta": "CONTRAST: AAA"
        }
    ],
    "philosophy": [
        "Arctic low-saturation palette centered on Polar Night #2E3440.",
        "Glacier blue accents #88C0D0 delivering calm analytical focus.",
        "8px rounded corners with soft slate borders."
    ],
    "antiPatterns": [
        "No aggressive neon colors.",
        "No warm muddy browns or harsh white backgrounds."
    ],
    "prompt": "[DESIGN.md - Nord Arctic Archetype]\nRole: Arctic Systems Architect.\nStyle: Canvas #2E3440, Surface #3B4252, Frost Accent #88C0D0, Snow Text #ECEFF4. 8px radius. Serene arctic minimalism."
},

  // New Theme: Dracula Dark Code App
  dracula: {
    "id": "dracula",
    "name": "Dracula Dark Code App",
    "category": "developer_cult",
    "badge": "Vampire Neon Official",
    "tagline": "딥 퍼플(#282A36) 배경 위 선명한 네온 핑크(#FF79C6)와 에메랄드",
    "navBrand": "DRACULA.PRO",
    "heroBadge": "VAMPIRE MODE • 100% CULT THEME",
    "heroTitle": "Dark theme for dark souls and brilliant code.",
    "heroSubtitle": "Iconic Dracula Purple (#282A36), electrifying neon pink (#FF79C6) and green (#50FA7B) highlights, with unmistakable syntax contrast.",
    "ctaPrimary": "Cast Vampire Spell",
    "ctaSecondary": "Dracula Pro ↗",
    "tokens": {
        "bg": "#282A36",
        "surface": "#44475A",
        "border": "#6272A4",
        "accent": "#FF79C6",
        "textPrimary": "#F8F8F2",
        "fontHeading": "'JetBrains Mono', sans-serif"
    },
    "features": [
        {
            "tag": "VAMPIRE",
            "title": "Iconic Purple Canvas",
            "desc": "Deep gothic navy-purple #282A36 providing cult dev aesthetic.",
            "meta": "#282A36"
        },
        {
            "tag": "NEON",
            "title": "High-Voltage Pink & Green",
            "desc": "Neon Pink #FF79C6 and Emerald Green #50FA7B command states.",
            "meta": "#FF79C6"
        },
        {
            "tag": "CONTRAST",
            "title": "Syntax Sharp Hierarchy",
            "desc": "Yellow #F1FA8C, Cyan #8BE9FD, and Orange #FFB86C accents.",
            "meta": "DEV VIBE"
        }
    ],
    "philosophy": [
        "Vampire purple canvas #282A36 with selection slate #44475A.",
        "High-voltage neon pink #FF79C6 and emerald #50FA7B highlights.",
        "8px modern rounded card edges with JetBrains Mono code."
    ],
    "antiPatterns": [
        "No dull grayscale or boring washed-out pastels.",
        "No plain generic blue buttons."
    ],
    "prompt": "[DESIGN.md - Dracula Archetype]\nRole: Senior Cult Developer Systems Lead.\nStyle: Canvas #282A36, Surface #44475A, Pink #FF79C6, Green #50FA7B. 8px radius. JetBrains Mono."
},

  // New Theme: Catppuccin Pastel Mobile
  catppuccin: {
    "id": "catppuccin",
    "name": "Catppuccin Pastel Mobile",
    "category": "developer_cult",
    "badge": "Soothing Pastel Mocha",
    "tagline": "라벤더(#B4BEFE)와 피치, 마음이 편안해지는 따스한 파스텔 톤",
    "navBrand": "catppuccin·mocha",
    "heroBadge": "WARM SOOTHING PASTEL • MOCHA BASE",
    "heroTitle": "Cozy vibes for high-focus developers.",
    "heroSubtitle": "Soothing warm mocha dark base (#1E1E2E) complemented by soft lavender and peach pastel highlights that eliminate ocular strain.",
    "ctaPrimary": "Brew Fresh Mocha",
    "ctaSecondary": "Flavor Palettes ↗",
    "tokens": {
        "bg": "#1E1E2E",
        "surface": "#313244",
        "border": "#45475A",
        "accent": "#B4BEFE",
        "textPrimary": "#CDD6F4",
        "fontHeading": "'Plus Jakarta Sans', sans-serif"
    },
    "features": [
        {
            "tag": "MOCHA",
            "title": "Warm Dark Chocolate Base",
            "desc": "Earthy dark base #1E1E2E softer on eyes than pure black.",
            "meta": "#1E1E2E"
        },
        {
            "tag": "LAVENDER",
            "title": "Soft Pastel Flourishes",
            "desc": "Lavender #B4BEFE, Peach #FAB387, and Mauve #CBA6F7.",
            "meta": "PASTEL"
        },
        {
            "tag": "COZY",
            "title": "12px Comfort Radius",
            "desc": "Warm rounded corners creating an inviting intimate workspace.",
            "meta": "12PX ROUND"
        }
    ],
    "philosophy": [
        "Soothing warm mocha #1E1E2E canvas.",
        "Tender pastel colors: Lavender #B4BEFE and Peach #FAB387.",
        "12px gentle rounded cards."
    ],
    "antiPatterns": [
        "No harsh 100% saturated neon glare.",
        "No cold clinical hospital grays."
    ],
    "prompt": "[DESIGN.md - Catppuccin Mocha Archetype]\nRole: Human Ergonomics & Theme Designer.\nStyle: Canvas #1E1E2E, Surface #313244, Lavender Accent #B4BEFE, Peach #FAB387. 12px radius. Soothing cozy pastel tone."
},

  // New Theme: Gruvbox Earthy Mobile
  gruvbox: {
    "id": "gruvbox",
    "name": "Gruvbox Earthy Mobile",
    "category": "developer_cult",
    "badge": "Retro Analog Warmth",
    "tagline": "70~80년대 레트로 웜 브라운(#282828), 크림 텍스트, 시그니처 오렌지",
    "navBrand": "GRUVBOX.RETRO",
    "heroBadge": "ANALOG VINTAGE • ZERO BLUE LIGHT",
    "heroTitle": "Warm earthy tones with retro soul.",
    "heroSubtitle": "Earthy dark brown canvas (#282828), retro cream text (#EBDBB2), and warm safety orange (#FE8019) preventing eye fatigue.",
    "ctaPrimary": "Warm Vintage Boot",
    "ctaSecondary": "Color Specs ↗",
    "tokens": {
        "bg": "#282828",
        "surface": "#3C3836",
        "border": "#504945",
        "accent": "#FE8019",
        "textPrimary": "#EBDBB2",
        "fontHeading": "'Space Mono', monospace"
    },
    "features": [
        {
            "tag": "ANALOG",
            "title": "Zero Blue Light Warmth",
            "desc": "Earthy brown background #282828 eliminating optical fatigue.",
            "meta": "#282828"
        },
        {
            "tag": "VINTAGE",
            "title": "Retro Safety Orange",
            "desc": "Signature warm orange #FE8019 and olive green #B8BB26.",
            "meta": "#FE8019"
        },
        {
            "tag": "SHARP",
            "title": "Crisp 4px Retro Bevel",
            "desc": "Firm compact buttons reminiscent of vintage audio amplifiers.",
            "meta": "RADIUS: 4PX"
        }
    ],
    "philosophy": [
        "Warm earthy dark canvas #282828 and cream text #EBDBB2.",
        "Retro orange #FE8019 and forest green #B8BB26 accents.",
        "Compact 4px corners with tactile analog warmth."
    ],
    "antiPatterns": [
        "Strictly NO cold blue light.",
        "No modern translucent glass or floating blur."
    ],
    "prompt": "[DESIGN.md - Gruvbox Earthy Archetype]\nRole: Vintage Computing & Hardware Interface Architect.\nStyle: Canvas #282828, Surface #3C3836, Accent Orange #FE8019, Text #EBDBB2. 4px radius. Space Mono."
},

  // New Theme: Tokyo Night Neon Mobile
  tokyonight: {
    "id": "tokyonight",
    "name": "Tokyo Night Neon Mobile",
    "category": "developer_cult",
    "badge": "Cyberpunk Neon-Noir",
    "tagline": "도쿄 심야의 딥 인디고(#1A1B26)와 일렉트릭 블루/마젠타 네온",
    "navBrand": "TOKYO//NIGHT",
    "heroBadge": "SHINJUKU MIDNIGHT • NEON-NOIR",
    "heroTitle": "The neon glow of rain-slicked Tokyo streets.",
    "heroSubtitle": "Deep midnight indigo background (#1A1B26) accented by vibrant neon blue (#7AA2F7) and magenta (#BB9AF7) for supreme cybernetic immersion.",
    "ctaPrimary": "Enter Shinjuku Grid",
    "ctaSecondary": "Neon Telemetry ↗",
    "tokens": {
        "bg": "#1A1B26",
        "surface": "#24283B",
        "border": "#414868",
        "accent": "#7AA2F7",
        "textPrimary": "#C0CAF5",
        "fontHeading": "'JetBrains Mono', 'Inter', sans-serif"
    },
    "features": [
        {
            "tag": "MIDNIGHT",
            "title": "Deep Indigo Night Canvas",
            "desc": "Atmospheric navy #1A1B26 evoking midnight skyscraper rain.",
            "meta": "#1A1B26"
        },
        {
            "tag": "ELECTRIC",
            "title": "Electric Blue & Magenta",
            "desc": "Vibrant neon highlights (#7AA2F7 & #BB9AF7) piercing through dark.",
            "meta": "NEON: ON"
        },
        {
            "tag": "ELEGANT",
            "title": "8px Cyber Edge Precision",
            "desc": "Balanced modern radius keeping terminal dashboards sleek.",
            "meta": "8PX EDGE"
        }
    ],
    "philosophy": [
        "Midnight indigo canvas #1A1B26 reflecting rain-slicked cyber streets.",
        "Electric cyan-blue #7AA2F7 and neon magenta #BB9AF7 accents.",
        "8px refined curvature with sharp JetBrains Mono typography."
    ],
    "antiPatterns": [
        "No warm beige or paper textures.",
        "No washed-out low contrast pastel mush."
    ],
    "prompt": "[DESIGN.md - Tokyo Night Archetype]\nRole: Cyberpunk Visual Architect.\nStyle: Canvas #1A1B26, Surface #24283B, Electric Blue #7AA2F7, Magenta #BB9AF7. 8px radius. Neon-noir aesthetic."
},

  // New Theme: Solarized Precision Mobile
  solarized: {
    "id": "solarized",
    "name": "Solarized Precision Mobile",
    "category": "developer_cult",
    "badge": "Optical Science Contrast",
    "tagline": "인간 시각 수용 과학에 기반한 청록빛(Base03)과 정밀 수학적 대비",
    "navBrand": "SOLARIZED.OPTIC",
    "heroBadge": "CIELAB CALIBRATED • 100% BALANCED",
    "heroTitle": "Mathematically calibrated optical clarity.",
    "heroSubtitle": "Designed using CIELAB color space for uniform perceptual luminance across all hue angles. Base03 cyan dark foundation with amber and cyan accents.",
    "ctaPrimary": "Calibrate Photons",
    "ctaSecondary": "CIELAB Matrix ↗",
    "tokens": {
        "bg": "#002B36",
        "surface": "#073642",
        "border": "#586E75",
        "accent": "#2AA198",
        "textPrimary": "#839496",
        "fontHeading": "'Space Mono', monospace"
    },
    "features": [
        {
            "tag": "CIELAB",
            "title": "Uniform Perceptual Steps",
            "desc": "Scientifically measured luminance steps eliminating contrast hotspots.",
            "meta": "ΔE &lt; 2.0"
        },
        {
            "tag": "BASE03",
            "title": "Deep Teal Optical Ground",
            "desc": "Distinctive cyan-undertone dark #002B36 reducing pupil fatigue.",
            "meta": "#002B36"
        },
        {
            "tag": "CHROMATIC",
            "title": "Balanced Cyan & Yellow",
            "desc": "Precision complementary accents (#2AA198 & #B58900).",
            "meta": "OPTIC: LAB"
        }
    ],
    "philosophy": [
        "CIELAB color space precision: Base03 #002B36 dark background.",
        "Cyan #2AA198 and amber #B58900 accents calibrated for optical ease.",
        "6px clean engineering border-radius."
    ],
    "antiPatterns": [
        "No arbitrary uncalibrated RGB hex colors.",
        "No glaring high-contrast white text."
    ],
    "prompt": "[DESIGN.md - Solarized Precision Archetype]\nRole: Optical Color Scientist & Systems Architect.\nStyle: Canvas #002B36, Surface #073642, Accent Cyan #2AA198, Text #839496. 6px radius. Space Mono."
},

  // New Theme: Uber Base Web Enterprise
  baseweb: {
    "id": "baseweb",
    "name": "Uber Base Web Enterprise",
    "category": "saas_fintech",
    "badge": "Enterprise Mobility",
    "tagline": "군더더기 없는 화이트/그레이 배경과 선명한 블루 액센트의 실용적 UI",
    "navBrand": "BASE.WEB",
    "heroBadge": "ENTERPRISE ROBUSTNESS • 4PX",
    "heroTitle": "Accessible, robust enterprise systems.",
    "heroSubtitle": "Engineered by Uber for bulletproof accessibility, high information density, strict 4px radius, and clear semantic blue actions.",
    "ctaPrimary": "Deploy Base Component",
    "ctaSecondary": "Design Tokens ↗",
    "tokens": {
        "bg": "#FFFFFF",
        "surface": "#F6F6F6",
        "border": "#E2E2E2",
        "accent": "#276EF1",
        "textPrimary": "#000000",
        "fontHeading": "-apple-system, BlinkMacSystemFont, sans-serif"
    },
    "features": [
        {
            "tag": "A11Y",
            "title": "WCAG AAA Compliance",
            "desc": "Full accessibility baked into every native component primitive.",
            "meta": "A11Y: AAA"
        },
        {
            "tag": "TOKEN",
            "title": "Enterprise Token Matrix",
            "desc": "Deterministic spacing, elevation, and typographic scale.",
            "meta": "4PX GRID"
        },
        {
            "tag": "ROBUST",
            "title": "High-Throughput Usability",
            "desc": "Crisp black and Base Blue #276EF1 action hierarchy.",
            "meta": "UPTIME: 99.9%"
        }
    ],
    "philosophy": [
        "Clean enterprise white #FFFFFF canvas and #F6F6F6 surfaces.",
        "Strict 4px border-radius and crisp #E2E2E2 dividers.",
        "Uber Base Blue #276EF1 for deterministic primary intent."
    ],
    "antiPatterns": [
        "No speculative artistic flourishes in critical workflows.",
        "No non-standard ambiguous icons."
    ],
    "prompt": "[DESIGN.md - Uber Base Web Archetype]\nRole: Senior Enterprise Systems Architect.\nStyle: Canvas #FFFFFF, Surface #F6F6F6, Border #E2E2E2, Accent #276EF1. 4px radius. High accessibility."
},

  // New Theme: Radix UI Themes
  radix: {
    "id": "radix",
    "name": "Radix UI Themes",
    "category": "saas_fintech",
    "badge": "Neutral Modern Standard",
    "tagline": "완벽하게 분할된 중립색 계열과 부드러운 인디고 블루 악센트",
    "navBrand": "RADIX.THEMES",
    "heroBadge": "HEADLESS ACCESSIBLE • WORKOS",
    "heroTitle": "The modern foundation for design engineering.",
    "heroSubtitle": "Harmonious scales of 12 distinct steps, accessible keyboard interactions, and clean slate surfaces built for high-scale SaaS products.",
    "ctaPrimary": "Inspect Primitives",
    "ctaSecondary": "Theme Playground ↗",
    "tokens": {
        "bg": "#0F1216",
        "surface": "#16191E",
        "border": "#252B34",
        "accent": "#3E63DD",
        "textPrimary": "#ECEEF0",
        "fontHeading": "'Inter', sans-serif"
    },
    "features": [
        {
            "tag": "SCALE 12",
            "title": "12-Step Color Scales",
            "desc": "Engineered contrast pairs for app background, hover, border, and solid text.",
            "meta": "STEPS: 12"
        },
        {
            "tag": "KEYBOARD",
            "title": "Accessible Primitives",
            "desc": "Zero-configuration roving tabindex and focus management.",
            "meta": "W3C: PASS"
        },
        {
            "tag": "INDIGO",
            "title": "Radix Indigo #3E63DD",
            "desc": "Refined modern blue tone conveying quiet engineering competence.",
            "meta": "#3E63DD"
        }
    ],
    "philosophy": [
        "Sophisticated slate canvas #0F1216 with #16191E containers.",
        "12-step color scale with Radix Indigo #3E63DD accent.",
        "8px border-radius with crisp 1px borders."
    ],
    "antiPatterns": [
        "No inaccessible custom elements lacking ARIA attributes.",
        "No loud garish neon."
    ],
    "prompt": "[DESIGN.md - Radix UI Themes Archetype]\nRole: Lead Headless UI Systems Engineer.\nStyle: Canvas #0F1216, Surface #16191E, Border #252B34, Accent #3E63DD. 8px radius. Inter font."
},

  // New Theme: Raw Academic Brutalist Mobile
  rawbrutalist: {
    "id": "rawbrutalist",
    "name": "Raw Academic Brutalist Mobile",
    "category": "expressive_retro",
    "badge": "Pure Unadorned Print",
    "tagline": "장식을 완전히 배제하고 순수 검은색 실선과 기본 세리프 활자만 사용",
    "navBrand": "RAW.BRUTALIST",
    "heroBadge": "TIMES NEW ROMAN • 0PX NOISE",
    "heroTitle": "No decorative fluff. Only pure unmediated text.",
    "heroSubtitle": "Sharp 0px rectangular bounds, 1px solid black borders, Times New Roman typography, zero drop shadows, and ruthless information honesty.",
    "ctaPrimary": "Execute Monograph",
    "ctaSecondary": "Plain Text Rules ↗",
    "tokens": {
        "bg": "#FFFFFF",
        "surface": "#FFFFFF",
        "border": "#000000",
        "accent": "#000000",
        "textPrimary": "#000000",
        "fontHeading": "'Times New Roman', Times, serif"
    },
    "features": [
        {
            "tag": "RAW 01",
            "title": "Zero Decoration Ink",
            "desc": "100% black on white with zero drop shadows, glows, or gradients.",
            "meta": "NOISE: 0%"
        },
        {
            "tag": "SERIF 02",
            "title": "Times New Roman Grid",
            "desc": "Pure academic journal book typography communicating timeless authority.",
            "meta": "SERIF: CLASSIC"
        },
        {
            "tag": "BOX 03",
            "title": "1px Black Wireframes",
            "desc": "Simple unpretentious black outlines holding tabular data.",
            "meta": "BORDER: 1PX"
        }
    ],
    "philosophy": [
        "Pure stark white #FFFFFF canvas with solid black ink #000000.",
        "Times New Roman classical academic serif font.",
        "Strict 0px rectangular edges, zero shadows, zero gradients."
    ],
    "antiPatterns": [
        "Strictly NO border radius, NO drop shadows, NO smooth modern blurs.",
        "No pastel or decorative accent colors."
    ],
    "prompt": "[DESIGN.md - Raw Academic Brutalist Archetype]\nRole: Academic Print Purist.\nStyle: Canvas #FFFFFF, Ink #000000. 1px solid black borders, 0px border-radius everywhere. Times New Roman serif."
}
,

  // Mobile Variant: Notion Mobile Workspace
  notion_mobile: {
    "id": "notion_mobile",
    "name": "Notion Mobile Workspace",
    "category": "editorial",
    "badge": "Mobile Wiki Workspace",
    "tagline": "문서 중심의 깔끔한 화이트/웜그레이 캔버스, 토글 리스트, 가벼운 콜아웃 박스 구조",
    "navBrand": "notion·mobile",
    "heroBadge": "TOUCH WIKI • TOGGLE RHYTHM",
    "heroTitle": "Document thinking on the go.",
    "heroSubtitle": "Warm cream mobile surfaces, effortless toggle lists, lightweight callouts, and distraction-free mobile editing.",
    "ctaPrimary": "New Mobile Page",
    "ctaSecondary": "Toggle Lists ↗",
    "tokens": {
        "bg": "#FFFFFF",
        "surface": "#F7F6F3",
        "border": "#E9E9E7",
        "accent": "#2383E2",
        "textPrimary": "#37352F",
        "fontHeading": "'Plus Jakarta Sans', sans-serif"
    },
    "features": [
        {
            "tag": "TOGGLE",
            "title": "Touch Collapsible Blocks",
            "desc": "Smooth expandable content blocks tailored for phone screens.",
            "meta": "EXPAND: YES"
        },
        {
            "tag": "CALLOUT",
            "title": "Lightweight Highlight Boxes",
            "desc": "Warm shaded cards with left border accent for key take-aways.",
            "meta": "SHADE: WARM"
        },
        {
            "tag": "TYPO",
            "title": "Serif & Sans Fluidity",
            "desc": "High reading contrast without aggressive visual barriers.",
            "meta": "RHYTHM: CALM"
        }
    ],
    "philosophy": [
        "Warm ivory document canvas with 8px soft corners.",
        "Clean callout cards with left highlight accents.",
        "Effortless mobile reading rhythm."
    ],
    "antiPatterns": [
        "No aggressive dark neon tones.",
        "No bulky rigid tables breaking small screens."
    ],
    "prompt": "[DESIGN.md - Notion Mobile Workspace]\nRole: Mobile Knowledge Architect.\nStyle: Canvas #FFFFFF, Surface #F7F6F3, Border #E9E9E7, Text #37352F. 8px radius, touch toggle lists and callout blocks."
},

  // Mobile Variant: Toss App Style (Korean FinTech)
  toss_mobile: {
    "id": "toss_mobile",
    "name": "Toss App Style (Korean FinTech)",
    "category": "saas",
    "badge": "Tactile Squircle Mobile",
    "tagline": "넓은 여백, 강렬한 볼드 타이포그래피, 무시선 깔끔한 카드 위계와 20~24px 스쿼클",
    "navBrand": "toss·app",
    "heroBadge": "24PX SQUIRCLE • ZERO BORDER",
    "heroTitle": "금융의 모든 것, 손끝에서 가볍게.",
    "heroSubtitle": "24px 스쿼클 컨테이너, 경쾌한 볼드 타이포, 보더 없이 순수 음영만으로 분할되는 매끄러운 핀테크 카드.",
    "ctaPrimary": "터치로 송금하기",
    "ctaSecondary": "소비 분석 ↗",
    "tokens": {
        "bg": "#F2F4F6",
        "surface": "#FFFFFF",
        "border": "rgba(0,0,0,0.02)",
        "accent": "#3182F6",
        "textPrimary": "#191F28",
        "fontHeading": "'Plus Jakarta Sans', sans-serif"
    },
    "features": [
        {
            "tag": "SQUIRCLE",
            "title": "24px Continuous Corner",
            "desc": "Superellipse math removing optical corner stiffness on mobile OLEDs.",
            "meta": "24PX SQUIRCLE"
        },
        {
            "tag": "ZERO LINE",
            "title": "Borderless Surface Contrast",
            "desc": "Distinction through subtle color planes rather than distracting lines.",
            "meta": "BORDER: 0PX"
        },
        {
            "tag": "SPRING",
            "title": "Bouncy Tactile Touch",
            "desc": "Elastic feedback simulating physical rubberized cards.",
            "meta": "SPRING: ON"
        }
    ],
    "philosophy": [
        "Ultra-clean 24px squircle cards without sharp lines.",
        "Bold primary typography (#191F28) against gentle off-white (#F2F4F6).",
        "Springy touch micro-interactions."
    ],
    "antiPatterns": [
        "No rigid gray dividers.",
        "No small difficult-to-tap targets."
    ],
    "prompt": "[DESIGN.md - Toss App Mobile Style]\nRole: Senior Mobile Fintech Designer.\nStyle: Canvas #F2F4F6, Cards #FFFFFF, Accent Toss Blue #3182F6. Radius: 24px squircle. Borderless card elevation."
},

  // Mobile Variant: Stripe Mobile SDK
  stripe_mobile: {
    "id": "stripe_mobile",
    "name": "Stripe Mobile SDK",
    "category": "saas",
    "badge": "Mobile Invoice & Checkout",
    "tagline": "결제/핀테크 전용 다중 레이어 그림자, 세밀한 입력 폼 검증 상태 표시와 10px 폼",
    "navBrand": "STRIPE//SDK",
    "heroBadge": "PAYMENT SHEET • SECURE ENCLAVE",
    "heroTitle": "Optimized mobile checkout experience.",
    "heroSubtitle": "10px refined input forms, multi-layer elevation shadows, dynamic credit card brand detection, and rock-solid conversion rates.",
    "ctaPrimary": "Authorize Payment",
    "ctaSecondary": "View SDK Logs ↗",
    "tokens": {
        "bg": "#F8FAFC",
        "surface": "#FFFFFF",
        "border": "#E2E8F0",
        "accent": "#635BFF",
        "textPrimary": "#0A2540",
        "fontHeading": "'Plus Jakarta Sans', sans-serif"
    },
    "features": [
        {
            "tag": "FORM",
            "title": "10px Precision Input Fields",
            "desc": "Crisp focus rings with instant regex card format feedback.",
            "meta": "RADIUS: 10PX"
        },
        {
            "tag": "SHADOW",
            "title": "Multi-Tier Card Elevation",
            "desc": "Subtle multi-stop box shadows that ground the payment sheet.",
            "meta": "SHADOW: L3"
        },
        {
            "tag": "SECURITY",
            "title": "Tokenized Card Vault",
            "desc": "End-to-end encrypted biometric confirmation prompts.",
            "meta": "PCI-DSS"
        }
    ],
    "philosophy": [
        "10px refined input boxes with clear validation states.",
        "Signature Stripe Indigo #635BFF.",
        "Multi-tier soft shadows projecting credibility."
    ],
    "antiPatterns": [
        "No low-contrast confusing forms.",
        "No flashy distracting arcade themes in payment sheets."
    ],
    "prompt": "[DESIGN.md - Stripe Mobile SDK Archetype]\nRole: Mobile Payments Experience Lead.\nStyle: Canvas #F8FAFC, Cards #FFFFFF, Accent #635BFF. 10px radius, multi-layer soft shadows."
},

  // Mobile Variant: Bento Grid Productivity
  bento_prod: {
    "id": "bento_prod",
    "name": "Bento Grid Productivity",
    "category": "saas",
    "badge": "Modern Asymmetric Bento",
    "tagline": "다양한 크기의 카드 박스들을 여백 없이 맞물려 시각적 리듬감과 정보 효율 극대화",
    "navBrand": "BENTO.PROD",
    "heroBadge": "BENTO V3 • ZERO GAP RHYTHM",
    "heroTitle": "Asymmetric rhythm for modern dashboards.",
    "heroSubtitle": "Interlocking modular tiles in 1x1, 2x1, and 2x2 configurations, zero wasted space, and harmonious visual cadence.",
    "ctaPrimary": "Arrange Bento Grid",
    "ctaSecondary": "Module Metrics ↗",
    "tokens": {
        "bg": "#090A0F",
        "surface": "#12141D",
        "border": "#1F2232",
        "accent": "#6366F1",
        "textPrimary": "#F8FAFC",
        "fontHeading": "'Inter', sans-serif"
    },
    "features": [
        {
            "tag": "GRID",
            "title": "Asymmetric Tile Packing",
            "desc": "Harmoniously packed aspect ratios that lead the eye naturally.",
            "meta": "RHYTHM: DENSE"
        },
        {
            "tag": "FOCUS",
            "title": "High-Cadence Metrics",
            "desc": "Live counter widgets paired with secondary telemetry badges.",
            "meta": "MODULES: 8"
        },
        {
            "tag": "SURFACE",
            "title": "16px Micro-Bevel Tiles",
            "desc": "Subtle 1px border contrast defining each functional module.",
            "meta": "16PX RADIUS"
        }
    ],
    "philosophy": [
        "Asymmetric bento grid layout packing high-density information.",
        "Deep dark slate #090A0F with #12141D tiles.",
        "16px rounded corners with subtle hairline borders."
    ],
    "antiPatterns": [
        "No monotone equal-sized grid blocks.",
        "No low-density sparse spacing."
    ],
    "prompt": "[DESIGN.md - Bento Grid Productivity]\nRole: Senior Modular Dashboard Architect.\nStyle: Canvas #090A0F, Surface #12141D, Border #1F2232, Accent #6366F1. 16px radius, asymmetric bento layout."
},

  // Mobile Variant: Linear Mobile (Workspace Dark)
  linear_mobile: {
    "id": "linear_mobile",
    "name": "Linear Mobile (Workspace Dark)",
    "category": "dark_dev",
    "badge": "Midnight High-Density",
    "tagline": "극도로 정제된 미드나잇 다크, 13px 고밀도 폰트, 제스처 중심의 초고속 반응속도",
    "navBrand": "LINEAR//MOBILE",
    "heroBadge": "SUB-10MS GESTURES • 12PX EDGE",
    "heroTitle": "High-speed issue tracking in your pocket.",
    "heroSubtitle": "12px refined edges, 13px dense sans-serif typography, tactile swipe-to-triage gestures, and instant keyboard search.",
    "ctaPrimary": "Create Issue (C)",
    "ctaSecondary": "Command Sheet ⌘K",
    "tokens": {
        "bg": "#08090A",
        "surface": "#101216",
        "border": "rgba(255,255,255,0.08)",
        "accent": "#5E6AD2",
        "textPrimary": "#F7F8F8",
        "fontHeading": "'Inter', sans-serif"
    },
    "features": [
        {
            "tag": "GESTURE",
            "title": "Swipe-to-Triage Flow",
            "desc": "Zero-latency gesture dismiss and priority escalation on touch.",
            "meta": "LATENCY: 8MS"
        },
        {
            "tag": "DENSITY",
            "title": "13px High-Information Grid",
            "desc": "Engineered typography scale maximizing lines visible per scroll.",
            "meta": "DENSITY: +40%"
        },
        {
            "tag": "TOP RIM",
            "title": "1px Ambient Specular Highlight",
            "desc": "Delicate top edge illumination simulating obsidian glass.",
            "meta": "SPECULAR: 0.18"
        }
    ],
    "philosophy": [
        "Obsidian midnight dark #08090A foundation.",
        "12px refined border radius with 1px top edge highlight.",
        "Fast keyboard and gesture-first mobile interactions."
    ],
    "antiPatterns": [
        "No bubbly oversized toy buttons.",
        "No slow sluggish transition animations."
    ],
    "prompt": "[DESIGN.md - Linear Mobile Archetype]\nRole: Lead Mobile Product Engineer.\nStyle: Canvas #08090A, Cards #101216, Accent #5E6AD2. 12px radius, 1px top gradient highlight, 13px high density."
},

  // Mobile Variant: Vercel Geist Mobile
  geist_mobile: {
    "id": "geist_mobile",
    "name": "Vercel Geist Mobile",
    "category": "dark_dev",
    "badge": "Pure Monochrome Mobile",
    "tagline": "완전한 흑백 대비, 미세한 회색 격자선, 불필요한 장식을 완전히 배제한 극도의 미니멀리즘",
    "navBrand": "GEIST.MOBILE",
    "heroBadge": "MONOCHROME 8PX • ZERO FLUFF",
    "heroTitle": "Mobile development stripped to essence.",
    "heroSubtitle": "8px sharp edges, pitch black canvas (#000000), fine 1px gray grid lines, and absolute rejection of decorative noise.",
    "ctaPrimary": "Deploy Mobile Edge",
    "ctaSecondary": "Inspect Tokens ↗",
    "tokens": {
        "bg": "#000000",
        "surface": "#0A0A0A",
        "border": "#222222",
        "accent": "#FFFFFF",
        "textPrimary": "#EDEDED",
        "fontHeading": "'Inter', sans-serif"
    },
    "features": [
        {
            "tag": "PURE BLACK",
            "title": "OLED Pitch Black Ground",
            "desc": "True #000000 maximizing OLED battery conservation.",
            "meta": "#000000"
        },
        {
            "tag": "GRID",
            "title": "Hairline Crosshair Boundaries",
            "desc": "1px crisp gray lines (#222) providing structural certainty.",
            "meta": "1PX SOLID"
        },
        {
            "tag": "MONO",
            "title": "Absolute Zero Color Fluff",
            "desc": "Pure high-contrast white action buttons against black surfaces.",
            "meta": "CHROMA: 0%"
        }
    ],
    "philosophy": [
        "Pure pitch black #000000 canvas.",
        "8px precise corners with hairline #222 borders.",
        "Crisp monochrome contrast without decorative gradients."
    ],
    "antiPatterns": [
        "No unnecessary colorful gradients.",
        "No soft blurry drop shadows."
    ],
    "prompt": "[DESIGN.md - Vercel Geist Mobile Archetype]\nRole: Minimalist Developer Platform Designer.\nStyle: Canvas #000000, Surface #0A0A0A, Border #222222, Text #EDEDED. 8px radius, pure monochrome discipline."
},

  // Mobile Variant: Cyberpunk HUD Sci-Fi App
  cyberpunk_hud: {
    "id": "cyberpunk_hud",
    "name": "Cyberpunk HUD Sci-Fi App",
    "category": "hardware",
    "badge": "Sci-Fi Cockpit Telemetry",
    "tagline": "clip-path를 이용해 모서리를 사선으로 깎은 메카닉 계기판 스타일, 시안/옐로우 네온 발광",
    "navBrand": "CYBER//HUD.99",
    "heroBadge": "TACTICAL COCKPIT • POLAR TELEMETRY",
    "heroTitle": "Combat avionics interface online.",
    "heroSubtitle": "45-degree chamfered polygon containers (clip-path), neon cyan and amber targeting reticles, and high-cadence telemetry readouts.",
    "ctaPrimary": "ENGAGE TARGET RETICLE",
    "ctaSecondary": "Avionics Specs ↗",
    "tokens": {
        "bg": "#06080F",
        "surface": "#0D111E",
        "border": "#00F0FF",
        "accent": "#FFE600",
        "textPrimary": "#E2E8F0",
        "fontHeading": "'Space Grotesk', sans-serif"
    },
    "features": [
        {
            "tag": "CHAMFER",
            "title": "45° Diagonal Clipped Corners",
            "desc": "Geometric clip-path cuts evoking aerospace titanium chassis.",
            "meta": "ANGLE: 45°"
        },
        {
            "tag": "NEON HUD",
            "title": "Cyan & Yellow Reticle Glow",
            "desc": "High-visibility targeting lines (#00F0FF & #FFE600).",
            "meta": "HUD: ACTIVE"
        },
        {
            "tag": "HEX GRID",
            "title": "Tactical Sensor Overlays",
            "desc": "Fine coordinate grid markers for cockpit instrument panels.",
            "meta": "GRID: 12PX"
        }
    ],
    "philosophy": [
        "45-degree chamfered polygon corners using clip-path.",
        "Neon Cyan #00F0FF and Cyber Yellow #FFE600 reticle accents.",
        "Cockpit telemetry aesthetic."
    ],
    "antiPatterns": [
        "No soft organic bubble corners.",
        "No pastel muted friendly tones."
    ],
    "prompt": "[DESIGN.md - Cyberpunk HUD Sci-Fi App]\nRole: Aerospace Sci-Fi Cockpit UX Engineer.\nStyle: Canvas #06080F, Surface #0D111E. 45-degree chamfered clip-path corners, neon cyan #00F0FF borders, Space Grotesk."
},

  // Mobile Variant: Glassmorphism Frosted App
  glassmorphism_app: {
    "id": "glassmorphism_app",
    "name": "Glassmorphism Frosted App",
    "category": "expressive",
    "badge": "Translucent Light Ray Glass",
    "tagline": "반투명 유리판(backdrop-filter: blur) 위에 은은한 화이트 빛 반사 보더가 겹쳐지는 공간감",
    "navBrand": "GLASS//UI.APP",
    "heroBadge": "BLUR 30PX • SPECULAR RIM",
    "heroTitle": "Crystalline depth floating in space.",
    "heroSubtitle": "18px frosted glass panels, multi-tier backdrop blur, white specular rim reflections, and deep ambient colorful mesh lighting.",
    "ctaPrimary": "Explore Glass Stack",
    "ctaSecondary": "Refraction Index ↗",
    "tokens": {
        "bg": "#0D0A1A",
        "surface": "rgba(255, 255, 255, 0.08)",
        "border": "rgba(255, 255, 255, 0.2)",
        "accent": "#A855F7",
        "textPrimary": "#FFFFFF",
        "fontHeading": "'Plus Jakarta Sans', sans-serif"
    },
    "features": [
        {
            "tag": "FROSTED",
            "title": "Multi-Tier Backdrop Blur",
            "desc": "High-refraction blur layering creating genuine optical depth.",
            "meta": "BLUR: 30PX"
        },
        {
            "tag": "RIM LIGHT",
            "title": "Specular 1px Light Reflections",
            "desc": "Hairline white border gradients highlighting top glass edges.",
            "meta": "LIGHT: 0.25"
        },
        {
            "tag": "AMBIENT",
            "title": "Luminescent Underglow",
            "desc": "Vibrant violet and cyan background orbs shining through glass.",
            "meta": "LUMEN: HIGH"
        }
    ],
    "philosophy": [
        "Translucent glass panels with backdrop-filter: blur(30px).",
        "18px rounded corners with subtle white specular rim borders.",
        "Deep ambient gradient backdrops."
    ],
    "antiPatterns": [
        "No flat 100% opaque dull boxes.",
        "No muddy gray drop shadows."
    ],
    "prompt": "[DESIGN.md - Glassmorphism Frosted App]\nRole: Next-Gen Spatial & Glass UI Lead.\nStyle: Canvas #0D0A1A, Glass rgba(255,255,255,0.08), Border rgba(255,255,255,0.2). 18px radius, backdrop blur 30px."
},

  // Mobile Variant: Neumorphism Soft Touch
  neumorphism_touch: {
    "id": "neumorphism_touch",
    "name": "Neumorphism Soft Touch",
    "category": "expressive",
    "badge": "Embossed Plastic Tactile",
    "tagline": "배경과 동일한 색상의 부드러운 양방향 그림자를 주어 버튼과 패널이 화면에서 튀어나오거나 파여 보임",
    "navBrand": "NEU·TOUCH",
    "heroBadge": "DUAL SOFT SHADOW • EMBOSS",
    "heroTitle": "Tactile plastic molded into software.",
    "heroSubtitle": "20px soft squircle forms, seamless monochromatic surface blending (#E0E5EC), and physical embossed/debossed push depth.",
    "ctaPrimary": "Press Soft Button",
    "ctaSecondary": "Deboss Panel ↗",
    "tokens": {
        "bg": "#E0E5EC",
        "surface": "#E0E5EC",
        "border": "transparent",
        "accent": "#3B82F6",
        "textPrimary": "#334155",
        "fontHeading": "'Plus Jakarta Sans', sans-serif"
    },
    "features": [
        {
            "tag": "EMBOSS",
            "title": "Dual Multi-Angle Shadows",
            "desc": "9px 9px 18px #a3b1c6, -9px -9px 18px #ffffff extrusion.",
            "meta": "DEPTH: 9PX"
        },
        {
            "tag": "DEBOSS",
            "title": "Tactile Inset Push States",
            "desc": "Instant inset shadow inversion upon finger touch (inset 4px 4px).",
            "meta": "STATE: PRESS"
        },
        {
            "tag": "ZERO LINE",
            "title": "Border-Free Organic Mold",
            "desc": "No outline cuts. Pure light and shadow sculpting the canvas.",
            "meta": "BORDER: NONE"
        }
    ],
    "philosophy": [
        "Monochromatic canvas #E0E5EC identical to card color.",
        "Extruded dual shadows (light and dark opposite pairs).",
        "20px soft organic radii."
    ],
    "antiPatterns": [
        "Strictly NO solid black 1px borders.",
        "No colorful flat cards breaking the uniform mold."
    ],
    "prompt": "[DESIGN.md - Neumorphism Soft Touch Archetype]\nRole: Physical Ergonomics & Soft UI Designer.\nStyle: Canvas #E0E5EC, Surface #E0E5EC. Border: none! Dual shadow: 9px 9px 18px #a3b1c6, -9px -9px 18px #fff. 20px radius."
},

  // Mobile Variant: DaisyUI Neo-Brutalism Mobile
  daisyui_brutal: {
    "id": "daisyui_brutal",
    "name": "DaisyUI Neo-Brutalism Mobile",
    "category": "expressive",
    "badge": "Raw Hard Edge Pop",
    "tagline": "3px ~ 4px의 굵은 검은색 외곽선과 오프셋 하드 그림자(4px 4px 0px #000), 원색 컬러 조합",
    "navBrand": "DAISY.BRUTAL★",
    "heroBadge": "4PX HARD OUTLINE • ZERO BLUR",
    "heroTitle": "Bold outlines that pop off the glass.",
    "heroSubtitle": "8px distinct hard edges, 3px solid black contours, unblurred 4px offset drop shadows, and high-voltage retro pop vibrancy.",
    "ctaPrimary": "SMASH ACTION BUTTON",
    "ctaSecondary": "POP PALETTE ✌️",
    "tokens": {
        "bg": "#FEF08A",
        "surface": "#FFFFFF",
        "border": "#000000",
        "accent": "#F43F5E",
        "textPrimary": "#000000",
        "fontHeading": "'Archivo Black', sans-serif"
    },
    "features": [
        {
            "tag": "OUTLINE",
            "title": "3px Bold Solid Contours",
            "desc": "Thick unapologetic black outlines defining every touch boundary.",
            "meta": "BORDER: 3PX"
        },
        {
            "tag": "HARD DROP",
            "title": "Zero-Blur 4px Offset Depth",
            "desc": "box-shadow: 4px 4px 0 #000 creating solid physical presence.",
            "meta": "SHADOW: 4PX"
        },
        {
            "tag": "HIGH POP",
            "title": "Electric Primary Contrast",
            "desc": "Canary Yellow #FEF08A and Rose #F43F5E demanding immediate focus.",
            "meta": "VOLTAGE: MAX"
        }
    ],
    "philosophy": [
        "3px solid black outlines on all components.",
        "4px 4px 0 #000 zero-blur hard drop shadows.",
        "Physical push-down button action (translate 2px, 2px)."
    ],
    "antiPatterns": [
        "Strictly NO gentle blurred drop shadows.",
        "No timid polite corporate grays."
    ],
    "prompt": "[DESIGN.md - DaisyUI Neo-Brutalism Mobile]\nRole: Rebel Graphic Technologist.\nStyle: Canvas #FEF08A, Surface #FFFFFF, Ink #000000. 3px solid black borders, 4px 4px 0 #000 hard drop shadow. 8px radius."
},

  // Mobile Variant: Retro 98 OS Mobile
  win98_mobile: {
    "id": "win98_mobile",
    "name": "Retro 98 OS Mobile",
    "category": "expressive",
    "badge": "Win95 Pocket Edition",
    "tagline": "90년대 윈도우 창 느낌의 회색 입체 버튼, 네이비 타이틀 바, 레트로 픽셀 폰트 감성",
    "navBrand": "WIN98//MOBILE",
    "heroBadge": "MS-DOS COMPATIBLE • WIN32",
    "heroTitle": "Classic desktop OS in your palm.",
    "heroSubtitle": "0px sharp pixel corners, 3D outset and inset bevel borders (#FFFFFF, #808080, #000000), navy blue titlebars, and tactile gray push buttons.",
    "ctaPrimary": "Start (OK)",
    "ctaSecondary": "Cancel (Esc)",
    "tokens": {
        "bg": "#008080",
        "surface": "#C0C0C0",
        "border": "#808080",
        "accent": "#000080",
        "textPrimary": "#000000",
        "fontHeading": "-apple-system, Tahoma, sans-serif"
    },
    "features": [
        {
            "tag": "3D BEVEL",
            "title": "Physical Outset/Inset Edges",
            "desc": "Beveled highlights simulating 90s CRT plastic window panes.",
            "meta": "BEVEL: 2PX"
        },
        {
            "tag": "TITLEBAR",
            "title": "Classic Navy Blue Header",
            "desc": "Solid #000080 bar with white bold title text.",
            "meta": "WIN: ACTIVE"
        },
        {
            "tag": "TEAL",
            "title": "Iconic #008080 Wallpaper",
            "desc": "The legendary Windows 95 desktop background tone.",
            "meta": "RGB: 0,128,128"
        }
    ],
    "philosophy": [
        "Teal #008080 canvas with classic #C0C0C0 gray window panels.",
        "2px outset/inset 3D pixel bevel borders.",
        "Navy blue titlebar with white bold typography."
    ],
    "antiPatterns": [
        "Strictly NO smooth modern rounded curves.",
        "No floating blur or translucent glass."
    ],
    "prompt": "[DESIGN.md - Retro 98 OS Mobile]\nRole: Vintage Systems UI Preservationist.\nStyle: Canvas #008080, Windows #C0C0C0. Border: 2px outset #FFFFFF/#808080. Titlebar #000080. 0px radius."
},

  // Mobile Variant: NES 8-Bit Arcade App
  nes_arcade: {
    "id": "nes_arcade",
    "name": "NES 8-Bit Arcade App",
    "category": "expressive",
    "badge": "8-Bit Retro Gaming",
    "tagline": "굵은 픽셀 테두리와 원색 도트 아트, 고정폭 비트 폰트로 구현된 아케이드 게임 리포트 UI",
    "navBrand": "NES.ARCADE★",
    "heroBadge": "PRESS START • COIN 02",
    "heroTitle": "Arcade gaming glory in 8-bit dots.",
    "heroSubtitle": "0px stepped pixel borders, vibrant 8-bit palette (Arcade Blue #209CEE, Coin Gold #F7D51D, Heart Red #E76E55), and retro CRT game dialogue boxes.",
    "ctaPrimary": "INSERT COIN (1P)",
    "ctaSecondary": "HIGH SCORE ↗",
    "tokens": {
        "bg": "#1A1A24",
        "surface": "#FFFFFF",
        "border": "#000000",
        "accent": "#209CEE",
        "textPrimary": "#FFFFFF",
        "fontHeading": "'Space Mono', monospace"
    },
    "features": [
        {
            "tag": "STEPPED",
            "title": "Pixel Art Stepped Outlines",
            "desc": "Chunky 4px black pixel outlines with 4px drop-shadow step.",
            "meta": "PIXEL: 4PX"
        },
        {
            "tag": "PALETTE",
            "title": "Primary Arcade NES Colors",
            "desc": "Pure high-contrast gaming colors driving instant player action.",
            "meta": "8-BIT CRT"
        },
        {
            "tag": "RETRO",
            "title": "Monospace Quest Typography",
            "desc": "Fixed-width typewriter rhythm evoking golden age RPG dialogs.",
            "meta": "HP: 999/999"
        }
    ],
    "philosophy": [
        "Pixelated stepped 4px black borders with zero smooth curves.",
        "Arcade gaming primary palette: Blue #209CEE, Red #E76E55, Gold #F7D51D.",
        "Space Mono / 8-bit pixel typography."
    ],
    "antiPatterns": [
        "Strictly NO anti-aliased smooth curves.",
        "No subtle pastel transparency."
    ],
    "prompt": "[DESIGN.md - NES 8-Bit Arcade App]\nRole: 8-Bit Game UI Designer.\nStyle: Canvas #1A1A24, Dialog #FFFFFF with 4px black pixel borders. Arcade colors. Space Mono."
}
};

export const ALL_30_REPOSITORIES = [
  {
    "rank": 0,
    "name": "Hallmark Anti-AI-Slop",
    "repo": "Nutlope/hallmark",
    "stars": 4200,
    "starsFormatted": "4.2k",
    "category": "editorial",
    "categoryLabel": "📖 1. Editorial & Print (도면·인쇄물)",
    "desc": "Together AI 소속 Hassan El Mghari의 Anti-AI-slop 디자인 스킬. 48개 머티리얼, 3단계 품질 게이트(Floor/Reflex/Finish), sloplint 린터 제공.",
    "roleInAI": "에이전트가 생성하는 인터페이스에서 뻔한 보라색 그라데이션, 가짜 지표, 명도 대비 오류를 사전에 원천 차단",
    "themeId": "hallmark",
    "tags": [
      "Anti-Slop",
      "Floor-Gate",
      "Together-AI"
    ]
  },

  {
    "rank": 1,
    "name": "Material UI (M3)",
    "repo": "mui/material-ui",
    "stars": 95200,
    "starsFormatted": "95.2k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "Google Material Design 3 공식 리액트 구현체. 둥근 20px 필(Pill) 컨테이너와 심층 표면 색조 톤.",
    "roleInAI": "에이전트에게 직관적인 접근성과 친숙한 모바일 친화적 머티리얼 인터페이스 강제",
    "themeId": "mui",
    "tags": [
      "M3",
      "Pill Shape",
      "Deep Purple"
    ]
  },
  {
    "rank": 2,
    "name": "Ant Design Enterprise",
    "repo": "ant-design/ant-design",
    "stars": 93800,
    "starsFormatted": "93.8k",
    "category": "saas",
    "categoryLabel": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "desc": "글로벌 B2B 엔터프라이즈의 사실상 표준. 앤트 블루(#1677FF), 4px 각진 모서리, 고밀도 데이터 그리드.",
    "roleInAI": "방대한 복합 데이터 테이블 및 관리자 어드민 화면에서 일관된 정보 밀도 유지",
    "themeId": "antd",
    "tags": [
      "Enterprise",
      "B2B",
      "Compact Grid"
    ]
  },
  {
    "rank": 3,
    "name": "shadcn/ui Minimal",
    "repo": "shadcn-ui/ui",
    "stars": 74500,
    "starsFormatted": "74.5k",
    "category": "saas",
    "categoryLabel": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "desc": "모던 웹 개발 씬의 혁신. 코드 소유권 모델과 군더더기 없는 Zinc 다크 모드, 라딕스 헤드리스 프리미티브.",
    "roleInAI": "AI 생성 코드의 불필요한 번들 비대화를 막고 Tailwind v4 시맨틱 토큰 강제",
    "themeId": "shadcn",
    "tags": [
      "Copy-Paste",
      "Zinc Dark",
      "Radix"
    ]
  },
  {
    "rank": 4,
    "name": "DaisyUI Cyber Synth",
    "repo": "saadeghi/daisyui",
    "stars": 36400,
    "starsFormatted": "36.4k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "시맨틱 클래스 기반 Tailwind 컴포넌트 라이브러리. 고전압 네온 핑크와 옐로우의 사이버펑크 팝 감성.",
    "roleInAI": "극적인 시각적 임팩트와 유쾌한 채도의 레트로 퓨처리즘 UI 생성 유도",
    "themeId": "daisyui",
    "tags": [
      "Semantic CSS",
      "Neon",
      "Synthwave"
    ]
  },
  {
    "rank": 5,
    "name": "HeroUI Glass (NextUI)",
    "repo": "heroui-inc/heroui",
    "stars": 22600,
    "starsFormatted": "22.6k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "화려한 글래스모피즘과 퍼플 네온 글로우. 14px 부드러운 곡률과 몰입감 넘치는 인터랙티브 표면.",
    "roleInAI": "Web3 및 크리에이티브 SaaS 프로젝트에서 매력적인 미래지향적 심미성 부여",
    "themeId": "heroui",
    "tags": [
      "Glassmorphism",
      "Purple Glow",
      "Micro-Motion"
    ]
  },
  {
    "rank": 6,
    "name": "Blueprint CAD Schematic",
    "repo": "engineering-schematic/blueprint-css",
    "stars": 21000,
    "starsFormatted": "21.0k",
    "category": "editorial",
    "categoryLabel": "📖 1. Editorial & Print (도면·인쇄물)",
    "desc": "코발트 블루(#0A2463) 배경 위 1px 시안 모눈종이 격자선과 정밀 하드웨어 설계 도면 아키텍처.",
    "roleInAI": "엔지니어링 텔레메트리, CAD 시스템, 하드웨어 계측 대시보드 조형감 주입",
    "themeId": "blueprint",
    "tags": [
      "CAD Grid",
      "Cobalt Blue",
      "Monospace"
    ]
  },
  {
    "rank": 7,
    "name": "NES.css 8-Bit Arcade",
    "repo": "nostalgic-css/NES.css",
    "stars": 20200,
    "starsFormatted": "20.2k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "8비트 패미컴 레트로 아케이드. 계단식 픽셀 박스 보더와 원색 도트 팔레트, 대화창 말풍선.",
    "roleInAI": "게이미피케이션 및 개발자 유희적 경험을 위한 완벽한 레트로 픽셀 아트 레이아웃 강제",
    "themeId": "nes",
    "tags": [
      "8-Bit",
      "Pixel Art",
      "Gaming"
    ]
  },
  {
    "rank": 8,
    "name": "Microsoft Fluent 2 (Mica)",
    "repo": "microsoft/fluentui",
    "stars": 18300,
    "starsFormatted": "18.3k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "Windows 11 네이티브 디자인 언어. 반투명 미카(Mica) 소재, 섬세한 리빌 하이라이트와 8px 레이어링.",
    "roleInAI": "데스크톱 네이티브 OS 감성의 고급스러운 윈도우 글래스 질감 재현",
    "themeId": "fluent",
    "tags": [
      "Fluent 2",
      "Mica",
      "Windows 11"
    ]
  },
  {
    "rank": 9,
    "name": "Tremor Analytics",
    "repo": "tremorlabs/tremor",
    "stars": 16800,
    "starsFormatted": "16.8k",
    "category": "saas",
    "categoryLabel": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "desc": "고밀도 분석 대시보드를 위한 리액트 컴포넌트 셋. 슬레이트 다크 배경과 생생한 에메랄드 KPI 델타 배지.",
    "roleInAI": "데이터 시각화 시 장식적 요소를 배제하고 메트릭 가독성을 극대화하는 규칙 주입",
    "themeId": "tremor",
    "tags": [
      "Telemetry",
      "Emerald",
      "Data-Dense"
    ]
  },
  {
    "rank": 10,
    "name": "Stripe Crisp FinTech",
    "repo": "stripe/elements",
    "stars": 16200,
    "starsFormatted": "16.2k",
    "category": "saas",
    "categoryLabel": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "desc": "글로벌 SaaS 대시보드의 교과서. 인디고(#635BFF) 포인트와 정교한 다중 레이어 소프트 섀도우.",
    "roleInAI": "고객 결제 및 신뢰성 최우선 금융 환경의 최고급 시각 위계 구현",
    "themeId": "stripe",
    "tags": [
      "FinTech",
      "Indigo",
      "Layered Shadow"
    ]
  },
  {
    "rank": 11,
    "name": "Vercel Geist Monochrome",
    "repo": "vercel/geist-font",
    "stars": 12400,
    "starsFormatted": "12.4k",
    "category": "dark_dev",
    "categoryLabel": "⚡ 3. Dark & Developer (개발자·터미널)",
    "desc": "순수 블랙(#000) 배경 위 #222 미세 격자선과 흑백 극대비. 색상을 완전히 절제한 모던 개발자 플랫폼의 정점.",
    "roleInAI": "잡다한 컬러를 100% 제거하고 칼 같은 그리드 교차점(+)으로 엔지니어링 미학 완성",
    "themeId": "geist",
    "tags": [
      "Pure Black",
      "Geist Mono",
      "Zero Shadow"
    ]
  },
  {
    "rank": 12,
    "name": "98.css Classic Win95",
    "repo": "jdan/98.css",
    "stars": 10500,
    "starsFormatted": "10.5k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "90년대 레트로 OS. 틸(#008080) 데스크톱 위 네이비 타이틀바와 입체적으로 튀어나오는 3D 베벨 버튼.",
    "roleInAI": "향수를 자극하는 실물 물리 버튼의 inset/outset 베벨 촉각 경험 재현",
    "themeId": "win98",
    "tags": [
      "Win95",
      "3D Bevel",
      "Teal Desktop"
    ]
  },
  {
    "rank": 13,
    "name": "Linear Precision Dark",
    "repo": "pacocoursey/cmdk",
    "stars": 9800,
    "starsFormatted": "9.8k",
    "category": "dark_dev",
    "categoryLabel": "⚡ 3. Dark & Developer (개발자·터미널)",
    "desc": "옵시디언 미드나잇 톤(#08090A), 상단 1px 그라데이션 하이라이트, 13px 고밀도 키보드 퍼스트 워크스페이스.",
    "roleInAI": "실리콘밸리 하이테크 스타트업 특유의 다크 프리시전 및 ⌘K 단축키 위주 조작계 생성",
    "themeId": "linear",
    "tags": [
      "Obsidian",
      "1px Highlight",
      "cmdk"
    ]
  },
  {
    "rank": 14,
    "name": "Midday Financial Dark",
    "repo": "midday-ai/midday",
    "stars": 8200,
    "starsFormatted": "8.2k",
    "category": "dark_dev",
    "categoryLabel": "⚡ 3. Dark & Developer (개발자·터미널)",
    "desc": "차세대 AI 기반 비즈니스 OS. 칠흑 같은 블랙 배경과 앰버/골드 미세 보더의 럭셔리 다크 파이낸스.",
    "roleInAI": "부트스트랩/자금 관리 대시보드에서 프리미엄 럭셔리 분위기 형성",
    "themeId": "midday",
    "tags": [
      "Luxury Dark",
      "Amber Accent",
      "AI Financial"
    ]
  },
  {
    "rank": 15,
    "name": "Tufte Academic Print",
    "repo": "edwardtufte/tufte-css",
    "stars": 8100,
    "starsFormatted": "8.1k",
    "category": "editorial",
    "categoryLabel": "📖 1. Editorial & Print (도면·인쇄물)",
    "desc": "에드워드 터프티의 데이터 시각화 철학. 고전 세리프 활자, 광활한 마진 노트, 카드와 장식의 완전 배제.",
    "roleInAI": "AI가 생성하는 불필요한 차트정크(Chartjunk)를 원천 차단하고 학술 보고서 품격 부여",
    "themeId": "tufte",
    "tags": [
      "Data-Ink",
      "Cormorant",
      "Margin Notes"
    ]
  },
  {
    "rank": 16,
    "name": "IBM Carbon Design",
    "repo": "carbon-design-system/carbon",
    "stars": 7800,
    "starsFormatted": "7.8k",
    "category": "hardware",
    "categoryLabel": "🎛️ 4. Hardware & Industrial (로봇·계기판)",
    "desc": "IBM의 오픈소스 디자인 시스템. 엄격한 0px 모서리, 엔지니어링 그레이 톤, IBM Blue(#0F62FE).",
    "roleInAI": "산업용 메인프레임 및 클라우드 인프라 관리를 위한 극도의 규격화된 UI 구축",
    "themeId": "carbon",
    "tags": [
      "IBM Plex",
      "0px Sharp",
      "Mainframe"
    ]
  },
  {
    "rank": 17,
    "name": "Toss TDS (핀테크 스쿼클)",
    "repo": "toss/slash",
    "stars": 6800,
    "starsFormatted": "6.8k",
    "category": "saas",
    "categoryLabel": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "desc": "토스(Toss) 디자인 시스템. 28px의 극도로 부드러운 스쿼클 곡률과 토스 블루(#3182F6), 탄력 있는 스프링 피드백.",
    "roleInAI": "사용자 친화적이고 직관적인 모바일 휴머니스트 터치 인터페이스 유도",
    "themeId": "toss",
    "tags": [
      "Squircle",
      "Spring Motion",
      "Toss Blue"
    ]
  },
  {
    "rank": 18,
    "name": "Notion Warm Workspace",
    "repo": "notion-enhancer/notion-style",
    "stars": 6500,
    "starsFormatted": "6.5k",
    "category": "editorial",
    "categoryLabel": "📖 1. Editorial & Print (도면·인쇄물)",
    "desc": "따뜻한 아이보리(#F7F6F3) 캔버스와 자연스러운 콜아웃 박스(#F1F1EF), 산세리프-세리프의 조화로운 문서 미학.",
    "roleInAI": "방대한 사내 지식 베이스와 위키를 한 편의 깔끔한 문서처럼 읽히도록 구조화",
    "themeId": "notion",
    "tags": [
      "Warm Canvas",
      "Callouts",
      "Document UI"
    ]
  },
  {
    "rank": 19,
    "name": "PaperCSS Sketchbook",
    "repo": "papercss/papercss",
    "stars": 6400,
    "starsFormatted": "6.4k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "손으로 삐뚤빼뚤하게 그은 듯한 불규칙 곡선 보더(255px 15px 225px 15px)와 연필 스케치 그림자.",
    "roleInAI": "화이트보드 프로토타입 브레인스토밍의 친근하고 유기적인 아날로그 감성 연출",
    "themeId": "papercss",
    "tags": [
      "Hand-Drawn",
      "Wobbly Border",
      "Pencil Sketch"
    ]
  },
  {
    "rank": 20,
    "name": "Apple Cupertino Spatial",
    "repo": "konsta-ui/konsta-ui",
    "stars": 6200,
    "starsFormatted": "6.2k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "Apple HIG / visionOS 공간 컴퓨팅. 고채도 블러(saturate 180% blur 20px)와 20px 연속 곡률 글래스.",
    "roleInAI": "차세대 공간 OS 및 네이티브 iOS 수준의 프로스티드 글래스와 물리적 심도 형성",
    "themeId": "spatial",
    "tags": [
      "visionOS",
      "Frosted Glass",
      "Specular Rim"
    ]
  },
  {
    "rank": 21,
    "name": "Shopify Polaris",
    "repo": "Shopify/polaris",
    "stars": 6100,
    "starsFormatted": "6.1k",
    "category": "saas",
    "categoryLabel": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "desc": "글로벌 이커머스 운영을 위한 머천트 디자인 시스템. 포레스트 그린(#008060)과 신뢰도 높은 안정적 여백.",
    "roleInAI": "주문 처리 및 재고 관리 등 상거래 신뢰성을 뒷받침하는 차분한 어드민 구성",
    "themeId": "polaris",
    "tags": [
      "E-Commerce",
      "Forest Green",
      "Merchant Trust"
    ]
  },
  {
    "rank": 22,
    "name": "Terminal TUI (ASCII)",
    "repo": "owickstrom/the-monospace-web",
    "stars": 5400,
    "starsFormatted": "5.4k",
    "category": "dark_dev",
    "categoryLabel": "⚡ 3. Dark & Developer (개발자·터미널)",
    "desc": "100% 모노스페이스 문자 격자에 맞춰 정렬되는 해커 CLI 터미널. 2px 단선 테두리와 박스 드로잉(┌─┐).",
    "roleInAI": "텍스트 기반 터미널 도구(TUI)와 로우레벨 시스템 콘솔의 기계적 쾌감 구현",
    "themeId": "tui",
    "tags": [
      "ASCII TUI",
      "Monospace",
      "CRT Glow"
    ]
  },
  {
    "rank": 23,
    "name": "Neo-Brutalism Pop",
    "repo": "ekmas/neobrutalism-components",
    "stars": 4900,
    "starsFormatted": "4.9k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "두꺼운 3px 솔리드 블랙 외곽선, 흐림 없는 하드 오프셋 섀도우(5px 5px 0 #000), 사이버 옐로우(#FFE600).",
    "roleInAI": "단조롭고 밋밋한 카드 레이아웃을 파괴하고 시선을 강탈하는 펀치력 있는 인상 형성",
    "themeId": "neobrutalism",
    "tags": [
      "Hard Shadow",
      "Cyber Yellow",
      "Raw Outlines"
    ]
  },
  {
    "rank": 24,
    "name": "Soft Neumorphism",
    "repo": "themesberg/neumorphism-ui",
    "stars": 4800,
    "starsFormatted": "4.8k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "배경(#E0E5EC)과 카드가 완벽히 일체화된 표면. 양방향 듀얼 섀도우로 부드럽게 솟아오른 플라스틱 촉각.",
    "roleInAI": "보더 없는 평면에서 음각/양각 물리 돌출 효과를 통한 감성적 촉각 UI 연출",
    "themeId": "neumorphism",
    "tags": [
      "Dual Shadow",
      "Plastic Extrusion",
      "Soft Tactile"
    ]
  },
  {
    "rank": 25,
    "name": "Atlassian Productivity",
    "repo": "atlassian/atlaskit",
    "stars": 4500,
    "starsFormatted": "4.5k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "Jira / Confluence 엔터프라이즈 감성. 3px 정밀 모서리, 단단한 섀도우, 코발트 블루(#0052CC) 포인트.",
    "roleInAI": "칸반 보드 및 스프린트 백로그에서 확고한 위계와 대문자 LOZENGE 상태 배지 강제",
    "themeId": "atlassian",
    "tags": [
      "Jira / Confluence",
      "3px Radius",
      "Firm Shadow"
    ]
  },
  {
    "rank": 26,
    "name": "Teenage Engineering Tactile",
    "repo": "teenage-engineering/ui",
    "stars": 4200,
    "starsFormatted": "4.2k",
    "category": "hardware",
    "categoryLabel": "🎛️ 4. Hardware & Industrial (로봇·계기판)",
    "desc": "매트한 알루미늄 그레이(#E2E0DC), 안전 오렌지(#FF4F00), 미세 음각 패널과 물리 신디사이저 스위치 질감.",
    "roleInAI": "독창적인 하드웨어 장비와 사운드 기기의 조작감을 소프트웨어 UI로 완벽 승화",
    "themeId": "teenage",
    "tags": [
      "Aluminum",
      "Safety Orange",
      "Synthesizer"
    ]
  },
  {
    "rank": 27,
    "name": "Nothing Dot-Matrix",
    "repo": "nothing-tech/dot-matrix-os",
    "stars": 3600,
    "starsFormatted": "3.6k",
    "category": "hardware",
    "categoryLabel": "🎛️ 4. Hardware & Industrial (로봇·계기판)",
    "desc": "도트 매트릭스 계기판 타이포그래피, 순수 블랙 & 화이트 대비, 점선(Dotted) 구분선과 시그니처 레드(#D71921).",
    "roleInAI": "테크니컬하고 개성 넘치는 디지털 계기판 미학 주입",
    "themeId": "nothing",
    "tags": [
      "Dot Matrix",
      "Dotted Border",
      "Nothing Red"
    ]
  },
  {
    "rank": 28,
    "name": "GitHub Primer React",
    "repo": "primer/react",
    "stars": 3100,
    "starsFormatted": "3.1k",
    "category": "dark_dev",
    "categoryLabel": "⚡ 3. Dark & Developer (개발자·터미널)",
    "desc": "GitHub 공식 디자인 시스템. 딤 다크(#0D1117) 배경과 상징적인 커밋 그린(#238636) 액션 버튼.",
    "roleInAI": "전 세계 수억 명의 개발자에게 가장 익숙한 깃허브 코드 리뷰 환경의 사용성 제공",
    "themeId": "primer",
    "tags": [
      "GitHub Primer",
      "Commit Green",
      "Octicons"
    ]
  },
  {
    "rank": 29,
    "name": "Augmented Cyberpunk",
    "repo": "propjockey/augmented-ui",
    "stars": 2900,
    "starsFormatted": "2.9k",
    "category": "hardware",
    "categoryLabel": "🎛️ 4. Hardware & Industrial (로봇·계기판)",
    "desc": "모서리가 45도로 절단된 폴리곤 컨테이너(clip-path)와 네온 시안/옐로우 발광 보더의 SF 조종석 HUD.",
    "roleInAI": "우주선 계기판, 메카닉 조종실, 사이버네틱 텔레메트리 레이아웃 생성",
    "themeId": "augmented",
    "tags": [
      "Chamfer 45°",
      "Neon Cyan",
      "Sci-Fi HUD"
    ]
  },
  {
    "rank": 30,
    "name": "Impeccable Minimal",
    "repo": "pbakaus/impeccable",
    "stars": 2400,
    "starsFormatted": "2.4k",
    "category": "editorial",
    "categoryLabel": "📖 1. Editorial & Print (도면·인쇄물)",
    "desc": "AI Slop(보라색 그라데이션, 둥근 모서리 남발)을 원천 차단하는 엄격한 4토큰 다크 에디토리얼 시스템.",
    "roleInAI": "코딩 에이전트의 디자인 규율을 감독하는 안티-슬롭 린터 및 타이포그래피 수호자",
    "themeId": "impeccable",
    "tags": [
      "Anti-AI-Slop",
      "Hairline Border",
      "Editorial Minimal"
    ]
  },
  {
    "rank": 31,
    "name": "Apple iOS HIG (SwiftUI)",
    "repo": "apple/swiftui",
    "stars": 15400,
    "starsFormatted": "15.4k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "Apple HIG 및 SwiftUI 모바일 인터페이스. 20px 연속 곡률 스쿼클, 프로스티드 글래스와 진동 햅틱 감성.",
    "roleInAI": "네이티브 iOS 및 visionOS 수준의 일체감 있는 하단 탭과 햅틱 제스처 레이아웃 강제",
    "themeId": "ios_hig",
    "tags": [
      "iOS",
      "SwiftUI",
      "Squircle"
    ]
  },
  {
    "rank": 32,
    "name": "Material You (Dynamic Color)",
    "repo": "material-components/material-web",
    "stars": 21800,
    "starsFormatted": "21.8k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "Google Android Material 3. 사용자의 배경화면 컬러를 추출하는 동적 톤온톤 팔레트와 28px 유기적 캡슐.",
    "roleInAI": "인간 중심적이고 친근한 모바일 다이내믹 컬러 및 캡슐형 터치 타깃 생성",
    "themeId": "material_you",
    "tags": [
      "Material You",
      "Dynamic Color",
      "Organic Pill"
    ]
  },
  {
    "rank": 33,
    "name": "Spotify Wrapped Vibrant Dark",
    "repo": "spotify/web-api",
    "stars": 14200,
    "starsFormatted": "14.2k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "암흑 배경 위에 터지는 네온 그린(#1DB954)과 핫핑크 그라데이션. 앨범 아트 중심의 고전압 몰입감.",
    "roleInAI": "미디어 스트리밍 및 엔터테인먼트 앱에서 시선을 사로잡는 하이엔드 다크 바이브 주입",
    "themeId": "spotify",
    "tags": [
      "Spotify",
      "Neon Green",
      "Wrapped"
    ]
  },
  {
    "rank": 34,
    "name": "Instagram Stories & Reels UI",
    "repo": "meta/design-guidelines",
    "stars": 9400,
    "starsFormatted": "9.4k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "전체 화면 몰입형 미디어(Edge-to-Edge), 상단 미세 진행 바, 투명 플로팅 아이콘.",
    "roleInAI": "숏폼 비디오 및 스토리 중심 소셜 미디어의 풀스크린 모바일 인터랙션 강제",
    "themeId": "instagram",
    "tags": [
      "Instagram",
      "Reels",
      "Edge-to-Edge"
    ]
  },
  {
    "rank": 35,
    "name": "Duolingo Playful Gamification",
    "repo": "duolingo/design-system",
    "stars": 8700,
    "starsFormatted": "8.7k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "굵은 4px 입체 베벨 보더, 친근한 캐릭터 일러스트, 미션 완료 시 터지는 경쾌한 마이크로 애니메이션.",
    "roleInAI": "학습 및 게이미피케이션 앱에서 중독성 있는 촉각적 버튼 클릭 경험 연출",
    "themeId": "duolingo",
    "tags": [
      "Duolingo",
      "Gamification",
      "3D Bevel"
    ]
  },
  {
    "rank": 36,
    "name": "Airbnb Soft Hospitality",
    "repo": "airbnb/lottie-web",
    "stars": 30500,
    "starsFormatted": "30.5k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "따뜻한 코랄 레드(#FF385C) 포인트 컬러, 대형 카드형 숙소 프리뷰, 둥글고 부드러운 16px 카드와 맵 UI.",
    "roleInAI": "여행, 숙박, 컨슈머 서비스에서 편안하고 친근한 휴머니스트 감성 주입",
    "themeId": "airbnb",
    "tags": [
      "Airbnb",
      "Coral Red",
      "Hospitality"
    ]
  },
  {
    "rank": 37,
    "name": "Uber Base Web & App",
    "repo": "uber/baseweb",
    "stars": 9100,
    "starsFormatted": "9.1k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "모빌리티 특화 고대비 다크/라이트 모드, 거대한 하단 CTA 버튼, 실시간 경로 추적용 벡터.",
    "roleInAI": "이동 중인 사용자를 위한 즉각적이고 직관적인 원터치 호출 조작계 구축",
    "themeId": "uber",
    "tags": [
      "Uber",
      "High Contrast",
      "Mobility"
    ]
  },
  {
    "rank": 38,
    "name": "Revolut Neo-Bank Dark",
    "repo": "revolut/mobile-design",
    "stars": 7400,
    "starsFormatted": "7.4k",
    "category": "saas",
    "categoryLabel": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "desc": "블랙 스틸 질감의 카드 프리뷰, 실시간 자산 차트, 탭별로 즉시 전환되는 네온 시안/그린 텍스트.",
    "roleInAI": "차세대 글로벌 핀테크 및 자산 관리 대시보드의 미래지향적 메탈릭 럭셔리 구현",
    "themeId": "revolut",
    "tags": [
      "Revolut",
      "Neo-Bank",
      "Metallic Dark"
    ]
  },
  {
    "rank": 39,
    "name": "Discord Gamified Chat UI",
    "repo": "discord/discord-api-docs",
    "stars": 11200,
    "starsFormatted": "11.2k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "좌측 원형 서버 내비게이션 바, 채널별 다크모드, 블러플(#5865F2) 포인트와 이모지 리액션.",
    "roleInAI": "게이머 커뮤니티 및 협업 툴에서 친근하고 편안한 채팅 인터페이스 구성",
    "themeId": "discord",
    "tags": [
      "Discord",
      "Blurple",
      "Server Nav"
    ]
  },
  {
    "rank": 40,
    "name": "Telegram Minimal Messenger",
    "repo": "telegramdesktop/tdesktop",
    "stars": 27800,
    "starsFormatted": "27.8k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "가벼운 성능, 빠른 로딩, 플랫폼별 네이티브 감성을 그대로 따르는 12px 유연한 말풍선 UI.",
    "roleInAI": "초고속 메시징 및 대용량 채널 피드의 가벼운 반응성 레이아웃 확보",
    "themeId": "telegram",
    "tags": [
      "Telegram",
      "Fast",
      "Message Bubble"
    ]
  },
  {
    "rank": 41,
    "name": "SuperApp Bento Grid",
    "repo": "ant-design/ant-design-mobile",
    "stars": 11500,
    "starsFormatted": "11.5k",
    "category": "saas",
    "categoryLabel": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "desc": "홈 화면 하나에 금융, 배달, 미니 프로그램 등 수십 가지 기능을 벤토 그리드(Bento)로 밀집 배치.",
    "roleInAI": "슈퍼앱 환경에서 복합 서비스를 시각적 리듬감과 함께 고밀도로 정리",
    "themeId": "bento",
    "tags": [
      "Bento Grid",
      "SuperApp",
      "Modular"
    ]
  },
  {
    "rank": 42,
    "name": "Nord Arctic Mobile",
    "repo": "arcticicestudio/nord",
    "stars": 7600,
    "starsFormatted": "7.6k",
    "category": "dark_dev",
    "categoryLabel": "⚡ 3. Dark & Developer (개발자·터미널)",
    "desc": "차가운 빙하 블루(#88C0D0)와 딥 슬레이트 그레이(#2E3440)를 조합해 눈이 가장 편안한 북극 톤.",
    "roleInAI": "장시간 코딩 및 터미널 모니터링 시 블루라이트 자극을 줄여주는 차분한 팔레트 주입",
    "themeId": "nord",
    "tags": [
      "Nord",
      "Glacier Blue",
      "Polar Night"
    ]
  },
  {
    "rank": 43,
    "name": "Dracula Dark Code App",
    "repo": "dracula/dracula-theme",
    "stars": 23400,
    "starsFormatted": "23.4k",
    "category": "dark_dev",
    "categoryLabel": "⚡ 3. Dark & Developer (개발자·터미널)",
    "desc": "딥 퍼플(#282A36) 배경 위에 선명한 네온 핑크(#FF79C6)와 에메랄드 그린 포인트의 뱀파이어 다크.",
    "roleInAI": "개발자 타깃 제품에서 시선을 압도하는 전설적인 컬트 신택스 하이라이트 감성 부여",
    "themeId": "dracula",
    "tags": [
      "Dracula",
      "Neon Pink",
      "Vampire Dark"
    ]
  },
  {
    "rank": 44,
    "name": "Catppuccin Pastel Mobile",
    "repo": "catppuccin/catppuccin",
    "stars": 22100,
    "starsFormatted": "22.1k",
    "category": "dark_dev",
    "categoryLabel": "⚡ 3. Dark & Developer (개발자·터미널)",
    "desc": "라벤더(#B4BEFE), 모카, 마키아토 등 마음이 편안해지는 부드럽고 따스한 파스텔톤 다크/라이트 테마.",
    "roleInAI": "현대 개발자 데스크테리어 및 에디터 씬에서 가장 사랑받는 포근한 파스텔 무드 연출",
    "themeId": "catppuccin",
    "tags": [
      "Catppuccin",
      "Pastel",
      "Mocha"
    ]
  },
  {
    "rank": 45,
    "name": "Gruvbox Earthy Mobile",
    "repo": "morhetz/gruvbox",
    "stars": 15600,
    "starsFormatted": "15.6k",
    "category": "dark_dev",
    "categoryLabel": "⚡ 3. Dark & Developer (개발자·터미널)",
    "desc": "70~80년대 감성의 웜 브라운(#282828), 올리브 그린, 시그니처 오렌지(#FE8019)로 블루라이트 눈부심 최소화.",
    "roleInAI": "아날로그 하드웨어 및 레트로 빈티지 코딩 환경의 정취 재현",
    "themeId": "gruvbox",
    "tags": [
      "Gruvbox",
      "Retro Warm",
      "Earthy"
    ]
  },
  {
    "rank": 46,
    "name": "Tokyo Night Neon Mobile",
    "repo": "folke/tokyonight.nvim",
    "stars": 6800,
    "starsFormatted": "6.8k",
    "category": "dark_dev",
    "categoryLabel": "⚡ 3. Dark & Developer (개발자·터미널)",
    "desc": "도쿄의 밤거리에서 영감을 받은 딥 인디고(#1A1B26) 야경 배경과 일렉트릭 블루/마젠타 네온 포인트.",
    "roleInAI": "스크린샷 캡처 시 압도적인 시각적 몰입감을 제공하는 네온 노아(Neon-Noir) 미학",
    "themeId": "tokyonight",
    "tags": [
      "Tokyo Night",
      "Electric Blue",
      "Neon-Noir"
    ]
  },
  {
    "rank": 47,
    "name": "Solarized Precision Mobile",
    "repo": "altercation/solarized",
    "stars": 15200,
    "starsFormatted": "15.2k",
    "category": "dark_dev",
    "categoryLabel": "⚡ 3. Dark & Developer (개발자·터미널)",
    "desc": "인간의 시각 수용 과학(CIELAB)을 바탕으로 만들어진 청록빛(Base03) 배경과 정밀 수학적 대비.",
    "roleInAI": "정밀 데이터 계측 및 광학적 가독성이 필수적인 엔지니어링 툴링 구축",
    "themeId": "solarized",
    "tags": [
      "Solarized",
      "CIELAB",
      "Optical Precision"
    ]
  },
  {
    "rank": 48,
    "name": "Uber Base Web Enterprise",
    "repo": "uber/baseweb",
    "stars": 9100,
    "starsFormatted": "9.1k",
    "category": "saas",
    "categoryLabel": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "desc": "군더더기 없는 화이트/그레이 배경과 선명한 블루 액센트로 정보 전달력을 극대화한 실용적 UI.",
    "roleInAI": "모빌리티 및 물류 대시보드에서 장애 없는 철저한 접근성 준수 보장",
    "themeId": "baseweb",
    "tags": [
      "Base Web",
      "Accessibility",
      "Clean Enterprise"
    ]
  },
  {
    "rank": 49,
    "name": "Radix UI Themes",
    "repo": "radix-ui/primitives",
    "stars": 16400,
    "starsFormatted": "16.4k",
    "category": "saas",
    "categoryLabel": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "desc": "완벽하게 분할된 중립색 계열과 부드러운 인디고 블루 악센트(#3E63DD). 정갈한 헤드리스 표준.",
    "roleInAI": "고급 SaaS 웹앱의 12스텝 색조 토큰 체계와 완벽한 키보드 접근성 유지",
    "themeId": "radix",
    "tags": [
      "Radix UI",
      "12-Step Scale",
      "Indigo"
    ]
  },
  {
    "rank": 50,
    "name": "Raw Academic Brutalist Mobile",
    "repo": "academic-print/raw-design",
    "stars": 3200,
    "starsFormatted": "3.2k",
    "category": "editorial",
    "categoryLabel": "📖 1. Editorial & Print (도면·인쇄물)",
    "desc": "장식을 완전히 배제하고 순수 검은색 실선과 기본 세리프(Times New Roman) 활자만 사용하는 학술지 UI.",
    "roleInAI": "모든 시각적 허세를 제거하고 극도의 날것(Raw) 그대로 진실된 텍스트 계층 전달",
    "themeId": "rawbrutalist",
    "tags": [
      "Raw Brutalist",
      "Times New Roman",
      "0px Straight"
    ]
  },
  {
    "rank": 51,
    "name": "Notion Mobile Workspace",
    "repo": "notion-enhancer/mobile",
    "stars": 5900,
    "starsFormatted": "5.9k",
    "category": "editorial",
    "categoryLabel": "📖 1. Editorial & Print (도면·인쇄물)",
    "desc": "문서 중심의 깔끔한 화이트/웜그레이 캔버스, 토글 리스트, 가벼운 콜아웃 박스 구조.",
    "roleInAI": "모바일 화면에서 쾌적한 가독성을 제공하는 위키 문서 블록 구조화",
    "themeId": "notion_mobile",
    "tags": [
      "Notion Mobile",
      "Toggle List",
      "Callout"
    ]
  },
  {
    "rank": 52,
    "name": "Toss App Style (Korean FinTech)",
    "repo": "toss/slash-mobile",
    "stars": 8400,
    "starsFormatted": "8.4k",
    "category": "saas",
    "categoryLabel": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "desc": "넓은 여백, 강렬한 볼드 타이포그래피, 무시선 깔끔한 카드 위계와 20~24px 스쿼클 컨테이너.",
    "roleInAI": "직관적이고 사용자 친화적인 한국형 핀테크 모바일 UI 조형감 주입",
    "themeId": "toss_mobile",
    "tags": [
      "Toss Mobile",
      "24px Squircle",
      "Fintech"
    ]
  },
  {
    "rank": 53,
    "name": "Stripe Mobile SDK",
    "repo": "stripe/stripe-react-native",
    "stars": 6400,
    "starsFormatted": "6.4k",
    "category": "saas",
    "categoryLabel": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "desc": "결제/핀테크 전용 다중 레이어 그림자, 세밀한 입력 폼 검증 상태 표시와 10px 폼.",
    "roleInAI": "신뢰감 있는 모바일 결제 폼 및 인보이스 승인 프로세스 구축",
    "themeId": "stripe_mobile",
    "tags": [
      "Stripe Mobile",
      "Checkout",
      "10px Radius"
    ]
  },
  {
    "rank": 54,
    "name": "Bento Grid Productivity",
    "repo": "shadcn-ui/bento",
    "stars": 12800,
    "starsFormatted": "12.8k",
    "category": "saas",
    "categoryLabel": "💼 2. Modern SaaS & FinTech (모던 스탠다드)",
    "desc": "다양한 크기의 카드 박스들을 여백 없이 맞물려 시각적 리듬감과 정보 효율 극대화.",
    "roleInAI": "복잡한 대시보드를 시각적으로 리드미컬하게 패킹하는 벤토 그리드 연출",
    "themeId": "bento_prod",
    "tags": [
      "Bento Grid",
      "Asymmetric",
      "Productivity"
    ]
  },
  {
    "rank": 55,
    "name": "Linear Mobile (Workspace Dark)",
    "repo": "linear-app/mobile-ui",
    "stars": 10200,
    "starsFormatted": "10.2k",
    "category": "dark_dev",
    "categoryLabel": "⚡ 3. Dark & Developer (개발자·터미널)",
    "desc": "극도로 정제된 미드나잇 다크, 13px 고밀도 폰트, 제스처 중심의 초고속 반응속도.",
    "roleInAI": "하이엔드 개발자 및 프로덕트 팀을 위한 초고속 모바일 워크스페이스 생성",
    "themeId": "linear_mobile",
    "tags": [
      "Linear Mobile",
      "12px Edge",
      "Midnight Dark"
    ]
  },
  {
    "rank": 56,
    "name": "Vercel Geist Mobile",
    "repo": "vercel/geist-mobile",
    "stars": 8800,
    "starsFormatted": "8.8k",
    "category": "dark_dev",
    "categoryLabel": "⚡ 3. Dark & Developer (개발자·터미널)",
    "desc": "완전한 흑백 대비, 미세한 회색 격자선, 불필요한 장식을 완전히 배제한 극도의 미니멀리즘.",
    "roleInAI": "장식을 완전히 배제하고 오직 텍스트와 그리드만으로 승부하는 모던 개발자 감성",
    "themeId": "geist_mobile",
    "tags": [
      "Geist Mobile",
      "Monochrome",
      "8px Radius"
    ]
  },
  {
    "rank": 57,
    "name": "Cyberpunk HUD Sci-Fi App",
    "repo": "gaming-ui/cyberpunk-hud",
    "stars": 4600,
    "starsFormatted": "4.6k",
    "category": "hardware",
    "categoryLabel": "🎛️ 4. Hardware & Industrial (로봇·계기판)",
    "desc": "clip-path를 이용해 모서리를 사선으로 깎은 메카닉 계기판 스타일, 시안/옐로우 네온 발광.",
    "roleInAI": "SF 게임 및 하드웨어 조종석 모바일 HUD 인터페이스 구축",
    "themeId": "cyberpunk_hud",
    "tags": [
      "Cyberpunk HUD",
      "45° Chamfer",
      "Sci-Fi"
    ]
  },
  {
    "rank": 58,
    "name": "Glassmorphism Frosted App",
    "repo": "glass-ui/frosted-mobile",
    "stars": 7100,
    "starsFormatted": "7.1k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "반투명 유리판(backdrop-filter: blur) 위에 은은한 화이트 빛 반사 보더가 겹쳐지는 공간감.",
    "roleInAI": "깊이감 넘치는 프로스티드 글래스와 앰비언트 백드롭 연출",
    "themeId": "glassmorphism_app",
    "tags": [
      "Glassmorphism",
      "Blur 30px",
      "Specular Rim"
    ]
  },
  {
    "rank": 59,
    "name": "Neumorphism Soft Touch",
    "repo": "soft-ui/neumorphism-mobile",
    "stars": 5300,
    "starsFormatted": "5.3k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "배경과 동일한 색상의 부드러운 양방향 그림자를 주어 버튼과 패널이 화면에서 튀어나오거나 파여 보임.",
    "roleInAI": "보더 없이 빛과 그림자만으로 촉각적 물리 깊이감을 형성하는 소프트 UI 강제",
    "themeId": "neumorphism_touch",
    "tags": [
      "Neumorphism",
      "Soft Touch",
      "Emboss"
    ]
  },
  {
    "rank": 60,
    "name": "DaisyUI Neo-Brutalism Mobile",
    "repo": "saadeghi/daisyui-neobrutal",
    "stars": 9900,
    "starsFormatted": "9.9k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "3px ~ 4px의 굵은 검은색 외곽선과 오프셋 하드 그림자(4px 4px 0px #000), 원색 컬러 조합.",
    "roleInAI": "단조로움을 탈피하고 화면을 장악하는 펀치력 있는 하드 엣지 팝 모바일 UI 구현",
    "themeId": "daisyui_brutal",
    "tags": [
      "Neo-Brutalism",
      "Hard Shadow",
      "DaisyUI"
    ]
  },
  {
    "rank": 61,
    "name": "Retro 98 OS Mobile",
    "repo": "jdan/98.css-mobile",
    "stars": 6200,
    "starsFormatted": "6.2k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "90년대 윈도우 창 느낌의 회색 입체 버튼, 네이비 타이틀 바, 레트로 픽셀 폰트 감성.",
    "roleInAI": "향수를 자극하는 3D 픽셀 베벨과 회색 푸시 버튼의 클래식 OS 감성 복원",
    "themeId": "win98_mobile",
    "tags": [
      "Retro 98",
      "Win95",
      "Pixel Bevel"
    ]
  },
  {
    "rank": 62,
    "name": "NES 8-Bit Arcade App",
    "repo": "nostalgic-css/nes-mobile",
    "stars": 11400,
    "starsFormatted": "11.4k",
    "category": "expressive",
    "categoryLabel": "🎨 5. Expressive & Retro (질감·서브컬처)",
    "desc": "굵은 픽셀 테두리와 원색 도트 아트, 고정폭 비트 폰트로 구현된 아케이드 게임 리포트 UI.",
    "roleInAI": "게이미피케이션 리포트 및 아케이드 퀘스트 대화창 레이아웃 구축",
    "themeId": "nes_arcade",
    "tags": [
      "NES",
      "8-Bit Arcade",
      "Pixel Outlines"
    ]
  }
];
export const ALL_SHOWCASE_REPOSITORIES = ALL_30_REPOSITORIES;

