import type { Story } from './types';

export const bloodSugarInsulin: Story = {
  slug: 'blood-sugar-insulin',
  title: '刚吃完一大碗米饭，血液里的糖为什么不会一直飙高？',
  trigger: '爷爷在家用血糖仪测手指血，刚吃完午饭升高了一点，过两小时又降回了五左右，小念好奇是谁在血液里偷偷搬糖。',
  dialogue: [
    {
      nian: '爸爸，午饭那一大碗白米饭消化完不都变成葡萄糖进血了吗，为什么两小时后血液里的糖又自己降回去了？',
      dad: '可不是自己消失的，是肚子里一位幕后调度员出手啦！在我们胃后面的胰腺里，散布着许多像小岛一样的细胞团，叫“胰岛”。饭后血液里的葡萄糖一升高，胰岛马上派出一种化学信使——胰岛素，顺着血液跑遍全身发通知！',
      figure: { kind: 'sim', sim: 'glucoseBalance', caption: '切换刚吃饱饭、饭后两小时平稳和空腹踢球三种状态，看胰岛素与胰高血糖素怎样守住血糖。' },
    },
    {
      nian: '胰岛派出的胰岛素给全身细胞发了什么通知呀？',
      dad: '胰岛素就像一把“开锁钥匙”兼仓库管理员：第一，它替肌肉和全身细胞打开大门，催大家赶紧吸进葡萄糖当燃料用；第二，它通知肝脏和肌肉把一时用不完的葡萄糖串成长串，打包存成“肝糖原”和“肌糖原”放进仓库，血液里的糖很快就降回正常啦！',
    },
    {
      nian: '存进仓库这个办法真好！可到了下午踢完球肚子饿得咕咕叫，没吃饭血液里的糖会不会掉光呢？',
      dad: '大脑最怕断糖了，所以胰岛里还住着另一位搭档，叫“胰高血糖素”！等空腹运动血糖快往下掉的时候，胰岛素歇着，轮到胰高血糖素出场给肝脏发信：“快开仓放粮！”肝脏立刻把存好的肝糖原拆回一颗颗葡萄糖放进血里，稳稳托住血糖！',
      figure: {
        kind: 'scale',
        caption: '一收一放两套激素配合，把正常空腹血糖稳在约 4~6 毫摩尔每升。',
        axis: '从饱餐到空腹的血糖调节接力',
        stops: [
          { label: '饱餐刚毕', note: '淀粉变糖涌入血', color: '#ffd8a8' },
          { label: '胰岛素出动', note: '开门用糖存糖原', color: '#d8f3dc', hot: true },
          { label: '空腹运动', note: '血糖偏低发警报', color: '#d0ebff' },
          { label: '胰高血糖素', note: '拆肝糖原补回血', color: '#fff3bf' },
        ],
      },
    },
    {
      nian: '一高就往下压、一低就往上托，这两位搭档配合得也太默契了吧？',
      dad: '生物学家给这种自动纠偏的聪明机制起了个名字，叫“负反馈调节”，就像家里的恒温空调一样：屋里热了就制冷，冷了就停机，始终把血液里的葡萄糖稳稳控制在大约四到六毫摩尔每升的黄金区间里。',
    },
    {
      nian: '有这么厉害的负反馈调节，为什么爷爷还是得了糖尿病要天天测血糖呢？',
      dad: '糖尿病分两种常见情况：一种是胰岛造不出足够的胰岛素钥匙了；另一种更常见，是因为长期营养过剩、缺乏运动，身体细胞对胰岛素的敲门声变得“耳背”不敏感了，多余的糖进不去细胞只能堵在血管里搞破坏。所以我们从小少喝甜饮料、多去户外跑跳，就是在保护自己的胰岛小帮手！',
    },
    {
      nian: '我懂了！饭后血糖升高时胰岛分泌胰岛素，让细胞用糖并把多余糖存成糖原；饥饿时再派胰高血糖素把肝糖原拆回葡萄糖，靠负反馈调节把血糖稳在正常水平。',
      dad: '总结得清清楚楚！还有个历史小彩蛋：一百年前加拿大科学家班廷发现并提纯出胰岛素，让无数原本绝望的糖尿病患者重获新生，这也是医学史上最温暖的奇迹之一。',
    },
  ],
  tip: '预防儿童青少年胰岛素抵抗，最有效的日常习惯是用白开水或纯牛奶代替含糖饮料与奶茶，主食适当搭配燕麦、糙米、红薯等粗杂粮（消化变糖更平缓，不让胰岛素突然超负荷加班），并保持规律体育锻炼。',
  sources: [
    { title: '生物学 七年级下册 · 激素调节；高中生物 选择性必修1 · 第3章 血糖平衡的调节', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'The Endocrine Pancreas and Glucose Homeostasis（胰岛内分泌与血糖稳态调控）', by: 'NCBI Bookshelf (NIH)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK30/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '饭后胰岛派信使', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🍚', path: [[260, 440]], size: 140, from: 0.2 },
          { kind: 'arrow', path: [[370, 440], [530, 440]], color: '#e8590c', text: '消化成葡萄糖', from: 1.2 },
          { kind: 'shape', shape: 'pill', at: [740, 380], size: [280, 90], color: '#ffa8a8', text: '血糖升高', from: 2.0 },
          { kind: 'shape', shape: 'circle', at: [740, 540], size: [170, 110], color: '#ffd43b', text: '胰岛素出动', motion: 'pulse', from: 3.0 },
          { kind: 'text', at: [600, 740], text: '胰腺里的胰岛随时监测血液甜度', from: 4.8 },
        ],
      },
      {
        turn: 1, title: '开门用糖存仓库', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [300, 440], size: [150, 150], color: '#ffd43b', text: '胰岛素', from: 0.3 },
          { kind: 'arrow', path: [[390, 400], [620, 350]], color: '#2e7d32', text: '开细胞门用糖', from: 1.4 },
          { kind: 'arrow', path: [[390, 480], [620, 530]], color: '#3b6ea5', text: '串成糖原入库', from: 2.0 },
          { kind: 'shape', shape: 'rect', at: [820, 440], size: [250, 210], color: '#8ce09b', text: '肝脏肌肉仓', from: 2.8 },
          { kind: 'text', at: [600, 740], text: '血液里多余葡萄糖很快收进仓库', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '饿时开仓放存粮', duration: 9,
        cues: [
          { kind: 'sprite', icon: '⚽', path: [[260, 440]], size: 130, from: 0.3 },
          { kind: 'shape', shape: 'pill', at: [560, 370], size: [230, 90], color: '#99e9f2', text: '胰高血糖素', from: 1.2 },
          { kind: 'arrow', path: [[690, 440], [840, 440]], color: '#e8590c', text: '拆肝糖原', from: 2.2 },
          { kind: 'shape', shape: 'circle', at: [940, 440], size: [150, 120], color: '#ffe066', text: '补回血糖', from: 3.0 },
          { kind: 'text', at: [600, 740], text: '不吃饭踢球也能给大脑稳稳供糖', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '身体里的恒温器', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [600, 440], size: [420, 110], color: '#d8f3dc', text: '血糖平稳区', from: 0.4 },
          { kind: 'arrow', path: [[600, 270], [600, 370]], color: '#2e7d32', text: '偏高就压低', from: 1.6 },
          { kind: 'arrow', path: [[600, 610], [600, 510]], color: '#e8590c', text: '偏低就托高', from: 2.4 },
          { kind: 'text', at: [600, 740], text: '负反馈调节让内环境稳如泰山', from: 4.6 },
        ],
      },
      {
        turn: 4, title: '护好胰岛少喝甜', duration: 9,
        cues: [
          { kind: 'myth', wrong: '年轻怎么狂喝甜饮料都没事', right: '长期糖过量会让细胞对胰岛素变迟钝', from: 0.6 },
          { kind: 'sprite', icon: '🥛', path: [[380, 420]], size: 130, from: 1.8 },
          { kind: 'sprite', icon: '🏃', path: [[820, 420]], size: 130, from: 2.4 },
          { kind: 'text', at: [600, 610], text: '均衡三餐加运动，护好胰岛', size: 's', from: 3.6 },
        ],
      },
    ],
  },
};
