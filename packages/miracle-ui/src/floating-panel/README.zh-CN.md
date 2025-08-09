# FloatingPanel 浮动面板

### 介绍

浮动在页面底部的面板，可以上下拖动来浏览内容，常用于提供额外的功能或信息。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { FloatingPanel } from '@miracle-web/ui';

const app = createApp();
app.use(FloatingPanel);
```

## 代码演示

### 基础用法

FloatingPanel 的默认高度为 `100px`，用户可以拖动来展开面板，使高度达到 `60%` 的屏幕高度。

```html
<mi-floating-panel>
    <mi-cell-group>
        <mi-cell
            v-for="i in 26"
            :key="i"
            :title="String.fromCharCode(i + 64)"
            size="large"
        />
    </mi-cell-group>
</mi-floating-panel>
```

### 自定义锚点

你可以通过 `anchors` 属性来设置 FloatingPanel 的锚点位置，并通过 `v-model:height` 来控制当前面板的显示高度。

比如，使面板的高度在 `100px`、40% 屏幕高度和 70% 屏幕高度三个位置停靠：

```html
<mi-floating-panel v-model:height="height" :anchors="anchors">
    <div style="text-align: center; padding: 15px">
        <p>面板显示高度 {{ height.toFixed(0) }} px</p>
    </div>
</mi-floating-panel>
```

```js
import { ref } from 'vue';

export default {
    setup() {
        const anchors = [
            100,
            Math.round(0.4 * window.innerHeight),
            Math.round(0.7 * window.innerHeight),
        ];
        const height = ref(anchors[0]);

        return { anchors, height };
    },
};
```

### 仅头部拖拽

默认情况下，FloatingPanel 的头部区域和内容区域都可以被拖拽，你可以通过 `content-draggable` 属性来禁用内容区域的拖拽。

```html
<mi-floating-panel :content-draggable="false">
    <div style="text-align: center; padding: 15px">
        <p>内容不可拖拽</p>
    </div>
</mi-floating-panel>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:height | 当前面板的显示高度 | _number \| string_ | `0` |
| anchors | 设置自定义锚点, 单位 `px` | _number[]_ | `[100, window.innerWidth * 0.6]` |
| duration | 动画时长，单位秒，设置为 0 可以禁用动画 | _number \| string_ | `0.3` |
| content-draggable | 允许拖拽内容容器 | _boolean_ | `true` |
| lock-scroll `v4.6.4` | 当不拖拽时，是否锁定背景滚动 | _boolean_ | `false` |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |

### Events

| 事件名        | 说明                             | 回调参数             |
| ------------- | -------------------------------- | -------------------- |
| height-change | 面板显示高度改变且结束拖动后触发 | _{ height: number }_ |

### Slots

| Name    | Description    |
| ------- | -------------- |
| default | 自定义面板内容 |
| header  | 自定义面板标头 |

### 类型定义

组件导出以下类型定义：

```ts
import type { FloatingPanelProps } from '@miracle-web/ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| Name                              | Default Value            | Description |
| --------------------------------- | ------------------------ | ----------- |
| --mi-floating-panel-border-radius | _16px_                   | -           |
| --mi-floating-panel-header-height | _30px_                   | -           |
| --mi-floating-panel-z-index       | _999_                    | -           |
| --mi-floating-panel-background    | _var(--mi-background-2)_ | -           |
| --mi-floating-panel-bar-width     | _20px_                   | -           |
| --mi-floating-panel-bar-height    | _3px_                    | -           |
| --mi-floating-panel-bar-color     | _var(--mi-gray-5)_       | -           |
