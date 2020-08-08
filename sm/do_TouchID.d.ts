/*
 * @Author: shawvyu
 * @Date: 2020-08-08 12:02:24
 * @LastEditTime: 2020-08-08 12:52:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_TouchID.d.ts
 */
import { SmBasicInstance } from "../base/smBase";
/** :0： 认证失败；1：用户取消验证；2：选择输入密码；3：系统取消认证；4：未设置密码,无法开启认证；5：当前设备未录入指纹信息；6:当前设备不支持指纹识别 */
type EvalResCode = 0 | 1 | 2 | 3 | 4 | 5 | 6;
interface EvalRes {
  code: EvalResCode;
  status: boolean;
}
export interface DoTouchID extends SmBasicInstance {
  /**
     * 指纹验证
     * @param title [title=指纹验证] 使用touchID的原因
     * @example var target_0 = sm("do_TouchID");
                target_0.evaluate({title:"测试1"}, function(data, e) {
                ...})
     */
  evaluate(title?: string, listen: (data: EvalRes) => void): void;
  evaluate(params: { title?: string }, listen: (data: EvalRes) => void): void;
}
