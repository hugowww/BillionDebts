import { defineStore } from "pinia";
import { Engine } from "../core/Engine";
import type { IBusiness } from "../core/business/IBusiness";

export const store = defineStore("global", {
  state: () => ({
    currentTab: "business" as
      | "business"
      | "talent"
      | "rebirth"
      | "statistics"
      | "settings",
    // game state
    currentBalance: 0,
    currentDebts: 0,
    currentDebtsRevenue: 0,
    engine: null as Engine | null,
    currentBusinesses: new Map<string, IBusiness>(),
  }),

  getters: {
    // 計算所有產業的每秒收入總和
    totalIncomeSec(state) {
      let ls = Array.from(state.currentBusinesses.values());
      return ls.reduce((sum, business) => {
        return sum + business.incomeSec();
      }, 0);
    },
    getBusinessLevel:
      (state) =>
      (name: string): number => {
        return state.currentBusinesses.get(name)?.level ?? 0;
      },
  },

  actions: {
    setTab(tab: "business" | "talent" | "rebirth" | "statistics" | "settings") {
      this.currentTab = tab;
    },
    initEngine() {
      this.engine = new Engine(
        () => {
          this.currentBalance = this.engine!.balance.amount;
        },
        () => {
          this.currentDebts = this.engine!.debts.amount;
          this.currentDebtsRevenue = this.engine!.debts.revenue();
        }
      );
      // first
      this.currentDebtsRevenue = this.engine!.debts.revenue();
    },
    buyBusiness(name: string) {
      this.engine!.buyBusiness(name);
      // clear and reset
      this.currentBusinesses.clear();
      this.currentBusinesses = new Map(this.engine!.businesses.entries());
    },
    startDebts() {
      this.engine!.debts.play();
    },
  },
});
