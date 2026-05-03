# 快速上手

### 介绍

本章节面向第一次接入 Miracle 的业务团队，重点说明安装方式、推荐接入姿势，以及模板和按需引入的统一口径。

### 适合什么项目

-   Vue 3 的移动 Web / 中后台 H5 项目
-   需要较快搭出表单、筛选、上传、导航等业务页面的团队
-   希望通过主题变量和文档规范统一界面的项目

### 不适合什么项目

-   以桌面端复杂后台布局为主的系统
-   需要原生移动端组件能力的跨端方案
-   对构建产物和设计系统已经有强绑定的现有平台

## 安装

### 通过包管理器安装

```bash
pnpm add @miracle-web/ui
```

也支持 `npm`、`yarn` 和 `bun`。

### 通过 CDN 安装

适合原型或简单页面，不推荐企业生产环境直接依赖免费 CDN。

```html
<link
    rel="stylesheet"
    href="https://fastly.jsdelivr.net/npm/@miracle-web/ui/lib/index.css"
/>

<script src="https://fastly.jsdelivr.net/npm/vue@3"></script>
<script src="https://fastly.jsdelivr.net/npm/@miracle-web/ui/lib/miracle.min.js"></script>

<script>
    const app = Vue.createApp({
        template: `<mi-button type="primary">按钮</mi-button>`,
    });

    app.use(miracle);
    app.mount('#app');
</script>
```

## 推荐接入方式

### 方式一：全量样式 + 按需注册组件

适合大多数业务项目，心智负担最低。

```ts
import { createApp } from 'vue';
import { Button, ConfigProvider } from '@miracle-web/ui';
import '@miracle-web/ui/lib/index.css';

const app = createApp(App);

app.use(ConfigProvider);
app.use(Button);
```

### 方式二：按需引入组件与样式

如果项目希望按模板解析组件并自动带入样式，统一使用 `@miracle-web/auto-import-resolver`。

```bash
pnpm add @miracle-web/auto-import-resolver unplugin-vue-components unplugin-auto-import -D
```

```ts
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

### 函数式 API 的样式

`Toast`、`Dialog`、`Notify` 和 `ImagePreview` 这类函数式 API 如果直接从代码中调用，仍建议在公共入口中手动引入样式：

```ts
import { showToast, showDialog } from '@miracle-web/ui';
import '@miracle-web/ui/es/toast/style';
import '@miracle-web/ui/es/dialog/style';
```

### 脚手架模板

如果你希望从一个最小可用的 Miracle 项目开始，而不是手动拼装配置，可以使用仓库内的 `create-miracle-cli-app`。当前模板默认包含：

-   可直接启动的示例组件和文档页
-   主题变量扩展入口
-   可切换的样式预处理器
-   适合继续扩展业务页面与共享组件的目录结构

### 接入建议

-   不要在同一个项目里同时混用全量引入和按需引入。
-   将主题变量统一收敛到 `ConfigProvider` 或全局 CSS 变量层。
-   优先参考场景组合 Demo 组织页面，再补单个组件的定制。
-   如果需要统一接入说明，请同时参考 `auto-import-resolver` 的 README 和本页示例，保持插件配置一致。
