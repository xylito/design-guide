# DESIGN.md — DaisyUI Neo-Brutalism Mobile Design System Specification
> **Preset #60 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [saadeghi/daisyui-neobrutal](https://github.com/saadeghi/daisyui-neobrutal)  
> **Official Docs / Reference:** [https://daisyui.com/docs/themes/](https://daisyui.com/docs/themes/)  
> **Ecosystem Popularity:** ⭐ `9.9k` | **Tags:** `Neo-Brutalism`, `Hard Shadow`, `DaisyUI`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      daisyui_brutal                              │
│  Design System: DaisyUI Neo-Brutalism Mobile                │
│  Archetype:     Raw Hard Edge Pop                           │
│  Nav Brand:     DAISY.BRUTAL★                               │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
3px ~ 4px의 굵은 검은색 외곽선과 오프셋 하드 그림자(4px 4px 0px #000), 원색 컬러 조합
- **3px solid black outlines on all components.**
- **4px 4px 0 #000 zero-blur hard drop shadows.**
- **Physical push-down button action (translate 2px, 2px).**

### 1.2 Role in AI Agent Codebases
단조로움을 탈피하고 화면을 장악하는 펀치력 있는 하드 엣지 팝 모바일 UI 구현
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **DaisyUI Neo-Brutalism Mobile** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **Strictly NO gentle blurred drop shadows.**
- ❌ **No timid polite corporate grays.**
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
| `--bg-base` | `#FEF08A` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#000000` | 1px boundary line |
| `--accent-primary` | `#F43F5E` | Primary interactive & highlight focus |
| `--text-primary` | `#000000` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Archivo Black', 'Black Han Sans', 'Do Hyeon', sans-serif`
- **Body & UI Font Stack:** `'Space Grotesk', 'Pretendard Variable', 'Pretendard', sans-serif`
- **Monospace & Metadata Stack:** `'Space Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Black Han Sans (블랙한산스 초중량 헤드라인) / Do Hyeon (도현체)`
- **Typographic Fallback Rationale:** 모바일 네오브루탈리즘의 두꺼운 외곽선과 채도 높은 원색 블록에 어울리는 초중량 블랙한산스 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #000000`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### OUTLINE: 3px Bold Solid Contours
Thick unapologetic black outlines defining every touch boundary.
*(Metadata: `BORDER: 3PX`)*

### HARD DROP: Zero-Blur 4px Offset Depth
box-shadow: 4px 4px 0 #000 creating solid physical presence.
*(Metadata: `SHADOW: 4PX`)*

### HIGH POP: Electric Primary Contrast
Canary Yellow #FEF08A and Rose #F43F5E demanding immediate focus.
*(Metadata: `VOLTAGE: MAX`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #F43F5E, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, border 1px solid #000000, text #FFFFFF`
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
  --theme-id: "daisyui_brutal";
  --theme-name: "DaisyUI Neo-Brutalism Mobile";
  --bg-base: #FEF08A;
  --surface-card: #FFFFFF;
  --border-hairline: #000000;
  --accent-primary: #F43F5E;
  --text-primary: #000000;
  --font-heading: 'Archivo Black', 'Black Han Sans', 'Do Hyeon', sans-serif;
  --font-body: 'Space Grotesk', 'Pretendard Variable', 'Pretendard', sans-serif;
  --font-mono: 'Space Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="daisyui_brutal"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="daisyui_brutal"] h1,
body[data-theme="daisyui_brutal"] h2,
body[data-theme="daisyui_brutal"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="daisyui_brutal"] .card,
body[data-theme="daisyui_brutal"] .panel {
  background: var(--surface-card);
  border: 1px solid #000000;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: DaisyUI Neo-Brutalism Mobile
Role: Principal Frontend Systems Architect specialized in the DaisyUI Neo-Brutalism Mobile design language.
Origin Repository: saadeghi/daisyui-neobrutal (https://daisyui.com/docs/themes/)

## Visual Directives:
1. Palette: Canvas must be #FEF08A, Surfaces #FFFFFF, Accents #F43F5E.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #000000.
3. Typography: Heading stack is 'Archivo Black', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 3px ~ 4px의 굵은 검은색 외곽선과 오프셋 하드 그림자(4px 4px 0px #000), 원색 컬러 조합. Form follows function with mathematical discipline.
5. Strict Negative Rules: Strictly NO gentle blurred drop shadows. No timid polite corporate grays. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
