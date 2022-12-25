import pkage from '../package.json';

export default {
  // 请求超时时间
  timeout: 6000,

  // base请求路径, 可在环境变量文件中配置
  host: REQUEST_URL,

  // 版本
  version: pkage.version,
};
