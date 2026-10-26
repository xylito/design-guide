# DESIGN.md — NES 8-Bit Arcade App Design System Specification
> **Preset #62 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [nostalgic-css/nes-mobile](https://github.com/nostalgic-css/nes-mobile)  
> **Official Docs / Reference:** [https://nostalgic-css.github.io/NES.css/](https://nostalgic-css.github.io/NES.css/)  
> **Ecosystem Popularity:** ⭐ `11.4k` | **Tags:** `NES`, `8-Bit Arcade`, `Pixel Outlines`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      nes_arcade                                  │
│  Design System: NES 8-Bit Arcade App                        │
│  Archetype:     8-Bit Retro Gaming                          │
│  Nav Brand:     NES.ARCADE★                                 │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
굵은 픽셀 테두리와 원색 도트 아트, 고정폭 비트 폰트로 구현된 아케이드 게임 리포트 UI
- **Pixelated stepped 4px black borders with zero smooth curves.**
- **Arcade gaming primary palette: Blue #209CEE, Red #E76E55, Gold #F7D51D.**
- **Space Mono / 8-bit pixel typography.**

### 1.2 Role in AI Agent Codebases
게이미피케이션 리포트 및 아케이드 퀘스트 대화창 레이아웃 구축
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **NES 8-Bit Arcade App** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Strictly NO anti-aliased smooth curves.**
- ❌ **No subtle pastel transparency.**
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
| `--bg-base` | `#1A1A24` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#000000` | 1px boundary line |
| `--accent-primary` | `#209CEE` | Primary interactive & highlight focus |
| `--text-primary` | `#FFFFFF` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Press Start 2P', 'NeoDunggeunmo', 'PfStardust', monospace`
- **Body & UI Font Stack:** `'NeoDunggeunmo', 'PfStardust', 'Galmuri11', monospace`
- **Monospace & Metadata Stack:** `'NeoDunggeunmo Code', 'Press Start 2P', monospace`
- **Paired Korean Typography:** `NeoDunggeunmo (오락실 아케이드 기판 둥근모꼴 도트 폰트)`
- **Typographic Fallback Rationale:** 네오지오 및 90년대 오락실 아케이드 기판 타이포그래피의 굵고 또렷한 둥근모 도트 서체
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #000000`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### STEPPED: Pixel Art Stepped Outlines
Chunky 4px black pixel outlines with 4px drop-shadow step.
*(Metadata: `PIXEL: 4PX`)*

### PALETTE: Primary Arcade NES Colors
Pure high-contrast gaming colors driving instant player action.
*(Metadata: `8-BIT CRT`)*

### RETRO: Monospace Quest Typography
Fixed-width typewriter rhythm evoking golden age RPG dialogs.
*(Metadata: `HP: 999/999`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #209CEE, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, border 1px solid #000000, text #FFFFFF`
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
  --theme-id: "nes_arcade";
  --theme-name: "NES 8-Bit Arcade App";
  --bg-base: #1A1A24;
  --surface-card: #FFFFFF;
  --border-hairline: #000000;
  --accent-primary: #209CEE;
  --text-primary: #FFFFFF;
  --font-heading: 'Press Start 2P', 'Galmuri11', 'Space Mono', monospace;
  --font-body: 'Galmuri11', 'Galmuri9', monospace;
  --font-mono: 'Press Start 2P', 'Galmuri11', monospace;
  --theme-radius: 8px;
}

body[data-theme="nes_arcade"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="nes_arcade"] h1,
body[data-theme="nes_arcade"] h2,
body[data-theme="nes_arcade"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="nes_arcade"] .card,
body[data-theme="nes_arcade"] .panel {
  background: var(--surface-card);
  border: 1px solid #000000;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: NES 8-Bit Arcade App
Role: Principal Frontend Systems Architect specialized in the NES 8-Bit Arcade App design language.
Origin Repository: nostalgic-css/nes-mobile (https://nostalgic-css.github.io/NES.css/)

## Visual Directives:
1. Palette: Canvas must be #1A1A24, Surfaces #FFFFFF, Accents #209CEE.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #000000.
3. Typography: Heading stack is 'Space Mono', monospace. Body typography must feel intentional with tight tracking.
4. Vibe: 굵은 픽셀 테두리와 원색 도트 아트, 고정폭 비트 폰트로 구현된 아케이드 게임 리포트 UI. Form follows function with mathematical discipline.
5. Strict Negative Rules: Strictly NO anti-aliased smooth curves. No subtle pastel transparency. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
