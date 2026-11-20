import type { Story } from './types';

export const breadSweetChew: Story = {
  slug: 'bread-sweet-chew',
  title: '馒头本来不甜，嚼着嚼着怎么变甜了？',
  trigger: '吃早饭时，小念咬了一口白面馒头，觉得淡而无味；可多嚼了二十几下准备咽时，突然惊喜地喊：“爸爸，馒头变甜了！”',
  dialogue: [
    {
      nian: '爸爸，白馒头里没放糖，我多嚼了一会儿怎么真的变甜了？',
      dad: '因为你嘴里藏着一把看不见的“化学小剪刀”！馒头里最多的是淀粉，它其实是成百上千颗葡萄糖手拉手串成的长链，太长了舌头尝不出甜味；口水里的唾液淀粉酶会把长链咔嚓剪短成麦芽糖，麦芽糖就是甜甜的！',
      eq: '淀粉（不甜） —[唾液淀粉酶]→ 麦芽糖（甜甜的）',
      figure: { kind: 'sim', sim: 'starchChew', caption: '向右拖动咀嚼时间，看淀粉长链被剪短，甜度上升、碘液不再变蓝。' },
    },
    {
      nian: '唾液淀粉酶剪完淀粉，自己会被用光吗？',
      dad: '不会哦！酶是一种蛋白质做的小工人，只负责帮忙加快剪断，剪完这一段立刻去剪下一段，自己完好无损。正因为有了酶，常温 37 ℃ 下几秒钟就能完成消化，不然淀粉泡在水里一年也变不成甜的。',
    },
    {
      nian: '那它除了能剪馒头里的淀粉，也能帮我剪开肉和油吗？',
      dad: '不行，酶特别“挑食”，一把钥匙只开一把锁！唾液淀粉酶只认淀粉，碰上瘦肉里的蛋白质和肥肉里的脂肪看都不看；蛋白质要进胃里找胃蛋白酶，脂肪要到小肠里找胆汁和脂肪酶帮忙。',
      show: { kind: 'steps', frames: [{ icon: '🥖', label: '口腔先剪淀粉' }, { icon: '🥩', label: '胃里拆蛋白质' }, { icon: '🥑', label: '小肠分油脂' }] },
    },
    {
      nian: '既然麦芽糖在嘴里就剪出来了，为什么还要咽下去到小肠里？',
      dad: '因为麦芽糖还是“两颗糖连在一起”，对小肠绒毛来说还是太大、钻不进血液。等它到了小肠，小肠里的酶再补剪最后一刀，把麦芽糖彻底剪成一颗颗单独的葡萄糖，身体才能真正吸收。',
    },
    {
      nian: '既然要到小肠才剪成葡萄糖吸收，那我吃饭狼吞虎咽、不在嘴里细嚼，岂不是更省事？',
      dad: '没错！嚼两下就咽下去，牙齿没把饭磨碎、口水没来得及和淀粉混匀，口腔消化基本跳过，所有粗活全堆给胃和小肠，肚子就容易胀。所以细嚼慢咽真的帮了肠胃大忙。',
    },
    {
      nian: '我懂了！馒头里的淀粉是长长的糖链、吃着不甜，细嚼时唾液淀粉酶像小剪刀把它剪成甜甜的麦芽糖，到了小肠再剪成单个葡萄糖吸收。以后吃饭我要好好嚼！',
      dad: '说得真棒！今晚吃米饭时也可以试着多嚼二十下，看看米饭是不是也会悄悄变甜。',
    },
  ],
  tip: '唾液淀粉酶的最适温度接近人体体温 37 ℃，最适 pH 接近中性（约 6.8）。提醒孩子吃饭时不要边说笑边吞咽，细嚼慢咽既安全又能让唾液充分混合食物。',
  sources: [
    { title: '生物学 七年级下册 · 第四单元 第二章 第2节 消化和吸收', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Your Digestive System & How it Works（消化系统如何工作）', by: 'NIDDK (National Institutes of Health)', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '长链剪成甜麦芽糖', duration: 10,
        cues: [
          { kind: 'bond', a: [240, 420], b: [960, 420], color: '#c27a23', from: 0.2, to: 4.5 },
          { kind: 'atom', path: [[300, 420]], symbol: '糖', color: '#f3d9a4', r: 44, from: 0.3 },
          { kind: 'atom', path: [[480, 420]], symbol: '糖', color: '#f3d9a4', r: 44, from: 0.4 },
          { kind: 'atom', path: [[660, 420]], symbol: '糖', color: '#f3d9a4', r: 44, from: 0.5 },
          { kind: 'atom', path: [[840, 420]], symbol: '糖', color: '#f3d9a4', r: 44, from: 0.6 },
          { kind: 'sprite', icon: '✂️', path: [[570, 250], [570, 440]], size: 78, travel: 2.2, from: 2.0 },
          { kind: 'text', at: [600, 720], text: '唾液淀粉酶剪出甜甜的麦芽糖', from: 5.0 },
        ],
      },
      {
        turn: 1, title: '酶工人用不坏', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [600, 430], size: [210, 210], color: '#8ce09b', text: '淀粉酶', motion: 'pulse', from: 0.3 },
          { kind: 'flow', path: [[200, 430], [500, 430]], color: '#f3d9a4', count: 5, speed: 180, from: 1.0 },
          { kind: 'flow', path: [[700, 430], [1000, 430]], color: '#ffd43b', count: 6, speed: 200, from: 1.8 },
          { kind: 'text', at: [600, 740], text: '酶只加快反应，自己不被消耗', from: 4.0 },
        ],
      },
      {
        turn: 2, title: '一把钥匙开一把锁', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [300, 380], size: [230, 96], color: '#ffd43b', text: '淀粉→口腔', from: 0.4 },
          { kind: 'shape', shape: 'pill', at: [600, 380], size: [230, 96], color: '#ff8787', text: '蛋白→胃', from: 1.4 },
          { kind: 'shape', shape: 'pill', at: [900, 380], size: [230, 96], color: '#a5d8ff', text: '脂肪→小肠', from: 2.4 },
          { kind: 'myth', wrong: '口水能消化所有食物', right: '酶很专一，各管各的营养', from: 4.2 },
        ],
      },
      {
        turn: 3, title: '小肠补剪最后一刀', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [340, 430], size: [260, 140], color: '#fff4e0', text: '麦芽糖(2颗)', from: 0.3 },
          { kind: 'arrow', path: [[490, 430], [690, 430]], color: '#2e7d32', text: '小肠再剪', from: 1.6 },
          { kind: 'atom', path: [[780, 430]], symbol: '糖', color: '#ffd43b', r: 44, from: 2.8 },
          { kind: 'atom', path: [[910, 430]], symbol: '糖', color: '#ffd43b', r: 44, from: 3.2 },
          { kind: 'text', at: [600, 750], text: '变成单个葡萄糖就能进血液', from: 4.5 },
        ],
      },
      {
        turn: 4, title: '细嚼慢咽帮大忙', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [340, 430], size: [210, 210], color: '#fff4e0', text: '大饭团', from: 0.2 },
          { kind: 'arrow', path: [[480, 430], [690, 430]], color: '#e8590c', text: '多嚼几下', from: 1.2 },
          { kind: 'particles', box: [720, 340, 280, 180], count: 18, color: '#ffd8a8', motion: 'jitter', from: 2.0 },
          { kind: 'label', at: [860, 430], pos: [860, 250], text: '磨碎再拌匀口水', from: 2.6 },
          { kind: 'meter', at: [600, 640], label: '口腔消化', start: 0.1, end: 0.8, color: '#2e7d32', from: 3.2 },
          { kind: 'text', at: [600, 780], text: '细嚼慢咽替肠胃分担粗活', from: 5.0 },
        ],
      },
    ],
  },
};
