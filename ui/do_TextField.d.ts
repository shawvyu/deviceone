import { UiBasicInstance, FontStyle, TextFlag, InputType, TextAlign } from "../base/uiBase";

export interface DoTextField extends UiBasicInstance{
    /**
     * 内边距
     * 
     * 说明 : 0,0,0,0 分别表示上，右，下，左的内边距，iOS支持左右/上下内边距间距对称，iOS默认取上，右作为上下和左右的内边距
     * @default  0,0,0,0
     */
    padding:string

    /**
     * 光标颜色
     * 
     * 说明 : 修改输入框光标颜色，暂只支持iOS平台
     * @default 000000FF
     */
    cursorColor:string

    /**
     * 按钮文字
     * 
     * 说明 : 修改软键盘上按钮显示文字，有以下枚举值：go前往、send发送、next下一项、done完成、search搜索、default由inputType属性控制，与系统相同
     * @default default
     */
    enterText:string

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
     * 说明 : 设置字体显示颜色，值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF
     * @default 000000FF
     */
    fontColor:string

    /**
     * 字体大小
     * @default 17
     */
    fontSize:number

    /**
     * 字体风格
     */
    fontStyle:FontStyle

    /**
     * 字体标示
     * @default normal
     */
    textFlag:TextFlag

    /**
     * 提示信息
     * 
     * 说明 : text为空时显示的文字提示信息
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
     * 输入类型
     * 
     * 说明 : 输入类型，不设置这个属性的时候会使用系统默认键盘支持所有字符
     * @default ENG
     * 
     */
    inputType:InputType

    /**
     * 隐藏输入字符
     * 
     * 说明 : 默认值为false，设置为true时将输入的字符显示为**
     * @default false
     */
    password:boolean

    /**
     * 输入框中显示叉号
     * 
     * 说明 : 默认值为false，设置成true时在文本框右侧显示一个叉号标记，点击叉号可以删除所有文本内容
     */
    clearAll:boolean

    /**
     * 删除标记图片
     * 
     * 说明 : 不设置或该属性为空时会显示默认图片，默认为在文本框右侧的一个叉号标记；否则显示设置的图片，支持data://和source://目录
     */
    clearImg:string

    /**
     * 可允许输入的最大长度
     * @default 1000
     */
    maxLength:number

    /**
     * 文本对齐方式
     * @default left
     */
    textAlign:TextAlign

    /**
     * 设置焦点
     * 
     * 说明: 设置是否得到焦点，得到焦点时软键盘弹出，失去焦点时软键盘收起
     * @param value 为true时有焦点，false时无焦点
     * @example
     * //得到焦点,键盘弹出
        do_TextField.setFocus({value:true})
        //失去焦点,收起键盘
        do_TextField.setFocus({value:false})
     */
    setFocus(value:boolean):void
    setFocus(param:{value:boolean}):void

    /**
     * 设置光标位置
     * @param position [0] 表示在已有字符的第几个位置，从0开始，比如文本框内有5个字符，position设置为3，光标即在第4个字符之前
     * @example
     * //设置光标在第三个字符之前
     * do_TextField.setSelection({position:2})
     */
    setSelection(position:number):void
    setSelection(param:{position:number}):void

    /**
     * 文字变化时触发
     * @param eventName 
     * @param listen 
     * @example
     * do_TextField.on("textChanged",function(){
        print("do_TextField文字内容变化")
        })
     */
    on(eventName:'textChanged',listen:()=>void):void
    /**
     * 进入编辑状态
     * @param eventName 
     * @param listen 
     * @example
     * do_TextField.on("focusIn",function(){
        print("进入编辑状态，键盘弹出")
        })
     */
    on(eventName:'focusIn',listen:()=>void):void
    /**
     * 离开编辑状态
     * @param eventName 
     * @param listen 
     * @example
     * do_TextField.on("focusOut",function(){
        print("离开编辑状态,键盘收起")
        })
     */
    on(eventName:'focusOut',listen:()=>void):void
    /**
     * 点击键盘右下角按钮时触发
     * @param eventName 
     * @param listen 
     * @example
     * do_TextField.on("enter",function(){
        print("点击键盘右下角按钮")
        })
     */
    on(eventName:'enter',listen:()=>void):void
}