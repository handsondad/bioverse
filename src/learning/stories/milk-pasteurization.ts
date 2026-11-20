import type { Story } from './types';

export const milkPasteurization: Story = {
  slug: 'milk-pasteurization',
  title: '盒装纯牛奶不用放冰箱也能存半年，是因为加了防腐剂吗？',
  trigger: '逛超市买牛奶时，小念发现冰柜里的鲜牛奶只能放七天，货架上的纸盒纯牛奶却能常温放六个月，翻来覆去在配料表上找防腐剂。',
  dialogue: [
    {
      nian: '爸爸，这盒常温纯牛奶不用放冰箱都能存半年，可配料表只写了“生牛乳”三个字，是不是偷偷加了防腐剂没写呀？',
      dad: '一滴防腐剂都没加，国家标准严禁在纯牛奶里加任何防腐剂！牛奶之所以会变酸发臭，全是里面的细菌繁殖闹的。只要把牛奶原本带的细菌杀得干干净净，再用密不透风的盒子把外面的细菌挡在门外，放半年也照样新鲜！',
      figure: { kind: 'sim', sim: 'pasteurFlask', caption: '切换敞口烧瓶、巴斯德鹅颈瓶、72℃巴氏鲜奶与135℃常温纯牛奶，对比微生物存活率与保质期。' },
    },
    {
      nian: '原来没细菌就不会坏！以前的人怎么知道肉汤和牛奶变臭不是自己凭空长出细菌来的？',
      dad: '这要归功于法国科学巨匠巴斯德！一百六十多年前很多人都迷信肉汤放久了会“自己变出细菌”。巴斯德做了一个绝妙的鹅颈瓶实验：把装肉汤的玻璃瓶颈拉成天鹅脖子一样细长的弯管再煮沸——空气进得去，可空气里的灰尘和细菌全卡在弯管最低处进不去，结果肉汤敞着口放了好几年都没坏！',
      figure: {
        kind: 'image',
        src: '/images/photos/pasteur-portrait.webp',
        alt: '法国微生物学家路易·巴斯德历史肖像照片',
        caption: '路易·巴斯德（1822—1895），用精巧的鹅颈瓶实验揪出了食物腐败的真凶，还发明了巴氏杀菌法。',
        credit: 'Paul Nadar · 公有领域',
        href: 'https://commons.wikimedia.org/wiki/File:Louis_Pasteur,_foto_av_Paul_Nadar,_Crisco_edit.jpg',
      },
    },
    {
      nian: '鹅颈瓶太巧妙了，打断弯管细菌掉进去就会坏吧？那超市冰柜里的“巴氏鲜奶”就是用巴斯德的办法做的吗？',
      dad: '对极了！如果把牛奶架在锅上咕嘟咕嘟煮沸好久，虽然能杀菌，但牛奶的清香风味也煮变味了。巴斯德想出个温和招数：现在的巴氏鲜奶用大约七十二摄氏度加热十五秒就立刻冷却，既杀光了会让人拉肚子的致病菌、留住鲜奶口感，只剩极少数不怕温和热的杂菌和芽孢，所以放进冰箱冷藏能保鲜七到十五天。',
    },
    {
      nian: '巴氏鲜奶是七十二摄氏度温和杀菌！那货架上能常温存半年的纸盒纯牛奶又是怎么做的？',
      dad: '常温奶用的是更彻底的“超高温瞬时灭菌”！让牛奶在大约一百三十五摄氏度的管道里闪电般冲过短短几秒钟，连最顽固的细菌芽孢也一个不剩全部清零；紧接着在无菌车间灌进由纸、塑料和铝箔压成的六层复合无菌盒里，隔绝光线和空气——里面没一个活菌、外面一个也钻不进去！',
    },
    {
      nian: '一百三十五摄氏度闪过几秒钟，会不会把牛奶里的钙和蛋白质全烫没了？开封以后还能放常温吗？',
      dad: '放心，牛奶最宝贵的蛋白质和钙在几秒超高温下稳得很，常温奶和巴氏鲜奶的营养几乎打个平手，哪个方便喝哪个！但千万记住一条铁律：一旦插上吸管或拧开盖子，空气里的细菌立马像打断鹅颈瓶一样钻进去了，开封后必须马上喝完或放冰箱尽快喝掉！',
    },
    {
      nian: '我懂了！巴斯德鹅颈瓶证明腐败来自外来微生物；常温纯牛奶不加防腐剂，靠约一百三十五摄氏度超高温瞬时灭菌加无菌密封保鲜半年，巴氏鲜奶则用七十二摄氏度留住风味并需冷藏。',
      dad: '总结得明明白白！下次逛超市买牛奶、买罐头，你就知道“高温灭菌加真空密封”才是最厉害的天然保鲜术啦。',
    },
  ],
  tip: '无论是常温盒装奶还是冷藏巴氏奶，选购时看配料表只有“生牛乳”即为纯牛奶（若第一项是水或白砂糖则属于含乳饮料，蛋白质含量远低于纯牛奶）。一旦发现牛奶盒出现“胀包”鼓起，说明密封破损后内部已有产气细菌繁殖，切勿饮用。',
  sources: [
    { title: '生物学 八年级上册 · 第五单元 第四章 细菌（巴斯德实验）与食品保存', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Pasteurization & Ultra-Pasteurization Time-Temperature Standards（乳品巴氏杀菌与超高温灭菌标准）', by: 'U.S. Food and Drug Administration (FDA)', url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/dairy-product-manufacturers-attachment-1-4' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '纯牛奶零防腐剂', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🥛', path: [[340, 440]], size: 150, from: 0.2 },
          { kind: 'shape', shape: 'pill', at: [760, 390], size: [300, 96], color: '#8ce09b', text: '100%生牛乳', from: 1.0 },
          { kind: 'label', at: [760, 490], pos: [760, 580], text: '杀光内菌+挡住外菌=不坏', color: '#2e7d32', from: 2.4 },
          { kind: 'myth', wrong: '常温放半年的纯牛奶加了防腐剂', right: '一滴防腐剂没加，全靠超高温与密封', from: 4.2 },
        ],
      },
      {
        turn: 1, title: '巴斯德鹅颈瓶', duration: 9,
        cues: [
          { kind: 'vessel', vessel: 'flask', at: [420, 460], size: [220, 240], liquid: '#fff3bf', level: 0.55, label: '煮沸肉汤', from: 0.3 },
          { kind: 'arrow', path: [[760, 280], [560, 340]], color: '#e8590c', text: '细菌卡在弯管', from: 1.5 },
          { kind: 'shape', shape: 'circle', at: [560, 340], size: [70, 70], color: '#ffa8a8', text: '挡住', from: 2.2 },
          { kind: 'label', at: [420, 610], pos: [780, 560], text: '放几年仍清澈不腐败', from: 3.4 },
          { kind: 'text', at: [600, 750], text: '变质全是外来微生物落入繁殖', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '巴氏鲜奶重风味', duration: 9,
        cues: [
          { kind: 'count', at: [360, 390], label: '巴氏温和加热', start: 20, end: 72, unit: '℃', over: 2.0, from: 0.4 },
          { kind: 'shape', shape: 'rect', at: [800, 440], size: [220, 240], color: '#d0ebff', text: '冷藏鲜奶', from: 1.2 },
          { kind: 'label', at: [800, 320], pos: [820, 210], text: '15秒杀致病菌留鲜香', from: 2.6 },
          { kind: 'text', at: [600, 740], text: '剩少量耐热菌，需放冰箱冷藏', from: 4.6 },
        ],
      },
      {
        turn: 3, title: '超高温配无菌砖', duration: 9,
        cues: [
          { kind: 'count', at: [340, 390], label: '瞬时灭菌温度', start: 72, end: 135, unit: '℃', over: 2.0, from: 0.4 },
          { kind: 'arrow', path: [[490, 430], [660, 430]], color: '#2e7d32', text: '无菌灌装', from: 1.8 },
          { kind: 'shape', shape: 'rect', at: [820, 440], size: [220, 240], color: '#d8f3dc', text: '六层无菌盒', from: 2.4 },
          { kind: 'label', at: [820, 320], pos: [840, 210], text: '铝箔塑料纸板隔光隔氧', from: 3.6 },
          { kind: 'text', at: [600, 740], text: '菌和芽孢归零，常温安心存', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '开封后尽快喝完', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [360, 430], size: [250, 110], color: '#8ce09b', text: '钙与蛋白都在', from: 0.4 },
          { kind: 'shape', shape: 'pill', at: [840, 430], size: [250, 110], color: '#ffd8a8', text: '开封即进菌', motion: 'pulse', from: 1.4 },
          { kind: 'label', at: [840, 540], pos: [840, 620], text: '插吸管后别在书包闷一天', color: '#e8590c', from: 2.8 },
          { kind: 'text', at: [600, 750], text: '看配料表选纯牛奶健康成长', from: 4.8 },
        ],
      },
    ],
  },
};
