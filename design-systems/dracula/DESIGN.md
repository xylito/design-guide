# DESIGN.md — Dracula Dark Code App Design System Specification
> **Preset #28 of 62** | **Category:** ⚡ 3. Dark & Developer (개발자·터미널)  
> **Source Repository:** [dracula/dracula-theme](https://github.com/dracula/dracula-theme)  
> **Official Docs / Reference:** [https://draculatheme.com](https://draculatheme.com)  
> **Ecosystem Popularity:** ⭐ `23.4k` | **Tags:** `Dracula`, `Neon Pink`, `Vampire Dark`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      dracula                                     │
│  Design System: Dracula Dark Code App                       │
│  Archetype:     Vampire Neon Official                       │
│  Nav Brand:     DRACULA.PRO                                 │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
딥 퍼플(#282A36) 배경 위 선명한 네온 핑크(#FF79C6)와 에메랄드
- **Vampire purple canvas #282A36 with selection slate #44475A.**
- **High-voltage neon pink #FF79C6 and emerald #50FA7B highlights.**
- **8px modern rounded card edges with JetBrains Mono code.**

### 1.2 Role in AI Agent Codebases
개발자 타깃 제품에서 시선을 압도하는 전설적인 컬트 신택스 하이라이트 감성 부여
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Dracula Dark Code App** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No dull grayscale or boring washed-out pastels.**
- ❌ **No plain generic blue buttons.**
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
| `--bg-base` | `#282A36` | Canvas / Base background layer |
| `--surface-card` | `#44475A` | Elevation 1 container surface |
| `--border-hairline` | `#6272A4` | 1px boundary line |
| `--accent-primary` | `#FF79C6` | Primary interactive & highlight focus |
| `--text-primary` | `#F8F8F2` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `D2Coding / JetBrains Mono (드라큘라 컬트 다크 모노)`
- **Typographic Fallback Rationale:** 전 세계 개발자들의 컬트 테마 드라큘라의 보라/핑크 형광 대비에 최적화된 D2Coding 서체
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #6272A4`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### VAMPIRE: Iconic Purple Canvas
Deep gothic navy-purple #282A36 providing cult dev aesthetic.
*(Metadata: `#282A36`)*

### NEON: High-Voltage Pink & Green
Neon Pink #FF79C6 and Emerald Green #50FA7B command states.
*(Metadata: `#FF79C6`)*

### CONTRAST: Syntax Sharp Hierarchy
Yellow #F1FA8C, Cyan #8BE9FD, and Orange #FFB86C accents.
*(Metadata: `DEV VIBE`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #FF79C6, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #44475A, border 1px solid #6272A4, text #FFFFFF`
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
  --theme-id: "dracula";
  --theme-name: "Dracula Dark Code App";
  --bg-base: #282A36;
  --surface-card: #44475A;
  --border-hairline: #6272A4;
  --accent-primary: #FF79C6;
  --text-primary: #F8F8F2;
  --font-heading: 'JetBrains Mono', 'D2Coding', monospace;
  --font-body: 'Inter', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="dracula"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="dracula"] h1,
body[data-theme="dracula"] h2,
body[data-theme="dracula"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="dracula"] .card,
body[data-theme="dracula"] .panel {
  background: var(--surface-card);
  border: 1px solid #6272A4;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Dracula Dark Code App
Role: Principal Frontend Systems Architect specialized in the Dracula Dark Code App design language.
Origin Repository: dracula/dracula-theme (https://draculatheme.com)

## Visual Directives:
1. Palette: Canvas must be #282A36, Surfaces #44475A, Accents #FF79C6.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #6272A4.
3. Typography: Heading stack is 'JetBrains Mono', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 딥 퍼플(#282A36) 배경 위 선명한 네온 핑크(#FF79C6)와 에메랄드. Form follows function with mathematical discipline.
5. Strict Negative Rules: No dull grayscale or boring washed-out pastels. No plain generic blue buttons. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
