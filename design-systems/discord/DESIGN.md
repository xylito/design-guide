# DESIGN.md — Discord Gamified Chat UI Design System Specification
> **Preset #56 of 62** | **Category:** 🎨 5. Expressive & Retro (질감·서브컬처)  
> **Source Repository:** [discord/discord-api-docs](https://github.com/discord/discord-api-docs)  
> **Official Docs / Reference:** [https://discord.com/branding](https://discord.com/branding)  
> **Ecosystem Popularity:** ⭐ `11.2k` | **Tags:** `Discord`, `Blurple`, `Server Nav`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      discord                                     │
│  Design System: Discord Gamified Chat UI                    │
│  Archetype:     Gaming Community Chat                       │
│  Nav Brand:     discord·chat                                │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
좌측 원형 서버 내비게이션, 블러플(#5865F2), 채널 다크 모드
- **Gaming-friendly deep slate canvas #313338.**
- **Iconic Discord Blurple #5865F2 accent.**
- **Relaxed 8px radius with avatar circular accents.**

### 1.2 Role in AI Agent Codebases
게이머 커뮤니티 및 협업 툴에서 친근하고 편안한 채팅 인터페이스 구성
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Discord Gamified Chat UI** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No blinding white backgrounds in voice/chat context.**
- ❌ **No rigid corporate table grids.**
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
| `--bg-base` | `#313338` | Canvas / Base background layer |
| `--surface-card` | `#2B2D31` | Elevation 1 container surface |
| `--border-hairline` | `#1E1F22` | 1px boundary line |
| `--accent-primary` | `#5865F2` | Primary interactive & highlight focus |
| `--text-primary` | `#DBDEE1` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Plus Jakarta Sans', 'Jua', 'Pretendard Variable', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Gowun Dodum', 'Pretendard Variable', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Jua (주아체 디스코드 커뮤니티 감성) / Gowun Dodum`
- **Typographic Fallback Rationale:** 게이머 및 커뮤니티 채팅의 경쾌하고 친근한 톤앤매너를 위해 볼드 라운드 주아체 페어링
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #1E1F22`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### BLURPLE: Signature Discord Purple
High-contrast action brand color recognizable by gaming subcultures.
*(Metadata: `#5865F2`)*

### SERVER: Circular Icon Dock
Vertical dock with pill hover indicator and server badges.
*(Metadata: `DOCK: LEFT`)*

### CHAT: Embedded Message Blocks
Left-highlighted card bubbles for rich media attachments.
*(Metadata: `EMBED: ON`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #5865F2, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #2B2D31, border 1px solid #1E1F22, text #FFFFFF`
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
  --theme-id: "discord";
  --theme-name: "Discord Gamified Chat UI";
  --bg-base: #313338;
  --surface-card: #2B2D31;
  --border-hairline: #1E1F22;
  --accent-primary: #5865F2;
  --text-primary: #DBDEE1;
  --font-heading: 'Plus Jakarta Sans', 'Jua', 'Pretendard Variable', sans-serif;
  --font-body: 'Inter', 'Gowun Dodum', 'Pretendard Variable', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="discord"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="discord"] h1,
body[data-theme="discord"] h2,
body[data-theme="discord"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="discord"] .card,
body[data-theme="discord"] .panel {
  background: var(--surface-card);
  border: 1px solid #1E1F22;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Discord Gamified Chat UI
Role: Principal Frontend Systems Architect specialized in the Discord Gamified Chat UI design language.
Origin Repository: discord/discord-api-docs (https://discord.com/branding)

## Visual Directives:
1. Palette: Canvas must be #313338, Surfaces #2B2D31, Accents #5865F2.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #1E1F22.
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 좌측 원형 서버 내비게이션, 블러플(#5865F2), 채널 다크 모드. Form follows function with mathematical discipline.
5. Strict Negative Rules: No blinding white backgrounds in voice/chat context. No rigid corporate table grids. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
