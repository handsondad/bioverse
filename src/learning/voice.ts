import manifest from '../data/voice-manifest.json';
import type { LineLength, Speaker } from './film/narration';

// 小念和爸爸的配音：npm run voice 用 edge-tts 把每篇有动画的文章逐句读出来，
// 放在 public/voice/<slug>/<轮次>-<nian|dad>.mp3，时长记在 src/data/voice-manifest.json。
// 声音和「身体奇遇记」「化学奇遇记」「物理奇遇记」一样，同一对角色听起来也是同一对人。

export const voices = {
  nian: { voice: 'zh-CN-YunxiaNeural', rate: '+0%' },
  dad: { voice: 'zh-CN-YunxiNeural', rate: '-5%' },
} as const satisfies Record<Speaker, { voice: string; rate: string }>;

export const clipKey = (slug: string, turn: number, who: Speaker): string => `${slug}/${turn}-${who}`;

export type VoiceManifest = { voices: typeof voices; clips: Record<string, { hash: string; seconds: number }> };

const escapeRegExp = (text: string): string => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const byLength = (table: Record<string, string>): string =>
  Object.keys(table).sort((a, b) => b.length - a.length).map(escapeRegExp).join('|');

/** 数字后面的单位念成中文；单字母单位要与数字隔开或位于词尾 */
const UNITS: Record<string, string> = {
  'g/mL': '克每毫升', 'mg/L': '毫克每升', 'm/s': '米每秒', 'km/h': '千米每小时',
  'mV': '毫伏', 'nm': '纳米', 'μm': '微米', 'µm': '微米', 'mm': '毫米', 'cm': '厘米', 'km': '千米',
  'kg': '千克', 'mg': '毫克', 'mL': '毫升', 'min': '分钟', 'ms': '毫秒', '℃': '摄氏度',
};
const SHORT_UNITS: Record<string, string> = { h: '小时', s: '秒', m: '米', g: '克', L: '升', '%': '百分之' };
const SUPERSCRIPT = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const SUBSCRIPT = '₀₁₂₃₄₅₆₇₈₉';
const UNIT = new RegExp(`([\\d${SUPERSCRIPT}])\\s*(${byLength(UNITS)})(?![A-Za-z])`, 'g');
const SHORT_UNIT = new RegExp(`([\\d${SUPERSCRIPT}])\\s*(${byLength(SHORT_UNITS)})(?![A-Za-z²³/·₀-₉])`, 'g');
const CIRCLED = '①②③④⑤⑥⑦⑧⑨⑩';

/** 生物课件与文章里常见的化学式和离子：念中文名孩子更容易听懂 */
const BIO_SYMBOLS: readonly (readonly [RegExp, string])[] = [
  [/H₂O₂/g, '过氧化氢'],
  [/H₂O/g, '水'],
  [/CO₂/g, '二氧化碳'],
  [/O₂/g, '氧气'],
  [/Na⁺/g, '钠离子'],
  [/K⁺/g, '钾离子'],
  [/Ca²⁺/g, '钙离子'],
  [/H⁺/g, '氢离子'],
  [/\bAA\b/g, '大A大A'],
  [/\bAa\b/g, '大A小a'],
  [/\baa\b/g, '小a小a'],
  [/\bpH\b/g, '酸碱度'],
  [/\bATP\b/g, '能量分子'],
  [/\bDNA\b/g, 'D N A'],
  [/\bRNA\b/g, 'R N A'],
  [/∝/g, '正比于'],
];

/** 文章里的字 → 念出来的字：单位、温度、离子、百分比和范围换成读法 */
export function speakable(text: string): string {
  let out = text;
  for (const [pattern, name] of BIO_SYMBOLS) out = out.replace(pattern, name);
  return out
    .replace(/(\d+(?:\.\d+)?)\s*%/g, '百分之$1')
    .replace(/(^|[^\d])\+(\d)/g, '$1正$2')
    .replace(/(^|[^\d\w])[−-](\d)/g, '$1负$2')
    .replace(/(\d)\s*[–~～]\s*(\d)/g, '$1到$2')
    .replace(/(\d+)°/g, '$1度')
    .replace(/\s*℃/g, '摄氏度')
    .replace(UNIT, (_, digit: string, unit: string) => `${digit}${UNITS[unit]}`)
    .replace(SHORT_UNIT, (_, digit: string, unit: string) => (unit === '%' ? `百分之${digit}` : `${digit}${SHORT_UNITS[unit]}`))
    .replace(/([\u4e00-\u9fff])\s+(?=[\u4e00-\u9fff])/g, '$1');
}

export type LabPart = 'q' | 'seen' | 'concl';
/** public/theme/lab-script.json：每个课件按步骤号一条；hold 的考核段没有演示，不写讲稿 */
export type LabLine =
  | { readonly tag: string; readonly hold: true }
  | { readonly tag: string; readonly hold?: undefined; readonly q: string; readonly eq?: string; readonly seen: string; readonly concl: string };
export type LabScript = Record<string, readonly LabLine[]>;
export const labSpeaker: Record<LabPart, Speaker> = { q: 'nian', seen: 'dad', concl: 'dad' };

/** 和 public/theme/lesson-adapter.js 里的 fnv1a 一字不差 */
export function fnv1a(text: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(16).padStart(8, '0');
}

export const labClipKey = (slug: string, segment: number, part: LabPart, raw: string): string =>
  `lab/${slug}/${segment}-${part}-${fnv1a(raw)}`;

/** 实验台的一段话 → 念出来的字：括号里的旁注不念，单位、生物符号、比较号换成中文 */
export function labSpeakable(text: string): string {
  let out = text.replace(/（[^（）]*）|\([^()]*[\u4e00-\u9fff][^()]*\)/g, '');
  for (const [pattern, name] of BIO_SYMBOLS) out = out.replace(pattern, name);
  out = out
    .replace(/(\d+(?:\.\d+)?)\s*%/g, '百分之$1')
    .replace(UNIT, (_, digit: string, unit: string) => `${digit}${UNITS[unit]}`)
    .replace(SHORT_UNIT, (_, digit: string, unit: string) => (unit === '%' ? `百分之${digit}` : `${digit}${SHORT_UNITS[unit]}`))
    .replace(/\bp\.\s*(\d+)/g, '第$1页')
    .replace(/(\d+)\s*\/\s*(\d+)(?!\d)/g, '$2分之$1')
    .replace(new RegExp(`[${CIRCLED}]\\s*`, 'g'), mark => `${'一二三四五六七八九十'[CIRCLED.indexOf(mark.trim())]}、`)
    .replace(/\s*(?:→|⟶|⇒)\s*/g, '，变成').replace(/\s*(?:↔|⇄)\s*/g, '，')
    .replace(/\s*≤\s*/g, '小于等于').replace(/\s*≥\s*/g, '大于等于')
    .replace(/\s*=\s*/g, '等于').replace(/\s*≈\s*/g, '约等于').replace(/\s*≠\s*/g, '不等于')
    .replace(/\s*<\s*/g, '小于').replace(/\s*>\s*/g, '大于').replace(/\s*±\s*/g, '正负')
    .replace(/(\d)×(?!\s*\d)/g, '$1倍').replace(/\s*×\s*/g, '乘').replace(/\s*÷\s*/g, '除以')
    .replace(/([\u4e00-\u9fff])\s*↑/g, '$1升高').replace(/([\u4e00-\u9fff])\s*↓/g, '$1降低').replace(/[↑↓]/g, '')
    .replace(/\s+\/\s+/g, '，').replace(/\//g, '每')
    .replace(/\s*·\s*/g, '，')
    .replace(/[「」]/g, '')
    .replace(new RegExp(`[${SUBSCRIPT}]`, 'g'), digit => String(SUBSCRIPT.indexOf(digit)))
    .replace(/，\s*([，。；：])/g, '$1')
    .replace(/^，/, '');
  return speakable(out);
}

export type FilmVoice = {
  readonly turnCount: number;
  readonly lengthOf: LineLength;
  readonly src: (turn: number, who: Speaker) => string;
};

const clips = (manifest as VoiceManifest).clips;

/** 这篇文章的配音；一句都还没配就是 undefined，播放器不显示声音开关 */
export function voiceFor(slug: string, turnCount: number): FilmVoice | undefined {
  if (!clips[clipKey(slug, 0, 'nian')]) return undefined;
  return {
    turnCount,
    lengthOf: (turn, who) => clips[clipKey(slug, turn, who)]?.seconds,
    src: (turn, who) => `${import.meta.env.BASE_URL}voice/${clipKey(slug, turn, who)}.mp3`,
  };
}
