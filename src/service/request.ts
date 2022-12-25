import Taro from '@tarojs/taro';
import baseConfig from '@/baseConfig';

const { host, timeout } = baseConfig;

// 请求函数
const request = async <T = any>(option: Taro.request.Option, isAuth = true) => {
  console.log(host + option.url);
  try {
    const responseOk = await Taro.request<ResponseData<T>>({
      ...option,
      timeout,
      url: host + option.url,
      header: {
        Authorization: isAuth
          ? `Bearer ${Taro.getStorageSync('token') || ''}`
          : undefined,
      },
    });
    const { statusCode, data } = responseOk;
    if (statusCode === 200 && data.code === 200) {
      return data;
    } else {
      if (data.msg === 'token expire') {
        // 没有登录或登录过期
      } else {
        throw Error(data.msg || '服务异常！！！');
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export default request;
