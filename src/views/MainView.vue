<template>
  <div class="main-view-container">
    <div class="main-view">main view</div>
    <div class="debug-view">debug view</div>
  </div>
</template>

<script setup lang="ts">
// 這裡可以添加任何需要的邏輯
</script>

<style scoped>
.main-view-container {
  display: flex; /* 使用 Flexbox 佈局 */
}

.main-view {
  width: 842px; /* 設定寬度 */
  height: 595px; /* 設定高度 */
  background-color: #ddd; /* 設定背景顏色 */
  border: 1px solid black; /* 設定邊框 */
  position: relative; /* 使 debug-view 可以絕對定位 */
}

.debug-view {
  flex-grow: 1; /* 使 debug-view 自動增長 */
  margin-left: 10px;
  height: 595px; /* 設定高度為 100% */
  background-color: #eee; /* 設定背景顏色 */
  border: 1px solid black;
}
</style>
