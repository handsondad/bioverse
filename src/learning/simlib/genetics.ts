import { INK, HOT, GREEN, BLUE, PURPLE, n, txt, type SimDef } from './kit';

/** 1. 显性与隐性基因配对（酒窝遗传）：选爸爸和妈妈的基因型，看孩子的四种组合 */
export const punnettDimple: SimDef = {
  params: [
    { key: 'dad', label: '爸爸的基因', min: 0, max: 2, step: 1, value: 1, labels: ['AA（有酒窝）', 'Aa（有酒窝·藏着 a）', 'aa（无酒窝）'] },
    { key: 'mom', label: '妈妈的基因', min: 0, max: 2, step: 1, value: 1, labels: ['AA（有酒窝）', 'Aa（有酒窝·藏着 a）', 'aa（无酒窝）'] },
  ],
  animated: false,
  draw(s) {
    const genes: [string, string][] = [['A', 'A'], ['A', 'a'], ['a', 'a']];
    const d = genes[s.dad];
    const m = genes[s.mom];
    const kids = [d[0] + m[0], d[0] + m[1], d[1] + m[0], d[1] + m[1]].map(g => (g === 'aA' ? 'Aa' : g));
    const hasDimple = kids.filter(g => g.includes('A')).length;
    const out: string[] = [];
    out.push(txt(280, 30, '显性基因 A（有酒窝）声音大 · 隐性基因 a（无酒窝）两个凑齐才现身', { size: 13.5, bold: true, color: INK }));
    // 2×2 格子
    out.push(txt(250, 74, `爸爸给 ${d[0]}`, { size: 14, bold: true, color: BLUE }));
    out.push(txt(390, 74, `爸爸给 ${d[1]}`, { size: 14, bold: true, color: BLUE }));
    out.push(txt(126, 134, `妈妈给 ${m[0]}`, { size: 14, bold: true, color: '#c2588f' }));
    out.push(txt(126, 214, `妈妈给 ${m[1]}`, { size: 14, bold: true, color: '#c2588f' }));
    const cells: [number, number, string][] = [
      [184, 90, kids[0]], [324, 90, kids[1]],
      [184, 170, kids[2]], [324, 170, kids[3]],
    ];
    for (const [x, y, g] of cells) {
      const dimple = g.includes('A');
      out.push(`<rect x="${x}" y="${y}" width="132" height="72" rx="14" fill="${dimple ? '#fff4e0' : '#edf5ff'}" stroke="${dimple ? '#ff9f43' : BLUE}" stroke-width="2.5"/>`);
      out.push(txt(x + 66, y + 32, g, { size: 22, bold: true, color: dimple ? HOT : BLUE }));
      out.push(txt(x + 66, y + 56, dimple ? '😊 有酒窝' : '🙂 无酒窝', { size: 13, color: INK, bold: true }));
    }
    out.push(txt(280, 276, `孩子有酒窝机会：${hasDimple * 25}%  ·  无酒窝机会：${(4 - hasDimple) * 25}%`, { size: 15, bold: true, color: GREEN }));
    out.push(txt(280, 302, '两个有酒窝的爸妈（Aa × Aa），也可能生出无酒窝（aa）的孩子！', { size: 12, color: INK }));
    return out.join('');
  },
  readout(s) {
    const names = ['AA', 'Aa', 'aa'];
    const d = names[s.dad];
    const m = names[s.mom];
    if (d === 'Aa' && m === 'Aa') return '爸爸妈妈都是 Aa（都有酒窝但各藏了一个 a）：孩子有 75% 机会有酒窝，也有 25% 机会凑出 aa 无酒窝——这就是隔代遗传的秘密！';
    if (d === 'aa' && m === 'aa') return '爸爸妈妈都是 aa（都无酒窝）：两人只能传给孩子 a，孩子 100% 是 aa 无酒窝。';
    return `爸爸 ${d} × 妈妈 ${m}：孩子随机从两边各拿一个字母，拼出独一无二的基因组合。`;
  },
};

/** 2. DNA 碱基配对拉链：选择上链密码，看下链自动按 A-T / C-G 精准配对 */
export const dnaPair: SimDef = {
  params: [
    { key: 'code', label: '切换一段基因密码', min: 0, max: 2, step: 1, value: 0, labels: ['密码段 1（ATCGAT）', '密码段 2（GCTAGC）', '密码段 3（TTAACG）'] },
  ],
  animated: true,
  still: 0,
  draw(s, t) {
    const seqs = ['ATCGAT', 'GCTAGC', 'TTAACG'];
    const comp: Record<string, string> = { A: 'T', T: 'A', C: 'G', G: 'C' };
    const col: Record<string, string> = { A: '#e03131', T: '#1c7ed6', C: '#f59f00', G: '#2f9e44' };
    const top = seqs[s.code];
    const out: string[] = [];
    out.push(txt(280, 32, 'DNA 双螺旋配对铁律：A 只牵 T，C 只牵 G', { size: 15, bold: true, color: PURPLE }));
    // 上下两条骨架曲线
    out.push(`<line x1="56" y1="92" x2="504" y2="92" stroke="${GREEN}" stroke-width="10" stroke-linecap="round"/>`);
    out.push(`<line x1="56" y1="220" x2="504" y2="220" stroke="${GREEN}" stroke-width="10" stroke-linecap="round"/>`);
    for (let i = 0; i < top.length; i += 1) {
      const a = top[i];
      const b = comp[a];
      const x = 96 + i * 74;
      const sway = Math.sin(t * 2.5 + i * 0.8) * 3;
      out.push(`<line x1="${x}" y1="${n(96 + sway)}" x2="${x}" y2="${n(216 - sway)}" stroke="#d8c9b0" stroke-width="4" stroke-dasharray="4 4"/>`);
      out.push(`<rect x="${x - 22}" y="${n(102 + sway)}" width="44" height="44" rx="10" fill="${col[a]}"/>`);
      out.push(txt(x, 129 + sway, a, { size: 20, bold: true, color: '#ffffff', plain: true }));
      out.push(`<rect x="${x - 22}" y="${n(166 - sway)}" width="44" height="44" rx="10" fill="${col[b]}"/>`);
      out.push(txt(x, 193 - sway, b, { size: 20, bold: true, color: '#ffffff', plain: true }));
    }
    const protein = ['搭出：卷毛蛋白（示意）', '搭出：深棕色素酶（示意）', '搭出：消化淀粉酶（示意）'][s.code];
    out.push(txt(280, 266, `读出不同排列顺序 → ${protein}`, { size: 15, bold: true, color: HOT }));
    out.push(txt(280, 296, '只要知道其中一条链，细胞就能照着 A-T、C-G 的规矩准确抄出另一条', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    const seqs = ['ATCGAT', 'GCTAGC', 'TTAACG'];
    const comp = ['TAGCTA', 'CGATCG', 'AATTGC'];
    return `上链是 ${seqs[s.code]}，按 A 配 T、C 配 G 的规矩，下链自动配出 ${comp[s.code]}——四个字母排成几十亿字，就写下了整个人体的说明书。`;
  },
};

/** 3. 基因抄错一个字（突变）：切换无突变 / 沉默突变 / 换色突变，看蛋白质与小猫毛色 */
export const geneMutate: SimDef = {
  params: [
    { key: 'mut', label: 'DNA 复制时抄写情况', min: 0, max: 2, step: 1, value: 0, labels: ['原样抄对', '抄错但意思没变', '抄错换了毛色指令'] },
  ],
  animated: false,
  draw(s) {
    const m = s.mut;
    const seq = ['G A T - C C A', 'G A T - C C G', 'G A T - T C A'][m];
    const catCol = ['#4a4036', '#4a4036', '#ff9f43'][m];
    const out: string[] = [];
    out.push(txt(280, 32, '细胞分裂抄写几十亿个字母，偶尔会抄错一两个——这就是基因突变', { size: 14, bold: true, color: INK }));
    // 密码卡
    out.push(`<rect x="52" y="66" width="256" height="176" rx="16" fill="#fff" stroke="${m === 2 ? HOT : PURPLE}" stroke-width="2.5"/>`);
    out.push(txt(180, 96, '一段毛色基因密码', { size: 14, bold: true, color: PURPLE }));
    out.push(`<rect x="76" y="114" width="208" height="48" rx="12" fill="#f7f0ff"/>`);
    out.push(txt(180, 145, seq, { size: 22, bold: true, color: m === 0 ? GREEN : HOT }));
    out.push(txt(180, 192, ['一字不差，照常造深色色素', '尾巴改了一字，读出来还是同一个意思', '字母换了，造出的色素变浅成橘色！'][m], { size: 13, color: m === 2 ? HOT : INK, bold: m === 2 }));
    out.push(txt(180, 222, ['结果：维持原样', '结果：看不出差别（中性）', '结果：多出新花色（变异）'][m], { size: 12.5, color: GREEN, bold: true }));
    // 小猫头像
    out.push(`<g transform="translate(422 152)">`);
    out.push(`<polygon points="-44,-30 -32,-68 -8,-40" fill="${catCol}"/>`);
    out.push(`<polygon points="44,-30 32,-68 8,-40" fill="${catCol}"/>`);
    out.push(`<circle cx="0" cy="0" r="52" fill="${catCol}"/>`);
    out.push(`<circle cx="-18" cy="-8" r="7" fill="#fff"/><circle cx="18" cy="-8" r="7" fill="#fff"/>`);
    out.push(`<circle cx="-18" cy="-8" r="3.5" fill="#1c1917"/><circle cx="18" cy="-8" r="3.5" fill="#1c1917"/>`);
    out.push(`<polygon points="-6,6 6,6 0,14" fill="#ff8fa0"/>`);
    out.push(`</g>`);
    out.push(txt(422, 232, m === 2 ? '变成橘色小猫啦！' : '深棕色小猫', { size: 14, bold: true, color: m === 2 ? HOT : INK }));
    out.push(txt(280, 290, '变异并不都是坏事：绝大多数不痛不痒，有的还能帮物种适应新环境', { size: 13, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '原样抄对：DNA 复制极准，大部分时候把原本的毛色指令原封不动传下去。',
      '抄错但意思没变：基因密码有“同义词”，换一个字母照样造出一样的蛋白质，小猫看不出变化。',
      '抄错改了意思：造出的色素蛋白变了样，小猫长出新毛色——这就是大自然演化的原材料！',
    ][s.mut];
  },
};
