import type { Story } from './types';

export const hibernationSleep: Story = {
  slug: 'hibernation-sleep',
  title: '青蛙和刺猬冬天一睡好几个月，不吃不喝为什么不饿死？',
  trigger: '冬天池塘结了薄冰，小念想起夏天呱呱叫的青蛙，担心它们躲在泥洞里几个月不吃东西会饿晕。',
  dialogue: [
    {
      nian: '爸爸，我一顿不吃饭肚子就咕咕叫，青蛙和刺猬冬天一睡好几个月，不吃不喝怎么不饿死呀？',
      dad: '因为冬眠根本不是平时那种睡大觉，而是把身体切进了“超级省电模式”！刺猬平时每分钟心跳差不多两百下、体温 35 ℃；一冬眠，体温降到接近洞里的 5 ℃，心跳慢到每分钟只有十几二十下，耗能一下省掉九成多！',
      figure: { kind: 'sim', sim: 'hibernateMeter', caption: '切换夏天活跃和冬天冬眠，对比心跳、体温和脂肪能撑多久。' },
    },
    {
      nian: '省电模式耗能少，可终究还是要耗一点点电呀，那一点能量从哪儿来？',
      dad: '靠它们秋天疯狂“贴秋膘”存下的厚脂肪！入秋前，刺猬、旱獭拼命吃虫子和果子，体重能胖出将近一半。冬天钻进洞后，靠极慢的呼吸作用一点点花这份脂肪存折，就能安安稳稳撑到春天。',
      show: { kind: 'steps', frames: [{ icon: '🍎', label: '秋天狂吃贴秋膘' }, { icon: '❄️', label: '降温降心率省电' }, { icon: '🌸', label: '春暖醒来瘦一圈' }] },
    },
    {
      nian: '青蛙和刺猬的冬眠方式，是不是完全一模一样？',
      dad: '还有一点差别！青蛙和蛇是变温动物，自己本来就不产热，天一冷体温自然跟着掉，只好钻进冰层底下的泥洞避冻；刺猬和睡鼠是恒温哺乳动物，是自己主动关低“小暖炉”来省粮，天气太冷时还会偶尔醒一下微微产热防冻僵。',
    },
    {
      nian: '那大黑熊冬天也会躲在山洞里睡一整个冬天，它也是把体温降到 5 ℃ 吗？',
      dad: '黑熊个头太大了，体温降不到那么低，只降几度（大概 31–35 ℃），心跳慢下来、不吃不拉也不尿，叫“浅冬眠”或冬蛰。所以如果冬眠的黑熊被打扰，它很快就能醒过来，可不像小刺猬那样一睡不醒！',
    },
    {
      nian: '那我们在野外要是冬天不小心碰见冬眠的小动物，能把它叫醒喂点吃的吗？',
      dad: '千万不要打扰！强行叫醒一只冬眠的小动物，它把体温重新升回来一次要烧掉一大笔宝贵脂肪，外面冬天又根本找不到虫子补货，反而可能害它撑不到春天。悄悄走开就是最好的保护。',
    },
    {
      nian: '我懂了！青蛙和刺猬冬天不饿死，是因为秋天先存满脂肪，冬眠时再把体温、心跳和呼吸降到极低的省电模式，细水长流地撑过寒冬；碰到冬眠小动物千万别吵醒它们。',
      dad: '记在心里啦！大自然的生命各有各的过冬智慧：大雁飞去暖和的地方，树木落叶休眠，刺猬和青蛙就干脆开启省电模式静待花开。',
    },
  ],
  tip: '变温动物（两栖、爬行类）的越冬休眠在生物学上常称“蛰伏/冬蛰（brumation）”，恒温哺乳动物（刺猬、睡鼠、蝙蝠等）的深度降温叫真冬眠（hibernation）。提醒孩子野外或公园冬天遇到蜷缩不动的刺猬、青蛙不要触碰和带回家。',
  sources: [
    { title: '生物学 八年级上册 · 第五单元 第一章 动物的主要类群', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Hibernation（动物冬眠科学百科）', by: 'National Park Service (U.S.)', url: 'https://www.nps.gov/subjects/bears/hibernation.htm' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '开启超级省电模式', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🦔', path: [[320, 440]], size: 150, from: 0.2 },
          { kind: 'count', at: [820, 310], label: '体温下降', start: 35, end: 5, unit: '℃', over: 3, from: 1.0 },
          { kind: 'count', at: [820, 560], label: '心跳变慢', start: 190, end: 20, unit: '次/分', over: 3, from: 1.5 },
          { kind: 'myth', wrong: '冬眠就是普通睡懒觉', right: '体温心跳剧降的超级省电', from: 4.5 },
        ],
      },
      {
        turn: 1, title: '秋天攒脂肪存折', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [320, 430], size: [260, 120], color: '#ffd43b', text: '秋天贴秋膘', from: 0.3 },
          { kind: 'arrow', path: [[470, 430], [700, 430]], color: '#3b6ea5', text: '冬天慢慢花', from: 1.8 },
          { kind: 'meter', at: [860, 430], label: '脂肪存折', start: 0.95, end: 0.2, color: '#e8590c', over: 4, from: 2.2 },
          { kind: 'text', at: [600, 740], text: '秋天存满脂肪，冬天够撑几月', from: 4.5 },
        ],
      },
      {
        turn: 2, title: '变温与恒温不同', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [340, 440], size: [320, 220], color: '#d9f2dc', text: '青蛙：随天变凉', from: 0.3 },
          { kind: 'shape', shape: 'rect', at: [860, 440], size: [320, 220], color: '#edf5ff', text: '刺猬：主动省电', from: 1.3 },
          { kind: 'text', at: [600, 750], text: '都是为了熬过缺食的寒冬', from: 4.2 },
        ],
      },
      {
        turn: 4, title: '别吵醒冬眠动物', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🦔', path: [[600, 420]], size: 150, from: 0.2 },
          { kind: 'pulse', at: [600, 420], color: '#e8590c', radius: 130, from: 1.5 },
          { kind: 'text', at: [600, 720], text: '硬叫醒会白烧宝贵脂肪', from: 3.0 },
        ],
      },
    ],
  },
};
