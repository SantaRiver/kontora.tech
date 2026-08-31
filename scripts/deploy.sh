#!/usr/bin/env bash
# Deploy kontora.tech: push local branch, then pull+build on the server.
# Usage: ./scripts/deploy.sh
set -euo pipefail

REMOTE="root@155.212.170.201"
REMOTE_DIR="/var/www/kontora.tech"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "error: working tree has uncommitted changes — commit or stash first." >&2
  exit 1
fi

echo "==> Pushing $BRANCH to origin..."
git push origin "$BRANCH":master

echo "==> Deploying on $REMOTE..."
ssh "$REMOTE" REMOTE_DIR="$REMOTE_DIR" bash -s <<'EOF'
set -euo pipefail
cd "$REMOTE_DIR"

git fetch origin
git reset --hard origin/master

LOCK_HASH_FILE=".deploy_lock_hash"
NEW_HASH=$(sha256sum package-lock.json | awk '{print $1}')
OLD_HASH=$(cat "$LOCK_HASH_FILE" 2>/dev/null || echo "")

if [[ "$NEW_HASH" != "$OLD_HASH" ]]; then
  echo "package-lock.json changed -> npm ci"
  npm ci
  echo "$NEW_HASH" > "$LOCK_HASH_FILE"
else
  echo "package-lock.json unchanged -> skipping npm ci"
fi

echo "==> Ensuring prerender's headless Chrome is installed..."
npx puppeteer browsers install chrome

echo "==> Building..."
npm run build

echo "==> Reloading nginx (config unchanged, but harmless)..."
nginx -t && systemctl reload nginx
EOF

echo "==> Verifying..."
CODE="$(curl -s -o /dev/null -w '%{http_code}' https://kontora.tech/)"
echo "https://kontora.tech/ -> HTTP $CODE"
if [[ "$CODE" != "200" ]]; then
  echo "warning: unexpected status code" >&2
  exit 1
fi

echo "==> Deploy complete."
