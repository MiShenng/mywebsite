#!/usr/bin/env bash
# Auto-sync compiled CV PDFs into static/media/ so the Hugo site serves the
# latest version. Copies cv/<name>.pdf -> static/media/<name>.pdf only when
# the source is newer. Safe to run repeatedly; no-op when already in sync.
set -euo pipefail

repo="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
synced=()

for name in english_cv chinese_cv; do
  src="$repo/cv/$name.pdf"
  dst="$repo/static/media/$name.pdf"
  [ -f "$src" ] || continue
  if [ ! -f "$dst" ] || [ "$src" -nt "$dst" ]; then
    cp "$src" "$dst"
    synced+=("$name.pdf")
  fi
done

if [ "${#synced[@]}" -gt 0 ]; then
  printf '{"systemMessage":"Synced CV to static/media/: %s"}\n' "${synced[*]}"
fi
