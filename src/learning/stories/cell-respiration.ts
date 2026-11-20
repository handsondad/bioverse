import type { Story } from './types';

export const cellRespiration: Story = {
  slug: 'cell-respiration',
  title: '跑步时为什么大口喘气？氧气吸进去到底去干嘛了？',
  trigger: '体育课跑完四百米，小念胸口剧烈起伏、大口喘气，摸摸脸还热乎乎的，好奇吸进去的氧气究竟去哪儿了。',
  dialogue: [
    {
      nian: '爸爸，跑步时我又没憋着气，怎么非得大口喘气？氧气吸进肺里就完了吗？',
      dad: '肺只是中转站哦！氧气进了肺泡就搭上红细胞小船，被心脏泵到全身每一个肌肉细胞里。细胞里的“发电站”线粒体，正等着拿氧气去拆开葡萄糖，放出让你抬腿奔跑的能量呢！',
      eq: '葡萄糖 + 氧气 → 二氧化碳 + 水 + 大量能量',
      figure: { kind: 'sim', sim: 'cellPower', caption: '切换坐着、慢跑和百米冲刺，看看线粒体耗氧、产能和乳酸的变化。' },
    },
    {
      nian: '线粒体拆葡萄糖像烧柴火吗？怪不得我跑完步浑身热乎乎的！',
      dad: '你一下抓住了重点！这就像一场温温柔柔、不会冒火苗的“慢燃烧”：葡萄糖里存的化学能释放出来，一部分装进能量货币 ATP 里供肌肉收缩，另一部分变成热量，让你体温升高、出汗散热。',
    },
    {
      nian: '那我呼出来的气里，是不是就是这场“慢燃烧”剩下的废气？',
      dad: '完全正确！线粒体拆完葡萄糖后，剩下二氧化碳和水。血液顺手把二氧化碳运回肺部呼出去——所以我们吸进氧气、呼出更多二氧化碳，全是为了给细胞里的能量工厂供料和排废。',
    },
    {
      nian: '那百米冲刺跑得太猛，腿第二天酸酸胀胀的，也是线粒体搞的鬼吗？',
      dad: '是因为冲刺太快，呼吸和血液一时送不够氧气！肌肉细胞只好启动应急备用方案——无氧呼吸，不用氧气也能先挤出一点能量救急，但顺带会留下乳酸，乳酸堆在肌肉里就让人觉得发酸。',
      show: { kind: 'steps', frames: [{ icon: '🏃', label: '冲刺极耗能' }, { icon: '😮‍💨', label: '供氧来不及' }, { icon: '⚡', label: '无氧应急产乳酸' }] },
    },
    {
      nian: '晚上我躺着睡觉一动不动，细胞里的呼吸作用会暂停吗？',
      dad: '一秒钟也不能停！睡觉时心脏还在跳、大脑在整理记忆、体温要维持在 37 ℃ 左右，全靠细胞不停做呼吸作用供能。只不过睡着了需要得少，呼吸和心跳就慢下来了。',
    },
    {
      nian: '我懂了！大口喘气不是为了把肺撑满，而是给全身细胞的线粒体送氧气，帮它拆开葡萄糖放出能量、呼出二氧化碳；供氧跟不上时无氧呼吸救急会产生乳酸，怪不得冲刺完腿会发酸。',
      dad: '说得太清楚了！跑完剧烈运动别立刻蹲下，慢走几分钟深呼吸，能让血液继续送氧、帮身体更快清掉多余的乳酸哦。',
    },
  ],
  tip: '很多孩子以为“呼吸就是肺的一吸一呼”，其实肺部换气只是外呼吸，真正的细胞呼吸发生在全身细胞的细胞质基质和线粒体里。运动后指导孩子慢走拉伸、补水，不要猛灌冰水。',
  sources: [
    { title: '生物学 七年级下册 · 第四单元 第三章 人体的呼吸', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: '生物学 必修1 分子与细胞 · 第5章 第3节 细胞呼吸的原理和应用', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '氧气去哪儿了', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🫁', path: [[220, 440]], size: 130, from: 0.2 },
          { kind: 'flow', path: [[310, 440], [520, 440]], color: '#e03131', count: 6, speed: 200, from: 0.8 },
          { kind: 'shape', shape: 'circle', at: [740, 440], size: [280, 200], color: '#ffd8a8', text: '线粒体', motion: 'pulse', from: 1.5 },
          { kind: 'label', at: [420, 440], pos: [420, 260], text: '血液运送氧气', from: 2.2 },
          { kind: 'myth', wrong: '吸气只为了把肺撑满', right: '真正用氧的是全身细胞', from: 4.5 },
        ],
      },
      {
        turn: 1, title: '温柔的慢燃烧', duration: 10,
        cues: [
          { kind: 'atom', path: [[220, 350], [520, 430]], symbol: '糖', color: '#ffd43b', r: 42, travel: 2.5, from: 0.4 },
          { kind: 'atom', path: [[220, 540], [520, 470]], symbol: 'O₂', color: '#4dabf7', r: 38, travel: 2.5, from: 0.6 },
          { kind: 'shape', shape: 'circle', at: [600, 450], size: [210, 150], color: '#ffd8a8', text: '线粒体', from: 0.2 },
          { kind: 'arrow', path: [[720, 400], [920, 320]], color: '#2e7d32', text: '能量 ATP', from: 3.0 },
          { kind: 'arrow', path: [[720, 500], [920, 580]], color: '#e8590c', text: '体温热量', from: 3.4 },
          { kind: 'pulse', at: [600, 450], color: '#ff9f43', radius: 130, from: 3.2 },
        ],
      },
      {
        turn: 2, title: '呼出二氧化碳', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [320, 450], size: [200, 140], color: '#ffd8a8', text: '线粒体', from: 0.2 },
          { kind: 'flow', path: [[430, 450], [780, 450]], color: '#8b7a5c', count: 6, speed: 190, from: 1.0 },
          { kind: 'sprite', icon: '🫁', path: [[900, 450]], size: 130, from: 0.5 },
          { kind: 'label', at: [600, 450], pos: [600, 280], text: '运回 CO₂ 呼出', from: 2.0 },
          { kind: 'text', at: [600, 740], text: '吸氧供料，呼气排废', from: 4.2 },
        ],
      },
      {
        turn: 3, title: '冲刺与乳酸', duration: 9,
        cues: [
          { kind: 'meter', at: [340, 360], label: '氧气供应', start: 0.9, end: 0.25, color: '#3b6ea5', from: 0.6 },
          { kind: 'meter', at: [860, 360], label: '肌肉乳酸', start: 0.1, end: 0.85, color: '#e8590c', from: 1.6 },
          { kind: 'shape', shape: 'pill', at: [600, 560], size: [340, 96], color: '#fbeae7', text: '无氧呼吸救急', from: 2.4 },
          { kind: 'text', at: [600, 760], text: '乳酸攒多，腿就发酸发胀', from: 4.5 },
        ],
      },
      {
        turn: 4, title: '睡着也不停工', duration: 9,
        cues: [
          { kind: 'sprite', icon: '😴', path: [[600, 380]], size: 170, from: 0.2 },
          { kind: 'pulse', at: [600, 380], color: '#e64980', radius: 150, rate: 0.8, from: 0.8 },
          { kind: 'count', at: [340, 640], label: '心跳每分钟', start: 90, end: 65, unit: '次', over: 3, from: 1.6 },
          { kind: 'meter', at: [860, 640], label: '呼吸作用', start: 0.9, end: 0.5, color: '#2e7d32', from: 2.2 },
          { kind: 'label', at: [640, 300], pos: [940, 220], text: '细胞照样在发电', from: 3.4 },
          { kind: 'text', at: [600, 800], text: '需要得少，只是慢下来', from: 5.0 },
        ],
      },
    ],
  },
};
