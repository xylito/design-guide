# DESIGN.md — Linear Precision Dark Design System Specification
> **Preset #21 of 62** | **Category:** ⚡ 3. Dark & Developer (개발자·터미널)  
> **Source Repository:** [pacocoursey/cmdk](https://github.com/pacocoursey/cmdk)  
> **Official Docs / Reference:** [https://linear.app](https://linear.app)  
> **Ecosystem Popularity:** ⭐ `9.8k` | **Tags:** `Obsidian`, `1px Highlight`, `cmdk`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      linear                                      │
│  Design System: Linear Precision Dark                       │
│  Archetype:     Obsidian & 1px Hairline                     │
│  Nav Brand:     LINEAR.CORE                                 │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
옵시디언 다크와 상단 1px 그라데이션 광택의 정밀성
- **Obsidian canvas #08090A and card surface #0F1012.**
- **Top 1px gradient highlight simulating directional overhead light.**
- **Monospaced status metadata chips and keyboard shortcuts.**

### 1.2 Role in AI Agent Codebases
실리콘밸리 하이테크 스타트업 특유의 다크 프리시전 및 ⌘K 단축키 위주 조작계 생성
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Linear Precision Dark** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No heavy drop shadows or bubbly borders.**
- ❌ **Never use raw pure white background.**
- ❌ **Specific Anti-AI Directive:** No bubbly borders or raw white backgrounds. Obsidian #08090A with ⌘K keyboard shortcuts.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#08090A` | Canvas / Base background layer |
| `--surface-card` | `#0F1012` | Elevation 1 container surface |
| `--border-hairline` | `rgba(255,255,255,0.08)` | 1px boundary line |
| `--accent-primary` | `#5E6AD2` | Primary interactive & highlight focus |
| `--text-primary` | `#F7F8F8` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Pretendard Variable (리니어 옵시디언 다크 산스)`
- **Typographic Fallback Rationale:** 리니어의 미세한 자간(-0.02em)과 흑연 암흑 캔버스에 최적화된 프리텐다드 페어링
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid rgba(255, 255, 255, 0.08)`
- **Elevation & Shadow:** `0 1px 2px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(0, 0, 0, 0.6)`

### 4.2 Structural Features & Micro-Interactions
### SYNC // 01: Sub-50ms Synchronized State
Optimistic updates with background CRDT conflict resolution.
*(Metadata: `STATUS: NOMINAL`)*

### ROUTING // 02: Deterministic Linear Pipeline
Zero-latency issue triage powered by native WebAssembly runtime.
*(Metadata: `LATENCY: 14MS`)*

### KEYBOARD // 03: Command Palette Architecture
Everything reachable in two keystrokes. Built for terminal natives.
*(Metadata: `SHORTCUT: ⌘+K`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #5E6AD2, text #FFFFFF, 8px radius, top 1px gradient light reflection`
- **Secondary / Ghost Button:**
  - Specification: `Background #0F1012, border 1px solid rgba(255,255,255,0.08), text #F7F8F8`
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
  --theme-id: "linear";
  --theme-name: "Linear Precision Dark";
  --bg-base: #08090A;
  --surface-card: #0F1012;
  --border-hairline: rgba(255,255,255,0.08);
  --accent-primary: #5E6AD2;
  --text-primary: #F7F8F8;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="linear"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="linear"] h1,
body[data-theme="linear"] h2,
body[data-theme="linear"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="linear"] .card,
body[data-theme="linear"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--theme-radius);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(0, 0, 0, 0.6);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Linear Precision Dark
Role: Principal Frontend Systems Architect specialized in the Linear Precision Dark design language.
Origin Repository: pacocoursey/cmdk (https://linear.app)

## Visual Directives:
1. Palette: Canvas must be #08090A, Surfaces #0F1012, Accents #5E6AD2.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid rgba(255, 255, 255, 0.08).
3. Typography: Heading stack is 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 옵시디언 다크와 상단 1px 그라데이션 광택의 정밀성. Form follows function with mathematical discipline.
5. Strict Negative Rules: No heavy drop shadows or bubbly borders. Never use raw pure white background. No bubbly borders or raw white backgrounds. Obsidian #08090A with ⌘K keyboard shortcuts.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
