# DESIGN.md — Stripe Crisp FinTech Design System Specification
> **Preset #9 of 62** | **Category:** 💼 2. Modern SaaS & FinTech (모던 스탠다드)  
> **Source Repository:** [stripe/elements](https://github.com/stripe/elements)  
> **Official Docs / Reference:** [https://stripe.com/docs/elements](https://stripe.com/docs/elements)  
> **Ecosystem Popularity:** ⭐ `16.2k` | **Tags:** `FinTech`, `Indigo`, `Layered Shadow`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      stripe                                      │
│  Design System: Stripe Crisp FinTech                        │
│  Archetype:     The Benchmark Dashboard                     │
│  Nav Brand:     STRIPE//PAY                                 │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
다층 레이어 그림자, 인디고 악센트, 글로벌 결제의 표준
- **Off-white canvas #F7FAFC with pristine white cards.**
- **Signature Stripe Indigo #635BFF accent.**
- **Multi-layered realistic elevation shadows.**

### 1.2 Role in AI Agent Codebases
고객 결제 및 신뢰성 최우선 금융 환경의 최고급 시각 위계 구현
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Stripe Crisp FinTech** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No harsh 100% black shadows.**
- ❌ **No sloppy unstructured typography.**
- ❌ **Specific Anti-AI Directive:** No dark neon cyberpunk. Crisp daylight FinTech canvas #F8FAFC with precision form fields.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#F7FAFC` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#E2E8F0` | 1px boundary line |
| `--accent-primary` | `#635BFF` | Primary interactive & highlight focus |
| `--text-primary` | `#0A2540` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Plus Jakarta Sans', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Pretendard Variable (스트라이프 글로벌 결제 산스)`
- **Typographic Fallback Rationale:** 스트라이프의 세련된 핀테크 타이포그래피를 위한 프리텐다드 페어링
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid rgba(0, 0, 0, 0.08)`
- **Elevation & Shadow:** `0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)`

### 4.2 Structural Features & Micro-Interactions
### GLOBAL SCALE: 99.999% Reliability
Redundant systems across 46 countries with zero downtime.
*(Metadata: `UPTIME: 99.999%`)*

### CRISP DEPTH: Multi-Tier Elevation
0 2px 5px rgba(50,50,93,0.1) creates crystalline depth.
*(Metadata: `SHADOW: L3`)*

### CONVERSION: Optimized Checkout Flow
Adaptive payment methods increasing conversion by 11.9%.
*(Metadata: `DELTA: +11.9%`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #635BFF, text #FFFFFF, 8px radius, subtle box-shadow`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, border 1px solid rgba(0,0,0,0.12), text #0A2540`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `8px`.
- Avoid arbitrary multi-layer card nesting. Every container must hold meaningful visual hierarchy.

### 5.3 Form Inputs & Focus States
- Background: Translucent surface layer or solid container background.
- Focus State: Visible, crisp outline ring with `2px offset` using `var(--accent-primary)`.
- Typography: Inherits body font with strict vertical padding alignment.

---

## 💻 6. Production Drop-in CSS System

Place this snippet in your project's root stylesheet (`index.css` or `theme.css`):

```css
:root {
  --theme-id: "stripe";
  --theme-name: "Stripe Crisp FinTech";
  --bg-base: #F7FAFC;
  --surface-card: #FFFFFF;
  --border-hairline: #E2E8F0;
  --accent-primary: #635BFF;
  --text-primary: #0A2540;
  --font-heading: 'Plus Jakarta Sans', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="stripe"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="stripe"] h1,
body[data-theme="stripe"] h2,
body[data-theme="stripe"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="stripe"] .card,
body[data-theme="stripe"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(--theme-radius);
  box-shadow: 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Stripe Crisp FinTech
Role: Principal Frontend Systems Architect specialized in the Stripe Crisp FinTech design language.
Origin Repository: stripe/elements (https://stripe.com/docs/elements)

## Visual Directives:
1. Palette: Canvas must be #F7FAFC, Surfaces #FFFFFF, Accents #635BFF.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid rgba(0, 0, 0, 0.08).
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 다층 레이어 그림자, 인디고 악센트, 글로벌 결제의 표준. Form follows function with mathematical discipline.
5. Strict Negative Rules: No harsh 100% black shadows. No sloppy unstructured typography. No dark neon cyberpunk. Crisp daylight FinTech canvas #F8FAFC with precision form fields.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
