<template>
  <div class="main-footer">
    <div
      class="progress"
      role="progressbar"
      aria-valuenow="75"
      aria-valuemin="0"
      aria-valuemax="100">
      <div
        class="bg-danger progress-bar progress-bar-striped progress-bar-animated"
        style="width: 75%"></div>
    </div>
    <div class="footer-content d-flex justify-content-between">
      <div>+${{ formatNumber(st.totalIncomeSec) }}/s</div>
      <div>${{ formatNumber(st.currentBalance) }}</div>
      <div>
        <span> -${{ formatNumber(st.currentDebtsRevenue) }} </span>
        <span style="font-size: 12px">
          (-${{ formatNumber(st.currentDebts) }})</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from "../stores/store";
const st = store();

// 格式化數字，加入千位分隔符
const formatNumber = (num: number): string => {
  return Math.round(num).toLocaleString("en-US");
};
</script>
<style scoped>
@import "../styles/ui.styl";
</style>
