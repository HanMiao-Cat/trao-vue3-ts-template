import { reactive } from 'vue';

interface IPaging {
  limit: number;
  offset: number;
}

const usePaging = () => {
  const paging = reactive<IPaging>({
    limit: 16,
    offset: 0,
  });

  // 修改数量
  const setPagingLimit = (size: number) => {
    paging.limit = size;
  };

  // 修改分页
  const setPagingOffset = (current: number) => {
    paging.offset = current;
  };

  const setPaging = (pagingParams: IPaging) => {
    const { limit, offset } = pagingParams;
    paging.limit = limit;
    paging.offset = offset;
  };

  return {
    paging,
    setPaging,
    setPagingLimit,
    setPagingOffset,
  };
};

export default usePaging;
