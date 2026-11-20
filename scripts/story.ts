/**
 * 写「小念 × 爸爸」生物文章的小工具：
 *   npm run story:todo                 按主题列出哪些课已经手写、哪些还是自动装配
 *   npm run story:new -- <slug>        生成 src/learning/stories/<slug>.ts 草稿并登记
 *   npm run story:check -- [slug...]   按写作规矩检查
 *   npm run story:frames -- <slug>     把讲解动画每场切三帧排成联系表
 *   npm run story:sims -- <sim...>     把互动图排成联系表检查
 */
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { cleanHook } from '../src/learning/article';
import { findLesson, lessons, unitLessons } from '../src/learning/catalog';
import { units } from '../src/learning/curriculum';
import { totalDuration } from '../src/learning/film/engine';
import { renderStage } from '../src/learning/film/stage';
import { stories } from '../src/learning/stories';
import { storyProblems } from '../src/learning/stories/rules';
import { simNames, simParams, simSnapshot, type SimName } from '../src/learning/sims';
import type { Story } from '../src/learning/stories/types';
import { speakable } from '../src/learning/voice';
import { clipHash, wantedClips } from './voice-clips';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const storyDir = join(root, 'src', 'learning', 'stories');
const [command, ...args] = process.argv.slice(2);

const camel = (slug: string): string => slug.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());
const quote = (text: string): string => `'${text.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ')}'`;

function summary(story: Story): string {
  const figures = story.dialogue.filter(turn => turn.figure).length;
  const film = story.film ? `🎬 ${story.film.scenes.length} 场 ${totalDuration(story.film)} 秒` : '无动画';
  return `${story.dialogue.length} 轮 · ${figures} 张图 · ${film}`;
}

function todo(): void {
  let written = 0;
  for (const unit of units) {
    const list = unitLessons(unit.id);
    const done = list.filter(lesson => lesson.story).length;
    written += done;
    console.log(`\n${unit.emoji} ${unit.title}（${unit.id}）  已手写 ${done}/${list.length}`);
    for (const lesson of list) {
      const kind = lesson.story ? (lesson.story.film ? '🎬 有动画' : '🖼️ 图解') : '自动装配 · 🔬 3D 实验台';
      console.log(`  ${lesson.story ? '✅' : '⏳'} ${lesson.slug.padEnd(24)} ${lesson.level} · ${kind} · ${lesson.title}`);
    }
  }
  console.log(`\n共 ${lessons.length} 题，已手写 ${written} 篇。挑一题：npm run story:new -- <slug>`);
}

function scaffold(slug: string | undefined): void {
  if (!slug) throw new Error('用法：npm run story:new -- <slug>（slug 见 npm run story:todo）');
  const lesson = findLesson(slug);
  if (!lesson) throw new Error(`curriculum.ts 里没有 ${slug}；先在 lessonPlan 里加这节课`);
  const file = join(storyDir, `${slug}.ts`);
  if (existsSync(file)) throw new Error(`已经有 src/learning/stories/${slug}.ts 了，直接改它`);

  const name = camel(slug);
  const turns = lesson.article.turns.map((turn, i) => {
    const source = lesson.dialogue[i];
    const lines = [`      nian: ${quote(turn.nian)},`, `      dad: ${quote([turn.lead, turn.dad].filter(Boolean).join(''))},`];
    if (turn.eq) lines.push(`      eq: ${quote(turn.eq)},`);
    if (source?.stepIndex !== undefined) lines.push(`      show: { kind: 'lab', step: ${source.stepIndex}, label: ${quote(`看「${source.tag}」`)} },`);
    lines.push(`      // figure: { kind: 'sim', sim: '', caption: '' },`);
    return `    {\n${lines.join('\n')}\n    },`;
  });
  writeFileSync(file, `import type { Story } from './types';

export const ${name}: Story = {
  slug: ${quote(slug)},
  title: ${quote(lesson.article.title)},
  trigger: ${quote(cleanHook(lesson.hook))},
  dialogue: [
${turns.join('\n')}
  ],
  tip: ${quote(lesson.article.tip)},
  sources: [{ title: '', by: '', url: '' }],
  film: { scenes: [{ turn: 0, title: '', duration: 10, cues: [] }] },
};
`);

  const indexFile = join(storyDir, 'index.ts');
  const source = readFileSync(indexFile, 'utf8');
  const lines = source.split('\n');
  const imports = lines.filter(line => line.startsWith('import '));
  imports.push(`import { ${name} } from './${slug}';`);
  const modulePath = (line: string): string => /from '(.+)'/.exec(line)?.[1] ?? '';
  imports.sort((a, b) => modulePath(a).localeCompare(modulePath(b)));
  const rest = lines.filter(line => !line.startsWith('import ')).join('\n');
  const listed = rest
    .replace('export const stories: readonly Story[] = [];', 'export const stories: readonly Story[] = [\n];')
    .replace(/(export const stories: readonly Story\[\] = \[[\s\S]*?)\n\];/, `$1\n  ${name},\n];`);
  writeFileSync(indexFile, `${imports.join('\n')}\n${listed}`);
  console.log(`已生成 src/learning/stories/${slug}.ts 并登记到 stories/index.ts。`);
}

function warnings(story: Story): string[] {
  const notes: string[] = [];
  if (story.film) {
    const manifestFile = join(root, 'src', 'data', 'voice-manifest.json');
    const saved = existsSync(manifestFile) ? (JSON.parse(readFileSync(manifestFile, 'utf8')) as { clips: Record<string, { hash: string }> }).clips : {};
    const stale = [...wantedClips()].filter(([key, clip]) => clip.slug === story.slug
      && (saved[key]?.hash !== clipHash(clip.who, clip.text) || !existsSync(join(root, 'public', 'voice', `${key}.mp3`))));
    if (stale.length) notes.push(`${stale.length} 句还没配音或文字改过了：npm run voice -- ${story.slug}`);
  }
  if (!story.film) return notes;
  story.dialogue.forEach((turn, i) => {
    for (const who of ['nian', 'dad'] as const) {
      const odd = speakable(turn[who]).replace(/DNA|RNA|ATP/g, '').match(/[₀-₉⁰-⁹⁺⁻]|[A-Za-z]{2,}/g);
      if (odd) notes.push(`第 ${i + 1} 轮${who === 'nian' ? '小念' : '爸爸'}的话里「${[...new Set(odd)].join(' ')}」念不顺：换成名字，或在 voice.ts 的 speakable() 里补读法`);
    }
  });
  return notes;
}

const PREVIEW_DIR = join(root, '.story-preview');

function findBrowser(): string | undefined {
  const candidates = [
    process.env.CHROME_PATH,
    `${process.env['ProgramFiles(x86)']}\\Microsoft\\Edge\\Application\\msedge.exe`,
    `${process.env.ProgramFiles}\\Microsoft\\Edge\\Application\\msedge.exe`,
    `${process.env.ProgramFiles}\\Google\\Chrome\\Application\\chrome.exe`,
    `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/microsoft-edge',
  ];
  return candidates.find((path): path is string => Boolean(path) && existsSync(path!));
}

function screenshot(page: string, png: string, width: number, height: number): void {
  const browser = findBrowser();
  if (!browser) {
    console.log('没找到 Edge / Chrome，直接用浏览器打开上面的 HTML 看；或设置 CHROME_PATH 再跑一次出 PNG。');
    return;
  }
  spawnSync(browser, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', `--user-data-dir=${join(PREVIEW_DIR, '.browser')}`,
    `--window-size=${width},${Math.ceil(height)}`, `--screenshot=${png}`, pathToFileURL(page).href], { stdio: 'ignore', timeout: 60000 });
  console.log(existsSync(png) ? `截图：${png}` : '截图没出来，直接用浏览器打开上面的 HTML 看。');
}

function frames(slug: string | undefined): void {
  if (!slug) throw new Error('用法：npm run story:frames -- <slug>');
  const story = stories.find(item => item.slug === slug);
  if (!story) throw new Error(`stories/index.ts 里没有 ${slug}`);
  if (!story.film) throw new Error(`${slug} 没有讲解动画`);
  const { scenes } = story.film;
  const width = 400;
  const rows = scenes.map((scene, index) => {
    const moments = [0.35, 0.7, 1].map(share => Math.max(0.5, Math.min(scene.duration - 0.35, scene.duration * share)));
    const cells = moments.map(t => `<figure><figcaption>${index + 1}. 第 ${scene.turn + 1} 轮 · ${t.toFixed(1)} 秒</figcaption>`
      + `<div class="film-screen"><div class="film-stage">${renderStage(scene, t, { number: index + 1, isLast: index === scenes.length - 1, stageWidth: width, id: `f${index}-${moments.indexOf(t)}` })}</div></div></figure>`);
    return `<section>${cells.join('')}</section>`;
  });
  const css = ['public/theme/tokens.css', 'src/learning/learning.css'].map(file => readFileSync(join(root, file), 'utf8')).join('\n');
  mkdirSync(PREVIEW_DIR, { recursive: true });
  const page = join(PREVIEW_DIR, `${slug}-frames.html`);
  writeFileSync(page, `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>${slug} 动画联系表</title><style>${css}
body { margin: 0; padding: 12px; background: var(--cv-bg); font: 13px/1.4 var(--cv-font); color: var(--cv-text); }
h1 { margin: 0 0 10px; font-size: 18px; }
section { display: grid; grid-template-columns: repeat(3, ${width}px); gap: 10px; margin-bottom: 10px; }
figure { margin: 0; } figcaption { margin-bottom: 3px; color: var(--cv-muted); }
.film-stage { cursor: default; border: 1px solid var(--cv-border); }
</style><body class="learning-app"><h1>${story.title}（${scenes.length} 场 · ${totalDuration(story.film)} 秒）</h1>${rows.join('')}</body></html>`);
  console.log(`联系表：${page}`);
  screenshot(page, join(PREVIEW_DIR, `${slug}-frames.png`), width * 3 + 44, 60 + scenes.length * (width * 0.75 + 32));
}

function simSheet(names: string[]): void {
  const unknown = names.filter(name => !simNames.includes(name as SimName));
  if (!names.length || unknown.length) throw new Error(`用法：npm run story:sims -- <sim...>，可选：${simNames.join('、')}`);
  const width = 460;
  let cells = 0;
  const rows = (names as SimName[]).map(name => {
    const params = simParams(name);
    const shots: { note: string; values: Record<string, number>; t?: number }[] = [
      { note: '默认', values: {} },
      { note: '默认 · 0.6 秒', values: {}, t: 0.6 },
      { note: '默认 · 2.5 秒', values: {}, t: 2.5 },
      ...params.flatMap(p => [p.min, p.max].map(value => ({
        note: `${p.label} = ${p.labels ? p.labels[Math.round(value)] : `${value}${p.unit ?? ''}`}`,
        values: { [p.key]: value },
      }))),
    ];
    cells = Math.max(cells, shots.length);
    const figures = shots.map(({ note, values, t }) => {
      const { svg, readout } = simSnapshot(name, values, t);
      return `<figure><figcaption><b>${note}</b></figcaption>${svg}<p>${readout}</p></figure>`;
    });
    return `<h2>${name}</h2><section>${figures.join('')}</section>`;
  });
  const css = ['public/theme/tokens.css', 'src/learning/learning.css'].map(file => readFileSync(join(root, file), 'utf8')).join('\n');
  mkdirSync(PREVIEW_DIR, { recursive: true });
  const tag = names.length > 3 ? `${names.length}` : names.join('-');
  const page = join(PREVIEW_DIR, `sims-${tag}.html`);
  const columns = 3;
  writeFileSync(page, `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>互动图联系表</title><style>${css}
body { margin: 0; padding: 12px; background: var(--cv-bg); font: 13px/1.45 var(--cv-font); color: var(--cv-text); }
h2 { margin: 8px 0 6px; font-size: 16px; }
section { display: grid; grid-template-columns: repeat(${columns}, ${width}px); gap: 10px; }
figure { margin: 0; padding: 6px; background: #fff; border: 1px solid var(--cv-border); border-radius: 10px; }
figcaption { margin-bottom: 3px; color: var(--cv-muted); } p { margin: 4px 0 0; color: var(--cv-text-2); }
</style><body class="learning-app">${rows.join('')}</body></html>`);
  console.log(`联系表：${page}`);
  const perRow = Math.ceil(cells / columns);
  screenshot(page, join(PREVIEW_DIR, `sims-${tag}.png`), columns * (width + 10) + 34, 40 + names.length * (36 + perRow * (width * 0.57 + 100)));
}

function check(slugs: string[]): void {
  const targets = slugs.length ? slugs : stories.map(story => story.slug);
  let failed = 0;
  for (const slug of targets) {
    const story = stories.find(item => item.slug === slug);
    if (!story) {
      failed += 1;
      const hint = existsSync(join(storyDir, `${slug}.ts`)) ? '文件在，但还没登记到 stories/index.ts' : `还没写，先 npm run story:new -- ${slug}`;
      console.log(`❌ ${slug}  ${hint}`);
      continue;
    }
    const problems = storyProblems(story, findLesson(slug));
    if (problems.length) failed += 1;
    console.log(`${problems.length ? '❌' : '✅'} ${slug}  ${summary(story)}`);
    for (const problem of problems) console.log(`   - ${problem}`);
    for (const note of warnings(story)) console.log(`   ⚠️ ${note}`);
  }
  console.log(failed ? `\n${failed} 篇没过，改完再跑一次。` : `\n${targets.length} 篇全部通过。`);
  if (failed) process.exitCode = 1;
}

try {
  if (command === 'todo') todo();
  else if (command === 'new') scaffold(args[0]);
  else if (command === 'check') check(args);
  else if (command === 'frames') frames(args[0]);
  else if (command === 'sims') simSheet(args);
  else throw new Error('用法：story todo | story new <slug> | story check [slug...] | story frames <slug> | story sims <sim...>');
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
