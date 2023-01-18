import { ref } from 'vue';

const useLoading = (defaultStatus = false) => {
  // 当前loading状态
  const loading = ref<boolean>(defaultStatus);

  // 修改loading状态
  const setLoading = (status: boolean) => {
    loading.value = status;
  };

  return {
    loading,
    setLoading,
  };
};

export default useLoading;
