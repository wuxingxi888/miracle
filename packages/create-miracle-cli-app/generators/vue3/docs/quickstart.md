# 快速上手

### 安装

```bash
# 安装依赖
<%= installCommand %>

# 启动开发
<%= startDevCommand %>
```

### 推荐接入方式

-   将通用主题变量集中在根节点的 `ConfigProvider` 中维护。
-   如果项目按需引入 Miracle 组件，统一使用 `@miracle-web/auto-import-resolver`。
-   先沉淀业务页面模式，再补充单个基础组件，避免文档和 API 快速发散。
