import type { Story } from './types';

export const calicoSexChromosome: Story = {
  slug: 'calico-sex-chromosome',
  title: '男孩女孩由哪条染色体决定，为什么三花猫几乎全是母猫？',
  trigger: '小区花坛边蹲着一只橘、黑、白三色相间的三花猫，宠物店阿姨笑着对小念说：“光看这身三色花衣裳，就知道它准是只母猫！”',
  dialogue: [
    {
      nian: '爸爸，为什么阿姨只看了一眼猫身上的橘黑白色块，就能猜中它是母猫？性别和毛色还能绑在一块儿吗？',
      dad: '阿姨用的可是正宗的遗传学破案法！无论人还是猫，细胞核里都有一对专门决定性别的“性染色体”，分别叫 X 染色体和 Y 染色体。女孩子和母猫拥有两条 X 染色体，而男孩子和公猫是一条 X 配一条短短的 Y 染色体。',
      figure: {
        kind: 'image',
        src: '/images/photos/calico-cat.webp',
        alt: '拥有橘色、黑色与白色斑块的三花母猫照片',
        caption: '身披橘、黑、白三色大花袄的三花猫，在自然界里几乎清一色全是小母猫。',
        credit: 'Vitorperrut555 · CC0 1.0',
        href: 'https://commons.wikimedia.org/wiki/File:Calico_Cat_in_2024.jpg',
      },
    },
    {
      nian: '在人类和小猫家里，生男孩还是生女孩是由妈妈决定的，还是爸爸决定的呀？',
      dad: '生男生女机会各占一半！因为妈妈手里只有两条 X，给每个宝宝的永远是一条 X；而爸爸手里是一条 X 和一条 Y，如果爸爸给出 X，配成两条 X 就是女孩；如果爸爸给出 Y，配成一 X 一 Y 就是男孩——就像抛硬币一样公平，谁也左右不了！',
    },
    {
      nian: '原来爸爸给 X 或 Y 各占一半！那这跟三花猫身上同时长橘色毛和黑色毛有什么关系呢？',
      dad: '巧就巧在，猫咪控制毛发呈橘色还是黑色的基因，偏偏住在 X 染色体上，而短短的 Y 染色体上根本没有这个座位！（肚皮上的白毛归另一处白斑基因管。）所以正常公猫只有一条 X，要么带橘色基因长成大橘猫，要么带黑色基因长成黑猫或奶牛猫，没法同时装下橘和黑！',
      figure: { kind: 'sim', sim: 'calicoCoat', caption: '切换母猫（两条X）与公猫（一条X一条Y），再选X染色体上的毛色基因，亲手配出一只三花猫！' },
    },
    {
      nian: '公猫只有一条 X 装不下两种颜色！那母猫拿到一橘一黑两条 X 以后，为什么不是混成棕褐色，而是一块橘一块黑呢？',
      dad: '这就要请出女科学家玛丽·莱昂发现的超酷现象了！母猫还是小小胚胎的时候，为了不让两条 X 基因重复干活，每个皮肤细胞都会随机挑其中一条 X 卷起来“睡大觉”：这块皮肤关掉了黑 X，长出来就是橘毛；隔壁那块关掉了橘 X，长出来就是黑毛，再加上白肚皮，就拼成了独一无二的三花大衣！',
    },
    {
      nian: '随机关掉一条 X，那两只基因一模一样的克隆三花猫花纹也会不一样啰？真的一只三花公猫都没有吗？',
      dad: '你猜得太准了！世界上第一只克隆猫就是三花母猫，结果克隆出来的宝宝花斑位置跟妈妈完全不一样！至于三花公猫，大约三千只三花猫里才会偶尔碰见一只——因为它分染色体时出了小差错，多拿了一条 X，变成了两条 X 加一条 Y 的特殊公猫！',
    },
    {
      nian: '我懂了！妈妈给 X、爸爸给 X 或 Y 决定性别；猫的橘色和黑色基因都住在 X 染色体上，只有拥有两条 X 的母猫才能集齐橘黑两种基因，再靠细胞随机关掉一条 X 拼出三花猫。',
      dad: '破案成功！下次在小区遇见大橘猫也可以留意看看，因为公猫只要拿到一条橘 X 就全身变橘，母猫得两条全是橘 X 才纯橘，所以大橘猫里公猫反而占了近八成呢！',
    },
  ],
  tip: '伴性遗传在人类医学中同样重要，例如红绿色盲基因也位于 X 染色体上（隐性），因此男性红绿色盲发生率明显高于女性。跟孩子聊性别遗传时，正好用“X 与 Y 随机结合各占 50%”科学破除重男轻女或将生男生女归咎于某一方的陈旧偏见。',
  sources: [
    { title: '生物学 八年级下册 · 人的性别遗传；高中生物 必修2 · 第2章 伴性遗传', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'X Chromosome: X Inactivation（X 染色体随机失活与三花猫毛色机制）', by: 'Nature Education Scitable', url: 'https://www.nature.com/scitable/topicpage/x-chromosome-x-inactivation-323/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '性染色体定雌雄', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [340, 440], size: [220, 130], color: '#ffa8a8', text: '母：两条X', from: 0.3 },
          { kind: 'shape', shape: 'pill', at: [860, 440], size: [220, 130], color: '#74c0fc', text: '公：X配Y', from: 0.9 },
          { kind: 'label', at: [600, 320], pos: [600, 220], text: '人和猫都靠这套密码分雌雄', from: 2.2 },
          { kind: 'text', at: [600, 730], text: '三花猫的秘密就藏在X染色体上', from: 4.5 },
        ],
      },
      {
        turn: 1, title: '生男生女各一半', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [260, 360], size: [130, 130], color: '#ffa8a8', text: '妈妈给X', from: 0.3 },
          { kind: 'shape', shape: 'circle', at: [260, 530], size: [130, 130], color: '#74c0fc', text: '爸爸X或Y', from: 0.8 },
          { kind: 'arrow', path: [[350, 410], [620, 360]], color: '#e8590c', text: '50%组合', from: 1.8 },
          { kind: 'arrow', path: [[350, 480], [620, 530]], color: '#3b6ea5', text: '50%组合', from: 2.2 },
          { kind: 'shape', shape: 'pill', at: [800, 360], size: [200, 90], color: '#ffd8a8', text: '女孩(双X)', from: 2.8 },
          { kind: 'shape', shape: 'pill', at: [800, 530], size: [200, 90], color: '#99e9f2', text: '男孩(X+Y)', from: 3.2 },
          { kind: 'text', at: [600, 740], text: '随机配对像抛硬币，完全均等', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '公猫装不下两色', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [340, 430], size: [110, 180], color: '#ff922b', text: 'X橘', from: 0.3 },
          { kind: 'shape', shape: 'rect', at: [480, 460], size: [90, 110], color: '#adb5bd', text: 'Y空', from: 0.7 },
          { kind: 'label', at: [410, 320], pos: [380, 220], text: '公猫单X：非橘即黑', color: '#e8590c', from: 1.8 },
          { kind: 'shape', shape: 'rect', at: [800, 430], size: [110, 180], color: '#ff922b', text: 'X橘', from: 1.2 },
          { kind: 'shape', shape: 'rect', at: [940, 430], size: [110, 180], color: '#343a40', text: 'X黑', from: 1.6 },
          { kind: 'myth', wrong: '公猫母猫长出三花的概率一样', right: '只有双X母猫才能同时集齐橘和黑', from: 4.2 },
        ],
      },
      {
        turn: 3, title: '随机休眠拼花袄', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [360, 440], size: [170, 170], color: '#ff922b', text: '开橘关黑', from: 0.4 },
          { kind: 'shape', shape: 'circle', at: [600, 440], size: [170, 170], color: '#495057', text: '开黑关橘', from: 1.2 },
          { kind: 'shape', shape: 'circle', at: [840, 440], size: [170, 170], color: '#f8f9fa', outline: true, text: '白斑基因', from: 2.0 },
          { kind: 'label', at: [600, 340], pos: [600, 220], text: '每块胚胎细胞随机关一条X', from: 3.2 },
          { kind: 'text', at: [600, 740], text: '三色拼图天成，每只花纹不同', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '罕见例外与橘猫', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🐱', path: [[360, 430]], size: 150, from: 0.3 },
          { kind: 'label', at: [360, 540], pos: [360, 620], text: '多拿一条X才是三花公猫', from: 1.5 },
          { kind: 'sprite', icon: '🐈', path: [[840, 430]], size: 150, from: 0.9 },
          { kind: 'label', at: [840, 540], pos: [840, 620], text: '纯橘猫里公猫反而占大多数', from: 2.6 },
          { kind: 'text', at: [600, 750], text: '看小猫花色就能读懂伴性遗传', from: 4.8 },
        ],
      },
    ],
  },
};
