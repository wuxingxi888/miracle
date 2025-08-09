import axios from 'axios';

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import type {
    GlobalRequestConfig,
    RequestInterceptConfig,
    ResponseInterceptConfig,
    RequestErrorConfig,
    RequestOptions,
    Result,
    UploadFileParams,
} from './types';

import qs from 'qs';
import JSONbig from 'json-bigint';
import { cloneDeep } from '../common';
import { isFunction } from '../isUtils';
import { ContentTypeEnum, RequestEnum } from './httpEnum';
import { requestRetry } from './requestRetry';
import { RequestCanceler } from './requestCanceler';

export { axios };

/**
 * @description: 自定义 axios 封装类，支持请求拦截、响应拦截、自动重试、取消请求等功能
 */
export class MiHttpClient {
    /** axios 实例 */
    private axiosInstance: AxiosInstance;
    /** axios 配置项 */
    private options: GlobalRequestConfig;

    /**
     * 构造函数，初始化 axios 实例和拦截器
     * @param options axios 配置项
     */
    constructor(options: GlobalRequestConfig) {
        this.options = options;
        this.axiosInstance = this.createAxiosInstance(options);
        this.setupInterceptors();
    }

    /**
     * 创建 axios 实例，统一设置 transformResponse
     * @param config axios 配置项
     */
    private createAxiosInstance(config: GlobalRequestConfig): AxiosInstance {
        return axios.create({
            ...config,
            transformResponse: [this.transformResponseData],
        });
    }

    /**
     * 响应数据转换，支持大数处理
     * @param data 响应数据
     */
    private transformResponseData(data: any): any {
        try {
            return JSON.parse(JSON.stringify(JSONbig.parse(data)));
        } catch (err) {
            return { data };
        }
    }

    /** 获取 transform 配置 */
    private getTransform() {
        return this.options.transform;
    }

    /** 获取 axios 实例 */
    getAxios(): AxiosInstance {
        return this.axiosInstance;
    }

    /**
     * 重新配置 axios 实例
     * @param config 新的 axios 配置项
     */
    configAxios(config: GlobalRequestConfig): void {
        this.axiosInstance = this.createAxiosInstance(config);
    }

    /**
     * 批量设置 header
     * @param headers 头部对象
     */
    setHeader(headers: Record<string, any>): void {
        if (this.axiosInstance) {
            Object.assign(this.axiosInstance.defaults.headers, headers);
        }
    }

    /**
     * 支持 formData 格式的请求
     * @param config 请求配置
     */
    private supportFormData(config: AxiosRequestConfig): AxiosRequestConfig {
        const headers = config.headers || this.options.headers;
        const contentType =
            headers?.['Content-Type'] || headers?.['content-type'];
        if (
            contentType === ContentTypeEnum.FORM_URLENCODED &&
            Reflect.has(config, 'data') &&
            config.method?.toUpperCase() !== RequestEnum.GET
        ) {
            return {
                ...config,
                data: qs.stringify(config.data, { arrayFormat: 'brackets' }),
            };
        }
        return config;
    }

    /** GET 请求 */
    get<T = any>(
        config: AxiosRequestConfig,
        options?: RequestOptions,
    ): Promise<T> {
        return this.request({ ...config, method: RequestEnum.GET }, options);
    }

    /** POST 请求 */
    post<T = any>(
        config: AxiosRequestConfig,
        options?: RequestOptions,
    ): Promise<T> {
        return this.request({ ...config, method: RequestEnum.POST }, options);
    }

    /** PUT 请求 */
    put<T = any>(
        config: AxiosRequestConfig,
        options?: RequestOptions,
    ): Promise<T> {
        return this.request({ ...config, method: RequestEnum.PUT }, options);
    }

    /** DELETE 请求 */
    delete<T = any>(
        config: AxiosRequestConfig,
        options?: RequestOptions,
    ): Promise<T> {
        return this.request({ ...config, method: RequestEnum.DELETE }, options);
    }

    /**
     * 通用请求方法，支持请求钩子、自动重试、错误处理等
     * @param config 请求配置
     * @param options 请求选项
     */
    request<T = any>(
        config: AxiosRequestConfig,
        options?: RequestOptions,
    ): Promise<T> {
        let conf: GlobalRequestConfig = cloneDeep(config);
        const transform = this.getTransform();
        const { requestOptions } = this.options;
        const opt: RequestOptions = { ...requestOptions, ...options };
        const { beforeRequestHook, requestFailCatch, requestSuccessResult } =
            transform || {};
        // 请求前钩子
        if (beforeRequestHook && isFunction(beforeRequestHook)) {
            conf = beforeRequestHook(conf, opt);
        }
        conf.requestOptions = opt;
        conf = this.supportFormData(conf);
        return new Promise((resolve, reject) => {
            this.axiosInstance
                .request<any, AxiosResponse<Result>>(conf)
                .then((res: AxiosResponse<Result>) => {
                    // 判断请求是否被取消
                    const isCancel = axios.isCancel(res);
                    if (
                        requestSuccessResult &&
                        isFunction(requestSuccessResult) &&
                        !isCancel
                    ) {
                        try {
                            const ret = requestSuccessResult(res, opt);
                            resolve(ret as T);
                        } catch (err) {
                            reject(err || new Error('request error!'));
                        }
                        return;
                    } else {
                        reject({
                            data: res,
                            code: -1,
                            message: '取消重复请求',
                        });
                    }
                    resolve(res as unknown as Promise<T>);
                })
                .catch((error: RequestErrorConfig) => {
                    if (requestFailCatch && isFunction(requestFailCatch)) {
                        reject(requestFailCatch(error));
                        return;
                    }
                    reject(error);
                });
        });
    }

    /**
     * 文件上传方法，支持附加额外数据
     * @param config 请求配置
     * @param params 文件参数
     */
    uploadFile<T = any>(config: AxiosRequestConfig, params: UploadFileParams) {
        if (typeof window === 'undefined' || !window.FormData) {
            throw new Error('FormData is not supported in this environment');
        }
        const formData = new window.FormData();
        const customFilename = params.name || 'file';
        if (params.filename) {
            formData.append(customFilename, params.file, params.filename);
        } else {
            formData.append(customFilename, params.file);
        }
        if (params.data) {
            Object.keys(params.data).forEach((key) => {
                const value = params.data![key];
                if (Array.isArray(value)) {
                    value.forEach((item) => {
                        formData.append(`${key}[]`, item);
                    });
                    return;
                }
                formData.append(key, params.data![key]);
            });
        }
        return this.axiosInstance.request<T>({
            method: 'POST',
            data: formData,
            headers: {
                'Content-type': ContentTypeEnum.FORM_DATA,
                ignoreCancelToken: true,
            },
            ...config,
        });
    }

    /**
     * 设置请求和响应拦截器，支持取消重复请求、自动重试、钩子处理
     */
    private setupInterceptors() {
        const transform = this.getTransform();

        if (!transform) return;

        const {
            requestInterceptors,
            requestInterceptorsCatch,
            responseInterceptors,
            responseInterceptorsCatch,
        } = transform;

        const requestCanceler = new RequestCanceler();

        // 请求拦截器
        this.axiosInstance.interceptors.request.use(
            (config: RequestInterceptConfig) => {
                // 接口级忽略配置
                const singleIgnore =
                    config?.requestOptions?.ignoreDuplicateRequests ?? true;

                // 全局级忽略配置
                const globalIgnore =
                    this.options.requestOptions?.ignoreDuplicateRequests ??
                    true;

                // 优先取接口配置，没有则取全局配置
                const ignore =
                    singleIgnore === true ? globalIgnore : singleIgnore;

                if (!ignore) {
                    requestCanceler.addPending(config);
                }

                try {
                    if (
                        requestInterceptors &&
                        isFunction(requestInterceptors)
                    ) {
                        config = requestInterceptors(config, this.options);
                    }
                } catch (error) {
                    return Promise.reject(error);
                }
                return config;
            },
            (error: RequestErrorConfig) => {
                if (
                    requestInterceptorsCatch &&
                    isFunction(requestInterceptorsCatch)
                ) {
                    return requestInterceptorsCatch(error);
                }
                return Promise.reject(error);
            },
        );

        // 响应拦截器
        this.axiosInstance.interceptors.response.use(
            (response: ResponseInterceptConfig) => {
                try {
                    const { config } = response;
                    // 接口级忽略配置
                    const singleIgnore =
                        config.requestOptions?.ignoreDuplicateRequests ?? true;

                    // 全局级忽略配置
                    const globalIgnore =
                        this.options.requestOptions?.ignoreDuplicateRequests ??
                        true;

                    // 优先取接口配置，没有则取全局配置
                    const ignore =
                        singleIgnore === true ? globalIgnore : singleIgnore;

                    // 如果配置为不忽略重复请求（即需要取消重复请求）
                    if (!ignore) {
                        requestCanceler.removePending(config);
                    }

                    if (
                        responseInterceptors &&
                        isFunction(responseInterceptors)
                    ) {
                        return responseInterceptors(response) || response;
                    }
                } catch (error) {
                    return Promise.reject(error);
                }
                return response;
            },
            (error: RequestErrorConfig) => {
                if (!axios.isCancel(error)) {
                    requestRetry(error, this.axiosInstance);
                }
                if (
                    responseInterceptorsCatch &&
                    isFunction(responseInterceptorsCatch)
                ) {
                    return responseInterceptorsCatch(error);
                }
                return Promise.reject(error);
            },
        );
    }
}
