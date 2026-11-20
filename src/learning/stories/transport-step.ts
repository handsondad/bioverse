import type { Story } from './types';

export const transportStep: Story = {
  slug: 'transport-step',
  title: '氧气能自己溜进细胞膜，葡萄糖为什么还要蛋白开门？',
  trigger: '小念听说细胞膜像一层油油的薄膜，好奇呼吸吸进来的氧气和吃进去的葡萄糖，是怎么排着队进出细胞的。',
  dialogue: [
    {
      nian: '爸爸，氧气和葡萄糖都要进细胞，为什么氧气自己就能穿膜，葡萄糖却进不去？',
      dad: '因为细胞膜的骨架是两层磷脂分子，中间像一层油墙！氧气、二氧化碳个头极小又不怕油，顺着“多往少处挤”的浓度差就能直接穿过去，既不要帮手也不耗能量，这叫自由扩散。',
      show: { kind: 'lab', step: 0, label: '看「自由扩散」' },
      figure: { kind: 'sim', sim: 'membraneGate', caption: '切换氧气、葡萄糖和钾离子，再拨动细胞供能开关看看区别。' },
    },
    {
      nian: '那怕油的葡萄糖被磷脂油墙挡在外面，怎么进到细胞里去呢？',
      dad: '细胞膜上嵌着许多专门的转运蛋白，像一扇扇认人的小门！葡萄糖虽然自己钻不过油墙，但只要外面比里面多，就能请对应的转运蛋白帮忙开门送进去，照样不消耗能量，这叫协助扩散。',
      show: { kind: 'lab', step: 2, label: '看「协助扩散」' },
    },
    {
      nian: '这些专门开门的转运蛋白，是不是都长得像一根空心水管？',
      dad: '分两种哦！一种叫通道蛋白，确实像四根柱子围成的小管道，大小和电荷合适就直接穿过去；另一种叫载体蛋白，像一把会变形的小夹子，先抱住葡萄糖、自己转一下身再把它放进屋里。',
      show: { kind: 'lab', step: 3, label: '看「载体与通道」' },
    },
    {
      nian: '通道蛋白和载体蛋白都是帮分子顺路走，那如果细胞里钾离子本来就比外面多很多，还能往里吸吗？',
      dad: '可以，但这就像把球往高坡上推，不能靠顺坡滚，必须请载体蛋白当水泵，再花掉细胞里的能量分子 ATP 硬泵进去！这种逆着浓度、要蛋白又耗能的方式，叫主动运输。',
      eq: '主动运输 = 逆浓度梯度 + 载体蛋白 + 消耗 ATP',
      show: { kind: 'lab', step: 4, label: '看「主动运输」' },
    },
    {
      nian: '那如果碰到蛋白质这样的大块头，连载体蛋白的小夹子都夹不住，怎么办？',
      dad: '细胞膜很柔软有流动性，干脆整片膜往里凹下去，像张大嘴一样把大块头打包成一个小泡泡吞进来，叫胞吞；往外吐分泌蛋白时反过来，小泡泡贴到膜上融开，叫胞吐，同样要花能量。',
      show: { kind: 'lab', step: 5, label: '看「胞吞胞吐」' },
    },
    {
      nian: '我懂了！细胞膜有选择透过性：氧气顺浓度直接穿是自由扩散，葡萄糖顺浓度找转运蛋白是协助扩散，逆浓度花能量搬是主动运输，大块头靠膜打包走胞吞胞吐。',
      dad: '四大绝招全被你理清了！正因为细胞膜这么挑剔、肯花力气把关，细胞里面才能一直留住自己需要的营养、把废物挡在外面。',
    },
  ],
  tip: '本课配有「物质跨膜运输」3D 实验台，可以点页首按钮进入，亲手改变外界浓度、转运蛋白数量与 ATP 供能开关，观察四种运输方式的实时流量变化。',
  sources: [
    { title: '生物学 必修1 分子与细胞 · 第4章 细胞的物质输入和输出', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: '3D 生物实验课件：物质跨膜运输（CC BY-NC 4.0）', by: '铜匠十点睡觉', url: 'https://lab.tongjiang.app' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '自由扩散', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 450], size: [960, 72], color: '#f5b864', text: '磷脂双分子层', from: 0.2 },
          { kind: 'atom', path: [[420, 220], [420, 680]], symbol: 'O₂', color: '#4dabf7', r: 36, travel: 3.5, from: 1.0 },
          { kind: 'atom', path: [[780, 220], [780, 680]], symbol: 'O₂', color: '#4dabf7', r: 36, travel: 3.5, from: 1.6 },
          { kind: 'label', at: [420, 220], pos: [230, 220], text: '膜外浓度高', from: 1.2 },
          { kind: 'text', at: [600, 790], text: '自由扩散：无蛋白、不耗能', from: 4.5 },
        ],
      },
      {
        turn: 1, title: '协助扩散', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [300, 450], size: [420, 72], color: '#f5b864', from: 0.2 },
          { kind: 'shape', shape: 'rect', at: [900, 450], size: [420, 72], color: '#f5b864', from: 0.2 },
          { kind: 'shape', shape: 'pill', at: [600, 450], size: [150, 130], color: '#6aa5e3', text: '转运蛋白', from: 0.6 },
          { kind: 'atom', path: [[600, 210], [600, 690]], symbol: '糖', color: '#ffd43b', r: 40, travel: 3.5, from: 1.5 },
          { kind: 'text', at: [600, 790], text: '顺浓度、请蛋白、不耗能', from: 4.5 },
        ],
      },
      {
        turn: 2, title: '通道和载体', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 450], size: [940, 80], color: '#ffe8b3', from: 0.2 },
          { kind: 'shape', shape: 'rect', at: [380, 450], size: [70, 140], color: '#74c0fc', text: '通道', from: 0.8 },
          { kind: 'atom', path: [[380, 270], [380, 640]], symbol: 'K⁺', color: '#4dabf7', r: 24, travel: 2.5, from: 1.4 },
          { kind: 'label', at: [380, 380], pos: [230, 250], text: '通道蛋白像小管道', from: 2.0 },
          { kind: 'shape', shape: 'circle', at: [820, 450], size: [130, 130], color: '#ffa8a8', text: '载体', motion: 'wiggle', from: 3.0 },
          { kind: 'atom', path: [[820, 270], [820, 450], [820, 640]], symbol: '糖', color: '#f59f00', r: 26, travel: 3, from: 3.6 },
          { kind: 'label', at: [820, 390], pos: [970, 250], text: '载体蛋白变形转运', from: 4.4 },
          { kind: 'text', at: [600, 780], text: '两种门都顺浓度、不耗能', from: 5.6 },
        ],
      },
      {
        turn: 3, title: '主动运输', duration: 10,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 450], size: [960, 72], color: '#f5b864', from: 0.2 },
          { kind: 'shape', shape: 'pill', at: [600, 450], size: [170, 140], color: '#9775fa', text: '载体泵', from: 0.6 },
          { kind: 'particles', box: [260, 560, 680, 140], count: 14, color: '#b48cff', motion: 'jitter', size: 14, from: 0.6 },
          { kind: 'atom', path: [[600, 220], [600, 640]], symbol: 'K⁺', color: '#7c52b8', r: 38, travel: 3.5, from: 1.8 },
          { kind: 'label', at: [685, 450], pos: [930, 320], text: '消耗 ATP 能量', color: '#e8590c', from: 2.2 },
          { kind: 'myth', wrong: '物质只能从多往少走', right: '花能量就能逆浓度搬进去', from: 5.0 },
        ],
      },
      {
        turn: 4, title: '胞吞与胞吐', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [360, 450], size: [220, 220], color: '#e6f4e8', outline: true, text: '膜包囊泡', from: 0.4 },
          { kind: 'atom', path: [[360, 220], [360, 450]], symbol: '蛋白', color: '#ff8787', r: 44, travel: 3.0, from: 1.0 },
          { kind: 'arrow', path: [[490, 450], [700, 450]], color: '#2e7d32', text: '进胞吞出胞吐', from: 2.6 },
          { kind: 'shape', shape: 'circle', at: [840, 450], size: [210, 210], color: '#fff4e0', text: '膜融合放出', from: 3.4 },
          { kind: 'text', at: [600, 770], text: '大分子靠膜流动性打包进出', from: 4.8 },
        ],
      },
    ],
  },
};
