import type { IFactor } from "../factor/IFactor";

/**
 * 產業介面 - 定義產業的基本功能和屬性
 */
export interface IBusiness {
  /**
   * 產業名稱
   */
  name: string;

  /**
   * 產業描述
   */
  description: string;

  /**
   * 產業等級
   */
  level: number;

  /**
   * 開始生產
   */
  play(): void;

  /**
   * 暫停生產
   */
  pause(): void;

  /**
   * 計算指定等級的成本
   * @param level 要計算的等級
   */
  cost(level: number): number;

  /**
   * 取得當前銷售額（經過加乘因子計算）
   */
  revenue(): number;

  /**
   * 取得當前利潤（經過加乘因子計算）
   */
  profit(): number;

  /**
   * 取得生產週期（經過加乘因子計算）
   */
  period(): number;

  /**
   * 取得每秒收入（經過加乘因子計算）
   */
  incomeSec(): number;

  /**
   * 註冊生產力更新的回調函數
   * @param callback 當生產力發生變動時要執行的回調函數
   */
  addUpdateCallback(callback: () => void): void;

  /**
   * 加入加乘因子
   * @param factor 要加入的加乘因子
   */
  addFactor(factor: IFactor): void;

  /**
   * 移除加乘因子
   * @param factor 要移除的加乘因子
   */
  delFactor(factor: IFactor): void;

  /**
   * 升級產業
   */
  levelUp(): void;
}
