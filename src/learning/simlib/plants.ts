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
      out.push(txt(424, 166, '水分子手拉手', { size: 13, color: BLUE, bold: true }));
      out.push(txt(424, 186, '被一路拉上去', { size: 13, color: BLUE, bold: true }));
    } else {
      out.push(txt(424, 166, '气孔紧闭', { size: 13, color: HOT, bold: true }));
      out.push(txt(424, 186, '水柱几乎不动', { size: 13, color: HOT, bold: true }));
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

/** 4. 绿豆萌发条件：调节水量与光照，看种子出芽、变绿还是缺氧烂种 */
export const beanSprout: SimDef = {
  params: [
    { key: 'water', label: '碗里的水量', min: 0, max: 2, step: 1, value: 1, labels: ['完全干燥', '湿润透气（刚好）', '水灌满淹没'] },
    { key: 'light', label: '有没有照光', min: 0, max: 1, step: 1, value: 0, labels: ['黑盒遮光', '窗台见光'] },
  ],
  animated: false,
  draw(s) {
    const w = s.water;
    const lit = s.light === 1;
    const sprout = w === 1;
    const out: string[] = [];
    out.push(`<rect x="20" y="42" width="520" height="218" rx="16" fill="${lit ? '#fffbeb' : '#2b2d38'}"/>`);
    if (lit) out.push(`<circle cx="482" cy="84" r="24" fill="#ffd43b"/>`);
    else out.push(txt(468, 82, '🌙 遮光黑盒', { size: 13, color: '#e9ecef', bold: true, plain: true }));
    // 育苗碗
    out.push(`<rect x="130" y="132" width="300" height="104" rx="18" fill="#ffffff" stroke="#b08968" stroke-width="3.5"/>`);
    if (w === 1) {
      out.push(`<rect x="136" y="206" width="288" height="24" rx="10" fill="#cfe8ff"/>`);
      out.push(txt(280, 222, '湿纱布：既有水分，又留足空气 O₂', { size: 12, color: BLUE, bold: true }));
    } else if (w === 2) {
      out.push(`<rect x="136" y="144" width="288" height="86" rx="12" fill="#a5d8ff"/>`);
      out.push(txt(280, 222, '水淹没过头：氧气进不来，无氧呼吸产酒精！', { size: 12, color: HOT, bold: true }));
    } else {
      out.push(txt(280, 222, '干巴巴一滴水没有：种皮硬邦邦，酶没法干活', { size: 12, color: '#8b5a2b', bold: true }));
    }
    // 三颗绿豆
    for (let i = 0; i < 3; i += 1) {
      const bx = 200 + i * 80;
      const by = 192;
      const beanCol = w === 2 ? '#8d7b68' : '#51a355';
      out.push(`<ellipse cx="${bx}" cy="${by}" rx="16" ry="11" fill="${beanCol}" stroke="#2e5a30" stroke-width="2"/>`);
      if (sprout) {
        out.push(`<path d="M${bx} ${by} Q${bx - 6} ${by - 28} ${bx + 4} ${by - 48}" fill="none" stroke="#fff9db" stroke-width="6" stroke-linecap="round"/>`);
        const cotCol = lit ? '#40c057' : '#ffe066';
        out.push(`<ellipse cx="${bx - 4}" cy="${by - 52}" rx="10" ry="6" fill="${cotCol}"/>`);
        out.push(`<ellipse cx="${bx + 10}" cy="${by - 50}" rx="10" ry="6" fill="${cotCol}"/>`);
      }
    }
    const status = w === 0 ? '❌ 缺水未萌发' : w === 2 ? '❌ 缺氧发酸烂种' : lit ? '✅ 萌发并长出叶绿素（绿豆芽）' : '✅ 照样萌发！长出嫩黄豆芽';
    out.push(txt(280, 28, status, { size: 15, bold: true, color: sprout ? GREEN : HOT }));
    out.push(txt(280, 290, '发芽初期吃子叶里存的干粮，不需要阳光；长出真叶后才靠阳光造粮', { size: 13, color: INK }));
    return out.join('');
  },
  readout(s) {
    if (s.water === 0) return '完全干燥：种子处于休眠状态，没有水软化种皮和激活酶，晒不晒太阳都不会发芽。';
    if (s.water === 2) return '水灌太满全淹没：水把空气挡在外面，绿豆缺氧被迫无氧呼吸产生酒精，没几天就发臭烂掉了！';
    return s.light === 0
      ? '湿润透气 + 遮光：水分、空气和室温齐备，绿豆顺利发成白白胖胖的黄顶豆芽——证明发芽根本不需要光！'
      : '湿润透气 + 见光：绿豆同样顺利发芽，而且子叶和嫩芽见光合成了叶绿素，变成绿莹莹的豆芽。';
  },
};

/** 5. 含羞草叶枕水气球：拖动触碰后恢复时间，看钾离子与水分进出叶枕 */
export const mimosaPillow: SimDef = {
  params: [
    { key: 'state', label: '含羞草状态', min: 0, max: 2, step: 1, value: 1, labels: ['触碰前（舒展）', '刚碰一下（瞬间合拢）', '静置 15 分钟（复原）'] },
  ],
  animated: false,
  draw(s) {
    const folded = s.state === 1;
    const out: string[] = [];
    out.push(txt(280, 30, '含羞草没有肌肉，靠叶柄基部的“水气球铰链”——叶枕调水压', { size: 14, bold: true, color: INK }));
    // 左侧：植株形态
    out.push(`<rect x="24" y="52" width="232" height="206" rx="16" fill="#f4faf5" stroke="#b7e4c7" stroke-width="2"/>`);
    out.push(`<line x1="82" y1="236" x2="82" y2="96" stroke="#5d8233" stroke-width="7" stroke-linecap="round"/>`);
    // 叶枕圆球
    out.push(`<circle cx="88" cy="132" r="11" fill="${folded ? HOT : GREEN}"/>`);
    if (!folded) {
      out.push(`<line x1="94" y1="130" x2="218" y2="108" stroke="${GREEN}" stroke-width="4.5" stroke-linecap="round"/>`);
      for (let i = 0; i < 4; i += 1) {
        const lx = 126 + i * 24;
        const ly = 124 - i * 4;
        out.push(`<ellipse cx="${lx}" cy="${ly - 14}" rx="7" ry="13" fill="${LEAF}"/>`);
        out.push(`<ellipse cx="${lx}" cy="${ly + 14}" rx="7" ry="13" fill="${LEAF}"/>`);
      }
      out.push(txt(140, 232, '叶片平展迎阳光', { size: 13, bold: true, color: GREEN }));
    } else {
      out.push(`<line x1="94" y1="136" x2="196" y2="196" stroke="${GREEN}" stroke-width="4.5" stroke-linecap="round"/>`);
      for (let i = 0; i < 4; i += 1) {
        const lx = 120 + i * 20;
        const ly = 152 + i * 12;
        out.push(`<ellipse cx="${lx + 6}" cy="${ly - 6}" rx="12" ry="5" fill="#74b87a"/>`);
      }
      out.push(txt(176, 102, '👆 轻轻一碰！', { size: 13, bold: true, color: HOT }));
      out.push(txt(140, 232, '1~2 秒内垂下合拢！', { size: 13, bold: true, color: HOT }));
    }

    // 右侧：放大叶枕上下细胞
    out.push(`<rect x="276" y="52" width="260" height="206" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(406, 78, '🔍 放大看叶枕上下两侧细胞', { size: 13.5, bold: true, color: INK }));
    // 上半侧细胞（保持鼓胀）
    out.push(`<rect x="316" y="96" width="180" height="54" rx="16" fill="#d0ebff" stroke="${BLUE}" stroke-width="2.5"/>`);
    out.push(txt(406, 128, '上半侧细胞：吸饱水鼓胀', { size: 12.5, bold: true, color: BLUE }));
    // 下半侧细胞（触碰时泄水变瘪）
    if (folded) {
      out.push(`<rect x="332" y="168" width="148" height="32" rx="14" fill="#ffe8cc" stroke="${HOT}" stroke-width="2.5" stroke-dasharray="5 3"/>`);
      out.push(txt(406, 189, '下半侧：K⁺ 和水涌出变瘪！', { size: 12, bold: true, color: HOT }));
      out.push(arrow(406, 204, 406, 236, HOT, 3.5));
      out.push(txt(406, 248, '底下塌了，叶柄自然往下垂', { size: 12, color: HOT, bold: true }));
    } else {
      out.push(`<rect x="316" y="162" width="180" height="58" rx="16" fill="#cce9fb" stroke="${GREEN}" stroke-width="2.5"/>`);
      out.push(txt(406, 196, '下半侧：K⁺ 和水充足，稳稳托住', { size: 12.5, bold: true, color: GREEN }));
      out.push(txt(406, 244, '上下都鼓鼓的，叶片挺直张开', { size: 12, color: INK }));
    }
    out.push(txt(280, 292, '别连续拍打含羞草哦，每次合拢再充水复原都要花掉不少能量', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '触碰前：叶枕上下两半细胞里都有充足的钾离子和水分，像充满气的水垫一样把叶片平平托起。',
      '刚碰一下：电信号传到叶枕，下半侧细胞立刻把钾离子泵出去，水分跟着涌出细胞，水垫瞬间泄气让叶片合拢下垂！',
      '静置约 15 分钟：叶枕下半侧细胞慢慢把钾离子和水分重新吸回来，恢复膨压，叶片又神气地张开啦。',
    ][s.state];
  },
};

/** 6. 向日葵追日 vs 盛开朝东：切换生长期/盛花期与一天时刻，看花盘朝向与蜜蜂数量 */
export const sunflowerTrack: SimDef = {
  params: [
    { key: 'age', label: '向日葵年龄', min: 0, max: 1, step: 1, value: 0, labels: ['开花前（嫩蕾期）', '完全盛开后（成花期）'] },
    { key: 'hour', label: '一天中的时刻', min: 0, max: 3, step: 1, value: 2, labels: ['清晨 7 点（日出东方）', '正午 12 点', '下午 5 点（日落西方）', '半夜 2 点（生物钟归位）'] },
  ],
  animated: false,
  draw(s) {
    const mature = s.age === 1;
    const h = s.hour;
    const night = h === 3;
    const sunPos: [number, number][] = [[96, 92], [280, 52], [464, 92], [280, 290]];
    // 花盘角度：-1 朝东(左)，0 朝上，+1 朝西(右)
    const dir = mature ? -1 : [-1, 0, 1, -0.7][h];
    const out: string[] = [];
    out.push(`<rect x="20" y="38" width="520" height="214" rx="16" fill="${night ? '#232946' : '#eaf5ff'}"/>`);
    out.push(txt(64, 64, '← 东方', { size: 13, bold: true, color: night ? '#e0fbfc' : BLUE, plain: night }));
    out.push(txt(496, 64, '西方 →', { size: 13, bold: true, color: night ? '#e0fbfc' : BLUE, plain: night }));
    if (!night) {
      const [sx, sy] = sunPos[h];
      out.push(`<circle cx="${sx}" cy="${sy}" r="22" fill="#ffd43b" stroke="#f59f00" stroke-width="2.5"/>`);
    } else {
      out.push(txt(456, 86, '🌙 ⭐', { size: 22, plain: true }));
    }
    // 地面与茎
    out.push(`<rect x="20" y="232" width="520" height="20" rx="8" fill="#a3b18a"/>`);
    const headX = 280 + dir * 48;
    out.push(`<path d="M280 234 Q280 175 ${n(headX)} 136" fill="none" stroke="${GREEN}" stroke-width="9" stroke-linecap="round"/>`);
    // 花盘
    out.push(`<g transform="translate(${n(headX)} 128) rotate(${n(dir * 28)})">`);
    out.push(`<circle cx="0" cy="0" r="${mature ? 34 : 22}" fill="#ffd43b" stroke="#e67700" stroke-width="4"/>`);
    out.push(`<circle cx="0" cy="0" r="${mature ? 20 : 11}" fill="#6c4625"/>`);
    out.push(`</g>`);
    // 蜜蜂（盛花期清晨朝东晒暖，招来 5 倍蜜蜂）
    if (mature && h === 0) {
      out.push(txt(158, 118, '🐝🐝🐝🐝🐝', { size: 18 }));
      out.push(txt(158, 146, '清晨晒暖花盘，招来 5 倍蜜蜂！', { size: 12, bold: true, color: HOT }));
    }
    const note = mature
      ? '盛开后茎停止伸长，花盘永远朝东不再转头！早晨升温快，最招蜜蜂传粉'
      : ['清晨：花蕾朝东迎日出', '白天：茎东侧长得更快，推着花蕾往西追太阳', '傍晚：花蕾一路追到西方，叶片多晒光长更壮', '半夜没太阳：生物钟指挥茎西侧快长，天亮前转回东方！'][h];
    out.push(txt(280, 24, mature ? '盛开的向日葵：定格朝东，不再追着太阳转！' : '年轻未开的向日葵：生长素 + 生物钟驱动每日追日', { size: 14, bold: true, color: INK }));
    out.push(txt(280, 286, note, { size: 12.5, bold: true, color: mature ? HOT : GREEN }));
    return out.join('');
  },
  readout(s) {
    if (s.age === 1) {
      return '完全盛开后，向日葵的茎不再伸长，花盘一动不动朝向东方——下午去看也朝东！这样清晨能最快晒暖花盘，吸引约 5 倍的昆虫来传粉。';
    }
    return [
      '嫩蕾期清晨：经过一夜调整，花蕾准时朝向东方迎接第一缕阳光。',
      '嫩蕾期白天：在光照和生长素调控下，茎的东侧细胞比西侧伸长得快，推着花蕾慢慢向西转。',
      '嫩蕾期傍晚：花蕾面向西方吃足最后一波阳光；追日能让植株干重和叶面积比绑住不动时高出约 10%。',
      '嫩蕾期半夜：明明漆黑没太阳，植物体内的生物钟却准时让茎西侧长得更快，赶在日出前把头转回东方！',
    ][s.hour];
  },
};

/** 7. 沙漠仙人掌 vs 阔叶植物：切换昼夜，看仙人掌夜间开气孔存碳（CAM）与省水本领 */
export const desertCactus: SimDef = {
  params: [
    { key: 'time', label: '沙漠昼夜', min: 0, max: 1, step: 1, value: 0, labels: ['正午 42 ℃ 烈日', '夜晚 16 ℃ 凉风'] },
  ],
  animated: false,
  draw(s) {
    const day = s.time === 0;
    const out: string[] = [];
    out.push(`<rect x="20" y="42" width="520" height="214" rx="16" fill="${day ? '#fff3d6' : '#1f293d'}"/>`);
    out.push(txt(280, 26, day ? '☀️ 沙漠正午 42 ℃：谁一开门谁就会被晒干！' : '🌙 沙漠夜晚 16 ℃：凉快湿润，仙人掌悄悄开工吸气！', { size: 14, bold: true, color: INK }));
    // 左：仙人掌
    out.push(`<rect x="44" y="64" width="222" height="174" rx="14" fill="#ffffff" opacity="0.92"/>`);
    out.push(`<rect x="136" y="102" width="38" height="94" rx="19" fill="#51a355" stroke="${GREEN}" stroke-width="3"/>`);
    out.push(`<path d="M136 154 Q112 154 112 128" fill="none" stroke="#51a355" stroke-width="16" stroke-linecap="round"/>`);
    out.push(`<path d="M174 144 Q198 144 198 118" fill="none" stroke="#51a355" stroke-width="16" stroke-linecap="round"/>`);
    out.push(txt(155, 86, '🌵 沙漠仙人掌（尖刺+胖绿茎）', { size: 13, bold: true, color: GREEN }));
    out.push(txt(155, 214, day ? '气孔紧闭！用昨晚存的碳造糖' : '气孔张开！吸进 CO₂ 存成苹果酸', { size: 12, bold: true, color: day ? GREEN : BLUE }));
    out.push(txt(155, 232, day ? '失水极少：稳稳保住一肚子水' : '夜晚凉爽，开门也几乎不丢水', { size: 11.5, color: INK }));

    // 右：普通阔叶植物放到沙漠里
    out.push(`<rect x="294" y="64" width="222" height="174" rx="14" fill="#ffffff" opacity="0.92"/>`);
    out.push(txt(405, 86, '🌿 普通宽叶植物', { size: 13, bold: true, color: '#a8501a' }));
    out.push(`<ellipse cx="382" cy="146" rx="34" ry="18" fill="${day ? '#c9b458' : '#74b87a'}" transform="rotate(${day ? 28 : -12} 382 146)"/>`);
    out.push(`<ellipse cx="428" cy="146" rx="34" ry="18" fill="${day ? '#c9b458' : '#74b87a'}" transform="rotate(${day ? -28 : 12} 428 146)"/>`);
    out.push(`<line x1="405" y1="136" x2="405" y2="194" stroke="#5d8233" stroke-width="5"/>`);
    out.push(txt(405, 214, day ? '白天开气孔吸碳 → 水分狂跑打蔫！' : '夜晚关气孔休息，不存碳', { size: 12, bold: true, color: day ? HOT : INK }));
    out.push(txt(405, 232, day ? '叶片宽大，烈日下很快脱水' : '等明天出太阳还得挨晒开门', { size: 11.5, color: INK }));

    out.push(txt(280, 288, '仙人掌三件法宝：叶退化成刺减蒸发 · 肉质绿茎储水造粮 · 夜吸碳昼造糖', { size: 12.5, bold: true, color: GREEN }));
    return out.join('');
  },
  readout(s) {
    return s.time === 0
      ? '正午暴晒时：仙人掌把气孔关得严严实实不漏水，把昨晚存在大液泡里的二氧化碳放出来，借阳光合成糖分！'
      : '凉爽夜晚时：沙漠空气没那么干热，仙人掌才悄悄打开气孔吸进二氧化碳，先存成有机酸放进液泡，省水本领一流。';
  },
};
