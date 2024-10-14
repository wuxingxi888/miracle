# Radio 单选框

### 介绍

在一组备选项中进行单选。

### 引入

通过以下方式来全局注册组件，更多注册方式请参考[组件注册](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { createApp } from 'vue';
import { RadioGroup, Radio } from '@miracle-web/ui';

const app = createApp();
app.use(Radio);
app.use(RadioGroup);
```

## 代码演示

### 基础用法

通过 `v-model` 绑定值当前选中项的 name。

```html
<mi-radio-group v-model="checked">
  <mi-radio name="1">单选框 1</mi-radio>
  <mi-radio name="2">单选框 2</mi-radio>
</mi-radio-group>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref('1');
    return { checked };
  },
};
```

### 水平排列

将 `direction` 属性设置为 `horizontal` 后，单选框组会变成水平排列。

```html
<mi-radio-group v-model="checked" direction="horizontal">
  <mi-radio name="1">单选框 1</mi-radio>
  <mi-radio name="2">单选框 2</mi-radio>
</mi-radio-group>
```

### 禁用状态

通过 `disabled` 属性禁止选项切换，在 `Radio` 上设置 `disabled` 可以禁用单个选项。

```html
<mi-radio-group v-model="checked" disabled>
  <mi-radio name="1">单选框 1</mi-radio>
  <mi-radio name="2">单选框 2</mi-radio>
</mi-radio-group>
```

### 自定义形状

`shape` 属性可选值为 `square` 和 `dot`，单选框形状分别对应方形和圆点形。

```html
<mi-radio-group v-model="checked" shape="square">
  <mi-radio name="1">单选框 1</mi-radio>
  <mi-radio name="2">单选框 2</mi-radio>
</mi-radio-group>

<mi-radio-group v-model="checked" shape="dot">
  <mi-radio name="1">Radio 1</mi-radio>
  <mi-radio name="2">Radio 2</mi-radio>
</mi-radio-group>
```

### 自定义颜色

通过 `checked-color` 属性设置选中状态的图标颜色。

```html
<mi-radio-group v-model="checked">
  <mi-radio name="1" checked-color="#ee0a24">单选框 1</mi-radio>
  <mi-radio name="2" checked-color="#ee0a24">单选框 2</mi-radio>
</mi-radio-group>
```

### 自定义大小

通过 `icon-size` 属性可以自定义图标的大小。

```html
<mi-radio-group v-model="checked">
  <mi-radio name="1" icon-size="24px">单选框 1</mi-radio>
  <mi-radio name="2" icon-size="24px">单选框 2</mi-radio>
</mi-radio-group>
```

### 自定义图标

通过 `icon` 插槽自定义图标，并通过 `slotProps` 判断是否为选中状态。

```html
<mi-radio-group v-model="checked">
  <mi-radio name="1">
    单选框 1
    <template #icon="props">
      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
    </template>
  </mi-radio>
  <mi-radio name="2">
    单选框 2
    <template #icon="props">
      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
    </template>
  </mi-radio>
</mi-radio-group>

<style>
  .img-icon {
    height: 20px;
  }
</style>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref('1');
    return {
      checked,
      activeIcon:
        'https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/check_active.png',
      inactiveIcon:
        'https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/check_inactive.png',
    };
  },
};
```

### 左侧文本

将 `label-position` 属性设置为 `'left'`，可以将文本位置调整到单选框左侧。

```html
<mi-radio-group v-model="checked">
  <mi-radio name="1" label-position="left">单选框 1</mi-radio>
  <mi-radio name="2" label-position="left">单选框 2</mi-radio>
</mi-radio-group>
```

### 禁用文本点击

设置 `label-disabled` 属性后，点击图标以外的内容不会触发单选框切换。

```html
<mi-radio-group v-model="checked">
  <mi-radio name="1" label-disabled>单选框 1</mi-radio>
  <mi-radio name="2" label-disabled>单选框 2</mi-radio>
</mi-radio-group>
```

### 搭配单元格组件使用

搭配单元格组件使用时，需要再引入 `Cell` 和 `CellGroup` 组件。

```html
<mi-radio-group v-model="checked">
  <mi-cell-group inset>
    <mi-cell title="单选框 1" clickable @click="checked = '1'">
      <template #right-icon>
        <mi-radio name="1" />
      </template>
    </mi-cell>
    <mi-cell title="单选框 2" clickable @click="checked = '2'">
      <template #right-icon>
        <mi-radio name="2" />
      </template>
    </mi-cell>
  </mi-cell-group>
</mi-radio-group>
```

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标识符，通常为一个唯一的字符串或数字 | _any_ | - |
| shape | 形状，可选值为 `square` `dot` | _string_ | `round` |
| disabled | 是否为禁用状态 | _boolean_ | `false` |
| label-disabled | 是否禁用文本内容点击 | _boolean_ | `false` |
| label-position | 文本位置，可选值为 `left` | _string_ | `right` |
| icon-size | 图标大小，默认单位为 `px` | _number \| string_ | `20px` |
| checked-color | 选中状态颜色 | _string_ | `#1989fa` |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前选中项的标识符 | _any_ | - |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| direction | 排列方向，可选值为 `horizontal` | _string_ | `vertical` |
| icon-size | 所有单选框的图标大小，默认单位为 `px` | _number \| string_ | `20px` |
| checked-color | 所有单选框的选中状态颜色 | _string_ | `#1989fa` |
| shape `v4.6.3` | 形状，可选值为 `square` `dot` | _string_ | `round` |

### Radio Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| click  | 点击单选框时触发 | _event: MouseEvent_ |

### RadioGroup Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| change | 当绑定值变化时触发的事件 | _name: string_ |

### Radio Slots

| 名称    | 说明       | 参数                                      |
| ------- | ---------- | ----------------------------------------- |
| default | 自定义文本 | _{ checked: boolean, disabled: boolean }_ |
| icon    | 自定义图标 | _{ checked: boolean, disabled: boolean }_ |

### 类型定义

组件导出以下类型定义：

```ts
import type {
  RadioProps,
  RadioShape,
  RadioGroupProps,
  RadioLabelPosition,
  RadioGroupDirection,
} from '@miracle-web/ui';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --mi-radio-size | _20px_ | - |
| --mi-radio-dot-size | _8px_ | 圆点到边界的距离 |
| --mi-radio-border-color | _var(--mi-gray-5)_ | - |
| --mi-radio-duration | _var(--mi-duration-fast)_ | - |
| --mi-radio-label-margin | _var(--mi-padding-xs)_ | - |
| --mi-radio-label-color | _var(--mi-text-color)_ | - |
| --mi-radio-checked-icon-color | _var(--mi-primary-color)_ | - |
| --mi-radio-disabled-icon-color | _var(--mi-gray-5)_ | - |
| --mi-radio-disabled-label-color | _var(--mi-text-color-3)_ | - |
| --mi-radio-disabled-background | _var(--mi-border-color)_ | - |
