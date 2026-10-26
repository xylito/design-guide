# DESIGN.md — NES.css 8-Bit Arcade Design System Specification
> **Preset #47 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [nostalgic-css/NES.css](https://github.com/nostalgic-css/NES.css)  
> **Official Docs / Reference:** [https://nostalgic-css.github.io/NES.css/](https://nostalgic-css.github.io/NES.css/)  
> **Ecosystem Popularity:** ⭐ `20.2k` | **Tags:** `8-Bit`, `Pixel Art`, `Gaming`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      nes                                         │
│  Design System: NES.css 8-Bit Arcade                        │
│  Archetype:     Retro 8-Bit Gaming                          │
│  Nav Brand:     ARCADE//8-BIT.NES                           │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
계단식 픽셀 아트 보더, 8비트 아케이드 RPG 감성
- **Pixelated stepped borders (box-shadow or chunky 4px black outlines).**
- **Arcade colors: Blue #209CEE, Red #E76E55, Yellow #F7D51D, Green #92CC41.**
- **Chunky retro gaming dialogue boxes.**

### 1.2 Role in AI Agent Codebases
게이미피케이션 및 개발자 유희적 경험을 위한 완벽한 레트로 픽셀 아트 레이아웃 강제
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **NES.css 8-Bit Arcade** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Strictly NO smooth modern anti-aliased curves.**
- ❌ **No gentle subtle pastels.**
- ❌ **Specific Anti-AI Directive:** No smooth antialiasing or vector gradients. Strict 8-bit pixel art outlines and primary colors.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#212529` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#000000` | 1px boundary line |
| `--accent-primary` | `#209CEE` | Primary interactive & highlight focus |
| `--text-primary` | `#FFFFFF` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Press Start 2P', 'PfStardust', 'NeoDunggeunmo', monospace`
- **Body & UI Font Stack:** `'PfStardust', 'NeoDunggeunmo', 'Galmuri11', monospace`
- **Monospace & Metadata Stack:** `'Press Start 2P', 'PfStardust', monospace`
- **Paired Korean Typography:** `PfStardust / NeoDunggeunmo (PF스타더스트 8비트 패미컴 RPG 픽셀 폰트)`
- **Typographic Fallback Rationale:** 8비트 패미컴 / 게임보이 한글 롬팩 RPG(포켓몬, 마더)의 감성을 완벽히 재현하는 레트로 아케이드 픽셀 서체
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `0px`
- **Border Treatment:** `4px solid #000000`
- **Elevation & Shadow:** `none`

### 4.2 Structural Features & Micro-Interactions
### LVL 99: Stepped Pixel Art Borders
Multi-layered drop-shadow trickery simulating retro CRT scanlines.
*(Metadata: `PIXEL: 4PX`)*

### ITEM 02: Primary 8-Bit Palette
Vibrant arcade red, coin yellow, and 1-up green command states.
*(Metadata: `LIVES: x3`)*

### EXP 03: Dialog Box Interaction
Chunky monospace text prompts with classic gaming typewriter rhythm.
*(Metadata: `GOLD: 9999`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #E76E55, text #FFFFFF, 4px black pixel border, Press Start 2P font`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, text #000000, 4px black pixel border`
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
  --theme-id: "nes";
  --theme-name: "NES.css 8-Bit Arcade";
  --bg-base: #212529;
  --surface-card: #FFFFFF;
  --border-hairline: #000000;
  --accent-primary: #209CEE;
  --text-primary: #FFFFFF;
  --font-heading: 'Press Start 2P', 'Galmuri11', 'Space Mono', monospace;
  --font-body: 'Galmuri11', 'Galmuri9', monospace;
  --font-mono: 'Press Start 2P', 'Galmuri11', monospace;
  --theme-radius: 0px;
}

body[data-theme="nes"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="nes"] h1,
body[data-theme="nes"] h2,
body[data-theme="nes"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="nes"] .card,
body[data-theme="nes"] .panel {
  background: var(--surface-card);
  border: 4px solid #000000;
  border-radius: var(--theme-radius);
  box-shadow: none;
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: NES.css 8-Bit Arcade
Role: Principal Frontend Systems Architect specialized in the NES.css 8-Bit Arcade design language.
Origin Repository: nostalgic-css/NES.css (https://nostalgic-css.github.io/NES.css/)

## Visual Directives:
1. Palette: Canvas must be #212529, Surfaces #FFFFFF, Accents #209CEE.
2. Geometry: Border radius must strictly be 0px. Border treatment: 4px solid #000000.
3. Typography: Heading stack is 'Space Mono', monospace. Body typography must feel intentional with tight tracking.
4. Vibe: 계단식 픽셀 아트 보더, 8비트 아케이드 RPG 감성. Form follows function with mathematical discipline.
5. Strict Negative Rules: Strictly NO smooth modern anti-aliased curves. No gentle subtle pastels. No smooth antialiasing or vector gradients. Strict 8-bit pixel art outlines and primary colors.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
