import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { describe, expect, it } from 'vitest';
import { lessonPlan } from '../src/learning/curriculum';
import { simNames } from '../src/learning/sims';

const root = process.cwd();
const skill = join(root, 'skills/bioverse-explainer');
const mirrors = ['.agents/skills/bioverse-explainer', '.cursor/skills/bioverse-explainer'];

function files(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]);
}

const read = (file: string): string => readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

describe('写内容的 skill', () => {
  it.each(mirrors)('%s 和 skills/ 下的一模一样（改完跑 npm run skills:sync）', mirror => {
    const want = files(skill).map(file => relative(skill, file)).sort();
    const have = files(join(root, mirror)).map(file => relative(join(root, mirror), file)).sort();
    expect(have).toEqual(want);
    for (const name of want) expect(read(join(root, mirror, name)), name).toBe(read(join(skill, name)));
  });

  it('题库列出了每一道已经写好的题', () => {
    const bank = read(join(skill, 'question-bank.md'));
    const missing = lessonPlan.filter(lesson => !bank.includes(`| ${lesson.slug} |`)).map(lesson => lesson.slug);
    expect(missing).toEqual([]);
  });

  it('figures.md 登记了每一张互动图', () => {
    const figures = read(join(skill, 'figures.md'));
    expect(simNames.filter(name => !figures.includes(`| \`${name}\` |`))).toEqual([]);
  });
});
