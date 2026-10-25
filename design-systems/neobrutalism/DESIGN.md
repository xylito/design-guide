# DESIGN.md — Neo-Brutalism Pop Design System Specification
> **Preset #50 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [ekmas/neobrutalism-components](https://github.com/ekmas/neobrutalism-components)  
> **Official Docs / Reference:** [https://neobrutalism-components.vercel.app](https://neobrutalism-components.vercel.app)  
> **Ecosystem Popularity:** ⭐ `4.9k` | **Tags:** `Hard Shadow`, `Cyber Yellow`, `Raw Outlines`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      neobrutalism                                │
│  Design System: Neo-Brutalism Pop                           │
│  Archetype:     Retro Pop & Hard Shadows                    │
│  Nav Brand:     RADICAL.UI★                                 │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
3px 블랙 외곽선, 하드 섀도우, 사이버 옐로우와 네오 민트
- **Thick 3px solid black outlines on all interactive elements.**
- **Completely unblurred hard drop shadows (box-shadow: 5px 5px 0 #000).**
- **Tactile push-down states (translate 3px, 3px).**

### 1.2 Role in AI Agent Codebases
단조롭고 밋밋한 카드 레이아웃을 파괴하고 시선을 강탈하는 펀치력 있는 인상 형성
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Neo-Brutalism Pop** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Strictly NO smooth blurred shadows.**
- ❌ **No timid polite pastels without solid black anchoring.**
- ❌ **Specific Anti-AI Directive:** Never use soft blurred drop shadows. Must have solid hard-edge 4px 4px 0px #000000 offset shadow.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#FFF9E6` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#000000` | 1px boundary line |
| `--accent-primary` | `#FFE600` | Primary interactive & highlight focus |
| `--text-primary` | `#000000` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Archivo Black', 'Black Han Sans', 'Do Hyeon', sans-serif`
- **Body & UI Font Stack:** `'Space Grotesk', 'Pretendard Variable', 'Pretendard', sans-serif`
- **Monospace & Metadata Stack:** `'Space Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Black Han Sans (블랙한산스 초중량 헤드라인) / Do Hyeon (도현체 레트로 볼드)`
- **Typographic Fallback Rationale:** 네오브루탈리즘의 묵직한 잉크 트랩과 두꺼운 3px 블랙 외곽선에 맞춰 강력한 시각적 펀치력을 지닌 블랙한산스 및 도현체 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `4px`
- **Border Treatment:** `3px solid #000000`
- **Elevation & Shadow:** `4px 4px 0px #000000`

### 4.2 Structural Features & Micro-Interactions
### STYLE #01: Zero-Blur Hard Shadows
box-shadow: 5px 5px 0px #000. Real tactile physical depth.
*(Metadata: `POP: MAX`)*

### VIBE #02: High-Voltage Electric Pop
Cyber Yellow, Neo Mint, and Bubblegum destroying grayscale boredom.
*(Metadata: `#FFE600`)*

### ATTITUDE #03: Tilted Badges & Stickers
Micro-rotations (-2deg) give components rebel personality.
*(Metadata: `-2.5DEG`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #FF6B6B, text #000000, 3px solid #000, 4px 4px 0px #000 shadow`
- **Secondary / Ghost Button:**
  - Specification: `Background #4D96FF, text #000000, 3px solid #000, 4px 4px 0px #000 shadow`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `4px`.
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
  --theme-id: "neobrutalism";
  --theme-name: "Neo-Brutalism Pop";
  --bg-base: #FFF9E6;
  --surface-card: #FFFFFF;
  --border-hairline: #000000;
  --accent-primary: #FFE600;
  --text-primary: #000000;
  --font-heading: 'Archivo Black', 'Black Han Sans', 'Do Hyeon', sans-serif;
  --font-body: 'Space Grotesk', 'Pretendard Variable', 'Pretendard', sans-serif;
  --font-mono: 'Space Mono', 'D2Coding', monospace;
  --theme-radius: 4px;
}

body[data-theme="neobrutalism"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="neobrutalism"] h1,
body[data-theme="neobrutalism"] h2,
body[data-theme="neobrutalism"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="neobrutalism"] .card,
body[data-theme="neobrutalism"] .panel {
  background: var(--surface-card);
  border: 3px solid #000000;
  border-radius: var(--theme-radius);
  box-shadow: 4px 4px 0px #000000;
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Neo-Brutalism Pop
Role: Principal Frontend Systems Architect specialized in the Neo-Brutalism Pop design language.
Origin Repository: ekmas/neobrutalism-components (https://neobrutalism-components.vercel.app)

## Visual Directives:
1. Palette: Canvas must be #FFF9E6, Surfaces #FFFFFF, Accents #FFE600.
2. Geometry: Border radius must strictly be 4px. Border treatment: 3px solid #000000.
3. Typography: Heading stack is 'Archivo Black', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 3px 블랙 외곽선, 하드 섀도우, 사이버 옐로우와 네오 민트. Form follows function with mathematical discipline.
5. Strict Negative Rules: Strictly NO smooth blurred shadows. No timid polite pastels without solid black anchoring. Never use soft blurred drop shadows. Must have solid hard-edge 4px 4px 0px #000000 offset shadow.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
