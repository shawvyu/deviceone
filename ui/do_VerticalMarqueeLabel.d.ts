/*
 * @Author: your name
 * @Date: 2020-08-14 22:44:17
 * @LastEditTime: 2020-08-14 23:13:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodejs\@types\deviceone\ui\do_VerticalMarqueeLabel.d.ts
 */
import { UiBasicInstance, FontStyle, TextFlag } from "../base/uiBase";

export interface DoVerticalMarqueeLabel extends UiBasicInstance {
  /**
   * 文字滚动方向
   * @default up
   */
  direction: string;

  /**
   * 文字滚动类型
   *
   * 说明 : 有两种滚动类型,一种是只有一条数据同时出现,中间位置停止一下,然后继续滚动,另一种是多条数据同时轮播,匀速移动
   * @default 0
   */
  style: number;

  /**
   * 文本显示内容
   *
   * 说明 : 支持显示多条内容,格式为[‘aaa’,’bbb’,’ccc’…]
   */
  text: Array<string>;

  fontColor: string;
  fontStyle: FontStyle;
  textFlag: TextFlag;
  fontSize: number;
  /**
   * 动画间隔
   *
   * 说明 : 文字跑完全程的时间，当style为0的时候，不包含中间停顿时间，单位毫秒
   * @default 2000
   */
  duration: number;

  /**
   * 按下并在按钮范围抬起，触发该事件
   * @param eventName
   * @param listen
   * @returns 返回当前显示的文字，仅针对style为0 的时候有效
   * @example
   * var do_VerticalMarqueeLabel_1 = ui("do_VerticalMarqueeLabel_1");
   * // 触发touch事件，按下并在按钮范围抬起，触发该事件
   * do_VerticalMarqueeLabel_1.on("touch", function(data, e) {
   * print(data,"do_VerticalMarqueeLabel_1 当前显示内容");
   * });
   */
  on(eventName: "touch", listen: (data: string) => void): void;
}
