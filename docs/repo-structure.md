# Repository structure

A Hugo static site (theme: `hugo-ht`, a git submodule), hosted on Vercel.
This doc is a map for adding content later without breaking the build.

## Top-level layout

```
quickstart/
├── config.toml          # Site config: baseURL, menus, params, markup. EDIT for nav/site settings.
├── vercel.json          # Pins HUGO_VERSION=0.122.0 for Vercel builds. Rarely edit.
├── .gitignore
├── .gitmodules          # Declares the hugo-ht theme submodule
├── README.md
│
├── content/             # ★ All site content (Markdown). This is where you ADD posts/pages.
├── static/              # Files served as-is at the site root (images, media, css, favicon)
├── layouts/             # HTML templates that override the theme
├── archetypes/          # Front-matter templates used by `hugo new`
├── themes/hugo-ht/      # Theme (git submodule — see "Theme" below)
├── assets/ data/ i18n/  # Hugo pipeline dirs (currently mostly empty)
│
├── cv/                  # ★ LaTeX CV sources + compiled PDFs (see "CV" below)
├── scripts/             # Project shell scripts (deploy.sh)
├── docs/                # This documentation (deploy-notes.md, repo-structure.md)
├── .claude/             # Claude Code config + the sync-cv.sh hook
│
├── public/              # Generated build output. STILL committed (legacy); Vercel rebuilds it.
└── resources/           # Hugo's _gen cache (gitignored)
```

## Content (`content/`) — how to add a page

Content is bilingual, split by top-level language folder:

```
content/
├── _index.md            # Site landing
├── en/                  # English site (default language)
│   ├── _index.md
│   ├── about/           # About page + CV.md (type: cv)
│   └── posts/           # Blog posts
├── cn/                  # Chinese site
│   ├── about/           # 关于 + CV.md
│   ├── posts/           # 日志
│   ├── readings/        # 读书笔记
│   ├── css-reading/     # CSS 阅读
│   └── 留学/            # 留学相关
└── categories/          # Taxonomy pages
```

To add a blog post, create a Markdown file under the right language's `posts/`, e.g.
`content/en/posts/2026-06-09-my-title.md`, with front matter (use
`archetypes/default.md` as the template):

```yaml
---
title: "My Title"
date: 2026-06-09
slug: my-title          # becomes the URL segment
draft: false
categories: []
tags: []
---
```

Permalinks (set in `config.toml`): `cn` and `en` posts resolve to
`/{lang}/:year/:month/:day/:slug/`.

### Known wart (not changed)
`content/en/2026-5-8/index.html` is a single stray bundle sitting next to the real
sections. Left in place because it may map to a live URL. Decide later whether to move
it under `content/en/posts/` or delete it.

## Static assets (`static/`)

Everything here is served from the **site root**. Reference with an absolute path:

```
static/
├── media/               # PDFs, SVG logos. The CV PDF here is a SYMLINK -> ../../cv/english_cv.pdf
│   ├── english_cv.pdf -> ../../cv/english_cv.pdf
│   └── pdfs/            # Other linked PDFs (transcripts, papers)
├── images/  css/  favicon.ico
```

Example reference in Markdown: `[CV](/media/english_cv.pdf)`,
`[transcript](/media/pdfs/lanzhou_transcript_en.pdf)`.

## CV (`cv/`)

```
cv/
├── english_cv.tex       # English CV source (XeLaTeX)
├── english_cv.pdf       # ★ Tracked final PDF (served via the static/media symlink)
├── photo-for-cv.png
└── build/               # Compile here; gitignored. Keeps aux/log/fls out of the source dir.
```

Compile + publish:

```bash
cd cv
xelatex -output-directory=build english_cv.tex   # build artifacts stay in build/
cp build/english_cv.pdf english_cv.pdf           # update the tracked PDF the site serves
```

A PostToolUse hook (`.claude/sync-cv.sh`) keeps `static/media/*.pdf` in sync with
`cv/*.pdf`. The static files are symlinks, so updating `cv/*.pdf` is usually enough.

## Theme (`themes/hugo-ht`)

A git submodule. After a fresh clone it is empty — initialize it before building:

```bash
git submodule update --init --recursive
```

`layouts/` in the repo root overrides matching theme templates (e.g. `layouts/cv/single.html`
renders the CV page).

## Build & deploy

- Local preview: `hugo server --buildDrafts --disableFastRender` → http://localhost:1313/
- Deploy: `bash scripts/deploy.sh` (commits + pushes; Vercel rebuilds from source).
- See `docs/deploy-notes.md` for details.
