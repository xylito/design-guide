# DESIGN.md — Telegram Minimal Messenger Design System Specification
> **Preset #57 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [telegramdesktop/tdesktop](https://github.com/telegramdesktop/tdesktop)  
> **Official Docs / Reference:** [https://core.telegram.org](https://core.telegram.org)  
> **Ecosystem Popularity:** ⭐ `27.8k` | **Tags:** `Telegram`, `Fast`, `Message Bubble`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      telegram                                    │
│  Design System: Telegram Minimal Messenger                  │
│  Archetype:     Ultra-Fast Messenger                        │
│  Nav Brand:     telegram·fast                               │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
가벼운 성능, 빠른 로딩, 네이티브 말풍선 라운드(12px) 감성
- **Clean minimal night navy canvas #0E1621.**
- **Asymmetrical 12px rounded message bubbles.**
- **Telegram Sky Blue #2EA6FF for instant readability.**

### 1.2 Role in AI Agent Codebases
초고속 메시징 및 대용량 채널 피드의 가벼운 반응성 레이아웃 확보
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Telegram Minimal Messenger** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No sluggish animations delaying typing.**
- ❌ **No messy multi-colored text clutter.**
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
| `--bg-base` | `#0E1621` | Canvas / Base background layer |
| `--surface-card` | `#17212B` | Elevation 1 container surface |
| `--border-hairline` | `#242F3D` | 1px boundary line |
| `--accent-primary` | `#2EA6FF` | Primary interactive & highlight focus |
| `--text-primary` | `#F5F5F5` | Headings & high-contrast body copy |
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
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #242F3D`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### SPEED: Sub-10ms UI Responsiveness
Zero heavy DOM nesting, instant bubble rendering.
*(Metadata: `LATENCY: 5MS`)*

### BUBBLE: 12px Asymmetrical Bubbles
Subtle tails directing sender/receiver speech rhythm.
*(Metadata: `RADIUS: 12PX`)*

### SKY BLUE: Vibrant Cyan Badge
Clean read checkmarks (✓✓) and channel follower pills.
*(Metadata: `#2EA6FF`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #2EA6FF, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #17212B, border 1px solid #242F3D, text #FFFFFF`
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
  --theme-id: "telegram";
  --theme-name: "Telegram Minimal Messenger";
  --bg-base: #0E1621;
  --surface-card: #17212B;
  --border-hairline: #242F3D;
  --accent-primary: #2EA6FF;
  --text-primary: #F5F5F5;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="telegram"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="telegram"] h1,
body[data-theme="telegram"] h2,
body[data-theme="telegram"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="telegram"] .card,
body[data-theme="telegram"] .panel {
  background: var(--surface-card);
  border: 1px solid #242F3D;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Telegram Minimal Messenger
Role: Principal Frontend Systems Architect specialized in the Telegram Minimal Messenger design language.
Origin Repository: telegramdesktop/tdesktop (https://core.telegram.org)

## Visual Directives:
1. Palette: Canvas must be #0E1621, Surfaces #17212B, Accents #2EA6FF.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #242F3D.
3. Typography: Heading stack is -apple-system, sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 가벼운 성능, 빠른 로딩, 네이티브 말풍선 라운드(12px) 감성. Form follows function with mathematical discipline.
5. Strict Negative Rules: No sluggish animations delaying typing. No messy multi-colored text clutter. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
