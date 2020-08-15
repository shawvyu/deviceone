import { UiBasicInstance } from "../base/uiBase";

export interface DoDoubleSlider extends UiBasicInstance {
  /**
   * 左滑块图片
   *
   * 说明 : 左边滑块显示的图片,只支持source://和data://目录。
   */
  leftSliderImg: string;

  /**
   * 右滑块图片
   *
   * 说明 : 右边滑块显示的图片,只支持source://和data://目录
   */
  rightSliderImg: string;

  /**
   * 左轨迹颜色
   *
   * 说明 : 左滑块移动轨迹颜色
   * @default dededeff
   */
  leftTrackTintColor: string;

  /**
   * 居中轨迹颜色
   *
   * 说明 : 左滑块和右滑块中间的区域的轨迹颜色
   * @default 238dfbff
   */
  middleTrackTintColor: string;

  /**
   * 右轨迹颜色
   *
   * 说明 : 右滑块移动轨迹颜色
   * @default dededeff
   */
  rightTrackTintColor: string;

  /**
   * 左滑块默认值
   *
   * 说明 : 左滑块默认显示的值，取值范围0-100，默认为0，则左滑块在最左边。
   * @default 0
   */
  leftSliderValue: string;

  /**
   * 右滑块默认值
   *
   * 说明 : 右滑块显示的值，取值范围0-100，默认为0，则右滑块在最右边。
   * @default 100
   */
  rightSliderValue: string;

  /**
   * 将左滑块置于最左边，右滑块置于最右边,会触发progressChanged事件
   */
  reset(): void;

  /**
   * 滑块进度变化事件
   * @param eventName
   * @param listen
   * @returns {object} {leftProgress:70.00,rightProgress:80.00}
   */
  on(eventName: "progressChanged", listen: (data: object) => void): void;
}
