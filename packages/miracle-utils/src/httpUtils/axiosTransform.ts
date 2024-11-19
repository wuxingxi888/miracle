/**
 * 数据处理类，可以根据项目自行配置
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { CreateAxiosOptions, RequestOptions, Result } from './types';

export abstract class AxiosTransform {
  /**
   * @description: 请求之前处理配置
   * @param config - Axios 请求配置
   * @param options - 请求选项
   * @returns 处理后的 Axios 请求配置
   */
  beforeRequestHook?: (
    config: AxiosRequestConfig,
    options: RequestOptions,
  ) => AxiosRequestConfig;

  /**
   * @description: 请求成功处理
   * @param res - Axios 响应对象
   * @param options - 请求选项
   * @returns 处理后的结果或无返回值
   */
  requestSuccessResult?: (
    res: AxiosResponse<Result>,
    options: RequestOptions,
  ) => Result | AxiosResponse<Result>;

  /**
   * @description: 请求失败处理
   * @param e - 错误对象
   * @returns 处理后的 Promise 对象
   */
  requestFailCatch?: (e: Error) => Promise<any>;

  /**
   * @description: 请求拦截器
   * @param config - Axios 请求配置
   * @param options - 创建 Axios 实例的选项
   * @returns 处理后的 Axios 请求配置
   */
  requestInterceptors?: (
    config: AxiosRequestConfig,
    options: CreateAxiosOptions,
  ) => AxiosRequestConfig;

  /**
   * @description: 请求拦截器错误处理
   * @param error - 错误对象
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description: 响应拦截器
   * @param res - Axios 响应对象
   * @returns 处理后的 Axios 响应对象
   */
  responseInterceptors?: (res: AxiosResponse) => AxiosResponse;

  /**
   * @description: 响应拦截器错误处理
   * @param error - 错误对象
   */
  responseInterceptorsCatch?: (error: Error) => void;
}
