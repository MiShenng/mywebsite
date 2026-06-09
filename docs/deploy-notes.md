# 部署备忘 / Deploy notes

本站由 Hugo 构建，托管在 Vercel。推送到 GitHub 后，Vercel 会自动从源码重新构建并部署
（`vercel.json` 固定了 `HUGO_VERSION`）。

## 一键部署

从仓库任意目录运行（脚本会自动切到仓库根目录）：

```bash
bash scripts/deploy.sh
```

脚本做的事：`git add .` → 用时间戳生成 commit message → `git commit` → `git push`。

## 手动推送变更到 GitHub

```bash
cd ~/Desktop/quickstart
git add .
git commit -m "update site"
git push
```

## 本地预览

```bash
hugo server --buildDrafts --disableFastRender
# 打开 http://localhost:1313/
```

VSCode 打开本仓库时，`.vscode/tasks.json` 会在 folderOpen 时自动启动 `hugo server`。

## 备注

- `static/media/english_cv.pdf` 是指向 `cv/english_cv.pdf` 的软链接；
  CV 改动后由 `.claude/sync-cv.sh`（PostToolUse hook）自动同步。
- `public/` 目前仍被提交进 Git（旧部署流程遗留）；Vercel 实际从源码重建，因此它是冗余的，
  但暂不删除以免误伤。
