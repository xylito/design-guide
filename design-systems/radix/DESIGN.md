# DESIGN.md — Radix UI Themes Design System Specification
> **Preset #18 of 62** | **Category:** 💼 2. Modern SaaS & FinTech (모던 스탠다드)  
> **Source Repository:** [radix-ui/primitives](https://github.com/radix-ui/primitives)  
> **Official Docs / Reference:** [https://www.radix-ui.com/themes/docs](https://www.radix-ui.com/themes/docs)  
> **Ecosystem Popularity:** ⭐ `16.4k` | **Tags:** `Radix UI`, `12-Step Scale`, `Indigo`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      radix                                       │
│  Design System: Radix UI Themes                             │
│  Archetype:     Neutral Modern Standard                     │
│  Nav Brand:     RADIX.THEMES                                │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
완벽하게 분할된 중립색 계열과 부드러운 인디고 블루 악센트
- **Sophisticated slate canvas #0F1216 with #16191E containers.**
- **12-step color scale with Radix Indigo #3E63DD accent.**
- **8px border-radius with crisp 1px borders.**

### 1.2 Role in AI Agent Codebases
고급 SaaS 웹앱의 12스텝 색조 토큰 체계와 완벽한 키보드 접근성 유지
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Radix UI Themes** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No inaccessible custom elements lacking ARIA attributes.**
- ❌ **No loud garish neon.**
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
| `--bg-base` | `#0F1216` | Canvas / Base background layer |
| `--surface-card` | `#16191E` | Elevation 1 container surface |
| `--border-hairline` | `#252B34` | 1px boundary line |
| `--accent-primary` | `#3E63DD` | Primary interactive & highlight focus |
| `--text-primary` | `#ECEEF0` | Headings & high-contrast body copy |
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
- **Border Treatment:** `1px solid #252B34`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### SCALE 12: 12-Step Color Scales
Engineered contrast pairs for app background, hover, border, and solid text.
*(Metadata: `STEPS: 12`)*

### KEYBOARD: Accessible Primitives
Zero-configuration roving tabindex and focus management.
*(Metadata: `W3C: PASS`)*

### INDIGO: Radix Indigo #3E63DD
Refined modern blue tone conveying quiet engineering competence.
*(Metadata: `#3E63DD`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #3E63DD, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #16191E, border 1px solid #252B34, text #FFFFFF`
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
  --theme-id: "radix";
  --theme-name: "Radix UI Themes";
  --bg-base: #0F1216;
  --surface-card: #16191E;
  --border-hairline: #252B34;
  --accent-primary: #3E63DD;
  --text-primary: #ECEEF0;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="radix"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="radix"] h1,
body[data-theme="radix"] h2,
body[data-theme="radix"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="radix"] .card,
body[data-theme="radix"] .panel {
  background: var(--surface-card);
  border: 1px solid #252B34;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Radix UI Themes
Role: Principal Frontend Systems Architect specialized in the Radix UI Themes design language.
Origin Repository: radix-ui/primitives (https://www.radix-ui.com/themes/docs)

## Visual Directives:
1. Palette: Canvas must be #0F1216, Surfaces #16191E, Accents #3E63DD.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #252B34.
3. Typography: Heading stack is 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 완벽하게 분할된 중립색 계열과 부드러운 인디고 블루 악센트. Form follows function with mathematical discipline.
5. Strict Negative Rules: No inaccessible custom elements lacking ARIA attributes. No loud garish neon. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
