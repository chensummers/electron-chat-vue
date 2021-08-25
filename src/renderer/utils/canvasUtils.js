import {isArray} from "./type";

// 计算列表中最大最小值
export function getMaxAndMinValue(list) {
  let minValue, maxValue;
  if (isArray(list) && list.length > 0) {
    let _list = list.slice();
    _list.forEach((item, index) => {
      let value = parseFloat(item.value);
      // console.log('value', value);
      if (index === 0) {
        minValue = maxValue = value;
      } else {
        if (value <= minValue) {
          minValue = value;
        }
        if (value >= maxValue) {
          maxValue = value;
        }
      }
    });
  } else {
    minValue = maxValue = 0;
  }

  return {
    maxValue, minValue
  }
}


// 计算每1px等于多少数值
export function getEveryPixelValue(maxValue, minValue, height, padding) {
  let _height = height - padding.paddingBottom - padding.paddingTop;
  let _diffValue = maxValue - minValue;

  return _diffValue / _height;
}

// 计算canvas宽度
export function getCanvasWidth(list, listItemWidth, id, paddingRow) {
  let _minWidth = document.getElementById(id).offsetWidth;

  let _listLength = list.length;
  let _calcWidth = (_listLength - 1) * listItemWidth + paddingRow;

  return _calcWidth > _minWidth ? _calcWidth : _minWidth;
}

export function hexToRgba(hex, opacity) {
  let red = parseInt("0x" + hex.slice(1, 3));
  let green = parseInt("0x" + hex.slice(3, 5));
  let blue = parseInt("0x" + hex.slice(5, 7));
  let rgba = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

  return rgba;
}
