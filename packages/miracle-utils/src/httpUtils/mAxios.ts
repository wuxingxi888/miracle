declare module 'axios' {
  interface AxiosRequestConfig {
    requestOptions?: RequestOptions;
  }
}

import axios from 'axios';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import qs from 'qs';
import JSONbig from 'json-bigint';
import { cloneDeep } from '../common';
import { AxiosCanceler } from './axiosCancel';
import { isFunction } from '../isUtils';
import { ContentTypeEnum, RequestEnum } from './httpEnum';
import type {
  CreateAxiosOptions,
  RequestOptions,
  Result,
  UploadFileParams,
} from './types';
import { againRequest } from './axiosAgainSend';

export {
  axios,
  type AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
};

/**
 * @description:  自定义 axios模块
 */
export class MAxios {
  private axiosInstance: AxiosInstance;
  private options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = this.createAxiosInstance(options);
    this.setupInterceptors();
  }

  private createAxiosInstance(config: CreateAxiosOptions): AxiosInstance {
    return axios.create({
      ...config,
      transformResponse: [this.transformResponseData],
    });
  }

  private transformResponseData(data: any): any {
    try {
      return JSON.parse(JSON.stringify(JSONbig.parse(data)));
    } catch (err) {
      return { data };
    }
  }

  private getTransform() {
    const { transform } = this.options;
    return transform;
  }

  getAxios(): AxiosInstance {
    return this.axiosInstance;
  }

  configAxios(config: CreateAxiosOptions): void {
    this.axiosInstance = this.createAxiosInstance(config);
  }

  setHeader(headers: Record<string, any>): void {
    if (this.axiosInstance) {
      Object.assign(this.axiosInstance.defaults.headers, headers);
    }
  }

  private supportFormData(config: AxiosRequestConfig): AxiosRequestConfig {
    const headers = config.headers || this.options.headers;
    const contentType = headers?.['Content-Type'] || headers?.['content-type'];

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

  get<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request({ ...config, method: RequestEnum.GET }, options);
  }

  post<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request({ ...config, method: RequestEnum.POST }, options);
  }

  put<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request({ ...config, method: RequestEnum.PUT }, options);
  }

  delete<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request({ ...config, method: RequestEnum.DELETE }, options);
  }

  request<T = any>(
    config: AxiosRequestConfig,
    options?: RequestOptions,
  ): Promise<T> {
    let conf: AxiosRequestConfig = cloneDeep(config);

    const transform = this.getTransform();

    const { requestOptions } = this.options;

    const opt: RequestOptions = { ...requestOptions, ...options };

    const { beforeRequestHook, requestFailCatch, requestSuccessResult } =
      transform || {};

    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt);
    }

    conf.requestOptions = opt;

    conf = this.supportFormData(conf);

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          // 请求是否被取消
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
          }
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error) => {
          if (requestFailCatch && isFunction(requestFailCatch)) {
            reject(requestFailCatch(e));
            return;
          }
          reject(e);
        });
    });
  }

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

  private setupInterceptors() {
    const transform = this.getTransform();

    if (!transform) {
      return;
    }

    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch,
    } = transform;

    const axiosCanceler = new AxiosCanceler();

    // 请求拦截器处理
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const {
          headers: { ignoreCancelToken } = { ignoreCancelToken: false },
        } = config;

        const ignoreCancel =
          ignoreCancelToken ?? this.options.requestOptions?.ignoreCancelToken;

        if (!ignoreCancel) {
          axiosCanceler.addPending(config);
        }

        if (requestInterceptors && isFunction(requestInterceptors)) {
          config = requestInterceptors(config, this.options);
        }

        return config;
      },
      (error: Error) => {
        if (requestInterceptorsCatch && isFunction(requestInterceptorsCatch)) {
          return requestInterceptorsCatch(error);
        }
        return Promise.reject(error);
      },
    );

    // 响应拦截器处理
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<any>) => {
        response && axiosCanceler.removePending(response.config);
        if (responseInterceptors && isFunction(responseInterceptors)) {
          return responseInterceptors(response) || response;
        }
        return response;
      },
      (error: Error) => {
        if (!axios.isCancel(error)) {
          againRequest(error, this.axiosInstance);
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
