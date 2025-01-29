<template>
  <div class="agriculture-page">
    <div class="business-item" @click="st.buyBusiness('farm')">
      <div>
        農 <span>{{ st.getBusinessLevel("farm") }}</span>
      </div>
    </div>
    <div class="business-item" @click="st.buyBusiness('seed')">
      <div>
        種 <span>{{ st.getBusinessLevel("seed") }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from "../../stores/store";
const st = store();
</script>

<style scoped>
@import "../../styles/business.styl";
</style>
