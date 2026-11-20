# BioVerse · 生物奇遇记

「奇遇记」系列的生物篇（与身体奇遇记、化学奇遇记、物理奇遇记同一系列）：小念和爸爸一问一答，从生活里看得见的生命现象出发，由浅入深讲懂生物原理，顺便拆穿常见的生活误区。非商业学习项目。

- **首页**：3D 小星球上的小念和爸爸（显微镜、向日葵、培养皿、DNA 双螺旋、细胞与蝴蝶），8 大生物主题（细胞与微世界、能量与呼吸、植物的秘密、动物与适应、神经与调节、遗传与基因、微生物世界、生态与演化），外加「🔬 3D 实验台」凑成 3×3 网格。
- **问题文章**：50 个生活生物与科学史问题。左边是小念 × 爸爸的图文聊天，爸爸的气泡里配有 50 张可以动手拖滑块的互动图解、科学照片与定量图表；右边是同步推进的讲解动画；「给大人」里列出安全须知、对应课本和参考来源。
- **🔬 3D 实验台**：5 个可交互 3D 生物实验（植物细胞吸水失水、物质跨膜运输、神经冲动的产生和传导、洋葱根尖有丝分裂、影响酶活性的条件），「看懂原理」由小念和爸爸配音自动演示，「自由实验台」是给孩子动手的简洁版。

不设解锁、倒计时或完成度；唯一的记录是问题卡上的「⭐ 看过」，只保存在本机浏览器 `localStorage` 里。

## 本地运行

需要 Node.js >= 18.18。

```shell
npm install
npm run dev
npm run check
npm run build
npm run preview
```

页面采用 hash 路由与相对资源地址，兼容子路径静态部署。所有 3D 课件、封面、模型与配音均在本地，需通过 HTTP 服务访问（`npm run dev` 或 `npm run preview`）。

## 目录

- `src/learning/`：页面、课程目录（`curriculum.ts`）、问答文章（`stories/`）、互动图（`sims.ts`、`simlib/`）、讲解动画（`film/`）与配音。
- `src/series/`：「奇遇记」系列共用的角色、头像和首页 3D 小星球。
- `public/lessons/`：3D 生物实验课件（`courses/`）、封面（`covers/`）及其原始许可文件 `LICENSE`、`THIRD_PARTY_NOTICES.md`。
- `public/theme/`：全站设计变量 `tokens.css`，以及注入课件的主题 `lesson.css`、适配脚本 `lesson-adapter.js` 与讲稿 `lab-script.json`。
- `public/models/`：CC0 3D 角色模型与来源说明。
- `public/voice/`：小念和爸爸的语音讲解（`npm run voice` 由 edge-tts 生成）。
- `tests/`：自动化测试。

## 参考与致谢

**3D 实验课件参考并改编自 [铜匠实验室（作者：铜匠十点睡觉）](https://lab.tongjiang.app)**（上游仓库 [smithjohn78390/tongjiang-lab](https://github.com/smithjohn78390/tongjiang-lab)）。5 节生物课件、封面与课程目录采用 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)：仅限非商业使用，须保留署名、许可链接和修改说明，商用需另行取得权利人许可。许可原文见 `public/lessons/LICENSE`；课件内打包的 three.js 适用 MIT，见 `public/lessons/THIRD_PARTY_NOTICES.md`。分发或部署时请一并保留这两个文件和本节说明。

改动说明：只在每个课件的 `</head>` 前加入 `public/theme/lesson.css` 与 `lesson-adapter.js` 两个链接，课件里的实验脚本和三维场景不变。适配脚本换上全站的暖色手写风（叶绿主题色 `#2e7d32`），加入「看懂原理」自动演示（讲稿在 `public/theme/lab-script.json`）、小念和爸爸的语音讲解、简化版「自由实验台」和窄屏视图，并清掉给老师看的教材引注；课件目录页 `courses/index.html` 由导入脚本重新生成。重新导入上游课件：

```powershell
node .\scripts\import-lessons.mjs 'C:\path\to\tongjiang-lab'
```

其他来源：

- 文章内容依据人民教育出版社初高中生物学教材与 NIH、WHO、NOAA、联合国粮农组织（FAO）、诺贝尔奖官网（NobelPrize.org）、世界粮食奖基金会、英国皇家植物园邱园（Kew）、伦敦自然历史博物馆、牛津大学植物园、加州大学戴维斯分校及《Science》《Nature Photonics》《BMJ》《PLOS ONE》等权威文献与科普资料核对，每篇出处均列在文章「给大人」的「参考来源」中。
- 文章实拍与历史科学配图来自 Wikimedia Commons 公有领域及 CC0 / CC BY 开放许可馆藏，逐图署名与许可详见 `public/images/photos/CREDITS.md`。
- 角色模型为 CC0，见 `public/models/CREDITS.md`。

文章与课件仅作科学启蒙与教学模拟，不代替实验安全规范与专业医疗建议。
