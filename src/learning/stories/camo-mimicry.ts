import type { Story } from './types';

export const camoMimicry: Story = {
  slug: 'camo-mimicry',
  title: '枯叶蝶像树叶、变色龙能变色，动物的“隐身术”是怎么炼成的？',
  trigger: '在自然博物馆昆虫柜前，小念盯着一枝枯树枝看了半天，才惊呼其中两片带叶脉的“枯叶”竟然是枯叶蝶！',
  dialogue: [
    {
      nian: '爸爸，枯叶蝶合上翅膀连叶脉、叶柄都画得一模一样，它是自己照着树叶长成这样的吗？',
      dad: '它可没长画笔，也没法决定自己长什么样哦！其实是千百万年前，它的祖先翅膀花纹深浅不一，长得越像枯叶的越不容易被小鸟发现吃掉，于是活下来生宝宝的都是“像树叶”的，一代代筛下来就越来越像！',
      figure: { kind: 'sim', sim: 'camoSpot', caption: '切换树干背景，拖动蝴蝶翅膀的贴合度，体会小鸟眼里谁最容易被盯上。' },
    },
    {
      nian: '原来是小鸟帮忙“挑”出来的！那枯叶蝶这种连形状都模仿树叶的本领叫什么？',
      dad: '只把颜色混进环境里的叫保护色，比如雪地里的北极狐冬天一身白毛；像枯叶蝶、竹节虫这样连形状、姿势甚至花纹都模仿成别的物体或有毒生物的，叫做拟态！',
      show: { kind: 'steps', frames: [{ icon: '🦊', label: '颜色像背景：保护色' }, { icon: '🍂', label: '形状也模仿：拟态' }, { icon: '🐦', label: '难被发现更易活' }] },
    },
    {
      nian: '那变色龙可以几秒钟就换颜色，它是怎么一秒变身的？也是为了躲小鸟吗？',
      dad: '变色龙皮肤下藏着一层层装满纳米晶体的细胞！它拉紧或放松皮肤，改变晶体的间距，就能折射出绿、黄、蓝甚至鲜红的颜色。不过科学家发现，变色龙变色很多时候是为了告诉同伴“我生气了”或晒太阳保暖，不只是隐身哦！',
    },
    {
      nian: '既然隐身这么管用，为什么还有些青蛙和毛毛虫长得红通通、黄灿灿，一点都不躲着？',
      dad: '那叫警戒色！箭毒蛙、胡蜂身上往往有毒或极难吃，故意穿得鲜艳醒目，就像举着一块大牌子喊：“我有毒，咬我准后悔！”小鸟吃过一次亏，以后见了这种显眼花纹就会绕着走。',
    },
    {
      nian: '哈哈，那有没有没毒的小虫子偷偷穿上警戒色假装自己有毒？',
      dad: '真有！比如食蚜蝇自己完全没有毒刺，却长着黄黑相间的条纹假装成蜜蜂和黄蜂，把小鸟吓得不敢下嘴——这种没毒模仿有毒的绝招，也是大自然里特别有意思的拟态呢。',
    },
    {
      nian: '我懂了！动物的保护色和拟态不是自己想出来的，而是长得更像环境的个体更容易躲过天敌、把基因传下去；变色龙靠调皮肤晶体变色，有毒动物还会用鲜艳警戒色吓退天敌。',
      dad: '总结得太精彩了！下次在草丛树干上仔细找一找，说不定就能偶遇一只躲得严严实实的绿螳螂或树皮蛾呢。',
    },
  ],
  tip: '变色龙变色机制并非简单“挤颜料”，2015 年日内瓦大学研究发表于《Nature Communications》，证实其主要通过调节皮肤虹彩细胞中鸟嘌呤纳米晶体的间距来改变反射光波长。野外观察昆虫请只看不抓、不伤害小生命。',
  sources: [
    { title: '生物学 八年级下册 · 第七单元 第三章 生物进化的原因（自然选择）', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Photonic crystals cause active colour change in chameleons（变色龙变色的光子晶体机制）', by: 'Nature Communications (2015)', url: 'https://www.nature.com/articles/ncomms7368' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '不是照着画出来的', duration: 10,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 440], size: [760, 290], color: '#8c6239', from: 0.2 },
          { kind: 'sprite', icon: '🦋', path: [[380, 440]], size: 110, from: 0.6 },
          { kind: 'shape', shape: 'pill', at: [800, 440], size: [120, 74], color: '#7a5430', text: '像枯叶', from: 0.8 },
          { kind: 'label', at: [380, 380], pos: [380, 220], text: '太显眼先被吃', color: '#e8590c', from: 1.8 },
          { kind: 'myth', wrong: '枯叶蝶自己想长成树叶', right: '像叶子的更易活下来传后代', from: 4.5 },
        ],
      },
      {
        turn: 1, title: '保护色与拟态', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [340, 450], size: [330, 220], color: '#edf5ff', text: '保护色：颜色像', from: 0.3 },
          { kind: 'shape', shape: 'rect', at: [860, 450], size: [330, 220], color: '#fff4e0', text: '拟态：形状也像', from: 1.4 },
          { kind: 'text', at: [600, 750], text: '都是帮动物躲开天敌的绝招', from: 4.0 },
        ],
      },
      {
        turn: 2, title: '变色龙换颜色', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [600, 440], size: [360, 170], color: '#51a355', tint: { color: '#ff9f43', at: 2.2, over: 2.8 }, text: '皮肤纳米晶体', from: 0.3 },
          { kind: 'label', at: [600, 350], pos: [600, 210], text: '改变间距反射不同光', from: 1.5 },
          { kind: 'text', at: [600, 740], text: '还能表达情绪和调节体温', from: 4.5 },
        ],
      },
      {
        turn: 3, title: '鲜艳的警戒色', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [420, 440], size: [190, 190], color: '#ffd43b', text: '黄黑条纹', from: 0.3 },
          { kind: 'arrow', path: [[540, 440], [740, 440]], color: '#e8590c', text: '警告我有毒', from: 1.8 },
          { kind: 'sprite', icon: '🐦', path: [[860, 440], [1040, 280]], size: 110, travel: 2.5, from: 2.5 },
          { kind: 'text', at: [600, 750], text: '显眼警戒色让天敌绕着走', from: 4.8 },
        ],
      },
    ],
  },
};
