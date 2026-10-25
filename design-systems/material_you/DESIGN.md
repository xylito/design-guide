# DESIGN.md — Material You (Dynamic Color) Design System Specification
> **Preset #39 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [material-components/material-web](https://github.com/material-components/material-web)  
> **Official Docs / Reference:** [https://m3.material.io](https://m3.material.io)  
> **Ecosystem Popularity:** ⭐ `21.8k` | **Tags:** `Material You`, `Dynamic Color`, `Organic Pill`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      material_you                                │
│  Design System: Material You (Dynamic Color)                │
│  Archetype:     Google Android M3                           │
│  Nav Brand:     Android//M3                                 │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
배경화면 컬러 추출과 28px 유기적 캡슐, 톤온톤 다이내믹 팔레트
- **Organic pill shapes with generous 28px curvature.**
- **Warm terracotta/sand tonal palettes extracted algorithmically.**
- **Human-centric warmth and fluid layout ripples.**

### 1.2 Role in AI Agent Codebases
인간 중심적이고 친근한 모바일 다이내믹 컬러 및 캡슐형 터치 타깃 생성
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Material You (Dynamic Color)** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No cold emotionless wireframes.**
- ❌ **No razor-sharp 0px rectangular edges.**
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
| `--bg-base` | `#FDF8F5` | Canvas / Base background layer |
| `--surface-card` | `#F3EBE6` | Elevation 1 container surface |
| `--border-hairline` | `rgba(184, 93, 59, 0.15)` | 1px boundary line |
| `--accent-primary` | `#B85D3B` | Primary interactive & highlight focus |
| `--text-primary` | `#2A1A14` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Roboto', 'Plus Jakarta Sans', 'Pretendard Variable', sans-serif`
- **Body & UI Font Stack:** `'Roboto', 'Plus Jakarta Sans', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', monospace`
- **Paired Korean Typography:** `Pretendard Variable / Noto Sans KR`
- **Typographic Fallback Rationale:** 구글 머티리얼 3 유기적 캡슐 서체 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid rgba(184, 93, 59, 0.15)`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### DYNAMIC: Monet Algorithmic Color
Seeds 5 key tonal palettes directly from device imagery.
*(Metadata: `TONES: 5`)*

### CAPSULE: 28px Tonal Containers
Friendly organic rounded pill shapes for primary touch targets.
*(Metadata: `PILL: 28PX`)*

### EXPRESSIVE: Human Centric Depth
Gentle warm shadows that avoid cold industrial harshness.
*(Metadata: `ELEVATION: 2`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #B85D3B, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #F3EBE6, border 1px solid rgba(184, 93, 59, 0.15), text #FFFFFF`
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
  --theme-id: "material_you";
  --theme-name: "Material You (Dynamic Color)";
  --bg-base: #FDF8F5;
  --surface-card: #F3EBE6;
  --border-hairline: rgba(184, 93, 59, 0.15);
  --accent-primary: #B85D3B;
  --text-primary: #2A1A14;
  --font-heading: 'Roboto', 'Plus Jakarta Sans', 'Pretendard Variable', sans-serif;
  --font-body: 'Roboto', 'Plus Jakarta Sans', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --theme-radius: 8px;
}

body[data-theme="material_you"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="material_you"] h1,
body[data-theme="material_you"] h2,
body[data-theme="material_you"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="material_you"] .card,
body[data-theme="material_you"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(184, 93, 59, 0.15);
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Material You (Dynamic Color)
Role: Principal Frontend Systems Architect specialized in the Material You (Dynamic Color) design language.
Origin Repository: material-components/material-web (https://m3.material.io)

## Visual Directives:
1. Palette: Canvas must be #FDF8F5, Surfaces #F3EBE6, Accents #B85D3B.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid rgba(184, 93, 59, 0.15).
3. Typography: Heading stack is 'Roboto', 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 배경화면 컬러 추출과 28px 유기적 캡슐, 톤온톤 다이내믹 팔레트. Form follows function with mathematical discipline.
5. Strict Negative Rules: No cold emotionless wireframes. No razor-sharp 0px rectangular edges. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
