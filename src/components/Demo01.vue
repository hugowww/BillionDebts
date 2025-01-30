<template>
  <div class="demo01 d-flex flex-column">
    <div class="header pt-2 d-flex justify-content-between">
      <div></div>
      <div></div>
      <div>
        <div class="btn btn-outline-primary">產業鏈</div>
        <div class="btn btn-outline-primary">天賦</div>
        <div class="btn btn-outline-primary">重生</div>
      </div>
      <div>
        <div class="btn btn-outline-primary">統計</div>
        <div class="btn btn-outline-primary">設定</div>
      </div>
    </div>
    <div class="content flex-grow-1 d-flex flex-row">
      <div>
        <div class="list-group ms-2 mt-1">
          <a href="#" class="list-group-item list-group-item-action active"
            >農業</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >半導體業</a
          >
          <a href="#" class="list-group-item list-group-item-action">畜牧業</a>
          <a href="#" class="list-group-item list-group-item-action">製造業</a>
          <a href="#" class="list-group-item list-group-item-action">運輸業</a>
          <a href="#" class="list-group-item list-group-item-action">商業</a>
          <a href="#" class="list-group-item list-group-item-action">服務業</a>
          <a href="#" class="list-group-item list-group-item-action">金融業</a>
          <a href="#" class="list-group-item list-group-item-action">醫療業</a>
          <a href="#" class="list-group-item list-group-item-action">教育業</a>
          <a href="#" class="list-group-item list-group-item-action">娛樂業</a>
        </div>
      </div>
      <div class="btn-container position-relative flex-grow-1">
        <button
          v-for="index in 10"
          :key="index"
          type="button"
          class="btn btn-outline-primary position-absolute"
          :style="{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
          data-bs-original-title="Popover Title">
          按鈕 {{ index }}
        </button>
      </div>
    </div>
    <div class="footer d-flex flex-column" style="height: 50px">
      <div style="height: 8px">
        <div
          class="progress h-100"
          role="progressbar"
          aria-label="Animated striped example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100">
          <div
            class="progress-bar bg-danger progress-bar-striped progress-bar-animated"
            style="width: 75%"></div>
        </div>
      </div>
      <div class="d-flex justify-content-between" style="font-size: 28px">
        <div>+${{ formatNumber(1000) }}/s</div>
        <div>${{ formatNumber(10000) }}</div>
        <div>
          <span> -${{ formatNumber(10) }} </span>
          <span style="font-size: 12px"> (-${{ formatNumber(100) }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "../assets/styles/demo01_bootstrap.min.css";
import { onMounted } from "vue";

onMounted(() => {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );
});

// 格式化數字，加入千位分隔符
const formatNumber = (num: number): string => {
  return Math.round(num).toLocaleString("en-US");
};
</script>

<style scoped lang="stylus">

.demo01 {
  width: 842px;
  height: 595px;
  border: 1px solid #000;
  margin-bottom: 5px;

  .list-group, .btn  {
    font-family: "Noto Sans TC";

  }

}


.header {
  width: 100%;
  height: 50px;
  position: relative;
}

.header > div:nth-child(1) {
  position: absolute;
  left: 0;
  bottom: 2px;
  border-bottom: 3px solid #000;
  width: 100%;
}

.btn-container {
  position: relative;
  min-height: 400px;
  padding: 20px;
}

.btn-container .btn {
  transition: all 0.3s ease;
  z-index: 1;
}

.btn-container .btn:hover {
  z-index: 2;
  transform: scale(1.1);
}
</style>
