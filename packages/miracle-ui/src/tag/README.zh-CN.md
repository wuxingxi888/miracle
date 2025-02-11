# Tag 标签

### 介绍

用于标记关键词和概括主要内容。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Tag } from '@miracle-web/ui';

const app = createApp();
app.use(Tag);
```

## 代码演示

### 基础用法

通过 `type` 属性控制标签颜色。

```html
<mi-tag type="primary">标签</mi-tag>
<mi-tag type="success">标签</mi-tag>
<mi-tag type="danger">标签</mi-tag>
<mi-tag type="warning">标签</mi-tag>
```

### 空心样式

设置 `plain` 属性设置为空心样式。

```html
<mi-tag plain type="primary">标签</mi-tag>
```

### 圆角样式

通过 `round` 设置为圆角样式。

```html
<mi-tag round type="primary">标签</mi-tag>
```

### 标记样式

通过 `mark` 设置为标记样式(半圆角)。

```html
<mi-tag mark type="primary">标签</mi-tag>
```

### 可关闭标签

添加 `closeable` 属性表示标签是可关闭的，关闭标签时会触发 `close` 事件，在 `close` 事件中可以执行隐藏标签的逻辑。

```html
<mi-tag :show="show" closeable size="medium" type="primary" @close="close">
  标签
</mi-tag>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(true);
    const close = () => {
      show.value = false;
    };

    return {
      show,
      close,
    };
  },
};
```

### 标签大小

通过 `size` 属性调整标签大小。

```html
<mi-tag type="primary">标签</mi-tag>
<mi-tag type="primary" size="medium">标签</mi-tag>
<mi-tag type="primary" size="large">标签</mi-tag>
```

### 自定义颜色

通过 `color` 和 `text-color` 属性设置标签颜色。

```html
<mi-tag color="#7232dd">标签</mi-tag>
<mi-tag color="#ffe1e1" text-color="#ad0000">标签</mi-tag>
<mi-tag color="#7232dd" plain>标签</mi-tag>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `danger` `warning` | _string_ | `default` |
| size | 大小, 可选值为 `large` `medium` | _string_ | - |
| color | 标签颜色 | _string_ | - |
| show | 是否展示标签 | _boolean_ | `true` |
| plain | 是否为空心样式 | _boolean_ | `false` |
| round | 是否为圆角样式 | _boolean_ | `false` |
| mark | 是否为标记样式 | _boolean_ | `false` |
| text-color | 文本颜色，优先级高于 `color` 属性 | _string_ | `white` |
| closeable | 是否为可关闭标签 | _boolean_ | `false` |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 标签显示内容 |

### Events

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击时触发     | _event: MouseEvent_ |
| close  | 关闭标签时触发 | _event: MouseEvent_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { TagSize, TagType, TagProps } from '@miracle-web/ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --mi-tag-padding | _0 var(--mi-padding-base)_ | - |
| --mi-tag-text-color | _var(--mi-white)_ | - |
| --mi-tag-font-size | _var(--mi-font-size-sm)_ | - |
| --mi-tag-radius | _2px_ | - |
| --mi-tag-line-height | _16px_ | - |
| --mi-tag-medium-padding | _2px 6px_ | - |
| --mi-tag-large-padding | _var(--mi-padding-base) var(--mi-padding-xs)_ | - |
| --mi-tag-large-radius | _var(--mi-radius-md)_ | - |
| --mi-tag-large-font-size | _var(--mi-font-size-md)_ | - |
| --mi-tag-round-radius | _var(--mi-radius-max)_ | - |
| --mi-tag-danger-color | _var(--mi-danger-color)_ | - |
| --mi-tag-primary-color | _var(--mi-primary-color)_ | - |
| --mi-tag-success-color | _var(--mi-success-color)_ | - |
| --mi-tag-warning-color | _var(--mi-warning-color)_ | - |
| --mi-tag-default-color | _var(--mi-gray-6)_ | - |
| --mi-tag-plain-background | _var(--mi-background-2)_ | - |
