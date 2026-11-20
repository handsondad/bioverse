import type { Story } from './types';

export const mutationDiversity: Story = {
  slug: 'mutation-diversity',
  title: '同一窝小猫毛色都不一样，基因抄错一个字会怎样？',
  trigger: '小区花园里，猫妈妈刚生下一窝四只小猫，居然有橘猫、黑猫、三花和奶牛猫，小念数着花色惊叹怎么一只都不重样。',
  dialogue: [
    {
      nian: '爸爸，这四只小猫是同一个猫妈妈生的，怎么毛色一只比一只不一样？',
      dad: '第一个大功臣叫基因重组！猫爸猫妈身上藏着黑、橘、白斑等好多套毛色基因，每次生宝宝就像把一副扑克牌彻底洗牌再发给每只小猫，每只小猫抓到的牌不一样，花色自然各具特色！',
      figure: { kind: 'sim', sim: 'geneMutate', caption: '切换 DNA 复制时的三种情况，看抄错一个字母会怎样改变小猫毛色。' },
    },
    {
      nian: '那除了把爸妈原本的牌重新洗牌，自然界里全新的花色又是打哪儿冒出来的？',
      dad: '靠偶尔发生的“抄写小笔误”——基因突变！细胞每次分裂都要抄写几十亿个 DNA 字母，哪怕准确率高到惊人，偶尔还是会抄错、漏掉或多出一个字母，新花色、新性状的种子就是这么诞生的。',
      show: { kind: 'steps', frames: [{ icon: '🃏', label: '基因重组：重新洗牌' }, { icon: '✏️', label: '基因突变：偶尔抄错字' }, { icon: '🐱', label: '造出千变万化花色' }] },
    },
    {
      nian: '听起来“基因突变”好吓人呀，只要抄错一个字，小猫就会生重病吗？',
      dad: '影视剧把突变演得太吓人啦！其实大多数基因突变发生在不写蛋白质的空白段落，或者改了字母但密码意思没变，根本不痛不痒；只有少数有害会引起疾病，极少数反而帮生物长出新本领呢！',
    },
    {
      nian: '极少数反而有好处？有没有真实世界里的好例子呀？',
      dad: '有的！比如几千年前有些人类祖先身上发生了一处小突变，让成年后依然能产生消化牛奶的乳糖酶，在游牧地区能喝牛奶补充营养就超级占优势；农民培育的抗倒伏水稻和无籽水果，也常常利用了有益变异！',
    },
    {
      nian: '要是基因一丁点都不许变异，所有生物永远一字不差地复制自己，会怎么样？',
      dad: '那才危险呢！如果一个物种所有个体基因全一模一样，只要气候突然变冷或者来了一种新传染病，可能全军覆没；正是因为有丰富的遗传变异，环境变了时总有少数个体能扛过去，生命才能一路延续几十亿年！',
    },
    {
      nian: '我懂了！同一窝小猫花色不同主要是基因重组重新洗牌，再加上偶尔抄错字的基因突变；突变不都是坏事，大多不痛不痒，少数还有利，正是变异让生命这么丰富多彩。',
      dad: '说得太有见地了！正因为每个生命都有独一无二的基因组合和微小差异，世界才不会千篇一律，大自然也有了不断演化的原材料。',
    },
  ],
  tip: '基因突变具有普遍性、随机性、低频性和不定向性，大多数突变是中性的（如基因组非编码区突变或同义突变）。另外，小猫三花毛色（橘黑相间）多为母猫，这与橘色/黑色毛色基因位于 X 染色体上、随机失活有关，是高中伴性遗传的有趣延伸。',
  sources: [
    { title: '生物学 八年级下册 · 第七单元 第二章 第5节 生物的变异', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Mutation（基因突变科普词条）', by: 'National Human Genome Research Institute (NIH)', url: 'https://www.genome.gov/genetics-glossary/Mutation' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '基因重组像洗牌', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [320, 320], size: [220, 96], color: '#ffd8a8', text: '猫爸基因牌', from: 0.2 },
          { kind: 'shape', shape: 'pill', at: [880, 320], size: [220, 96], color: '#d8c5fa', text: '猫妈基因牌', from: 0.5 },
          { kind: 'arrow', path: [[600, 340], [600, 470]], color: '#e8590c', text: '随机洗牌', from: 1.6 },
          { kind: 'shape', shape: 'circle', at: [360, 590], size: [130, 130], color: '#ff9f43', text: '橘猫', from: 2.6 },
          { kind: 'shape', shape: 'circle', at: [600, 590], size: [130, 130], color: '#4a4036', text: '黑猫', from: 3.1 },
          { kind: 'shape', shape: 'circle', at: [840, 590], size: [130, 130], color: '#fff4e0', text: '三花猫', from: 3.6 },
        ],
      },
      {
        turn: 1, title: '偶尔抄错一个字', duration: 9,
        cues: [
          { kind: 'formula', at: [600, 340], text: '原版：G A T - C C A', color: '#2e7d32', from: 0.3 },
          { kind: 'arrow', path: [[600, 410], [600, 510]], color: '#e8590c', text: '抄错一字', from: 1.8 },
          { kind: 'formula', at: [600, 590], text: '新版：G A T - T C A', color: '#e8590c', from: 2.8 },
          { kind: 'text', at: [600, 770], text: '新性状的种子靠突变诞生', from: 4.5 },
        ],
      },
      {
        turn: 2, title: '突变不一定有害', duration: 10,
        cues: [
          { kind: 'meter', at: [600, 290], label: '大多中性无害', start: 0, end: 0.8, color: '#3b6ea5', from: 0.5 },
          { kind: 'meter', at: [600, 440], label: '少数有害致病', start: 0, end: 0.16, color: '#e5484d', from: 1.5 },
          { kind: 'meter', at: [600, 590], label: '极少有利适应', start: 0, end: 0.06, color: '#2e7d32', from: 2.4 },
          { kind: 'myth', wrong: '基因突变一定变成怪物生病', right: '大多中性，少数还能帮生存', from: 4.5 },
        ],
      },
      {
        turn: 3, title: '有利突变的例子', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🥛', path: [[340, 430]], size: 150, from: 0.2 },
          { kind: 'label', at: [340, 380], pos: [340, 230], text: '成年还能消化乳糖', from: 1.0 },
          { kind: 'sprite', icon: '🌾', path: [[860, 430]], size: 150, from: 2.0 },
          { kind: 'label', at: [860, 380], pos: [860, 230], text: '抗倒伏的水稻', from: 2.6 },
          { kind: 'text', at: [600, 650], text: '有益变异帮生物更适应', from: 3.8 },
          { kind: 'text', at: [600, 780], text: '人类育种也常用它', from: 5.2 },
        ],
      },
      {
        turn: 4, title: '多样性护住物种', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [320, 440], size: [150, 150], color: '#ffd43b', text: '抗旱型', from: 0.3 },
          { kind: 'shape', shape: 'circle', at: [600, 440], size: [150, 150], color: '#8ce09b', text: '耐寒型', from: 1.0 },
          { kind: 'shape', shape: 'circle', at: [880, 440], size: [150, 150], color: '#a5d8ff', text: '抗病型', from: 1.7 },
          { kind: 'text', at: [600, 740], text: '变异是生命适应环境的宝藏', from: 4.0 },
        ],
      },
    ],
  },
};
