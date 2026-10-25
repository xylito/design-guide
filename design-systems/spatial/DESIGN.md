# DESIGN.md — Apple Cupertino Spatial Design System Specification
> **Preset #41 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [konsta-ui/konsta-ui](https://github.com/konsta-ui/konsta-ui)  
> **Official Docs / Reference:** [https://developer.apple.com/visionos/](https://developer.apple.com/visionos/)  
> **Ecosystem Popularity:** ⭐ `6.2k` | **Tags:** `visionOS`, `Frosted Glass`, `Specular Rim`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      spatial                                     │
│  Design System: Apple Cupertino Spatial                     │
│  Archetype:     visionOS Spatial Glass                      │
│  Nav Brand:     APPLE//SPATIAL                              │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
연속 곡률 20px, 고채도 프로스티드 글래스, 빛의 굴절과 깊이
- **Heavy backdrop blur (blur 28px saturate 180%) on translucent cards.**
- **Continuous 20px curvature with specular white rim border.**
- **Pill-shaped translucent controls with ambient glow.**

### 1.2 Role in AI Agent Codebases
차세대 공간 OS 및 네이티브 iOS 수준의 프로스티드 글래스와 물리적 심도 형성
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Apple Cupertino Spatial** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No opaque flat cardboard boxes.**
- ❌ **No harsh black outlines.**
- ❌ **Specific Anti-AI Directive:** No opaque solid backgrounds. Multi-layer frosted visionOS spatial glass with specular white borders.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#0B0C1E` | Canvas / Base background layer |
| `--surface-card` | `rgba(255, 255, 255, 0.08)` | Elevation 1 container surface |
| `--border-hairline` | `rgba(255, 255, 255, 0.22)` | 1px boundary line |
| `--accent-primary` | `#8B5CF6` | Primary interactive & highlight focus |
| `--text-primary` | `#FFFFFF` | Headings & high-contrast body copy |
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
- **Border Radius:** `24px ~ 32px`
- **Border Treatment:** `1px solid rgba(255, 255, 255, 0.2)`
- **Elevation & Shadow:** `0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25)`

### 4.2 Structural Features & Micro-Interactions
### OPTICS // 01: Specular Rim Refraction
Dynamic gradient border simulating physical light catching crystal.
*(Metadata: `BLUR: 28PX`)*

### AURORA // 02: Chromatic Ambient Mesh
Vibrant cosmic orbs floating behind glass to reveal optical depth.
*(Metadata: `SATURATE: 180%`)*

### PHYSICS // 03: Volumetric Floating Panels
Multi-tier z-axis elevation suspended naturally in mid-air.
*(Metadata: `Z-INDEX: +24`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background rgba(255, 255, 255, 0.2), text #FFFFFF, 24px radius, backdrop-filter blur(24px)`
- **Secondary / Ghost Button:**
  - Specification: `Background rgba(255, 255, 255, 0.08), border 1px solid rgba(255,255,255,0.15), text #FFFFFF`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `24px ~ 32px`.
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
  --theme-id: "spatial";
  --theme-name: "Apple Cupertino Spatial";
  --bg-base: #0B0C1E;
  --surface-card: rgba(255, 255, 255, 0.08);
  --border-hairline: rgba(255, 255, 255, 0.22);
  --accent-primary: #8B5CF6;
  --text-primary: #FFFFFF;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 24px;
}

body[data-theme="spatial"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="spatial"] h1,
body[data-theme="spatial"] h2,
body[data-theme="spatial"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="spatial"] .card,
body[data-theme="spatial"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--theme-radius);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Apple Cupertino Spatial
Role: Principal Frontend Systems Architect specialized in the Apple Cupertino Spatial design language.
Origin Repository: konsta-ui/konsta-ui (https://developer.apple.com/visionos/)

## Visual Directives:
1. Palette: Canvas must be #0B0C1E, Surfaces rgba(255, 255, 255, 0.08), Accents #8B5CF6.
2. Geometry: Border radius must strictly be 24px ~ 32px. Border treatment: 1px solid rgba(255, 255, 255, 0.2).
3. Typography: Heading stack is 'Outfit', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 연속 곡률 20px, 고채도 프로스티드 글래스, 빛의 굴절과 깊이. Form follows function with mathematical discipline.
5. Strict Negative Rules: No opaque flat cardboard boxes. No harsh black outlines. No opaque solid backgrounds. Multi-layer frosted visionOS spatial glass with specular white borders.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
