# AGENTS.md — BioVerse 生物奇遇记 Agent 协作与内容扩展指南

本文档面向参与 **BioVerse（生物奇遇记）** 的所有编码 Agent。修改代码、调整样式或新增生物问题前，请遵守以下规范。

## 1. 产品定位与核心设计哲学

1. **「生活生物问答馆」，不是刷题打卡平台**
   - 从孩子真遇到过的生命现象出发，由浅入深讲懂生物原理，并拆穿常见误区。
   - **禁止**引入解锁、倒计时、百分比焦虑条或刷题考试话术。唯一记录为本地 `localStorage`（键 `bioverse.learning.v1`）里的「⭐ 看过」。
2. **「奇遇记」系列一员**：与身体奇遇记、化学奇遇记、物理奇遇记同一对小念和爸爸、同一套暖白纸面手写风（生物强调色叶绿 `#2e7d32`）。三层结构：首页 `#home` → 主题 `#topic/<unit>` → 问题文章 `#q/<slug>`，外加「🔬 3D 实验台」`#labs` / `#lab/<slug>`。
3. **8 大主题**：`cells` 细胞与微世界 → `metabolism` 能量与呼吸 → `plants` 植物的秘密 → `animals` 动物与适应 → `body` 神经与调节 → `genetics` 遗传与基因 → `microbes` 微生物世界 → `ecology` 生态与演化。
4. **3D 课件版权红线**：`public/lessons/` 下的 5 节生物 3D 课件为铜匠十点睡觉的 CC BY-NC 4.0 作品，**原始脚本与许可文件严禁修改**；所有样式与交互适配统一在 `public/theme/lesson.css`、`lesson-adapter.js` 与 `lab-script.json` 中完成。

## 2. 验证与测试命令

```bash
npm run story:check
npm run lint
npm exec -- tsc --noEmit
npm run test -- --no-file-parallelism --maxWorkers=1
npm run build
```
