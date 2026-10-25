# DESIGN.md — Raw Academic Brutalist Mobile Design System Specification
> **Preset #5 of 62** | **Category:** 📖 1. Editorial & Print (도면·인쇄물)  
> **Source Repository:** [academic-print/raw-design](https://github.com/academic-print/raw-design)  
> **Official Docs / Reference:** [https://brutalistwebsites.com](https://brutalistwebsites.com)  
> **Ecosystem Popularity:** ⭐ `3.2k` | **Tags:** `Raw Brutalist`, `Times New Roman`, `0px Straight`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      rawbrutalist                                │
│  Design System: Raw Academic Brutalist Mobile               │
│  Archetype:     Pure Unadorned Print                        │
│  Nav Brand:     RAW.BRUTALIST                               │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
장식을 완전히 배제하고 순수 검은색 실선과 기본 세리프 활자만 사용
- **Pure stark white #FFFFFF canvas with solid black ink #000000.**
- **Times New Roman classical academic serif font.**
- **Strict 0px rectangular edges, zero shadows, zero gradients.**

### 1.2 Role in AI Agent Codebases
모든 시각적 허세를 제거하고 극도의 날것(Raw) 그대로 진실된 텍스트 계층 전달
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Raw Academic Brutalist Mobile** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Strictly NO border radius, NO drop shadows, NO smooth modern blurs.**
- ❌ **No pastel or decorative accent colors.**
- ❌ **Specific Anti-AI Directive:** Zero drop shadows. Zero border-radius. Stark unadorned black and white only.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#FFFFFF` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#000000` | 1px boundary line |
| `--accent-primary` | `#000000` | Primary interactive & highlight focus |
| `--text-primary` | `#000000` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Times New Roman', 'Song Myung', 'Nanum Myeongjo', serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'Space Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Song Myung / Nanum Myeongjo (송명체 고대비 세리프 & 나눔명조)`
- **Typographic Fallback Rationale:** 날카로운 세리프 획과 높은 획 대비(Stroke Contrast)를 한글 송명체로 조화롭게 재현
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `0px`
- **Border Treatment:** `2px solid #000000`
- **Elevation & Shadow:** `none`

### 4.2 Structural Features & Micro-Interactions
### RAW 01: Zero Decoration Ink
100% black on white with zero drop shadows, glows, or gradients.
*(Metadata: `NOISE: 0%`)*

### SERIF 02: Times New Roman Grid
Pure academic journal book typography communicating timeless authority.
*(Metadata: `SERIF: CLASSIC`)*

### BOX 03: 1px Black Wireframes
Simple unpretentious black outlines holding tabular data.
*(Metadata: `BORDER: 1PX`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #000000, text #FFFFFF, 0px radius, 2px border`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, text #000000, 2px solid #000000`
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
  --theme-id: "rawbrutalist";
  --theme-name: "Raw Academic Brutalist Mobile";
  --bg-base: #FFFFFF;
  --surface-card: #FFFFFF;
  --border-hairline: #000000;
  --accent-primary: #000000;
  --text-primary: #000000;
  --font-heading: 'Times New Roman', 'Song Myung', 'Nanum Myeongjo', serif;
  --font-body: 'Inter', 'Pretendard Variable', sans-serif;
  --font-mono: 'Space Mono', 'D2Coding', monospace;
  --theme-radius: 0px;
}

body[data-theme="rawbrutalist"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="rawbrutalist"] h1,
body[data-theme="rawbrutalist"] h2,
body[data-theme="rawbrutalist"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="rawbrutalist"] .card,
body[data-theme="rawbrutalist"] .panel {
  background: var(--surface-card);
  border: 2px solid #000000;
  border-radius: var(--theme-radius);
  box-shadow: none;
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Raw Academic Brutalist Mobile
Role: Principal Frontend Systems Architect specialized in the Raw Academic Brutalist Mobile design language.
Origin Repository: academic-print/raw-design (https://brutalistwebsites.com)

## Visual Directives:
1. Palette: Canvas must be #FFFFFF, Surfaces #FFFFFF, Accents #000000.
2. Geometry: Border radius must strictly be 0px. Border treatment: 2px solid #000000.
3. Typography: Heading stack is 'Times New Roman', Times, serif. Body typography must feel intentional with tight tracking.
4. Vibe: 장식을 완전히 배제하고 순수 검은색 실선과 기본 세리프 활자만 사용. Form follows function with mathematical discipline.
5. Strict Negative Rules: Strictly NO border radius, NO drop shadows, NO smooth modern blurs. No pastel or decorative accent colors. Zero drop shadows. Zero border-radius. Stark unadorned black and white only.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
