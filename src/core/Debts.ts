import type { IFactor } from "./factor/IFactor";

/**
 * Debts 類別用於管理債務相關操作
 */
export class Debts {
  // 基本屬性
  public amount: number;
  public interestRate: number;
  public repaymentRatio: number;
  private _profit: number = 1.0;
  private _period: number = 1;

  // 加乘因子陣列
  private _factors: Array<IFactor> = [];

  // 定時器相關
  private _timer: number | null;
  private _timeTriggerFunc: () => void;

  // 更新回調函數陣列
  private _updateCallbacks: Array<() => void> = [];

  // 暫緩機制相關
  private _isPause: boolean = false;
  private _continuePauseCount: number = 0;
  private _pauseLimit: number = 0;
  private _accumulatedAmount: number = 0;

  /**
   * 建構子
   * @param initAmount 初始債務金額
   * @param interestRate 利率
   * @param repaymentRatio 還款比例
   */
  constructor(
    initAmount: number,
    interestRate: number,
    repaymentRatio: number,
    timeTriggerFunc: (negIncome: number) => void,
    debtsUpdateCallback: () => void
  ) {
    this.amount = initAmount;
    this.interestRate = interestRate;
    this.repaymentRatio = repaymentRatio;

    // 綁定定時器觸發函數
    this._timeTriggerFunc = () => {
      timeTriggerFunc(this.revenue());
      this.amount *= 1 + this.interestRate;
      debtsUpdateCallback();
    };
    this._timer = null;
  }

  /**
   * 開始計算
   */
  public play(): void {
    if (!this._timer) {
      this._timer = window.setInterval(
        this._timeTriggerFunc,
        this.period() * 1000
      );
    }
  }

  /**
   * 暫停計算
   */
  public pause(): void {
    if (this._timer) {
      window.clearInterval(this._timer);
      this._timer = null;
    }
  }

  /**
   * 檢查是否可以暫停
   */
  public isPauseEnabled(): boolean {
    return this._continuePauseCount < this._pauseLimit;
  }

  /**
   * 取得當期還款金額（負向營收）
   */
  public revenue(): number {
    let baseRevenue = this.amount * this.repaymentRatio;

    // 套用所有加乘因子
    const factorRevenue = this._factors.reduce(
      (total, factor) => total * factor.revenueCoef(),
      1
    );
    baseRevenue *= factorRevenue;

    // 如果處於暫停狀態，累積金額
    if (this._isPause) {
      this._accumulatedAmount += baseRevenue;
      return 0;
    }

    return baseRevenue;
  }

  /**
   * 取得當前週期
   */
  public period(): number {
    // 套用所有加乘因子
    const factorPeriod = this._factors.reduce(
      (total, factor) => total * factor.periodCoef(),
      1
    );
    return this._period * factorPeriod;
  }

  /**
   * 新增更新回調函數
   */
  public addUpdateCallback(callback: () => void): void {
    this._updateCallbacks.push(callback);
  }

  /**
   * 新增加乘因子
   */
  public addFactor(factor: IFactor): void {
    this._factors.push(factor);
    this.notifyUpdate();
  }

  /**
   * 移除加乘因子
   */
  public delFactor(factor: IFactor): void {
    const index = this._factors.indexOf(factor);
    if (index > -1) {
      this._factors.splice(index, 1);
      this.notifyUpdate();
    }
  }

  /**
   * 觸發所有更新回調函數
   */
  private notifyUpdate(): void {
    for (const callback of this._updateCallbacks) {
      callback();
    }
  }
}
