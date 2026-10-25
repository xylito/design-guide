# DESIGN.md — shadcn/ui Minimal Design System Specification
> **Preset #8 of 62** | **Category:** 💼 2. Modern SaaS & FinTech (모던 스탠다드)  
> **Source Repository:** [shadcn-ui/ui](https://github.com/shadcn-ui/ui)  
> **Official Docs / Reference:** [https://ui.shadcn.com](https://ui.shadcn.com)  
> **Ecosystem Popularity:** ⭐ `74.5k` | **Tags:** `Copy-Paste`, `Zinc Dark`, `Radix`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      shadcn                                      │
│  Design System: shadcn/ui Minimal                           │
│  Archetype:     De Facto Industry Standard                  │
│  Nav Brand:     SHADCN.UI                                   │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
미니멀리스트 Zinc 다크 모드와 완벽한 소유권 컴포넌트
- **Zinc dark #09090B with clean 1px hairline border.**
- **Solid white primary button with high contrast.**
- **Accessible Radix keyboard primitives.**

### 1.2 Role in AI Agent Codebases
AI 생성 코드의 불필요한 번들 비대화를 막고 Tailwind v4 시맨틱 토큰 강제
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **shadcn/ui Minimal** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No messy inline CSS.**
- ❌ **No custom color hex outside project tokens.**
- ❌ **Specific Anti-AI Directive:** No heavy gradients or arbitrary colors. Strictly follow Radix + Tailwind slate tokens.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#09090B` | Canvas / Base background layer |
| `--surface-card` | `#09090B` | Elevation 1 container surface |
| `--border-hairline` | `rgba(255,255,255,0.1)` | 1px boundary line |
| `--accent-primary` | `#FAFAFA` | Primary interactive & highlight focus |
| `--text-primary` | `#FAFAFA` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Pretendard Variable (프리텐다드 중립 산스)`
- **Typographic Fallback Rationale:** shadcn/ui의 극도로 절제된 뉴트럴 징크(Zinc) 팔레트에 군더더기 없이 어울리는 프리텐다드 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid hsl(240, 3.7%, 15.9%)`
- **Elevation & Shadow:** `0 1px 2px 0 rgba(0, 0, 0, 0.05)`

### 4.2 Structural Features & Micro-Interactions
### ZERO RUNTIME: Copy-Paste Architecture
You own the code. No bloated npm dependencies.
*(Metadata: `OWNERSHIP: 100%`)*

### A11Y READY: Radix Headless Roots
WAI-ARIA compliance out of the box on all triggers.
*(Metadata: `WCAG: AA`)*

### SEMANTIC: Strict Token System
Tailwind tokens for background, foreground, and muteds.
*(Metadata: `ZINC MATRIX`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background hsl(0, 0%, 98%), text hsl(240, 5.9%, 10%), 8px radius, font-medium`
- **Secondary / Ghost Button:**
  - Specification: `Background hsl(240, 3.7%, 15.9%), border 1px solid hsl(240, 3.7%, 20%), text hsl(0, 0%, 98%)`
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
  --theme-id: "shadcn";
  --theme-name: "shadcn/ui Minimal";
  --bg-base: #09090B;
  --surface-card: #09090B;
  --border-hairline: rgba(255,255,255,0.1);
  --accent-primary: #FAFAFA;
  --text-primary: #FAFAFA;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="shadcn"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="shadcn"] h1,
body[data-theme="shadcn"] h2,
body[data-theme="shadcn"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="shadcn"] .card,
body[data-theme="shadcn"] .panel {
  background: var(--surface-card);
  border: 1px solid hsl(240, 3.7%, 15.9%);
  border-radius: var(--theme-radius);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: shadcn/ui Minimal
Role: Principal Frontend Systems Architect specialized in the shadcn/ui Minimal design language.
Origin Repository: shadcn-ui/ui (https://ui.shadcn.com)

## Visual Directives:
1. Palette: Canvas must be #09090B, Surfaces #09090B, Accents #FAFAFA.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid hsl(240, 3.7%, 15.9%).
3. Typography: Heading stack is 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 미니멀리스트 Zinc 다크 모드와 완벽한 소유권 컴포넌트. Form follows function with mathematical discipline.
5. Strict Negative Rules: No messy inline CSS. No custom color hex outside project tokens. No heavy gradients or arbitrary colors. Strictly follow Radix + Tailwind slate tokens.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
