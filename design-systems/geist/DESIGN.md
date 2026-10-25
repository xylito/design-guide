# DESIGN.md — Vercel Geist Monochrome Design System Specification
> **Preset #20 of 62** | **Category:** ⚡ 3. Dark & Developer (개발자·터미널)  
> **Source Repository:** [vercel/geist-font](https://github.com/vercel/geist-font)  
> **Official Docs / Reference:** [https://vercel.com/font](https://vercel.com/font)  
> **Ecosystem Popularity:** ⭐ `12.4k` | **Tags:** `Pure Black`, `Geist Mono`, `Zero Shadow`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      geist                                       │
│  Design System: Vercel Geist Monochrome                     │
│  Archetype:     Pure Black & Wireframe                      │
│  Nav Brand:     ▲ VERCEL.GEIST                              │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
순수 블랙, 칼 같은 흑백 대비, 교차점(+) 격자 그리드
- **Pitch black background #000000 with razor-thin #222222 grid rules.**
- **Absolute monochrome typography without saturated colors.**
- **Crosshair markers (+) at structural intersections.**

### 1.2 Role in AI Agent Codebases
잡다한 컬러를 100% 제거하고 칼 같은 그리드 교차점(+)으로 엔지니어링 미학 완성
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Vercel Geist Monochrome** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Never use colorful card gradients.**
- ❌ **No drop shadows or soft rounded pastels.**
- ❌ **Specific Anti-AI Directive:** Zero color tinting on canvas. Pure void black #000000 with wireframe 1px borders.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#000000` | Canvas / Base background layer |
| `--surface-card` | `#000000` | Elevation 1 container surface |
| `--border-hairline` | `#222222` | 1px boundary line |
| `--accent-primary` | `#FFFFFF` | Primary interactive & highlight focus |
| `--text-primary` | `#FFFFFF` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Geist', 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Pretendard Variable (버셀 가이스트 고정밀 산스)`
- **Typographic Fallback Rationale:** Vercel Geist 폰트의 기하학적 정밀도를 프리텐다드와 1:1로 조화롭게 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `6px`
- **Border Treatment:** `1px solid #222222`
- **Elevation & Shadow:** `none`

### 4.2 Structural Features & Micro-Interactions
### EDGE // 01: Instant Global Invalidation
Edge functions executing in 18 regions worldwide.
*(Metadata: `+ CROSSHAIR`)*

### SCALE // 02: Zero Configuration Builds
Automatic framework detection and asset optimization.
*(Metadata: `+ CROSSHAIR`)*

### OBSERVE // 03: Real-Time Log Stream
Streaming console telemetry with zero buffered delay.
*(Metadata: `+ CROSSHAIR`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #FFFFFF, text #000000, 6px radius, Geist Sans font`
- **Secondary / Ghost Button:**
  - Specification: `Background #000000, border 1px solid #333333, text #FFFFFF`
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
  --theme-id: "geist";
  --theme-name: "Vercel Geist Monochrome";
  --bg-base: #000000;
  --surface-card: #000000;
  --border-hairline: #222222;
  --accent-primary: #FFFFFF;
  --text-primary: #FFFFFF;
  --font-heading: 'Geist', 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 6px;
}

body[data-theme="geist"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="geist"] h1,
body[data-theme="geist"] h2,
body[data-theme="geist"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="geist"] .card,
body[data-theme="geist"] .panel {
  background: var(--surface-card);
  border: 1px solid #222222;
  border-radius: var(--theme-radius);
  box-shadow: none;
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Vercel Geist Monochrome
Role: Principal Frontend Systems Architect specialized in the Vercel Geist Monochrome design language.
Origin Repository: vercel/geist-font (https://vercel.com/font)

## Visual Directives:
1. Palette: Canvas must be #000000, Surfaces #000000, Accents #FFFFFF.
2. Geometry: Border radius must strictly be 6px. Border treatment: 1px solid #222222.
3. Typography: Heading stack is 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 순수 블랙, 칼 같은 흑백 대비, 교차점(+) 격자 그리드. Form follows function with mathematical discipline.
5. Strict Negative Rules: Never use colorful card gradients. No drop shadows or soft rounded pastels. Zero color tinting on canvas. Pure void black #000000 with wireframe 1px borders.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
