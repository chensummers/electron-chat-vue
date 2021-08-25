// 配置过滤器文件
import moment from 'moment'
/**
 * 截取字符串
 * 参数：
 * str 传入字符
 * num 超过该长度截取
 **/
const limitStr = (str, num) => {
  if (str === null || !(Object.prototype.toString.call(str) === '[object String]')) {
    return '-'
  }
  if (str.length > num) {
    const limitstr = str.substring(0, num)
    return `${limitstr}...`
  } else {
    return str
  }
}

/**
 * 格式化日期
 * 默认格式化 'YYYY-MM-DD'
 * 可令传入自定义格式化如： （'YYYY-MM-DD HH:mm:ss'）
 **/
const formatDate = (val, fmtStr = 'YYYY-MM-DD') => val ? moment(val).format(fmtStr) : ''
/**
 * 格式化日期
 * 默认格式化 'YYYY.MM.DD'
 **/
const formatDateDotted = (val, fmtStr = 'YYYY.MM.DD') => val ? moment(val).format(fmtStr) : ''

export {
  limitStr,
  formatDate,
  formatDateDotted

}
