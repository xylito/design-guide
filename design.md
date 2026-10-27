# 🏛️ DESIGN.MD — Hallmark Anti-AI-Slop Design Governance
> **Origin & Philosophy:** Inspired by [Nutlope/hallmark](https://github.com/Nutlope/hallmark)  
> **Target Audience:** All AI Coding Agents (Cursor, Claude Code, Antigravity, OpenCode) & Frontend Engineers  
> **Core Mandate:** Eradicate generic "AI Slop" — template-driven predictability, illegible contrast failures, and superficial gradients.

---

## 1. Core Architecture: Materials, Not Templates

1. **소재(Material) 우선 원칙**:
   - 테마는 고정된 페이지 레이아웃(Template)이 아니라, 타이포그래피 비율, 여백 리듬, 표면(Surface) 질감, 경계선(Border), 명도 대비가 정의된 **소재(Material)**다.
   - 동일한 테마(예: Cobalt, Studio, Swiss)라도 페이지나 컴포넌트의 본질적 목적(Job-to-be-done)에 따라 레이아웃 구조는 완전히 달라져야 한다.

2. **색상 쌍(Paired Token) 계약**:
   - 컴포넌트나 컨테이너에 배경색(`background-color`)을 부여할 때, 그 위의 전경 텍스트 색상(`color`)을 반드시 1:1 세트로 함께 선언한다.
   - 단독 `background` 오버라이드로 인해 자식 텍스트가 배경색과 동일해져 보이지 않는 버그를 절대 허용하지 않는다.

---

## 2. 3-Tier Quality Gates (품질 검증 3단계)

```
┌────────────────────────────────────────────────────────┐
│  [1. Floor Gate]   절대 배포 불가 (하한선 위반)         │
├────────────────────────────────────────────────────────┤
│  [2. Reflex Gate]  기본 회피 패턴 (AI 클리셰 경고)      │
├────────────────────────────────────────────────────────┤
│  [3. Finish Gate]  크래프트 & 마이크로 완성도           │
└────────────────────────────────────────────────────────┘
```

### 2.1 The Floor Gate (Never Ships — 위반 시 즉각 중단)
- [ ] **WCAG AA 명도 대비 (4.5:1 이상)**:
  - 본문 텍스트, 라벨, 버튼 텍스트는 배경과의 명도 대비율이 반드시 **4.5:1 이상**이어야 한다.
  - 대형 헤드라인(18pt 이상 볼드)은 최소 **3:1 이상**을 만족해야 한다.
- [ ] **반응형 뷰포트 무결성**:
  - 모바일(320px ~ 480px) 뷰포트에서 의도치 않은 가로 스크롤(Horizontal Overflow)이 발생하지 않아야 한다.
- [ ] **키보드 접근성**:
  - 모든 대화형 인터랙티브 요소(버튼, 링크, 입력창)는 `focus-visible` 링이 명확히 보여야 한다.
- [ ] **가짜 데이터 날조 금지**:
  - "99.9% 무중단", "10배 빠른 속도" 같은 허구의 수치를 임의로 생성하지 않는다. 실제 컨텍스트나 기획서에 있는 진짜 데이터만 표기한다.

### 2.2 The Reflex Gate (Defaults to Avoid — 모델의 무의식적 습관 금지)
- [ ] **Eyebrow 배지 남발 금지**:
  - 헤딩 위에 관습적으로 붙이는 `✨ AI POWERED`, `FEATURE v1.0` 같은 자간 넓은 영문 대문자 알약 배지를 기계적으로 달지 않는다.
- [ ] **헤드라인 단어 1개 강조 금지**:
  - `Build software [faster] with us`처럼 제목의 단어 하나만 다른 색상이나 그라디언트로 칠하는 진부한 AI 클리셰를 피한다.
- [ ] **단조로운 3단 대칭 카드 탈피**:
  - 콘텐츠를 무조건 3개의 동일한 아이콘 카드로 쪼개지 않는다. 내용의 성격에 맞춰 2단 비교, 거대 지표, 스토리 타임라인 등으로 레이아웃을 다변화한다.
- [ ] **뜬금없는 이메일 구독 폼 금지**:
  - 페이지 하단에 맥락 없이 뉴스레터/이메일 입력창을 박아넣지 않는다.

### 2.3 The Finish Gate (Craft & Polish — 디테일 완성도)
- [ ] **터치 타깃 크기**: 모바일 터치 요소는 최소 44x44px의 히트 영역을 확보한다.
- [ ] **마이크로 인터랙션**: 호버, 클릭, 포커스 상태 전환 시 150ms ~ 200ms 내외의 부드러운 트랜지션을 적용한다.
- [ ] **타이포그래피 계층**: 한 화면에서 서체 크기/웨이트 단계는 최대 3~4단계를 넘지 않도록 절제한다.
- [ ] **의사결정 기록 (Picks Block)**: 주요 CSS 파일 최상단에 테마, 폰트, 팔레트 선택 근거를 주석(`/* PICKS: ... */`)으로 명시한다.

---

## 3. Hallmark 48 Materials Reference Table

| Material | Category | Mood & Texture | Key Fonts |
| :--- | :--- | :--- | :--- |
| **Cobalt** | Modern Dev | 딥 블루 오프블랙, 일렉트릭 블루 액센트, 고정밀 1px 헤어라인 | Inter, JetBrains Mono |
| **Studio** | Creative Minimal | 순백 캔버스, 매트 블랙, 볼드 산세리프, 예술 포트폴리오 감성 | Plus Jakarta Sans |
| **Dusk** | Atmospheric Dark | 차콜 베이스, 웜 앰버 하이라이트, 부드러운 다크모드 리듬 | Geist Sans |
| **Swiss** | Typographic Grid | 철저한 그리드, 극단적 비대칭, 헬베티카 볼드, 흑백 콘트라스트 | Inter Display, Helvetica |
| **Terminal** | Cyber Monospace | 그린 앰버 인광(Phosphor), 매트릭스 CLI 계기판 | Fira Code, JetBrains Mono |
| **Editorial** | Classic Print | 샴페인 크림 배경, 고전 세리프, 문학 잡지 및 롱폼 아티클 | Playfair, Georgia |
