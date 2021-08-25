// 2021-01-02
import {isNumber, isString} from "./type";

export function formatDate1(date) {
  const _date = date || new Date();
  const year = _date.getFullYear();
  const month = _date.getMonth() + 1;
  const day = _date.getDate();
  const monthStr = month < 10 ? `0${month}` : month;
  const dayStr = day < 10 ? `0${day}` : day;

  return `${year}-${monthStr}-${dayStr}`;
}

export function getTime(timeStamp, format) {
  function digits(value, length) {
    let ret = value.toString();
    if (ret.length < length) {
      ret = '0' * (length - ret.length) + ret;
    }
    return ret;
  }
  const IS_MILLISECOND = isMillisecond(timeStamp);
  // 如果是毫秒格式则转为秒格式
  if (!IS_MILLISECOND) Math.floor((timeStamp *= 1000));
  timeStamp = Number(timeStamp);

  const date = new Date(timeStamp);
  if (format.indexOf('yyyy') >= 0) {
    format = format.replace('yyyy', digits(date.getFullYear(), 4));
  }
  if (format.indexOf('yy') >= 0) {
    format = format.replace('yy', digits(date.getFullYear() % 100, 2));
  }
  if (format.indexOf('MM') >= 0) {
    format = format.replace('MM', digits(date.getMonth() + 1, 2));
  }
  if (format.indexOf('M') >= 0) {
    format = format.replace('M', date.getMonth() + 1);
  }
  if (format.indexOf('dd') >= 0) {
    format = format.replace('dd', digits(date.getDate(), 2));
  }
  if (format.indexOf('d') >= 0) {
    format = format.replace('d', date.getDate());
  }
  if (format.indexOf('w') >= 0) {
    const week = ['日', '一', '二', '三', '四', '五', '六'];
    format = format.replace('w', '周' + week[date.getDay()]);
  }
  if (format.indexOf('HH') >= 0) {
    format = format.replace('HH', digits(date.getHours(), 2));
  }
  if (format.indexOf('H') >= 0) {
    format = format.replace('H', date.getHours());
  }
  if (format.indexOf('hh') >= 0) {
    let hour = date.getHours() % 12;
    if (hour === 0) hour = 12;
    format = format.replace('hh', digits(hour, 2));
  }
  if (format.indexOf('h') >= 0) {
    let hour = date.getHours() % 12;
    if (hour === 0) hour = 12;
    format = format.replace('h', hour);
  }
  if (format.indexOf('mm') >= 0) {
    format = format.replace('mm', digits(date.getMinutes(), 2));
  }
  if (format.indexOf('m') >= 0) {
    format = format.replace('m', date.getMinutes());
  }
  if (format.indexOf('ss') >= 0) {
    format = format.replace('ss', digits(date.getSeconds(), 2));
  }
  if (format.indexOf('s') >= 0) {
    format = format.replace('s', date.getSeconds());
  }
  if (format.indexOf('SSS') >= 0) {
    format = format.replace('SSS', digits(date.getMilliseconds(), 3));
  }
  return format;
};


export function getTimeStamp(dateStr) {
  let timestamp;
  if (isValidDate(dateStr)) {
    timestamp = new Date(dateStr).getTime();
  } else {
    timestamp = new Date().getTime();
  }

  return timestamp;
}

function isValidDate(val) {
  const _date = new Date(val);
  return (isString(val) || isNumber(val)) && _date instanceof Date && !isNaN(_date.getTime());
}


/**
 * @param {Number} timeStamp 判断时间戳格式是否是毫秒
 * @returns {Boolean}
 */
const isMillisecond = timeStamp => {
  const timeStr = String(timeStamp)
  return timeStr.length > 10
}
