import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { autoArticle } from '../src/learning/article';
import { labs, lessonAsset, lessons, unitLabs, unitLessons, units } from '../src/learning/catalog';
import { getLessonDialogue } from '../src/learning/dialogue';
import { emptyProgress, PROGRESS_KEY, readProgress, writeProgress } from '../src/learning/progress';
import { findStory } from '../src/learning/stories';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(resolve(root, 'index.html'), 'utf8');

describe('biology lesson collection', () => {
  it('sorts everything into 8 biology topics', () => {
    expect(units.map(unit => unit.id)).toEqual(['cells', 'metabolism', 'plants', 'animals', 'body', 'genetics', 'microbes', 'ecology']);
    expect(new Set(units.map(unit => unit.color)).size).toBe(units.length);
    for (const unit of units) {
      expect(unit.emoji).not.toBe('');
      expect(unit.kidHook).toMatch(/？$/);
      expect(unit.dadLens.length).toBeGreaterThan(4);
      expect(unit.question).toMatch(/？$/);
    }
    expect(new Set(lessons.map(lesson => lesson.slug)).size).toBe(lessons.length);
    expect(lessons.every(lesson => units.some(unit => unit.id === lesson.unit))).toBe(true);
  });

  it('fills every topic with researched questions and written stories', () => {
    for (const unit of units) {
      const items = unitLessons(unit.id);
      expect(items.length, unit.id).toBeGreaterThanOrEqual(3);
    }
    expect(lessons.filter(lesson => !lesson.story).map(lesson => lesson.slug)).toEqual([]);
  });

  it('ships the 5 biology 3D labs, covers and original licensing locally, themed by the injected adapter', () => {
    const simulations = lessons.filter(lesson => lesson.kind === 'simulation');
    expect(simulations.length).toBe(5);
    for (const lesson of simulations) {
      expect(existsSync(resolve(root, 'public', 'lessons', lesson.file!))).toBe(true);
      expect(existsSync(resolve(root, 'public', 'lessons', lesson.cover!))).toBe(true);
      expect(lesson.steps.length).toBeGreaterThan(0);
      const source = readFileSync(resolve(root, 'public', 'lessons', lesson.file!), 'utf8');
      expect(source).toContain('<canvas');
      expect(source).toContain('<link rel="stylesheet" href="../../theme/lesson.css">');
      expect(source).toContain('<script defer src="../../theme/lesson-adapter.js"></script>');
    }
    expect(readFileSync(resolve(root, 'public', 'lessons', 'LICENSE'), 'utf8')).toContain('CC BY-NC 4.0');
    expect(existsSync(resolve(root, 'public', 'lessons', 'THIRD_PARTY_NOTICES.md'))).toBe(true);
    const directory = readFileSync(resolve(root, 'public', 'lessons', 'courses', 'index.html'), 'utf8');
    for (const lesson of simulations) expect(directory).toContain(`href="${lesson.slug}.html"`);
    expect(lessonAsset(simulations[0].file!)).toContain('lessons/courses/');
  });

  it('keeps prerequisite questions pointing backwards, never forwards', () => {
    for (const [index, lesson] of lessons.entries()) {
      expect(lesson.hook.length).toBeGreaterThan(15);
      expect(lesson.objectives.length).toBeGreaterThan(0);
      expect(lesson.takeaway.length).toBeGreaterThan(15);
      for (const prerequisite of lesson.prerequisites) {
        const at = lessons.findIndex(item => item.slug === prerequisite);
        expect(at).toBeGreaterThanOrEqual(0);
        expect(at).toBeLessThan(index);
      }
    }
  });

  it('shares one set of warm-paper design tokens between the site and isolated 3D labs', () => {
    const theme = readFileSync(resolve(root, 'public', 'theme', 'lesson.css'), 'utf8');
    const tokens = readFileSync(resolve(root, 'public', 'theme', 'tokens.css'), 'utf8');
    expect(theme).toContain("@import './tokens.css'");
    expect(tokens).toContain('--cv-accent: #2e7d32');
    expect(tokens).toContain('color-scheme: light');
    expect(theme).toContain('--ink: var(--cv-text) !important');
    expect(theme).not.toMatch(/filter:\s*(invert|hue-rotate)/);
  });
});

describe('learning progress', () => {
  beforeEach(() => localStorage.clear());

  it('persists only the opened / read lesson record', () => {
    expect(readProgress()).toEqual(emptyProgress());
    const progress = { started: ['enzyme-step'], completed: ['enzyme-step'], lastLesson: 'enzyme-step' };
    writeProgress(progress);
    expect(readProgress()).toEqual(progress);
  });

  it('drops retired slugs gracefully', () => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({
      started: ['retired-lesson', 'enzyme-step'],
      completed: ['retired-lesson', 'enzyme-step'],
      lastLesson: 'retired-lesson',
    }));
    expect(readProgress()).toEqual({ started: ['enzyme-step'], completed: ['enzyme-step'], lastLesson: null });
  });
});

describe('learning workspace', () => {
  let listeners: { type: string; listener: EventListenerOrEventListenerObject }[] = [];
  beforeEach(() => {
    vi.useFakeTimers();
    vi.resetModules();
    listeners = [];
    localStorage.clear();
    window.history.replaceState(null, '', '/#home');
    const parsed = new DOMParser().parseFromString(html, 'text/html');
    document.documentElement.lang = parsed.documentElement.lang;
    document.head.innerHTML = parsed.head.innerHTML;
    document.body.innerHTML = parsed.body.innerHTML;
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn(() => ({ matches: false })),
    });
  });

  afterEach(() => {
    for (const { type, listener } of listeners) window.removeEventListener(type, listener);
    vi.clearAllTimers();
    vi.useRealTimers();
    document.body.style.overflow = '';
  });

  async function start(): Promise<void> {
    const add = window.addEventListener.bind(window);
    vi.spyOn(window, 'addEventListener').mockImplementation((type, listener, options) => {
      if (listener && ['hashchange', 'storage', 'message'].includes(type)) listeners.push({ type, listener });
      add(type, listener, options);
    });
    await import('../src/main');
    vi.runAllTimers();
  }

  function navigate(hash: string): void {
    window.history.replaceState(null, '', `/${hash}`);
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }

  it('opens on 小念 and 爸爸 exploring biology, followed by 8 topic cards and the 3D lab card', async () => {
    await start();
    expect(document.querySelector('.home-title h1')?.textContent).toContain('生物奇遇记');
    expect(document.getElementById('duo-title')?.textContent).toBe('小念和爸爸探索生命的奥秘');
    const cards = [...document.querySelectorAll<HTMLAnchorElement>('.topic-card:not(.is-labs)')];
    expect(cards.map(card => card.getAttribute('href'))).toEqual(units.map(unit => `#topic/${unit.id}`));
    const labCard = document.querySelector('.topic-card.is-labs');
    expect(labCard?.getAttribute('href')).toBe('#labs');
    expect(labCard?.textContent).toContain(`${labs.length} 个实验`);
    const first = document.getElementById('duo-go')?.getAttribute('href');
    document.getElementById('duo-next')!.click();
    expect(document.getElementById('duo-go')?.getAttribute('href')).not.toBe(first);
    expect(document.querySelector('.learning-footer')?.textContent).toContain('生物奇遇记');
    const posterPath = resolve(root, 'public', 'images', 'home-duo-poster.webp');
    expect(existsSync(posterPath)).toBe(true);
    expect(readFileSync(posterPath).byteLength).toBeGreaterThan(10_000);
  });

  it('lists questions in a topic and opens a lab story with a link to its 3D lab', async () => {
    const story = findStory('enzyme-step')!;
    await start();
    navigate('#topic/metabolism');
    expect(document.querySelector('.page-top h1')?.textContent).toContain('能量与呼吸');
    navigate('#q/enzyme-step');
    expect(document.querySelector('.page-top h1')?.textContent).toBe(story.title);
    expect(document.querySelector('.page-lab')?.getAttribute('href')).toBe('#lab/enzyme-step');
    expect(readProgress().started).toEqual(['enzyme-step']);
  });

  it('gathers all 5 biology labs under #labs and runs each on #lab/<slug>', async () => {
    await start();
    navigate('#labs');
    expect(document.querySelectorAll('.lab-card[href^="#lab/"]')).toHaveLength(5);
    const groups = units.filter(unit => unitLabs(unit.id).length);
    expect(document.querySelectorAll('.labs .qlist-group')).toHaveLength(groups.length);

    navigate('#lab/plasmolysis-step');
    const frame = document.querySelector('iframe')!;
    expect(frame.getAttribute('src')).toContain('lessons/courses/plasmolysis-step.html');
    expect(frame.getAttribute('sandbox')).toBe('allow-scripts');
    const post = vi.spyOn(frame.contentWindow!, 'postMessage');
    window.dispatchEvent(new MessageEvent('message', { data: { type: 'bioverse:ready' }, source: frame.contentWindow }));
    expect(post).toHaveBeenCalledWith(expect.objectContaining({ type: 'bioverse:avatars' }), '*');
  });

  it('can still build autoArticle from extracted courseware steps as fallback', () => {
    const lesson = lessons.find(item => item.slug === 'enzyme-step')!;
    const cover = lessonAsset(lesson.cover!);
    const dialogue = getLessonDialogue(lesson);
    const article = autoArticle({ ...lesson, cover }, dialogue);
    expect(article.turns).toHaveLength(dialogue.length + 1);
    expect(article.turns.at(-1)!.dad).toContain(lesson.takeaway);
  });
});
