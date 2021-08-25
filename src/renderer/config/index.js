// 环境 'development' | 'test' | 'prod'
const env = process.env.NODE_ENV;
console.log(env);

// 根据环境配置对象
let apiUrl;
switch (env) {
  case 'local':
    console.log(env)
    apiUrl = window.location.href+'be/api';
    break;
  case 'dev':
    apiUrl = 'https://boss-dev.fengyouhui.net/be/api';
    break;
  case 'test':
    apiUrl = 'https://boss-test.fengyouhui.net/be/api';
    break;
  case 'prod':
    apiUrl = 'https://boss.fengyouhui.net/be/api';
    break;
  default:
    apiUrl = 'https://boss.fengyouhui.net/be/api';
    break;
}
// apiUrl = env === 'production' ? apiUrl : 'http://localhost:8080'

export const iconUrl = 'https://fosun-health-web.oss-cn-hangzhou.aliyuncs.com/imgs';

export {apiUrl};
