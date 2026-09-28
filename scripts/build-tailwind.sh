#!/bin/sh
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CLI="$ROOT/tools/tailwindcss"
if [ ! -x "$CLI" ]; then
  echo "Download Tailwind standalone CLI to tools/tailwindcss first." >&2
  echo "https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.4.17" >&2
  exit 1
fi
"$CLI" -c "$ROOT/tailwind.config.js" -i "$ROOT/vendor/tailwind.input.css" -o "$ROOT/vendor/tailwind.css" --minify
echo "Wrote $ROOT/vendor/tailwind.css"
