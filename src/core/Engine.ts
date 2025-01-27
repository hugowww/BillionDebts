import { Balance } from "./Balance";
import { Debts } from "./Debts";
import type { IBusiness } from "./business/IBusiness";
import type { ITalent } from "./interfaces/ITalent";
import { BusinessFactory } from "./business/BusinessFactory";

/**
 * 遊戲引擎類別 - 管理所有遊戲系統
 */
export class Engine {
  public balance: Balance;
  private _balanceIncreaseFunc: (amount: number) => void;
  private _balanceDecreaseFunc: (amount: number) => void;

  public debts: Debts;

  public talentPoints: number;

  public businesses: Map<string, IBusiness>;
  public talents: Map<string, ITalent>;

  constructor(
    balanceUpdateCallback: () => void,
    debtsUpdateCallback: () => void
  ) {
    this.balance = new Balance(0, balanceUpdateCallback);
    this._balanceIncreaseFunc = (amount: number) => {
      this.balance.increase(amount);
    };
    this._balanceDecreaseFunc = (amount: number) => {
      this.balance.decrease(amount);
    };

    this.talentPoints = 0;

    this.debts = new Debts(
      1000,
      0.01,
      0.001,
      this._balanceDecreaseFunc,
      debtsUpdateCallback
    );
    this.businesses = new Map();
    this.talents = new Map();
  }

  /**
   * 購買新產業
   */
  buyBusiness(name: string): void {
    const business = BusinessFactory.create(name, this._balanceIncreaseFunc);
    business.levelUp();
    business.play();
    this.businesses.set(name, business);
    this._updateRelation();
  }

  /**
   * 升級產業
   */
  levelUpBusiness(name: string): void {
    const business = this.businesses.get(name);
    if (business) {
      business.levelUp();
    }
  }

  /**
   * 售出產業
   */
  sellBusiness(name: string): void {
    this.businesses.delete(name);
    BusinessFactory.remove(name);
  }

  /**
   * 開始負債系統
   */
  playDebts(): void {
    // TODO: 實作開始負債系統邏輯
  }

  /**
   * 暫停負債系統
   */
  pauseDebts(): void {
    // TODO: 實作暫停負債系統邏輯
  }

  /**
   * 購買新天賦
   */
  buyTalent(name: string): void {
    // TODO: 實作購買天賦邏輯
    console.log("buyTalent", name);
    this._updateRelation();
  }

  /**
   * 升級天賦
   */
  levelUpTalent(name: string): void {
    const talent = this.talents.get(name);
    if (talent) {
      talent.levelUp();
    }
  }

  /**
   * 重置所有天賦
   */
  resetTalent(): void {
    this.talents.clear();
    this.talentPoints = 0;
  }

  /**
   * 重新開始遊戲
   */
  restart(): void {
    this.businesses.clear();
    BusinessFactory.clear();
    this.resetTalent();
    // TODO: 實作其他重置邏輯
  }

  /**
   * 更新所有物件之間的關聯
   */
  private _updateRelation(): void {
    // TODO: 實作更新關聯邏輯
    // 1. 更新新產業與現有系統的關聯
    // 2. 更新新天賦與現有系統的關聯
  }
}
