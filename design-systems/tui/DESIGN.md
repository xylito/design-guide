# DESIGN.md — Terminal TUI (ASCII) Design System Specification
> **Preset #24 of 62** | **Category:** ⚡ 3. Dark & Developer (개발자·터미널)  
> **Source Repository:** [owickstrom/the-monospace-web](https://github.com/owickstrom/the-monospace-web)  
> **Official Docs / Reference:** [https://owickstrom.github.io/the-monospace-web/](https://owickstrom.github.io/the-monospace-web/)  
> **Ecosystem Popularity:** ⭐ `5.4k` | **Tags:** `ASCII TUI`, `Monospace`, `CRT Glow`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      tui                                         │
│  Design System: Terminal TUI (ASCII)                        │
│  Archetype:     100% Monospace CLI                          │
│  Nav Brand:     TTY//0.SYSTEM                               │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
문자 격자 정렬, 아스키 박스 드로잉, 해커 CLI 콘솔
- **100% Monospace font strictly required across all elements.**
- **Phosphor green text #38EF7D on terminal black #0C1017.**
- **Borders styled with ASCII-inspired lines and brackets ([ ]).**

### 1.2 Role in AI Agent Codebases
텍스트 기반 터미널 도구(TUI)와 로우레벨 시스템 콘솔의 기계적 쾌감 구현
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Terminal TUI (ASCII)** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Strictly NO rounded corners (0px only).**
- ❌ **No proportional sans-serif fonts.**
- ❌ **Specific Anti-AI Directive:** No proportional sans-serif fonts. 100% monospaced character grid and ASCII borders.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#0C1017` | Canvas / Base background layer |
| `--surface-card` | `#05080C` | Elevation 1 container surface |
| `--border-hairline` | `#38EF7D` | 1px boundary line |
| `--accent-primary` | `#38EF7D` | Primary interactive & highlight focus |
| `--text-primary` | `#38EF7D` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Space Mono', 'D2Coding', monospace`
- **Body & UI Font Stack:** `'Space Mono', 'D2Coding', monospace`
- **Monospace & Metadata Stack:** `'Space Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `D2Coding (터미널 TUI 모노스페이스)`
- **Typographic Fallback Rationale:** CLI 및 TUI 터미널 유저 인터페이스를 위한 한글 고정폭 D2Coding 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `0px`
- **Border Treatment:** `1px solid #38EF7D`
- **Elevation & Shadow:** `none`

### 4.2 Structural Features & Micro-Interactions
### TTY//01: +-- PIPE: INGESTION --+
| Streaming syslog stdin at 10400 bps with zero packet drops. |
*(Metadata: `STATUS: 200`)*

### TTY//02: +-- STACK: MEMORY --+
| Allocating 512MB heap block to sandbox virtual container. |
*(Metadata: `HEAP: OK`)*

### TTY//03: +-- PROCESS: DAEMON --+
| PID 4128 polling background socket telemetry listener. |
*(Metadata: `DAEMON: RUN`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #38EF7D, text #0C0C0C, 0px radius, [BRACKETED_ASCII_LABELS]`
- **Secondary / Ghost Button:**
  - Specification: `Background transparent, border 1px solid #38EF7D, text #38EF7D, 0px radius`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `0px`.
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
  --theme-id: "tui";
  --theme-name: "Terminal TUI (ASCII)";
  --bg-base: #0C1017;
  --surface-card: #05080C;
  --border-hairline: #38EF7D;
  --accent-primary: #38EF7D;
  --text-primary: #38EF7D;
  --font-heading: 'Space Mono', 'D2Coding', monospace;
  --font-body: 'Space Mono', 'D2Coding', monospace;
  --font-mono: 'Space Mono', 'D2Coding', monospace;
  --theme-radius: 0px;
}

body[data-theme="tui"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="tui"] h1,
body[data-theme="tui"] h2,
body[data-theme="tui"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="tui"] .card,
body[data-theme="tui"] .panel {
  background: var(--surface-card);
  border: 1px solid #38EF7D;
  border-radius: var(--theme-radius);
  box-shadow: none;
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Terminal TUI (ASCII)
Role: Principal Frontend Systems Architect specialized in the Terminal TUI (ASCII) design language.
Origin Repository: owickstrom/the-monospace-web (https://owickstrom.github.io/the-monospace-web/)

## Visual Directives:
1. Palette: Canvas must be #0C1017, Surfaces #05080C, Accents #38EF7D.
2. Geometry: Border radius must strictly be 0px. Border treatment: 1px solid #38EF7D.
3. Typography: Heading stack is 'Space Mono', monospace. Body typography must feel intentional with tight tracking.
4. Vibe: 문자 격자 정렬, 아스키 박스 드로잉, 해커 CLI 콘솔. Form follows function with mathematical discipline.
5. Strict Negative Rules: Strictly NO rounded corners (0px only). No proportional sans-serif fonts. No proportional sans-serif fonts. 100% monospaced character grid and ASCII borders.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
