import { AbsBusiness } from "./AbsBusiness";

/**
 * 基本產業類別 - 實作簡單的產業邏輯
 */
export class SimpleBusiness extends AbsBusiness {
  constructor(
    name: string,
    description: string,
    cost: number,
    costBase: number,
    revenue: number,
    revenueMultiplier: number,
    profit: number,
    period: number,
    timeTriggerFunc: (income: number) => void
  ) {
    super(
      name,
      description,
      cost,
      costBase,
      revenue,
      revenueMultiplier,
      profit,
      period,
      timeTriggerFunc
    );
  }
}
