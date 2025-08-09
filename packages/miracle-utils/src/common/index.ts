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

/**
 * 创建一个记忆化函数，用于缓存计算结果以提高性能
 * @template TDeps 依赖参数类型数组
 * @template TResult 计算结果类型
 * @param getDependencies 获取依赖参数的函数
 * @param fn 需要记忆化的计算函数
 * @param options 配置选项，包括缓存键、调试函数和结果变化时的回调函数
 * @returns 返回一个记忆化后的函数，该函数在依赖参数变化时执行计算
 */
export function memo<TDeps extends readonly any[], TResult>(
    getDependencies: () => [...TDeps],
    fn: (...args: NoInfer<[...TDeps]>) => TResult,
    options: {
        key: any;
        debug?: () => any;
        onChange?: (result: TResult) => void;
    },
): () => TResult {
    // 存储依赖参数和计算结果
    // Store the dependency parameters and the computed result
    let dependencies: any[] = [];
    let result: TResult | undefined;

    return () => {
        let dependencyStartTime: number;
        if (options.key && options.debug) {
            dependencyStartTime = Date.now();
        }

        // 获取最新的依赖参数数组
        // Get the latest array of dependency parameters
        const newDependencies = getDependencies();

        // 检查依赖参数是否发生变化
        // Check if the dependency parameters have changed
        const dependenciesChanged =
            newDependencies.length !== dependencies.length ||
            newDependencies.some(
                (dep: any, index: number) => dependencies[index] !== dep,
            );

        if (!dependenciesChanged) {
            return result!;
        }

        dependencies = newDependencies;

        let computationStartTime: number;
        if (options.key && options.debug) {
            computationStartTime = Date.now();
        }

        // 执行计算函数，并缓存计算结果
        // Execute the computation function and cache the computed result
        result = fn(...newDependencies);

        // 执行 onChange 回调函数，传递计算结果
        // Execute the onChange callback function with the computed result
        options?.onChange?.(result);

        if (options.key && options.debug) {
            if (options?.debug()) {
                const dependencyEndTime =
                    Math.round((Date.now() - dependencyStartTime!) * 100) / 100;
                const computationEndTime =
                    Math.round((Date.now() - computationStartTime!) * 100) /
                    100;
                const computationFpsPercentage = computationEndTime / 16;

                const pad = (str: number | string, num: number) => {
                    str = String(str);
                    while (str.length < num) {
                        str = ` ${str}`;
                    }
                    return str;
                };

                console.info(
                    `%c⏱ ${pad(computationEndTime, 5)} /${pad(dependencyEndTime, 5)} ms`,
                    `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * computationFpsPercentage, 120))}deg 100% 31%);`,
                    options?.key,
                );
            }
        }

        return result;
    };
}

/**
 * 将文本复制到剪贴板
 *
 * 此函数尝试使用Navigator Clipboard API将文本复制到剪贴板如果失败，它将回退到传统的文本选择和复制方法
 * 它接受两个可选回调函数，一个在成功复制时调用，另一个在复制失败时调用
 *
 * @param text 要复制到剪贴板的文本
 * @param onSuccess 成功复制后的回调函数，接收复制的文本作为参数
 * @param onError 复制失败时的回调函数，接收错误信息作为参数
 */
export function copyToClipboard(
    text: string,
    onSuccess?: (text?: any) => void,
    onError?: (error?: any) => void,
) {
    void navigator.clipboard
        .writeText(text)
        .then(() => {
            onSuccess && onSuccess(text);
        })
        .catch((error) => {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            const result = document.execCommand('copy');
            document.body.removeChild(textarea);
            if (!result) {
                onError && onError(error);
            } else {
                onSuccess && onSuccess(text);
            }
        });
}

/**
 * 一个不执行任何操作的函数
 * 通常用作需要一个函数类型参数的默认值
 *
 * @returns {undefined} 该函数不返回任何值
 */
export function NOOP(): undefined {
    return void 0;
}
