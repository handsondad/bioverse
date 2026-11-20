import { INK, HOT, GREEN, LEAF, BLUE, PURPLE, arrow, clamp, n, r1, txt, type SimDef } from './kit';

/** 1. 细胞结构对比：切换动物细胞 vs 植物细胞，点亮各细胞器 */
export const cellCompare: SimDef = {
  params: [
    { key: 'kind', label: '细胞类型', min: 0, max: 1, step: 1, value: 1, labels: ['动物细胞', '植物细胞'] },
    { key: 'focus', label: '放大看哪一处', min: 0, max: 3, step: 1, value: 0, labels: ['全貌', '细胞核', '细胞膜 / 细胞壁', '叶绿体与液泡'] },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const plant = s.kind === 1;
    const focus = s.focus;
    const pulse = 1 + 0.04 * Math.sin(t * 3);
    const out: string[] = [];
    // 外框
    if (plant) {
      const wallStroke = focus === 2 ? HOT : GREEN;
      out.push(`<rect x="95" y="42" width="370" height="236" rx="34" fill="#d9f2dc" stroke="${wallStroke}" stroke-width="${focus === 2 ? 7 : 5}"/>`);
      out.push(`<rect x="111" y="58" width="338" height="204" rx="24" fill="#eef9ee" stroke="${focus === 2 ? '#ff9f43' : '#74b87a'}" stroke-width="3" stroke-dasharray="7 4"/>`);
    } else {
      const memStroke = focus === 2 ? HOT : '#5a8ec9';
      out.push(`<ellipse cx="280" cy="160" rx="172" ry="112" fill="#edf5ff" stroke="${memStroke}" stroke-width="${focus === 2 ? 6 : 4}"/>`);
    }
    // 液泡 & 叶绿体（植物特有）
    if (plant) {
      const vacGlow = focus === 3 ? HOT : '#5aa6d6';
      out.push(`<ellipse cx="325" cy="175" rx="${n(92 * pulse)}" ry="${n(64 * pulse)}" fill="#cce9fb" stroke="${vacGlow}" stroke-width="${focus === 3 ? 4 : 2.5}"/>`);
      out.push(txt(325, 180, '中央大液泡', { size: 13, color: '#2b5f8a', bold: focus === 3 }));
      const chs: [number, number][] = [[156, 98], [218, 86], [404, 96], [156, 224], [220, 232]];
      for (const [cx, cy] of chs) {
        out.push(`<ellipse cx="${cx}" cy="${cy}" rx="20" ry="11" fill="${LEAF}" stroke="${focus === 3 ? HOT : GREEN}" stroke-width="${focus === 3 ? 3 : 1.5}"/>`);
      }
      out.push(txt(175, 250, '叶绿体', { size: 12, color: focus === 3 ? HOT : GREEN, bold: focus === 3 }));
    } else {
      // 动物细胞的线粒体
      const mits: [number, number, number][] = [[190, 110, 20], [375, 118, -25], [358, 212, 15], [202, 218, -15]];
      for (const [mx, my, rot] of mits) {
        out.push(`<g transform="translate(${mx} ${my}) rotate(${rot})"><ellipse rx="22" ry="11" fill="#ffd8a8" stroke="#d97706" stroke-width="2"/><path d="M-14 0 Q-7 -6 0 0 T14 0" fill="none" stroke="#c45d00" stroke-width="1.8"/></g>`);
      }
      out.push(txt(375, 146, '线粒体', { size: 12, color: '#a8501a' }));
    }
    // 细胞核（动植物都有）
    const nx = plant ? 185 : 280;
    const ny = plant ? 160 : 158;
    const nucStroke = focus === 1 ? HOT : PURPLE;
    out.push(`<circle cx="${nx}" cy="${ny}" r="${n(40 * (focus === 1 ? pulse : 1))}" fill="#e6d9fa" stroke="${nucStroke}" stroke-width="${focus === 1 ? 5 : 3}"/>`);
    out.push(`<circle cx="${nx + 8}" cy="${ny - 6}" r="12" fill="#b48cff" opacity="0.75"/>`);
    out.push(txt(nx, ny + 4, '细胞核', { size: 14, color: '#4d2b8a', bold: true }));
    // 标注
    out.push(txt(280, 24, plant ? '植物细胞（方方正正，有硬细胞壁）' : '动物细胞（柔软圆润，没有细胞壁）', { size: 15, bold: true, color: plant ? GREEN : BLUE }));
    if (focus === 2) {
      out.push(txt(280, 302, plant ? '外层硬细胞壁护形，内层细胞膜管进出' : '只有柔软的细胞膜包着细胞质，管物资进出', { size: 13, color: HOT, bold: true }));
    } else if (focus === 3 && !plant) {
      out.push(txt(280, 302, '动物细胞没有叶绿体和大液泡，所以不能靠晒太阳自己造粮食', { size: 13, color: HOT, bold: true }));
    } else {
      out.push(txt(280, 302, '共有的核心三件套：细胞膜 · 细胞质 · 细胞核', { size: 13, color: INK }));
    }
    return out.join('');
  },
  readout(s) {
    if (s.kind === 1) {
      return ['植物细胞有膜、质、核，还多了细胞壁、叶绿体和中央大液泡。', '细胞核里藏着 DNA，像细胞的“总司令部”。', '植物细胞壁全透水且坚硬，帮菜叶撑起形状；里面那层细胞膜才负责把关。', '叶绿体负责晒太阳造粮食，大液泡装着甜甜或酸酸的细胞液。'][s.focus];
    }
    return ['动物细胞有膜、质、核和线粒体，但没有细胞壁、叶绿体和中央大液泡。', '动物细胞的细胞核同样存着 DNA，控制生长和分裂。', '动物细胞没有细胞壁，所以柔软有弹性，靠细胞膜把守进出。', '动物没有叶绿体，没法自己光合作用，必须靠吃食物拿能量。'][s.focus];
  },
};

/** 2. 渗透与质壁分离：调节外界盐水/糖水浓度，观察液泡收缩与水分子流向 */
export const osmosisCell: SimDef = {
  params: [
    { key: 'conc', label: '外界溶液浓度', min: 0, max: 5, step: 0.5, value: 3, unit: ' 份' },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const inside = 2; // 细胞液浓度 = 2 份
    const diff = s.conc - inside; // >0 外面更浓(失水)，<0 外面更稀(吸水)
    const shrink = clamp(diff / 3, -0.12, 0.55);
    const out: string[] = [];
    // 背景外界溶液
    const bgBlue = Math.round(248 - s.conc * 8);
    out.push(`<rect x="18" y="18" width="524" height="284" rx="16" fill="rgb(228, ${bgBlue}, 255)"/>`);
    // 外界溶质颗粒
    const dots = Math.round(s.conc * 7);
    for (let i = 0; i < dots; i += 1) {
      const a = i * 2.399;
      const rx = 280 + Math.cos(a) * (175 + (i % 3) * 26);
      const ry = 160 + Math.sin(a) * (100 + (i % 2) * 18);
      if (rx > 34 && rx < 526 && ry > 36 && ry < 284) {
        out.push(`<circle cx="${n(rx)}" cy="${n(ry)}" r="5" fill="#ff9f43" opacity="0.8"/>`);
      }
    }
    // 坚硬细胞壁（不变）
    out.push(`<rect x="140" y="64" width="280" height="192" rx="28" fill="#e8f5e9" stroke="${GREEN}" stroke-width="6"/>`);
    // 原生质层（随失水收缩）
    const padX = Math.max(8, 8 + shrink * 54);
    const padY = Math.max(8, 8 + shrink * 38);
    out.push(`<rect x="${n(140 + padX)}" y="${n(64 + padY)}" width="${n(280 - padX * 2)}" height="${n(192 - padY * 2)}" rx="${n(22 + shrink * 18)}" fill="#f7ebff" stroke="${PURPLE}" stroke-width="3"/>`);
    // 紫色大液泡（失水变小变深）
    const vx = 280;
    const vy = 160;
    const vrx = Math.max(38, 114 - shrink * 98);
    const vry = Math.max(26, 74 - shrink * 64);
    const vLight = Math.round(78 - shrink * 36);
    out.push(`<ellipse cx="${vx}" cy="${vy}" rx="${n(vrx)}" ry="${n(vry)}" fill="hsl(285, 62%, ${vLight}%)" stroke="#7c3aed" stroke-width="2.5"/>`);
    out.push(txt(vx, vy + 5, diff > 0.2 ? '液泡缩水变深' : diff < -0.2 ? '液泡吸饱鼓胀' : '进出刚好平衡', { size: 14, color: shrink > 0.25 ? '#ffffff' : '#4a1d7a', bold: true, plain: shrink > 0.25 }));
    // 水分子流动箭头
    const shift = ((t * 40) % 28) - 14;
    if (Math.abs(diff) >= 0.3) {
      const outward = diff > 0;
      const col = outward ? HOT : BLUE;
      const [x1, x2] = outward ? [185, 92] : [92, 185];
      const [x3, x4] = outward ? [375, 468] : [468, 375];
      out.push(arrow(x1 + (outward ? shift * 0.4 : -shift * 0.4), 160, x2, 160, col, 4));
      out.push(arrow(x3 + (outward ? shift * 0.4 : -shift * 0.4), 160, x4, 160, col, 4));
      out.push(txt(86, 134, outward ? '水往外跑' : '水往里进', { size: 13, color: col, bold: true }));
      out.push(txt(474, 134, outward ? '水往外跑' : '水往里进', { size: 13, color: col, bold: true }));
    }
    out.push(txt(280, 44, `外界溶液 ${r1(s.conc)} 份  vs  细胞液 2.0 份`, { size: 15, bold: true, color: INK }));
    if (diff > 0.4) {
      out.push(txt(280, 286, '壁与原生质层之间：填满了外界溶液（不是空的！）', { size: 13, color: HOT, bold: true }));
    } else {
      out.push(txt(280, 286, diff < -0.2 ? '细胞壁撑住不涨破，菜叶变得硬挺脆嫩' : '水进出一样快，细胞形状保持原样', { size: 13, color: GREEN, bold: true }));
    }
    return out.join('');
  },
  readout(s) {
    if (s.conc > 2.2) return `外界浓度（${r1(s.conc)} 份）大于细胞液（2.0 份）：水往外净流出，原生质层收缩离壁（质壁分离），菜叶变蔫出水。`;
    if (s.conc < 1.8) return `外界浓度（${r1(s.conc)} 份）小于细胞液（2.0 份）：清水流进细胞，液泡鼓胀、细胞壁撑住不破，菜叶脆挺！`;
    return '外界浓度和细胞液差不多（约 2.0 份）：水分子两边照样穿，但进去的和出来的一样多，细胞不缩也不胀。';
  },
};

/** 3. 物质跨膜运输：切换氧气 / 葡萄糖 / 钾离子，调供能开关看怎么过膜 */
export const membraneGate: SimDef = {
  params: [
    { key: 'mode', label: '过膜方式', min: 0, max: 2, step: 1, value: 0, labels: ['氧气（自由扩散）', '葡萄糖（协助扩散）', '钾离子（主动运输）'] },
    { key: 'atp', label: '细胞供能（ATP）', min: 0, max: 1, step: 1, value: 1, labels: ['断电', '有能量'] },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const out: string[] = [];
    // 上方膜外、下方膜内
    out.push(`<rect x="16" y="16" width="528" height="122" rx="12" fill="#f3f9ff"/>`);
    out.push(`<rect x="16" y="182" width="528" height="122" rx="12" fill="#f5fbf2"/>`);
    // 磷脂双分子层
    for (let x = 32; x <= 528; x += 22) {
      if (s.mode > 0 && x >= 230 && x <= 330) continue;
      out.push(`<circle cx="${x}" cy="144" r="7" fill="#f5b864" stroke="#c27a23" stroke-width="1.5"/>`);
      out.push(`<line x1="${x - 2}" y1="151" x2="${x - 2}" y2="168" stroke="#d99a45" stroke-width="1.6"/>`);
      out.push(`<line x1="${x + 2}" y1="151" x2="${x + 2}" y2="168" stroke="#d99a45" stroke-width="1.6"/>`);
      out.push(`<circle cx="${x}" cy="176" r="7" fill="#f5b864" stroke="#c27a23" stroke-width="1.5"/>`);
    }
    // 转运蛋白
    if (s.mode === 1) {
      out.push(`<rect x="240" y="130" width="24" height="60" rx="10" fill="#6aa5e3" stroke="#2f63ad" stroke-width="2"/>`);
      out.push(`<rect x="296" y="130" width="24" height="60" rx="10" fill="#6aa5e3" stroke="#2f63ad" stroke-width="2"/>`);
      out.push(txt(280, 120, '转运蛋白大门', { size: 12, color: BLUE, bold: true }));
    } else if (s.mode === 2) {
      const col = s.atp ? '#9775fa' : '#adb5bd';
      out.push(`<rect x="242" y="128" width="76" height="64" rx="16" fill="${col}" stroke="#4d2b8a" stroke-width="2.5"/>`);
      out.push(txt(280, 165, s.atp ? 'ATP 泵' : '泵停了', { size: 13, color: '#ffffff', bold: true, plain: true }));
    }
    // 粒子动画
    const u = (t * 0.45) % 1;
    if (s.mode === 0) {
      out.push(txt(95, 42, '膜外：氧气多', { size: 14, color: BLUE, bold: true }));
      out.push(txt(95, 286, '膜内：氧气少', { size: 14, color: GREEN, bold: true }));
      for (let i = 0; i < 4; i += 1) {
        const p = (u + i * 0.25) % 1;
        const px = 175 + i * 70;
        const py = 58 + p * 204;
        out.push(`<circle cx="${n(px)}" cy="${n(py)}" r="10" fill="#4dabf7" stroke="#1c7ed6" stroke-width="2"/>`);
        out.push(txt(px, py + 4, 'O₂', { size: 10, color: '#ffffff', bold: true, plain: true }));
      }
      out.push(arrow(480, 74, 480, 246, BLUE, 4));
      out.push(txt(480, 62, '顺浓度直穿', { size: 12, color: BLUE, bold: true }));
    } else if (s.mode === 1) {
      out.push(txt(95, 42, '膜外：葡萄糖多', { size: 14, color: '#a8501a', bold: true }));
      out.push(txt(95, 286, '膜内：葡萄糖少', { size: 14, color: GREEN, bold: true }));
      for (let i = 0; i < 3; i += 1) {
        const p = (u + i * 0.33) % 1;
        const py = 52 + p * 214;
        out.push(`<polygon points="${n(280)},${n(py - 11)} ${n(290)},${n(py - 5)} ${n(290)},${n(py + 5)} ${n(280)},${n(py + 11)} ${n(270)},${n(py + 5)} ${n(270)},${n(py - 5)}" fill="#ffd43b" stroke="#c27a23" stroke-width="2"/>`);
      }
      out.push(arrow(480, 74, 480, 246, '#c27a23', 4));
      out.push(txt(480, 62, '顺浓度过门', { size: 12, color: '#a8501a', bold: true }));
    } else {
      out.push(txt(98, 42, '膜外：钾离子少', { size: 14, color: PURPLE, bold: true }));
      out.push(txt(98, 286, '膜内：钾离子多', { size: 14, color: PURPLE, bold: true }));
      // 膜内挤满钾离子
      for (let i = 0; i < 7; i += 1) {
        out.push(`<circle cx="${120 + i * 54}" cy="${245 + (i % 2) * 14}" r="9" fill="#b48cff" opacity="0.7"/>`);
      }
      if (s.atp) {
        const py = 60 + u * 185;
        out.push(`<circle cx="280" cy="${n(py)}" r="12" fill="${PURPLE}" stroke="#fff" stroke-width="2"/>`);
        out.push(txt(280, py + 4, 'K⁺', { size: 10, color: '#ffffff', bold: true, plain: true }));
        out.push(arrow(480, 74, 480, 246, HOT, 4));
        out.push(txt(480, 62, '花能逆向泵', { size: 12, color: HOT, bold: true }));
      } else {
        out.push(txt(280, 88, '断了能量，搬不进去了！', { size: 15, color: HOT, bold: true }));
      }
    }
    return out.join('');
  },
  readout(s) {
    if (s.mode === 0) return `氧气自由扩散：顺浓度直接穿过磷脂双分子层，不要转运蛋白也不要能量（此刻${s.atp ? '有' : '没'}能量照样进）。`;
    if (s.mode === 1) return `葡萄糖协助扩散：个头偏大又亲水，顺着浓度差请转运蛋白开门通过，不消耗能量。`;
    return s.atp
      ? '钾离子主动运输：外面少、里面多，必须请载体蛋白并消耗 ATP 能量，才能逆浓度往里泵！'
      : '主动运输断了 ATP 供能：逆浓度的泵立刻停工，钾离子不仅泵不进去，还会顺着浓度往外漏。';
  },
};

/** 4. 细胞有丝分裂：拖动进度条看间期→前期→中期→后期→末期 */
export const mitosisPhases: SimDef = {
  params: [
    { key: 'stage', label: '分裂阶段', min: 0, max: 4, step: 1, value: 2, labels: ['间期（复制）', '前期（打包）', '中期（排队）', '后期（平分）', '末期（变俩）'] },
  ],
  animated: false,
  draw(s) {
    const st = s.stage;
    const out: string[] = [];
    // 细胞外框
    if (st === 4) {
      out.push(`<rect x="85" y="56" width="190" height="208" rx="28" fill="#eef9ee" stroke="${GREEN}" stroke-width="5"/>`);
      out.push(`<rect x="285" y="56" width="190" height="208" rx="28" fill="#eef9ee" stroke="${GREEN}" stroke-width="5"/>`);
      out.push(`<line x1="280" y1="56" x2="280" y2="264" stroke="${HOT}" stroke-width="5" stroke-dasharray="8 5"/>`);
      out.push(txt(280, 290, '中间长出新细胞壁，变成两个一样的子细胞', { size: 13, color: HOT, bold: true }));
    } else {
      out.push(`<rect x="110" y="56" width="340" height="208" rx="34" fill="#eef9ee" stroke="${GREEN}" stroke-width="5"/>`);
    }
    const drawX = (cx: number, cy: number, color: string): string =>
      `<path d="M${cx - 8} ${cy - 14} L${cx + 8} ${cy + 14} M${cx + 8} ${cy - 14} L${cx - 8} ${cy + 14}" stroke="${color}" stroke-width="5" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="3.5" fill="#fff"/>`;
    const drawV = (cx: number, cy: number, dir: number, color: string): string =>
      `<path d="M${cx - dir * 10} ${cy - 12} L${cx} ${cy} L${cx - dir * 10} ${cy + 12}" fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;

    if (st === 0) {
      out.push(`<circle cx="280" cy="160" r="70" fill="#e6d9fa" stroke="${PURPLE}" stroke-width="3"/>`);
      out.push(`<path d="M240 140 Q280 110 315 150 T250 185 T315 190" fill="none" stroke="#6b46c1" stroke-width="3" stroke-dasharray="6 4"/>`);
      out.push(txt(280, 165, 'DNA 悄悄抄成两份', { size: 14, color: '#4d2b8a', bold: true }));
      out.push(txt(280, 290, '间期最长（占约九成时间）：细胞长大并完整复制 DNA', { size: 13, color: INK }));
    } else if (st === 1) {
      out.push(`<circle cx="280" cy="160" r="78" fill="none" stroke="${PURPLE}" stroke-width="2.5" stroke-dasharray="8 8"/>`);
      out.push(drawX(245, 130, '#d9480f'), drawX(315, 135, '#2b6cb0'), drawX(255, 190, '#2b6cb0'), drawX(315, 188, '#d9480f'));
      out.push(txt(280, 290, '前期：细丝卷成短粗 X 形染色体，核膜拆掉、纺锤丝长出', { size: 13, color: INK }));
    } else if (st === 2) {
      out.push(`<line x1="280" y1="68" x2="280" y2="252" stroke="#ffd8a8" stroke-width="2" stroke-dasharray="6 4"/>`);
      for (const y of [102, 140, 178, 216]) {
        out.push(`<line x1="130" y1="160" x2="280" y2="${y}" stroke="#adb5bd" stroke-width="1.6"/>`);
        out.push(`<line x1="430" y1="160" x2="280" y2="${y}" stroke="#adb5bd" stroke-width="1.6"/>`);
      }
      out.push(drawX(280, 102, '#d9480f'), drawX(280, 140, '#2b6cb0'), drawX(280, 178, '#d9480f'), drawX(280, 216, '#2b6cb0'));
      out.push(txt(280, 290, '中期：全部染色体排在中间赤道板上，数数看得最清楚', { size: 13, color: HOT, bold: true }));
    } else if (st === 3) {
      for (const y of [102, 140, 178, 216]) {
        out.push(`<line x1="130" y1="160" x2="210" y2="${y}" stroke="#adb5bd" stroke-width="1.6"/>`);
        out.push(`<line x1="430" y1="160" x2="350" y2="${y}" stroke="#adb5bd" stroke-width="1.6"/>`);
      }
      out.push(drawV(210, 102, -1, '#d9480f'), drawV(210, 140, -1, '#2b6cb0'), drawV(210, 178, -1, '#d9480f'), drawV(210, 216, -1, '#2b6cb0'));
      out.push(drawV(350, 102, 1, '#d9480f'), drawV(350, 140, 1, '#2b6cb0'), drawV(350, 178, 1, '#d9480f'), drawV(350, 216, 1, '#2b6cb0'));
      out.push(arrow(255, 160, 225, 160, HOT, 3), arrow(305, 160, 335, 160, HOT, 3));
      out.push(txt(280, 290, '后期：着丝粒一分为二，两套相同染色体被拉向两极', { size: 13, color: HOT, bold: true }));
    } else {
      out.push(`<circle cx="180" cy="160" r="46" fill="#e6d9fa" stroke="${PURPLE}" stroke-width="2.5"/>`);
      out.push(`<circle cx="380" cy="160" r="46" fill="#e6d9fa" stroke="${PURPLE}" stroke-width="2.5"/>`);
      out.push(txt(180, 165, '4 条染色体', { size: 12, color: '#4d2b8a', bold: true }));
      out.push(txt(380, 165, '4 条染色体', { size: 12, color: '#4d2b8a', bold: true }));
    }
    const labels = ['间期：染色体 4 条 · DNA 4→8 份', '前期：染色体 4 条 · DNA 8 份', '中期：染色体 4 条 · DNA 8 份', '后期：染色体 8 条（暂时加倍）· DNA 8 份', '末期：每个子细胞 4 条染色体 · DNA 4 份'];
    out.push(txt(280, 34, labels[st], { size: 15, bold: true, color: GREEN }));
    return out.join('');
  },
  readout(s) {
    return [
      '间期像搬家前复印文件：细胞把 DNA 完整抄成两份，这一步占整个周期的绝大部分时间。',
      '前期把乱糟糟的 DNA 细丝打包成短粗的 X 形染色体，拉动时才不会缠成一团。',
      '中期所有染色体在正中间排成一列，两边纺锤丝一人拉住一半，公平又整齐。',
      '后期连接两条姐妹染色单体的着丝粒断开，染色体数目暂时翻倍，奔向细胞两头。',
      '末期建起新核膜和新细胞壁，两个子细胞拿到一模一样的遗传说明书！',
    ][s.stage];
  },
};

/** 5. 胡克软木塞 vs 列文虎克活细胞：切换标本与放大倍数，看清死细胞壁与活细胞 */
export const hookeScope: SimDef = {
  params: [
    { key: 'sample', label: '显微镜下的标本', min: 0, max: 1, step: 1, value: 0, labels: ['1665 胡克：软木薄片', '1674 列文虎克：池塘水滴'] },
    { key: 'zoom', label: '放大清晰度', min: 0, max: 2, step: 1, value: 1, labels: ['低倍（约 30×）', '中倍（约 120×）', '高倍（约 270×）'] },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const cork = s.sample === 0;
    const z = s.zoom + 1;
    const out: string[] = [];
    // 圆形目镜视野
    out.push(`<rect x="20" y="20" width="520" height="280" rx="16" fill="#f7f1e5"/>`);
    out.push(`<circle cx="190" cy="162" r="108" fill="${cork ? '#2b2520' : '#e6f4f8'}" stroke="#8b6b43" stroke-width="8"/>`);
    if (cork) {
      const step = [28, 22, 16][z - 1];
      for (let gx = 104; gx <= 262; gx += step) {
        for (let gy = 76; gy <= 236; gy += Math.round(step * 0.78)) {
          if (Math.hypot(gx + step / 2 - 190, gy + step / 3 - 162) > 92) continue;
          out.push(`<rect x="${gx}" y="${gy}" width="${step - 3}" height="${Math.round(step * 0.78) - 3}" rx="3" fill="#3a3129" stroke="#e9cfa0" stroke-width="1.8"/>`);
        }
      }
    } else {
      const count = z + 2;
      for (let i = 0; i < count; i += 1) {
        const ang = t * 0.9 + i * 1.45;
        const cx = 190 + Math.cos(ang) * (24 + i * 13);
        const cy = 162 + Math.sin(ang * 1.2) * (18 + i * 11);
        const r = 7 + z * 3;
        out.push(`<ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${r}" ry="${Math.round(r * 0.62)}" fill="#74c69d" stroke="${GREEN}" stroke-width="2"/>`);
        if (z >= 2) out.push(`<circle cx="${n(cx)}" cy="${n(cy)}" r="${Math.max(2.5, r * 0.28)}" fill="${PURPLE}"/>`);
      }
    }
    // 右侧解读卡片
    out.push(`<rect x="322" y="54" width="202" height="214" rx="14" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(423, 84, cork ? '软木塞：死细胞空壳' : '池塘水：游动的活细胞', { size: 15, bold: true, color: cork ? HOT : GREEN }));
    out.push(txt(423, 118, cork ? '细胞膜：已消失' : '细胞膜：完整包裹', { size: 13, color: INK }));
    out.push(txt(423, 146, cork ? '细胞质与核：全空了' : z >= 2 ? '细胞质与核：清晰可见' : '倍数太低还看不清内部', { size: 13, color: cork ? HOT : BLUE, bold: !cork && z >= 2 }));
    out.push(txt(423, 178, cork ? '只剩木栓化的硬细胞壁' : '能游动、进食和分裂！', { size: 13, color: GREEN, bold: true }));
    out.push(txt(423, 224, `放大档位：第 ${z} 档`, { size: 12.5, color: INK }));
    out.push(txt(423, 248, cork ? '胡克借“小房间”起名 cell' : '列文虎克首次看见活微生物', { size: 12, color: PURPLE, bold: true }));
    out.push(txt(280, 38, cork ? '1665 年胡克复合显微镜：看到整齐蜂窝状“小格子”' : '1674 年列文虎克高倍单透镜：看到活蹦乱跳的小生命', { size: 14, bold: true, color: INK }));
    return out.join('');
  },
  readout(s) {
    if (s.sample === 0) return '胡克观察的软木塞是死树皮：细胞质和细胞核早就没了，他看到的“小格子”其实是留下的空细胞壁。';
    return s.zoom >= 1
      ? '列文虎克把单颗小玻璃珠磨到近 270 倍：第一次在池塘水里看清了有细胞膜、细胞质、正在游动的活单细胞生物！'
      : '低倍镜下只能看见小点晃动；调高放大倍数，就能看清活细胞完整的内部结构啦。';
  },
};

/** 6. 单细胞草履虫：切换外界刺激（肉汁 vs 盐粒），看纤毛划水、食物泡与伸缩泡分工 */
export const ciliaSwim: SimDef = {
  params: [
    { key: 'cue', label: '右边滴入什么', min: 0, max: 2, step: 1, value: 1, labels: ['清水（自由游）', '牛肉汁（营养）', '浓盐粒（有害刺激）'] },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const cue = s.cue;
    const out: string[] = [];
    out.push(`<rect x="20" y="44" width="520" height="222" rx="22" fill="#eaf6ff" stroke="#a5d8ff" stroke-width="2.5"/>`);
    // 右侧滴入物
    if (cue === 1) {
      out.push(`<circle cx="472" cy="155" r="34" fill="#ffe8cc" stroke="#f59f00" stroke-width="2.5"/>`);
      out.push(txt(472, 159, '🍖 肉汁', { size: 13, bold: true, color: '#a8501a' }));
    } else if (cue === 2) {
      out.push(`<circle cx="472" cy="155" r="34" fill="#ffe3e3" stroke="${HOT}" stroke-width="2.5"/>`);
      out.push(txt(472, 159, '🧂 盐粒', { size: 13, bold: true, color: HOT }));
    }
    // 草履虫位置与朝向
    const baseX = cue === 1 ? 305 + Math.sin(t * 2) * 12 : cue === 2 ? 175 - Math.sin(t * 2) * 12 : 265 + Math.sin(t * 1.5) * 18;
    const dir = cue === 2 ? -1 : 1;
    out.push(`<g transform="translate(${n(baseX)} 152) scale(${dir} 1)">`);
    // 纤毛小短线
    for (let a = 0; a < 20; a += 1) {
      const th = (a / 20) * Math.PI * 2;
      const x1 = Math.cos(th) * 92;
      const y1 = Math.sin(th) * 44;
      const wag = Math.sin(t * 10 + a) * 4;
      out.push(`<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x1 * 1.13)}" y2="${n(y1 * 1.18 + wag)}" stroke="${GREEN}" stroke-width="2"/>`);
    }
    // 鞋底形细胞膜
    out.push(`<ellipse cx="0" cy="0" rx="92" ry="44" fill="#eef9ee" stroke="${GREEN}" stroke-width="3.5"/>`);
    // 口沟凹陷 + 食物泡 + 大核 + 星形伸缩泡
    out.push(`<path d="M18 -41 Q4 -16 24 -8" fill="none" stroke="${BLUE}" stroke-width="3"/>`);
    out.push(`<circle cx="-8" cy="12" r="10" fill="#ffd43b" stroke="#c27a23" stroke-width="1.8"/>`);
    out.push(`<circle cx="28" cy="14" r="8" fill="#ffd43b" stroke="#c27a23" stroke-width="1.8"/>`);
    out.push(`<ellipse cx="-24" cy="-8" rx="18" ry="12" fill="#d8c5fa" stroke="${PURPLE}" stroke-width="2"/>`);
    const vacR = 5 + 4 * Math.abs(Math.sin(t * 2.4));
    out.push(`<circle cx="-62" cy="0" r="${n(vacR)}" fill="#a5d8ff" stroke="${BLUE}" stroke-width="2"/>`);
    out.push(`<circle cx="62" cy="0" r="${n(9 - vacR * 0.5)}" fill="#a5d8ff" stroke="${BLUE}" stroke-width="2"/>`);
    out.push(`</g>`);

    if (cue > 0) {
      out.push(arrow(cue === 1 ? 395 : 285, 92, cue === 1 ? 435 : 225, 92, cue === 1 ? GREEN : HOT, 3.5));
      out.push(txt(cue === 1 ? 415 : 255, 80, cue === 1 ? '朝营养游去' : '掉头躲开！', { size: 12.5, bold: true, color: cue === 1 ? GREEN : HOT }));
    }
    out.push(txt(280, 28, '一个细胞全包办：绿纤毛划水 · 紫大核指挥 · 黄食物泡消化 · 蓝伸缩泡排水', { size: 13, bold: true, color: INK }));
    out.push(txt(280, 294, '没有脑和神经，单细胞草履虫也能趋向肉汁、躲开浓盐粒（应激性）', { size: 13, color: GREEN, bold: true }));
    return out.join('');
  },
  readout(s) {
    return [
      '清水中：全身几千根纤毛像小船桨整齐划水，两边星形的伸缩泡轮流把多余的水挤出去，防止细胞涨破。',
      '右边滴入牛肉汁：草履虫感受到营养物质，纤毛调整划动方向，聚拢到肉汁边用口沟把细菌卷进食物泡消化。',
      '右边放上浓盐粒：高浓度盐水会伤细胞，草履虫立刻纤毛倒划后退、换个方向游走，展现趋利避害本领！',
    ][s.cue];
  },
};

/** 7. 蝌蚪变青蛙（细胞凋亡）：拖动发育阶段，看甲状腺激素指挥尾巴细胞有序回收 */
export const tadpoleMorph: SimDef = {
  params: [
    { key: 'stage', label: '变态发育进度', min: 0, max: 3, step: 1, value: 2, labels: ['圆头长尾蝌蚪', '先长出后腿', '再伸出前腿·尾巴缩', '小青蛙上岸'] },
  ],
  animated: false,
  draw(s) {
    const st = s.stage;
    const tailLen = [165, 145, 76, 8][st];
    const thLevel = [12, 42, 92, 55][st];
    const limb = [0, 38, 75, 100][st];
    const out: string[] = [];
    out.push(`<rect x="20" y="48" width="520" height="170" rx="18" fill="#e7f5ff" stroke="#a5d8ff" stroke-width="2"/>`);
    // 蝌蚪 / 青蛙身体（朝左，尾巴朝右）
    const bx = 185;
    const by = 132;
    const bodyCol = st >= 2 ? '#51a355' : '#5c6b57';
    // 尾巴
    if (tailLen > 12) {
      out.push(`<path d="M${bx + 32} ${by - 16} Q${bx + 32 + tailLen * 0.6} ${by - 20} ${bx + 36 + tailLen} ${by} Q${bx + 32 + tailLen * 0.6} ${by + 20} ${bx + 32} ${by + 16} Z" fill="#8ce09b" stroke="${st === 2 ? HOT : GREEN}" stroke-width="2.5" ${st === 2 ? 'stroke-dasharray="6 4"' : ''}/>`);
      if (st === 2) {
        out.push(arrow(bx + 90, by, bx + 42, by, HOT, 3.5));
        out.push(txt(bx + 125, by - 28, '细胞凋亡拆解 → 养分运回身体', { size: 12.5, bold: true, color: HOT }));
      }
    }
    // 后腿 & 前腿
    if (st >= 1) {
      out.push(`<path d="M${bx + 20} ${by + 18} L${bx + 42} ${by + 44} L${bx + 16} ${by + 50}" fill="none" stroke="${GREEN}" stroke-width="${st >= 2 ? 7 : 5}" stroke-linecap="round" stroke-linejoin="round"/>`);
    }
    if (st >= 2) {
      out.push(`<path d="M${bx - 18} ${by + 18} L${bx - 34} ${by + 44}" fill="none" stroke="${GREEN}" stroke-width="6" stroke-linecap="round"/>`);
    }
    // 躯干与眼睛
    out.push(`<ellipse cx="${bx}" cy="${by}" rx="44" ry="26" fill="${bodyCol}" stroke="#1b5e20" stroke-width="3"/>`);
    out.push(`<circle cx="${bx - 22}" cy="${by - 10}" r="6" fill="#fff"/><circle cx="${bx - 24}" cy="${by - 10}" r="3" fill="#111"/>`);

    // 下方两条读数：甲状腺激素 & 回收养分建四肢
    out.push(txt(48, 246, `甲状腺激素信号：${thLevel}%`, { size: 13, anchor: 'start', bold: true, color: PURPLE }));
    out.push(`<rect x="48" y="254" width="200" height="14" rx="7" fill="#f4efe9"/><rect x="48" y="254" width="${n(thLevel * 2)}" height="14" rx="7" fill="${PURPLE}"/>`);
    out.push(txt(306, 246, `四肢与肺发育度：${limb}%`, { size: 13, anchor: 'start', bold: true, color: GREEN }));
    out.push(`<rect x="306" y="254" width="200" height="14" rx="7" fill="#f4efe9"/><rect x="306" y="254" width="${n(limb * 2)}" height="14" rx="7" fill="${GREEN}"/>`);

    out.push(txt(280, 30, '尾巴没有整截断在水里：基因按下“细胞凋亡”开关，自己拆解回收！', { size: 14, bold: true, color: INK }));
    out.push(txt(280, 296, '细胞有序自拆不发炎，连人类胎儿分开五根手指靠的也是细胞凋亡', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '小蝌蚪阶段：用鳃呼吸、靠长尾巴划水游动，血液里甲状腺激素水平还很低。',
      '长后腿阶段：甲状腺激素升高，后肢芽对低浓度激素先作出反应，率先长出两条后腿。',
      '退尾高峰期：激素冲到高峰，尾部细胞启动“细胞凋亡”程序，由溶酶体与吞噬细胞拆解成氨基酸，运去长四肢！',
      '变态完成：长尾巴被干干净净吸收完毕，鳃退化、肺长好，小青蛙跳上荷叶开启水陆两栖生活。',
    ][s.stage];
  },
};
