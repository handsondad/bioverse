import type { Story } from './types';

export const hookeCorkCell: Story = {
  slug: 'hooke-cork-cell',
  title: '三百多年前胡克在显微镜下看到的“小格子”，真的是活细胞吗？',
  trigger: '翻看科学画册时，小念看到 1665 年英国科学家罗伯特·胡克手绘的软木塞放大图，密密麻麻全是蜂窝一样的小方格。',
  dialogue: [
    {
      nian: '爸爸，画册上说胡克三百多年前用显微镜发现了细胞，他看到的这些蜂窝小格子真的是活细胞吗？',
      dad: '其实不是活细胞哦！1665 年胡克切了一片极薄的橡树软木塞放到自制显微镜下，看到一排排空空的小房间，像修道院的小单间，就给它起名叫“细胞”。可软木塞是死树皮做的，里面的活物质早就干透消失了。',
      figure: {
        kind: 'image',
        src: '/images/photos/hooke-cork-1665.webp',
        alt: '1665年罗伯特·胡克在《显微图谱》中绘制的软木塞薄片显微结构图',
        caption: '1665 年胡克在《显微图谱》里亲手画下的软木塞薄片，一格格全是植物死去后留下的空壳。',
        credit: 'Robert Hooke · 公有领域',
        href: 'https://commons.wikimedia.org/wiki/File:Micrographia_Schem_11.jpg',
      },
    },
    {
      nian: '既然软木塞里的活物质都没了，胡克看到的空壳到底是什么呀？',
      dad: '他看到的是植物细胞死后留下的硬外壳——细胞壁！就像人搬走以后留下的空砖房，墙壁还在，可屋里的细胞膜、细胞质和细胞核全没了。不过“细胞”这个好记的名字，全世界一直沿用到了今天。',
      figure: { kind: 'sim', sim: 'hookeScope', caption: '切换胡克的软木死细胞壁空壳和列文虎克看到的池塘活微生物，再调放大倍数看看差别。' },
    },
    {
      nian: '原来那只是空砖房一样的细胞壁！那历史上第一个真正看见活细胞的人是谁？',
      dad: '是一位超爱磨镜片的荷兰布商列文虎克！胡克的显微镜只能放大几十倍，而列文虎克把黄豆大的单块玻璃透镜磨得极其精细，放大了近三百倍。1674 年他看了一滴池塘水，惊呆了——里面全是翻滚游泳的微小活生物！',
    },
    {
      nian: '一滴池塘水里就有那么多活生物？列文虎克还用他的透镜看到了什么？',
      dad: '他好奇心特别重，连自己的牙垢、雨水和血液都拿去看，结果在人类历史上第一次亲眼看到了活生生的细菌、精子，还有在毛细血管里排队流过的红细胞，打开了热闹非凡的微观活世界。',
      figure: {
        kind: 'scale',
        caption: '从肉眼到现代光学显微镜，镜片越精密，看见的生命细节越丰富。',
        axis: '观察工具放大本领演进',
        stops: [
          { label: '人的肉眼', note: '看清约0.1毫米', color: '#f1f3f5' },
          { label: '胡克显微镜', note: '约30倍看空壳', color: '#ffe8cc' },
          { label: '列文虎克镜', note: '约270倍看活菌', color: '#d8f3dc', hot: true },
          { label: '现代光学镜', note: '约1000倍看核', color: '#d0ebff' },
        ],
      },
    },
    {
      nian: '看了这么多不同的红细胞和植物，科学家怎么确定所有动植物都是细胞搭出来的？',
      dad: '又过了差不多一百七十年，德国科学家施莱登和施旺总结前人无数观察，提出了著名的“细胞学说”：一切动植物都由细胞发育而来，新细胞也是由老细胞分裂产生的。生物学这才真正有了共同的地基。',
    },
    {
      nian: '我懂了！胡克当年在软木塞里看到的只是死细胞留下的空细胞壁，但他给细胞起了名字；后来列文虎克磨出高倍透镜才真正看见活细胞，再到细胞学说确立，人类才看清生命的共同积木。',
      dad: '串得太清楚啦！科学发现常常就是这样一场接力赛，一个人先推开窗缝，后人把镜片越磨越亮，真相就一点点显露出来了。',
    },
  ],
  tip: '带孩子用儿童显微镜观察时，不要直接塞整块厚树叶或厚木片——光学显微镜需要光线穿过标本才能看清，所以胡克当年特意用锋利小刀把软木削成极薄的薄片。切取薄片标本时务必由家长操作刀片。',
  sources: [
    { title: '生物学 七年级上册 · 第二单元 第一章 练习使用显微镜；高中生物 必修1 · 细胞学说建立过程', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: "Robert Hooke's Micrographia（胡克《显微图谱》馆藏解读）", by: 'Royal Botanic Gardens, Kew', url: 'https://www.kew.org/read-and-watch/robert-hookes-micrographia' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '1665软木画册', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🔬', path: [[260, 450]], size: 140, from: 0.2 },
          { kind: 'arrow', path: [[370, 450], [510, 450]], color: '#c9623b', text: '切片放大', from: 1.2 },
          { kind: 'shape', shape: 'rect', at: [760, 450], size: [380, 260], color: '#f3d9b1', text: '软木小格', from: 2.0 },
          { kind: 'label', at: [760, 320], pos: [760, 210], text: '胡克起名：细胞', from: 3.4 },
          { kind: 'text', at: [600, 740], text: '死树皮里的活物质早已干透', from: 5.0 },
        ],
      },
      {
        turn: 1, title: '空壳不是活细胞', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [360, 430], size: [260, 200], color: '#e9c496', outline: true, text: '空细胞壁', from: 0.3 },
          { kind: 'label', at: [360, 330], pos: [320, 220], text: '只剩硬砖墙外壳', from: 1.5 },
          { kind: 'shape', shape: 'rect', at: [840, 430], size: [260, 200], color: '#b7e4c7', from: 1.0 },
          { kind: 'label', at: [840, 330], pos: [880, 220], text: '活细胞饱满有核', color: '#2e7d32', from: 1.8 },
          { kind: 'shape', shape: 'circle', at: [840, 430], size: [86, 86], color: '#d8c5fa', text: '细胞核', motion: 'pulse', from: 2.2 },
          { kind: 'myth', wrong: '胡克看到的是完整活细胞', right: '他看到的是死细胞留下的空壁', from: 4.4 },
        ],
      },
      {
        turn: 2, title: '列文虎克高倍镜', duration: 9,
        cues: [
          { kind: 'count', at: [360, 380], label: '单透镜放大倍数', start: 30, end: 270, unit: '倍', over: 2.5, from: 0.4 },
          { kind: 'shape', shape: 'circle', at: [800, 450], size: [300, 300], color: '#d0ebff', from: 1.0 },
          { kind: 'particles', box: [680, 330, 240, 240], count: 14, color: '#2e7d32', motion: 'gas', size: 10, from: 2.0 },
          { kind: 'label', at: [800, 300], pos: [820, 200], text: '池塘水里活虫游动', from: 3.6 },
          { kind: 'text', at: [600, 750], text: '1674年首次看见活微生物', from: 5.0 },
        ],
      },
      {
        turn: 3, title: '微观活世界开启', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [300, 440], size: [200, 96], color: '#8ce09b', text: '活细菌', motion: 'wiggle', from: 0.4 },
          { kind: 'shape', shape: 'circle', at: [600, 440], size: [170, 170], color: '#ff8787', text: '红细胞', motion: 'pulse', from: 1.5 },
          { kind: 'shape', shape: 'pill', at: [900, 440], size: [200, 96], color: '#99e9f2', text: '单细胞虫', motion: 'wiggle', from: 2.6 },
          { kind: 'text', at: [600, 730], text: '牙垢雨水和血液里都有细胞', from: 4.5 },
        ],
      },
      {
        turn: 4, title: '细胞学说奠基', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🌱', path: [[320, 380]], size: 120, from: 0.3 },
          { kind: 'sprite', icon: '🐾', path: [[880, 380]], size: 120, from: 0.6 },
          { kind: 'arrow', path: [[400, 410], [520, 480]], color: '#2e7d32', text: '施莱登', from: 1.6 },
          { kind: 'arrow', path: [[800, 410], [680, 480]], color: '#3b6ea5', text: '施旺', from: 1.6 },
          { kind: 'shape', shape: 'pill', at: [600, 520], size: [320, 110], color: '#d8f3dc', text: '细胞学说', from: 2.8 },
          { kind: 'text', at: [600, 740], text: '动植物都由细胞发育和分裂而来', from: 4.6 },
        ],
      },
    ],
  },
};
