# DESIGN.md — Midday Financial Design System Specification
> **Preset #22 of 62** | **Category:** ⚡ 3. Dark & Developer (개발자·터미널)  
> **Source Repository:** [midday-ai/midday](https://github.com/midday-ai/midday)  
> **Official Docs / Reference:** [https://midday.ai](https://midday.ai)  
> **Ecosystem Popularity:** ⭐ `8.2k` | **Tags:** `Luxury Dark`, `Amber Accent`, `AI Financial`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      midday                                      │
│  Design System: Midday Financial                            │
│  Archetype:     Obsidian & Blaze Orange                     │
│  Nav Brand:     MIDDAY.AI                                   │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
딥 옵시디언과 블레이즈 오렌지의 고감도 핀테크 감성
- **Deep obsidian canvas #0C0C0C with blaze orange #F54900 accents.**
- **Monospaced currency figures and status tags.**
- **High contrast without visual fatigue.**

### 1.2 Role in AI Agent Codebases
부트스트랩/자금 관리 대시보드에서 프리미엄 럭셔리 분위기 형성
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Midday Financial** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No soft pastel gradients.**
- ❌ **No cluttered multi-colored chart legends.**
- ❌ **Specific Anti-AI Directive:** Never use soft blue. High-contrast void black #000000 with blaze orange #F54900 accents.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#0C0C0C` | Canvas / Base background layer |
| `--surface-card` | `#141414` | Elevation 1 container surface |
| `--border-hairline` | `rgba(255,255,255,0.08)` | 1px boundary line |
| `--accent-primary` | `#F54900` | Primary interactive & highlight focus |
| `--text-primary` | `#F5F5F5` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Geist Mono', 'JetBrains Mono', 'D2Coding', monospace`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `D2Coding / JetBrains Mono (개발자 핀테크 모노)`
- **Typographic Fallback Rationale:** AI 스타트업 핀테크의 날카로운 코드 블록과 재무 테이블을 위한 D2Coding 모노스페이스 지정
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `6px`
- **Border Treatment:** `1px solid #1A1A1A`
- **Elevation & Shadow:** `none`

### 4.2 Structural Features & Micro-Interactions
### LEDGER 01: Automated Reconciliation
Real-time bank feed ingestion mapped to tax categories.
*(Metadata: `$48,290.00`)*

### INVOICE 02: One-Click Invoicing
International multi-currency invoices payable in crypto and fiat.
*(Metadata: `PAID: TODAY`)*

### RUNWAY 03: Burn Rate Predictor
Deterministic cashflow forecasting updated every midnight.
*(Metadata: `14.2 MONTHS`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #F54900, text #FFFFFF, 6px radius, bold tracking`
- **Secondary / Ghost Button:**
  - Specification: `Background #0D0D0D, border 1px solid #262626, text #E6E6E6`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `6px`.
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
  --theme-id: "midday";
  --theme-name: "Midday Financial";
  --bg-base: #0C0C0C;
  --surface-card: #141414;
  --border-hairline: rgba(255,255,255,0.08);
  --accent-primary: #F54900;
  --text-primary: #F5F5F5;
  --font-heading: 'Geist Mono', 'JetBrains Mono', 'D2Coding', monospace;
  --font-body: 'Inter', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 6px;
}

body[data-theme="midday"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="midday"] h1,
body[data-theme="midday"] h2,
body[data-theme="midday"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="midday"] .card,
body[data-theme="midday"] .panel {
  background: var(--surface-card);
  border: 1px solid #1A1A1A;
  border-radius: var(--theme-radius);
  box-shadow: none;
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Midday Financial
Role: Principal Frontend Systems Architect specialized in the Midday Financial design language.
Origin Repository: midday-ai/midday (https://midday.ai)

## Visual Directives:
1. Palette: Canvas must be #0C0C0C, Surfaces #141414, Accents #F54900.
2. Geometry: Border radius must strictly be 6px. Border treatment: 1px solid #1A1A1A.
3. Typography: Heading stack is 'JetBrains Mono', monospace. Body typography must feel intentional with tight tracking.
4. Vibe: 딥 옵시디언과 블레이즈 오렌지의 고감도 핀테크 감성. Form follows function with mathematical discipline.
5. Strict Negative Rules: No soft pastel gradients. No cluttered multi-colored chart legends. Never use soft blue. High-contrast void black #000000 with blaze orange #F54900 accents.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
