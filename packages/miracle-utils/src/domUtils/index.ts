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
