import type { Story } from './types';

export const yuanHybridRice: Story = {
  slug: 'yuan-hybrid-rice',
  title: '水稻自己就能授粉结籽，袁隆平爷爷为什么要满世界找一株“不育”的野稻？',
  trigger: '吃饭时爸爸提醒小念把碗底几粒米吃干净，说起袁隆平爷爷当年举着放大镜在海南水沟边找“生不出好花粉”的野生稻，小念听得一头雾水。',
  dialogue: [
    {
      nian: '爸爸，种庄稼不都盼着多结种子吗？袁隆平爷爷干嘛偏偏要找一株花粉“不育”的野生稻呀？',
      dad: '因为袁隆平爷爷想让水稻用上“杂种优势”！就像两个远房品种配在一起，生出来的杂交第一代稻苗往往根深叶茂、穗大粒多，比普通老品种足足增产百分之二十左右！可想给水稻做杂交，偏偏撞上了一道天大的难题。',
      figure: { kind: 'sim', sim: 'hybridRice', caption: '切换人工剪雄蕊、雄性不育系大田制种和农民自留种三种方案，看杂交水稻怎样喂饱亿万人。' },
    },
    {
      nian: '给水稻做杂交有什么难题？像孟德尔给豌豆授粉那样，拿小刷子刷过去不行吗？',
      dad: '做几盆科研实验行，种几亿亩农田可就傻眼啦！水稻是典型的“自花传粉”植物，每一粒稻谷开花时比芝麻大不了多少，里面同时挤着雌蕊和六根雄蕊，还没等花瓣张开，它自己就把粉授完了！总不能派几千万人下田拿小镊子一朵朵剪雄蕊吧？',
    },
    {
      nian: '一朵朵剪雄蕊肯定来不及！所以找到一株天生没有活花粉的“不育”野稻就能省掉剪刀啦？',
      dad: '一下子想通了！如果能找到一株天生雄蕊不产好花粉、但雌蕊完全健康的稻妈妈（叫雄性不育系），它自己没法给自己授粉，只要在它旁边种上高产稻爸爸，风一吹花粉飘过来，稻妈妈结出来的每一粒稻谷就全都是纯正的杂交种子啦！',
    },
    {
      nian: '原来不育稻妈妈是免剪刀神器！那袁隆平爷爷是在哪儿找到这株宝贝野稻的？',
      dad: '大海捞针一样找了好几年！1970 年秋天，袁隆平爷爷的助手李必湖和农场技术员冯克珊在海南三亚一片沼泽水坑边，终于发现了一株雄花败育的野生稻，大家激动地给它起名叫“野败”！靠着这株野败，中国在 1973 年率先攻克三系杂交水稻，亩产一下子跃上新台阶！',
      figure: {
        kind: 'bars',
        caption: '大田种植常规稻、杂交一代稻与自留二代种子的相对收成示意对比。',
        unit: '%',
        bars: [
          { label: '常规水稻', value: 100, text: '基准收成 100%' },
          { label: '杂交一代稻', value: 120, text: '增产约20%整齐高产', hot: true },
          { label: '自留二代种', value: 82, text: '性状分离，参差减产' },
        ],
      },
    },
    {
      nian: '太厉害了！那农民伯伯今年收了高产杂交稻谷，留一袋明年接着种，还能一样高产吗？',
      dad: '不能留种哦！还记得孟德尔的豌豆吗？杂交第一代基因配成一对显隐搭档，整片稻田高矮一致、同时成熟；可一旦留种到第二代，基因重新洗牌发生“性状分离”，地里有的高有的矮、有的早熟有的晚熟，杂种优势散了架，产量立马掉下来，所以每年都要去买新配好的杂交一代种子。',
    },
    {
      nian: '我懂了！水稻花小又自花传粉，人工剪雄蕊没法大面积制种；袁隆平爷爷团队找到花粉不育的“野败”当稻妈妈，才能批量生产增产约百分之二十的杂交一代稻种，而且因第二代会性状分离所以不能自留种。',
      dad: '把孟德尔定律和餐桌上的米饭全串起来了！每一粒白米饭里都藏着几代育种科学家的汗水，咱们把碗底吃得干干净净就是最好的致敬。',
    },
  ],
  tip: '跟孩子共进晚餐时，可以一起观察碗里米粒的形状（细长的籼米与圆短的粳米），聊聊袁隆平院士“禾下乘凉梦”与“杂交水稻覆盖全球梦”的科学故事，用真实的遗传学知识替代生硬说教，自然养成珍惜粮食的习惯。',
  sources: [
    { title: '生物学 八年级下册 · 生物的遗传与变异；高中生物 必修2 · 第6章 生物育种', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Yuan Longping — 2004 World Food Prize Laureate（袁隆平与杂交水稻研发历程）', by: 'The World Food Prize Foundation', url: 'https://www.worldfoodprize.org/blog/people/jones-and-yuan/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '杂种优势产量高', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [280, 440], size: [190, 100], color: '#8ce09b', text: '优良品种甲', from: 0.3 },
          { kind: 'shape', shape: 'pill', at: [280, 560], size: [190, 100], color: '#74c0fc', text: '优良品种乙', from: 0.7 },
          { kind: 'arrow', path: [[400, 500], [580, 450]], color: '#2e7d32', text: '杂交子一代', from: 1.6 },
          { kind: 'sprite', icon: '🌾', path: [[760, 420]], size: 170, from: 2.4 },
          { kind: 'count', at: [920, 450], label: '比常规增产约', start: 0, end: 20, unit: '%', over: 2.0, from: 2.8 },
          { kind: 'text', at: [600, 740], text: '穗大粒多高产，可制种很难', from: 4.8 },
        ],
      },
      {
        turn: 1, title: '稻花太小难剪蕊', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [420, 440], size: [220, 220], color: '#fff3bf', text: '微小稻花', from: 0.3 },
          { kind: 'label', at: [420, 330], pos: [360, 220], text: '开花前自己就授完粉', color: '#e8590c', from: 1.5 },
          { kind: 'sprite', icon: '✂️', path: [[800, 440]], size: 140, from: 1.2 },
          { kind: 'label', at: [800, 540], pos: [820, 630], text: '几亿亩田根本剪不过来', color: '#e8590c', from: 2.8 },
          { kind: 'text', at: [600, 750], text: '自花传粉制种曾是世界难题', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '天然免剪刀妈妈', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [340, 440], size: [240, 120], color: '#ffd8a8', text: '雄性不育母本', from: 0.3 },
          { kind: 'flow', path: [[820, 380], [460, 420]], color: '#f59f00', count: 7, speed: 0.5, from: 1.4 },
          { kind: 'shape', shape: 'pill', at: [860, 440], size: [220, 120], color: '#8ce09b', text: '高产父本送粉', from: 0.8 },
          { kind: 'label', at: [640, 360], pos: [640, 240], text: '风吹授粉批量结出杂交种', color: '#2e7d32', from: 2.8 },
          { kind: 'text', at: [600, 740], text: '免去手剪雄蕊，大田制种成真', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '1970海南寻野败', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🔍', path: [[320, 430]], size: 150, from: 0.3 },
          { kind: 'arrow', path: [[430, 430], [610, 430]], color: '#2e7d32', text: '三亚沼泽突破', from: 1.4 },
          { kind: 'shape', shape: 'circle', at: [790, 430], size: [200, 200], color: '#d8f3dc', text: '野生败育稻', motion: 'pulse', from: 2.2 },
          { kind: 'text', at: [600, 730], text: '三系配套成功，多养活数千万人', from: 4.6 },
        ],
      },
      {
        turn: 4, title: '为啥明年不留种', duration: 9,
        cues: [
          { kind: 'myth', wrong: '杂交稻收获后留谷子明年种还高产', right: '子二代会性状分离减产，需年年买新种', from: 0.6 },
          { kind: 'shape', shape: 'pill', at: [340, 390], size: [90, 200], color: '#51cf66', text: '高', from: 1.8 },
          { kind: 'shape', shape: 'pill', at: [480, 440], size: [90, 100], color: '#ffd43b', text: '矮', from: 2.2 },
          { kind: 'shape', shape: 'pill', at: [620, 405], size: [90, 170], color: '#8ce09b', text: '早', from: 2.6 },
          { kind: 'shape', shape: 'pill', at: [760, 430], size: [90, 120], color: '#ffa8a8', text: '晚', from: 3.0 },
          { kind: 'label', at: [890, 420], pos: [980, 300], text: '孟德尔分离定律', from: 3.6 },
        ],
      },
    ],
  },
};
