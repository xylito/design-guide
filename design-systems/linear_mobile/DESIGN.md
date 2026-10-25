# DESIGN.md — Linear Mobile (Workspace Dark) Design System Specification
> **Preset #25 of 62** | **Category:** ⚡ 3. Dark & Developer (개발자·터미널)  
> **Source Repository:** [linear-app/mobile-ui](https://github.com/linear-app/mobile-ui)  
> **Official Docs / Reference:** [https://linear.app/mobile](https://linear.app/mobile)  
> **Ecosystem Popularity:** ⭐ `10.2k` | **Tags:** `Linear Mobile`, `12px Edge`, `Midnight Dark`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      linear_mobile                               │
│  Design System: Linear Mobile (Workspace Dark)              │
│  Archetype:     Midnight High-Density                       │
│  Nav Brand:     LINEAR//MOBILE                              │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
극도로 정제된 미드나잇 다크, 13px 고밀도 폰트, 제스처 중심의 초고속 반응속도
- **Obsidian midnight dark #08090A foundation.**
- **12px refined border radius with 1px top edge highlight.**
- **Fast keyboard and gesture-first mobile interactions.**

### 1.2 Role in AI Agent Codebases
하이엔드 개발자 및 프로덕트 팀을 위한 초고속 모바일 워크스페이스 생성
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Linear Mobile (Workspace Dark)** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No bubbly oversized toy buttons.**
- ❌ **No slow sluggish transition animations.**
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
| `--bg-base` | `#08090A` | Canvas / Base background layer |
| `--surface-card` | `#101216` | Elevation 1 container surface |
| `--border-hairline` | `rgba(255,255,255,0.08)` | 1px boundary line |
| `--accent-primary` | `#5E6AD2` | Primary interactive & highlight focus |
| `--text-primary` | `#F7F8F8` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Pretendard Variable`
- **Typographic Fallback Rationale:** 리니어 모바일 다크 워크스페이스 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid rgba(255,255,255,0.08)`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### GESTURE: Swipe-to-Triage Flow
Zero-latency gesture dismiss and priority escalation on touch.
*(Metadata: `LATENCY: 8MS`)*

### DENSITY: 13px High-Information Grid
Engineered typography scale maximizing lines visible per scroll.
*(Metadata: `DENSITY: +40%`)*

### TOP RIM: 1px Ambient Specular Highlight
Delicate top edge illumination simulating obsidian glass.
*(Metadata: `SPECULAR: 0.18`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #5E6AD2, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #101216, border 1px solid rgba(255,255,255,0.08), text #FFFFFF`
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
  --theme-id: "linear_mobile";
  --theme-name: "Linear Mobile (Workspace Dark)";
  --bg-base: #08090A;
  --surface-card: #101216;
  --border-hairline: rgba(255,255,255,0.08);
  --accent-primary: #5E6AD2;
  --text-primary: #F7F8F8;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="linear_mobile"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="linear_mobile"] h1,
body[data-theme="linear_mobile"] h2,
body[data-theme="linear_mobile"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="linear_mobile"] .card,
body[data-theme="linear_mobile"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Linear Mobile (Workspace Dark)
Role: Principal Frontend Systems Architect specialized in the Linear Mobile (Workspace Dark) design language.
Origin Repository: linear-app/mobile-ui (https://linear.app/mobile)

## Visual Directives:
1. Palette: Canvas must be #08090A, Surfaces #101216, Accents #5E6AD2.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid rgba(255,255,255,0.08).
3. Typography: Heading stack is 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 극도로 정제된 미드나잇 다크, 13px 고밀도 폰트, 제스처 중심의 초고속 반응속도. Form follows function with mathematical discipline.
5. Strict Negative Rules: No bubbly oversized toy buttons. No slow sluggish transition animations. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
