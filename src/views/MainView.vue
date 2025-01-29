<template>
  <div class="main-view-container">
    <div class="main-view d-flex flex-column">
      <Header
        :current-tab="st.currentTab"
        @business-click="handleBusinessClick"
        @talent-click="handleTalentClick"
        @rebirth-click="handleRebirthClick"
        @statistics-click="handleStatisticsClick"
        @settings-click="handleSettingsClick" />

      <div class="main-body flex-grow-1">
        <TabBusiness v-if="st.currentTab === 'business'" />
        <TabTalent v-if="st.currentTab === 'talent'" />
        <TabRebirth v-if="st.currentTab === 'rebirth'" />
        <TabStatistics v-if="st.currentTab === 'statistics'" />
        <TabSetting v-if="st.currentTab === 'settings'" />
      </div>
      <Footer />
    </div>
    <div class="debug-view">debug view</div>
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import TabBusiness from "./TabBusiness.vue";
import TabTalent from "./TabTalent.vue";
import TabRebirth from "./TabRebirth.vue";
import TabStatistics from "./TabStatistics.vue";
import TabSetting from "./TabSetting.vue";
import { store } from "../stores/store";

const st = store();

// 定義事件處理函數
const handleBusinessClick = () => {
  st.setTab("business");
};

const handleTalentClick = () => {
  st.setTab("talent");
};

const handleRebirthClick = () => {
  st.setTab("rebirth");
};

const handleStatisticsClick = () => {
  st.setTab("statistics");
};

const handleSettingsClick = () => {
  st.setTab("settings");
};

st.initEngine();
st.startDebts();
</script>

<style scoped>
@import "../styles/ui.styl";
.main-view-container {
  display: flex; /* 使用 Flexbox 佈局 */
}

.debug-view {
  flex-grow: 1; /* 使 debug-view 自動增長 */
  margin-left: 10px;
  height: 595px; /* 設定高度為 100% */
  background-color: #eee; /* 設定背景顏色 */
  border: 1px solid black;
}
</style>
