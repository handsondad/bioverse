import type { Story } from './types';

export const caterpillarButterfly: Story = {
  slug: 'caterpillar-butterfly',
  title: '毛毛虫钻进蛹里，真是先化成一锅“浓汤”再变成蝴蝶吗？',
  trigger: '自然角养的菜青虫挂在盒盖上结成了硬硬的绿蛹，同桌神秘兮兮地告诉小念：“要是现在剪开蛹，里面全是一包绿汤水！”',
  dialogue: [
    {
      nian: '爸爸，同桌说毛毛虫在蛹里面不是直接长翅膀，而是先化成一锅“浓汤”，这是真的吗？',
      dad: '你同桌没瞎编，还真有大半是真的！毛毛虫钻进蛹壳后，身体释放出消化酶，把原来啃菜叶的大嘴巴、短短的爬行足和绝大部分肌肉肠道全都拆碎溶解，变成一包富含蛋白质的营养浓汤！不过可不是“全都化光了”哦。',
      figure: {
        kind: 'image',
        src: '/images/photos/monarch-chrysalis.webp',
        alt: '悬挂在树枝上的黑脉金斑蝶（帝王蝶）翠绿色金点蝶蛹照片',
        caption: '挂在枝头看似安静不动的帝王蝶绿蛹，壳内正在上演惊天动地的拆旧建新大工程。',
        credit: 'OakleyOriginals · CC BY 2.0',
        href: 'https://commons.wikimedia.org/wiki/File:Chrysalis_of_the_Monarch_(5026671773).jpg',
      },
    },
    {
      nian: '要是连细胞都化成浓汤了，谁来把这锅营养汤重新拼成漂亮的蝴蝶呢？',
      dad: '秘密武器在毛毛虫还没破卵壳的时候就埋好啦！毛毛虫体内藏着十几对微小的细胞团，叫“成虫盘”——这一对未来管长复眼，那两对未来管长四片大翅膀，还有管长六条细腿和卷曲吸管嘴的。化蛹时消化酶不碰成虫盘，它们大口喝着营养汤飞速分裂几千倍，就把蝴蝶零件全组装出来了！',
      figure: { kind: 'sim', sim: 'pupaRebuild', caption: '拖动完全变态发育四个阶段，透视蛹壳里旧组织拆成营养汤与“成虫盘”长出彩翅的全过程。' },
    },
    {
      nian: '哇，原来早就备好了成虫盘种子！那蛹里面除了成虫盘，呼吸管和大脑也全拆掉了吗？',
      dad: '呼吸用的主气管管道会保留并改建，要不然蛹也没法呼吸呀！更神奇的是科学家的记忆实验：让毛毛虫先学会害怕某一种气味再化蛹，结果羽化出来的蝴蝶居然还记得躲开那种气味！说明一部分关键的神经连接也跨过“浓汤期”留了下来。',
    },
    {
      nian: '连小时候的记忆都能带过去！那为什么刚钻出蛹壳的蝴蝶翅膀皱巴巴软趴趴的，飞不起来？',
      dad: '因为蛹壳太窄了，新翅膀在里面像折扇一样叠得紧紧的。蝴蝶一破蛹，必须抓稳树枝倒挂着，用肚子使劲把体液泵进翅膀的脉络里，像给充气帐篷打气一样把翅膀慢慢撑平，再晾上一两个小时变硬，才能振翅飞上蓝天！',
    },
    {
      nian: '撑开翅膀的过程好不容易！可昆虫干嘛这么折腾，从小直接长成小蝴蝶慢慢变大不省事吗？',
      dad: '像蝗虫那样小时候和长大差不多（不完全变态）确实省事，但蝴蝶、蜜蜂、甲虫这种“完全变态”有个巨大优势：幼虫在树叶上专心狂吃猛长，成虫飞去花丛专心吸花蜜找对象——父母和孩子吃完全不同的食物、住不同的地方，一丁点都不抢饭碗！',
    },
    {
      nian: '我懂了！毛毛虫在蛹里用酶把大部分旧组织拆成营养浓汤，同时靠早就备好的成虫盘细胞团吸收营养长出翅膀、复眼和吸管嘴；这种完全变态让幼虫和成虫不抢食物，生存本领超强。',
      dad: '总结得太精彩啦！下次看见蝴蝶刚爬出蛹壳挂在枝头不动，千万别去捏它的软翅膀帮忙展开，一碰翅脉破了它就再也飞不起来了，静静守着看就是最好的爱护。',
    },
  ],
  tip: '想在家和孩子亲眼观察完全变态发育，养几条家蚕（桑叶喂养）或柑橘凤蝶幼虫（花椒叶、柑橘叶喂养）非常合适。请注意：户外许多色彩鲜艳、长满毒刺毛的“洋辣子”（刺蛾幼虫）或毒蛾毛虫千万不要用手触碰，以免毒毛扎入皮肤引起剧痛红肿。',
  sources: [
    { title: '生物学 八年级下册 · 第七单元 第一章 第二节 昆虫的生殖和发育', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'How Does a Caterpillar Turn into a Butterfly?（毛毛虫如何化蛹变蝴蝶：成虫盘与变态机制）', by: 'Scientific American', url: 'https://www.scientificamerican.com/article/caterpillar-butterfly-metamorphosis-explainer/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '蛹壳里的营养汤', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🐛', path: [[280, 440]], size: 140, from: 0.2 },
          { kind: 'arrow', path: [[390, 440], [560, 440]], color: '#2e7d32', text: '结蛹拆旧', from: 1.2 },
          { kind: 'shape', shape: 'pill', at: [760, 440], size: [220, 280], color: '#d8f3dc', text: '蛋白营养汤', from: 2.0 },
          { kind: 'myth', wrong: '毛毛虫只是在蛹里多长出翅膀', right: '旧肌肉肠道化作营养汤全身重装', from: 4.2 },
        ],
      },
      {
        turn: 1, title: '成虫盘种子发力', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [600, 450], size: [260, 300], color: '#fff3bf', from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [530, 390], size: [86, 86], color: '#ff922b', text: '翅盘', motion: 'grow', over: 2.5, from: 0.8 },
          { kind: 'shape', shape: 'circle', at: [670, 390], size: [86, 86], color: '#ff922b', text: '眼盘', motion: 'grow', over: 2.5, from: 1.2 },
          { kind: 'shape', shape: 'circle', at: [600, 510], size: [86, 86], color: '#ff922b', text: '足盘', motion: 'grow', over: 2.5, from: 1.6 },
          { kind: 'label', at: [730, 450], pos: [960, 380], text: '吸收营养汤分裂上千倍', from: 3.0 },
          { kind: 'text', at: [600, 750], text: '预备好的成虫盘长出全新器官', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '留住呼吸与记忆', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [380, 440], size: [230, 100], color: '#99e9f2', text: '主气管网', from: 0.4 },
          { kind: 'shape', shape: 'pill', at: [820, 440], size: [230, 100], color: '#d8c5fa', text: '部分神经', motion: 'pulse', from: 1.2 },
          { kind: 'label', at: [820, 390], pos: [820, 240], text: '幼虫学会的气味蝴蝶还记得', from: 2.6 },
          { kind: 'text', at: [600, 730], text: '并非全化光，精密留存气管线', from: 4.6 },
        ],
      },
      {
        turn: 3, title: '泵入体液撑彩翅', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [340, 440], size: [150, 120], color: '#ffd8a8', text: '皱软新翅', from: 0.3 },
          { kind: 'flow', path: [[430, 440], [670, 440]], color: '#e8590c', count: 6, speed: 170, from: 1.2 },
          { kind: 'sprite', icon: '🦋', path: [[820, 440]], size: 170, from: 2.4 },
          { kind: 'label', at: [820, 330], pos: [840, 220], text: '泵液撑平再晾干变硬', from: 3.4 },
          { kind: 'text', at: [600, 740], text: '刚羽化时千万不能用手碰软翅膀', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '两代错峰不抢饭', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🐛', path: [[320, 390]], size: 120, from: 0.3 },
          { kind: 'label', at: [320, 490], pos: [320, 590], text: '幼虫嚼菜叶猛长身体', color: '#2e7d32', from: 1.4 },
          { kind: 'sprite', icon: '🦋', path: [[880, 390]], size: 130, from: 0.9 },
          { kind: 'label', at: [880, 490], pos: [880, 590], text: '成虫吸花蜜飞远传粉', color: '#e8590c', from: 2.4 },
          { kind: 'text', at: [600, 750], text: '两代不抢食，昆虫家族最兴旺', from: 4.8 },
        ],
      },
    ],
  },
};
