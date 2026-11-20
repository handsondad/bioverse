import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import courseDialogues from '../src/data/course-dialogues.json';
import labScriptJson from '../public/theme/lab-script.json';
import { labClipKey, labSpeakable, type LabScript } from '../src/learning/voice';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const adapter = readFileSync(resolve(root, 'public', 'theme', 'lesson-adapter.js'), 'utf8');

type State = Record<string, number | boolean>;

const STEPS = [
  { tag: '认识', q: '台面上有什么？', act: { kind: 'orbit' }, start: { T: 37, on: false }, expect: { text: '试管都在（教材 p.34 的注意框）' }, concl: '教材原话：变量控制（教材原话）', eq: '最适温度 37 ℃' },
  { tag: '温度', q: '教材给了两杯，为什么变蓝？', act: { kind: 'slider', key: 'T', to: 70, demo: 70 }, start: { T: 37, on: false }, expect: { text: '活性下降' }, concl: '高温使酶失活' },
  { tag: '考核', q: '考核', act: { kind: 'hold' }, start: {} },
];

function fakeLab() {
  let current = 0;
  const S: State = { T: 37, on: false };
  return {
    S,
    STEPS,
    renderer: { domElement: { width: 1 } },
    camera: { view: null, setViewOffset: vi.fn(), clearViewOffset: vi.fn() },
    step: () => current,
    goto: vi.fn((index: number) => { current = index; }),
    set: vi.fn((key: string, value: number) => { S[key] = value; }),
    setSwitch: vi.fn((key: string, value: boolean) => { S[key] = value; }),
    reveal: vi.fn(),
    freeRect: () => ({ l: 6, r: 700, t: 12, b: 580 }),
  };
}

const listeners: { type: string; listener: EventListenerOrEventListenerObject }[] = [];
const parentDescriptor = Object.getOwnPropertyDescriptor(window, 'parent') ?? { value: window, configurable: true };
let lab: ReturnType<typeof fakeLab>;
let script: LabScript;

async function load(search: string): Promise<void> {
  window.history.replaceState(null, '', `/lesson.html${search}`);
  new Function(adapter)();
  await vi.advanceTimersByTimeAsync(100);
}

const card = () => document.getElementById('cv-watch')!;
const text = (selector: string) => card().querySelector<HTMLElement>(selector)!;
const action = (label: string) => Array.from(card().querySelectorAll('button')).find(button => button.textContent?.includes(label))!;

describe('lesson adapter watch mode', () => {
  beforeEach(() => {
    window.requestAnimationFrame ??= callback => window.setTimeout(() => callback(performance.now()), 16);
    vi.useFakeTimers();
    const add = window.addEventListener.bind(window);
    vi.spyOn(window, 'addEventListener').mockImplementation((type, listener, options) => {
      listeners.push({ type, listener });
      add(type, listener, options);
    });
    window.matchMedia = vi.fn((query: string) => ({
      matches: query.includes('min-width: 760px'),
      media: query,
      addEventListener() {},
      removeEventListener() {},
    })) as unknown as typeof window.matchMedia;
    document.documentElement.removeAttribute('data-cv-mode');
    document.documentElement.removeAttribute('data-cv-view');
    document.body.innerHTML = `
      <header id="top"><div class="hud"><span class="score">0</span></div></header>
      <nav id="steps"></nav>
      <aside id="left"><div class="pbody"></div></aside>
      <aside id="right"><div class="pbody"><div class="kpi"><div class="lb">相对酶活性</div><div class="vv">100.0</div></div></div></aside>
      <footer id="foot"><div class="nav"></div><span class="note">示意</span></footer>`;
    lab = fakeLab();
    (window as unknown as { __lab: unknown }).__lab = lab;
    script = {};
    vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, json: async () => script })));
  });

  afterEach(() => {
    for (const { type, listener } of listeners.splice(0)) window.removeEventListener(type, listener);
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    Reflect.deleteProperty(window, '__lab');
    document.documentElement.classList.remove('cv-simple', 'cv-show-chart', 'cv-compact');
    Object.defineProperty(window, 'parent', parentDescriptor);
  });

  it('plays authored watch steps and strips textbook citations', async () => {
    await load('?cv-mode=watch&cv-narration=0');
    expect(document.documentElement.dataset.cvMode).toBe('watch');
    expect(card().querySelectorAll('.cvw-dot')).toHaveLength(2);
    expect(text('.cvw-question').textContent).toBe('台面上有什么？');

    await vi.advanceTimersByTimeAsync(4600);
    expect(text('.cvw-seen').textContent).toBe('👀 你看到试管都在');
    expect(text('.cvw-concl').textContent).toBe('💡 所以变量控制');
    expect(lab.reveal).toHaveBeenCalledTimes(1);

    action('下一段').click();
    expect(lab.goto).toHaveBeenLastCalledWith(1);
    expect(text('.cvw-question').textContent).toBe('实验台上摆了两杯，为什么变蓝？');
  });

  it('talks to BioVerse parent window and plays lab voice clips', async () => {
    const host = document.createElement('iframe');
    document.body.append(host);
    const parent = host.contentWindow!;
    const post = vi.spyOn(parent, 'postMessage').mockImplementation(() => {});
    Object.defineProperty(window, 'parent', { value: parent, configurable: true });
    const played: HTMLMediaElement[] = [];
    vi.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(function (this: HTMLMediaElement) {
      played.push(this);
      return Promise.resolve();
    });
    vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => undefined);

    await load('?cv-mode=watch&cv-narration=1');
    expect(post).toHaveBeenCalledWith({ type: 'bioverse:ready' }, '*');
    const avatars = { type: 'bioverse:avatars', nian: '<svg class="avatar"></svg>', dad: '<svg class="avatar"></svg>' };
    window.dispatchEvent(new MessageEvent('message', { data: avatars, source: parent }));
    expect(card().querySelectorAll('.cvw-avatar.has-art svg')).toHaveLength(2);
    expect(played[0].src).toMatch(new RegExp(`/voice/${labClipKey('lesson', 0, 'q', '台面上有什么？')}\\.mp3$`));

    action('我想自己动手').click();
    expect(post).toHaveBeenCalledWith({ type: 'bioverse:mode', mode: 'lab' }, '*');

    window.dispatchEvent(new MessageEvent('message', { data: { type: 'bioverse:play-step', step: 2 }, source: parent }));
    expect(lab.goto).toHaveBeenLastCalledWith(2);
    expect(post).toHaveBeenCalledWith({ type: 'bioverse:step', step: 2 }, '*');
  });

  it('simplifies the free lab bench with BioVerse heading and enzyme unit', async () => {
    document.querySelector('#left')!.insertAdjacentHTML('afterbegin', '<div class="phead"><h2>本步</h2></div>');
    document.querySelector('#right')!.insertAdjacentHTML('afterbegin', '<div class="phead"><h2>中控台</h2></div>');
    window.history.replaceState(null, '', '/lessons/courses/enzyme-step.html?cv-mode=lab&cv-narration=0');
    new Function(adapter)();
    await vi.advanceTimersByTimeAsync(100);
    expect(document.documentElement.classList.contains('cv-simple')).toBe(true);
    expect(document.querySelector('#left h2')!.textContent).toBe('🔬 动手试试');
    expect(document.querySelector('#right h2')!.textContent).toBe('🎛️ 调一调');
    expect(document.querySelector<HTMLElement>('#right .kpi .vv')!.dataset.cvUnit).toBe('%');
  });
});

describe('our own 3D biology lab script', () => {
  const labScript = labScriptJson as unknown as LabScript;
  const steps = courseDialogues as Record<string, readonly { tag: string }[]>;

  it('covers every step of all 5 biology labs in courseware order', () => {
    expect(Object.keys(labScript).sort()).toEqual(Object.keys(steps).sort());
    for (const [slug, lines] of Object.entries(labScript)) {
      expect(lines.map(line => line.tag), slug).toEqual(steps[slug].map(step => step.tag));
      expect(lines.map(line => Boolean(line.hold)), slug).toEqual(lines.map((_, index) => index === lines.length - 1));
    }
  });

  it('talks like 小念 and 爸爸 with no textbook citations and clean speakable text', () => {
    for (const [slug, lines] of Object.entries(labScript)) {
      for (const line of lines) {
        if (line.hold) continue;
        const where = `${slug} · ${line.tag}`;
        expect(line.q, where).toMatch(/？$/);
        expect(line.q.length, where).toBeLessThanOrEqual(40);
        for (const part of [line.seen, line.concl]) expect(part.length, where).toBeLessThanOrEqual(90);
        for (const part of [line.q, line.eq ?? '', line.seen, line.concl]) expect(part, where).not.toMatch(/教材|p\.\s*\d|图\s*\d+\.\d/);
        for (const part of [line.q, line.seen, line.concl]) expect(labSpeakable(part), where).not.toMatch(/[A-Za-z]{2,}|[μΩ₀-₉⁰-⁹]/);
      }
    }
  });
});
