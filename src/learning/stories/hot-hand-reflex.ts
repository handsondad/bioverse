import type { Story } from './types';

export const hotHandReflex: Story = {
  slug: 'hot-hand-reflex',
  title: '手碰到烫锅，为什么还没觉得疼就已经缩回来了？',
  trigger: '帮爸爸端菜时，小念的指尖不小心碰了一下刚出锅的碗沿，手“嗖”地缩回去，半秒钟后才“哎呀”喊出好烫！',
  dialogue: [
    {
      nian: '爸爸，刚才我手碰了一下烫碗沿，怎么还没觉得疼、也没来得及想，手自己就缩回来了？',
      dad: '那是身体给你开的一条“救命近道”——缩手反射！要是等信号一路传到脑袋里的大脑皮层，大脑再慢慢想“哎呀好烫快缩手”，手指早就烫起水泡啦！所以脊髓直接截胡，抢先一步下令把胳膊拉了回来。',
      figure: { kind: 'sim', sim: 'reflexArc', caption: '拖动碰到烫锅后的毫秒数，看信号先走脊髓缩手，再上传大脑喊疼。' },
    },
    {
      nian: '脊髓就在我后背骨头里面吗？信号是从指尖怎么跑到脊髓的？',
      dad: '对，脊髓藏在脊柱里面，像总控室派驻在前线的快速指挥站。整条路线有五站，叫反射弧：指尖皮肤感受器觉出烫 → 传入神经报给脊髓 → 脊髓当场拍板 → 传出神经通知手臂肌肉 → 肌肉一缩，手就弹回来了！',
      show: { kind: 'steps', frames: [{ icon: '🔥', label: '指尖感烫' }, { icon: '⚡', label: '脊髓秒下令' }, { icon: '💪', label: '肌肉先缩手' }] },
    },
    {
      nian: '既然脊髓已经让手臂缩回来了，为什么过了一小会儿我才觉得好疼？',
      dad: '因为脊髓在下令缩手的同时，顺手抄送了一份报告往上发给大脑！大脑离指尖更远，要翻过更多神经站点，信号多花了一点点时间才到达大脑皮层，所以你总是先缩手、后喊疼！',
    },
    {
      nian: '那要是我打预防针，明明知道针扎上去会疼，为什么还能忍住不缩手？',
      dad: '哈哈，这说明大脑才是更高一级的总司令！虽然脊髓很想帮你立刻缩手，但你提前用大脑给脊髓发了“忍一下、别动”的控制命令，大脑就能暂时管住脊髓。',
    },
    {
      nian: '像缩手这种天生不用学就会的反应，和看见红灯停脚有什么不一样？',
      dad: '缩手反射、膝跳反射、婴儿吃奶都是生下来就刻在基因里的，叫非条件反射，由脊髓或低级中枢管着；而看见红灯停脚、听到上课铃回座位是后天学会的，叫条件反射，必须经过大脑皮层才能完成！',
    },
    {
      nian: '我懂了！手碰烫锅先缩手后觉疼，是因为信号走脊髓反射弧近道先下令肌肉拉回救命，顺便往大脑传的信号路远慢半拍；大脑平时还能管住脊髓，比如打针时忍住不缩手。',
      dad: '总结得太溜了！不过反射再快也不如提前小心：端热碗热汤一定要垫隔热垫，先轻轻试温度，别让脊髓天天加班救火哦。',
    },
  ],
  tip: '反射弧五个基本环节（感受器→传入神经→神经中枢→传出神经→效应器）缺一不可；缩手反射属于简单反射（非条件反射），疼痛感在大脑皮层躯体感觉中枢形成。厨房端热锅热汤务必使用隔热手套并远离幼儿。',
  sources: [
    { title: '生物学 七年级下册 · 第四单元 第六章 第3节 神经调节的基本方式', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Reflex Arcs（反射弧科普说明）', by: 'National Library of Medicine (MedlinePlus)', url: 'https://medlineplus.gov/ency/anatomyvideos/000109.htm' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '救命近道先缩手', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🍲', path: [[240, 520]], size: 120, from: 0.2 },
          { kind: 'sprite', icon: '✋', path: [[350, 520], [500, 440]], size: 110, travel: 1.8, from: 1.5 },
          { kind: 'shape', shape: 'rect', at: [720, 480], size: [220, 120], color: '#fff4e0', text: '脊髓先下令', from: 0.6 },
          { kind: 'myth', wrong: '大脑想好烫才命令缩手', right: '脊髓抢先缩手，大脑后喊疼', from: 4.0 },
        ],
      },
      {
        turn: 1, title: '反射弧五站接力', duration: 10,
        cues: [
          { kind: 'shape', shape: 'pill', at: [200, 460], size: [170, 90], color: '#ffe3e3', text: '感受器', from: 0.2 },
          { kind: 'arrow', path: [[295, 420], [495, 360]], color: '#e8590c', text: '传入神经', from: 1.0 },
          { kind: 'shape', shape: 'circle', at: [600, 340], size: [180, 130], color: '#fff4e0', text: '脊髓中枢', motion: 'pulse', from: 1.8 },
          { kind: 'arrow', path: [[705, 360], [905, 420]], color: '#2e7d32', text: '传出神经', from: 2.6 },
          { kind: 'shape', shape: 'pill', at: [1000, 460], size: [170, 90], color: '#d9f2dc', text: '手臂肌肉', from: 3.4 },
          { kind: 'text', at: [600, 740], text: '路线极短，瞬间拉回手指', from: 5.0 },
        ],
      },
      {
        turn: 2, title: '大脑慢半拍喊疼', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [380, 560], size: [220, 110], color: '#fff4e0', text: '脊髓', from: 0.2 },
          { kind: 'flow', path: [[490, 520], [720, 340]], color: '#e8590c', count: 5, speed: 170, from: 0.8 },
          { kind: 'shape', shape: 'circle', at: [820, 300], size: [240, 150], color: '#efe5ff', text: '🧠 大脑皮层', from: 0.4 },
          { kind: 'label', at: [820, 380], pos: [820, 560], text: '这时才觉得好烫！', color: '#e8590c', from: 3.2 },
          { kind: 'text', at: [600, 770], text: '先救命，再把疼记在心里', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '大脑管住脊髓', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [600, 260], size: [300, 100], color: '#f3e8ff', text: '大脑', from: 0.2 },
          { kind: 'shape', shape: 'pill', at: [600, 520], size: [300, 100], color: '#d0ebff', text: '脊髓', from: 0.6 },
          { kind: 'sprite', icon: '💉', path: [[960, 520]], size: 90, from: 1.2 },
          { kind: 'arrow', path: [[600, 320], [600, 460]], color: '#7048e8', text: '忍一下', from: 2.2 },
          { kind: 'label', at: [760, 520], pos: [900, 680], text: '想缩手的命令被压住', from: 3.4 },
          { kind: 'text', at: [600, 800], text: '高级中枢能管低级中枢', from: 5.0 },
        ],
      },
      {
        turn: 4, title: '天生与后天反射', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [340, 440], size: [330, 220], color: '#d9f2dc', text: '非条件天生会', from: 0.3 },
          { kind: 'shape', shape: 'rect', at: [860, 440], size: [330, 220], color: '#edf5ff', text: '条件：后天学会', from: 1.4 },
          { kind: 'text', at: [600, 750], text: '缩手天生就会，看红灯要学', from: 4.2 },
        ],
      },
    ],
  },
};
