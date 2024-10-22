# Miracle Touch Emulator

在桌面端上模拟移动端 touch 事件，实现方式来自于 [hammerjs/touchemulator](https://github.com/hammerjs/touchemulator).

## 具体实现

```shell
1. 环境检测：检查当前环境是否支持触摸事件。
2. Polyfill：为不支持 createTouch 和 createTouchList 的浏览器提供兼容性实现。
3. Touch 和 TouchList 构造函数：定义触摸点和触摸列表的构造函数。
4. 事件监听：监听鼠标事件（mousedown, mousemove, mouseup），并在适当的时候触发对应的触摸事件（touchstart, touchmove, touchend）。
5. 事件触发：创建并派发触摸事件，确保事件的属性与鼠标事件一致。
```

## 流程图

<img style="height:500px" src="https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/touchemulator.png">

## Install

```shell
# with npm
npm i @miracle-web/touch-emulator

# with yarn
yarn add @miracle-web/touch-emulator

# with pnpm
pnpm add @miracle-web/touch-emulator

# with Bun
bun add @miracle-web/touch-emulator
```

## 使用指南

直接在代码中引入模块即可，模块会自动完成初始化并生效

```js
import '@miracle-web/touch-emulator';
```

## CDN 引入

```html
<script src="https://fastly.jsdelivr.net/npm/@miracle-web/touch-emulator"></script>
```

## 禁用 touch 模拟

在标签上添加 `data-no-touch-simulate` 属性后，可以使这个标签（以及它的子元素）不触发 `touch` 模拟事件。

```html
<div data-no-touch-simulate />
```
