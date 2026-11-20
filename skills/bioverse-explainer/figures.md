# 配图和互动图

配图写在爸爸那一轮的 `figure` 里，画在他的气泡中。类型和画法在 `src/learning/figures.ts`；互动图登记在 `src/learning/sims.ts`，每个主题的互动图写在 `src/learning/simlib/<主题>.ts`（`cells`、`metabolism`、`plants`、`animals`、`body`、`genetics`、`microbes`、`ecology`），共用的画图工具在 `simlib/kit.ts`：`txt` 文字、`arrow` 箭头、`poly` 折线点串、`n` / `r1` / `r2` 取整、`clamp`、`smooth` 缓动、`noise` 固定随机数，颜色 `INK` 墨色、`HOT` 橙、`GREEN` 叶绿、`LEAF` 浅绿、`BLUE`、`WATER`、`PURPLE`。

## 规矩（检查器会拦）

- 每篇 1–2 张能拖滑块的互动图（`sim`），名字必须在 `simNames` 里。
- 没有动画的文章至少 3 轮配图（正常文章都有动画，这条是兜底）。
- `caption` ≤70 字，说清「拖哪个、看什么」，不重复爸爸的原话。
- `bars` 画 2–6 根柱子，名字 ≤6 字、柱尾的数 ≤12 字、数值都大于 0。
- `scale` 画 3–5 档，顶栏 `axis` ≤14 字，每档标签 ≤7 字、说明 ≤9 字。
- `/images/photos/` 下的照片要写 `credit` 和 https 的 `href`（见 sources.md）。

## 选哪种图

| kind | 用来讲 | 关键字段 |
|---|---|---|
| `sim` | 孩子拖一个量、看另一个量怎么变：外界浓度和细胞吸水失水、温度和酶活性、世代数和长脖子比例 | `sim`、`caption` |
| `bars` | 几样东西比大小：几种动物的心率、几种细胞的大小、几个营养级的能量 | `unit`、`bars` |
| `scale` | 3–5 档区间横着排：从分子到细胞到个体的尺度、体温台阶、发育阶段 | `axis`、`stops` |
| `image` | 真照片（Wikimedia、NOAA、NSF……）或 3D 课件封面 | `src`、`alt`、`credit`、`href` |

一张图只帮爸爸说清这一句。互动图放在最关键的那一轮（通常是讲「怎么发生」或「误区」的那轮）。

## 现有的互动图（`simNames`，共 50 张）

用之前打开 `simlib/<主题>.ts` 看看它的滑块和读数，确认它演的正是爸爸这一句。一张图可以被多篇文章用，但别让两篇相邻的文章用同一张。

| sim | 主题 | 演什么 | 滑块 | 现在用在 |
|---|---|---|---|---|
| `cellCompare` | cells | 动物细胞和植物细胞的结构对比，放大看某个细胞器 | 细胞类型、放大看哪一处 | cell-building-blocks |
| `osmosisCell` | cells | 洋葱表皮细胞在不同浓度溶液里吸水、失水、质壁分离 | 外界溶液浓度 | plasmolysis-step |
| `membraneGate` | cells | 自由扩散、协助扩散、主动运输三种过膜方式 | 过膜方式、细胞供能（ATP） | transport-step |
| `mitosisPhases` | cells | 有丝分裂间期到末期染色体怎么排、怎么分 | 分裂阶段 | mitosis-step |
| `hookeScope` | cells | 胡克显微镜下的软木小格子：死细胞留下的细胞壁 | 显微镜下的标本、放大清晰度 | hooke-cork-cell |
| `ciliaSwim` | cells | 草履虫靠纤毛游动、趋利避害 | 右边滴入什么 | paramecium-single-cell |
| `tadpoleMorph` | cells | 蝌蚪变态时尾巴细胞凋亡、被身体回收 | 变态发育进度 | tadpole-tail-apoptosis |
| `starchChew` | metabolism | 唾液淀粉酶把淀粉切成麦芽糖，越嚼越甜 | 在嘴里细嚼的时间 | bread-sweet-chew |
| `cellPower` | metabolism | 活动越剧烈，细胞呼吸越快、耗氧越多 | 活动状态 | cell-respiration |
| `enzymeTemp` | metabolism | 酶活性随温度先升后降，高温变性回不来 | 环境温度 | enzyme-step |
| `fireflyAtp` | metabolism | ATP 供能让荧光素发冷光 | 谁在发光、供能强弱 | firefly-cold-light |
| `bromelainMouth` | metabolism | 菠萝蛋白酶分解口腔表面蛋白，加热、泡盐水后的差别 | 菠萝怎么处理 | pineapple-tingle-enzyme |
| `fatExhale` | metabolism | 脂肪氧化分解后，大部分变成二氧化碳从肺呼出 | 氧化分解掉的脂肪 | fat-breathed-out |
| `photoFactory` | plants | 叶绿体用光、水、二氧化碳造糖放氧 | 阳光强弱、水分供应 | photosynthesis-food |
| `leafSeason` | plants | 秋天叶绿素分解，黄色、红色色素露出来，叶柄长出离层 | 季节变化 | autumn-leaves |
| `treePull` | plants | 叶片蒸腾把导管里的水柱一路拉上树顶 | 树叶气孔张开程度 | plant-water-up |
| `beanSprout` | plants | 种子萌发要水、空气和适宜温度，泡太满缺氧烂掉 | 碗里的水量、有没有照光 | seed-germination-dark |
| `mimosaPillow` | plants | 含羞草叶枕细胞失水、叶片合拢 | 含羞草状态 | mimosa-fold-touch |
| `sunflowerTrack` | plants | 幼年向日葵白天东向西转、夜里转回，开花后固定朝东 | 向日葵年龄、一天中的时刻 | sunflower-follow-sun |
| `desertCactus` | plants | 仙人掌白天关气孔、夜里开气孔吸二氧化碳 | 沙漠昼夜 | cactus-spines-desert |
| `hibernateMeter` | animals | 冬眠时体温、心跳、呼吸大幅下降，靠脂肪过冬 | 刺猬状态 | hibernation-sleep |
| `camoSpot` | animals | 背景和翅膀颜色像不像，决定被天敌发现的快慢 | 树干背景、蝴蝶翅膀配色 | camo-mimicry |
| `birdCompass` | animals | 候鸟用太阳、星空和地磁定方向 | 天气（太阳与星空）、地磁感应 | bird-migration |
| `gillFilament` | animals | 鳃丝在水里张开、离水塌成一团，换气面积骤减 | 鱼在哪里 | fish-gills-water |
| `pupaRebuild` | animals | 蛹里大部分组织被分解，成虫盘长成翅膀和腿 | 完全变态阶段 | caterpillar-butterfly |
| `penguinFeet` | animals | 腿里动静脉贴着走，逆流换热让脚保持接近冰点 | 腿部血管排布 | penguin-icy-feet |
| `reflexArc` | body | 感受器 → 脊髓 → 效应器先缩手，再传到大脑才觉得疼 | 碰到烫锅后过了 | hot-hand-reflex |
| `feverBattle` | body | 体温升高时免疫细胞和病菌的此消彼长 | 身体温度 | fever-immune |
| `nerveWave` | body | 动作电位沿神经纤维一段段传过去 | 兴奋跑到第几段 | impulse-step |
| `earCanalSpin` | body | 半规管里的淋巴液转圈后还在晃，停下也觉得在转 | 转圈动作 | dizzy-ear-spin |
| `glucoseBalance` | body | 饭后胰岛素降血糖、饿时胰高血糖素升血糖 | 身体状态 | blood-sugar-insulin |
| `vaccineDrill` | body | 打过疫苗的身体，真病毒来时抗体涨得更快更高 | 是否打过疫苗、遇到真病毒后第几天 | vaccine-memory |
| `punnettDimple` | genetics | 酒窝基因的棋盘格：爸妈的基因怎么组合给孩子 | 爸爸的基因、妈妈的基因 | look-like-parents |
| `dnaPair` | genetics | DNA 双链碱基 A–T、C–G 配对，一段密码对应一个性状 | 切换一段基因密码 | dna-blueprint |
| `geneMutate` | genetics | 复制时抄错一个字母，可能没影响、也可能改了蛋白质 | DNA 复制时抄写情况 | mutation-diversity |
| `mendelPeas` | genetics | 子一代全高、子二代约 3:1，种得越多越接近 | 看到哪一代、种下多少株豌豆 | mendel-pea-ratio |
| `calicoCoat` | genetics | 两条 X 上的毛色基因随机失活，拼出三花 | 小猫性染色体、X 染色体上的毛色基因 | calico-sex-chromosome |
| `hybridRice` | genetics | 不育系、保持系、恢复系三系配套和杂种优势 | 育种与种田方案 | yuan-hybrid-rice |
| `yeastDough` | microbes | 温度决定酵母产气快慢，面团里气泡多少 | 发面温度 | yeast-bread-yogurt |
| `germVsVirus` | microbes | 细菌和病毒的大小、结构，抗生素只对细菌有用 | 闯进来的微生物、使用抗生素 | bacteria-vs-virus |
| `gutGarden` | microbes | 膳食纤维喂饱肠道有益菌，菌群更多样 | 每天蔬菜与全谷物 | gut-microbiome |
| `pasteurFlask` | microbes | 鹅颈瓶：煮沸 + 弯颈挡住灰尘里的细菌，肉汤不坏 | 杀菌与密封方式 | milk-pasteurization |
| `penicillinZone` | microbes | 青霉菌周围细菌长不起来的抑菌圈 | 培养皿观察阶段 | fleming-penicillin |
| `artemisininExtract` | microbes | 高温煎煮破坏青蒿素，低温乙醚提取保住药效 | 青蒿提取方法 | tu-artemisinin-malaria |
| `wolfSheep` | ecology | 狼和羊、草的数量互相牵制 | 草原上狼的数量 | food-web-balance |
| `forestRecycle` | ecology | 分解者把落叶分解回土壤和空气 | 森林分解者 | decomposer-cycle |
| `giraffeSelect` | ecology | 一代代筛选后长脖子个体比例上升 | 经过的世代 | evolution-giraffe |
| `beeWaggle` | ecology | 传粉昆虫多少决定结果率 | 果园里的蜜蜂与传粉昆虫 | bee-pollination |
| `energyPyramid` | ecology | 每往上一级只剩约一成能量 | 相邻营养级传递效率 | energy-pyramid-tiger |
| `coralBleach` | ecology | 海水升温，珊瑚排出虫黄藻变白 | 海水比正常夏季偏高 | coral-symbiosis-bleach |

## 写一个新的互动图

题库里写着「新：…」的题要新写一个 sim。在对应主题的 `simlib/<主题>.ts` 里照现有的写一个 `SimDef` 并导出，再在 `sims.ts` 顶部的 import 行引进来、加进 `SIMS` 表（按主题那一行放）：

```ts
export const appleBrown: SimDef = {
  params: [
    { key: 'minutes', label: '切开后放了', min: 0, max: 60, step: 5, value: 20, unit: ' 分钟' },
    { key: 'lemon', label: '挤柠檬汁', min: 0, max: 1, step: 1, value: 0, labels: ['没挤', '挤了'] },
  ],
  animated: false,
  draw(s) {
    const brown = clamp(s.minutes / 60, 0, 1) * (s.lemon ? 0.3 : 1);
    return `…SVG 片段…${txt(280, 300, '酶 + 氧气 → 褐色物质', { size: 14 })}`;
  },
  readout: s => `放了 ${s.minutes} 分钟：${s.lemon ? '酸让酶慢下来，' : ''}切面${s.minutes > 30 ? '明显' : '有点'}发褐`,
};
```

- **画面只由滑块和时间决定**：`draw(state, t)` 返回 560×320 画布里的 SVG 片段（底色 `#fffdf8` 圆角卡片由 `sims.ts` 画），`readout(state)` 返回一句读数（「外界浓度 0.3 g/mL：细胞失水，原生质层离开细胞壁」）。不要在里面存状态，随机用 `noise(seed)`，别用 `Math.random()`。
- **生物要对**：数量关系照教材和来源（3:1、约 10% 传递效率、37 ℃ 左右最适）；为了看清而夸张的地方（细胞放大、时间压缩）在注释里写清楚，读数里写真值或「示意」。
- **滑块 1–3 个**：每个都是孩子能理解的量（「在嘴里嚼了多久」而不是「反应时间」）；分档的用 `labels`，`min` 0、`step` 1、`max` 为档数减 1。范围两头的画面也要合理。
- **文字**：SVG 文字走 `txt()`（带白描边，深色底上用 `plain: true`），默认 15 号；文字别出画布、别互相压，中文读数尽量短。
- **会动的**设 `animated: true` 和 `still`（减少动态效果时停在哪一秒）；页面只在看得见时播。动起来的东西用 `t` 算位置（`(t * 速度) % 长度`），别累加。
- **颜色**：主色叶绿 `GREEN`，「看这里」用 `HOT` 橙；其余用 kit 里的颜色或柔和的同色系，别用大面积纯黑纯红。
- **测试**：`tests/sims.test.ts` 会把每个 sim 的滑块拖遍最小 / 中间 / 最大的组合，查有没有 `NaN`、空读数；新 sim 自动进测试。
- **看一眼**：`npm run story:sims -- <sim...>` 把滑块两头、几个时刻的画面排成联系表（`.story-preview/sims-*.png`），逐格看字有没有出框、画面对不对。
- 写完在上面「现有的互动图」表里加一行。

## 每种图的写法

**`sim`**：`{ kind: 'sim', sim: 'osmosisCell', caption: '把外界溶液调浓：细胞失水，原生质层慢慢离开细胞壁。' }`。页面自动加「👆 拖一拖滑块 · 」前缀。

**`bars`**：`{ kind: 'bars', unit: '次/分钟', caption: '…', bars: [{ label: '冬眠刺猬', value: 20 }, { label: '醒着刺猬', value: 190, hot: true }] }`（例子里的数写文章前要重新查证）。柱子按最大值等比画，`hot` 那根是橙色；柱尾不写 `text` 就显示「数值 单位」。数值要有来源。

**`scale`**：`{ kind: 'scale', axis: '从小到大 →', stops: [{ label: '病毒', note: '约 0.1 微米', color: '#…' }, …], caption: '…' }`。色块深浅自动切换白字 / 深棕字，`hot` 那一档加橙色外圈。

**`image`**：先打开图片看清画面再写图注；格式见 sources.md「别人的照片」。课件封面从 `../assets` 引 `lessonAsset('covers/xxx.webp')`（从 `../catalog` 引会循环引用）。

## 加一种新图

1. 在 `figures.ts` 的 `Figure` 里加一种 kind，`renderFigure` 里画出完整的静态 SVG（没有脚本也能看，文字转义）。
2. 在 `rules.ts` 的 `figureProblems` 补检查，在 `tests/stories.test.ts` 补测试。
3. 样式写进 `learning.css` 的 `.fig-<kind>`，颜色用 `--cv-*` 变量。
4. 更新本文件、`AGENTS.md`。
