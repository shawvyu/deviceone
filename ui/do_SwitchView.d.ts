import { UiBasicInstance } from "../base/uiBase";

export interface DoSwitchView extends UiBasicInstance{
    /**
     * 是否选中
     * 
     * 说明 : 设置当前状态，默认为不选中状态
     * @def false
     */
    checked:boolean

    /**
     * 组件形状
     * 
     * 说明 : 设置组件形状，有两种形状，rect矩形，circle圆形
     * @default circle
     */
    shape:string

    /**
     * 组件状态颜色
     * 
     * 说明 : SwitchView 各种状态的颜色：open的背景颜色值，close的背景颜色值，slider的背景颜色值， 默认值为：“00FF00,888888,FFFFFF”
     * @default 00FF00,888888,FFFFFF
     */
    colors:string

    /**
     * 开关状态触发
     * @param eventName 
     * @param listen 
     * @example
     * do_SwitchView.on("changed",function(data){
        appworker.print(data,"开关发生变化后的状态")
        })
     */
    on(eventName:'changed',listen:(data:boolean)=>void):void
}