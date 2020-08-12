import { UiBasicInstance, FontStyle, TextFlag, TextAlign } from "../base/uiBase";

export interface DoMultiSelectComboBox extends UiBasicInstance{

    /**
     * 文本显示内容
     */
    text:string

    /**
     * 字体颜色
     */
    fontColor:string

    /**
     * 字体大小
     */
    fontSize:number

    fontStyle:FontStyle
    textFlag:TextFlag
    /**
     * 当前选中的数据索引数组
     * 
     * 说明 : 数据的索引值，设置时会切换数据选择
     * @default 1
     * @example 
     * do_MultiSelectComboBox.indexs = 1;
     */
    indexs:string

    /**
     * 数据集合
     * 
     * 说明 : 可供选择的数据集合，中间用逗号隔开多个文本，如’北京,上海,广州…’
     * @example do_MultiSelectComboBox.items = "北京,上海,广州,三亚";
     */
    items:string
    textAlign:TextAlign

    /**
     * 绑定item的数据
     * 
     * @param data 比如[{‘text’:’a1’,’id’:’1’},{‘text’:’a2’,’id’:’2’}]，其中text字段是必须的，用于显示文本内容，这里显示的就是a1，a2，其他字段可任意增加，根据选择的item索引获取内容
     * @example
     * var listdata = mm("do_ListData");
        do_MultiSelectComboBox.bindItems(listdata);
        var datas = [ {
            text : "那年花开月正圆-孙俪"
        }, {
            text : "三生三世十里桃花-杨幂"
        }, {
            text : "秦时丽人明月心-迪丽热巴"
        }, {
            text : "楚乔传-赵丽颖"
        } ];
        listdata.addData(datas);
        do_MultiSelectComboBox.refreshItems();

        @link {http://www.appworker.net/awdoc/web/img/20180507/294c29ff1efa46509dbfcf073b193cef.png}
     */
    bindItems(data:object):void

    /**
     *  刷新item数据
     */
    refreshItems():void

    /**
     * 选中列表项触发事件
     * @param eventName 
     * @param listen 
     * @returns 返回选中数据的索引数组
     * @example
     * do_MultiSelectComboBox.on("selectChanged", function(data) {
            appworker.print(JSON.stringify(data));
        })
        分别点击索引1,2,0时返回的data值为：
        ["1","2","0"]
     */
    on(eventName:'selectChanged',listen:(data:object)=>void):void
}