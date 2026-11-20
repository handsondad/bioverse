import type { Story } from './types';

export const cellBuildingBlocks: Story = {
  slug: 'cell-building-blocks',
  title: '人和大树差那么多，身体里都是同一种“小积木”搭的吗？',
  trigger: '在公园散步时，小念摸了摸粗糙的柳树干，又拍拍自己的胳膊，怎么也不敢相信两者是用同一种小结构拼出来的。',
  dialogue: [
    {
      nian: '爸爸，大树硬邦邦还会长绿叶子，我软乎乎会跑会跳，我们真是同一种“小积木”搭的吗？',
      dad: '真的哦，把柳树叶和人的一小片皮肤放到显微镜底下看，都能看到密密麻麻的小房间，科学家把这种生命的小积木叫细胞。大树、小狗和我们，都是由千千万万个细胞拼起来的。',
      figure: { kind: 'sim', sim: 'cellCompare', caption: '切换动物细胞和植物细胞，再点不同部位看看它们多了或少了什么。' },
    },
    {
      nian: '显微镜下的小房间里面装着什么？是不是空空的？',
      dad: '一点也不空！每个细胞都少不了三件套：最外圈薄薄的细胞膜像大门，管东西进出；里面果冻一样的细胞质像车间；正中间圆圆的细胞核是总司令部，装着决定你长相的遗传说明书。',
    },
    {
      nian: '既然三件套都一样，大树的细胞为什么能撑出硬邦邦的树干？',
      dad: '秘密在细胞外面多穿了一件“硬盔甲”——细胞壁！植物细胞在细胞膜外面包着一层结实的细胞壁，所以大树不用长骨头也能站得笔直；动物细胞没有细胞壁，身体才柔软灵活。',
    },
    {
      nian: '那植物能晒太阳长大，是不是也因为细胞里多了什么宝贝？',
      dad: '猜对了！植物绿色部分的细胞里住着一个个绿色小车间，叫叶绿体，能借阳光造粮食。另外植物细胞中间还有个大水袋叫液泡，西瓜咬下去甜甜的汁水就藏在液泡里。',
      show: { kind: 'steps', frames: [{ icon: '🧱', label: '硬细胞壁撑形' }, { icon: '🌿', label: '叶绿体造粮食' }, { icon: '💧', label: '大液泡存汁水' }] },
    },
    {
      nian: '那我身体里的细胞都长得一模一样吗？皮肤细胞和心脏细胞也一样吗？',
      dad: '底子都是那三件套，但分工不同就长出了不同模样：神经细胞伸出长长的“电线”传信号，肌肉细胞能拉长缩紧，红细胞像扁圆小船专门运氧气。大家合作，才拼出一个活蹦乱跳的你。',
    },
    {
      nian: '我懂了！大树和我都是由细胞拼成的，共有的核心是细胞膜、细胞质和细胞核；植物细胞多出细胞壁、叶绿体和大液泡，所以能站得直、自己造粮食，而不同细胞分工合作拼出完整生命。',
      dad: '总结得清清楚楚！下次吃西瓜或切洋葱时想想看，那一层透明薄膜在显微镜下就是一整排方方正正的植物细胞哦。',
    },
  ],
  tip: '除病毒以外，绝大多数生物都是由细胞构成的。家里若有儿童显微镜，可以用洋葱内表皮制作临时装片，让孩子亲眼看到整齐排列的植物细胞壁与细胞核；操作镊子与载玻片时请大人陪同。',
  sources: [
    { title: '生物学 七年级上册 · 第二单元 第一章 细胞是生命活动的基本单位', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Cells: Structure and Function（细胞结构与功能）', by: 'National Institute of General Medical Sciences (NIH)', url: 'https://www.nigms.nih.gov/education/fact-sheets/Pages/the-cell.aspx' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '生命的小房间', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🌳', path: [[280, 440]], size: 150, from: 0.2 },
          { kind: 'sprite', icon: '🧒', path: [[920, 440]], size: 150, from: 0.5 },
          { kind: 'arrow', path: [[380, 440], [520, 440]], color: '#2e7d32', text: '放大看', from: 1.5 },
          { kind: 'arrow', path: [[820, 440], [680, 440]], color: '#3b6ea5', text: '放大看', from: 1.5 },
          { kind: 'shape', shape: 'circle', at: [600, 440], size: [210, 210], color: '#d9f2dc', text: '细胞', from: 2.5 },
          { kind: 'text', at: [600, 740], text: '动植物都由细胞拼成', from: 4.5 },
        ],
      },
      {
        turn: 1, title: '共有三件套', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [600, 450], size: [380, 270], color: '#edf5ff', from: 0.2 },
          { kind: 'label', at: [790, 450], pos: [980, 320], text: '细胞膜管进出', from: 1.2 },
          { kind: 'label', at: [480, 520], pos: [260, 620], text: '细胞质是车间', from: 2.2 },
          { kind: 'shape', shape: 'circle', at: [600, 450], size: [125, 125], color: '#d8c5fa', text: '细胞核', motion: 'pulse', from: 3.0 },
          { kind: 'label', at: [600, 388], pos: [600, 220], text: '总司令部藏 DNA', from: 4.2 },
        ],
      },
      {
        turn: 2, title: '植物的硬盔甲', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [360, 450], size: [290, 230], color: '#8ce09b', from: 0.2 },
          { kind: 'shape', shape: 'rect', at: [360, 450], size: [230, 175], color: '#eef9ee', text: '植物细胞', from: 0.6 },
          { kind: 'label', at: [225, 360], pos: [260, 220], text: '外层硬细胞壁', from: 1.8 },
          { kind: 'shape', shape: 'circle', at: [840, 450], size: [260, 200], color: '#edf5ff', text: '动物细胞', from: 1.2 },
          { kind: 'label', at: [840, 350], pos: [880, 220], text: '柔软无细胞壁', from: 3.0 },
          { kind: 'myth', wrong: '动物植物细胞完全一样', right: '植物多了细胞壁叶绿体液泡', from: 4.5 },
        ],
      },
      {
        turn: 3, title: '植物额外宝贝', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 450], size: [480, 320], color: '#d9f2dc', from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [700, 470], size: [210, 160], color: '#b8e2fc', text: '大液泡', motion: 'pulse', from: 1.0 },
          { kind: 'shape', shape: 'pill', at: [440, 380], size: [120, 62], color: '#51a355', text: '叶绿体', from: 2.0 },
          { kind: 'shape', shape: 'pill', at: [450, 520], size: [120, 62], color: '#51a355', text: '叶绿体', from: 2.5 },
          { kind: 'text', at: [600, 760], text: '叶绿体造粮，液泡存汁水', from: 4.5 },
        ],
      },
      {
        turn: 4, title: '细胞分工合作', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [260, 430], size: [220, 100], color: '#ffd8a8', text: '肌肉细胞', from: 0.4 },
          { kind: 'shape', shape: 'pill', at: [600, 430], size: [220, 100], color: '#d8c5fa', text: '神经细胞', from: 1.4 },
          { kind: 'shape', shape: 'circle', at: [940, 430], size: [150, 150], color: '#ff8787', text: '红细胞', from: 2.4 },
          { kind: 'text', at: [600, 720], text: '各有专长，共同拼出生命', from: 4.2 },
        ],
      },
    ],
  },
};
