## Claude Code Skills（引き継ぎ用AI）の使い方

このプロジェクトでは、**Claude Code Skills** を利用して  
W2C-problem の設計意図・仕様・開発ルールを  
**会話形式で学べる引き継ぎ用AI**を提供しています。

### できること
- このプロジェクトの **仕様説明**
- 「なぜこの設計なのか？」といった **設計意図の解説**
- 開発ルール・判断軸の確認
- 初心者がハマりやすいポイントの解説

### 注意
**Claude Code Skills** を利用するには

1. Claude Pro または Max プランのサブスクリプションを取得する方法 (推奨)
2. Claude Code ワークスペース用の API キーを作成する方法

があります。

---

### 1. Claude Code CLI のインストール

公式が紹介している方法でインストール

[Claude Code公式ドキュメント](https://code.claude.com/docs/ja/setup)

#### 一例 (Homebrew)

```bash
brew install --cask claude-code
```

公式引用 
>Homebrew のインストールは自動更新されません。最新の機能とセキュリティ修正を入手するには、定期的に brew upgrade claude-code を実行してください。

インストール後、以下で起動できます。
```bash
claude
```

### 2. このプロジェクトで Claude Code を使う方法

#### 重要：必ずプロジェクトのルートディレクトリで起動してください。

```bash
cd w2c-problem
claude
```

以下のフォルダが含まれているか確認

```bash
.claude/skills/w2c-problem/SKILL.md
```

Claude Code はこれを自動で読み込み、
**W2C-problem 専用の引き継ぎAI**として振る舞います。

### 3. 質問の例（おすすめ）

```bash
このプロジェクトの全体構成を初心者向けに教えて
```
```bash
新しい画面を追加したい場合、まず何を確認すればいい？
```
```bash
初心者がこのプロジェクトで詰まりやすいポイントは？
```

### 4. 注意事項

- Claude Code Skills は 設計理解・学習支援用です
（最終判断・実装責任は人間が持ってください）
- 不明な点がある場合、AI は「分からない」と答えることがあります
- .claude/ フォルダは GitHub で共有される設計書の一部です
個人情報や秘密情報は記載しないでください