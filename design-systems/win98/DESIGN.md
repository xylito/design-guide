# DESIGN.md — 98.css Classic Win95 Design System Specification
> **Preset #46 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [jdan/98.css](https://github.com/jdan/98.css)  
> **Official Docs / Reference:** [https://jdan.github.io/98.css/](https://jdan.github.io/98.css/)  
> **Ecosystem Popularity:** ⭐ `10.5k` | **Tags:** `Win95`, `3D Bevel`, `Teal Desktop`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      win98                                       │
│  Design System: 98.css Classic Win95                        │
│  Archetype:     Windows 95/98 Nostalgia                     │
│  Nav Brand:     C:\WINDOWS\SYSTEM98                         │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
네이비 타이틀 바, 입체 회색 픽셀 베벨, 90년대 클래식 OS
- **Desktop teal background #008080 with gray windows #C0C0C0.**
- **Strictly 0px radius with 3D beveled outset borders (white top/left, dark gray bottom/right).**
- **Navy title bars #000080 with crisp pixelated buttons.**

### 1.2 Role in AI Agent Codebases
향수를 자극하는 실물 물리 버튼의 inset/outset 베벨 촉각 경험 재현
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **98.css Classic Win95** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Strictly NO rounded corners (0px only).**
- ❌ **No modern flat blurry shadows.**
- ❌ **Specific Anti-AI Directive:** Zero border-radius. Classic Windows 95/98 gray chassis #C0C0C0 with navy titlebar #000080.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#008080` | Canvas / Base background layer |
| `--surface-card` | `#C0C0C0` | Elevation 1 container surface |
| `--border-hairline` | `#808080` | 1px boundary line |
| `--accent-primary` | `#000080` | Primary interactive & highlight focus |
| `--text-primary` | `#000000` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Press Start 2P', 'Galmuri11', 'MS Sans Serif', monospace`
- **Body & UI Font Stack:** `'Galmuri11', 'MS Sans Serif', 'Galmuri9', sans-serif`
- **Monospace & Metadata Stack:** `'Press Start 2P', 'Galmuri11', monospace`
- **Paired Korean Typography:** `Galmuri11 (갈무리11 정통 16비트 OS 비트맵) / Galmuri9`
- **Typographic Fallback Rationale:** 90년대 윈도우 95/98의 11px 도트 폰트 질감을 한글에서도 재현하는 갈무리11 비트맵 폰트 채택
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `0px`
- **Border Treatment:** `none`
- **Elevation & Shadow:** `inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px #808080, inset 2px 2px #dfdfdf`

### 4.2 Structural Features & Micro-Interactions
### BEVEL 01: 3D Outset Beveled Borders
Top-left white #FFFFFF and bottom-right gray #808080 creating 3D depth.
*(Metadata: `BEVEL: 2PX`)*

### TITLEBAR: Active Window Focus
High-contrast navy titlebar (#000080) with iconic close [X] box.
*(Metadata: `FOCUS: TRUE`)*

### PIXEL 03: Tactile Button Depression
Buttons invert their bevel lighting on mouse-down click.
*(Metadata: `INSET 3D`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #C0C0C0, 3D bevel box-shadow, text #000000, MS Sans Serif font`
- **Secondary / Ghost Button:**
  - Specification: `Same 3D push bevel button, active state inverts bevel shadows`
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
  --theme-id: "win98";
  --theme-name: "98.css Classic Win95";
  --bg-base: #008080;
  --surface-card: #C0C0C0;
  --border-hairline: #808080;
  --accent-primary: #000080;
  --text-primary: #000000;
  --font-heading: 'Press Start 2P', 'Galmuri11', 'MS Sans Serif', monospace;
  --font-body: 'Galmuri11', 'MS Sans Serif', 'Galmuri9', sans-serif;
  --font-mono: 'Press Start 2P', 'Galmuri11', monospace;
  --theme-radius: 0px;
}

body[data-theme="win98"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="win98"] h1,
body[data-theme="win98"] h2,
body[data-theme="win98"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="win98"] .card,
body[data-theme="win98"] .panel {
  background: var(--surface-card);
  border: none;
  border-radius: var(--theme-radius);
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px #808080, inset 2px 2px #dfdfdf;
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: 98.css Classic Win95
Role: Principal Frontend Systems Architect specialized in the 98.css Classic Win95 design language.
Origin Repository: jdan/98.css (https://jdan.github.io/98.css/)

## Visual Directives:
1. Palette: Canvas must be #008080, Surfaces #C0C0C0, Accents #000080.
2. Geometry: Border radius must strictly be 0px. Border treatment: none.
3. Typography: Heading stack is -apple-system, 'MS Sans Serif', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 네이비 타이틀 바, 입체 회색 픽셀 베벨, 90년대 클래식 OS. Form follows function with mathematical discipline.
5. Strict Negative Rules: Strictly NO rounded corners (0px only). No modern flat blurry shadows. Zero border-radius. Classic Windows 95/98 gray chassis #C0C0C0 with navy titlebar #000080.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
