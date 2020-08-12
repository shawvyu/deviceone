import { UiBasicInstance, FontStyle, TextFlag } from "../base/uiBase";

export interface DoMarqueeLabel extends UiBasicInstance{
    /**
     * 文字滚动方向
     * 
     * 编辑类型 : 只允许设计区内修改。
     * 
     * 说明 : 修改文字滚动方向，支持向左与向右
     * @default left
     */
    direction:string

    /**
     * 文本显示内容
     * @example
     * var do_MarqueeLabel = ui("do_MarqueeLabel_1");  //实例化
     * do_MarqueeLabel.text = "文字能滚动播出的文本标签框";
     */
    text:string

    /**
     * 字体颜色
     * 
     * 说明 : 设置字体显示颜色，值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF
     * @example
     * do_MarqueeLabel.fontColor = "FF0000FF";
     */
    fontColor:string

    /**
     * 字体风格
     * @example 
     * do_MarqueeLabel.fontStyle = "bold";
     */
    fontStyle:FontStyle

    /**
     * 字体标示
     * 
     * 编辑类型 : 只允许设计区内修改。
     */
    textFlag:TextFlag

    /**
     *  字体大小
     * @example 
     * do_MarqueeLabel.fontSize = 30;
     */
    fontSize:number
}