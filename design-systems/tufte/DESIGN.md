# DESIGN.md — Tufte Academic Print Design System Specification
> **Preset #2 of 62** | **Category:** 📖 1. Editorial & Print (도면·인쇄물)  
> **Source Repository:** [edwardtufte/tufte-css](https://github.com/edwardtufte/tufte-css)  
> **Official Docs / Reference:** [https://edwardtufte.github.io/tufte-css/](https://edwardtufte.github.io/tufte-css/)  
> **Ecosystem Popularity:** ⭐ `8.1k` | **Tags:** `Data-Ink`, `Cormorant`, `Margin Notes`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      tufte                                       │
│  Design System: Tufte Academic Print                        │
│  Archetype:     Edward Tufte Data Print                     │
│  Nav Brand:     TUFTE // ANALYTICA                          │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
에드워드 터프티의 데이터 시각화 철학, 군더더기 없는 논문 미학
- **Above all else show the data. Eliminate decorative non-data ink.**
- **Use classical book serif typography and expansive academic margin notes.**
- **Strict 0px border-radius, no artificial cards, transparent reading experience.**

### 1.2 Role in AI Agent Codebases
AI가 생성하는 불필요한 차트정크(Chartjunk)를 원천 차단하고 학술 보고서 품격 부여
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Tufte Academic Print** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No rounded cards or tech badges.**
- ❌ **No unnecessary drop shadows or gradients.**
- ❌ **Specific Anti-AI Directive:** Zero rounded corners. Zero tech badges or drop shadows. Zero arbitrary cards. Use classical book margins.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#FFFFF8` | Canvas / Base background layer |
| `--surface-card` | `#FFFFF8` | Elevation 1 container surface |
| `--border-hairline` | `#EAE7D6` | 1px boundary line |
| `--accent-primary` | `#A00000` | Primary interactive & highlight focus |
| `--text-primary` | `#111111` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Cormorant Garamond', 'Nanum Myeongjo', 'Noto Serif KR', Georgia, serif`
- **Body & UI Font Stack:** `'Cormorant Garamond', 'Nanum Myeongjo', 'Noto Serif KR', Georgia, serif`
- **Monospace & Metadata Stack:** `'Space Mono', 'D2Coding', 'Nanum Gothic Coding', monospace`
- **Paired Korean Typography:** `Nanum Myeongjo / Noto Serif KR (나눔명조 & 노토 세리프 학술 활자)`
- **Typographic Fallback Rationale:** 에드워드 터프티의 인쇄물 데이터-잉크 원칙에 맞춰 군더더기 없는 정통 명조 활자 조판 비율 적용
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `0px`
- **Border Treatment:** `1px solid #EAE7D6`
- **Elevation & Shadow:** `none`

### 4.2 Structural Features & Micro-Interactions
### AXIOM I: Data-Ink Ratio
A large share of ink on a graphic should present data-information.
*(Metadata: `EFFICIENCY: 100%`)*

### AXIOM II: Integrated Sidenotes
Notes and explanations placed directly beside the point of reference.
*(Metadata: `CHARTJUNK: 0%`)*

### AXIOM III: High-Density Typography
Cormorant Garamond classical book typesetting with generous line rhythm.
*(Metadata: `LEAD: 1.6`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Underlined vermillion text (#A00000) or 0px border button, no fill, serif font`
- **Secondary / Ghost Button:**
  - Specification: `Text link with classical serif styling, 0px radius`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `0px`.
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
  --theme-id: "tufte";
  --theme-name: "Tufte Academic Print";
  --bg-base: #FFFFF8;
  --surface-card: #FFFFF8;
  --border-hairline: #EAE7D6;
  --accent-primary: #A00000;
  --text-primary: #111111;
  --font-heading: 'Cormorant Garamond', 'Nanum Myeongjo', 'Noto Serif KR', Georgia, serif;
  --font-body: 'Cormorant Garamond', 'Nanum Myeongjo', 'Noto Serif KR', Georgia, serif;
  --font-mono: 'Space Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 0px;
}

body[data-theme="tufte"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="tufte"] h1,
body[data-theme="tufte"] h2,
body[data-theme="tufte"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="tufte"] .card,
body[data-theme="tufte"] .panel {
  background: var(--surface-card);
  border: 1px solid #EAE7D6;
  border-radius: var(--theme-radius);
  box-shadow: none;
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Tufte Academic Print
Role: Principal Frontend Systems Architect specialized in the Tufte Academic Print design language.
Origin Repository: edwardtufte/tufte-css (https://edwardtufte.github.io/tufte-css/)

## Visual Directives:
1. Palette: Canvas must be #FFFFF8, Surfaces #FFFFF8, Accents #A00000.
2. Geometry: Border radius must strictly be 0px. Border treatment: 1px solid #EAE7D6.
3. Typography: Heading stack is 'Cormorant Garamond', Georgia, serif. Body typography must feel intentional with tight tracking.
4. Vibe: 에드워드 터프티의 데이터 시각화 철학, 군더더기 없는 논문 미학. Form follows function with mathematical discipline.
5. Strict Negative Rules: No rounded cards or tech badges. No unnecessary drop shadows or gradients. Zero rounded corners. Zero tech badges or drop shadows. Zero arbitrary cards. Use classical book margins.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
