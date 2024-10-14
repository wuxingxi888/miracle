# Toast 轻提示

### 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Toast } from '@miracle-web/ui';

const app = createApp();
app.use(Toast);
```

### 函数调用

为了便于使用 `Toast`，Miracle 提供了一系列辅助函数，通过辅助函数可以快速唤起全局的 Toast 组件。

比如使用 `showToast` 函数，调用后会直接在页面中渲染对应的轻提示。

```js
import { showToast } from '@miracle-web/ui';

showToast('提示内容');
```

## 代码演示

### 文字提示

使用 `showToast` 方法在屏幕中间展示一条文字提示。

```js
import { showToast } from '@miracle-web/ui';

showToast('提示内容');
```

### 加载提示

使用 `showLoadingToast` 方法展示加载提示，通过 `forbidClick` 选项可以禁用背景点击。

```js
import { showLoadingToast } from '@miracle-web/ui';

showLoadingToast({
  message: '加载中...',
  forbidClick: true,
});
```

### 成功/失败提示

使用 `showSuccessToast` 方法展示成功提示，使用 `showFailToast` 方法展示失败提示。

```js
import { showSuccessToast, showFailToast } from '@miracle-web/ui';

showSuccessToast('成功文案');
showFailToast('失败文案');
```

### 自定义图标

通过 `icon` 选项可以自定义图标，支持传入图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props)。

```js
import { showToast } from '@miracle-web/ui';

showToast({
  message: '自定义图标',
  icon: 'like-o',
});

showToast({
  message: '自定义图片',
  icon: 'https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/logo.png',
});
```

通过 `loadingType` 属性可以自定义加载图标类型。

```js
import { showLoadingToast } from '@miracle-web/ui';

showLoadingToast({
  message: '加载中...',
  forbidClick: true,
  loadingType: 'spinner',
});
```

### 自定义位置

Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。

```js
import { showToast } from '@miracle-web/ui';

showToast({
  message: '顶部展示',
  position: 'top',
});

showToast({
  message: '底部展示',
  position: 'bottom',
});
```

### 文字换行方式

通过 `wordBreak` 选项可以控制 Toast 中的文字过长时的截断方式，默认值为 `break-all`，可选值为 `break-word` 和 `normal`。

```js
import { showToast } from '@miracle-web/ui';

// 换行时截断单词
showToast({
  message: 'This message will contain a incomprehensibilities long word.',
  wordBreak: 'break-all',
});

// 换行时不截断单词
showToast({
  message: 'This message will contain a incomprehensibilities long word.',
  wordBreak: 'break-word',
});
```

### 动态更新提示

执行 Toast 方法时会返回对应的 Toast 实例，通过修改实例上的 `message` 属性可以实现动态更新提示的效果。

```js
import { showLoadingToast, closeToast } from '@miracle-web/ui';

const toast = showLoadingToast({
  duration: 0,
  forbidClick: true,
  message: '倒计时 3 秒',
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.message = `倒计时 ${second} 秒`;
  } else {
    clearInterval(timer);
    closeToast();
  }
}, 1000);
```

### 单例模式

Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例：

```js
import {
  showToast,
  showSuccessToast,
  allowMultipleToast,
} from '@miracle-web/ui';

allowMultipleToast();

const toast1 = showToast('第一个 Toast');
const toast2 = showSuccessToast('第二个 Toast');

toast1.close();
toast2.close();
```

### 修改默认配置

通过 `setToastDefaultOptions` 函数可以全局修改 `showToast` 等方法的默认配置。

```js
import {
  setToastDefaultOptions,
  resetToastDefaultOptions,
} from '@miracle-web/ui';

setToastDefaultOptions({ duration: 2000 });

setToastDefaultOptions('loading', { forbidClick: true });

resetToastDefaultOptions();

resetToastDefaultOptions('loading');
```

### 使用 Toast 组件

如果你需要在 Toast 内嵌入组件或其他自定义内容，可以直接使用 Toast 组件，并使用 message 插槽进行定制。使用前需要通过 `app.use` 等方式注册组件。

```html
<mi-toast v-model:show="show" style="padding: 0">
  <template #message>
    <mi-image :src="image" width="200" height="140" style="display: block" />
  </template>
</mi-toast>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    return { show };
  },
};
```

## API

### 方法

Miracle 中导出了以下 Toast 相关的辅助函数：

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| showToast | 展示文字提示 | `ToastOptions \| string` | Toast 实例 |
| showLoadingToast | 展示加载提示 | `ToastOptions \| string` | Toast 实例 |
| showSuccessToast | 展示成功提示 | `ToastOptions \| string` | Toast 实例 |
| showFailToast | 展示失败提示 | `ToastOptions \| string` | Toast 实例 |
| closeToast | 关闭当前展示的提示 | `closeAll: boolean` | `void` |
| allowMultipleToast | 允许同时存在多个 Toast | - | `void` |
| setToastDefaultOptions | 修改默认配置，影响所有的 `showToast` 调用。传入 type 可以修改指定类型 Toast 的默认配置 | `type \| ToastOptions` | `void` |
| resetToastDefaultOptions | 重置默认配置，影响所有的 `showToast` 调用。传入 type 可以重置指定类型 Toast 的默认配置 | `type` | `void` |

### ToastOptions 数据结构

调用 `showToast` 等方法时，支持传入以下选项：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型，可选值为 `loading` `success` `fail` `html` | _ToastType_ | `text` |
| position | 位置，可选值为 `top` `bottom` | _ToastPosition_ | `middle` |
| message | 文本内容，支持通过`\n`换行 | _string_ | `''` |
| wordBreak | 文本内容的换行方式，可选值为 `normal` `break-all` `break-word` | _ToastWordBreak_ | `'break-all'` |
| icon | 自定义图标，支持传入图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | - |
| iconSize | 图标大小，如 `20px` `2em`，默认单位为 `px` | _number \| string_ | `36px` |
| iconPrefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `mi-icon` |
| overlay | 是否显示背景遮罩层 | _boolean_ | `false` |
| forbidClick | 是否禁止背景点击 | _boolean_ | `false` |
| closeOnClick | 是否在点击后关闭 | _boolean_ | `false` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `false` |
| loadingType | [加载图标类型](#/zh-CN/loading), 可选值为 `spinner` | _string_ | `circular` |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | _number_ | `2000` |
| className | 自定义类名 | _string \| Array \| object_ | - |
| overlayClass | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| transition | 动画类名，等价于 [transition](https://cn.vuejs.org/api/built-in-components.html#transition) 的`name`属性 | _string_ | `mi-fade` |
| teleport | 指定挂载的节点，等同于 Teleport 组件的 [to 属性](https://cn.vuejs.org/api/built-in-components.html#teleport) | _string \| Element_ | `body` |
| z-index | 将组件的 z-index 层级设置为一个固定值 | _number \| string_ | `2000+` |
| onClose | 关闭时的回调函数 | _Function_ | - |
| onOpened | 完全展示后的回调函数 | _Function_ | - |

### Props

通过组件调用 `Toast` 时，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型，可选值为 `loading` `success` `fail` `html` | _ToastType_ | `text` |
| position | 位置，可选值为 `top` `bottom` | _ToastPosition_ | `middle` |
| message | 文本内容，支持通过`\n`换行 | _string_ | `''` |
| word-break | 文本内容的换行方式，可选值为 `normal` `break-all` `break-word` | _ToastWordBreak_ | `'break-all'` |
| icon | 自定义图标，支持传入图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | - |
| icon-size | 图标大小，如 `20px` `2em`，默认单位为 `px` | _number \| string_ | `36px` |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `mi-icon` |
| overlay | 是否显示背景遮罩层 | _boolean_ | `false` |
| forbid-click | 是否禁止背景点击 | _boolean_ | `false` |
| close-on-click | 是否在点击后关闭 | _boolean_ | `false` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | _boolean_ | `false` |
| loading-type | [加载图标类型](#/zh-CN/loading), 可选值为 `spinner` | _string_ | `circular` |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | _number_ | `2000` |
| class-name | 自定义类名 | _string \| Array \| object_ | - |
| overlay-class | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlay-style | 自定义遮罩层样式 | _object_ | - |
| transition | 动画类名，等价于 [transition](https://cn.vuejs.org/api/built-in-components.html#transition) 的`name`属性 | _string_ | `mi-fade` |
| teleport | 指定挂载的节点，等同于 Teleport 组件的 [to 属性](https://cn.vuejs.org/api/built-in-components.html#teleport) | _string \| Element_ | `body` |
| z-index | 将组件的 z-index 层级设置为一个固定值 | _number \| string_ | `2000+` |

### Events

通过组件调用 `Toast` 时，支持以下事件：

| 事件名 | 说明                 | 回调参数 |
| ------ | -------------------- | -------- |
| close  | 关闭时的回调函数     | -        |
| opened | 完全展示后的回调函数 | -        |

### Slots

使用 `Toast` 组件时，支持以下插槽：

| 名称    | 说明           |
| ------- | -------------- |
| message | 自定义文本内容 |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  ToastType,
  ToastProps,
  ToastOptions,
  ToastPosition,
  ToastWordBreak,
  ToastWrapperInstance,
} from '@miracle-web/ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --mi-toast-max-width | _70%_ | - |
| --mi-toast-font-size | _var(--mi-font-size-md)_ | - |
| --mi-toast-text-color | _var(--mi-white)_ | - |
| --mi-toast-loading-icon-color | _var(--mi-white)_ | - |
| --mi-toast-line-height | _var(--mi-line-height-md)_ | - |
| --mi-toast-radius | _var(--mi-radius-lg)_ | - |
| --mi-toast-background | _fade(var(--mi-black), 70%)_ | - |
| --mi-toast-icon-size | _36px_ | - |
| --mi-toast-text-min-width | _96px_ | - |
| --mi-toast-text-padding | _var(--mi-padding-xs) var(--mi-padding-sm)_ | - |
| --mi-toast-default-padding | _var(--mi-padding-md)_ | - |
| --mi-toast-default-width | _88px_ | - |
| --mi-toast-default-min-height | _88px_ | - |
| --mi-toast-position-top-distance | _20%_ | - |
| --mi-toast-position-bottom-distance | _20%_ | - |

## 常见问题

### 引用 showToast 时出现编译报错？

如果引用 `showToast` 方法时出现以下报错，说明项目中使用了 `babel-plugin-import` 插件，导致代码被错误编译。

```bash
These dependencies were not found:

* miracle/es/show-toast in ./src/xxx.js
* miracle/es/show-toast/style in ./src/xxx.js
```
