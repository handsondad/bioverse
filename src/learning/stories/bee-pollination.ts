import type { Story } from './types';

export const beePollination: Story = {
  slug: 'bee-pollination',
  title: '要是没有蜜蜂和蝴蝶，餐桌上的水果和蔬菜真的会少一大半吗？',
  trigger: '春天去草莓采摘园，大棚角落里居然专门放着一个小木箱蜂巢，园长伯伯说：“棚里的草莓又大又甜，全靠这箱小蜜蜂帮忙呢！”',
  dialogue: [
    {
      nian: '爸爸，蜜蜂飞进草莓花里不是去偷喝花蜜的吗？园长伯伯干嘛还要专门花钱请蜜蜂住进大棚里呀？',
      dad: '那可不是白偷喝，而是一笔最公平的“甜蜜交易”！植物长在土里没法自己跑去找对象，必须把雄蕊上的花粉送到雌蕊柱头上完成受精，花朵谢了以后子房才能膨大结出草莓和苹果。花朵请蜜蜂喝香甜花蜜，蜜蜂毛茸茸的腿和肚子沾满花粉飞去下一朵花，顺手就帮植物完成了授粉！',
      figure: {
        kind: 'image',
        src: '/images/photos/bee-pollen.webp',
        alt: '全身绒毛和后腿花粉篮沾满金黄色花粉的蜜蜂采蜜特写照片',
        caption: '正在花朵上忙碌的蜜蜂：全身细密绒毛沾满金黄花粉，后腿还挂着鼓鼓囊囊的“花粉篮”。',
        credit: 'Jon Sullivan · 公有领域',
        href: 'https://commons.wikimedia.org/wiki/File:Bee_Collecting_Pollen_2004-08-14.jpg',
      },
    },
    {
      nian: '原来是植物请客喝花蜜、蜜蜂帮忙送花粉！要是世界上真没有蜜蜂和蝴蝶了，我们是不是连白米饭和馒头都吃不上啦？',
      dad: '好问题，咱们得把庄稼分成两拨看！水稻、小麦和玉米开的花不香也不艳，它们靠风一吹就把轻飘飘的花粉撒出去（叫风媒花），所以没了蜜蜂，白米饭和白馒头还在；但是苹果、桃子、西瓜、草莓、黄瓜、番茄、油菜籽和坚果全靠昆虫传粉（叫虫媒花）！',
      figure: { kind: 'sim', sim: 'beeWaggle', caption: '拖动果园里蜜蜂与传粉昆虫的比例，对比虫媒苹果树与风媒小麦的收成变化。' },
    },
    {
      nian: '白米饭还在，可水果蔬菜全悬了！科学家算过到底有多少种农作物离不开动物传粉吗？',
      dad: '联合国粮农组织专门统计过：全球一百多种主要粮食和经济作物里，大约有百分之七十五的作物种类都或多或少依赖蜜蜂、蝴蝶、食蚜蝇等动物授粉；野生开花植物更是有将近九成离不开它们！要是没了传粉动物，我们的餐桌瞬间就会变成只有白饭白粥的“黑白世界”！',
      figure: {
        kind: 'bars',
        caption: '依赖蜜蜂等动物帮助传粉的植物种类占比（数据据联合国粮农组织 FAO）。',
        unit: '%',
        bars: [
          { label: '全球作物种类', value: 75, text: '约75%靠动物传粉', hot: true },
          { label: '野生开花植物', value: 87.5, text: '约87.5%靠动物' },
        ],
      },
    },
    {
      nian: '四分之三的作物种类都要靠它们！那一只小蜜蜂发现了大片盛开的果园，怎么喊蜂巢里几千个姐妹一起来干活呢？',
      dad: '蜜蜂不会说话，但奥地利动物学家弗里希破译了它们超神奇的“舞蹈语言”（还拿了诺贝尔奖）！侦察蜂飞回黑暗的蜂巢后，会在竖直巢脾上跳“8 字摇摆舞”：中间直走摇屁股的角度对应太阳方向，摇摆的时间长短代表果园有多远，再吐一点花蜜让同伴闻花香，大部队立刻精准出动！',
    },
    {
      nian: '跳个 8 字舞就能报出方向和距离，太酷了！现在蜜蜂好像比以前少了，我们平时能帮帮它们吗？',
      dad: '当然能！滥喷杀虫农药、城市里铲光野花只种纯草坪，都会让蜜蜂中毒或饿肚子。农民伯伯避开花期科学用药，社区公园留一片三叶草和本土野花当“昆虫小驿站”；还有我们在户外看见蜜蜂专心采蜜时，不挥手拍打惊扰它，它根本不会主动蜇人。',
    },
    {
      nian: '我懂了！植物提供花蜜花粉、蜜蜂帮忙传粉结出果实，属于互利共生；水稻小麦虽靠风媒，但全球约百分之七十五的农作物种类依赖动物授粉，蜜蜂还能跳 8 字舞召集同伴。',
      dad: '总结得甜丝丝又沉甸甸！下次咬下一口红彤彤的大草莓，记得在心里谢谢那群毛茸茸的小邮差哦。',
    },
  ],
  tip: '户外赏花遇到蜜蜂飞近时，教孩子记住“站定当木头人”口诀：工蜂一旦把带倒钩的毒针刺入皮肤就会内脏拉脱而死，所以只要人不挥舞拍打、不踩压蜂巢，采蜜蜂绝对舍不得主动攻击人。若不慎被蜇，切勿挤压毒囊，可用硬卡片贴皮刮除毒针并用肥皂水冲洗，若出现全身风团或呼吸不畅须立即急诊。',
  sources: [
    { title: '生物学 七年级上册 · 开花和结果；八年级上册 · 动物在生物圈中的作用与社会行为', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Pollination & Global Food Security（全球授粉动物与粮食安全报告）', by: 'Food and Agriculture Organization of the UN (FAO)', url: 'https://www.fao.org/pollination/about/en' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '甜蜜的互利共生', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🌸', path: [[320, 440]], size: 150, from: 0.2 },
          { kind: 'sprite', icon: '🐝', path: [[360, 380], [800, 380]], size: 110, travel: 2.8, from: 0.8 },
          { kind: 'sprite', icon: '🍓', path: [[840, 460]], size: 150, from: 2.8 },
          { kind: 'label', at: [580, 340], pos: [580, 230], text: '花请喝蜜，蜂帮传粉结果', from: 1.8 },
          { kind: 'text', at: [600, 740], text: '双方互帮互助，谁也离不开谁', from: 4.8 },
        ],
      },
      {
        turn: 1, title: '风媒花与虫媒花', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [340, 430], size: [260, 110], color: '#ffd43b', text: '稻麦靠风吹粉', from: 0.3 },
          { kind: 'shape', shape: 'pill', at: [860, 430], size: [260, 110], color: '#ff8787', text: '果蔬靠虫送粉', from: 0.9 },
          { kind: 'myth', wrong: '没有蜜蜂人类第二天就没粮食饿死', right: '风媒主食还在，但果蔬油料会少大半', from: 3.8 },
        ],
      },
      {
        turn: 2, title: '守护彩色大餐桌', duration: 9,
        cues: [
          { kind: 'count', at: [380, 400], label: '作物种类依赖', start: 0, end: 75, unit: '%', over: 2.2, from: 0.4 },
          { kind: 'count', at: [820, 400], label: '野生开花植物', start: 0, end: 88, unit: '%', over: 2.2, from: 0.8 },
          { kind: 'text', at: [600, 720], text: '果蔬色彩与甜香全靠传粉帮手', from: 4.4 },
        ],
      },
      {
        turn: 3, title: '蜂巢里的8字舞', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🐝', path: [[440, 450], [600, 370], [760, 450], [600, 530], [440, 450]], size: 110, travel: 4.0, wobble: true, from: 0.4 },
          { kind: 'label', at: [600, 370], pos: [600, 220], text: '角度指方向，时长报距离', color: '#e8590c', from: 2.0 },
          { kind: 'text', at: [600, 740], text: '侦察蜂用摇摆舞通知全巢同伴', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '留片野花不惊扰', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🌼', path: [[360, 440]], size: 150, from: 0.3 },
          { kind: 'label', at: [360, 540], pos: [360, 620], text: '花期少喷农药留食源', color: '#2e7d32', from: 1.5 },
          { kind: 'sprite', icon: '🧒', path: [[840, 440]], size: 140, from: 0.9 },
          { kind: 'label', at: [840, 540], pos: [840, 620], text: '静静观察不挥打就安全', color: '#3b6ea5', from: 2.6 },
          { kind: 'text', at: [600, 750], text: '善待传粉昆虫，守住缤纷果盘', from: 4.8 },
        ],
      },
    ],
  },
};
