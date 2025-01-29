<template>
  <div class="business-view d-flex flex-row h-100">
    <div class="business-left">
      <div class="business-list">
        <div class="business-item" @click="handleBusinessClick('agriculture')">
          <div>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m21.5 14 1 2h1.5v-6h-1.5l-1 2h-4.828l3.2-4.359-6.701-6.692-1.801 1.409c-.138-.168-.284-.331-.438-.484-2.497-2.494-6.559-2.494-9.056 0-1.272 1.27-1.954 3.03-1.87 4.779l-.006 4.015 10.183 10.17 5.02-6.838zm-19.495-7.393c-.059-1.235.41-2.445 1.285-3.318.859-.857 1.986-1.287 3.114-1.287s2.256.429 3.115 1.287c.097.096.188.197.275.301l-7.794 6.092.004-3.075zm7.944 11.17-6.611-6.602 9.672-7.561 4.233 4.228zm13.214 3.385c-.616.616-1.482.795-2.163.829v2.008h-2v-2.004c-.656-.025-1.525-.195-2.163-.833-1.163-1.163-.775-3.101-.775-3.101s1.938-.388 3.101.775c.541.541.744 1.248.809 1.851.094-.603.324-1.31.865-1.851 1.163-1.163 3.163-.837 3.163-.837s.326 2-.837 3.163z" />
            </svg>
          </div>
        </div>
        <div
          class="business-item"
          @click="handleBusinessClick('semiconductor')">
          <div>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z" />
              <path d="M3,6h19v2H2z" />
              <path d="M0,11h22v2H0z" />
              <path d="M3,16h19v2H3z" />
              <path d="M6,3v19h2V3z" />
              <path d="M11,0v22h2V0z" />
              <path d="M16,3v19h2V3z" />
              <path d="M6,6h6v6H6z" />
              <path d="M11,16h6v7H11z" />
            </svg>
          </div>
        </div>
        <div class="business-item disabled">
          <div>金</div>
        </div>
        <div class="business-item disabled">
          <div>運</div>
        </div>
        <div class="business-item disabled">
          <div>食</div>
        </div>
        <div class="business-item disabled">
          <div>醫</div>
        </div>
        <div class="business-item disabled">
          <div>樂</div>
        </div>
        <div class="business-item disabled">
          <div>遊</div>
        </div>
        <div class="business-item disabled">
          <div>購</div>
        </div>
        <div class="business-item disabled">
          <div>工</div>
        </div>
      </div>
    </div>
    <div class="business-right">
      <AgriculturePage v-if="currentBusiness === 'agriculture'" />
      <SemiconductorPage v-if="currentBusiness === 'semiconductor'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AgriculturePage from "./business_pages/AgriculturePage.vue";
import SemiconductorPage from "./business_pages/SemiconductorPage.vue";

import { ref } from "vue";
const currentBusiness = ref("agriculture");
const handleBusinessClick = (business: string) => {
  currentBusiness.value = business;
};
</script>
<style scoped>
@import "../styles/business.styl";
</style>
