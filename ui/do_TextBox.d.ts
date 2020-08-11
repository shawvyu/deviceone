import { UiBasicInstance, FontStyle, TextFlag, InputType } from "../base/uiBase";

export interface DoTextBox extends UiBasicInstance{

    /**
     * 光标颜色
     * 
     * 说明 : 修改输入框光标颜色，暂只支持iOS平台
     * @default 000000FF
     */
    cursorColor:string

    /**
     * 是否可编辑
     * 
     * 说明 : 控制文本框是否为可编辑状态，为false时不可编辑
     * @default true
     */
    enabled:boolean

    /**
     * 文本内容
     * 
     * 说明 : 获取或设置与此控件关联的文本
     */
    text:string

    /**
     * 字体颜色
     * 
     * 说明 : 设置字体显示颜色，值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha）
     * @default 000000FF
     */
    fontColor:string

    /**
     * 字体大小
     * 
     * @default 17
     */
    fontSize:number

    /**
     * 字体风格
     * @default normal
     */
    fontStyle:FontStyle

    /**
     * 字体标示
     * @default normal
     */
    textFlag:TextFlag

    /**
     * text为空提示文本
     */
    hint:string

    /**
     * 提示信息字体颜色
     * 
     * 说明 : text为空时显示的文字提示信息字体颜色
     * @default 808080FF
     */
    hintColor:string

    /**
     * 可允许输入的最大长度
     * @default 100
     */
    maxLength:number

    /**
     * 最大行数
     * 
     * 说明 : 最大行数，说明：此属性只有组件高度为-1时才生效；设置文本内容输入最大行数，如输入文本超过了最大行值则行数不再继续增加，同时可以通过上下滚动来查看输入的内容；当小于0时表示不限制行数
     * @default 0
     */
    maxLines:number

    /**
     * 输入类型
     * 
     * 说明 : 输入类型，不设置这个属性的时候会使用系统默认键盘支持所有字符
     * @default ENG
     */
    inputType:InputType

    /**
     * 设置焦点
     * 
     * 说明: 设置是否得到焦点，得到焦点时软键盘弹出，失去焦点时软键盘收起
     * @param value 为true时有焦点，false时无焦点
     * @default false
     * @example //得到焦点,弹出键盘
                do_TextBox.setFocus({value:true})
                //失去焦点,收起键盘
                do_TextBox.setFocus({value:false})
     */
    setFocus(value:boolean):void
    setFocus(param:{value:boolean}):void

    /**
     * 设置光标位置
     * @param position 表示在已有字符的第几个位置，从0开始，比如文本框内有5个字符，position设置为3，光标即在第4个字符之前
     * @default 0
     * @example //设置光标到第四个字符之前
                do_TextBox.setSelection({position:3})
     */
    setSelection(position:number):void
    setSelection(param:{position:number}):void

    /**
     * 文字变化时触发
     * @param eventName 
     * @param listen 
     * @example 
     * do_TextBox.on("textChanged",function(){
        print("do_TextBox内容文字发生变化")
        })
     */
    on(eventName:'textChanged',listen:()=>void):void
    /**
     * 进入编辑状态
     * @param eventName 
     * @param listen 
     * @returns 返回键盘高度，{keybordHeight:’25’}
     * @example
     * do_TextBox.on("focusIn",function(data,e){
        print(data,"进入编辑状态后键盘高度")
        })
     */
    on(eventName:'focusIn',listen:(data:object)=>void):void
    /**
     * 离开编辑状态
     * @param eventName 
     * @param listen 
     * @example
     * do_TextBox.on("focusOut",function(data,e){
            print("离开编辑状态")
            })
     */
    on(eventName:'focusOut',listen:()=>void):void

}