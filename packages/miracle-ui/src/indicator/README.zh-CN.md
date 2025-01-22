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

通过 `type` 属性可以设置指示器的类型，默认为 `circle`，可选值为 `square` `line`。

```html
<mi-indicator :size="3" :active="1" />

<mi-indicator type="square" :size="3" :active="1" />
```

### 自定义颜色

通过 `color` 属性设置加载图标的颜色。

```html
<mi-indicator color="#1989fa" />
```

### 垂直排列

设置 `direction` 属性后，图标和文案会垂直排列。

```html
<mi-indicator :size="3" :active="1" direction="vertical" />
```

## API

### Props

| 参数      | 说明                           | 类型     | 默认值       |
| --------- | ------------------------------ | -------- | ------------ |
| color     | 颜色                           | _string_ | `#006fee`    |
| type      | 类型，可选值为 `square` `line` | _string_ | `circle`     |
| size      | 集合总长度                     | _number_ | `1`          |
| active    | 激活的项                       | _number_ | `0`          |
| direction | 排列方向，可选值为 `vertical`  | _string_ | `horizontal` |

### 类型定义

组件导出以下类型定义：

```ts
import type { IndicatorProps, IndicatorDirection } from '@miracle-web/ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                       | 默认值 | 描述 |
| -------------------------- | ------ | ---- |
| --mi-indicator-circle-size | _6px_  | -    |
| --mi-indicator-square-size | _8px_  | -    |
| --mi-indicator-line-width  | _30px_ | -    |
| --mi-indicator-line-height | _4px_  | -    |
| --mi-indicator-line-radius | _4px_  | -    |
