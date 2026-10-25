# DESIGN.md — Shopify Polaris Design System Specification
> **Preset #11 of 62** | **Category:** 💼 2. Modern SaaS & FinTech (모던 스탠다드)  
> **Source Repository:** [Shopify/polaris](https://github.com/Shopify/polaris)  
> **Official Docs / Reference:** [https://polaris.shopify.com](https://polaris.shopify.com)  
> **Ecosystem Popularity:** ⭐ `6.1k` | **Tags:** `E-Commerce`, `Forest Green`, `Merchant Trust`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      polaris                                     │
│  Design System: Shopify Polaris                             │
│  Archetype:     Merchant Trust System                       │
│  Nav Brand:     SHOPIFY//POLARIS                            │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
포레스트 그린과 신뢰도 높은 이커머스 어드민 감성
- **Merchant canvas #F6F6F7 with pure white cards.**
- **Shopify Forest Green #008060 accent.**
- **Rounded 12px corners that project calm reliability.**

### 1.2 Role in AI Agent Codebases
주문 처리 및 재고 관리 등 상거래 신뢰성을 뒷받침하는 차분한 어드민 구성
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Shopify Polaris** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No aggressive dark hackers modes in commerce context.**
- ❌ **No ambiguous unlabeled buttons.**
- ❌ **Specific Anti-AI Directive:** No playful cartoon borders. Strict Shopify e-commerce merchant trust hierarchy.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#F6F6F7` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#E1E3E5` | 1px boundary line |
| `--accent-primary` | `#008060` | Primary interactive & highlight focus |
| `--text-primary` | `#202223` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace`
- **Paired Korean Typography:** `Pretendard Variable / Noto Sans KR`
- **Typographic Fallback Rationale:** 글로벌 모던 SaaS의 영문 산스와 완벽한 자간 조화를 이루는 프리텐다드 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #D2D5D8`
- **Elevation & Shadow:** `0 1px 0 rgba(0,0,0,0.05)`

### 4.2 Structural Features & Micro-Interactions
### ORDERS: Fulfillment Pipeline
Automated routing across global warehouse partner hubs.
*(Metadata: `99.8% ON-TIME`)*

### PAYMENTS: Shop Pay Accelerated
One-click checkout boosting customer conversion rates.
*(Metadata: `+50% SPEED`)*

### SECURITY: PCI DSS Level 1 Certified
Full end-to-end tokenized compliance on every transaction.
*(Metadata: `VERIFIED`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #008060, text #FFFFFF, 8px radius, bold label`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, border 1px solid #BABEC3, text #202223`
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
  --theme-id: "polaris";
  --theme-name: "Shopify Polaris";
  --bg-base: #F6F6F7;
  --surface-card: #FFFFFF;
  --border-hairline: #E1E3E5;
  --accent-primary: #008060;
  --text-primary: #202223;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="polaris"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="polaris"] h1,
body[data-theme="polaris"] h2,
body[data-theme="polaris"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="polaris"] .card,
body[data-theme="polaris"] .panel {
  background: var(--surface-card);
  border: 1px solid #D2D5D8;
  border-radius: var(--theme-radius);
  box-shadow: 0 1px 0 rgba(0,0,0,0.05);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Shopify Polaris
Role: Principal Frontend Systems Architect specialized in the Shopify Polaris design language.
Origin Repository: Shopify/polaris (https://polaris.shopify.com)

## Visual Directives:
1. Palette: Canvas must be #F6F6F7, Surfaces #FFFFFF, Accents #008060.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #D2D5D8.
3. Typography: Heading stack is -apple-system, sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 포레스트 그린과 신뢰도 높은 이커머스 어드민 감성. Form follows function with mathematical discipline.
5. Strict Negative Rules: No aggressive dark hackers modes in commerce context. No ambiguous unlabeled buttons. No playful cartoon borders. Strict Shopify e-commerce merchant trust hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
