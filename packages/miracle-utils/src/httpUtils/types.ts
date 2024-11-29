import type { AxiosRequestConfig } from 'axios';
import type { AxiosTransform } from './axiosTransform';

/**
 * 定义一个泛型接口，用于记录键值对数据
 * @template T 键值对应的值的类型
 */
export type Recordable<T = any> = Record<string, T>;

/**
 * Options that can be passed to the `createAxios` function when creating a new Axios instance.
 * This extends the standard AxiosRequestConfig with additional options.
 * 创建 Axios 实例时可以传入的选项。这个接口扩展了标准的 AxiosRequestConfig。
 * 这个选项包括一些额外的配置项，可以用来自定义 Axios 的行为。
 */
export interface CreateAxiosOptions extends AxiosRequestConfig {
  /**
   * Request/response transformation function to be used.
   * 请求/响应转换函数。
   */
  transform?: AxiosTransform;
  /**
   * Request options to be passed to the transformation function.
   * 传递给转换函数的请求选项。
   */
  requestOptions?: RequestOptions;
  /**
   * Authentication scheme to be used, e.g., 'Bearer'.
   * 鉴权方案，例如 'Bearer'。
   */
  authenticationScheme?: string;
}

/**
 * 定义上传文件接口参数
 * @interface UploadFileParams
 */
export interface UploadFileParams {
  // 其他参数
  data?: Recordable;
  // 文件参数接口字段名
  name?: string;
  // 文件
  file: File | Blob;
  // 文件名称
  filename?: string;
  [key: string]: any;
}

/**
 * 定义重试选项接口，用于配置请求重试时的选项
 * @interface RetryOptions
 */
export interface RetryOptions {
  // 是否开启重试
  isRetry: boolean;
  // 重试次数
  retryCount: number;
  // 记录重试次数
  __retryCount?: number;
  // 重试间隔时间
  retryWaitTime: number;
}

/**
 * 定义请求选项接口，用于配置请求时的各种选项
 * @interface RequestOptions
 */
export interface RequestOptions {
  // 请求参数拼接到url
  joinParamsToUrl?: boolean;
  // 格式化请求参数时间
  formatDate?: boolean;
  // 是否显示提示信息
  isShowMessage?: boolean;
  // 是否显示成功信息
  isShowSuccessMessage?: boolean;
  // 成功的文本信息
  successMessageText?: string;
  // 是否显示失败信息
  isShowErrorMessage?: boolean;
  // 错误的文本信息
  errorMessageText?: string;
  // 是否解析成JSON
  isParseToJson?: boolean;
  // 是否加入url
  joinPrefix?: boolean;
  // 接口地址， 不填则使用默认apiUrl
  apiUrl?: string;
  // 请求拼接路径
  urlPrefix?: string;
  // 是否添加时间戳
  joinTime?: boolean;
  // 不进行任何处理，直接返回
  isTransformResponse?: boolean;
  // 是否返回原生响应头
  isReturnNativeResponse?: boolean;
  // 忽略重复请求
  ignoreCancelToken?: boolean;
  // 是否携带token
  withToken?: boolean;
  // 请求重试选项
  retryOptions?: RetryOptions;
}

/**
 * 定义请求结果接口，用于统一处理请求返回的数据格式
 * @template T 返回数据的类型
 */
export interface Result<T = any> {
  code: number;
  message: string;
  result?: T;
  data?: T;
}
