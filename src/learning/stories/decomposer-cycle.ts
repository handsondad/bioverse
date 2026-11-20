import type { Story } from './types';

export const decomposerCycle: Story = {
  slug: 'decomposer-cycle',
  title: '森林里每年落那么多树叶，为什么没有堆成山？',
  trigger: '秋游踩着齐脚踝厚的落叶沙沙响，小念抬头看着满山大树纳闷：年年秋天都掉这么多叶，几百年下来怎么没把整座山埋起来？',
  dialogue: [
    {
      nian: '爸爸，森林里每年掉这么多树叶和枯树枝，没人来扫地，为什么几百年也没堆成山呀？',
      dad: '因为森林底下住着一支日夜加班的“超级回收队”——分解者！它们包括蘑菇和各种真菌、土壤里数不清的细菌，还有帮忙咬碎枯叶的蚯蚓和马陆。它们把枯枝落叶一点点吃掉拆解，全变回了肥沃的黑泥土！',
      figure: { kind: 'sim', sim: 'forestRecycle', caption: '开关森林分解者，看看落叶是重新变成大树的养分，还是越堆越高。' },
    },
    {
      nian: '蘑菇和细菌把枯叶拆解完，落叶里的东西是不是凭空消失了？',
      dad: '不会凭空消失，而是回到了起点！分解者像拆积木高手，把落叶和动物遗体里的复杂有机物，重新拆回二氧化碳、水和含氮磷钾的无机盐。二氧化碳飘回空气，水和矿物质渗进泥土，明年春天新树又能拿去长新叶子！',
      eq: '落叶有机物 —[真菌 · 细菌分解]→ 二氧化碳 + 水 + 土壤无机盐',
      show: { kind: 'steps', frames: [{ icon: '🌳', label: '生产者造有机物' }, { icon: '🍂', label: '落叶枯木掉回地' }, { icon: '🍄', label: '分解者拆回养分' }] },
    },
    {
      nian: '我在腐烂的树桩上常见到一簇簇白蘑菇，蘑菇原来不是植物，也是分解者呀？',
      dad: '对啦！很多人以为蘑菇长在土里就是植物，其实蘑菇没有叶绿体、不能晒太阳造粮食，属于真菌！你看得到的伞盖只是它散播孢子的“果实”，真正的菌丝像一张白色细网扎进枯木里，分泌消化酶把木头慢慢分解掉。',
    },
    {
      nian: '那冬天很冷的时候落叶烂得慢，夏天又热又湿烂得特别快，也是因为分解者吗？',
      dad: '眼光太毒了！真菌和细菌也是活生物，温暖潮湿的时候干活最起劲，所以热带雨林里的落叶几乎几天就烂没了；而在冰天雪地的寒带针叶林，细菌真菌冻得慢吞吞，地上的松针落叶就会厚厚地铺上好多年！',
    },
    {
      nian: '真菌和细菌这么重要，要是没有分解者，只留下大树和动物，大自然能转起来吗？',
      dad: '转不起来！如果分解者集体罢工，枯枝落叶和遗体永远烂不掉，很快堆满地球；更重要的是，碳、氮这些生命必需的积木全被锁死在死叶子里回不到泥土和空气，过不了多久连活着的树和动物都会跟着没原料可用！',
    },
    {
      nian: '我懂了！森林落叶没堆成山，全靠蘑菇真菌、细菌和蚯蚓这些分解者把枯叶拆回二氧化碳、水和无机养分，让大树循环再用；生产者、消费者和分解者缺一不可！',
      dad: '总结得太圆满啦！怪不得古诗说“落红不是无情物，化作春泥更护花”——背后干活的功臣，正是泥土里默默无闻的分解者们。',
    },
  ],
  tip: '带孩子在森林公园观察倒木上的木耳、蘑菇和湿润腐殖土时，可以提醒“只用眼睛观察、不要采摘或品尝野生蘑菇”（许多毒蘑菇与食用菌外观极像）。',
  sources: [
    { title: '生物学 七年级上册 · 第一单元 第二章 第2节 生物与环境组成生态系统', by: '人民教育出版社', url: 'https://jc.pep.com.cn/' },
    { title: 'Decomposers（生态系统分解者科普）', by: 'National Geographic Education', url: 'https://education.nationalgeographic.org/resource/decomposers/' },
  ],
  film: {
    scenes: [
      {
        turn: 0, title: '森林超级回收队', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🍂', path: [[400, 260], [560, 520]], size: 96, travel: 2.5, from: 0.2 },
          { kind: 'sprite', icon: '🍄', path: [[360, 580]], size: 110, from: 0.8 },
          { kind: 'sprite', icon: '🪱', path: [[820, 580]], size: 100, from: 1.4 },
          { kind: 'shape', shape: 'pill', at: [600, 620], size: [260, 90], color: '#efe5ff', text: '真菌与细菌', motion: 'pulse', from: 2.0 },
          { kind: 'text', at: [600, 770], text: '分解者日夜把枯叶拆成肥土', from: 4.5 },
        ],
      },
      {
        turn: 1, title: '物质循环回起点', duration: 10,
        cues: [
          { kind: 'shape', shape: 'circle', at: [600, 240], size: [220, 140], color: '#d9f2dc', text: '🌳 大树生长', from: 0.2 },
          { kind: 'shape', shape: 'circle', at: [920, 540], size: [220, 140], color: '#fff4e0', text: '🍂 枯枝落叶', from: 0.6 },
          { kind: 'shape', shape: 'circle', at: [280, 540], size: [220, 140], color: '#efe5ff', text: '🍄 分解归还', from: 1.0 },
          { kind: 'flow', path: [[700, 280], [880, 470], [380, 560], [500, 280]], color: '#2e7d32', count: 8, speed: 220, loop: true, from: 1.8 },
          { kind: 'text', at: [600, 770], text: '水、CO₂、矿物质不断循环', from: 4.5 },
        ],
      },
      {
        turn: 2, title: '蘑菇不是植物', duration: 9,
        cues: [
          { kind: 'sprite', icon: '🍄', path: [[600, 410]], size: 160, from: 0.3 },
          { kind: 'label', at: [600, 510], pos: [920, 480], text: '地下白色菌丝分解枯木', from: 1.6 },
          { kind: 'myth', wrong: '蘑菇长在土里是植物', right: '蘑菇无叶绿体，是真菌分解者', from: 4.0 },
        ],
      },
      {
        turn: 3, title: '温暖潮湿烂得快', duration: 9,
        cues: [
          { kind: 'text', at: [600, 240], text: '真菌细菌也怕冷', from: 0.2 },
          { kind: 'shape', shape: 'pill', at: [330, 420], size: [340, 130], color: '#d3f9d8', text: '热带雨林', from: 0.8 },
          { kind: 'meter', at: [330, 600], label: '分解速度', start: 0.1, end: 0.95, color: '#2e7d32', from: 1.4 },
          { kind: 'shape', shape: 'pill', at: [870, 420], size: [340, 130], color: '#e7f5ff', text: '寒带针叶林', from: 2.4 },
          { kind: 'meter', at: [870, 600], label: '分解速度', start: 0.1, end: 0.2, color: '#3b6ea5', from: 3.0 },
          { kind: 'text', at: [600, 790], text: '雨林几天烂没，寒带铺多年', from: 4.6 },
        ],
      },
      {
        turn: 4, title: '三类角色缺一不可', duration: 9,
        cues: [
          { kind: 'shape', shape: 'pill', at: [240, 440], size: [230, 120], color: '#d9f2dc', text: '生产者造粮', from: 0.3 },
          { kind: 'shape', shape: 'pill', at: [600, 440], size: [230, 120], color: '#fff4e0', text: '消费者吃粮', from: 1.2 },
          { kind: 'shape', shape: 'pill', at: [960, 440], size: [230, 120], color: '#efe5ff', text: '分解者回收', from: 2.1 },
          { kind: 'text', at: [600, 750], text: '少了回收队，生命大网会停摆', from: 4.5 },
        ],
      },
    ],
  },
};
