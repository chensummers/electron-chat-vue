// 获取状态栏高度(不包含微信环境)
export function getStatusHeight (callback) {
    let ua = navigator.userAgent
    let height = 0;
    if(ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      height = 88; //uni.getSystemInfoSync().statusBarHeight;
    } else {
        try{
          height = window.JsToNative.statusHeight();
        }catch(err){
          console.log('/util.js [10]--1','err',err);
        }
    }
    return height||88;
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
  
  