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

/** 4. 萤火虫冷光 vs 白炽灯泡：调能量零钱 ATP 投入，看光能与热能分配 */
export const fireflyAtp: SimDef = {
  params: [
    { key: 'dev', label: '谁在发光', min: 0, max: 1, step: 1, value: 0, labels: ['萤火虫发光器（冷光）', '老式白炽灯泡（热光）'] },
    { key: 'atp', label: '供能强弱', min: 0, max: 100, step: 25, value: 75, unit: '%' },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const bug = s.dev === 0;
    const p = s.atp;
    const lightPct = p === 0 ? 0 : bug ? 85 : 10;
    const heatPct = p === 0 ? 0 : 100 - lightPct;
    const glow = (p / 100) * (0.65 + 0.35 * Math.sin(t * 4));
    const out: string[] = [];
    out.push(`<rect x="20" y="44" width="236" height="218" rx="16" fill="#1e2a24"/>`);
    if (p > 0) {
      out.push(`<circle cx="138" cy="154" r="${n(34 + p * 0.42)}" fill="${bug ? '#c5f667' : '#ffd43b'}" opacity="${n(glow * 0.55)}"/>`);
    }
    if (bug) {
      out.push(`<ellipse cx="138" cy="134" rx="22" ry="34" fill="#495057"/>`);
      out.push(`<ellipse cx="138" cy="170" rx="18" ry="14" fill="${p > 0 ? '#d8f5a2' : '#868e96'}"/>`);
      out.push(txt(138, 82, '荧光素 + 荧光素酶 + O₂', { size: 12, color: '#d8f5a2', bold: true, plain: true }));
      out.push(txt(138, 236, p > 0 ? '手摸温度：约 25 ℃（不烫手！）' : '缺了 ATP，灯笼熄灭', { size: 12.5, color: '#ffffff', bold: true, plain: true }));
    } else {
      out.push(`<circle cx="138" cy="146" r="32" fill="${p > 0 ? '#ffe066' : '#868e96'}" stroke="#dee2e6" stroke-width="2.5"/>`);
      out.push(`<rect x="124" y="178" width="28" height="18" rx="4" fill="#adb5bd"/>`);
      out.push(txt(138, 82, '电流把钨丝烧到上千摄氏度', { size: 12, color: '#ffd8a8', bold: true, plain: true }));
      out.push(txt(138, 236, p > 0 ? '表面烫手：超 100 ℃！' : '断电熄灭', { size: 12.5, color: '#ffa8a8', bold: true, plain: true }));
    }
    // 右侧能量去向对比
    out.push(`<rect x="276" y="44" width="264" height="218" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(408, 76, bug ? 'ATP 化学能直接变光' : '电能先烧热灯丝才发光', { size: 14, bold: true, color: INK }));
    out.push(txt(296, 118, `变成可见光：${lightPct}%`, { size: 13, anchor: 'start', bold: true, color: GREEN }));
    out.push(`<rect x="296" y="128" width="220" height="18" rx="9" fill="#f4efe9"/><rect x="296" y="128" width="${n(lightPct * 2.2)}" height="18" rx="9" fill="#94d82d"/>`);
    out.push(txt(296, 182, `散成热量：${heatPct}%`, { size: 13, anchor: 'start', bold: true, color: HOT }));
    out.push(`<rect x="296" y="192" width="220" height="18" rx="9" fill="#f4efe9"/><rect x="296" y="192" width="${n(heatPct * 2.2)}" height="18" rx="9" fill="${HOT}"/>`);
    out.push(txt(408, 240, bug ? '量子产率约 41%，几乎不产废热' : '约九成能量都白白变成热散掉了', { size: 12, color: INK }));
    out.push(txt(280, 28, '细胞的能量零钱 ATP：随取随用，驱动萤火虫点亮夏夜冷光', { size: 14, bold: true, color: INK }));
    out.push(txt(280, 294, '野外看萤火虫请关掉手电筒、不捕捉，让它们安心用闪光找伙伴', { size: 12.5, color: GREEN, bold: true }));
    return out.join('');
  },
  readout(s) {
    if (s.atp === 0) return '供能为 0%：没有能量零钱 ATP 激活荧光素，就算有荧光素酶和氧气也发不出光。';
    return s.dev === 0
      ? `萤火虫供能 ${s.atp}%：荧光素酶利用 ATP 把化学能直接转成黄绿光（发光量子产率约 41%），几乎不发热，摸着凉丝丝！`
      : `白炽灯泡供能 ${s.atp}%：必须先把灯丝烧得滚烫才能发光，约九成能量变成烫手的热量浪费掉了。`;
  },
};

/** 5. 菠萝扎嘴与蛋白酶：切换生吃 / 泡淡盐水 / 加热煮熟，看草酸钙针晶与蛋白酶变化 */
export const bromelainMouth: SimDef = {
  params: [
    { key: 'prep', label: '菠萝怎么处理', min: 0, max: 2, step: 1, value: 0, labels: ['直接生吃', '泡淡盐水 10 分钟', '加热到 75 ℃ 煮熟'] },
  ],
  animated: false,
  draw(s) {
    const p = s.prep;
    const enzymeActive = [100, 72, 0][p];
    const sting = [92, 52, 8][p];
    const out: string[] = [];
    out.push(txt(280, 30, '鲜菠萝“双武器”：草酸钙小针晶扎微口 + 菠萝蛋白酶啃黏膜蛋白', { size: 13.5, bold: true, color: INK }));
    // 左侧：显微镜下的菠萝果肉武器
    out.push(`<rect x="26" y="52" width="246" height="186" rx="16" fill="#fff9db" stroke="#f59f00" stroke-width="2.5"/>`);
    out.push(txt(149, 78, '🍍 菠萝汁里的两样东西', { size: 14, bold: true, color: '#b45309' }));
    // 草酸钙针晶
    for (let i = 0; i < 4; i += 1) {
      const y = 104 + i * 16;
      out.push(`<line x1="54" y1="${y}" x2="118" y2="${y - 6}" stroke="#868e96" stroke-width="2.5" stroke-linecap="round"/>`);
    }
    out.push(txt(86, 184, '草酸钙针晶', { size: 12, color: INK, bold: true }));
    out.push(txt(86, 204, p === 2 ? '煮软冲散' : '微米级小细针', { size: 11.5, color: INK }));
    // 菠萝蛋白酶吃豆人/变形团
    if (p < 2) {
      out.push(`<path d="M202 134 L228 118 A30 30 0 1 0 228 150 Z" fill="${HOT}"/>`);
      out.push(txt(202, 184, '菠萝蛋白酶', { size: 12, color: HOT, bold: true }));
      out.push(txt(202, 204, p === 0 ? '全速剪蛋白质！' : '还在！没被盐杀死', { size: 11.5, color: HOT, bold: true }));
    } else {
      out.push(`<path d="M174 142 Q192 114 210 138 T232 136" fill="none" stroke="#adb5bd" stroke-width="6" stroke-linecap="round"/>`);
      out.push(txt(202, 184, '菠萝蛋白酶', { size: 12, color: GREEN, bold: true }));
      out.push(txt(202, 204, '高温变性彻底失活', { size: 11.5, color: GREEN, bold: true }));
    }
    // 右侧：舌头感受与酶活性
    out.push(`<rect x="292" y="52" width="242" height="186" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(413, 82, ['👅 舌尖又麻又刺痛！', '👅 甜味更显，吃多仍微麻', '😋 酸甜温和，一点不扎嘴！'][p], { size: 14, bold: true, color: p === 2 ? GREEN : HOT }));
    out.push(txt(312, 122, `蛋白酶剩余活性：${enzymeActive}%`, { size: 13, anchor: 'start', bold: true, color: INK }));
    out.push(`<rect x="312" y="130" width="200" height="15" rx="7.5" fill="#f4efe9"/><rect x="312" y="130" width="${n(enzymeActive * 2)}" height="15" rx="7.5" fill="${p === 2 ? GREEN : '#ff9f43'}"/>`);
    out.push(txt(312, 178, `舌头刺痛感：${sting}%`, { size: 13, anchor: 'start', bold: true, color: INK }));
    out.push(`<rect x="312" y="186" width="200" height="15" rx="7.5" fill="#f4efe9"/><rect x="312" y="186" width="${n(sting * 2)}" height="15" rx="7.5" fill="${sting > 40 ? HOT : GREEN}"/>`);

    out.push(txt(280, 268, p === 1 ? '淡盐水主要冲掉表面汁液、促唾液保护黏膜，并不能把蛋白酶彻底灭活' : p === 2 ? '加热超过 70 ℃ 把蛋白酶结构烫塌，做菠萝咕咾肉还能顺便把肉变嫩！' : '口腔黏膜细胞每隔几天就会换新，麻一会儿自己就能长好', { size: 12.5, bold: true, color: p === 2 ? GREEN : INK }));
    out.push(txt(280, 296, '对菠萝严重过敏（嘴唇红肿呼吸不畅）不是普通扎嘴，要立刻停吃就医', { size: 12, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '直接生吃：草酸钙微针在舌头表面扎出微小缺口，菠萝蛋白酶趁机分解口腔表面蛋白质，所以火辣辣地刺痛。',
      '泡淡盐水：冲走部分表面针晶、咸味衬托甜味并刺激口水保护黏膜，但绝大部分菠萝蛋白酶依然活着，吃多了还会麻。',
      '75 ℃ 加热煮熟（或菠萝罐头）：高温让菠萝蛋白酶三维结构彻底变性失活，再吃就一点也不扎舌头啦！',
    ][s.prep];
  },
};

/** 6. 减掉的脂肪去哪儿了：拖动减掉的脂肪质量，看 84% 呼出 CO₂ 与 16% 变成水 */
export const fatExhale: SimDef = {
  params: [
    { key: 'kg', label: '氧化分解掉的脂肪', min: 1, max: 10, step: 1, value: 10, unit: ' 千克' },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const fat = s.kg;
    const o2 = fat * 2.9;
    const co2FromFat = fat * 0.84;
    const h2oFromFat = fat * 0.16;
    const out: string[] = [];
    out.push(txt(280, 30, `分解 ${fat} 千克脂肪的原子去向账本（物质守恒，不会凭空变没！）`, { size: 14, bold: true, color: INK }));
    // 左：脂肪块 + 吸入氧气
    const rFat = 24 + fat * 2.2;
    out.push(`<circle cx="106" cy="132" r="${n(rFat)}" fill="#ffd43b" stroke="#d97706" stroke-width="3"/>`);
    out.push(txt(106, 128, '脂肪', { size: 14, bold: true, color: '#7c2d12' }));
    out.push(txt(106, 148, `${fat} kg`, { size: 14, bold: true, color: '#7c2d12' }));
    out.push(txt(106, 218, `+ 吸入氧气约 ${r1(o2)} kg`, { size: 12.5, bold: true, color: BLUE }));

    out.push(arrow(168, 126, 256, 98, GREEN, 4));
    out.push(arrow(168, 152, 256, 196, BLUE, 3.5));

    // 右上：84% 从肺呼出 CO2
    out.push(`<rect x="266" y="54" width="268" height="92" rx="16" fill="#e6f4e8" stroke="${GREEN}" stroke-width="3"/>`);
    out.push(txt(400, 84, `🫁 肺呼出二氧化碳：${r1(co2FromFat)} kg（84%）`, { size: 14.5, bold: true, color: GREEN }));
    out.push(txt(400, 110, '脂肪里的碳原子全靠一呼一吸排进空气！', { size: 12.5, color: INK }));
    const u = (t * 0.6) % 1;
    for (let i = 0; i < 3; i += 1) {
      const bx = 330 + i * 65 + u * 18;
      out.push(`<circle cx="${n(bx)}" cy="130" r="7" fill="#b2f2bb" stroke="${GREEN}" stroke-width="1.5"/>`);
    }

    // 右下：16% 变成水
    out.push(`<rect x="266" y="162" width="268" height="82" rx="16" fill="#e7f5ff" stroke="${BLUE}" stroke-width="2.5"/>`);
    out.push(txt(400, 192, `💧 变成水排出：${r1(h2oFromFat)} kg（16%）`, { size: 14.5, bold: true, color: BLUE }));
    out.push(txt(400, 218, '随尿液、汗液、呼吸水汽离开身体', { size: 12.5, color: INK }));

    out.push(txt(280, 272, '⚠️ 光坐着故意猛喘气可减不了肥（只会头晕），得靠运动让肌肉真正消耗燃料！', { size: 12.5, bold: true, color: HOT }));
    out.push(txt(280, 298, '流汗掉的体重绝大部分是降温用的水，喝杯水就回来了', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    return `每真正减掉 ${s.kg} 千克脂肪，需要吸进约 ${r1(s.kg * 2.9)} 千克氧气：其中 ${r1(s.kg * 0.84)} 千克（84%）变成二氧化碳从肺呼出，${r1(s.kg * 0.16)} 千克（16%）变成水排出——肺才是减脂最大的排泄通道！`;
  },
};
