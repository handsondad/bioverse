import type { Story } from './types';

export const coralSymbiosisBleach: Story = {
  slug: 'coral-symbiosis-bleach',
  title: '海底五颜六色的珊瑚到底是植物还是动物？为什么海水热一点就全变白了？',
  trigger: '海洋馆纪录片里，原本像彩色小树林一样的珊瑚礁，在海水变暖后整片褪成了雪白色，小念急得问：“这些海底彩色植物全枯死了吗？”',
  dialogue: [
    {
      nian: '爸爸，海底那些像小鹿角、像花朵一样长着不动的珊瑚，难道不是海底植物或者彩色石头吗？',
      dad: '很多大人也认错呢！珊瑚既不是植物也不是普通石头，而是如假包换的“动物公寓”！你凑近放大看，珊瑚礁表面住着成千上万只芝麻大小、长着一圈小触手的“珊瑚虫”（和水母是刺胞动物亲戚）。它们一代接一代分泌碳酸钙搭起硬房子，长了几千年才垒出壮观的珊瑚礁！',
      figure: { kind: 'sim', sim: 'coralBleach', caption: '拖动夏季海水异常升温幅度（0~3℃），观察珊瑚虫体内的虫黄藻房客数量与珊瑚颜色的变化。' },
    },
    {
      nian: '珊瑚居然是小动物盖的公寓！那它身上粉的、绿的、紫的漂亮颜色是谁涂上去的？',
      dad: '珊瑚虫自己的身体其实是半透明的，底下的碳酸钙骨骼是雪白的！它那一身五彩斑斓的衣裳，全靠住进它细胞里的微小单细胞藻类房客——“虫黄藻”。珊瑚虫给虫黄藻提供安全住所和二氧化碳；虫黄藻每天借透进浅海的阳光做光合作用，把造出来的九成营养口粮直接交房租喂饱珊瑚虫！',
    },
    {
      nian: '动物房东包吃住、藻类房客交九成口粮，这配合太绝了！可为什么海水只热了一两摄氏度，珊瑚就全变白了？',
      dad: '因为这对黄金搭档对水温特别挑剔！一旦全球变暖让夏季海水比平时高出一到两摄氏度并持续好几周，过热和强光就会让虫黄藻的光合车间乱套，造出伤害细胞的活性氧自由基。珊瑚虫受不了有毒物质，只好含泪把虫黄藻房客大批赶出家门——没了彩色藻类，透明肉体底下雪白的石灰骨骼就露出来了，这就是“珊瑚白化”！',
      figure: {
        kind: 'image',
        src: '/images/photos/coral-bleaching-noaa.webp',
        alt: '2023年夏季海水热浪中发生严重白化露出雪白骨骼的石珊瑚水下实拍照片',
        caption: '海洋热浪下发生白化的脑珊瑚与石珊瑚：排出共生虫黄藻后褪去色彩，露出惨白的碳酸钙骨骼。',
        credit: 'NOAA · 公有领域',
        href: 'https://commons.wikimedia.org/wiki/File:Coral_bleaching_Florida_Keys_2023.jpg',
      },
    },
    {
      nian: '看着雪白一片好心疼！珊瑚一旦白化了，是不是代表珊瑚虫已经当场死掉救不活了？',
      dad: '还有救！刚白化的时候珊瑚虫其实还活着，只是失去了替它做饭的虫黄藻，正在忍饥挨饿、身体虚弱。如果海水能在几周内及时凉快下来，海里漂游的虫黄藻还能重新搬回珊瑚虫家里，珊瑚又能慢慢恢复彩色；可要是高温一直不退，珊瑚虫活活饿死，白骨架上长满灰暗杂藻，整片珊瑚礁就真塌了！',
    },
    {
      nian: '原来及时降温还能救回来！珊瑚礁在海里只占很小一块地方，为什么科学家那么拼命抢救它？',
      dad: '珊瑚礁虽然只占全球海底面积不到百分之一，却是名副其实的“海底热带雨林”——海洋里足足四分之一的鱼类、虾蟹和海龟都要靠珊瑚礁躲天敌、生宝宝！我们在陆地上随手关灯少排温室气体，去海边浮潜时绝不踩踏掰折珊瑚、选用对珊瑚友好的物理防晒衣，都是在替小丑鱼守住彩色家园！',
    },
    {
      nian: '我懂了！珊瑚是分泌石灰骨骼的刺胞动物，靠体内共生的虫黄藻获得美丽色彩和九成营养；海水持续升温迫使珊瑚排出虫黄藻露出白骨骼形成白化，唯有减排降温才能救回这片海底雨林。',
      dad: '说得既有科学又有爱心！地球上的陆地和海洋本来就是连在一起的大生命网，咱们今天节约的每一度电，海里的珊瑚都知道。',
    },
  ],
  tip: '由于体内虫黄藻需要充足阳光进行光合作用，造礁珊瑚大多只分布在阳光能照透的温暖清澈浅海（水深通常不超过 50 米）。带孩子去海岛旅游时，切勿购买野生红珊瑚或砗磲制品，浮潜时优先穿长袖防晒水母衣代替大量涂抹含羟苯甲酮的化学防晒霜，用行动保护脆弱的珊瑚礁生态。',
  sources: [
    { title: '生物学 八年级上册 · 刺胞动物；高中生物 选择性必修2 · 种间关系与全球性生态环境问题', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'What is coral bleaching? & Zooxanthellae Symbiosis（珊瑚与虫黄藻共生及白化机制）', by: 'NOAA National Ocean Service', url: 'https://oceanservice.noaa.gov/facts/coral_bleach.html' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '珊瑚其实是动物', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🪸', path: [[360, 440]], size: 160, from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [780, 440], size: [210, 210], color: '#ffa8a8', text: '珊瑚虫群', motion: 'pulse', from: 1.2 },
          { kind: 'label', at: [780, 330], pos: [820, 220], text: '长触手捕食+分泌白骨骼', from: 2.4 },
          { kind: 'myth', wrong: '海底珊瑚是会开花的彩色植物', right: '珊瑚是无数微小刺胞动物搭的公寓', from: 4.2 },
        ],
      },
      {
        turn: 1, title: '房东与虫黄藻房客', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [320, 440], size: [240, 120], color: '#ffd8a8', text: '珊瑚虫房东', from: 0.3 },
          { kind: 'arrow', path: [[460, 400], [680, 400]], color: '#3b6ea5', text: '给住处与碳', from: 1.3 },
          { kind: 'arrow', path: [[680, 480], [460, 480]], color: '#2e7d32', text: '交90%营养', from: 2.2 },
          { kind: 'shape', shape: 'pill', at: [840, 440], size: [240, 120], color: '#8ce09b', text: '虫黄藻房客', from: 0.8 },
          { kind: 'text', at: [600, 740], text: '虫黄藻既供粮又把珊瑚染成彩色', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '海水过热赶房客', duration: 9,
        cues: [
          { kind: 'count', at: [320, 390], label: '海水持续偏高', start: 0, end: 2, unit: '℃', over: 2.0, from: 0.4 },
          { kind: 'flow', path: [[680, 440], [960, 340]], color: '#82c91e', count: 7, speed: 0.5, from: 1.6 },
          { kind: 'shape', shape: 'rect', at: [640, 460], size: [220, 180], color: '#ff8787', tint: { color: '#f8f9fa', at: 2.0, over: 1.5 }, text: '露出白骨', outline: true, from: 0.8 },
          { kind: 'label', at: [800, 340], pos: [840, 220], text: '藻类受压产毒被排走', color: '#e8590c', from: 3.0 },
          { kind: 'text', at: [600, 740], text: '失去共生藻，整片珊瑚变惨白', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '白化不等于全死', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [360, 430], size: [260, 110], color: '#d0ebff', text: '及时降温可救', from: 0.4 },
          { kind: 'label', at: [360, 540], pos: [360, 620], text: '虫黄藻搬回重现生机', color: '#2e7d32', from: 1.6 },
          { kind: 'shape', shape: 'pill', at: [840, 430], size: [260, 110], color: '#ced4da', text: '长期高热饿死', from: 1.0 },
          { kind: 'label', at: [840, 540], pos: [840, 620], text: '礁体荒芜鱼群失家园', color: '#e8590c', from: 2.8 },
          { kind: 'text', at: [600, 750], text: '白化是珊瑚发出的求救信号！', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '守护海底热带雨林', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🐠', path: [[340, 440]], size: 140, from: 0.3 },
          { kind: 'count', at: [620, 430], label: '养育海洋生物', start: 0, end: 25, unit: '%', over: 2.0, from: 1.0 },
          { kind: 'sprite', icon: '🐢', path: [[900, 440]], size: 140, from: 1.6 },
          { kind: 'text', at: [600, 730], text: '减排护海，留住五彩海底花园', from: 4.6 },
        ],
      },
    ],
  },
};
