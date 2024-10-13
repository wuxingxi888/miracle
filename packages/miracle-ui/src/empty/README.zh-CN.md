# Empty 空状态

### 介绍

空状态时的占位提示。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Empty } from 'miracle';

const app = createApp();
app.use(Empty);
```

## 代码演示

### 基础用法

```html
<mi-empty description="描述文字" />
```

### 图片类型

Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用。

```html
<!-- 通用错误 -->
<mi-empty image="error" description="描述文字" />
<!-- 网络错误 -->
<mi-empty image="network" description="描述文字" />
<!-- 搜索提示 -->
<mi-empty image="search" description="描述文字" />
```

### 自定义大小

通过 `image-size` 属性图片的大小。

```html
<!-- 不指定单位，默认为 px -->
<mi-empty image-size="100" description="描述文字" />
<!-- 指定单位，支持 rem, vh, vw -->
<mi-empty image-size="10rem" description="描述文字" />
```

将 `image-size` 设置为数组格式，可以分别设置宽高。数组第一项对应宽度，数组第二项对应高度。

```html
<mi-empty :image-size="[60, 40]" description="描述文字" />
```

### 自定义图片

需要自定义图片时，可以在 image 属性中传入任意图片 URL。

```html
<mi-empty
  image="https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/custom-empty-image.png"
  image-size="80"
  description="描述文字"
/>
```

### 底部内容

通过默认插槽可以在 Empty 组件的下方插入内容。

```html
<mi-empty description="描述文字">
  <mi-button round type="primary" class="bottom-button">按钮</mi-button>
</mi-empty>

<style>
  .bottom-button {
    width: 160px;
    height: 40px;
  }
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片类型，可选值为 `error` `network` `search`，支持传入图片 URL | _string_ | `default` |
| image-size | 图片大小，默认单位为 `px` | _number \| string \| Array_ | - |
| description | 图片下方的描述文字 | _string_ | - |

### Slots

| 名称        | 说明           |
| ----------- | -------------- |
| default     | 自定义底部内容 |
| image       | 自定义图标     |
| description | 自定义描述文字 |

### 类型定义

组件导出以下类型定义：

```ts
import type { EmptyProps } from 'miracle';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                               | 默认值                     | 描述 |
| ---------------------------------- | -------------------------- | ---- |
| --mi-empty-padding                 | _var(--mi-padding-xl) 0_   | -    |
| --mi-empty-image-size              | _160px_                    | -    |
| --mi-empty-description-margin-top  | _var(--mi-padding-md)_     | -    |
| --mi-empty-description-padding     | _0 60px_                   | -    |
| --mi-empty-description-color       | _var(--mi-text-color-2)_   | -    |
| --mi-empty-description-font-size   | _var(--mi-font-size-md)_   | -    |
| --mi-empty-description-line-height | _var(--mi-line-height-md)_ | -    |
| --mi-empty-bottom-margin-top       | _24px_                     | -    |
