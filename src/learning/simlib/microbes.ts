import { INK, HOT, GREEN, BLUE, PURPLE, n, txt, type SimDef } from './kit';

/** 1. 酵母菌发面：拖动面团发酵温度，看二氧化碳气泡和面团膨胀 */
export const yeastDough: SimDef = {
  params: [
    { key: 'temp', label: '发面温度', min: 4, max: 65, step: 1, value: 32, unit: ' ℃' },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const temp = s.temp;
    const dead = temp >= 55;
    const rate = dead ? 0 : Math.round(100 * Math.exp(-((temp - 32) ** 2) / 260));
    const puff = 1 + (rate / 100) * 0.42;
    const out: string[] = [];
    // 面盆
    out.push(`<path d="M120 220 Q280 278 440 220 L422 260 Q280 296 138 260 Z" fill="#d9b38c" stroke="#8b5a2b" stroke-width="3"/>`);
    // 膨胀的面团
    const rx = 112 * puff;
    const ry = 54 * puff;
    out.push(`<ellipse cx="280" cy="${n(218 - ry * 0.45)}" rx="${n(rx)}" ry="${n(ry)}" fill="#fff3d1" stroke="#d4a359" stroke-width="3.5"/>`);
    // 面团里的二氧化碳小气孔
    const holes = Math.round(rate / 8);
    for (let i = 0; i < holes; i += 1) {
      const a = i * 2.4;
      const hx = 280 + Math.cos(a) * (rx * 0.55) * ((i % 3 + 1) / 3);
      const hy = 212 - ry * 0.45 + Math.sin(a) * (ry * 0.48) * ((i % 2 + 1) / 2);
      const r = 5 + (i % 3) * 2.2 + Math.sin(t * 2 + i) * 0.8;
      out.push(`<circle cx="${n(hx)}" cy="${n(hy)}" r="${n(r)}" fill="#ffe0a3" stroke="#d4a359" stroke-width="1.2"/>`);
    }
    // 上方冒出的 CO2 提示
    if (rate > 15) {
      for (let i = 0; i < 3; i += 1) {
        const p = (t * 0.5 + i * 0.33) % 1;
        out.push(`<circle cx="${220 + i * 60}" cy="${n(120 - p * 54)}" r="9" fill="#e7f5ff" stroke="${BLUE}" stroke-width="1.8" opacity="${(1 - p).toFixed(2)}"/>`);
        out.push(txt(220 + i * 60, 124 - p * 54, 'CO₂', { size: 8, color: BLUE, bold: true }));
      }
    }
    out.push(txt(280, 32, `发面温度 ${temp} ℃ · 酵母菌产气活力 ${rate}%`, { size: 15, bold: true, color: dead ? HOT : GREEN }));
    out.push(txt(280, 56, dead ? '太烫了！酵母菌被烫死，面团发不起来' : temp < 15 ? '太冷了，酵母菌缩着不动，面团几乎不长个' : '温乎乎最舒服，酵母菌吃糖吐二氧化碳把面团撑松软！', { size: 13, color: dead ? HOT : INK, bold: dead }));
    out.push(txt(280, 298, '蒸熟后气体膨胀跑掉，留下满馒头松软的小气孔', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    if (s.temp < 15) return `${s.temp} ℃ 太冷：酵母菌活性很低，面团放半天也鼓不起来。`;
    if (s.temp >= 55) return `${s.temp} ℃ 太烫：酵母菌受不了高温死掉了，发面失败——所以不能用开水和面。`;
    return `${s.temp} ℃ 温暖刚好：酵母菌把面粉里的糖分解成二氧化碳，把面团撑出密密麻麻的松软小洞！`;
  },
};

/** 2. 细菌 vs 病毒与抗生素：切换病原体，点抗生素看能不能起作用 */
export const germVsVirus: SimDef = {
  params: [
    { key: 'bug', label: '闯进来的微生物', min: 0, max: 1, step: 1, value: 1, labels: ['细菌（有细胞壁）', '感冒病毒（无细胞）'] },
    { key: 'drug', label: '使用抗生素', min: 0, max: 1, step: 1, value: 1, labels: ['不用', '用抗生素'] },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const isVirus = s.bug === 1;
    const drug = s.drug === 1;
    const effective = !isVirus && drug;
    const out: string[] = [];
    if (!isVirus) {
      // 细菌：完整细胞结构 + 细胞壁
      out.push(`<rect x="160" y="96" width="240" height="120" rx="60" fill="${effective ? '#fbeae7' : '#d9f2dc'}" stroke="${effective ? HOT : GREEN}" stroke-width="${effective ? 4 : 6}" ${effective ? 'stroke-dasharray="14 10"' : ''}/>`);
      out.push(`<path d="M220 156 Q255 128 285 156 T340 156" fill="none" stroke="${PURPLE}" stroke-width="3.5"/>`);
      out.push(txt(280, 82, '细菌：完整的单细胞生物（有细胞壁）', { size: 14, bold: true, color: GREEN }));
      out.push(txt(280, 186, effective ? '💥 细胞壁被抗生素拆破！' : '能自己吃营养、自己分裂', { size: 13, bold: true, color: effective ? HOT : INK }));
    } else {
      // 病毒：蛋白质外壳 + 遗传物质（极小、无细胞）
      const sway = Math.sin(t * 4) * 6;
      out.push(`<g transform="translate(${n(280 + sway)} 156)">`);
      out.push(`<polygon points="0,-54 47,-27 47,27 0,54 -47,27 -47,-27" fill="#efe5ff" stroke="${PURPLE}" stroke-width="4"/>`);
      out.push(`<path d="M-20 -12 Q0 -28 20 -12 T-16 14 T22 14" fill="none" stroke="${HOT}" stroke-width="3"/>`);
      out.push(`</g>`);
      out.push(txt(280, 82, '病毒：没有细胞结构！只是蛋白质壳包着一段密码', { size: 14, bold: true, color: PURPLE }));
    }
    if (drug) {
      const px = effective ? 280 : 120 + ((t * 180) % 340);
      out.push(`<rect x="${n(px - 24)}" y="142" width="48" height="22" rx="11" fill="#ff9f43" stroke="#a8501a" stroke-width="2"/>`);
      out.push(txt(px, 157, '抗生素', { size: 10, bold: true, color: '#ffffff', plain: true }));
    }
    out.push(txt(280, 260, !drug ? '没有用抗生素：靠免疫系统识别并清除' : effective ? '✅ 抗生素瞄准细菌细胞壁，精准帮身体清除细菌感染' : '❌ 病毒没有细胞壁，抗生素完全找不到攻击目标，吃了也没用！', { size: 13.5, bold: true, color: effective ? GREEN : drug ? HOT : BLUE }));
    out.push(txt(280, 294, '普通感冒多由病毒引起，乱吃抗生素既治不好感冒，还会养出耐药菌', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    if (s.bug === 0 && s.drug === 1) return '细菌感染 + 遵医嘱用抗生素：抗生素破坏细菌特有的细胞壁或代谢部件，精准消灭细菌。';
    if (s.bug === 1 && s.drug === 1) return '病毒感冒 + 抗生素：病毒根本没有细胞结构和细胞壁，抗生素对它完全无效，反而误伤有益菌！';
    return s.bug === 1 ? '病毒必须钻进活细胞才能复制，打败普通感冒主要靠免疫系统、多喝水和休息。' : '细菌是有细胞壁的单细胞生物，并不是所有细菌都是坏的，只有致病菌才需要医生对症用药。';
  },
};

/** 3. 肠道菌群平衡：调蔬果膳食纤维摄入，看有益菌占位、挡住坏菌 */
export const gutGarden: SimDef = {
  params: [
    { key: 'fiber', label: '每天蔬菜与全谷物', min: 0, max: 100, step: 25, value: 75, unit: '%' },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const good = Math.round(3 + (s.fiber / 100) * 11); // 3..14 个有益菌
    const bad = Math.max(1, 7 - Math.round((s.fiber / 100) * 6)); // 7..1 个坏菌
    const out: string[] = [];
    out.push(`<rect x="28" y="64" width="504" height="168" rx="28" fill="#fff5ec" stroke="#f3c69f" stroke-width="4"/>`);
    out.push(txt(280, 40, '肠道像一座花园：有益菌吃膳食纤维，占满地盘把坏菌挡在外面', { size: 14, bold: true, color: INK }));
    // 有益菌（绿色友好胶囊）
    for (let i = 0; i < good; i += 1) {
      const gx = 68 + (i % 7) * 68 + Math.sin(t * 2 + i) * 4;
      const gy = 108 + Math.floor(i / 7) * 58;
      out.push(`<rect x="${n(gx - 18)}" y="${n(gy - 11)}" width="36" height="22" rx="11" fill="#69db7c" stroke="${GREEN}" stroke-width="2"/>`);
      out.push(txt(gx, gy + 4, '益', { size: 11, bold: true, color: '#1b5e20' }));
    }
    // 坏菌（红色带刺圆）
    for (let i = 0; i < bad; i += 1) {
      const bx = 468 - (i % 4) * 56 + Math.cos(t * 3 + i) * 5;
      const by = 198 - Math.floor(i / 4) * 48;
      out.push(`<circle cx="${n(bx)}" cy="${n(by)}" r="12" fill="#ff8787" stroke="#b03f38" stroke-width="2"/>`);
      out.push(txt(bx, by + 4, '坏', { size: 10, bold: true, color: '#ffffff', plain: true }));
    }
    out.push(txt(150, 260, `有益菌群：${good} 队（产维生素、助消化）`, { size: 13.5, bold: true, color: GREEN }));
    out.push(txt(425, 260, `捣乱坏菌：${bad} 队`, { size: 13.5, bold: true, color: bad > 3 ? HOT : INK }));
    out.push(txt(280, 294, s.fiber >= 50 ? '地盘被好朋友占满，坏菌找不到落脚处！' : '长期缺蔬果膳食纤维，有益菌挨饿变少，坏菌就容易趁虚而入', { size: 13, bold: true, color: s.fiber >= 50 ? GREEN : HOT }));
    return out.join('');
  },
  readout(s) {
    if (s.fiber >= 75) return `蔬果全谷物充足（${s.fiber}%）：肠道里的有益菌吃饱壮大，帮着分解纤维、造维生素，把坏菌挤得没地盘。`;
    if (s.fiber >= 25) return `蔬果摄入一般（${s.fiber}%）：有益菌勉强守住阵地，多吃蔬菜、水果和杂粮能让它们更强壮。`;
    return '几乎不吃蔬果纤维：有益菌缺少食物变少，肠道屏障变弱，坏菌更容易趁机捣乱。';
  },
};

/** 4. 巴斯德鹅颈瓶与牛奶灭菌：切换鹅颈瓶 / 72℃ 巴氏鲜奶 / 135℃ 超高温常温奶 */
export const pasteurFlask: SimDef = {
  params: [
    { key: 'kind', label: '杀菌与密封方式', min: 0, max: 3, step: 1, value: 3, labels: ['煮沸后敞口放着', '巴斯德鹅颈瓶（弯管挡菌）', '巴氏鲜奶（72℃·冷藏）', '常温纯牛奶（135℃+无菌盒）'] },
  ],
  animated: false,
  draw(s) {
    const k = s.kind;
    const germs = [95, 0, 12, 0][k];
    const days = ['1~2 天变臭', '放几年仍清亮！', '冷藏约 7~15 天', '常温密封存 6 个月'][k];
    const out: string[] = [];
    out.push(txt(280, 28, '食物变质不是“自己凭空长细菌”，杀灭原菌 + 挡住外菌就不用防腐剂！', { size: 13.2, bold: true, color: INK }));
    // 左：容器演示
    out.push(`<rect x="24" y="48" width="248" height="198" rx="16" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2"/>`);
    if (k <= 1) {
      // 烧瓶
      out.push(`<circle cx="136" cy="176" r="46" fill="${k === 0 ? '#e9d8a6' : '#fff3bf'}" stroke="${BLUE}" stroke-width="3"/>`);
      out.push(`<rect x="126" y="96" width="20" height="36" fill="none" stroke="${BLUE}" stroke-width="3"/>`);
      if (k === 1) {
        out.push(`<path d="M136 96 Q136 62 178 68 Q208 74 198 128 Q192 152 216 142" fill="none" stroke="${BLUE}" stroke-width="7" stroke-linecap="round"/>`);
        out.push(`<circle cx="196" cy="136" r="6" fill="${HOT}"/>`);
        out.push(txt(148, 234, '空气进得去，灰尘细菌全卡在弯管底！', { size: 11.5, bold: true, color: GREEN }));
      } else {
        out.push(txt(136, 78, '🦠 空气细菌直落肉汤', { size: 12, bold: true, color: HOT }));
        out.push(txt(148, 234, '打断鹅颈敞口：细菌掉进去飞快变浑发臭', { size: 11.5, bold: true, color: HOT }));
      }
    } else {
      // 牛奶盒
      out.push(`<rect x="96" y="84" width="104" height="128" rx="12" fill="${k === 2 ? '#e7f5ff' : '#e6f4e8'}" stroke="${k === 2 ? BLUE : GREEN}" stroke-width="3"/>`);
      out.push(txt(148, 132, k === 2 ? '🥛 鲜牛奶' : '🥛 纯牛奶', { size: 16, bold: true, color: INK }));
      out.push(txt(148, 158, k === 2 ? '72 ℃ · 15 秒' : '135 ℃ · 数秒', { size: 13, bold: true, color: k === 2 ? BLUE : GREEN }));
      out.push(txt(148, 182, '配料：100% 生牛乳', { size: 11, color: INK }));
      out.push(txt(148, 232, k === 2 ? '杀灭致病菌留风味，剩少量芽孢需冷藏' : '细菌芽孢全灭光 + 六层铝塑无菌盒隔空！', { size: 11.5, bold: true, color: GREEN }));
    }

    // 右：保鲜成绩单
    out.push(`<rect x="290" y="48" width="246" height="198" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(413, 80, '保鲜与细菌账单', { size: 14.5, bold: true, color: INK }));
    out.push(txt(310, 118, `存活微生物：${germs}%`, { size: 13, anchor: 'start', bold: true, color: germs > 20 ? HOT : GREEN }));
    out.push(`<rect x="310" y="128" width="204" height="15" rx="7.5" fill="#f4efe9"/><rect x="310" y="128" width="${n(germs * 2.04)}" height="15" rx="7.5" fill="${germs > 20 ? HOT : '#51cf66'}"/>`);
    out.push(txt(413, 176, `保质时间：${days}`, { size: 14, bold: true, color: PURPLE }));
    out.push(txt(413, 206, '防腐剂添加量：0（一滴没加！）', { size: 13, bold: true, color: GREEN }));
    out.push(txt(413, 232, '⚠️ 一旦插吸管开封，当天就要喝完哦', { size: 11.5, color: HOT, bold: true }));

    out.push(txt(280, 288, '常温奶和巴氏鲜奶蛋白质与钙含量差不多，按需挑选、开封冷藏最安心', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '煮沸后敞口：虽然煮死了原来的细菌，但空气里的细菌很快落进去繁殖，一两天就变质发臭。',
      '巴斯德鹅颈瓶：细长弯管让空气通过，却把灰尘和微生物拦在最低处的弯折里，肉汤放上几年依然清澈！',
      '巴氏杀菌鲜奶：约 72 ℃ 加热 15 秒杀灭致病菌、最大化保留鲜奶风味，但还剩极少量耐热菌，必须 2~6 ℃ 冷藏。',
      '超高温灭菌常温纯牛奶：约 135 ℃ 瞬时把细菌和芽孢彻底归零，再装进隔光隔氧的无菌砖，不加一滴防腐剂也能常温存半年！',
    ][s.kind];
  },
};

/** 5. 弗莱明培养皿抑菌圈：拖动培养天数，观察青霉周围细菌溶解出现透明抑菌圈 */
export const penicillinZone: SimDef = {
  params: [
    { key: 'day', label: '培养皿观察阶段', min: 0, max: 2, step: 1, value: 1, labels: ['没落入青霉（长满细菌）', '1928 弗莱明培养皿（抑菌圈！）', '乱停药剩耐药菌反扑'] },
  ],
  animated: false,
  draw(s) {
    const d = s.day;
    const out: string[] = [];
    out.push(txt(280, 28, '1928 年圣玛丽医院培养皿：青霉菌分泌青霉素，在周围清出一圈“无人区”', { size: 13.2, bold: true, color: INK }));
    // 左：圆形培养皿俯视
    out.push(`<circle cx="152" cy="154" r="94" fill="#fff9db" stroke="#adb5bd" stroke-width="5"/>`);
    if (d === 1) {
      // 青霉菌落 + 透明抑菌圈
      out.push(`<circle cx="132" cy="126" r="56" fill="#fffef5" stroke="${GREEN}" stroke-width="1.5" stroke-dasharray="5 4"/>`);
      out.push(`<circle cx="132" cy="126" r="24" fill="#69db7c" stroke="${GREEN}" stroke-width="3"/>`);
      out.push(txt(132, 130, '青霉', { size: 12, bold: true, color: '#1b5e20' }));
    }
    // 黄色葡萄球菌菌落点
    for (let i = 0; i < 26; i += 1) {
      const a = i * 2.399;
      const r = 16 + (i % 7) * 11;
      const bx = 152 + Math.cos(a) * r;
      const by = 154 + Math.sin(a) * r;
      if (d === 1 && Math.hypot(bx - 132, by - 126) < 55) continue;
      const resistant = d === 2 && i % 3 === 0;
      if (d === 2 && !resistant) continue;
      out.push(`<circle cx="${n(bx)}" cy="${n(by)}" r="${resistant ? 7 : 5.5}" fill="${resistant ? HOT : '#f59f00'}"/>`);
    }

    // 右：原理与安全说明
    out.push(`<rect x="278" y="54" width="258" height="196" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(407, 84, ['整盘长满金黄色葡萄球菌', '🔍 透明圈：细菌细胞壁被拆破！', '⚠️ 半途停药：筛出超级耐药菌'][d], { size: 14, bold: true, color: d === 1 ? GREEN : HOT }));
    out.push(txt(407, 122, d === 1 ? '青霉素专拦细菌砌“细胞壁”' : d === 2 ? '怕药的死了，扛药的活下来猛长' : '没有青霉素阻拦，细菌迅速繁殖', { size: 12.5, color: INK }));
    out.push(txt(407, 152, d === 1 ? '人体细胞没细胞壁，所以不伤人' : '吃抗生素必须遵医嘱足疗程吃完', { size: 12.5, color: BLUE, bold: true }));
    out.push(`<rect x="296" y="176" width="222" height="54" rx="12" fill="#fff0ee"/>`);
    out.push(txt(407, 198, '🚫 千万别吃发霉面包或烂橘子！', { size: 12.5, bold: true, color: HOT }));
    out.push(txt(407, 218, '食物霉斑含剧毒霉菌毒素，不是药！', { size: 11.5, color: INK }));

    out.push(txt(280, 288, '弗莱明发现现象，弗洛里与钱恩攻克提纯量产，三人共享 1945 年诺贝尔奖', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '普通细菌培养皿：营养琼脂上密密麻麻长满金黄色葡萄球菌菌落。',
      '弗莱明的发现：一朵飘进来的青霉菌周围出现了一圈干净透明的“抑菌圈”——它分泌的青霉素阻止细菌合成细胞壁，让细菌自己裂解了！',
      '乱吃或擅自提前停用抗生素：普通细菌死光后，极少数天生耐药的突变菌失去竞争对手反而疯长，以后再用同种药就不管用了。',
    ][s.day];
  },
};

/** 6. 屠呦呦低温提取青蒿素：调节提取温度与溶剂，看青蒿素过氧桥完整度与疟原虫清除率 */
export const artemisininExtract: SimDef = {
  params: [
    { key: 'method', label: '青蒿提取方法', min: 0, max: 2, step: 1, value: 2, labels: ['100 ℃ 沸水熬汤（传统煎煮）', '乙醇加热回流（约 78 ℃）', '35 ℃ 乙醚冷浸提取（屠呦呦突破）'] },
  ],
  animated: false,
  draw(s) {
    const m = s.method;
    const intact = [18, 36, 98][m];
    const clearRate = [20, 40, 100][m];
    const out: string[] = [];
    out.push(txt(280, 28, '《肘后备急方》“青蒿一握，以水二升渍，绞取汁” → 怕热的青蒿素不能煮！', { size: 13, bold: true, color: INK }));
    // 左：分子结构（过氧桥 -O-O-）与提取锅
    out.push(`<rect x="24" y="48" width="248" height="198" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(148, 76, ['🔥 100 ℃ 滚水煎煮', '♨️ 78 ℃ 加热提取', '❄️ 35 ℃ 低沸点乙醚提取'][m], { size: 14, bold: true, color: m === 2 ? GREEN : HOT }));
    // 画青蒿素过氧桥示意环
    out.push(`<circle cx="148" cy="142" r="42" fill="${m === 2 ? '#e6f4e8' : '#fbeae7'}" stroke="${m === 2 ? GREEN : '#adb5bd'}" stroke-width="3"/>`);
    if (m === 2) {
      out.push(`<line x1="124" y1="142" x2="172" y2="142" stroke="${HOT}" stroke-width="5"/>`);
      out.push(`<circle cx="132" cy="142" r="10" fill="${HOT}"/><circle cx="164" cy="142" r="10" fill="${HOT}"/>`);
      out.push(txt(148, 122, '关键“过氧桥”完好！', { size: 11.5, bold: true, color: GREEN }));
    } else {
      out.push(`<line x1="120" y1="134" x2="138" y2="148" stroke="#868e96" stroke-width="4"/>`);
      out.push(`<line x1="176" y1="134" x2="158" y2="148" stroke="#868e96" stroke-width="4"/>`);
      out.push(txt(148, 122, '高温把过氧桥震断了！', { size: 11.5, bold: true, color: HOT }));
    }
    out.push(txt(148, 206, `完好活性青蒿素：${intact}%`, { size: 13, bold: true, color: m === 2 ? GREEN : HOT }));
    out.push(txt(148, 228, '青蒿素专打红细胞里的疟原虫', { size: 11.5, color: INK }));

    // 右：红细胞内疟原虫清除效果
    out.push(`<rect x="290" y="48" width="246" height="198" rx="16" fill="#fff5f5" stroke="#ffc9c9" stroke-width="2"/>`);
    out.push(txt(413, 76, '🩸 红细胞与疟原虫（单细胞寄生虫）', { size: 13, bold: true, color: '#c92a2a' }));
    for (let i = 0; i < 4; i += 1) {
      const rx = 342 + (i % 2) * 140;
      const ry = 118 + Math.floor(i / 2) * 56;
      out.push(`<circle cx="${rx}" cy="${ry}" r="22" fill="#ff8787" stroke="#c92a2a" stroke-width="2.5"/>`);
      if (m < 2 && (i < 3 - m)) {
        out.push(`<circle cx="${rx}" cy="${ry}" r="7" fill="${PURPLE}"/>`);
      }
    }
    out.push(txt(413, 214, `实验鼠疟原虫抑制率：约 ${clearRate}%`, { size: 14, bold: true, color: m === 2 ? GREEN : HOT }));
    out.push(txt(413, 234, m === 2 ? '✅ 红细胞干干净净，全部康复！' : '❌ 紫点疟原虫还在涨破红细胞', { size: 12, bold: true, color: m === 2 ? GREEN : HOT }));

    out.push(txt(280, 288, '屠呦呦团队 1972 年提纯出青蒿素结晶，挽救全球数百万生命（2015 年诺贝尔奖）', { size: 12.2, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '100 ℃ 沸水煎煮：青蒿素分子里抗疟最关键的“过氧桥”怕热被破坏，药效只剩约一两成，时灵时不灵。',
      '约 78 ℃ 乙醇提取：温度仍然偏高，部分有效成分受损，对鼠疟的抑制率在 12%~40% 之间剧烈波动。',
      '35 ℃ 低温乙醚提取：受古籍“冷水浸泡绞汁”启发改用低沸点溶剂并去除酸性杂质，完好保住青蒿素结构，对实验动物疟原虫抑制率达 100%！',
    ][s.method];
  },
};
