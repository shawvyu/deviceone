/*
 * @Author: your name
 * @Date: 2020-08-08 15:02:01
 * @LastEditTime: 2020-08-08 15:09:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_Animator.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";
import { CurveType } from "./do_Animation";

/** {‘x’:10,’y’:50,’height’:500…}为空时表示状态不变 */
interface Props {
  x?: number;
  y?: number;
  height?: number;
}
interface AppendParams {
  /** 单位为毫秒 */
  duration: number;
  /**  */
  props?: Props;
  /** @default 4*/
  curve?: CurveType;
}
export interface DoAnimator extends MmBasicInstance {
  /**
   * 创建属性动画
   * @param params
   * @example //1000毫秒时间,移动到x25y25,动画速度不变
do_Animator.append({
  duration:1000,
  props:{'x':25,'y':25},
  curve:4
  });
   */
  append(params: AppendParams): void;
}
