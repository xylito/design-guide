# DESIGN.md — Teenage Engineering Tactile Design System Specification
> **Preset #34 of 62** | **Category:** 🎛️ 4. Hardware & Industrial (로봇·계기판)  
> **Source Repository:** [teenage-engineering/ui](https://github.com/teenage-engineering/ui)  
> **Official Docs / Reference:** [https://teenage.engineering](https://teenage.engineering)  
> **Ecosystem Popularity:** ⭐ `4.2k` | **Tags:** `Aluminum`, `Safety Orange`, `Synthesizer`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      teenage                                     │
│  Design System: Teenage Engineering Tactile                 │
│  Archetype:     Braun & Synthesizer Industrial              │
│  Nav Brand:     TE-ENGINEERING                              │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
매트 알루미늄 그레이, 음각 패널, 세이프티 오렌지 다이얼
- **Matte aluminum gray #E2E0DC with recessed inset grooves.**
- **Safety orange #FF4F00 as the primary physical accent.**
- **Tactile physical hardware push-button feeling.**

### 1.2 Role in AI Agent Codebases
독창적인 하드웨어 장비와 사운드 기기의 조작감을 소프트웨어 UI로 완벽 승화
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Teenage Engineering Tactile** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No high-gloss shiny reflections.**
- ❌ **No generic modern SaaS blue.**
- ❌ **Specific Anti-AI Directive:** No generic SaaS look. Must feel like physical synthesizer hardware with rotary knobs.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#E2E0DC` | Canvas / Base background layer |
| `--surface-card` | `#D5D3CE` | Elevation 1 container surface |
| `--border-hairline` | `#B8B5AE` | 1px boundary line |
| `--accent-primary` | `#FF4F00` | Primary interactive & highlight focus |
| `--text-primary` | `#1A1918` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Space Mono', 'D2Coding', monospace`
- **Body & UI Font Stack:** `'Space Mono', 'D2Coding', monospace`
- **Monospace & Metadata Stack:** `'Space Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `D2Coding / Space Mono (신디사이저 LCD 모노)`
- **Typographic Fallback Rationale:** 틴에이지 엔지니어링 OP-1 신디사이저의 세그먼트 LCD 디스플레이 감성을 위한 고정폭 폰트
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `4px`
- **Border Treatment:** `1px solid #3D4046`
- **Elevation & Shadow:** `inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.3)`

### 4.2 Structural Features & Micro-Interactions
### KNOB // 01: Analog Parameter Dial
Tactile step modulation mapped to sub-millimeter precision.
*(Metadata: `FILTER: 420HZ`)*

### CHASSIS 02: Anodized Matte Aluminum
Recessed CNC machined grooves creating tactile physical depth.
*(Metadata: `CNC: CNC-04`)*

### SWITCH 03: Mechanical Spring Actuator
Crisp physical detent actuation feedback on every click.
*(Metadata: `FORCE: 60G`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #FF5500, text #FFFFFF, 4px radius, tactile mechanical switch feel`
- **Secondary / Ghost Button:**
  - Specification: `Background #2B2D31, border 1px solid #484C54, text #E2E4E9`
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
  --theme-id: "teenage";
  --theme-name: "Teenage Engineering Tactile";
  --bg-base: #E2E0DC;
  --surface-card: #D5D3CE;
  --border-hairline: #B8B5AE;
  --accent-primary: #FF4F00;
  --text-primary: #1A1918;
  --font-heading: 'Space Mono', 'D2Coding', monospace;
  --font-body: 'Space Mono', 'D2Coding', monospace;
  --font-mono: 'Space Mono', 'D2Coding', monospace;
  --theme-radius: 4px;
}

body[data-theme="teenage"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="teenage"] h1,
body[data-theme="teenage"] h2,
body[data-theme="teenage"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="teenage"] .card,
body[data-theme="teenage"] .panel {
  background: var(--surface-card);
  border: 1px solid #3D4046;
  border-radius: var(--theme-radius);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.3);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Teenage Engineering Tactile
Role: Principal Frontend Systems Architect specialized in the Teenage Engineering Tactile design language.
Origin Repository: teenage-engineering/ui (https://teenage.engineering)

## Visual Directives:
1. Palette: Canvas must be #E2E0DC, Surfaces #D5D3CE, Accents #FF4F00.
2. Geometry: Border radius must strictly be 4px. Border treatment: 1px solid #3D4046.
3. Typography: Heading stack is 'Space Mono', monospace. Body typography must feel intentional with tight tracking.
4. Vibe: 매트 알루미늄 그레이, 음각 패널, 세이프티 오렌지 다이얼. Form follows function with mathematical discipline.
5. Strict Negative Rules: No high-gloss shiny reflections. No generic modern SaaS blue. No generic SaaS look. Must feel like physical synthesizer hardware with rotary knobs.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
