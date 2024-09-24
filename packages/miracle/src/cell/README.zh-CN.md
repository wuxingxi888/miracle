# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Cell, CellGroup } from 'miracle';

const app = createApp();
app.use(Cell);
app.use(CellGroup);
```

## 代码演示

### 基础用法

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。

```html
<mi-cell-group>
  <mi-cell title="单元格" value="内容" />
  <mi-cell title="单元格" value="内容" label="描述信息" />
</mi-cell-group>
```

### 卡片风格

通过 `CellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格（从 3.1.0 版本开始支持）。

```html
<mi-cell-group inset>
  <mi-cell title="单元格" value="内容" />
  <mi-cell title="单元格" value="内容" label="描述信息" />
</mi-cell-group>
```

### 单元格大小

通过 `size` 属性可以控制单元格的大小。

```html
<mi-cell title="单元格" value="内容" size="large" />
<mi-cell title="单元格" value="内容" size="large" label="描述信息" />
```

### 展示图标

通过 `icon` 属性在标题左侧展示图标。

```html
<mi-cell title="单元格" icon="location-o" />
```

### 展示箭头

设置 `is-link` 属性后会在单元格右侧显示箭头，并且可以通过 `arrow-direction` 属性控制箭头方向。

```html
<mi-cell title="单元格" is-link />
<mi-cell title="单元格" is-link value="内容" />
<mi-cell title="单元格" is-link arrow-direction="down" value="内容" />
```

### 页面导航

可以通过 `url` 属性进行 URL 跳转，或通过 `to` 属性进行路由跳转。

```html
<mi-cell title="URL 跳转" is-link url="https://github.com" />
<mi-cell title="路由跳转" is-link to="index" />
```

### 分组标题

通过 `CellGroup` 的 `title` 属性可以指定分组标题。

```html
<mi-cell-group title="分组1">
  <mi-cell title="单元格" value="内容" />
</mi-cell-group>
<mi-cell-group title="分组2">
  <mi-cell title="单元格" value="内容" />
</mi-cell-group>
```

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容。

```html
<mi-cell value="内容" is-link>
  <!-- 使用 title 插槽来自定义标题 -->
  <template #title>
    <span class="custom-title">单元格</span>
  </template>
</mi-cell>

<mi-cell title="单元格" icon="shop-o">
  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
  <template #right-icon>
    <mi-icon name="search" class="search-icon" />
  </template>
</mi-cell>

<style>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>
```

### 垂直居中

通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。

```html
<mi-cell center title="单元格" value="内容" label="描述信息" />
```

## API

### CellGroup Props

| 参数   | 说明                   | 类型      | 默认值  |
| ------ | ---------------------- | --------- | ------- |
| title  | 分组标题               | _string_  | `-`     |
| inset  | 是否展示为圆角卡片风格 | _boolean_ | `false` |
| border | 是否显示外边框         | _boolean_ | `true`  |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | _number \| string_ | - |
| value | 右侧内容 | _number \| string_ | - |
| label | 标题下方的描述信息 | _number \| string_ | - |
| size | 单元格大小，可选值为 `large` `normal` | _string_ | - |
| icon | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | - |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `mi-icon` |
| tag | 根节点对应的 HTML 标签名 | _string_ | `div` |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，等同于 Vue Router 的 [to 属性](https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to) | _string \| object_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |
| clickable | 是否开启点击反馈 | _boolean_ | `null` |
| is-link | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |
| title-style | 左侧标题额外样式 | _string \| Array \| object_ | - |
| title-class | 左侧标题额外类名 | _string \| Array \| object_ | - |
| value-class | 右侧内容额外类名 | _string \| Array \| object_ | - |
| label-class | 描述信息额外类名 | _string \| Array \| object_ | - |

### Cell Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| click  | 点击单元格时触发 | _event: MouseEvent_ |

### CellGroup Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 默认插槽       |
| title   | 自定义分组标题 |

### Cell Slots

| 名称       | 说明                         |
| ---------- | ---------------------------- |
| title      | 自定义左侧标题               |
| value      | 自定义右侧内容               |
| label      | 自定义标题下方的描述信息     |
| icon       | 自定义左侧图标               |
| right-icon | 自定义右侧图标               |
| extra      | 自定义单元格最右侧的额外内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  CellSize,
  CellProps,
  CellGroupProps,
  CellArrowDirection,
} from 'miracle';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --mi-cell-font-size | _var(--mi-font-size-md)_ | - |
| --mi-cell-line-height | _24px_ | - |
| --mi-cell-vertical-padding | _10px_ | - |
| --mi-cell-horizontal-padding | _var(--mi-padding-md)_ | - |
| --mi-cell-text-color | _var(--mi-text-color)_ | - |
| --mi-cell-background | _var(--mi-background-2)_ | - |
| --mi-cell-border-color | _var(--mi-border-color)_ | - |
| --mi-cell-active-color | _var(--mi-active-color)_ | - |
| --mi-cell-required-color | _var(--mi-danger-color)_ | - |
| --mi-cell-label-color | _var(--mi-text-color-2)_ | - |
| --mi-cell-label-font-size | _var(--mi-font-size-sm)_ | - |
| --mi-cell-label-line-height | _var(--mi-line-height-sm)_ | - |
| --mi-cell-label-margin-top | _var(--mi-padding-base)_ | - |
| --mi-cell-value-color | _var(--mi-text-color-2)_ | - |
| --mi-cell-value-font-size | _inherit_ | - |
| --mi-cell-icon-size | _16px_ | - |
| --mi-cell-right-icon-color | _var(--mi-gray-6)_ | - |
| --mi-cell-large-vertical-padding | _var(--mi-padding-sm)_ | - |
| --mi-cell-large-title-font-size | _var(--mi-font-size-lg)_ | - |
| --mi-cell-large-label-font-size | _var(--mi-font-size-md)_ | - |
| --mi-cell-large-value-font-size | _inherit_ | - |
| --mi-cell-group-background | _var(--mi-background-2)_ | - |
| --mi-cell-group-title-color | _var(--mi-text-color-2)_ | - |
| --mi-cell-group-title-padding | _var(--mi-padding-md) var(--mi-padding-md) var(--mi-padding-xs)_ | - |
| --mi-cell-group-title-font-size | _var(--mi-font-size-md)_ | - |
| --mi-cell-group-title-line-height | _16px_ | - |
| --mi-cell-group-inset-padding | _0 var(--mi-padding-md)_ | - |
| --mi-cell-group-inset-radius | _var(--mi-radius-lg)_ | - |
| --mi-cell-group-inset-title-padding | _var(--mi-padding-md) var(--mi-padding-md) var(--mi-padding-xs) var(--mi-padding-xl)_ | - |
