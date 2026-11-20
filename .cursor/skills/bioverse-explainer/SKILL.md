---
name: bioverse-explainer
description: >-
  Writes new 生物奇遇记 (bioverse) content in the house style: a researched 小念 × 爸爸
  question-and-answer article about an everyday biology question, with draggable slider sims
  in 爸爸's bubbles, a voiced explainer film in the right column (one to three scenes for every
  turn but the summary), credited sources, and optional open-licence photos. Use when adding or
  rewriting a biology question or lesson, researching everyday-biology topics or misconceptions,
  picking questions from the question bank, writing a story in src/learning/stories, adding a sim,
  figure kind or film cue, editing the 3D lab script, adding a topic (unit), styling bioverse pages,
  or when the user mentions 小念, 爸爸, 题库, 新问题, 扩充内容, 互动图, 讲解动画, 配音, 参考来源,
  生物主题 or 奇遇记.
---

# 生物奇遇记：写一篇「小念 × 爸爸」

目标只有一个：孩子（小学高年级到初中，高中内容标「综合」）从头读到尾，就真的弄懂了标题里那个问题，并且改掉了一个常见的错误想法。问答把道理讲对、讲顺；互动图让孩子自己拖一拖、看见规律；右栏的讲解动画跟着配音，把爸爸每一轮讲的过程演出来。

## 先弄清楚

- 仓库结构、命令、硬性规矩：根目录 `AGENTS.md`
- 选题：[question-bank.md](question-bank.md)（八个主题、已写的 50 题、候选题的生活现场 / 误区 / 学段 / 互动图 / 查证去处）
- 资料和许可：[sources.md](sources.md)（先读，里面有不能碰的红线）
- 问答怎么写：[dialogue.md](dialogue.md)
- 配图和互动图：[figures.md](figures.md)（现有 50 张 sim 的清单和新图写法）
- 右栏的讲解动画：[film.md](film.md)
- 页面风格、系列规矩、3D 实验台：[design.md](design.md)

## 做一篇新文章

照这个清单走，每一步过了检查再走下一步：

```
- [ ] 1. 选题：从 question-bank.md 挑一题；npm run story:todo 看哪些已经写了；对一下「别和身体奇遇记撞题」
- [ ] 2. 查资料（sources.md）：教材怎么说、可靠机构怎么说、误区研究怎么说；每个要写的数字找到两处一致的来源，记下网址
- [ ] 3. 进 curriculum.ts：在 lessonPlan 对应主题里加一条（slug、unit、hook、topic、level、objectives、takeaway、question、textbook、prerequisites），放在同主题的生活问题后面、3D 实验课前面
- [ ] 4. 生成草稿：npm run story:new -- <slug>（写好 src/learning/stories/<slug>.ts 并登记到 index.ts，脚本会保持它的 CRLF）
- [ ] 5. 写问答（dialogue.md）：5–8 轮追问链，点名说破误区
- [ ] 6. 核对科学：每个数字、每个说法都对上第 2 步的来源；拿不准就不写数字；写进 sources 和 tip
- [ ] 7. 互动图（figures.md）：1–2 张 sim；没有合适的就在 simlib/<主题>.ts 里新写一个，登记到 sims.ts，并让 tests/sims.test.ts 过
- [ ] 8. 右栏动画（film.md）：除总结轮外每一轮配一到三场戏，元素出现的先后对上爸爸说话的先后
- [ ] 9. 检查：npm run story:check -- <slug>，直到 ✅（⚠️ 是提醒：配音过期、念不顺的符号）
- [ ] 10. 看动画：npm run story:frames -- <slug>，打开 .story-preview/<slug>-frames.png 逐场看；新 sim 跑 npm run story:sims -- <sim>
- [ ] 11. 配音：npm run voice -- <slug>（要联网；以后改了对话的字也要重跑）
- [ ] 12. npm run lint；npm exec -- tsc --noEmit；npm run test -- --no-file-parallelism --maxWorkers=1；npm run build
- [ ] 13. 浏览器里看 #q/<slug>：桌面开着声音从头听一遍（读到哪一轮，右边演哪一场）、拖一遍滑块，再看手机宽度（390px）
```

一次扩充多篇时，按主题分批（每批 4–8 篇），每批都把第 9–12 步走完再开下一批；最后把 `question-bank.md` 里写完的题从「候选」挪进「已写」表，`README.md` 里的题数、互动图数也跟着改。

3D 实验课的文章（题库里标 🔭 的）slug 用课件的 slug（如 `enzyme-step`），对话里讲到实验的那一轮写 `show: { kind: 'lab', step, label }`；它不显示按钮，只记下这一轮对应实验第几段（检查器核对段数和段名）。

## 讲法速记（细则见 dialogue.md）

- **小念**：好奇、爱追问的孩子。第一句说现象；之后每句都接住爸爸上一句里的一个词往下挖；最后以「我懂了！」开头，用自己的话把因果链串一遍。
- **爸爸**：第一句直接回答，再打一个孩子见过的比方，真名词只说一次；误区点名说破（「很多人以为……其实……」）；每句 20–180 字。
- **顺序**：看到了什么 → 细胞 / 分子里在发生什么 → 为什么非得这样（对生物有什么好处） → 误区 / 特例 → 生活里怎么用 → 总结。
- **生物味**：讲「结构和功能相适应」「生物适应环境」「能量和物质往哪儿去」；不把植物动物说成「想要」「故意」，演化不是「为了」，是「活下来的留下了更多后代」。
- **安全**：疫苗、抗生素、发烧、毒蘑菇、野生动物这类，写进 `tip`（给大人，写「遵医嘱」），对话里只讲成好习惯。

## 工具

| 命令 | 做什么 |
|---|---|
| `npm run story:todo` | 按主题列出每题：✅ 已手写（🎬 有动画）还是 ⏳ 自动装配 |
| `npm run story:new -- <slug>` | 生成草稿并登记到 `stories/index.ts`（slug 要先在 `curriculum.ts` 里） |
| `npm run story:check -- [slug...]` | 逐条检查写作规矩（问答、参考来源、配图、动画），用中文指出第几轮 / 第几场差在哪；不带 slug 查全部 |
| `npm run story:sims -- <sim...>` | 把互动图在滑块两头、几个时刻的画面排成联系表 `.story-preview/sims-*.html`（能找到浏览器就再出 PNG），看字出没出框 |
| `npm run story:frames -- <slug>` | 把动画每场切三帧排成联系表 `.story-preview/<slug>-frames.html`，找得到 Edge / Chrome 就再出一张 PNG |
| `npm run voice -- [slug...]` | 用 edge-tts 配音（`public/voice/`、`src/data/voice-manifest.json`），只重配文字变了的句子；念法在 `src/learning/voice.ts`。`npm run voice -- lab` 给 3D 实验台配音 |
| `npm run lessons:import` / `lessons:steps` | 重新导入铜匠实验室课件、抽取实验步骤（一般用不到） |
| `npm run skills:sync` | 把 `skills/bioverse-explainer/` 同步到 `.agents/skills/` 和 `.cursor/skills/` |
| `npm run check` | lint + test + build 一把跑完 |

规则本身在 `src/learning/stories/rules.ts`，`tests/stories.test.ts` 用的是同一份。改规矩时只改那里，并同步本 skill 和 `AGENTS.md`。工具都在 `scripts/`；加新工具时登记到 `package.json`、上面这张表和 `AGENTS.md`。

**看整篇文章的截图**（开着 `npm run dev` 时；Windows 上 Edge 一般在 `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`）：

```powershell
& $edge --headless=new --disable-gpu --hide-scrollbars --user-data-dir=.story-preview/.browser --window-size=1400,2600 --virtual-time-budget=6000 --screenshot=.story-preview/page.png "http://localhost:<端口>/#q/<slug>"
```

无头浏览器在 `--virtual-time-budget` 下不跑 `requestAnimationFrame`：互动图的动画、配音同步、3D 课件要在真浏览器里看。

## 验收

- `story:check` 全过，四条验证命令全过。
- 「给大人」里的参考来源能点开、说的就是文章里的那件事。
- 每张互动图都在演爸爸这一句；拖到两头读数还合理、字不出框；图注 ≤70 字。
- 右栏动画开着声音从头播：爸爸读到哪一轮，画面就演到那一轮；说到什么画面正好出现什么；手机上图和字不挤。
