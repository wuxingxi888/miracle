# 结果反馈页

### 介绍

结果反馈页适合提交成功、支付结果、权限受限、网络异常等需要明确告知状态和下一步动作的移动业务页面。

该场景使用 `NavBar`、`Empty`、`NoticeBar`、`CellGroup`、`Cell`、`Button` 和 `ActionBar` 组合出一个提交完成页面，包含结果说明、补充提示、关键记录和底部操作区。

### 推荐组件

| 组件      | 作用         |
| --------- | ------------ |
| Empty     | 结果态主体   |
| NoticeBar | 补充说明     |
| CellGroup | 展示关键记录 |
| Button    | 页面内主动作 |
| ActionBar | 底部固定动作 |

### 示例代码

```html
<mi-nav-bar title="提交结果" left-arrow left-text="返回" />

<mi-empty image="success" description="资料已提交，审核结果会通过短信通知">
    <mi-button round type="primary">返回列表</mi-button>
</mi-empty>

<mi-notice-bar
    left-icon="info-o"
    text="预计 1 个工作日内完成审核，请保持手机号可接收短信"
/>

<mi-cell-group inset title="提交信息">
    <mi-cell title="业务编号" value="APPLY-2026050301" />
    <mi-cell title="提交时间" value="2026-05-03 09:30" />
    <mi-cell title="当前状态" value="审核中" />
</mi-cell-group>

<mi-action-bar>
    <mi-action-bar-icon icon="records-o" text="记录" />
    <mi-action-bar-icon icon="service-o" text="客服" />
    <mi-action-bar-button type="primary" text="继续提交" @click="onPrimary" />
</mi-action-bar>
```

### 适用场景

-   审核资料提交成功、预约成功、支付结果
-   权限受限、网络异常、业务办理失败
-   需要给用户明确下一步动作的结果页

### 使用建议

-   结果标题直接说明状态，不要只写“提示”。
-   补充说明用于告知通知方式、预计处理时间或失败原因。
-   保留一个主动作和一个次动作，避免结果页操作分散。
