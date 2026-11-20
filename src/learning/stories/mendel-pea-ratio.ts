import type { Story } from './types';

export const mendelPeaRatio: Story = {
  slug: 'mendel-pea-ratio',
  title: '高豌豆和矮豌豆生下的孩子全都是高的，“矮”去哪儿了？',
  trigger: '小念用红水彩和蓝水彩调出了紫色，抬头问爸爸：“高个子豌豆和矮个子豌豆生宝宝，是不是会长出不高不矮的中等豌豆？”',
  dialogue: [
    {
      nian: '爸爸，红颜料加蓝颜料会混成紫色，那高豌豆和矮豌豆杂交，生出来的孩子是不是全都变成中等个头呀？',
      dad: '在一百六十多年前，几乎所有科学家也跟你猜得一模一样，以为父母的遗传像两杯墨水倒在一起混匀！直到奥地利修道院里有位叫孟德尔的学者不信邪，他在菜园里把纯种高茎豌豆和矮茎豌豆杂交，结果长出来的第一代小豌豆——居然百分之百全是高个子，没有一棵中等的，矮个子彻底不见了！',
      figure: {
        kind: 'image',
        src: '/images/photos/mendel-portrait.webp',
        alt: '现代遗传学奠基人格雷戈尔·孟德尔的历史肖像照',
        caption: '格雷戈尔·孟德尔（1822—1884），在修道院菜园里种了八年豌豆，揭开了遗传第一定律。',
        credit: '历史肖像 · 公有领域',
        href: 'https://commons.wikimedia.org/wiki/File:Gregor_Mendel_2.jpg',
      },
    },
    {
      nian: '第一代全是高豌豆？那矮豌豆的特征是不是被高豌豆吞掉销毁了？',
      dad: '孟德尔也没急着下结论，他让这批第一代高豌豆自己给自己授粉，耐心地把结出的豆子第二年再种下去。奇迹出现了：矮茎豌豆完好无损地又冒出来了！这一下子证明，父母传给孩子的遗传因子根本不是混成一团的墨水，而是一颗颗互不污染的小珠子！',
      figure: { kind: 'sim', sim: 'mendelPeas', caption: '切换子一代和子二代，再调种下的豌豆株数，体验孟德尔怎样从数据里抓出 3∶1 规律。' },
    },
    {
      nian: '原来遗传因子像独立的小珠子！那为什么矮珠子在第一代不出声，到第二代才冒出来呢？',
      dad: '因为每株豌豆控制高矮的珠子都是成对的：高珠子脾气大叫“显性”，矮珠子脾气小叫“隐性”。第一代小豌豆从爸妈那儿各拿一颗，配成“一高一矮”，高珠子当家，外表就全长成高茎；等到第二代重新随机抽签配对，只有同时抽到“两颗矮珠子”的那四分之一幸运儿，才重新长成矮豌豆！',
    },
    {
      nian: '抽签算出来是三份高对一份矮，孟德尔在菜园里真种出了整整齐齐的三比一吗？',
      dad: '这就是孟德尔最了不起的地方——他是第一个把数学统计搬进菜园的人！要是只种八棵，可能碰巧五高三矮看不出规律；孟德尔整整种了八年、统计了上万株豌豆！光高矮这一项，他在一千零六十四株第二代豌豆里亲手数出七百八十七株高茎、二百七十七株矮茎，算下来是二点八四比一，几乎贴着三比一！',
      figure: {
        kind: 'bars',
        caption: '1865 年孟德尔论文中子二代豌豆株高的真实统计账本（共 1064 株）。',
        unit: '株',
        bars: [
          { label: '高茎豌豆', value: 787, text: '787株（约3/4）', hot: true },
          { label: '矮茎豌豆', value: 277, text: '277株（约1/4）' },
        ],
      },
    },
    {
      nian: '数上万株豌豆也太有耐心了！他除了数高茎和矮茎，还数了豌豆别的模样吗？',
      dad: '他还同时追踪了圆粒和皱粒、黄豆粒和绿豆粒、紫花和白花等整整七对特征，结果每一对在第二代全都稳稳跑出三比一！可惜他这套超前时代的发现在当年没人看懂，整整沉睡了三十五年才被重新发现，孟德尔也因此被尊为现代遗传学之父。',
    },
    {
      nian: '我懂了！遗传因子像独立成对的小珠子而不是混匀的墨水：第一代里显性高茎盖住了隐性矮茎，到第二代重新配对就按约三比一分出高豌豆和矮豌豆，孟德尔靠大样本统计发现了这个规律。',
      dad: '说得太透彻了！在家抛硬币也是这个道理：抛四次可能三次正面，抛一千次正反面就稳稳接近一比一啦，大样本才藏着真规律！',
    },
  ],
  tip: '可以用四种颜色的围棋子或纽扣在餐桌上陪孩子玩“孟德尔抽签游戏”：左边碗放一黑一白（代表子一代父本），右边碗也放一黑一白（代表母本），闭眼各摸一颗配对记录再放回，连摸 40 次统计“有黑子”与“双白子”的次数，亲手重现 3∶1 分离定律！',
  sources: [
    { title: '生物学 八年级下册 · 基因的显性和隐性；高中生物 必修2 · 第1章 孟德尔的豌豆杂交实验', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: ' Gregor Mendel: Experiments in Plant Hybridization（孟德尔植物杂交实验历史文献解读）', by: 'Genetics / PubMed Central', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5068836/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '第一代全是高茎', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [280, 390], size: [120, 220], color: '#51cf66', text: '纯高茎', from: 0.2 },
          { kind: 'shape', shape: 'pill', at: [500, 450], size: [120, 100], color: '#ffd43b', text: '纯矮茎', from: 0.6 },
          { kind: 'arrow', path: [[580, 420], [740, 420]], color: '#7c52b8', text: '杂交子一代', from: 1.6 },
          { kind: 'shape', shape: 'pill', at: [880, 390], size: [160, 220], color: '#51cf66', text: '100%高茎', from: 2.4 },
          { kind: 'myth', wrong: '高矮豌豆杂交会长出半高豌豆', right: '子一代全是高茎，遗传不像墨水混糊', from: 4.2 },
        ],
      },
      {
        turn: 1, title: '矮豌豆重现江湖', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [260, 440], size: [150, 210], color: '#51cf66', text: '子一代自交', from: 0.3 },
          { kind: 'arrow', path: [[355, 440], [500, 440]], color: '#2e7d32', text: '种出子二代', from: 1.4 },
          { kind: 'shape', shape: 'pill', at: [600, 410], size: [90, 200], color: '#51cf66', text: '高', from: 2.2 },
          { kind: 'shape', shape: 'pill', at: [720, 410], size: [90, 200], color: '#51cf66', text: '高', from: 2.5 },
          { kind: 'shape', shape: 'pill', at: [840, 410], size: [90, 200], color: '#51cf66', text: '高', from: 2.8 },
          { kind: 'shape', shape: 'pill', at: [960, 465], size: [90, 90], color: '#ff922b', text: '矮！', motion: 'pulse', from: 3.2 },
          { kind: 'text', at: [600, 740], text: '藏着的矮因子完好冒出来了', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '显性隐性抽签配', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [280, 440], size: [130, 130], color: '#51cf66', text: '高高', from: 0.4 },
          { kind: 'shape', shape: 'circle', at: [490, 440], size: [130, 130], color: '#74c69d', text: '高矮', from: 1.0 },
          { kind: 'shape', shape: 'circle', at: [700, 440], size: [130, 130], color: '#74c69d', text: '矮高', from: 1.6 },
          { kind: 'shape', shape: 'circle', at: [910, 440], size: [130, 130], color: '#ff922b', text: '矮矮', motion: 'pulse', from: 2.2 },
          { kind: 'label', at: [490, 360], pos: [490, 240], text: '只要带一颗显性珠就长高', color: '#2e7d32', from: 3.4 },
          { kind: 'text', at: [600, 740], text: '仅双隐性那四分之一显出矮', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '八年数万株豌豆', duration: 9,
        cues: [
          { kind: 'count', at: [380, 390], label: '高茎豌豆实测', start: 0, end: 787, unit: '株', over: 2.4, from: 0.4 },
          { kind: 'count', at: [820, 390], label: '矮茎豌豆实测', start: 0, end: 277, unit: '株', over: 2.4, from: 0.8 },
          { kind: 'shape', shape: 'pill', at: [600, 560], size: [340, 96], color: '#d8c5fa', text: '约 3 ∶ 1', from: 3.2 },
          { kind: 'text', at: [600, 740], text: '样本足够大，才显出真实规律', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '叩开现代遗传学', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🌱', path: [[340, 430]], size: 140, from: 0.3 },
          { kind: 'arrow', path: [[450, 430], [730, 430]], color: '#7c52b8', text: '数学+实验', from: 1.4 },
          { kind: 'sprite', icon: '🧬', path: [[840, 430]], size: 150, from: 2.2 },
          { kind: 'text', at: [600, 720], text: '七对性状验证，奠定遗传基石', from: 4.4 },
        ],
      },
    ],
  },
};
