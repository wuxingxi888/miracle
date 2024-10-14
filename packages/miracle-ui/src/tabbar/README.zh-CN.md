# Tabbar 标签栏

### 介绍

底部导航栏，用于在不同页面之间进行切换。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { Tabbar, TabbarItem } from '@miracle-web/ui';

const app = createApp();
app.use(Tabbar);
app.use(TabbarItem);
```

## 代码演示

### 基础用法

`v-model` 默认绑定选中标签的索引值，通过修改 `v-model` 即可切换选中的标签。

```html
<mi-tabbar v-model="active">
  <mi-tabbar-item icon="home-o">标签</mi-tabbar-item>
  <mi-tabbar-item icon="search">标签</mi-tabbar-item>
  <mi-tabbar-item icon="friends-o">标签</mi-tabbar-item>
  <mi-tabbar-item icon="setting-o">标签</mi-tabbar-item>
</mi-tabbar>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};
```

### 通过名称匹配

在标签指定 `name` 属性的情况下，`v-model` 的值为当前标签的 `name`。

```html
<mi-tabbar v-model="active">
  <mi-tabbar-item name="home" icon="home-o">标签</mi-tabbar-item>
  <mi-tabbar-item name="search" icon="search">标签</mi-tabbar-item>
  <mi-tabbar-item name="friends" icon="friends-o">标签</mi-tabbar-item>
  <mi-tabbar-item name="setting" icon="setting-o">标签</mi-tabbar-item>
</mi-tabbar>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const active = ref('home');
    return { active };
  },
};
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点；设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<mi-tabbar v-model="active">
  <mi-tabbar-item icon="home-o">标签</mi-tabbar-item>
  <mi-tabbar-item icon="search" dot>标签</mi-tabbar-item>
  <mi-tabbar-item icon="friends-o" badge="5">标签</mi-tabbar-item>
  <mi-tabbar-item icon="setting-o" badge="20">标签</mi-tabbar-item>
</mi-tabbar>
```

### 自定义图标

通过 `icon` 插槽自定义图标，可以通过 `slot-scope` 判断标签是否选中。

```html
<mi-tabbar v-model="active">
  <mi-tabbar-item badge="3">
    <span>自定义</span>
    <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
  </mi-tabbar-item>
  <mi-tabbar-item icon="search">标签</mi-tabbar-item>
  <mi-tabbar-item icon="setting-o">标签</mi-tabbar-item>
</mi-tabbar>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    const icon = {
      active:
        'https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/home-active.png',
      inactive:
        'https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/home-inactive.png',
    };
    return {
      icon,
      active,
    };
  },
};
```

### 自定义颜色

通过 `active-color` 属性设置选中标签的颜色，通过 `inactive-color` 属性设置未选中标签的颜色。

```html
<mi-tabbar v-model="active" active-color="#ee0a24">
  <mi-tabbar-item icon="home-o">标签</mi-tabbar-item>
  <mi-tabbar-item icon="search">标签</mi-tabbar-item>
  <mi-tabbar-item icon="friends-o">标签</mi-tabbar-item>
  <mi-tabbar-item icon="setting-o">标签</mi-tabbar-item>
</mi-tabbar>
```

### 监听切换事件

通过 `change` 事件来监听选中标签的变化。

```html
<mi-tabbar v-model="active" @change="onChange">
  <mi-tabbar-item icon="home-o">标签 1</mi-tabbar-item>
  <mi-tabbar-item icon="search">标签 2</mi-tabbar-item>
  <mi-tabbar-item icon="friends-o">标签 3</mi-tabbar-item>
  <mi-tabbar-item icon="setting-o">标签 4</mi-tabbar-item>
</mi-tabbar>
```

```js
import { ref } from 'vue';
import { showToast } from '@miracle-web/ui';

export default {
  setup() {
    const active = ref(0);
    const onChange = (index) => showToast(`标签 ${index}`);
    return {
      icon,
      onChange,
    };
  },
};
```

### 路由模式

标签栏支持路由模式，用于搭配 Vue Router 使用。路由模式下会匹配页面路径和标签的 `to` 属性，并自动选中对应的标签。

```html
<router-view />

<mi-tabbar route>
  <mi-tabbar-item replace to="/home" icon="home-o">标签</mi-tabbar-item>
  <mi-tabbar-item replace to="/search" icon="search">标签</mi-tabbar-item>
</mi-tabbar>
```

## API

### Tabbar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中标签的名称或索引值 | _number \| string_ | `0` |
| fixed | 是否固定在底部 | _boolean_ | `true` |
| border | 是否显示外边框 | _boolean_ | `true` |
| z-index | 元素 z-index | _number \| string_ | `1` |
| active-color | 选中标签的颜色 | _string_ | `#1989fa` |
| inactive-color | 未选中标签的颜色 | _string_ | `#7d7e80` |
| route | 是否开启路由模式 | _boolean_ | `false` |
| placeholder | 固定在底部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `false` |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei)，设置 fixed 时默认开启 | _boolean_ | `false` |
| before-change | 切换标签前的回调函数，返回 `false` 可阻止切换，支持返回 Promise | _(name: number \| string) => boolean \| Promise\<boolean\>_ | - |

### Tabbar Events

| 事件名 | 说明           | 回调参数                   |
| ------ | -------------- | -------------------------- |
| change | 切换标签时触发 | _active: number \| string_ |

### TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标签名称，作为匹配的标识符 | _number \| string_ | 当前标签的索引值 |
| icon | 图标名称或图片链接，等同于 Icon 组件的 [name 属性](#/zh-CN/icon#props) | _string_ | - |
| icon-prefix | 图标类名前缀，等同于 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `mi-icon` |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| badge-props | 自定义徽标的属性，传入的对象会被透传给 [Badge 组件的 props](#/zh-CN/badge#props) | _BadgeProps_ | - |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的目标路由对象，等同于 Vue Router 的 [to 属性](https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to) | _string \| object_ | - |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |

### TabbarItem Slots

| 名称 | 说明       | 参数              |
| ---- | ---------- | ----------------- |
| icon | 自定义图标 | _active: boolean_ |

### 类型定义

组件导出以下类型定义：

```ts
import type { TabbarProps, TabbarItemProps } from '@miracle-web/ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                | 默认值                    | 描述 |
| ----------------------------------- | ------------------------- | ---- |
| --mi-tabbar-height                  | _50px_                    | -    |
| --mi-tabbar-z-index                 | _1_                       | -    |
| --mi-tabbar-background              | _var(--mi-background-2)_  | -    |
| --mi-tabbar-item-font-size          | _var(--mi-font-size-sm)_  | -    |
| --mi-tabbar-item-text-color         | _var(--mi-text-color)_    | -    |
| --mi-tabbar-item-active-color       | _var(--mi-primary-color)_ | -    |
| --mi-tabbar-item-active-background  | _var(--mi-background-2)_  | -    |
| --mi-tabbar-item-line-height        | _1_                       | -    |
| --mi-tabbar-item-icon-size          | _22px_                    | -    |
| --mi-tabbar-item-icon-margin-bottom | _var(--mi-padding-base)_  | -    |
