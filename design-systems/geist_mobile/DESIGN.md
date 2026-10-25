# DESIGN.md — Vercel Geist Mobile Design System Specification
> **Preset #26 of 62** | **Category:** ⚡ 3. Dark & Developer (개발자·터미널)  
> **Source Repository:** [vercel/geist-mobile](https://github.com/vercel/geist-mobile)  
> **Official Docs / Reference:** [https://vercel.com](https://vercel.com)  
> **Ecosystem Popularity:** ⭐ `8.8k` | **Tags:** `Geist Mobile`, `Monochrome`, `8px Radius`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      geist_mobile                                │
│  Design System: Vercel Geist Mobile                         │
│  Archetype:     Pure Monochrome Mobile                      │
│  Nav Brand:     GEIST.MOBILE                                │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
완전한 흑백 대비, 미세한 회색 격자선, 불필요한 장식을 완전히 배제한 극도의 미니멀리즘
- **Pure pitch black #000000 canvas.**
- **8px precise corners with hairline #222 borders.**
- **Crisp monochrome contrast without decorative gradients.**

### 1.2 Role in AI Agent Codebases
장식을 완전히 배제하고 오직 텍스트와 그리드만으로 승부하는 모던 개발자 감성
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Vercel Geist Mobile** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No unnecessary colorful gradients.**
- ❌ **No soft blurry drop shadows.**
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
| `--bg-base` | `#000000` | Canvas / Base background layer |
| `--surface-card` | `#0A0A0A` | Elevation 1 container surface |
| `--border-hairline` | `#222222` | 1px boundary line |
| `--accent-primary` | `#FFFFFF` | Primary interactive & highlight focus |
| `--text-primary` | `#EDEDED` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Geist', 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Pretendard Variable`
- **Typographic Fallback Rationale:** 버셀 가이스트 모바일 에디션 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #222222`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### PURE BLACK: OLED Pitch Black Ground
True #000000 maximizing OLED battery conservation.
*(Metadata: `#000000`)*

### GRID: Hairline Crosshair Boundaries
1px crisp gray lines (#222) providing structural certainty.
*(Metadata: `1PX SOLID`)*

### MONO: Absolute Zero Color Fluff
Pure high-contrast white action buttons against black surfaces.
*(Metadata: `CHROMA: 0%`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #FFFFFF, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #0A0A0A, border 1px solid #222222, text #FFFFFF`
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
  --theme-id: "geist_mobile";
  --theme-name: "Vercel Geist Mobile";
  --bg-base: #000000;
  --surface-card: #0A0A0A;
  --border-hairline: #222222;
  --accent-primary: #FFFFFF;
  --text-primary: #EDEDED;
  --font-heading: 'Geist', 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="geist_mobile"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="geist_mobile"] h1,
body[data-theme="geist_mobile"] h2,
body[data-theme="geist_mobile"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="geist_mobile"] .card,
body[data-theme="geist_mobile"] .panel {
  background: var(--surface-card);
  border: 1px solid #222222;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Vercel Geist Mobile
Role: Principal Frontend Systems Architect specialized in the Vercel Geist Mobile design language.
Origin Repository: vercel/geist-mobile (https://vercel.com)

## Visual Directives:
1. Palette: Canvas must be #000000, Surfaces #0A0A0A, Accents #FFFFFF.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #222222.
3. Typography: Heading stack is 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 완전한 흑백 대비, 미세한 회색 격자선, 불필요한 장식을 완전히 배제한 극도의 미니멀리즘. Form follows function with mathematical discipline.
5. Strict Negative Rules: No unnecessary colorful gradients. No soft blurry drop shadows. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
