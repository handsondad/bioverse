import type { Story } from './types';

export const tadpoleTailApoptosis: Story = {
  slug: 'tadpole-tail-apoptosis',
  title: '小蝌蚪变青蛙时，长长的尾巴是自己断掉落在水里的吗？',
  trigger: '阳台鱼缸里养的小蝌蚪长出了健壮的四条腿，长尾巴却几乎没了，小念趴在缸边找了半天也没找到断下来的尾巴。',
  dialogue: [
    {
      nian: '爸爸，小蝌蚪的尾巴昨天还有一小截，今天全没了，可缸底根本没有断尾巴，它去哪儿了？',
      dad: '小蝌蚪的尾巴从来不是咔嚓断掉扔在水里的，而是被它自己的身体悄悄“拆掉回收”啦！尾巴里的蛋白质和营养特别宝贵，小蝌蚪变青蛙时嘴巴正在改建没法好好吃饭，全靠回收尾巴的营养来长四条腿呢。',
      figure: { kind: 'sim', sim: 'tadpoleMorph', caption: '拖动变态发育阶段滑块，看甲状腺激素怎样指挥尾巴有序拆解、把营养调拨给四肢。' },
    },
    {
      nian: '把自己的尾巴拆掉当营养？那是谁给尾巴细胞下达拆迁命令的？',
      dad: '总指挥是身体里分泌的一种信使——甲状腺激素！随着小蝌蚪长大，血液里的甲状腺激素一点点升高：浓度低的时候先催着后腿和前腿长出来，等到激素冲上最高峰，就给尾巴细胞发去“原地解散”的信号。',
      figure: {
        kind: 'scale',
        caption: '甲状腺激素像精准的工程进度表，先建好新腿，最后才拆掉旧尾巴。',
        axis: '蝌蚪血液甲状腺激素从低到高',
        stops: [
          { label: '激素极低', note: '用鳃和长尾游', color: '#d0ebff' },
          { label: '激素初升', note: '先长出两条后腿', color: '#d8f3dc' },
          { label: '激素中升', note: '前腿伸出肺发育', color: '#fff3bf' },
          { label: '激素高峰', note: '尾巴细胞凋亡回收', color: '#ffd8a8', hot: true },
        ],
      },
    },
    {
      nian: '如果水里缺碘造不出足够的甲状腺激素，小蝌蚪会变成什么样？',
      dad: '科学家真做过这个实验：如果缺少甲状腺激素，小蝌蚪就会一直停在幼虫模样，只长个头不长腿，变成一只大号“巨型蝌蚪”迟迟变不成青蛙；反过来如果在水里早早加一点甲状腺激素，它就会提前变成指甲盖那么小袖珍青蛙。',
    },
    {
      nian: '激素指挥得太准了！那尾巴细胞解散的时候，小蝌蚪不会疼或者发炎流血吗？',
      dad: '一点也不发炎！这种由基因提前写好程序的“礼貌退场”叫细胞凋亡。和摔伤擦破皮那种乱糟糟的细胞坏死不同，凋亡时细胞里的溶酶体先从内部把零件剪碎打包，旁边的吞噬细胞顺手收走运去长腿，干干净净不留伤口。',
    },
    {
      nian: '原来细胞凋亡这么整洁！那只有小蝌蚪才有细胞凋亡，我们人类身上也有吗？',
      dad: '我们每个人都有，而且多亏了它！你在妈妈肚子里还是小胚胎的时候，五根手指和脚趾本来像小鸭掌一样连着蹼；正是蹼中间的细胞按时启动细胞凋亡主动退场，才雕塑出你现在灵巧分开的十根手指呀。',
    },
    {
      nian: '我懂了！小蝌蚪的尾巴不是断在水里，而是在甲状腺激素指挥下启动了细胞凋亡，把尾巴细胞干净拆解、回收营养去长四肢；我们胚胎时手指分开靠的也是细胞凋亡。',
      dad: '总结得棒极了！生命的成长不光靠细胞分裂做“加法”，也离不开细胞凋亡精准做“减法”，一加一减才雕出完美的身体。',
    },
  ],
  tip: '春天在池塘边观察蝌蚪时，建议只带两三只回家放在浅水宽口容器里，水里放一块斜露水面的鹅卵石——等蝌蚪肺发育好、尾巴快收完时，它必须爬上石头呼吸空气，否则全深水反而会淹着刚变成的幼蛙；观察完请放回原池塘。',
  sources: [
    { title: '生物学 八年级下册 · 两栖动物的生殖和发育；高中生物 必修1 · 第6章 细胞的凋亡', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Tail Resorption During Metamorphosis in Xenopus Tadpoles（蝌蚪变态期尾部吸收机制）', by: 'Frontiers in Endocrinology / PMC', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6426756/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '消失的长尾巴', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [380, 440], size: [180, 120], color: '#52b788', text: '小蝌蚪', from: 0.2 },
          { kind: 'shape', shape: 'pill', at: [620, 440], size: [260, 56], color: '#95d5b2', text: '长尾巴', motion: 'shrink', over: 3.5, from: 0.8 },
          { kind: 'myth', wrong: '蝌蚪尾巴自己断掉落在水底', right: '尾巴被身体内部拆解回收当营养', from: 3.8 },
        ],
      },
      {
        turn: 1, title: '激素工程进度', duration: 9,
        cues: [
          { kind: 'meter', at: [340, 420], label: '甲状腺激素', start: 0.15, end: 0.95, color: '#e8590c', over: 3.5, from: 0.4 },
          { kind: 'arrow', path: [[470, 420], [630, 360]], color: '#2e7d32', text: '先催长四肢', from: 1.6 },
          { kind: 'arrow', path: [[470, 450], [630, 510]], color: '#e8590c', text: '高峰收尾巴', from: 2.8 },
          { kind: 'sprite', icon: '🐸', path: [[820, 440]], size: 150, from: 3.6 },
          { kind: 'text', at: [600, 740], text: '新腿能蹬水了，旧尾巴才退场', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '缺激素长不出腿', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [360, 440], size: [300, 120], color: '#b8e2fc', text: '缺激素', from: 0.3 },
          { kind: 'label', at: [360, 380], pos: [340, 230], text: '一直停在蝌蚪期', from: 1.5 },
          { kind: 'shape', shape: 'circle', at: [840, 440], size: [170, 140], color: '#8ce09b', text: '正常青蛙', from: 1.2 },
          { kind: 'label', at: [840, 370], pos: [860, 230], text: '激素充足顺利变态', from: 2.6 },
          { kind: 'text', at: [600, 740], text: '碘是合成甲状腺激素的重要原料', from: 4.6 },
        ],
      },
      {
        turn: 3, title: '整洁的细胞凋亡', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [380, 440], size: [180, 180], color: '#ffd8a8', text: '尾细胞', motion: 'shrink', over: 3.0, from: 0.3 },
          { kind: 'particles', box: [480, 370, 200, 140], count: 12, color: '#2e7d32', motion: 'rise', size: 10, from: 1.8 },
          { kind: 'arrow', path: [[660, 440], [800, 440]], color: '#2e7d32', text: '氨基酸回收', from: 2.5 },
          { kind: 'shape', shape: 'pill', at: [910, 440], size: [180, 100], color: '#51cf66', text: '长壮后腿', from: 3.2 },
          { kind: 'text', at: [600, 740], text: '内部整洁拆解，不发炎不流血', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '雕出十根手指', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🖐️', path: [[600, 430]], size: 170, from: 0.4 },
          { kind: 'pulse', at: [600, 400], color: '#7c52b8', radius: 95, rate: 0.7, from: 1.4 },
          { kind: 'label', at: [600, 340], pos: [860, 250], text: '指间蹼细胞主动凋亡', from: 2.4 },
          { kind: 'text', at: [600, 720], text: '分裂做加法，凋亡精准做减法', from: 4.4 },
        ],
      },
    ],
  },
};
