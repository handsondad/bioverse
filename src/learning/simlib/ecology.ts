import { INK, HOT, GREEN, LEAF, BLUE, arrow, n, txt, type SimDef } from './kit';

/** 1. 草原狼与羊的平衡：拖动狼的数量，看羊群与草场的连锁变化 */
export const wolfSheep: SimDef = {
  params: [
    { key: 'wolves', label: '草原上狼的数量', min: 0, max: 10, step: 2, value: 4, unit: ' 只' },
  ],
  animated: false,
  draw(s) {
    const w = s.wolves;
    const sheep = w === 0 ? 95 : Math.max(12, Math.round(68 - w * 5.2));
    const grass = w === 0 ? 12 : w <= 6 ? Math.min(92, 42 + w * 10) : 95;
    const balanced = w >= 2 && w <= 6;
    const out: string[] = [];
    // 草原背景色随草量变化
    out.push(`<rect x="24" y="54" width="512" height="122" rx="16" fill="${grass > 45 ? '#d9f2dc' : '#f1dfc8'}" stroke="${grass > 45 ? GREEN : '#c2925a'}" stroke-width="2.5"/>`);
    out.push(txt(280, 34, w === 0 ? '⚠️ 狼全被赶走：羊群暴增把草啃光，草原快变荒漠！' : balanced ? '🌿 狼、羊、草互相牵制，草原稳稳保持平衡！' : '🐺 狼太多了：羊群变得很少，过一阵狼自己也会挨饿', { size: 14, bold: true, color: balanced ? GREEN : HOT }));
    // 画图标示意
    out.push(txt(106, 118, grass > 45 ? '🌿🌿🌿🌿' : '🌾', { size: 28 }));
    out.push(txt(106, 156, `青草 ${grass}%`, { size: 14, bold: true, color: grass > 45 ? GREEN : HOT }));
    out.push(arrow(176, 116, 218, 116, INK, 3));
    out.push(txt(280, 118, sheep > 70 ? '🐑🐑🐑🐑🐑' : sheep > 30 ? '🐑🐑🐑' : '🐑', { size: 26 }));
    out.push(txt(280, 156, `羊群 ${sheep} 只`, { size: 14, bold: true, color: sheep > 70 ? HOT : INK }));
    out.push(arrow(342, 116, 384, 116, INK, 3));
    out.push(txt(454, 118, w === 0 ? '（0 只狼）' : w <= 4 ? '🐺🐺' : '🐺🐺🐺🐺', { size: w === 0 ? 16 : 26, color: HOT }));
    out.push(txt(454, 156, `狼群 ${w} 只`, { size: 14, bold: true, color: INK }));
    // 三条柱子
    const bars: [string, number, string][] = [['青草盖度', grass, LEAF], ['羊群规模', sheep, '#ff9f43'], ['狼群规模', w * 10, BLUE]];
    bars.forEach(([label, val, col], i) => {
      const y = 198 + i * 32;
      out.push(txt(116, y + 14, label, { size: 13, anchor: 'end', bold: true, color: INK }));
      out.push(`<rect x="128" y="${y + 2}" width="320" height="16" rx="8" fill="#f4efe9"/>`);
      out.push(`<rect x="128" y="${y + 2}" width="${n(val * 3.2)}" height="16" rx="8" fill="${col}"/>`);
      out.push(txt(458, y + 14, `${val}%`, { size: 12, anchor: 'start', color: INK, bold: true }));
    });
    return out.join('');
  },
  readout(s) {
    if (s.wolves === 0) return '把狼全赶走后：短期羊群暴涨，但很快把草根都啃光，最后反而害得羊群大批挨饿！';
    if (s.wolves <= 6) return `留着适量狼群（${s.wolves} 只）：狼吃掉老弱病残、控制住羊的数量，青草有时间重新长高，整片草原都健康。`;
    return `狼群过多（${s.wolves} 只）：羊群太少，很快狼也找不到食物，数量会自然回落到平衡点。`;
  },
};

/** 2. 森林落叶回收循环：开关分解者（蘑菇与细菌），看落叶堆成山还是变肥土 */
export const forestRecycle: SimDef = {
  params: [
    { key: 'active', label: '森林分解者（真菌、细菌、蚯蚓）', min: 0, max: 1, step: 1, value: 1, labels: ['全休假停工', '正常干活'] },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const on = s.active === 1;
    const out: string[] = [];
    // 三个节点三角形循环
    out.push(`<circle cx="280" cy="82" r="46" fill="#d9f2dc" stroke="${GREEN}" stroke-width="3"/>`);
    out.push(txt(280, 78, '🌳 生产者', { size: 14, bold: true, color: GREEN }));
    out.push(txt(280, 98, '树木造有机物', { size: 11, color: INK }));

    out.push(`<circle cx="436" cy="212" r="46" fill="#fff4e0" stroke="#f59f00" stroke-width="3"/>`);
    out.push(txt(436, 208, '🍂 落叶枯木', { size: 14, bold: true, color: '#a8501a' }));
    out.push(txt(436, 228, on ? '源源不断送去回收' : '越堆越高成垃圾山！', { size: 10.5, color: on ? INK : HOT, bold: !on }));

    out.push(`<circle cx="124" cy="212" r="46" fill="${on ? '#efe5ff' : '#e9ecef'}" stroke="${on ? '#7c52b8' : '#adb5bd'}" stroke-width="3"/>`);
    out.push(txt(124, 208, '🍄 分解者', { size: 14, bold: true, color: on ? '#5f3dc4' : '#6c757d' }));
    out.push(txt(124, 228, on ? '拆成水、CO₂、肥' : '停工了', { size: 11, color: on ? INK : HOT }));

    // 箭头
    out.push(arrow(320, 112, 398, 174, '#c27a23', 3.5));
    out.push(arrow(386, 212, 178, 212, on ? '#7c52b8' : '#ced4da', 3.5));
    out.push(arrow(160, 174, 238, 112, on ? GREEN : '#ced4da', 3.5));
    if (on) {
      const p = (t * 0.4) % 1;
      const cx = 160 + p * 78;
      const cy = 174 - p * 62;
      out.push(`<circle cx="${n(cx)}" cy="${n(cy)}" r="7" fill="${GREEN}"/>`);
      out.push(txt(154, 134, '养分回土里', { size: 12.5, bold: true, color: GREEN }));
    } else {
      out.push(txt(280, 198, '❌ 循环断了！', { size: 16, bold: true, color: HOT }));
    }
    out.push(txt(280, 294, on ? '分解者把落叶拆回无机养分，森林才生生不息、落叶不堆山' : '没有分解者，落叶永远烂不掉，土壤养分也很快用光', { size: 13, bold: true, color: on ? GREEN : HOT }));
    return out.join('');
  },
  readout(s) {
    return s.active === 1
      ? '分解者正常干活：蘑菇真菌、细菌和蚯蚓把枯枝落叶分解成水、二氧化碳和矿物质，重新喂养新树。'
      : '分解者全部停工：枯枝落叶越堆越高，营养锁死在死叶子里回不到泥土，连活着的树也会跟着饿坏！';
  },
};

/** 3. 长颈鹿自然选择：拖动世代数，看高树叶环境下长脖子比例代代升高 */
export const giraffeSelect: SimDef = {
  params: [
    { key: 'gen', label: '经过的世代', min: 0, max: 3, step: 1, value: 2, labels: ['第 1 代（长短都有）', '第 50 代', '第 200 代', '很多代以后'] },
  ],
  animated: false,
  draw(s) {
    const g = s.gen;
    // 每代 4 只长颈鹿的脖子高度（自然变异 + 选择保留长的）
    const necks = [
      [48, 66, 84, 102],
      [68, 82, 96, 112],
      [88, 98, 110, 122],
      [108, 116, 122, 130],
    ][g];
    const treeY = 104;
    const out: string[] = [];
    // 高处的树冠
    out.push(`<rect x="444" y="106" width="24" height="148" fill="#8b5a2b"/>`);
    out.push(`<ellipse cx="456" cy="86" rx="82" ry="42" fill="#8ce09b" stroke="${GREEN}" stroke-width="3"/>`);
    out.push(txt(456, 88, '🍃 高处树叶', { size: 13, bold: true, color: '#1b5e20' }));
    out.push(`<line x1="28" y1="${treeY}" x2="390" y2="${treeY}" stroke="${LEAF}" stroke-width="2" stroke-dasharray="6 5"/>`);
    out.push(txt(92, 94, '够得到树叶的高度线', { size: 12, color: GREEN, bold: true }));
    // 地面
    out.push(`<rect x="20" y="246" width="520" height="12" rx="6" fill="#d9c08a"/>`);
    // 画 4 只长颈鹿
    necks.forEach((h, i) => {
      const x = 86 + i * 86;
      const reach = 210 - h <= treeY + 12;
      const col = reach ? '#f59f00' : '#d8c9b0';
      out.push(`<rect x="${x - 16}" y="208" width="32" height="18" rx="7" fill="${col}" stroke="#8b5a2b" stroke-width="2"/>`);
      out.push(`<line x1="${x - 10}" y1="226" x2="${x - 10}" y2="246" stroke="#8b5a2b" stroke-width="4"/>`);
      out.push(`<line x1="${x + 10}" y1="226" x2="${x + 10}" y2="246" stroke="#8b5a2b" stroke-width="4"/>`);
      out.push(`<line x1="${x + 8}" y1="210" x2="${x + 14}" y2="${210 - h}" stroke="${col}" stroke-width="10" stroke-linecap="round"/>`);
      out.push(`<circle cx="${x + 18}" cy="${210 - h}" r="10" fill="${col}" stroke="#8b5a2b" stroke-width="2"/>`);
      out.push(txt(x + 8, 274, reach ? '✅ 吃得到' : '❌ 够不着', { size: 11.5, color: reach ? GREEN : HOT, bold: true }));
    });
    out.push(txt(280, 30, '不是天天伸脖子拉长的：是天生稍长的更易吃饱、留下更多后代', { size: 13.5, bold: true, color: INK }));
    out.push(txt(280, 300, '自然选择 = 天生有差异（变异） + 适应者更容易活下来传宗接代', { size: 12.5, color: GREEN, bold: true }));
    return out.join('');
  },
  readout(s) {
    return [
      '第 1 代：祖先群体里本来就有的脖子短、有的稍长——这是随机遗传变异。',
      '第 50 代：低处嫩草吃完后，脖子稍长的个体更容易吃到高处树叶、活下来生出小长颈鹿。',
      '第 200 代：一代代筛下来，长脖子基因在群体里越来越多，平均脖子越来越长。',
      '很多代以后：整个种群都变成了长脖子——不是“努力练长再遗传”，而是大自然一路挑选出来的！',
    ][s.gen];
  },
};
