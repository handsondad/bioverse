import { INK, HOT, GREEN, BLUE, PURPLE, arrow, n, r1, txt, type SimDef } from './kit';

/** 1. 缩手反射弧：拖动时间进度，看信号先走脊髓缩手、再上传大脑觉得疼 */
export const reflexArc: SimDef = {
  params: [
    { key: 'ms', label: '碰到烫锅后过了', min: 0, max: 300, step: 50, value: 100, unit: ' 毫秒' },
  ],
  animated: false,
  draw(s) {
    const ms = s.ms;
    const pulled = ms >= 100;
    const felt = ms >= 250;
    const out: string[] = [];
    // 大脑
    out.push(`<ellipse cx="448" cy="70" rx="76" ry="38" fill="${felt ? '#ffe3e3' : '#f3e8ff'}" stroke="${felt ? HOT : PURPLE}" stroke-width="${felt ? 4 : 2.5}"/>`);
    out.push(txt(448, 66, '🧠 大脑皮层', { size: 14, bold: true, color: felt ? HOT : PURPLE }));
    out.push(txt(448, 86, felt ? '“哎呀好烫！”' : '还没收到报告', { size: 12, color: felt ? HOT : INK }));
    // 脊髓
    out.push(`<rect x="242" y="138" width="112" height="58" rx="16" fill="${ms >= 50 ? '#fff4e0' : '#eef5ff'}" stroke="${ms >= 50 ? HOT : BLUE}" stroke-width="3"/>`);
    out.push(txt(298, 165, '脊髓中枢', { size: 14, bold: true, color: INK }));
    out.push(txt(298, 184, ms >= 50 ? '立刻下令缩手！' : '待命', { size: 11, color: ms >= 50 ? HOT : INK }));
    // 手与烫锅
    out.push(`<text x="64" y="168" font-size="38" text-anchor="middle">🍲</text>`);
    const handX = pulled ? 138 : 98;
    out.push(`<text x="${handX}" y="172" font-size="36" text-anchor="middle">✋</text>`);
    out.push(txt(100, 212, pulled ? '手已嗖地缩回！' : '手指碰到烫锅', { size: 13, bold: true, color: pulled ? GREEN : HOT }));
    // 路线箭头
    out.push(arrow(138, 152, 238, 152, ms >= 50 ? HOT : '#c9c2b5', 3.5));
    out.push(txt(188, 138, '① 传入', { size: 12, color: ms >= 50 ? HOT : INK }));
    out.push(arrow(238, 184, 148, 184, pulled ? GREEN : '#c9c2b5', 3.5));
    out.push(txt(192, 204, '② 传出缩手', { size: 12, color: pulled ? GREEN : INK }));
    // 脊髓 → 大脑（长路径）
    out.push(arrow(356, 150, 412, 108, felt ? HOT : '#c9c2b5', 3.5));
    out.push(txt(428, 144, '③ 顺便报告大脑', { size: 12, color: felt ? HOT : INK }));

    out.push(txt(280, 258, pulled && !felt ? '看！此刻手已经缩回，可大脑还没喊出“好烫”！' : felt ? '先救手，后喊疼：这就是脊髓近道的救命本领' : '向右拖时间，看看信号先到脊髓还是先到大脑', { size: 14, bold: true, color: pulled ? GREEN : INK }));
    out.push(txt(280, 294, '反射弧五步：感受器 → 传入神经 → 脊髓 → 传出神经 → 手臂肌肉', { size: 12, color: INK }));
    return out.join('');
  },
  readout(s) {
    if (s.ms === 0) return '第 0 毫秒：指尖刚碰到滚烫锅边，皮肤里的感受器立刻发出电信号！';
    if (s.ms < 100) return `第 ${s.ms} 毫秒：信号飞速冲进脊髓，脊髓不等大脑商量，当场下令手臂肌肉收缩。`;
    if (s.ms < 250) return `第 ${s.ms} 毫秒：手已经“嗖”地缩回来了！而往大脑上传的信号还在半路上，所以还没觉得疼。`;
    return `第 ${s.ms} 毫秒：信号终于传到大脑皮层，这时你才“哎呀”一声感觉到疼——手早已平安脱离危险啦。`;
  },
};

/** 2. 发烧与免疫战斗：拖动体温，看病菌繁殖速度和白细胞活跃度 */
export const feverBattle: SimDef = {
  params: [
    { key: 'temp', label: '身体温度', min: 37, max: 40.5, step: 0.5, value: 38.5, unit: ' ℃' },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const temp = s.temp;
    const highDanger = temp >= 39.5;
    const germSpeed = Math.max(18, Math.round(100 - (temp - 37) * 28));
    const immune = temp <= 39 ? Math.round(55 + (temp - 37) * 22) : Math.max(45, Math.round(99 - (temp - 39) * 35));
    const out: string[] = [];
    out.push(`<rect x="24" y="48" width="512" height="148" rx="16" fill="${highDanger ? '#fff0ee' : '#f4faf5'}" stroke="${highDanger ? HOT : '#b7e4c7'}" stroke-width="2.5"/>`);
    // 病菌小点
    const germs = Math.max(2, Math.round(germSpeed / 16));
    for (let i = 0; i < germs; i += 1) {
      const gx = 90 + i * 52 + Math.sin(t * 2 + i) * 8;
      const gy = 112 + (i % 2) * 38;
      out.push(`<circle cx="${n(gx)}" cy="${n(gy)}" r="13" fill="#e5989b" stroke="#b03f38" stroke-width="2"/>`);
      out.push(txt(gx, gy + 4, '🦠', { size: 14 }));
    }
    // 白细胞卫士
    const guardX = 430 + Math.cos(t * (2 + immune / 40)) * 18;
    out.push(`<circle cx="${n(guardX)}" cy="126" r="34" fill="#e7f5ff" stroke="${BLUE}" stroke-width="3.5"/>`);
    out.push(txt(guardX, 122, '🛡️', { size: 22 }));
    out.push(txt(guardX, 144, '免疫卫士', { size: 11, color: BLUE, bold: true }));
    // 下方两条进度条
    out.push(txt(50, 224, `病菌繁殖速度：${germSpeed}%`, { size: 13, anchor: 'start', bold: true, color: '#b03f38' }));
    out.push(`<rect x="50" y="232" width="210" height="16" rx="8" fill="#f4efe9"/><rect x="50" y="232" width="${n(germSpeed * 2.1)}" height="16" rx="8" fill="#e5484d"/>`);

    out.push(txt(300, 224, `免疫细胞战斗力：${immune}%`, { size: 13, anchor: 'start', bold: true, color: GREEN }));
    out.push(`<rect x="300" y="232" width="210" height="16" rx="8" fill="#f4efe9"/><rect x="300" y="232" width="${n(immune * 2.1)}" height="16" rx="8" fill="${highDanger ? '#f59f00' : GREEN}"/>`);

    out.push(txt(280, 32, `体温 ${r1(temp)} ℃ · ${temp < 37.5 ? '正常体温' : highDanger ? '高烧警报！要及时降温看医生' : '适度发烧：拖慢病菌、唤醒免疫卫士'}`, { size: 14, bold: true, color: highDanger ? HOT : GREEN }));
    out.push(txt(280, 288, highDanger ? '温度过高连自己的酶和神经都会受不了，不能硬扛！' : '身体主动调高“室温”，是免疫系统迎战入侵者的正常武器', { size: 13, color: highDanger ? HOT : INK, bold: highDanger }));
    return out.join('');
  },
  readout(s) {
    if (s.temp < 37.5) return `${r1(s.temp)} ℃ 正常体温：免疫卫士平时在巡逻，一旦有病菌闯入就会拉响警报。`;
    if (s.temp < 39.5) return `${r1(s.temp)} ℃ 中低度发烧：病菌繁殖变慢，免疫细胞更活跃，帮身体打赢感冒这场仗。`;
    return `${r1(s.temp)} ℃ 高烧危险区：自己体内的酶也会跟着受影响、人会极不舒服，要及时遵医嘱降温就医！`;
  },
};

/** 3. 神经冲动与突触接力：拖动兴奋前进位置，看膜电位从 -70 mV 翻到 +30 mV 再过突触 */
export const nerveWave: SimDef = {
  params: [
    { key: 'pos', label: '兴奋跑到第几段', min: 0, max: 4, step: 1, value: 1, labels: ['静息待命', '轴突起点', '轴突中段', '到达突触', '传给下一个'] },
  ],
  animated: false,
  draw(s) {
    const pos = s.pos;
    const out: string[] = [];
    // 左侧神经元轴突
    out.push(`<rect x="44" y="128" width="278" height="64" rx="16" fill="#fff7e6" stroke="#d97706" stroke-width="3"/>`);
    // 突触间隙
    out.push(`<rect x="330" y="114" width="40" height="92" rx="8" fill="#edf5ff" stroke="${BLUE}" stroke-width="2" stroke-dasharray="5 4"/>`);
    out.push(txt(350, 102, '突触缝隙', { size: 12, color: BLUE, bold: true }));
    // 右侧下一个神经元
    out.push(`<rect x="378" y="128" width="138" height="64" rx="16" fill="${pos === 4 ? '#ffe3c4' : '#f4f1ea'}" stroke="${pos === 4 ? HOT : '#8b7a5c'}" stroke-width="3"/>`);
    // 轴突三段电荷标记
    const segs = [
      { x: 96, excited: pos === 1 },
      { x: 184, excited: pos === 2 },
      { x: 272, excited: pos === 3 },
    ];
    for (const seg of segs) {
      const col = seg.excited ? HOT : BLUE;
      if (seg.excited) {
        out.push(`<rect x="${seg.x - 36}" y="132" width="72" height="56" rx="10" fill="#ffd8a8"/>`);
      }
      out.push(txt(seg.x, 120, seg.excited ? '−  −' : '+  +', { size: 15, bold: true, color: col }));
      out.push(txt(seg.x, 165, seg.excited ? '+30 mV' : '−70 mV', { size: 13, bold: true, color: col }));
      out.push(txt(seg.x, 208, seg.excited ? 'Na⁺ 涌进' : '静息', { size: 12, color: col }));
    }
    // 突触递质颗粒
    if (pos >= 3) {
      for (const [dx, dy] of [[342, 146], [355, 162], [346, 178], [362, 152]]) {
        out.push(`<circle cx="${dx}" cy="${dy}" r="5.5" fill="${PURPLE}"/>`);
      }
      out.push(arrow(320, 160, 382, 160, PURPLE, 3));
    }
    out.push(txt(447, 165, pos === 4 ? '收到！继续传 ⚡' : '等待信号', { size: 13, bold: true, color: pos === 4 ? HOT : INK }));
    const titles = [
      '静息电位：钾离子外流，膜外正、膜内负（−70 mV）',
      '刺激来了：钠离子瞬间涌入，膜电位翻成 +30 mV！',
      '局部电流把下一段唤醒，电信号像多米诺一样往前跑',
      '到了突触：电信号变成化学递质，单向渡过缝隙',
      '化学递质粘上对面受体，重新变回电信号继续奔跑！',
    ];
    out.push(txt(280, 42, titles[pos], { size: 14, bold: true, color: pos === 0 ? BLUE : HOT }));
    out.push(txt(280, 272, '神经纤维上跑电信号飞快，过突触换成化学递质单向传、会慢约 0.5 ms', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '静息时：细胞膜主要放钾离子往外走，呈现内负外正，稳在 −70 mV。',
      '刚受刺激：钠离子通道打开、钠离子涌进膜内，电位冲到 +30 mV 形成动作电位。',
      '传导中：兴奋段和隔壁未兴奋段产生局部电流，一段唤起一段，电信号飞奔向前。',
      '过突触：电信号不能直接跳过缝隙，突触前膜放出化学递质飘向对岸。',
      '接力完成：化学递质与后膜受体结合，下一个神经元重新产生电信号，且只能单向传递。',
    ][s.pos];
  },
};
