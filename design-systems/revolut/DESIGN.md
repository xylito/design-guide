# DESIGN.md — Revolut Neo-Bank Dark Design System Specification
> **Preset #15 of 62** | **Category:** 💼 2. Modern SaaS & FinTech (모던 스탠다드)  
> **Source Repository:** [revolut/mobile-design](https://github.com/revolut/mobile-design)  
> **Official Docs / Reference:** [https://revolut.com](https://revolut.com)  
> **Ecosystem Popularity:** ⭐ `7.4k` | **Tags:** `Revolut`, `Neo-Bank`, `Metallic Dark`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      revolut                                     │
│  Design System: Revolut Neo-Bank Dark                       │
│  Archetype:     Next-Gen Fintech                            │
│  Nav Brand:     REVOLUT.PRO                                 │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
블랙 스틸 질감의 카드 프리뷰, 실시간 자산 차트, 네온 악센트
- **Luxury dark palette #0D0F14 with brushed steel surfaces.**
- **Electric cyan #00E5FF and green highlights for currency velocity.**
- **16px rounded containers projecting modern financial sophistication.**

### 1.2 Role in AI Agent Codebases
차세대 글로벌 핀테크 및 자산 관리 대시보드의 미래지향적 메탈릭 럭셔리 구현
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Revolut Neo-Bank Dark** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No cartoonish or playful childish graphics.**
- ❌ **No antiquated banking beige.**
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
| `--bg-base` | `#0D0F14` | Canvas / Base background layer |
| `--surface-card` | `#141822` | Elevation 1 container surface |
| `--border-hairline` | `#212838` | 1px boundary line |
| `--accent-primary` | `#00E5FF` | Primary interactive & highlight focus |
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
- **Border Treatment:** `1px solid #212838`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### METALLIC: Brushed Steel Cards
Subtle specular gradients evoking physical platinum cards.
*(Metadata: `FINISH: METAL`)*

### ANALYTICS: Electric Cyan Sparks
Real-time exchange tickers with sharp contrast delta badges.
*(Metadata: `FX: LIVE`)*

### VAULT: Layered Wealth Modules
Crisp 16px rounded surfaces with deep navy backdrop.
*(Metadata: `SECURITY: 2FA`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #00E5FF, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #141822, border 1px solid #212838, text #FFFFFF`
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
  --theme-id: "revolut";
  --theme-name: "Revolut Neo-Bank Dark";
  --bg-base: #0D0F14;
  --surface-card: #141822;
  --border-hairline: #212838;
  --accent-primary: #00E5FF;
  --text-primary: #FFFFFF;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="revolut"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="revolut"] h1,
body[data-theme="revolut"] h2,
body[data-theme="revolut"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="revolut"] .card,
body[data-theme="revolut"] .panel {
  background: var(--surface-card);
  border: 1px solid #212838;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Revolut Neo-Bank Dark
Role: Principal Frontend Systems Architect specialized in the Revolut Neo-Bank Dark design language.
Origin Repository: revolut/mobile-design (https://revolut.com)

## Visual Directives:
1. Palette: Canvas must be #0D0F14, Surfaces #141822, Accents #00E5FF.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #212838.
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 블랙 스틸 질감의 카드 프리뷰, 실시간 자산 차트, 네온 악센트. Form follows function with mathematical discipline.
5. Strict Negative Rules: No cartoonish or playful childish graphics. No antiquated banking beige. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
