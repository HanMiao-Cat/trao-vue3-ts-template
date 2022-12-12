<template>
  <view>
    <text>{{ msg }}</text>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import './home.scss'

const msg = ref('什么啊');
</script>
