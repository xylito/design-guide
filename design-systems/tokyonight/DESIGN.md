# DESIGN.md — Tokyo Night Neon Mobile Design System Specification
> **Preset #31 of 62** | **Category:** ⚡ 3. Dark & Developer (개발자·터미널)  
> **Source Repository:** [folke/tokyonight.nvim](https://github.com/folke/tokyonight.nvim)  
> **Official Docs / Reference:** [https://github.com/folke/tokyonight.nvim](https://github.com/folke/tokyonight.nvim)  
> **Ecosystem Popularity:** ⭐ `6.8k` | **Tags:** `Tokyo Night`, `Electric Blue`, `Neon-Noir`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      tokyonight                                  │
│  Design System: Tokyo Night Neon Mobile                     │
│  Archetype:     Cyberpunk Neon-Noir                         │
│  Nav Brand:     TOKYO//NIGHT                                │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
도쿄 심야의 딥 인디고(#1A1B26)와 일렉트릭 블루/마젠타 네온
- **Midnight indigo canvas #1A1B26 reflecting rain-slicked cyber streets.**
- **Electric cyan-blue #7AA2F7 and neon magenta #BB9AF7 accents.**
- **8px refined curvature with sharp JetBrains Mono typography.**

### 1.2 Role in AI Agent Codebases
스크린샷 캡처 시 압도적인 시각적 몰입감을 제공하는 네온 노아(Neon-Noir) 미학
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Tokyo Night Neon Mobile** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No warm beige or paper textures.**
- ❌ **No washed-out low contrast pastel mush.**
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
| `--bg-base` | `#1A1B26` | Canvas / Base background layer |
| `--surface-card` | `#24283B` | Elevation 1 container surface |
| `--border-hairline` | `#414868` | 1px boundary line |
| `--accent-primary` | `#7AA2F7` | Primary interactive & highlight focus |
| `--text-primary` | `#C0CAF5` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `D2Coding / JetBrains Mono (도쿄나이트 네온 모노)`
- **Typographic Fallback Rationale:** 도쿄의 사이버펑크 네온 블루/마젠타에 최적화된 터미널 폰트 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #414868`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### MIDNIGHT: Deep Indigo Night Canvas
Atmospheric navy #1A1B26 evoking midnight skyscraper rain.
*(Metadata: `#1A1B26`)*

### ELECTRIC: Electric Blue & Magenta
Vibrant neon highlights (#7AA2F7 & #BB9AF7) piercing through dark.
*(Metadata: `NEON: ON`)*

### ELEGANT: 8px Cyber Edge Precision
Balanced modern radius keeping terminal dashboards sleek.
*(Metadata: `8PX EDGE`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #7AA2F7, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #24283B, border 1px solid #414868, text #FFFFFF`
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
  --theme-id: "tokyonight";
  --theme-name: "Tokyo Night Neon Mobile";
  --bg-base: #1A1B26;
  --surface-card: #24283B;
  --border-hairline: #414868;
  --accent-primary: #7AA2F7;
  --text-primary: #C0CAF5;
  --font-heading: 'JetBrains Mono', 'D2Coding', monospace;
  --font-body: 'Inter', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="tokyonight"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="tokyonight"] h1,
body[data-theme="tokyonight"] h2,
body[data-theme="tokyonight"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="tokyonight"] .card,
body[data-theme="tokyonight"] .panel {
  background: var(--surface-card);
  border: 1px solid #414868;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Tokyo Night Neon Mobile
Role: Principal Frontend Systems Architect specialized in the Tokyo Night Neon Mobile design language.
Origin Repository: folke/tokyonight.nvim (https://github.com/folke/tokyonight.nvim)

## Visual Directives:
1. Palette: Canvas must be #1A1B26, Surfaces #24283B, Accents #7AA2F7.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #414868.
3. Typography: Heading stack is 'JetBrains Mono', 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 도쿄 심야의 딥 인디고(#1A1B26)와 일렉트릭 블루/마젠타 네온. Form follows function with mathematical discipline.
5. Strict Negative Rules: No warm beige or paper textures. No washed-out low contrast pastel mush. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
