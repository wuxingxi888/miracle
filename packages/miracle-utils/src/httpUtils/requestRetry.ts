import { AxiosError, AxiosInstance } from 'axios';
import { RequestErrorConfig, RetryOptions } from './types';

/**
 * @description: axios 请求失败重试机制
 * @param {AxiosError} err - 请求错误对象
 * @param {AxiosInstance} instance - axios 实例
 * @return {Promise} 重试请求或拒绝的Promise
 */
export function requestRetry(
    err: RequestErrorConfig,
    instance: AxiosInstance,
): Promise<any> {
    // 类型断言以访问扩展的属性
    const config = err?.config?.requestOptions?.retryOptions;

    // 验证重试配置
    if (!isValidRetryConfig(config)) {
        return Promise.reject(err);
    }

    // 初始化重试计数器
    config.currentRetryCount = config.currentRetryCount ?? 0;

    // 检查重试次数限制
    if (hasExceededMaxRetries(config)) {
        return Promise.reject(createRetryLimitError(err, config));
    }

    // 增加重试计数器
    config.currentRetryCount += 1;

    // 创建延迟并重试请求
    return createRetryDelay(config.retryWaitTime)
        .then(() => retryRequest(err, instance))
        .catch((error) => Promise.reject(error));
}

/**
 * 验证重试配置是否有效
 */
function isValidRetryConfig(config?: RetryOptions): config is RetryOptions {
    return !!config && config.isRetry && config.maxRetryCount > 0;
}

/**
 * 检查是否超过最大重试次数
 */
function hasExceededMaxRetries(config: RetryOptions): boolean {
    return config.currentRetryCount! >= config.maxRetryCount;
}

/**
 * 创建重试延迟Promise
 */
function createRetryDelay(waitTime?: number): Promise<void> {
    const delay = waitTime ?? 1000;
    return new Promise((resolve) => setTimeout(resolve, delay));
}

/**
 * 重试请求
 */
function retryRequest(err: AxiosError, instance: AxiosInstance): Promise<any> {
    if (!err.config) {
        return Promise.reject(err);
    }
    return instance(err.config);
}

/**
 * 创建重试限制错误
 */
function createRetryLimitError(
    err: AxiosError,
    config: RetryOptions,
): AxiosError {
    const error = new Error(`Max retries exceeded (${config.maxRetryCount})`);
    return Object.assign(err, { message: error.message });
}
