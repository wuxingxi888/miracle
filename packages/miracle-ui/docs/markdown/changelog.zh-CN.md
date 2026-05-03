# 更新日志

> 建议在每次发布时同时记录功能、文档、测试和兼容性变化，避免只写发包信息。

### 待发布

`未发布`

#### 新功能

-   Indicator 支持 `capsule`、`numbers`、`pulse` 三种类型，并新增 `formatter` 用于自定义数字指示器文案。

#### 文档

-   新增项目定位、设计令牌和发布流程文档。
-   新增搜索筛选列表页、分步表单页、上传提交页、选择器弹层页和结果反馈页五个可预览场景组合 Demo。
-   统一 README、首页、快速上手和 auto-import resolver README 的“Vue 3 移动业务场景组件与模式库”定位。
-   调整新增文档页排版，避免旧文档站将组件示例当作真实 DOM 渲染。

#### 工程

-   create-miracle-cli-app 支持选择包管理器，并在 Vue 2 / Vue 3 模板中生成对应安装和启动命令。
-   将文档测试接入 Vitest 与 `test:coverage`，覆盖导航、场景示例、设计令牌映射和更新日志完整性。
-   同步 Indicator demo 与 SSR 快照，使测试结果与当前示例行为一致。

### v0.0.4

`2025-01-22`

#### 新功能

-   新增 Indicator 指示器组件，支持 `circle`、`square`、`line` 三种展示类型。
-   Swipe 示例新增自定义指示器用法，可通过 `indicator` 插槽组合 Indicator。

#### 文档

-   新增 Indicator 指示器组件文档、API 表格和主题变量说明。
-   更新 Swipe 组件文档，补充自定义指示器示例并移除历史版本号标记。

#### 测试

-   为 Indicator 增加基础渲染、demo 和 SSR 快照测试。
-   更新 Swipe demo 与 SSR 快照，覆盖自定义指示器组合效果。

### v0.0.3

`2024-11-29`

#### 新功能

-   新增 `useState` 组合式 API 文档，并加入文档站导航。

#### 文档

-   调整首页和快速上手中的项目说明，保持安装入口和基础接入信息同步。

#### 工程

-   整理 ESLint 配置，并发布 `@miracle-web/ui` v0.0.3。

### v0.0.2

`2024-10-22`

#### 修复

-   将安装、CDN、自动导入和代码示例中的包名统一修正为 `@miracle-web/ui`。
-   将内部 workspace 依赖统一迁移到 `@miracle-web/*` 命名空间。

#### 文档

-   更新 README、快速上手和组合式 API 文档中的导入路径。
-   修正 `@miracle-web/auto-import-resolver` 的安装与配置示例。

#### 工程

-   发布 `@miracle-web/ui` v0.0.2，并同步依赖包命名空间。

### v0.0.1

`2024-10-14`

#### 新功能

-   首个公开版本，提供 Miracle UI 的 Vue 3 移动端组件库基础能力。
-   覆盖基础组件、表单组件、反馈组件、展示组件和导航组件等核心分类。
-   提供 ConfigProvider 主题配置、Toast / Dialog / Notify / ImagePreview 等函数式调用能力。

#### 文档

-   建立文档站、快速上手、进阶用法、常见问题、贡献指南和更新日志入口。
-   提供 `useClickAway`、`useCountDown`、`useEventListener`、`useToggle`、`useRaf` 等组合式 API 文档。

#### 工程

-   建立组件源码、demo、单元测试、SSR 快照和站点构建链路。
