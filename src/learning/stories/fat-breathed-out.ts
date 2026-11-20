import type { Story } from './types';

export const fatBreathedOut: Story = {
  slug: 'fat-breathed-out',
  title: '运动减掉的肥肉到底去哪儿了，真是变成汗水流走了吗？',
  trigger: '爸爸坚持慢跑两个月轻了五斤，每次跑完T恤都能拧出水来，小念指着汗珠笃定地说：“肥肉肯定全变成汗流走啦！”',
  dialogue: [
    {
      nian: '爸爸，你每次跑步都流一身大汗，那减掉的五斤肥肉是不是顺着汗水排出来啦？',
      dad: '哈哈，要是流汗就等于掉肥肉，那去蒸个桑拿岂不是当场变瘦？其实汗水里百分之九十九都是用来给皮肤降温的水和一丁点盐，跑完步喝两杯白开水，流汗掉的那点体重立马就补回来了，肥肉可没从汗腺钻出来！',
    },
    {
      nian: '不是变成汗水，难道肥肉是直接变成热气凭空消失在空气里了吗？',
      dad: '原子是不会凭空消失的！我们肚子上的脂肪是由碳、氢、氧三种原子拼成的分子。运动需要能量时，细胞把脂肪请进线粒体，跟吸进来的氧气拆开重组，释放出跑步用的能量，而剩下的原子全变成了两样东西：二氧化碳和水！',
      eq: '脂肪 + 氧气 →（线粒体有氧呼吸）→ 二氧化碳（肺呼出）+ 水 + 能量',
      figure: { kind: 'sim', sim: 'fatExhale', caption: '调一调运动减掉的脂肪重量，算算其中多少千克变成了肺呼出的二氧化碳、多少千克变成了水。' },
    },
    {
      nian: '居然变成了二氧化碳和水！那减掉的脂肪里，到底是变成水多，还是变成二氧化碳多？',
      dad: '澳大利亚两位科学家专门追踪了每一个原子的去向，算出来的结果连很多医生都吃了一惊：每减掉十千克脂肪，有整整八点四千克——也就是百分之八十四，变成了看不见的二氧化碳从肺里呼出去了！只有一点六千克变成了水，随尿液、汗水和呼吸排走。',
      figure: {
        kind: 'bars',
        caption: '每减掉 10 千克人体脂肪，脂肪自身原子的真实去向（数据据 BMJ 2014）。',
        unit: '千克',
        bars: [
          { label: '肺呼出碳氧', value: 8.4, text: '8.4千克（占84%）', hot: true },
          { label: '排出水分', value: 1.6, text: '1.6千克（占16%）' },
        ],
      },
    },
    {
      nian: '八成以上都是从肺里呼出去的！那我坐在沙发上一动不动，光使劲大口喘气能不能减肥呀？',
      dad: '哈哈哈，千万别试！坐着不动时肌肉根本没花多少能量，身体不会拆脂肪仓库；你硬要大口猛喘，只会把血液里正常的二氧化碳呼光，导致呼吸性碱中毒，不一会儿就头晕眼花手指发麻了。只有动起来花掉能量，细胞才会拆脂肪！',
    },
    {
      nian: '原来还得真动起来花掉能量才行！那为什么裹保鲜膜跑步或者饿肚子不吃饭也不科学呢？',
      dad: '裹保鲜膜不透气，排不走热量容易中暑，减掉的也只是水分；而完全不吃饭硬饿，身体以为闹饥荒了，会优先拆掉宝贵的肌肉并调低代谢。真正管用的办法很简单：均衡吃饭管住多余零食，加上开开心心去跑步跳绳，让肺把多余脂肪一口口呼回大自然。',
    },
    {
      nian: '我懂了！流汗只是排水降温，运动减掉的脂肪在线粒体里跟氧气结合后，约百分之八十四变成二氧化碳由肺呼出，百分之十六变成水排出；只有真运动消耗能量才能拆掉脂肪。',
      dad: '账算得门儿清！你呼出去的那些二氧化碳，说不定正飘到公园里被大柳树吸进去做光合作用呢，大自然一点都不浪费。',
    },
  ],
  tip: '儿童青少年正处于骨骼和肌肉快速生长发育期，绝不提倡节食减肥或计算苛刻热量。引导孩子少喝含糖饮料、少吃油炸零食，每天保证一小时户外跑跳球类运动，就是最健康自然的体态管理方式。',
  sources: [
    { title: '生物学 七年级下册 · 人体的呼吸；高中生物 必修1 · 第5章 细胞呼吸的原理和应用', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'When somebody loses weight, where does the fat go?（人减重时脂肪去哪儿了？）', by: 'BMJ (Meerman & Brown, 2014)', url: 'https://www.bmj.com/content/349/bmj.g7257' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '流汗不等于减脂', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🏃', path: [[340, 440]], size: 150, from: 0.2 },
          { kind: 'particles', box: [420, 360, 120, 180], count: 10, color: '#74c0fc', motion: 'rise', size: 9, from: 1.0 },
          { kind: 'label', at: [480, 360], pos: [780, 320], text: '汗水99%是降温的水', from: 2.0 },
          { kind: 'myth', wrong: '流汗越多减掉的肥肉就越多', right: '汗水喝水就补回，脂肪没从汗里走', from: 4.2 },
        ],
      },
      {
        turn: 1, title: '原子守恒大重组', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [240, 380], size: [180, 84], color: '#ffd43b', text: '脂肪分子', from: 0.3 },
          { kind: 'shape', shape: 'pill', at: [240, 500], size: [180, 84], color: '#74c0fc', text: '吸入氧气', from: 0.8 },
          { kind: 'arrow', path: [[350, 440], [540, 440]], color: '#e8590c', text: '线粒体拆解', from: 1.8 },
          { kind: 'shape', shape: 'circle', at: [740, 370], size: [160, 110], color: '#ff922b', text: '二氧化碳', from: 2.8 },
          { kind: 'shape', shape: 'circle', at: [740, 520], size: [140, 100], color: '#99e9f2', text: '水+能量', from: 3.3 },
          { kind: 'text', at: [600, 740], text: '原子不会凭空消失，只换了组合', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '肺是减脂主出口', duration: 9,
        cues: [
          { kind: 'count', at: [360, 380], label: '10千克脂肪呼出', start: 0, end: 84, unit: '%', over: 2.5, from: 0.4 },
          { kind: 'sprite', icon: '🫁', path: [[780, 430]], size: 160, from: 1.0 },
          { kind: 'flow', path: [[780, 340], [780, 190]], color: '#e8590c', count: 6, speed: 0.5, from: 2.0 },
          { kind: 'label', at: [780, 260], pos: [980, 260], text: '8.4千克变二氧化碳', from: 3.2 },
          { kind: 'text', at: [600, 740], text: '其余1.6千克变水排出体外', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '干喘气不管用', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🛋️', path: [[340, 450]], size: 150, from: 0.3 },
          { kind: 'label', at: [340, 350], pos: [340, 230], text: '坐着猛喘只会头晕', color: '#e8590c', from: 1.5 },
          { kind: 'sprite', icon: '⚽', path: [[840, 450]], size: 140, from: 1.0 },
          { kind: 'label', at: [840, 350], pos: [840, 230], text: '运动耗能才开脂肪仓', color: '#2e7d32', from: 2.6 },
          { kind: 'text', at: [600, 740], text: '先运动耗能，身体才拆脂肪', from: 4.6 },
        ],
      },
      {
        turn: 4, title: '碳原子重回绿叶', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🧒', path: [[300, 450]], size: 140, from: 0.3 },
          { kind: 'flow', path: [[390, 430], [780, 430]], color: '#2e7d32', count: 7, speed: 0.45, from: 1.2 },
          { kind: 'sprite', icon: '🌳', path: [[880, 450]], size: 160, from: 0.8 },
          { kind: 'label', at: [600, 430], pos: [600, 270], text: '呼出的碳又被树叶吸收', from: 2.8 },
          { kind: 'text', at: [600, 740], text: '快乐运动，参与自然碳循环', from: 4.8 },
        ],
      },
    ],
  },
};
