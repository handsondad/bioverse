import type { Story } from './types';

export const fishGillsWater: Story = {
  slug: 'fish-gills-water',
  title: '空气里的氧气比水里多得多，鱼离开水为什么反而会憋死？',
  trigger: '超市水产区捞鱼过秤时，小念看鱼在网兜里嘴巴大张大合，奇怪地问：“空气里到处是氧气，鱼怎么还会喘不上气？”',
  dialogue: [
    {
      nian: '爸爸，空气里的氧气不是比水里多得多吗？为什么鱼一离开水到空气里，反而很快就憋死了？',
      dad: '这个问题超棒！一升空气里的氧气确实比一升水里多出三十多倍，鱼在岸上憋死真不是因为身边缺氧，而是它的呼吸工具——鱼鳃，一离开水的浮力托举，当场就“塌房”罢工啦！',
      figure: { kind: 'sim', sim: 'gillFilament', caption: '切换鱼在水里和捞到岸上两种状态，看细软鳃丝的表面积和血氧交换率发生了什么剧变。' },
    },
    {
      nian: '鱼鳃怎么会塌房呀？妈妈买鱼时翻开鳃盖看的那些红红的细丝就是鳃吗？',
      dad: '对！鲜红是因为里面密密麻麻全是毛细血管。鱼鳃是由成千上万根又细又软的“鳃丝”和更微小的“鳃小片”组成的。在水里时，水的浮力把每一根细丝轻轻托开，像一朵蓬松绽放的羽毛，摊开来的总面积比鱼自己的全身皮肤还要大！',
    },
    {
      nian: '像水里展开的羽毛！那一旦失去了水的浮力，这些鳃丝会变成什么样？',
      dad: '你画水彩画的时候见过毛笔吧？毛笔泡在洗笔水里时，笔毛一根根散得开开的；可一提离开水面，所有湿笔毛“啪”地一下全粘成一绺尖头了！鱼鳃离开水也是这样，成千上万片鳃小片粘连糊成一团，夹在里面的血管根本碰不到空气！',
      figure: {
        kind: 'bars',
        caption: '鱼鳃在水中托起展开与离水粘连后的有效气体交换面积示意对比。',
        unit: '%',
        bars: [
          { label: '水中展开鳃', value: 95, text: '约 95% 表面积可用', hot: true },
          { label: '离水粘成团', value: 14, text: '仅剩零头外表面' },
        ],
      },
    },
    {
      nian: '湿毛笔这个比喻一下就看懂了！那水里氧气本来那么少，鱼平时在水里怎么够用呢？',
      dad: '鱼鳃里有个天才设计叫“逆流交换”：鱼嘴喝进水从鳃盖后面排出去，而鳃丝毛细血管里的血液偏偏迎着水流反方向流。这样血液一路走一路都能碰到氧气更足的新鲜水，一口气能把流过鳃的水里近八成的溶解氧全抢进血里！',
    },
    {
      nian: '逆流交换能抢走八成氧气！那我们人类的肺为什么在空气里不会像湿毛笔那样粘住呢？',
      dad: '因为陆生动物早就换装备啦！我们的气管和支气管有硬硬的软骨环撑着管道不塌，尽头那几亿个小气球一样的肺泡内壁还涂着一层特殊的“表面活性物质”，防止肺泡粘瘪。而且肺藏在湿润的胸腔里面，不怕被干空气吹干。',
    },
    {
      nian: '我懂了！空气里氧气虽多，但鱼离开水失去浮力后，细软的鳃丝会像出水的湿毛笔一样粘连成团并变干，气体交换面积骤减，所以鱼反而会缺氧憋死。',
      dad: '一点不差！不过大自然也有例外奇才，比如海边滩涂上的弹涂鱼能把一口水含在腮帮子里撑开鳃丝，还能靠湿润皮肤辅助呼吸，就能在岸上蹦跶好半天呢！',
    },
  ],
  tip: '带孩子逛菜市场或水产店认识鱼类结构时，可以教孩子观察健康活鱼的特征：鳃盖有节奏开合、鳃丝呈鲜亮的樱桃红色（富含氧合血红蛋白）；切勿让低龄儿童直接伸手抠鱼鳃，以免被坚硬锋利的鳃盖骨边缘或咽齿划伤手指。',
  sources: [
    { title: '生物学 八年级上册 · 第五单元 第一章 第四节 鱼', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'How Do Marine Animals Breathe?（水生动物鱼鳃呼吸与离水窒息机制）', by: 'American Museum of Natural History (AMNH)', url: 'https://www.amnh.org/content/download/1808/24941/file/lets-talk-with-ian-harrison-about-how-marine-animals-breathe.pdf' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '氧气多却吸不进', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🐟', path: [[360, 440]], size: 150, from: 0.2 },
          { kind: 'count', at: [800, 400], label: '空气含氧占比', start: 1, end: 21, unit: '%', over: 2.0, from: 0.8 },
          { kind: 'myth', wrong: '空气里没有鱼能吸的那种氧气', right: '氧气是同一种，是鱼鳃离水塌粘了', from: 3.8 },
        ],
      },
      {
        turn: 1, title: '水中羽毛大面积', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 450], size: [760, 320], color: '#d0ebff', from: 0.2 },
          { kind: 'shape', shape: 'pill', at: [420, 360], size: [260, 38], color: '#ff6b6b', text: '鳃丝展开', from: 0.8 },
          { kind: 'shape', shape: 'pill', at: [420, 450], size: [260, 38], color: '#ff6b6b', text: '密布血管', from: 1.2 },
          { kind: 'shape', shape: 'pill', at: [420, 540], size: [260, 38], color: '#ff6b6b', text: '浮力托举', from: 1.6 },
          { kind: 'label', at: [550, 450], pos: [830, 450], text: '总表面积比鱼皮还大', from: 3.0 },
          { kind: 'text', at: [600, 750], text: '水流穿过鳃丝，轻松换进氧气', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '出水像湿毛笔粘连', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🖌️', path: [[320, 440]], size: 150, from: 0.3 },
          { kind: 'arrow', path: [[430, 440], [590, 440]], color: '#e8590c', text: '失去水浮力', from: 1.4 },
          { kind: 'shape', shape: 'pill', at: [780, 440], size: [280, 64], color: '#e03131', text: '鳃丝糊成团', from: 2.2 },
          { kind: 'meter', at: [780, 560], label: '有效换气面积', start: 0.95, end: 0.14, color: '#e8590c', over: 2.2, from: 2.8 },
          { kind: 'text', at: [600, 750], text: '内层血管全被糊住，碰不到空气', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '水中逆流抢氧王', duration: 9,
        cues: [
          { kind: 'flow', path: [[260, 390], [940, 390]], color: '#3b6ea5', count: 8, speed: 200, from: 0.4 },
          { kind: 'label', at: [600, 390], pos: [600, 260], text: '水流从嘴进、鳃盖出', color: '#3b6ea5', from: 1.4 },
          { kind: 'flow', path: [[940, 510], [260, 510]], color: '#e03131', count: 8, speed: 200, from: 1.0 },
          { kind: 'label', at: [600, 510], pos: [600, 630], text: '血流迎头反向吸走80%氧', color: '#e03131', from: 2.6 },
          { kind: 'text', at: [600, 750], text: '逆流交换让水中稀少的氧也够用', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '陆地靠肺泡撑住', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🫁', path: [[380, 440]], size: 160, from: 0.3 },
          { kind: 'shape', shape: 'circle', at: [760, 390], size: [120, 120], color: '#ffa8a8', text: '肺泡', motion: 'pulse', from: 1.2 },
          { kind: 'shape', shape: 'circle', at: [890, 480], size: [120, 120], color: '#ffa8a8', text: '不塌瘪', motion: 'pulse', from: 1.6 },
          { kind: 'label', at: [820, 330], pos: [840, 220], text: '软骨支气管+防粘液层', from: 2.8 },
          { kind: 'text', at: [600, 740], text: '水里用鳃陆上用肺，各适其家', from: 4.8 },
        ],
      },
    ],
  },
};
