<template>
  <view class="main">
    <view class="vm-list">
      <MvCard v-for="card in mvList" :key="card.artistId" :card-item="card" />
    </view>
    <PullDownLoading v-if="load" :status="status" />
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Taro, {
  useLoad,
  useReachBottom,
  usePullDownRefresh,
} from '@tarojs/taro';
import usePaging from '@/hooks/usePaging/index';
import usePullDownLoading from '@/hooks/usePullDownLoading/index';
import { getMvDataList } from '@/service/api/video';
import MvCard from './components/mvCard.vue';
import PullDownLoading from '@/components/PullDownLoading.vue';

const { paging: mvPaging } = usePaging();
const { status, setPullDownStatus, openLoading, closeLoading } =
  usePullDownLoading();
const load = ref<boolean>(false);
const order = ref<string>('上升最快');
const mvList = ref<Api.IMvDataItem[]>([]);

useLoad(() => {
  init();
  load.value = true;
});

const init = async () => {
  try {
    load.value && openLoading();
    const getMvOk = await getMvDataList({ ...mvPaging, order: order.value });
    console.log(getMvOk);
    if (mvList.value.length === mvPaging.limit * 10) {
      setPullDownStatus('3');
    } else {
      mvList.value.push(...getMvOk.data);
      closeLoading();
    }
  } catch (err) {
    closeLoading();
  }
};

// 上拉加载
useReachBottom(() => {
  if (status.value === '1') {
    mvPaging.offset += mvPaging.limit;
    init();
  }
});

// 下拉刷新
usePullDownRefresh(async () => {
  mvPaging.offset = 0;
  await init();
  Taro.stopPullDownRefresh();
});
</script>

<style lang="scss">
@import './video.scss';
</style>
