import { UiBasicInstance, FontStyle } from "../base/uiBase";

export interface DoPicker extends UiBasicInstance{

    /**
     * 当前选中的数据索引
     * 
     * 说明 : 数据的索引值，设置时会切换数据选择，索引小于0时指向数组第一个数据，越界时指向数组最后一个数据
     */
    index:number

    /**
     * @default 20
     */
    fontSize:number

    /**
     * @default 000000FF
     */
    fontColor:string

    fontStyle:FontStyle
    /**
     * 被选中字体颜色
     * @default 000000FF
     * @example do_Picker.selectedFontColor = "FF0000FF"; //选中的字体设置为红色
     */
    selectedFontColor:string

    /**
     * 被选中字体风格
     */
    selectedFontStyle:FontStyle

    /**
     * 绑定item的数据
     * @param data 需有一项为text用于显示文字，比如[‘a’’b’…]
     * @example
     * var listdata = mm("do_ListData");
        do_Picker.bindItems(listdata);
        var datas = [ "那年花开月正圆-孙俪", "三生三世十里桃花-杨幂", "秦时丽人明月心-迪丽热巴", "楚乔传-赵丽颖" ];
        listdata.addData(datas);
        do_Picker.refreshItems();
        @link {http://www.appworker.net/awdoc/web/img/20180507/7ededc07b99c4022aead1a83813004e5.png}
     */
    bindItems(data?:object):void

    refreshItems():void

    /**
     * 当数据变化或数据索引变化触发
     * @param eventName 
     * @param listen 
     * @returns 返回选中数据的索引
     * @example
     * do_Picker.on("selectChanged", function(data) {print(JSON.stringify(data));})
     */
    on(eventName:'selectChanged',listen:(data:number)=>void):void
}