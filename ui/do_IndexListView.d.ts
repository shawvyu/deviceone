import { UiBasicInstance } from "../base/uiBase";

/**
 * @link https://github.com/do-project/code4do/tree/master/weixin
 */
export interface DoIndexListView extends UiBasicInstance{
    /**
     * 索引颜色
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 包含四个颜色，分别是索引列表背景色、按下索引背景色、索引文本颜色、滑块颜色，中间用逗号隔开，仅android平台支持
     * @default 00000000,C0C0C0,000000,00000000
     */
    indexBarColors:string

    /**
     * Cell选中的背景颜色
     * 
     * 说明 : 设置IndexListView 的按下选择颜色，如果在模板中设置了最底层ALayout的背景颜色，该属性将不起作用
     * @default ffffff00
     */
    selectedColor:string

    /**
     * Cell对应的模板UI文件组
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 一个IndexListView可以有多个cell模板，这个属性包含多个source://开头的ui文件，中间用逗号隔开，格式类似如下：“source://view/cell1.ui,source://view/cell2.ui,source://view/cell3.ui”
     */
    templates:string

    /**
     * 绑定item的数据
     * @param data data里每个分组下第一条数据表示分组信息，不可点击
     * @param indexs 一个数组列表，按照此列表显示列表数据，可以为空，为空就按照HashData‘随机’显示列表数据
     * @link {http://www.appworker.net/awdoc/web/img/20180507/3be9470465984f0a9595709f3173f02e.png}
     * @example
     * var do_HashData = mm("do_HashData"); //实例化绑定的HashData数据源
        var index_arr = [];
        var _datas = {  //定义绑定的数组，即bindItems方法里的data参数
            "A" : [ {
                "template" : 0,
                "text" : "A"
            }, {
                "template" : 1,
                "Id" : "admin",
                "icon" : "source://view/do_IndexListView/image/default.png",
                "_choose" : "source://view/do_IndexListView/image/choose.png",
                "text" : "管理员",
                "Code" : "admin"
            } ],
            "B" : [ {
                "template" : 0,
                "text" : "B"
            }, {
                "template" : 1,
                "Id" : "532c53ccc8ac4a12842436c39c1a1961",
                "icon" : "source://view/do_IndexListView/image/default.png",
                "_choose" : "source://view/do_IndexListView/image/choose.png",
                "text" : "标签1",
                "Code" : "12"
            } ],
            "J" : [ {
                "template" : 0,
                "text" : "J"
            }, {
                "template" : 1,
                "Id" : "552ae6b3e15443acb89864db790dbab0",
                "icon" : "source://view/do_IndexListView/image/default.png",
                "_choose" : "source://view/do_IndexListView/image/choose.png",
                "text" : "技术2",
                "Code" : "6"
            }, {
                "template" : 1,
                "Id" : "58b1149567794a0dac5b6ac15eeb17ef",
                "icon" : "source://view/do_IndexListView/image/default.png",
                "_choose" : "source://view/do_IndexListView/image/choose.png",
                "text" : "技术1",
                "Code" : "5"
            } ]
        };
        for (var key in _datas){
            index_arr.push(key);   //处理绑定的索引数组即bindItems方法里的indexs参数
        }
        do_HashData.removeAll();
        do_HashData.addData(_datas);
        ui("do_IndexListView_1").bindItems(do_HashData,index_arr);
        ui("do_IndexListView_1").refreshItems();  //绑定数据后刷新
     */
    bindItems(data:object,indexs?:Array<string>):void

    /**
     * 刷新item数据
     * 
     * 说明: 动态修改HashData数据源后，需要调用此方法才能正确显示数据
     */
    refreshItems():void

    /**
     * 点击cell触发
     * @param eventName 
     * @param listen 
     * @returns 返回data中的groupID和group下的数据index，比如{‘groupID’:’A’,’index’:’2’}
     * @example
     * ui("do_IndexListView_1").on("touch","","1000",function(_data){
            print(JSON.stringify(_data),"点击事件")
        })
        //返回值如下
        {
        "groupID":"B",
        "index":1
        }
     */
    on(eventName:'touch',listen:(data:object)=>void):void
    /**
     * 长按cell触发
     * @param eventName 
     * @param listen 
     * @returns 返回data中的groupID和group下的数据index，比如{‘groupID’:’A’,’index’:’2’}
     * @example
     * ui("do_IndexListView_1").on("longTouch",function(_data){
            print(JSON.stringify(_data),"长按事件")
        })
        //返回值如下
        {
        "groupID":"A",
        "index":1
        }
     */
    on(eventName:'longTouch',listen:(data:object)=>void):void
}