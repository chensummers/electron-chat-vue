import {isString} from "./type";
import {jsNativeInteraction} from "./bridgeToApp";

class CheckUser {
  // 校验token
  hasToken() {
    let token = uni.getStorageSync("h5_fosun_doctor_token");

    if (!(token && isString(token))) {
      return false;
    }

    return true;
  }

  // 重新获取token
  // gotoLoginPage() {
  //   jsNativeInteraction('reLogin', '', (result) => {
  //     result = isString(result) ? JSON.parse(result) : result;
  //     uni.setStorageSync("h5_fosun_doctor_token", result.token);
  //   });
  // }

  // 获取token
  getToken() {
    return uni.getStorageSync("h5_fosun_doctor_token");
  }

  // 设置token
  setToken(value) {
    uni.setStorageSync("h5_fosun_doctor_token", value);
  }
}

export default new CheckUser();
