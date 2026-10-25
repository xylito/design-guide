# DESIGN.md — IBM Carbon Industrial Design System Specification
> **Preset #33 of 62** | **Category:** 🎛️ 4. Hardware & Industrial (로봇·계기판)  
> **Source Repository:** [carbon-design-system/carbon](https://github.com/carbon-design-system/carbon)  
> **Official Docs / Reference:** [https://carbondesignsystem.com](https://carbondesignsystem.com)  
> **Ecosystem Popularity:** ⭐ `7.8k` | **Tags:** `IBM Plex`, `0px Sharp`, `Mainframe`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      carbon                                      │
│  Design System: IBM Carbon Industrial                       │
│  Archetype:     Mission Critical Enterprise                 │
│  Nav Brand:     IBM//CARBON.v11                             │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
엄격한 0px 모서리, 2px 포커스 림, 산업용 블루와 그레이
- **Strictly 0px border-radius across all containers and buttons.**
- **Industrial gray palette (#161616 / #262626) with IBM Blue #0F62FE.**
- **Robust high-contrast state outlines.**

### 1.2 Role in AI Agent Codebases
산업용 메인프레임 및 클라우드 인프라 관리를 위한 극도의 규격화된 UI 구축
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **IBM Carbon Industrial** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Never use rounded squircles or soft blurred shadows.**
- ❌ **No playful informal copy.**
- ❌ **Specific Anti-AI Directive:** Strictly zero border-radius everywhere. Industrial telemetry grid.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#161616` | Canvas / Base background layer |
| `--surface-card` | `#262626` | Elevation 1 container surface |
| `--border-hairline` | `#393939` | 1px boundary line |
| `--accent-primary` | `#0F62FE` | Primary interactive & highlight focus |
| `--text-primary` | `#F4F4F4` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'IBM Plex Sans', 'IBM Plex Sans KR', 'Do Hyeon', sans-serif`
- **Body & UI Font Stack:** `'IBM Plex Sans', 'IBM Plex Sans KR', sans-serif`
- **Monospace & Metadata Stack:** `'IBM Plex Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `IBM Plex Sans KR (IBM 공식 서체) / Do Hyeon (도현체)`
- **Typographic Fallback Rationale:** IBM 디자인 시스템 Carbon의 엄격한 하드웨어 엔지니어링 미학을 IBM 공식 한글 서체인 IBM Plex Sans KR로 완전 일치
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `0px`
- **Border Treatment:** `1px solid #393939`
- **Elevation & Shadow:** `none`

### 4.2 Structural Features & Micro-Interactions
### GRID 2X: Industrial Proportion
Rigorous 8px spatial intervals governing all component boundaries.
*(Metadata: `RATIO: 1:1`)*

### STATUS 02: Fail-Safe Redundancy
Immediate visual alerting through high-contrast status tokens.
*(Metadata: `CRITICAL`)*

### ACCESS 03: Keyboard Precision Focus
Uncompromising 2px solid contrast ring on every focused state.
*(Metadata: `FOCUS: 2PX`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #0F62FE, text #FFFFFF, 0px radius, IBM Plex font`
- **Secondary / Ghost Button:**
  - Specification: `Background #393939, text #FFFFFF, 0px radius`
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
  --theme-id: "carbon";
  --theme-name: "IBM Carbon Industrial";
  --bg-base: #161616;
  --surface-card: #262626;
  --border-hairline: #393939;
  --accent-primary: #0F62FE;
  --text-primary: #F4F4F4;
  --font-heading: 'IBM Plex Sans', 'IBM Plex Sans KR', 'Do Hyeon', sans-serif;
  --font-body: 'IBM Plex Sans', 'IBM Plex Sans KR', sans-serif;
  --font-mono: 'IBM Plex Mono', 'D2Coding', monospace;
  --theme-radius: 0px;
}

body[data-theme="carbon"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="carbon"] h1,
body[data-theme="carbon"] h2,
body[data-theme="carbon"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="carbon"] .card,
body[data-theme="carbon"] .panel {
  background: var(--surface-card);
  border: 1px solid #393939;
  border-radius: var(--theme-radius);
  box-shadow: none;
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: IBM Carbon Industrial
Role: Principal Frontend Systems Architect specialized in the IBM Carbon Industrial design language.
Origin Repository: carbon-design-system/carbon (https://carbondesignsystem.com)

## Visual Directives:
1. Palette: Canvas must be #161616, Surfaces #262626, Accents #0F62FE.
2. Geometry: Border radius must strictly be 0px. Border treatment: 1px solid #393939.
3. Typography: Heading stack is 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 엄격한 0px 모서리, 2px 포커스 림, 산업용 블루와 그레이. Form follows function with mathematical discipline.
5. Strict Negative Rules: Never use rounded squircles or soft blurred shadows. No playful informal copy. Strictly zero border-radius everywhere. Industrial telemetry grid.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
