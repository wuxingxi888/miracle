import { AxiosError, AxiosInstance } from 'axios';

/**
 * @description: axios 请求失败重试
 */
export function againRequest(err: AxiosError, instance: AxiosInstance) {
  const config = err.config?.requestOptions?.retryOptions;
  // config.retry 具体接口配置的重发次数
  if (!config || !config.retryCount) return Promise.reject(err);

  if (!config.isRetry) return Promise.reject(err);

  // 设置用于跟踪重试计数的变量 默认为 0
  config.__retryCount = config.__retryCount || 0;

  // 检查我们是否已达到重试总数的最大值
  if (
    config.retryCount === undefined ||
    config.__retryCount >= config.retryCount
  ) {
    return Promise.reject(err);
  }
  // 增加重试次数
  config.__retryCount += 1;

  // 延时处理，两次重试之间的时间间隔
  const backOff = new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, config.retryWaitTime || 1000);
  });

  // 重新发起axios请求
  return backOff.then(function () {
    if (!err.config) {
      return Promise.reject(err);
    }
    return instance(err.config);
  });
}
