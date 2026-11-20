import type { Story } from './types';

export const foodWebBalance: Story = {
  slug: 'food-web-balance',
  title: '要是把草原上的狼全赶走，羊真的会过得更幸福吗？',
  trigger: '看动物纪录片里狼群追逐羚羊，小念替小羊揪紧了心，问爸爸为什么不干脆把草原上的狼全都赶走。',
  dialogue: [
    {
      nian: '爸爸，狼追着小羊跑好吓人呀！要是把草原上的狼全都赶走，小羊不就能无忧无虑、过得更幸福了吗？',
      dad: '一百多年前，美国黄石公园和凯巴布森林真的试过把狼全赶光！结果开头几年鹿和羊确实猛涨，可很快它们把嫩草、树苗甚至树皮全啃光了，整片森林草原退化成光秃秃的荒地，最后数以万计的鹿活活饿死了！',
      figure: { kind: 'sim', sim: 'wolfSheep', caption: '把狼的数量拖到 0，再拖回 4 只，看看青草、羊群和狼群之间的连锁变化。' },
    },
    {
      nian: '呀，赶走狼反而把草啃光、让羊也挨饿了！它们之间是怎么连起来的？',
      dad: '大自然里，草被羊吃、羊被狼吃，像一根环环相扣的锁链，叫食物链；草原上还有兔子、田鼠、老鹰、狐狸，许多条食物链交叉织成一张大网，叫食物网。牵动其中任何一根线，整张网都会跟着抖！',
      eq: '青草（生产者） → 羊（食草消费者） → 狼（食肉消费者）',
    },
    {
      nian: '那狼除了帮草原控制羊的数量不啃光草，还有别的用处吗？',
      dad: '有呀！狼追猎的时候，跑得慢的往往是生病、受伤或年老的羊。狼吃掉它们，客观上帮羊群清除了传染病源，让健康强壮的羊更容易活下来生宝宝，整个羊群反而更健康！',
      show: { kind: 'steps', frames: [{ icon: '🐺', label: '狼控数量清弱病' }, { icon: '🐑', label: '羊群健康不超载' }, { icon: '🌿', label: '青草茂盛稳水土' }] },
    },
    {
      nian: '既然狼能让整个羊群更健康，听说黄石公园后来又把狼请回去了，草原真的变回来了吗？',
      dad: '真的变回来了！1995 年科学家把灰狼重新引回黄石公园后，鹿不敢再在河边悠闲啃光柳树苗，河岸重新长出茂密树林，连喜欢啃树筑坝的河狸、鸣禽和河里的鱼都跟着多了起来——狼竟然稳住了整条河岸的生态！',
    },
    {
      nian: '既然大自然自己会保持生态平衡，那是不是它不管怎么被破坏都能自己恢复？',
      dad: '可不是哦！生态系统的自动调节能力是有底线的：草原上生物种类越多、食物网越复杂，越扛得住风浪；可要是乱砍森林、污染水源、把关键物种赶尽杀绝，一旦跨过底线，草原变沙漠就很难再恢复了！',
    },
    {
      nian: '我懂了！草、羊、狼连成食物链和食物网，把狼全赶走会让羊暴增啃光草、反过来害羊挨饿；狼帮草原控数量、清弱病，稳住生态平衡，我们应该尊重每一种野生动物在自然里的位置。',
      dad: '说得太有格局了！大自然里没有单纯的“好动物”和“坏动物”，每一种生命都是这张生命大网上不可或缺的一个结。',
    },
  ],
  tip: '黄石公园 1995 年重引灰狼引发的营养级联（Trophic Cascade）效应，是生态学最著名的案例之一（当代生态学家也指出气候、熊、美洲狮和人类狩猎共同参与了恢复，而非狼单一作用）。这个故事非常适合培养孩子的系统思维与生态保护意识。',
  sources: [
    { title: '生物学 七年级上册 · 第一单元 第二章 第2节 生物与环境组成生态系统', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Wolf Restoration（黄石国家公园灰狼重引与生态观察）', by: 'National Park Service (Yellowstone National Park)', url: 'https://www.nps.gov/yell/learn/nature/wolf-restoration.htm' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '赶走狼的连锁反应', duration: 10,
        cues: [
          { kind: 'meter', at: [300, 320], label: '狼的数量', start: 0.5, end: 0, color: '#3b6ea5', over: 2, from: 0.3 },
          { kind: 'meter', at: [600, 320], label: '羊群暴增', start: 0.4, end: 0.95, color: '#ff9f43', over: 2.5, from: 1.5 },
          { kind: 'meter', at: [900, 320], label: '青草锐减', start: 0.85, end: 0.1, color: '#2e7d32', over: 2.5, from: 2.5 },
          { kind: 'myth', wrong: '没了狼，羊就能永远幸福', right: '草被啃光，羊最后一起挨饿', from: 4.8 },
        ],
      },
      {
        turn: 1, title: '环环相扣的食物链', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [260, 440], size: [190, 160], color: '#d9f2dc', text: '🌿 青草', from: 0.2 },
          { kind: 'arrow', path: [[370, 440], [490, 440]], color: '#2e7d32', text: '喂养', from: 1.0 },
          { kind: 'shape', shape: 'circle', at: [600, 440], size: [190, 160], color: '#fff4e0', text: '🐑 羊群', from: 1.6 },
          { kind: 'arrow', path: [[710, 440], [830, 440]], color: '#e8590c', text: '捕食', from: 2.4 },
          { kind: 'shape', shape: 'circle', at: [940, 440], size: [190, 160], color: '#e7f5ff', text: '🐺 狼群', from: 3.0 },
          { kind: 'text', at: [600, 750], text: '牵一发动全身的食物网', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '请回狼后森林复兴', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🐺', path: [[260, 450]], size: 120, from: 0.3 },
          { kind: 'arrow', path: [[370, 450], [540, 450]], color: '#2e7d32', text: '护住树苗', from: 1.4 },
          { kind: 'sprite', icon: '🌳', path: [[660, 430]], size: 150, from: 2.2 },
          { kind: 'sprite', icon: '🐦', path: [[900, 360]], size: 100, from: 3.0 },
          { kind: 'text', at: [600, 750], text: '河岸林木、河狸和小鸟都回来', from: 4.5 },
        ],
      },
      {
        turn: 4, title: '自动调节有底线', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [600, 420], size: [480, 150], color: '#d9f2dc', text: '物种多更稳固', motion: 'pulse', from: 0.4 },
          { kind: 'text', at: [600, 720], text: '保护每一种生命，守住生态网', from: 3.5 },
        ],
      },
    ],
  },
};
