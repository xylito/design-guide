# DESIGN.md — Nord Arctic Mobile Design System Specification
> **Preset #27 of 62** | **Category:** ⚡ 3. Dark & Developer (개발자·터미널)  
> **Source Repository:** [arcticicestudio/nord](https://github.com/arcticicestudio/nord)  
> **Official Docs / Reference:** [https://www.nordtheme.com](https://www.nordtheme.com)  
> **Ecosystem Popularity:** ⭐ `7.6k` | **Tags:** `Nord`, `Glacier Blue`, `Polar Night`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      nord                                        │
│  Design System: Nord Arctic Mobile                          │
│  Archetype:     Arctic Ice Studio                           │
│  Nav Brand:     NORD.ARCTIC                                 │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
빙하 블루(#88C0D0)와 다크 슬레이트(#2E3440)의 저채도 극지방 미학
- **Arctic low-saturation palette centered on Polar Night #2E3440.**
- **Glacier blue accents #88C0D0 delivering calm analytical focus.**
- **8px rounded corners with soft slate borders.**

### 1.2 Role in AI Agent Codebases
장시간 코딩 및 터미널 모니터링 시 블루라이트 자극을 줄여주는 차분한 팔레트 주입
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Nord Arctic Mobile** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No aggressive neon colors.**
- ❌ **No warm muddy browns or harsh white backgrounds.**
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
| `--bg-base` | `#2E3440` | Canvas / Base background layer |
| `--surface-card` | `#3B4252` | Elevation 1 container surface |
| `--border-hairline` | `#4C566A` | 1px boundary line |
| `--accent-primary` | `#88C0D0` | Primary interactive & highlight focus |
| `--text-primary` | `#ECEFF4` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `JetBrains Mono / D2Coding (노르딕 아크틱 코딩)`
- **Typographic Fallback Rationale:** 북유럽 설원의 차가운 색채와 완벽한 조화를 이루는 정밀한 D2Coding 및 젯브레인스 모노 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #4C566A`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### POLAR: Low-Saturation Serenity
Subtle blue-gray undertones eliminating ocular strain.
*(Metadata: `#2E3440`)*

### FROST: Glacier Cyan Accents
Four distinct frost tones (#8FBCBB, #88C0D0, #81A1C1, #5E81AC).
*(Metadata: `FROST: 4`)*

### SNOW: Crisp Text Hierarchy
Snow Storm whites (#D8DEE9, #E5E9F0, #ECEFF4) for readable code.
*(Metadata: `CONTRAST: AAA`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #88C0D0, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #3B4252, border 1px solid #4C566A, text #FFFFFF`
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
  --theme-id: "nord";
  --theme-name: "Nord Arctic Mobile";
  --bg-base: #2E3440;
  --surface-card: #3B4252;
  --border-hairline: #4C566A;
  --accent-primary: #88C0D0;
  --text-primary: #ECEFF4;
  --font-heading: 'JetBrains Mono', 'D2Coding', monospace;
  --font-body: 'Inter', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="nord"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="nord"] h1,
body[data-theme="nord"] h2,
body[data-theme="nord"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="nord"] .card,
body[data-theme="nord"] .panel {
  background: var(--surface-card);
  border: 1px solid #4C566A;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Nord Arctic Mobile
Role: Principal Frontend Systems Architect specialized in the Nord Arctic Mobile design language.
Origin Repository: arcticicestudio/nord (https://www.nordtheme.com)

## Visual Directives:
1. Palette: Canvas must be #2E3440, Surfaces #3B4252, Accents #88C0D0.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #4C566A.
3. Typography: Heading stack is 'JetBrains Mono', 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 빙하 블루(#88C0D0)와 다크 슬레이트(#2E3440)의 저채도 극지방 미학. Form follows function with mathematical discipline.
5. Strict Negative Rules: No aggressive neon colors. No warm muddy browns or harsh white backgrounds. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
