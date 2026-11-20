import type { Story } from './types';

export const photosynthesisFood: Story = {
  slug: 'photosynthesis-food',
  title: '大树不吃肉也不吃饭，喝水晒太阳怎么长出那么重的木头？',
  trigger: '小念抱住小区里一棵两人合抱的大梧桐，想起小时候它只是花盆里的小树苗，可树底下的泥土并没有陷下去一个大坑。',
  dialogue: [
    {
      nian: '爸爸，大树长成好几吨重，可花盆里的土也没怎么少——大树不是吃泥土长大的吗？',
      dad: '四百年前科学家海尔蒙特也做过柳树实验：树重了七十多公斤，盆里的干土只少了不到一百克！大树干重里绝大部分其实不是来自泥土，而是来自看不见的空气和浇进去的水！',
      figure: { kind: 'sim', sim: 'photoFactory', caption: '调节阳光和水分，看看叶绿体怎样把空气里的二氧化碳和水拼成糖。' },
    },
    {
      nian: '看不见的空气那么轻飘飘的，怎么可能变成硬邦邦的木头？',
      dad: '因为空气里有二氧化碳，里面藏着碳原子！树叶里的叶绿体像一台太阳能拼装机，借着阳光的能量，把空气里吸进来的二氧化碳和树根送来的水拆开重拼，造出葡萄糖，再串成结实的木头纤维。',
      eq: '二氧化碳 + 水 —[光能 · 叶绿体]→ 有机物 + 氧气',
    },
    {
      nian: '那太阳能拼装机造完葡萄糖，剩下的东西去了哪里？',
      dad: '剩下的就是我们每分每秒离不了的氧气！叶绿体把水里的氧放回空气中，所以我们说绿色植物不只是自己的粮食工厂，还是整个地球的“大氧吧”。',
      show: { kind: 'steps', frames: [{ icon: '☀️', label: '阳光给能量' }, { icon: '💨', label: '吸二氧化碳和水' }, { icon: '🍬', label: '造糖长木头放氧' }] },
    },
    {
      nian: '既然木头主要来自空气和水，那为什么农民伯伯还要给庄稼施肥、把土翻松？',
      dad: '因为植物不光要搭碳骨架，还需要氮、磷、钾这些少量的矿物质盐来做蛋白质和叶绿素，它们就得靠根从土里吸。泥土像做菜时的盐和调料，量不多，缺了却长不好。',
    },
    {
      nian: '根吸矿物质白天黑夜都行，那到了晚上没有太阳，叶绿体还会继续放氧气吗？',
      dad: '晚上没有光，叶绿体的光合作用就停工了，但植物自己也是活的，一整天 24 小时都在做呼吸作用耗氧放二氧化碳。只是白天阳光下光合作用放的氧远远多过用掉的，总账还是大大盈余！',
    },
    {
      nian: '我懂了！大树不是靠啃泥土长大的，而是叶片里的叶绿体借阳光能量，把空气里的二氧化碳和水拼成有机物变成木头，顺便放出氧气；泥土只提供水和少量矿物质调料。',
      dad: '讲得真精彩！下次在树荫下深吸一口气，就可以感谢这群安静站着、用空气和阳光搭出森林的绿色魔术师啦。',
    },
  ],
  tip: '“植物从土壤里吃出大树干”是全球儿童乃至成年人最常见的生物误区之一（哈佛经典纪录片《Minds of Our Own》曾专门调研过）。可以和孩子在阳台种一盆水培绿豆芽，直观看到没有泥土也能靠水和阳光发芽变绿。',
  sources: [
    { title: '生物学 七年级上册 · 第三单元 第五章 光合作用吸收二氧化碳释放氧气', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Photosynthesis（光合作用科普指南）', by: 'National Geographic Education', url: 'https://education.nationalgeographic.org/resource/photosynthesis/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '木头不是泥土变的', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🌱', path: [[260, 520]], size: 120, from: 0.2 },
          { kind: 'arrow', path: [[370, 500], [540, 500]], color: '#2e7d32', text: '长成大树', from: 1.0 },
          { kind: 'sprite', icon: '🌳', path: [[720, 460]], size: 220, from: 1.8 },
          { kind: 'myth', wrong: '大树是把泥土吃进肚子长胖', right: '木头干重主要来自空气CO₂', from: 3.8 },
        ],
      },
      {
        turn: 1, title: '叶绿体太阳能工厂', duration: 10,
        cues: [
          { kind: 'sprite', icon: '☀️', path: [[240, 240]], size: 110, from: 0.2 },
          { kind: 'ray', path: [[310, 290], [520, 420]], color: '#f59f00', from: 0.8 },
          { kind: 'shape', shape: 'pill', at: [600, 460], size: [340, 170], color: '#8ce09b', text: '叶绿体', motion: 'pulse', from: 0.4 },
          { kind: 'atom', path: [[600, 190], [600, 390]], symbol: 'CO₂', color: '#8b7a5c', r: 38, travel: 2.4, from: 1.2 },
          { kind: 'atom', path: [[240, 620], [500, 500]], symbol: 'H₂O', color: '#4dabf7', r: 38, travel: 2.4, from: 1.6 },
          { kind: 'formula', at: [600, 760], text: 'CO₂ + H₂O → 有机物 + O₂', from: 4.5 },
        ],
      },
      {
        turn: 2, title: '地球的大氧吧', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [420, 460], size: [290, 160], color: '#8ce09b', text: '绿色叶片', from: 0.2 },
          { kind: 'arrow', path: [[580, 400], [840, 310]], color: '#3b6ea5', text: '放出氧气', from: 1.2 },
          { kind: 'arrow', path: [[580, 520], [840, 610]], color: '#e8590c', text: '存成木头', from: 2.0 },
          { kind: 'particles', box: [820, 200, 220, 200], count: 10, color: '#4dabf7', motion: 'rise', size: 12, from: 2.4 },
          { kind: 'text', at: [600, 770], text: '一棵大树既是粮仓又是氧吧', from: 4.5 },
        ],
      },
      {
        turn: 3, title: '泥土只是调料', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 600], size: [720, 170], color: '#e6c9a8', text: '泥土', from: 0.2 },
          { kind: 'sprite', icon: '🌾', path: [[600, 380]], size: 150, from: 0.6 },
          { kind: 'atom', path: [[400, 640], [560, 450]], symbol: 'N', color: '#4dabf7', r: 26, from: 1.4 },
          { kind: 'atom', path: [[600, 660], [600, 460]], symbol: 'P', color: '#f59f00', r: 26, from: 1.8 },
          { kind: 'atom', path: [[800, 640], [640, 450]], symbol: 'K', color: '#ae3ec9', r: 26, from: 2.2 },
          { kind: 'label', at: [640, 330], pos: [900, 230], text: '氮磷钾造蛋白和叶绿素', from: 3.2 },
          { kind: 'text', at: [600, 800], text: '量不多，缺了却长不好', from: 5.0 },
        ],
      },
      {
        turn: 4, title: '白天晚上不一样', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [340, 430], size: [340, 220], color: '#fff4e0', text: '白天：光合放氧', from: 0.3 },
          { kind: 'shape', shape: 'rect', at: [860, 430], size: [340, 220], color: '#e7f5ff', text: '黑夜：只做呼吸', from: 1.5 },
          { kind: 'text', at: [600, 740], text: '全天总账还是放出更多氧气', from: 4.0 },
        ],
      },
    ],
  },
};
