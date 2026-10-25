# DESIGN.md — Apple iOS HIG (SwiftUI) Design System Specification
> **Preset #42 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [apple/swiftui](https://github.com/apple/swiftui)  
> **Official Docs / Reference:** [https://developer.apple.com/design/human-interface-guidelines](https://developer.apple.com/design/human-interface-guidelines)  
> **Ecosystem Popularity:** ⭐ `15.4k` | **Tags:** `iOS`, `SwiftUI`, `Squircle`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      ios_hig                                     │
│  Design System: Apple iOS HIG (SwiftUI)                     │
│  Archetype:     Apple Human Interface                       │
│  Nav Brand:     iOS//HIG                                    │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
반투명 프로스티드 글래스와 진동 햅틱, 하단 탭 바 중심 일체감
- **Strict adherence to Apple HIG continuous curvature (20px squircle).**
- **Frosted glass materials with backdrop-filter vibrancy.**
- **Bottom-sheet navigation and fluid springs.**

### 1.2 Role in AI Agent Codebases
네이티브 iOS 및 visionOS 수준의 일체감 있는 하단 탭과 햅틱 제스처 레이아웃 강제
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Apple iOS HIG (SwiftUI)** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No harsh 90-degree squared boxes.**
- ❌ **No loud ungrounded neon without dark backdrop.**
- ❌ **Specific Anti-AI Directive:** No arbitrary web box models. Follow Apple iOS Human Interface Guidelines and SF Pro typography.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#000000` | Canvas / Base background layer |
| `--surface-card` | `rgba(28, 28, 30, 0.82)` | Elevation 1 container surface |
| `--border-hairline` | `rgba(255, 255, 255, 0.12)` | 1px boundary line |
| `--accent-primary` | `#007AFF` | Primary interactive & highlight focus |
| `--text-primary` | `#FFFFFF` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `-apple-system, BlinkMacSystemFont, 'Pretendard Variable', 'Apple SD Gothic Neo', sans-serif`
- **Body & UI Font Stack:** `-apple-system, BlinkMacSystemFont, 'Pretendard Variable', 'Apple SD Gothic Neo', sans-serif`
- **Monospace & Metadata Stack:** `'SF Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Apple SD Gothic Neo / Pretendard Variable (애플 HIG)`
- **Typographic Fallback Rationale:** Apple iOS SF Pro와 가장 완벽한 시각적 무게 균형을 이루는 애플 산돌고딕 네오 및 프리텐다드
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `20px continuous squircle`
- **Border Treatment:** `none`
- **Elevation & Shadow:** `0 4px 20px rgba(0, 0, 0, 0.08)`

### 4.2 Structural Features & Micro-Interactions
### SQUIRCLE: Continuous Curvature
Superellipse corner smoothing eliminating harsh optical corners.
*(Metadata: `SMOOTH: 100%`)*

### VIBRANCY: Layered Blur Panels
Frosted glass materials maintaining ambient legibility.
*(Metadata: `BLUR: 25PX`)*

### HAPTIC: Tactile Sensory Rhythm
Cohesive touch feedback on segmented switches and modal pulls.
*(Metadata: `TAPTIC: OK`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #007AFF, text #FFFFFF, 20px squircle radius, smooth active tap opacity`
- **Secondary / Ghost Button:**
  - Specification: `Background rgba(120, 120, 128, 0.16), text #007AFF, 20px squircle`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `20px continuous squircle`.
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
  --theme-id: "ios_hig";
  --theme-name: "Apple iOS HIG (SwiftUI)";
  --bg-base: #000000;
  --surface-card: rgba(28, 28, 30, 0.82);
  --border-hairline: rgba(255, 255, 255, 0.12);
  --accent-primary: #007AFF;
  --text-primary: #FFFFFF;
  --font-heading: -apple-system, BlinkMacSystemFont, 'Pretendard Variable', 'Apple SD Gothic Neo', sans-serif;
  --font-body: -apple-system, BlinkMacSystemFont, 'Pretendard Variable', 'Apple SD Gothic Neo', sans-serif;
  --font-mono: 'SF Mono', 'D2Coding', monospace;
  --theme-radius: 20px;
}

body[data-theme="ios_hig"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="ios_hig"] h1,
body[data-theme="ios_hig"] h2,
body[data-theme="ios_hig"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="ios_hig"] .card,
body[data-theme="ios_hig"] .panel {
  background: var(--surface-card);
  border: none;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Apple iOS HIG (SwiftUI)
Role: Principal Frontend Systems Architect specialized in the Apple iOS HIG (SwiftUI) design language.
Origin Repository: apple/swiftui (https://developer.apple.com/design/human-interface-guidelines)

## Visual Directives:
1. Palette: Canvas must be #000000, Surfaces rgba(28, 28, 30, 0.82), Accents #007AFF.
2. Geometry: Border radius must strictly be 20px continuous squircle. Border treatment: none.
3. Typography: Heading stack is -apple-system, BlinkMacSystemFont, sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 반투명 프로스티드 글래스와 진동 햅틱, 하단 탭 바 중심 일체감. Form follows function with mathematical discipline.
5. Strict Negative Rules: No harsh 90-degree squared boxes. No loud ungrounded neon without dark backdrop. No arbitrary web box models. Follow Apple iOS Human Interface Guidelines and SF Pro typography.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
