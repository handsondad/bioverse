import type { Story } from './types';

export const energyPyramidTiger: Story = {
  slug: 'energy-pyramid-tiger',
  title: '为什么一片大草原能养活几万只羊，却养不活几万只老虎？',
  trigger: '看野生动物纪录片时，草原上的羚羊和斑马成千上万望不到边，狮子老虎却走几十公里才见到一两只，小念觉得猛兽太孤单了。',
  dialogue: [
    {
      nian: '爸爸，老虎和狮子本领那么大谁也打不过它们，为什么一片草原能养活几万只羊，却养不活几万只老虎呢？',
      dad: '古人早就发现“一山不容二虎”了！不是老虎不想生更多宝宝，而是整座山林和草原算总账，根本供不起那么多老虎的饭量！在大自然的食物链里，越往顶端走，能分到的能量就越少，像一座下宽上尖的“能量金字塔”！',
      figure: { kind: 'sim', sim: 'energyPyramid', caption: '调节相邻营养级之间的能量传递效率（10%~20%），算算一万份青草能量最后能养活多少猛兽。' },
    },
    {
      nian: '为什么越往上分到的能量越少呀？羊把草吃进肚子里，草的能量不就全传给羊了吗？',
      dad: '哪有全传过去那么美的事！你想想：第一，草原上好多草根老叶羊根本没吃到，直接枯萎归了分解者；第二，羊吃进肚子的草有一部分没消化拉成了羊粪；最重要的是第三，羊每天跑跳、呼吸、维持体温，自己就把吸进去的大半能量变成热气散到空气里花光啦！',
    },
    {
      nian: '原来羊自己先花掉了大半！那留下来长成羊肉、能传给下一级老虎的能量还剩多少？',
      dad: '生态学家林德曼在湖泊里一笔笔算清了这本账：食物链每往上走一级，大约只有百分之十到百分之二十的能量能真正长成肉传给下一级！咱们按百分之十算算看：一万斤草的能量，传到羊身上只剩一千份，再从羊传到老虎身上——只剩可怜的一百份！',
      figure: {
        kind: 'bars',
        caption: '按 10% 能量传递效率计算，三个营养级拿到的相对能量账本。',
        unit: '份',
        bars: [
          { label: '第一级青草', value: 10000, text: '10000份光能存粮' },
          { label: '第二级羊群', value: 1000, text: '剩 1000 份' },
          { label: '第三级猛虎', value: 100, text: '仅剩 100 份！', hot: true },
        ],
      },
    },
    {
      nian: '天哪，一万份传到老虎只剩一百份！那散到空气里的热能，青草能不能再吸回去重新用一遍呢？',
      dad: '绝对收不回来啦！记住生态系统里最核心的一对反差：水、碳、氮这些“物质”是可以周而复始循环利用的；可“能量”只能单向流动、逐级递减！散到空气里的热能没法再让叶绿体拿去做光合作用，必须天天靠头顶的太阳源源不断补新光才行。',
    },
    {
      nian: '能量单向流动收不回来！怪不得野生东北虎那么珍稀，那我们怎么保护它们呀？',
      dad: '现在你一下就明白国家为什么要建那么大的“东北虎豹国家公园”了吧！保护一只野生东北虎，光建个小院子喂肉可不行，它需要几百平方公里的完整大森林，森林里有丰茂的红松橡树，树下有成群的梅花鹿和野猪，金字塔底座厚实了，塔尖上的大老虎才能真正回家！',
    },
    {
      nian: '我懂了！物质能循环但能量只能单向流动，每往上一级大约只传下百分之十到二十的能量，其余大半在呼吸中散成热；层层打折形成下宽上窄的能量金字塔，所以顶级猛兽数量必然稀少。',
      dad: '算得又快又准！再教你个环保小账：同样一块地种出的粮食，人直接吃植物比先喂牛再吃牛肉少打一次九折，所以荤素搭配不浪费肉食，也是在帮地球省土地省能量呢！',
    },
  ],
  tip: '理解“能量金字塔”后，孩子也很容易明白另一个生态规律：食物链通常不会超过四五个环节（如草→虫→蛙→蛇→鹰），因为再往上剩余的能量连一只捕食者都养不活了。同时这也解释了为什么重金属或难降解农药却会反过来越往顶端越浓缩（生物富集）。',
  sources: [
    { title: '高中生物 选择性必修2 · 第3章 第2节 生态系统的能量流动', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Food Web: Concept and Applications & Trophic Pyramid（食物网与营养级十分之一定律）', by: 'Nature Education Scitable', url: 'https://www.nature.com/scitable/knowledge/library/food-web-concept-and-applications-84077181/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '一山难容二虎', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 560], size: [680, 90], color: '#8ce09b', text: '底层：茂盛青草', from: 0.2 },
          { kind: 'shape', shape: 'rect', at: [600, 440], size: [400, 90], color: '#ffe066', text: '中层：成群牛羊', from: 1.0 },
          { kind: 'shape', shape: 'rect', at: [600, 320], size: [180, 90], color: '#ffa8a8', text: '塔尖：猛虎', from: 1.8 },
          { kind: 'text', at: [600, 740], text: '金字塔上尖下宽，供不起多虎', from: 4.4 },
        ],
      },
      {
        turn: 1, title: '大半能量花在哪', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🐑', path: [[420, 440]], size: 150, from: 0.3 },
          { kind: 'arrow', path: [[520, 380], [740, 300]], color: '#e8590c', text: '呼吸散热花掉', from: 1.4 },
          { kind: 'arrow', path: [[520, 450], [740, 450]], color: '#8c6239', text: '粪便遗体归泥土', from: 2.2 },
          { kind: 'arrow', path: [[520, 520], [740, 590]], color: '#2e7d32', text: '仅小部分长成肉', from: 3.0 },
          { kind: 'text', at: [600, 740], text: '每级生物呼吸先耗掉大半能量', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '层层打折剩一成', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [240, 440], size: [210, 110], color: '#8ce09b', text: '草 10000', from: 0.3 },
          { kind: 'arrow', path: [[360, 440], [480, 440]], color: '#2e7d32', text: '传10%~20%', from: 1.2 },
          { kind: 'shape', shape: 'pill', at: [600, 440], size: [190, 110], color: '#ffe066', text: '羊 1000', from: 2.0 },
          { kind: 'arrow', path: [[710, 440], [830, 440]], color: '#e8590c', text: '再传10%', from: 2.8 },
          { kind: 'shape', shape: 'pill', at: [950, 440], size: [170, 110], color: '#ffa8a8', text: '虎 100', motion: 'pulse', from: 3.5 },
          { kind: 'text', at: [600, 740], text: '连打两折，到猛虎只剩百分之一', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '物质循环热单行', duration: 9,
        cues: [
          { kind: 'flow', path: [[320, 380], [520, 520], [240, 520], [320, 380]], color: '#2e7d32', count: 6, speed: 0.4, loop: true, from: 0.4 },
          { kind: 'label', at: [360, 340], pos: [360, 230], text: '碳和水可反复循环', color: '#2e7d32', from: 1.6 },
          { kind: 'arrow', path: [[720, 460], [1020, 340]], color: '#e8590c', text: '热能散失不回头', from: 1.2 },
          { kind: 'myth', wrong: '呼吸散掉的热能还能被植物吸回去用', right: '热能一去不返，全靠太阳天天补新光', from: 4.0 },
        ],
      },
      {
        turn: 4, title: '护虎先护大森林', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🌲', path: [[300, 450]], size: 150, from: 0.3 },
          { kind: 'sprite', icon: '🦌', path: [[600, 450]], size: 140, from: 1.0 },
          { kind: 'sprite', icon: '🐯', path: [[900, 450]], size: 150, from: 1.8 },
          { kind: 'label', at: [600, 340], pos: [600, 230], text: '连通大片森林稳住底座', from: 3.0 },
          { kind: 'text', at: [600, 740], text: '有林有鹿，山林之王才能繁衍', from: 4.8 },
        ],
      },
    ],
  },
};
