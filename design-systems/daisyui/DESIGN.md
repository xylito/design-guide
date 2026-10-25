# DESIGN.md — DaisyUI Synthwave Brutal Design System Specification
> **Preset #44 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [saadeghi/daisyui](https://github.com/saadeghi/daisyui)  
> **Official Docs / Reference:** [https://daisyui.com](https://daisyui.com)  
> **Ecosystem Popularity:** ⭐ `36.4k` | **Tags:** `Semantic CSS`, `Neon`, `Synthwave`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      daisyui                                     │
│  Design System: DaisyUI Synthwave Brutal                    │
│  Archetype:     Retro Synthwave Neon                        │
│  Nav Brand:     DAISY//SYNTHWAVE                            │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
딥 바이올렛, 네온 핑크, 네온 옐로우의 80년대 신스웨이브
- **Synthwave purple canvas #1A103C and deep purple cards #271A52.**
- **Hot pink #FF5ACD with glowing neon drop shadows.**
- **Playful 80s retro attitude.**

### 1.2 Role in AI Agent Codebases
극적인 시각적 임팩트와 유쾌한 채도의 레트로 퓨처리즘 UI 생성 유도
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **DaisyUI Synthwave Brutal** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No corporate gray-on-gray fatigue.**
- ❌ **No dull low-contrast elements.**
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
| `--bg-base` | `#1A103C` | Canvas / Base background layer |
| `--surface-card` | `#271A52` | Elevation 1 container surface |
| `--border-hairline` | `#4D3880` | 1px boundary line |
| `--accent-primary` | `#FF5ACD` | Primary interactive & highlight focus |
| `--text-primary` | `#F9F5FD` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Space Grotesk', 'GmarketSansBold', 'Do Hyeon', sans-serif`
- **Body & UI Font Stack:** `'Space Grotesk', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'Space Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `GmarketSansBold (지마켓산스 기하학 디스플레이) / Do Hyeon (도현체)`
- **Typographic Fallback Rationale:** 사이버 신스웨이브의 기하학적 형태감과 미래주의적 레트로 무드를 한글 GmarketSansBold의 완벽한 원형 곡률(ㅇ)로 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #4D3880`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### NEON // 01: Hot Pink Glowing Buttons
Saturated button glow (0 0 16px #FF5ACD) that demands instant clicks.
*(Metadata: `GLOW: 100%`)*

### PURPLE 02: Outrun Night Sky
Deep rich violet surfaces inspired by 80s retro sunset aesthetics.
*(Metadata: `#1A103C`)*

### PUNCH // 03: Bold Typography Pop
Space Grotesk headings styled with glowing cyberpunk attitude.
*(Metadata: `POP: MAX`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #FF5ACD, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #271A52, border 1px solid #4D3880, text #FFFFFF`
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
  --theme-id: "daisyui";
  --theme-name: "DaisyUI Synthwave Brutal";
  --bg-base: #1A103C;
  --surface-card: #271A52;
  --border-hairline: #4D3880;
  --accent-primary: #FF5ACD;
  --text-primary: #F9F5FD;
  --font-heading: 'Space Grotesk', 'GmarketSansBold', 'Do Hyeon', sans-serif;
  --font-body: 'Space Grotesk', 'Pretendard Variable', sans-serif;
  --font-mono: 'Space Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="daisyui"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="daisyui"] h1,
body[data-theme="daisyui"] h2,
body[data-theme="daisyui"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="daisyui"] .card,
body[data-theme="daisyui"] .panel {
  background: var(--surface-card);
  border: 1px solid #4D3880;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: DaisyUI Synthwave Brutal
Role: Principal Frontend Systems Architect specialized in the DaisyUI Synthwave Brutal design language.
Origin Repository: saadeghi/daisyui (https://daisyui.com)

## Visual Directives:
1. Palette: Canvas must be #1A103C, Surfaces #271A52, Accents #FF5ACD.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #4D3880.
3. Typography: Heading stack is 'Space Grotesk', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 딥 바이올렛, 네온 핑크, 네온 옐로우의 80년대 신스웨이브. Form follows function with mathematical discipline.
5. Strict Negative Rules: No corporate gray-on-gray fatigue. No dull low-contrast elements. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
