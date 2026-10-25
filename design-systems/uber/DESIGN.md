# DESIGN.md — Uber Base Web & App Design System Specification
> **Preset #55 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [uber/baseweb](https://github.com/uber/baseweb)  
> **Official Docs / Reference:** [https://brand.uber.com](https://brand.uber.com)  
> **Ecosystem Popularity:** ⭐ `9.1k` | **Tags:** `Uber`, `High Contrast`, `Mobility`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      uber                                        │
│  Design System: Uber Base Web & App                         │
│  Archetype:     Mobility High-Contrast                      │
│  Nav Brand:     Uber//Move                                  │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
모빌리티 특화 고대비 흑백, 거대한 하단 CTA, 실시간 경로 벡터
- **High contrast monochrome for rapid glanceability on the move.**
- **Generous touch targets with 8px radius.**
- **Utilitarian clarity over unnecessary decorative fluff.**

### 1.2 Role in AI Agent Codebases
이동 중인 사용자를 위한 즉각적이고 직관적인 원터치 호출 조작계 구축
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Uber Base Web & App** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No subtle hard-to-read low contrast text.**
- ❌ **No dainty undersized click targets.**
- ❌ **Specific Anti-AI Directive:** Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#000000` | Canvas / Base background layer |
| `--surface-card` | `#141414` | Elevation 1 container surface |
| `--border-hairline` | `#2E2E2E` | 1px boundary line |
| `--accent-primary` | `#276EF1` | Primary interactive & highlight focus |
| `--text-primary` | `#FFFFFF` | Headings & high-contrast body copy |
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
- **Border Treatment:** `1px solid #2E2E2E`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### CONTRAST: High-Contrast Monochrome
Pure black and crisp white ensuring sunlight visibility on city streets.
*(Metadata: `RATIO: 21:1`)*

### ACTION: Full-Width Primary CTA
Unmissable bottom action button engineered for walking thumbs.
*(Metadata: `HEIGHT: 56PX`)*

### TELEMETRY: Live Route Vectoring
Minimalist blue vector routes on dark desaturated maps.
*(Metadata: `GPS: ACTIVE`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #276EF1, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #141414, border 1px solid #2E2E2E, text #FFFFFF`
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
  --theme-id: "uber";
  --theme-name: "Uber Base Web & App";
  --bg-base: #000000;
  --surface-card: #141414;
  --border-hairline: #2E2E2E;
  --accent-primary: #276EF1;
  --text-primary: #FFFFFF;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="uber"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="uber"] h1,
body[data-theme="uber"] h2,
body[data-theme="uber"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="uber"] .card,
body[data-theme="uber"] .panel {
  background: var(--surface-card);
  border: 1px solid #2E2E2E;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Uber Base Web & App
Role: Principal Frontend Systems Architect specialized in the Uber Base Web & App design language.
Origin Repository: uber/baseweb (https://brand.uber.com)

## Visual Directives:
1. Palette: Canvas must be #000000, Surfaces #141414, Accents #276EF1.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #2E2E2E.
3. Typography: Heading stack is -apple-system, sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 모빌리티 특화 고대비 흑백, 거대한 하단 CTA, 실시간 경로 벡터. Form follows function with mathematical discipline.
5. Strict Negative Rules: No subtle hard-to-read low contrast text. No dainty undersized click targets. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
