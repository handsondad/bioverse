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

/** 4. 蜜蜂传粉与 8 字舞：调节果园传粉昆虫数量，对比虫媒苹果结实率与风媒小麦 */
export const beeWaggle: SimDef = {
  params: [
    { key: 'bees', label: '果园里的蜜蜂与传粉昆虫', min: 0, max: 100, step: 25, value: 100, unit: '%' },
  ],
  animated: true,
  still: 1,
  draw(s, t) {
    const b = s.bees;
    const appleYield = Math.max(8, Math.round(8 + b * 0.88));
    const wheatYield = 92; // 小麦靠风媒，几乎不受蜜蜂减少影响
    const out: string[] = [];
    out.push(txt(280, 28, '全球约 75% 农作物种类靠动物授粉：蜜蜂采蜜捎花粉，回巢还跳 8 字舞报信！', { size: 12.8, bold: true, color: INK }));
    // 左：苹果树（虫媒花）+ 蜜蜂 8 字轨迹
    out.push(`<rect x="24" y="48" width="252" height="196" rx="16" fill="#f4faf5" stroke="#b7e4c7" stroke-width="2"/>`);
    out.push(txt(150, 74, '🍎 虫媒作物：苹果、草莓、西瓜', { size: 13, bold: true, color: GREEN }));
    out.push(`<ellipse cx="150" cy="142" rx="84" ry="46" fill="#8ce09b" stroke="${GREEN}" stroke-width="2.5"/>`);
    const apples = Math.max(1, Math.round(b / 20));
    for (let i = 0; i < apples; i += 1) {
      const ax = 96 + i * 26;
      const ay = 132 + (i % 2) * 20;
      out.push(`<circle cx="${ax}" cy="${ay}" r="9" fill="#e03131"/>`);
    }
    if (b > 0) {
      const ang = t * 3;
      const bx = 150 + Math.sin(ang) * 42;
      const by = 198 + Math.sin(ang * 2) * 12;
      out.push(`<path d="M108 198 C128 180 172 216 192 198 C172 180 128 216 108 198" fill="none" stroke="#f59f00" stroke-width="1.8" stroke-dasharray="4 3"/>`);
      out.push(txt(bx, by, '🐝', { size: 18 }));
      out.push(txt(150, 232, `8 字舞召集同伴 → 结果率约 ${appleYield}%`, { size: 12, bold: true, color: GREEN }));
    } else {
      out.push(txt(150, 214, '❌ 没人传粉，花谢了也结不出果！', { size: 12, bold: true, color: HOT }));
    }

    // 右：风媒小麦对比柱状图
    out.push(`<rect x="294" y="48" width="242" height="196" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(415, 76, '收成对比：谁最离不开蜜蜂？', { size: 13.5, bold: true, color: INK }));
    out.push(txt(312, 116, `🍎 果蔬坚果（虫媒）：${appleYield}%`, { size: 12.5, anchor: 'start', bold: true, color: b < 25 ? HOT : GREEN }));
    out.push(`<rect x="312" y="124" width="204" height="16" rx="8" fill="#f4efe9"/><rect x="312" y="124" width="${n(appleYield * 2.04)}" height="16" rx="8" fill="${b < 25 ? HOT : '#51cf66'}"/>`);
    out.push(txt(312, 174, `🌾 水稻小麦（风媒）：${wheatYield}%`, { size: 12.5, anchor: 'start', bold: true, color: '#b45309' }));
    out.push(`<rect x="312" y="182" width="204" height="16" rx="8" fill="#f4efe9"/><rect x="312" y="182" width="${n(wheatYield * 2.04)}" height="16" rx="8" fill="#ffd43b"/>`);
    out.push(txt(415, 224, '主食靠风吹花粉，果蔬彩盘全靠传粉动物！', { size: 11.5, color: INK }));

    out.push(txt(280, 288, '少滥用农药、在公园留一片野花，就是给传粉小帮手留食堂', { size: 12.5, color: INK }));
    return out.join('');
  },
  readout(s) {
    if (s.bees === 0) return '要是蜜蜂等传粉昆虫全消失了：水稻、小麦靠风传粉还能收，但苹果、草莓、西瓜和许多蔬菜没法受精结果，餐桌瞬间少掉大半色彩与维生素！';
    return `传粉昆虫活力 ${s.bees}%：蜜蜂钻进花里喝蜜时绒毛粘满花粉，顺手帮下一朵花授粉，果园苹果结实率约 ${Math.max(8, Math.round(8 + s.bees * 0.88))}%！`;
  },
};

/** 5. 生态能量金字塔：调草场阳光能量与传递效率（10%~20%），算能养活多少羊和虎 */
export const energyPyramid: SimDef = {
  params: [
    { key: 'eff', label: '相邻营养级传递效率', min: 10, max: 20, step: 5, value: 10, unit: '%' },
  ],
  animated: false,
  draw(s) {
    const e = s.eff / 100;
    const grassE = 10000;
    const herbE = Math.round(grassE * e);
    const tigerE = Math.round(herbE * e);
    const out: string[] = [];
    out.push(txt(280, 28, `能量单向流、层层打折（当前每级只传下 ${s.eff}%，其余呼吸散成热！）`, { size: 13.5, bold: true, color: INK }));
    // 三层金字塔
    // 底层：青草
    out.push(`<rect x="56" y="192" width="448" height="58" rx="12" fill="#8ce09b" stroke="${GREEN}" stroke-width="3"/>`);
    out.push(txt(280, 218, `🌿 第一营养级（青草）：${grassE} 份能量`, { size: 14.5, bold: true, color: '#1b5e20' }));
    out.push(txt(280, 239, '靠叶绿体把太阳能固定进有机物', { size: 11.5, color: '#1b5e20' }));

    // 中层：食草动物
    const w2 = 160 + s.eff * 5;
    out.push(`<rect x="${n(280 - w2 / 2)}" y="124" width="${n(w2)}" height="56" rx="12" fill="#ffe066" stroke="#d97706" stroke-width="2.5"/>`);
    out.push(txt(280, 150, `🐑 食草动物：${herbE} 份`, { size: 14, bold: true, color: '#7c2d12' }));
    out.push(txt(280, 170, `只拿到草的 ${s.eff}%`, { size: 11.5, color: '#7c2d12' }));

    // 顶层：顶级猛兽
    const w3 = 96 + s.eff * 2.4;
    out.push(`<rect x="${n(280 - w3 / 2)}" y="56" width="${n(w3)}" height="56" rx="12" fill="#ffc9c9" stroke="${HOT}" stroke-width="2.5"/>`);
    out.push(txt(280, 82, `🐯 猛兽：仅 ${tigerE} 份！`, { size: 13.5, bold: true, color: HOT }));
    out.push(txt(280, 102, '一山难容二虎', { size: 11, color: INK, bold: true }));

    // 两侧热散失箭头
    out.push(arrow(460, 192, 514, 154, '#868e96', 3));
    out.push(txt(495, 142, '呼吸散热散走大半', { size: 11.5, color: INK }));
    out.push(txt(280, 288, '物质能循环，热能收不回！所以保护一只野生东北虎，得先保住整片大森林', { size: 12.5, bold: true, color: GREEN }));
    return out.join('');
  },
  readout(s) {
    const herb = Math.round(10000 * (s.eff / 100));
    const top = Math.round(herb * (s.eff / 100));
    return `按 ${s.eff}% 传递效率计算：10000 份青草能量传给食草动物只剩 ${herb} 份，再传到老虎、狮子这一级只剩 ${top} 份——层层递减决定了顶级捕食者数量必然稀少！`;
  },
};

/** 6. 珊瑚虫与虫黄藻共生及白化：拖动海水升温幅度，看虫黄藻撤离露出白骨架 */
export const coralBleach: SimDef = {
  params: [
    { key: 'warm', label: '海水比正常夏季偏高', min: 0, max: 3, step: 1, value: 0, unit: ' ℃' },
  ],
  animated: false,
  draw(s) {
    const w = s.warm;
    const algae = [100, 62, 12, 0][w];
    const food = [90, 56, 14, 4][w];
    const coralCols = ['#ff8787', '#ffc078', '#f8f9fa', '#dee2e6'];
    const out: string[] = [];
    out.push(txt(280, 28, '珊瑚是动物！它的漂亮颜色和九成口粮，全靠住进体内的“虫黄藻”房客', { size: 13.2, bold: true, color: INK }));
    // 左：海底珊瑚丛与内部共生藻点
    out.push(`<rect x="24" y="48" width="252" height="198" rx="16" fill="#d0ebff" stroke="${BLUE}" stroke-width="2"/>`);
    out.push(`<g fill="${coralCols[w]}" stroke="${w >= 2 ? '#adb5bd' : '#c92a2a'}" stroke-width="2.5">`);
    out.push(`<rect x="132" y="136" width="36" height="84" rx="16"/>`);
    out.push(`<rect x="92" y="150" width="30" height="62" rx="14" transform="rotate(-24 107 181)"/>`);
    out.push(`<rect x="178" y="150" width="30" height="62" rx="14" transform="rotate(24 193 181)"/>`);
    out.push(`</g>`);
    // 体内虫黄藻小绿金点
    const dots = Math.round(algae / 10);
    for (let i = 0; i < dots; i += 1) {
      const dx = 140 + (i % 2) * 18;
      const dy = 148 + Math.floor(i / 2) * 14;
      out.push(`<circle cx="${dx}" cy="${dy}" r="4.5" fill="#82c91e"/>`);
    }
    out.push(txt(150, 78, w === 0 ? '🌊 水温舒适：房东房客互利共赢' : w === 1 ? '🌡️ 升温 +1 ℃：虫黄藻受压外逃' : w === 2 ? '🤍 升温 +2 ℃：白化！露出白骨骼' : '💀 长期 +3 ℃：珊瑚活活饿死长杂藻', { size: 12.2, bold: true, color: w >= 2 ? HOT : BLUE }));
    out.push(txt(150, 232, w === 2 ? '白化 ≠ 立刻死亡！及时降温还能救回' : w === 3 ? '失去房客太久，整片珊瑚礁坍塌' : '珊瑚虫给住所和碳，虫黄藻回赠糖和氧', { size: 11.5, bold: true, color: w >= 2 ? HOT : GREEN }));

    // 右：共生账单
    out.push(`<rect x="294" y="48" width="242" height="198" rx="16" fill="#fff" stroke="#ffe0cc" stroke-width="2"/>`);
    out.push(txt(415, 80, `升温 +${w} ℃ 时的珊瑚公寓`, { size: 14.5, bold: true, color: INK }));
    out.push(txt(312, 120, `体内虫黄藻房客：${algae}%`, { size: 13, anchor: 'start', bold: true, color: INK }));
    out.push(`<rect x="312" y="130" width="204" height="15" rx="7.5" fill="#f4efe9"/><rect x="312" y="130" width="${n(algae * 2.04)}" height="15" rx="7.5" fill="${LEAF}"/>`);
    out.push(txt(312, 176, `珊瑚获得的口粮：${food}%`, { size: 13, anchor: 'start', bold: true, color: INK }));
    out.push(`<rect x="312" y="186" width="204" height="15" rx="7.5" fill="#f4efe9"/><rect x="312" y="186" width="${n(food * 2.04)}" height="15" rx="7.5" fill="${w >= 2 ? HOT : '#ff9f43'}"/>`);
    out.push(txt(415, 228, '海底四分之一的鱼类都靠珊瑚礁安家', { size: 11.5, color: BLUE, bold: true }));

    out.push(txt(280, 288, '节约用电减排温室气体、海边浮潜不踩珊瑚并用物理防晒，都是在护住海底花园', { size: 12.2, color: INK }));
    return out.join('');
  },
  readout(s) {
    return [
      '正常水温（+0 ℃）：虫黄藻安居在透明珊瑚虫细胞里晒太阳光合作用，把高达 90% 的营养送给珊瑚虫，并把珊瑚染得五彩斑斓。',
      '海水偏高 1 ℃：过热让虫黄藻光合作用紊乱产生有害物质，珊瑚虫开始把一部分藻类房客排出去，颜色变淡。',
      '海水偏高 2 ℃：虫黄藻几乎搬空，透明珊瑚虫底下雪白的碳酸钙骨骼露出来（珊瑚白化）——此时珊瑚还活着但正在挨饿，水温降下来还能恢复！',
      '长期偏高 3 ℃ 不退：没有虫黄藻送饭，珊瑚虫最终饥饿死亡，礁体被灰暗杂藻覆盖，依赖珊瑚礁的小鱼虾也失去家园。',
    ][s.warm];
  },
};
