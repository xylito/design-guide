# DESIGN.md — HeroUI Glass (NextUI) Design System Specification
> **Preset #43 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [heroui-inc/heroui](https://github.com/heroui-inc/heroui)  
> **Official Docs / Reference:** [https://heroui.com](https://heroui.com)  
> **Ecosystem Popularity:** ⭐ `22.6k` | **Tags:** `Glassmorphism`, `Purple Glow`, `Micro-Motion`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      heroui                                      │
│  Design System: HeroUI Glass (NextUI)                       │
│  Archetype:     Velvet Dark & Neon Violet                   │
│  Nav Brand:     HERO.UI//NEXT                               │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
칠흑 같은 벨벳 블랙 위 영롱한 네온 바이올렛 광원 효과
- **Deep black #000000 canvas with neon violet #7828C8 accents.**
- **Translucent dark glass cards with 16px radius.**
- **Smooth glowing hover states.**

### 1.2 Role in AI Agent Codebases
Web3 및 크리에이티브 SaaS 프로젝트에서 매력적인 미래지향적 심미성 부여
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **HeroUI Glass (NextUI)** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No dull washed-out grays.**
- ❌ **No thick clumsy borders.**
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
| `--bg-base` | `#000000` | Canvas / Base background layer |
| `--surface-card` | `#111111` | Elevation 1 container surface |
| `--border-hairline` | `rgba(255, 255, 255, 0.12)` | 1px boundary line |
| `--accent-primary` | `#7828C8` | Primary interactive & highlight focus |
| `--text-primary` | `#FFFFFF` | Headings & high-contrast body copy |
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
- **Border Treatment:** `1px solid rgba(255, 255, 255, 0.12)`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### VELVET // 01: Pitch Black Contrast
Pure black backdrop making vibrant violet glows leap off the screen.
*(Metadata: `GLOW: #7828C8`)*

### GLASS // 02: Translucent Card Shading
Backdrop blur layered with delicate white border reflections.
*(Metadata: `BLUR: 20PX`)*

### RIPPLE // 03: Chromatic Feedback
Fluid radial burst ripple animations on every touch event.
*(Metadata: `RIPPLE: ACTIVE`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #7828C8, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #111111, border 1px solid rgba(255, 255, 255, 0.12), text #FFFFFF`
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
  --theme-id: "heroui";
  --theme-name: "HeroUI Glass (NextUI)";
  --bg-base: #000000;
  --surface-card: #111111;
  --border-hairline: rgba(255, 255, 255, 0.12);
  --accent-primary: #7828C8;
  --text-primary: #FFFFFF;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="heroui"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="heroui"] h1,
body[data-theme="heroui"] h2,
body[data-theme="heroui"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="heroui"] .card,
body[data-theme="heroui"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: HeroUI Glass (NextUI)
Role: Principal Frontend Systems Architect specialized in the HeroUI Glass (NextUI) design language.
Origin Repository: heroui-inc/heroui (https://heroui.com)

## Visual Directives:
1. Palette: Canvas must be #000000, Surfaces #111111, Accents #7828C8.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid rgba(255, 255, 255, 0.12).
3. Typography: Heading stack is 'Outfit', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 칠흑 같은 벨벳 블랙 위 영롱한 네온 바이올렛 광원 효과. Form follows function with mathematical discipline.
5. Strict Negative Rules: No dull washed-out grays. No thick clumsy borders. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
