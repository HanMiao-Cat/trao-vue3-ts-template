import { ref } from 'vue';
import type { pullDownStatus } from '../hooks';

const usePullDownLoading = () => {
  // '1'关闭 ‘2’开启 ‘3’没有更多
  const status = ref<pullDownStatus>('1');

  const setPullDownStatus = (params: pullDownStatus) => {
    status.value = params;
  };

  // 开启加载
  const openLoading = () => {
    status.value = '2';
  };

  // 关闭加载
  const closeLoading = () => {
    status.value = '1';
  };

  return {
    status,
    setPullDownStatus,
    openLoading,
    closeLoading,
  };
};

export default usePullDownLoading;
