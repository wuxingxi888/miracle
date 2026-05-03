# 分步表单页

### 介绍

分步表单页适合报名、审批、信息补录、线索收集等需要逐步确认信息的移动业务页面。

该场景使用 `Steps`、`Form`、`Field`、`CellGroup`、`Button` 和 `Tag` 组合出一个两段式录入页面，强调当前步骤、核心字段、只读选择入口和底部主操作。

### 推荐组件

| 组件      | 作用             |
| --------- | ---------------- |
| Steps     | 展示填写进度     |
| Form      | 管理提交和校验   |
| Field     | 输入业务字段     |
| CellGroup | 聚合表单区域     |
| Tag       | 标记当前资料状态 |
| Button    | 触发下一步或提交 |

### 示例代码

```html
<mi-nav-bar title="预约报名" left-arrow left-text="返回" />

<mi-steps :active="1">
    <mi-step>填写信息</mi-step>
    <mi-step>确认资料</mi-step>
    <mi-step>提交完成</mi-step>
</mi-steps>

<mi-form @submit="onSubmit">
    <mi-cell-group inset title="基础信息">
        <mi-field
            v-model="name"
            name="name"
            label="联系人"
            placeholder="请输入姓名"
            :rules="[{ required: true, message: '请输入联系人' }]"
        />
        <mi-field
            v-model="mobile"
            name="mobile"
            label="手机号"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请输入手机号' }]"
        />
    </mi-cell-group>

    <mi-cell-group inset title="预约信息">
        <mi-field
            v-model="date"
            readonly
            is-link
            name="date"
            label="到店日期"
            placeholder="请选择日期"
        />
        <mi-field
            v-model="store"
            readonly
            is-link
            name="store"
            label="预约门店"
            placeholder="请选择门店"
        />
    </mi-cell-group>

    <mi-button round block type="primary" native-type="submit">
        下一步
    </mi-button>
</mi-form>
```

### 适用场景

-   报名、预约、审批等步骤明确的移动端表单
-   需要先填写基础信息，再确认资料的业务流程
-   需要统一字段排列、提交动作和状态提示的录入页

### 使用建议

-   每一步只放当前必须完成的字段，避免移动端页面过长。
-   只读字段用于打开选择器、日期选择器或弹层，不直接混入复杂控件。
-   提交按钮固定在表单末尾，文案与当前步骤保持一致。
