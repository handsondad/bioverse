import type { Story } from './types';

export const fireflyColdLight: Story = {
  slug: 'firefly-cold-light',
  title: '萤火虫肚子亮闪闪的，摸上去为什么一点也不烫手？',
  trigger: '夏夜在山脚溪边散步，一只萤火虫停在草叶上闪着黄绿色的光，小念凑近手背感受了一下，竟然一丁点热气都没有。',
  dialogue: [
    {
      nian: '爸爸，家里的台灯开久了灯罩都烫手，为什么萤火虫肚子那么亮，却一点也不烫呢？',
      dad: '因为它们发光的路子完全不一样！传统白炽灯泡要靠电流把钨丝烧到两千多摄氏度才发亮，九成能量都白白变成热散掉了；而萤火虫用的是温和的化学反应，几乎不发热就造出了光，科学家管它叫“冷光”。',
      figure: {
        kind: 'image',
        src: '/images/photos/firefly-glow.webp',
        alt: '夜间草叶上尾部发出黄绿色冷光的萤火虫',
        caption: '夏夜草叶上的萤火虫，腹部末端发光器点亮黄绿冷光，哪怕娇嫩细胞也毫发无伤。',
        credit: 'beewonder · CC0 1.0',
        href: 'https://commons.wikimedia.org/wiki/File:Photinus_pyralis_179780353.jpg',
      },
    },
    {
      nian: '哇，要是萤火虫像灯泡那样发热早就把自己烤熟了！它肚子里到底装了什么发光宝贝？',
      dad: '它腹部末端的发光细胞里备好了两样搭档：燃料叫“荧光素”，催化剂工匠叫“荧光素酶”。只要再通进一点氧气、花掉一点细胞里的能量分子 ATP，荧光素酶一撮合，化学能就当场变成黄绿色的光子飞出来啦！',
      eq: '荧光素 + 氧气 + ATP →（荧光素酶催化）→ 氧化荧光素 + 黄绿冷光',
      figure: { kind: 'sim', sim: 'fireflyAtp', caption: '切换白炽灯泡与萤火虫发光器，再调 ATP 供应量，对比发光效率与发热差异。' },
    },
    {
      nian: '荧光素酶旁边那个 ATP 是什么？为什么不直接烧吃进去的花蜜和糖来发光？',
      dad: '问到细胞最聪明的规矩了！葡萄糖就像一张大面额整钞，细胞干小活儿花不开；必须先在线粒体里把糖换成一小张一小张通用的“能量零钱”，就是 ATP。不光萤火虫发光，你眨眼、跑跳、心跳花的每一分力气，全都在刷 ATP！',
    },
    {
      nian: '原来 ATP 是所有生命通用的能量零钱！那萤火虫刷 ATP 发光，效率到底比灯泡高多少？',
      dad: '科学家用精密仪器测过，萤火虫发光反应把化学能变成光的量子效率高达百分之四十一左右，在大自然所有发光生物里数一数二，而老式白炽灯泡只有大约百分之十变成可见光。人类还模仿它造出了不用插电的冷光荧光棒呢。',
      figure: {
        kind: 'bars',
        caption: '把输入的能量真正变成可见光的比例对比（萤火虫数据据 Nature Photonics 精密测定）。',
        unit: '%',
        bars: [
          { label: '白炽灯泡', value: 10, text: '约 10%（极烫）' },
          { label: '普通荧光灯', value: 25, text: '约 25%' },
          { label: '萤火虫冷光', value: 41, text: '约 41%（不烫手）', hot: true },
        ],
      },
    },
    {
      nian: '科学家还能用萤火虫的发光本领干别的事吗？萤火虫自己半夜发光又是为了找谁？',
      dad: '萤火虫一明一暗按特定节奏闪光，是在夏夜里发“摩斯密码”找对象！而科学家把荧光素酶请进了实验室：因为有活细菌的地方就有 ATP，拿棉签在餐具上一擦再滴点荧光素酶，一发光就知道没洗干净，几秒钟就能抓出藏匿的细菌。',
    },
    {
      nian: '我懂了！灯泡靠烧烫灯丝发光所以烫手，萤火虫靠荧光素酶用氧气和能量零钱 ATP 直接把化学能变成冷光，发光效率高又不发热，还能帮人类快速检测活细菌。',
      dad: '说得太溜了！下次在野外遇见萤火虫，记得关掉手电筒静静看，别开闪光灯打扰它们在草丛里对暗号哦。',
    },
  ],
  tip: '萤火虫幼虫生活在干净潮湿的溪边草丛，专吃蜗牛和蛞蝓，对农药和强光污染非常敏感。夏夜带孩子赏萤时请关闭手电筒或蒙上红布，不捕捉、不摇晃草丛，守护这群挑剔的生态环境指示昆虫。',
  sources: [
    { title: '高中生物 必修1 · 第5章 第2节 细胞的能量“货币”ATP', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Firefly bioluminescence quantum yield revisited（萤火虫生物发光量子效率重新测定）', by: 'Nature Photonics (Ando et al., 2008)', url: 'https://doi.org/10.1038/nphoton.2007.275' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '烫灯泡与冷灯笼', duration: 9,
        cues: [
          { kind: 'sprite', icon: '💡', path: [[320, 430]], size: 150, from: 0.2 },
          { kind: 'label', at: [320, 340], pos: [300, 220], text: '烧烫灯丝九成变热', color: '#e8590c', from: 1.2 },
          { kind: 'sprite', icon: '✨', path: [[860, 430]], size: 150, from: 0.8 },
          { kind: 'label', at: [860, 340], pos: [880, 220], text: '化学反应直接变光', color: '#2e7d32', from: 2.0 },
          { kind: 'myth', wrong: '只要发光就一定很烫', right: '萤火虫发的是几乎不发热的冷光', from: 4.2 },
        ],
      },
      {
        turn: 1, title: '发光细胞配方', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [270, 380], size: [170, 76], color: '#ffe066', text: '荧光素', from: 0.3 },
          { kind: 'shape', shape: 'pill', at: [270, 500], size: [170, 76], color: '#ff922b', text: 'ATP+氧', from: 0.9 },
          { kind: 'arrow', path: [[375, 440], [540, 440]], color: '#2e7d32', text: '荧光素酶', from: 1.8 },
          { kind: 'shape', shape: 'circle', at: [780, 440], size: [210, 210], color: '#d8f5a2', text: '黄绿冷光', motion: 'pulse', from: 2.8 },
          { kind: 'text', at: [600, 740], text: '四样凑齐瞬间点亮小灯笼', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '通用能量零钱', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [280, 440], size: [220, 120], color: '#ffd8a8', text: '葡萄糖整钞', from: 0.3 },
          { kind: 'arrow', path: [[405, 440], [555, 440]], color: '#c9623b', text: '换零钱', from: 1.4 },
          { kind: 'shape', shape: 'circle', at: [680, 440], size: [140, 140], color: '#ff922b', text: 'ATP', motion: 'pulse', from: 2.2 },
          { kind: 'arrow', path: [[760, 400], [920, 330]], color: '#2e7d32', text: '供发光', from: 3.2 },
          { kind: 'arrow', path: [[760, 480], [920, 550]], color: '#3b6ea5', text: '供跑跳', from: 3.6 },
          { kind: 'text', at: [600, 740], text: '细胞干活全刷 ATP 零钱', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '超高发光效率', duration: 9,
        cues: [
          { kind: 'meter', at: [360, 380], label: '白炽灯发光比', start: 0, end: 0.1, color: '#e8590c', over: 2.0, from: 0.4 },
          { kind: 'meter', at: [820, 380], label: '萤火虫量子效率', start: 0, end: 0.41, color: '#2e7d32', over: 2.5, from: 1.0 },
          { kind: 'text', at: [600, 660], text: '不烧灯丝，能量专心用来发光', from: 4.2 },
        ],
      },
      {
        turn: 4, title: '暗夜密码与测菌', duration: 9,
        cues: [
          { kind: 'pulse', at: [360, 440], color: '#94d82d', radius: 90, rate: 0.9, from: 0.4 },
          { kind: 'label', at: [360, 340], pos: [340, 220], text: '夏夜闪光对暗号', from: 1.6 },
          { kind: 'shape', shape: 'rect', at: [820, 440], size: [260, 150], color: '#e7f5ff', text: 'ATP测菌仪', from: 1.2 },
          { kind: 'label', at: [820, 365], pos: [840, 220], text: '有活菌就发光报警', from: 2.8 },
          { kind: 'text', at: [600, 740], text: '向萤火虫学本领，守护卫生安全', from: 4.6 },
        ],
      },
    ],
  },
};
