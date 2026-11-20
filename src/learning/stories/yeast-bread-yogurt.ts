import type { Story } from './types';

export const yeastBreadYogurt: Story = {
  slug: 'yeast-bread-yogurt',
  title: '面团发起来全是小洞、牛奶变酸奶，都是谁在偷偷干活？',
  trigger: '周末在家蒸馒头，小念看见奶奶揉好的硬面团盖上保鲜膜放了两小时，竟然鼓得像大胖娃娃，蒸熟掰开全是松软的小气孔！',
  dialogue: [
    {
      nian: '爸爸，面团里没有打气筒，放一会儿怎么自己鼓得这么大、还全是小洞洞？',
      dad: '那是奶奶撒进去的一小撮“小小面包师”——酵母菌在干活！酵母菌是肉眼看不见的单细胞真菌，它吃掉面粉里的糖，呼吸吐出许许多多二氧化碳气泡。气泡被有弹性的面筋网兜住，面团就被撑得又胖又松软啦！',
      eq: '面粉里的糖 —[酵母菌]→ 二氧化碳气泡（撑出气孔）',
      figure: { kind: 'sim', sim: 'yeastDough', caption: '拖动发面温度，看看温度太冷、刚好和太烫时酵母菌发面的区别。' },
    },
    {
      nian: '怪不得奶奶发面一定要用温水，不能用滚烫的开水！是怕把酵母菌烫死吗？',
      dad: '猜得一点不错！酵母菌是活生生的小生命，30 ℃ 左右的温暖环境最舒服，产气最快；冬天放冰箱冷得它懒洋洋不动，要是倒进 60 ℃ 以上的热水，里面的酶全烫坏、酵母菌死光，面就彻底发不起来了！',
    },
    {
      nian: '那我们喝的酸奶，本来是稀稀的鲜牛奶，怎么一晚上就变成酸酸稠稠的了？也是酵母菌做的吗？',
      dad: '这回换了一位小厨师——乳酸菌！乳酸菌是一种有益细菌，专门把牛奶里的乳糖分解成乳酸。牛奶一变酸，里面的蛋白质就抱团凝结成滑溜溜的酸奶，而且乳酸菌干活时不怎么产气，所以酸奶不会像面团一样全是洞！',
      show: { kind: 'steps', frames: [{ icon: '🍞', label: '酵母菌产 CO₂ 发面' }, { icon: '🥛', label: '乳酸菌产酸做酸奶' }, { icon: '🫙', label: '酱油醋也靠发酵' }] },
    },
    {
      nian: '酸奶里活着的乳酸菌能喝进肚子，那吃蒸熟的馒头时，会不会也吃进好多活酵母菌？',
      dad: '哈哈，上锅一蒸 100 ℃，酵母菌早就完成使命“光荣退休”了，留给你的只是松软的气孔和一点点优质蛋白质；倒是喝低温冷藏的活菌酸奶时，真的会喝进许多活着的乳酸菌好朋友哦！',
    },
    {
      nian: '酸奶里的乳酸菌是好朋友，可剩饭放桌上两天长出绿毛发臭了，那也是发酵吗？',
      dad: '那是腐败变质！不同微生物干的活不一样：酵母菌、乳酸菌这类对人有益的转化叫发酵，能做面包、酸奶、酱油和食醋；而空气里落下来的杂菌和霉菌乱长，会造出让肚子疼甚至有毒的物质，发霉食物绝对不能吃！',
    },
    {
      nian: '我懂了！面团松软靠单细胞真菌酵母菌吐出二氧化碳，酸奶浓稠靠细菌乳酸菌把乳糖变成乳酸，它们都需要合适温度；有益的微生物帮我们发酵做美食，发霉长杂菌的食物可不能吃。',
      dad: '说得太清楚了！微生物不全是坏蛋，人类几千年前就学会和酵母菌、乳酸菌交朋友，把普通粮食和牛奶变成了满桌美味。',
    },
  ],
  tip: '发酵食品是孩子认识微生物最亲切的窗口。可以和孩子用温水 + 少量白糖 + 干酵母装进小塑料瓶，瓶口套一个气球，20 分钟就能亲眼看见酵母菌产出的二氧化碳把气球吹鼓；注意切勿食用发霉变质食品。',
  sources: [
    { title: '生物学 八年级上册 · 第五单元 第四章 第5节 人类对细菌和真菌的利用', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Fermentation and Food Science（食品发酵科学简介）', by: 'USDA Food Safety and Inspection Service', url: 'https://www.fsis.usda.gov/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '酵母菌吹出小气孔', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [600, 480], size: [340, 220], color: '#fff3d1', motion: 'grow', over: 3.5, text: '面团变胖', from: 0.2 },
          { kind: 'particles', box: [460, 390, 280, 160], count: 14, color: '#4dabf7', motion: 'rise', size: 10, from: 1.0 },
          { kind: 'label', at: [600, 370], pos: [880, 230], text: '酵母菌吐 CO₂ 气泡', from: 1.8 },
          { kind: 'text', at: [600, 770], text: '气泡被面筋兜住，馒头就松软', from: 4.5 },
        ],
      },
      {
        turn: 1, title: '温水最合酵母心意', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [260, 440], size: [220, 170], color: '#e7f5ff', text: '太冷：不动', from: 0.3 },
          { kind: 'shape', shape: 'rect', at: [600, 440], size: [240, 190], color: '#d9f2dc', text: '32℃：最欢', motion: 'pulse', from: 1.2 },
          { kind: 'shape', shape: 'rect', at: [940, 440], size: [220, 170], color: '#fbeae7', text: '开水：烫死', from: 2.1 },
          { kind: 'text', at: [600, 750], text: '发面要用温水，别用开水烫', from: 4.2 },
        ],
      },
      {
        turn: 2, title: '乳酸菌把奶变酸奶', duration: 9,
        cues: [
          { kind: 'vessel', vessel: 'beaker', at: [360, 450], size: [190, 230], liquid: '#fffdf5', level: 0.72, label: '鲜牛奶', from: 0.2 },
          { kind: 'arrow', path: [[490, 450], [710, 450]], color: '#2e7d32', text: '乳酸菌产乳酸', from: 1.5 },
          { kind: 'vessel', vessel: 'beaker', at: [840, 450], size: [190, 230], liquid: '#fff4d6', level: 0.72, label: '浓稠酸奶', from: 2.5 },
          { kind: 'text', at: [600, 770], text: '乳酸让牛奶蛋白凝成酸奶', from: 4.5 },
        ],
      },
      {
        turn: 3, title: '蒸熟酵母已退休', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🍞', path: [[340, 430]], size: 150, from: 0.2 },
          { kind: 'count', at: [340, 640], label: '蒸锅温度', start: 30, end: 100, unit: '℃', over: 3, from: 0.8 },
          { kind: 'label', at: [340, 380], pos: [340, 230], text: '酵母早被蒸熟', from: 3.0 },
          { kind: 'sprite', icon: '🥛', path: [[860, 430]], size: 140, from: 3.6 },
          { kind: 'label', at: [860, 380], pos: [860, 230], text: '冷藏酸奶有活菌', from: 4.2 },
          { kind: 'text', at: [600, 800], text: '馒头只留下松软气孔', from: 5.4 },
        ],
      },
      {
        turn: 4, title: '分清发酵与发霉', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [340, 420], size: [300, 130], color: '#d9f2dc', text: '好菌发酵：美味', from: 0.3 },
          { kind: 'shape', shape: 'pill', at: [860, 420], size: [300, 130], color: '#fbeae7', text: '杂菌发霉：有害', from: 1.3 },
          { kind: 'myth', wrong: '所有微生物都是害人的病菌', right: '酵母和乳酸菌是厨房好帮手', from: 3.8 },
        ],
      },
    ],
  },
};
