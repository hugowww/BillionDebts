/**
 * 天賦介面 - 定義天賦的基本功能和屬性
 */
export interface ITalent {
  /**
   * 天賦名稱
   */
  name: string;

  /**
   * 天賦描述
   */
  description: string;

  /**
   * 天賦等級
   */
  level: number;

  /**
   * 註冊更新回調函數
   * @param callback 當天賦效果發生變動時要執行的回調函數
   */
  addUpdateCallback(callback: () => void): void;

  /**
   * 升級天賦
   */
  levelUp(): void;
}
