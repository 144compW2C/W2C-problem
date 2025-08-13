# Node.js の公式イメージを使用（LTS版）
FROM node:20-alpine

# 作業ディレクトリを設定
WORKDIR /app

# Playwrightの依存関係をインストール（Storybookテスト用）
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont

# Playwrightの環境変数を設定
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
ENV PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium-browser

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm ci

# ソースコードをコピー
COPY . .

# ポートを公開
EXPOSE 5173 6006

# デフォルトコマンド（開発サーバー起動）
CMD ["npm", "run", "dev", "--", "--host"]
