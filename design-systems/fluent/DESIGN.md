# DESIGN.md — Microsoft Fluent 2 (Mica) Design System Specification
> **Preset #40 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [microsoft/fluentui](https://github.com/microsoft/fluentui)  
> **Official Docs / Reference:** [https://fluent2.microsoft.design](https://fluent2.microsoft.design)  
> **Ecosystem Popularity:** ⭐ `18.3k` | **Tags:** `Fluent 2`, `Mica`, `Windows 11`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      fluent                                      │
│  Design System: Microsoft Fluent 2 (Mica)                   │
│  Archetype:     Windows 11 Mica & Acrylic                   │
│  Nav Brand:     MICROSOFT//FLUENT                           │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
은은한 불투명 유리 질감(Mica)과 섬세한 상단 빛 반사
- **Semi-translucent Mica acrylic surface with backdrop blur.**
- **Gentle 8px radius with top edge luminous reflection.**
- **Fluent Windows Blue #0078D4 primary accent.**

### 1.2 Role in AI Agent Codebases
데스크톱 네이티브 OS 감성의 고급스러운 윈도우 글래스 질감 재현
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Microsoft Fluent 2 (Mica)** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No harsh unblurred flat cards.**
- ❌ **No jarring high-saturation neon clashes.**
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
| `--bg-base` | `#1F242C` | Canvas / Base background layer |
| `--surface-card` | `rgba(40, 48, 58, 0.75)` | Elevation 1 container surface |
| `--border-hairline` | `rgba(255,255,255,0.14)` | 1px boundary line |
| `--accent-primary` | `#0078D4` | Primary interactive & highlight focus |
| `--text-primary` | `#FFFFFF` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Segoe UI', 'Pretendard Variable', 'Malgun Gothic', sans-serif`
- **Body & UI Font Stack:** `'Segoe UI', 'Pretendard Variable', 'Malgun Gothic', sans-serif`
- **Monospace & Metadata Stack:** `'Consolas', 'D2Coding', monospace`
- **Paired Korean Typography:** `Pretendard Variable / Malgun Gothic`
- **Typographic Fallback Rationale:** 마이크로소프트 플루언트 2 미카 반투명 글래스 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid rgba(255,255,255,0.14)`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### MICA // 01: Translucent Material Depth
Subtle acrylic material blending foreground cards with desktop tone.
*(Metadata: `BLUR: 30PX`)*

### REVEAL // 02: Luminous Edge Reflection
Top hairline highlight capturing overhead workspace light.
*(Metadata: `LIGHT: 100%`)*

### COGNITIVE // 03: Calm Visual Hierarchy
Restrained Segoe UI typography scale with smooth hover transitions.
*(Metadata: `FLUENT 2`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #0078D4, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background rgba(40, 48, 58, 0.75), border 1px solid rgba(255,255,255,0.14), text #FFFFFF`
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
  --theme-id: "fluent";
  --theme-name: "Microsoft Fluent 2 (Mica)";
  --bg-base: #1F242C;
  --surface-card: rgba(40, 48, 58, 0.75);
  --border-hairline: rgba(255,255,255,0.14);
  --accent-primary: #0078D4;
  --text-primary: #FFFFFF;
  --font-heading: 'Segoe UI', 'Pretendard Variable', 'Malgun Gothic', sans-serif;
  --font-body: 'Segoe UI', 'Pretendard Variable', 'Malgun Gothic', sans-serif;
  --font-mono: 'Consolas', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="fluent"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="fluent"] h1,
body[data-theme="fluent"] h2,
body[data-theme="fluent"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="fluent"] .card,
body[data-theme="fluent"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Microsoft Fluent 2 (Mica)
Role: Principal Frontend Systems Architect specialized in the Microsoft Fluent 2 (Mica) design language.
Origin Repository: microsoft/fluentui (https://fluent2.microsoft.design)

## Visual Directives:
1. Palette: Canvas must be #1F242C, Surfaces rgba(40, 48, 58, 0.75), Accents #0078D4.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid rgba(255,255,255,0.14).
3. Typography: Heading stack is 'Segoe UI', 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 은은한 불투명 유리 질감(Mica)과 섬세한 상단 빛 반사. Form follows function with mathematical discipline.
5. Strict Negative Rules: No harsh unblurred flat cards. No jarring high-saturation neon clashes. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
