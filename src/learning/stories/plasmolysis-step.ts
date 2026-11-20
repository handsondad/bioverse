import type { Story } from './types';

export const plasmolysisStep: Story = {
  slug: 'plasmolysis-step',
  title: '菜叶泡清水变脆、撒了盐却出水，植物细胞怎样吸水和失水？',
  trigger: '妈妈拌拍黄瓜时撒了一勺盐，没几分钟碗底就积出一大汪水，黄瓜片也变软了；可蔫掉的青菜泡在清水里一会儿又脆生生挺了起来。',
  dialogue: [
    {
      nian: '爸爸，黄瓜又没有被捏扁，撒点盐怎么自己就流出这么多水，青菜泡清水反而变脆了？',
      dad: '因为水分子特别爱往“更咸、更浓”的地方跑！植物细胞里面那层膜只放水通过、拦着盐和糖，水总会从水多的一侧净流向溶质更浓的一侧，这叫渗透作用。撒盐后菜叶外面更浓，水就从细胞里跑出来了。',
      show: { kind: 'lab', step: 0, label: '看「渗透」' },
      figure: { kind: 'sim', sim: 'osmosisCell', caption: '把外界溶液浓度往大拖，看水往哪边跑、紫色液泡怎样缩小又复原。' },
    },
    {
      nian: '水从细胞里跑出来的时候，细胞里面哪一层膜在当“过滤网”？',
      dad: '好问题！最外层的细胞壁像大网眼篱笆，水和盐都能随便穿；真正当半透膜过滤网的，是紧贴细胞壁的细胞膜、里面的液泡膜，以及夹在中间的细胞质——三层合起来叫原生质层。',
      show: { kind: 'lab', step: 1, label: '看「原生质层」' },
    },
    {
      nian: '原生质层里的水往外跑光了，整个细胞会像泄气的气球一样瘪成一团吗？',
      dad: '外面的硬细胞壁几乎缩不动，但里面的原生质层很有弹性，失水就往里缩成一小团，和细胞壁分开，这叫质壁分离。液泡越缩越小，里面的紫色细胞液也会显得更深。',
      eq: '外界浓度 > 细胞液浓度 → 细胞失水 → 质壁分离',
      show: { kind: 'lab', step: 2, label: '看「失水」' },
    },
    {
      nian: '质壁分离后，硬细胞壁和缩小的原生质层中间空出来的地方，是不是真空？',
      dad: '很多人会以为里面是空气或空的，其实不是！因为细胞壁对盐水、糖水完全敞开，外界溶液直接钻进细胞壁里面，把那圈空隙填得满满当当。',
      show: { kind: 'lab', step: 3, label: '看「水去哪」' },
    },
    {
      nian: '那如果把刚失水变蔫的细胞重新泡回清水里，它还能鼓回来吗？',
      dad: '只要细胞还活着就能！泡回清水后，细胞液比清水浓，水分子又乖乖流回液泡，原生质层重新鼓起来紧贴细胞壁，菜叶就变脆了。可要是盐腌太久或开水烫死了细胞，膜坏了就再也复原不了。',
      show: { kind: 'lab', step: 4, label: '看「复原」' },
    },
    {
      nian: '我懂了！水总会从稀的一边向浓的一边渗透，植物细胞靠原生质层当半透膜：撒盐外界更浓就失水发生质壁分离，泡清水外界更稀就吸水复原；难怪拌黄瓜出水，泡清水的青菜变脆。',
      dad: '说得太透彻了！给花浇肥也是同一个道理：化肥放太浓会“烧苗”，其实就是土壤比根细胞还浓，把根里的水倒吸出来了，所以施肥一定要薄肥勤施。',
    },
  ],
  tip: '本课配有「植物细胞的吸水和失水」3D 实验台，可以点页首按钮进入，亲手滴加蔗糖溶液、清水和甘油观察紫色洋葱鳞片叶外表皮细胞变化。家中可以用切开的萝卜条分别泡清水和浓盐水做安全对比实验。',
  sources: [
    { title: '生物学 必修1 分子与细胞 · 第4章 第1节 被动运输（探究植物细胞的吸水和失水）', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: '3D 生物实验课件：植物细胞的吸水和失水（CC BY-NC 4.0）', by: '铜匠十点睡觉', url: 'https://lab.tongjiang.app' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '撒盐出水的秘密', duration: 10,
        cues: [
          { kind: 'shape', shape: 'rect', at: [320, 450], size: [260, 260], color: '#d9f2dc', text: '菜叶细胞', from: 0.2 },
          { kind: 'particles', box: [680, 300, 320, 300], count: 16, color: '#ff9f43', motion: 'jitter', size: 12, from: 0.6 },
          { kind: 'label', at: [840, 310], pos: [840, 200], text: '外面撒满盐粒', from: 1.2 },
          { kind: 'flow', path: [[430, 450], [720, 450]], color: '#3b6ea5', count: 6, speed: 180, from: 2.2 },
          { kind: 'arrow', path: [[450, 520], [700, 520]], color: '#e8590c', text: '水向浓处跑', from: 3.2 },
          { kind: 'text', at: [600, 760], text: '渗透：水净流向更浓一侧', from: 5.2 },
        ],
      },
      {
        turn: 1, title: '谁是半透膜', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 450], size: [460, 310], color: '#8ce09b', from: 0.2 },
          { kind: 'shape', shape: 'rect', at: [600, 450], size: [390, 250], color: '#f3e8ff', from: 0.8 },
          { kind: 'shape', shape: 'circle', at: [600, 450], size: [260, 170], color: '#b48cff', text: '紫色液泡', from: 1.4 },
          { kind: 'label', at: [380, 330], pos: [240, 210], text: '细胞壁全透水', from: 2.2 },
          { kind: 'label', at: [795, 360], pos: [960, 230], text: '原生质层半透', from: 3.4 },
        ],
      },
      {
        turn: 2, title: '质壁分离', duration: 10,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 450], size: [440, 300], color: '#d9f2dc', outline: true, from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [600, 450], size: [350, 230], color: '#b48cff', motion: 'shrink', over: 3.5, tint: { color: '#6b21a8', at: 1, over: 3.5 }, text: '液泡缩水', from: 0.6 },
          { kind: 'arrow', path: [[740, 450], [920, 450]], color: '#e8590c', text: '细胞失水', from: 1.5 },
          { kind: 'arrow', path: [[460, 450], [280, 450]], color: '#e8590c', text: '细胞失水', from: 1.5 },
          { kind: 'myth', wrong: '缝隙里是空的空气', right: '壁和膜之间充满外界溶液', from: 5.0 },
        ],
      },
      {
        turn: 3, title: '空隙里是盐水', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 440], size: [460, 320], color: '#d0ebff', outline: true, from: 0.2 },
          { kind: 'label', at: [790, 280], pos: [900, 210], text: '全透的细胞壁', from: 0.5 },
          { kind: 'shape', shape: 'circle', at: [600, 450], size: [220, 180], color: '#d8c5fa', text: '原生质层', from: 0.6 },
          { kind: 'arrow', path: [[160, 440], [370, 440]], color: '#3b6ea5', text: '盐水穿壁', from: 1.4 },
          { kind: 'arrow', path: [[1040, 440], [830, 440]], color: '#3b6ea5', text: '盐水穿壁', from: 1.6 },
          { kind: 'label', at: [420, 320], pos: [300, 220], text: '空隙灌满外界盐水', from: 2.8 },
          { kind: 'myth', wrong: '分开的空隙是真空或空气', right: '空隙里填满了外界盐水', from: 4.4 },
        ],
      },
      {
        turn: 4, title: '泡清水复原', duration: 10,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 450], size: [440, 300], color: '#d9f2dc', from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [600, 450], size: [340, 220], color: '#7c3aed', motion: 'grow', over: 3.5, tint: { color: '#d8b4fe', at: 1, over: 3.5 }, text: '吸水鼓回', from: 0.6 },
          { kind: 'arrow', path: [[250, 450], [430, 450]], color: '#3b6ea5', text: '清水流入', from: 1.4 },
          { kind: 'arrow', path: [[950, 450], [770, 450]], color: '#3b6ea5', text: '清水流入', from: 1.4 },
          { kind: 'text', at: [600, 760], text: '活细胞泡清水就能复原变脆', from: 5.0 },
        ],
      },
    ],
  },
};
