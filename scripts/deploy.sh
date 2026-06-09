#!/usr/bin/env bash
# Deploy: stage everything, commit with a timestamp, and push.
# Vercel rebuilds the site from source on push (HUGO_VERSION pinned in vercel.json).
# Safe to run from any directory: it first moves to the repo root.
set -euo pipefail

# Move to the repository root so `git add .` always covers the whole repo,
# regardless of the directory this script is invoked from.
repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

git add .
msg="updating site on $(date)"
git commit -m "$msg"
git push
