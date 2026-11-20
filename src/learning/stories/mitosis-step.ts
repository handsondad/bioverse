import type { Story } from './types';

export const mitosisStep: Story = {
  slug: 'mitosis-step',
  title: '擦破皮几天就能长好，一个细胞是怎么一分为二的？',
  trigger: '小念摔破了膝盖，一周后结痂脱落，底下长出粉嫩的新皮肤——他好奇多出来的这些细胞是从哪儿变出来的。',
  dialogue: [
    {
      nian: '爸爸，摔破皮之后长出来的新皮肤细胞，是不是从原来的好细胞直接劈成两半变出来的？',
      dad: '对了一半！确实是一个细胞一分为二，但绝不能直接生劈。细胞核里藏着整套生命说明书，如果直接劈成两半，每个新细胞就只剩半本说明书，根本没法活！',
      figure: { kind: 'sim', sim: 'mitosisPhases', caption: '拖动分裂阶段滑块，看看细胞怎样先复制、再打包排队、最后平分变两个。' },
    },
    {
      nian: '那为了不变成半本说明书，细胞分裂前要先做什么准备？',
      dad: '它得先在“间期”安安静静把所有 DNA 一字不差地复印成两份！这个准备阶段可费劲了，科学家观察洋葱根尖细胞时发现，九成左右的细胞都正处在间期，真正动手分裂的时间其实很短。',
      show: { kind: 'lab', step: 6, label: '看「计数」' },
    },
    {
      nian: '复印成两份以后，细丝绕在一起不打结吗？怎么分得开？',
      dad: '细胞特别聪明！进入“前期”后，松散的长细丝会紧紧卷成一根根短粗的小棒——染色体，每根都是两条一模一样的姐妹单体连在一起；同时核膜拆掉、两极拉出纺锤丝，准备搬家。',
      show: { kind: 'lab', step: 2, label: '看「前期」' },
    },
    {
      nian: '纺锤丝拉着这些染色体，怎么保证两边分到的一模一样多？',
      dad: '到“中期”时，所有染色体整整齐齐排在细胞正中间的赤道板上；一到“后期”，连着姐妹单体的扣子“咔嚓”一分为二，纺锤丝把两套完全一样的染色体分别拉向两头，就像拔河后各自领走一份完整拷贝。',
      eq: '间期复制 → 前期打包 → 中期排队 → 后期平分 → 末期变俩',
      show: { kind: 'lab', step: 4, label: '看「后期」' },
    },
    {
      nian: '两套染色体拉到两头以后，一个细胞怎么最后变成两个呢？',
      dad: '最后到了“末期”，两头各自围出新的细胞核，染色体重新松回细丝；动物细胞从中间勒断，植物细胞则在中间长出一道细胞板变成新细胞壁，一个细胞就稳稳变成了两个一模一样的子细胞！',
      show: { kind: 'lab', step: 5, label: '看「末期」' },
    },
    {
      nian: '我懂了！新皮肤是细胞通过有丝分裂变出来的：先在间期把 DNA 复印两份，再卷成染色体排队平分到两头，最后隔成两个一模一样的新细胞，所以伤口长好后和原来一模一样。',
      dad: '讲得太棒了！小树抽新芽、小念长高个子、指甲长长，靠的都是细胞一遍遍这样认真地复印、排队、平分。',
    },
  ],
  tip: '本课配有「观察根尖分生区组织细胞的有丝分裂」3D 实验台，可以点页首按钮进入，亲手体验解离、漂洗、染色、压片，并用 400 倍显微镜识别各期细胞、估算各期时长。',
  sources: [
    { title: '生物学 必修1 分子与细胞 · 第6章 第1节 细胞的增殖（有丝分裂）', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: '3D 生物实验课件：观察根尖分生区组织细胞的有丝分裂（CC BY-NC 4.0）', by: '铜匠十点睡觉', url: 'https://lab.tongjiang.app' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '不能直接生劈', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [600, 430], size: [260, 260], color: '#d9f2dc', text: '母细胞', from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [600, 430], size: [120, 120], color: '#d8c5fa', text: '1套DNA', from: 0.8 },
          { kind: 'myth', wrong: '直接劈成两半变成两个细胞', right: '必须先复印两份再平分', from: 3.2 },
        ],
      },
      {
        turn: 1, title: '间期悄悄复印', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 440], size: [420, 270], color: '#eef9ee', from: 0.2 },
          { kind: 'count', at: [600, 430], label: 'DNA 份数', start: 1, end: 2, unit: '套', over: 3, from: 1.0 },
          { kind: 'meter', at: [600, 680], label: '间期占总时间', start: 0, end: 0.9, color: '#2e7d32', from: 2.5 },
          { kind: 'text', at: [600, 790], text: '九成时间都在认真做准备', from: 4.5 },
        ],
      },
      {
        turn: 2, title: '前期打包染色体', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [600, 440], size: [380, 380], color: '#eef9ee', from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [600, 440], size: [220, 220], color: '#f3f0ff', text: '核膜', outline: true, from: 0.4, to: 3.0 },
          { kind: 'shape', shape: 'pill', at: [550, 430], size: [44, 120], color: '#d9480f', motion: 'grow', from: 1.4 },
          { kind: 'shape', shape: 'pill', at: [650, 450], size: [44, 120], color: '#3b6ea5', motion: 'grow', from: 1.6 },
          { kind: 'label', at: [550, 380], pos: [250, 240], text: '细丝卷成染色体', from: 2.2 },
          { kind: 'bond', a: [420, 440], b: [550, 430], color: '#868e96', from: 3.4 },
          { kind: 'bond', a: [780, 440], b: [650, 450], color: '#868e96', from: 3.4 },
          { kind: 'label', at: [780, 440], pos: [970, 650], text: '两极拉出纺锤丝', from: 4.2 },
        ],
      },
      {
        turn: 3, title: '中期排队后期分', duration: 10,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 450], size: [540, 310], color: '#eef9ee', from: 0.2 },
          { kind: 'shape', shape: 'pill', at: [600, 370], size: [90, 42], color: '#d9480f', slide: { to: [430, 370], at: 4.0, over: 2.5 }, from: 0.8 },
          { kind: 'shape', shape: 'pill', at: [600, 370], size: [90, 42], color: '#d9480f', slide: { to: [770, 370], at: 4.0, over: 2.5 }, from: 0.8 },
          { kind: 'shape', shape: 'pill', at: [600, 520], size: [90, 42], color: '#3b6ea5', slide: { to: [430, 520], at: 4.0, over: 2.5 }, from: 0.8 },
          { kind: 'shape', shape: 'pill', at: [600, 520], size: [90, 42], color: '#3b6ea5', slide: { to: [770, 520], at: 4.0, over: 2.5 }, from: 0.8 },
          { kind: 'text', at: [600, 770], text: '先排中间，再各拉一套走', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '末期一分为二', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [420, 450], size: [260, 260], color: '#d9f2dc', text: '子细胞 1', from: 0.4 },
          { kind: 'shape', shape: 'rect', at: [780, 450], size: [260, 260], color: '#d9f2dc', text: '子细胞 2', from: 0.4 },
          { kind: 'bond', a: [600, 310], b: [600, 590], color: '#e8590c', from: 1.5 },
          { kind: 'label', at: [600, 450], pos: [600, 220], text: '新细胞壁隔开', from: 2.4 },
          { kind: 'text', at: [600, 760], text: '遗传说明书一字不差传下去', from: 4.2 },
        ],
      },
    ],
  },
};
