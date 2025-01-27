import type { IBusiness } from "./IBusiness";
import { SimpleBusiness } from "./SimpleBusiness";

/**
 * 產業工廠類別 - 負責建立及管理產業實例
 */
export class BusinessFactory {
  // 儲存已建立的產業實例
  private static _businessMap: Map<string, IBusiness> = new Map();

  /**
   * 建立或取得已存在的產業實例
   * @param name 產業名稱
   * @returns 產業實例
   */
  public static create(
    name: string,
    timeTriggerFunc: (income: number) => void
  ): IBusiness {
    // 如果產業已存在，直接返回該實例
    if (this._businessMap.get(name)) {
      return this._businessMap.get(name) as IBusiness;
    }

    // 建立新的產業實例
    // 目前先使用 SimpleBusiness，之後可以根據需求擴充不同類型的產業
    const business = new SimpleBusiness(
      name,
      "simple " + name,
      1000,
      1.1,
      100,
      0.5,
      0.1,
      1,
      timeTriggerFunc
    );
    this._businessMap.set(name, business);

    return business;
  }

  /**
   * 移除產業實例
   * @param name 產業名稱
   */
  public static remove(name: string): void {
    this._businessMap.delete(name);
  }

  /**
   * 清除所有產業實例
   */
  public static clear(): void {
    this._businessMap.clear();
  }
}
