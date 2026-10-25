# DESIGN.md — GitHub Primer Design System Specification
> **Preset #23 of 62** | **Category:** ⚡ 3. Dark & Developer (개발자·터미널)  
> **Source Repository:** [primer/react](https://github.com/primer/react)  
> **Official Docs / Reference:** [https://primer.style](https://primer.style)  
> **Ecosystem Popularity:** ⭐ `3.1k` | **Tags:** `GitHub Primer`, `Commit Green`, `Octicons`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      primer                                      │
│  Design System: GitHub Primer                               │
│  Archetype:     Developer Canvas                            │
│  Nav Brand:     GITHUB//PRIMER                              │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
깃허브 다크와 커밋 그린(#238636)의 전 세계 개발자 공용어
- **GitHub Dark background #0D1117 with surface #161B22.**
- **Signature Commit Diff Green #238636 primary button.**
- **Crisp 6px border radius with border #30363D.**

### 1.2 Role in AI Agent Codebases
전 세계 수억 명의 개발자에게 가장 익숙한 깃허브 코드 리뷰 환경의 사용성 제공
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **GitHub Primer** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No flashy neon disco colors.**
- ❌ **No non-semantic decorative badges.**
- ❌ **Specific Anti-AI Directive:** No non-developer slop. Strictly align with GitHub dark mode components and octicons.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#0D1117` | Canvas / Base background layer |
| `--surface-card` | `#161B22` | Elevation 1 container surface |
| `--border-hairline` | `#30363D` | 1px boundary line |
| `--accent-primary` | `#238636` | Primary interactive & highlight focus |
| `--text-primary` | `#E6EDF3` | Headings & high-contrast body copy |
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
- **Border Radius:** `6px`
- **Border Treatment:** `1px solid #30363D`
- **Elevation & Shadow:** `0 1px 0 rgba(1, 4, 9, 0.1)`

### 4.2 Structural Features & Micro-Interactions
### DIFF // 01: Code Review Ergonomics
Side-by-side split diff viewing with syntax highlight hooks.
*(Metadata: `+148 -12`)*

### ACTION // 02: Continuous CI/CD Matrix
Multi-platform container runners executing on merge events.
*(Metadata: `PASSING`)*

### ISSUE // 03: Milestone Tracking Board
Scrum burn-down charts directly wired into git tags.
*(Metadata: `V2.4 RELEASE`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #238636, text #FFFFFF, 6px radius (GitHub Green) or #1F6FEB (Blue)`
- **Secondary / Ghost Button:**
  - Specification: `Background #21262D, border 1px solid #363B42, text #C9D1D9`
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
  --theme-id: "primer";
  --theme-name: "GitHub Primer";
  --bg-base: #0D1117;
  --surface-card: #161B22;
  --border-hairline: #30363D;
  --accent-primary: #238636;
  --text-primary: #E6EDF3;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 6px;
}

body[data-theme="primer"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="primer"] h1,
body[data-theme="primer"] h2,
body[data-theme="primer"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="primer"] .card,
body[data-theme="primer"] .panel {
  background: var(--surface-card);
  border: 1px solid #30363D;
  border-radius: var(--theme-radius);
  box-shadow: 0 1px 0 rgba(1, 4, 9, 0.1);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: GitHub Primer
Role: Principal Frontend Systems Architect specialized in the GitHub Primer design language.
Origin Repository: primer/react (https://primer.style)

## Visual Directives:
1. Palette: Canvas must be #0D1117, Surfaces #161B22, Accents #238636.
2. Geometry: Border radius must strictly be 6px. Border treatment: 1px solid #30363D.
3. Typography: Heading stack is -apple-system, sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 깃허브 다크와 커밋 그린(#238636)의 전 세계 개발자 공용어. Form follows function with mathematical discipline.
5. Strict Negative Rules: No flashy neon disco colors. No non-semantic decorative badges. No non-developer slop. Strictly align with GitHub dark mode components and octicons.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
