# Layout 布局

### 介绍

Layout 提供了 `mi-row` 和 `mi-col` 两个组件来进行行列布局。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Col, Row } from '@miracle-web/ui';

const app = createApp();
app.use(Col);
app.use(Row);
```

## 代码演示

### 基础用法

Layout 组件提供了 `24列栅格`，通过在 `Col` 上添加 `span` 属性设置列所占的宽度百分比。此外，添加 `offset` 属性可以设置列的偏移宽度，计算方式与 span 相同。

```html
<mi-row>
  <mi-col span="8">span: 8</mi-col>
  <mi-col span="8">span: 8</mi-col>
  <mi-col span="8">span: 8</mi-col>
</mi-row>

<mi-row>
  <mi-col span="4">span: 4</mi-col>
  <mi-col span="10" offset="4">offset: 4, span: 10</mi-col>
</mi-row>

<mi-row>
  <mi-col offset="12" span="12">offset: 12, span: 12</mi-col>
</mi-row>
```

### 设置列元素间距

通过 `gutter` 属性可以设置列元素之间的间距，默认间距为 0。

```html
<mi-row gutter="20">
  <mi-col span="8">span: 8</mi-col>
  <mi-col span="8">span: 8</mi-col>
  <mi-col span="8">span: 8</mi-col>
</mi-row>
```

### 垂直间距

如果需要设置垂直间距，可以使用数组形式设置 `[水平间距, 垂直间距]`。

```html
<!-- 设置垂直间距 -->
<mi-row :gutter="[20, 20]">
  <mi-col span="12">span: 12</mi-col>
  <mi-col span="12">span: 12</mi-col>
  <mi-col span="12">span: 12</mi-col>
  <mi-col span="12">span: 12</mi-col>
</mi-row>
```

### 对齐方式

通过 `justify` 属性可以设置主轴上内容的对齐方式，等价于 flex 布局中的 `justify-content` 属性。

```html
<!-- 居中 -->
<mi-row justify="center">
  <mi-col span="6">span: 6</mi-col>
  <mi-col span="6">span: 6</mi-col>
  <mi-col span="6">span: 6</mi-col>
</mi-row>

<!-- 右对齐 -->
<mi-row justify="end">
  <mi-col span="6">span: 6</mi-col>
  <mi-col span="6">span: 6</mi-col>
  <mi-col span="6">span: 6</mi-col>
</mi-row>

<!-- 两端对齐 -->
<mi-row justify="space-between">
  <mi-col span="6">span: 6</mi-col>
  <mi-col span="6">span: 6</mi-col>
  <mi-col span="6">span: 6</mi-col>
</mi-row>

<!-- 每个元素的两侧间隔相等 -->
<mi-row justify="space-around">
  <mi-col span="6">span: 6</mi-col>
  <mi-col span="6">span: 6</mi-col>
  <mi-col span="6">span: 6</mi-col>
</mi-row>
```

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 列元素之间的间距（单位为 px） | _number \| string \| Array_ | - |
| tag | 自定义元素标签 | _string_ | `div` |
| justify | 主轴对齐方式，可选值为 `end` `center` <br> `space-around` `space-between` | _string_ | `start` |
| align | 交叉轴对齐方式，可选值为 `center` `bottom` | _string_ | `top` |
| wrap | 是否自动换行 | _boolean_ | `true` |

### Col Props

| 参数   | 说明           | 类型               | 默认值 |
| ------ | -------------- | ------------------ | ------ |
| span   | 列元素宽度     | _number \| string_ | -      |
| offset | 列元素偏移距离 | _number \| string_ | -      |
| tag    | 自定义元素标签 | _string_           | `div`  |

### Row Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Col Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { ColProps, RowProps, RowAlign, RowJustify } from '@miracle-web/ui';
```
