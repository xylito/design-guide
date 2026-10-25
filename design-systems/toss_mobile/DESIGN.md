# DESIGN.md — Toss App Style (Korean FinTech) Design System Specification
> **Preset #13 of 62** | **Category:** 💼 2. Modern SaaS & FinTech (모던 스탠다드)  
> **Source Repository:** [toss/slash-mobile](https://github.com/toss/slash-mobile)  
> **Official Docs / Reference:** [https://toss.im](https://toss.im)  
> **Ecosystem Popularity:** ⭐ `8.4k` | **Tags:** `Toss Mobile`, `24px Squircle`, `Fintech`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      toss_mobile                                 │
│  Design System: Toss App Style (Korean FinTech)             │
│  Archetype:     Tactile Squircle Mobile                     │
│  Nav Brand:     toss·app                                    │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
넓은 여백, 강렬한 볼드 타이포그래피, 무시선 깔끔한 카드 위계와 20~24px 스쿼클
- **Ultra-clean 24px squircle cards without sharp lines.**
- **Bold primary typography (#191F28) against gentle off-white (#F2F4F6).**
- **Springy touch micro-interactions.**

### 1.2 Role in AI Agent Codebases
직관적이고 사용자 친화적인 한국형 핀테크 모바일 UI 조형감 주입
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Toss App Style (Korean FinTech)** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No rigid gray dividers.**
- ❌ **No small difficult-to-tap targets.**
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
| `--bg-base` | `#F2F4F6` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `rgba(0,0,0,0.02)` | 1px boundary line |
| `--accent-primary` | `#3182F6` | Primary interactive & highlight focus |
| `--text-primary` | `#191F28` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Plus Jakarta Sans', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Pretendard Variable (토스 앱 24px 스쿼클 볼드)`
- **Typographic Fallback Rationale:** 모바일 금융 슈퍼앱의 직관적인 가독성을 위한 프리텐다드 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid rgba(0,0,0,0.02)`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### SQUIRCLE: 24px Continuous Corner
Superellipse math removing optical corner stiffness on mobile OLEDs.
*(Metadata: `24PX SQUIRCLE`)*

### ZERO LINE: Borderless Surface Contrast
Distinction through subtle color planes rather than distracting lines.
*(Metadata: `BORDER: 0PX`)*

### SPRING: Bouncy Tactile Touch
Elastic feedback simulating physical rubberized cards.
*(Metadata: `SPRING: ON`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #3182F6, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, border 1px solid rgba(0,0,0,0.02), text #FFFFFF`
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
  --theme-id: "toss_mobile";
  --theme-name: "Toss App Style (Korean FinTech)";
  --bg-base: #F2F4F6;
  --surface-card: #FFFFFF;
  --border-hairline: rgba(0,0,0,0.02);
  --accent-primary: #3182F6;
  --text-primary: #191F28;
  --font-heading: 'Plus Jakarta Sans', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="toss_mobile"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="toss_mobile"] h1,
body[data-theme="toss_mobile"] h2,
body[data-theme="toss_mobile"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="toss_mobile"] .card,
body[data-theme="toss_mobile"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(0,0,0,0.02);
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Toss App Style (Korean FinTech)
Role: Principal Frontend Systems Architect specialized in the Toss App Style (Korean FinTech) design language.
Origin Repository: toss/slash-mobile (https://toss.im)

## Visual Directives:
1. Palette: Canvas must be #F2F4F6, Surfaces #FFFFFF, Accents #3182F6.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid rgba(0,0,0,0.02).
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 넓은 여백, 강렬한 볼드 타이포그래피, 무시선 깔끔한 카드 위계와 20~24px 스쿼클. Form follows function with mathematical discipline.
5. Strict Negative Rules: No rigid gray dividers. No small difficult-to-tap targets. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
