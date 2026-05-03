# 选择器弹层页

### 介绍

选择器弹层页适合地区、类目、时间范围和组合条件选择等移动业务页面。

该场景使用 `Cell`、`Popup`、`Tabs`、`Picker`、`Tag` 和 `Button` 组合出一个底部选择面板，包含已选结果、弹层容器、维度切换、选择器主体和确认动作。

### 推荐组件

| 组件   | 作用                 |
| ------ | -------------------- |
| Cell   | 展示已选值和触发入口 |
| Popup  | 底部弹层容器         |
| Tabs   | 切换选择维度         |
| Picker | 单列或多列选择       |
| Tag    | 标记推荐项或当前状态 |
| Button | 确认选择             |

### 示例代码

```html
<mi-nav-bar title="选择配送区域" left-arrow left-text="返回" />

<mi-cell-group inset title="当前选择">
    <mi-cell
        title="配送区域"
        :value="selectedArea"
        is-link
        @click="showPicker = true"
    />
    <mi-cell title="服务状态">
        <template #value>
            <mi-tag type="success">可配送</mi-tag>
        </template>
    </mi-cell>
</mi-cell-group>

<mi-popup v-model:show="showPicker" round closeable position="bottom">
    <mi-tabs v-model:active="activeTab">
        <mi-tab title="常用区域" />
        <mi-tab title="全部区域" />
    </mi-tabs>

    <mi-picker
        v-model="selectedValues"
        title="行政区"
        :columns="areaColumns"
        @confirm="onConfirm"
    />

    <mi-button round block type="primary" @click="showPicker = false">
        暂不修改
    </mi-button>
</mi-popup>
```

### 适用场景

-   配送区域、服务城市、门店选择
-   类目、标签、时间范围等组合条件
-   需要在移动端保持页面上下文的选择流程

### 使用建议

-   弹层标题和触发入口文案保持一致，减少用户理解成本。
-   选择项较多时优先使用底部弹层，避免跳转到独立页面。
-   已选结果回填到 `Cell`，让用户关闭弹层后仍能确认当前选择。
