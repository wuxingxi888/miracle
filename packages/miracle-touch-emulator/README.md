# Miracle Touch Emulator

在桌面端上模拟移动端 touch 事件，实现方式来自于 [hammerjs/touchemulator](https://github.com/hammerjs/touchemulator).

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
