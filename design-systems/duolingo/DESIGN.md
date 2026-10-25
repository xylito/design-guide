# DESIGN.md — Duolingo Playful Gamification Design System Specification
> **Preset #51 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [duolingo/design-system](https://github.com/duolingo/design-system)  
> **Official Docs / Reference:** [https://design.duolingo.com](https://design.duolingo.com)  
> **Ecosystem Popularity:** ⭐ `8.7k` | **Tags:** `Duolingo`, `Gamification`, `3D Bevel`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      duolingo                                    │
│  Design System: Duolingo Playful Gamification               │
│  Archetype:     Playful Learning Game                       │
│  Nav Brand:     duo·lingo                                   │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
두툼한 볼륨감의 굵은 3D 입체 베벨 버튼과 경쾌한 캐릭터 컬러
- **Chunky 3D buttons with deep bottom bevels (translateY on active).**
- **Cheerful primary palette: Feather Green #58CC02 and Sunburst Yellow #FFC800.**
- **Delightful gamification micro-rewards.**

### 1.2 Role in AI Agent Codebases
학습 및 게이미피케이션 앱에서 중독성 있는 촉각적 버튼 클릭 경험 연출
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Duolingo Playful Gamification** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Strictly NO boring solemn enterprise grayscale.**
- ❌ **No flat unclickable-looking text links.**
- ❌ **Specific Anti-AI Directive:** No flat dark mode. Vibrant playful gamified buttons with 3D bottom push-down bevels.
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
| `--surface-card` | `#F7F7F7` | Elevation 1 container surface |
| `--border-hairline` | `#E5E5E5` | 1px boundary line |
| `--accent-primary` | `#58CC02` | Primary interactive & highlight focus |
| `--text-primary` | `#4B4B4B` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Nunito', 'Jua', 'Dongle', 'Pretendard Variable', sans-serif`
- **Body & UI Font Stack:** `'Plus Jakarta Sans', 'Gowun Dodum', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Jua (주아체 둥근 볼드 캐주얼) / Dongle (동글체 친화적 디스플레이)`
- **Typographic Fallback Rationale:** 듀오링고의 3D 입체 바닥 버튼 및 게임 캐릭터의 친근한 곡률에 맞춰 둥글고 유쾌한 주아체와 동글체 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `16px`
- **Border Treatment:** `none`
- **Elevation & Shadow:** `0 4px 0 #46A302`

### 4.2 Structural Features & Micro-Interactions
### BEVEL: 3D Chunky Push Buttons
Satisfying 4px solid bottom borders that depress upon click.
*(Metadata: `BEVEL: 4PX`)*

### GAMIFIED: Streak Counter Telemetry
Fiery orange streak gems and XP counters motivating daily habits.
*(Metadata: `+10 XP`)*

### JOYFUL: Friendly Bouncy Curves
20px generous radius with expressive high-contrast outlines.
*(Metadata: `RADIUS: 20PX`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #58CC02, text #FFFFFF, 16px radius, 3D bottom push-down bevel shadow (0 4px 0 #46A302)`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, border 2px solid #E5E5E5, shadow 0 2px 0 #E5E5E5, text #AFAFAF`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `16px`.
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
  --theme-id: "duolingo";
  --theme-name: "Duolingo Playful Gamification";
  --bg-base: #FFFFFF;
  --surface-card: #F7F7F7;
  --border-hairline: #E5E5E5;
  --accent-primary: #58CC02;
  --text-primary: #4B4B4B;
  --font-heading: 'Nunito', 'Jua', 'Dongle', 'Pretendard Variable', sans-serif;
  --font-body: 'Plus Jakarta Sans', 'Gowun Dodum', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 16px;
}

body[data-theme="duolingo"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="duolingo"] h1,
body[data-theme="duolingo"] h2,
body[data-theme="duolingo"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="duolingo"] .card,
body[data-theme="duolingo"] .panel {
  background: var(--surface-card);
  border: none;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 0 #46A302;
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Duolingo Playful Gamification
Role: Principal Frontend Systems Architect specialized in the Duolingo Playful Gamification design language.
Origin Repository: duolingo/design-system (https://design.duolingo.com)

## Visual Directives:
1. Palette: Canvas must be #FFFFFF, Surfaces #F7F7F7, Accents #58CC02.
2. Geometry: Border radius must strictly be 16px. Border treatment: none.
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 두툼한 볼륨감의 굵은 3D 입체 베벨 버튼과 경쾌한 캐릭터 컬러. Form follows function with mathematical discipline.
5. Strict Negative Rules: Strictly NO boring solemn enterprise grayscale. No flat unclickable-looking text links. No flat dark mode. Vibrant playful gamified buttons with 3D bottom push-down bevels.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
