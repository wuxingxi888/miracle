# 搜索筛选列表页

### 介绍

搜索筛选列表页适合订单列表、会员列表、内容审核列表等需要快速定位记录的移动业务页面。

该场景使用 `NavBar`、`Search`、`Tabs`、`DropdownMenu`、`List`、`Cell`、`Tag` 和 `Empty` 组合出一个完整列表页骨架，包含顶部标题、关键词入口、状态切换、筛选条件、结果列表和空状态入口。

### 推荐组件

| 组件         | 作用               |
| ------------ | ------------------ |
| NavBar       | 页面标题和返回入口 |
| Search       | 关键词搜索入口     |
| Tabs         | 业务状态切换       |
| DropdownMenu | 排序和筛选条件     |
| List         | 结果列表容器       |
| Cell         | 单条结果信息       |
| Tag          | 状态标记           |
| Empty        | 无结果反馈         |

### 示例代码

```html
<mi-nav-bar title="业务列表" left-arrow left-text="返回" />

<mi-search
    v-model="keyword"
    shape="round"
    placeholder="搜索订单号、手机号、线索编号"
    show-action
/>

<mi-tabs v-model:active="activeTab" sticky>
    <mi-tab title="全部" />
    <mi-tab title="待处理" />
    <mi-tab title="跟进中" />
    <mi-tab title="已完成" />
</mi-tabs>

<mi-dropdown-menu>
    <mi-dropdown-item v-model="sort" :options="sortOptions" />
    <mi-dropdown-item v-model="channel" :options="channelOptions" />
</mi-dropdown-menu>

<mi-list finished :immediate-check="false" finished-text="已展示全部记录">
    <mi-cell
        v-for="record in records"
        :key="record.title"
        is-link
        :title="record.title"
        :label="record.label"
    >
        <template #value>
            <mi-tag :type="record.type">{{ record.value }}</mi-tag>
        </template>
    </mi-cell>
</mi-list>

<mi-empty image="search" description="切换筛选条件后无匹配结果时展示空态" />
```

### 适用场景

-   订单、工单、线索、会员等移动端业务列表
-   需要按状态、排序、时间范围快速筛选的页面
-   需要统一加载、空态、结果展示结构的列表页

### 使用建议

-   将搜索词、状态 Tab、排序条件和接口查询参数保持一一对应。
-   列表项只展示最关键的 2 到 3 个字段，详情信息放到下一页。
-   无结果时保留筛选入口，避免用户只能返回重试。
