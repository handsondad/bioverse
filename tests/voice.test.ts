import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it, vi } from 'vitest';
import { clipHash, wantedClips, wantedLabClips } from '../scripts/voice-clips';
import { lineAt, narrateFilm, narrationGaps } from '../src/learning/film/narration';
import { mountFilm } from '../src/learning/film/player';
import type { Film, FilmScene } from '../src/learning/stories/types';
import { fnv1a, labSpeakable, speakable, type FilmVoice, type VoiceManifest } from '../src/learning/voice';

const root = process.cwd();
const manifest = JSON.parse(readFileSync(join(root, 'src/data/voice-manifest.json'), 'utf8')) as VoiceManifest;
const labManifest = JSON.parse(readFileSync(join(root, 'src/data/lab-voice-manifest.json'), 'utf8')) as VoiceManifest;

const scene = (turn: number, duration: number): FilmScene => ({
  turn,
  title: 't',
  duration,
  cues: [
    { kind: 'text', at: [600, 450], text: '字', from: 1, to: duration - 1 },
    { kind: 'count', at: [600, 450], label: '数', start: 0, end: 9, from: 2 },
  ],
});

describe('小念和爸爸的生物配音', () => {
  it('reads biology notation aloud cleanly', () => {
    expect(speakable('37 ℃ 下，CO₂ + H₂O 放出 O₂')).toBe('37摄氏度下，二氧化碳 + 水放出氧气');
    expect(speakable('−70 mV 升到 +30 mV，占比 10.0%')).toBe('负70毫伏升到正30毫伏，占比百分之10.0');
    expect(labSpeakable('Na⁺ 内流，K⁺ 外流，消耗 ATP')).toBe('钠离子内流，钾离子外流，消耗能量分子');
    expect(fnv1a('水为什么会穿过这层膜往另一边跑？')).toMatch(/^[0-9a-f]{8}$/);
  });

  it('gives every 3D biology lab segment a line for 小念 and for 爸爸', () => {
    expect(labManifest.voices).toEqual(manifest.voices);
    const wanted = wantedLabClips();
    expect(wanted.size).toBeGreaterThan(100);
    for (const [key, clip] of wanted) expect(clip.who).toBe(key.includes('-q-') ? 'nian' : 'dad');
  });

  it.skipIf(!Object.keys(manifest.clips).length)('keeps every generated article voice clip in sync with text', () => {
    const problems: string[] = [];
    for (const [key, clip] of wantedClips()) {
      const saved = manifest.clips[key];
      if (!saved) problems.push(`${key} 没有配音`);
      else if (saved.hash !== clipHash(clip.who, clip.text)) problems.push(`${key} 文字改过了`);
      else if (!existsSync(join(root, 'public/voice', `${key}.mp3`))) problems.push(`${key} 缺音频文件`);
    }
    expect(problems.slice(0, 10)).toEqual([]);
  });

  it.skipIf(!Object.keys(labManifest.clips).length)('keeps every generated 3D lab voice clip in sync with script', () => {
    const problems: string[] = [];
    for (const [key, clip] of wantedLabClips()) {
      const saved = labManifest.clips[key];
      if (!saved) problems.push(`${key} 没有配音`);
      else if (saved.hash !== clipHash(clip.who, clip.text)) problems.push(`${key} 文字改过了`);
      else if (!existsSync(join(root, 'public/voice', `${key}.mp3`))) problems.push(`${key} 缺音频文件`);
    }
    expect(problems.slice(0, 10)).toEqual([]);
  });

  it('stretches narrated timelines and supports muting with bioverse-film-voice key', () => {
    localStorage.removeItem('bioverse-film-voice');
    const played: string[] = [];
    vi.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(function (this: HTMLMediaElement) {
      played.push(this.src);
      return Promise.resolve();
    });
    vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => undefined);
    const film: Film = { scenes: [scene(0, 6), scene(1, 6)] };
    const voice: FilmVoice = { turnCount: 2, lengthOf: () => 3, src: (turn, who) => `/voice/demo/${turn}-${who}.mp3` };
    const result = narrateFilm(film, 2, voice.lengthOf)!;
    expect(result.lines[0].start).toBeCloseTo(narrationGaps.lead);
    expect(lineAt(result.lines, 0.5)?.speaking).toBe(true);

    const host = document.createElement('div');
    document.body.append(host);
    const handle = mountFilm(host, film, { voice });
    const range = host.querySelector<HTMLInputElement>('.film-range')!;
    range.value = String(result.lines[0].start + 0.5);
    range.dispatchEvent(new Event('input'));
    host.querySelector<HTMLButtonElement>('.film-play')!.click();
    expect(played.at(-1)).toMatch(/\/voice\/demo\/0-nian\.mp3$/);
    const mute = host.querySelector<HTMLButtonElement>('.film-voice')!;
    mute.click();
    expect(localStorage.getItem('bioverse-film-voice')).toBe('off');
    handle.destroy();
    host.remove();
  });
});
