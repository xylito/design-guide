# DESIGN.md — SuperApp Bento Grid Design System Specification
> **Preset #16 of 62** | **Category:** 💼 2. Modern SaaS & FinTech (모던 스탠다드)  
> **Source Repository:** [ant-design/ant-design-mobile](https://github.com/ant-design/ant-design-mobile)  
> **Official Docs / Reference:** [https://mobile.ant.design](https://mobile.ant.design)  
> **Ecosystem Popularity:** ⭐ `11.5k` | **Tags:** `Bento Grid`, `SuperApp`, `Modular`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      bento                                       │
│  Design System: SuperApp Bento Grid                         │
│  Archetype:     Dense Modular Bento                         │
│  Nav Brand:     BENTO//SUPERAPP                             │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
모듈형 박스들을 여백 없이 맞물려 정보 밀도를 극대화한 아시안 슈퍼앱
- **Dense bento grid architecture packing multiple disparate utilities.**
- **Smooth 14px rounded tiles with subtle borders.**
- **Vibrant high-contrast utility icons.**

### 1.2 Role in AI Agent Codebases
슈퍼앱 환경에서 복합 서비스를 시각적 리듬감과 함께 고밀도로 정리
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **SuperApp Bento Grid** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No sparse single-function screens with wasted white space.**
- ❌ **No unstructured messy collage.**
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
| `--bg-base` | `#F3F4F6` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#E5E7EB` | 1px boundary line |
| `--accent-primary` | `#1677FF` | Primary interactive & highlight focus |
| `--text-primary` | `#111827` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Space Grotesk', 'GmarketSansBold', 'Do Hyeon', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `GmarketSansBold (지마켓산스 모던 포스터 기하학) / Do Hyeon`
- **Typographic Fallback Rationale:** 다양한 크기의 벤토 카드 레이아웃에서 제목의 주목도와 기하학적 안정감을 극대화하기 위해 GmarketSansBold 지정
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #E5E7EB`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### BENTO: Interlocking Asymmetric Tiles
1x1, 2x1, and 2x2 grid tiles harmoniously packed.
*(Metadata: `DENSITY: MAX`)*

### PAY: Unified Service Shortcuts
Ride, food, banking, and tickets accessible in a single screen.
*(Metadata: `SERVICES: 16`)*

### CLEAN: Subtle Hairline Separation
Soft 1px borders avoiding visual cacophony.
*(Metadata: `BORDER: 1PX`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #1677FF, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, border 1px solid #E5E7EB, text #FFFFFF`
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
  --theme-id: "bento";
  --theme-name: "SuperApp Bento Grid";
  --bg-base: #F3F4F6;
  --surface-card: #FFFFFF;
  --border-hairline: #E5E7EB;
  --accent-primary: #1677FF;
  --text-primary: #111827;
  --font-heading: 'Space Grotesk', 'GmarketSansBold', 'Do Hyeon', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="bento"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="bento"] h1,
body[data-theme="bento"] h2,
body[data-theme="bento"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="bento"] .card,
body[data-theme="bento"] .panel {
  background: var(--surface-card);
  border: 1px solid #E5E7EB;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: SuperApp Bento Grid
Role: Principal Frontend Systems Architect specialized in the SuperApp Bento Grid design language.
Origin Repository: ant-design/ant-design-mobile (https://mobile.ant.design)

## Visual Directives:
1. Palette: Canvas must be #F3F4F6, Surfaces #FFFFFF, Accents #1677FF.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #E5E7EB.
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 모듈형 박스들을 여백 없이 맞물려 정보 밀도를 극대화한 아시안 슈퍼앱. Form follows function with mathematical discipline.
5. Strict Negative Rules: No sparse single-function screens with wasted white space. No unstructured messy collage. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
