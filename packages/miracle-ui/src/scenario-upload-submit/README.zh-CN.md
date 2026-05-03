# 上传提交页

### 介绍

上传提交页适合实名认证、工单反馈、资料补充、售后凭证上传等移动业务页面。

该场景使用 `NoticeBar`、`CellGroup`、`Uploader`、`Tag`、`Button` 和 `Empty` 组合出一个完整资料提交页面，包含规则提示、资料状态、上传入口、补充说明和提交后的结果反馈。

### 推荐组件

| 组件      | 作用                 |
| --------- | -------------------- |
| NoticeBar | 展示上传规则         |
| CellGroup | 聚合资料区块         |
| Uploader  | 上传图片或文件       |
| Tag       | 标记审核状态         |
| Button    | 提交资料             |
| Empty     | 展示提交后的结果说明 |

### 示例代码

```html
<mi-nav-bar title="资料上传" left-arrow left-text="返回" />

<mi-notice-bar
    left-icon="info-o"
    text="请上传清晰、完整的证件照片，单次最多 3 张"
/>

<mi-cell-group inset title="审核资料">
    <mi-cell title="资料状态">
        <template #value>
            <mi-tag type="warning">待补充</mi-tag>
        </template>
    </mi-cell>
    <mi-cell title="上传凭证" label="支持身份证、营业执照、现场照片">
        <template #value>
            <span>2/3</span>
        </template>
    </mi-cell>
    <mi-uploader v-model="fileList" multiple :max-count="3" />
</mi-cell-group>

<mi-button round block type="primary" @click="onSubmit"> 提交审核 </mi-button>

<mi-empty description="提交后会通过短信通知审核结果" />
```

### 适用场景

-   实名认证、资质认证、发票资料补充
-   工单反馈、售后凭证、巡检照片上传
-   需要统一上传规则、资料状态和提交动作的页面

### 使用建议

-   上传前先用 `NoticeBar` 说明格式、大小和清晰度要求。
-   用 `Tag` 标记资料状态，让用户知道当前是否还需补充。
-   提交后展示明确的结果说明和下一步动作。
