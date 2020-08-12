import { UiBasicInstance } from "../base/uiBase";


export interface DoSlideListView extends UiBasicInstance{

    /**
     * 是否滚动到屏幕顶部
     * 
     * 说明 : 属性设置成true时可以通过点击手机状态栏返回内容的顶部；仅支持iOS平台
     */
    canScrollToTop:boolean

    /**
     * 是否显示headerview
     * 
     * 说明 : 缺省false不显示
     */
    isHeaderVisible:boolean

    /**
     * 是否显示footerview
     */
    isFooterVisible:boolean


    /**
     * Cell选中的背景颜色
     */
    selectedColor:string

    /**
     * Cell对应的模板UI文件组
     * 
     * 说明 : 可以有多个cell模板，这个属性是一个json array，每一个元素都是一个source ui文件。
     * 这个属性的格式类似如下：[“source://view/cell1.ui”,”source://view/cell2.ui”,”source://view/cell3.ui]
     */
    templates:string

    /**
     * 表头视图
     * 
     * 说明 : 设置要显示的表头视图ui文件路径，不填但isHeaderVisible为true时有缺省样式
     */
    headerView:string

    /**
     * 底部视图
     * 
     * 说明 : 设置要显示的表头视图ui文件路径，不填但isFooterVisible为true时有缺省样式
     */
    footerView:string

    /**
     * 是否支持显示滚动条效果
     * 
     * 说明 : 为true的时候，当数据内容超出组件的边界，会出现滚动条标识。
     */
    isShowbar:boolean

    /**
     * headerview或footerview复位
     */
    rebound():void

    /**
     * 绑定item的数据
     * 
     * 说明: 可绑定listData和hashDatad实例，data的每一个元素都是一个json节点，json节点里有1个特殊key为template表明模板的索引号，在这个组件再增加2个特殊key：leftTemplate，rightTemplate表明左右对应的ui文件，比如[{ template:0 ,text:’aa’, rightTemplate:3},{ template:2 ,text:’cc’, leftTemplate: 3 }]；为保证组件使用效果，每次请绑定三条及以上的数据
     * @param data 
     * @example
     * var do_SlideListView = ui("do_SlideListView")
        //定义一个do_ListData
        var data2 = mm("do_ListData");
        do_SlideListView.bindItems(data2);
        //leftTemplate是左模板,rightTemplate是右模板
        var datag = [
        { template:0,leftTemplate:1,rightTemplate:2,"$1":"111","$3":"确定","$4":"取消"},
        { template:0,leftTemplate:1,"$1":"222","$2":"source://image/0.jpg","$3":"确定"},
        ];
        data2.addData(datag);
     * 
     */
    bindItems(data?:object):void

    /**
     * 刷新item数据
     */
    refreshItems():void

    /**
     * 平滑地滚动到特定位置
     * @param position 表示listview的第几行，从0开始计数，缺省值是 0
     * @param isSmooth 缺省是false表示直接跳转到某一行，没有任何平滑过渡的效果。为true表示平滑到那一行；其中为false的时候是不会触发scroll事件的，为true会触发；windows不支持该效果
     */
    scrollToPosition(position?:number,isSmooth?:boolean):void
    scrollToPosition(params:{position?:number,isSmooth?:boolean}):void

    /**
     * 显示HeaderView
     * 
     * 说明: 当设置isHeaderVisible=true，自动显示HeaderView，并触发pull事件，windows平台不支持
     */
    showHeader():void

    /**
     * 点击cell触发
     * @param eventName 当前cell的position值和在当前cell的绝对位置y
     * @param listen 
     * @returns 当前cell的position值和在当前cell的绝对位置y
     * 
     * @example 
     * do_SlideListView.on("touch",function(data){
            appworker.print(JSON.stringify(data),"点击cell的position值和绝对位置y")
        }
     */
    on(eventName:'touch',listen:(data:object)=>void):void
    /**
     * 长按cell触发
     * @param eventName 
     * @param listen 
     * @returns 当前cell的position值和在当前cell的绝对位置y
     * @example
     * do_SlideListView.on("LongTouch",function(data){
            appworker.print(JSON.stringify(data),"点击cell的position值和绝对位置y")
        })
     */
    on(eventName:'longTouch',listen:(data:object)=>void):void
    /**
     * 点击cell触发
     * @param eventName 
     * @param listen 
     * @returns 当前cell的position值和在当前cell的绝对位置y，windows平台不支持
     * @example
     * do_SlideListView.on("touch1",fucntion(data){
        appworker.print(JSON.stringify(data),"点击cell的position值和绝对位置y")
        })
     */
    on(eventName:'touch1',listen:(data:object)=>void):void
    /**
     * 长按cell触发
     * @param eventName 
     * @param listen 
     * @returns 当前cell的position值和在当前cell的绝对位置y，windows平台不支持
     */
    on(eventName:'longTouch1',listen:(data:object)=>void):void
    /**
     * 下拉headerview事件
     * @param eventName 
     * @param listen 
     * @returns 返回{state,offset}，其中state表示headerview的状态，offset为headerview下拉的位移量；其中state=0：表示开始下拉headerview，在headerview下拉到headerview复位整个过程中，pull事件会触发很多次；state=1：表示下拉headerview超过headerview的高度，触发一次这个事件，前端开发者接受到这个事件会更新headerview的ui；state=2：下拉超过一定值，触发state=1事件后，松手会触发一次这个事件，前端开发者接受到这个事件会更新headerview的ui，然后开始加载数据，数据加载完后需要调用rebound方法让header复位
     */
    on(eventName:'pull',listen:(data:object)=>void):void
    /**
     * 上拉footerview事件
     * @param eventName 
     * @param listen 
     * @returns 返回{state,offset}，其中state表示headerview的状态，offset为footerview上拉的位移量；state=0,表示一直上拉，当SlideListView的content到SlideListView的底部，从0开始到footerview复位，会多次触发这个事件；state=1，如果超过footerview的高度，这个事件只触发一次，前端接受到这个事件会更新footview的ui；state=2，如果超过footview的高度并松手，这个事件只触发一次，前端接受到这个事件会更新footview的ui，并开始加载数据，加载完后前端开发者需插入新的数据，并调用rebound复位footerview
     * 
     */
    on(eventName:'push',listen:(data:object)=>void):void
    /**
     * 滑动事件
     * @param eventName 
     * @param listen 
     * @returns iOS和Android平台返回{firstVisiblePosition,lastVisiblePosition}，其中firstVisiblePosition表示在组件高度范围内第一个可见cell的位置，lastVisiblePosition表示在组件高度范围内最后一个可见cell的位置；windows平台返回offset表示滚动的位移
     */
    on(eventName:'scroll',listen:(data:object)=>void):void
}