# 《在平台上下单一个家属》网页数据新闻

这是一个不依赖后端和构建工具的静态网页，可直接部署到 GitHub Pages。页面使用原生 HTML、CSS、JavaScript；现有图表均以本地 PNG 加载，不依赖外部 CDN。

## 文件结构

```text
project/
├── index.html              # 页面结构与全部正文
├── css/
│   └── style.css           # 视觉系统、响应式布局与动画
├── js/
│   └── main.js             # 滚动浮现、阅读进度、章节导航、ECharts 模板
├── assets/
│   ├── images/             # 封面、人物、场景等图片
│   ├── charts/             # 静态图表
│   └── data/               # 可选：交互图表使用的 CSV/JSON
└── README.md
```

## 本地预览

在仓库根目录运行：

```bash
python3 -m http.server 8000 --directory project
```

然后访问 `http://localhost:8000`。直接双击 `index.html` 也能阅读，但使用本地静态服务器更接近 GitHub Pages 环境。

## 替换文字与署名

1. 打开 `index.html`。
2. 搜索 `TODO` 或“在这里替换”，补充作者、小组、课程、时间、方法说明和制作信息。
3. 正文已经按 `数据新闻 文字.docx` 的章节顺序落版。修改内容时保留现有的 `section`、`article`、`figure` 等标签，只替换标签内部文字即可。
4. 图表的一句话发现放在 `.chart-finding` 段落中；图注和数据来源放在 `figcaption` 中。

## 替换图片

将图片复制到 `assets/images/`，建议使用简短英文文件名，例如：

```text
assets/images/hero-hospital.jpg
assets/images/worker-portrait.jpg
```

普通图片写法：

```html
<figure class="chart-card fade-up">
  <img src="assets/images/worker-portrait.jpg" alt="准确描述图片内容" loading="lazy">
  <figcaption>图片说明与摄影信息。</figcaption>
</figure>
```

如需将封面 CSS 图形换成照片，可在 `.hero` 内加入图片，并在 `css/style.css` 中设置全屏覆盖；保留深色遮罩以保证标题可读。

## 替换或新增静态图表

将图表保存到 `assets/charts/`。推荐使用英文、数字和连字符命名，避免部署后的路径编码问题。

页面目前已有以下图表：

```text
service-items.png
city-price-median.png
salary-range.png
aging-trend.png
doctors-per-thousand.png
daily-visits-map.png
company-registrations.png
```

正文提到但素材目录中尚未找到的图表：

```text
demand-scenarios.png
china-world-compare.png
city-supply-demand.png
industry-policy-timeline.png
market-public-price.png
```

补齐文件后，在 `index.html` 中找到对应“待补充图表”，用下面结构替换 `.asset-placeholder`：

```html
<img src="assets/charts/demand-scenarios.png" alt="准确描述图表内容" loading="lazy">
```

同时补全紧随其后的 `figcaption`，尤其是样本量、统计时间和数据来源。

## 可选：使用 ECharts

当前页面不依赖 ECharts。若确需交互图表：

1. 从 ECharts 官方发行包取得 `echarts.min.js`，保存到 `js/vendor/echarts.min.js`。
2. 在 `index.html` 中、`main.js` 之前加入：

```html
<script src="js/vendor/echarts.min.js" defer></script>
<script src="js/main.js" defer></script>
```

3. 在正文中加入容器：

```html
<figure class="chart-card fade-up">
  <div class="echarts-container" data-echart-example role="img" aria-label="描述图表内容"></div>
  <figcaption>图表说明。数据来源：在这里填写。</figcaption>
</figure>
```

4. 在 `js/main.js` 的 `initEChartsExamples()` 中替换示例数据和配置。

这样部署后仍加载仓库内的本地文件，不依赖外部 CDN。

## 发布前核对

- 补齐作者、课程、日期、方法说明和研究局限。
- 补齐 5 张缺失图表，或确认删除其占位模块。
- 逐张核对图表数值、时间范围、样本量和数据来源。
- 重点复核“企业逐年注册量”图中 2024—2025 年数据来源。
- 检查所有图片 `alt` 文本和图注是否准确。
- 分别在电脑端和手机端完整阅读一次，确认图中文字可辨认。

## 部署到 GitHub Pages

### 方式一：将 `project` 内容作为仓库根目录

1. 新建 GitHub 仓库。
2. 将 `index.html`、`css/`、`js/`、`assets/`、`README.md` 放到仓库根目录并推送。
3. 在仓库页面进入 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**。
5. Branch 选择 `main`，目录选择 `/ (root)`，点击 **Save**。
6. 等待 Pages 发布完成，访问页面给出的网址。

### 方式二：保留当前 `project/` 子目录

GitHub Pages 的分支发布界面不能直接选择任意子目录。最短路径是将 `project/` 内文件移动到仓库根目录；如果仓库还有其他内容，可改用 GitHub Actions 发布 `project/`，但这需要额外工作流配置。

## 浏览器支持

支持当前版本的 Chrome、Edge、Firefox 和 Safari。旧浏览器不支持 `IntersectionObserver` 时，正文会直接显示，不影响阅读。
