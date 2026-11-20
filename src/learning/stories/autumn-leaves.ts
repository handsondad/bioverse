import type { Story } from './types';

export const autumnLeaves: Story = {
  slug: 'autumn-leaves',
  title: '树叶夏天绿油油，秋天为什么变黄变红还会掉下来？',
  trigger: '十月底周末逛公园，满地金黄的银杏叶和火红的枫叶随风飘落，小念捡起一片问爸爸是不是大树生病了。',
  dialogue: [
    {
      nian: '爸爸，公园的银杏叶全变黄了还一直往下掉，是大树生病了还是冻坏了？',
      dad: '大树健康着呢，它是在有计划地准备过冬！树叶里其实一直住着绿色的叶绿素和黄色的胡萝卜素、叶黄素，夏天叶绿素太多，把黄色全盖住了；到了秋天叶绿素一撤退，黄色就露出来了。',
      figure: { kind: 'sim', sim: 'leafSeason', caption: '向右拖动季节滑块，看叶绿素褪去后黄色和红色素怎样露脸。' },
    },
    {
      nian: '叶绿素撤退了，是不是大树故意把它们收回去存起来了？',
      dad: '太聪明了！叶绿素里含有珍贵的氮和镁，大树舍不得白白扔掉。秋天白天变短、气温变凉，树木就慢慢把叶绿素拆解掉，把里面的养分顺着树枝搬回树干和树根里存着，等明年春天发新芽再用！',
    },
    {
      nian: '把养分收走之后，银杏树露出底下的黄色我明白了，可枫叶为什么红得像火一样？',
      dad: '枫树、黄栌这些树在秋高气爽、白天出太阳夜里降温的时候，会把留在叶里的糖分新造出一种红色色素——花青素。花青素就像给衰老的叶片涂上一层防晒霜，帮大树安全把最后的养分收完。',
      show: { kind: 'steps', frames: [{ icon: '📅', label: '日照变短' }, { icon: '♻️', label: '回收叶绿素' }, { icon: '🍁', label: '露黄或造红' }] },
    },
    {
      nian: '养分收完以后，大树为什么非要把叶子全抖掉，留着过冬不好吗？',
      dad: '冬天土里冻住了很难吸水，可树叶上有成千上万个小气孔会一直往外散水，雪压在阔叶上还容易压断树枝！所以在叶柄根部长出一圈软软的“离层”，风一吹叶子一脱，大树就能省水安稳睡过冬。',
    },
    {
      nian: '那松树和柏树冬天怎么还是绿油油的，不怕冷也不怕失水吗？',
      dad: '松柏早就做好防寒装备啦：它们的叶子细得像针，表面还裹着厚厚的蜡质防漏水，气孔深藏在凹槽里，雪也压不住。不过松针其实也在慢慢换新，只是分批换，不会一下子全掉光。',
    },
    {
      nian: '我懂了！秋天阔叶树先拆掉叶绿素收回养分，叶黄素露出来，枫树还会造花青素变红，最后落叶过冬；而松柏靠细针叶和厚蜡质防漏水，就能四季常绿。',
      dad: '说得真好！秋天捡几片不同颜色的落叶夹进书里做成书签，就像把大树过冬的小智慧珍藏起来一样。',
    },
  ],
  tip: '触发温带树木落叶的最稳定信号不是某一次降温，而是每年准时变化的“日照长度变短”。可以带孩子观察路灯旁的树：靠近强路灯的枝条往往落叶更晚，正好能印证光照时长对植物的影响。',
  sources: [
    { title: '生物学 必修1 分子与细胞 · 第5章 绿叶中色素的提取和分离', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Why Leaves Change Color（树叶为什么在秋天变色）', by: 'USDA Forest Service', url: 'https://www.fs.usda.gov/visit/fall-colors/science-of-fall-colors' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '黄色一直藏在里面', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [600, 420], size: [360, 170], color: '#43a047', tint: { color: '#f59f00', at: 2.5, over: 3 }, text: '树叶颜色', from: 0.2 },
          { kind: 'meter', at: [340, 680], label: '绿色叶绿素', start: 0.95, end: 0.1, color: '#2e7d32', over: 3.5, from: 1.8 },
          { kind: 'meter', at: [860, 680], label: '黄色叶黄素', start: 0.4, end: 0.4, color: '#f59f00', over: 3.5, from: 1.8 },
          { kind: 'myth', wrong: '秋天叶子才新长出黄色', right: '黄色一直在，绿褪了才露面', from: 4.8 },
        ],
      },
      {
        turn: 1, title: '先回收宝贵养分', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🍃', path: [[320, 350]], size: 120, from: 0.2 },
          { kind: 'flow', path: [[380, 390], [600, 500], [600, 680]], color: '#2e7d32', count: 6, speed: 180, from: 1.0 },
          { kind: 'shape', shape: 'rect', at: [600, 640], size: [180, 190], color: '#a8714a', text: '树干仓库', from: 0.4 },
          { kind: 'label', at: [500, 450], pos: [820, 340], text: '养分搬回树干存', from: 2.2 },
          { kind: 'text', at: [600, 810], text: '留着明年春天再发新芽', from: 4.5 },
        ],
      },
      {
        turn: 2, title: '枫叶的红花青素', duration: 9,
        cues: [
          { kind: 'sprite', icon: '☀️', path: [[320, 260]], size: 96, from: 0.3 },
          { kind: 'sprite', icon: '❄️', path: [[880, 260]], size: 96, from: 0.8 },
          { kind: 'sprite', icon: '🍁', path: [[600, 470]], size: 170, wobble: true, from: 1.4 },
          { kind: 'text', at: [600, 720], text: '晴冷温差催生红色花青素', from: 3.5 },
        ],
      },
      {
        turn: 3, title: '主动落叶省水过冬', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [420, 420], size: [220, 96], color: '#f59f00', slide: { to: [640, 620], at: 2.5, over: 3 }, text: '秋叶飘落', from: 0.4 },
          { kind: 'label', at: [300, 420], pos: [300, 250], text: '叶柄长出离层', from: 1.0 },
          { kind: 'text', at: [600, 770], text: '减少失水防雪压，安稳过冬', from: 4.5 },
        ],
      },
      {
        turn: 4, title: '松柏的防寒装备', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🌲', path: [[600, 400]], size: 220, from: 0.2 },
          { kind: 'label', at: [540, 360], pos: [260, 240], text: '细针叶面积小', from: 1.0 },
          { kind: 'label', at: [660, 420], pos: [940, 260], text: '厚蜡质防漏水', from: 1.8 },
          { kind: 'label', at: [620, 480], pos: [940, 560], text: '气孔藏在凹槽里', from: 2.6 },
          { kind: 'text', at: [600, 690], text: '松针也换新，只是分批换', from: 4.0 },
          { kind: 'text', at: [600, 790], text: '所以松柏四季常绿', from: 5.4 },
        ],
      },
    ],
  },
};
