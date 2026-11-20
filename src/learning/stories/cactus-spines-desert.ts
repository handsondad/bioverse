import type { Story } from './types';

export const cactusSpinesDesert: Story = {
  slug: 'cactus-spines-desert',
  title: '仙人掌为什么浑身是刺没有叶片，还偏偏挑晚上张开气孔？',
  trigger: '植物园沙生植物馆里热烘烘的，小念看着圆滚滚长满硬刺的仙人球纳闷：一片绿树叶都没有，它靠什么做光合作用呀？',
  dialogue: [
    {
      nian: '爸爸，别的树全靠宽宽的绿树叶晒太阳，仙人掌一片叶子都没有，浑身尖刺怎么活呀？',
      dad: '哈哈，它浑身那些尖刺其实就是它的“叶子”变出来的！沙漠里一年下不了几场雨，要是长着宽大的薄树叶，水分几个小时就被大太阳烤干了。仙人掌干脆把叶片缩成细硬的尖刺，把蒸腾漏水的面积减到几乎为零，顺便还能扎嘴防沙漠动物偷吃呢！',
      figure: { kind: 'sim', sim: 'desertCactus', caption: '切换沙漠烈日正午与凉爽夜晚，看仙人掌的叶刺、肉质绿茎和气孔怎样“昼夜倒班”。' },
    },
    {
      nian: '尖刺居然是退化的叶子！可叶子变成了干巴巴的刺，谁来替它晒太阳做光合作用呢？',
      dad: '你看它胖乎乎的身体是什么颜色的？绿油油的！仙人掌把整根肥厚的“肉质茎”染绿，里面塞满叶绿体代替树叶做光合作用；茎中间还像一块超级海绵储水罐，下一场雨就能存下几百上千升水，外皮再涂一层厚蜡质锁死水分。',
    },
    {
      nian: '绿色肉质茎又存水又造粮真能干！可做光合作用总得打开气孔吸二氧化碳吧，大中午一开门水不就跑光了吗？',
      dad: '一下问到最绝的秘密了！普通植物白天开气孔，可沙漠大中午四十多摄氏度，一开气孔就等于自杀。所以仙人掌学会了“上夜班”：白天把气孔关得严严实实一滴水不漏；等半夜沙漠凉快潮湿了，才悄悄打开气孔大口吸进二氧化碳！',
      figure: {
        kind: 'scale',
        caption: '仙人掌“景天酸代谢（CAM）”独特的昼夜倒班时间表。',
        axis: '沙漠仙人掌一昼夜气孔分工',
        stops: [
          { label: '凉爽深夜', note: '开气孔吸存碳', color: '#d0ebff', hot: true },
          { label: '清晨日出', note: '关紧气孔保水', color: '#fff3bf' },
          { label: '酷热正午', note: '闭门拆酸造糖', color: '#d8f3dc' },
        ],
      },
    },
    {
      nian: '可是夜晚黑漆漆的没有太阳光呀，半夜吸进来的二氧化碳怎么做成糖呢？',
      dad: '它给自己修了个“夜间临时仓库”！仙人掌半夜吸进二氧化碳后，先把它变成苹果酸锁进细胞的大液泡里存一宿；所以大清早的仙人掌汁水其实比傍晚更酸！等白天太阳一出来，它紧闭大门，从液泡里取出存好的二氧化碳借阳光做成葡萄糖。',
    },
    {
      nian: '连空气都能先存成苹果酸过夜！那下露水的时候，它的尖刺和地下的根还有什么绝活吗？',
      dad: '绝活可多了！清晨沙漠起雾结露时，细刺表面能凝结一颗颗小露珠，顺着刺和茎上的竖棱沟槽精准滴到根部；而它地下的根并不往极深处傻钻，而是像大渔网一样贴着浅土铺开好几米远，只要地面刚湿一点，几分钟就抢光雨水！',
    },
    {
      nian: '我懂了！仙人掌把叶子缩成尖刺省水防身，用绿色肉质茎储水并做光合作用；它还白天关紧气孔保水、夜晚凉快时开气孔把二氧化碳存成有机酸，靠全套绝技稳居沙漠。',
      dad: '总结得滴水不漏！菠萝和火龙果其实也跟仙人掌一样懂这套“夜里吸碳、白天造糖”的省水绝招呢。',
    },
  ],
  tip: '家里养小仙人球最常见的死因不是渴死，而是浇水太勤导致根部缺氧腐烂！平时放在阳光最充足的南窗台，“宁干勿湿”等盆土彻底干透再浇透水；有幼儿的家庭请把仙人掌放在高处花架，防止毛刺（尤其是细小难拔的芒刺）扎手。',
  sources: [
    { title: '生物学 七年级上册 · 生物对环境的适应；高中生物 必修1 · 光合作用的原理和应用', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'The Ecology of Photosynthetic Pathways（C3、C4 与 CAM 光合途径的生态适应）', by: 'Nature Education Scitable', url: 'https://www.nature.com/scitable/knowledge/library/the-ecology-of-photosynthetic-pathways-15785165/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '叶子缩成防身刺', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🍃', path: [[300, 440]], size: 130, from: 0.2 },
          { kind: 'arrow', path: [[410, 440], [590, 440]], color: '#c9623b', text: '适应干旱演化', from: 1.2 },
          { kind: 'sprite', icon: '🌵', path: [[760, 440]], size: 160, from: 2.0 },
          { kind: 'label', at: [760, 330], pos: [880, 220], text: '尖刺就是变态叶', from: 3.2 },
          { kind: 'text', at: [600, 740], text: '砍掉蒸腾面积，还不怕动物啃', from: 4.8 },
        ],
      },
      {
        turn: 1, title: '绿胖茎身兼两职', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [600, 450], size: [220, 300], color: '#51cf66', text: '肉质绿茎', from: 0.3 },
          { kind: 'label', at: [490, 380], pos: [260, 320], text: '外层叶绿体造糖', color: '#2e7d32', from: 1.5 },
          { kind: 'label', at: [710, 460], pos: [940, 400], text: '内芯海绵存雨水', color: '#3b6ea5', from: 2.5 },
          { kind: 'label', at: [710, 540], pos: [940, 560], text: '表面厚角质蜡膜锁水', from: 3.5 },
          { kind: 'text', at: [600, 750], text: '既是光合车间，又是储水宝塔', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '气孔昼关夜开', duration: 9,
        cues: [
          { kind: 'sprite', icon: '☀️', path: [[320, 280]], size: 110, from: 0.3 },
          { kind: 'shape', shape: 'pill', at: [320, 460], size: [210, 90], color: '#ffd8a8', text: '白天关门', from: 0.8 },
          { kind: 'sprite', icon: '🌙', path: [[860, 280]], size: 100, from: 1.2 },
          { kind: 'shape', shape: 'pill', at: [860, 460], size: [210, 90], color: '#99e9f2', text: '夜晚开门', from: 1.8 },
          { kind: 'myth', wrong: '所有植物都是白天开气孔吸气', right: '仙人掌白天闭门保水、夜里开门吸碳', from: 4.0 },
        ],
      },
      {
        turn: 3, title: '存成苹果酸过夜', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [260, 440], size: [190, 90], color: '#74c0fc', text: '夜间吸碳', from: 0.3 },
          { kind: 'arrow', path: [[375, 440], [515, 440]], color: '#3b6ea5', text: '存进液泡', from: 1.4 },
          { kind: 'shape', shape: 'circle', at: [630, 440], size: [170, 150], color: '#d8f5a2', text: '苹果酸', from: 2.2 },
          { kind: 'arrow', path: [[730, 440], [860, 440]], color: '#e8590c', text: '白天见光', from: 3.2 },
          { kind: 'shape', shape: 'pill', at: [960, 440], size: [160, 90], color: '#ffd43b', text: '葡萄糖', from: 3.8 },
          { kind: 'text', at: [600, 740], text: '时间错峰合作，省水造粮两不误', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '尖刺集露浅根抢水', duration: 9,
        cues: [
          { kind: 'flow', path: [[600, 240], [600, 460]], color: '#3b6ea5', count: 6, speed: 0.45, from: 0.4 },
          { kind: 'shape', shape: 'pill', at: [600, 430], size: [150, 220], color: '#51cf66', text: '棱槽导水', from: 0.2 },
          { kind: 'shape', shape: 'rect', at: [600, 570], size: [660, 36], color: '#c9623b', text: '宽广浅根网', from: 1.8 },
          { kind: 'label', at: [840, 570], pos: [920, 440], text: '小雨刚落瞬间吸进肚', from: 3.0 },
          { kind: 'text', at: [600, 740], text: '全身构造都为干旱荒漠定制', from: 4.8 },
        ],
      },
    ],
  },
};
