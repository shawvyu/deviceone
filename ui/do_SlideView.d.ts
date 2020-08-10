import { UiBasicInstance } from "../base/uiBase";

export interface DoSlideView extends UiBasicInstance{
    /**
     * 是否支持手势滑动
     * 
     * 说明 : 当属性值为true时，组件可通过手势左右滑动来切换页面；为false时，手势无法滑动，只能通过修改index来切换页面；
     * @default true
     */
    allowGesture:boolean

    /**
     * 是否缓存页面状态（已废弃）
     * 
     * 说明 : （不论设置成true和false，效果都为设置成true时一样）为true的时候每一条数据缓存一个View，对应的ui文件和js文件只会加载一次，对应的dataRefresh事件只会触发一次，以后不管如何左右滑动都不再加载和触发事件。如果数据不多，建议设置为true为false时，可以复用View，对应的ui和js可能在来回滑动SlideView的时候会加载多次，而datarefreshed事件每次滑动到这一页就会触发一次。如果需要不想保留每一个页的状态变化，另外需加载较多数据的时候，建议使用false
     * @default true
     * @deprecated 
     */
    isAllCache:boolean

    /**
     * 左右无限滑动
     * 
     * 明 : 左右无限循环滑动视图，设置值为true表示支持无限循环滑动，默认为false
     * @default false
     */
    looping:boolean

    /**
     * 当前滑动UIView索引
     * 
     * 说明 : 设置滑动视图索引值，默认为0
     * @default 0
     */
    index:number

    /**
     * 显示视图对应UI模板文件
     * 
     * 说明 : 可以设置一个或多个UI模板文件，值为String类型，多个模板之间分别用“,”分隔，例如：“source://view/temp/t0.ui,source://view/temp/t1.ui”
     */
    templates:string

    /**
     * 绑定视图模板数据
     * @param data 
     * @example
     * var do_SlideView = ui("do_SlideView");
        var listData0 = mm("do_ListData");
        //通过template属性来选定模板
        var data0 = [
        {template:0,"$text":"index 0"},
        {template:1,"$text":"index 1"},
        {template:0,"$text":"index 2"},
        {template:0,"$text":"index 3"},
        {template:1,"$text":"index 4"},
        {template:1,"$text":"index 5"}
        ];
        listData0.addData(data0);
        do_SlideView.bindItems({
            data : listData0
        });
     */
    bindItems(data?:object):void

    /**
     * 刷新数据
     * 
     * 说明: 支持动态刷新当前视图显示数据
     * @example do_SlideView.refreshItems()
     */
    refreshItems():void

    /**
     * 开始轮播
     * 
     * 说明: 当looping属性为true时，轮播会从右至左按index顺序循环；当looping为false时，顺序轮播完所有index页后再逆序轮播
     * @param interval [300] 轮播间隔时间，单位为毫秒
     * @example
     * //设置间隔500毫秒轮播
        do_SlideView.startLoop({interval : 500});
     */
    startLoop(interval?:number):void
    startLoop(param:{interval?:number}):void

    /**
     * 停止轮播
     * @example do_SlideView.stopLoop()
     */
    stopLoop():void

    /**
     * 获取子View
     * @param index 要获取的View的索引
     * @returns 子view对应的ui文件RootView地址
     * @example
     * //获取第0个子view的地址
        var data = do_SlideView.getView({
            index : 0
        });
     */
    getView(index:string):string

    /**
     * 滑动显示当前视图后触发该事件
     * @param eventName 
     * @param listen 
     * @returns 返回当前index
     * @example
     * do_SlideView.on("indexChanged", function(data, e) {
        print(data,"滑动到第几个视图")
        })
     */
    on(eventName:'indexChanged',listen:(data:number)=>void):void
    /**
     * 点击cell触发
     * @param eventName 
     * @param listen 
     * @returns 当前cell的index值,如：{‘index’:1}
     * @example do_SlideView.on("touch", function(data, e) {
                    print(data,"点击第几个视图")
                })
     */
    on(eventName:'touch',listen:(data:object)=>void):void


}