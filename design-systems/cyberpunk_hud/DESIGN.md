# DESIGN.md — Cyberpunk HUD Sci-Fi App Design System Specification
> **Preset #37 of 62** | **Category:** 🎛️ 4. Hardware & Industrial (로봇·계기판)  
> **Source Repository:** [gaming-ui/cyberpunk-hud](https://github.com/gaming-ui/cyberpunk-hud)  
> **Official Docs / Reference:** [https://github.com/gaming-ui/cyberpunk-hud](https://github.com/gaming-ui/cyberpunk-hud)  
> **Ecosystem Popularity:** ⭐ `4.6k` | **Tags:** `Cyberpunk HUD`, `45° Chamfer`, `Sci-Fi`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      cyberpunk_hud                               │
│  Design System: Cyberpunk HUD Sci-Fi App                    │
│  Archetype:     Sci-Fi Cockpit Telemetry                    │
│  Nav Brand:     CYBER//HUD.99                               │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
clip-path를 이용해 모서리를 사선으로 깎은 메카닉 계기판 스타일, 시안/옐로우 네온 발광
- **45-degree chamfered polygon corners using clip-path.**
- **Neon Cyan #00F0FF and Cyber Yellow #FFE600 reticle accents.**
- **Cockpit telemetry aesthetic.**

### 1.2 Role in AI Agent Codebases
SF 게임 및 하드웨어 조종석 모바일 HUD 인터페이스 구축
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Cyberpunk HUD Sci-Fi App** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No soft organic bubble corners.**
- ❌ **No pastel muted friendly tones.**
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
| `--bg-base` | `#06080F` | Canvas / Base background layer |
| `--surface-card` | `#0D111E` | Elevation 1 container surface |
| `--border-hairline` | `#00F0FF` | 1px boundary line |
| `--accent-primary` | `#FFE600` | Primary interactive & highlight focus |
| `--text-primary` | `#E2E8F0` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Space Grotesk', 'GmarketSansBold', 'Do Hyeon', sans-serif`
- **Body & UI Font Stack:** `'Space Mono', 'D2Coding', monospace`
- **Monospace & Metadata Stack:** `'Space Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `GmarketSansBold / Do Hyeon (도현체 택티컬 계기판)`
- **Typographic Fallback Rationale:** 사이버펑크 HUD의 택티컬 브래킷과 데이터 계측 인덱스에 어울리도록 날카로운 도현체 및 GmarketSansBold 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #00F0FF`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### CHAMFER: 45° Diagonal Clipped Corners
Geometric clip-path cuts evoking aerospace titanium chassis.
*(Metadata: `ANGLE: 45°`)*

### NEON HUD: Cyan & Yellow Reticle Glow
High-visibility targeting lines (#00F0FF & #FFE600).
*(Metadata: `HUD: ACTIVE`)*

### HEX GRID: Tactical Sensor Overlays
Fine coordinate grid markers for cockpit instrument panels.
*(Metadata: `GRID: 12PX`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #FFE600, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #0D111E, border 1px solid #00F0FF, text #FFFFFF`
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
  --theme-id: "cyberpunk_hud";
  --theme-name: "Cyberpunk HUD Sci-Fi App";
  --bg-base: #06080F;
  --surface-card: #0D111E;
  --border-hairline: #00F0FF;
  --accent-primary: #FFE600;
  --text-primary: #E2E8F0;
  --font-heading: 'Space Grotesk', 'GmarketSansBold', 'Do Hyeon', sans-serif;
  --font-body: 'Space Mono', 'D2Coding', monospace;
  --font-mono: 'Space Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="cyberpunk_hud"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="cyberpunk_hud"] h1,
body[data-theme="cyberpunk_hud"] h2,
body[data-theme="cyberpunk_hud"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="cyberpunk_hud"] .card,
body[data-theme="cyberpunk_hud"] .panel {
  background: var(--surface-card);
  border: 1px solid #00F0FF;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Cyberpunk HUD Sci-Fi App
Role: Principal Frontend Systems Architect specialized in the Cyberpunk HUD Sci-Fi App design language.
Origin Repository: gaming-ui/cyberpunk-hud (https://github.com/gaming-ui/cyberpunk-hud)

## Visual Directives:
1. Palette: Canvas must be #06080F, Surfaces #0D111E, Accents #FFE600.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #00F0FF.
3. Typography: Heading stack is 'Space Grotesk', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: clip-path를 이용해 모서리를 사선으로 깎은 메카닉 계기판 스타일, 시안/옐로우 네온 발광. Form follows function with mathematical discipline.
5. Strict Negative Rules: No soft organic bubble corners. No pastel muted friendly tones. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
