import { INK, HOT, GREEN, BLUE, n, r1, txt, type SimDef } from './kit';

/** 1. 冬眠省电模式：切换夏天活跃 vs 冬天冬眠，对比心跳、体温与脂肪能撑几天 */
export const hibernateMeter: SimDef = {
  params: [
    { key: 'mode', label: '刺猬状态', min: 0, max: 1, step: 1, value: 1, labels: ['夏天活跃', '冬天冬眠'] },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const sleep = s.mode === 1;
    const rate = sleep ? 1.2 : 8;
    const beat = 1 + 0.14 * Math.pow(Math.max(0, Math.sin(t * rate)), 4);
    const out: string[] = [];
    // 背景
    out.push(`<rect x="20" y="20" width="520" height="280" rx="16" fill="${sleep ? '#edf3fa' : '#fff9e6'}"/>`);
    out.push(txt(280, 48, sleep ? '❄️ 洞里冬眠：开启超低耗电模式' : '☀️ 夏天奔跑：全速耗电觅食', { size: 16, bold: true, color: sleep ? BLUE : '#b45309' }));
    // 小刺猬 + 跳动的心脏
    out.push(`<text x="148" y="172" font-size="72" text-anchor="middle">${sleep ? '🦔' : '🦔'}</text>`);
    if (sleep) out.push(txt(196, 122, 'Zzz…', { size: 18, color: BLUE, bold: true }));
    out.push(`<g transform="translate(148 228) scale(${n(beat)})"><text font-size="34" text-anchor="middle" dominant-baseline="central">❤️</text></g>`);
    // 三项仪表盘
    const stats: [string, string, number, string][] = sleep
      ? [['体温', '约 5 ℃', 16, BLUE], ['心跳', '约 20 次/分', 12, BLUE], ['脂肪续航', '能撑 4~5 个月', 94, GREEN]]
      : [['体温', '约 35 ℃', 88, HOT], ['心跳', '约 190 次/分', 86, HOT], ['脂肪续航', '不吃只能撑几天', 14, '#c94f4f']];
    stats.forEach(([label, val, pct, col], i) => {
      const y = 92 + i * 62;
      out.push(txt(256, y + 12, label, { size: 14, anchor: 'start', bold: true, color: INK }));
      out.push(txt(512, y + 12, val, { size: 14, anchor: 'end', bold: true, color: col }));
      out.push(`<rect x="256" y="${y + 22}" width="256" height="16" rx="8" fill="#ffffff" stroke="#d8c9b0" stroke-width="1.5"/>`);
      out.push(`<rect x="256" y="${y + 22}" width="${n(pct * 2.56)}" height="16" rx="8" fill="${col}"/>`);
    });
    out.push(txt(280, 286, '冬眠不是“普通睡懒觉”，而是把代谢和心跳降到极低来省粮食', { size: 13, color: INK }));
    return out.join('');
  },
  readout(s) {
    return s.mode === 1
      ? '冬眠模式：刺猬体温从约 35 ℃ 降到接近环境温度，心跳慢到约每分钟 20 次，秋天攒的脂肪就够撑过漫长冬天。'
      : '夏天活跃期：体温高、心跳近 200 次每分钟，能量消耗飞快，所以必须每天吃很多虫子并贴好秋膘。';
  },
};

/** 2. 保护色与捕食选择：调节背景颜色与蝴蝶颜色，看天敌找出的概率 */
export const camoSpot: SimDef = {
  params: [
    { key: 'bg', label: '树干背景', min: 0, max: 1, step: 1, value: 0, labels: ['枯叶棕', '嫩叶绿'] },
    { key: 'match', label: '蝴蝶翅膀配色', min: 0, max: 100, step: 25, value: 100, unit: '% 贴近背景' },
  ],
  animated: false,
  draw(s) {
    const greenBg = s.bg === 1;
    const bgHue = greenBg ? 115 : 32;
    const bgLight = greenBg ? 48 : 42;
    const diff = 100 - s.match;
    const bugHue = greenBg ? 115 - diff * 0.85 : 32 + diff * 1.6;
    const bugLight = greenBg ? 48 + diff * 0.28 : 42 + diff * 0.32;
    const survive = Math.round(18 + s.match * 0.78);
    const out: string[] = [];
    // 背景树干/树叶
    out.push(`<rect x="24" y="42" width="512" height="196" rx="18" fill="hsl(${bgHue}, 42%, ${bgLight}%)"/>`);
    // 背景纹理斑块
    for (let i = 0; i < 14; i += 1) {
      const bx = 54 + (i * 37) % 456;
      const by = 66 + (i * 53) % 148;
      out.push(`<ellipse cx="${bx}" cy="${by}" rx="28" ry="12" fill="hsl(${bgHue}, 36%, ${bgLight - 5}%)" opacity="0.5"/>`);
    }
    // 蝴蝶
    const fill = `hsl(${Math.round(bugHue)}, 58%, ${Math.round(bugLight)}%)`;
    out.push(`<g transform="translate(280 140)">`);
    out.push(`<ellipse cx="-26" cy="-14" rx="28" ry="20" fill="${fill}" stroke="rgba(0,0,0,0.22)" stroke-width="2"/>`);
    out.push(`<ellipse cx="26" cy="-14" rx="28" ry="20" fill="${fill}" stroke="rgba(0,0,0,0.22)" stroke-width="2"/>`);
    out.push(`<ellipse cx="-20" cy="14" rx="20" ry="15" fill="${fill}" stroke="rgba(0,0,0,0.22)" stroke-width="2"/>`);
    out.push(`<ellipse cx="20" cy="14" rx="20" ry="15" fill="${fill}" stroke="rgba(0,0,0,0.22)" stroke-width="2"/>`);
    out.push(`<rect x="-4" y="-24" width="8" height="48" rx="4" fill="#3d2c1e"/>`);
    out.push(`</g>`);
    out.push(txt(280, 28, '🐦 小鸟从天上扫一眼：你一眼能找到这只蝴蝶吗？', { size: 15, bold: true, color: INK }));
    // 下方存活率
    out.push(`<rect x="90" y="256" width="380" height="22" rx="11" fill="#f4efe9" stroke="#d8c9b0" stroke-width="1.5"/>`);
    out.push(`<rect x="90" y="256" width="${n(survive * 3.8)}" height="22" rx="11" fill="${survive > 65 ? GREEN : HOT}"/>`);
    out.push(txt(280, 272, `躲过天敌活下来的机会：约 ${survive}%`, { size: 13, bold: true, color: survive > 55 ? '#ffffff' : INK, plain: survive > 55 }));
    out.push(txt(280, 304, '活下来的个体把花色基因传给下一代，隐身术就越来越像', { size: 12, color: INK }));
    return out.join('');
  },
  readout(s) {
    if (s.match >= 75) return `翅膀颜色和背景高度接近（${s.match}%）：小鸟很难一眼发现，活下来生宝宝的机会大大提高！`;
    return `翅膀和背景反差太大（贴合度仅 ${s.match}%）：非常显眼，很容易先被天敌盯上，这种颜色就会越来越少。`;
  },
};

/** 3. 候鸟组合导航：开关地磁、太阳星空与地标，看大雁能否飞准终点 */
export const birdCompass: SimDef = {
  params: [
    { key: 'sky', label: '天气（太阳与星空）', min: 0, max: 1, step: 1, value: 1, labels: ['阴云密布', '晴空可见'] },
    { key: 'mag', label: '地磁感应', min: 0, max: 1, step: 1, value: 1, labels: ['被强磁干扰', '正常感应'] },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const cues = s.sky + s.mag;
    const drift = cues === 2 ? 0 : cues === 1 ? 26 : 95;
    const out: string[] = [];
    out.push(`<rect x="18" y="20" width="524" height="248" rx="16" fill="${s.sky ? '#eaf5ff' : '#dfe6ed'}"/>`);
    out.push(txt(86, 56, s.sky ? '☀️ 太阳 + ⭐ 星空' : '☁️ 看不见太阳星空', { size: 13, anchor: 'start', color: s.sky ? '#b45309' : '#5f6f69', bold: true }));
    out.push(txt(474, 56, s.mag ? '🧭 地磁线清晰' : '⚠️ 磁场干扰', { size: 13, anchor: 'end', color: s.mag ? BLUE : HOT, bold: true }));
    // 地磁弧线
    if (s.mag) {
      out.push(`<path d="M70 230 Q280 90 490 230" fill="none" stroke="${BLUE}" stroke-width="2" stroke-dasharray="6 6" opacity="0.5"/>`);
    }
    // 起点北方 & 终点南方湿地
    out.push(`<circle cx="80" cy="210" r="24" fill="#d3e6f7" stroke="${BLUE}" stroke-width="2.5"/>`);
    out.push(txt(80, 214, '北方', { size: 13, bold: true, color: BLUE }));
    out.push(`<circle cx="480" cy="210" r="26" fill="#c8f2dc" stroke="${GREEN}" stroke-width="2.5"/>`);
    out.push(txt(480, 214, '南方湖', { size: 13, bold: true, color: GREEN }));
    // 飞行轨迹
    const endY = 210 - drift;
    const midY = 148 - drift * 0.5;
    out.push(`<path d="M104 206 Q280 ${n(midY)} 454 ${n(endY)}" fill="none" stroke="${cues === 0 ? HOT : GREEN}" stroke-width="4" stroke-dasharray="9 6"/>`);
    // 飞动的大雁
    const u = (t * 0.35) % 1;
    const bx = 104 + u * 350;
    const by = (1 - u) * (1 - u) * 206 + 2 * (1 - u) * u * midY + u * u * endY;
    out.push(`<text x="${n(bx)}" y="${n(by)}" font-size="28" text-anchor="middle" dominant-baseline="central">🦢</text>`);
    out.push(txt(280, 296, cues === 2 ? '天空 + 地磁双保险：稳稳飞到南方越冬湿地！' : cues === 1 ? '靠剩下的那套导航备用，仍能大致找对方向' : '既看不见天又失了地磁，大雁容易偏航迷路', { size: 13, bold: true, color: cues === 0 ? HOT : GREEN }));
    return out.join('');
  },
  readout(s) {
    if (s.sky && s.mag) return `晴空加正常地磁：候鸟同时核对太阳星空和地球磁场，再认山川河流，跨越几千公里也不迷路。`;
    if (s.sky || s.mag) return `只剩${s.sky ? '太阳星空' : '地磁感应'}一项主导航：备用系统立刻顶上，依然能飞向南方，这就是组合导航的厉害之处。`;
    return `两套主导航同时失灵（如强风暴叠加干扰）：候鸟很容易偏航，说明它们真的在靠多种自然线索认路（偏离约 ${r1(95)} km 示意）。`;
  },
};
