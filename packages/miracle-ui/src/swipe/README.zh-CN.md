# Swipe 轮播

### 介绍

用于循环播放一组图片或内容。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Swipe, SwipeItem } from '@miracle-web/ui';

const app = createApp();
app.use(Swipe);
app.use(SwipeItem);
```

## 代码演示

### 基础用法

每个 SwipeItem 代表一张轮播卡片，可以通过 `autoplay` 属性设置自动轮播的间隔。

```html
<mi-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <mi-swipe-item>1</mi-swipe-item>
    <mi-swipe-item>2</mi-swipe-item>
    <mi-swipe-item>3</mi-swipe-item>
    <mi-swipe-item>4</mi-swipe-item>
</mi-swipe>

<style>
    .my-swipe .mi-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
</style>
```

### 懒加载

当 Swipe 中含有图片时，可以通过 `lazy-render` 属性来开启懒加载模式。在懒加载模式下，只会渲染当前页和下一页。

```html
<mi-swipe :autoplay="3000" lazy-render>
    <mi-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
    </mi-swipe-item>
</mi-swipe>
```

```js
export default {
    setup() {
        const images = [
            'https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/images/avatar.jpg',
            'https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/images/avatar.jpg',
        ];
        return { images };
    },
};
```

### 监听 change 事件

在每一页轮播结束后，会触发 `change` 事件。

```html
<mi-swipe @change="onChange">
    <mi-swipe-item>1</mi-swipe-item>
    <mi-swipe-item>2</mi-swipe-item>
    <mi-swipe-item>3</mi-swipe-item>
    <mi-swipe-item>4</mi-swipe-item>
</mi-swipe>
```

```js
import { showToast } from '@miracle-web/ui';

export default {
    setup() {
        const onChange = (index) => showToast('当前 Swipe 索引：' + index);
        return { onChange };
    },
};
```

### 纵向滚动

设置 `vertical` 属性后滑块会纵向排列，此时需要指定滑块容器的高度。

```html
<mi-swipe style="height: 200px;" vertical>
    <mi-swipe-item>1</mi-swipe-item>
    <mi-swipe-item>2</mi-swipe-item>
    <mi-swipe-item>3</mi-swipe-item>
    <mi-swipe-item>4</mi-swipe-item>
</mi-swipe>
```

### 自定义滑块大小

滑块默认宽度为 `100%`，可以通过 `width` 属性设置单个滑块的宽度。纵向滚动模式下，可以通过 `height` 属性设置单个滑块的高度。

```html
<mi-swipe :loop="false" :width="300">
    <mi-swipe-item>1</mi-swipe-item>
    <mi-swipe-item>2</mi-swipe-item>
    <mi-swipe-item>3</mi-swipe-item>
    <mi-swipe-item>4</mi-swipe-item>
</mi-swipe>
```

> 目前不支持在循环滚动模式下自定义滑块大小，因此需要将 loop 设置为 false。

### 自定义指示器

通过 `indicator` 插槽可以自定义指示器的样式。

```html
<mi-swipe>
    <mi-swipe-item>1</mi-swipe-item>
    <mi-swipe-item>2</mi-swipe-item>
    <mi-swipe-item>3</mi-swipe-item>
    <mi-swipe-item>4</mi-swipe-item>
    <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
    </template>
</mi-swipe>

<style>
    .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.1);
    }
</style>
```

### 自定义指示器 （indicator 组件）

通过 `indicator` 插槽可以自定义指示器的样式。（[indicator 组件](#/zh-CN/indicator)）

```html
<mi-swipe>
    <mi-swipe-item>1</mi-swipe-item>
    <mi-swipe-item>2</mi-swipe-item>
    <mi-swipe-item>3</mi-swipe-item>
    <mi-swipe-item>4</mi-swipe-item>
    <template #indicator="{ active, total }">
        <mi-indicator
            class="custom-indicator_line"
            type="line"
            :size="total"
            :active="active"
            color="#fff"
        />
    </template>
</mi-swipe>

<style>
    .custom-indicator_line {
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
    }
</style>
```

## API

### Swipe Props

| 参数             | 说明                     | 类型               | 默认值    |
| ---------------- | ------------------------ | ------------------ | --------- |
| autoplay         | 自动轮播间隔，单位为 ms  | _number \| string_ | -         |
| duration         | 动画时长，单位为 ms      | _number \| string_ | `500`     |
| initial-swipe    | 初始位置索引值           | _number \| string_ | `0`       |
| width            | 滑块宽度，单位为 `px`    | _number \| string_ | `auto`    |
| height           | 滑块高度，单位为 `px`    | _number \| string_ | `auto`    |
| loop             | 是否开启循环播放         | _boolean_          | `true`    |
| show-indicators  | 是否显示指示器           | _boolean_          | `true`    |
| vertical         | 是否为纵向滚动           | _boolean_          | `false`   |
| touchable        | 是否可以通过手势滑动     | _boolean_          | `true`    |
| stop-propagation | 是否阻止滑动事件冒泡     | _boolean_          | `true`    |
| lazy-render      | 是否延迟渲染未展示的轮播 | _boolean_          | `false`   |
| indicator-color  | 指示器颜色               | _string_           | `#1989fa` |

### Swipe Events

| 事件名     | 说明                         | 回调参数            |
| ---------- | ---------------------------- | ------------------- |
| change     | 每一页轮播结束后触发         | _index: number_     |
| drag-start | 当用户开始拖动轮播组件时触发 | _{ index: number }_ |
| drag-end   | 当用户结束拖动轮播组件时触发 | _{ index: number }_ |

### SwipeItem Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Swipe 方法

通过 ref 可以获取到 Swipe 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| prev | 切换到上一轮播 | - | - |
| next | 切换到下一轮播 | - | - |
| swipeTo | 切换到指定位置 | _index: number, options: SwipeToOptions_ | - |
| resize | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | - | - |

### 类型定义

组件导出以下类型定义：

```ts
import type {
    SwipeProps,
    SwipeInstance,
    SwipeToOptions,
} from '@miracle-web/ui';
```

`SwipeInstance` 是组件实例的类型，用法如下：

```ts
import { ref } from 'vue';
import type { SwipeInstance } from '@miracle-web/ui';

const swipeRef = ref<SwipeInstance>();

swipeRef.value?.next();
```

### SwipeToOptions 格式

| 名称      | 说明         | 类型      |
| --------- | ------------ | --------- |
| immediate | 是否跳过动画 | _boolean_ |

### Swipe Slots

| 名称      | 说明         | 参数                                |
| --------- | ------------ | ----------------------------------- |
| default   | 轮播内容     | -                                   |
| indicator | 自定义指示器 | _{ active: number, total: number }_ |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                     | 默认值                    | 描述 |
| ---------------------------------------- | ------------------------- | ---- |
| --mi-swipe-indicator-size                | _6px_                     | -    |
| --mi-swipe-indicator-margin              | _var(--mi-padding-sm)_    | -    |
| --mi-swipe-indicator-active-opacity      | _1_                       | -    |
| --mi-swipe-indicator-inactive-opacity    | _0.3_                     | -    |
| --mi-swipe-indicator-active-background   | _var(--mi-primary-color)_ | -    |
| --mi-swipe-indicator-inactive-background | _var(--mi-border-color)_  | -    |

## 常见问题

### 滑动轮播时为什么触发了 click 事件？

这种情况通常是由于项目中引入了 `fastclick` 库导致的。`fastclick` 的原理是通过 Touch 事件模拟出 click 事件，而 Swipe 内部默认会阻止 touchmove 事件冒泡，干扰了 fastclick 的判断，导致出现这个问题。

将 Swipe 组件的 stop-propagation 属性设置为 false 即可避免该问题。

### 在桌面端无法操作组件？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。

### Swipe 组件功能太少，无法实现复杂效果？

Miracle 中的 Swipe 组件是比较轻量的，因此功能也比较基础。如果需要更复杂的轮播效果，推荐使用社区里一些优质的轮播库，比如 [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)。

### 组件从隐藏状态切换到显示状态时，无法正确渲染？

Swipe 组件在挂载时，会获取自身的宽度，并计算出轮播图的位置。如果组件一开始处于隐藏状态，则获取到的宽度永远为 0，因此无法正确计算位置。

#### 解决方法

方法一，如果是使用 `v-show` 来控制组件展示的，则替换为 `v-if` 即可解决此问题：

```html
<!-- Before -->
<mi-swipe v-show="show" />
<!-- After -->
<mi-swipe v-if="show" />
```

方法二，调用组件的 resize 方法来主动触发重绘：

```html
<mi-swipe v-show="show" ref="swipe" />
```

```js
this.$refs.swipe.resize();
```
