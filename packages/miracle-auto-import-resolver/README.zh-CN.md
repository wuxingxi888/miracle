# Miracle Auto Import Resolver

[English](./README.md) | 简体中文

`@miracle-web/auto-import-resolver` 是 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 的一个解析器，用于实现 Miracle 按需引入。

### 特性

-   支持 `Vite`, `Webpack`, `Rspack`, `Vue CLI`, `Rollup`, `esbuild` 等
-   支持自动引入组件对应的 CSS 样式
-   支持 SSR（服务端渲染）
-   与 Miracle 文档站中的按需引入口径保持一致

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

推荐同时开启：

-   `Components + MiracleResolver()`：自动注册组件并引入样式
-   `AutoImport + MiracleResolver()`：自动导入组件相关 API

如果你只想自动注册组件，也可以只保留 `Components` 插件配置。

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

### 同时自动导入函数式 API

如果你的项目里频繁使用 `showToast`、`showDialog` 这类函数式 API，也可以直接使用 `MiracleImports`：

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite';
import {
    MiracleImports,
    MiracleResolver,
} from '@miracle-web/auto-import-resolver';

export default defineConfig({
    plugins: [
        AutoImport({
            imports: [MiracleImports()],
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

对于 `Toast`、`Dialog`、`Notify`、`ImagePreview` 这类函数式 API，建议仍在公共入口中统一引入样式，避免调用点分散维护。

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
