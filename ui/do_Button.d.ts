/*
 * @Author: shawvyu
 * @Date: 2020-08-09 12:07:43
 * @LastEditTime: 2020-08-09 13:18:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\ui\do_Button.d.ts
 */
import { UiBasicInstance, FontStyle, TextFlag } from "../base/uiBase";

/**
 * 苹果不建议在touch的时候修改按钮的透明度。原因：由于iOS的机制问题，不建议在touch的时候修改按钮的透明度。如果想要修改的话，可以使用不同的do_Button，控制组件的显示和隐藏。
 * 
 * 安卓给button设置有背景图片时，给组件设置圆角没有效果。原因：因为所有组件border的圆角都是假的，相当于给了一个圆角的背景图片。
 */
export interface DoButton extends UiBasicInstance {
  /**
   * 是否有效
   *
   * 说明 : 控制button的点击事件，缺省为true，表示用户如果点击按钮会触发button的三种touch事件
   * @default true
   */
  enabled: boolean;

  /**
   * 标题
   *
   * 说明 : 获取或设置与此控件关联的文本
   *  */
  text: string;

  /**
   * 字体颜色
   *
   * 说明 : 设置字体显示颜色，值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF
   * @default 000000FF
   */
  fontColor: string;

  /**
   * 字体大小
   * @default 17
   */
  fontSize: number;

  /**
   * 字体风格
   * @default normal
   */
  fontStyle: FontStyle;

  /**
   * 字体标示
   *
   * 编辑类型 : 只允许设计区内修改
   * @default normal
   */
  textFlag: TextFlag;

  /**
   * 背景图片
   *
   * 说明 : 可设置本地文件：支持data://和source://两种方式。文件格式说明参考Storage类
   */
  bgImage: string;

  /**
     * 按下并在按钮范围抬起，触发该事件
     * @param eventName 
     * @param listen 
     * @example var do_Button = ui("do_Button_1");
                // 触发touch事件，按下并在按钮范围抬起，触发该事件
                do_Button.on("touch", function() {
                    // 设置bgImage属性
                    do_Button.bgImage = "source://view/do_Button/backgroud.png";
                    // 设置fontColor属性值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度(Alpha)
                    do_Button.fontColor = "FF0000FF";
                    // 设置fontSize属性
                    do_Button.fontSize = 35;
                    // 设置fontStyle属性,包含4种类型：normal：常规; bold：粗体; italic：斜体; bold_italic：粗斜体（iOS平台不支持）
                    do_Button.fontStyle = "italic";
                })
     */
  on(eventName: "touch", listen: () => void): void;
  /**
     * 按钮范围内按下即可触发
     * @param eventName 
     * @param listen 
     * @example //触发touchDown事件，按钮范围内按下即可触发
                do_Button.on("touchDown",function(){
                    do_Button.text = "触发touchDown事件";   //设置按钮的text属性
                do_Button.border = "FF0000FF,1,[20,20,20,20]";   //设置按钮的border属性,border值格式为"颜色值，宽度，圆角"
                })
     */
  on(eventName: "touchDown", listen: () => void): void;
  /**
     * 一旦按下，手指离开即触发，不论是否在按钮范围内
     * @param eventName 
     * @param listen 
     * @example //触发touchDown事件，按钮范围内按下即可触发
                do_Button.on("touchUp",function(){
                    do_Button.text = "触发touchUp事件";   //设置按钮的text属性
                })
     */
  on(eventName: "touchUp", listen: () => void): void;
}
