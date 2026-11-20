import type { Story } from './types';

export const mimosaFoldTouch: Story = {
  slug: 'mimosa-fold-touch',
  title: '植物没有神经也没有肌肉，为什么手指一碰含羞草叶子就合拢了？',
  trigger: '花市摊位上摆着几盆羽毛叶的含羞草，小念伸出食指轻轻点了一下叶尖，整排小叶片“唰”地合上，连叶柄也低头垂了下来。',
  dialogue: [
    {
      nian: '爸爸快看！我只轻轻碰了一下，含羞草的叶子怎么一秒钟就合拢低头了，它长了肌肉和神经吗？',
      dad: '含羞草一根肌肉和神经都没有！它的机关藏在每片小叶和叶柄根部一个鼓鼓的小疙瘩里，叫“叶枕”。叶枕就像一个灌满水的小水气球铰链，平时上下两边都鼓鼓的，稳稳托住整排叶片。',
      figure: {
        kind: 'image',
        src: '/images/photos/mimosa-leaves.webp',
        alt: '含羞草展开的二回羽状复叶特写照片',
        caption: '平时舒展开来的含羞草羽状复叶，每对小叶和叶柄根部都藏着控制开合的“叶枕”。',
        credit: 'NonNerd · CC0 1.0',
        href: 'https://commons.wikimedia.org/wiki/File:Mimosa_pudica_leaves_close_up.jpg',
      },
    },
    {
      nian: '原来根部藏着叶枕小水气球！可手指刚碰叶尖，叶枕怎么立马就收到消息变瘪了呢？',
      dad: '虽然没有动物的神经细胞，但触碰会让含羞草产生一道微弱的生物电和钙离子信号，顺着叶脉飞快传到叶枕。叶枕下半侧的细胞一收到信号，瞬间打开通道把钾离子排出去，水也跟着哗啦啦往外跑，下半侧一瘪，叶柄就被上半侧压得垂下来啦！',
      figure: { kind: 'sim', sim: 'mimosaPillow', caption: '切换手指触碰前后，观察含羞草叶枕上下两侧的膨压变化与钾离子、水分移动。' },
    },
    {
      nian: '哇，靠放掉钾离子和水分就能一秒合叶！那垂下来的含羞草要多久才能重新撑起来？',
      dad: '放水容易打水慢！等危险过去安静下来，叶枕下半侧的细胞得花点能量，慢慢把钾离子重新泵回细胞里，让水分一点点渗回来把“水气球”重新充足气，大概过十到十五分钟，含羞草的叶子就又精神抖擞地展开了。',
    },
    {
      nian: '要花十几分钟充气呀，那我要是一直戳它玩，含羞草会不会累坏？',
      dad: '真会累坏它！每次合拢再撑开都要消耗不少宝贵的能量，而且叶片合着就没法晒太阳做光合作用造粮食了。更有趣的是，如果一滴一滴无害的水珠反复滴在它身上，含羞草发现没有真危险，还会暂时“懒得理你”不再合叶呢！',
    },
    {
      nian: '连无害水珠都能分辨！那含羞草在老家大自然里练出这身合叶本领，到底是为了防谁？',
      dad: '含羞草老家在热带美洲，那里常常突降狂风暴雨：雨点刚砸下来它就收拢叶片垂下身子，豆大的雨滴就砸不烂嫩叶了；另外啃叶子的蝗虫刚落脚，脚下树叶突然唰地一抖缩成细枝条，虫子吓一跳也就飞走换别家啃啦。',
    },
    {
      nian: '我懂了！含羞草没有神经和肌肉，触碰信号传到叶柄根部的叶枕后，下半侧细胞迅速排出钾离子和水分导致膨压下降，叶子就合拢垂下，帮它躲避暴雨和昆虫啃食。',
      dad: '讲得清清楚楚！在花市和植物园遇见含羞草，轻轻试一片叶子观察完就好，给它留足晒太阳吃饭的时间哦。',
    },
  ],
  tip: '养在家里的含羞草喜欢充足阳光和湿润土壤。需注意：含羞草植株含有微量含羞草碱，观赏触碰叶片完全安全，但不要让低龄幼儿或家养宠物揪扯误食叶片，也不要放在卧室床头长期密闭摆放。',
  sources: [
    { title: '生物学 七年级上册 · 生物的特征；高中生物 选择性必修1 · 第5章 植物生命活动的调节', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Plants 400: Mimosa pudica（含羞草叶枕运动机制科普档案）', by: 'University of Oxford Botanic Garden & Herbarium', url: 'https://herbaria.plants.ox.ac.uk/bol/plants400/Profiles/MN/Mimosa' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '叶柄根部水气球', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🌿', path: [[340, 440]], size: 150, from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [700, 390], size: [180, 100], color: '#74c0fc', text: '叶枕上半', from: 1.0 },
          { kind: 'shape', shape: 'circle', at: [700, 500], size: [180, 100], color: '#4dabf7', text: '叶枕下半', from: 1.4 },
          { kind: 'myth', wrong: '含羞草靠肌肉收缩合拢叶子', right: '靠叶枕细胞充水放水像水气球开关', from: 3.8 },
        ],
      },
      {
        turn: 1, title: '放水泄气一秒合', duration: 9,
        cues: [
          { kind: 'pulse', at: [280, 440], color: '#e8590c', radius: 70, rate: 1.1, from: 0.3 },
          { kind: 'arrow', path: [[350, 440], [560, 440]], color: '#e8590c', text: '电化学信号', from: 1.2 },
          { kind: 'shape', shape: 'circle', at: [740, 460], size: [200, 130], color: '#74c0fc', tint: { color: '#ffd8a8', at: 2.2, over: 1.2 }, text: '下半变瘪', motion: 'shrink', over: 2.2, from: 1.6 },
          { kind: 'flow', path: [[740, 520], [940, 580]], color: '#3b6ea5', count: 6, speed: 0.6, from: 2.4 },
          { kind: 'text', at: [600, 740], text: '钾离子与水涌出，膨压降垂叶', from: 4.6 },
        ],
      },
      {
        turn: 2, title: '慢慢打水重撑开', duration: 9,
        cues: [
          { kind: 'count', at: [360, 400], label: '吸水恢复时间', start: 0, end: 15, unit: '分钟', over: 3.0, from: 0.4 },
          { kind: 'flow', path: [[920, 460], [720, 460]], color: '#3b6ea5', count: 6, speed: 0.4, from: 1.2 },
          { kind: 'shape', shape: 'circle', at: [660, 460], size: [190, 130], color: '#74c0fc', text: '重新鼓起', motion: 'grow', over: 2.8, from: 1.8 },
          { kind: 'text', at: [600, 740], text: '泵回钾离子吸水，叶片慢展开', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '别总戳它省体力', duration: 9,
        cues: [
          { kind: 'meter', at: [380, 420], label: '植株储备能量', start: 90, end: 35, color: '#e8590c', over: 2.8, from: 0.4 },
          { kind: 'label', at: [520, 420], pos: [830, 340], text: '频繁合叶既耗能又耽误晒光', from: 1.8 },
          { kind: 'label', at: [520, 500], pos: [830, 500], text: '对无害刺激还会暂时习惯', from: 3.2 },
          { kind: 'text', at: [600, 740], text: '轻轻碰一次就好，留时间晒光', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '躲暴雨吓跑害虫', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🌧️', path: [[340, 380]], size: 140, from: 0.3 },
          { kind: 'label', at: [340, 490], pos: [340, 590], text: '收叶免被暴雨砸伤', color: '#3b6ea5', from: 1.5 },
          { kind: 'sprite', icon: '🦗', path: [[840, 380], [980, 280]], size: 130, travel: 2.5, from: 1.0 },
          { kind: 'label', at: [840, 490], pos: [840, 590], text: '突然一抖吓跑啃叶虫', color: '#2e7d32', from: 2.6 },
          { kind: 'text', at: [600, 750], text: '感性运动是热带生存护身符', from: 4.8 },
        ],
      },
    ],
  },
};
