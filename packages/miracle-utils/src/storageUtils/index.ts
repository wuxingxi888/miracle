// 导入加密和解密工具函数
import { encryptAES, decryptAES } from '../encryptUtils';

/**
 * 定义全局配置接口
 * @property type 存储类型，可选值为 'localStorage' 或 'sessionStorage'
 * @property prefix 存储键的前缀
 * @property isEncrypt 是否对存储的数据进行加密
 */
export interface globalConfig {
  type: 'localStorage' | 'sessionStorage';
  prefix: string;
  isEncrypt: boolean;
}

/**
 * 存储管理类，用于简化对浏览器存储的访问和管理
 */
export default class Storage {
  // 默认的全局配置
  private defaultConfig: globalConfig = {
    type: 'localStorage',
    prefix: 'miracle_storage',
    isEncrypt: false,
  };

  /**
   * 构造函数，用于初始化存储管理类
   * @param config 全局配置，用于覆盖默认配置
   */
  constructor(config: globalConfig) {
    this.defaultConfig = Object.assign(this.defaultConfig, config);
  }

  /**
   * 自动给键添加前缀
   * @param key 需要添加前缀的键
   * @returns 添加前缀后的键
   */
  private autoAddPreFix = (key: string) => {
    const prefix = this.defaultConfig.prefix || '';
    return `${prefix}_${key}`;
  };

  /**
   * 自动移除键的前缀
   * @param key 需要移除前缀的键
   * @returns 移除前缀后的键
   */
  private autoRemovePreFix = (key: string) => {
    const lineIndex = this.defaultConfig.prefix.length + 1;
    return key.substr(lineIndex);
  };

  /**
   * 存储数据到指定的存储类型中
   * @param key 存储的键
   * @param value 存储的值，如果为 '', null 或 undefined，则存储为null
   * @returns 总是返回true，表示操作成功
   */
  set(key: string, value: any) {
    if (value === '' || value === null || value === undefined) {
      value = null;
    }

    window[this.defaultConfig.type].setItem(
      this.autoAddPreFix(key),
      this.defaultConfig.isEncrypt
        ? encryptAES(JSON.stringify(value))
        : JSON.stringify(value),
    );
    return true;
  }

  /**
   * 从存储中获取数据
   * @param key 获取的键
   * @returns 如果键不存在或存储中无数据，则返回null，否则返回存储的数据
   */
  get(key: string) {
    if (this.defaultConfig.prefix) {
      key = this.autoAddPreFix(key);
    }
    if (!window[this.defaultConfig.type].getItem(key)) {
      return null;
    }

    const storageVal = this.defaultConfig.isEncrypt
      ? JSON.parse(
          decryptAES(window[this.defaultConfig.type].getItem(key) as string),
        )
      : JSON.parse(window[this.defaultConfig.type].getItem(key) as string);

    return storageVal.value;
  }

  /**
   * 获取所有存储的数据
   * @returns 包含所有存储数据的对象
   */
  getAll() {
    const storageList: any = {};
    const keys = Object.keys(window[this.defaultConfig.type]);
    keys.forEach((key) => {
      const value = this.get(this.autoRemovePreFix(key));
      if (value !== null) {
        storageList[this.autoRemovePreFix(key)] = value;
      }
    });
    return storageList;
  }

  /**
   * 获取存储中的数据项数量
   * @returns 存储中的数据项数量
   */
  getLength() {
    return window[this.defaultConfig.type].length;
  }

  /**
   * 从存储中移除指定的项
   * @param key 需要移除的项的键
   */
  remove(key: string) {
    if (this.defaultConfig.prefix) {
      key = this.autoAddPreFix(key);
    }
    window[this.defaultConfig.type].removeItem(key);
  }

  /**
   * 清空所有存储的数据
   */
  clear() {
    window[this.defaultConfig.type].clear();
  }
}
