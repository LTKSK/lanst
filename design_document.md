# German Vocabulary Learning App Design Document

## Directory Structure

```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── routes/
│   │   ├── vocablary/
│   │   │   ├── -components/
│   │   │   │   ├── vocablary/
│   │   │   │   │   ├── VocabularyList.tsx
│   │   │   │   │   └── VocabularyForm.tsx
│   │   │   │   └── api.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 説明

- **public/**: 静的アセットを含みます。`vite.svg`はその一例です。
- **src/**: アプリケーションのメインソースディレクトリです。TanStack RouterのFile Based Routingに対応するため、`routes`ディレクトリを使用します。
  - **routes/vocablary/**: 語彙機能に関連するすべてのファイルを含みます。
    - **-components/vocablary/**: 語彙機能のコンポーネントを含みます。
      - **VocabularyList.tsx**: 保存された語彙のリストを表示します。
      - **VocabularyForm.tsx**: 新しい語彙項目の入力を処理します。
    - **api.ts**: 語彙機能に関連するAPIインタラクションのためのサービスファイルです。
  - **hooks/**: 語彙機能のためのカスタムReactフックです。`useVocabulary.ts`は語彙項目に関連する状態とロジックを管理します。
  - **services/**: 語彙機能に関連するAPIインタラクションのためのサービスファイルです。`mockApi.ts`は語彙管理のためのAPI呼び出しをシミュレートします。
  - **App.tsx**: メインアプリケーションコンポーネントです。
  - **index.css**: アプリケーションのグローバルスタイルです。
  - **main.tsx**: アプリケーションのエントリーポイントです。
  - **vite-env.d.ts**: ViteのためのTypeScript環境宣言です。

## 備考

- styleはtailwindcssを利用するので、ディレクトリは切らない
