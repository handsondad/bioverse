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

/** 4. 鱼鳃在水中展开 vs 离水粘连：切换鱼所处环境，看鳃丝有效交换面积与血氧 */
export const gillFilament: SimDef = {
  params: [
    { key: 'env', label: '鱼在哪里', min: 0, max: 1, step: 1, value: 0, labels: ['在水里（鳃丝浮起展开）', '捞到岸上（鳃丝粘连成团）'] },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const inWater = s.env === 0;
    const area = inWater ? 95 : 14;
    const o2In = inWater ? 90 : 16;
    const out: string[] = [];
    out.push(`<rect x="20" y="44" width="256" height="196" rx="16" fill="${inWater ? '#d0ebff' : '#fff4e6'}" stroke="${inWater ? BLUE : '#f59f00'}" stroke-width="2.5"/>`);
    out.push(txt(148, 70, inWater ? '💧 水托住每一根细软鳃丝' : '🌬️ 空气氧占 21%，鳃丝却塌粘在一起', { size: 12.5, bold: true, color: inWater ? BLUE : HOT }));
    out.push(`<path d="M74 96 Q58 148 74 204" fill="none" stroke="#f08c00" stroke-width="8" stroke-linecap="round"/>`);
    for (let i = 0; i < 11; i += 1) {
      const y0 = 102 + i * 9.5;
      const sway = inWater ? Math.sin(t * 3 + i * 0.5) * 3 : 0;
      const yEnd = inWater ? 92 + i * 11.5 + sway : 146 + (i - 5) * 1.6;
      out.push(`<path d="M76 ${n(y0)} Q148 ${n((y0 + yEnd) / 2)} 222 ${n(yEnd)}" fill="none" stroke="#e03131" stroke-width="3.2" stroke-linecap="round"/>`);
    }
    out.push(txt(148, 224, inWater ? '像水中展开的红羽毛，水流顺畅穿过' : '像出水的湿毛笔，表面全糊住了！', { size: 12, bold: true, color: inWater ? GREEN : HOT }));

    out.push(`<rect x="294" y="44" width="246" height="196" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(417, 76, '气体交换成绩单', { size: 15, bold: true, color: INK }));
    out.push(txt(314, 116, `摊开的有效面积：${area}%`, { size: 13, anchor: 'start', bold: true, color: INK }));
    out.push(`<rect x="314" y="124" width="204" height="16" rx="8" fill="#f4efe9"/><rect x="314" y="124" width="${n(area * 2.04)}" height="16" rx="8" fill="${inWater ? GREEN : HOT}"/>`);
    out.push(txt(314, 174, `血液吸进的氧气：${o2In}%`, { size: 13, anchor: 'start', bold: true, color: INK }));
    out.push(`<rect x="314" y="182" width="204" height="16" rx="8" fill="#f4efe9"/><rect x="314" y="182" width="${n(o2In * 2.04)}" height="16" rx="8" fill="${inWater ? BLUE : HOT}"/>`);
    out.push(txt(417, 222, inWater ? '逆流交换可吸走水里近八成溶解氧' : '里面夹层的鳃小片根本碰不到空气', { size: 11.5, color: INK }));

    out.push(txt(280, 26, '鱼在岸上憋死不是因为空气没氧，而是呼吸“摊子”塌成了一团', { size: 14, bold: true, color: INK }));
    out.push(txt(280, 286, '买活鱼或观察小鱼时别让鳃干掉，我们的肺靠支气管软骨和肺泡撑住才不怕塌', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    return s.env === 0
      ? '在水里：水的浮力把成千上万根细软鳃丝和鳃小片托开，摊出巨大表面积，溶解氧源源不断进入毛细血管。'
      : '离开水到岸上：空气氧气虽然比水里多得多，但失去浮力的鳃丝立刻粘成一绺，有效接触面积只剩零头，鱼很快就缺氧窒息！';
  },
};

/** 5. 毛毛虫化蛹成蝶：拖动蛹期进度，透视旧组织拆解与“成虫盘”长出翅足复眼 */
export const pupaRebuild: SimDef = {
  params: [
    { key: 'day', label: '完全变态阶段', min: 0, max: 3, step: 1, value: 1, labels: ['幼虫（藏着成虫盘）', '蛹初期（酶拆旧组织）', '蛹后期（成虫盘组装）', '羽化成蝴蝶'] },
  ],
  animated: false,
  draw(s) {
    const d = s.day;
    const out: string[] = [];
    out.push(txt(280, 28, '蛹壳透视：不是光长对翅膀，而是用“营养汤 + 成虫盘”重装全身！', { size: 13.5, bold: true, color: INK }));
    out.push(`<rect x="30" y="48" width="500" height="206" rx="18" fill="#f6fbf4" stroke="#b7e4c7" stroke-width="2"/>`);
    if (d === 0) {
      for (let i = 0; i < 6; i += 1) {
        out.push(`<circle cx="${160 + i * 38}" cy="148" r="24" fill="#74c69d" stroke="${GREEN}" stroke-width="2.5"/>`);
      }
      for (const dx of [198, 236, 274]) {
        out.push(`<circle cx="${dx}" cy="142" r="6" fill="${HOT}" stroke="#fff" stroke-width="1.5"/>`);
      }
      out.push(txt(280, 214, '毛毛虫身体里早就备好了微小的“成虫盘”（橙点：未来翅膀和复眼的种子）', { size: 12.5, bold: true, color: HOT }));
    } else if (d === 1) {
      out.push(`<line x1="280" y1="54" x2="280" y2="82" stroke="#5d4e37" stroke-width="4"/>`);
      out.push(`<ellipse cx="280" cy="144" rx="54" ry="66" fill="#d8f3dc" stroke="${GREEN}" stroke-width="4"/>`);
      out.push(`<ellipse cx="280" cy="152" rx="40" ry="46" fill="#fff3bf"/>`);
      for (const [cx, cy] of [[262, 124], [298, 124], [260, 156], [300, 156]]) {
        out.push(`<circle cx="${cx}" cy="${cy}" r="9" fill="${HOT}" stroke="#fff" stroke-width="2"/>`);
      }
      out.push(txt(280, 230, '蛹壳内：酶把啃叶子的旧肌肉和肠道拆成蛋白质营养汤，成虫盘和主气管完好保留！', { size: 12.5, bold: true, color: INK }));
    } else if (d === 2) {
      out.push(`<line x1="280" y1="54" x2="280" y2="82" stroke="#5d4e37" stroke-width="4"/>`);
      out.push(`<ellipse cx="280" cy="144" rx="54" ry="66" fill="#e9fac8" stroke="${GREEN}" stroke-width="4"/>`);
      out.push(`<ellipse cx="264" cy="146" rx="18" ry="34" fill="#ff9f43" stroke="${HOT}" stroke-width="2"/>`);
      out.push(`<ellipse cx="296" cy="146" rx="18" ry="34" fill="#ff9f43" stroke="${HOT}" stroke-width="2"/>`);
      out.push(`<circle cx="280" cy="106" r="12" fill="#5c4033"/>`);
      out.push(txt(280, 230, '成虫盘吸取营养汤高速分裂上千倍，折叠好的彩翅、复眼和吸管嘴已经成型！', { size: 12.5, bold: true, color: GREEN }));
    } else {
      out.push(`<ellipse cx="236" cy="132" rx="48" ry="32" fill="#ff922b" stroke="#5c4033" stroke-width="3"/>`);
      out.push(`<ellipse cx="324" cy="132" rx="48" ry="32" fill="#ff922b" stroke="#5c4033" stroke-width="3"/>`);
      out.push(`<ellipse cx="246" cy="166" rx="34" ry="22" fill="#ffd43b" stroke="#5c4033" stroke-width="2.5"/>`);
      out.push(`<ellipse cx="314" cy="166" rx="34" ry="22" fill="#ffd43b" stroke="#5c4033" stroke-width="2.5"/>`);
      out.push(`<rect x="274" y="106" width="12" height="74" rx="6" fill="#3d2c1e"/>`);
      out.push(txt(280, 230, '破蛹羽化！体液泵进翅脉撑开翅膀，吃树叶的幼虫变成吸花蜜的蝴蝶', { size: 12.5, bold: true, color: HOT }));
    }
    out.push(txt(280, 290, '幼虫啃叶、成虫吸蜜，两代不抢同一种食物，这是完全变态昆虫超成功的秘诀', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '毛毛虫幼虫期：虽然看着只会狂吃树叶，体内却早已藏好一对对“成虫盘”种子细胞团，等待化蛹信号。',
      '刚化蛹时：消化酶把幼虫大部分旧组织拆成富含蛋白质的营养汤，但成虫盘、呼吸气管和部分记忆神经被精准保护下来！',
      '蛹期后半段：成虫盘吃着营养汤飞速分裂分化，原本几十个细胞的翅盘长成几万个细胞的彩色翅膀。',
      '羽化出蛹：蝴蝶钻出蛹壳，把体液打进翅膀脉络撑平晾干，彻底完成生命的华丽重装！',
    ][s.day];
  },
};

/** 6. 企鹅脚掌逆流热交换：切换普通血管 vs 逆流热交换网，看沿途温度与漏热量 */
export const penguinFeet: SimDef = {
  params: [
    { key: 'net', label: '腿部血管排布', min: 0, max: 1, step: 1, value: 1, labels: ['分开走（假设无热交换）', '紧贴逆流热交换（真实企鹅）'] },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const smart = s.net === 1;
    const footTemp = smart ? 3 : 28;
    const heatLoss = smart ? 12 : 88;
    const out: string[] = [];
    out.push(`<rect x="20" y="230" width="520" height="44" rx="12" fill="#d0ebff" stroke="#74c0fc" stroke-width="2"/>`);
    out.push(txt(152, 257, '🧊 南极冰面 −30 ℃', { size: 13.5, bold: true, color: BLUE }));
    out.push(`<rect x="52" y="42" width="204" height="50" rx="16" fill="#ffe8cc" stroke="#d97706" stroke-width="2.5"/>`);
    out.push(txt(154, 72, '🐧 羽毛躯干核心：39 ℃', { size: 14, bold: true, color: '#7c2d12' }));
    const ax = smart ? 138 : 98;
    const vx = smart ? 170 : 210;
    out.push(`<line x1="${ax}" y1="92" x2="${ax}" y2="216" stroke="${HOT}" stroke-width="12" stroke-linecap="round"/>`);
    out.push(`<line x1="${vx}" y1="216" x2="${vx}" y2="92" stroke="${BLUE}" stroke-width="12" stroke-linecap="round"/>`);
    if (smart) {
      const shift = (t * 16) % 16;
      for (let y = 112; y <= 192; y += 26) {
        out.push(`<line x1="${ax + 6}" y1="${n(y + shift * 0.2)}" x2="${vx - 6}" y2="${n(y + shift * 0.2)}" stroke="#ff922b" stroke-width="3"/>`);
      }
      out.push(txt(74, 116, '39℃', { size: 12, bold: true, color: HOT }));
      out.push(txt(74, 160, '18℃', { size: 12, bold: true, color: '#e67700' }));
      out.push(txt(74, 204, '4℃', { size: 12, bold: true, color: BLUE }));
      out.push(txt(232, 116, '36℃ 回身体', { size: 12, bold: true, color: '#e67700' }));
      out.push(txt(232, 204, '2℃ 起步', { size: 12, bold: true, color: BLUE }));
    } else {
      out.push(txt(56, 160, '39℃ 直冲脚底', { size: 11.5, bold: true, color: HOT }));
      out.push(txt(248, 160, '冰血直回心脏', { size: 11.5, bold: true, color: BLUE }));
    }
    out.push(`<ellipse cx="154" cy="224" rx="52" ry="12" fill="${smart ? '#ffd8a8' : '#ffa8a8'}" stroke="#c9623b" stroke-width="2.5"/>`);

    out.push(`<rect x="302" y="50" width="234" height="172" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(419, 82, `脚掌实测温度：约 ${footTemp} ℃`, { size: 14.5, bold: true, color: smart ? GREEN : HOT }));
    out.push(txt(320, 122, `白白散到冰面的热量：${heatLoss}%`, { size: 12.5, anchor: 'start', bold: true, color: INK }));
    out.push(`<rect x="320" y="132" width="196" height="16" rx="8" fill="#f4efe9"/><rect x="320" y="132" width="${n(heatLoss * 1.96)}" height="16" rx="8" fill="${smart ? GREEN : HOT}"/>`);
    out.push(txt(419, 178, smart ? '✅ 略高于 0 ℃：既不结冰，也不化冰粘脚' : '❌ 狂漏全身热量，还会化冰再冻住脚掌！', { size: 12, bold: true, color: smart ? GREEN : HOT }));
    out.push(txt(419, 204, '脚里多是肌腱韧带，靠腿上肌肉拉线控制', { size: 11.5, color: INK }));

    out.push(txt(280, 24, '逆流热交换：下楼的热血顺手把热量交接给上楼的冷血', { size: 14, bold: true, color: INK }));
    out.push(txt(280, 298, '鸭子、海鸥站在冰河里不冻脚，用的也是同一套逆流热交换血管网', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    return s.net === 1
      ? '真实企鹅腿里的动脉和静脉紧紧贴在一起：往下流的热血一路把热量传给往上回流的冷血，脚掌稳在 1~4 ℃，不冻伤又省热！'
      : '假如动静脉分开走不交接热量：39 ℃ 的热血直接冲进脚掌踩在冰上，不仅飞快耗光全身热量，还会融化冰面再把脚冻住。';
  },
};
