import { UiBasicInstance } from "../base/uiBase";

/**
 * do_ScrollView嵌套在do_SlideView的cell模板中，如果根目录有touch事件则scorllview不能滑动。原因：Android严格遵守之前定义的事件传递机制。 iOS可以上下滑动是因为iOS的do_ScrollView具有最高处理级别会优先处理滚动事件。
 * 
 * android的滚动不是依靠里面嵌套的alayout的大小超过scrollview的大小就能滚动，而是根据内容来滚动，比如alayout里又有一个label，这个label需要放在scrollview组件可见范围外才可滚动；如果只放一个超过scrollview大小的alayout，给个背景色，而里面没有内容，整个alayout都会不显示。
 * 
 * android下拉scrollview，直到offset=100，然后松手，offset值不会倒序回到0
 * 
 * ios触发pull事件的同时还会触发scorll事件，这是自身有弹性。
 */
export interface DoScrollView extends UiBasicInstance{

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
     * 是否显示headerview
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 设置是否显示顶部视图，只有滚动方向为纵向才有效，横向不支持；缺省false不显示
     */
    isHeaderVisible:boolean

    /**
     * 是否显示footerview
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 缺省false不显示
     */
    isFooterVisible:boolean

    /**
     * 滚动方向
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 设置视图滚动方向，支持两种类型：horizontal（横向）、vertical（纵向）
     * @default vertical
     * @link {http://www.appworker.net/awdoc/web/img/20180329/95d722664f8b42889b54c8b19e239d42.png}
     */
    direction:string

    /**
     * 显示滚动条
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 为true的时候，当scrollview内内容超出scrollview的边界，会出现滚动条标识
     * @default false
     */
    isShowbar:boolean

    /**
     * 顶部视图
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 可自定义下拉滑动显示顶部视图效果，通常用于动态加载数据过程，下拉顶部自定义视图是一个UI模板文件，例如source://view/head.ui，只有滚动方向为纵向才有效，横向不支持
     * @link {http://www.appworker.net/awdoc/web/img/20180329/46e0879b19f9479a8577a213056c8171.png}
     */
    headerView:string

    /**
     * 底部视图
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 设置要显示的表头视图地址，不填但isFooterVisible为true时有缺省样式
     * @link {http://www.appworker.net/awdoc/web/img/20180329/5ec1886d7fd8491696c5d87fd602e348.png}
     */
    footerView:string

    /**
     * 是否有回弹效果
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 标识当前scrollView是否有回弹效果，默认具有回弹效果，仅iOS有效
     * @default true
     */
    bounce:boolean

    /**
     * 滚到到最前
     * 
     * 说明: 当前滚动视图是横向则滚动到最左边，如果是纵向则滚到最顶部
     * 
     * @example
     * var do_ScrollView_1 = ui("do_ScrollView_1");  //实例化do_ScrollView组件
     * do_ScrollView_1.toBegin();
     */
    toBegin():void

    /**
     * 滚到到最后
     * 
     * 说明: 当前滚动视图是横向则滚动到最右边，如果是纵向则滚到最底部
     * @example  do_ScrollView_1.toEnd();
     */
    toEnd():void

    /**
     * 顶部视图复位
     * 
     * 说明: 如顶部视图当前属于可见状态，则将其变为不可见，恢复到没有下拉滑动之前的视图效果
     * @example  do_ScrollView_1.rebound();
     */
    rebound():void

    /**
     * 滚动到指定位置
     * 
     * 说明: 滚动方向跟ScrollView的方向一致
     * @param offset [0] 
     * @example   do_ScrollView_1.scrollTo(1000);
     */
    scrollTo(offset?:number):void

    /**
     * 截屏
     * 
     * 说明: 截取当前ScrollView中所有内容
     * @param listen 
     * @returns 返回截屏图片保存的地址，是一个data://temp/do_ScrollView目录下一个图片文件，文件名是日期+时间
     * @example 
     *   do_ScrollView_1.screenShot(function(data, e) {
                print(data,"截屏图片")
            })
     */
    screeShot(listen:(data:string)=>void):void

    /**
     * 下拉滑动显示顶部视图时触发事件
     * @param eventName 
     * @param listen 
     * @returns 返回{state,offset}，其中state表示headerview的状态，offset为headerview下拉的位移量。其中state=0：表示开始下拉headerview；在headerview下拉到headerview复位整个过程中，pull事件会触发很多次；state=1：下拉headerview超过headerview的高度时触发一次这个事件，前端开发者可以在该事件触发时更新headerview的ui；state=2：下拉超过headerview的高度触发并松手会触发一次该事件，前端开发者可以在该事件触发时更新headerview的ui，然后开始加载最新的数据，数据加载完后需要调用rebound方法复位headerview。
     * @example 
     *   do_ScrollView_1.on("pull", function(data) {
                print(JSON.stringify(data),"pull事件")
                if (data.state == 2) {// 下拉到一定位置松手开始刷新数据
                    do_ScrollView_1.rebound();
                }
            })
            //pull事件返回值示例
            {
                "state":0,
                "offset":"93.10208333333333"
            }
     */
    on(eventName:'pull',listen:(data:object)=>void):void
    /**
     * 上拉footerview事件
     * @param eventName 
     * @param listen 
     * @returns 返回{state,offset}，其中state表示footerview的状态，offset为footerview上拉的位移量。state=0,表示开始上拉，从footerview开始上拉到footerview复位过程中，push事件会多次触发；state=1，如果下拉超过footerview的高度时这个事件会触发一次，前端开发者可以在触发这个事件时更新footerview的ui；state=2，如果超过footerview的高度并松手会触发一次该事件，前端开发者可以在这个事件触发时更新footerview的ui，并开始加载数据，加载完后前端开发者需插入新的数据，并调用rebound复位footerview。
     * @example
     *   do_ScrollView_1.on("push", function(data) {
            print(JSON.stringify(data),"push事件")
            if (data.state == 2) {
            do_ScrollView_1.rebound();
            }
        })
     */
    on(eventName:'push',listen:(data:object)=>void):void
    /**
     * 控件滚动触发
     * @param eventName 
     * @param listen 
     * @returns 控件滚动的距离，若direction属性为horizontal，返回值为{left:滚动离左边的距离,oldLeft:上一次滚动离左边的距离}；若direction属性为vertical，返回值为{top:滚动离顶部的距离,oldTop:上一次滚动离顶部的距离}
     * @example 
     *   do_ScrollView_1.on("scroll", function(data) {
                print(JSON.stringify(data),"scroll事件")
            })
            //scroll事件返回值示例
            {
                "top":318.90937499999995,
                "oldTop":318.21458333333334
            }
     */
    on(eventName:'scroll',listen:(data:object)=>void):void


}