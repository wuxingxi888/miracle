import { isObject } from '../isUtils';

/**
 * @param func { T } => 防抖的函数
 * （函数是一种在事件触发后，等待一段时间，如果在等待期间事件再次被触发，则重新开始计时，直到等待时间结束才执行函数。这可以避免在短时间内多次触发同一个事件时多次执行相应的处理函数。）
 * @param wait { number } => 防抖时间(毫秒)
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): T => {
  let timeout: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  } as T;
};

/**
 * @param func { T } => 节流的函数（函数是一种在特定时间内只允许某个函数执行一次的技术。它可以用于限制函数执行的频率）
 * @param limit { number } => 节流时间(毫秒)
 */
export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number,
): T => {
  let inThrottle: boolean;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  } as T;
};

/**
 * 深度合并两个对象
 *
 * 该函数的目的是将两个对象进行深度合并，意味着如果对象的属性值是另一个对象，
 * 则会递归地合并这些内部对象，而不是简单地覆盖它们
 *
 * @param src 源对象，将被合并的对象
 * @param target 目标对象，其属性将被合并到源对象中
 * @returns 返回合并后的对象，具有源对象和目标对象的所有属性
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;

  for (key in target) {
    src[key] = isObject(src[key])
      ? deepMerge(src[key], target[key])
      : (src[key] = target[key]);
  }

  return src;
}

/**
 * 深拷贝一个对象或数组
 * 深拷贝意味着创建一个新对象或数组，其所有嵌套的属性和元素都不会与原始对象共享
 * 这对于修改对象或数组的副本而不影响原始数据非常有用
 *
 * @param obj 需要深拷贝的对象或数组可以是任何类型，但函数和某些特殊对象不会被深拷贝
 * @returns 返回深拷贝后的对象或数组
 */
export function cloneDeep<T>(obj: T): T {
  if (!isObject(obj)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => cloneDeep(item)) as unknown as T;
  }

  const copy: any = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = cloneDeep(obj[key]);
    }
  }

  return copy;
}
