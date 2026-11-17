# 仓库结构与素材路径

网站以 `content/`、`layouts/`、`static/` 和 `config.toml` 为源文件，由 Hugo 构建到 `public/`。Vercel 从源码重新构建。

## 顶层目录

```text
quickstart/
├── config.toml                 # 网站配置
├── vercel.json                 # 固定 Hugo 版本
├── README.md                   # 日常入口
├── content/                    # 中英文文章、首页、分类页
├── layouts/                    # 主题模板覆盖
├── static/                     # 直接发布的文件
├── assets/archive/             # 非公开历史素材
├── cv/                         # 正式简历源码和 PDF
├── scripts/
│   ├── deploy.sh               # 现有提交推送脚本
│   └── content/                # 阅读笔记维护脚本
├── docs/                       # 仓库、部署和 Git 说明
├── archetypes/                 # Hugo 新页面模板
├── themes/hugo-ht/             # 主题子模块
├── .claude/                    # 工具配置及 CV 同步钩子
├── public/                     # Hugo 生成目录，忽略
├── resources/                  # Hugo 缓存，忽略
├── tmp/                        # 临时检查、试排和旧构建，忽略
└── output/                     # 本地导出，忽略
```

`public/`、`publish/` 的历史生成文件不再跟踪；`publish/` 的本地旧副本移入 `tmp/repo-organization/previous-publish/`。原 `public/` 副本也保存在 `tmp/repo-organization/previous-public/`，当前 `public/` 已按新路径重新构建。需要预览时重新运行 `hugo`，不要手动编辑生成的 HTML。

## 素材分类

| 用途 | 源文件目录 | 对应网页路径 |
| --- | --- | --- |
| 首页头像 | `static/images/profile/` | `/images/profile/portrait.jpg` |
| 旅行照片 | `static/images/travel/` | `/images/travel/文件名` |
| 项目封面 | `static/images/projects/` | `/images/projects/文件名` |
| 其他证书 | `static/images/awards/` | `/images/awards/文件名` |
| Logo、favicon、图标 | `static/images/branding/` | `/images/branding/文件名` |
| 阅读文章 PDF | `static/documents/readings/` | `/documents/readings/文件名` |
| 陪诊专题的图片、图表、脚本 | `static/data-news-companion/assets/`、`css/`、`js/` | `/data-news-companion/` 下同名路径 |
| 未启用的旧素材 | `assets/archive/` | 不发布 |

`static/` 前缀不会出现在网址中。例如：

```markdown
![头像](/images/profile/portrait.jpg)
[阅读材料](/documents/readings/bai.pdf)
```

移动素材时，搜索并更新 `content/`、`layouts/`、`config.toml` 中的引用；页面图片和分享卡片图片都要更新。文件名有中文时，引用仍可直接使用中文。

根目录原来的五张图片与静态素材逐字节相同，已去重；项目封面统一保留在 `static/images/projects/`。

## 简历相关路径

正式英文简历是 `cv/english_cv.tex` 与 `cv/english_cv.pdf`。

```text
static/media/english_cv.pdf -> ../../cv/english_cv.pdf
static/media/pdfs/          # 成绩单
```

已在简历中发送或嵌入的公开地址保持原样：

- `/media/english_cv.pdf`
- `/media/pdfs/Lizihao_Transcript.pdf`
- `/media/pdfs/taiwan_transcript.pdf`
- 其他现有成绩单文件
- `/images/校园媒体大赛.jpg`
- `/images/铁塔记者节.jpg`
- `/images/三等奖学金.jpg`

最后三张证书因被简历 PDF 直接引用，暂留 `static/images/` 根目录；后续改简历时再一起调整。不要仅移动图片而不重新生成简历内的链接。

编译临时文件放在 `cv/build/`。原来散落在根目录及 `cv/` 的编译产物已收进 `cv/build/legacy/`。

## 内容与脚本

- 中文页面：`content/cn/`；英文页面：`content/en/`。
- 首页：`content/_index.md`；分类：`content/categories/`。
- 阅读维护脚本：`scripts/content/update_headings.py`、`scripts/content/update_translations.py`。两者按脚本所在位置定位仓库，不再绑定个人电脑的绝对路径。
- 这两个脚本会批量改写阅读笔记，属于按需运行的维护工具，本次没有执行它们。
- `layouts/partials/foot_custom.html` 覆盖主题中写错的脚本路径，实际加载现有的 `js/center-image.js`。无需修改主题子模块。

## 验证

```bash
hugo --destination tmp/site-check --cleanDestinationDir
git diff --check
```

检查首页图片、导航 Logo、favicon、分享卡片图片、阅读材料下载、CV 页面及陪诊专题。英文简历 PDF 须与最新源码对应；成绩单和简历引用的证书地址保持有效。

构建产物、预览 PDF 和会话日志都应留在忽略目录中。新增素材只放一份可维护的源文件，不要再从构建目录复制回仓库根目录。
