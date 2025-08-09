# Miracle Auto Import Resolver

[English](./README.md) | 简体中文

`@miracle-web/auto-import-resolver` 是 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 的一个解析器，用于实现 Miracle 按需引入。

### 特性

-   支持 `Vite`, `Webpack`, `Rspack`, `Vue CLI`, `Rollup`, `esbuild` 等
-   支持自动引入组件对应的 CSS 样式
-   支持 SSR（服务端渲染）

### 安装

```shell
# via npm
npm i @miracle-web/auto-import-resolver unplugin-vue-components unplugin-auto-import -D

# via yarn
yarn add @miracle-web/auto-import-resolver unplugin-vue-components unplugin-auto-import -D

# via pnpm
pnpm add @miracle-web/auto-import-resolver unplugin-vue-components unplugin-auto-import -D

# via Bun
bun add @miracle-web/auto-import-resolver unplugin-vue-components unplugin-auto-import -D
```

## 使用

### Vite

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { MiracleResolver } from '@miracle-web/auto-import-resolver';

export default defineConfig({
    plugins: [
        AutoImport({
            resolvers: [MiracleResolver()],
        }),
        Components({
            resolvers: [MiracleResolver()],
        }),
    ],
});
```

### Rollup

```ts
// rollup.config.js
import AutoImport from 'unplugin-auto-import/rollup';
import Components from 'unplugin-vue-components/rollup';
import { MiracleResolver } from '@miracle-web/auto-import-resolver';

export default {
    plugins: [
        AutoImport({
            resolvers: [MiracleResolver()],
        }),
        Components({
            resolvers: [MiracleResolver()],
        }),
    ],
};
```

### Webpack

```ts
// webpack.config.js
import AutoImport from 'unplugin-auto-import/webpack';
import Components from 'unplugin-vue-components/webpack';
import { MiracleResolver } from '@miracle-web/auto-import-resolver';

module.exports = {
    plugins: [
        AutoImport({
            resolvers: [MiracleResolver()],
        }),
        Components({
            resolvers: [MiracleResolver()],
        }),
    ],
};
```

### Rspack

```ts
// rspack.config.js
import AutoImport from 'unplugin-auto-import/rspack';
import Components from 'unplugin-vue-components/rspack';
import { MiracleResolver } from '@miracle-web/auto-import-resolver';

module.exports = {
    plugins: [
        AutoImport({
            resolvers: [MiracleResolver()],
        }),
        Components({
            resolvers: [MiracleResolver()],
        }),
    ],
};
```

### Vue CLI

```ts
// vue.config.js
import AutoImport from 'unplugin-auto-import/webpack';
import Components from 'unplugin-vue-components/webpack';
import { MiracleResolver } from '@miracle-web/auto-import-resolver';

module.exports = {
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [MiracleResolver()],
            }),
            Components({
                resolvers: [MiracleResolver()],
            }),
        ],
    },
};
```

### esbuild

```ts
// esbuild.config.js
import { build } from 'esbuild';
import AutoImport from 'unplugin-auto-import/esbuild';
import Components from 'unplugin-vue-components/esbuild';
import { MiracleResolver } from '@miracle-web/auto-import-resolver';

build({
    plugins: [
        AutoImport({
            resolvers: [MiracleResolver()],
        }),
        Components({
            resolvers: [MiracleResolver()],
        }),
    ],
});
```

## 选项

### importStyle

是否自动引用组件对应的样式。

-   **Type：** `boolean`
-   **Default：** `true`
-   **Example：**

```ts
Components({
    resolvers: [
        MiracleResolver({
            // 禁用样式引用
            importStyle: false,
        }),
    ],
});
```

### module

设置引用的模块类型。

-   **Type：** `'esm' | 'cjs'`
-   **Default：** `'esm'`
-   **Example：**

```ts
Components({
    resolvers: [
        MiracleResolver({
            module: 'cjs',
        }),
    ],
});
```

### ssr

-   **Type：** `boolean`
-   **Default：** `undefined`

此选项已废弃，请使用 `module` 选项来设置模块类型。
