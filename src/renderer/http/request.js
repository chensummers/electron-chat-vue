import { apiUrl } from "./../config/index";
import { isJson } from "../utils/type";
import axios from 'axios'; // 引入axios
import QS from 'qs'
import Vue from 'vue'
// import { jsNativeInteraction } from "../utils/bridgeToApp";
// import checkUser from "../utils/checkUser";

// const HTTP_STATUS = {
//   SUCCESS: 200
// };

// const API_STATUS = {
//   SUCCESS: 200,
//   SERVER_ERROR: 500,
//   UN_AUTHORIZATION: 12001,
//   CODE_ERR: 11004,
//   CODE_LOSE: 11017
// }

// const service = axios.create({
//   header: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// })

// // 请求拦截器

// axios.interceptors.request.use(
//   service.interceptors.request.use(request => {
//     // 每发起一个请求，pendingCount加1
//     // 如果不希望某个接口访问出现loading
//     // 在对应的baseRequest上添加headers: { 'No-Request-Loading': true }即可
//     const requestHeader = {
//       'X-Requested-With': 'XMLHttpRequest',
//       'Content-Type': 'application/json; charset=UTF-8',
//       'Access-Control-Allow-Origin': '*',
//       token: getToken() // 请求头统一添加token
//     }
//     request.headers = Object.assign(request.headers, requestHeader)
//     return request

//   }, error => {
//     return Promise.reject(error)
//   })
// )

// // 响应拦截器
// service.interceptors.response.use(response => {
//   // 每结束一个请求，pendingCount减1
//   // 有可能结束的请求是没有Loading遮罩的，所以最多减到0
//   if (pendingCount) {
//       pendingCount--
//   }
//   if (!pendingCount) {
//       removeMask()
//   }
//   if (!response || !response.data) {
//       ui.Message({
//           message: '服务器返回空',
//           type: 'error',
//           offset: 60
//       })
//   }

//   // 这里根据后端提供的数据进行对应的提示处理
//   if (response.data.errno !== 2000) {
//       ui.Message({
//           message: response.data.errmsg,
//           type: 'error',
//           offset: 60
//       })

//   }
//   return response
// }, error => {
//   removeMask()
//   const status = error.response.status
//   ui.Message({
//       message: '网络异常，错误码:' + status,
//       type: 'error',
//       offset: 60
//   })
//       return Promise.reject(error)
// })    


// // 请求成功，查看是否有业务操作错误
// function checkDataStatus(data = {}) {
//     // console.log(app);
//     let _data = isJson(data) ? JSON.parse(data) : data;

//     if (_data.status === API_STATUS.SUCCESS) {
//       return _data;
//     } else {
//       onErrorFunc(_data);
//     }
//   }

// // 响应拦截，查看请求是否有4xx，5xx错误
// function responseInterceptor(res) {
//     // uni.hideLoading();
//     if (res.statusCode === HTTP_STATUS.SUCCESS) {
//       return checkDataStatus(res.data);
//     } else {
//       onErrorFunc(res);
//     }
//   }

// /***
//  * api请求入口
//  * @param {string} url 前缀：https://boss-test.fengyouhui.net/be/api  后缀：/fosunhealth/platform/specialist/center/home
//  * @param {string} method 'POST' | 'GET'
//  * @param {Object} data 请求参数
//  * @param {Object} configParams 配置参数
//  * @example
// //  * configParams = {
//  *    isFileUpLoad：是否是上传文件，
//  *    isShowLoading：是否打开请求loading动画，
//  *    contentType: 内容类型 'application/json' | 'application/x-www-form-urlencoded'
//  * }
//  * */
// const ApiRequest = async (url, data = {}, method = 'POST', configParams = {}) => {
//   let _url = apiUrl + url;
//   // 上传文件标记
//   let { isFileUpLoad = false } = configParams;
//   // 处理请求params
//   // let params = Object.assign({url: _url, method, data}, normalizationParams(configParams));
//   // // 处理上传文件路径
//   // if (isFileUpLoad) {
//   //   params['filePath'] = data.filePath;
//   // }

//   let params = Object.assign({ url: _url, method, data }, normalizationParams(configParams));
//   if (isFileUpLoad) {
//     params = Object.assign({ url: _url, method, ...data }, normalizationParams(configParams));
//   }

//   try {
//     const responseData = await _requestApi(params, (errorMsg) => {
//       showError(errorMsg);
//     }, isFileUpLoad);

//     return responseInterceptor(responseData);
//   } catch (e) {
//     return null;
//   }
// }

// function _requestApi(params, errorFunc, isFileUpload = false) {
//   let requestFunc = isFileUpload ? uni.uploadFile.bind(this) : uni.request.bind(this);

//   return new Promise((resolve, reject) => {
//     requestFunc({
//       ...params,
//       success(res) {
//         resolve(res);
//       },
//       fail(res) {
//         console.log('请求失败=====>', res);
//         errorFunc('网络异常，请检查网络');
//         reject(res);
//       }
//     })
//   });
// }

// // 处理请求参数
// function normalizationParams(configParams) {
//   let resultParams = Object.create(null);
//   let { isShowLoading = true, contentType = 'application/json', isFileUpLoad = false } = configParams;

//   // 是否展开loading模态框
//   if (isShowLoading) {
//     // uni.showLoading({
//     //   mask: true,
//     //   title: '请稍后'
//     // });
//   }

//   // 获取token
//   const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnbG9iYWxVc2VyQ29kZSI6IklOYVRQSURsNVRPa0EvZmJTRXRPanc9PSIsImRvbWFpbkNvZGUiOiIwMDMiLCJ1c2VyVHlwZSI6MSwidG9rZW5UeXBlIjoxLCJleHAiOjE2MjYzMzk3MTMsImlhdCI6IjIwMjEtMDctMTUgMTY6NTY6NTMiLCJqdGkiOiIxOTJhOWZlNGM1YzA0ZTI0ODFkZWE3ZDIyODhjZjI4MSJ9.SgUxkZqTd36TQps0ks8kduGiKUD4V_iXO1u935rd4D0'//checkUser.getToken();
//   // 设置请求头
//   let _header = Object.create(null);
//   // 上传文件使用uni.uploadFile自带content-type
//   if (!isFileUpLoad) {
//     _header['content-type'] = contentType;
//   }

//   _header['Authorization'] = token;

//   // 设置header
//   resultParams['header'] = _header;

//   return resultParams;
// }

// function showError(message) {
//   // uni.showToast({
//   //   title: message,
//   //   icon: 'none'
//   // })
// }

// function onErrorFunc(res) {
//   let _data = isJson(res.data) ? JSON.parse(res.data) : res.data;
//   let _status = res.status || _data.status;
//   let _message = res.message || _data.message;

//   if (_status === API_STATUS.UN_AUTHORIZATION) {
//     showError('用户登录信息过期');
//     checkUser.gotoLoginPage();
//   } else if (_status === API_STATUS.SERVER_ERROR) {
//     showError(`服务器内部错误,${_message}`);
//   } else if (_status === API_STATUS.CODE_ERR || _status === API_STATUS.CODE_LOSE) {
//     showError(`${_message}`);
//   } else {
//     showError(`${_message}`);
//   }
// }

// export default ApiRequest;

const getToken = () => {
  return 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnbG9iYWxVc2VyQ29kZSI6IklOYVRQSURsNVRPa0EvZmJTRXRPanc9PSIsImRvbWFpbkNvZGUiOiIwMDMiLCJ1c2VyVHlwZSI6MSwidG9rZW5UeXBlIjoxLCJleHAiOjE2MjYzMzk3MTMsImlhdCI6IjIwMjEtMDctMTUgMTY6NTY6NTMiLCJqdGkiOiIxOTJhOWZlNGM1YzA0ZTI0ODFkZWE3ZDIyODhjZjI4MSJ9.SgUxkZqTd36TQps0ks8kduGiKUD4V_iXO1u935rd4D0';
}

class Request {
  constructor() {
    // 创建axios实例
    this._axios = axios.create({
      baseURL: apiUrl,
      timeout: 1000 * 5, // 请求超时时间
      headers: {}
    })
    // 请求拦截
    this._axios.interceptors.request.use(
      config => {
        const requestHeader = {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json; charset=UTF-8',
          // 'Access-Control-Allow-Origin': '*',
          'Authorization': getToken() // 请求头统一添加token
        }
        config.headers = Object.assign(config.headers, requestHeader)
        return config
      },
      error => {
        Promise.reject(error)
      }
    )
  }

  // 根据请求方式，判断参数是放在query中还是body中。
  // 最直观的区别，比如GET请求把参数包含在url中，而POST则通过request body把参数放置在body体中，所以在提交时的参数形式是有区别的
  // 以下列了四种我一般常用请求方式的参数形式，大家可以自行调整
  /**
    * 发送get请求
    * @param {String} url地址
    * @param {Object} query 查询参数
    * @return json数据
    */
  get(url, query = {}) {
    return this._request('get')(url, {
      ...query
    })
  }
  /**
    * 发送post请求
    * @param {String} url地址
    * @param {Object} body 查询参数
    * @return json数据
    */
  post(url, body = {}, headers) {
    let data
    if (this.isFormData(body)) {
      data = body
    } else if (Array.isArray(body)) {
      data = body
    } else {
      data = { ...body }
    }
    return this._request('post', headers)(url, data)
  }
  put(url, body = {}) {
    return this._request('put')(url, {
      ...body
    })
  }
  delete(url, body = {}) {
    return this._request('delete')(url, {
      ...body
    })
  }

  isFormData = v => {
    return Object.prototype.toString.call(v) === '[object FormData]'
  }


  /**
    * 设置请求头
    * @param {Object} header 请求头
    */
  setHeaders(header) {
    Object.keys(header).forEach(key => {
      this._axios.defaults.headers[key] = header[key]
    })
  }

  // 处理请求头 headers
  handleHeaders() {
    const headers = {}
    headers['XMIME-TYPE'] = '3'
    Headers['Content-Type'] = 'application/json; charset=UTF-8'
    return headers
  }

  /**
    * 发送请求
    * @param {String} method 请求方法类型
    * @param headers
    * @returns {function(*=, *=):Promise<unknown>}
    * @private
    */
  _request(method, headers) {
    this.setHeaders(this.handleHeaders()) // 设置统一的请求头
    if (headers) {
      this.setHeaders(headers) // 自定义请求头
    }

    return (url, data, timeout) => {
      const config = {
        url,
        method,
        timeout: timeout || this._axios.defaults.timeout
      } // 构造请求 config

      // 判断请求类型 get post
      const paramType = ['get', 'delete'].indexOf(method) !== -1 ? 'params' : 'data'
      config[paramType] = data
      //参数序列化
      config.paramsSerializer = params => {
        return Qs.stringify(params, { arrayFormat: 'repeat' })
      }

      return new Promise((resolve, reject) => {
        // 发送真正的请求，验证权限，检查404等status
        this._axios
          .request(config)
          .then(response => {
            if (this.handleSuccessStatus(response.data.code, response.data)) {
              if (response.headers['content-type'] !== 'text/plain; charset=urf-8') {
                resolve(
                  // 对响应结果二次包装
                  Object.assign(
                    {
                      success: Number(response.data.code) === 200,
                      data: response.data.data,
                      msg: response.data.msg
                    },
                    response.data
                  )
                ) // 处理返回结果
              } else {
                resolve(response.data)
              }
            }
          }, response => {
            // 处理错误码
            if (response.response) {
              const statusCode = response.response.status
              this.handleErrorStatus(statusCode)
            } else {
              Vue.prototype.$message.error(response.message)
            }
            reject(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }

  // 请求成功，返回错误码
  // 具体状态码跟后台开发人员统一，然后根据状态码进行相应提示
  // 下面是我在项目中的操作，大家可自行调整扩展
  handleSuccessStatus(code, data) {
    let result = ''
    let flag = false
    switch (code) {
      case '20007':
        result = '未查找到二次认证密码！'
        flag = true
        break
      case '20008':
        result = '您的二次认证密码还未修改，请先修改！'
        flag = true
        break
      case '20009':
        result = '您还未开启二次认证，请联系管理员！'
        flag = true
        break
      case '90001':
        result = '请输入二次认证密码！'
        flag = true
        break
      case '90002':
        result = '无操作权限！'
        flag = true
        break
      default:
        break
    }

    // 进行通知
    // $message方法是我按需引入的element-ui中的提示组件，你可以替换成自己的提示组件
    if (result) {
      Vue.prototype.$message.error(result)
    }
    return flag
  }
  // 根据错误码获取错误提示
  handleErrorStatus(statusCode) {
    let errorMsg = ''
    if (statusCode === 500) {
      errorMsg = '数据请求失败，请联系管理员！'
    } else if (statusCode === 404) {
      errorMsg = '请求地址错误！'
    } else if (statusCode === 402) {
      errorMsg = '当前您没有权限操作该数据！'
    } else {
      errorMsg = '请求出错！'
    }
    // 进行通知
    Vue.prototype.$message.error(errorMsg)
  }
}

export default new Request()