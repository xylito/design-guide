# DESIGN.md — Bento Grid Productivity Design System Specification
> **Preset #17 of 62** | **Category:** 💼 2. Modern SaaS & FinTech (모던 스탠다드)  
> **Source Repository:** [shadcn-ui/bento](https://github.com/shadcn-ui/bento)  
> **Official Docs / Reference:** [https://ui.shadcn.com/examples/dashboard](https://ui.shadcn.com/examples/dashboard)  
> **Ecosystem Popularity:** ⭐ `12.8k` | **Tags:** `Bento Grid`, `Asymmetric`, `Productivity`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      bento_prod                                  │
│  Design System: Bento Grid Productivity                     │
│  Archetype:     Modern Asymmetric Bento                     │
│  Nav Brand:     BENTO.PROD                                  │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
다양한 크기의 카드 박스들을 여백 없이 맞물려 시각적 리듬감과 정보 효율 극대화
- **Asymmetric bento grid layout packing high-density information.**
- **Deep dark slate #090A0F with #12141D tiles.**
- **16px rounded corners with subtle hairline borders.**

### 1.2 Role in AI Agent Codebases
복잡한 대시보드를 시각적으로 리드미컬하게 패킹하는 벤토 그리드 연출
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Bento Grid Productivity** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No monotone equal-sized grid blocks.**
- ❌ **No low-density sparse spacing.**
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
| `--bg-base` | `#090A0F` | Canvas / Base background layer |
| `--surface-card` | `#12141D` | Elevation 1 container surface |
| `--border-hairline` | `#1F2232` | 1px boundary line |
| `--accent-primary` | `#6366F1` | Primary interactive & highlight focus |
| `--text-primary` | `#F8FAFC` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Space Grotesk', 'GmarketSansBold', 'Do Hyeon', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `GmarketSansBold / Do Hyeon`
- **Typographic Fallback Rationale:** 생산성 벤토 그리드 타이포그래피 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #1F2232`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### GRID: Asymmetric Tile Packing
Harmoniously packed aspect ratios that lead the eye naturally.
*(Metadata: `RHYTHM: DENSE`)*

### FOCUS: High-Cadence Metrics
Live counter widgets paired with secondary telemetry badges.
*(Metadata: `MODULES: 8`)*

### SURFACE: 16px Micro-Bevel Tiles
Subtle 1px border contrast defining each functional module.
*(Metadata: `16PX RADIUS`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #6366F1, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #12141D, border 1px solid #1F2232, text #FFFFFF`
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
  --theme-id: "bento_prod";
  --theme-name: "Bento Grid Productivity";
  --bg-base: #090A0F;
  --surface-card: #12141D;
  --border-hairline: #1F2232;
  --accent-primary: #6366F1;
  --text-primary: #F8FAFC;
  --font-heading: 'Space Grotesk', 'GmarketSansBold', 'Do Hyeon', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="bento_prod"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="bento_prod"] h1,
body[data-theme="bento_prod"] h2,
body[data-theme="bento_prod"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="bento_prod"] .card,
body[data-theme="bento_prod"] .panel {
  background: var(--surface-card);
  border: 1px solid #1F2232;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Bento Grid Productivity
Role: Principal Frontend Systems Architect specialized in the Bento Grid Productivity design language.
Origin Repository: shadcn-ui/bento (https://ui.shadcn.com/examples/dashboard)

## Visual Directives:
1. Palette: Canvas must be #090A0F, Surfaces #12141D, Accents #6366F1.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #1F2232.
3. Typography: Heading stack is 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 다양한 크기의 카드 박스들을 여백 없이 맞물려 시각적 리듬감과 정보 효율 극대화. Form follows function with mathematical discipline.
5. Strict Negative Rules: No monotone equal-sized grid blocks. No low-density sparse spacing. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
