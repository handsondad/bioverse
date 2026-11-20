import type { Story } from './types';

export const enzymeStep: Story = {
  slug: 'enzyme-step',
  title: '酶放进冰水里还能醒过来，放进沸水里为什么就救不回来了？',
  trigger: '妈妈买回加酶洗衣粉，叮嘱爸爸用温水洗别用开水烫；发烧时医生也说体温太高会伤身体里的酶，小念特别好奇为什么酶这么怕烫。',
  dialogue: [
    {
      nian: '爸爸，酶明明不是活的小虫子，为什么放进开水里就会“死掉”，放进冰水里却不会？',
      dad: '因为绝大多数酶是折叠得特别精巧的蛋白质，表面留着一个形状刚刚好的小凹槽，专门用来卡住要切的东西。它最喜欢 37 ℃ 左右的温水环境，太冷或太热干活都会慢下来。',
      show: { kind: 'lab', step: 1, label: '看「温度」' },
      figure: { kind: 'sim', sim: 'enzymeTemp', caption: '左右拖动温度滑块，看酶活性曲线和右边蛋白质凹槽的变化。' },
    },
    {
      nian: '太冷的时候凹槽没有坏，那它为什么几乎不干活了？',
      dad: '低温只是让周围的水分子和底物都冻得慢吞吞，很难撞进酶的凹槽里，像冬天大家缩在被窝里打盹一样。但酶的精巧凹槽完好无损，只要放回 37 ℃ 温水里，它立刻满血复活！',
      show: { kind: 'lab', step: 4, label: '看「低温可恢复」' },
    },
    {
      nian: '那高温放进沸水里，怎么放回温水也醒不过来了？',
      dad: '高温把维持蛋白质立体折叠的微弱拉链全震断了，那个精巧凹槽当场塌陷变形！就像生鸡蛋煮熟后蛋白变白变硬，放回冰箱也变不回生鸡蛋——结构坏了，酶就永久失活了。',
      eq: '低温 → 活性低、结构完好（可恢复）；高温 → 结构破坏（永久失活）',
      show: { kind: 'lab', step: 3, label: '看「高温不可逆」' },
    },
    {
      nian: '除了怕太烫，还有什么东西会把酶的凹槽破坏掉？',
      dad: '太酸或者太碱也会！每种酶都有自己最舒服的酸碱度，比如嘴里的淀粉酶喜欢中性，胃里的胃蛋白酶喜欢强酸。一旦泡进过酸或过碱的液体里，凹槽同样会变形塌掉、永久失活。',
      show: { kind: 'lab', step: 6, label: '看「过酸过碱」' },
    },
    {
      nian: '温度和酸碱度都会影响酶，那发高烧到四十度时人浑身没劲，是不是体内的酶在闹脾气？',
      dad: '你说对啦！我们全身每时每刻有几千种酶在同时干活，管呼吸、消化和思考。温度飙得太高，酶的活性掉下来，细胞运转就乱套了；冰箱冷藏能保鲜食物和药品，也是靠低温让酶暂时“打盹”。',
    },
    {
      nian: '我懂了！酶靠精巧的蛋白质凹槽干活，低温只是让它动得慢、凹槽完好，回温还能醒过来；高温、过酸或过碱会把凹槽彻底弄塌，导致永久失活，所以加酶洗衣粉不能用开水泡。',
      dad: '一点就通！去 3D 实验台里，你还可以亲手把淀粉酶泡过 90 ℃ 和 0 ℃ 后再放回 37 ℃，看看放大窗里的凹槽到底长啥样。',
    },
  ],
  tip: '本课配有「影响酶活性的条件」3D 实验台，可以点页首按钮进入，亲手调节水浴温度与 pH，直观看到高温塌陷与低温可恢复的微观区别。生活中加酶洗衣粉建议用 30–40 ℃ 温水溶解，切勿用沸水。',
  sources: [
    { title: '生物学 必修1 分子与细胞 · 第5章 第1节 降低化学反应活化能的酶', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: '3D 生物实验课件：影响酶活性的条件（CC BY-NC 4.0）', by: '铜匠十点睡觉', url: 'https://lab.tongjiang.app' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '最挑温度的小工人', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [600, 440], size: [230, 180], color: '#8ce09b', text: '酶凹槽', motion: 'pulse', from: 0.2 },
          { kind: 'atom', path: [[280, 440], [560, 440]], symbol: '底物', color: '#ffd43b', r: 42, travel: 2.5, from: 0.8 },
          { kind: 'count', at: [920, 320], label: '最适体温', start: 20, end: 37, unit: '℃', over: 2.5, from: 1.5 },
          { kind: 'meter', at: [920, 520], label: '酶活性', start: 0.2, end: 1.0, color: '#2e7d32', from: 1.8 },
          { kind: 'text', at: [600, 760], text: '37℃ 形状稳、干活最快', from: 4.5 },
        ],
      },
      {
        turn: 1, title: '冰水里只是打盹', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [420, 440], size: [210, 160], color: '#a5d8ff', text: '0 ℃ 酶', from: 0.2 },
          { kind: 'arrow', path: [[550, 440], [720, 440]], color: '#2e7d32', text: '回到 37 ℃', from: 2.2 },
          { kind: 'shape', shape: 'circle', at: [860, 440], size: [210, 160], color: '#8ce09b', text: '满血复活', motion: 'pulse', from: 3.2 },
          { kind: 'text', at: [600, 760], text: '低温凹槽完好，回温立刻恢复', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '沸水烫塌凹槽', duration: 10,
        cues: [
          { kind: 'shape', shape: 'circle', at: [420, 440], size: [210, 160], color: '#8ce09b', tint: { color: '#adb5bd', at: 1.5, over: 2.0 }, motion: 'shrink', over: 2.5, text: '90 ℃ 塌陷', from: 0.2 },
          { kind: 'arrow', path: [[550, 440], [720, 440]], color: '#e8590c', text: '放回 37 ℃', from: 3.0 },
          { kind: 'shape', shape: 'pill', at: [860, 440], size: [220, 100], color: '#ced4da', text: '活性 0%', from: 4.0 },
          { kind: 'myth', wrong: '放凉了酶就能变回原样', right: '像煮熟的鸡蛋，永久失活', from: 5.0 },
        ],
      },
      {
        turn: 3, title: '过酸过碱也失活', duration: 9,
        cues: [
          { kind: 'vessel', vessel: 'beaker', at: [340, 450], size: [180, 220], liquid: '#ff8787', level: 0.7, label: '过酸 pH 2', from: 0.3 },
          { kind: 'vessel', vessel: 'beaker', at: [600, 450], size: [180, 220], liquid: '#8ce09b', level: 0.7, label: '最适 pH 7', from: 0.9 },
          { kind: 'vessel', vessel: 'beaker', at: [860, 450], size: [180, 220], liquid: '#9775fa', level: 0.7, label: '过碱 pH 12', from: 1.5 },
          { kind: 'text', at: [600, 770], text: '过酸过碱同样破坏空间结构', from: 4.0 },
        ],
      },
      {
        turn: 4, title: '发高烧酶也罢工', duration: 9,
        cues: [
          { kind: 'count', at: [360, 380], label: '体温', start: 37, end: 40, unit: '℃', over: 3, from: 0.4 },
          { kind: 'meter', at: [360, 580], label: '酶活性', start: 1, end: 0.55, color: '#e8590c', from: 1.6 },
          { kind: 'shape', shape: 'rect', at: [840, 440], size: [240, 260], color: '#d0ebff', text: '冰箱', from: 3.2 },
          { kind: 'label', at: [840, 360], pos: [840, 230], text: '低温让酶打盹保鲜', from: 3.8 },
          { kind: 'text', at: [600, 790], text: '几千种酶都怕体温乱跳', from: 5.4 },
        ],
      },
    ],
  },
};
