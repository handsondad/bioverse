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
