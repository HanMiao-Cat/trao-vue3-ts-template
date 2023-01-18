import Taro from '@tarojs/taro';
import baseConfig from '@/baseConfig';

const { host, timeout } = baseConfig;

// 请求函数
const request = async <T = any>(option: Taro.request.Option, isAuth = true) => {
  try {
    const responseOk = await Taro.request<T>({
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
    if (statusCode === 200) {
      return data;
    } else {
      throw Error('服务异常！！！');
    }
  } catch (err) {
    throw Error('服务异常！！！');
  }
};

export default request;
