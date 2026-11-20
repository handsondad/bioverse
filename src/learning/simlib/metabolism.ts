import { INK, HOT, GREEN, BLUE, arrow, clamp, n, r1, txt, type SimDef } from './kit';

/** 1. 唾液淀粉酶剪淀粉：拖动咀嚼时间，看淀粉长链变短成麦芽糖、碘液褪蓝 */
export const starchChew: SimDef = {
  params: [
    { key: 'sec', label: '在嘴里细嚼的时间', min: 0, max: 30, step: 5, value: 15, unit: ' 秒' },
  ],
  animated: false,
  draw(s) {
    const cuts = Math.floor(s.sec / 5); // 0..6 次剪开
    const sweet = Math.round((cuts / 6) * 100);
    const out: string[] = [];
    out.push(txt(280, 30, '淀粉长链（不甜）→ 唾液淀粉酶剪开 → 麦芽糖（甜甜的）', { size: 14, bold: true, color: INK }));
    // 画 12 颗葡萄糖珠子：每剪一次裂开一段
    const groups = Math.min(6, cuts + 1);
    const totalBeads = 12;
    const perGroup = totalBeads / groups;
    let bx = 46;
    const gap = groups > 1 ? (468 - totalBeads * 30) / (groups - 1) : 0;
    for (let i = 0; i < totalBeads; i += 1) {
      const g = Math.floor(i / perGroup);
      const isNewGroup = i > 0 && Math.floor((i - 1) / perGroup) !== g;
      if (isNewGroup) bx += Math.max(12, gap);
      const cx = bx + 14;
      const cy = 120;
      const isShort = perGroup <= 2.5;
      if (!isNewGroup && i > 0) {
        out.push(`<line x1="${n(cx - 28)}" y1="${cy}" x2="${n(cx)}" y2="${cy}" stroke="#c27a23" stroke-width="4"/>`);
      }
      out.push(`<circle cx="${n(cx)}" cy="${cy}" r="13" fill="${isShort ? '#ffd43b' : '#f3d9a4'}" stroke="${isShort ? HOT : '#b07b2c'}" stroke-width="2.5"/>`);
      out.push(txt(cx, cy + 4, '糖', { size: 11, color: INK, bold: true }));
      bx += 30;
    }
    // 剪刀图标
    if (cuts > 0 && cuts < 6) {
      out.push(txt(280, 74, '✂️ 唾液淀粉酶正在咔嚓剪短长链', { size: 14, color: HOT, bold: true }));
    } else if (cuts === 6) {
      out.push(txt(280, 74, '✨ 剪成了两颗一组的麦芽糖，舌头尝到甜味啦！', { size: 14, color: GREEN, bold: true }));
    } else {
      out.push(txt(280, 74, '刚咬进嘴：整条淀粉长链太长，尝不出甜味', { size: 14, color: INK }));
    }
    // 下方：甜度条 + 碘液显色小烧杯
    out.push(`<rect x="52" y="200" width="260" height="24" rx="12" fill="#f4efe9" stroke="#d8c9b0" stroke-width="2"/>`);
    out.push(`<rect x="52" y="200" width="${n(2.6 * sweet)}" height="24" rx="12" fill="#ff9f43"/>`);
    out.push(txt(182, 188, `麦芽糖甜度：${sweet}%`, { size: 14, color: '#a8501a', bold: true }));
    // 碘液测试
    const blueAlpha = clamp(1 - cuts / 6, 0.08, 1);
    out.push(`<rect x="378" y="176" width="124" height="86" rx="14" fill="#fff" stroke="#d8c9b0" stroke-width="2"/>`);
    out.push(`<rect x="394" y="202" width="92" height="44" rx="8" fill="rgba(45, 78, 170, ${blueAlpha.toFixed(2)})"/>`);
    out.push(txt(440, 194, '滴一滴碘液', { size: 12, color: INK, bold: true }));
    out.push(txt(440, 230, cuts >= 5 ? '不变蓝' : '变蓝（有淀粉）', { size: 12, color: cuts >= 5 ? INK : '#ffffff', bold: true, plain: cuts < 5 }));
    out.push(txt(280, 294, '细嚼慢咽让口水里的酶有时间干活，胃里也轻松多了', { size: 13, color: INK }));
    return out.join('');
  },
  readout(s) {
    if (s.sec === 0) return '刚咬一口还没嚼：淀粉长链完好无损，舌头尝不出甜，滴碘液立刻变深蓝。';
    if (s.sec < 20) return `嚼了 ${s.sec} 秒：唾液淀粉酶剪开了一部分长链，嘴里开始透出淡淡甜味。`;
    return `细嚼 ${s.sec} 秒：大部分淀粉被剪成两颗糖连成的麦芽糖，白馒头越嚼越甜！`;
  },
};

/** 2. 细胞呼吸与运动强度：拖动运动强度，看耗氧、ATP 产出和乳酸积累 */
export const cellPower: SimDef = {
  params: [
    { key: 'pace', label: '活动状态', min: 0, max: 2, step: 1, value: 1, labels: ['安静坐着', '慢跑出汗', '百米冲刺'] },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const p = s.pace;
    const out: string[] = [];
    const pulse = 1 + 0.06 * Math.sin(t * (3 + p * 3));
    // 左侧原料
    out.push(`<rect x="28" y="76" width="126" height="62" rx="14" fill="#fff4e0" stroke="#f59f00" stroke-width="2.5"/>`);
    out.push(txt(91, 102, '🍚 葡萄糖', { size: 15, bold: true, color: '#a8501a' }));
    out.push(txt(91, 124, '食物带来的燃料', { size: 11, color: INK }));

    out.push(`<rect x="28" y="176" width="126" height="62" rx="14" fill="#e7f5ff" stroke="${BLUE}" stroke-width="2.5"/>`);
    out.push(txt(91, 202, '💨 氧气 O₂', { size: 15, bold: true, color: BLUE }));
    out.push(txt(91, 224, ['呼吸平缓', '呼吸加快', '供氧跟不上了'][p], { size: 11, color: p === 2 ? HOT : INK, bold: p === 2 }));

    // 中间线粒体工厂
    out.push(`<g transform="translate(285 158) scale(${n(pulse)})"><ellipse rx="78" ry="52" fill="#ffd8a8" stroke="#d97706" stroke-width="4"/><path d="M-52 0 Q-34 -26 -16 0 T20 0 T54 0" fill="none" stroke="#c45d00" stroke-width="3.5"/></g>`);
    out.push(txt(285, 162, '⚡ 线粒体', { size: 16, bold: true, color: '#7c2d12' }));
    out.push(arrow(160, 108, 204, 134, '#d97706', 3.5));
    out.push(arrow(160, 206, 204, 180, BLUE, 3.5));

    // 右侧产物
    out.push(arrow(366, 134, 412, 106, GREEN, 3.5));
    out.push(arrow(366, 182, 412, 206, '#6b5a42', 3.5));
    out.push(`<rect x="416" y="72" width="122" height="68" rx="14" fill="#e6f4e8" stroke="${GREEN}" stroke-width="2.5"/>`);
    out.push(txt(477, 100, '⚡ 能量 ATP', { size: 15, bold: true, color: GREEN }));
    out.push(txt(477, 124, ['够日常心跳', '稳稳供慢跑', '加开无氧救急'][p], { size: 11, color: INK }));

    out.push(`<rect x="416" y="176" width="122" height="68" rx="14" fill="${p === 2 ? '#fbeae7' : '#f4efe9'}" stroke="${p === 2 ? HOT : '#b0a089'}" stroke-width="2.5"/>`);
    out.push(txt(477, 204, p === 2 ? 'CO₂ + 乳酸' : '呼出 CO₂ + 水', { size: 14, bold: true, color: p === 2 ? HOT : INK }));
    out.push(txt(477, 226, p === 2 ? '肌肉酸胀的来源' : '随呼吸排出去', { size: 11, color: INK }));

    out.push(txt(280, 32, ['安静时：细胞慢慢拆葡萄糖，耗氧少', '慢跑时：心跳呼吸齐加速，给线粒体猛送氧', '百米冲刺：氧气一时不够，短时无氧呼吸攒下乳酸'][p], { size: 14, bold: true, color: INK }));
    out.push(txt(280, 294, '呼吸的真正目的地不在肺，而在全身几十万亿个细胞的线粒体里', { size: 13, color: GREEN, bold: true }));
    return out.join('');
  },
  readout(s) {
    return [
      '安静坐着时，细胞只需少量氧气就能把葡萄糖彻底拆开，稳稳放出足够心跳和思考用的能量。',
      '慢跑时肌肉耗能大增，大口喘气和加快心跳，都是在把更多氧气运给肌肉细胞里的线粒体。',
      '百米冲刺氧气一时供不上，肌肉临时启动无氧呼吸救急，顺带产出乳酸，所以冲完腿会发酸。',
    ][s.pace];
  },
};

/** 3. 酶的温度曲线：拖动温度看活性变化与凹槽形状（低温完好 vs 高温永久塌陷） */
export const enzymeTemp: SimDef = {
  params: [
    { key: 'temp', label: '环境温度', min: 0, max: 90, step: 5, value: 37, unit: ' ℃' },
  ],
  animated: false,
  draw(s) {
    const temp = s.temp;
    const denatured = temp >= 65;
    const activity = denatured
      ? Math.max(0, Math.round(18 * (1 - (temp - 65) / 20)))
      : Math.round(100 * Math.exp(-((temp - 37) ** 2) / 380));
    const out: string[] = [];
    // 左侧：活性曲线
    out.push(`<rect x="26" y="46" width="276" height="214" rx="14" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(`<line x1="56" y1="230" x2="286" y2="230" stroke="${INK}" stroke-width="2"/>`);
    out.push(`<line x1="56" y1="70" x2="56" y2="230" stroke="${INK}" stroke-width="2"/>`);
    const pts: string[] = [];
    for (let x = 0; x <= 90; x += 3) {
      const a = x >= 65 ? Math.max(0, 18 * (1 - (x - 65) / 20)) : 100 * Math.exp(-((x - 37) ** 2) / 380);
      pts.push(`${n(56 + (x / 90) * 224)},${n(228 - a * 1.45)}`);
    }
    out.push(`<polyline points="${pts.join(' ')}" fill="none" stroke="${GREEN}" stroke-width="4" stroke-linecap="round"/>`);
    const cx = 56 + (temp / 90) * 224;
    const cy = 228 - activity * 1.45;
    out.push(`<circle cx="${n(cx)}" cy="${n(cy)}" r="8" fill="${HOT}" stroke="#fff" stroke-width="2.5"/>`);
    out.push(txt(170, 250, '0 ℃          37 ℃          90 ℃', { size: 12, color: INK }));
    out.push(txt(170, 68, `当前酶活性：${activity}%`, { size: 14, color: denatured ? HOT : GREEN, bold: true }));

    // 右侧：酶的凹槽与底物
    out.push(`<rect x="322" y="46" width="212" height="214" rx="14" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(428, 72, '放大看酶的凹槽', { size: 14, bold: true, color: INK }));
    if (denatured) {
      // 高温塌陷变形
      out.push(`<path d="M360 198 C355 142 395 152 428 164 C462 175 498 148 494 198 Z" fill="#adb5bd" stroke="#6c757d" stroke-width="3"/>`);
      out.push(`<circle cx="428" cy="116" r="16" fill="#ffd43b" stroke="#c27a23" stroke-width="2.5"/>`);
      out.push(txt(428, 224, '凹槽被烫塌，咬不住了！', { size: 13, color: HOT, bold: true }));
      out.push(txt(428, 246, '永久失活（回温也救不回）', { size: 12, color: HOT }));
    } else {
      // 完整凹槽
      out.push(`<path d="M356 202 C354 134 396 130 406 154 C414 172 442 172 450 154 C460 130 502 134 500 202 Z" fill="${temp < 15 ? '#a5d8ff' : '#8ce09b'}" stroke="${temp < 15 ? BLUE : GREEN}" stroke-width="3"/>`);
      const dy = temp < 15 ? 114 : 146;
      out.push(`<circle cx="428" cy="${dy}" r="16" fill="#ffd43b" stroke="#c27a23" stroke-width="2.5"/>`);
      out.push(txt(428, 224, temp < 15 ? '凹槽完好，只是冻得慢' : '凹槽正好咬住底物！', { size: 13, color: temp < 15 ? BLUE : GREEN, bold: true }));
      out.push(txt(428, 246, temp < 15 ? '回温到 37 ℃ 能满血复活' : '干活效率最高', { size: 12, color: INK }));
    }
    out.push(txt(280, 294, '低温是“打盹”可恢复；高温是“烫熟”永久失活', { size: 13, color: INK, bold: true }));
    return out.join('');
  },
  readout(s) {
    if (s.temp <= 10) return `${r1(s.temp)} ℃ 太冷：酶的凹槽完好无损，只是分子动得慢、干活几乎停下；一暖和马上恢复！`;
    if (s.temp >= 65) return `${r1(s.temp)} ℃ 太烫：酶的蛋白质空间结构被彻底破坏，凹槽塌陷，放回 37 ℃ 也永久失活。`;
    return `${r1(s.temp)} ℃ 附近：酶的凹槽形态最稳定、碰撞又够勤，催化切开底物的速度非常高。`;
  },
};
