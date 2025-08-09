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
export function formatNumberWithCommas(num: number | string): string {
    // Convert to number and check if it's valid
    const number = Number(num);
    if (isNaN(number)) {
        return typeof num === 'string' ? num : '0';
    }

    // Handle negative numbers
    const absoluteNumber = Math.abs(number);
    const sign = number < 0 ? '-' : '';

    // Format with commas as thousand separators
    return (
        sign + absoluteNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    );
}

/**
 * 格式化数字，使其更易于阅读
 * 对于非常大的数字，将其转换为以"亿"或"万"为单位的字符串
 * @param num 待格式化的数字
 * @returns 格式化后的数字字符串和单位，如果输入为0或非数字则返回空
 */

/**
 * 格式化数字为带中文单位的可读形式
 * @param num 要格式化的数字
 * @returns {value: string; unit: string} 格式化后的值和单位，或undefined（无效输入时）
 */
export function formatNumber(
    num: number,
): { value: string; unit: string } | undefined {
    // 验证输入
    if (typeof num !== 'number' || isNaN(num)) {
        return undefined;
    }

    // 处理负数
    const isNegative = num < 0;
    const absoluteNum = Math.abs(num);

    let value: string;
    let unit: string = '';

    // 确定单位和格式化值
    if (absoluteNum >= 100000000) {
        value = (absoluteNum / 100000000).toFixed(1);
        unit = '亿';
    } else if (absoluteNum >= 10000) {
        value = (absoluteNum / 10000).toFixed(1);
        unit = '万';
    } else {
        value = absoluteNum.toString();
    }

    // 恢复负号
    if (isNegative) {
        value = '-' + value;
    }

    return { value, unit };
}
