# DESIGN.md — Toss TDS (핀테크 스쿼클) Design System Specification
> **Preset #7 of 62** | **Category:** 💼 2. Modern SaaS & FinTech (모던 스탠다드)  
> **Source Repository:** [toss/slash](https://github.com/toss/slash)  
> **Official Docs / Reference:** [https://slash.page/ko/libraries/common/slash](https://slash.page/ko/libraries/common/slash)  
> **Ecosystem Popularity:** ⭐ `6.8k` | **Tags:** `Squircle`, `Spring Motion`, `Toss Blue`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      toss                                        │
│  Design System: Toss TDS (핀테크 스쿼클)                          │
│  Archetype:     Tactile Squircle & Spring                   │
│  Nav Brand:     toss·core                                   │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
부드러운 28px 스쿼클 곡률과 기분 좋은 스프링 인터랙션
- **Ultra-smooth squircle cards with 28px radius.**
- **Tactile spring feedback cubic-bezier(0.34, 1.56, 0.64, 1).**
- **Signature Toss Blue #3182F6 and gentle white elevation.**

### 1.2 Role in AI Agent Codebases
사용자 친화적이고 직관적인 모바일 휴머니스트 터치 인터페이스 유도
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Toss TDS (핀테크 스쿼클)** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No sharp corners (0px) or industrial grids.**
- ❌ **No cold intimidating financial jargon.**
- ❌ **Specific Anti-AI Directive:** Never use sharp corners (0px) or industrial grids. Maintain friendly Korean FinTech humanism.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#F2F4F6` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `rgba(0,0,0,0.04)` | 1px boundary line |
| `--accent-primary` | `#3182F6` | Primary interactive & highlight focus |
| `--text-primary` | `#191F28` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Plus Jakarta Sans', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Pretendard Variable (프리텐다드 9단계 굵기 볼드)`
- **Typographic Fallback Rationale:** 토스의 시그니처 볼드 타이포그래피와 모바일 스쿼클 위계에 가장 자연스럽게 녹아드는 프리텐다드 9단계 웨이트 페어링
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `24px ~ 28px continuous squircle`
- **Border Treatment:** `1px solid rgba(0, 0, 0, 0.04)`
- **Elevation & Shadow:** `0 4px 20px rgba(0, 0, 0, 0.04)`

### 4.2 Structural Features & Micro-Interactions
### 무료 송금: 수수료 평생 0원
복잡한 인증서 없이 터치 한 번으로 끝나는 즉시 송금.
*(Metadata: `0원 수수료`)*

### 신용 분석: 실시간 신용점수 올리기
공과금 납부 내역 제출로 신용도를 즉시 상향 관리.
*(Metadata: `+35점 상승`)*

### 자산 연결: 모든 계좌 한눈에 보기
은행, 증권, 카드 잔액을 한곳에 모아 직관적으로 표시.
*(Metadata: `실시간 연동`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #3182F6, text #FFFFFF, 24px squircle, spring motion cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Secondary / Ghost Button:**
  - Specification: `Background #F2F4F6, text #191F28, 24px squircle, no border`
- **Micro-Interaction:** Smooth 150ms state transition (`filter: brightness(1.08)` on hover, `transform: scale(0.98)` on active press).

### 5.2 Cards & Surface Containers
- Surface is strictly separated from canvas using `var(--surface-card)` and `1px solid var(--border-hairline)`.
- Corner curvature must strictly adhere to `24px ~ 28px continuous squircle`.
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
  --theme-id: "toss";
  --theme-name: "Toss TDS (핀테크 스쿼클)";
  --bg-base: #F2F4F6;
  --surface-card: #FFFFFF;
  --border-hairline: rgba(0,0,0,0.04);
  --accent-primary: #3182F6;
  --text-primary: #191F28;
  --font-heading: 'Plus Jakarta Sans', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 24px;
}

body[data-theme="toss"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="toss"] h1,
body[data-theme="toss"] h2,
body[data-theme="toss"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="toss"] .card,
body[data-theme="toss"] .panel {
  background: var(--surface-card);
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Toss TDS (핀테크 스쿼클)
Role: Principal Frontend Systems Architect specialized in the Toss TDS (핀테크 스쿼클) design language.
Origin Repository: toss/slash (https://slash.page/ko/libraries/common/slash)

## Visual Directives:
1. Palette: Canvas must be #F2F4F6, Surfaces #FFFFFF, Accents #3182F6.
2. Geometry: Border radius must strictly be 24px ~ 28px continuous squircle. Border treatment: 1px solid rgba(0, 0, 0, 0.04).
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 부드러운 28px 스쿼클 곡률과 기분 좋은 스프링 인터랙션. Form follows function with mathematical discipline.
5. Strict Negative Rules: No sharp corners (0px) or industrial grids. No cold intimidating financial jargon. Never use sharp corners (0px) or industrial grids. Maintain friendly Korean FinTech humanism.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
