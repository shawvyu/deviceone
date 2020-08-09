/*
 * @Author: shawvyu
 * @Date: 2020-08-09 16:59:16
 * @LastEditTime: 2020-08-09 17:08:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\ui\do_Label.d.ts
 */
import { UiBasicInstance, FontStyle, TextFlag, TextAlign } from "../base/uiBase";

/**
 * 一.iOS
 * 1.height=-1，maxHeight=200，宽度具体数，maxLines=1，最大行数无效（高为-1时maxLines无效，靠maxHeight来控制）
 * 2.与安卓不一样的地方:
 *  1).ios的高度是固定值，text超过label的宽，text每行数据特别多，最大行数设置固定值（1、2）等，都有省略号；区别：android的text显示不全都有省略号
 *  2).label宽度固定，最大行间距与（字体大小行数）超过label宽度，最后2行数据之间没有行间距，区别：android的，最大行间距与（字体大小行数）超过label宽度，不显示最后几行数据
 *  3).ios动态改变textflag=normal，text数据会往下移动，区别：android的不会下移
 *  4).label的高度是固定值或者-1，设置最大行数（除-1和0）以外的数，数据是在中间显示的，不是从头显示，区别：android从头显示
 *  5).ios的label的border不支持4个角，区别：android的支持4个角不同
 * 二.Android
 * 1.最大高度与最大行数冲突，Android永远都是最大行数优先级高，如果maxLines=1，就是默认值（空），最大高度才起作用。
 */
export interface DoLabel extends UiBasicInstance{
    /** 
     * 文本显示内容
     * @example var do_Label = ui("do_Label_3");  //实例化 do_Label.text = "文本标签框，用于显示文本文字，设置字体样式、大小、内容对齐"
     *  */
    text:string

    /**
     * 字体颜色
     * 
     * 说明 : 设置字体显示颜色，值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF
     * @default 000000FF
     * @example do_Label.fontColor = "FF0000FF";
     */
    fontColor:string

    /**
     * 字体风格
     * @example do_Label.fontStyle = "italic";
     */
    fontStyle:FontStyle

    /**
     * 字体标示
     * 
     * @example do_Label.textFlag = "underline";
     */
    textFlag:TextFlag

    /**
     * 字体大小
     * @default 17
     * @example do_Label.fontSize = 30;
     */
    fontSize:number

    /**
     * 文本对齐方式
     * 
     * 编辑类型 : 只允许设计区内修改。
     * @default left
     */
    textAlign:TextAlign

    /**
     * 最大宽度
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : label的width为－1的时候，label会根据text内容自动适配变宽，但是不会宽于maxWidth
     */
    maxWidth:number

    /**
     * 最大高度
     * 
     * 编辑类型 : 只允许设计区内修改。
     * 
     * 说明 : 设置文本框显示最大高度值，只有在设置Height属性值为-1时有效，否则不起作用
     */
    maxHeight:number

    /**
     * 最大行数
     * 
     * 编辑类型 : 只允许设计区内修改。
     * 
     * 说明 : 最大行数，说明：设置文本内容显示最大行数，如显示内容超过了最大行值则结尾用省略号…表示（iOS只有设置成1时才会显示…）；缺省为1行，如果为小于或等于0表示不限行数
     * @default 1
     */
    maxLines:number

    /**
     * 行间距
     * 
     * 说明 : 设置每行字之间的间距
     * @example do_Label.linesSpace = 40;
     * 
     * 下图为间距为10和间距为40的效果图。
     * @link {http://www.appworker.net/awdoc/web/img/20180329/66a65f4c7a92425a99fb316d65cd0339.png}
     * @link {http://www.appworker.net/awdoc/web/img/20180329/47ed8288531744f0aee7faf45aa56cad.png}
     */
    linesSpace:number

    /**
     * 阴影效果
     * 
     * 说明 : 添加阴影效果，属性值格式是：“颜色，x位置，y位置，圆角”，如’FF9999FF,30,30,20’，默认值为’000000FF,0,0,0’，若其中某个值不填，需保留逗号，如不填颜色，’,0,0,0’，当圆角为0时为没有阴影效果
     * @example do_Label.shadow = "FF0000FF,5,5,5";
     * @link {http://www.appworker.net/awdoc/web/img/20180329/c30d70fd951645fbad863204ec3fb2ef.png}
     * @link {http://www.appworker.net/awdoc/web/img/20180329/e97aee1eddc340bc95704171eb0f02ff.png}
     * @link {http://www.appworker.net/awdoc/web/img/20180329/6f39eb5c2cd949129139e90a6d51e6cc.png}
     */
    shadow:string
}