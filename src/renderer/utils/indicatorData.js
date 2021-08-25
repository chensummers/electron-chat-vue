import {CHART_COLORS} from './constant.js';

export function getUrlParams() {
  const url = location.hash ? location.hash : location.href;
  if (url.indexOf("?") === -1) return {}
  return url
    .split("?")[1]
    .split("&")
    .map((item) => item.split("="))
    .reduce(
      (obj, item) => ({
        ...obj,
        [item[0]]: item[1],
      }), {}
    );
}

export function formatIndicatorData(data) {
  // 收缩压 5400 舒张压 5401
  const sys_presIndex = data.findIndex(item => item.cdIndexLis === '5400')
  const dia_presIndex = data.findIndex(item => item.cdIndexLis === '5401')
  let presDetail = {},
    presList = [];
  if (sys_presIndex > -1 && dia_presIndex > -1) {
    let sys_presList = data[sys_presIndex].indicatorsInfosDetal || [],
      dia_presList = data[dia_presIndex].indicatorsInfosDetal || [];

    presDetail.cdIndexLis = '54005401';
    presDetail.type = "candle"
    presDetail.patientIndicatorsName = '血压';
    presDetail.patientIndicatorsUint = sys_presList[0].patientIndicatorsUint;

    sys_presList.map(item => {
      // 根据日期，将收缩压和舒张压数据合并
      const { checkTime } = item;
      const { patientIndicatorsValue } = dia_presList.find(ite => ite.checkTime === checkTime) || {};
      presList.push({
        checkTime,
        patientIndicatorsValue: [item.patientIndicatorsValue, patientIndicatorsValue],
        patientIndicatorsUint: item.patientIndicatorsUint
      })
    })
    presDetail.indicatorsInfosDetal = presList;

    // 删除原数据中的舒张压和收缩压
    data.splice(sys_presIndex, 1)
    let dia_presInd = data.findIndex(item => item.cdIndexLis === '5401')
    data.splice(dia_presInd, 1)

    // 插入血压数据
    let pre_index = Math.min(sys_presIndex, dia_presIndex)
    data.splice(pre_index, 0, presDetail)

  }

  data.map(item => {
    item.patientIndicatorsUint = item.indicatorsInfosDetal[0].patientIndicatorsUint
    if (item.cdIndexLis === '54005401') {
      item.type = 'candle'
    }else if(['4039','4033','4038','4031','4037','4029','4415','4435','4035'].includes(item.cdIndexLis)){
      item.type = 'broken'
    }else {
      item.type = 'area'
    }
  })
  return data;
}

export function computedDateColor(dates) {
  let objColor={},colorLen = CHART_COLORS.length;

  for(let i=0,len=dates.length;i<len;i++) {
    objColor[dates[i]] = CHART_COLORS[i%colorLen]
  }

  return objColor;
}

// 降序排列日期
export  function desendingOrderDateArray (arr=[]) {
  return [...new Set([...arr])].sort((a,b)=>new Date(a)-new Date(b));
}

// 升序排列日期
export  function asendingOrderDateArray (arr=[]) {
  return [...new Set([...arr])].sort((a,b)=>new Date(b)-new Date(a));
}

// 获取状态栏高度(不包含微信环境)
export function getStatusHeight (callback) {
  let ua = navigator.userAgent
  let height = 0;
  if(ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    height = 108; //uni.getSystemInfoSync().statusBarHeight;
  } else {
	  try{
		   height = window.JsToNative.statusHeight()+10;
	  }catch(e){

	  }
  }
  return height;
}

// 防止穿透滚动
export function preventDefaultMask(key) {
  this.$nextTick(() => {
    let errMsg = '';
    let domContent = document.querySelectorAll(key);

    if (domContent) {
      if (domContent.length > 1) {
        errMsg = `找到${domContent.length}个key为${key}的dom元素`;
      }
    } else {
      errMsg = `未找到key为${key}的dom元素`;
    }

  	if (errMsg.length <= 0) {
      domContent[0].addEventListener('touchmove',function(e){
        e.preventDefault()//滑动时阻止默认事件即可
      });
    } else {
      throw new Error(errMsg);
    }
  });
}
