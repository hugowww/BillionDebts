/**
 * Balance 類別用於管理存款金額
 */
export class Balance {
  public amount: number;
  private _updateCallback: () => void;
  /**
   * 建立新的 Balance 實例
   * @param initAmount 初始金額
   */
  constructor(initAmount: number = 0, updateCallback: () => void) {
    this.amount = initAmount;
    this._updateCallback = updateCallback;
  }

  /**
   * 增加金額
   * @param value 要增加的金額
   */
  increase(value: number): void {
    this.amount += value;
    this._updateCallback();
  }

  /**
   * 減少金額
   * @param value 要減少的金額
   */
  decrease(value: number): void {
    this.amount -= value;
    this._updateCallback();
  }
}
