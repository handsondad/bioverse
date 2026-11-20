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

/** 4. 孟德尔豌豆实验：切换子一代 F1 / 子二代 F2 并调样本量，看大数逼近 3∶1 */
export const mendelPeas: SimDef = {
  params: [
    { key: 'gen', label: '看到哪一代', min: 0, max: 1, step: 1, value: 1, labels: ['子一代 F₁（高DD × 矮dd）', '子二代 F₂（Dd 自花传粉）'] },
    { key: 'scale', label: '种下多少株豌豆', min: 0, max: 2, step: 1, value: 2, labels: ['只种 8 株（样本太少）', '种 80 株', '孟德尔真数据（1064 株）'] },
  ],
  animated: false,
  draw(s) {
    const f2 = s.gen === 1;
    const sc = s.scale;
    const counts: [number, number][] = f2
      ? [[5, 3], [59, 21], [787, 277]]
      : [[8, 0], [80, 0], [1064, 0]];
    const [tall, dwarf] = counts[sc];
    const ratio = dwarf === 0 ? '全都是高茎！' : `${(tall / dwarf).toFixed(2)} ∶ 1`;
    const out: string[] = [];
    out.push(txt(280, 28, f2 ? '子二代 F₂：藏起来的“矮”重新现身，种得越多越接近 3∶1！' : '子一代 F₁（全为 Dd）：高茎显性盖住矮茎，没有折中变半高！', { size: 13.5, bold: true, color: INK }));
    // 左：8 株示意豌豆田
    out.push(`<rect x="24" y="48" width="268" height="196" rx="16" fill="#f4faf5" stroke="#b7e4c7" stroke-width="2"/>`);
    out.push(`<line x1="36" y1="216" x2="280" y2="216" stroke="#8b5a2b" stroke-width="4"/>`);
    const sampleTall = f2 ? (sc === 0 ? 5 : 6) : 8;
    for (let i = 0; i < 8; i += 1) {
      const px = 52 + i * 30;
      const isTall = i < sampleTall;
      const topY = isTall ? 92 : 168;
      out.push(`<line x1="${px}" y1="216" x2="${px}" y2="${topY}" stroke="${isTall ? GREEN : HOT}" stroke-width="4" stroke-linecap="round"/>`);
      out.push(`<circle cx="${px - 5}" cy="${topY + 12}" r="5" fill="${isTall ? '#51a355' : '#ff9f43'}"/>`);
      out.push(`<circle cx="${px + 5}" cy="${topY + 6}" r="5" fill="${isTall ? '#51a355' : '#ff9f43'}"/>`);
    }
    out.push(txt(158, 72, f2 ? 'DD · Dd · dD（高）  vs  dd（矮）' : '亲本 DD × dd → 子一代全是 Dd', { size: 12, bold: true, color: PURPLE }));
    out.push(txt(158, 234, '基因像独立珠子，不像红蓝墨水混糊成一团', { size: 11.5, color: INK }));

    // 右：统计板
    out.push(`<rect x="308" y="48" width="228" height="196" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(422, 78, '📊 修道院数豌豆账本', { size: 14.5, bold: true, color: INK }));
    out.push(txt(326, 116, `高茎豌豆：${tall} 株`, { size: 13.5, anchor: 'start', bold: true, color: GREEN }));
    out.push(txt(326, 148, `矮茎豌豆：${dwarf} 株`, { size: 13.5, anchor: 'start', bold: true, color: HOT }));
    out.push(`<rect x="326" y="168" width="192" height="44" rx="10" fill="#f7f0ff"/>`);
    out.push(txt(422, 196, `高 ∶ 矮 = ${ratio}`, { size: 15, bold: true, color: PURPLE }));
    if (f2 && sc === 0) out.push(txt(422, 232, '样本太小会偏离，要多种几百株！', { size: 11.5, color: HOT, bold: true }));
    if (f2 && sc === 2) out.push(txt(422, 232, '1865 年孟德尔亲手数出的真实记录', { size: 11.5, color: GREEN, bold: true }));

    out.push(txt(280, 286, '孟德尔整整种了 8 年、统计上万株豌豆，用数学叩开了现代遗传学大门', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    if (s.gen === 0) return '子一代 F₁：高茎（DD）和矮茎（dd）杂交，所有孩子都是 Dd，显性 D 当家全长成高茎，但矮茎基因 d 完好无损地藏在里面！';
    if (s.scale === 0) return '子二代只种 8 株（5 高 3 矮 ≈ 1.67∶1）：就像抛硬币只抛几次一样，数量太少看不准 3∶1 的真实规律。';
    return s.scale === 2
      ? '孟德尔真实实验账本：1064 株子二代里有 787 株高茎、277 株矮茎（2.84∶1 ≈ 3∶1），铁证如山推翻了融合遗传误区！'
      : '种到 80 株（59 高 21 矮 ≈ 2.81∶1）：随着样本增大，高茎和矮茎的比例稳稳靠拢 3∶1。';
  },
};

/** 5. 性染色体与三花猫：选 XX 母猫 / XY 公猫与 X 上的毛色基因，看为什么三花几乎全是母猫 */
export const calicoCoat: SimDef = {
  params: [
    { key: 'sex', label: '小猫性染色体', min: 0, max: 1, step: 1, value: 0, labels: ['XX（母猫·两条 X）', 'XY（公猫·只有一条 X）'] },
    { key: 'pair', label: 'X 染色体上的毛色基因', min: 0, max: 2, step: 1, value: 1, labels: ['只有橘色基因 Xᴼ', '一橘 Xᴼ + 一黑 Xᵇ', '只有黑色基因 Xᵇ'] },
  ],
  animated: false,
  draw(s) {
    const female = s.sex === 0;
    const p = s.pair;
    // 公猫只有一条 X：选 p=1 时公猫只能拿到其中一条（以 Xᴼ 橘白猫展示并提示）
    const isCalico = female && p === 1;
    const coatName = isCalico ? '🎉 三花母猫（橘+黑+白）' : p === 2 ? '🖤 黑白奶牛猫' : '🧡 橘白猫';
    const out: string[] = [];
    out.push(txt(280, 28, '猫的橘色和黑色基因都住在 X 染色体上（Y 染色体不管毛色，肚皮白斑由另一基因管）', { size: 12.8, bold: true, color: INK }));
    // 左侧：性染色体卡片
    out.push(`<rect x="26" y="48" width="248" height="196" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(150, 78, female ? '♀ 母猫拥有两条 X' : '♂ 公猫只有一条 X 和一条短 Y', { size: 14, bold: true, color: PURPLE }));
    const x1Col = p === 2 ? '#343a40' : '#ff922b';
    const x2Col = p === 0 ? '#ff922b' : '#343a40';
    // 第一条 X
    out.push(`<rect x="78" y="98" width="54" height="86" rx="14" fill="${x1Col}"/>`);
    out.push(txt(105, 146, p === 2 ? 'X黑' : 'X橘', { size: 15, bold: true, color: '#ffffff', plain: true }));
    if (female) {
      out.push(`<rect x="168" y="98" width="54" height="86" rx="14" fill="${x2Col}"/>`);
      out.push(txt(195, 146, p === 0 ? 'X橘' : 'X黑', { size: 15, bold: true, color: '#ffffff', plain: true }));
      out.push(txt(150, 212, isCalico ? '每块皮肤随机关掉一条 X → 橘黑相间！' : '两条 X 颜色相同 → 单一花色加白肚皮', { size: 11.8, bold: true, color: isCalico ? HOT : INK }));
    } else {
      out.push(`<rect x="174" y="128" width="42" height="56" rx="12" fill="#adb5bd"/>`);
      out.push(txt(195, 161, 'Y', { size: 16, bold: true, color: '#ffffff', plain: true }));
      out.push(txt(150, 212, p === 1 ? '❌ 一条 X 装不下橘和黑两种！' : '只有一条 X：非橘即黑', { size: 12, bold: true, color: p === 1 ? HOT : INK }));
    }

    // 右侧：小猫花色展示
    out.push(`<rect x="294" y="48" width="240" height="196" rx="16" fill="#fffaf3" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(`<g transform="translate(414 138)">`);
    out.push(`<polygon points="-44,-28 -32,-66 -8,-38" fill="${x1Col}"/>`);
    out.push(`<polygon points="44,-28 32,-66 8,-38" fill="${isCalico ? '#343a40' : x1Col}"/>`);
    out.push(`<circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#d8c9b0" stroke-width="2.5"/>`);
    // 斑块
    out.push(`<path d="M-46 -18 A50 50 0 0 1 2 -49 L-6 -4 Z" fill="${x1Col}"/>`);
    out.push(`<path d="M4 -49 A50 50 0 0 1 48 -10 L8 -4 Z" fill="${isCalico ? '#343a40' : x1Col}"/>`);
    out.push(`<circle cx="-17" cy="-4" r="6" fill="#1c1917"/><circle cx="17" cy="-4" r="6" fill="#1c1917"/>`);
    out.push(`<polygon points="-5,9 5,9 0,16" fill="#ff8fa0"/>`);
    out.push(`</g>`);
    out.push(txt(414, 218, coatName, { size: 14, bold: true, color: isCalico ? HOT : GREEN }));

    out.push(txt(280, 286, '极罕见的三花公猫（约三千分之一）是因为多拿了一条染色体变成 XXY！', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    if (s.sex === 0 && s.pair === 1) return '母猫（XX）同时拿到一条橘色 X 和一条黑色 X：胚胎发育时每块皮肤细胞随机让其中一条休眠（X 染色体失活），加上白斑就拼出了三花母猫！';
    if (s.sex === 1 && s.pair === 1) return '正常公猫（XY）只有一条 X 染色体，要么带橘色变成橘猫，要么带黑色变成黑猫，没法同时装下橘和黑，所以几乎见不到三花公猫！';
    return '两条 X 都是同一种颜色（或公猫单条 X）：全身有色斑块只会显现出橘色或黑色其中一种。';
  },
};

/** 6. 袁隆平杂交水稻：对比人工剪雄蕊 / 野败不育系制种 / 农民自留 F2 种子 */
export const hybridRice: SimDef = {
  params: [
    { key: 'mode', label: '育种与种田方案', min: 0, max: 2, step: 1, value: 1, labels: ['人工拿镊子剪雄蕊', '雄性不育系大田制种（F₁）', '农民自留杂交稻种再种（F₂）'] },
  ],
  animated: false,
  draw(s) {
    const m = s.mode;
    const yieldPct = [25, 120, 82][m];
    const out: string[] = [];
    out.push(txt(280, 28, '水稻每朵小花天生“自花传粉”，怎样才能大批量造出高产杂交种？', { size: 13.5, bold: true, color: INK }));
    out.push(`<rect x="24" y="48" width="290" height="196" rx="16" fill="#f9fbe7" stroke="#c0ca33" stroke-width="2"/>`);
    if (m === 0) {
      out.push(txt(169, 82, '✂️ 一朵朵剥开颖壳剪掉 6 根雄蕊', { size: 13, bold: true, color: HOT }));
      out.push(`<ellipse cx="169" cy="146" rx="32" ry="52" fill="#dce775" stroke="${GREEN}" stroke-width="3"/>`);
      out.push(txt(169, 148, '稻花极小', { size: 12, bold: true, color: INK }));
      out.push(txt(169, 222, '做实验还行，几千万亩农田根本来不及剪！', { size: 12, bold: true, color: HOT }));
    } else if (m === 1) {
      out.push(txt(169, 78, '🌾 “野败”妈妈花粉不育 + 优良爸爸送花粉', { size: 12.5, bold: true, color: GREEN }));
      for (let i = 0; i < 6; i += 1) {
        const x = 64 + i * 42;
        out.push(`<line x1="${x}" y1="204" x2="${x}" y2="112" stroke="${GREEN}" stroke-width="4.5"/>`);
        out.push(`<ellipse cx="${x + 6}" cy="112" rx="10" ry="20" fill="#ffd43b" stroke="#d97706" stroke-width="1.8" transform="rotate(24 ${x + 6} 112)"/>`);
      }
      out.push(txt(169, 224, '杂交子一代 F₁ 整齐粗壮，亩产高约 20%！', { size: 12.5, bold: true, color: GREEN }));
    } else {
      out.push(txt(169, 78, '⚠️ 把去年的杂交稻谷留下来接着种（F₂）', { size: 12.5, bold: true, color: HOT }));
      const hs = [108, 156, 114, 164, 138, 106];
      hs.forEach((topY, i) => {
        const x = 64 + i * 42;
        out.push(`<line x1="${x}" y1="204" x2="${x}" y2="${topY}" stroke="#74b87a" stroke-width="4"/>`);
        out.push(`<ellipse cx="${x + 4}" cy="${topY}" rx="7" ry="${topY < 125 ? 16 : 9}" fill="#ffe066" stroke="#c27a23" stroke-width="1.5"/>`);
      });
      out.push(txt(169, 224, '基因重新洗牌（性状分离）：高矮参差、产量大跌！', { size: 12, bold: true, color: HOT }));
    }

    // 右侧产量对比
    out.push(`<rect x="330" y="48" width="206" height="196" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(433, 80, '大田收成对比', { size: 14.5, bold: true, color: INK }));
    out.push(txt(433, 118, m === 0 ? '种子太少只够科研盆栽' : `相对常规稻收成：${yieldPct}%`, { size: 13.5, bold: true, color: m === 1 ? GREEN : HOT }));
    out.push(`<rect x="352" y="134" width="162" height="18" rx="9" fill="#f4efe9"/><rect x="352" y="134" width="${n(yieldPct * 1.3)}" height="18" rx="9" fill="${m === 1 ? GREEN : '#ff9f43'}"/>`);
    out.push(txt(433, 184, m === 1 ? '1970 海南找到“野败”突破瓶颈' : m === 2 ? '每年要买新配好的 F₁ 杂交种' : '自花传粉作物制种世界难题', { size: 11.8, color: INK, bold: m === 1 }));
    out.push(txt(433, 216, '一粥一饭，当思来处不易', { size: 12, color: PURPLE, bold: true }));

    out.push(txt(280, 286, '袁隆平爷爷团队实现三系、两系杂交水稻配套，每年多养活数以千万计的人口', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '人工剪雄蕊：水稻花又小又密，开花前自己就授完粉了，拿镊子一朵朵剪雄蕊只能做几盆实验，没法给亿亩稻田供种。',
      '雄性不育系制种：用天生没有活性花粉的“野败”后代当妈妈，旁边种优良父本，风一吹就批量结出整齐高产的杂交一代种子，比老品种增产约 20%！',
      '自留杂交稻种再种：就像孟德尔子二代豌豆会分出矮茎一样，杂交稻自交后代会发生“性状分离”，高矮熟期全乱套，产量立刻掉下来。',
    ][s.mode];
  },
};
