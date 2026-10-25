# DESIGN.md — Blueprint CAD Schematic Design System Specification
> **Preset #3 of 62** | **Category:** 📖 1. Editorial & Print (도면·인쇄물)  
> **Source Repository:** [engineering-schematic/blueprint-css](https://github.com/engineering-schematic/blueprint-css)  
> **Official Docs / Reference:** [https://github.com/engineering-schematic/blueprint-css](https://github.com/engineering-schematic/blueprint-css)  
> **Ecosystem Popularity:** ⭐ `21.0k` | **Tags:** `CAD Grid`, `Cobalt Blue`, `Monospace`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      blueprint                                   │
│  Design System: Blueprint CAD Schematic                     │
│  Archetype:     Engineering Schematic                       │
│  Nav Brand:     CAD//SCHEMATIC.04                           │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
코발트 블루 모눈종이와 정밀 하드웨어 설계 도면 감성
- **Cobalt blue drafting paper (#0A2463) with visible cyan coordinate grids.**
- **All elements framed with 1px technical wireframe borders and corner crosses (+).**
- **100% monospaced drafting annotations.**

### 1.2 Role in AI Agent Codebases
엔지니어링 텔레메트리, CAD 시스템, 하드웨어 계측 대시보드 조형감 주입
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Blueprint CAD Schematic** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No soft pastel gradients or rounded squircles.**
- ❌ **No generic sans-serif fonts.**
- ❌ **Specific Anti-AI Directive:** No soft shadows or sans-serif fonts. Must look like technical CAD plotter schematics.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#0A2463` | Canvas / Base background layer |
| `--surface-card` | `#081E52` | Elevation 1 container surface |
| `--border-hairline` | `rgba(0, 240, 255, 0.45)` | 1px boundary line |
| `--accent-primary` | `#00F0FF` | Primary interactive & highlight focus |
| `--text-primary` | `#E6F4F1` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Space Mono', 'D2Coding', monospace`
- **Body & UI Font Stack:** `'Space Mono', 'D2Coding', monospace`
- **Monospace & Metadata Stack:** `'Space Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `D2Coding / Space Mono (블루프린트 도면 모노)`
- **Typographic Fallback Rationale:** CAD 청사진 도면 레이아웃에 맞춘 모노스페이스 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `0px`
- **Border Treatment:** `1px solid rgba(0, 240, 255, 0.45)`
- **Elevation & Shadow:** `inset 0 0 16px rgba(0, 240, 255, 0.08)`

### 4.2 Structural Features & Micro-Interactions
### SPEC // 01: Orthographic Projection
Millimeter-precision grid interval aligned to engineering standard DIN 476.
*(Metadata: `TOLERANCE: ±0.02`)*

### COORD // 02: Vector Telemetry Layer
Direct coordinate overlay with datum plane reference markers (+).
*(Metadata: `DATUM: X-74.2`)*

### SHEET // 03: Technical Drafting Border
Cyan hairline schematics with monospaced dimensional callouts.
*(Metadata: `DRAFT: ISO-A1`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #00F0FF, text #0A2463, 0px radius, monospaced font with technical brackets`
- **Secondary / Ghost Button:**
  - Specification: `Transparent, border 1px solid #00F0FF, text #00F0FF, 0px radius`
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
  --theme-id: "blueprint";
  --theme-name: "Blueprint CAD Schematic";
  --bg-base: #0A2463;
  --surface-card: #081E52;
  --border-hairline: rgba(0, 240, 255, 0.45);
  --accent-primary: #00F0FF;
  --text-primary: #E6F4F1;
  --font-heading: 'Space Mono', 'D2Coding', monospace;
  --font-body: 'Space Mono', 'D2Coding', monospace;
  --font-mono: 'Space Mono', 'D2Coding', monospace;
  --theme-radius: 0px;
}

body[data-theme="blueprint"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="blueprint"] h1,
body[data-theme="blueprint"] h2,
body[data-theme="blueprint"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="blueprint"] .card,
body[data-theme="blueprint"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(0, 240, 255, 0.45);
  border-radius: var(--theme-radius);
  box-shadow: inset 0 0 16px rgba(0, 240, 255, 0.08);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Blueprint CAD Schematic
Role: Principal Frontend Systems Architect specialized in the Blueprint CAD Schematic design language.
Origin Repository: engineering-schematic/blueprint-css (https://github.com/engineering-schematic/blueprint-css)

## Visual Directives:
1. Palette: Canvas must be #0A2463, Surfaces #081E52, Accents #00F0FF.
2. Geometry: Border radius must strictly be 0px. Border treatment: 1px solid rgba(0, 240, 255, 0.45).
3. Typography: Heading stack is 'Space Mono', monospace. Body typography must feel intentional with tight tracking.
4. Vibe: 코발트 블루 모눈종이와 정밀 하드웨어 설계 도면 감성. Form follows function with mathematical discipline.
5. Strict Negative Rules: No soft pastel gradients or rounded squircles. No generic sans-serif fonts. No soft shadows or sans-serif fonts. Must look like technical CAD plotter schematics.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
