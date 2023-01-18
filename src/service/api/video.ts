import request from '../request';

// 获取mv数据
export const getMvDataList = (params: Params.IMvParams) => {
  return request<Api.IMvData>({
    url: '/mv/all',
    data: params,
    method: 'GET',
  });
};
