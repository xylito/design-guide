# DESIGN.md — Impeccable Minimal Design System Specification
> **Preset #1 of 62** | **Category:** 📖 1. Editorial & Print (도면·인쇄물)  
> **Source Repository:** [pbakaus/impeccable](https://github.com/pbakaus/impeccable)  
> **Official Docs / Reference:** [https://github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable)  
> **Ecosystem Popularity:** ⭐ `2.4k` | **Tags:** `Anti-AI-Slop`, `Hairline Border`, `Editorial Minimal`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      impeccable                                  │
│  Design System: Impeccable Minimal                          │
│  Archetype:     Anti-AI-Slop Editorial                      │
│  Nav Brand:     IMPECCABLE.STYLE                            │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
군더더기를 0으로 수렴시킨 하이엔드 에디토리얼 다크
- **Zero decorative fluff. Every pixel serves direct hierarchy.**
- **Strict typography scale with negative tracking.**
- **No arbitrary nested cards.**

### 1.2 Role in AI Agent Codebases
코딩 에이전트의 디자인 규율을 감독하는 안티-슬롭 린터 및 타이포그래피 수호자
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Impeccable Minimal** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No generic purple-to-blue gradients.**
- ❌ **No uncontrolled border radii.**
- ❌ **Specific Anti-AI Directive:** Reject generic purple/blue gradients. No multi-layer nested card slop. Strict 4-token color limit.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#070809` | Canvas / Base background layer |
| `--surface-card` | `#0E1013` | Elevation 1 container surface |
| `--border-hairline` | `rgba(255,255,255,0.08)` | 1px boundary line |
| `--accent-primary` | `#6366F1` | Primary interactive & highlight focus |
| `--text-primary` | `#FFFFFF` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Cormorant Garamond', 'Nanum Myeongjo', 'Noto Serif KR', Georgia, serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Monospace & Metadata Stack:** `'Space Mono', 'D2Coding', 'Nanum Gothic Coding', monospace`
- **Paired Korean Typography:** `Nanum Myeongjo / Noto Serif KR (나눔명조 & 노토 세리프 학술 서지 조판)`
- **Typographic Fallback Rationale:** 데이터-잉크 비율 원칙과 무결점 학술 모노그래프를 위해 정통 활자체의 품격을 유지하는 나눔명조 및 Noto Serif KR 1순위 지정
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `6px`
- **Border Treatment:** `1px solid rgba(255, 255, 255, 0.08)`
- **Elevation & Shadow:** `none`

### 4.2 Structural Features & Micro-Interactions
### RULES // 01: Deterministic Linting
62 visual anti-pattern detectors running without LLM overhead.
*(Metadata: `STATUS: ACTIVE`)*

### CANON // 02: Optical Alignment
Eliminating 1px misalignment across heterogeneous nested elements.
*(Metadata: `TOLERANCE: 0PX`)*

### PALETTE // 03: Restrained Spectrum
Strict 4-token color limit. No uncontrolled hex proliferation.
*(Metadata: `TOKENS: 4`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #6366F1, text #FFFFFF, 6px radius, hairline border, no drop shadow`
- **Secondary / Ghost Button:**
  - Specification: `Background #0E1013, border 1px solid rgba(255,255,255,0.08), text #EDEDED`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `6px`.
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
  --theme-id: "impeccable";
  --theme-name: "Impeccable Minimal";
  --bg-base: #070809;
  --surface-card: #0E1013;
  --border-hairline: rgba(255,255,255,0.08);
  --accent-primary: #6366F1;
  --text-primary: #FFFFFF;
  --font-heading: 'Cormorant Garamond', 'Nanum Myeongjo', 'Noto Serif KR', Georgia, serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-mono: 'Space Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 6px;
}

body[data-theme="impeccable"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="impeccable"] h1,
body[data-theme="impeccable"] h2,
body[data-theme="impeccable"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="impeccable"] .card,
body[data-theme="impeccable"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--theme-radius);
  box-shadow: none;
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Impeccable Minimal
Role: Principal Frontend Systems Architect specialized in the Impeccable Minimal design language.
Origin Repository: pbakaus/impeccable (https://github.com/pbakaus/impeccable)

## Visual Directives:
1. Palette: Canvas must be #070809, Surfaces #0E1013, Accents #6366F1.
2. Geometry: Border radius must strictly be 6px. Border treatment: 1px solid rgba(255, 255, 255, 0.08).
3. Typography: Heading stack is 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 군더더기를 0으로 수렴시킨 하이엔드 에디토리얼 다크. Form follows function with mathematical discipline.
5. Strict Negative Rules: No generic purple-to-blue gradients. No uncontrolled border radii. Reject generic purple/blue gradients. No multi-layer nested card slop. Strict 4-token color limit.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
