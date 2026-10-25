# DESIGN.md — Ant Design Enterprise Design System Specification
> **Preset #12 of 62** | **Category:** 💼 2. Modern SaaS & FinTech (모던 스탠다드)  
> **Source Repository:** [ant-design/ant-design](https://github.com/ant-design/ant-design)  
> **Official Docs / Reference:** [https://ant.design](https://ant.design)  
> **Ecosystem Popularity:** ⭐ `93.8k` | **Tags:** `Enterprise`, `B2B`, `Compact Grid`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      antd                                        │
│  Design System: Ant Design Enterprise                       │
│  Archetype:     Enterprise Standard                         │
│  Nav Brand:     ANT.ENTERPRISE                              │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
앤트 블루와 4px 각진 모서리의 엄격한 기업용 B2B 시스템
- **Enterprise gray background #F5F5F5 and crisp white cards #FFFFFF.**
- **Compact 4px border-radius and Ant Blue #1677FF primary.**
- **Strict data-density and formal component hierarchy.**

### 1.2 Role in AI Agent Codebases
방대한 복합 데이터 테이블 및 관리자 어드민 화면에서 일관된 정보 밀도 유지
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Ant Design Enterprise** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No playful emojis or oversized bubbly buttons.**
- ❌ **No casual unstructured margins.**
- ❌ **Specific Anti-AI Directive:** No oversized fluffy padding. Keep enterprise 4px data density.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#F5F5F5` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#F0F0F0` | 1px boundary line |
| `--accent-primary` | `#1677FF` | Primary interactive & highlight focus |
| `--text-primary` | `#1F1F1F` | Headings & high-contrast body copy |
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
- **Border Radius:** `4px`
- **Border Treatment:** `1px solid #D9D9D9`
- **Elevation & Shadow:** `0 2px 0 rgba(0, 0, 0, 0.02)`

### 4.2 Structural Features & Micro-Interactions
### GRID 01: Dense Table Pagination
Dynamic sorting, batch operations, and column reordering.
*(Metadata: `PAGE SIZE: 50`)*

### FORM 02: Cascading Validation
Strict schema verification with inline feedback messages.
*(Metadata: `STATUS: VALID`)*

### HIERARCHY 03: System Breadcrumbs
Multi-level enterprise navigational tree supporting 10+ tiers.
*(Metadata: `TIER 04`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #1677FF, text #FFFFFF, 4px radius, compact padding`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, border 1px solid #D9D9D9, text #000000E0`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `4px`.
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
  --theme-id: "antd";
  --theme-name: "Ant Design Enterprise";
  --bg-base: #F5F5F5;
  --surface-card: #FFFFFF;
  --border-hairline: #F0F0F0;
  --accent-primary: #1677FF;
  --text-primary: #1F1F1F;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 4px;
}

body[data-theme="antd"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="antd"] h1,
body[data-theme="antd"] h2,
body[data-theme="antd"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="antd"] .card,
body[data-theme="antd"] .panel {
  background: var(--surface-card);
  border: 1px solid #D9D9D9;
  border-radius: var(--theme-radius);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Ant Design Enterprise
Role: Principal Frontend Systems Architect specialized in the Ant Design Enterprise design language.
Origin Repository: ant-design/ant-design (https://ant.design)

## Visual Directives:
1. Palette: Canvas must be #F5F5F5, Surfaces #FFFFFF, Accents #1677FF.
2. Geometry: Border radius must strictly be 4px. Border treatment: 1px solid #D9D9D9.
3. Typography: Heading stack is -apple-system, sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 앤트 블루와 4px 각진 모서리의 엄격한 기업용 B2B 시스템. Form follows function with mathematical discipline.
5. Strict Negative Rules: No playful emojis or oversized bubbly buttons. No casual unstructured margins. No oversized fluffy padding. Keep enterprise 4px data density.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
