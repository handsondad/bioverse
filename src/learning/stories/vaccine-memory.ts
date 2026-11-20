import type { Story } from './types';

export const vaccineMemory: Story = {
  slug: 'vaccine-memory',
  title: '打疫苗明明是往身体里送“假病菌”，为什么真病毒来了就不怕了？',
  trigger: '周末去社区医院打流感预防针，小念看着小药瓶纳闷：“我都好好的没生病，为什么要往胳膊里打一针处理过的病毒呀？”',
  dialogue: [
    {
      nian: '爸爸，药水不是生病以后才吃来杀病菌的吗？为什么打疫苗要在没生病的时候先打一针“假病毒”？',
      dad: '因为疫苗根本不是留在血液里直接杀毒的药水，而是一场安全的“军事消防演习”！科学家先把凶猛的真病毒灭活、减毒，或者只剪下它外衣上的一小块特征标志（叫抗原）做成疫苗。它没本事让你生大病，却长着跟真坏蛋一模一样的“脸”！',
      figure: { kind: 'sim', sim: 'vaccineDrill', caption: '切换没打疫苗和打过疫苗两种状态，再拖动遇上真病毒后的天数，对比抗体大军爆发的速度。' },
    },
    {
      nian: '拿着坏蛋的脸去做演习？我们身体里的免疫卫士看到这张脸会怎么做？',
      dad: '免疫系统里的淋巴细胞一看到陌生抗原，不知道是演习，立刻认真研究它的长相，花好几天时间量身定制出专门锁死它的精准武器——抗体！演习结束后，疫苗本身早就被清理干净了，但身体里留下了一支长寿的精英老兵：记忆细胞！',
    },
    {
      nian: '留下一支记忆细胞有什么用？要是半年后真的凶猛病毒闯进来了呢？',
      dad: '那就显出王牌本事啦！如果没打过疫苗，免疫系统第一次见真病毒得摸索四五天才能造出抗体，病毒早就繁殖成千上万倍把你烧倒了；可有了记忆细胞，真病毒刚一露头就被秒认出来，记忆细胞瞬间分裂爆发，一天之内造出成百上千倍的抗体把病毒包饺子清光！',
      figure: {
        kind: 'bars',
        caption: '接触真病毒第 4 天时，初次免疫与打过疫苗后二次免疫的抗体水平示意对比。',
        unit: '份',
        bars: [
          { label: '未打疫苗初战', value: 6, text: '摸索慢，仅约 6 份' },
          { label: '打过疫苗再战', value: 90, text: '记忆唤醒，飙升十余倍！', hot: true },
        ],
      },
    },
    {
      nian: '哇，二次出击又快又猛！那为什么打完乙肝疫苗能管好多年，流感疫苗却差不多每年都要重打？',
      dad: '因为每一把抗体钥匙只开一把锁（这叫特异性免疫）！天花、麻疹、乙肝这些病原体的外衣长相很老实，很少变样，记忆细胞记一次就能管很多年；可流感病毒特别滑头，几乎每年都在换新马甲变异，去年存的旧通缉照认不出新马甲，所以入秋前要更新一次新通缉照！',
    },
    {
      nian: '原来流感病毒老换马甲！那有时候打完疫苗胳膊有点酸胀或者微热，是生病了吗？',
      dad: '别担心，那恰恰说明你身体里的免疫部队正在热火朝天地集合练兵呢！一般休息一天、多喝点温水就自己消退了。正是靠全世界小朋友按计划接种疫苗，曾经夺走无数生命的恐怖天花病毒，已经被人类彻底从自然界清零啦！',
    },
    {
      nian: '我懂了！疫苗不是留在血里杀毒的药水，而是安全的病原体抗原“通缉照”，帮免疫系统提前演习并留下记忆细胞；真病毒入侵时记忆细胞迅速启动二次免疫，飞快造出大量专门抗体保护我们。',
      dad: '总结得威风凛凛！下次打预防针的时候，你就知道胳膊里正在训练一支专属特种兵啦。',
    },
  ],
  tip: '儿童接种疫苗后，务必按门诊要求在留观区安静观察 30 分钟再离开，以防极罕见的速发型过敏反应；当天保持针眼处清洁干燥、避免剧烈跑跳。若孩子正处于急性发热或感染期，应主动告知接种医生评估推迟接种。',
  sources: [
    { title: '生物学 八年级下册 · 免疫与计划免疫；高中生物 选择性必修1 · 第4章 免疫调节', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'How do vaccines work?（疫苗与免疫记忆科学图解）', by: 'World Health Organization (WHO)', url: 'https://www.who.int/news-room/feature-stories/detail/how-do-vaccines-work' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '安全的通缉照', duration: 9,
        cues: [
          { kind: 'sprite', icon: '💉', path: [[280, 440]], size: 140, from: 0.2 },
          { kind: 'arrow', path: [[390, 440], [560, 440]], color: '#3b6ea5', text: '送入抗原特征', from: 1.2 },
          { kind: 'shape', shape: 'circle', at: [760, 440], size: [200, 200], color: '#d0ebff', text: '无害演习靶', from: 2.0 },
          { kind: 'myth', wrong: '疫苗药水一直留在血里杀病毒', right: '疫苗很快代谢，留下的是免疫记忆', from: 4.2 },
        ],
      },
      {
        turn: 1, title: '练兵留下老兵', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [320, 440], size: [160, 160], color: '#74c0fc', text: '淋巴细胞', from: 0.3 },
          { kind: 'arrow', path: [[420, 390], [640, 340]], color: '#2e7d32', text: '定制抗体', from: 1.4 },
          { kind: 'arrow', path: [[420, 490], [640, 540]], color: '#7c52b8', text: '驻守存档', from: 2.0 },
          { kind: 'shape', shape: 'pill', at: [830, 540], size: [230, 100], color: '#d8c5fa', text: '记忆细胞', motion: 'pulse', from: 2.8 },
          { kind: 'text', at: [600, 740], text: '演习结束，记忆特种兵长期巡逻', from: 4.8 },
        ],
      },
      {
        turn: 2, title: '二次免疫火箭飙', duration: 9,
        cues: [
          { kind: 'shape', shape: 'circle', at: [260, 440], size: [140, 140], color: '#ff6b6b', text: '真病毒来袭', from: 0.3 },
          { kind: 'arrow', path: [[350, 440], [530, 440]], color: '#7c52b8', text: '记忆秒认出', from: 1.3 },
          { kind: 'meter', at: [780, 400], label: '专门抗体数量', start: 0.08, end: 0.98, color: '#2e7d32', over: 2.2, from: 2.0 },
          { kind: 'label', at: [780, 510], pos: [780, 590], text: '赶在病毒繁殖前彻底清零', color: '#2e7d32', from: 3.6 },
          { kind: 'text', at: [600, 740], text: '比第一次摸索快得多、猛得多！', from: 4.8 },
        ],
      },
      {
        turn: 3, title: '专锁专开防换装', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [360, 430], size: [250, 110], color: '#8ce09b', text: '乙肝麻疹少变', from: 0.4 },
          { kind: 'label', at: [360, 540], pos: [360, 620], text: '记忆管好多年', from: 1.6 },
          { kind: 'shape', shape: 'pill', at: [840, 430], size: [250, 110], color: '#ffd8a8', text: '流感爱换马甲', from: 1.0 },
          { kind: 'label', at: [840, 540], pos: [840, 620], text: '每年更新通缉照', from: 2.6 },
          { kind: 'text', at: [600, 750], text: '一把抗体钥匙专开一把抗原锁', from: 4.8 },
        ],
      },
      {
        turn: 4, title: '守护全人类防线', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🛡️', path: [[600, 420]], size: 170, from: 0.3 },
          { kind: 'pulse', at: [600, 420], color: '#2e7d32', radius: 110, rate: 0.7, from: 1.2 },
          { kind: 'label', at: [600, 310], pos: [880, 240], text: '人类靠疫苗彻底消灭天花', from: 2.4 },
          { kind: 'text', at: [600, 730], text: '按时打疫苗，护自己也护大家', from: 4.6 },
        ],
      },
    ],
  },
};
