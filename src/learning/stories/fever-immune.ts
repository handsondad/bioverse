import type { Story } from './types';

export const feverImmune: Story = {
  slug: 'fever-immune',
  title: '感冒时为什么会发烧、起痰？是身体坏了还是在打仗？',
  trigger: '小念着凉感冒了，额头烫到 38.5 ℃ 还老想咳痰，皱着眉头问爸爸：是不是我的体温开关坏掉了？',
  dialogue: [
    {
      nian: '爸爸，我额头烫得像小暖炉，是不是感冒把我的体温开关弄坏了？',
      dad: '恰恰相反，是你的大脑体温中枢故意把“房间暖气”调高了一两度！很多感冒病毒和病菌最喜欢 37 ℃，温度一升高到 38 ℃ 多，它们繁殖就变慢，而身体里的免疫卫士反而跑得更快、战斗力更强！',
      figure: { kind: 'sim', sim: 'feverBattle', caption: '拖动身体温度，观察病菌繁殖速度和免疫细胞战斗力的变化。' },
    },
    {
      nian: '免疫卫士是怎么发现病毒闯进来的？平时它们都在哪儿巡逻？',
      dad: '我们的身体有三道防线！第一道是皮肤和鼻腔黏膜，像城墙把大多数病菌挡在外面；万一钻进来，第二道吞噬细胞马上冲上去一口吞掉；要是敌人太多，第三道专门的淋巴细胞就出动，造出精准锁死敌人的“导弹”——抗体！',
      show: { kind: 'steps', frames: [{ icon: '🧱', label: '第一道：皮肤黏膜' }, { icon: '🛡️', label: '第二道：吞噬细胞' }, { icon: '🎯', label: '第三道：精准抗体' }] },
    },
    {
      nian: '那我嗓子里总有黏糊糊的痰，也是吞噬细胞打仗留下的吗？',
      dad: '猜得真准！气管里的黏液先粘住入侵的灰尘和病菌，吞噬细胞赶来和它们拼个同归于尽，打完仗剩下的黏液、死掉的病菌和白细胞混在一起，被气管小纤毛一点点扫上来，就是你咳出来的痰！',
    },
    {
      nian: '既然发烧是在帮着赶跑病菌，那是不是烧得越高、越不用管它越好？',
      dad: '绝对不行！刚才讲过，人体细胞里的酶最适合 37 ℃ 左右。如果烧到 39.5 ℃ 以上或者高烧不退，连自己的大脑和身体里的酶都会吃不消，孩子会极不舒服甚至有风险，必须及时休息、多喝温水、遵医嘱降温就医！',
    },
    {
      nian: '那打完仗病好了以后，下次同一个病毒再来，身体还认得它吗？',
      dad: '认得！第三道防线的免疫细胞里有一批“记忆细胞”，会把敌人的长相记在档案里。下次同样的敌人敢再来，它们几小时就能造出大批抗体把敌人秒杀——打疫苗就是提前给记忆细胞看“通缉令”的道理！',
    },
    {
      nian: '我懂了！感冒发烧不是身体坏了，而是大脑主动调高体温帮三道免疫防线打仗，痰是打完仗扫出来的战场垃圾；但高烧太久会伤身体，要多喝水休息，必要时看医生。',
      dad: '说得真棒！平时勤洗手、多睡眠、按时接种疫苗，就是在帮体内的免疫卫士添装备呢。',
    },
  ],
  tip: '适度发热是机体的免疫防御反应，但儿童持续高热、精神萎靡、呼吸急促或伴随抽搐等警示症状时必须及时就医，退烧药剂量需严格按体重遵医嘱或说明书使用，切勿捂汗或用酒精擦浴。',
  sources: [
    { title: '生物学 八年级下册 · 第八单元 第一章 传染病和免疫', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'How does the immune system work?（免疫系统如何工作）', by: 'InformedHealth.org (IQWiG / NCBI Bookshelf)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK279364/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '主动调高体温迎战', duration: 10,
        cues: [
          { kind: 'count', at: [340, 360], label: '体温上升', start: 37.0, end: 38.5, unit: '℃', over: 2.5, from: 0.4 },
          { kind: 'meter', at: [840, 300], label: '病菌繁殖', start: 0.9, end: 0.35, color: '#e5484d', from: 1.5 },
          { kind: 'meter', at: [840, 480], label: '免疫战力', start: 0.5, end: 0.95, color: '#2e7d32', from: 1.8 },
          { kind: 'myth', wrong: '发烧是体温开关坏掉了', right: '大脑主动升温帮免疫打仗', from: 4.5 },
        ],
      },
      {
        turn: 1, title: '身体三道防线', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [250, 440], size: [220, 210], color: '#fff4e0', text: '1 皮肤黏膜', from: 0.3 },
          { kind: 'shape', shape: 'rect', at: [600, 440], size: [220, 210], color: '#e7f5ff', text: '2 吞噬细胞', from: 1.3 },
          { kind: 'shape', shape: 'rect', at: [950, 440], size: [220, 210], color: '#d9f2dc', text: '3 精准抗体', from: 2.3 },
          { kind: 'text', at: [600, 750], text: '层层把关，联手清除入侵者', from: 4.5 },
        ],
      },
      {
        turn: 3, title: '高烧不能硬扛', duration: 9,
        cues: [
          { kind: 'count', at: [420, 440], label: '警惕高烧', start: 38.5, end: 40.0, unit: '℃', over: 2.5, from: 0.4 },
          { kind: 'pulse', at: [420, 440], color: '#e5484d', radius: 130, from: 2.0 },
          { kind: 'shape', shape: 'pill', at: [840, 440], size: [300, 120], color: '#fbeae7', text: '休息饮水就医', from: 2.8 },
          { kind: 'text', at: [600, 760], text: '过高体温会伤自己的细胞酶', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '记忆细胞与疫苗', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [380, 440], size: [220, 180], color: '#efe5ff', text: '记忆细胞', motion: 'pulse', from: 0.3 },
          { kind: 'arrow', path: [[510, 440], [710, 440]], color: '#2e7d32', text: '记住敌人样子', from: 1.6 },
          { kind: 'shape', shape: 'pill', at: [860, 440], size: [240, 120], color: '#d9f2dc', text: '下次秒速清敌', from: 2.6 },
          { kind: 'text', at: [600, 750], text: '打疫苗就是提前发“通缉令”', from: 4.6 },
        ],
      },
    ],
  },
};
