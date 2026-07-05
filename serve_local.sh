#!/bin/zsh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT="${1:-4173}"

cd "$ROOT_DIR"

echo "SilentDepth local server"
echo "Root: $ROOT_DIR"
echo "URL: http://127.0.0.1:${PORT}/index.html"
echo ""
echo "Stop with Ctrl+C"

exec python3 -m http.server "$PORT" --bind 127.0.0.1
