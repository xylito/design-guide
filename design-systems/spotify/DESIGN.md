# DESIGN.md — Spotify Wrapped Vibrant Dark Design System Specification
> **Preset #52 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [spotify/web-api](https://github.com/spotify/web-api)  
> **Official Docs / Reference:** [https://developer.spotify.com](https://developer.spotify.com)  
> **Ecosystem Popularity:** ⭐ `14.2k` | **Tags:** `Spotify`, `Neon Green`, `Wrapped`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      spotify                                     │
│  Design System: Spotify Wrapped Vibrant Dark                │
│  Archetype:     Vibrant Streaming Dark                      │
│  Nav Brand:     SPOTIFY.MUSIC                               │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
암흑 배경 위 네온 그린(#1DB954)과 핫핑크 그라데이션의 몰입감
- **Pure pitch black #121212 foundation.**
- **High-voltage Spotify Green #1DB954 accents.**
- **Card focus centered strictly on rich multimedia previews.**

### 1.2 Role in AI Agent Codebases
미디어 스트리밍 및 엔터테인먼트 앱에서 시선을 사로잡는 하이엔드 다크 바이브 주입
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Spotify Wrapped Vibrant Dark** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No bland gray-on-gray monotony.**
- ❌ **No small difficult-to-tap targets.**
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
| `--bg-base` | `#121212` | Canvas / Base background layer |
| `--surface-card` | `#181818` | Elevation 1 container surface |
| `--border-hairline` | `#282828` | 1px boundary line |
| `--accent-primary` | `#1DB954` | Primary interactive & highlight focus |
| `--text-primary` | `#FFFFFF` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Space Grotesk', 'GmarketSansBold', 'Plus Jakarta Sans', sans-serif`
- **Body & UI Font Stack:** `'Plus Jakarta Sans', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `GmarketSansBold (지마켓산스 기하학 볼드) / Pretendard Variable`
- **Typographic Fallback Rationale:** 스포티파이의 시그니처 폰트 Circular의 기하학적 원형(O, ㅇ) 곡률을 한글 GmarketSansBold로 완벽하게 대응
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #282828`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### AUDIO: High-Contrast Neon
Spotify Green #1DB954 exploding over true pitch black.
*(Metadata: `ENERGY: MAX`)*

### MEDIA: Album Art Centric
Dynamic color blooming matched to active track metadata.
*(Metadata: `BLOOM: ON`)*

### PILL: Smooth Capsule Targets
Fully rounded action buttons designed for thumb accuracy.
*(Metadata: `TOUCH: 48PX`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #1DB954, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #181818, border 1px solid #282828, text #FFFFFF`
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
  --theme-id: "spotify";
  --theme-name: "Spotify Wrapped Vibrant Dark";
  --bg-base: #121212;
  --surface-card: #181818;
  --border-hairline: #282828;
  --accent-primary: #1DB954;
  --text-primary: #FFFFFF;
  --font-heading: 'Space Grotesk', 'GmarketSansBold', 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Plus Jakarta Sans', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="spotify"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="spotify"] h1,
body[data-theme="spotify"] h2,
body[data-theme="spotify"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="spotify"] .card,
body[data-theme="spotify"] .panel {
  background: var(--surface-card);
  border: 1px solid #282828;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Spotify Wrapped Vibrant Dark
Role: Principal Frontend Systems Architect specialized in the Spotify Wrapped Vibrant Dark design language.
Origin Repository: spotify/web-api (https://developer.spotify.com)

## Visual Directives:
1. Palette: Canvas must be #121212, Surfaces #181818, Accents #1DB954.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #282828.
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 암흑 배경 위 네온 그린(#1DB954)과 핫핑크 그라데이션의 몰입감. Form follows function with mathematical discipline.
5. Strict Negative Rules: No bland gray-on-gray monotony. No small difficult-to-tap targets. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
