import type { Story } from './types';

export const flemingPenicillin: Story = {
  slug: 'fleming-penicillin',
  title: '忘洗的培养皿里长了一团青霉，怎么救了成千上万人的命？',
  trigger: '厨房果篮里有个橘子长了一块青绿色的毛毛，妈妈赶紧扔进垃圾桶，小念却喊：“别扔呀，书上说青霉菌不是能变出救命的青霉素吗？”',
  dialogue: [
    {
      nian: '爸爸，书上说弗莱明就是从一团青霉里发现了救命的青霉素，那家里长了青霉的烂橘子和发霉面包能不能留着当药吃呀？',
      dad: '千万使不得，赶紧扔掉还要洗手！自然界里的霉菌有成千上万种，家里发霉面包和烂水果上的杂霉会分泌剧毒的黄曲霉毒素、展青霉素，吃下去会严重伤肝中毒！当年弗莱明立下大功的那朵青霉，可是经过科学家严密筛选和提纯才变成药的！',
      figure: {
        kind: 'image',
        src: '/images/photos/fleming-lab.webp',
        alt: '亚历山大·弗莱明在圣玛丽医院实验室手持培养皿观察的历史照片',
        caption: '英国细菌学家亚历山大·弗莱明在实验室观察细菌培养皿，一次敏锐的追问改写了人类医学史。',
        credit: '英国新闻部档案 · 公有领域',
        href: 'https://commons.wikimedia.org/wiki/File:Alexander_Fleming_3.jpg',
      },
    },
    {
      nian: '好险，差点把霉菌毒素当成药了！那 1928 年弗莱明在忘洗的培养皿里到底看到了什么怪事？',
      dad: '那年夏天弗莱明去度假前，实验桌上留了一摞养着凶猛“金黄色葡萄球菌”的玻璃培养皿。回来准备清洗时，他突然停住了手：其中一个碟子不小心飘进一朵青绿色的青霉菌，神奇的是，青霉菌周围一大圈葡萄球菌全都融化成透明水滴消失了，像画出了一圈神圣的“无人区”！',
      figure: { kind: 'sim', sim: 'penicillinZone', caption: '切换普通细菌盘、1928弗莱明抑菌圈培养皿和擅自停药耐药菌反扑，看懂青霉素的作用与用药规矩。' },
    },
    {
      nian: '青霉菌周围的细菌全化掉了！为什么青霉素只杀细菌，打进我们身体里却不会把人的细胞也化掉呢？',
      dad: '因为青霉素专挑细菌身上有、而人类细胞根本没有的软肋下手——细胞壁！细菌在分裂长大时，必须像砌砖墙一样不停修补外面的细胞壁；青霉素专门卡住砌墙的酶，细菌没了结实的外墙，细胞一吸水“啪”地就自己涨破了！而我们人体细胞本来就没有细胞壁，自然毫发无伤。',
    },
    {
      nian: '专拆细菌的细胞壁，这招太准了！那弗莱明自己一个人就把青霉素做成药救人了吗？',
      dad: '光靠一个人可没戏！青霉素特别娇气，弗莱明试了好几年都没法把它大量提纯出来，差点就成了故纸堆里的冷门记录。直到十多年后，牛津大学的弗洛里和钱恩团队接过接力棒，用成百上千个培养罐攻克了提纯和量产难关，让以前擦破皮感染都会丧命的肺炎、伤口败血症第一次有了救命神药，三人还在 1945 年共享了诺贝尔奖！',
    },
    {
      nian: '原来是好几位科学家接力才做成药的！那既然青霉素这么厉害，为什么医生不准我们随便吃抗生素，开了药还不准半途停药？',
      dad: '因为细菌也在演化！如果你一感冒流鼻涕（大多是没细胞壁的病毒引起）就乱吃抗生素，或者吃了两天不烧了就擅自停药，那些普通细菌虽然死了，极少数天生不怕药的“耐药突变菌”反而没了对手疯狂繁殖！以后真感染这种超级耐药菌，好药就失灵啦。',
    },
    {
      nian: '我懂了！弗莱明发现青霉分泌的青霉素能溶解细菌，弗洛里和钱恩将它提纯量产；青霉素专拆细菌细胞壁所以不伤人体细胞，但发霉食物含毒素绝对不能吃，使用抗生素也必须遵医嘱足疗程服用。',
      dad: '又安全又科学！机遇永远偏爱像弗莱明那样仔细观察的人，而科学用药则是我们每个人守护救命好药的责任。',
    },
  ],
  tip: '使用青霉素类或头孢类抗生素前必须确认孩子有无药物过敏史；医生开具抗生素后，务必按医嘱剂量与天数吃满疗程，不可自行增减或把上次剩下的抗生素随便给孩子吃。家中面包、坚果、水果一旦局部发霉，菌丝与毒素早已扩散至肉眼看不见的内部，切掉霉斑也不能吃，应整块丢弃。',
  sources: [
    { title: '生物学 八年级上册 · 人类对细菌和真菌的利用；八年级下册 · 用药与急救', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Sir Alexander Fleming — Facts & Nobel Lecture（弗莱明、弗洛里与钱恩发现并研制青霉素）', by: 'NobelPrize.org', url: 'https://www.nobelprize.org/prizes/medicine/1945/fleming/facts/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '发霉食物碰不得', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🍊', path: [[340, 430]], size: 150, from: 0.2 },
          { kind: 'label', at: [340, 540], pos: [340, 620], text: '杂霉含剧毒霉菌毒素', color: '#e8590c', from: 1.4 },
          { kind: 'sprite', icon: '💊', path: [[860, 430]], size: 140, from: 0.8 },
          { kind: 'label', at: [860, 540], pos: [860, 620], text: '纯化药用菌株才成良药', color: '#2e7d32', from: 2.4 },
          { kind: 'myth', wrong: '发霉面包水果有青霉素可以吃', right: '发霉食物含黄曲霉毒素等剧毒快扔掉', from: 4.2 },
        ],
      },
      {
        turn: 1, title: '1928神奇抑菌圈', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [600, 450], size: [340, 340], color: '#fff9db', outline: true, from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [530, 420], size: [190, 190], color: '#ffffff', from: 1.0 },
          { kind: 'label', at: [445, 470], pos: [260, 560], text: '透明抑菌圈', color: '#2e7d32', from: 1.3 },
          { kind: 'shape', shape: 'circle', at: [530, 420], size: [86, 86], color: '#51cf66', text: '青霉', motion: 'pulse', from: 1.6 },
          { kind: 'particles', box: [650, 340, 110, 200], count: 10, color: '#f59f00', motion: 'jitter', size: 10, from: 2.2 },
          { kind: 'label', at: [530, 325], pos: [850, 230], text: '周边葡萄球菌全被溶解', from: 3.4 },
          { kind: 'text', at: [600, 750], text: '细心追问怪现象，揪出大发现', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '专拆细菌细胞壁', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [360, 440], size: [240, 170], color: '#ffd43b', text: '细菌砌外墙', motion: 'shrink', over: 2.8, from: 0.4 },
          { kind: 'label', at: [360, 350], pos: [340, 230], text: '青霉素拦住细胞壁合成', color: '#e8590c', from: 1.6 },
          { kind: 'shape', shape: 'circle', at: [840, 440], size: [200, 170], color: '#b8e2fc', text: '人体细胞', from: 1.0 },
          { kind: 'label', at: [840, 350], pos: [860, 230], text: '本来没细胞壁，安全无虞', color: '#2e7d32', from: 2.8 },
          { kind: 'text', at: [600, 740], text: '专打细菌软肋，不伤人体细胞', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '科学接力救万人', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [260, 440], size: [200, 100], color: '#8ce09b', text: '弗莱明发现', from: 0.3 },
          { kind: 'arrow', path: [[380, 440], [520, 440]], color: '#2e7d32', text: '十年接力', from: 1.4 },
          { kind: 'shape', shape: 'pill', at: [660, 440], size: [230, 100], color: '#74c0fc', text: '弗洛里与钱恩', from: 2.2 },
          { kind: 'arrow', path: [[790, 440], [900, 440]], color: '#3b6ea5', text: '提纯量产', from: 3.0 },
          { kind: 'sprite', icon: '🏅', path: [[980, 440]], size: 120, from: 3.6 },
          { kind: 'text', at: [600, 740], text: '三人接力夺诺奖，救治千万人', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '遵医嘱防耐药菌', duration: 9,
        cues: [
          { kind: 'particles', box: [260, 360, 220, 160], count: 8, color: '#adb5bd', motion: 'jitter', size: 9, from: 0.4 },
          { kind: 'shape', shape: 'circle', at: [800, 440], size: [170, 170], color: '#e03131', text: '耐药菌反扑', motion: 'pulse', from: 1.6 },
          { kind: 'label', at: [800, 340], pos: [820, 220], text: '乱吃或半途停药筛出恶霸', color: '#e8590c', from: 2.8 },
          { kind: 'text', at: [600, 740], text: '病毒感冒不吃，遵医嘱吃满', from: 4.8 },
        ],
      },
    ],
  },
};
