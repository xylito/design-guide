# DESIGN.md — Hallmark Anti-AI-Slop Design System Specification
> **Preset #63** | **Category:** 📖 1. Editorial & Print (도면·인쇄물)  
> **Source Repository:** [Nutlope/hallmark](https://github.com/Nutlope/hallmark)  
> **Official Docs / Reference:** [https://usehallmark.com](https://usehallmark.com)  
> **Ecosystem Popularity:** ⭐ `High (Together AI Official)` | **Tags:** `Anti-AI-Slop`, `Floor-Gate`, `Materials-Not-Templates`, `Cobalt`

---

## 🏛️ 1. Architecture Overview & Core Archetype

```
┌──────────────────────────────────────────────────────────────┐
│  Theme ID:      hallmark                                    │
│  Design System: Hallmark Anti-AI-Slop                       │
│  Archetype:     Anti-AI-Slop / Multi-Material Governance    │
│  Nav Brand:     HALLMARK.DEV                                │
└──────────────────────────────────────────────────────────────┘
```

### 1.1 Aesthetic Philosophy
AI가 학습 데이터 분포의 편향으로 인해 기계적으로 배출하는 보라색 그라데이션, 의미 없는 3단 카드, 대문자 배지 알약을 근절하는 디자인 규율.
- **Materials, Not Templates**: 템플릿 복붙을 거부하고 48종 고유 소재를 용도(Job)에 맞게 조립.
- **Strict Quality Gates**: Floor(대비 4.5:1 / 가로 스크롤 방지), Reflex(AI 클리셰 차단), Finish(크래프트 마감).
- **Paired Tokens**: 모든 배경색은 전경 글자색과 반드시 한 쌍으로 계약.

---

## 🚫 2. Anti-AI Slop Mandate (Strict Negative Rules)

- ❌ **No generic purple-to-blue neon gradient backgrounds.**
- ❌ **No uppercase tracked eyebrow badges (`✨ AI-POWERED PLATFORM`) above every headline.**
- ❌ **No single-word colored gradient headline cliches.**
- ❌ **No repetitive, identical 3-card grid layouts.**
- ❌ **No fabricated metrics or placeholder statistics without source data.**
- ❌ **No zero-contrast text failure (WCAG AA 4.5:1 required on all text).**

---

## 🎨 3. Design Tokens & Palette (Featured: Cobalt Material)

### 3.1 Core Color Tokens
| Token Name | Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- |
| `bg` | `#0B0F17` | Canvas background (Deep obsidian slate) |
| `surface` | `#111827` | Card and elevated container surface |
| `border` | `rgba(255, 255, 255, 0.08)` | Hairline container boundary |
| `accent` | `#3B82F6` | Primary electric cobalt accent |
| `accentGlow` | `rgba(59, 130, 246, 0.2)` | Interactive micro-spotlight |
| `textPrimary` | `#F9FAFB` | Primary high-contrast reading text |
| `textMuted` | `#9CA3AF` | Supporting metadata & secondary text |

---

## 🤖 4. Agent System Prompt

```markdown
[DESIGN.md - Hallmark Anti-AI-Slop Archetype]
Role: Senior Anti-Slop Interface Architect (Together AI Hallmark Discipline).
Core Philosophy: Materials over templates. Build UI driven strictly by the user's Job-to-be-done.
Rules:
1. Floor Gate: Enforce WCAG AA 4.5:1 contrast ratio across all foreground-background pairs. Never ship unstyled color pairings.
2. Reflex Gate: Do not add uppercase badge pills above titles. Do not color single words in headlines. No copy-paste 3-card grids.
3. Typography: Clean sans-serif ('Inter', system-ui) paired with monospace metadata ('JetBrains Mono').
```
