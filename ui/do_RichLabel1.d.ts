import { UiBasicInstance, FontStyle, TextFlag, TextAlign } from "../base/uiBase";

export interface DoRichLabel1 extends UiBasicInstance{

    fontColor:string
    fontStyle:FontStyle
    textFlag:TextFlag
    fontSize:number
    textAlign:TextAlign
    /**
     * 最大高度
     * 
     * 编辑类型 : 只允许设计区内修改。
     * 
     * 说明 : label的height为－1的时候，label会根据text内容自动适配变高，但是不会高于maxHeight
     */
    maxHeight:number

    /**
     * 最多行数
     * 
     * 编辑类型 : 只允许设计区内修改。
     * 
     * 说明 : 最大行数，缺省是1，如果为小于或等于0表示不限行数，说明：设置文本内容显示最大行数，如显示内容超过了最大行值则结尾用省略号…表示；iOS平台不支持
     */
    maxLines:number

    /**
     * 最大宽度
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 设置文本框显示最大宽度值，只有在设置Width属性值为-1时有效，否则不起作用;
     */
    maxWidth:number

    text:string

    /**
     * 设置区域内显示富文本字体样式
     * @link {http://www.appworker.net/awdoc/web/img/20180507/dccbce521e5f42ae8be912ec870fef51.png}
     * @example
     * do_RichLabel1_1.span = [{
            "strMatch":"1",
        "substring":"0,13",
        "spanStyle": "{\"fontColor\":\"4782F6FF\",\"fontStyle\":\"normal\"}",
        "allowTouch": true,
        "tag":"点我~~"
        }]

          值格式为：[{},{}]。其中{}中的内容为
            1.strMatch，如1，匹配指定字符串设置其样式；
            2.substring，如0,13（开始字符位置，结束字符位置），修改指定范围内的字符串样式（注：跟第1点的效果同时生效）；
            3.spanStyle，如{fontColor:'4782F6FF',fontStyle:'normal'}，匹配区域内字体显示样式；
            4.allowTouch，bool型，匹配区域的内容是否允许点击事件；
            5.tag，自定义数据
     */
    span:string

    /**
     * 匹配内容点击事件
     * @param eventName 
     * @param listen 
     * @returns 返回匹配到的内容content和tag数据
     * 
     * @example
     * do_RichLabel1_1.on("touch",function(data){
            appworker.print(JSON.stringify(data),"touch事件")
        })

        以下为点击匹配内容的事件返回的值data：
        {
            "content":"do_RichLabel1",
            "tag":"点我~~"
        }
     */
    on(eventName:'touch',listen:(data:object)=>void):void
}