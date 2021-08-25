import {isJson} from "./type";

class Storage {
  setData(key, value) {
    try {
      value = typeof value === 'string' ? value : JSON.stringify(value);
      localStorage.setItem(key, value);
    } catch (error) {
      return new Error(error);
    }
  }

  getData(key) {
    try {
      const _data = localStorage.getItem(key);
      return isJson(_data) ? JSON.parse(_data) : _data;
    } catch (error) {
      return new Error(error);
    }
  }

  removeKey(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      return new Error(error);
    }
  }

  setSessionData(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return new Error(error);
    }
  }

  getSessionData(key) {
    try {
      const _data = sessionStorage.getItem(key);
      return _data ? JSON.parse(_data) : null;
    } catch (error) {
      return new Error(error);
    }
  }

  removeSessionKey(key) {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      return new Error(error);
    }
  }

  uniSetData(key, value) {
    try {
      uni.setStorageSync(key, value);
    } catch (error) {
      return new Error(error);
    }
  }

  uniGetData(key) {
    try {
      return uni.getStorageSync(key);
    } catch (error) {
      return new Error(error);
    }
  }
}

export default new Storage();
