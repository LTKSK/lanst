# German Vocabulary Learning App Design Document

## Directory Structure

```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── vocabulary/
│   │   ├── components/
│   │   │   ├── VocabularyList.tsx
│   │   │   └── VocabularyForm.tsx
│   │   ├── hooks/
│   │   │   └── useVocabulary.ts
│   │   ├── services/
│   │   │   └── mockApi.ts
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
- **src/**: アプリケーションのメインソースディレクトリです。
  - **vocabulary/**: 語彙機能に関連するすべてのファイルを含みます。
    - **components/**: 語彙機能のためのReactコンポーネントです。`VocabularyList.tsx`は保存された語彙のリストを表示し、`VocabularyForm.tsx`は新しい語彙項目の入力を処理します。
    - **hooks/**: 語彙機能のためのカスタムReactフックです。`useVocabulary.ts`は語彙項目に関連する状態とロジックを管理します。
    - **services/**: 語彙機能に関連するAPIインタラクションのためのサービスファイルです。`mockApi.ts`は語彙管理のためのAPI呼び出しをシミュレートします。
  - **App.tsx**: メインアプリケーションコンポーネントです。
  - **index.css**: アプリケーションのグローバルスタイルです。
  - **main.tsx**: アプリケーションのエントリーポイントです。
  - **vite-env.d.ts**: ViteのためのTypeScript環境宣言です。

## 備考

- styleはtailwindcssを利用するので、ディレクトリは切らない

## 理由

この構造はコードを論理的なセクションに整理し、保守と拡張を容易にします。コンポーネント、フック、サービスを分離することで、アプリケーションの各部分を独立して開発およびテストすることができます。`services`ディレクトリを使用することで、将来的にモックAPIを実際のAPIに簡単に置き換えることができます。