# Miracle Utils

Built-in composition APIs of Miracle.

## Install

```shell
# with npm
npm i @miracle-web/utils

# with yarn
yarn add @miracle-web/utils

# with pnpm
pnpm add @miracle-web/utils

# with Bun
bun add @miracle-web/utils
```

## 功能模块

-   [browserUtils](#browserutils) - 浏览器环境信息检测工具
-   [common](#common) - 通用工具函数集合
-   [colorUtils](#colorutils) - 颜色处理工具
-   [dateUtils](#dateutils) - 日期处理工具
-   [domUtils](#domutils) - DOM 操作工具函数
-   [download](#download) - 文件下载工具
-   [encryptUtils](#encryptutils) - 加密解密工具
-   [httpUtils](#httputils) - HTTP 请求相关工具
-   [isUtils](#isutils) - 类型检查工具函数
-   [storageUtils](#storageutils) - 存储工具类
-   [stringUtils](#stringutils) - 字符串处理工具
-   [urlUtils](#urlutils) - URL 处理工具
-   [regUtils](#regutils) - 正则表达式工具
-   [directives](#directives) - Vue 指令集合

## 详细说明

### browserUtils

提供浏览器环境信息检测功能，可以获取浏览器内核、版本、系统信息等。

主要函数:

-   `getBrowserInfo()` - 获取浏览器类型和基本信息

### common

通用工具函数集合，包含防抖、节流、深拷贝、深度合并等功能。

主要函数:

-   `debounce()` - 防抖函数
-   `throttle()` - 节流函数
-   `deepMerge()` - 深度合并两个对象
-   `cloneDeep()` - 深拷贝对象或数组
-   `memo()` - 创建记忆化函数
-   `copyToClipboard()` - 复制文本到剪贴板
-   `NOOP()` - 空函数

### colorUtils

颜色处理工具，支持颜色亮度调整和格式转换。

主要函数:

-   `lighten()` - 增加颜色亮度
-   `darken()` - 减少颜色亮度
-   `hexToRgba()` - 将十六进制颜色转换为 RGBA 格式

### dateUtils

日期处理工具，支持日期格式化和相对时间计算。

主要函数:

-   `formatDate()` - 格式化日期字符串或时间戳
-   `timeAgo()` - 将时间转换为相对当前时间的描述

### domUtils

DOM 操作工具函数，提供类名操作、元素偏移计算等功能。

主要函数:

-   `hasClass()` - 检查元素是否具有指定类名
-   `addClass()` - 为元素添加类名
-   `removeClass()` - 从元素中移除类名
-   `getBoundingClientRect()` - 获取元素的大小及其相对于视口的位置

### download

文件下载工具，支持同源和跨域文件下载。

主要函数:

-   `downloadFile()` - 下载文件函数

### encryptUtils

加密解密工具，基于 crypto-js 实现 AES 加密。

主要函数:

-   `encryptAES()` - AES 加密
-   `decryptAES()` - AES 解密

### isUtils

类型检查工具函数，用于判断值的类型。

主要函数:

-   `is()` - 判断值是否为某个类型
-   `isFunction()` - 是否为函数
-   `isObject()` - 是否为对象
-   `isString()` - 是否为字符串
-   `isArray()` - 是否为数组
-   `isNumber()` - 是否为数值
-   `isBoolean()` - 是否为布尔值
-   `isDate()` - 是否为时间
-   `isPromise()` - 是否为 Promise
-   `isDef()` - 是否已定义
-   `isUnDef()` - 是否未定义
-   `isClient()` - 是否为客户端

### storageUtils

存储工具类，支持 localStorage 和 sessionStorage 操作，可选加密存储。

主要类:

-   `Storage` - 存储管理类

### stringUtils

字符串处理工具，包含格式化和特殊处理功能。

主要函数:

-   `fillSpace()` - 在字符串中填充空格
-   `formatNumberWithCommas()` - 千分符分割数字
-   `formatNumber()` - 格式化数字为带中文单位的可读形式

### urlUtils

URL 处理工具，支持参数拼接和提取。

主要函数:

-   `setObjToUrlParams()` - 将对象添加当作参数拼接到 URL 上
-   `getParamsToUrl()` - 从 URL 中提取指定查询参数

### regUtils

正则表达式工具，提供常用的正则验证。

主要函数:

-   `nameReg()` - 姓名验证
-   `IDReg()` - 身份证验证
-   `phoneReg()` - 手机号验证
-   `emailReg()` - 邮箱验证
-   `urlReg()` - URL 验证

### directives

Vue 指令集合，提供常用的 Vue 自定义指令。

包含指令:

-   `lazy` - 图片懒加载指令
-   `slide-in` - 滑入动画指令
-   `ripple` - 波纹效果指令
-   `watermark` - 水印指令
-   `debounce` - 防抖指令
-   `throttle` - 节流指令
-   `longPress` - 长按指令
-   `copy` - 复制指令
-   `draggable` - 拖拽指令

### httpUtils

HTTP 请求相关工具，包含请求重试、取消和转换功能。

主要功能:

-   请求重试机制
-   请求重复取消功能
-   请求转换处理

示例代码:

```ts
import { showDialog, showFailToast, showSuccessToast } from '@miracle-web/ui';
import {
    MiHttpClient,
    formatRequestDate,
    joinTimestamp,
} from '@miracle-web/utils';
import {
    setObjToUrlParams,
    deepMerge,
    urlReg,
    isString,
} from '@miracle-web/utils';

import type {
    RequestTransform,
    GlobalRequestConfig,
    RequestInterceptConfig,
    ResponseInterceptConfig,
    RequestOptions,
    Result,
    RequestErrorConfig,
} from '@miracle-web/utils';

const ToastLoading = showLoadingToast({
    message: '',
    forbidClick: true,
    duration: 5000,
});

const transform: RequestTransform = {
    /**
     * @description: 请求之前处理config
     */
    beforeRequestHook: (config, options: RequestOptions) => {
        const {
            apiUrl,
            joinPrefix,
            urlPrefix,
            joinParamsToUrl,
            formatDate,
            joinTime = true,
        } = options;

        const isUrlStr = urlReg(config.url as string);

        if (!isUrlStr && joinPrefix) {
            config.url = `${urlPrefix}${config.url}`;
        }

        if (!isUrlStr && apiUrl && isString(apiUrl)) {
            config.url = `${apiUrl}${config.url}`;
        }
        const params = config.params || {};
        const data = config.data || false;
        if (config.method?.toUpperCase() === RequestEnum.GET) {
            if (!isString(params)) {
                // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
                config.params = Object.assign(
                    params || {},
                    joinTimestamp(joinTime, false),
                );
            } else {
                // 兼容restful风格
                config.url = `${config.url + params}${joinTimestamp(joinTime, true)}`;
                config.params = undefined;
            }
        } else {
            if (!isString(params)) {
                formatDate && formatRequestDate(params);
                if (
                    Reflect.has(config, 'data') &&
                    config.data &&
                    (Object.keys(config.data).length > 0 ||
                        config.data instanceof FormData)
                ) {
                    config.data = data;
                    config.params = params;
                } else {
                    // params 是添加到 url 的请求字符串中的，用于 get 请求
                    // 非GET请求如果没有提供 data，则将 params 视为 data
                    config.data = params;
                    config.params = undefined;
                }
                if (joinParamsToUrl) {
                    config.url = setObjToUrlParams(config.url as string, {
                        ...config.params,
                        ...config.data,
                    });
                }
            } else {
                // 兼容restful风格
                config.url = config.url + params;
                config.params = undefined;
            }
        }

        // loading
        const { isLoading, loadingText = '' } = options.loadingOptions || {};

        if (isLoading) {
            ToastLoading.open({
                message: loadingText,
            });
        }
        return config;
    },

    /**
     * @description: 请求成功数据处理
     */
    requestSuccessResult: (
        response: ResponseInterceptConfig<Result>,
        options: RequestOptions,
    ) => {
        if (!response.data) {
            throw new Error(' Request has no return value');
        }

        const { isTransformResponse } = options;

        const messageOptions = options.messageOptions || {};
        const {
            isShowMessage,
            isShowSuccessMessage,
            successMessageText,
            isShowErrorMessage,
            errorMessageText,
        } = messageOptions;

        const { code, msg } = response.data;

        const hasSuccess =
            Reflect.has(response.data, 'code') && code === ResultEnum.SUCCESS;

        // 消息处理
        if (isShowMessage) {
            // 自定义成功消息
            if (hasSuccess && isShowSuccessMessage) {
                showSuccessToast(successMessageText || msg);
            }

            // 自定义错误消息
            if (!hasSuccess && isShowErrorMessage) {
                showFailToast(errorMessageText || msg);
                throw new Error(JSON.stringify(response.data));
            }
        }

        //  是否返回转换对象
        if (isTransformResponse) {
            return response.data;
        }

        return response.data;
    },

    /**
     * @description: 请求拦截器处理
     */
    requestInterceptors: (
        config: RequestInterceptConfig,
        options: GlobalRequestConfig,
    ) => {
        const token = '你的token';
        // jwt token
        if (token && config.requestOptions?.withToken) {
            config.headers.Authorization = options.authenticationScheme
                ? `${options.authenticationScheme} ${token}`
                : token;
        }

        return config;
    },

    /**
     * @description: 请求拦截器错误处理
     */
    requestInterceptorsCatch: (error: RequestErrorConfig) => {
        return Promise.reject(error);
    },

    /**
     * @description: 响应拦截器处理
     */
    responseInterceptors: (response: ResponseInterceptConfig) => {
        const { code, msg } = response.data;

        ToastLoading?.close();

        // 业务错误处理
        if (code === ResultEnum.ERROR) {
            showFailToast(msg);
        }
        // token过期提示
        if (code === ResultEnum.TOKEN_EXPIRED || code === ResultEnum.OFFLINE) {
            showDialog({
                title: '提示',
                message: msg,
            })
                .then(() => {})
                .catch(() => {});
        }

        return response;
    },

    /**
     * @description: 响应错误处理
     */
    responseInterceptorsCatch: (error: RequestErrorConfig) => {
        const err: string = error.toString();

        // 网关错误处理
        if (err && err.includes('Network Error')) {
            showDialog({
                title: '网络异常',
                message: '请检查您的网络连接是否正常',
            })
                .then(() => {})
                .catch(() => {});
            return Promise.reject(error);
        }

        return Promise.reject(error);
    },
};

function createHttpClient(opt?: Partial<GlobalRequestConfig>) {
    return new MiHttpClient(
        deepMerge(
            {
                timeout: 10 * 1000,
                // token 前缀 Bearer
                authenticationScheme: 'Bearer',
                // 接口前缀
                prefixUrl: '',

                // 如果是json格式
                headers: { 'Content-Type': ContentTypeEnum.JSON },

                // 数据处理方式
                transform,
                // 配置项，下面的选项都可以在独立的接口请求中覆盖
                requestOptions: {
                    // 默认将prefix 添加到url
                    joinPrefix: true,
                    // 是否返回转换数据
                    isTransformResponse: true,
                    // post请求的时候添加参数到url
                    joinParamsToUrl: false,
                    // 格式化提交参数时间
                    formatDate: true,
                    // 接口地址
                    apiUrl: '',
                    // 接口拼接地址
                    urlPrefix: '',
                    //  是否加入时间戳
                    joinTime: true,
                    // 忽略重复请求
                    ignoreDuplicateRequests: true,
                    // 是否携带token
                    withToken: true,
                    retryOptions: {
                        isRetry: false,
                        maxRetryCount: 3,
                        currentRetryCount: 0,
                        retryWaitTime: 1000,
                    },
                },
            },
            opt || {},
        ),
    );
}

export const http = createHttpClient();
```
