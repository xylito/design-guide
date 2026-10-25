# DESIGN.md — Notion Warm Workspace Design System Specification
> **Preset #4 of 62** | **Category:** 📖 1. Editorial & Print (도면·인쇄물)  
> **Source Repository:** [notion-enhancer/notion-style](https://github.com/notion-enhancer/notion-style)  
> **Official Docs / Reference:** [https://www.notion.so](https://www.notion.so)  
> **Ecosystem Popularity:** ⭐ `6.5k` | **Tags:** `Warm Canvas`, `Callouts`, `Document UI`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      notion                                      │
│  Design System: Notion Warm Workspace                       │
│  Archetype:     Warm Knowledge Base                         │
│  Nav Brand:     notion·notes                                │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
따뜻한 아이보리와 자연스러운 콜아웃 블록의 위키 감성
- **Warm ivory canvas (#F7F6F3) and pure white card blocks.**
- **Gentle 4px border radius and muted gray dividers (#E9E9E7).**
- **Readable, distraction-free document architecture.**

### 1.2 Role in AI Agent Codebases
방대한 사내 지식 베이스와 위키를 한 편의 깔끔한 문서처럼 읽히도록 구조화
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Notion Warm Workspace** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No aggressive dark neon tones.**
- ❌ **No harsh black drop shadows.**
- ❌ **Specific Anti-AI Directive:** No high-saturation neon colors. Warm parchment backgrounds only.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#F7F6F3` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#E9E9E7` | 1px boundary line |
| `--accent-primary` | `#2383E2` | Primary interactive & highlight focus |
| `--text-primary` | `#37352F` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Newsreader', 'Gowun Batang', 'Noto Serif KR', serif`
- **Body & UI Font Stack:** `'Inter', 'Gowun Dodum', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Gowun Batang (고운바탕 감성 에디토리얼 세리프) / Gowun Dodum (고운돋움)`
- **Typographic Fallback Rationale:** 노션의 따뜻한 미색 종이 질감과 인문학적 노트 필기 감성에 맞춰 유려하고 부드러운 고운바탕과 고운돋움 페어링
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `6px`
- **Border Treatment:** `1px solid #ECECEB`
- **Elevation & Shadow:** `0 1px 3px rgba(0, 0, 0, 0.05)`

### 4.2 Structural Features & Micro-Interactions
### CALLOUT 01: Structured Block Hierarchy
Distinct shaded cards with light left border highlights.
*(Metadata: `BLOCK: H1`)*

### TYPO 02: Warm Neutral Tones
Soft warm charcoal text (#37352F) eliminating eye strain on long reads.
*(Metadata: `CONTRAST: AAA`)*

### LAYOUT 03: Document Flow Rhythm
Spacious margin bounds prioritizing sustained readability.
*(Metadata: `WIDTH: 840PX`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #37352F, text #FFFFFF, 6px radius, subtle hover elevation`
- **Secondary / Ghost Button:**
  - Specification: `Background transparent, border 1px solid #ECECEB, text #37352F`
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
  --theme-id: "notion";
  --theme-name: "Notion Warm Workspace";
  --bg-base: #F7F6F3;
  --surface-card: #FFFFFF;
  --border-hairline: #E9E9E7;
  --accent-primary: #2383E2;
  --text-primary: #37352F;
  --font-heading: 'Newsreader', 'Gowun Batang', 'Noto Serif KR', serif;
  --font-body: 'Inter', 'Gowun Dodum', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 6px;
}

body[data-theme="notion"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="notion"] h1,
body[data-theme="notion"] h2,
body[data-theme="notion"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="notion"] .card,
body[data-theme="notion"] .panel {
  background: var(--surface-card);
  border: 1px solid #ECECEB;
  border-radius: var(--theme-radius);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Notion Warm Workspace
Role: Principal Frontend Systems Architect specialized in the Notion Warm Workspace design language.
Origin Repository: notion-enhancer/notion-style (https://www.notion.so)

## Visual Directives:
1. Palette: Canvas must be #F7F6F3, Surfaces #FFFFFF, Accents #2383E2.
2. Geometry: Border radius must strictly be 6px. Border treatment: 1px solid #ECECEB.
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 따뜻한 아이보리와 자연스러운 콜아웃 블록의 위키 감성. Form follows function with mathematical discipline.
5. Strict Negative Rules: No aggressive dark neon tones. No harsh black drop shadows. No high-saturation neon colors. Warm parchment backgrounds only.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
