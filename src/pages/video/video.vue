<template>
  <view>
    <text>{{ msg }}</text>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import './video.scss';

const msg = ref('你好啊');
</script>

<style></style>
