<p align="center">
    <img alt="logo" src="https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>

<h1 align="center">Miracle UI</h1>

<p align="center">面向 Vue 3 移动业务场景的组件与模式库</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/@miracle-web/ui?style=flat-square" alt="npm version" />
    <img src="https://codecov.io/gh/wuxingxi888/miracle/graph/badge.svg?token=FP2KLT5VRY" alt="coverage" />
</p>

<p align="center">
  <a href="https://wuxingxi.top/miracle/">文档网站</a>
  &nbsp;
</p>

---

### 介绍

Miracle UI 是一套**面向 Vue 3 移动 Web / 中后台 H5 团队**的组件与模式库。它不仅提供基础组件，也强调业务场景里的推荐组合方式、主题定制能力，以及可以持续发布的工程基础。

### 适合什么项目

-   需要快速搭建移动端业务页面的 Vue 3 项目
-   需要统一表单、筛选、选择器、上传、导航交互的 H5 团队
-   希望基于主题变量、暗黑模式和文档站沉淀设计规范的项目

### 不适合什么项目

-   以桌面端复杂布局为主的后台系统
-   追求跨端一套代码同时覆盖原生 App 的项目
-   更适合直接使用重量级设计系统或图表生态的场景

### 当前重点

-   业务 H5 场景覆盖
-   轻量且可主题化
-   文档、测试、发布链路可依赖

### 特性

-   高质量移动端组件，覆盖常见业务 H5 交互
-   提供场景组合、接入指南和设计约束，而不只是一份组件目录
-   使用 TypeScript 编写，提供完整类型定义
-   支持按需引入、Tree Shaking、深色模式与主题变量
-   已内置文档站、测试体系和发布脚本，便于持续迭代

### 快速开始

安装组件库：

```bash
pnpm add @miracle-web/ui
```

如果你希望组件和样式按需自动引入，可搭配 `@miracle-web/auto-import-resolver` 与 `unplugin-vue-components` 使用。完整接入示例见文档站的[快速上手](#/zh-CN/quickstart)。

### 脚手架与模板

仓库内提供了 `create-miracle-cli-app` 模板生成器，用于初始化一个可直接启动的 Miracle CLI 项目。模板默认包含：

-   基础组件示例与文档页
-   主题变量扩展入口
-   适合继续沉淀业务组件与场景页的目录结构

### 浏览器支持

支持现代浏览器以及 Chrome >= 51、iOS >= 10.0（与 Vue 3 一致）。

### 维护状态

| 名称 | 框架 | 最新版 | 状态 |
| --- | --- | --- | --- |
| Miracle UI | Vue 3 | ![](https://img.shields.io/npm/v/@miracle-web/ui?style=flat-square) | 持续迭代中 |

## 生态

| 项目 | 描述 |
| --- | --- |
| `@miracle-web/auto-import-resolver` | Miracle 组件与函数式 API 的按需自动引入解析器 |
| `create-miracle-cli-app` | 最小可用的 Miracle CLI 项目模板 |
| `@miracle-web/use` | 可与组件协同使用的组合式 API 集合 |

## 链接

-   [意见反馈](https://github.com/wuxingxi888/miracle/issues)
-   [更新日志](#/zh-CN/changelog)
-   [码云镜像仓库](https://gitee.com/tianqijizhang/miracle.git)

## 贡献

欢迎通过 Issue 和 Pull Request 参与贡献。提交前建议同步查看：

-   文档站中的场景组合与设计令牌页面，保持对外口径一致
-   贡献指南中的测试、文档、发布要求

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议。
