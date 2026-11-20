import type { Story } from './types';

export const parameciumSingleCell: Story = {
  slug: 'paramecium-single-cell',
  title: '草履虫全身只有一个细胞，没有嘴和腿怎么吃饭、怎么游泳？',
  trigger: '科学课上老师把一滴池塘水放到显微镜下，小念看见一只圆头尖尾、像倒放小草鞋的透明小虫正转着身子飞快穿梭。',
  dialogue: [
    {
      nian: '爸爸，今天显微镜里那只像小草鞋的草履虫跑得好快！老师说它全身只有一个细胞，没腿怎么游泳呀？',
      dad: '它虽然没有腿，全身表膜外面却长满了上万根细细短短的“小船桨”，叫纤毛！这些纤毛像麦浪一样一排接一排整齐划水，推着草履虫一边旋转一边往前冲，速度在微观世界里算飞毛腿呢。',
      figure: { kind: 'sim', sim: 'ciliaSwim', caption: '切换池塘水里的营养液和盐粒刺激，观察草履虫纤毛划水、食物泡与星形伸缩泡的工作。' },
    },
    {
      nian: '上万根纤毛一起划水真酷！可它一个细胞也没长嘴巴和胃，肚子饿了怎么吃饭呢？',
      dad: '它身体一侧有一道凹进去的“口沟”，口沟里的纤毛不停摆动，像小漩涡一样把水里的细菌和微藻卷进身体里，当场吹出一个小泡泡包住食物，叫食物泡。食物泡在细胞质里边漂边消化，营养就吸进全身啦。',
      show: {
        kind: 'steps',
        frames: [
          { icon: '🚣', label: '纤毛划水游泳' },
          { icon: '🌀', label: '口沟卷进细菌' },
          { icon: '🫧', label: '食物泡边漂边消化' },
          { icon: '⭐', label: '伸缩泡泵出余水' },
        ],
      },
    },
    {
      nian: '我看显微镜下它两头还有两个像小太阳一样一闪一闪的结构，那也是食物泡吗？',
      dad: '眼力真尖！那不是食物泡，而是收集管和伸缩泡。池塘里的淡水比草履虫细胞里面稀，水会一直往它肚子里渗；要是没有这两个“自动抽水泵”轮流收缩把多余的水挤出去，草履虫很快就会像灌满水的气球一样涨破！',
    },
    {
      nian: '原来伸缩泡是防涨破的抽水泵！那草履虫连大脑和眼睛都没有，怎么找吃的、躲危险呢？',
      dad: '单细胞生物也有“趋利避害”的本事，科学上叫应激性。如果在水滴一头放点牛肉汁，草履虫感应到化学分子就会聚过去大吃一顿；要是放一粒食盐，它一碰到浓盐水，纤毛立刻倒着划水退回来，换个方向溜走。',
    },
    {
      nian: '这种应激性真聪明！那池塘里的草履虫对大自然有什么用，怎么长出更多小草履虫呢？',
      dad: '一只草履虫每天能吞掉大约四万多个细菌，是净化污水的天然小帮手！等它吃饱长壮了，也不用找伴侣，细胞核一拉长，身体从中间横着一掐就分裂成两只新草履虫，一变二、二变四，繁殖得可快了。',
    },
    {
      nian: '我懂了！草履虫虽然全身只有一个细胞，却靠纤毛划水、口沟和食物泡吃细菌、伸缩泡排水防涨破，还能靠应激性趋利避害，自己就能独立完成全部生命活动。',
      dad: '一点没错！麻雀虽小五脏俱全，单细胞生物连器官都没有，只靠细胞里的小结构分工，照样活得有滋有味。',
    },
  ],
  tip: '想在显微镜下看清草履虫内部结构有个课堂小妙招：草履虫游得太快容易跑出视野，可以在载玻片水滴里先放几丝脱脂棉纤维，把草履虫轻轻“拦”在小格子里，它慢下来后就能清楚看见口沟和一收一放的伸缩泡了。',
  sources: [
    { title: '生物学 七年级上册 · 第二单元 第二章 第四节 单细胞生物', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Paramecium as a Modern Model Organism（现代模式生物草履虫综述）', by: 'Cells / PubMed Central', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10143506/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '万根纤毛划水', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [600, 450], size: [380, 170], color: '#b8e2fc', text: '草履虫', motion: 'wiggle', from: 0.2 },
          { kind: 'flow', path: [[380, 330], [820, 330]], color: '#3b6ea5', count: 8, speed: 180, from: 1.0 },
          { kind: 'flow', path: [[380, 570], [820, 570]], color: '#3b6ea5', count: 8, speed: 180, from: 1.0 },
          { kind: 'label', at: [600, 365], pos: [600, 220], text: '表膜纤毛像小船桨', from: 2.4 },
          { kind: 'text', at: [600, 740], text: '单个细胞也能飞快旋转游动', from: 4.5 },
        ],
      },
      {
        turn: 1, title: '口沟卷进细菌', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [640, 450], size: [400, 180], color: '#d0ebff', from: 0.2 },
          { kind: 'particles', box: [220, 380, 180, 140], count: 10, color: '#2e7d32', motion: 'jitter', size: 9, from: 0.6 },
          { kind: 'arrow', path: [[380, 450], [520, 450]], color: '#2e7d32', text: '口沟卷入', from: 1.6 },
          { kind: 'shape', shape: 'circle', at: [650, 450], size: [74, 74], color: '#8ce09b', text: '食物泡', slide: { to: [760, 470], at: 3.5, over: 3 }, from: 2.8 },
          { kind: 'text', at: [600, 740], text: '食物泡在细胞质里边漂边消化', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '星形排水水泵', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [600, 450], size: [420, 190], color: '#d0ebff', from: 0.2 },
          { kind: 'pulse', at: [460, 450], color: '#e8590c', radius: 55, rate: 0.8, from: 1.0 },
          { kind: 'pulse', at: [740, 450], color: '#e8590c', radius: 55, rate: 0.8, from: 1.4 },
          { kind: 'label', at: [460, 410], pos: [340, 240], text: '伸缩泡轮流挤水', from: 2.4 },
          { kind: 'myth', wrong: '淡水泡着草履虫没事', right: '靠伸缩泡不停排水才不涨破', from: 4.4 },
        ],
      },
      {
        turn: 3, title: '趋利避害本领', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [260, 440], size: [140, 140], color: '#ff8787', text: '浓盐粒', from: 0.3 },
          { kind: 'shape', shape: 'circle', at: [940, 440], size: [140, 140], color: '#8ce09b', text: '营养液', from: 0.6 },
          { kind: 'shape', shape: 'pill', at: [460, 440], size: [170, 80], color: '#74c0fc', text: '草履虫', slide: { to: [750, 440], at: 2.0, over: 3.5 }, from: 1.0 },
          { kind: 'arrow', path: [[430, 350], [760, 350]], color: '#2e7d32', text: '躲盐奔向营养', from: 2.4 },
          { kind: 'text', at: [600, 740], text: '没有神经也能对外界刺激作反应', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '净水与横裂繁殖', duration: 9,
        cues: [
          { kind: 'count', at: [360, 340], label: '日吞细菌约', start: 0, end: 43000, unit: '个', over: 2.5, from: 0.4 },
          { kind: 'shape', shape: 'pill', at: [660, 480], size: [160, 84], color: '#99e9f2', text: '子虫1', slide: { to: [580, 480], at: 2.0, over: 2.5 }, from: 1.6 },
          { kind: 'shape', shape: 'pill', at: [800, 480], size: [160, 84], color: '#99e9f2', text: '子虫2', slide: { to: [880, 480], at: 2.0, over: 2.5 }, from: 1.6 },
          { kind: 'text', at: [600, 740], text: '吃饱横裂一分为二，净化池塘水', from: 4.6 },
        ],
      },
    ],
  },
};
