# NoticeBar 通知栏

### 介绍

用于循环播放展示一组消息通知。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { NoticeBar } from '@miracle-web/ui';

const app = createApp();
app.use(NoticeBar);
```

## 代码演示

### 基础用法

通过 `text` 属性设置通知栏的内容，通过 `left-icon` 属性设置通知栏左侧的图标。

```html
<mi-notice-bar
  left-icon="volume-o"
  text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
/>
```

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。

```html
<!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
<mi-notice-bar scrollable text="米袋虽空——樱花开哉！" />

<!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
<mi-notice-bar
  :scrollable="false"
  text="不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。"
/>
```

### 多行展示

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。

```html
<mi-notice-bar
  wrapable
  :scrollable="false"
  text="不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。"
/>
```

### 通知栏模式

通知栏支持 `closeable` 和 `link` 两种模式。

```html
<!-- closeable 模式，在右侧显示关闭按钮 -->
<mi-notice-bar mode="closeable">米袋虽空——樱花开哉！</mi-notice-bar>

<!-- link 模式，在右侧显示链接箭头 -->
<mi-notice-bar mode="link">米袋虽空——樱花开哉！</mi-notice-bar>
```

### 自定义样式

通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。

```html
<mi-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
  米袋虽空——樱花开哉！
</mi-notice-bar>
```

### 垂直滚动

搭配 NoticeBar 和 Swipe 组件，可以实现垂直滚动的效果。

```html
<mi-notice-bar left-icon="volume-o" :scrollable="false">
  <mi-swipe
    vertical
    class="notice-swipe"
    :autoplay="3000"
    :touchable="false"
    :show-indicators="false"
  >
    <mi-swipe-item>明月直入，无心可猜。</mi-swipe-item>
    <mi-swipe-item>仙人抚我顶，结发受长生。</mi-swipe-item>
    <mi-swipe-item>今人不见古时月，今月曾经照古人。</mi-swipe-item>
  </mi-swipe>
</mi-notice-bar>

<style>
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 通知栏模式，可选值为 `closeable` `link` | _string_ | `''` |
| text | 通知文本内容 | _string_ | `''` |
| color | 通知文本颜色 | _string_ | `#ed6a0c` |
| background | 滚动条背景 | _string_ | `#fffbe8` |
| left-icon | 左侧图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | - |
| delay | 动画延迟时间 (s) | _number \| string_ | `1` |
| speed | 滚动速率 (px/s) | _number \| string_ | `60` |
| scrollable | 是否开启滚动播放，内容长度溢出时默认开启 | _boolean_ | - |
| wrapable | 是否开启文本换行，只在禁用滚动时生效 | _boolean_ | `false` |

### Events

| 事件名 | 说明                         | 回调参数            |
| ------ | ---------------------------- | ------------------- |
| click  | 点击通知栏时触发             | _event: MouseEvent_ |
| close  | 关闭通知栏时触发             | _event: MouseEvent_ |
| replay | 每当滚动栏重新开始滚动时触发 | -                   |

### 方法

通过 ref 可以获取到 NoticeBar 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明                 | 参数 | 返回值 |
| ------ | -------------------- | ---- | ------ |
| reset  | 重置通知栏到初始状态 | -    | -      |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  NoticeBarMode,
  NoticeBarProps,
  NoticeBarInstance,
} from '@miracle-web/ui';
```

`NoticeBarInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { NoticeBarInstance } from '@miracle-web/ui';

const noticeBarRef = ref<NoticeBarInstance>();

noticeBarRef.value?.reset();
```

### Slots

| 名称       | 内容           |
| ---------- | -------------- |
| default    | 通知文本内容   |
| left-icon  | 自定义左侧图标 |
| right-icon | 自定义右侧图标 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --mi-notice-bar-height | _40px_ | - |
| --mi-notice-bar-padding | _0 var(--mi-padding-md)_ | - |
| --mi-notice-bar-wrapable-padding | _var(--mi-padding-xs) var(--mi-padding-md)_ | - |
| --mi-notice-bar-text-color | _var(--mi-orange-dark)_ | - |
| --mi-notice-bar-font-size | _var(--mi-font-size-md)_ | - |
| --mi-notice-bar-line-height | _24px_ | - |
| --mi-notice-bar-background | _var(--mi-orange-light)_ | - |
| --mi-notice-bar-icon-size | _16px_ | - |
| --mi-notice-bar-icon-min-width | _24px_ | - |
