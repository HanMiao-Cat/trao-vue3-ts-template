<template>
  <view class="pull-down-loading-content">
    <nut-icon
      v-if="status === '2'"
      name="loading"
      style="margin-right: 2px"
    ></nut-icon>
    <view class="pull-down-loading-text">
      <text :class="{ perch: status === '3' }">{{ getStatusText() }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { pullDownStatus } from '@/hooks/hooks';
interface IProps {
  status: pullDownStatus;
}

const props = withDefaults(defineProps<IProps>(), {});

const statusList: { text: string; key: pullDownStatus }[] = [
  { text: '', key: '1' },
  { text: '加载中...', key: '2' },
  { text: '没有更多了', key: '3' },
];

// 获取text
const getStatusText = () => {
  const text = statusList.find(item => item.key === props.status)?.text;
  return text;
};
</script>

<style lang="scss">
.pull-down-loading-content {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #666;
  .pull-down-loading-text {
    position: relative;
    text-align: center;
    line-height: 40px;
    .perch {
      &::after {
        position: absolute;
        content: '';
        width: 22px;
        height: 1px;
        background-color: #999;
        top: 50%;
        left: -30px;
      }
      &::before {
        position: absolute;
        content: '';
        width: 22px;
        height: 1px;
        background-color: #999;
        top: 50%;
        right: -30px;
      }
    }
  }
}
</style>
