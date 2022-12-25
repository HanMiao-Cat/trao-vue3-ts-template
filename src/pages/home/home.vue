<template>
  <view> 111 </view>
</template>

<script lang="ts" setup>
import { getMvDataList } from '@/service/home';
import { useLoad } from '@tarojs/taro';

useLoad(() => {
  init();
});

const init = async () => {
  const result = await getMvDataList();
  console.log(result);
};
</script>

<style lang="scss">
// import './home.scss';
</style>
