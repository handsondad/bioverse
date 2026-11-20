import type { Story } from './types';

export const evolutionGiraffe: Story = {
  slug: 'evolution-giraffe',
  title: '长颈鹿的脖子是天天伸长才变长的吗？',
  trigger: '在动物园喂长颈鹿吃树叶时，旁边有人说“长颈鹿祖先天天仰头够高枝，脖子越拉越长就传给小长颈鹿了”，小念半信半疑地问爸爸。',
  dialogue: [
    {
      nian: '爸爸，长颈鹿的脖子有两米多长，真的是它们祖先天天使劲伸脖子、越拉越长才遗传下来的吗？',
      dad: '好多人听过这个说法，但其实是错的哦！你想想，一个人天天举哑铃练出大肌肉，生下来的小宝宝不会天生满身肌肉对吧？后天用劲拉长并不会改写细胞里的 DNA，所以没法直接遗传给下一代！',
      figure: { kind: 'sim', sim: 'giraffeSelect', caption: '向右拖动经过的世代，看看在高树叶环境里长脖子比例怎样代代上升。' },
    },
    {
      nian: '既然使劲伸长不会改写 DNA，那长颈鹿怎么最后全长出了这么长的脖子？',
      dad: '达尔文找到了真正的答案——自然选择！古代长颈鹿祖先里，本来就因为随机变异，有的脖子天生稍长几厘米、有的稍短几厘米。平时地上草多大家都能吃饱，可一遇上大旱低处没草，够得着高树叶的长脖子就更容易活下来！',
      show: { kind: 'steps', frames: [{ icon: '🎲', label: '天生有长短变异' }, { icon: '🌿', label: '旱季高叶更易活' }, { icon: '🦒', label: '代代筛选成群变长' }] },
    },
    {
      nian: '原来不是一只长颈鹿自己变长，而是脖子长的更容易活下来生宝宝，这样传很多代吗？',
      dad: '完全抓住了精髓！活下来的长脖子把“长脖子基因”传给下一代；下一代里又出现更长一点的个体，再经历几百万年、成千上万代的筛选，整个族群的脖子就一步步长到了今天这么惊人的高度！',
    },
    {
      nian: '那长颈鹿脖子这么长，低头喝水或者把血泵到高高的脑袋上，心脏受得了吗？',
      dad: '演化的时候其他器官也一起跟上了！长颈鹿长着一颗重达十多公斤的超级大心脏，血压大约是人的两倍，才能把血一路泵上高高的头顶；低头喝水时颈部血管里还有专门的瓣膜和减压海绵网，防止脑袋充血发晕！',
    },
    {
      nian: '除了长颈鹿，我们身边有没有正在悄悄发生的自然选择呀？',
      dad: '有呀，刚才讲过的细菌耐药性就是眼前活生生的例子！乱用抗生素时，天生变异不怕药的那一小撮细菌活下来大量繁殖，很快整群细菌都变得不怕这种药——自然选择每天都在生命世界里发生着。',
    },
    {
      nian: '我懂了！长颈鹿的脖子不是天天伸长练出来遗传的，而是群体里天生就有长短变异，在食物紧缺时脖子长的更易吃到高叶活下来传后代，千万年自然选择才造就了今天的模样！',
      dad: '达尔文听了都要给你鼓掌！记住演化口诀：变异是随机自带的，环境只负责“挑选”谁更适合活下去。',
    },
  ],
  tip: '“用进废退与获得性遗传”是拉马克在 1809 年提出的早期假说，也是中小学生学习进化论时最顽固的前概念。帮助孩子区分“个体后天努力改变（不改 DNA）”与“群体层面代际自然选择”是理解生物演化的关键一步。',
  sources: [
    { title: '生物学 八年级下册 · 第七单元 第三章 第3节 生物进化的原因', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Natural Selection（自然选择科普指南）', by: 'University of California Museum of Paleontology (Understanding Evolution)', url: 'https://evolution.berkeley.edu/evolution-101/mechanisms-the-processes-of-evolution/natural-selection/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '后天练长不会遗传', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🦒', path: [[400, 440]], size: 150, from: 0.2 },
          { kind: 'label', at: [420, 350], pos: [820, 300], text: '天天伸脖子不改 DNA', from: 1.5 },
          { kind: 'myth', wrong: '天天伸长脖子直接传给孩子', right: '后天努力拉长不会写进基因', from: 3.6 },
        ],
      },
      {
        turn: 1, title: '天生本来就有长短', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [320, 540], size: [120, 150], color: '#d8c9b0', text: '稍短', from: 0.3 },
          { kind: 'shape', shape: 'rect', at: [600, 490], size: [120, 250], color: '#ffd43b', text: '中等', from: 0.9 },
          { kind: 'shape', shape: 'rect', at: [880, 430], size: [120, 370], color: '#f59f00', text: '天生稍长', from: 1.5 },
          { kind: 'label', at: [880, 240], pos: [520, 200], text: '高处树叶只有它够着', color: '#2e7d32', from: 2.8 },
          { kind: 'text', at: [600, 770], text: '随机变异给演化提供原材料', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '代代筛选越来越长', duration: 10,
        cues: [
          { kind: 'meter', at: [600, 310], label: '第1代长脖占比', start: 0.25, end: 0.25, color: '#f59f00', from: 0.4 },
          { kind: 'meter', at: [600, 460], label: '百代长脖占比', start: 0.25, end: 0.65, color: '#e8590c', over: 2.5, from: 1.6 },
          { kind: 'meter', at: [600, 610], label: '无数代后占比', start: 0.65, end: 0.98, color: '#2e7d32', over: 2.5, from: 3.2 },
          { kind: 'text', at: [600, 780], text: '适者生存，长脖子基因传下来', from: 5.2 },
        ],
      },
      {
        turn: 3, title: '全身一起配套演化', duration: 9,
        cues: [
          { kind: 'sprite', icon: '❤️', path: [[360, 440]], size: 120, from: 0.3 },
          { kind: 'label', at: [360, 350], pos: [360, 220], text: '强力心脏高泵血', from: 1.2 },
          { kind: 'arrow', path: [[460, 440], [720, 440]], color: '#e5484d', text: '送血到头顶', from: 2.0 },
          { kind: 'shape', shape: 'pill', at: [880, 440], size: [260, 120], color: '#e7f5ff', text: '血管减压瓣膜', from: 2.8 },
          { kind: 'text', at: [600, 760], text: '低头喝水也不发晕的精妙配合', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '身边的自然选择', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [600, 430], size: [460, 300], color: '#fff4e6', from: 0.2 },
          { kind: 'particles', box: [420, 330, 360, 200], count: 16, color: '#ff8787', motion: 'jitter', amount: { at: 2.4, over: 1.5, from: 16, to: 3 }, from: 0.6 },
          { kind: 'sprite', icon: '💊', path: [[180, 280], [420, 340]], size: 80, travel: 1.5, from: 1.6 },
          { kind: 'label', at: [700, 450], pos: [980, 240], text: '不怕药的活下来', from: 3.6 },
          { kind: 'meter', at: [600, 670], label: '耐药菌占比', start: 0.05, end: 0.9, color: '#e8590c', from: 4.2 },
          { kind: 'text', at: [600, 800], text: '自然选择每天都在发生', from: 5.6 },
        ],
      },
    ],
  },
};
