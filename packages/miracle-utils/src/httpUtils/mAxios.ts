declare module 'axios' {
  interface AxiosRequestConfig {
    requestOptions?: RequestOptions;
  }
}

import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
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

export { axios, type AxiosInstance, AxiosRequestConfig, AxiosResponse };

/**
 * @description:  自定义 axios模块
 */
export class MAxios {
  private axiosInstance: AxiosInstance;
  private options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  private getTransform() {
    const { transform } = this.options;
    return transform;
  }

  getAxios(): AxiosInstance {
    return this.axiosInstance;
  }

  configAxios(config: CreateAxiosOptions): void {
    this.axiosInstance = axios.create(config);
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

    this.axiosInstance.interceptors.request.use((config: any) => {
      const { headers: { ignoreCancelToken } = { ignoreCancelToken: false } } =
        config;

      const ignoreCancel =
        ignoreCancelToken ?? this.options.requestOptions?.ignoreCancelToken;

      if (!ignoreCancel) {
        axiosCanceler.addPending(config);
      }

      if (requestInterceptors && isFunction(requestInterceptors)) {
        config = requestInterceptors(config, this.options);
      }

      return config;
    }, undefined);

    // 请求拦截器错误捕获
    requestInterceptorsCatch &&
      isFunction(requestInterceptorsCatch) &&
      this.axiosInstance.interceptors.request.use(
        undefined,
        requestInterceptorsCatch,
      );

    // 响应结果拦截器处理
    this.axiosInstance.interceptors.response.use((res: AxiosResponse<any>) => {
      res && axiosCanceler.removePending(res.config);
      if (responseInterceptors && isFunction(responseInterceptors)) {
        res = responseInterceptors(res);
      }
      return res;
    }, undefined);

    // 响应结果拦截器错误捕获
    responseInterceptorsCatch &&
      isFunction(responseInterceptorsCatch) &&
      this.axiosInstance.interceptors.response.use(
        undefined,
        responseInterceptorsCatch,
      );
  }
}
