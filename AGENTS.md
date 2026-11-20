# AGENTS.md — BioVerse 生物奇遇记 Agent 协作与内容扩展指南

本文档面向参与 **BioVerse（生物奇遇记）** 的所有编码 Agent。修改代码、调整样式或新增生物问题前，请先读完本文件和 skill `skills/bioverse-explainer/`（镜像于 `.agents/skills/bioverse-explainer/` 与 `.cursor/skills/bioverse-explainer/`，用 `npm run skills:sync` 同步）。

---

## 1. 产品定位与核心设计哲学（必读）

1. **是「生活生物问答馆」，不是刷题打卡平台**
   - 目标是**从孩子真遇到过的生命现象出发，由浅入深讲懂一个生物道理，并改掉一个常见的错误想法**。读者是小学高年级到初中，高中内容标「综合」。
   - **禁止**强制解锁、倒计时、完成度百分比、测验和考试话术。唯一的记录是问题卡上的「⭐ 看过」（本地 `localStorage`，键 `bioverse.learning.v1`）。
2. **「奇遇记」系列的一员**：和「身体奇遇记」（bodyverse）、「化学奇遇记」（chemverse）、「物理奇遇记」（phyverse）同一对小念和爸爸、同一套暖白纸面手写风。三层结构：首页 → 主题 → 问题文章，外加「🔬 3D 实验台」。不要加顶栏、侧栏、地图、测验或进度条。
   - **首页 `#home`**：3D 小星球上的小念和爸爸（WebGL 不可用时退回 SVG 头像），8 张主题卡，最后一张是「🔬 3D 实验台」，凑成 3×3 网格。
   - **主题 `#topic/<unit>`**：八个 `units`——`cells` 细胞与微世界 → `metabolism` 能量与呼吸 → `plants` 植物的秘密 → `animals` 动物与适应 → `body` 神经与调节 → `genetics` 遗传与基因 → `microbes` 微生物世界 → `ecology` 生态与演化。页首小念（`kidHook`）和爸爸（`dadLens`）各说一句，问题按「入门 / 进阶 / 综合」分组。科学史（胡克、孟德尔、巴斯德、弗莱明、屠呦呦、袁隆平……）不单设主题，放进它讲的那个知识点所在的主题。
   - **问题 `#q/<slug>`**：每题都是「小念 × 爸爸」图文聊天文章。**左问答、右动画、有声音**：爸爸的气泡里放能拖滑块的互动图（`sim`），右栏是讲解动画（`film`），**每一轮（总结轮除外）都配一到三场戏**，小念和爸爸把每句话读出来，读到哪一轮，左边就高亮哪一轮。结尾「小念还想问」和「👨‍👩‍👧 给大人」（安全须知、对应课本、**参考来源**）。
   - **🔬 3D 实验台 `#labs` / `#lab/<slug>`**：只放 5 个真正的 3D 课件（质壁分离、跨膜运输、有丝分裂、酶活性、神经冲动），可在「看懂原理 / 自由实验台」间切换，页首「📖 先听爸爸讲」回到文章。文章里不嵌实验台，实验课的文章只在页首放一个「去 3D 实验台」链接。
3. **主次分明**：网站的主体是八个主题里**调研过的生活问题**；3D 实验台是一小部分补充。新内容优先写生活问题。
4. **每题从生活现场（`hook` / `trigger`）出发**：先讲小念看到的那一幕（馒头嚼着变甜、菜叶撒盐出水、秋天树叶变黄），不要一上来堆定义。
5. **和身体奇遇记分工**：「身体上的感觉」（打嗝、起鸡皮疙瘩、流鼻血、蛀牙、长个子……）归 bodyverse，bioverse 不重复写；bioverse 讲**所有生物共通的机制**（细胞、能量、遗传、调节、微生物、生态），人体题也要落到细胞、分子或调节回路上。选题前对一下 `skills/bioverse-explainer/question-bank.md` 末尾的「别和身体奇遇记撞题」。
6. **做成系列**：角色、头像和 3D 小星球在与领域无关的 `src/series/`，和其他奇遇记保持一模一样；生物道具（显微镜、向日葵、培养皿、DNA 双螺旋……）只在 `src/learning/home-planet.ts` 里摆。

---

## 2. 目录结构与关键文件

- `src/series/`：系列共用。`characters.ts` 名字、配色、身高；`avatar.ts` SVG 头像；`duo-stage.ts` 首页 3D 小星球（three.js），模型 `public/models/character.glb`（CC0，见同目录 `CREDITS.md`）。
- `src/learning/curriculum.ts`：**课程与目录的唯一数据源**：八个 `units`（`emoji`、`kidHook`、`dadLens`、`color`）和全部问题 `lessonPlan`（`slug`、`unit`、`hook`、`topic`、`question`、`level`、`objectives`、`takeaway`、`textbook`、`prerequisites`）。
- `src/learning/stories/`：**「小念 × 爸爸」问答文章**，每篇一个文件，导出 `Story`（`title` 必须和 curriculum 的 `question` 一字不差、`trigger`、`dialogue`、`tip`、`sources`、`film`），在 `stories/index.ts` 里 import 并加进 `stories` 数组才生效（**该文件是 CRLF 换行**）。规矩在 `stories/rules.ts`，类型和动画元素在 `stories/types.ts`。
- `src/learning/sims.ts` & `src/learning/simlib/`：**爸爸气泡里的互动图**（560×320 纯 SVG，滑块切换参数，可带动画）。每个主题一个文件（`cells.ts`、`metabolism.ts`、`plants.ts`、`animals.ts`、`body.ts`、`genetics.ts`、`microbes.ts`、`ecology.ts`），公用画笔在 `kit.ts`；新图在对应文件导出 `SimDef`，再登记到 `sims.ts`（`simNames` / `simParams` 从那里导出）。`tests/sims.test.ts` 会把每张图拨到两头和中间检查（不出 NaN、读数有内容）。
- `src/learning/figures.ts`：其余配图：`sim`、`bars` 柱状对比、`scale` 色阶横尺、`image` 照片（`public/images/photos/`，必须带 `credit` 和 https 的 `href`，并在 `CREDITS.md` 记一行）。
- `src/learning/film/`：**讲解动画引擎**（1200×900 画布；`engine.ts` 时间线、`stage.ts` 画面、`player.ts` 播放器（`onTurn` 通知文章页高亮正在读的那一轮）、`narration.ts` 按配音长度拉长时间线）。元素有 `text`、`formula`、`label`、`atom`、`bond`、`shape`、`vessel`、`particles`、`sprite`、`arrow`、`flow`、`pulse`、`meter`、`count`、`myth`，另有 `wave`、`ray`、`swing`、`toss`。
- **语音讲解**：`src/learning/voice.ts`（小念 `zh-CN-YunxiaNeural`，爸爸 `zh-CN-YunxiNeural` −5%，与系列一致；`speakable()` 和 `BIO_SYMBOLS` 把 ℃、单位、`ATP`、`DNA`、`Dd`、`XY` 这类符号换成念法）、`scripts/voice.ts`（`npm run voice`，edge-tts + ffmpeg）、音频在 `public/voice/<slug>/<轮>-<nian|dad>.mp3`、清单 `src/data/voice-manifest.json`。实验台「看懂原理」的讲稿是我们自己写的 `public/theme/lab-script.json`（每个课件按步骤号一条：`tag`、小念的问题 `q`、算式 `eq`、爸爸的「你看到」`seen` 和「所以」`concl`；最后一条考核段只写 `hold: true`），改完跑 `npm run voice -- lab`，清单是 `src/data/lab-voice-manifest.json`。声音开关键 `bioverse-film-voice`，默认开。
- `src/learning/article.ts` / `catalog.ts` / `dialogue.ts`：把问题统一成文章；有 `story` 用 `storyArticle`，没有的用 `autoArticle`（只剩兜底作用，现在每题都有手写文章）。
- `src/learning/pages/`：`home.ts`、`topic.ts`、`lesson.ts`（文章页）、`lab.ts`（实验台，iframe `sandbox="allow-scripts"`，消息前缀 `bioverse:`）。
- `public/theme/tokens.css`：**全站唯一颜色与设计变量源**（`--cv-*`，生物强调色叶绿 `#2e7d32`，测试会查）。`public/theme/lesson.css` & `lesson-adapter.js`：注入 3D 课件的主题和「看懂原理 / 自由实验台」控制器（大读数单位在 `MAIN_UNITS`）。
- `public/lessons/`：第三方 3D 课件（`courses/`、`covers/`、`LICENSE`、`THIRD_PARTY_NOTICES.md`），**只读**。
- `public/images/photos/`：开放许可科学照片，逐图署名在 `CREDITS.md`。
- `scripts/`：工具，都用 vite-node 或 node 跑。`story.ts`（`story:todo` / `story:new` / `story:check` / `story:frames` / `story:sims`）、`voice.ts` 与 `voice-clips.ts`、`import-lessons.mjs`（`lessons:import`）、`extract-lab-steps.mjs`（`lessons:steps`）、`sync-skills.mjs`（`skills:sync`）。预览输出在 `.story-preview/`（已忽略）。临时脚本放 `.story-preview/` 下，用完删掉。
- `skills/bioverse-explainer/`（镜像于 `.agents/skills/bioverse-explainer/` 与 `.cursor/skills/bioverse-explainer/`）：写文章的完整说明：`SKILL.md` 总流程、`question-bank.md` 题库、`sources.md` 资料与许可、`dialogue.md` 问答、`figures.md` 互动图清单与新图写法、`film.md` 动画、`design.md` 风格与实验台。**只改 `skills/` 下的那份**，再跑 `npm run skills:sync`；`tests/skills.test.ts` 会查三份是否一致。

---

## 3. 如何新增一个生物问题

完整清单见 `skills/bioverse-explainer/SKILL.md`，简要流程：

1. **选题**：从 `question-bank.md` 挑一题（或先把新题按同样的列补进题库：生活现场、要破的误区、学段、互动图、查证去处）。一个题只回答一个「为什么」。`npm run story:todo` 看已经写了哪些。
2. **查资料**（`sources.md`）：至少一条 1 级来源（通常是人教版生物学教材那一章）加一条 1–3 级来源；每个数字对上两处，对不上就写「大约」或不写。
3. **进 curriculum**：在 `lessonPlan` 对应主题里加一条，放在同主题生活问题的最后、3D 实验课前面；`prerequisites` 只能指向排在前面的题（测试会查），`hook` 多于 15 字。
4. **生成草稿**：`npm run story:new -- <slug>`（会写 `stories/<slug>.ts` 并登记到 `stories/index.ts`，保持它原来的 CRLF；手改 `index.ts` 时也别混进 LF）。
5. **写问答、互动图、动画**：细则见 `dialogue.md`、`figures.md`、`film.md`。没有合适的 sim 就新写一个并在 `figures.md` 登记一行。
6. **检查、看图、配音、验证**：见第 5 节。

### 写作规矩（`stories/rules.ts`，`tests/stories.test.ts` 和 `story:check` 共用）
- 对话 5–8 轮。除最后一轮外，小念每句都带「？」；从第 2 轮起要**接住爸爸上一句里的一个两字词**（「的了是能太在」这类虚字组成的词不算）；最后一轮以「我懂了 / 我明白了」开头。
- 爸爸每句 20–180 字，第一句直接回答，再打比方，误区点名说破；`tip` ≥20 字。
- `sources` 至少 2 条、都是 https；互动图每篇 1–2 张，图注 ≤70 字；`bars` 2–6 根（名字 ≤6 字、柱尾 ≤12 字），`scale` 3–5 档（顶栏 ≤14 字、标签 ≤7 字、说明 ≤9 字）。
- 动画：至少 4 场、第一场配第 1 轮；**除最后的总结轮，每一轮都要有自己的戏**（不然配音读到这一轮时画面还停在上一场）；同一轮 ≤3 场；每场 4–14 秒、全片 30–150 秒、每场 ≥2 个元素、同屏 ≤8 个；文字长度 场次标题 ≤12、`label` ≤12、`text` ≤14、`arrow` ≤10、`shape` ≤7、`meter`/`count` 标签 ≤8、`myth` 每句 ≤18；`meter`/`vessel` 比例在 `0–1`，`flow.speed` 单位是像素/秒（建议 80–400）。
- 检查器管不到、但要做到的：左上角 y < 140 留给场次标题；有 `myth` 卡的场 y > 720 留空；画面上出现的数字，爸爸这一轮要念出来；生物过程要画对（方向、先后、谁进谁出）。

### 资料与许可红线（细则见 `sources.md`）
- **OpenStax 不读不用**（其许可禁止喂给 AI；检查器会拦）。
- 教材、科普文章、科学机构网页只拿来找选题和核对，**问答全用自己的话写，图全自己画**。
- 百科、知乎、公众号、短视频、AI 生成的文字不当来源；顺着它们找到原始出处，引原始出处。
- 照片只用 Wikimedia Commons / NOAA / NIH / NSF 等处公有领域、CC0、CC BY、CC BY-SA 的，原样使用、不暗示机构认可，在 `public/images/photos/CREDITS.md` 记一行。
- **医疗与安全**：讲疫苗、抗生素、发烧、血糖、毒蘑菇这类题，不给个人用药或诊断建议；具体做法交给「给大人」的 `tip` 并写「遵医嘱」。不教孩子独自采摘、品尝野生动植物，不教培养未知微生物。
- **3D 课件**（`public/lessons/`）是铜匠十点睡觉的 CC BY-NC 4.0 作品：**原文件严禁修改**，适配只在 `public/theme/lesson.css`、`lesson-adapter.js` 和 `lab-script.json` 里做；`LICENSE`、`THIRD_PARTY_NOTICES.md` 一直跟着课件走；署名和改动说明写在 `README.md` 的「参考与致谢」。

---

## 4. 视觉与前端工程规范

1. 颜色只用 `public/theme/tokens.css` 的 `--cv-*` 变量；新样式写进 `src/learning/learning.css`。互动图小字用 `.sim-text`（雅黑），橙色 `#e8590c` 只用来点出「看这里」，叶绿是生物的主色。
2. 动态 HTML 一律用 `src/learning/html.ts` 的 `html` 模板和 `setHtml()`（默认转义），`raw()` 只给自己生成的 SVG；外链加 `target="_blank" rel="noopener noreferrer"`。
3. 会自己动的东西（动画、互动图、小星球）离开视野就停，尊重「减少动态效果」，拖动要有键盘替代。
4. TypeScript 严格模式（含 `noUnusedLocals`），2 空格缩进；路由是 hash 路由，资源用相对地址（GitHub Pages 子路径部署）。
5. Windows PowerShell 里用 `;` 连命令（`&&` 在旧版 PowerShell 里不能用）。

---

## 5. 验证与测试命令

```bash
# 0. 只改了文章时：先查这几篇，看动画联系表，再给改过的句子配音
npm run story:check -- <slug>
npm run story:frames -- <slug>      # 输出 .story-preview/<slug>-frames.png
npm run story:sims -- <sim>         # 新写或改了互动图时
npm run voice -- <slug>             # 要联网；需要 edge-tts 和 PATH 里的 ffmpeg/ffprobe

# 1. 代码规范
npm run lint

# 2. 类型检查
npm exec -- tsc --noEmit

# 3. 测试（Windows 上单 worker 更稳）
npm run test -- --no-file-parallelism --maxWorkers=1

# 4. 生产构建
npm run build
```

最后在浏览器里打开 `#q/<slug>`：桌面开着声音点右栏的 ▶ 从头听一遍（爸爸读到哪一轮，右边就该演到哪一场）、拖一遍滑块，再用 390px 手机宽度看一遍。改了对话的字一定要重跑 `voice`，`tests/voice.test.ts` 会查每句配音是不是读的现在的文字。改了 `skills/` 下的说明，跑 `npm run skills:sync`。
