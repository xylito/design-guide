# DESIGN.md — Airbnb Soft Hospitality Design System Specification
> **Preset #54 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [airbnb/lottie-web](https://github.com/airbnb/lottie-web)  
> **Official Docs / Reference:** [https://airbnb.design](https://airbnb.design)  
> **Ecosystem Popularity:** ⭐ `30.5k` | **Tags:** `Airbnb`, `Coral Red`, `Hospitality`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      airbnb                                      │
│  Design System: Airbnb Soft Hospitality                     │
│  Archetype:     Soft Travel Hospitality                     │
│  Nav Brand:     airbnb·stays                                │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
따뜻한 코랄 레드(#FF385C) 포인트와 부드러운 16px 숙소 카드
- **Clean white canvas with Rausch coral red #FF385C accents.**
- **Friendly 16px border-radius and welcoming generous imagery.**
- **Human-first search pills with smooth elevation.**

### 1.2 Role in AI Agent Codebases
여행, 숙박, 컨슈머 서비스에서 편안하고 친근한 휴머니스트 감성 주입
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Airbnb Soft Hospitality** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No aggressive dark hackers modes in hospitality context.**
- ❌ **No harsh black drop shadows.**
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
| `--bg-base` | `#FFFFFF` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#EBEBEB` | 1px boundary line |
| `--accent-primary` | `#FF385C` | Primary interactive & highlight focus |
| `--text-primary` | `#222222` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Plus Jakarta Sans', 'Gowun Dodum', 'Pretendard Variable', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Gowun Dodum', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', monospace`
- **Paired Korean Typography:** `Gowun Dodum (고운돋움 소프트 휴머니스트) / Pretendard`
- **Typographic Fallback Rationale:** 에어비앤비의 따뜻한 환대(Hospitality)와 편안한 여행 감성을 위해 고운돋움 폰트 페어링
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #EBEBEB`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### RAUSCH: Warm Coral Red Point
Signature brand warmth inspiring exploration and hospitality.
*(Metadata: `#FF385C`)*

### PREVIEW: Soft Rounded Tiles
16px rounded image carousels with subtle price pill badges.
*(Metadata: `16PX ROUND`)*

### SEARCH: Floating Pill Search Bar
Expansive pill-shaped inputs with gentle multi-tier shadows.
*(Metadata: `SHADOW: L2`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #FF385C, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, border 1px solid #EBEBEB, text #FFFFFF`
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
  --theme-id: "airbnb";
  --theme-name: "Airbnb Soft Hospitality";
  --bg-base: #FFFFFF;
  --surface-card: #FFFFFF;
  --border-hairline: #EBEBEB;
  --accent-primary: #FF385C;
  --text-primary: #222222;
  --font-heading: 'Plus Jakarta Sans', 'Gowun Dodum', 'Pretendard Variable', sans-serif;
  --font-body: 'Inter', 'Gowun Dodum', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --theme-radius: 8px;
}

body[data-theme="airbnb"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="airbnb"] h1,
body[data-theme="airbnb"] h2,
body[data-theme="airbnb"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="airbnb"] .card,
body[data-theme="airbnb"] .panel {
  background: var(--surface-card);
  border: 1px solid #EBEBEB;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Airbnb Soft Hospitality
Role: Principal Frontend Systems Architect specialized in the Airbnb Soft Hospitality design language.
Origin Repository: airbnb/lottie-web (https://airbnb.design)

## Visual Directives:
1. Palette: Canvas must be #FFFFFF, Surfaces #FFFFFF, Accents #FF385C.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #EBEBEB.
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 따뜻한 코랄 레드(#FF385C) 포인트와 부드러운 16px 숙소 카드. Form follows function with mathematical discipline.
5. Strict Negative Rules: No aggressive dark hackers modes in hospitality context. No harsh black drop shadows. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
