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

/** 4. 内耳半规管与转圈头晕：切换刚开始转 / 刚停下，看淋巴液惯性与纤毛弯曲信号冲突 */
export const earCanalSpin: SimDef = {
  params: [
    { key: 'phase', label: '转圈动作', min: 0, max: 2, step: 1, value: 2, labels: ['站稳不动', '原地转圈中', '猛地停下来！'] },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const ph = s.phase;
    const out: string[] = [];
    out.push(txt(280, 28, '耳朵深处的平衡陀螺仪：半规管里的淋巴液也有惯性！', { size: 14, bold: true, color: INK }));
    // 左：半规管圆环与帽状胶质纤毛
    out.push(`<circle cx="152" cy="154" r="78" fill="none" stroke="#d0ebff" stroke-width="26"/>`);
    out.push(`<circle cx="152" cy="154" r="78" fill="none" stroke="${BLUE}" stroke-width="2.5"/>`);
    out.push(txt(152, 154, '内耳半规管', { size: 13, bold: true, color: BLUE }));
    // 液体小点转动
    if (ph > 0) {
      for (let i = 0; i < 6; i += 1) {
        const a = t * 2.6 + (i * Math.PI) / 3;
        const px = 152 + Math.cos(a) * 78;
        const py = 154 + Math.sin(a) * 78;
        out.push(`<circle cx="${n(px)}" cy="${n(py)}" r="5.5" fill="${BLUE}"/>`);
      }
    }
    // 顶部感觉毛细胞与胶质帽弯曲
    const bend = ph === 0 ? 0 : ph === 1 ? -18 : 22;
    out.push(`<path d="M152 88 Q${152 + bend} 74 ${152 + bend * 1.2} 62" fill="none" stroke="${HOT}" stroke-width="6" stroke-linecap="round"/>`);
    out.push(txt(152, 256, ph === 0 ? '液体静止 · 纤毛直立' : ph === 1 ? '人在转 · 液体推弯纤毛' : '人已停下，液体靠惯性还在冲！', { size: 12.5, bold: true, color: ph === 2 ? HOT : INK }));

    // 右：眼睛 vs 内耳信号核对台
    out.push(`<rect x="278" y="54" width="258" height="196" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(407, 84, '🧠 大脑收到两份报告', { size: 14.5, bold: true, color: PURPLE }));
    const eyeMsg = ['👀 眼睛：房间静止不动', '👀 眼睛：画面在往后掠过', '👀 眼睛：脚已站定，房间没动'][ph];
    const earMsg = ['👂 内耳：没有旋转', '👂 内耳：正在旋转（一致！）', '👂 内耳：纤毛还弯着，报告还在转！'][ph];
    out.push(txt(296, 122, eyeMsg, { size: 12.5, anchor: 'start', bold: true, color: BLUE }));
    out.push(txt(296, 158, earMsg, { size: 12.5, anchor: 'start', bold: true, color: ph === 2 ? HOT : GREEN }));
    out.push(`<rect x="296" y="182" width="222" height="48" rx="12" fill="${ph === 2 ? '#fff0ee' : '#eef9ee'}"/>`);
    out.push(txt(407, 211, ph === 2 ? '😵 两边信号打架 → 天旋地转！' : '😊 两边报告一致 → 站得稳稳当当', { size: 13, bold: true, color: ph === 2 ? HOT : GREEN }));

    out.push(txt(280, 294, '花样滑冰运动员靠眼神死死盯住远方同一点（留头甩头）来减轻眩晕', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '站稳不动时：内耳半规管里的淋巴液安安静静，感觉毛细胞的纤毛直立，眼睛和内耳都报告“静止”。',
      '原地转圈时：半规管跟着头一起转，液体推动胶质帽和纤毛弯曲，眼睛也看到景物移动，两边信号对得上。',
      '猛地停下那一刻：脚停住了、眼睛看到沙发没动，可半规管里的淋巴液因为惯性还在转，继续压弯纤毛谎报“还在转”，大脑就觉得屋子天旋地转！',
    ][s.phase];
  },
};

/** 5. 胰岛素与胰高血糖素调血糖：切换饱餐后 vs 空腹运动，看负反馈稳住血糖 */
export const glucoseBalance: SimDef = {
  params: [
    { key: 'state', label: '身体状态', min: 0, max: 2, step: 1, value: 0, labels: ['刚吃饱一大碗饭', '饭后 2 小时（平稳）', '空腹踢球肚子饿'] },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const st = s.state;
    const out: string[] = [];
    out.push(txt(280, 28, '血糖天平（正常约 4~6 毫摩尔/升）：胰岛素管“收”，胰高血糖素管“放”', { size: 13.5, bold: true, color: INK }));
    // 中间血管
    out.push(`<rect x="34" y="126" width="492" height="58" rx="29" fill="#ffe3e3" stroke="#e03131" stroke-width="2.5"/>`);
    const dots = [9, 5, 3][st];
    for (let i = 0; i < dots; i += 1) {
      const dx = 66 + ((i * 54 + t * 28) % 420);
      const dy = 145 + (i % 2) * 18;
      out.push(`<circle cx="${n(dx)}" cy="${dy}" r="7.5" fill="#ffd43b" stroke="#c27a23" stroke-width="1.8"/>`);
    }
    out.push(txt(280, 114, ['饭后葡萄糖大量涌进血液', '血液葡萄糖浓度恰到好处', '运动消耗快，血糖开始偏低'][st], { size: 13, bold: true, color: st === 0 ? HOT : st === 1 ? GREEN : BLUE }));

    // 左下：胰岛指挥官
    out.push(`<rect x="40" y="206" width="214" height="68" rx="14" fill="#fff9db" stroke="#f59f00" stroke-width="2"/>`);
    out.push(txt(147, 232, st === 0 ? '📬 胰岛素派出！' : st === 2 ? '📬 胰高血糖素派出！' : '😌 两种激素温和待命', { size: 13.5, bold: true, color: '#b45309' }));
    out.push(txt(147, 256, st === 0 ? '通知各细胞开门收糖' : st === 2 ? '通知肝脏开仓放粮' : '血糖平稳无需大动作', { size: 12, color: INK }));

    // 右下：肝脏糖原仓库
    out.push(`<rect x="306" y="206" width="214" height="68" rx="14" fill="#eef9ee" stroke="${GREEN}" stroke-width="2"/>`);
    out.push(txt(413, 232, '🏦 肝脏与肌肉“糖原仓库”', { size: 13.5, bold: true, color: GREEN }));
    out.push(txt(413, 256, st === 0 ? '把多余葡萄糖串成糖原存好' : st === 2 ? '把肝糖原拆回葡萄糖补进血里' : '库存充足，随时可取用', { size: 12, color: INK }));

    if (st === 0) out.push(arrow(390, 184, 390, 206, GREEN, 3.5));
    if (st === 2) out.push(arrow(435, 206, 435, 184, HOT, 3.5));

    out.push(txt(280, 298, '少喝含糖饮料、规律运动，能帮身体里的胰岛素保持灵敏不累坏', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '刚吃完一大碗米饭：大量葡萄糖吸进血液，胰岛立刻分泌“胰岛素”随血液传信，让细胞加速用糖、肝脏和肌肉把多余糖存成糖原，血糖很快回落正常。',
      '饭后两小时左右：血糖稳稳停在正常区间（约 4~6 毫摩尔每升），大脑和全身细胞都有稳定的能量供应。',
      '空腹运动肚子饿时：血糖偏低，胰岛改派“胰高血糖素”出场，通知肝脏把存好的肝糖原拆回葡萄糖放进血液，防止低血糖头晕！',
    ][s.state];
  },
};

const vaccineAb = (day: number, fast: boolean): number =>
  fast ? Math.min(98, Math.round(98 * (1 - Math.exp(-day / 1.6)))) : day < 4 ? 4 : Math.min(36, Math.round((day - 3) * 6));

/** 6. 疫苗与免疫记忆曲线：对比未接种首次感染 vs 接种后遇真病毒，看抗体爆发速度 */
export const vaccineDrill: SimDef = {
  params: [
    { key: 'vax', label: '是否打过疫苗', min: 0, max: 1, step: 1, value: 1, labels: ['没打疫苗（初次硬扛）', '打过疫苗（有记忆细胞）'] },
    { key: 'day', label: '遇到真病毒后第几天', min: 1, max: 10, step: 1, value: 4, unit: ' 天' },
  ],
  animated: false,
  draw(s) {
    const trained = s.vax === 1;
    const d = s.day;
    const cur = vaccineAb(d, trained);
    const out: string[] = [];
    out.push(txt(280, 28, trained ? '🛡️ 有记忆细胞：真病毒一露头，抗体火箭式飙升！' : '😰 没练过兵：免疫系统从零摸索好几天，病毒趁机大繁殖', { size: 13.5, bold: true, color: trained ? GREEN : HOT }));
    // 坐标图
    out.push(`<rect x="34" y="48" width="310" height="206" rx="14" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(`<line x1="64" y1="226" x2="324" y2="226" stroke="${INK}" stroke-width="2"/>`);
    out.push(`<line x1="64" y1="68" x2="64" y2="226" stroke="${INK}" stroke-width="2"/>`);
    // 两条对比曲线（淡色慢曲线 + 亮色当前曲线）
    const slowPts: string[] = [];
    const fastPts: string[] = [];
    for (let x = 1; x <= 10; x += 1) {
      const px = 64 + ((x - 1) / 9) * 252;
      slowPts.push(`${n(px)},${n(224 - vaccineAb(x, false) * 1.48)}`);
      fastPts.push(`${n(px)},${n(224 - vaccineAb(x, true) * 1.48)}`);
    }
    out.push(`<polyline points="${slowPts.join(' ')}" fill="none" stroke="${trained ? '#ced4da' : HOT}" stroke-width="${trained ? 2.5 : 4}" stroke-dasharray="5 4"/>`);
    if (trained) out.push(`<polyline points="${fastPts.join(' ')}" fill="none" stroke="${GREEN}" stroke-width="4"/>`);
    const dotX = 64 + ((d - 1) / 9) * 252;
    const dotY = 224 - cur * 1.48;
    out.push(`<circle cx="${n(dotX)}" cy="${n(dotY)}" r="7.5" fill="${trained ? GREEN : HOT}" stroke="#fff" stroke-width="2"/>`);
    out.push(txt(194, 245, '第 1 天        遇真病毒后天数        第 10 天', { size: 11.5, color: INK }));
    out.push(txt(124, 74, '抗体数量', { size: 12, color: INK, bold: true }));

    // 右侧状态卡
    out.push(`<rect x="360" y="48" width="174" height="206" rx="14" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(447, 78, `第 ${d} 天战况`, { size: 15, bold: true, color: INK }));
    out.push(txt(447, 114, `抗体水平：${cur} 份`, { size: 14, bold: true, color: trained ? GREEN : HOT }));
    out.push(txt(447, 152, trained ? '🧠 记忆细胞秒认通缉照' : '🔍 还在挨个试哪种抗体对路', { size: 12, color: PURPLE, bold: true }));
    out.push(txt(447, 188, trained ? (d >= 3 ? '✅ 病毒已被围剿清除' : '⚡ 大批抗体正在出厂') : (d <= 5 ? '🤒 病毒占上风，发烧难受' : '😮‍💨 抗体总算慢慢追上来了'), { size: 12, bold: true, color: trained ? GREEN : HOT }));
    out.push(txt(447, 228, '疫苗本身早已代谢排走', { size: 11.5, color: INK }));

    out.push(txt(280, 288, '疫苗不是药水留在血里杀毒，而是帮身体提前练出一支长寿的“记忆特种兵”', { size: 12.5, bold: true, color: INK }));
    return out.join('');
  },
  readout(s) {
    if (s.vax === 1) {
      return `打过疫苗（第 ${s.day} 天）：体内早就存着认得该病毒的记忆细胞，真病毒一露面就迅速唤醒二次免疫，抗体飙到 ${vaccineAb(s.day, true)} 份，往往还没生病就把病毒清光了！`;
    }
    return `没打过疫苗（第 ${s.day} 天）：免疫系统第一次见这个敌人，前几天几乎造不出专门抗体（当前仅 ${vaccineAb(s.day, false)} 份），病毒趁机大量复制让人大病一场。`;
  },
};
