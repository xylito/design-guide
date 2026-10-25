# DESIGN.md — Stripe Mobile SDK Design System Specification
> **Preset #14 of 62** | **Category:** 💼 2. Modern SaaS & FinTech (모던 스탠다드)  
> **Source Repository:** [stripe/stripe-react-native](https://github.com/stripe/stripe-react-native)  
> **Official Docs / Reference:** [https://stripe.com/docs/payments/accept-a-payment?platform=react-native](https://stripe.com/docs/payments/accept-a-payment?platform=react-native)  
> **Ecosystem Popularity:** ⭐ `6.4k` | **Tags:** `Stripe Mobile`, `Checkout`, `10px Radius`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      stripe_mobile                               │
│  Design System: Stripe Mobile SDK                           │
│  Archetype:     Mobile Invoice & Checkout                   │
│  Nav Brand:     STRIPE//SDK                                 │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
결제/핀테크 전용 다중 레이어 그림자, 세밀한 입력 폼 검증 상태 표시와 10px 폼
- **10px refined input boxes with clear validation states.**
- **Signature Stripe Indigo #635BFF.**
- **Multi-tier soft shadows projecting credibility.**

### 1.2 Role in AI Agent Codebases
신뢰감 있는 모바일 결제 폼 및 인보이스 승인 프로세스 구축
When an AI agent (Cursor, Claude Code, Gemini CLI, Windsurf) builds interfaces in this style, it must reject generic LLM defaults (unwanted purple gradients, arbitrary card nestings, random pill containers) and strictly adhere to this specification.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

LLMs frequently default to a generic, rounded, low-contrast template (often called "AI Slop"). When implementing the **Stripe Mobile SDK** design language, the following patterns are **EXPLICITLY BANNED**:

- ❌ **No low-contrast confusing forms.**
- ❌ **No flashy distracting arcade themes in payment sheets.**
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
| `--bg-base` | `#F8FAFC` | Canvas / Base background layer |
| `--surface-card` | `#FFFFFF` | Elevation 1 container surface |
| `--border-hairline` | `#E2E8F0` | 1px boundary line |
| `--accent-primary` | `#635BFF` | Primary interactive & highlight focus |
| `--text-primary` | `#0A2540` | Headings & high-contrast body copy |
| `--text-muted` | `rgba(255, 255, 255, 0.65)` | Captions, secondary labels, metadata |

### 3.2 Typography Stack & Latin-Korean Font Pairing
To prevent Korean glyphs from breaking, appearing blurry, or falling back to mismatched default fonts when English fonts are declared, strictly apply this harmonious Latin-Korean paired font stack:

- **Primary Headings Stack:** `'Plus Jakarta Sans', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Body & UI Font Stack:** `'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif`
- **Monospace & Metadata Stack:** `'JetBrains Mono', 'D2Coding', monospace`
- **Paired Korean Typography:** `Pretendard Variable`
- **Typographic Fallback Rationale:** 모바일 결제 폼 전용 프리텐다드 매칭
- **Heading Line Height:** `1.1` ~ `1.2` with tight tracking (`-0.02em`).
- **Body Line Height:** `1.5` ~ `1.65` for maximum legibility.

---

## 📐 4. Geometry, Elevation & Spacing

### 4.1 Boundary & Surface Rules
- **Border Radius:** `8px`
- **Border Treatment:** `1px solid #E2E8F0`
- **Elevation & Shadow:** `0 4px 16px rgba(0, 0, 0, 0.15)`

### 4.2 Structural Features & Micro-Interactions
### FORM: 10px Precision Input Fields
Crisp focus rings with instant regex card format feedback.
*(Metadata: `RADIUS: 10PX`)*

### SHADOW: Multi-Tier Card Elevation
Subtle multi-stop box shadows that ground the payment sheet.
*(Metadata: `SHADOW: L3`)*

### SECURITY: Tokenized Card Vault
End-to-end encrypted biometric confirmation prompts.
*(Metadata: `PCI-DSS`)*


---

## 🧩 5. Component Construction Blueprints

### 5.1 Buttons
- **Primary Action Button:**
  - Specification: `Background #635BFF, text #FFFFFF, 8px radius`
- **Secondary / Ghost Button:**
  - Specification: `Background #FFFFFF, border 1px solid #E2E8F0, text #FFFFFF`
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
  --theme-id: "stripe_mobile";
  --theme-name: "Stripe Mobile SDK";
  --bg-base: #F8FAFC;
  --surface-card: #FFFFFF;
  --border-hairline: #E2E8F0;
  --accent-primary: #635BFF;
  --text-primary: #0A2540;
  --font-heading: 'Plus Jakarta Sans', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-body: 'Inter', 'Pretendard Variable', 'Noto Sans KR', sans-serif;
  --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: 8px;
}

body[data-theme="stripe_mobile"] {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
}

body[data-theme="stripe_mobile"] h1,
body[data-theme="stripe_mobile"] h2,
body[data-theme="stripe_mobile"] h3 {
  font-family: var(--font-heading);
}

body[data-theme="stripe_mobile"] .card,
body[data-theme="stripe_mobile"] .panel {
  background: var(--surface-card);
  border: 1px solid #E2E8F0;
  border-radius: var(--theme-radius);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

---

## 🤖 7. AI Agent System Prompt Injection (.cursorrules / CLAUDE.md)

Copy and paste this exact prompt into your AI coding tool (`CLAUDE.md`, `.cursorrules`, or Antigravity custom rule) to force frontend generation into this design language:

```markdown
# AI Frontend System Rule: Stripe Mobile SDK
Role: Principal Frontend Systems Architect specialized in the Stripe Mobile SDK design language.
Origin Repository: stripe/stripe-react-native (https://stripe.com/docs/payments/accept-a-payment?platform=react-native)

## Visual Directives:
1. Palette: Canvas must be #F8FAFC, Surfaces #FFFFFF, Accents #635BFF.
2. Geometry: Border radius must strictly be 8px. Border treatment: 1px solid #E2E8F0.
3. Typography: Heading stack is 'Plus Jakarta Sans', sans-serif. Body typography must feel intentional with tight tracking.
4. Vibe: 결제/핀테크 전용 다중 레이어 그림자, 세밀한 입력 폼 검증 상태 표시와 10px 폼. Form follows function with mathematical discipline.
5. Strict Negative Rules: No low-contrast confusing forms. No flashy distracting arcade themes in payment sheets. Reject generic purple gradients and arbitrary card nesting. Enforce strict mathematical hierarchy.

Never default to generic purple AI slop. Produce production-grade, highly structured, clean components strictly adhering to this design specification.
```
