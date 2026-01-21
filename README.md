# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## 引き続き用AI 

このプロジェクトでは、Claude Code Skills を利用した  
**引き継ぎ用AI**を導入しています。

👉 [使い方はこちら](./.claude/README.md)

## 🐳 Docker での起動方法

### 前提条件

- Docker
- Docker Compose

### 開発環境の起動

```bash
# 開発サーバーを起動
docker-compose -f docker/docker-compose.yml up app

# または、Storybookを起動
docker-compose -f docker/docker-compose.yml up storybook

# すべてのサービスを起動
docker-compose -f docker/docker-compose.yml up
```

アクセスURL:

- React開発サーバー: http://localhost:5173
- Storybook: http://localhost:6006

### テストの実行

```bash
# 一回だけテストを実行
docker-compose -f docker/docker-compose.yml run test

# lint + test + coverage を実行
docker-compose -f docker/docker-compose.yml run ci
```

### 本番ビルド

```bash
# 本番用イメージをビルド
docker build -f docker/Dockerfile.prod -t w2c-problem:prod .

# 本番用コンテナを起動
docker run -p 8080:80 w2c-problem:prod
```

## 🛠️ ローカル開発

### 前提条件

- Node.js 20+
- npm

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
