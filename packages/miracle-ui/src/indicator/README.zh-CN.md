# Indicator 指示器

### 介绍

显示一个任务或流程的进度。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Indicator } from '@miracle-web/ui';

const app = createApp();
app.use(Indicator);
```

## 代码演示

### 基本用法

通过 `type` 属性可以设置指示器的类型，默认为 `circle`，可选值为 `square` `line` `capsule` `numbers` `pulse`。

```html
<mi-indicator :size="3" :active="1" />

<mi-indicator type="square" :size="3" :active="1" />

<mi-indicator type="capsule" :size="3" :active="1" />

<mi-indicator type="numbers" :size="3" :active="1" />

<mi-indicator type="pulse" :size="3" :active="1" />
```

### 自定义颜色

通过 `color` 属性设置激活项颜色；不传时与主题色一致（`type="numbers"` 时为激活数字与下划线颜色）。

```html
<mi-indicator color="#1989fa" />
```

### 垂直排列

设置 `direction` 属性后，图标和文案会垂直排列。

```html
<mi-indicator :size="3" :active="1" direction="vertical" />
```

### 自定义数字格式

`type="numbers"` 时可通过 `formatter` 自定义每项文案，默认展示为 `01`、`02` 这种两位补零格式。

```html
<mi-indicator
    type="numbers"
    :size="3"
    :active="1"
    :formatter="(index) => `Step ${index + 1}`"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 颜色 | _string_ | `#006fee` |
| type | 类型，可选值为 `square` `line` `capsule` `numbers` `pulse` | _string_ | `circle` |
| size | 集合总长度 | _number_ | `1` |
| active | 激活的项 | _number_ | `0` |
| direction | 排列方向，可选值为 `vertical` | _string_ | `horizontal` |
| formatter | `numbers` 类型下的文案格式化函数 | _(index: number) => string_ | - |

### 类型定义

组件导出以下类型定义：

```ts
import type { IndicatorProps, IndicatorDirection } from '@miracle-web/ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --mi-indicator-active-background | _var(--mi-primary-color)_ | 各 `type` 激活态颜色（`numbers` 为文字/下划线） |
| --mi-indicator-inactive-background | _var(--mi-border-color)_ | 各 `type` 未激活态颜色 |
| --mi-indicator-circle-size | _6px_ | - |
| --mi-indicator-square-size | _8px_ | - |
| --mi-indicator-line-width | _30px_ | - |
| --mi-indicator-line-height | _4px_ | - |
| --mi-indicator-line-radius | _4px_ | - |
| --mi-indicator-capsule-size | _8px_ | - |
| --mi-indicator-capsule-active-width | _28px_ | - |
| --mi-indicator-numbers-font-size | _13px_ | - |
| --mi-indicator-pulse-size | _10px_ | - |
| --mi-indicator-pulse-ring-width | _2px_ | - |
