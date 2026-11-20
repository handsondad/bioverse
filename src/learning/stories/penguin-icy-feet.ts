import type { Story } from './types';

export const penguinIcyFeet: Story = {
  slug: 'penguin-icy-feet',
  title: '企鹅光着脚丫天天踩在南极冰面上，脚掌为什么不会冻成冰块？',
  trigger: '看南极纪录片时，暴风雪里帝企鹅浑身裹着厚羽毛像穿了羽绒服，唯独一双大脚丫光溜溜直接踩在冰面上，看得小念直缩脚趾头。',
  dialogue: [
    {
      nian: '爸爸，南极零下好几十摄氏度，企鹅光着脚丫踩冰，难道是因为它脚掌里的血液特别滚烫才冻不坏吗？',
      dad: '恰恰相反！要是企鹅脚掌也像它肚子里面一样高达三十九摄氏度，麻烦就大了：第一，全身宝贵的热量会顺着热脚掌飞快漏给冰面，企鹅一会儿就冻死；第二，热脚掌把脚底的冰融化成水，一停步又结成冰，直接把脚丫子死死冻粘在冰面上了！',
      figure: {
        kind: 'image',
        src: '/images/photos/emperor-penguins.webp',
        alt: '站在南极冰雪地面上的帝企鹅群体照片',
        caption: '南极冰原上的帝企鹅：躯干裹在致密防水羽毛和厚脂肪下，裸露的脚掌却稳稳踩着寒冰。',
        credit: 'NSF / Josh Landis · 公有领域',
        href: 'https://commons.wikimedia.org/wiki/File:Emperor_penguins.jpg',
      },
    },
    {
      nian: '天哪，脚太热反而会漏光热量粘在冰上！那企鹅真实的脚掌到底是多少摄氏度呀？',
      dad: '科学家测出来吓一跳：企鹅羽毛底下的核心体温稳稳保持在三十九摄氏度左右，可它光溜溜的脚掌温度竟然只有一到四摄氏度——刚好比零摄氏度结冰点高那么一丁点！这样脚里面的细胞既不会结冰冻死，跟冰面温差又小，几乎不漏热。',
      figure: {
        kind: 'scale',
        caption: '帝企鹅从温暖躯干到冰面脚掌的精妙温度阶梯。',
        axis: '企鹅身体从上到下的温度分布',
        stops: [
          { label: '羽毛躯干', note: '恒温约 39 ℃', color: '#ffc9c9' },
          { label: '小腿中段', note: '血管交接降温', color: '#ffe8cc' },
          { label: '裸露脚掌', note: '控在 1~4 ℃', color: '#d0ebff', hot: true },
          { label: '南极冰面', note: '零下几十摄氏度', color: '#e7f5ff' },
        ],
      },
    },
    {
      nian: '同一只企鹅，怎么做到肚子三十九摄氏度、脚掌却只有几摄氏度的？血液不都是通着的吗？',
      dad: '绝招全藏在企鹅小腿里的“逆流热交换血管网”！往脚底送血的热动脉，和从脚底回身体的冷静脉，在小腿里紧紧缠绕贴在一起。热血往下走时，顺手就把热量传给了隔壁往上回流的冷血——结果血到脚底时已经变凉，回肚子的血又提前暖热了！',
      figure: { kind: 'sim', sim: 'penguinFeet', caption: '切换分开走的普通血管与紧贴缠绕的逆流热交换血管网，对比脚掌温度和散失热量。' },
    },
    {
      nian: '逆流热交换太聪明了，肥水不流外人田！可我们的手冻到四摄氏度早就僵硬动不了了，企鹅的脚怎么还能走路？',
      dad: '因为企鹅脚掌里几乎没有怕冷的肌肉块！控制它脚趾抓冰、走路的肌肉全藏在上面暖和的羽毛裤腿里，只伸下一根根结实的肌腱和韧带通到脚趾，就像提线木偶的拉线一样——上面的暖肌肉一拉线，下面的冷脚丫照样灵活迈步！',
    },
    {
      nian: '靠肌腱拉线控制冷脚丫，简直像机器人设计！要是暴风雪实在太冷，或者夏天企鹅跑太热了怎么办？',
      dad: '极寒暴风雪里，企鹅会把脚尖翘起来只用脚后跟和尾巴尖垫着，变成“三脚架”把接触冰面的面积减到最小；反过来如果刚游完泳或天气变暖身体太热，它还能主动扩张脚掌和翅膀内侧血管，把脚掌变成散热片凉快一下呢！',
    },
    {
      nian: '我懂了！企鹅脚掌并不是滚烫的，而是靠小腿里动静脉紧贴的逆流热交换网把热量留在躯干，让脚掌稳在略高于零摄氏度的一到四摄氏度，再靠上方暖肌肉拉动肌腱灵活走路。',
      dad: '完美！冬天公园冰湖上站着的野鸭、天鹅和海鸥不冻脚，腿里装的也是这套一模一样的逆流热交换神器哦。',
    },
  ],
  tip: '人类双脚没有企鹅那样的逆流热交换网，也没有厚羽毛保护，冬季长时间踩雪或鞋袜湿透极易发生冻疮甚至冻伤。冬天带孩子玩雪时，务必穿防水保暖雪地靴，一旦袜子被雪水浸湿要及时进屋更换擦干。',
  sources: [
    { title: '生物学 八年级上册 · 第六节 鸟（恒温动物）；高中生物 选择性必修1 · 体温调节', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Ways animals survive the cold（极地动物抗寒机制与企鹅逆流热交换）', by: 'Natural History Museum, London', url: 'https://www.nhm.ac.uk/discover/ways-animals-survive-cold.html' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '脚太热反而坏事', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🐧', path: [[360, 410]], size: 160, from: 0.2 },
          { kind: 'shape', shape: 'rect', at: [360, 560], size: [340, 56], color: '#d0ebff', text: '南极冰面', from: 0.5 },
          { kind: 'label', at: [530, 480], pos: [830, 360], text: '若脚39℃会狂漏全身热', color: '#e8590c', from: 1.8 },
          { kind: 'myth', wrong: '企鹅靠39℃滚烫脚掌抗冻', right: '脚太热会漏光热量还化冰冻粘脚', from: 4.0 },
        ],
      },
      {
        turn: 1, title: '上暖下凉控冰点', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [380, 350], size: [260, 110], color: '#ffa8a8', text: '躯干 39℃', from: 0.3 },
          { kind: 'arrow', path: [[380, 420], [380, 500]], color: '#3b6ea5', text: '逐级降温', from: 1.4 },
          { kind: 'shape', shape: 'pill', at: [380, 550], size: [260, 90], color: '#99e9f2', text: '脚掌 1~4℃', from: 2.2 },
          { kind: 'label', at: [520, 550], pos: [840, 480], text: '略高于0℃省热防冻', color: '#2e7d32', from: 3.4 },
          { kind: 'text', at: [600, 740], text: '卡在结冰线之上一点点最省能量', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '血管贴身交接热', duration: 9,
        cues: [
          { kind: 'flow', path: [[480, 260], [480, 600]], color: '#e03131', count: 7, speed: 0.45, from: 0.3 },
          { kind: 'flow', path: [[660, 600], [660, 260]], color: '#3b6ea5', count: 7, speed: 0.45, from: 0.6 },
          { kind: 'arrow', path: [[500, 360], [640, 360]], color: '#ff922b', text: '传热', from: 1.6 },
          { kind: 'arrow', path: [[500, 480], [640, 480]], color: '#ff922b', text: '传热', from: 2.2 },
          { kind: 'label', at: [660, 300], pos: [920, 300], text: '回流冷血提前暖回36℃', from: 3.4 },
          { kind: 'text', at: [600, 740], text: '逆流热交换把热量锁在躯干里', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '暖肌肉远程拉线', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [600, 320], size: [240, 100], color: '#ffa8a8', text: '腿上暖肌肉', motion: 'pulse', from: 0.4 },
          { kind: 'arrow', path: [[600, 380], [600, 540]], color: '#8c6239', text: '长肌腱牵拉', from: 1.5 },
          { kind: 'shape', shape: 'pill', at: [600, 590], size: [240, 76], color: '#ffd8a8', text: '冷脚趾迈步', motion: 'wiggle', from: 2.4 },
          { kind: 'text', at: [600, 740], text: '像提线木偶，不怕脚底低温', from: 4.6 },
        ],
      },
      {
        turn: 4, title: '翘脚尖与水鸟同款', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🐧', path: [[360, 440]], size: 150, from: 0.3 },
          { kind: 'label', at: [360, 540], pos: [360, 630], text: '翘起脚掌靠脚跟尾巴站', from: 1.5 },
          { kind: 'sprite', icon: '🦆', path: [[840, 440]], size: 140, from: 1.0 },
          { kind: 'label', at: [840, 540], pos: [840, 630], text: '野鸭海鸥也是同款血管网', from: 2.6 },
          { kind: 'text', at: [600, 750], text: '极地与冬日水鸟都靠这套神网', from: 4.8 },
        ],
      },
    ],
  },
};
