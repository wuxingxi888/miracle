import { isString } from '../isUtils';

/**
 * 视口偏移结果接口
 * left: 元素最左边到文档左侧的距离
 * top: 元素顶部到文档顶部的距离
 * right: 元素最右边到文档右侧的距离
 * bottom: 元素底部到文档底部的距离
 * rightIncludeBody: 元素最左边到文档右侧的距离
 * bottomIncludeBody: 元素底部到文档底部的距离
 */
export interface ViewportOffsetResult {
  left: number;
  top: number;
  right: number;
  bottom: number;
  rightIncludeBody: number;
  bottomIncludeBody: number;
}

/**
 * 去除字符串两端的空白字符
 * @param {string} string - 需要去除空白字符的字符串
 * @returns {string} - 去除空白字符后的字符串
 */
function trim(string: string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
}

/**
 * 检查元素是否具有指定的类名
 * @param {Element} el - DOM 元素
 * @param {string} cls - 要检查的类名
 * @returns {boolean} - 元素是否具有指定的类名
 */
/* istanbul ignore next */
export function hasClass(el: Element, cls: string) {
  if (!el || !cls) {
    return false;
  }
  if (cls.includes(' ')) {
    throw new Error('className should not contain space.');
  }
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return ` ${el.className} `.includes(` ${cls} `);
  }
}

/**
 * 为元素添加类名
 * 支持传入包含多个类名的字符串（通过空格分隔），并逐一添加
 * @param {Element} el - DOM 元素
 * @param {string} cls - 要添加的类名
 */
/* istanbul ignore next */
export function addClass(el: Element, cls: string) {
  if (!el) {
    return;
  }
  let curClass = el.className;
  const classes = (cls || '').split(' ');

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) {
      continue;
    }

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ` ${clsName}`;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/**
 * 从元素中移除类名
 * 支持传入包含多个类名的字符串（通过空格分隔），并逐一移除
 * @param {Element} el - DOM 元素
 * @param {string} cls - 要移除的类名
 */
/* istanbul ignore next */
export function removeClass(el: Element, cls: string) {
  if (!el || !cls) {
    return;
  }
  const classes = cls.split(' ');
  let curClass = ` ${el.className} `;

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) {
      continue;
    }

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(` ${clsName} `, ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

/**
 * 切换元素的类名
 * @param el - DOM 元素
 * @param cls - 要切换的类名
 * @param force - 可选，强制切换行为。如果为 true，则强制添加；如果为 false，则强制移除。
 */
export function toggleClass(el: Element, cls: string, force?: boolean): void {
  if (!el || !cls) return;
  if (cls.includes(' ')) {
    throw new Error('className should not contain space.');
  }

  if (el.classList) {
    // 使用 classList 的 toggle 方法，支持 force 参数
    if (force !== undefined) {
      el.classList.toggle(cls, force);
    } else {
      el.classList.toggle(cls);
    }
  } else {
    // 兼容不支持 classList 的情况
    const curClass = ` ${el.className} `;
    if (force === true || (!force && !curClass.includes(` ${cls} `))) {
      addClass(el, cls);
    } else {
      removeClass(el, cls);
    }
  }
}

/**
 * 在两个类名之间切换
 * @param el - DOM 元素
 * @param classA - 类名 A
 * @param classB - 类名 B
 */
export function toggleBetweenClass(
  el: Element,
  classA: string,
  classB: string,
): void {
  if (!el || !classA || !classB) return;

  if (classA.includes(' ') || classB.includes(' ')) {
    throw new Error('Class names should not contain spaces.');
  }

  if (el.classList) {
    if (el.classList.contains(classA)) {
      el.classList.remove(classA);
      el.classList.add(classB);
    } else if (el.classList.contains(classB)) {
      el.classList.remove(classB);
      el.classList.add(classA);
    } else {
      // 如果两者都不存在，默认添加 classA
      el.classList.add(classA);
    }
  } else {
    // 兼容旧版浏览器
    let curClass = ` ${el.className} `;
    if (curClass.includes(` ${classA} `)) {
      curClass = curClass.replace(` ${classA} `, ` ${classB} `);
    } else if (curClass.includes(` ${classB} `)) {
      curClass = curClass.replace(` ${classB} `, ` ${classA} `);
    } else {
      curClass += ` ${classA}`;
    }
    el.className = curClass.trim();
  }
}

/**
 * 设置CSS变量
 *
 * 此函数用于在指定元素的样式中设置CSS变量，使得能够动态地更新页面的样式
 * 它接受三个参数：变量名（property）、变量值（value）以及一个可选的元素（element）
 * 如果未提供元素参数，默认使用的是document.documentElement，即HTML文档的根元素
 *
 * @param property CSS变量的名称，例如'--variable-name'
 * @param value 要设置的变量值，可以是一个具体的值如'16px'，也可以是null来删除该变量
 * @param element 在哪个HTML元素上设置CSS变量如果没有指定，默认是文档的根元素
 */
export function setCssVariable(
  property: string,
  value: string | null,
  element: HTMLElement = document.documentElement,
) {
  element.style.setProperty(property, value);
}

/**
 * 设置CSS变量
 *
 * 此函数用于在指定元素的样式中设置CSS变量，使得能够动态地更新页面的样式。
 * 它接受两个参数：一个对象（variables），其中键是CSS变量名，值是要设置的变量值；
 * 以及一个可选的元素（element）。如果未提供元素参数，默认使用的是 `document.documentElement`，即HTML文档的根元素。
 *
 * @param variables - 一个对象，其中键是CSS变量名（例如 '--variable-name'），值是要设置的变量值（可以是具体的值如 '16px'，也可以是 `null` 来删除该变量）。
 * @param element - 在哪个HTML元素上设置CSS变量。如果没有指定，默认是文档的根元素。
 */
export function setCssVariables(
  variables: Record<string, string | null>,
  element: HTMLElement = document.documentElement,
) {
  // 遍历 variables 对象中的每一项，将 CSS 变量设置到指定的元素上。
  for (const [property, value] of Object.entries(variables)) {
    element.style.setProperty(property, value);
  }
}

/**
 * 将CSS字符串解析为一个键值对对象
 *
 * 此函数接受一个CSS规则字符串作为输入，并将其解析为一个对象，其中包含CSS属性和对应的值
 * 它通过分号(';')分隔不同的CSS规则，并进一步通过冒号(':')分隔属性名和属性值
 *
 * @param cssStr - 一个包含CSS规则的字符串
 * @returns 返回一个表示CSS规则的键值对对象
 */
export function parseCSS(cssStr: string): Record<string, string> {
  const cssObj: Record<string, string> = {};
  const rules = cssStr.split(';');
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i].trim();
    if (!rule) {
      continue;
    }
    const [prop, val] = rule.split(':');
    if (!prop || !val) {
      continue;
    }
    cssObj[prop.trim()] = val.trim();
  }
  return cssObj;
}

/**
 * 将一个CSS属性和值的对象序列化为一个字符串
 *
 * 此函数的目的是将一个包含CSS属性和值的对象转换为一个字符串形式的CSS样式声明
 * 这在需要动态生成CSS样式时非常有用
 *
 * @param cssObj 一个对象，其键为CSS属性，值为对应的CSS属性值
 * @returns 返回一个字符串，包含了所有CSS属性和值的样式声明，各声明之间以空格分隔
 */
export function serializeCSS(cssObj: Record<string, string>): string {
  const cssArr: string[] = [];
  for (const prop in cssObj) {
    if (Object.prototype.hasOwnProperty.call(cssObj, prop)) {
      cssArr.push(`${prop}: ${cssObj[prop]};`);
    }
  }
  return cssArr.join(' ');
}

/**
 * 获取元素的 DOMRect 对象，如果元素不存在则返回 0
 * @param {Element} element - DOM 元素
 * @returns {DOMRect | number} - 元素的 DOMRect 对象或 0
 */
export function getBoundingClientRect(element: Element): DOMRect | number {
  if (!element || !element.getBoundingClientRect) {
    return 0;
  }
  return element.getBoundingClientRect();
}

/**
 * 获取当前元素的左上偏移量
 * left: 元素最左边到文档左侧的距离
 * top: 元素顶部到文档顶部的距离
 * right: 元素最右边到文档右侧的距离
 * bottom: 元素底部到文档底部的距离
 * rightIncludeBody: 元素最左边到文档右侧的距离
 * bottomIncludeBody: 元素底部到文档底部的距离
 */
export function getViewportOffset(element: Element): ViewportOffsetResult {
  const doc = document.documentElement;

  const docScrollLeft = doc.scrollLeft;
  const docScrollTop = doc.scrollTop;
  const docClientLeft = doc.clientLeft;
  const docClientTop = doc.clientTop;

  const { pageXOffset, pageYOffset } = window;

  const box = getBoundingClientRect(element);

  const {
    left: retLeft,
    top: rectTop,
    width: rectWidth,
    height: rectHeight,
  } = box as DOMRect;

  const scrollLeft = (pageXOffset || docScrollLeft) - (docClientLeft || 0);
  const scrollTop = (pageYOffset || docScrollTop) - (docClientTop || 0);
  const offsetLeft = retLeft + pageXOffset;
  const offsetTop = rectTop + pageYOffset;

  const left = offsetLeft - scrollLeft;
  const top = offsetTop - scrollTop;

  const { clientWidth, clientHeight } = window.document.documentElement;
  return {
    left,
    top,
    right: clientWidth - rectWidth - left,
    bottom: clientHeight - rectHeight - top,
    rightIncludeBody: clientWidth - left,
    bottomIncludeBody: clientHeight - top,
  };
}

/**
 * 在指定容器中根据选择器查询第一个匹配的HTML元素
 *
 * @param selectors CSS选择器字符串，用于匹配元素
 * @param container 可选参数，指定查询的文档或HTML元素容器，默认为整个文档
 * @returns 返回第一个匹配的HTML元素，如果没有找到匹配的元素，则返回undefined
 */

export function querySelector(
  selectors: string,
  container?: Document | HTMLElement,
): HTMLElement | undefined {
  return (
    (container ?? document).querySelector<HTMLElement>(selectors) ?? undefined
  );
}

/**
 * 根据提供的参数获取一个HTML元素
 *
 * @param target - 可以是一个选择器字符串、一个HTMLElement实例或者未定义
 * @param container - 可选参数，定义了搜索的范围，可以是Document对象或HTMLElement对象
 * @returns 返回找到的HTMLElement，如果没有找到则返回未定义
 */
export function getElement(
  target: string | HTMLElement | undefined,
  container?: Document | HTMLElement,
): HTMLElement | undefined {
  if (isString(target)) {
    const selector = target[0] === '#' ? `[id='${target.slice(1)}']` : target;
    return querySelector(selector, container);
  }
  return target;
}
