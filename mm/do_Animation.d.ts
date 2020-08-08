/*
 * @Author: shawvyu
 * @Date: 2020-08-08 14:38:51
 * @LastEditTime: 2020-08-08 15:00:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_Animation.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";

/** 透明值，取值0-1，0表示透明 */
type AlphaType = 0 | 1;
/** 1.’EaseInOut’动画启动时候慢，中间快，结束的时候慢、2.’EaseIn’动画启动的时候慢、3.’EaseOut’动画结束的时候慢、4.’Linear’动画速度不变’ */
type CurveType = 1 | 2 | 3 | 4;
interface AnimationParams {
  /** 动画延迟时间（毫秒） */
  delay: number;
  /** 动画过渡时间（毫秒） */
  duration: number;
  /** 动画曲线类型 */
  curve: CurveType;
  /** 动画重复次数，默认不重复，为-1时无限重复 */
  repeatCount: number;
  /** 是否自动动画反转 */
  autoReverse: boolean;
}
interface AlphaAnimationParams extends AnimationParams {
  /** 起始透明值 */
  alphaFrom: AlphaType;
  /** 结束透明值 */
  alphaTo: AlphaType;
}
interface TransferAnimationParams extends AnimationParams {
  /** 起始x坐标 */
  fromX: number;
  /** 起始y坐标 */
  fromY: number;
  /** 结束x坐标 */
  toX: number;
  /** 结束y坐标 */
  toY: number;
}
interface ScaleAnimationParams extends AnimationParams {
  /** 起始x的伸缩比例 */
  scaleFromX: number;
  /** 起始y的伸缩比例 */
  scaleFromY: number;
  /** 结束x的伸缩比例 */
  scaleToX: number;
  /** 结束y的伸缩比例  */
  scaleToY: number;
  /** 缩放起点x坐标，取值0-1 */
  pivotX: number;
  /** 缩放起点y坐标，取值0-1 */
  pivotY: number;
}
/** 其中pivotX、pivotY这两个值的取值范围为0-1，如果不设置表示旋转中心点是组件的右上角，设置成0.5选装中心点即为组件的中心点，设置成1旋转中心点是组件的右下角} */
interface RotateAnimationParams extends AnimationParams {
  /** 起始旋转角度，取值是±360 */
  fromDegree: number;
  /** 结束旋转角度，取值是±360 */
  toDegree: number;
  /** 旋转中心点x坐标 */
  pivotX: number;
  /** 旋转中心点y坐标 */
  pivotY: number;
}
export interface DoAnimation extends MmBasicInstance {
  /** 是否保持动画的最后一帧在View上面 */
  fillAfter: boolean;

  /**
   * 透明度动画
   * @param data 
   * @param id 每次调用这个函数都会创建一个新的动画属性集合，如果动画id一样，则会覆盖旧的动画属性值
   * @example do_Animation.alpha({
      delay:300,
      duration:2000,
      curve:4,
      repeatCount:2,
      autoReverse:true,
      alphaFrom:1,
      alphaTo:0
  }, "_a1");
   */
  alpha(data: AlphaAnimationParams, id?: string): void;
  /**
   * 位移动画
   * 
   * 说明: UI组件移动动画，从起点坐标到终点坐标
   * @param data 
   * @param id 每次调用这个函数都会创建一个新的动画属性集合，如果动画id一样，则会覆盖旧的动画属性值
   * @example do_Animation.transfer({
      delay:1000,
      duration:2000,
      curve:4,
      repeatCount:2,
      autoReverse:true,
      fromX:0,
      fromY:60,
      toX:60,
      toY:120
  }, "_t1");
   */
  transfer(data: TransferAnimationParams, id?: string): void;

  /**
   * 缩放动画
   *
   * 说明: 设置UI组件按照比例缩放动画效果属性集合
   * @param data
   * @param id
   * @example do_Animation.scale({
      delay:300,
      duration:2000,
      curve:4,
      repeatCount:2,
      autoReverse:true,
      scaleFromX:1,
      scaleFromY:1,
      scaleToX:60,
      scaleToY:120,
      pivotX:0.2,
      pivotY:0.5
  }, "_s1");
   */
  scale(data: ScaleAnimationParams, id?: string): void;
  /**
   * 旋转动画
   * 
   * 说明: 设置UI组件旋转动画的属性集
   * @param data 
   * @param id 
   * @example do_Animation.rotate({
      delay:300,
      duration:2000,
      curve:4,
      repeatCount:2,
      autoReverse:true,
      fromDegree:0,
      fromDegree:60,
      pivotX:0.5,
      pivotY:1
  }, "_r1");
   */
  rotate(data: RotateAnimationParams, id?: string): void;
}
