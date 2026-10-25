# DESIGN.md — PaperCSS Sketchbook Design System Specification
> **Preset #48 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [papercss/papercss](https://github.com/papercss/papercss)  
> **Official Docs / Reference:** [https://www.getpapercss.com](https://www.getpapercss.com)  
> **Ecosystem Popularity:** ⭐ `6.4k` | **Tags:** `Hand-Drawn`, `Wobbly Border`, `Pencil Sketch`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      papercss                                    │
│  Design System: PaperCSS Sketchbook                         │
│  Archetype:     Hand-Drawn Whiteboard                       │
│  Nav Brand:     PAPER.SKETCHBOOK                            │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
삐뚤빼뚤한 불규칙 손그림 외곽선과 연필 스케치 그림자
- **Warm paper canvas #FFFDF9 with wobbly hand-drawn borders.**
- **Asymmetrical border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px.**
- **Pencil sketch shadows box-shadow: 2px 8px 4px -6px rgba(0,0,0,0.3).**

### 1.2 Role in AI Agent Codebases
화이트보드 프로토타입 브레인스토밍의 친근하고 유기적인 아날로그 감성 연출
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **PaperCSS Sketchbook** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No rigid mathematical straight lines.**
- ❌ **No clinical high-tech dark glows.**
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
| `--bg-base` | `#FFFDF9` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#41403E` | 1px boundary line |
| `--accent-primary` | `#0071DE` | Primary interactive & highlight focus |
| `--text-primary` | `#41403E` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Patrick Hand', 'Gaegu', 'Nanum Pen Script', cursive, sans-serif`
- **Body & UI Font Stack:** `'Patrick Hand', 'Gaegu', 'Nanum Pen Script', cursive, sans-serif`
- **Monospace & Metadata Stack:** `'Space Mono', 'Gaegu', monospace`
- **Paired Korean Typography:** `Gaegu (개구체 아날로그 손글씨) / Nanum Pen Script`
- **Typographic Fallback Rationale:** 노트 줄공책과 불규칙한 손그림 테두리에 조화롭게 녹아드는 친근한 개구체 손글씨 서체 지정
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #41403E`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### NOTE // 01: Hand-Drawn Border Wobble
Irregular border-radius values simulating natural human pen strokes.
*(Metadata: `WOBBLE: 8°`)*

### SKETCH 02: Pencil Graphite Shading
Soft offset pencil drop shadow that feels hand-stamped onto paper.
*(Metadata: `GRAPHITE`)*

### ANALOG 03: Informal Whiteboard Poise
Unpretentious warmth inviting collaborative feedback.
*(Metadata: `PAPER: WARM`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #0071DE, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, border 1px solid #41403E, text #FFFFFF`
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
  --theme-id: "papercss";
  --theme-name: "PaperCSS Sketchbook";
  --bg-base: #FFFDF9;
  --surface-card: #FFFFFF;
  --border-hairline: #41403E;
  --accent-primary: #0071DE;
  --text-primary: #41403E;
  --font-heading: 'Patrick Hand', 'Gaegu', 'Nanum Pen Script', cursive, sans-serif;
  --font-body: 'Patrick Hand', 'Gaegu', 'Nanum Pen Script', cursive, sans-serif;
  --font-mono: 'Space Mono', 'Gaegu', monospace;
  --theme-radius: 8px;
}

body[data-theme="papercss"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="papercss"] h1,
body[data-theme="papercss"] h2,
body[data-theme="papercss"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="papercss"] .card,
body[data-theme="papercss"] .panel {
  background: var(--surface-card);
  border: 1px solid #41403E;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: PaperCSS Sketchbook
Role: Principal Frontend Systems Architect specialized in the PaperCSS Sketchbook design language.
Origin Repository: papercss/papercss (https://www.getpapercss.com)

## Visual Directives:
1. Palette: Canvas must be #FFFDF9, Surfaces #FFFFFF, Accents #0071DE.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #41403E.
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 삐뚤빼뚤한 불규칙 손그림 외곽선과 연필 스케치 그림자. Form follows function with mathematical discipline.
5. Strict Negative Rules: No rigid mathematical straight lines. No clinical high-tech dark glows. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
