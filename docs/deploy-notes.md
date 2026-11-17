# 构建与部署

本站由 Hugo 0.122.0 构建、Vercel 托管。推送 GitHub 后，Vercel 重新从源码构建；`vercel.json` 固定 Hugo 版本。

## 预览与检查

```bash
git submodule update --init --recursive
hugo server --buildDrafts --disableFastRender
```

需要完整构建时：

```bash
hugo --destination tmp/site-check --cleanDestinationDir
```

默认输出目录 `public/`、历史目录 `publish/`、预览目录 `tmp/` 与导出目录 `output/` 均不提交。不要依赖生成目录里残留的文件；正式网站需要的素材必须在 `static/` 或主题源文件中。

## 提交与推送

先查看并选择本次改动，避免将不相关的本地修改混入提交：

```bash
git status --short
git diff --check
git add 需要提交的文件或目录
git diff --cached --stat
git commit -m "描述本次修改"
git push
```

现有快捷脚本 `bash scripts/deploy.sh` 会执行 `git add .`、提交和推送。运行前应确认所有未提交修改都属于本次部署；临时产物虽然已忽略，其他源码改动仍会被包含。

## 简历

`static/media/english_cv.pdf` 是指向 `cv/english_cv.pdf` 的软链接。英文简历保持 `/media/english_cv.pdf`，成绩单和简历引用的证书也保留既有地址。修改简历后，应重新编译 `cv/english_cv.pdf` 并一同发布。

根目录不再保留编译中间文件，日后编译请输出到 `cv/build/`。素材位置与公开路径对应关系见 [仓库结构](repo-structure.md)。
