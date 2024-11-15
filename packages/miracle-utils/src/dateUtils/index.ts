/**
 * 格式化日期字符串或时间戳
 *
 * @param {string | number} date - 日期字符串或时间戳
 * @param {string} [type] - 日期格式类型，可选，默认为对象形式返回日期和时间的各个部分。支持的格式包括：
 *   - 'YYYY-MM-DD'
 *   - 'YYYY/MM/DD'
 *   - 'YYYY年MM月DD日'
 *   - 'YYYY-MM-DD hh:mm:ss'
 *   - 'YYYY/MM/DD hh:mm:ss'
 *   - 'YYYY年MM月DD日 hh时mm分ss秒'
 *   - 'YYYY-MM'
 *   - 'YYYY/MM'
 *   - 'YYYY年MM月'
 *   - 'MM-DD'
 *   - 'MM/DD'
 *   - 'MM月DD日'
 *   - 'YYYY'
 *   - 'MM'
 *   - 'DD'
 *   - 'hh'
 *   - 'mm'
 *   - 'ss'
 * @returns {string | object} 根据指定的格式返回日期字符串或包含日期和时间各个部分的对象
 */
export function formatDate(
  date: string | number,
  type?:
    | 'YYYY-MM-DD'
    | 'YYYY/MM/DD'
    | 'YYYY年MM月DD日'
    | 'YYYY-MM-DD hh:mm:ss'
    | 'YYYY/MM/DD hh:mm:ss'
    | 'YYYY年MM月DD日 hh时mm分ss秒'
    | 'YYYY-MM'
    | 'YYYY/MM'
    | 'YYYY年MM月'
    | 'MM-DD'
    | 'MM/DD'
    | 'MM月DD日'
    | 'YYYY'
    | 'MM'
    | 'DD'
    | 'hh'
    | 'mm'
    | 'ss',
): string | object {
  if (typeof date !== 'string' && typeof date !== 'number') {
    throw new TypeError('Invalid input type. Expected string or number.');
  }

  let isTimestamp = false;
  if (typeof date === 'string' && !isNaN(Number(date))) {
    const numDate = Number(date);
    if (String(numDate).length === 10) {
      date = numDate * 1000;
      isTimestamp = true;
    }
  }

  const _data = new Date(isTimestamp ? date : Number(date));
  if (isNaN(_data.getTime())) {
    return '';
  }

  function padZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  const year = _data.getFullYear();
  const month = _data.getMonth() + 1;
  const monthStr = padZero(month);
  const day = _data.getDate();
  const dayStr = padZero(day);
  const hours = _data.getHours();
  const hoursStr = padZero(hours);
  const minutes = _data.getMinutes();
  const minutesStr = padZero(minutes);
  const seconds = _data.getSeconds();
  const secondsStr = padZero(seconds);

  switch (type) {
    case 'YYYY-MM-DD':
      return `${year}-${monthStr}-${dayStr}`;
    case 'YYYY/MM/DD':
      return `${year}/${monthStr}/${dayStr}`;
    case 'YYYY年MM月DD日':
      return `${year}年${monthStr}月${dayStr}日`;
    case 'YYYY-MM-DD hh:mm:ss':
      return `${year}-${monthStr}-${dayStr} ${hoursStr}:${minutesStr}:${secondsStr}`;
    case 'YYYY/MM/DD hh:mm:ss':
      return `${year}/${monthStr}/${dayStr} ${hoursStr}:${minutesStr}:${secondsStr}`;
    case 'YYYY年MM月DD日 hh时mm分ss秒':
      return `${year}年${monthStr}月${dayStr}日 ${hoursStr}时${minutesStr}分${secondsStr}秒`;
    case 'YYYY-MM':
      return `${year}-${monthStr}`;
    case 'YYYY/MM':
      return `${year}/${monthStr}`;
    case 'YYYY年MM月':
      return `${year}年${monthStr}月`;
    case 'MM-DD':
      return `${monthStr}-${dayStr}`;
    case 'MM/DD':
      return `${monthStr}/${dayStr}`;
    case 'MM月DD日':
      return `${monthStr}月${dayStr}日`;
    case 'YYYY':
      return `${year}`;
    case 'MM':
      return `${monthStr}`;
    case 'DD':
      return `${dayStr}`;
    case 'hh':
      return `${hoursStr}`;
    case 'mm':
      return `${minutesStr}`;
    case 'ss':
      return `${secondsStr}`;
    default:
      return { year, month, day, hours, minutes, seconds };
  }
}

/**
 * 将给定的时间转换为相对当前时间的描述，例如“刚刚”、“几分钟前”等
 * @param time - 可以是表示时间的字符串或数字，如果是10位数字，将被视为秒数并转换为毫秒
 * @returns 返回相对当前时间的描述字符串
 */
export function timeAgo(time: string | number): string {
  if (String(time).length === 10) {
    time = Number(time) * 1000; // 将 time 转换为数字后再进行乘法运算
  }
  const date = new Date(Number(time));
  const now = new Date();
  const d = now.valueOf() - date.valueOf();
  let str = '';
  if (d < 1000 * 60) {
    str = '刚刚';
  } else if (d < 1000 * 60 * 60) {
    str = `${(d / (1000 * 60)).toFixed()}分钟前`;
  } else if (d < 1000 * 60 * 60 * 24) {
    str = `${(d / (1000 * 60 * 60)).toFixed()}小时前`;
  } else if (d < 1000 * 60 * 60 * 24 * 2) {
    str = '1天前';
  } else if (d < 1000 * 60 * 60 * 24 * 3) {
    str = '2天前';
  } else if (d < 1000 * 60 * 60 * 24 * 4) {
    str = '3天前';
  } else if (date.getFullYear() === now.getFullYear()) {
    str = formatDate(time, 'MM-DD') as string;
  } else {
    str = formatDate(time, 'YYYY-MM-DD') as string;
  }
  return str;
}
