# useState

### 介绍

一个包含当前状态和更新状态函数的元组。

## 代码演示

### 初始状态为函数

```js
import { useState } from '@miracle-web/use';

export default {
  setup() {
    const initialStateFunc = () => 10;

    const [count, setCount] = useState(initialStateFunc);

    setCount(count + 1);
    console.log(count.value); // -> 11
  },
};
```

### 初始状态为普通值

```js
import { useState } from '@miracle-web/use';

export default {
  setup() {
    const initialStateValue = 20;

    const [count, setCount] = useState(initialStateValue);

    setCount(count + 1);
    console.log(count.value); // -> 21
  },
};
```

## API

### 类型定义

```ts
function useState(
  initialState?: (() => S) | S,
): [Ref<S>, Dispatch<BasicStateAction<S>>];
```

### 参数

| 参数         | 说明     | 类型             | 默认值 |
| ------------ | -------- | ---------------- | ------ |
| initialState | 初始状态 | _(() => S) \| S_ | -      |

### 返回值

| 参数           | 说明     | 类型                            |
| -------------- | -------- | ------------------------------- |
| reactiveState  | 状态值   | _Ref<S>_                        |
| dispatchAction | 更新状态 | _Dispatch<BasicStateAction<S>>_ |
