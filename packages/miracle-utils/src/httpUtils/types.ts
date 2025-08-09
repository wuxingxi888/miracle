import type {
    AxiosError,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios';
import type { RequestTransform } from './requestTransform';

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
export interface GlobalRequestConfig extends AxiosRequestConfig {
    /**
     * Request/response transformation function to be used.
     * 请求/响应转换函数。
     */
    transform?: RequestTransform;
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
 * 扩展 InternalAxiosRequestConfig 类型，添加 requestOptions 属性
 */
export interface RequestInterceptConfig<D = any>
    extends InternalAxiosRequestConfig<D> {
    requestOptions?: RequestOptions;
}

/**
 * 扩展 AxiosResponse 类型，修改 config 属性的类型，并支持泛型
 */
export interface ResponseInterceptConfig<T = any, D = any>
    extends AxiosResponse<T, D> {
    config: RequestInterceptConfig<D>;
}

/**
 * 扩展 AxiosError 类型，修改 config 属性的类型，并支持泛型
 */
export interface RequestErrorConfig<T = any, D = any> extends AxiosError<T, D> {
    config?: RequestInterceptConfig<D>;
}

/**
 * 定义请求选项接口，用于配置请求时的各种选项
 * @interface RequestOptions
 */
export interface RequestOptions {
    // 接口地址， 不填则使用默认apiUrl
    apiUrl?: string;
    // 是否加入url
    joinPrefix?: boolean;
    // 请求拼接路径
    urlPrefix?: string;
    // GET请求是否添加时间戳
    joinTime?: boolean;
    // 非GET请求是否参数拼接到url
    joinParamsToUrl?: boolean;
    // 非GET请求格式化参数时间
    formatDate?: boolean;
    // 是否返回转换数据
    isTransformResponse?: boolean;
    // 是否忽略重复请求
    ignoreDuplicateRequests?: boolean;
    // 是否携带token
    withToken?: boolean;
    // 请求重试选项
    retryOptions?: RetryOptions;
    // 请求loading选项
    loadingOptions?: LoadingOptions;
    // 响应提示消息配置
    messageOptions?: MessageOptions;
}

/**
 * 定义重试选项接口，用于配置请求重试时的选项
 * @interface RetryOptions
 */
export interface RetryOptions {
    // 是否开启重试
    isRetry: boolean;
    // 最大重试次数
    maxRetryCount: number;
    // 当前重试次数
    currentRetryCount?: number;
    // 重试间隔时间
    retryWaitTime: number;
}

/**
 * 定义请求Loading，用于配置是否显示请求Loading
 */
export interface LoadingOptions {
    // 是否显示请求Loading
    isLoading?: boolean;
    // 请求Loading的文本
    loadingText?: string;
}

/**
 * 定义响应成功提示，用于配置是否显示响应成功提示
 */
export interface MessageOptions {
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
 * 定义请求结果接口，用于统一处理请求返回的数据格式
 * @template T 返回数据的类型
 */
export interface Result<T = any> {
    /** 状态码，用于标识请求处理结果 */
    code: number;
    /** 消息描述，通常包含请求结果的详细信息 */
    message: string;
    /** 返回的数据，可选，类型由泛型参数T确定 */
    data?: T;
    /** 其他可能存在的属性 */
    [key: string]: any;
}
