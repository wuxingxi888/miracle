# 设计令牌

### 介绍

Miracle UI 的主题定制能力基于 CSS 变量。为了让组件、模板和业务页面的视觉语言保持一致，推荐将主题变量当作稳定的设计令牌层来维护。

`ConfigProvider` 会把 `theme-vars` 里的 camelCase 字段转换为 `--mi-*` CSS 变量。业务代码里优先维护字段名，组件样式里消费对应的 CSS 变量。

| theme-vars 字段 | CSS 变量 | 作用 |
| --- | --- | --- |
| `primaryColor` | `--mi-primary-color` | 品牌主色 |
| `buttonPrimaryBackground` | `--mi-button-primary-background` | 主按钮背景 |
| `navBarIconColor` | `--mi-nav-bar-icon-color` | 导航栏图标颜色 |

## 推荐分层

### 1. 基础色值

例如：

-   `--mi-primary-color`
-   `--mi-success-color`
-   `--mi-danger-color`
-   `--mi-text-color`

这些变量代表品牌与系统基础语义，不建议在业务组件中直接重复写死颜色值。

### 2. 组件级变量

例如：

-   `--mi-button-primary-background`
-   `--mi-field-input-text-color`
-   `--mi-nav-bar-background`

组件级变量应该引用基础色值，避免组件之间各自漂移。

### 3. 场景级约束

例如上传页、筛选页、结果页的背景、留白、边框和强调色，可以通过 `ConfigProvider` 的 `theme-vars` 在局部覆写。

## 推荐用法

### 全局品牌统一

当整个项目共享一套视觉风格时，将主题变量配置在根节点：

```ts
import type { ConfigProviderThemeVars } from '@miracle-web/ui';

export const themeVars: ConfigProviderThemeVars = {
    primaryColor: '#2563eb',
    buttonPrimaryBackground: '#2563eb',
    navBarIconColor: '#111827',
};
```

### 场景级微调

当某个业务页面需要更强的语义区分时，再在局部使用 `ConfigProvider` 覆盖：

```html
<mi-config-provider :theme-vars="themeVars"> ... </mi-config-provider>
```

### 深色模式

-   基础色值先定义浅色与深色语义，不要让组件各自实现一套暗黑策略。
-   如果某个组件在深色模式下需要特殊处理，优先通过 `theme-vars-dark` 覆盖，而不是额外追加零散样式。

### 文档要求

-   新增重点组件时，至少说明默认令牌依赖了哪些主题变量。
-   涉及视觉差异明显的组件，应补充深色模式和主题覆写示例。
-   模板、组件 README、Quickstart 中的主题接入方式保持一致。
