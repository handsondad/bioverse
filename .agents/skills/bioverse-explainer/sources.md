# 资料来源与许可

网站不商用，但仍然只用许可允许的东西，并且写清出处。文章的 `sources`（`StorySource[]`）列在「给大人」里，检查器要求至少 2 条、网址都是 https。

## 红线（检查器能拦的会拦，拦不到的靠自觉）

- **OpenStax 不读不用**：它的新许可明确禁止拿内容训练或喂给 AI。网页、PDF、习题都不打开，`sources` 里出现 openstax 会被拦。
- **不抄文字**：教材、科普文章、科学机构网页、论文，都只拿来找选题、核对说法；问答全部用自己的话写，比方也自己想。
- **不搬没有开放许可的图、视频、动画、课件**：只当灵感，要画就按真实数据自己画（互动图、动画都是自己画的 SVG）。
- **3D 课件**（`public/lessons/`）是铜匠十点睡觉的 CC BY-NC 4.0 作品：原文件不许改，适配只在 `public/theme/lesson.css`、`lesson-adapter.js`、`lab-script.json` 里做；`LICENSE`、`THIRD_PARTY_NOTICES.md` 跟着课件走。
- **百科、知乎、公众号、短视频、AI 生成的文字不当来源**：可以顺着它们找到原始出处，引的是原始出处。LibreTexts、CK-12、Khan Academy 的文字也不当来源。
- **医疗健康类**（疫苗、抗生素、发烧、血糖、过敏、食物中毒）：只引卫生机构和教材，不引带货、偏方、个人经验；`tip` 里写「遵医嘱」，不给剂量和个人用药建议。

## 来源分级

| 级别 | 是什么 | 例子 |
|---|---|---|
| 1 | 教材、课标、国家和国际科学 / 卫生机构 | 人教版初中《生物学》七–八年级、高中《生物学》必修 1–2 和选择性必修 1–3；义务教育与普通高中生物学课程标准；国家卫生健康委、中国疾控中心、国家食品安全风险评估中心、生态环境部、国家林草局；NIH（MedlinePlus、NHGRI、NIGMS、NIDDK、NCBI Bookshelf）、CDC、FDA、WHO、FAO、USDA（FSIS、Forest Service、NRCS）、NOAA、USGS、National Park Service、NobelPrize.org |
| 2 | 大学、博物馆、植物园、学会的科普 | Nature Education Scitable、University of California Museum of Paleontology「Understanding Evolution」、Natural History Museum（伦敦）、American Museum of Natural History、Royal Botanic Gardens Kew、牛津大学植物园、Royal Horticultural Society、Cornell Lab of Ornithology、San Diego Zoo Wildlife Alliance、National Geographic Education、世界粮食奖基金会 |
| 3 | 同行评议论文 | Science、Nature 系列、PNAS、Current Biology、PLOS ONE、Biology Letters、Genetics、Cells；PubMed Central 上能免费看全文的优先 |

- 每篇至少一条 1 级（通常是人教版教材那一章）加一条 1–3 级。现有 50 篇几乎每篇都引了人民教育出版社，再配 NIH / WHO / NobelPrize / 论文中的一处。
- 网上的数字至少对上两处来源；对不上就写「大约」，或者不写数字。生物数字的量级常常差很多（「人体细胞几十万亿个」「肠道细菌和人体细胞数差不多」），要选最新、口径最清楚的那个，在 `tip` 里说一句口径。
- 教材和课外写法不一样（比如名词译法、新研究推翻了老说法）时，在 `tip` 里说一句。
- 科学家的故事（胡克、孟德尔、巴斯德、弗莱明、屠呦呦、袁隆平……）：流传的段子要和一手史料对一对（诺贝尔奖官网的讲演和自传、本人论文、机构史料），对不上的说成「传说」或不写。

`sources` 每条写 `title`（资料名，教材写到章：「七年级上册 第二单元 第一章 细胞是生命活动的基本单位」）、`by`（人民教育出版社、National Institutes of Health (NIH)、NobelPrize.org……）、能点开的 `url`（https）。教材没有稳定网址时可以只写 `title` 和 `by`。

## 别人的照片

真照片能让孩子相信「这真的存在 / 真的发生过」：胡克画的软木小格子、真的萤火虫、白化的珊瑚、屠呦呦领奖。

- **哪里找**：Wikimedia Commons（看清图片页上的许可）、NOAA、NSF、USFWS、NPS、NIH 等美国联邦机构的公有领域图片。只用公有领域、CC0、CC BY、CC BY-SA 的；CC BY-SA 的照片原样用、不改图。
- **注意**：署名写图片页上的作者（机构图写机构名，如「NOAA」「NSF / Josh Landis」）；不用机构标志；不暗示机构认可本站；机构网站上也有第三方版权的图，先看图片页的说明。显微照片、电镜照片很多是有版权的，一定要看许可。
- **不放**：血腥、伤口、病人、尸体、让孩子害怕的寄生虫特写；认得出脸的普通人（科学家的公开肖像可以）。
- **怎么放**：下载、裁掉无关边框后转成 `public/images/photos/<名字>.webp`（宽 ≤900px，尽量 ≤200KB），在 `public/images/photos/CREDITS.md` 的表里记一行（文件、画面、原图页、作者、许可；CC BY 的注明「按宽 ≤900px 转存为 WebP，画面未作其他改动」）。配图写：

```ts
figure: {
  kind: 'image',
  src: '/images/photos/coral-bleaching-noaa.webp',
  alt: '…（写清画面里有什么，给读屏用）',
  caption: '…（≤70 字，说清看哪里）',
  credit: 'NOAA · 公有领域',
  href: 'https://commons.wikimedia.org/wiki/File:Coral_bleaching_Florida_Keys_2023.jpg',
},
```

`/images/photos/` 下的图没写 `credit` 和 https 的 `href`，检查器会拦。照片不算互动图，每篇仍要 1–2 张 `sim`。

## 署名汇总

README 的「参考与致谢」列：3D 课件（铜匠十点睡觉，CC BY-NC 4.0，带改动说明）、主要参考机构和期刊、照片（指向 `CREDITS.md`）、小念和爸爸的模型（CC0）。新引了一类新机构或期刊，顺手补进那一段。
