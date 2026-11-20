import type { Story } from './types';

export const tuArtemisininMalaria: Story = {
  slug: 'tu-artemisinin-malaria',
  title: '蚊子叮人传的疟疾是什么虫，屠呦呦为什么要把青蒿“冷着泡”才有效？',
  trigger: '夏夜挂蚊帐时，爸爸讲起中国女科学家屠呦呦奶奶研制的青蒿素救了全世界几百万人，小念好奇蚊子传的疟疾到底是什么怪病。',
  dialogue: [
    {
      nian: '爸爸，夏天被蚊子叮一口怎么还会得吓人的疟疾呀？疟疾是细菌还是病毒闹出来的？',
      dad: '它既不是细菌，也不是病毒，而是一种有细胞核的“单细胞寄生虫”，名字叫疟原虫！当带虫的雌性按蚊叮人吸血时，疟原虫就顺着蚊子嘴溜进人体，先钻进肝脏，再一窝蜂钻进我们的红细胞里大吃大喝、疯狂繁殖，每隔几天涨破一批红细胞，让人忽冷忽热打摆子发高烧，严重时会危及生命！',
      figure: {
        kind: 'image',
        src: '/images/photos/tu-youyou-2015.webp',
        alt: '2015年诺贝尔生理学或医学奖得主中国药学家屠呦呦照片',
        caption: '中国药学家屠呦呦（1930—），带领团队从传统草药黄花蒿中提取出青蒿素，荣获 2015 年诺贝尔生理学或医学奖。',
        credit: 'Bengt Nyman · CC BY 2.0',
        href: 'https://commons.wikimedia.org/wiki/File:D810_4987_Tu_Youyou,_medicine_(22945001843)_(cropped).jpg',
      },
    },
    {
      nian: '钻进红细胞里的单细胞寄生虫真狡猾！以前不是有治疟疾的老药吗，屠呦呦奶奶为什么要重新找新药？',
      dad: '因为到了二十世纪六十年代，狡猾的疟原虫对原来的奎宁、氯喹等老药产生了严重耐药性，每年全世界都有上百万人被夺走生命。屠呦呦临危受命担任攻关组长，带着团队收集了两千多个古方、筛选了几百种中草药提取物，起初把目光锁定在“青蒿”上，可实验结果却急坏了大家！',
    },
    {
      nian: '明明锁定了青蒿，实验为什么急坏大家了？熬出来的青蒿汤不管用吗？',
      dad: '太奇怪了，有时候有点效，有时候抑制率只有可怜的百分之十几！屠呦呦反复琢磨问题出在哪儿，直到她重读东晋医药学家葛洪在一千六百多年前写的《肘后备急方》，看到里面写着：“青蒿一握，以水二升渍，绞取汁，尽服之”——她脑子里瞬间闪过一道光：古人为什么拿冷水泡完拧汁喝，不拿火煮汤呢？',
      figure: { kind: 'sim', sim: 'artemisininExtract', caption: '切换100℃沸水煎煮、78℃乙醇回流与35℃乙醚冷浸提取，看温度怎样决定青蒿素活性与疟原虫清除率。' },
    },
    {
      nian: '对呀，中药平时都是大火熬汤，葛洪干嘛要用冷水泡着拧汁？难道有效成分怕烫？',
      dad: '一语中的！后来查明青蒿素分子中间有一座抗疟最关键的“过氧桥”，就像酶怕高温变性一样，温度一高这座小桥就震断失效了！1971 年屠呦呦果断放弃高温煎煮，改用沸点只有三十五摄氏度的“乙醚”在低温下提取，再去掉没有效的酸性杂质——第 191 号样品送到动物实验一看，对疟原虫的抑制率飙到了百分之百！',
      figure: {
        kind: 'bars',
        caption: '不同提取温度对实验鼠疟原虫抑制率的戏剧性跨越（据诺贝尔奖科学背景文献）。',
        unit: '%',
        bars: [
          { label: '沸水煎煮法', value: 20, text: '高温坏结构，仅约20%' },
          { label: '热乙醇提取', value: 40, text: '约12%~40%波动' },
          { label: '35℃乙醚法', value: 100, text: '抑制率达 100%！', hot: true },
        ],
      },
    },
    {
      nian: '第 191 号样品百分之百成功，听得我都起鸡皮疙瘩了！后来怎么确定这药对人也安全呢？',
      dad: '为了抢时间救病人，在动物实验安全后，屠呦呦和两位同事主动报名第一批以身试药，住进医院亲自服下提取物检验安全性！随后团队提纯出亮晶晶的青蒿素结晶，还进一步研制出药效更强的双氢青蒿素。世界卫生组织把它列为抗疟首选药，拯救了全球数百万人的生命！',
    },
    {
      nian: '我懂了！蚊子传播的疟原虫是钻进红细胞的单细胞寄生虫；青蒿素怕高温一煮就失效，屠呦呦受古书“冷水泡绞汁”启发改用三十五摄氏度低沸点乙醚提取，保住过氧桥活性，降伏了耐药疟疾。',
      dad: '总结得有理有据！古人的细致观察加上现代化学提纯与严密实验，成就了这份中国送给全世界的生命礼物。',
    },
  ],
  tip: '切断蚊媒传染病（如疟疾、登革热）最有效的日常手段是“防蚊灭蚊、清理积水”：蚊子幼虫（孑孓）必须在静水里发育，每周倾倒阳台花盆托盘、闲置瓶罐里的积水就能从源头减少蚊虫。中药材青蒿（植物学名黄花蒿）直接泡水有效成分含量极低且不稳定，患病切勿自行采草药泡水，必须及时就医规范治疗。',
  sources: [
    { title: '生物学 八年级下册 · 传染病及其预防；高中生物 必修1 · 与生物学有关的诺贝尔奖成果', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Tu Youyou — Biographical & Nobel Prize Scientific Background（屠呦呦与青蒿素发现科学背景）', by: 'NobelPrize.org (2015)', url: 'https://www.nobelprize.org/prizes/medicine/2015/tu/biographical/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '红细胞里的寄生虫', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🦟', path: [[260, 430]], size: 140, from: 0.2 },
          { kind: 'arrow', path: [[370, 430], [550, 430]], color: '#e03131', text: '按蚊叮咬传入', from: 1.2 },
          { kind: 'shape', shape: 'circle', at: [760, 430], size: [210, 210], color: '#ff8787', from: 2.0 },
          { kind: 'label', at: [840, 340], pos: [930, 230], text: '人体红细胞', from: 2.2 },
          { kind: 'shape', shape: 'circle', at: [760, 430], size: [76, 76], color: '#7c52b8', text: '疟原虫', motion: 'pulse', from: 2.6 },
          { kind: 'myth', wrong: '疟疾是病毒或细菌引起的普通发烧', right: '元凶是单细胞真核寄生虫——疟原虫', from: 4.2 },
        ],
      },
      {
        turn: 1, title: '百草筛选遇瓶颈', duration: 9,
        cues: [
          { kind: 'count', at: [360, 390], label: '查阅收集古方', start: 0, end: 2000, unit: '余个', over: 2.2, from: 0.4 },
          { kind: 'sprite', icon: '🌿', path: [[780, 390]], size: 140, from: 1.0 },
          { kind: 'label', at: [780, 500], pos: [780, 590], text: '锁定青蒿却时灵时不灵', color: '#e8590c', from: 2.4 },
          { kind: 'text', at: [600, 740], text: '耐药虫肆虐，团队日夜寻症结', from: 4.6 },
        ],
      },
      {
        turn: 2, title: '古籍一句话点醒', duration: 9,
        cues: [
          { kind: 'sprite', icon: '📜', path: [[320, 430]], size: 150, from: 0.3 },
          { kind: 'shape', shape: 'pill', at: [740, 390], size: [340, 100], color: '#fff3bf', text: '水渍绞汁', from: 1.2 },
          { kind: 'label', at: [740, 490], pos: [740, 590], text: '《肘后备急方》关键启发', color: '#2e7d32', from: 2.8 },
          { kind: 'text', at: [600, 740], text: '莫非沸水把抗疟成分煮坏了？', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '35℃低温保活性', duration: 9,
        cues: [
          { kind: 'vessel', vessel: 'flask', at: [340, 450], size: [210, 230], liquid: '#d8f3dc', level: 0.65, label: '35℃乙醚', from: 0.3 },
          { kind: 'arrow', path: [[470, 450], [640, 450]], color: '#2e7d32', text: '第191号样品', from: 1.5 },
          { kind: 'meter', at: [840, 420], label: '疟原虫抑制率', start: 0.2, end: 1.0, color: '#2e7d32', over: 2.2, from: 2.2 },
          { kind: 'label', at: [840, 530], pos: [840, 610], text: '完好保住怕热的过氧桥结构', from: 3.6 },
          { kind: 'text', at: [600, 750], text: '低温提取一举攻克百次难关！', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '惠及全球诺奖礼', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [380, 430], size: [260, 110], color: '#8ce09b', text: '青蒿素结晶', from: 0.4 },
          { kind: 'arrow', path: [[530, 430], [710, 430]], color: '#2e7d32', text: '挽救数百万人', from: 1.6 },
          { kind: 'sprite', icon: '🌍', path: [[840, 430]], size: 160, from: 2.4 },
          { kind: 'text', at: [600, 730], text: '古籍智慧融现代科学救百万人', from: 4.6 },
        ],
      },
    ],
  },
};
