import type { Story } from './types';

export const plantWaterUp: Story = {
  slug: 'plant-water-up',
  title: '没有心脏也没有水泵，大树怎么把水吸到几十米高的树顶？',
  trigger: '仰头看着植物园里三十多米高的水杉树，小念纳闷地问：家里水龙头都要靠水泵加压才能送上楼，大树肚子里空空的，水怎么自己爬上树梢？',
  dialogue: [
    {
      nian: '爸爸，几十米高的大树没有心脏也没有电动水泵，地下的水怎么爬到最高那片叶子上的？',
      dad: '大树靠的是晒太阳驱动的“无声拔河”——蒸腾作用！树干里藏着成千上万根比头发还细的空心管子叫导管，叶片上的小气孔不断把水蒸气散进空气，顶上每跑掉一个水分子，就会往上拉一把！',
      figure: { kind: 'sim', sim: 'treePull', caption: '拖动树叶气孔张开程度，看看水柱怎样沿着树干里的导管被一路拉上树顶。' },
    },
    {
      nian: '顶上气孔散掉一点水蒸气，怎么能把几十米底下树根里的水全拉动呢？',
      dad: '因为水分子之间特别爱“手拉手”！物理上这叫水分子的内聚力。在极细的导管里，水分子彼此拉得紧紧的，像一根从树根一直连到树顶的水绳子——顶上拔一寸，整根水绳子就跟着往上挪一寸！',
      show: { kind: 'steps', frames: [{ icon: '🌱', label: '根毛吸水进导管' }, { icon: '💧', label: '水分子手拉手' }, { icon: '🍃', label: '气孔蒸腾往上拽' }] },
    },
    {
      nian: '水分子拉着绳子跑了这么远，最后竟然从叶子散进空气里，大树不是白干活浪费水了吗？',
      dad: '一点也不浪费！植物吸进来的水，超过九成确实通过蒸腾作用散掉了，但它一举两得：既靠这股拉力把土壤里宝贵的矿物质养分一路捎到树顶，又像人出汗一样帮晒了一天太阳的树叶降温防晒伤！',
    },
    {
      nian: '蒸腾作用能帮树叶降温，大夏天钻进树荫底下比撑遮阳伞凉快，也是因为这个吗？',
      dad: '对呀！遮阳伞只能挡太阳，树冠不仅遮光，成千上万片叶子还在同时“出汗”蒸发吸热，把树下的空气都吹凉了。一棵成年大树大晴天一天就能蒸腾掉几百公斤水呢！',
    },
    {
      nian: '要是碰上大旱天土里没水了，树叶一直张着气孔往外散水，大树会不会干死？',
      dad: '树叶的每个气孔旁边都有一对像两瓣嘴唇一样的保卫细胞。水足时它们喝饱鼓起来、气孔张大；一旦缺水或正午太晒，保卫细胞一蔫，立刻把气孔拉上关门，保命省水！',
    },
    {
      nian: '我懂了！大树不用水泵，靠叶片气孔的蒸腾作用像拉绳一样，借着水分子手拉手的劲把水沿着导管拉上树顶，顺带运走养分、给叶片降温；缺水时保卫细胞还能关上气孔省水。',
      dad: '总结得滴水不漏！回家可以把一根芹菜插进滴了两滴红墨水（或火龙果汁）的清水里，过半天切开茎杆，就能亲眼看到那几根染红的运水导管哦！',
    },
  ],
  tip: '“芹菜插红水看导管”是极佳的家庭生物小实验：用火龙果汁或食用色素代替工业墨水更安全，2–4 小时后纵切和横切芹菜叶柄，孩子能清晰看见成束的维管束（导管）被染红。',
  sources: [
    { title: '生物学 七年级上册 · 第三单元 第三章 绿色植物与生物圈的水循环', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Evapotranspiration and the Water Cycle（植物蒸腾与水循环）', by: 'U.S. Geological Survey (USGS)', url: 'https://www.usgs.gov/special-topics/water-science-school/science/evapotranspiration-and-water-cycle' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '顶上散水往下拉', duration: 9,
        cues: [
          { kind: 'shape', shape: 'rect', at: [600, 560], size: [120, 320], color: '#b08050', from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [600, 300], size: [340, 170], color: '#8ce09b', text: '树冠气孔', from: 0.4 },
          { kind: 'flow', path: [[600, 720], [600, 360]], color: '#3b6ea5', count: 7, speed: 180, from: 1.0 },
          { kind: 'particles', box: [450, 140, 300, 110], count: 10, color: '#a5d8ff', motion: 'rise', size: 12, from: 1.8 },
          { kind: 'text', at: [600, 810], text: '树顶蒸腾，带动整棵树吸水', from: 4.2 },
        ],
      },
      {
        turn: 1, title: '水分子手拉手', duration: 9,
        cues: [
          { kind: 'bond', a: [600, 680], b: [600, 260], color: '#74c0fc', from: 0.2 },
          { kind: 'atom', path: [[600, 660], [600, 560]], symbol: '水', color: '#3b6ea5', r: 34, travel: 3, from: 0.8 },
          { kind: 'atom', path: [[600, 520], [600, 420]], symbol: '水', color: '#3b6ea5', r: 34, travel: 3, from: 0.8 },
          { kind: 'atom', path: [[600, 380], [600, 280]], symbol: '水', color: '#3b6ea5', r: 34, travel: 3, from: 0.8 },
          { kind: 'arrow', path: [[720, 620], [720, 280]], color: '#e8590c', text: '内聚力成水绳', from: 1.8 },
          { kind: 'text', at: [600, 790], text: '顶上拽一滴，底下全跟上', from: 4.5 },
        ],
      },
      {
        turn: 2, title: '不是白白浪费', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [340, 430], size: [300, 120], color: '#d9f2dc', text: '顺便运养分', from: 0.4 },
          { kind: 'shape', shape: 'pill', at: [860, 430], size: [300, 120], color: '#e7f5ff', text: '蒸发给叶降温', from: 1.4 },
          { kind: 'myth', wrong: '水蒸掉九成全白浪费了', right: '既是水泵动力又是天然空调', from: 4.0 },
        ],
      },
      {
        turn: 4, title: '气孔会自己关门', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [350, 440], size: [220, 160], color: '#8ce09b', text: '水足：张开', from: 0.4 },
          { kind: 'arrow', path: [[490, 440], [710, 440]], color: '#e8590c', text: '干旱缺水', from: 1.8 },
          { kind: 'shape', shape: 'pill', at: [850, 440], size: [220, 70], color: '#d8e2c8', text: '保卫细胞闭合', from: 2.8 },
          { kind: 'text', at: [600, 760], text: '保卫细胞像阀门随时控水', from: 4.8 },
        ],
      },
    ],
  },
};
