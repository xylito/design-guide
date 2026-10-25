# DESIGN.md — Glassmorphism Frosted App Design System Specification
> **Preset #58 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [glass-ui/frosted-mobile](https://github.com/glass-ui/frosted-mobile)  
> **Official Docs / Reference:** [https://glassmorphism.com](https://glassmorphism.com)  
> **Ecosystem Popularity:** ⭐ `7.1k` | **Tags:** `Glassmorphism`, `Blur 30px`, `Specular Rim`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      glassmorphism_app                           │
│  Design System: Glassmorphism Frosted App                   │
│  Archetype:     Translucent Light Ray Glass                 │
│  Nav Brand:     GLASS//UI.APP                               │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
반투명 유리판(backdrop-filter: blur) 위에 은은한 화이트 빛 반사 보더가 겹쳐지는 공간감
- **Translucent glass panels with backdrop-filter: blur(30px).**
- **18px rounded corners with subtle white specular rim borders.**
- **Deep ambient gradient backdrops.**

### 1.2 Role in AI Agent Codebases
깊이감 넘치는 프로스티드 글래스와 앰비언트 백드롭 연출
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Glassmorphism Frosted App** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No flat 100% opaque dull boxes.**
- ❌ **No muddy gray drop shadows.**
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
| `--bg-base` | `#0D0A1A` | Canvas / Base background layer |
| `--surface-card` | `rgba(255, 255, 255, 0.08)` | Elevation 1 container surface |
| `--border-hairline` | `rgba(255, 255, 255, 0.2)` | 1px boundary line |
| `--accent-primary` | `#A855F7` | Primary interactive & highlight focus |
| `--text-primary` | `#FFFFFF` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Outfit', 'Plus Jakarta Sans', 'Pretendard Variable', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', monospace`
- **Paired Korean Typography:** `Pretendard Variable / Outfit`
- **Typographic Fallback Rationale:** 반투명 프로스티드 글래스에 부유하는 모던 산스
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid rgba(255, 255, 255, 0.2)`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### FROSTED: Multi-Tier Backdrop Blur
High-refraction blur layering creating genuine optical depth.
*(Metadata: `BLUR: 30PX`)*

### RIM LIGHT: Specular 1px Light Reflections
Hairline white border gradients highlighting top glass edges.
*(Metadata: `LIGHT: 0.25`)*

### AMBIENT: Luminescent Underglow
Vibrant violet and cyan background orbs shining through glass.
*(Metadata: `LUMEN: HIGH`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #A855F7, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background rgba(255, 255, 255, 0.08), border 1px solid rgba(255, 255, 255, 0.2), text #FFFFFF`
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
  --theme-id: "glassmorphism_app";
  --theme-name: "Glassmorphism Frosted App";
  --bg-base: #0D0A1A;
  --surface-card: rgba(255, 255, 255, 0.08);
  --border-hairline: rgba(255, 255, 255, 0.2);
  --accent-primary: #A855F7;
  --text-primary: #FFFFFF;
  --font-heading: 'Outfit', 'Plus Jakarta Sans', 'Pretendard Variable', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --theme-radius: 8px;
}

body[data-theme="glassmorphism_app"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="glassmorphism_app"] h1,
body[data-theme="glassmorphism_app"] h2,
body[data-theme="glassmorphism_app"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="glassmorphism_app"] .card,
body[data-theme="glassmorphism_app"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Glassmorphism Frosted App
Role: Principal Frontend Systems Architect specialized in the Glassmorphism Frosted App design language.
Origin Repository: glass-ui/frosted-mobile (https://glassmorphism.com)

## Visual Directives:
1. Palette: Canvas must be #0D0A1A, Surfaces rgba(255, 255, 255, 0.08), Accents #A855F7.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid rgba(255, 255, 255, 0.2).
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 반투명 유리판(backdrop-filter: blur) 위에 은은한 화이트 빛 반사 보더가 겹쳐지는 공간감. Form follows function with mathematical discipline.
5. Strict Negative Rules: No flat 100% opaque dull boxes. No muddy gray drop shadows. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
