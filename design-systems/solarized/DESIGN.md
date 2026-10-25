# DESIGN.md — Solarized Precision Mobile Design System Specification
> **Preset #32 of 62** | **Category:** ⚡ 3. Dark & Developer (개발자·터미널)  
> **Source Repository:** [altercation/solarized](https://github.com/altercation/solarized)  
> **Official Docs / Reference:** [https://ethanschoonover.com/solarized/](https://ethanschoonover.com/solarized/)  
> **Ecosystem Popularity:** ⭐ `15.2k` | **Tags:** `Solarized`, `CIELAB`, `Optical Precision`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      solarized                                   │
│  Design System: Solarized Precision Mobile                  │
│  Archetype:     Optical Science Contrast                    │
│  Nav Brand:     SOLARIZED.OPTIC                             │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
인간 시각 수용 과학에 기반한 청록빛(Base03)과 정밀 수학적 대비
- **CIELAB color space precision: Base03 #002B36 dark background.**
- **Cyan #2AA198 and amber #B58900 accents calibrated for optical ease.**
- **6px clean engineering border-radius.**

### 1.2 Role in AI Agent Codebases
정밀 데이터 계측 및 광학적 가독성이 필수적인 엔지니어링 툴링 구축
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Solarized Precision Mobile** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No arbitrary uncalibrated RGB hex colors.**
- ❌ **No glaring high-contrast white text.**
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
| `--bg-base` | `#002B36` | Canvas / Base background layer |
| `--surface-card` | `#073642` | Elevation 1 container surface |
| `--border-hairline` | `#586E75` | 1px boundary line |
| `--accent-primary` | `#2AA198` | Primary interactive & highlight focus |
| `--text-primary` | `#839496` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Space Mono', 'D2Coding', monospace`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'Space Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `D2Coding / Space Mono (솔라라이즈드 학술 정밀 모노)`
- **Typographic Fallback Rationale:** 에단 슌오버의 엄격한 광학 명도 대비를 만족하는 D2Coding 서체
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #586E75`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### CIELAB: Uniform Perceptual Steps
Scientifically measured luminance steps eliminating contrast hotspots.
*(Metadata: `ΔE &lt; 2.0`)*

### BASE03: Deep Teal Optical Ground
Distinctive cyan-undertone dark #002B36 reducing pupil fatigue.
*(Metadata: `#002B36`)*

### CHROMATIC: Balanced Cyan & Yellow
Precision complementary accents (#2AA198 & #B58900).
*(Metadata: `OPTIC: LAB`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #2AA198, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #073642, border 1px solid #586E75, text #FFFFFF`
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
  --theme-id: "solarized";
  --theme-name: "Solarized Precision Mobile";
  --bg-base: #002B36;
  --surface-card: #073642;
  --border-hairline: #586E75;
  --accent-primary: #2AA198;
  --text-primary: #839496;
  --font-heading: 'Space Mono', 'D2Coding', monospace;
  --font-body: 'Inter', 'Pretendard Variable', sans-serif;
  --font-mono: 'Space Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="solarized"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="solarized"] h1,
body[data-theme="solarized"] h2,
body[data-theme="solarized"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="solarized"] .card,
body[data-theme="solarized"] .panel {
  background: var(--surface-card);
  border: 1px solid #586E75;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Solarized Precision Mobile
Role: Principal Frontend Systems Architect specialized in the Solarized Precision Mobile design language.
Origin Repository: altercation/solarized (https://ethanschoonover.com/solarized/)

## Visual Directives:
1. Palette: Canvas must be #002B36, Surfaces #073642, Accents #2AA198.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #586E75.
3. Typography: Heading stack is 'Space Mono', monospace. Body typography must feel intentional with tight tracking.
4. Vibe: 인간 시각 수용 과학에 기반한 청록빛(Base03)과 정밀 수학적 대비. Form follows function with mathematical discipline.
5. Strict Negative Rules: No arbitrary uncalibrated RGB hex colors. No glaring high-contrast white text. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
