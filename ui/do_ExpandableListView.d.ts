import { UiBasicInstance } from "../base/uiBase";

/**
 * 点击并展开group的时候，scroll事件IOS不触发，android触发。原因：原生无法修复
 * IOS平台当group的背景为透明时，child展开关闭时会有一闪的问题，该问题必须用户给group一个白色背景。原因：原生无法解决
 */
export interface DoExpandableListView extends UiBasicInstance{

    /**
     * 是否全部展开
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 控制组件初始化时所有group是否全部展开
     * 
     * 左图为设置allExpanded为false，右图为设置allExpanded为true：
     * @link {http://www.appworker.net/awdoc/web/img/20180507/400245ca5dc4439a80430b17c6d13247.png}
     * @link {http://www.appworker.net/awdoc/web/img/20180507/7ebde0d1acfe4ff3bbccf5a13f21e3c8.png}
     * 
     * @default false
     */
    allExpanded:boolean

    /**
     * 是否滚动到屏幕顶部
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 属性设置成true时可以通过点击手机状态栏返回内容的顶部；仅支持iOS平台
     * @default true
     */
    canScrollToTop:boolean

    /**
     * 组模板UI文件
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : group对应的模板UI文件,如： source://view/group.ui，支持多模版
     */
    groupTemplate:string

    /**
     * 子项模板UI文件
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : child对应的模板UI文件,如： source://view/child.ui，支持多模版。
     * 
     * 下图是对groupTemplate和childTemplate赋值并绑定数据的效果图：
     * @link {http://www.appworker.net/awdoc/web/img/20180507/89285ccab1b342e68b98ce0fb411d3a0.png}
     */
    childTemplate:string

    /**
     * 按下cell显示的背景色
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 点击cell时，该cell的背景色会变成设置的颜色（模板背景色为透明时才可以看到效）
     * 
     * 下图是设置selectedColor为FFD9ECFF的效果图：
     * @link {http://www.appworker.net/awdoc/web/img/20180507/2face69e8a874e2e85fd673034077786.png}
     * 
     * @default 00000000
     */
    selectedColor:string

    /**
     * 是否支持显示滚动条效果
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 为true的时候，当内容超出视图的边界，滚动时屏幕右侧会出现滚动条
     * 
     * 下图是设置isShowbar为true的效果图：
     * @link {http://www.appworker.net/awdoc/web/img/20180507/3eacfbac0dfa4d54a249a5a57e69dd9c.png}
     * 
     * @default true
     */
    isShowbar:boolean

    /**
     * 绑定item的数据
     * @param groupData 
     * @param childData 
     * 
     * @example
     * var do_ExpandableListView = ui("do_ExpandableListView_1");  //实例化do_ExpandableListView组件
        var group_listdata = mm("do_ListData");    //定义一个do_ListData为groupData
        var child_listdata = mm("do_ListData");    //定义一个do_ListData为childData
        //为group_listdata增加数据
        group_listdata.addData([ {
            "groupid" : "001001",
            "img_type" : "source://view/do_ExpandableListView/zk.jpg",
            "gname" : "MacBook Air"
        }, {
            "groupid" : "001002",
            "img_type" : "source://view/do_ExpandableListView/zk.jpg",
            "gname" : "MacBook Pro"
        }, {
            "groupid" : "001003",
            "img_type" : "source://view/do_ExpandableListView/zk.jpg",
            "gname" : "iMac"
        }, {
            "groupid" : "001004",
            "img_type" : "source://view/do_ExpandableListView/zk.jpg",
            "gname" : "Mac mini"
        } ]);
        //为child_listdata增加数据
        child_listdata.addData([ [ {
            "groupid" : "001001",
            "childid" : 496,
            "cname" : "MacBook Air 11英寸 MJVP2CH/A",
            "productTypeName" : "MacBook Air",
            "img":"source://view/do_ExpandableListView/1.png"
        },{
            "groupid" : "001001",
            "childid" : 3,
            "cname" : "MacBook Air 13英寸 MD760CH/A",
            "productTypeName" : "MacBook Air",
            "img" : "source://view/do_ExpandableListView/1.png"
        }, {
            "groupid" : "001001",
            "childid" : 2,
            "cname" : "MacBook Air 11英寸 MD712CH/A",
            "productTypeName" : "MacBook Air",
            "img":"source://view/do_ExpandableListView/1.png"
        }, {
            "groupid" : "001001",
            "childid" : 1,
            "cname" : "MacBook Air 11英寸 MD711CH/A",
            "productTypeName" : "MacBook Air",
            "img":"source://view/do_ExpandableListView/1.png"
        } ], [ {
            "groupid" : "001002",
            "childid" : 492,
            "cname" : "MacBook Pro 13英寸 MF841CH/A",
            "productTypeName" : "MacBook Pro",
            "img":"source://view/do_ExpandableListView/1.png"
        }, {
            "groupid" : "001002",
            "childid" : 491,
            "cname" : "MacBook Pro 13英寸 MF840CH/A",
            "productTypeName" : "MacBook Pro",
            "img":"source://view/do_ExpandableListView/1.png"
        }, {
            "groupid" : "001002",
            "childid" : 401,
            "cname" : "MacBook Pro 15英寸 MD322CH/A",
            "productTypeName" : "MacBook Pro",
            "img":"source://view/do_ExpandableListView/1.png"
        }, {
            "groupid" : "001002",
            "childid" : 9,
            "cname" : "MacBook Pro 13英寸 MD101CH/A",
            "productTypeName" : "MacBook Pro",
            "img":"source://view/do_ExpandableListView/1.png"
        } ], [ {
            "groupid" : "001003",
            "childid" : 434,
            "cname" : "iMac 27英寸 MF886CH/A",
            "productTypeName" : "iMac",
            "img":"source://view/do_ExpandableListView/1.png"
        }, {
            "groupid" : "001003",
            "childid" : 30,
            "cname" : "iMac 27英寸 MD096CH/A",
            "productTypeName" : "iMac",
            "img":"source://view/do_ExpandableListView/1.png"
        }, {
            "groupid" : "001003",
            "childid" : 29,
            "cname" : "iMac 27英寸 MD095CH/A",
            "productTypeName" : "iMac",
            "img":"source://view/do_ExpandableListView/1.png"
        },{
            "groupid" : "001003",
            "childid" : 23,
            "cname" : "iMac 21.5英寸 ME086CH/A",
            "productTypeName" : "iMac",
            "img":"source://view/do_ExpandableListView/1.png"
        } ], [ {
            "groupid" : "001004",
            "childid" : 523,
            "cname" : "apple watch 38mm MLLD2CH/A不锈钢红运动表带",
            "productTypeName" : "Mac mini",
            "img":"source://view/do_ExpandableListView/1.png"
        }, {
            "groupid" : "001004",
            "childid" : 522,
            "cname" : "apple watch 42mm MJ3T2CH/A灰铝黑运动表带",
            "productTypeName" : "Mac mini",
            "img":"source://view/do_ExpandableListView/1.png"
        }, {
            "groupid" : "001004",
            "childid" : 32,
            "cname" : "Mac mini MD388CH/A",
            "productTypeName" : "Mac mini",
            "img":"source://view/do_ExpandableListView/1.png"
        }, {
            "groupid" : "001004",
            "childid" : 31,
            "cname" : "Mac mini MD387CH/A",
            "productTypeName" : "Mac mini",
            "img":"source://view/do_ExpandableListView/1.png"
        } ] ]);
        //绑定item的数据,绑定数据后刷新item才可以看到效果
        do_ExpandableListView.bindItems(group_listdata,child_listdata);
     */
    bindItems(groupData?:object,childData?:object):void

    /**
     * 刷新item数据
     * 
     * @example
     * //刷新item数据
     * do_ExpandableListView.refreshItems();
     * @link {http://www.appworker.net/awdoc/web/img/20180507/140eff47c5df4b46935bfd9c24abbde9.png}
     */
    refreshItems():void

    /**
     * 刷新指定组数据
     * 
     * //刷新第0,…,k,…i组数据;该数组是需要刷新数据的索引数组
     * //所有手动更改数据源的值如:listdata.updateOne(x,data)中的索引x值都应该包含在[0,…,k,…i]中
     * 
     * @param groupIndexs 刷新指定组数据，参数不填或传递[ ]刷新所有组数据
     * @example  do_ExpandableListView.refreshSpecifiedItems([0,1]);   //刷新第一组第二组数据
     */
    refreshSpecifiedItems(groupIndexs?:object):void

    /**
     * 展开组
     * @param indexs 同时展开一组或多组，indexs表示视图的第几组，从0开始计数
     * @example
     * //展开第一组和第二组数据
     * do_ExpandableListView.expandGroup([0,1]);
     */
    expandGroup(indexs:Array<number>):void

    /**
     * 收缩组
     * @param indexs 同时收缩一组或多组，indexs表示视图的第几组，从0开始计数
     * @example
     * //收缩第一组和第二组数据
     * do_ExpandableListView.collapseGroup([0,1]);
     */
    collapseGroup(indexs:Array<number>):void

    /**
     * 平滑地滚动到特定位置
     * @param groupIndex 表示第几组，从0开始计数，缺省值是0
     * @param childIndex 表示某一组的第几行，从0开始计数，缺省值是0
     * @param isSmooth 缺省是false表示直接跳转到某一行，没有任何平滑过渡的效果。为true表示平滑到那一行；其中为false的时候是不会触发scroll事件的，为true会触发；windows平台不支持该效果
     * 
     * @example
     * //平滑的滚动到第二组第三行数据
     * do_ExpandableListView.scrollToPosition({groupIndex:1,childIndex:2,isSmooth:true});
     */
    scrollToPosition(groupIndex?:number,childIndex?:number,isSmooth?:boolean):void
    scrollToPosition(params:{groupIndex?:number,childIndex?:number,isSmooth?:boolean}):void

    /**
     * 点击group中的cell触发
     * @param eventName 
     * @param listen 
     * @returns 当前cell的索引值
     * @example
     * var group_imgsource = ["source://view/do_ExpandableListView/zk.jpg","source://view/do_ExpandableListView/ss.jpg"];
        //点击group时触发，点击时自动展开或收缩该组数据
        do_ExpandableListView.on("groupTouch",function(d){
            var g_item = group_listdata.getOne(d);
            g_item.img_type == group_imgsource[0] ? g_item.img_type = group_imgsource[1] : g_item.img_type = group_imgsource[0];
            group_listdata.updateOne(d, g_item); //更新点击的group数据
            do_ExpandableListView.refreshSpecifiedItems([d]);//刷新指定组数据（不调用该方法刷新数据可能会导致页面数据错乱）
        })
     */
    on(eventName:'groupTouch',listen:(data:number)=>void):void
    /**
     * 点击child中的cell触发
     * @param eventName 
     * @param listen 
     * @returns 当前group的索引值和cell的索引值,如：{‘groupIndex’:1,’childIndex’:5}
     * @example
     * var child_imgsource = ["source://view/do_ExpandableListView/1.png","source://view/do_ExpandableListView/2.png"];
        //点击child时触发
        do_ExpandableListView.on("childTouch",function(data){
            var c_item = child_listdata.getOne(data.groupIndex);
            c_item.map(function(v,k){
                    if (k == data.childIndex){
                        v.img == child_imgsource[0] ? v.img = child_imgsource[1] : v.img = child_imgsource[0];
                    }
            });
            child_listdata.updateOne(data.groupIndex, c_item);//更新点击的child数据
            var device = sm("do_Device").getInfo();
            if (device.OS == "android"){//安卓更新child数据时需要调用refreshItems方法刷新数据,否则数据刷新不了
                    do_ExpandableListView.refreshItems();   
            }
            do_ExpandableListView.expandGroup([data.groupIndex]); //展开一组数据，点击child时需要展开该child所在的group
        })
     */
    on(eventName:'childTouch',listen:(data:object)=>void):void
    /**
     * group展开触发
     * @param eventName 
     * @param listen 
     * @returns 当前group中cell的索引值
     * @example 
     * //组展开时触发
        do_ExpandableListView.on("groupExpand",function(_index){
            appworker.print(_index,"当前展开的组的索引");
        })
     */
    on(eventName:'groupExpand',listen:(data:number)=>void):void
    /**
     * group收缩触发
     * @param eventName 
     * @param listen 
     * @returns 当前group中cell的索引值
     * @example
     * //组收缩时触发
        do_ExpandableListView.on("groupCollapse",function(_index){
            appworker.print(_index,"当前收缩的组的索引");
        })
     */
    on(eventName:'groupCollapse',listen:(data:number)=>void):void
    /**
     * 滑动事件
     * @param eventName 
     * @param listen 
     * @returns Android平台返回{firstVisiblePosition,lastVisiblePosition}，其中firstVisiblePosition表示在组件高度范围内第一个可见cell的位置，lastVisiblePosition表示在组件高度范围内最后一个可见cell的位置；iOS和windows平台返回offset表示滚动的位移
     * @example
     * //滑动时触发
        do_ExpandableListView.on("scroll",function(_data){
            appworker.print(JSON.stringify(_data),"scroll事件返回值");  
        })
        //Android平台返回{firstVisiblePosition,lastVisiblePosition}，其中firstVisiblePosition表示在组件高度范围内第一个可见cell的位置，lastVisiblePosition表示在组件高度范围内最后一个可见cell的位置。示例如下：
        {
            "firstVisiblePosition":0,
            "lastVisiblePosition":11
        }
        // iOS和windows平台返回offset表示滚动的位移，示例如下：
        {
            "offset":146.8125
        }
     */
    on(eventName:'scroll',listen:(data:object)=>void):void
}