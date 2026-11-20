import type { Story } from './types';

export const sunflowerFollowSun: Story = {
  slug: 'sunflower-follow-sun',
  title: '盛开的向日葵，真的每天从早到晚跟着太阳转头吗？',
  trigger: '下午四点路过郊外一大片金灿灿盛开的向日葵田，太阳明明已经在西边了，可满地大花盘居然全齐刷刷背对太阳朝向东边！',
  dialogue: [
    {
      nian: '爸爸好奇怪呀！书上不都说向日葵跟着太阳转吗，现在下午太阳在西边，为什么盛开的大花盘全都朝东一动不动？',
      dad: '哈哈，你亲眼抓到了一个流传超广的小误会！其实只有还没开花的“年轻向日葵”才会每天从东往西追着太阳转头；一旦花盘完全盛开、茎杆长硬定型了，它们就会停下脚步，一辈子稳稳朝向东方不再转头啦！',
      figure: { kind: 'sim', sim: 'sunflowerTrack', caption: '切换嫩蕾期与盛开定型期，再拖动一天里的时间，看向日葵茎杆怎样靠两侧轮流快长来追光。' },
    },
    {
      nian: '只有年轻向日葵才转头？它又没有脖子关节，嫩茎是怎么从东往西扭过去的？',
      dad: '秘密在“不对称生长”！年轻向日葵的嫩茎还在天天拔高：白天太阳从东往西走，植物体内的生长素让茎杆东侧细胞拉长得比西侧快，东边长、西边短，脑袋自然就慢慢往西边弯过去啦！',
    },
    {
      nian: '白天靠嫩茎东边长得快往西弯，可太阳下山以后一片漆黑，第二天早上它怎么又朝向东边了？',
      dad: '加州大学的科学家架起摄像机拍了一整夜，发现向日葵肚子里居然有准时的“生物钟”！到了夜里没有阳光，生物钟接管指挥，换成茎杆西侧长得更快，赶在天亮日出之前就提前转回东方等太阳——如果把它关进全天亮灯的屋子打乱生物钟，它就转晕啦！',
    },
    {
      nian: '连植物都有生物钟提前等日出！那完全盛开以后，为什么非要停在东边，停在西边不行吗？',
      dad: '科学家真在田里做过调包实验：把一半盛开的向日葵花盆硬转过来朝西，另一半自然朝东。结果清晨太阳一出来，朝东的花盘晒得暖洋洋的，散发出的花香更浓，引来采蜜传粉的蜜蜂数量足足是朝西花盘的五倍！',
      figure: {
        kind: 'bars',
        caption: '清晨盛开向日葵花盘朝向对传粉昆虫吸引力的实测对比（数据据 Science 2016）。',
        unit: '倍',
        bars: [
          { label: '人工转朝西', value: 1, text: '1 份蜜蜂造访' },
          { label: '自然朝向东', value: 5, text: '约 5 倍蜜蜂造访！', hot: true },
        ],
      },
    },
    {
      nian: '哇，暖花盘能多招五倍蜜蜂！那要是把年轻向日葵捆在木棍上不准它转头，它还能长得好吗？',
      dad: '长势马上差一截！实验里被绑住不准追太阳的年轻向日葵，叶片抢到的阳光少，最后总重量和叶片面积都比自由转头的同伴少了大约百分之十。年轻时追太阳长壮身体，成年后朝东招蜜蜂结饱满瓜子，每一步都算得精明极了！',
    },
    {
      nian: '我懂了！向日葵只有开花前才靠嫩茎两侧轮流快长和生物钟每天追着太阳转；盛开后茎停止生长并固定朝东，借清晨阳光晒暖花盘吸引五倍蜜蜂来传粉。',
      dad: '太棒了！你看，亲眼去田野里看一看，比光背一句老话能发现多得多的真科学。',
    },
  ],
  tip: '带孩子在窗台种一盆矮生观赏向日葵或小豆苗时，可以让花盆固定朝向窗外两三天，孩子就能肉眼看到幼苗朝窗外阳光一侧弯过去（植物向光性）；随后把花盆转 180 度，再观察它怎样用两天时间重新弯向窗外。',
  sources: [
    { title: '高中生物 选择性必修1 · 第5章 第1节 植物生长素', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Circadian regulation of sunflower heliotropism, floral orientation, and pollinator visits（向日葵生物钟、朝向与传粉研究）', by: 'Science / UC Davis (Atamian et al., 2016)', url: 'https://www.ucdavis.edu/news/sunflowers-move-clock' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '盛开后固定朝东', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🌻', path: [[360, 440]], size: 150, from: 0.2 },
          { kind: 'label', at: [360, 340], pos: [340, 220], text: '嫩蕾期每天追太阳', color: '#2e7d32', from: 1.2 },
          { kind: 'sprite', icon: '🌻', path: [[840, 440]], size: 160, from: 0.8 },
          { kind: 'label', at: [840, 340], pos: [860, 220], text: '盛开后永远朝东方', color: '#e8590c', from: 2.2 },
          { kind: 'myth', wrong: '盛开的向日葵全天跟着太阳转', right: '只有开花前转头，盛开后固定朝东', from: 4.2 },
        ],
      },
      {
        turn: 1, title: '两侧轮流快长', duration: 9,
        cues: [
          { kind: 'sprite', icon: '☀️', path: [[880, 250]], size: 110, from: 0.3 },
          { kind: 'shape', shape: 'pill', at: [540, 480], size: [80, 240], color: '#51cf66', text: '东侧快', motion: 'grow', over: 2.5, from: 0.8 },
          { kind: 'shape', shape: 'pill', at: [640, 500], size: [80, 190], color: '#8ce09b', text: '西侧慢', from: 0.8 },
          { kind: 'arrow', path: [[540, 330], [720, 330]], color: '#e8590c', text: '向西弯头', from: 2.4 },
          { kind: 'text', at: [600, 740], text: '白天东侧长得快，把花蕾推西', from: 4.6 },
        ],
      },
      {
        turn: 2, title: '夜间生物钟复位', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🌙', path: [[260, 260]], size: 100, from: 0.3 },
          { kind: 'pulse', at: [600, 450], color: '#7c52b8', radius: 95, rate: 0.8, from: 1.0 },
          { kind: 'arrow', path: [[720, 400], [460, 400]], color: '#3b6ea5', text: '西侧快长回东', from: 2.0 },
          { kind: 'label', at: [600, 530], pos: [600, 640], text: '体内生物钟准时指挥', from: 3.2 },
          { kind: 'text', at: [600, 750], text: '天亮前早已面向东方等候日出', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '暖花盘招来蜜蜂', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🌅', path: [[920, 280]], size: 120, from: 0.3 },
          { kind: 'shape', shape: 'circle', at: [480, 450], size: [190, 190], color: '#ffd43b', text: '温暖朝东', motion: 'pulse', from: 0.8 },
          { kind: 'count', at: [820, 500], label: '吸引传粉蜜蜂', start: 1, end: 5, unit: '倍', over: 2.4, from: 1.8 },
          { kind: 'sprite', icon: '🐝', path: [[820, 340], [580, 410]], size: 90, travel: 2.5, from: 2.2 },
          { kind: 'text', at: [600, 740], text: '清晨喜暖的蜜蜂最爱落上暖花盘', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '一生两段好策略', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [340, 440], size: [260, 110], color: '#8ce09b', text: '幼年追光长壮', from: 0.4 },
          { kind: 'arrow', path: [[490, 440], [670, 440]], color: '#2e7d32', text: '开花定型', from: 1.6 },
          { kind: 'shape', shape: 'pill', at: [840, 440], size: [260, 110], color: '#ffd43b', text: '成年朝东结籽', from: 2.4 },
          { kind: 'text', at: [600, 730], text: '生长素配生物钟，多结饱满籽', from: 4.6 },
        ],
      },
    ],
  },
};
