# DESIGN.md — Material 3 Expressive Design System Specification
> **Preset #38 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [mui/material-ui](https://github.com/mui/material-ui)  
> **Official Docs / Reference:** [https://mui.com/material-ui/](https://mui.com/material-ui/)  
> **Ecosystem Popularity:** ⭐ `95.2k` | **Tags:** `M3`, `Pill Shape`, `Deep Purple`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      mui                                         │
│  Design System: Material 3 Expressive                       │
│  Archetype:     Google Material You                         │
│  Nav Brand:     MUI//MATERIAL.3                             │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
딥 퍼플 톤, 부드러운 알약 쉐이프, 우아한 엘리베이션
- **Soft lilac canvas #FEF7FF and pure white cards.**
- **Deep purple #6750A4 primary with pill-shaped action buttons.**
- **Soft multi-layered diffuse elevation shadows.**

### 1.2 Role in AI Agent Codebases
에이전트에게 직관적인 접근성과 친숙한 모바일 친화적 머티리얼 인터페이스 강제
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Material 3 Expressive** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No harsh 0px brutalist sharp edges.**
- ❌ **No cold industrial monochrome.**
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
| `--bg-base` | `#FEF7FF` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#E7E0EC` | 1px boundary line |
| `--accent-primary` | `#6750A4` | Primary interactive & highlight focus |
| `--text-primary` | `#1D1B20` | Headings & high-contrast body copy |
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
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #E7E0EC`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### TONAL // 01: Dynamic Color Harmonies
Palette algorithms generating 5 complementary tonal ranges.
*(Metadata: `PALETTE: M3`)*

### SHAPE // 02: Expressive Rounding Scale
Comfortable 16px card corners and 9999px pill action buttons.
*(Metadata: `RADIUS: 16PX`)*

### ELEVATION 03: Diffusion Shadow Layers
Tonal shadow tints creating organic tactile physical height.
*(Metadata: `LEVEL: 2`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #6750A4, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, border 1px solid #E7E0EC, text #FFFFFF`
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
  --theme-id: "mui";
  --theme-name: "Material 3 Expressive";
  --bg-base: #FEF7FF;
  --surface-card: #FFFFFF;
  --border-hairline: #E7E0EC;
  --accent-primary: #6750A4;
  --text-primary: #1D1B20;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="mui"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="mui"] h1,
body[data-theme="mui"] h2,
body[data-theme="mui"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="mui"] .card,
body[data-theme="mui"] .panel {
  background: var(--surface-card);
  border: 1px solid #E7E0EC;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Material 3 Expressive
Role: Principal Frontend Systems Architect specialized in the Material 3 Expressive design language.
Origin Repository: mui/material-ui (https://mui.com/material-ui/)

## Visual Directives:
1. Palette: Canvas must be #FEF7FF, Surfaces #FFFFFF, Accents #6750A4.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #E7E0EC.
3. Typography: Heading stack is 'Roboto', 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 딥 퍼플 톤, 부드러운 알약 쉐이프, 우아한 엘리베이션. Form follows function with mathematical discipline.
5. Strict Negative Rules: No harsh 0px brutalist sharp edges. No cold industrial monochrome. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
