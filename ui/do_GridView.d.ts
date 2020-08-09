/*
 * @Author: your name
 * @Date: 2020-08-09 16:05:15
 * @LastEditTime: 2020-08-09 16:22:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\ui\do_GridView.d.ts
 */
import { UiBasicInstance } from "../base/uiBase";

export interface DoGridView extends UiBasicInstance {
  /** 
     * GridView显示内容
     * @example   var do_GridView = ui("do_GridView_1"); //实例化gridview
                    do_GridView.items = [ {
                        template : 0,
                        image : "source://view/do_GridView/image/video.png"
                    }, {
                        template : 1,
                        image : "source://view/do_GridView/image/video_det.png",
                        title : "第二条数据"
                    },{
                        template : 0,
                        image : "source://view/do_GridView/image/video.png"
                    }, {
                        template : 1,
                        image : "source://view/do_GridView/image/video_det.png",
                        title : "第四条数据"
                    },{
                        template : 0,
                        image : "source://view/do_GridView/image/video.png"
                    }, {
                        template : 1,
                        image : "source://view/do_GridView/image/video_det.png",
                        title : "第六条数据"
                    }]
     */
  items: string;

  /**
   * 是否滚动到屏幕顶部
   *
   * 编辑类型 : 只允许设计区内修改
   *
   * 说明 : 属性设置成true时可以通过点击手机状态栏返回内容的顶部；仅支持iOS平台
   * @default true
   */
  canScrollToTop: boolean;

  /**
   * 显示视图对应UI模板文件
   *
   * 编辑类型 : 只允许设计区内修改
   *
   * 说明 : 一个GridView可以有多个cell模板，这个属性是一个json array，每一个元素都是一个source ui文件，这些ui文件没有自己的逻辑代码，和gridview所在的page共用一个脚本环境。gridview的模板cell不能是-1;多模版时,模版不能动态,大小必须大小一致。
   * 这个属性的格式类似如下：
   * [“source://view/cell1.ui”,”source://view/cell2.ui”,”source://view/cell3.ui]；多模版的大小需要一致
   */
  templates: Array<string>;

  /**
   * GridView对应的列数
   *
   * 说明 : 设置这个GridView显示多少列，-1 表示自动适应；若要动态修改numColumns，需要将GridView的宽度设置为-1
   * @default 1
   * @example   do_GridView.numColumns = 3;
   */
  numColumns: number;

  /**
   * 两列之间的间距
   *
   * 编辑类型 : 只允许设计区内修改
   *
   * 说明 : 两列之间的间距，单位为px
   * @link {http://www.appworker.net/awdoc/web/img/20180329/e7123e3db32c46edbc572a13f701ec3f.png}
   */
  hSpacing: number;

  /**
   * 两行之间的间距
   *
   * 编辑类型 : 只允许设计区内修改
   *
   * 说明 : 两行之间的间距，单位为px
   * @link {http://www.appworker.net/awdoc/web/img/20180329/ad6928fe3e30482da01fc7b23a05441a.png}
   */
  vSpacing: number;

  /**
   * cell选中的背景颜色
   *
   * 编辑类型 : 只允许设计区内修改
   */
  selectedColor: string;

  /**
   * 是否支持显示滚动条效果
   *
   * 编辑类型 : 只允许设计区内修改
   *
   * 说明 : 为true的时候，当数据内容超出gridview的边界，会出现滚动条标识
   * @default true
   */
  isShowBar: boolean;

  /**
   * 是否显示headerview
   *
   * 编辑类型 : 只允许设计区内修改
   *
   * 说明 : 缺省false不显示
   */
  isHeaderVisible: boolean;

  /**
   * 表头视图
   *
   * 编辑类型 : 只允许设计区内修改
   *
   * 说明 : 设置要显示的表头视图地址，不填但isHeaderVisible为true时有缺省样式
   */
  headerView: string;

  /**
   * 复位
   *
   * 说明: headerview复位，通常下拉刷新处理数据后需要调用这个方法恢复状态
   * @example do_GridView.rebound(); //gridview复位
   */
  rebound(): void;

  /**
     * 绑定item的数据
     * @param data 
     * @example   var _datas = [ {
                        template : 0,
                        image : "source://view/do_GridView/image/video.png"
                    }, {
                        template : 1,
                        image : "source://view/do_GridView/image/video_det.png",
                        title : "第二条数据"
                    },{
                        template : 0,
                        image : "source://view/do_GridView/image/video.png"
                    }, {
                        template : 1,
                        image : "source://view/do_GridView/image/video_det.png",
                        title : "第四条数据"
                    },{
                        template : 0,
                        image : "source://view/do_GridView/image/video.png"
                    }, {
                        template : 1,
                        image : "source://view/do_GridView/image/video_det.png",
                        title : "第六条数据"
                    }]
                    do_ListData.addData(_datas);
                    do_GridView.bindItems(do_ListData); //绑定do_ListData实例

        @link {http://www.appworker.net/awdoc/web/img/20180329/b3342e9fe5e34997b80a4a9f25ecded0.png}
     */
  bindItems(data?: object): void;

  /**
     * 
     * @param indexs 要刷新的数据的索引，是一个数组，可以为单个或多个索引(仅支持iOS平台)。如果不填则为刷新全部数据(安卓和IOS平台都支持)
     * @example   do_ListData.updateOne(1, {
                        template : 1,
                        image : "source://view/do_GridView/image/video_det.png",
                        title : "更新数据"
                    })
                    do_GridView.refreshItems([1]); //也可使用do_GridView.refreshItems()刷新所有数据
        @link {http://www.appworker.net/awdoc/web/img/20180329/c85e906ddb5846309d500f872176622d.png}
     */
  refreshItems(indexs?: Array<number>): void;

  /**
     *  点击cell触发
     * @param eventName 
     * @param listen 
     * @returns 当前cell的position值
     * @example   do_GridView.on("touch",function(_data){
                        print(JSON.stringify(_data),"touch事件")
                    })
     */
  on(eventName: "touch", listen: (data: number) => void): void;
  /**
     * 长按cell触发
     * @param eventName 
     * @param listen 
     * @example   do_GridView.on("longTouch",function(_data){
                        print(JSON.stringify(_data),"longTouch事件")
                    })
     */
  on(eventName: "longTouch", listen: (data: number) => void): void;
  /**
     * 下拉headerview事件
     * @param eventName 
     * @param listen 
     * @returns 返回值示例{“state”:0,”offset”:”100.45542949756889”}，其中state表示headerview的状态，offset为headerview下拉的位移量。其中state=0：表示开始下拉headerview；在headerview下拉到headerview复位整个过程中，pull事件会触发很多次；state=1：下拉headerview超过headerview的高度时触发一次这个事件，前端开发者可以在该事件触发时更新headerview的ui；state=2：下拉超过headerview的高度触发并松手会触发一次该事件，前端开发者可以在该事件触发时更新headerview的ui，然后开始加载最新的数据，数据加载完后需要调用rebound方法复位headerview
     * @example   do_GridView.on("pull", function(data) {
                        print(JSON.stringify(data),"pull事件")
                        if (data.state == 2) {// 下拉到一定位置松手复位gridview
                        do_GridView.rebound();
                        }
                    })
                    //pull事件的返回值示例
                    {
                        "state":2,
                        "offset":"100.17612101566722"
                    }
     */
  on(eventName: "pull", listen: (data: object) => void): void;
  /**
     * 滑动事件
     * @param eventName 
     * @param listen 
     * @returns  iOS和Android平台返回{firstVisiblePosition,lastVisiblePosition}，其中firstVisiblePosition表示在组件高度范围内第一行可见cell的位置，lastVisiblePosition表示在组件高度范围内最后一行可见cell的位置
     * @example   do_GridView.on("scroll",function(_data){
                        print(JSON.stringify(_data),"scroll事件")
                    })
                    //scroll事件的返回值示例
                    {
                        "firstVisiblePosition":0,
                        "lastVisiblePosition":11
                    }
     */
  on(eventName: "scroll", listen: (data: object) => void): void;
  /**
     * 点击cell触发
     * @param eventName 
     * @param listen 
     * @returns 当前cell的position值和在当前cell的绝对位置x,y，如{‘position’:2,’x’:’0’,’y’:’30’}
     * @example   do_GridView.on("touch1",function(_data){
                        print(JSON.stringify(_data),"touch1事件")
                    })
                    //touch1事件的返回值示例
                    {
                        "position":4,
                        "x":246.5277777777778,
                        "y":49.72771474878444
                    }
     */
  on(eventName: "touch1", listen: (data: object) => void): void;
  /**
     * 长按cell触发
     * @param eventName 
     * @param listen 
     * @returns  当前cell的position值和在当前cell的绝对位置x,y，如{‘position’:2,’x’:’0’,’y’:’30’}
     * @example   do_GridView.on("longTouch1",function(_data){
                        print(JSON.stringify(_data),"longTouch1事件")
                    })
                    //longTouch1事件的返回值示例
                    {
                        "position":9,
                        "x":0,
                        "y":549.8876283090221
                    }
     */
  on(eventName: "longTouch1", listen: (data: object) => void): void;
}
