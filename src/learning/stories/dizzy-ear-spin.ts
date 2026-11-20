import type { Story } from './types';

export const dizzyEarSpin: Story = {
  slug: 'dizzy-ear-spin',
  title: '原地转几个圈猛地停下来，为什么觉得整个屋子还在转？',
  trigger: '在客厅地毯上模仿芭蕾演员原地连转了六圈后，小念刚一停下脚步，就惊呼着抱住沙发：“电视和茶几怎么还在转圈呀！”',
  dialogue: [
    {
      nian: '爸爸，我的脚明明已经站稳停下来了，为什么眼睛看出去整个客厅还在哗哗旋转？',
      dad: '不是客厅在转，是你耳朵深处藏着的“平衡陀螺仪”还在转！我们的耳朵可不光管听声音，在最里面的内耳深处，每只耳朵都有三个互相垂直的小圆环管道，叫“半规管”，专门负责向大脑报告你的脑袋正在往哪边转。',
      figure: { kind: 'sim', sim: 'earCanalSpin', caption: '切换站稳不动、原地转圈和猛地停下三个瞬间，看内耳半规管里的液体怎样跟眼睛“信号打架”。' },
    },
    {
      nian: '耳朵里面居然藏着半规管？这三个小圆环是怎么知道我在转圈的？',
      dad: '半规管里面灌满了清亮的内淋巴液，管壁上还长着一丛丛带细毛的感觉毛细胞，细毛顶上罩着果冻一样的胶质帽。你一转圈，管子跟着脑袋动，里面的液体晃动起来推弯细毛，毛细胞立刻发电报给大脑：“报告，正在旋转！”',
      show: {
        kind: 'steps',
        frames: [
          { icon: '👂', label: '内耳三道半规管' },
          { icon: '🌊', label: '停步后液体惯性冲' },
          { icon: '🌾', label: '压弯毛细胞纤毛' },
          { icon: '😵', label: '内耳眼睛信号冲突' },
        ],
      },
    },
    {
      nian: '原来靠液体推弯毛细胞报信！可我都停下来了，毛细胞怎么还在乱发电报呢？',
      dad: '想想你端着一碗汤端着跑，人突然站住时，碗里的汤是不是靠“惯性”还会往前晃荡好几秒？半规管里的淋巴液也是一模一样！你的脚刹住车了，管里的液体刹不住，还在顺着刚才的方向哗哗流，继续把纤毛压弯，谎报“还在转圈”！',
    },
    {
      nian: '液体靠惯性还在晃！那为什么大脑会觉得是外面的沙发和电视在转，甚至还会想吐呢？',
      dad: '因为大脑同时收到了两份吵架的报告：眼睛看得很清楚说“人站稳了，沙发没动”，内耳半规管却一口咬定“人还在飞快旋转”！大脑为了调和矛盾，还会自动指挥眼球一跳一跳地晃动，结果画面就天旋地转了。坐车低头看书晕车，也是眼睛和内耳信号打架闹出来的！',
    },
    {
      nian: '怪不得坐车看书会晕车！那花样滑冰和芭蕾舞演员一秒钟转好几圈，他们怎么不晕倒呀？',
      dad: '演员有两个秘密武器：跳舞转圈时他们用“留头甩头”的技巧，眼睛始终死死盯住远方同一个点，最后一下才猛甩过头来，减少液体晃动；而花样滑冰运动员经过成千上万次训练，大脑已经学会主动忽略内耳停下后那几秒钟的“假警报”，站定就能稳稳微笑谢幕！',
    },
    {
      nian: '我懂了！耳朵深处的半规管装满淋巴液感知旋转；转圈猛停后液体因惯性继续流动压弯感觉纤毛，让内耳报告还在转，跟眼睛看到的静止画面发生冲突，就觉得屋子天旋地转了。',
      dad: '说得太准啦！下次坐汽车要是觉得有点晕，马上收起书本抬头往车窗极远处看，让眼睛和内耳重新对上暗号，很快就不难受了。',
    },
  ],
  tip: '孩子在家玩原地转圈游戏时，务必远离桌角、茶几与硬质家具边缘，停下时顺势蹲坐到软垫上以防摔伤。乘车容易晕车的孩子（运动病），乘车前不宜吃得过饱或空腹，尽量坐前排靠窗位置注视远方地平线，保持车内空气流通。',
  sources: [
    { title: '生物学 七年级下册 · 第四单元 第六章 人体对外界环境的感知（耳和听觉）', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Balance Disorders & Vestibular System（前庭系统与半规管平衡觉原理）', by: 'National Institute on Deafness and Other Communication Disorders (NIH)', url: 'https://www.nidcd.nih.gov/health/balance-disorders' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '耳朵里的陀螺仪', duration: 9,
        cues: [
          { kind: 'sprite', icon: '👂', path: [[300, 440]], size: 150, from: 0.2 },
          { kind: 'arrow', path: [[410, 440], [560, 440]], color: '#3b6ea5', text: '往里看内耳', from: 1.2 },
          { kind: 'shape', shape: 'circle', at: [780, 440], size: [250, 250], color: '#d0ebff', outline: true, text: '半规管', from: 2.0 },
          { kind: 'label', at: [780, 315], pos: [820, 210], text: '三道圆环互成直角', from: 3.4 },
          { kind: 'text', at: [600, 740], text: '耳朵更是身体的平衡陀螺仪', from: 4.8 },
        ],
      },
      {
        turn: 1, title: '液体晃动弯纤毛', duration: 9,
        cues: [
          { kind: 'flow', path: [[320, 400], [880, 400]], color: '#3b6ea5', count: 8, speed: 0.55, from: 0.4 },
          { kind: 'shape', shape: 'pill', at: [600, 490], size: [90, 160], color: '#ff922b', text: '毛细胞', motion: 'wiggle', from: 1.0 },
          { kind: 'arrow', path: [[660, 490], [880, 540]], color: '#7c52b8', text: '神经报信', from: 2.4 },
          { kind: 'text', at: [600, 740], text: '液体推弯纤毛，报告正在旋转', from: 4.6 },
        ],
      },
      {
        turn: 2, title: '脚停了水还在冲', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🧍', path: [[320, 440]], size: 150, from: 0.3 },
          { kind: 'label', at: [320, 540], pos: [320, 630], text: '双脚已经刹住车', color: '#2e7d32', from: 1.4 },
          { kind: 'shape', shape: 'circle', at: [800, 440], size: [240, 240], color: '#99e9f2', text: '惯性继续流', motion: 'wiggle', from: 1.0 },
          { kind: 'label', at: [800, 320], pos: [820, 210], text: '继续压弯纤毛谎报军情', color: '#e8590c', from: 2.8 },
          { kind: 'text', at: [600, 750], text: '像端汤急停，半规管水有惯性', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '两份报告吵起来', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [300, 390], size: [240, 96], color: '#8ce09b', text: '眼睛：没动', from: 0.3 },
          { kind: 'shape', shape: 'pill', at: [300, 520], size: [240, 96], color: '#ffa8a8', text: '内耳：还在转', from: 0.9 },
          { kind: 'arrow', path: [[440, 450], [640, 450]], color: '#e8590c', text: '信号冲突', from: 1.8 },
          { kind: 'shape', shape: 'circle', at: [820, 450], size: [200, 160], color: '#d8c5fa', text: '大脑眩晕', motion: 'pulse', from: 2.6 },
          { kind: 'myth', wrong: '晕车是因为闻到汽油味中毒了', right: '主要是眼睛和内耳的运动信号对不上', from: 4.4 },
        ],
      },
      {
        turn: 4, title: '盯住远点稳平衡', duration: 9,
        cues: [
          { kind: 'sprite', icon: '⛸️', path: [[340, 440]], size: 150, from: 0.3 },
          { kind: 'ray', path: [[420, 410], [880, 410]], color: '#e8590c', draw: 1.5, from: 1.2 },
          { kind: 'shape', shape: 'circle', at: [900, 410], size: [90, 90], color: '#ffd43b', text: '定睛点', from: 1.8 },
          { kind: 'label', at: [640, 410], pos: [640, 270], text: '留头甩头+大脑适应训练', from: 3.0 },
          { kind: 'text', at: [600, 740], text: '乘车远眺窗外，两边信号一致', from: 4.8 },
        ],
      },
    ],
  },
};
