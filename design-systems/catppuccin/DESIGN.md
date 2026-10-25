# DESIGN.md — Catppuccin Pastel Mobile Design System Specification
> **Preset #29 of 62** | **Category:** ⚡ 3. Dark & Developer (개발자·터미널)  
> **Source Repository:** [catppuccin/catppuccin](https://github.com/catppuccin/catppuccin)  
> **Official Docs / Reference:** [https://catppuccin.com](https://catppuccin.com)  
> **Ecosystem Popularity:** ⭐ `22.1k` | **Tags:** `Catppuccin`, `Pastel`, `Mocha`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      catppuccin                                  │
│  Design System: Catppuccin Pastel Mobile                    │
│  Archetype:     Soothing Pastel Mocha                       │
│  Nav Brand:     catppuccin·mocha                            │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
라벤더(#B4BEFE)와 피치, 마음이 편안해지는 따스한 파스텔 톤
- **Soothing warm mocha #1E1E2E canvas.**
- **Tender pastel colors: Lavender #B4BEFE and Peach #FAB387.**
- **12px gentle rounded cards.**

### 1.2 Role in AI Agent Codebases
현대 개발자 데스크테리어 및 에디터 씬에서 가장 사랑받는 포근한 파스텔 무드 연출
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Catppuccin Pastel Mobile** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No harsh 100% saturated neon glare.**
- ❌ **No cold clinical hospital grays.**
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
| `--bg-base` | `#1E1E2E` | Canvas / Base background layer |
| `--surface-card` | `#313244` | Elevation 1 container surface |
| `--border-hairline` | `#45475A` | 1px boundary line |
| `--accent-primary` | `#B4BEFE` | Primary interactive & highlight focus |
| `--text-primary` | `#CDD6F4` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `D2Coding / Pretendard Variable`
- **Typographic Fallback Rationale:** 캣푸친의 부드러운 파스텔 컬러에 조응하는 모던 모노스페이스
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #45475A`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### MOCHA: Warm Dark Chocolate Base
Earthy dark base #1E1E2E softer on eyes than pure black.
*(Metadata: `#1E1E2E`)*

### LAVENDER: Soft Pastel Flourishes
Lavender #B4BEFE, Peach #FAB387, and Mauve #CBA6F7.
*(Metadata: `PASTEL`)*

### COZY: 12px Comfort Radius
Warm rounded corners creating an inviting intimate workspace.
*(Metadata: `12PX ROUND`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #B4BEFE, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #313244, border 1px solid #45475A, text #FFFFFF`
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
  --theme-id: "catppuccin";
  --theme-name: "Catppuccin Pastel Mobile";
  --bg-base: #1E1E2E;
  --surface-card: #313244;
  --border-hairline: #45475A;
  --accent-primary: #B4BEFE;
  --text-primary: #CDD6F4;
  --font-heading: 'JetBrains Mono', 'D2Coding', monospace;
  --font-body: 'Inter', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="catppuccin"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="catppuccin"] h1,
body[data-theme="catppuccin"] h2,
body[data-theme="catppuccin"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="catppuccin"] .card,
body[data-theme="catppuccin"] .panel {
  background: var(--surface-card);
  border: 1px solid #45475A;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Catppuccin Pastel Mobile
Role: Principal Frontend Systems Architect specialized in the Catppuccin Pastel Mobile design language.
Origin Repository: catppuccin/catppuccin (https://catppuccin.com)

## Visual Directives:
1. Palette: Canvas must be #1E1E2E, Surfaces #313244, Accents #B4BEFE.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #45475A.
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 라벤더(#B4BEFE)와 피치, 마음이 편안해지는 따스한 파스텔 톤. Form follows function with mathematical discipline.
5. Strict Negative Rules: No harsh 100% saturated neon glare. No cold clinical hospital grays. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
