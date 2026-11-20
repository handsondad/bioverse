# 页面风格与系列规矩

生物奇遇记是「奇遇记」系列的一员，和「身体奇遇记」（bodyverse）、「化学奇遇记」（chemverse）、「物理奇遇记」（phyverse）同一对小念和爸爸、同一套暖白纸面手写风。

## 结构（不要加层）

首页 `#home` → 主题 `#topic/<unit>` → 问题文章 `#q/<slug>`，外加首页第 9 张卡「🔬 3D 实验台」`#labs` → 单个实验 `#lab/<slug>`。没有顶栏、侧栏、地图、测验、进度条。唯一的记录是本地的「⭐ 看过」（`bioverse.learning.v1`）。

- **主题**就是 `curriculum.ts` 的 `units`，八个：细胞与微世界 🔬、能量与呼吸 ⚡、植物的秘密 🌱、动物与适应 🦋、神经与调节 🧠、遗传与基因 🧬、微生物世界 🦠、生态与演化 🌍。每个有 `emoji`、`title`、`subtitle`、`description`、`kidHook`（小念说）、`dadLens`（爸爸说）、`question`、`color`。主题页按 入门 / 进阶 / 综合 分组。
- **首页网格**：8 张主题卡 + 1 张实验台卡正好 3×3。**加第 9 个主题会破坏网格**，要加先和用户商量（并同步首页布局、`README.md`、本 skill 和 `AGENTS.md`）；一般把新题放进现有主题就够了。
- **主题配色**（`units[].color`）：cells `#2e7d32`、metabolism `#d97706`、plants `#3f8f4e`、animals `#c9623b`、body `#3b6ea5`、genetics `#7c52b8`、microbes `#0e8a8a`、ecology `#8c6239`。
- **文章**：左聊天、右动画；文章里没有实验台入口（实验课的文章页首有一个「🔬 去 3D 实验台」）。
- **实验台**：只放真正的 3D 课件，在 `#labs` 按主题分组；实验页页首「📖 先听爸爸讲」回到文章。
- **主次**：网站的主体是八个主题里调研过的生活问题；3D 实验台是一小部分补充。

## 视觉

- 颜色只用 `public/theme/tokens.css` 的 `--cv-*` 变量：奶油底、白卡片、浅橙描边、暖棕文字；生物的强调色是叶绿 `--cv-accent: #2e7d32`（测试会校验，别改）。
- 字体：手写体，正文继承即可；互动图里的小字用雅黑（`.sim-text`，太小的手写字看不清）。
- 大圆角（卡片 24px、按钮全圆）、2–3px 浅色描边、轻阴影、轻轻的弹跳动效；尊重「减少动态效果」。
- 新样式写进 `src/learning/learning.css`；`src/css/base.css` 给所有元素设了雅黑和 `margin: 0`，要覆盖时注意优先级。
- 动态 HTML 一律用 `src/learning/html.ts` 的 `html` 模板和 `setHtml()`（默认转义），`raw()` 只给自己生成的 SVG。外链加 `target="_blank" rel="noopener noreferrer"`。
- 互动图是白底圆角卡片（`.fig-sim`），橙色 `#e8590c` 只用来点出「看这里」，叶绿是生物的主色。
- 页面里任何会自己动的东西（动画、互动图、小星球）离开视野就停，「减少动态效果」时不自己动。
- 播放讲解动画时，左边正在读的那一轮加 `.story-turn.is-playing`，正在说话的那一句加 `.story-line.is-speaking`（`src/learning/pages/lesson.ts` 接 `player.ts` 的 `onTurn`）。

## 小念和爸爸的形象

- 名字、配色、身高在 `src/series/characters.ts`，SVG 头像在 `src/series/avatar.ts`，3D 小星球在 `src/series/duo-stage.ts`，模型是 `public/models/character.glb`（CC0）。和其他奇遇记保持一模一样，要改长相几个仓库一起改。
- 首页星球上的生物道具在 `src/learning/home-planet.ts`：显微镜、向日葵、培养皿、DNA 双螺旋、细胞球、会扇翅膀的蝴蝶（小工具 `ball`、`rod`），道具放在 |x| ≤ 1.6 的地方。

## 3D 实验台（第三方课件）

`public/lessons/` 下的 5 个 3D 课件是铜匠十点睡觉的 CC BY-NC 4.0 作品，原文件不许改；样式和交互适配只在 `public/theme/lesson.css` 和 `public/theme/lesson-adapter.js` 里做，页面在 `src/learning/pages/lab.ts`。iframe 用 `sandbox="allow-scripts"`，消息前缀 `bioverse:`。

- 实验台要和文章看起来是一家：「看懂原理」说明卡也是小念问、爸爸答的两个气泡，**不出现给老师看的教材引注**（「教材图 4-2」「p.63」这类）；讲稿换成我们自己写的、孩子听得懂的话。
- **讲稿** `public/theme/lab-script.json`：每个课件一个数组，按步骤号一条：`tag`（段名，要和 `src/data/course-dialogues.json` 对上）、`q`（小念的问题）、`eq`（式子，空串就不显示）、`seen`（爸爸：你看到）、`concl`（爸爸：所以）；最后一条考核段只写 `{ "tag": "考核", "hold": true }`。读数都带单位，比值写成「3比1」。改完跑 `npm run voice -- lab`（清单 `src/data/lab-voice-manifest.json`）。
- **声音**：说明卡和文章同一对声音、同一个开关（`bioverse-film-voice`，默认开）；配音是预先生成的。
- **自由实验台**要简单：步骤条、左边「🔬 动手试试」、右边「🎛️ 调一调」（一个带单位的大读数、几个旋钮）、底下上一步 / 下一步；其余的不放。大读数的单位在 `lesson-adapter.js` 的 `MAIN_UNITS`（现在有 `enzyme-step: '%'`、`impulse-step: 'mV'`）。
- **新课件**：上游出了新的生物课件时，`npm run lessons:import -- <上游仓库路径>` 导入、`npm run lessons:steps` 抽步骤，再在 `curriculum.ts` 加课、写 `lab-script.json` 讲稿和文章（slug 用课件的 slug），README「参考与致谢」里的课件数跟着改。
