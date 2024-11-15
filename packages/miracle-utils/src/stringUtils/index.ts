import { isNumber } from '../isUtils';

/**
 * 在字符串中填充空格
 * @param param 参数
 * @returns
 */
export function fillSpace({ val, oldVal, step }: Record<string, any>): string {
  let res = val;
  if (val.length > (oldVal?.length || 0)) {
    if (step.includes(val.length)) {
      const valLength = val.length;
      res = `${val.substr(0, valLength - 1)} ${val[valLength - 1]}`;
    }
  } else if (step.includes(val.length)) {
    res = val.replace(/\s*$/g, '');
  }
  return res;
}

/**
 * 千分符分割
 * @param num 数字
 * @returns 1,000
 */
export function splitThousandSeparator(num: number | string): string {
  let tempnum = Number(num);
  let prefix = '';
  if (tempnum < 0) {
    tempnum *= -1;
    prefix = '-';
  }
  const DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
  const MILI_PATTERN = /(?=(?!\b)(\d{3})+\.?\b)/g;
  const str: string = tempnum
    .toString()
    .replace(DIGIT_PATTERN, (m) => m.replace(MILI_PATTERN, ','));
  return prefix + str;
}

/**
 * 格式化数字，使其更易于阅读
 * 对于非常大的数字，将其转换为以"亿"或"万"为单位的字符串
 * @param num 待格式化的数字
 * @returns 格式化后的数字字符串和单位，如果输入为0或非数字则返回空
 */

export function formatNumber(
  num: number,
): { value: string; unit: string } | void {
  if (!isNumber(num) || isNaN(num)) return;

  let value = '';
  let unit = '';

  if (num > 100000000) {
    value += (num / 100000000).toFixed(1);
    unit = '亿';
  } else if (num > 10000) {
    value += (num / 10000).toFixed(1);
    unit = '万';
  } else {
    value += num.toString();
  }

  return { value, unit };
}
