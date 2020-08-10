import { UiBasicInstance } from "../base/uiBase";

export interface DoSegmentView extends UiBasicInstance{
    /**
     * 当前滑动cell索引
     * 
     * 说明 : 设置当前滑动cell索引值，默认为0
     */
    index:number

    /**
     * cell对应的模板UI文件组
     * 
     * 说明 : 一个SegmentView可以有多个cell模板，这个属性是一个json array，每一个元素都是一个source ui文件。这个属性的格式类似如下： source://view/cell1.ui,source://view/cell2.ui,source://view/cell3.ui
     */
    templates:string

    /**
     * 绑定item的数据
     * @param data 
     * @example
     *   var listData0 = mm("do_ListData");
        do_SegmentView.bindItems({
                data : listData0
                });
        //通过template属性来选定模板
        var data0 = [
                                {template:0,"$text":"index 0"},
                                {template:0,"$text":"index 1"},
                                {template:1,"$text":"index 2"},
                                {template:0,"$text":"index 3"},
                                {template:1,"$text":"index 4"},
                                {template:1,"$text":"index 5"},
                                {template:0,"$text":"index 6"},
                                {template:1,"$text":"index 7"},
                                {template:1,"$text":"index 8"}
                        ];
            listData0.addData(data0);
     */
    bindItems(data?:object):void

    /**
     * 刷新item数据
     * @example do_SegmentView.refreshItems()
     */
    refreshItems():void

    /**
     * 点击cell加载完成后触发
     * @param eventName 
     * @param listen 
     * @returns 返回当前cell的index
     * @example do_SegmentView.on("indexChanged",function(data){
                    print(data,"切换view触发")
                })
     */
    on(eventName:'indexChanged',listen:(data:number)=>void):void
}