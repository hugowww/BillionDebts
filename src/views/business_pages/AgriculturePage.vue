<template>
  <div class="agriculture-page">
    <div class="business-item" @click="st.buyBusiness('farm')">
      <div>
        <div class="d-flex flex-column">
          <div>
            農 <span>{{ st.getBusinessLevel("farm") }}</span>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-label="Success striped"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 5px">
            <div
              class="progress-bar progress-bar-striped bg-success"
              :style="{ width: progress2 + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="business-item" @click="st.buyBusiness('seed')">
      <div>
        <div class="d-flex flex-column">
          <div>
            種 <span>{{ st.getBusinessLevel("seed") }}</span>
          </div>
          <div
            class="progress"
            role="progressbar"
            aria-label="Success striped"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 5px">
            <div
              class="progress-bar progress-bar-striped bg-success"
              :style="{ width: progress1 + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from "../../stores/store";
import { onMounted, ref } from "vue";
const st = store();

let progress1 = ref(0);
let progress2 = ref(0);
onMounted(() => {
  setInterval(() => {
    progress1.value += 10;
    progress1.value = progress1.value % 100;
  }, 100);
  setInterval(() => {
    progress2.value += 5;
    progress2.value = progress2.value % 100;
  }, 100);
});
</script>

<style scoped>
@import "../../styles/business.styl";
.progress {
  --bs-progress-bar-transition: width 0.1s linear;
}
</style>
