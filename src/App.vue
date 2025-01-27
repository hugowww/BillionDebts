<script setup lang="ts">
import MainView from "./views/MainView.vue";
import { Engine } from "./core/Engine";
import { ref } from "vue";
import type { IBusiness } from "./core/business/IBusiness";

// bind balance
let currentBalance = ref(0);
let currentDebts = ref(0);
const engine = new Engine(
  () => {
    currentBalance.value = engine.balance.amount;
  },
  () => {
    currentDebts.value = engine.debts.amount;
  }
);

let currentBusinesses = ref<IBusiness[]>([]);
let buyBusiness = (name: string) => {
  engine.buyBusiness(name);
  currentBusinesses.value = Array.from(engine.businesses.values());
};

let startDebts = () => {
  engine.debts.play();
};
</script>

<template>
  <div class="app-container">
    <h1>App</h1>
    <!-- 顯示目前存款 -->
    <div class="balance-display">存款: {{ Math.round(currentBalance) }}</div>
    <div class="balance-display">債務: {{ Math.round(currentDebts) }}</div>

    <div>
      <button @click="buyBusiness('A')">購買產業A</button>
      <button @click="buyBusiness('B')">購買產業B</button>
      <button @click="buyBusiness('C')">購買產業C</button>
      <button @click="startDebts">開始計算負債</button>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>產業名稱</th>
            <th>等級</th>
            <th>成本</th>
            <th>銷售額</th>
            <th>利潤</th>
            <th>生產週期</th>
            <th>每秒收入</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="business in currentBusinesses" :key="business.name">
            <td>{{ business.name }}</td>
            <td>{{ business.level }}</td>
            <td>{{ Math.round(business.cost(business.level)) }}</td>
            <td>{{ Math.round(business.revenue()) }}</td>
            <td>{{ Math.round(business.profit() * 100) }}%</td>
            <td>{{ business.period() }}</td>
            <td>{{ Math.round(business.incomeSec()) }}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>債務總額</th>
            <th>利息</th>
            <th>還款比例</th>
            <th>生產週期</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ Math.round(engine.debts.amount) }}</td>
            <td>{{ engine.debts.interestRate }}</td>
            <td>{{ engine.debts.repaymentRatio }}</td>
            <td>{{ engine.debts.period() }}</td>
          </tr>
        </tbody>
      </table>
    </div>

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

.balance-display {
  margin: 10px 0;
  font-size: 1.2em;
  color: #333;
}
</style>
