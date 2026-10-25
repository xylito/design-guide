# DESIGN.md — Neumorphism Soft Touch Design System Specification
> **Preset #59 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [soft-ui/neumorphism-mobile](https://github.com/soft-ui/neumorphism-mobile)  
> **Official Docs / Reference:** [https://neumorphism.io](https://neumorphism.io)  
> **Ecosystem Popularity:** ⭐ `5.3k` | **Tags:** `Neumorphism`, `Soft Touch`, `Emboss`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      neumorphism_touch                           │
│  Design System: Neumorphism Soft Touch                      │
│  Archetype:     Embossed Plastic Tactile                    │
│  Nav Brand:     NEU·TOUCH                                   │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
배경과 동일한 색상의 부드러운 양방향 그림자를 주어 버튼과 패널이 화면에서 튀어나오거나 파여 보임
- **Monochromatic canvas #E0E5EC identical to card color.**
- **Extruded dual shadows (light and dark opposite pairs).**
- **20px soft organic radii.**

### 1.2 Role in AI Agent Codebases
보더 없이 빛과 그림자만으로 촉각적 물리 깊이감을 형성하는 소프트 UI 강제
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Neumorphism Soft Touch** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Strictly NO solid black 1px borders.**
- ❌ **No colorful flat cards breaking the uniform mold.**
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
| `--bg-base` | `#E0E5EC` | Canvas / Base background layer |
| `--surface-card` | `#E0E5EC` | Elevation 1 container surface |
| `--border-hairline` | `transparent` | 1px boundary line |
| `--accent-primary` | `#3B82F6` | Primary interactive & highlight focus |
| `--text-primary` | `#334155` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Plus Jakarta Sans', 'Pretendard Variable', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', monospace`
- **Paired Korean Typography:** `Pretendard Variable`
- **Typographic Fallback Rationale:** 모바일 터치 햅틱 소프트 UI 타이포그래피
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid transparent`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### EMBOSS: Dual Multi-Angle Shadows
9px 9px 18px #a3b1c6, -9px -9px 18px #ffffff extrusion.
*(Metadata: `DEPTH: 9PX`)*

### DEBOSS: Tactile Inset Push States
Instant inset shadow inversion upon finger touch (inset 4px 4px).
*(Metadata: `STATE: PRESS`)*

### ZERO LINE: Border-Free Organic Mold
No outline cuts. Pure light and shadow sculpting the canvas.
*(Metadata: `BORDER: NONE`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #3B82F6, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #E0E5EC, border 1px solid transparent, text #FFFFFF`
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
  --theme-id: "neumorphism_touch";
  --theme-name: "Neumorphism Soft Touch";
  --bg-base: #E0E5EC;
  --surface-card: #E0E5EC;
  --border-hairline: transparent;
  --accent-primary: #3B82F6;
  --text-primary: #334155;
  --font-heading: 'Plus Jakarta Sans', 'Pretendard Variable', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --theme-radius: 8px;
}

body[data-theme="neumorphism_touch"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="neumorphism_touch"] h1,
body[data-theme="neumorphism_touch"] h2,
body[data-theme="neumorphism_touch"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="neumorphism_touch"] .card,
body[data-theme="neumorphism_touch"] .panel {
  background: var(--surface-card);
  border: 1px solid transparent;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Neumorphism Soft Touch
Role: Principal Frontend Systems Architect specialized in the Neumorphism Soft Touch design language.
Origin Repository: soft-ui/neumorphism-mobile (https://neumorphism.io)

## Visual Directives:
1. Palette: Canvas must be #E0E5EC, Surfaces #E0E5EC, Accents #3B82F6.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid transparent.
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 배경과 동일한 색상의 부드러운 양방향 그림자를 주어 버튼과 패널이 화면에서 튀어나오거나 파여 보임. Form follows function with mathematical discipline.
5. Strict Negative Rules: Strictly NO solid black 1px borders. No colorful flat cards breaking the uniform mold. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
