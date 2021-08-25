const toString = Object.prototype.toString;

export function isPlainObject(val) {
  return toString.call(val) === '[object Object]';
}

export function isString(val) {
  return typeof val !== 'undefined' && toString.call(val) === '[object String]';
}

export function isNumber(val) {
  return typeof val !== 'undefined' && toString.call(val) === '[object number]';
}

export function isArray(val) {
  return typeof val !== 'undefined' && toString.call(val) === '[object Array]';
}

export function isEmptyPlainObject(val) {
  return typeof val !== 'undefined' && isPlainObject(val) && Object.keys(val).length === 0;
}

export function isJson(val) {
  if (isPlainObject(val)) {
    return false;
  }

  let _isJsonString = true;
  try {
    _isJsonString = isString(val) ? JSON.parse(val) : false;
  } catch(e) {
    _isJsonString = false;
    console.error('JSON转换失败')
  }
  return _isJsonString;
}
