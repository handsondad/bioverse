import type { Story } from './types';

export const bacteriaVsVirus: Story = {
  slug: 'bacteria-vs-virus',
  title: '细菌和病毒有什么不一样？为什么普通感冒吃抗生素没用？',
  trigger: '小念鼻塞流鼻涕去医院，医生查完说是普通病毒感冒，特意交代不要吃阿莫西林之类的抗生素，小念听得一头雾水。',
  dialogue: [
    {
      nian: '爸爸，细菌和病毒都看不见，也会让人生病，它们不是同一种小虫子吗？',
      dad: '它们差别大得就像“一辆完整的小汽车”和“一张 U 盘”！细菌是一个完整的单细胞生物，有细胞壁、细胞膜，能自己吃营养、自己分裂；而病毒小得多，连细胞都没有，只是一层蛋白质外壳包着一段遗传密码！',
      figure: { kind: 'sim', sim: 'germVsVirus', caption: '切换细菌和感冒病毒，再拨动抗生素开关，看看抗生素到底打得着谁。' },
    },
    {
      nian: '病毒连细胞都没有，不会自己吃饭也不会自己分裂，那它在身体里怎么越变越多？',
      dad: '它是个狡猾的“工厂劫匪”！病毒飘在空气里或桌面上时像一粒死尘埃，可一旦钻进我们的活细胞里，就立刻把自己的遗传密码塞进细胞车间，逼着细胞停下本职工作，帮它疯狂复印成千上万个新病毒！',
      show: { kind: 'steps', frames: [{ icon: '🦠', label: '细菌：独立单细胞' }, { icon: '🧬', label: '病毒：壳+密码无细胞' }, { icon: '🏭', label: '病毒借活细胞复制' }] },
    },
    {
      nian: '病毒钻进活细胞疯狂复印，怪不得医生说感冒吃抗生素没用！抗生素是专门对付细菌的吗？',
      dad: '答对了！比如青霉素、头孢这类抗生素，专门攻击细菌特有的细胞壁或细菌的制造机器，让细菌破壳瓦解。可病毒压根没有细胞壁，也不靠自己的机器干活，抗生素冲进去连靶子都找不到，吃了白吃！',
    },
    {
      nian: '既然吃抗生素打不着感冒病毒，那医生为什么还不让随便“吃两颗预防一下”？',
      dad: '因为乱吃抗生素有两个大坏处：第一会误伤肚子里帮我们消化的有益细菌；第二，没被彻底杀光的坏细菌如果正好有变异能扛住药，就会幸存下来变成不怕药的“耐药超级细菌”，以后真得细菌感染时药就不灵了！',
    },
    {
      nian: '那得了普通病毒感冒不用抗生素，身体是怎么自己好起来的？',
      dad: '全靠我们自己的免疫系统！多喝温水、好好睡觉、别剧烈运动，把力气省下来给免疫细胞造抗体，一般五到七天免疫卫士就能把感冒病毒清干净。只有医生查出合并细菌感染时，才需要按疗程吃抗生素。',
    },
    {
      nian: '我懂了！细菌是有细胞结构的完整单细胞，病毒没有细胞结构、必须钻进活细胞复制；抗生素只打细菌的靶子，对病毒感冒没用，乱吃还会伤好菌、养出耐药菌，吃药一定要听医生的！',
      dad: '讲得比好多大人都明白！平时饭前便后认真洗手、咳嗽打喷嚏用手肘遮住口鼻，就是把细菌和病毒挡在门外最管用的好习惯。',
    },
  ],
  tip: '世界卫生组织（WHO）将抗生素耐药性列为全球重大公共卫生威胁之一。切记“消炎药”不等同于抗生素，普通病毒性上呼吸道感染无需使用抗菌药物；一旦医生确诊细菌感染并开具抗生素，应按医嘱足量足疗程服用，不要症状稍轻就擅自停药。',
  sources: [
    { title: '生物学 八年级上册 · 第五单元 第四章 细菌；第五章 病毒', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Antimicrobial resistance（抗菌药物耐药性核心事实）', by: 'World Health Organization (WHO)', url: 'https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '大小结构差很远', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [350, 440], size: [320, 170], color: '#d9f2dc', text: '细菌：有细胞壁', from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [860, 440], size: [150, 150], color: '#efe5ff', text: '病毒：无细胞', from: 1.0 },
          { kind: 'label', at: [350, 350], pos: [350, 210], text: '能独立吃营养繁殖', from: 1.8 },
          { kind: 'label', at: [860, 360], pos: [860, 210], text: '只是壳包遗传密码', from: 2.6 },
          { kind: 'text', at: [600, 760], text: '细菌是完整细胞，病毒不是', from: 4.5 },
        ],
      },
      {
        turn: 1, title: '病毒劫持活细胞', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [660, 450], size: [340, 240], color: '#edf5ff', text: '活细胞车间', from: 0.2 },
          { kind: 'atom', path: [[240, 450], [540, 450]], symbol: '病毒', color: '#7c52b8', r: 42, travel: 2.5, from: 0.8 },
          { kind: 'particles', box: [540, 360, 240, 180], count: 12, color: '#9775fa', motion: 'jitter', size: 12, amount: { at: 3.4, over: 2.5, from: 1, to: 12 }, from: 3.2 },
          { kind: 'text', at: [600, 760], text: '借别人细胞疯狂复印自己', from: 5.0 },
        ],
      },
      {
        turn: 2, title: '抗生素找不到靶子', duration: 10,
        cues: [
          { kind: 'shape', shape: 'pill', at: [340, 430], size: [260, 140], color: '#d9f2dc', text: '细菌细胞壁', from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [860, 430], size: [150, 150], color: '#efe5ff', text: '病毒无壁', from: 0.5 },
          { kind: 'arrow', path: [[340, 250], [340, 350]], color: '#2e7d32', text: '抗生素击破', from: 1.6 },
          { kind: 'arrow', path: [[860, 250], [1020, 340]], color: '#e8590c', text: '擦身滑走', from: 2.2 },
          { kind: 'myth', wrong: '感冒吃抗生素好得更快', right: '抗生素只杀细菌，对病毒无效', from: 4.5 },
        ],
      },
      {
        turn: 3, title: '乱吃药养出耐药菌', duration: 9,
        cues: [
          { kind: 'particles', box: [240, 320, 300, 220], count: 10, color: '#8ce09b', motion: 'jitter', size: 14, amount: { at: 1.2, over: 2.5, from: 10, to: 2 }, from: 0.2 },
          { kind: 'atom', path: [[820, 430]], symbol: '耐药', color: '#e5484d', r: 58, motion: 'pulse', from: 2.8 },
          { kind: 'arrow', path: [[560, 430], [740, 430]], color: '#e8590c', text: '剩最抗药的', from: 2.0 },
          { kind: 'text', at: [600, 760], text: '按医嘱用药，保护救命药', from: 4.5 },
        ],
      },
      {
        turn: 4, title: '靠自己免疫好起来', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🛌', path: [[340, 420]], size: 150, from: 0.2 },
          { kind: 'label', at: [340, 370], pos: [340, 220], text: '喝水睡觉省力气', from: 0.8 },
          { kind: 'shape', shape: 'circle', at: [840, 430], size: [200, 200], color: '#d3f9d8', text: '免疫细胞', motion: 'pulse', from: 1.8 },
          { kind: 'sprite', icon: '🦠', path: [[1080, 430], [940, 430]], size: 60, travel: 2, from: 2.4, to: 5.2 },
          { kind: 'count', at: [600, 640], label: '康复约', start: 0, end: 7, unit: '天', over: 3, from: 3.0 },
          { kind: 'text', at: [600, 800], text: '合并细菌感染才用抗生素', from: 5.4 },
        ],
      },
    ],
  },
};
