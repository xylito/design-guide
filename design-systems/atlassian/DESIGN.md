# DESIGN.md — Atlassian Productivity Design System Specification
> **Preset #49 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [atlassian/atlaskit](https://github.com/atlassian/atlaskit)  
> **Official Docs / Reference:** [https://atlassian.design](https://atlassian.design)  
> **Ecosystem Popularity:** ⭐ `4.5k` | **Tags:** `Jira / Confluence`, `3px Radius`, `Firm Shadow`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      atlassian                                   │
│  Design System: Atlassian Productivity                      │
│  Archetype:     Jira / Confluence ADS                       │
│  Nav Brand:     ATLASSIAN//JIRA                             │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
3px 모서리, 단단한 섀도우, 코발트 블루와 대문자 배지
- **Atlassian light canvas #F4F5F7 and crisp white cards #FFFFFF.**
- **Crisp 3px border-radius and firm shadow 0 1px 1px rgba(9,30,66,0.25).**
- **Cobalt blue #0052CC primary and uppercase lozenge badges.**

### 1.2 Role in AI Agent Codebases
칸반 보드 및 스프린트 백로그에서 확고한 위계와 대문자 LOZENGE 상태 배지 강제
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Atlassian Productivity** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No oversized bubbly 24px+ radiuses.**
- ❌ **No moody dark hacker modes in corporate project tracking.**
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
| `--bg-base` | `#F4F5F7` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#DFE1E6` | 1px boundary line |
| `--accent-primary` | `#0052CC` | Primary interactive & highlight focus |
| `--text-primary` | `#172B4D` | Headings & high-contrast body copy |
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
- **Border Treatment:** `1px solid #DFE1E6`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### IN PROGRESS: Kanban Card Column
Structured issue tiles with priority status flags and avatar stacks.
*(Metadata: `STORY: 8`)*

### LOZENGE: Uppercase Status Badges
High-contrast semantic tags for IN REVIEW, APPROVED, and BLOCKED.
*(Metadata: `STATUS: OK`)*

### METRIC 03: Velocity Sprint Burndown
Deterministic team velocity tracking against cycle time milestones.
*(Metadata: `42 PTS`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #0052CC, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, border 1px solid #DFE1E6, text #FFFFFF`
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
  --theme-id: "atlassian";
  --theme-name: "Atlassian Productivity";
  --bg-base: #F4F5F7;
  --surface-card: #FFFFFF;
  --border-hairline: #DFE1E6;
  --accent-primary: #0052CC;
  --text-primary: #172B4D;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="atlassian"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="atlassian"] h1,
body[data-theme="atlassian"] h2,
body[data-theme="atlassian"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="atlassian"] .card,
body[data-theme="atlassian"] .panel {
  background: var(--surface-card);
  border: 1px solid #DFE1E6;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Atlassian Productivity
Role: Principal Frontend Systems Architect specialized in the Atlassian Productivity design language.
Origin Repository: atlassian/atlaskit (https://atlassian.design)

## Visual Directives:
1. Palette: Canvas must be #F4F5F7, Surfaces #FFFFFF, Accents #0052CC.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #DFE1E6.
3. Typography: Heading stack is -apple-system, sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 3px 모서리, 단단한 섀도우, 코발트 블루와 대문자 배지. Form follows function with mathematical discipline.
5. Strict Negative Rules: No oversized bubbly 24px+ radiuses. No moody dark hacker modes in corporate project tracking. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
