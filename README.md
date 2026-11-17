# Lizao 的个人网站

使用 Hugo 0.122.0 和 `hugo-ht` 主题构建，部署到 Vercel。

## 本地启动

```bash
git submodule update --init --recursive
hugo server --buildDrafts --disableFastRender
```

普通构建运行 `hugo`，产物写入 `public/`，无需提交生成目录。

## 文件放哪里

| 内容 | 位置 |
| --- | --- |
| 文章、页面 | `content/` |
| 页面模板 | `layouts/` |
| 头像、旅行照、项目封面、证书、品牌图片 | `static/images/` 下对应分类 |
| 阅读材料 PDF | `static/documents/readings/` |
| 当前简历和成绩单 | `cv/`、`static/media/`，保留既有公开链接 |
| 陪诊数据新闻独立项目 | `static/data-news-companion/` |
| 非公开历史素材 | `assets/archive/` |
| 维护脚本 | `scripts/` |
| 构建、预览、导出 | `public/`、`tmp/`、`output/`，不纳入 Git |

完整说明见 [仓库结构](docs/repo-structure.md)、[部署说明](docs/deploy-notes.md)。
