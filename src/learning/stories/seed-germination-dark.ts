import type { Story } from './types';

export const seedGerminationDark: Story = {
  slug: 'seed-germination-dark',
  title: '绿豆发芽一定要晒太阳吗？水泡得太满为什么反而烂掉了？',
  trigger: '看妈妈在暗盒子里发出了脆生生的绿豆芽，小念也拿小碗装上绿豆并把水倒得满满当当，结果三天后豆子没发芽反而发酸臭了。',
  dialogue: [
    {
      nian: '爸爸，植物长大不是都要晒太阳吗？为什么妈妈盖着黑布不晒太阳，绿豆也照样发芽了？',
      dad: '因为刚发芽的小绿豆还没长出绿叶子，根本做不了光合作用呀！豆妈妈早就给它塞好了满满两大包“起床干粮”，就是豆瓣那两片肥厚的子叶。所以在发芽开头这几天，有没有阳光它都能靠吃子叶里的存粮破壳长大。',
      figure: { kind: 'sim', sim: 'beanSprout', caption: '切换无光湿润、阳光湿润、水淹没过顶和冰箱低温四种盒子，找出绿豆发芽真正需要的条件。' },
    },
    {
      nian: '原来靠吃子叶里的存粮就能起床！那我碗里的绿豆给了那么多水，为什么没发芽反而臭掉了？',
      dad: '问题就出在“水太多”上！种子睡醒破壳的时候，细胞分裂得飞快，急需吸进大量空气里的氧气来做呼吸作用换力气。你把水灌满淹没了豆子，水里氧气少得可怜，绿豆憋得只能无氧呼吸，造出酒精把自己毒坏泡烂啦！',
    },
    {
      nian: '哎呀，水淹没了空气居然会憋出酒精！那要是把湿绿豆放进冰箱冷藏室，它能发芽吗？',
      dad: '也发不了芽！冰箱里只有四摄氏度左右，种子细胞里的酶冻得直打哆嗦，根本没法拆解子叶里的淀粉干粮。所以科学家总结出种子萌发雷打不动的外部三件套：一定的水分、充足的空气，还有适宜的温度！',
      show: {
        kind: 'steps',
        frames: [
          { icon: '💧', label: '吸水软化种皮' },
          { icon: '🌬️', label: '充足空气供呼吸' },
          { icon: '🌡️', label: '温暖唤醒酶干活' },
          { icon: '🌱', label: '胚根率先钻出来' },
        ],
      },
    },
    {
      nian: '记住这外部三件套了！那为什么妈妈在暗盒子里发出来的豆芽是黄白色的，拿到窗台晒一天头顶就变绿了？',
      dad: '观察得太细了！在黑暗里，绿豆以为自己还埋在深土底下，就会拼命拉长茎杆往上冲，同时省下力气暂不合成叶绿素，所以豆芽又白又嫩又长；一旦冲出地面照到阳光，光信号立刻打开开关合成叶绿素，小叶片变绿接班造粮食！',
    },
    {
      nian: '要是超市里买来的炒熟绿豆或者虫子咬坏胚的豆子，给齐水分、空气和温暖还能发芽吗？',
      dad: '那就神仙也没办法啦！外部三件套都齐了，还得看种子自己的“内因”：里面的小生命雏形——胚，必须是完整的、活着的，而且已经度过了休眠期。炒熟的绿豆胚早就被高温烫死了，再怎么泡也只能做绿豆汤咯。',
    },
    {
      nian: '我懂了！绿豆发芽初期吃子叶存粮，不需要阳光，但必须同时有水分、充足空气和适宜温度，还要有活而完整的胚；水泡太满隔绝空气会让豆子无氧呼吸产酒精烂掉。',
      dad: '一百分！今晚我们就重新拿带沥水孔的小篮子铺湿纱布，每天冲两次水透透气，三天后吃小念亲手种的炒豆芽！',
    },
  ],
  tip: '在家带孩子做“绿豆发芽四组对照实验”是最经典的初中生物入门实践：准备四个小碟子（干豆、湿纸巾常温、水完全淹没、湿纸巾放冰箱），每组放 10 粒绿豆做重复样本避免偶然误差，三天就能直观验证水分、空气和温度三大条件。注意：发黄豆芽或绿豆芽吃之前要煮熟炒透，切勿生吃。',
  sources: [
    { title: '生物学 七年级上册 · 第三单元 第二章 第一节 种子的萌发', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'All about seeds（种子结构与萌发条件科学指南）', by: 'Royal Horticultural Society (RHS)', url: 'https://www.rhs.org.uk/education-learning/school-gardening/resources/curriculum-linked/all-about-seeds' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '自带干粮不用光', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [420, 450], size: [240, 150], color: '#74c69d', text: '绿豆子叶', from: 0.3 },
          { kind: 'arrow', path: [[550, 450], [720, 450]], color: '#2e7d32', text: '供给营养', from: 1.5 },
          { kind: 'sprite', icon: '🌱', path: [[840, 440]], size: 150, from: 2.4 },
          { kind: 'myth', wrong: '种子必须晒太阳才能发芽', right: '萌发初期吃子叶存粮，暗处照样发芽', from: 4.2 },
        ],
      },
      {
        turn: 1, title: '水淹缺氧会烂豆', duration: 9,
        cues: [
          { kind: 'vessel', vessel: 'beaker', at: [380, 450], size: [240, 250], liquid: '#74c0fc', level: 0.85, label: '水灌太满', from: 0.3 },
          { kind: 'shape', shape: 'circle', at: [380, 520], size: [90, 66], color: '#adb5bd', text: '缺氧豆', from: 1.0 },
          { kind: 'label', at: [500, 420], pos: [810, 340], text: '挡住氧气被迫产酒精', color: '#e8590c', from: 2.2 },
          { kind: 'label', at: [500, 520], pos: [810, 500], text: '湿纱布透气才健康呼吸', color: '#2e7d32', from: 3.4 },
          { kind: 'text', at: [600, 740], text: '既要喝水又要透气，别泡水底', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '萌发外部三件套', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [260, 430], size: [210, 100], color: '#74c0fc', text: '一定水分', from: 0.4 },
          { kind: 'shape', shape: 'pill', at: [600, 430], size: [210, 100], color: '#8ce09b', text: '充足空气', from: 1.4 },
          { kind: 'shape', shape: 'pill', at: [940, 430], size: [210, 100], color: '#ffd43b', text: '适宜温度', from: 2.4 },
          { kind: 'text', at: [600, 720], text: '三样齐全，胚根率先破皮钻出', from: 4.2 },
        ],
      },
      {
        turn: 3, title: '暗处嫩黄见光变绿', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [340, 440], size: [220, 220], color: '#343a40', text: '遮光盒', from: 0.3 },
          { kind: 'label', at: [340, 330], pos: [340, 220], text: '黄白豆芽又脆又长', from: 1.5 },
          { kind: 'sprite', icon: '☀️', path: [[840, 300]], size: 110, from: 1.2 },
          { kind: 'shape', shape: 'pill', at: [840, 490], size: [180, 90], color: '#51cf66', text: '子叶变绿', from: 2.4 },
          { kind: 'text', at: [600, 740], text: '见光造出叶绿素，接班造粮食', from: 4.6 },
        ],
      },
      {
        turn: 4, title: '内因要有活的胚', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [360, 440], size: [180, 140], color: '#8ce09b', text: '完整活胚', motion: 'pulse', from: 0.4 },
          { kind: 'label', at: [360, 360], pos: [340, 230], text: '度过休眠期能发芽', color: '#2e7d32', from: 1.6 },
          { kind: 'shape', shape: 'circle', at: [840, 440], size: [180, 140], color: '#ced4da', text: '煮熟死胚', from: 1.0 },
          { kind: 'label', at: [840, 360], pos: [860, 230], text: '外因再好也发不了芽', color: '#e8590c', from: 2.6 },
          { kind: 'text', at: [600, 740], text: '内外因都齐备，小种子才破壳', from: 4.6 },
        ],
      },
    ],
  },
};
