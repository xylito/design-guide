// Hallmark 48종(design-systems/hallmark_*/DESIGN.md)의 토큰으로 사이트 테마 CSS를 만든다.
// 쓰는 법: node scripts/gen-hallmark-css.mjs  → styles/hallmark-themes.css
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dir = path.join(root, 'design-systems');
const tok = (t, n) => { const m = t.match(new RegExp('--color-' + n + ':\\s*([^;]+);')); return m ? m[1].trim() : null; };
const fm = (t, k) => (t.match(new RegExp('\\n' + k + ':\\s*([^\\n]+)')) || [])[1] || '';
let css = '/* 자동 생성: scripts/gen-hallmark-css.mjs — Hallmark 머티리얼 48종 사이트 테마 */\n';
for (const d of fs.readdirSync(dir).filter((x) => x.startsWith('hallmark_')).sort()) {
  const t = fs.readFileSync(path.join(dir, d, 'DESIGN.md'), 'utf8');
  const paper = tok(t, 'paper'), paper2 = tok(t, 'paper-2') || paper, paper3 = tok(t, 'paper-3') || paper2, ink = tok(t, 'ink'), ink2 = tok(t, 'ink-2') || ink;
  const muted = tok(t, 'muted') || ink2, accent = tok(t, 'accent') || ink, accentInk = tok(t, 'accent-ink') || paper, rule = tok(t, 'rule') || muted, focus = tok(t, 'focus') || accent;
  if (!paper || !ink) { console.warn('토큰 없음:', d); continue; }
  const name = fm(t, 'name').trim(), mat = fm(t, 'material');
  const display = fm(t, 'display').replace(/^[\w-]+\s+/, '').split(/\s+and\s+|,/)[0].trim();
  const serif = /serif/i.test(fm(t, 'display')) && !/sans/i.test(fm(t, 'display'));
  const square = /square corners|zero radius|square/i.test(mat + t.slice(0, 1500));
  const r = square ? '0px' : /pill|round/i.test(mat) ? '18px' : '8px';
  const head = `'${display}', ${serif ? "'Noto Serif KR', Georgia, serif" : "'Pretendard Variable', 'Noto Sans KR', sans-serif"}`;
  const S = `body[data-theme="${d}"]`;
  css += `
${S} {
  background-color: ${paper}; color: ${ink};
  --theme-id: "${d}"; --theme-name: "Hallmark ${name}";
  --bg-base: ${paper}; --surface-card: ${paper2}; --surface-elevated: ${paper3};
  --border-hairline: ${rule}; --accent-primary: ${accent}; --accent-ink: ${accentInk};
  --text-primary: ${ink}; --text-secondary: ${ink2}; --text-muted: ${muted};
  --font-heading: ${head}; --font-body: 'Pretendard Variable', 'Noto Sans KR', sans-serif; --font-mono: 'JetBrains Mono', 'D2Coding', monospace;
  --theme-radius: ${r};
  font-family: var(--font-body);
}
${S} .site-header { background: ${paper}; border-bottom: 1px solid ${rule}; color: ${ink}; }
${S} h1, ${S} h2, ${S} h3 { font-family: var(--font-heading); color: ${ink}; }
${S} .btn-primary { background: ${accent}; color: ${accentInk}; border: 1px solid ${accent}; border-radius: ${r}; box-shadow: none; }
${S} .btn-secondary { background: ${paper2}; color: ${ink}; border: 1px solid ${rule}; border-radius: ${r}; box-shadow: none; }
${S} .feature-card, ${S} .card, ${S} .component-card, ${S} .repo-card, ${S} .hero-showcase-panel, ${S} .sandbox-card, ${S} .manifesto-card { background: ${paper2}; color: ${ink}; border: 1px solid ${rule}; border-radius: ${r}; box-shadow: none; }
${S} a { color: ${accent}; }
${S} :focus-visible { outline: 2px solid ${focus}; outline-offset: 2px; }
${S} input, ${S} select, ${S} textarea { background: ${paper}; color: ${ink}; border: 1px solid ${rule}; border-radius: ${r}; }
`;
}
fs.writeFileSync(path.join(root, 'styles', 'hallmark-themes.css'), css);
console.log('만든 테마:', (css.match(/--theme-id/g) || []).length);
