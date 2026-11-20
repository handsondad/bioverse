import type { Story } from './types';

export const dnaBlueprint: Story = {
  slug: 'dna-blueprint',
  title: 'DNA 长得像螺旋梯子，它怎么把一个人的长相全写进去？',
  trigger: '科技馆大厅立着一座高高的双螺旋模型，小念仰头数着中间五颜六色的横杠，好奇这么细的一根“梯子”怎么装得下全身秘密。',
  dialogue: [
    {
      nian: '爸爸，科学家总说 DNA 是生命说明书，可它看着就像一架拧起来的梯子，字写在哪儿呀？',
      dad: '字就写在梯子中间一根根横杠上！构成横杠的只有四种小小的化学零件，科学家给它们起了四个字母名字：A、T、C、G。别看只有四个字母，它们按不同顺序排成几十亿个字母长，就能写出超级详细的大百科全书！',
      figure: { kind: 'sim', sim: 'dnaPair', caption: '切换不同的基因密码段，看下链怎样严格按 A-T、C-G 自动配对。' },
    },
    {
      nian: '为什么这架梯子非要两条链配成一对，一条链写密码不行吗？',
      dad: '因为它们守着一条铁律：A 永远只牵 T，C 永远只牵 G！这就像天然的拉链备份——只要把梯子从中间拉开，细胞照着任何一条链，用“A 配 T、C 配 G”的规矩就能一字不差地补出另一条，分裂复制时特别不容易出错！',
      eq: '碱基互补配对原则：A — T，C — G',
    },
    {
      nian: '原来双螺旋是为了精准备份！那细胞读完这些 A、T、C、G 以后，怎么变成黑头发和红细胞呢？',
      dad: '每三个字母拼成一个“单词”，对应一种叫氨基酸的零件。细胞把一段有意义的 DNA（就是一个基因）抄成小纸条送出细胞核，照着单词顺序把氨基酸串成长链、折成各种蛋白质——头发角蛋白、运氧血红蛋白、消化酶，全是这么搭出来的！',
      show: { kind: 'steps', frames: [{ icon: '🧬', label: 'DNA 存着总密码' }, { icon: '📝', label: '抄出小纸条 RNA' }, { icon: '🏗️', label: '拼出各种蛋白质' }] },
    },
    {
      nian: '几十亿个字母写成的 DNA，拉直了得有多长啊？怎么塞进肉眼看不见的细胞核里？',
      dad: '说出来吓你一跳：把你一个小小细胞里的 DNA 全部拉直连起来，足足有大约 2 米长，比爸爸还高！细胞把这根极细的丝绕在一颗颗蛋白质小线轴上，层层叠叠盘成染色体，才稳稳塞进了几微米大的细胞核里。',
    },
    {
      nian: '那我身体里的皮肤细胞和心脏细胞，里面装的 DNA 说明书是一样的吗？',
      dad: '一字不差，全都是同一本完整说明书！区别只是皮肤细胞只翻开“造皮肤”那几章来读，心脏细胞翻开“造心肌”那几章来读，其余章节先合上盖住，这样才长出千差万别的器官。',
    },
    {
      nian: '我懂了！DNA 用 A、T、C、G 四个字母的排列写满生命密码，A 配 T、C 配 G 像双链备份拉链，细胞照着密码合成不同蛋白质搭出身体的各种特征，每个细胞都存着同一本完整说明书。',
      dad: '太棒了！四个简单字母却拼出了地球上从细菌、蓝鲸到人类无穷无尽的生命奇迹，这就是大自然最厉害的编码艺术。',
    },
  ],
  tip: '人类单倍体基因组约含 30 亿碱基对，二倍体体细胞总计约 60 亿碱基对，拉直全长约 2 米。DNA 双螺旋结构由沃森、克里克于 1953 年发表，富兰克林与威尔金斯的 X 射线衍射照片（如 Photo 51）为这一发现提供了关键实验证据。',
  sources: [
    { title: '生物学 必修2 遗传与进化 · 第3章 第2节 DNA 的结构', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Deoxyribonucleic Acid (DNA) Fact Sheet（DNA 科学简介）', by: 'National Human Genome Research Institute (NIH)', url: 'https://www.genome.gov/about-genomics/fact-sheets/Deoxyribonucleic-Acid-Fact-Sheet' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '四个字母写大书', duration: 9,
        cues: [
          { kind: 'atom', path: [[260, 420]], symbol: 'A', color: '#e03131', r: 52, from: 0.2 },
          { kind: 'atom', path: [[490, 420]], symbol: 'T', color: '#1c7ed6', r: 52, from: 0.7 },
          { kind: 'atom', path: [[710, 420]], symbol: 'C', color: '#f59f00', r: 52, from: 1.2 },
          { kind: 'atom', path: [[940, 420]], symbol: 'G', color: '#2f9e44', r: 52, from: 1.7 },
          { kind: 'text', at: [600, 700], text: '四字母排列写出几十亿字密码', from: 3.5 },
        ],
      },
      {
        turn: 1, title: '拉链般的精准配对', duration: 9,
        cues: [
          { kind: 'bond', a: [380, 340], b: [820, 340], color: '#d8c9b0', from: 0.4 },
          { kind: 'bond', a: [380, 520], b: [820, 520], color: '#d8c9b0', from: 0.8 },
          { kind: 'atom', path: [[380, 340]], symbol: 'A', color: '#e03131', r: 46, from: 0.4 },
          { kind: 'atom', path: [[820, 340]], symbol: 'T', color: '#1c7ed6', r: 46, from: 0.6 },
          { kind: 'atom', path: [[380, 520]], symbol: 'C', color: '#f59f00', r: 46, from: 1.0 },
          { kind: 'atom', path: [[820, 520]], symbol: 'G', color: '#2f9e44', r: 46, from: 1.2 },
          { kind: 'formula', at: [600, 740], text: 'A 牵 T · C 牵 G（双链互为备份）', from: 3.5 },
        ],
      },
      {
        turn: 2, title: '照密码搭出蛋白质', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [250, 440], size: [220, 140], color: '#efe5ff', text: 'DNA 密码', from: 0.2 },
          { kind: 'arrow', path: [[380, 440], [500, 440]], color: '#7c52b8', text: '抄纸条', from: 1.2 },
          { kind: 'shape', shape: 'pill', at: [600, 440], size: [190, 110], color: '#fff4e0', text: 'RNA', from: 2.0 },
          { kind: 'arrow', path: [[710, 440], [830, 440]], color: '#2e7d32', text: '拼零件', from: 2.8 },
          { kind: 'shape', shape: 'circle', at: [950, 440], size: [210, 160], color: '#d9f2dc', text: '蛋白质', motion: 'pulse', from: 3.6 },
          { kind: 'text', at: [600, 760], text: '蛋白质搭出头发、肌肉与酶', from: 5.0 },
        ],
      },
      {
        turn: 3, title: '两米长塞进细胞核', duration: 9,
        cues: [
          { kind: 'count', at: [380, 430], label: '拉直全长约', start: 0, end: 2.0, unit: '米', over: 2.5, from: 0.4 },
          { kind: 'arrow', path: [[540, 430], [720, 430]], color: '#2e7d32', text: '盘绕折叠', from: 2.0 },
          { kind: 'shape', shape: 'circle', at: [860, 430], size: [190, 190], color: '#d8c5fa', text: '小小细胞核', from: 3.0 },
          { kind: 'text', at: [600, 760], text: '每个细胞都存同一本完整书', from: 4.8 },
        ],
      },
    ],
  },
};
