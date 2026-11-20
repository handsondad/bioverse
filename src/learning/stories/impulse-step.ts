import type { Story } from './types';

export const impulseStep: Story = {
  slug: 'impulse-step',
  title: '发令枪一响，信号在身体里是怎么“跑”到腿上的？',
  trigger: '看百米赛跑转播时，解说员说发令枪响后 0.1 秒以内起跑就算抢跑——小念奇怪，为什么人不可能在枪响那一瞬间立刻弹出去？',
  dialogue: [
    {
      nian: '爸爸，发令枪一响耳朵马上听见了，为什么 0.1 秒内起跑就算抢跑？神经传信号不是像电线一样瞬间到达吗？',
      dad: '神经里跑的确实是电信号，叫神经冲动，但它可不是铜线里的电子光速飞奔，而是靠细胞膜上的离子开门接力！没刺激时，钾离子往外流，神经膜呈现外正内负、稳在负 70 毫伏，叫静息电位。',
      show: { kind: 'lab', step: 1, label: '看「静息电位」' },
      figure: { kind: 'sim', sim: 'nerveWave', caption: '向右拖动兴奋前进的位置，看膜电位翻转再跨过突触缝隙。' },
    },
    {
      nian: '静息电位平时稳稳停在负 70 毫伏，枪响信号一来，它怎么动起来？',
      dad: '刺激一到，膜上的钠离子通道刷地打开！膜外的钠离子像开闸放水一样涌进膜内，膜电位瞬间从负 70 毫伏冲上正 30 毫伏，翻成内正外负，这就是动作电位！',
      eq: '静息（K⁺ 外流，内负外正） → 兴奋（Na⁺ 内流，内正外负）',
      show: { kind: 'lab', step: 2, label: '看「动作电位」' },
    },
    {
      nian: '动作电位只是这一小段翻过来了，它怎么跑到一米多远的腿上去？',
      dad: '翻成内正外负的这一段，和旁边还是内负外正的邻居之间产生了电位差，立刻形成局部电流！这股小电流顺手把下一段的钠通道也撞开，像多米诺骨牌一样一段唤醒一段飞奔向前，后面那段则很快恢复待命。',
      show: { kind: 'lab', step: 3, label: '看「局部电流」' },
    },
    {
      nian: '局部电流一路往前传，那从耳朵到大脑再到腿，是不是一根神经直通到底？',
      dad: '不是哦，中间要换好几次车！两个神经细胞之间留着一道极窄的缝隙，叫突触。电信号跳不过缝隙，前一个神经末梢只好放出化学“信使”——神经递质飘过河，粘到对面受体上再变回电信号！',
      show: { kind: 'lab', step: 4, label: '看「突触」' },
    },
    {
      nian: '电信号变化学递质过河再变回电信号，这不就耽误时间了吗？怪不得人有反应时间！',
      dad: '没错！每过一个突触都要花大约半毫秒（突触延搁），而且递质只能从前膜放、后膜收，所以只能单向传。声音进耳朵、大脑判断、再传到腿部肌肉要连过好多突触，加起来最快也超过 0.1 秒。另外，毒品可卡因会破坏突触回收递质让人严重成瘾，千万要远离毒品！',
      show: { kind: 'lab', step: 5, label: '看「单向与延搁」' },
    },
    {
      nian: '我懂了！发令枪响后，信号在神经纤维上靠钠离子内流产生动作电位、靠局部电流接力往前跑，遇上突触缝隙再变成化学递质单向渡河，所以传到腿上总要超过零点一秒。',
      dad: '讲得像小科学家一样清楚！去 3D 实验台里，你还可以亲手给神经放电刺激，看电表指针两度反向偏转、看突触小泡放递质的全过程！',
    },
  ],
  tip: '本课配有「神经冲动的产生和传导」3D 实验台，可以点页首按钮进入，直观观察静息电位、动作电位、局部电流、突触传递，以及可卡因阻断多巴胺回收导致受体下调的成瘾机制（很好的禁毒科普契机）。',
  sources: [
    { title: '生物学 选择性必修1 稳态与调节 · 第2章 第3节 神经冲动的产生和传导', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: '3D 生物实验课件：神经冲动的产生和传导（CC BY-NC 4.0）', by: '铜匠十点睡觉', url: 'https://lab.tongjiang.app' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '静息与动作电位', duration: 10,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 430], size: [760, 170], color: '#e7f5ff', tint: { color: '#ffd8a8', at: 3.5, over: 1.5 }, text: '神经纤维膜', from: 0.2 },
          { kind: 'count', at: [600, 240], label: '膜电位', start: -70, end: 30, unit: 'mV', over: 2.5, from: 3.0 },
          { kind: 'atom', path: [[600, 560], [600, 440]], symbol: 'Na⁺', color: '#e8590c', r: 36, travel: 2.2, from: 2.8 },
          { kind: 'myth', wrong: '神经里像电线一样跑电子', right: '靠钠钾离子进出形成电信号', from: 5.5 },
        ],
      },
      {
        turn: 2, title: '局部电流多米诺', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 450], size: [860, 150], color: '#fff7e6', from: 0.2 },
          { kind: 'flow', path: [[200, 450], [1000, 450]], color: '#e8590c', count: 7, speed: 240, from: 0.8 },
          { kind: 'label', at: [600, 450], pos: [600, 260], text: '一段唤醒下一段', from: 1.8 },
          { kind: 'text', at: [600, 740], text: '后方恢复静息，前方继续冲', from: 4.2 },
        ],
      },
      {
        turn: 3, title: '突触渡河接力', duration: 10,
        cues: [
          { kind: 'shape', shape: 'pill', at: [320, 450], size: [300, 180], color: '#ffd8a8', text: '突触前膜', from: 0.2 },
          { kind: 'shape', shape: 'pill', at: [880, 450], size: [300, 180], color: '#d9f2dc', text: '突触后膜', from: 0.2 },
          { kind: 'particles', box: [500, 360, 200, 180], count: 10, color: '#7c52b8', motion: 'gas', size: 12, from: 1.5 },
          { kind: 'arrow', path: [[480, 450], [720, 450]], color: '#7c52b8', text: '化学递质渡河', from: 2.2 },
          { kind: 'formula', at: [600, 760], text: '电信号 → 化学信号 → 电信号', from: 4.5 },
        ],
      },
      {
        turn: 4, title: '单向传递有延搁', duration: 9,
        cues: [
          { kind: 'arrow', path: [[280, 440], [920, 440]], color: '#2e7d32', text: '只能单向往前传', from: 0.6 },
          { kind: 'count', at: [600, 260], label: '人类反应极限', start: 0.0, end: 0.1, unit: '秒', over: 2.5, from: 2.0 },
          { kind: 'text', at: [600, 720], text: '所以 0.1 秒内起跑判抢跑', from: 4.5 },
        ],
      },
    ],
  },
};
