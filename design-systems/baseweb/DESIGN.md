# DESIGN.md — Uber Base Web Enterprise Design System Specification
> **Preset #19 of 62** | **Category:** 💼 2. Modern SaaS & FinTech (모던 스탠다드)  
> **Source Repository:** [uber/baseweb](https://github.com/uber/baseweb)  
> **Official Docs / Reference:** [https://baseweb.design](https://baseweb.design)  
> **Ecosystem Popularity:** ⭐ `9.1k` | **Tags:** `Base Web`, `Accessibility`, `Clean Enterprise`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      baseweb                                     │
│  Design System: Uber Base Web Enterprise                    │
│  Archetype:     Enterprise Mobility                         │
│  Nav Brand:     BASE.WEB                                    │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
군더더기 없는 화이트/그레이 배경과 선명한 블루 액센트의 실용적 UI
- **Clean enterprise white #FFFFFF canvas and #F6F6F6 surfaces.**
- **Strict 4px border-radius and crisp #E2E2E2 dividers.**
- **Uber Base Blue #276EF1 for deterministic primary intent.**

### 1.2 Role in AI Agent Codebases
모빌리티 및 물류 대시보드에서 장애 없는 철저한 접근성 준수 보장
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Uber Base Web Enterprise** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No speculative artistic flourishes in critical workflows.**
- ❌ **No non-standard ambiguous icons.**
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
| `--surface-card` | `#F6F6F6` | Elevation 1 container surface |
| `--border-hairline` | `#E2E2E2` | 1px boundary line |
| `--accent-primary` | `#276EF1` | Primary interactive & highlight focus |
| `--text-primary` | `#000000` | Headings & high-contrast body copy |
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
- **Border Treatment:** `1px solid #E2E2E2`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### A11Y: WCAG AAA Compliance
Full accessibility baked into every native component primitive.
*(Metadata: `A11Y: AAA`)*

### TOKEN: Enterprise Token Matrix
Deterministic spacing, elevation, and typographic scale.
*(Metadata: `4PX GRID`)*

### ROBUST: High-Throughput Usability
Crisp black and Base Blue #276EF1 action hierarchy.
*(Metadata: `UPTIME: 99.9%`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #276EF1, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #F6F6F6, border 1px solid #E2E2E2, text #FFFFFF`
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
  --theme-id: "baseweb";
  --theme-name: "Uber Base Web Enterprise";
  --bg-base: #FFFFFF;
  --surface-card: #F6F6F6;
  --border-hairline: #E2E2E2;
  --accent-primary: #276EF1;
  --text-primary: #000000;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="baseweb"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="baseweb"] h1,
body[data-theme="baseweb"] h2,
body[data-theme="baseweb"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="baseweb"] .card,
body[data-theme="baseweb"] .panel {
  background: var(--surface-card);
  border: 1px solid #E2E2E2;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Uber Base Web Enterprise
Role: Principal Frontend Systems Architect specialized in the Uber Base Web Enterprise design language.
Origin Repository: uber/baseweb (https://baseweb.design)

## Visual Directives:
1. Palette: Canvas must be #FFFFFF, Surfaces #F6F6F6, Accents #276EF1.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #E2E2E2.
3. Typography: Heading stack is -apple-system, BlinkMacSystemFont, sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 군더더기 없는 화이트/그레이 배경과 선명한 블루 액센트의 실용적 UI. Form follows function with mathematical discipline.
5. Strict Negative Rules: No speculative artistic flourishes in critical workflows. No non-standard ambiguous icons. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
