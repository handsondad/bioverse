import type { Story } from './types';

export const gutMicrobiome: Story = {
  slug: 'gut-microbiome',
  title: '肚子里住着几十万亿个细菌，它们为什么不让我们生病？',
  trigger: '小念在绘本里读到“每个人的肠道里住着几十万亿个细菌”，吓得赶紧捂住肚子，担心这么多细菌把肚子咬坏。',
  dialogue: [
    {
      nian: '爸爸，书上说我肚子里住着几十万亿个细菌，听着好吓人！它们为什么没让我天天肚子疼？',
      dad: '别害怕，住在你大肠里的绝大多数细菌是“互利共生”的好邻居！我们每天给它们提供温暖的住处和剩下的食物残渣，它们反过来帮我们干好多人体自己干不了的活，互相帮忙谁也离不开谁！',
      figure: { kind: 'sim', sim: 'gutGarden', caption: '拖动每天蔬菜与全谷物摄入量，看肠道花园里有益菌怎样占满地盘赶走坏菌。' },
    },
    {
      nian: '互利共生的好邻居都能帮我干什么活呀？我自己的胃和小肠不够用吗？',
      dad: '比如蔬菜水果、粗粮里的膳食纤维，人类自己的消化酶剪不开，只能一路送到大肠；肠道有益菌最爱吃膳食纤维，顺手帮我们把它们发酵成养肠道细胞的短链脂肪酸，还会帮我们合成维生素 K 和部分 B 族维生素呢！',
      show: { kind: 'steps', frames: [{ icon: '🥦', label: '吃蔬果粗粮纤维' }, { icon: '🦠', label: '有益菌分解造维' }, { icon: '🛡️', label: '占满地盘挡坏菌' }] },
    },
    {
      nian: '哇，它们还会帮我造维生素！那要是吃进不干净的东西带进来坏病菌，有益菌能帮忙吗？',
      dad: '能帮大忙！有益菌密密麻麻把肠道内壁的“座位”全占满了，还会放出弱酸性物质。外来的坏病菌一进来，发现没地方落脚、环境还不舒服，就很难站稳脚跟繁殖，这叫菌群屏障！',
    },
    {
      nian: '那如果生病时吃了好几天抗生素，肚子里的有益菌会不会跟着遭殃？',
      dad: '确实会受到波及，因为抗生素分不清好细菌和坏细菌，所以有人吃完抗生素容易拉肚子。不过只要不乱用抗生素，病好后好好吃蔬果、杂粮和适量酸奶，健康的肠道菌群很快就能重新长回来！',
    },
    {
      nian: '既然好好吃蔬果杂粮能让菌群长回来，妈妈天天让我多吃青菜燕麦，也是在喂好朋友吗？',
      dad: '太懂事了！蔬菜水果、全谷物里的膳食纤维就是有益菌最爱的口粮（科学家叫它益生元）。每天吃得多样丰富，你肚子里那座热闹的微生物花园就会一直生机勃勃！',
    },
    {
      nian: '我懂了！肚子里几十万亿个细菌大多是互利共生的好朋友，它们吃我们消化不了的膳食纤维，帮着合成维生素、占满地盘挡住坏菌；多吃蔬果粗粮、不乱吃抗生素就是在照顾它们。',
      dad: '说得真温暖！其实大自然里到处都有这样的互利共生：豆科植物根上的根瘤菌、牛羊胃里的纤维分解菌，都是生命合作共赢的好榜样。',
    },
  ],
  tip: '肠道菌群总数量级约在数十万亿（与人体细胞总数大致相当，约 1:1），主要定植于大肠。日常均衡饮食（丰富蔬果、全谷物、豆类）、充足睡眠和避免滥用抗生素，比盲目购买昂贵“益生菌补剂”更有助于维持健康的肠道微生态。',
  sources: [
    { title: '生物学 八年级上册 · 第五单元 第四章 第4节 细菌和真菌在自然界中的作用（共生）', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Human Microbiome Project（人体微生物组科普概述）', by: 'National Institutes of Health (NIH)', url: 'https://commonfund.nih.gov/hmp' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '肚子里的互利共生', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [330, 440], size: [290, 140], color: '#fff4e0', text: '人：给住处口粮', from: 0.3 },
          { kind: 'arrow', path: [[490, 400], [710, 400]], color: '#e8590c', text: '送去纤维', from: 1.4 },
          { kind: 'arrow', path: [[710, 480], [490, 480]], color: '#2e7d32', text: '回馈营养', from: 2.0 },
          { kind: 'shape', shape: 'pill', at: [870, 440], size: [290, 140], color: '#d9f2dc', text: '有益菌护院', from: 0.7 },
          { kind: 'myth', wrong: '肚子里细菌全是害人的', right: '大多数是互利共生的好帮手', from: 4.2 },
        ],
      },
      {
        turn: 1, title: '帮我们分解纤维', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🥦', path: [[250, 440]], size: 120, from: 0.2 },
          { kind: 'arrow', path: [[350, 440], [500, 440]], color: '#2e7d32', text: '送进大肠', from: 1.0 },
          { kind: 'shape', shape: 'circle', at: [620, 440], size: [200, 180], color: '#8ce09b', text: '有益菌', motion: 'pulse', from: 1.6 },
          { kind: 'arrow', path: [[740, 440], [880, 440]], color: '#3b6ea5', text: '造维生素', from: 2.6 },
          { kind: 'shape', shape: 'pill', at: [980, 440], size: [180, 100], color: '#ffd43b', text: '维K·营养', from: 3.4 },
          { kind: 'text', at: [600, 760], text: '帮人体拆解自己消化不了的纤维', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '占满座位挡坏菌', duration: 9,
        cues: [
          { kind: 'particles', box: [220, 340, 520, 220], count: 14, color: '#51a355', motion: 'jitter', size: 18, from: 0.3 },
          { kind: 'atom', path: [[1020, 450], [780, 450], [960, 320]], symbol: '坏菌', color: '#e5484d', r: 42, travel: 3.5, from: 1.4 },
          { kind: 'label', at: [480, 340], pos: [480, 210], text: '有益菌占满地盘', color: '#2e7d32', from: 1.8 },
          { kind: 'text', at: [600, 760], text: '坏菌没地方落脚就被挤走', from: 4.5 },
        ],
      },
      {
        turn: 3, title: '抗生素误伤好菌', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 450], size: [760, 200], color: '#fff4e6', text: '肠道', from: 0.2 },
          { kind: 'particles', box: [260, 380, 680, 140], count: 20, color: '#51cf66', motion: 'jitter', amount: { at: 2.2, over: 2, from: 20, to: 6 }, from: 0.6 },
          { kind: 'sprite', icon: '💊', path: [[120, 280], [560, 280]], size: 90, travel: 2, from: 1.2 },
          { kind: 'meter', at: [600, 660], label: '有益菌', start: 0.9, end: 0.3, color: '#2e7d32', over: 2, from: 2.2 },
          { kind: 'label', at: [760, 400], pos: [980, 240], text: '好坏细菌一起遭殃', from: 2.8 },
          { kind: 'text', at: [600, 800], text: '病好后吃蔬果慢慢长回', from: 5.0 },
        ],
      },
      {
        turn: 4, title: '好好喂养肠道花园', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🥬', path: [[340, 430]], size: 110, from: 0.3 },
          { kind: 'sprite', icon: '🍎', path: [[600, 430]], size: 110, from: 1.0 },
          { kind: 'sprite', icon: '🌾', path: [[860, 430]], size: 110, from: 1.7 },
          { kind: 'text', at: [600, 720], text: '多吃蔬果全谷物，菌群更健康', from: 3.8 },
        ],
      },
    ],
  },
};
