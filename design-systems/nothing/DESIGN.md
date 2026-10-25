# DESIGN.md — Nothing Dot-Matrix Design System Specification
> **Preset #35 of 62** | **Category:** 🎛️ 4. Hardware & Industrial (로봇·계기판)  
> **Source Repository:** [nothing-tech/dot-matrix-os](https://github.com/nothing-tech/dot-matrix-os)  
> **Official Docs / Reference:** [https://nothing.tech](https://nothing.tech)  
> **Ecosystem Popularity:** ⭐ `3.6k` | **Tags:** `Dot Matrix`, `Dotted Border`, `Nothing Red`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      nothing                                     │
│  Design System: Nothing Dot-Matrix                          │
│  Archetype:     Glyph & Dot Matrix                          │
│  Nav Brand:     NOTHING (R)                                 │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
순수 블랙/화이트 대비, 점선(Dotted) 분할선, 레드 LED 포인트
- **Pure black #000000 and white typography with signature red LED dot #D71921.**
- **Dotted borders (border: 2px dotted #444) for dividers.**
- **Dot-matrix technical inspiration.**

### 1.2 Role in AI Agent Codebases
테크니컬하고 개성 넘치는 디지털 계기판 미학 주입
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Nothing Dot-Matrix** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No colorful pastel gradients.**
- ❌ **No soft blurred drop shadows.**
- ❌ **Specific Anti-AI Directive:** No colorful gradients. Stark black and white with red LED #D71921 accents and dot-matrix typography.
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
| `--surface-card` | `#121212` | Elevation 1 container surface |
| `--border-hairline` | `#444444` | 1px boundary line |
| `--accent-primary` | `#D71921` | Primary interactive & highlight focus |
| `--text-primary` | `#FFFFFF` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Space Mono', 'D2Coding', 'Galmuri11', monospace`
- **Body & UI Font Stack:** `'Space Mono', 'D2Coding', monospace`
- **Monospace & Metadata Stack:** `'Space Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `D2Coding / Galmuri11 (낫싱 글리프 도트 매트릭스)`
- **Typographic Fallback Rationale:** 낫싱 폰(Nothing Phone)의 글리프 도트 매트릭스 LED 감성을 갈무리11 및 D2Coding으로 조화롭게 표현
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `0px ~ 4px`
- **Border Treatment:** `1px solid rgba(255, 255, 255, 0.2)`
- **Elevation & Shadow:** `none`

### 4.2 Structural Features & Micro-Interactions
### GLYPH 01: Luminous Light Array
Segmented notification patterns replacing screen notification fatigue.
*(Metadata: `LIGHT: 100%`)*

### DOTS 02: Dot-Matrix Typography
Technical industrial typography inspired by vintage LED displays.
*(Metadata: `PITCH: 3MM`)*

### MINIMAL 03: Raw Monochrome Contrast
Eliminating superfluous color to spotlight the red LED recording dot.
*(Metadata: `RED: #D71921`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #FFFFFF, text #000000, 0px radius, NDOT dot matrix font`
- **Secondary / Ghost Button:**
  - Specification: `Background transparent, border 1px solid #FFFFFF, text #FFFFFF`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `0px ~ 4px`.
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
  --theme-id: "nothing";
  --theme-name: "Nothing Dot-Matrix";
  --bg-base: #000000;
  --surface-card: #121212;
  --border-hairline: #444444;
  --accent-primary: #D71921;
  --text-primary: #FFFFFF;
  --font-heading: 'Space Mono', 'D2Coding', 'Galmuri11', monospace;
  --font-body: 'Space Mono', 'D2Coding', monospace;
  --font-mono: 'Space Mono', 'D2Coding', monospace;
  --theme-radius: 0px;
}

body[data-theme="nothing"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="nothing"] h1,
body[data-theme="nothing"] h2,
body[data-theme="nothing"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="nothing"] .card,
body[data-theme="nothing"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--theme-radius);
  box-shadow: none;
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Nothing Dot-Matrix
Role: Principal Frontend Systems Architect specialized in the Nothing Dot-Matrix design language.
Origin Repository: nothing-tech/dot-matrix-os (https://nothing.tech)

## Visual Directives:
1. Palette: Canvas must be #000000, Surfaces #121212, Accents #D71921.
2. Geometry: Border radius must strictly be 0px ~ 4px. Border treatment: 1px solid rgba(255, 255, 255, 0.2).
3. Typography: Heading stack is 'Space Mono', monospace. Body typography must feel intentional with tight tracking.
4. Vibe: 순수 블랙/화이트 대비, 점선(Dotted) 분할선, 레드 LED 포인트. Form follows function with mathematical discipline.
5. Strict Negative Rules: No colorful pastel gradients. No soft blurred drop shadows. No colorful gradients. Stark black and white with red LED #D71921 accents and dot-matrix typography.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
