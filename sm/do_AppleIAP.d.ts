/*
 * @Author: shawvyu
 * @Date: 2020-08-04 21:49:24
 * @LastEditTime: 2020-08-08 12:52:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_AppleIAP.d.ts
 */
import { SmBasicInstance } from "../base/smBase";

interface PurchaseParams {
  /**
   * 对应iTunes Connect中配置的“产品ID“
   */
  productID: string;
  /**
   * App Store上实际购买验证URL，是一个枚举值开发测试用{@link https://sandbox.itunes.apple.com/verifyReceipt}。发布版用{@link https://buy.itunes.apple.com/verifyReceipt},实际的项目中使用发布版，开发测试是用于调试测试。如果不填，就需要自己搭建server端去验证；苹果官方建议自己搭建service
   *
   */
  verifyURL?: string;
}
export interface DoAppleIAP extends SmBasicInstance {
  /**
   * 恢复购买
   *
   * 说明: 刷新产品购买状态，在不同设备上用同一账户购买过，调用该方法可以恢复成已购买状态；或购买后将应用卸载，重新安装后可恢复已购买状态
   */
  restoreProduct(): void;

  /**
   * 购买商品
   * @param params
   * @param listen
   * @returns 得到苹果返回的一个收据(receipt)，如果用verifyURL中两个枚举值之一作为验证，购买成功后会返回收据；若自己搭建service需将得到的receipt用http的post去请求{@link https://buy.itunes.apple.com/verifyReceipt}以校验是否购买成功
   */
  purchase(params: PurchaseParams, listen: (data: string) => void): void;
}
