import { INK, HOT, GREEN, LEAF, BLUE, arrow, n, txt, type SimDef } from './kit';

/** 1. 光合作用工厂：调阳光和二氧化碳，看葡萄糖和氧气产量 */
export const photoFactory: SimDef = {
  params: [
    { key: 'sun', label: '阳光强弱', min: 0, max: 100, step: 10, value: 80, unit: '%' },
    { key: 'water', label: '水分供应', min: 0, max: 100, step: 20, value: 80, unit: '%' },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const rate = Math.round(Math.min(s.sun, s.water));
    const out: string[] = [];
    // 太阳
    const sunR = 16 + s.sun * 0.16;
    out.push(`<circle cx="88" cy="64" r="${n(sunR)}" fill="#ffd43b" opacity="${(0.25 + s.sun * 0.0075).toFixed(2)}"/>`);
    out.push(txt(88, 112, `☀️ 光照 ${s.sun}%`, { size: 13, color: '#b45309', bold: true }));
    // 叶片工厂
    out.push(`<path d="M168 170 Q280 56 410 156 Q290 258 168 170 Z" fill="${rate > 20 ? '#8ce09b' : '#d8e2c8'}" stroke="${GREEN}" stroke-width="4"/>`);
    out.push(`<line x1="168" y1="170" x2="392" y2="158" stroke="${GREEN}" stroke-width="3"/>`);
    out.push(txt(288, 148, '🌿 叶绿体车间', { size: 15, bold: true, color: '#1b5e20' }));
    out.push(txt(288, 174, `造糖速率 ${rate}%`, { size: 14, bold: true, color: rate > 50 ? GREEN : INK }));
    // 输入箭头
    if (s.sun > 0) out.push(arrow(124, 82, 206, 122, '#f59f00', 3.5));
    out.push(arrow(94, 240, 198, 192, BLUE, 3.5));
    out.push(txt(88, 260, `💧 水 ${s.water}%`, { size: 13, color: BLUE, bold: true }));
    out.push(arrow(280, 44, 280, 96, '#6b5a42', 3));
    out.push(txt(280, 32, '空气里的 CO₂（木头干重的主要来源！）', { size: 13, color: INK, bold: true }));
    // 输出气泡（氧气）+ 葡萄糖
    const bubbles = Math.round(rate / 20);
    for (let i = 0; i < bubbles; i += 1) {
      const p = ((t * 0.7 + i * 0.2) % 1);
      const bx = 420 + (i % 3) * 24;
      const by = 140 - p * 84;
      out.push(`<circle cx="${n(bx)}" cy="${n(by)}" r="10" fill="#e7f5ff" stroke="${BLUE}" stroke-width="2"/>`);
      out.push(txt(bx, by + 4, 'O₂', { size: 9, color: BLUE, bold: true }));
    }
    out.push(arrow(396, 174, 466, 224, HOT, 3.5));
    out.push(txt(474, 248, '🍬 葡萄糖 → 木头', { size: 13, color: HOT, bold: true }));
    out.push(txt(280, 298, rate === 0 ? '缺光或缺水，绿色工厂只能暂停歇业' : '阳光提供能量，把空气里的碳和水拼成树木的身体', { size: 13, color: INK }));
    return out.join('');
  },
  readout(s) {
    const rate = Math.min(s.sun, s.water);
    if (s.sun === 0) return '天黑没有阳光：叶绿体停工，植物不进行光合作用（但仍在呼吸）。';
    if (s.water === 0) return '土壤干透没水：缺了原料、气孔也紧紧闭上，光合作用停摆。';
    return `光照 ${s.sun}%、水分 ${s.water}%：叶绿体开足 ${rate}% 马力，把二氧化碳和水合成有机物并放出氧气！`;
  },
};

/** 2. 秋天树叶变色：拖动季节（日照与温度），看叶绿素褪去露出黄/红色素 */
export const leafSeason: SimDef = {
  params: [
    { key: 'month', label: '季节变化', min: 0, max: 3, step: 1, value: 2, labels: ['盛夏（7 月）', '初秋（9 月）', '深秋（10 月）', '初冬（11 月）'] },
  ],
  animated: false,
  draw(s) {
    const m = s.month;
    const chloro = [92, 55, 14, 4][m];
    const yellow = [28, 28, 28, 22][m];
    const red = [0, 8, 42, 36][m];
    const leafColors = ['#43a047', '#9ccc65', '#f59f00', '#c9623b'];
    const out: string[] = [];
    // 左侧叶片
    out.push(`<g transform="translate(155 154) ${m === 3 ? 'translate(0 36) rotate(22)' : ''}">`);
    out.push(`<path d="M-84 0 Q0 -82 96 0 Q0 82 -84 0 Z" fill="${leafColors[m]}" stroke="#5d4e37" stroke-width="3"/>`);
    out.push(`<line x1="-108" y1="0" x2="80" y2="0" stroke="#5d4e37" stroke-width="3.5"/>`);
    if (m === 3) out.push(`<line x1="-88" y1="-16" x2="-88" y2="16" stroke="${HOT}" stroke-width="4"/>`);
    out.push(`</g>`);
    out.push(txt(155, 274, m === 3 ? '叶柄长出离层，主动脱落省水' : ['绿油油造粮食', '叶绿素开始撤退', '黄红底色亮出来了！'][m], { size: 13, bold: true, color: m >= 2 ? HOT : GREEN }));

    // 右侧色素含量柱状图
    out.push(`<rect x="296" y="54" width="236" height="202" rx="14" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(414, 80, '叶片里的三种色素', { size: 14, bold: true, color: INK }));
    const bars: [string, number, string][] = [
      ['叶绿素（绿）', chloro, LEAF],
      ['叶黄素（黄）', yellow, '#ffd43b'],
      ['花青素（红）', red, '#e03131'],
    ];
    bars.forEach(([label, val, col], i) => {
      const y = 104 + i * 48;
      out.push(txt(312, y + 14, label, { size: 12, anchor: 'start', color: INK, bold: true }));
      out.push(`<rect x="312" y="${y + 20}" width="200" height="14" rx="7" fill="#f4efe9"/>`);
      out.push(`<rect x="312" y="${y + 20}" width="${n(val * 2)}" height="14" rx="7" fill="${col}"/>`);
    });
    out.push(txt(280, 30, ['盛夏：白天长，叶绿素天天补货', '初秋：白天变短，树木开始回收养分', '深秋：叶绿素分解，藏着的黄色和红花青素显现', '初冬：落叶休眠，防止冻伤和失水'][m], { size: 14, bold: true, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '盛夏叶绿素多得满满当当，把一直躲在叶片里的黄色素全盖住了，所以树叶绿油油的。',
      '初秋日照变短，大树先把宝贵的叶绿素拆解收回树干里存着，绿色开始变淡。',
      '深秋叶绿素几乎退完，本来就在的叶黄素露脸成金黄；枫树等还会新合成红色花青素。',
      '初冬叶柄处长出离层，风一吹叶子脱落，帮大树省水保暖、安稳度过寒冬。',
    ][s.month];
  },
};

/** 3. 蒸腾拉力：调气孔开合与阳光，看水柱如何被拉上树顶 */
export const treePull: SimDef = {
  params: [
    { key: 'stoma', label: '树叶气孔张开程度', min: 0, max: 100, step: 20, value: 80, unit: '%' },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const flow = s.stoma;
    const out: string[] = [];
    // 土壤与树根
    out.push(`<rect x="20" y="246" width="520" height="58" rx="10" fill="#e6d5bc"/>`);
    out.push(txt(115, 280, '地下水分被根毛吸进', { size: 13, color: '#6b4f2b', bold: true }));
    // 树干和细细导管
    out.push(`<rect x="242" y="106" width="76" height="148" rx="8" fill="#b08050" stroke="#7a532d" stroke-width="3"/>`);
    out.push(`<rect x="270" y="106" width="20" height="148" fill="#d0ebff" stroke="${BLUE}" stroke-width="2"/>`);
    // 树冠
    out.push(`<ellipse cx="280" cy="88" rx="110" ry="54" fill="#8ce09b" stroke="${GREEN}" stroke-width="3.5"/>`);
    out.push(txt(280, 92, `🍃 气孔张开 ${flow}%`, { size: 15, bold: true, color: '#1b5e20' }));
    // 水珠沿着导管往上拉
    if (flow > 0) {
      const speed = 0.25 + (flow / 100) * 0.7;
      for (let i = 0; i < 5; i += 1) {
        const p = (t * speed + i * 0.2) % 1;
        const y = 246 - p * 136;
        out.push(`<circle cx="280" cy="${n(y)}" r="6" fill="${BLUE}"/>`);
      }
      // 树顶水蒸气散出
      for (let i = 0; i < 3; i += 1) {
        const p = (t * speed + i * 0.33) % 1;
        const vy = 42 - p * 26;
        out.push(`<circle cx="${240 + i * 40}" cy="${n(vy)}" r="7" fill="#a5d8ff" opacity="${(1 - p).toFixed(2)}"/>`);
      }
      out.push(arrow(348, 224, 348, 122, BLUE, 4));
      out.push(txt(424, 174, '水分子手拉手\n被一路拉上去', { size: 13, color: BLUE, bold: true }));
    } else {
      out.push(txt(424, 174, '气孔紧闭\n水柱几乎不动', { size: 13, color: HOT, bold: true }));
    }
    out.push(txt(120, 168, `向上拉力：${flow}%`, { size: 15, color: flow > 0 ? GREEN : INK, bold: true }));
    out.push(txt(280, 298, '植物吸进的水有九成多靠蒸腾散掉，换来了向上拉水的动力和降温', { size: 12, color: INK }));
    return out.join('');
  },
  readout(s) {
    if (s.stoma === 0) return '气孔完全关上（比如正午太晒或严重缺水时）：蒸腾作用暂停，既保住水分，吸水拉力也停下来。';
    return `气孔张开 ${s.stoma}%：叶片不断放出水蒸气，像往上拽绳子一样把导管里连成一串的水一路拉到树顶！`;
  },
};
