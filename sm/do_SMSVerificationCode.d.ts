/*
 * @Author: shawvyu
 * @Date: 2020-08-05 22:35:11
 * @LastEditTime: 2020-08-05 22:41:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_SMSVerificationCode.d.ts
 */
import { SmBasicInstance } from "./smBase";

interface GetSMSParams {
  /** 对该号码发送验证码 */
  phoneNumber: string;
  /** 国家代码（版本2及以上支持） @default 86 */
  countryCode?: string;
}
interface VerifySMSParams extends GetSMSParams {
  /** 收到的验证码 */
  code: string;
}
export interface DoSMSVerificationCode extends SmBasicInstance {
  /**
   * 根据手机号获取短信验证码
   * @param params
   * @param listen
   * @returns 成功返回true,失败返回false
   */
  getSMSVerificationCode(params: GetSMSParams, listen: (data: string) => void);

  /**
   * 验证短信验证码
   * @param params
   * @param listen
   * @returns 验证成功返回true,失败返回false 这里实验返回值是字符串
   */
  verifySMSVerificationCode(
    params: VerifySMSParams,
    listen: (data: string) => void
  ): void;
}
