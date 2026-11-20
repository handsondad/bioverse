# 右栏的讲解动画

动画写在 `Story.film` 里，放在文章右栏（宽屏吸附在右边，窄屏在对话上方），带小念和爸爸的语音讲解。引擎在 `src/learning/film/`（`engine.ts` 时间线、`stage.ts` 画面、`player.ts` 播放器、`narration.ts` 配音版时间线）。画布固定 1200×900，坐标都是 `[x, y]`，y 往下增大。每个元素只由时间 t 决定，所以能暂停、拖动、从任意一帧看。

**配音会把戏拉长**：有声音时，配同一轮的那一组戏要等这一轮的两句读完（开口前留 0.4 秒、一问一答之间 0.35 秒、两轮之间 0.7 秒），整组按比例放慢：`from`/`to`、`travel`、`over`、`rise`、`tint`、`slide`、`amount`、镜头 `t` 一起拉长；`flow`、`pulse`、`wave`、抖动、摆动、打字、画箭头保持原速。所以戏照原速写，元素出现的先后对上爸爸说话的先后就行。

**每一轮都要有自己的戏**：播放时左边高亮正在读的那一轮（`player.ts` 的 `onTurn`）。如果某一轮没配戏，配音读这一轮时右边还停在上一场，画面和声音就对不上了——所以检查器要求**除了最后的总结轮，每一轮都至少配一场**。总结轮接在最后一场后面读。点对话里的「🎬 看动画」，就从这一轮的第一场开始播。

**演的是生物过程**：水分子穿过细胞膜、染色体排队分开、酶咬断淀粉链、神经冲动一段段往前跑、血糖涨了又落、狼多了羊少了。

## 规矩（检查器会拦）

- 至少 4 场；第一场配第 1 轮（`turn: 0`）；`turn` 按对话顺序只能不变或变大；除最后一轮外**每一轮都要有戏**；同一轮不超过 3 场。
- 每场 4–14 秒，全片 30–150 秒（6–7 轮的文章通常 7–9 场、70–90 秒；配音后会拉长到 2–3 分钟）。
- 每场至少 2 个元素，任何时刻同屏不超过 8 个，用 `to` 把旧元素收走。
- `from` ≤ 时长 − 0.8；`to` ≥ `from` + 0.5，且不超过时长。
- 镜头 `zoom` 1–2.6。
- 文字长度：场次标题 ≤12、`label` ≤12、`text` ≤14、`arrow` ≤10、`shape` ≤7、`meter` / `count` 标签 ≤8、`myth` 每句 ≤18。
- 数值范围：`meter` 的 `start` / `end`、`vessel` 的 `level` / `rise.to` 都是 `0–1` 的比例（别写成 `0–100`）；`flow` 的 `speed` 单位是**像素/秒**（默认 220，建议 80–400，别写成 `0.5`）；`particles` 的 `amount` 个数不能超过 `count`；`label` 的指向点 `at` 和文字框 `pos` 间距至少 36px。
- `ray` / `arrow` / `flow` 至少 2 个点；`swing` 摆角 0–80°；`toss` 的地面要在出手点下方。

## 检查器管不到、但要做到的

1. **左上角留给场次标题**：别把元素放在 y < 140 的左上角。
2. **逐步长出来**：按爸爸台词的先后一个个加元素，间隔 0.6–1.5 秒。说到哪个，哪个才出现。
3. **比方要画出来**：爸爸说「像门卫」，就在膜上画一个 `shape` 门、让 `atom` 被挡住；说「像接力赛」，就用一排 `shape` 依次 `pulse`。
4. **误区要翻过来**：爸爸说破误区的那一轮放 `myth` 卡，先划掉错的，再亮出对的。有 `myth` 的那场，y > 720 的地方别再放东西（点题的 `text` 往上挪到 y≈700，或不要）。
5. **字要少**：屏幕上只放关键词，完整的话交给旁边的对话。
6. **结尾一句**：每场最后用一行 `text` 点题（≤14 字），放在下方 y≈760–830。
7. **后写的盖在上面**：`cues` 的顺序就是画的顺序；底板、细胞轮廓写在最前，标签、`text` 写在最后。
8. **会动的东西真的动**：`sprite`、`atom` 沿 `path` 走；`shape` 用 `slide` 平移、`motion: 'grow' / 'shrink'` 长大缩小、`tint` 变色；`particles` 用 `amount` 增减个数；别用「先收走、再在新位置放一个」冒充移动。有多个点的 `sprite` 在 `from` 之前是看不见的：要它先站着、过一会儿再走，就放一个只有起点、`to: X` 的静止副本，走的那个写 `from: X`。只有一个点的 `path` 就是原地放着。
9. **生物要对**：水往溶质浓的一边净流；氧气进、二氧化碳出；有丝分裂先排中间再拉两极；能量往上一级只剩约一成。方向、先后画反了比不画还糟。
10. **数字只用爸爸说过的**：`count`、`meter` 的标签和 `text` 里出现的数，爸爸这一轮里都要说过；只想表现「多 / 少」就用 `meter`（`start` / `end` 是 0–1 的比例）。

## 元素一览（`types.ts` 的 `Cue`）

| kind | 用来 | 主要字段 |
|---|---|---|
| `text` | 一行大字点题 | `at`、`text`、`size: 's'/'m'/'l'`、`color` |
| `formula` | 式子逐字打出（`淀粉 → 麦芽糖`） | `at`、`text` |
| `label` | 带引线的标签 | `at`（指向点）、`pos`（文字位置）、`text` |
| `atom` | 带字的小球：水分子、离子、葡萄糖、病毒；多点 `path` 时沿路线走 | `path`、`symbol`、`color`、`r`、`charge`、`travel`、`motion: 'jitter'/'pulse'` |
| `bond` | 两点之间的一根线：DNA 碱基对、神经纤维、食物链连线 | `a`、`b`、`order` |
| `shape` | 细胞、细胞器、器官、动植物轮廓、膜上的门……可写字、变色，`slide` 平移 | `shape: 'circle'/'rect'/'pill'`、`at`（中心）、`size`、`color`、`text`、`tint`、`motion`、`slide`、`outline` |
| `vessel` | 烧杯 / 烧瓶 / 罐子，液面涨落变色（发酵、溶液浓度） | `vessel: 'beaker'/'flask'/'jar'`、`at`、`size`、`liquid`、`level`、`rise`、`tint`、`label` |
| `particles` | 一群分子 / 细菌 / 气泡乱飞、原地抖、往上冒，个数可增减 | `box: [x, y, w, h]`、`count`、`color`、`motion: 'gas'/'jitter'/'rise'`、`symbol`、`amount: { at, over, from, to }` |
| `sprite` | 一个 emoji 弹出或沿路线走（🦒 🐝 🍞 💊 🦠） | `icon`、`path`、`size`、`travel`、`wobble` |
| `arrow` | 一笔画出的箭头（物质去向、信号方向） | `path`、`text`、`color` |
| `flow` | 一串小点沿路线流（血流、水在导管里上升、电信号） | `path`、`count`、`speed`（像素/秒，默认 220）、`loop` |
| `pulse` | 一圈圈波纹（刺激点、信号发出、发光） | `at`、`radius`、`rate` |
| `meter` | 进度条涨落（血糖、体温、占比、活性） | `at`、`label`、`start`、`end`（0–1）、`over` |
| `count` | 数字从 start 数到 end | `at`、`label`、`start`、`end`、`unit` |
| `myth` | 误区卡：划掉错的、换成对的（固定在底部） | `wrong`、`right` |
| `wave` / `ray` / `swing` / `toss` | 系列通用的波、光线、摆、抛体（生物题很少用：声波、光照方向） | 见 `types.ts` |

所有元素都有 `from`（出现秒数）和可选的 `to`（消失秒数）。镜头：场次上的 `camera: [{ t, at, zoom }]`，推近看细胞内部用。

**几个容易踩的坑**：
- `particles` 的 `box` 是 `[左, 上, 宽, 高]`，不是两个角的坐标；`amount` 的 `from` / `to` 是个数，不是比例。
- `shape` 加 `outline: true` 会在填充色上再描一圈虚线，所以填充要用浅色（`#d0ebff`、`#f3f0ff`），否则看起来是一团实心深色。
- `shape` 的 `text` ≤7 字；要写长一点就换成 `label` 或 `text`。
- 箭头文字放在箭头中点附近，箭头别从别的元素正中穿过去。

## 例子（`evolution-giraffe.ts` 的前两场）

```ts
{
  turn: 0, title: '后天练长不会遗传', duration: 9,
  cues: [
    { kind: 'sprite', icon: '🦒', path: [[400, 440]], size: 150, from: 0.2 },
    { kind: 'label', at: [420, 350], pos: [820, 300], text: '天天伸脖子不改 DNA', from: 1.5 },
    { kind: 'myth', wrong: '天天伸长脖子直接传给孩子', right: '后天努力拉长不会写进基因', from: 3.6 },
  ],
},
{
  turn: 1, title: '天生本来就有长短', duration: 9,
  cues: [
    { kind: 'shape', shape: 'rect', at: [320, 540], size: [120, 150], color: '#d8c9b0', text: '稍短', from: 0.3 },
    { kind: 'shape', shape: 'rect', at: [600, 490], size: [120, 250], color: '#ffd43b', text: '中等', from: 0.9 },
    { kind: 'shape', shape: 'rect', at: [880, 430], size: [120, 370], color: '#f59f00', text: '天生稍长', from: 1.5 },
    { kind: 'label', at: [880, 240], pos: [520, 200], text: '高处树叶只有它够着', color: '#2e7d32', from: 2.8 },
    { kind: 'text', at: [600, 770], text: '随机变异给演化提供原材料', from: 4.8 },
  ],
},
```

## 常用配方

- **渗透 / 跨膜**：`shape` 细胞（浅色 `outline`）+ `particles` 水分子在膜两边，`amount` 一边减一边增；`arrow` 标出净流方向；`meter` 液泡大小。
- **细胞分裂**：`shape` 细胞 + 几个 `atom` 染色体，先 `path` 走到中间排成一排，再分两路走到两极；`shape` 用 `motion: 'grow'` 长出两个子细胞。
- **酶**：`atom` 一串淀粉链，`sprite` ✂️ 或 `shape` 酶沿链走过，链上的 `atom` 依次换成小的麦芽糖；`meter` 甜度上升。
- **神经冲动**：`bond` 画一条神经纤维，`flow` 沿纤维跑，几个 `shape` 依次 `pulse` 代表一段段兴奋；`label` 标出感受器、神经中枢、效应器。
- **激素调节**：`meter` 血糖 / 体温涨落 + `sprite` 器官（胰岛、甲状腺）+ `arrow` 激素去向，画成一个闭环。
- **遗传**：`shape` 方格拼出棋盘格，格子里写 `DD` / `Dd` / `dd`；`count` 数出比例。
- **微生物**：`vessel` 罐子 + `particles` 细菌 `amount` 增减（`motion: 'jitter'`）、`particles` 气泡 `motion: 'rise'`；温度用 `meter`。
- **生态**：几个 `sprite`（🐺 🐑 🌿）+ 两三个 `meter` 一涨一落；能量金字塔用一层层变窄的 `shape`。
- **演化**：一排高矮不同的 `shape` 或 `sprite`，一代代 `meter` 比例变化。

写完先跑 `npm run story:frames -- <slug>`，看 `.story-preview/<slug>-frames.png`：每场一行三帧，元素不重叠、字不出框、该出现的都出现了。配完音再在浏览器里开着声音从头听一遍，看左边高亮的那一轮和右边的画面对不对得上。

## 一轮配几场戏

- 大多数轮一场就够。爸爸一句话里讲了两件事（「先……再……」），就拆成两场，`turn` 写同一个数，按顺序排。
- 同一轮最多 3 场；点「🎬 看动画」从这一轮的第一场开始，播完自动接下一场。
- 动画只给「看」，自己动手的交给互动图和「🔬 3D 实验台」；一场讲清一件事，台词留在文章里。
- 改了对话、增删了轮次后，记得把每一场的 `turn` 对回去，再跑 `story:check`。
