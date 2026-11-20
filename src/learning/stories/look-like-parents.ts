import type { Story } from './types';

export const lookLikeParents: Story = {
  slug: 'look-like-parents',
  title: '为什么我既像爸爸又像妈妈，还可能有爷爷的酒窝？',
  trigger: '翻家庭相册时，小念发现自己眼睛像妈妈、鼻梁像爸爸，可笑起来脸颊上的小酒窝爸妈都没有，反倒跟爷爷一模一样！',
  dialogue: [
    {
      nian: '爸爸，为什么我身上有你的样子也有妈妈的样子，却不像复印机一样只像其中一个人？',
      dad: '因为你身体里决定长相的基因都是成双成对的！生命开始的时候，爸爸的精子和妈妈的卵细胞各自只带了一半基因，合到一起拼成全新的成对组合，所以你既像爸爸又像妈妈，又是独一无二的新版本！',
      figure: { kind: 'sim', sim: 'punnettDimple', caption: '切换爸爸和妈妈的酒窝基因，看两个有酒窝的父母怎么生出无酒窝宝宝，或反之。' },
    },
    {
      nian: '基因成双成对的，那如果爸爸给了一个“有酒窝”，妈妈给了一个“没酒窝”，听谁的呢？',
      dad: '好问题！科学家孟德尔做豌豆实验发现，成对基因常常一个“嗓门大”、一个“爱害羞”：嗓门大的叫显性基因（写成大写 A），只要有一个就表现出来；爱害羞的叫隐性基因（写成小写 a），必须两个凑成一对 aa 才肯露面！',
      eq: 'AA / Aa → 显性性状；aa → 隐性性状',
    },
    {
      nian: '那我脸上的特点爸妈没有、却和爷爷一样，就是那种爱害羞的隐性基因藏起来了吗？',
      dad: '太聪明了！比如某些隐性特征，爷爷有一对 aa，他传了一个 a 给爸爸；爸爸又从奶奶那拿到一个显性 A，凑成 Aa，所以爸爸表面看不出来，但悄悄把 a 藏在基因里。等爸爸和妈妈把两个隐性 a 一齐传给你，就“隔代现身”啦！',
      show: { kind: 'steps', frames: [{ icon: '👴', label: '爷爷传下隐性基因' }, { icon: '👨', label: '爸妈身上悄悄藏着' }, { icon: '🧒', label: '凑成一对隔代现身' }] },
    },
    {
      nian: '那要是我有弟弟妹妹，既然爸妈是同一对，我们俩拿到的基因组合会一模一样吗？',
      dad: '除了极少数同卵双胞胎，几乎不可能一模一样！人有两万多个基因，爸妈每次各随机抽一半重新洗牌，能拼出的组合比全地球人的数量还要多出无数倍，所以亲兄弟姐妹也各有各的可爱模样。',
    },
    {
      nian: '那高矮胖瘦和聪明程度，也是全由基因写死、生下来就改不了的吗？',
      dad: '可不是哦！基因只是给了“图纸和潜力”，后天的营养、睡眠、运动和学习同样超级重要。就像同样的种子，好好浇水晒太阳才能长得高大结实；身高和本领都是基因和环境一起写出来的！',
    },
    {
      nian: '我懂了！基因成对存在，一半来自爸爸、一半来自妈妈，显性基因嗓门大、隐性基因会悄悄藏起来隔代凑对现身；我不是谁的复印件，好好吃饭运动学习也能把自己养得更棒！',
      dad: '说得太暖心了！孟德尔当年在修道院种了八年两万多株豌豆，才摸清了这套藏在生命里的优雅算术呢。',
    },
  ],
  tip: '人类绝大多数外观特征（如身高、肤色、眼睑形态）其实受多对基因与环境共同影响，课堂上常用单基因显隐性（如孟德尔豌豆高矮茎、酒窝简化模型）帮助孩子建立清晰的遗传概率概念。',
  sources: [
    { title: '生物学 八年级下册 · 第七单元 第二章 基因的显性和隐性', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'MedlinePlus Genetics: How are genetic conditions and traits inherited?（性状遗传基础）', by: 'U.S. National Library of Medicine (NIH)', url: 'https://medlineplus.gov/genetics/understanding/inheritance/inheritancepatterns/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '各抽一半拼新组合', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [300, 420], size: [200, 200], color: '#e5f0ff', text: '爸爸给一半', from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [900, 420], size: [200, 200], color: '#ffe3ec', text: '妈妈给一半', from: 0.5 },
          { kind: 'arrow', path: [[410, 420], [520, 420]], color: '#3b6ea5', from: 1.5 },
          { kind: 'arrow', path: [[790, 420], [680, 420]], color: '#c2588f', from: 1.5 },
          { kind: 'shape', shape: 'circle', at: [600, 420], size: [180, 180], color: '#fff4e0', text: '成对新组合', motion: 'pulse', from: 2.5 },
          { kind: 'text', at: [600, 740], text: '既像爸爸又像妈妈的新版本', from: 4.5 },
        ],
      },
      {
        turn: 1, title: '显性与隐性基因', duration: 9,
        cues: [
          { kind: 'atom', path: [[460, 420]], symbol: 'A', color: '#ff9f43', r: 62, from: 0.3 },
          { kind: 'atom', path: [[660, 420]], symbol: 'a', color: '#a5d8ff', r: 42, from: 0.8 },
          { kind: 'label', at: [460, 350], pos: [350, 220], text: '显性嗓门大', color: '#e8590c', from: 1.8 },
          { kind: 'label', at: [660, 370], pos: [840, 220], text: '隐性先藏着', color: '#3b6ea5', from: 2.4 },
          { kind: 'text', at: [600, 740], text: 'Aa 显性，aa 才显隐性', from: 4.2 },
        ],
      },
      {
        turn: 2, title: '隔代现身的秘密', duration: 10,
        cues: [
          { kind: 'shape', shape: 'pill', at: [340, 320], size: [220, 96], color: '#e5f0ff', text: '爸爸 Aa', from: 0.2 },
          { kind: 'shape', shape: 'pill', at: [860, 320], size: [220, 96], color: '#ffe3ec', text: '妈妈 Aa', from: 0.5 },
          { kind: 'arrow', path: [[400, 380], [560, 520]], color: '#3b6ea5', text: '传出 a', from: 1.8 },
          { kind: 'arrow', path: [[800, 380], [640, 520]], color: '#c2588f', text: '传出 a', from: 2.2 },
          { kind: 'shape', shape: 'circle', at: [600, 580], size: [160, 160], color: '#d8c5fa', text: '凑出 aa！', motion: 'pulse', from: 3.4 },
          { kind: 'text', at: [600, 780], text: '藏了一代的隐性基因现身了', from: 5.0 },
        ],
      },
      {
        turn: 3, title: '每个孩子重新洗牌', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [330, 380], size: [240, 140], color: '#d0ebff', text: '爸爸一半', from: 0.2 },
          { kind: 'shape', shape: 'rect', at: [870, 380], size: [240, 140], color: '#ffe3e3', text: '妈妈一半', from: 0.4 },
          { kind: 'text', at: [600, 240], text: '两万多个基因随机抽', from: 1.0 },
          { kind: 'sprite', icon: '👦', path: [[600, 380], [460, 600]], size: 110, travel: 1.6, from: 1.8 },
          { kind: 'sprite', icon: '👧', path: [[600, 380], [740, 600]], size: 110, travel: 1.6, from: 2.6 },
          { kind: 'label', at: [740, 600], pos: [980, 640], text: '同卵双胞胎除外', from: 4.2 },
          { kind: 'text', at: [600, 800], text: '亲兄妹也各有各的模样', from: 5.2 },
        ],
      },
      {
        turn: 4, title: '基因与环境一起写', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [360, 440], size: [300, 180], color: '#efe5ff', text: '天生基因图纸', from: 0.3 },
          { kind: 'shape', shape: 'rect', at: [840, 440], size: [300, 180], color: '#d9f2dc', text: '营养运动学习', from: 1.2 },
          { kind: 'myth', wrong: '身高本领全由基因写死', right: '先天基因和后天环境一样重要', from: 3.8 },
        ],
      },
    ],
  },
};
