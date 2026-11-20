import type { Story } from './types';

export const pineappleTingleEnzyme: Story = {
  slug: 'pineapple-tingle-enzyme',
  title: '吃新鲜菠萝为什么舌头又麻又疼，煮熟了就不扎嘴了？',
  trigger: '周末吃水果拼盘，小念连吃了四块鲜切菠萝，嘶哈着伸出舌头喊麻；可晚饭里的菠萝咕咾肉却一点也不扎嘴。',
  dialogue: [
    {
      nian: '爸爸，新鲜菠萝明明没有硬刺，为什么吃几块舌头就又麻又疼，像被小针扎一样？',
      dad: '你没感觉错，鲜菠萝果肉里真的藏着两件防身武器！第一件是显微镜下才能看见的“草酸钙针晶”，像成千上万根极细的小绣花针；第二件是“菠萝蛋白酶”，专门剪断蛋白质。你在吃菠萝的时候，菠萝也在反过来轻轻“啃”你的舌头呢！',
      figure: { kind: 'sim', sim: 'bromelainMouth', caption: '切换鲜菠萝、淡盐水泡菠萝和煮熟的菠萝，看看草酸钙针晶与菠萝蛋白酶怎样联手刺激口腔。' },
    },
    {
      nian: '菠萝居然在啃我的舌头？那针晶和菠萝蛋白酶是怎么配合搞破坏的？',
      dad: '科学家研究发现它们是打配合战的：咀嚼时，草酸钙针晶先在口腔黏膜最表面的保护层上扎出微小缺口，菠萝蛋白酶趁机钻进去，把舌头表面细胞的蛋白质剪开，神经末梢收到信号就会火辣辣地发麻刺痛。不过别怕，口腔细胞更新很快，睡一觉就修好啦。',
    },
    {
      nian: '怪不得那么麻！奶奶每次切完菠萝都泡在淡盐水里，淡盐水能把菠萝蛋白酶杀死吗？',
      dad: '好问题！很多人都以为淡盐水能彻底灭掉蛋白酶，其实厨房里那点淡盐水浓度远远不够让菠萝蛋白酶完全失活。泡淡盐水之所以觉得没那么扎嘴，主要是冲掉了表面一部分果汁和针晶，再加上咸味压住了酸涩、刺激口水加速冲刷保护舌头。',
      figure: {
        kind: 'scale',
        caption: '不同处理方法对菠萝蛋白酶活性的真实影响。',
        axis: '菠萝处理方式与扎嘴程度',
        stops: [
          { label: '直接鲜吃', note: '针晶+酶全开', color: '#ffc9c9', hot: true },
          { label: '淡盐水泡', note: '冲刷缓解酶仍在', color: '#ffe8cc' },
          { label: '70℃热焯', note: '蛋白酶彻底失活', color: '#d8f3dc' },
          { label: '菠萝罐头', note: '高温灭菌完全不麻', color: '#b7e4c7' },
        ],
      },
    },
    {
      nian: '原来淡盐水只是缓解呀！那为什么晚饭里的熟菠萝和菠萝罐头一丁点都不扎嘴呢？',
      dad: '因为菠萝蛋白酶本质上是一团折叠精巧的蛋白质，特别怕高温！只要加热超过七十摄氏度——不管是下锅快炒、沸水焯一下，还是做成高温杀菌的菠萝罐头，蛋白酶的立体小剪刀就会彻底烫变形失效，再也剪不动你舌头上的蛋白质了。',
    },
    {
      nian: '高温能把蛋白酶的小剪刀烫坏！那平时做菜能不能反过来利用这把小剪刀帮厨呀？',
      dad: '太会举一反三了！大厨炒牛肉怕肉太柴咬不动，下锅前滴一点鲜菠萝汁或木瓜汁抓匀腌十分钟，让蛋白酶先把粗硬的肌肉纤维剪松软，再开大火一炒——肉又嫩滑，高温又顺手把酶关停，一举两得！不过做水果果冻时千万别放鲜菠萝，不然明胶蛋白质被剪碎，果冻就凝不住啦。',
    },
    {
      nian: '我懂了！鲜菠萝扎嘴是因为草酸钙针晶扎口子、菠萝蛋白酶分解口腔表面蛋白质；淡盐水只能冲刷缓解，加热到七十摄氏度以上才能让蛋白酶彻底变性失活，做菜还能用它嫩肉。',
      dad: '满分大厨兼生物学家！吃鲜菠萝时把中间蛋白酶最多的硬芯切掉，或者用开水快速烫一下再冰镇，就既清甜又不麻嘴啦。',
    },
  ],
  tip: '菠萝中心硬芯部位的菠萝蛋白酶含量高于外圈果肉，给低龄孩子吃鲜菠萝时可去芯切小块，或用开水快焯 30 秒。极少数人对菠萝存在真正的水果过敏（出现嘴唇明显红肿、起疹或呼吸不适），那与普通扎嘴不同，应立即停止食用并就医。',
  sources: [
    { title: '生物学 七年级下册 · 消化和吸收；高中生物 必修1 · 第5章 酶的作用和本质', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Synergistic Defensive Function of Raphides and Protease through the Needle Effect（草酸钙针晶与蛋白酶的协同防御效应）', by: 'PLOS ONE (Konno et al., 2014)', url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0091341' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '菠萝的双重武器', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🍍', path: [[260, 440]], size: 150, from: 0.2 },
          { kind: 'shape', shape: 'pill', at: [620, 360], size: [220, 80], color: '#adb5bd', text: '草酸钙针晶', from: 1.2 },
          { kind: 'shape', shape: 'circle', at: [620, 520], size: [150, 110], color: '#ff922b', text: '蛋白酶', motion: 'wiggle', from: 2.0 },
          { kind: 'label', at: [730, 520], pos: [950, 440], text: '专剪蛋白质的小剪刀', from: 3.2 },
          { kind: 'text', at: [600, 740], text: '你吃鲜菠萝，菠萝也在轻啃舌头', from: 4.8 },
        ],
      },
      {
        turn: 1, title: '针晶开路酶进场', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 560], size: [700, 120], color: '#ffa8a8', text: '口腔黏膜', from: 0.2 },
          { kind: 'arrow', path: [[440, 280], [480, 490]], color: '#868e96', text: '针晶扎微口', from: 1.2 },
          { kind: 'arrow', path: [[740, 280], [680, 490]], color: '#e8590c', text: '蛋白酶剪蛋白', from: 2.4 },
          { kind: 'pulse', at: [580, 520], color: '#e03131', radius: 70, rate: 1.0, from: 3.4 },
          { kind: 'text', at: [600, 750], text: '协同刺激神经，舌尖又麻又刺', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '淡盐水真相', duration: 9,
        cues: [
          { kind: 'vessel', vessel: 'beaker', at: [380, 450], size: [220, 240], liquid: '#d0ebff', level: 0.7, label: '淡盐水', from: 0.3 },
          { kind: 'shape', shape: 'circle', at: [380, 480], size: [100, 100], color: '#ffd43b', text: '菠萝块', from: 1.0 },
          { kind: 'label', at: [490, 430], pos: [790, 340], text: '冲走部分汁液促唾液', from: 2.2 },
          { kind: 'myth', wrong: '淡盐水能把菠萝蛋白酶全杀死', right: '淡盐水只缓解刺激，高温才彻底失活', from: 4.2 },
        ],
      },
      {
        turn: 3, title: '高温烫塌小剪刀', duration: 9,
        cues: [
          { kind: 'count', at: [340, 380], label: '加热锅温超过', start: 25, end: 75, unit: '℃', over: 2.4, from: 0.4 },
          { kind: 'shape', shape: 'circle', at: [780, 440], size: [180, 130], color: '#ff922b', tint: { color: '#ced4da', at: 2.5, over: 1.5 }, text: '蛋白酶', motion: 'shrink', over: 3.0, from: 1.0 },
          { kind: 'label', at: [780, 350], pos: [820, 220], text: '空间结构永久变性', from: 3.4 },
          { kind: 'text', at: [600, 740], text: '熟菠萝与罐头菠萝一点也不扎嘴', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '厨房里的嫩肉粉', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [340, 440], size: [220, 130], color: '#e8590c', text: '粗牛肉丝', from: 0.3 },
          { kind: 'arrow', path: [[465, 440], [645, 440]], color: '#2e7d32', text: '鲜菠萝汁腌制', from: 1.5 },
          { kind: 'shape', shape: 'pill', at: [820, 440], size: [240, 120], color: '#ffa8a8', text: '软嫩牛肉', from: 2.8 },
          { kind: 'text', at: [600, 730], text: '先剪松肉丝再炒熟，又嫩又香', from: 4.6 },
        ],
      },
    ],
  },
};
