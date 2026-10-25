# DESIGN.md — Tremor Analytics Design System Specification
> **Preset #10 of 62** | **Category:** 💼 2. Modern SaaS & FinTech (모던 스탠다드)  
> **Source Repository:** [tremorlabs/tremor](https://github.com/tremorlabs/tremor)  
> **Official Docs / Reference:** [https://tremor.so](https://tremor.so)  
> **Ecosystem Popularity:** ⭐ `16.8k` | **Tags:** `Telemetry`, `Emerald`, `Data-Dense`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      tremor                                      │
│  Design System: Tremor Analytics                            │
│  Archetype:     Data-Dense Dashboard                        │
│  Nav Brand:     TREMOR.ANALYTICS                            │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
정밀한 에메랄드 KPI 지표와 고밀도 분석 대시보드
- **Dark navy background #090E17 with deep slate cards #111827.**
- **Vibrant Emerald #10B981 indicators for positive performance.**
- **High information density without visual clutter.**

### 1.2 Role in AI Agent Codebases
데이터 시각화 시 장식적 요소를 배제하고 메트릭 가독성을 극대화하는 규칙 주입
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Tremor Analytics** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No low-density cartoon cards.**
- ❌ **No bright childish colors without data meaning.**
- ❌ **Specific Anti-AI Directive:** Never omit tabular number alignment (font-variant-numeric: tabular-nums) in analytics.
- ❌ **NEVER** mix unrelated border radii (e.g. putting a 24px round button inside a sharp 0px brutalist card).
- ❌ **NEVER** insert generic purple-to-cyan gradient hero banners unless explicitly specified in the token set.
- ❌ **NEVER** use low-contrast text (contrast ratio must meet WCAG AAA standards on primary reading elements).
- ❌ **NEVER** add decorative nested wrapper divs without semantic layout purpose.

---

## 🎨 3. Design Tokens & Palette

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `--bg-base` | `#090E17` | Canvas / Base background layer |
| `--surface-card` | `#111827` | Elevation 1 container surface |
| `--border-hairline` | `#1F2937` | 1px boundary line |
| `--accent-primary` | `#10B981` | Primary interactive & highlight focus |
| `--text-primary` | `#F3F4F6` | Headings & high-contrast body copy |
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
- **Border Treatment:** `1px solid #1E293B`
- **Elevation & Shadow:** `0 1px 3px 0 rgba(0, 0, 0, 0.2)`

### 4.2 Structural Features & Micro-Interactions
### METRIC 01: Revenue Velocity
$142,850.00 ARR with real-time stream synchronization.
*(Metadata: `+24.8% YOY`)*

### METRIC 02: P99 Compute Latency
Optimistic WebAssembly pipeline resolving in sub-12ms intervals.
*(Metadata: `11.8MS`)*

### METRIC 03: Resource Saturation
Multi-cluster memory headroom running at optimal thresholds.
*(Metadata: `42.1% USAGE`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #3B82F6, text #FFFFFF, 8px radius, tabular numbers formatting`
- **Secondary / Ghost Button:**
  - Specification: `Background #0F172A, border 1px solid #334155, text #E2E8F0`
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
  --theme-id: "tremor";
  --theme-name: "Tremor Analytics";
  --bg-base: #090E17;
  --surface-card: #111827;
  --border-hairline: #1F2937;
  --accent-primary: #10B981;
  --text-primary: #F3F4F6;
  --font-heading: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', 'Nanum Gothic Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="tremor"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="tremor"] h1,
body[data-theme="tremor"] h2,
body[data-theme="tremor"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="tremor"] .card,
body[data-theme="tremor"] .panel {
  background: var(--surface-card);
  border: 1px solid #1E293B;
  border-radius: var(--theme-radius);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Tremor Analytics
Role: Principal Frontend Systems Architect specialized in the Tremor Analytics design language.
Origin Repository: tremorlabs/tremor (https://tremor.so)

## Visual Directives:
1. Palette: Canvas must be #090E17, Surfaces #111827, Accents #10B981.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #1E293B.
3. Typography: Heading stack is 'Inter', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 정밀한 에메랄드 KPI 지표와 고밀도 분석 대시보드. Form follows function with mathematical discipline.
5. Strict Negative Rules: No low-density cartoon cards. No bright childish colors without data meaning. Never omit tabular number alignment (font-variant-numeric: tabular-nums) in analytics.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
