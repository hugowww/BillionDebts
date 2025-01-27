import type { IFactor } from "../factor/IFactor";
import type { IBusiness } from "./IBusiness";

/**
 * 產業抽象類別 - 實作共用的產業功能
 */
export abstract class AbsBusiness implements IBusiness {
  protected _cost: number;
  protected _costBase: number;
  protected _revenue: number;
  protected _revenueMultiplier: number;
  protected _profit: number;
  protected _period: number;
  protected _factors: IFactor[];
  protected _timer: number | null;
  protected _timeTriggerFunc: () => void;
  protected _updateCallbacks: (() => void)[];

  name: string;
  description: string;
  level: number;

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
    this.name = name;
    this.description = description;
    this.level = 0;
    this._cost = cost;
    this._costBase = costBase;
    this._revenue = revenue;
    this._revenueMultiplier = revenueMultiplier;
    this._profit = profit;
    this._period = period;
    this._factors = [];
    this._timer = null;
    this._timeTriggerFunc = () => {
      let val = this.revenue() * this.profit();
      timeTriggerFunc(val);
    };
    this._updateCallbacks = [];
  }

  play(): void {
    if (!this._timer) {
      this._timer = window.setInterval(
        this._timeTriggerFunc,
        this.period() * 1000
      );
    }
  }

  pause(): void {
    if (this._timer) {
      window.clearInterval(this._timer);
      this._timer = null;
    }
  }

  cost(level: number = 1): number {
    return this._cost * Math.pow(this._costBase, level - 1);
  }

  revenue(): number {
    const factorMultiplier = this._factors.reduce(
      (total, factor) => total * factor.revenueCoef(),
      1
    );
    return (
      this._revenue * (this._revenueMultiplier * this.level) * factorMultiplier
    );
  }

  profit(): number {
    const factorMultiplier = this._factors.reduce(
      (total, factor) => total * factor.profitCoef(),
      1
    );
    return this._profit * factorMultiplier;
  }

  period(): number {
    const factorMultiplier = this._factors.reduce(
      (total, factor) => total * factor.periodCoef(),
      1
    );
    return this._period * factorMultiplier;
  }

  incomeSec(): number {
    return (this.revenue() * this.profit()) / this.period();
  }

  addUpdateCallback(callback: () => void): void {
    this._updateCallbacks.push(callback);
  }

  addFactor(factor: IFactor): void {
    this._factors.push(factor);
    this._notifyUpdate();
  }

  delFactor(factor: IFactor): void {
    const index = this._factors.indexOf(factor);
    if (index !== -1) {
      this._factors.splice(index, 1);
      this._notifyUpdate();
    }
  }

  levelUp(): void {
    this.level++;
    this._notifyUpdate();
  }

  protected _notifyUpdate(): void {
    this._updateCallbacks.forEach((callback) => callback());
  }
}
