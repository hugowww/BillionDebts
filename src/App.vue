<script setup lang="ts">
import MainView from "./views/MainView.vue";
</script>

<template>
  <div class="app-container">
    <h1>App</h1>
    <MainView />
  </div>
</template>

<style scoped>
.app-container {
  padding: 20px;
  background-image: url("../assets/background.jpg"); /* 設定背景圖 */
  background-size: cover; /* 背景圖覆蓋整個區域 */
  min-width: 1600px; /* 設定最小寬度為 1200 像素 */
  overflow-x: auto; /* 超過寬度時產生水平卷軸 */
}
</style>
