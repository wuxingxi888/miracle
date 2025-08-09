import type {
    AxiosError,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios';
import type { GlobalRequestConfig, RequestOptions, Result } from './types';

/**
 * An abstract class that can be used to customize the behavior of the Axios HTTP client library.
 * 这是一个抽象类，可以用来自定义 Axios 的行为。
 */
export abstract class RequestTransform {
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
        response: AxiosResponse<Result>,
        options: RequestOptions,
    ) => Result | AxiosResponse<Result>;

    /**
     * @description: 请求失败处理
     * @param e - 错误对象
     * @returns 处理后的 Promise 对象
     */
    requestFailCatch?: (error: AxiosError) => Promise<any>;

    /**
     * @description: 请求拦截器
     * @param config - Axios 请求配置
     * @param options - 创建 Axios 实例的选项
     * @returns 处理后的 Axios 请求配置
     */
    requestInterceptors?: (
        config: InternalAxiosRequestConfig,
        options: GlobalRequestConfig,
    ) => InternalAxiosRequestConfig;

    /**
     * @description: 请求拦截器错误处理
     * @param error - 错误对象
     * @description 处理请求拦截阶段发生的错误
     */
    requestInterceptorsCatch?: (error: AxiosError) => Promise<any>;

    /**
     * @description: 响应拦截器
     * @param res - Axios 响应对象
     * @returns 处理后的 Axios 响应对象
     */
    responseInterceptors?: (response: AxiosResponse) => AxiosResponse;

    /**
     * @description: 响应拦截器错误处理
     * @param error - 错误对象
     * @description 处理响应拦截阶段发生的错误
     */
    responseInterceptorsCatch?: (error: AxiosError) => Promise<any>;
}
