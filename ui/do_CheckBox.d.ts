import { UiBasicInstance, FontStyle, TextFlag } from "../base/uiBase";

export interface DoCheckBox extends UiBasicInstance{
    /**
     * 是否可点击
     * 
     * 说明 : 缺省为true控制组件可点击，当为false时不支持点击
     * @default true
     * @example
     * //对组件进行操作，需要先对组件进行实例化。（用两个组件进行属性对比）
        var do_CheckBox = ui("do_CheckBox_1"); //对do_CheckBox组件实例化，其中do_CheckBox_1为ui页面上do_CheckBox组件的id
        var do_CheckBox_1 = ui("do_CheckBox_2");
        //do_CheckBox的enabled属性设置成true
        do_CheckBox.enabled = true;
        //do_CheckBox_1的enabled属性设置成false
        do_CheckBox_1.enabled = false;
     */
    enabled:boolean

    /**
     * 是否选中
     * 
     * 说明 : 为true时为选中状态，false为未选中状态
     * @default false
     * @example
     * //checked属性设置成true
        do_CheckBox.checked = true;
        do_CheckBox.text = "选中状态";
        //checked属性设置成false
        do_CheckBox_1.checked = false;
        do_CheckBox_1.text = "未选中状态";

        下图为示例代码id为”do_CheckBox”的checked属性设置为true选中和id为”do_CheckBox_1”的checked属性设置为false未选中的效果图
        @link {http://www.appworker.net/awdoc/web/img/20180507/991f1a5babc64ca6b01a4a0aff24b38e.png}
     */
    checked:boolean

    /**
     * 文本显示内容
     * 
     * 下图为示例代码id为”do_CheckBox”的text属性未赋值和id为”do_CheckBox_1”的text属性赋值为”text属性”的效果图。
     * @link {http://www.appworker.net/awdoc/web/img/20180507/8e01439f918b44f7be61d90c76a541f6.png}
     * @example
     * //将id为do_CheckBox的组件的text不赋值，id为do_CheckBox_1的text属性赋值为"text属性"；
     * do_CheckBox_1.text = "text属性";
     */
    text:string

    /**
     * 字体颜色
     * 
     * 说明 : 设置字体显示颜色，值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF
     * 
     * 下图为示例代码id为”do_CheckBox”的fontColor属性设置为”FF0000FF”红色和id为”do_CheckBox_1”的fontColor属性设置为”FF000050”后两位透明度为50的效果图
     * @link {http://www.appworker.net/awdoc/web/img/20180507/fd75fa3c1e2d4279925b810de57f4f78.png}
     * @example
     * //fontColor属性设置为红色
        do_CheckBox.fontColor = "FF0000FF";
        //fontColor属性设置为后两位是透明度为50的红色
        do_CheckBox_1.fontColor = "FF000050";   //后两位是透明度（Alpha）
     */
    fontColor:string

    /**
     * 字体风格
     * 
     * 下图为示例代码id为”do_CheckBox”的fontStyle属性分别设置为”normal”,”bold”,”italic”,”bold_italic”的效果图。
     * @link {http://www.appworker.net/awdoc/web/img/20180507/144a586d392647289e6d770de0f43cf5.png}
     * @default normal
     * @example
     * // fontStyle属性设置成常规
        do_CheckBox.fontStyle = "normal";
        // fontStyle属性设置成粗体
        do_CheckBox.fontStyle = "bold";
        // fontStyle属性设置成斜体
        do_CheckBox.fontStyle = "italic";
        // fontStyle属性设置成粗斜体
        do_CheckBox.fontStyle = "bold_italic";//(iOS平台不支持)
     */
    fontStyle:FontStyle

    /**
     * 字体标示
     * 
     * 编辑类型 : 只允许设计区内修改。
     * 
     * 下图为通过设计器修改id为”do_CheckBox”的textFlag属性分别设置为”normal”,”underline”,”strikethrough”的效果图。
     * @link {http://www.appworker.net/awdoc/web/img/20180507/fbcf9795aeb04416bc5c0974a59172ee.png}
     */
    textFlag:TextFlag

    /**
     * 字体大小
     * 
     * 下图为示例代码id为”do_CheckBox”的fontSize属性设置为”20”和id为”do_CheckBox_1”的fontSize属性设置为”30”的效果图。
     * @link {http://www.appworker.net/awdoc/web/img/20180507/6429ed23b36e460db996dfb7561e81c1.png}
     * @example
     * //id为"do_CheckBox"的fontSize属性设置成20
     * do_CheckBox.fontSize = 20;
     * //id为"do_CheckBox_1"的fontSize属性设置成30
     * do_CheckBox_1.fontSize = 30;
     */
    fontSize:number

    /**
     * 选择切换时触发
     * @param eventName 
     * @param listen 
     * @example
     * do_CheckBox.on("checkChanged", function(data) {
            if (data == true) {
                appworker.print("选中状态");
            } else {
                appworker.print("未选中状态");
            }
        })
     */
    on(eventName:'checkChanged',listen:(data:boolean)=>void):void
}