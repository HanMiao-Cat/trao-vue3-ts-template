import request from './request';

export const getMvDataList = () => {
  return request<any>({
    url: '/banner',
    data: { type: 0 },
    method: 'GET',
  });
};
