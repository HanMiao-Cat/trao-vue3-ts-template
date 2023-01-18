<template>
  <view class="mv-card-content">
    <view class="card__album">
      <image :src="cardItem.cover" mode="widthFix"></image>
      <view class="album__info">
        <view class="view-counts">
          <image src="@/image/icons/play_icon.png" mode="widthFix"></image>
          <view class="play-count">{{
            getUnitTransition(cardItem.playCount)
          }}</view>
        </view>
        <view class="duration">{{ getTimeTransition(cardItem.duration) }}</view>
      </view>
    </view>
    <view class="card__desc"
      >{{ cardItem.name }} - {{ cardItem.artistName }}</view
    >
  </view>
</template>

<script lang="ts" setup>
import { getUnitTransition, getTimeTransition } from '@/utils/index';
interface ICardItem<T> {
  cardItem: T;
}

withDefaults(defineProps<ICardItem<Api.IMvDataItem>>(), {});
</script>

<style lang="scss">
.mv-card-content {
  width: calc(50% - 4px);
  height: 100%;
  margin-bottom: 10px;
  .card__album {
    position: relative;
    image {
      width: 100%;
      border-radius: 6px;
      overflow: hidden;
    }
    .album__info {
      position: absolute;
      bottom: 10px;
      font-size: 12px;
      display: flex;
      color: #fff;
      justify-content: space-between;
      padding: 0 6px;
      box-sizing: border-box;
      width: 100%;
      .view-counts {
        display: flex;
        align-items: center;
        image {
          width: 14px;
          border-radius: 0;
          padding-right: 4px;
        }
      }
    }
  }

  .card__desc {
    font-size: 12px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden; //溢出内容隐藏
    text-overflow: ellipsis; //文本溢出部分用省略号表示
    display: -webkit-box; //特别显示模式
    -webkit-line-clamp: 2; //行数
    line-clamp: 2;
    -webkit-box-orient: vertical; //盒子中内容竖直排列
  }
}
</style>
