# DESIGN.md — Retro 98 OS Mobile Design System Specification
> **Preset #61 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [jdan/98.css-mobile](https://github.com/jdan/98.css-mobile)  
> **Official Docs / Reference:** [https://jdan.github.io/98.css/](https://jdan.github.io/98.css/)  
> **Ecosystem Popularity:** ⭐ `6.2k` | **Tags:** `Retro 98`, `Win95`, `Pixel Bevel`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      win98_mobile                                │
│  Design System: Retro 98 OS Mobile                          │
│  Archetype:     Win95 Pocket Edition                        │
│  Nav Brand:     WIN98//MOBILE                               │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
90년대 윈도우 창 느낌의 회색 입체 버튼, 네이비 타이틀 바, 레트로 픽셀 폰트 감성
- **Teal #008080 canvas with classic #C0C0C0 gray window panels.**
- **2px outset/inset 3D pixel bevel borders.**
- **Navy blue titlebar with white bold typography.**

### 1.2 Role in AI Agent Codebases
향수를 자극하는 3D 픽셀 베벨과 회색 푸시 버튼의 클래식 OS 감성 복원
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Retro 98 OS Mobile** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Strictly NO smooth modern rounded curves.**
- ❌ **No floating blur or translucent glass.**
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
| `--bg-base` | `#008080` | Canvas / Base background layer |
| `--surface-card` | `#C0C0C0` | Elevation 1 container surface |
| `--border-hairline` | `#808080` | 1px boundary line |
| `--accent-primary` | `#000080` | Primary interactive & highlight focus |
| `--text-primary` | `#000000` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Press Start 2P', 'Galmuri11', 'Tahoma', monospace`
- **Body & UI Font Stack:** `'Galmuri11', 'Tahoma', 'Galmuri9', sans-serif`
- **Monospace & Metadata Stack:** `'Press Start 2P', 'Galmuri11', monospace`
- **Paired Korean Typography:** `Galmuri11 (갈무리11 윈도우 98 모바일 에디션)`
- **Typographic Fallback Rationale:** 포켓 PC 및 윈도우 98 클래식 OS의 픽셀 그리드 한글 서체 갈무리11 채택
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #808080`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### 3D BEVEL: Physical Outset/Inset Edges
Beveled highlights simulating 90s CRT plastic window panes.
*(Metadata: `BEVEL: 2PX`)*

### TITLEBAR: Classic Navy Blue Header
Solid #000080 bar with white bold title text.
*(Metadata: `WIN: ACTIVE`)*

### TEAL: Iconic #008080 Wallpaper
The legendary Windows 95 desktop background tone.
*(Metadata: `RGB: 0,128,128`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #000080, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #C0C0C0, border 1px solid #808080, text #FFFFFF`
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
  --theme-id: "win98_mobile";
  --theme-name: "Retro 98 OS Mobile";
  --bg-base: #008080;
  --surface-card: #C0C0C0;
  --border-hairline: #808080;
  --accent-primary: #000080;
  --text-primary: #000000;
  --font-heading: 'Press Start 2P', 'Galmuri11', 'Tahoma', monospace;
  --font-body: 'Galmuri11', 'Tahoma', 'Galmuri9', sans-serif;
  --font-mono: 'Press Start 2P', 'Galmuri11', monospace;
  --theme-radius: 8px;
}

body[data-theme="win98_mobile"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="win98_mobile"] h1,
body[data-theme="win98_mobile"] h2,
body[data-theme="win98_mobile"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="win98_mobile"] .card,
body[data-theme="win98_mobile"] .panel {
  background: var(--surface-card);
  border: 1px solid #808080;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Retro 98 OS Mobile
Role: Principal Frontend Systems Architect specialized in the Retro 98 OS Mobile design language.
Origin Repository: jdan/98.css-mobile (https://jdan.github.io/98.css/)

## Visual Directives:
1. Palette: Canvas must be #008080, Surfaces #C0C0C0, Accents #000080.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #808080.
3. Typography: Heading stack is -apple-system, Tahoma, sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 90년대 윈도우 창 느낌의 회색 입체 버튼, 네이비 타이틀 바, 레트로 픽셀 폰트 감성. Form follows function with mathematical discipline.
5. Strict Negative Rules: Strictly NO smooth modern rounded curves. No floating blur or translucent glass. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
