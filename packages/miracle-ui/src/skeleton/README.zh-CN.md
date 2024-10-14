# Skeleton 骨架屏

### 介绍

用于在内容加载过程中展示一组占位图形。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import {
  Skeleton,
  SkeletonTitle,
  SkeletonImage,
  SkeletonAvatar,
  SkeletonParagraph,
} from '@miracle-web/ui';

const app = createApp();
app.use(Skeleton);
app.use(SkeletonTitle);
app.use(SkeletonImage);
app.use(SkeletonAvatar);
app.use(SkeletonParagraph);
```

## 代码演示

### 基础用法

通过 `title` 属性显示标题占位图，通过 `row` 属性配置占位段落行数。

```html
<mi-skeleton title :row="3" />
```

### 显示头像

通过 `avatar` 属性显示头像占位图。

```html
<mi-skeleton title avatar :row="3" />
```

### 展示子组件

将 `loading` 属性设置成 `false` 表示内容加载完成，此时会隐藏占位图，并显示 `Skeleton` 的子组件。

```html
<mi-skeleton title avatar :row="3" :loading="loading">
  <div>实际内容</div>
</mi-skeleton>
```

```js
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const loading = ref(true);

    onMounted(() => {
      loading.value = false;
    });

    return {
      loading,
    };
  },
};
```

### 自定义展示内容

通过 `template` 插槽完成自定义内容的展示。

```html
<mi-skeleton>
  <template #template>
    <div :style="{ display: 'flex', width: '100%' }">
      <mi-skeleton-image />
      <div :style="{ flex: 1, marginLeft: '16px' }">
        <mi-skeleton-paragraph row-width="60%" />
        <mi-skeleton-paragraph />
        <mi-skeleton-paragraph />
        <mi-skeleton-paragraph />
      </div>
    </div>
  </template>
</mi-skeleton>
```

## API

### Skeleton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| row | 段落占位图行数 | _number \| string_ | `0` |
| row-width | 段落占位图宽度，可传数组来设置每一行的宽度 | _number \| string \|<br>(number \| string)[]_ | `100%` |
| title | 是否显示标题占位图 | _boolean_ | `false` |
| avatar | 是否显示头像占位图 | _boolean_ | `false` |
| loading | 是否显示骨架屏，传 `false` 时会展示子组件内容 | _boolean_ | `true` |
| animate | 是否开启动画 | _boolean_ | `true` |
| round | 是否将标题和段落显示为圆角风格 | _boolean_ | `false` |
| title-width | 标题占位图宽度 | _number \| string_ | `40%` |
| avatar-size | 头像占位图大小 | _number \| string_ | `32px` |
| avatar-shape | 头像占位图形状，可选值为 `square` | _string_ | `round` |

### SkeletonParagraph Props

| 参数      | 说明                     | 类型      | 默认值  |
| --------- | ------------------------ | --------- | ------- |
| round     | 是否将段落显示为圆角风格 | _boolean_ | `false` |
| row-width | 段落占位图宽度           | _string_  | `100%`  |

### SkeletonTitle Props

| 参数        | 说明                     | 类型               | 默认值  |
| ----------- | ------------------------ | ------------------ | ------- |
| round       | 是否将标题显示为圆角风格 | _boolean_          | `false` |
| title-width | 标题占位图宽度           | _number \| string_ | `40%`   |

### SkeletonAvatar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| avatar-size | 头像占位图大小 | _number \| string_ | `32px` |
| avatar-shape | 头像占位图形状，可选值为 `square` | _string_ | `round` |

### SkeletonImage Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image-size | 图片占位图大小 | _number \| string_ | `32px` |
| image-shape | 图片占位图形状，可选值为 `square` | _string_ | `round` |

### Skeleton Slots

| 名称     | 说明       |
| -------- | ---------- |
| default  | 骨架屏内容 |
| template | 自定义内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  SkeletonProps,
  SkeletonImageProps,
  SkeletonTitleProps,
  SkeletonImageShape,
  SkeletonAvatarShape,
  SkeletonParagraphProps,
} from '@miracle-web/ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                               | 默认值                   | 描述 |
| ---------------------------------- | ------------------------ | ---- |
| --mi-skeleton-paragraph-height     | _16px_                   | -    |
| --mi-skeleton-paragraph-background | _var(--mi-active-color)_ | -    |
| --mi-skeleton-paragraph-margin-top | _var(--mi-padding-sm)_   | -    |
| --mi-skeleton-title-width          | _40%_                    | -    |
| --mi-skeleton-avatar-size          | _32px_                   | -    |
| --mi-skeleton-avatar-background    | _var(--mi-active-color)_ | -    |
| --mi-skeleton-duration             | _1.2s_                   | -    |
| --mi-skeleton-image-size           | _96px_                   |
| --mi-skeleton-image-radius         | _24px_                   | -    |
