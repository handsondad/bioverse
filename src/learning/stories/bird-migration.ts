import type { Story } from './types';

export const birdMigration: Story = {
  slug: 'bird-migration',
  title: '大雁秋天飞去南方、春天又飞回来，天上没有路牌怎么认路？',
  trigger: '秋日傍晚，一队大雁排成“人”字从夕阳下掠过，小念仰着脖子问：飞几千公里回南方，天上什么路标都没有，它们怎么不会飞丢？',
  dialogue: [
    {
      nian: '爸爸，大雁飞几千公里去南方过冬，天上没有路牌也没有手机，怎么知道往哪边飞？',
      dad: '大雁随身带着一整套“组合导航”！白天它们看太阳在天空的位置配合体内的生物钟定方向，夜晚很多候鸟还会认北极星周围转动的星座，低头看又能记住山脉、大河和海岸线的样子。',
      figure: { kind: 'sim', sim: 'birdCompass', caption: '开关晴空和地磁感应，看看候鸟的组合导航怎样互为备份。' },
    },
    {
      nian: '要是碰上阴天大雾，太阳和星星全被云遮住了，大雁的导航不就失灵了吗？',
      dad: '厉害的地方就在这儿——它们还有一套看不见的“内置指南针”！科学家发现，很多候鸟的眼睛和喙部能感应地球微弱的磁场，像把磁感线叠在眼里一样，阴天也能认出南北和大概纬度。',
      show: { kind: 'steps', frames: [{ icon: '☀️', label: '太阳与星空' }, { icon: '🧭', label: '感应地磁场' }, { icon: '🏔️', label: '记山川老路' }] },
    },
    {
      nian: '有了内置指南针能分南北，可刚出生的小大雁第一次南飞怎么知道具体要去哪个湖？',
      dad: '大雁、丹顶鹤这些大型候鸟，第一次南飞是紧紧跟着有经验的爸爸妈妈和老鸟一起飞的，一路把休息的湿地和路线记在脑子里；而有些独自夜飞的小鸣禽，甚至天生就把飞行方向和时间写进了基因里！',
    },
    {
      nian: '大雁跟着老鸟一起飞的时候，为什么要排成“人”字或“一”字，不能各飞各的吗？',
      dad: '排成“人”字能大大省力气！前面大雁扇动翅膀时，翅尖后斜方会产生一股往上升的气流，后面的大雁把翅膀搭在这股上升气流上就能轻松滑翔。领头雁累了就退到队尾，大家轮流当领队！',
    },
    {
      nian: '就算轮流当领队省力气，飞几千公里还是好辛苦，它们为什么不一直住在暖和的南方？',
      dad: '因为北方的夏天有超长白天和爆发式长出的嫩草、水虫，地方宽敞、天敌还少，是养大一窝小宝宝的绝佳育儿房！等到秋天北方变冷没吃的，再飞回南方过冬——为了食物和育儿，两头都要跑。',
    },
    {
      nian: '我懂了！大雁跨千里不迷路，是靠太阳星空、地磁指南针、山川地标和跟着老鸟一起组合导航；排成“人”字能借气流省力，飞来飞去是为了夏去北方育儿、冬回南方找吃的。',
      dad: '说得真棒！候鸟半路停下来歇脚补给的湿地特别宝贵，保护每一片湖泊和湿地，就是在帮这群小小旅行家留好加油站。',
    },
  ],
  tip: '候鸟磁感应机制是当代生物物理学热点，学界认为视网膜中的隐花色素（Cryptochrome）在蓝光下的量子自由基对反应可能让鸟类“看见”磁场方向。带孩子观鸟时请用望远镜远距离静静观察，不要投喂或惊扰。',
  sources: [
    { title: '生物学 八年级上册 · 第五单元 第二章 动物的运动和行为', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'How Do Birds Navigate?（鸟类如何导航）', by: 'Cornell Lab of Ornithology (All About Birds)', url: 'https://www.allaboutbirds.org/news/the-basics-how-why-and-where-of-bird-migration/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '天空自带路标', duration: 9,
        cues: [
          { kind: 'sprite', icon: '☀️', path: [[260, 240]], size: 100, from: 0.2 },
          { kind: 'sprite', icon: '⭐', path: [[920, 240]], size: 96, from: 0.8 },
          { kind: 'sprite', icon: '🦢', path: [[260, 520], [920, 480]], size: 110, travel: 4.5, from: 1.2 },
          { kind: 'text', at: [600, 740], text: '白天看太阳，夜里认星星', from: 3.5 },
        ],
      },
      {
        turn: 1, title: '内置地磁指南针', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [600, 460], size: [340, 340], color: '#e7f5ff', text: '地球磁场', from: 0.2 },
          { kind: 'flow', path: [[600, 620], [340, 460], [600, 280], [860, 460], [600, 620]], color: '#3b6ea5', count: 8, speed: 220, loop: true, from: 0.8 },
          { kind: 'sprite', icon: '🧭', path: [[600, 250]], size: 90, from: 1.5 },
          { kind: 'text', at: [600, 780], text: '阴天看不见天也能感应地磁', from: 4.0 },
        ],
      },
      {
        turn: 2, title: '跟着老鸟学路线', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🦢', path: [[240, 400], [900, 400]], size: 110, travel: 5, from: 0.2 },
          { kind: 'sprite', icon: '🦢', path: [[120, 480], [780, 480]], size: 70, travel: 5, from: 0.5 },
          { kind: 'label', at: [900, 400], pos: [960, 240], text: '老鸟领路', from: 1.4 },
          { kind: 'label', at: [780, 480], pos: [640, 620], text: '小雁记住湿地和路线', from: 2.4 },
          { kind: 'text', at: [600, 700], text: '独飞小鸣禽：方向写进基因', from: 4.0 },
          { kind: 'text', at: [600, 810], text: '大鸟靠学，小鸟靠天生', from: 5.4 },
        ],
      },
      {
        turn: 3, title: '排成人字省力气', duration: 10,
        cues: [
          { kind: 'sprite', icon: '🦢', path: [[360, 450], [740, 450]], size: 90, travel: 5, from: 0.4 },
          { kind: 'sprite', icon: '🦢', path: [[240, 350], [620, 350]], size: 80, travel: 5, from: 0.6 },
          { kind: 'sprite', icon: '🦢', path: [[240, 550], [620, 550]], size: 80, travel: 5, from: 0.6 },
          { kind: 'label', at: [520, 450], pos: [780, 260], text: '借前雁上升气流省力', from: 2.4 },
          { kind: 'text', at: [600, 760], text: '轮流领飞，一起跨越几千公里', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '两头找食物育儿', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [330, 440], size: [300, 130], color: '#d9f2dc', text: '北方夏：育儿房', from: 0.3 },
          { kind: 'arrow', path: [[490, 400], [700, 400]], color: '#e8590c', text: '秋去冬回', from: 1.6 },
          { kind: 'arrow', path: [[700, 480], [490, 480]], color: '#2e7d32', text: '春暖北归', from: 2.2 },
          { kind: 'shape', shape: 'pill', at: [870, 440], size: [300, 130], color: '#fff4e0', text: '南方冬：避寒场', from: 0.8 },
          { kind: 'text', at: [600, 760], text: '跟着季节和食物一路迁徙', from: 4.5 },
        ],
      },
    ],
  },
};
