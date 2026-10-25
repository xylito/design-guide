# DESIGN.md — Gruvbox Earthy Mobile Design System Specification
> **Preset #30 of 62** | **Category:** ⚡ 3. Dark & Developer (개발자·터미널)  
> **Source Repository:** [morhetz/gruvbox](https://github.com/morhetz/gruvbox)  
> **Official Docs / Reference:** [https://github.com/morhetz/gruvbox](https://github.com/morhetz/gruvbox)  
> **Ecosystem Popularity:** ⭐ `15.6k` | **Tags:** `Gruvbox`, `Retro Warm`, `Earthy`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      gruvbox                                     │
│  Design System: Gruvbox Earthy Mobile                       │
│  Archetype:     Retro Analog Warmth                         │
│  Nav Brand:     GRUVBOX.RETRO                               │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
70~80년대 레트로 웜 브라운(#282828), 크림 텍스트, 시그니처 오렌지
- **Warm earthy dark canvas #282828 and cream text #EBDBB2.**
- **Retro orange #FE8019 and forest green #B8BB26 accents.**
- **Compact 4px corners with tactile analog warmth.**

### 1.2 Role in AI Agent Codebases
아날로그 하드웨어 및 레트로 빈티지 코딩 환경의 정취 재현
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Gruvbox Earthy Mobile** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Strictly NO cold blue light.**
- ❌ **No modern translucent glass or floating blur.**
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
| `--bg-base` | `#282828` | Canvas / Base background layer |
| `--surface-card` | `#3C3836` | Elevation 1 container surface |
| `--border-hairline` | `#504945` | 1px boundary line |
| `--accent-primary` | `#FE8019` | Primary interactive & highlight focus |
| `--text-primary` | `#EBDBB2` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Space Mono', 'D2Coding', monospace`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'Space Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `D2Coding / Space Mono (그루브박스 레트로 터미널)`
- **Typographic Fallback Rationale:** 따뜻한 어스(Earthy) 톤의 레트로 빔(Vim) 터미널 감성에 어울리는 D2Coding 고정폭 서체
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #504945`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### ANALOG: Zero Blue Light Warmth
Earthy brown background #282828 eliminating optical fatigue.
*(Metadata: `#282828`)*

### VINTAGE: Retro Safety Orange
Signature warm orange #FE8019 and olive green #B8BB26.
*(Metadata: `#FE8019`)*

### SHARP: Crisp 4px Retro Bevel
Firm compact buttons reminiscent of vintage audio amplifiers.
*(Metadata: `RADIUS: 4PX`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #FE8019, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #3C3836, border 1px solid #504945, text #FFFFFF`
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
  --theme-id: "gruvbox";
  --theme-name: "Gruvbox Earthy Mobile";
  --bg-base: #282828;
  --surface-card: #3C3836;
  --border-hairline: #504945;
  --accent-primary: #FE8019;
  --text-primary: #EBDBB2;
  --font-heading: 'Space Mono', 'D2Coding', monospace;
  --font-body: 'Inter', 'Pretendard Variable', sans-serif;
  --font-mono: 'Space Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="gruvbox"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="gruvbox"] h1,
body[data-theme="gruvbox"] h2,
body[data-theme="gruvbox"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="gruvbox"] .card,
body[data-theme="gruvbox"] .panel {
  background: var(--surface-card);
  border: 1px solid #504945;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Gruvbox Earthy Mobile
Role: Principal Frontend Systems Architect specialized in the Gruvbox Earthy Mobile design language.
Origin Repository: morhetz/gruvbox (https://github.com/morhetz/gruvbox)

## Visual Directives:
1. Palette: Canvas must be #282828, Surfaces #3C3836, Accents #FE8019.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #504945.
3. Typography: Heading stack is 'Space Mono', monospace. Body typography must feel intentional with tight tracking.
4. Vibe: 70~80년대 레트로 웜 브라운(#282828), 크림 텍스트, 시그니처 오렌지. Form follows function with mathematical discipline.
5. Strict Negative Rules: Strictly NO cold blue light. No modern translucent glass or floating blur. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
