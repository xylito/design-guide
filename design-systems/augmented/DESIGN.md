# DESIGN.md — Augmented Cyberpunk HUD Design System Specification
> **Preset #36 of 62** | **Category:** 🎛️ 4. Hardware & Industrial (로봇·계기판)  
> **Source Repository:** [propjockey/augmented-ui](https://github.com/propjockey/augmented-ui)  
> **Official Docs / Reference:** [https://augmented-ui.com](https://augmented-ui.com)  
> **Ecosystem Popularity:** ⭐ `2.9k` | **Tags:** `Chamfer 45°`, `Neon Cyan`, `Sci-Fi HUD`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      augmented                                   │
│  Design System: Augmented Cyberpunk HUD                     │
│  Archetype:     Sci-Fi Polygon HUD                          │
│  Nav Brand:     AUGMENTED//HUD.7                            │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
45도 사선 모서리 절단(clip-path)과 네온 사이버네틱 발광
- **45-degree chamfered polygon clip-path on all cards and buttons.**
- **Glowing neon cyan #00F0FF and tactical amber borders.**
- **Sci-fi tactical HUD telemetry layout.**

### 1.2 Role in AI Agent Codebases
우주선 계기판, 메카닉 조종실, 사이버네틱 텔레메트리 레이아웃 생성
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Augmented Cyberpunk HUD** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Strictly NO rounded pill shapes.**
- ❌ **No soft consumer pastels.**
- ❌ **Specific Anti-AI Directive:** No standard rectangular rounded cards. Must feature 45-degree polygon HUD chamfers.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#080C14` | Canvas / Base background layer |
| `--surface-card` | `#0D1424` | Elevation 1 container surface |
| `--border-hairline` | `#00F0FF` | 1px boundary line |
| `--accent-primary` | `#00F0FF` | Primary interactive & highlight focus |
| `--text-primary` | `#E0F7FF` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace`
- **Paired Korean Typography:** `Pretendard Variable / Noto Sans KR`
- **Typographic Fallback Rationale:** 글로벌 모던 SaaS의 영문 산스와 완벽한 자간 조화를 이루는 프리텐다드 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `0px with 45-degree clip-path chamfers`
- **Border Treatment:** `1px solid #00F0FF`
- **Elevation & Shadow:** `0 0 12px rgba(0, 240, 255, 0.3)`

### 4.2 Structural Features & Micro-Interactions
### RADAR // 01: Target Acquisition Grid
Long-range sensor telemetry scanning at 120Hz refresh rate.
*(Metadata: `LOCKED`)*

### SHIELD // 02: Energy Deflection Matrix
Autonomous kinetic shield modulation running at peak flux.
*(Metadata: `98.4% FLUX`)*

### AVIONICS // 03: Sub-Orbital Thruster Vector
Multi-axis plasma vectoring with dynamic yaw stabilization.
*(Metadata: `VECTOR: 45°`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #00F0FF, text #070B19, polygon beveled clip-path corners`
- **Secondary / Ghost Button:**
  - Specification: `Background rgba(7, 11, 25, 0.8), border 1px solid #00F0FF, text #00F0FF`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `0px with 45-degree clip-path chamfers`.
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
  --theme-id: "augmented";
  --theme-name: "Augmented Cyberpunk HUD";
  --bg-base: #080C14;
  --surface-card: #0D1424;
  --border-hairline: #00F0FF;
  --accent-primary: #00F0FF;
  --text-primary: #E0F7FF;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 0px;
}

body[data-theme="augmented"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="augmented"] h1,
body[data-theme="augmented"] h2,
body[data-theme="augmented"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="augmented"] .card,
body[data-theme="augmented"] .panel {
  background: var(--surface-card);
  border: 1px solid #00F0FF;
  border-radius: var(--theme-radius);
  box-shadow: 0 0 12px rgba(0, 240, 255, 0.3);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Augmented Cyberpunk HUD
Role: Principal Frontend Systems Architect specialized in the Augmented Cyberpunk HUD design language.
Origin Repository: propjockey/augmented-ui (https://augmented-ui.com)

## Visual Directives:
1. Palette: Canvas must be #080C14, Surfaces #0D1424, Accents #00F0FF.
2. Geometry: Border radius must strictly be 0px with 45-degree clip-path chamfers. Border treatment: 1px solid #00F0FF.
3. Typography: Heading stack is 'Space Mono', monospace. Body typography must feel intentional with tight tracking.
4. Vibe: 45도 사선 모서리 절단(clip-path)과 네온 사이버네틱 발광. Form follows function with mathematical discipline.
5. Strict Negative Rules: Strictly NO rounded pill shapes. No soft consumer pastels. No standard rectangular rounded cards. Must feature 45-degree polygon HUD chamfers.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
