import { isObject, isString } from '../isUtils';
import { Recordable } from './types';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';

/**
 * 根据参数决定是否添加时间戳，用于防止请求缓存
 * @param join 是否添加时间戳
 * @param restful 是否以 RESTful 风格添加时间戳
 * @returns 如果 restful 为 true，返回带时间戳的查询字符串；否则返回包含时间戳属性的对象
 */
export function joinTimestamp<T extends boolean>(
    join: boolean,
    restful: T,
): T extends true ? string : object;

export function joinTimestamp(join: boolean, restful = false): string | object {
    if (!join) {
        return restful ? '' : {};
    }
    const now = new Date().getTime();
    if (restful) {
        return `?_t=${now}`;
    }
    return { _t: now };
}

/**
 * @description: Format request parameter time
 */
export function formatRequestDate(params: Recordable) {
    if (Object.prototype.toString.call(params) !== '[object Object]') {
        return;
    }

    for (const key in params) {
        if (params[key] && params[key]._isAMomentObject) {
            params[key] = params[key].format(DATE_TIME_FORMAT);
        }
        if (isString(key)) {
            const value = params[key];
            if (value) {
                try {
                    params[key] = isString(value) ? value.trim() : value;
                } catch (error) {
                    throw new Error(error as any);
                }
            }
        }
        // 递归处理嵌套对象
        if (isObject(params[key])) {
            formatRequestDate(params[key]);
        }
    }
}
