/**
 * 加乘因子介面 - 定義加乘因子的基本功能和屬性
 */
export interface IFactor {
  /**
   * 因子名稱
   */
  name: string;

  /**
   * 因子描述
   */
  description: string;

  /**
   * 因子等級
   */
  level: number;

  /**
   * 取得銷售額係數
   * @returns 目前的銷售額加成倍率
   */
  revenueCoef(): number;

  /**
   * 取得利潤係數
   * @returns 目前的利潤加成倍率
   */
  profitCoef(): number;

  /**
   * 取得週期係數
   * @returns 目前的週期加成倍率
   */
  periodCoef(): number;

  /**
   * 註冊更新回調函數
   * @param callback 當係數發生變動時要執行的回調函數
   */
  addUpdateCallback(callback: () => void): void;

  /**
   * 升級因子
   */
  levelUp(): void;
}
