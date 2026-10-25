# DESIGN.md — Soft Neumorphism Design System Specification
> **Preset #45 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [themesberg/neumorphism-ui](https://github.com/themesberg/neumorphism-ui)  
> **Official Docs / Reference:** [https://themesberg.com/product/ui-kit/neumorphism-ui](https://themesberg.com/product/ui-kit/neumorphism-ui)  
> **Ecosystem Popularity:** ⭐ `4.8k` | **Tags:** `Dual Shadow`, `Plastic Extrusion`, `Soft Tactile`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      neumorphism                                 │
│  Design System: Soft Neumorphism                            │
│  Archetype:     Embossed Tactile Depth                      │
│  Nav Brand:     SOFT//NEUMORPH                              │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
배경과 동일한 표면에서 솟아오르는 양각/음각 플라스틱 질감
- **Canvas and surfaces MUST share the exact same color #E0E5EC.**
- **Zero borders. Depth is created strictly via dual shadows (9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff).**
- **Buttons push into the surface on click using inset shadows.**

### 1.2 Role in AI Agent Codebases
보더 없는 평면에서 음각/양각 물리 돌출 효과를 통한 감성적 촉각 UI 연출
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Soft Neumorphism** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Never use hard outline borders.**
- ❌ **Never make card background color different from canvas color.**
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
| `--text-primary` | `#2D3748` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Plus Jakarta Sans', 'Pretendard Variable', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', monospace`
- **Paired Korean Typography:** `Pretendard Variable`
- **Typographic Fallback Rationale:** 양각/음각 부드러운 엠보싱 텍스처에 조화로운 프리텐다드
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid transparent`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### EXTRUDE 01: Dual Light Shading
Top-left white reflection (#FFF) and bottom-right dark shadow (#A3B1C6).
*(Metadata: `9PX BLUR`)*

### TACTILE 02: Physical Inset Depression
Buttons visibly depress into the surface on active click states.
*(Metadata: `DEPRESSED`)*

### BORDERLESS: Zero Hard Outlines
Pure morphological depth without a single stroke divider.
*(Metadata: `STROKE: 0PX`)*


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
  --theme-id: "neumorphism";
  --theme-name: "Soft Neumorphism";
  --bg-base: #E0E5EC;
  --surface-card: #E0E5EC;
  --border-hairline: transparent;
  --accent-primary: #3B82F6;
  --text-primary: #2D3748;
  --font-heading: 'Plus Jakarta Sans', 'Pretendard Variable', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --theme-radius: 8px;
}

body[data-theme="neumorphism"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="neumorphism"] h1,
body[data-theme="neumorphism"] h2,
body[data-theme="neumorphism"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="neumorphism"] .card,
body[data-theme="neumorphism"] .panel {
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
# AI Frontend System Rule: Soft Neumorphism
Role: Principal Frontend Systems Architect specialized in the Soft Neumorphism design language.
Origin Repository: themesberg/neumorphism-ui (https://themesberg.com/product/ui-kit/neumorphism-ui)

## Visual Directives:
1. Palette: Canvas must be #E0E5EC, Surfaces #E0E5EC, Accents #3B82F6.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid transparent.
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 배경과 동일한 표면에서 솟아오르는 양각/음각 플라스틱 질감. Form follows function with mathematical discipline.
5. Strict Negative Rules: Never use hard outline borders. Never make card background color different from canvas color. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
