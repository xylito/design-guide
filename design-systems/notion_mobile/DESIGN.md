# DESIGN.md — Notion Mobile Workspace Design System Specification
> **Preset #6 of 62** | **Category:** 📖 1. Editorial & Print (도면·인쇄물)  
> **Source Repository:** [notion-enhancer/mobile](https://github.com/notion-enhancer/mobile)  
> **Official Docs / Reference:** [https://www.notion.so/mobile](https://www.notion.so/mobile)  
> **Ecosystem Popularity:** ⭐ `5.9k` | **Tags:** `Notion Mobile`, `Toggle List`, `Callout`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      notion_mobile                               │
│  Design System: Notion Mobile Workspace                     │
│  Archetype:     Mobile Wiki Workspace                       │
│  Nav Brand:     notion·mobile                               │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
문서 중심의 깔끔한 화이트/웜그레이 캔버스, 토글 리스트, 가벼운 콜아웃 박스 구조
- **Warm ivory document canvas with 8px soft corners.**
- **Clean callout cards with left highlight accents.**
- **Effortless mobile reading rhythm.**

### 1.2 Role in AI Agent Codebases
모바일 화면에서 쾌적한 가독성을 제공하는 위키 문서 블록 구조화
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Notion Mobile Workspace** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No aggressive dark neon tones.**
- ❌ **No bulky rigid tables breaking small screens.**
- ❌ **Specific Anti-AI Directive:** No cold tech glow. Mobile workspace cards with inline icon tagging.
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
| `--surface-card` | `#F7F6F3` | Elevation 1 container surface |
| `--border-hairline` | `#E9E9E7` | 1px boundary line |
| `--accent-primary` | `#2383E2` | Primary interactive & highlight focus |
| `--text-primary` | `#37352F` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Newsreader', 'Gowun Batang', 'Noto Serif KR', serif`
- **Body & UI Font Stack:** `'Inter', 'Gowun Dodum', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Gowun Batang / Gowun Dodum (모바일 위키 가독성)`
- **Typographic Fallback Rationale:** 작은 모바일 화면에서도 눈이 편안한 인문학적 세리프 고운바탕 및 고운돋움 페어링
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `12px`
- **Border Treatment:** `1px solid rgba(55, 53, 47, 0.09)`
- **Elevation & Shadow:** `0 2px 8px rgba(0, 0, 0, 0.04)`

### 4.2 Structural Features & Micro-Interactions
### TOGGLE: Touch Collapsible Blocks
Smooth expandable content blocks tailored for phone screens.
*(Metadata: `EXPAND: YES`)*

### CALLOUT: Lightweight Highlight Boxes
Warm shaded cards with left border accent for key take-aways.
*(Metadata: `SHADE: WARM`)*

### TYPO: Serif & Sans Fluidity
High reading contrast without aggressive visual barriers.
*(Metadata: `RHYTHM: CALM`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #37352F, text #FFFFFF, 12px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #F7F6F3, border 1px solid rgba(55,53,47,0.08), text #37352F`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `12px`.
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
  --theme-id: "notion_mobile";
  --theme-name: "Notion Mobile Workspace";
  --bg-base: #FFFFFF;
  --surface-card: #F7F6F3;
  --border-hairline: #E9E9E7;
  --accent-primary: #2383E2;
  --text-primary: #37352F;
  --font-heading: 'Newsreader', 'Gowun Batang', 'Noto Serif KR', serif;
  --font-body: 'Inter', 'Gowun Dodum', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 12px;
}

body[data-theme="notion_mobile"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="notion_mobile"] h1,
body[data-theme="notion_mobile"] h2,
body[data-theme="notion_mobile"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="notion_mobile"] .card,
body[data-theme="notion_mobile"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(55, 53, 47, 0.09);
  border-radius: var(--theme-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Notion Mobile Workspace
Role: Principal Frontend Systems Architect specialized in the Notion Mobile Workspace design language.
Origin Repository: notion-enhancer/mobile (https://www.notion.so/mobile)

## Visual Directives:
1. Palette: Canvas must be #FFFFFF, Surfaces #F7F6F3, Accents #2383E2.
2. Geometry: Border radius must strictly be 12px. Border treatment: 1px solid rgba(55, 53, 47, 0.09).
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 문서 중심의 깔끔한 화이트/웜그레이 캔버스, 토글 리스트, 가벼운 콜아웃 박스 구조. Form follows function with mathematical discipline.
5. Strict Negative Rules: No aggressive dark neon tones. No bulky rigid tables breaking small screens. No cold tech glow. Mobile workspace cards with inline icon tagging.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
