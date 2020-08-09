/*
 * @Author: shawvyu
 * @Date: 2020-08-09 19:44:12
 * @LastEditTime: 2020-08-09 21:29:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\ui\do_ListView.d.ts
 */
import { UiBasicInstance } from "../base/uiBase";

/**
 * android的模板是复用的，当用同一模板，其中某条数据内容有缺失也必须给空的，不能留空，否则会随机根据上下文补充内容 原因：原生无法修复
 * 页面滑动卡死，无法复位，日志报错,参考如下报错图片 原因：通常是因为listview的数据在删除之后，需要调用refreshItems方法刷新一下。
 * Android下do_ListView里放do_TextField获取不到焦点 原因：do_ListView的模板里可以放textfield和textbox，但是不能触发焦点，所以不建议用户这样使用。可以使用scrollview来加载表单。用listview加载表单不是一个合适的方式，因为有一个隐患就是listview是模板复用，需要不断的更新对应的listdata。详见文档
 * listview模板复用问题重复解析 原因：先解释下绑定数据的数据流向过程。1）setMapping(data) 是在初始化数据；2）用户操作了，data里的某些属性更改；3）更改数据完了，要告诉setMapping data变了，用fire触发一下；4）页面刷新，双向绑定成功。数据重复了说明是在第二步出现了问题。参考文档
 */
export interface DoListView extends UiBasicInstance {
  /**
   * 反弹效果
   *
   * 说明 : 只支持iOS平台，为false时没有上拉下拉的反弹效果
   * @example
   * var do_ListView = ui("do_ListView_1");  //实例化
   * do_ListView.bounces = true;
   */
  bounces: boolean;

  /**
   * 是否滚动到屏幕顶部
   *
   * 编辑类型 : 只允许设计区内修改
   *
   * 说明 : 属性设置成true时可以通过点击手机状态栏返回内容的顶部；仅支持iOS平台
   * @default true
   * @example
   */
  canScrollToTop: boolean;

  /**
   * 是否显示headerview
   *
   * 编辑类型 : 只允许设计区内修改
   *
   * 说明 : 缺省false不显示
   * @default false
   */
  isHeaderVisible: boolean;

  /**
   * 是否显示footerview
   *
   * 编辑类型 : 只允许设计区内修改
   * 说明 : 缺省false不显示
   *
   */
  isFooterVisible: boolean;

  /**
   * Cell选中的背景颜色
   *
   * 编辑类型 : 只允许设计区内修改
   * @default ffffff00
   */
  selectedColor: string;

  /**
   * Cell对应的模板UI文件组
   *
   * 说明 : 一个ListView可以有多个cell模板，每一个元素都是一个source ui文件。这个属性的格式类似如下： source://view/cell1.ui,source://view/cell2.ui,source://view/cell3.ui
   * @example do_ListView.templates="source://view/do_ListView/list_cell0.ui,source://view/do_ListView/list_cell1.ui,source://view/do_ListView/list_cell2.ui";
   */
  templates: string;

  /**
   * 表头视图
   * 编辑类型 : 只允许设计区内修改
   *
   * 说明 : 设置要显示的表头视图地址，不填写isHeaderVisible为true时有缺省样式
   */
  headerView: string;

  /**
   * 底部视图
   * 编辑类型 : 只允许设计区内修改
   *
   * 说明 : 设置要显示的表头视图地址，不填写isFooterVisible为true时有缺省样式
   */
  footerView: string;

  /**
   * 是否支持显示滚动条效果
   *
   * 编辑类型 : 只允许设计区内修改
   *
   * 说明 : 为true的时候，当listview内容超出listview的边界，会出现滚动条标识。
   * 左图为不显示滚动条的效果图，右图是有滚动条的效果图
   * @link {http://www.appworker.net/awdoc/web/img/20180329/53980baa234b4ee6afc3d8e036c2bc75.png}
   * @link {http://www.appworker.net/awdoc/web/img/20180329/057d78b33eb3487689e7af30cf709d16.png}
   */
  isShowbar: boolean;

  /**
   * 复位
   *
   * 说明: headerview或footerview复位，通常下拉或上拉刷新处理数据后需要调用这个方法恢复listview状态
   * @example  do_ListView.rebound();
   */
  rebound(): void;

  /**
     * 绑定item的数据
     * @param data 
     * @example
     *   var do_ListData = mm("do_ListData"); //实例化listdata
        var datas = [
                {
                    template : 0,
                    icon : "source://view/do_ListView/image/default.png",
                    Content : "十月，最美是枫叶。枫叶红了，漫山红遍、层林尽染;晚风习习，闭上眼，满脑子都是河湖碧透泉瀑流清般的诗情画意。 月已落下，乌鸦仍然在啼叫着，幕色朦胧漫天霜色，夜泊枫桥的张继对着江边的枫树和船上的渔火独自感叹，辗转反侧。满希望。",
                    CreateByName : "张小二",
                    CreateTime : "2017-10-7 10:35"
                }, {
                    template : 0,
                    icon : "source://view/do_ListView/image/default.png",
                    Content : "万花都落尽 一树红叶烧  谁怜惟薄力 添与江山饶。",
                    CreateByName : "张小四",
                    CreateTime : "2017-10-9 10:35"
                }, {
                    template : 0,
                    icon : "source://view/do_ListView/image/default.png",
                    Content : "远上寒山石径斜，白云生处有人家。停车坐爱枫林晚，霜叶红于二月花。",
                    CreateByName : "张小五",
                    CreateTime : "2017-10-10 10:35"
                }, {
                    template : 1,
                    type : "期刊分类",
                    type_arrs : [ {
                        name : "(遴选)核心"
                    }, {
                        name : "科技核心"
                    }, {
                        name : "中文核心"
                    } ]
                }, {
                    template : 1,
                    type : "级别",
                    type_arrs : [ {
                        name : "国家级"
                    }, {
                        name : "省级"
                    } ]
                }, {
                    template : 1,
                    type : "第几期",
                    type_arrs : [ {
                        name : "十月第1期"
                    }, {
                        name : "十月第2期"
                    } ]
                }, {
                    template : 2
                } ];
        do_ListData.addData(datas);
        do_ListView.bindItems(do_ListData); //绑定listData实例
        @link {http://www.appworker.net/awdoc/web/img/20180329/fb091cf1025c4f1cb45d2bcafb9a0e0f.png}
     */
  bindItems(data?: object): void;

  /**
     * 刷新item数据
     * @example
     *   do_ListData.updateOne(0, {
            template : 0,
            icon : "source://view/do_ListView/image/default.png",
            Content : "更新内容",
            CreateByName : "张小二",
            CreateTime : "2017-10-7 10:35"
        })
        do_ListView.refreshItems(); //更新数据之后需要刷新item数据才能起作用
        @link {http://www.appworker.net/awdoc/web/img/20180329/cda19cc0fe6a43729bddaefda04f95e8.png}
     */
  refreshItems(): void;

  /**
   *  平滑地滚动到特定位置
   * @param position 表示listview的第几行，从0开始计数，缺省值是 0
   * @param isSmooth 缺省是false表示直接跳转到某一行，没有任何平滑过渡的效果。为true表示平滑到那一行；其中为false的时候是不会触发scroll事件的，为true会触发；windows不支持该效果
   * @example
   * //平滑的滚动到第二条数据的位置
   * do_ListView.scrollToPosition({position:1,isSmooth:true})
   */
  scrollToPosition(position?: number, isSmooth?: boolean): void;
  scrollToPosition(params: { position?: number; isSmooth?: boolean }): void;

  /**
   * 显示HeaderView
   *
   * 说明: 当设置isHeaderVisible=true，自动显示HeaderView，并触发pull事件，windows平台不支持
   * @example   do_ListView.showHeader();
   */
  showHeader(): void;

  /**
     * 点击cell触发
     * @param eventName 
     * @param listen 
     * @returns 当前点击的cell的index值
     * @example 
     *   do_ListView.on("touch",function(_data){
                print(JSON.stringify(_data),"touch事件")
            })
     */
  on(eventName: "touch", listen: (data: string) => void): void;
  /**
     * 长按cell触发
     * @param eventName 
     * @param listen 
     * @returns 当前点击的cell的index值
     * @example
     *   do_ListView.on("longTouch",function(_data){
                print(JSON.stringify(_data),"longTouch事件")
            })
     */
  on(eventName: "longTouch", listen: (data: string) => void): void;
  /**
     * 点击cell触发
     * @param eventName 
     * @param listen 
     * @returns 当前cell的position值和在当前cell的绝对位置y
     * @example
     *     do_ListView.on("touch1",function(_data){
                print(JSON.stringify(_data),"touch1事件")
            })
            //touch1事件的返回值示例
            {
                "position":2,
                "y":298.36628849270664
            }
     */
  on(eventName: "touch1", listen: (data: string) => void): void;
  /**
     * 长按cell触发
     * @param eventName 
     * @param listen 
     * @returns 当前cell的position值和在当前cell的绝对位置y
     * @example
     *   do_ListView.on("longTouch1",function(_data){
                print(JSON.stringify(_data),"longTouch1事件")
            })
            //longTouch1事件的返回值示例
            {
                "position":1,
                "y":149.18314424635332
            }
     */
  on(eventName: "longTouch1", listen: (data: string) => void): void;
  /**
     * 下拉headerview事件
     * @param eventName 
     * @param listen 
     * @returns 返回值示例{“state”:0,”offset”:”99.45542949756889”}，其中state表示headerview的状态，offset为headerview下拉的位移量。其中state=0：表示开始下拉headerview；在headerview下拉到headerview复位整个过程中，pull事件会触发很多次；state=1：下拉headerview超过headerview的高度时触发一次这个事件，前端开发者可以在该事件触发时更新headerview的ui；state=2：下拉超过headerview的高度触发并松手会触发一次该事件，前端开发者可以在该事件触发时更新headerview的ui，然后开始加载最新的数据，数据加载完后需要调用rebound方法复位headerview。
     * @example
     *   do_ListView.on("pull", function(data) {
            print(JSON.stringify(data),"pull事件")
            if (data.state == 2) {// 下拉到一定位置松手开始刷新数据并复位
                do_ListView.rebound();
            }
        })
        //pull事件返回值示例
        {
            "state":0,
            "offset":"12.972447325769854"
        }
     */
  on(eventName: "pull", listen: (data: string) => void): void;
  /**
     * 上拉footerview事件
     * @param eventName 
     * @param listen 
     * @returns 返回值示例{“state”:0,”offset”:”99.45542949756889”}，其中state表示footerview的状态，offset为footerview上拉的位移量。state=0,表示开始上拉，从footerview开始上拉到footerview复位过程中，push事件会多次触发；state=1，如果下拉超过footerview的高度时这个事件会触发一次，前端开发者可以在触发这个事件时更新footerview的ui；state=2，如果超过footerview的高度并松手会触发一次该事件，前端开发者可以在这个事件触发时更新footerview的ui，并开始加载数据，加载完后前端开发者需插入新的数据，并调用rebound复位footerview
     * @example
     *   do_ListView.on("push", function(data) {
                print(JSON.stringify(data),"push事件")
                if (data.state == 2) {
                    do_ListView.rebound();
                }
            })
            //push事件返回值示例
            {
                "state":0,
                "offset":"10.089681253376554"
            }
     */
  on(eventName: "push", listen: (data: string) => void): void;
  /**
     * 滑动事件
     * @param eventName 
     * @param listen 
     * @returns iOS和Android平台返回{firstVisiblePosition,lastVisiblePosition}，其中firstVisiblePosition表示在组件高度范围内第一个可见cell的位置，lastVisiblePosition表示在组件高度范围内最后一个可见cell的位置；windows平台返回offset表示滚动的位移
     * @example
     *   do_ListView.on("scroll",function(_data){
            print(JSON.stringify(_data),"scroll事件")
        })
        //scroll事件的返回值示例
        {
            "firstVisiblePosition":0,
            "lastVisiblePosition":4
        }
     */
  on(eventName: "scroll", listen: (data: string) => void): void;
  /**
     * 组件尺寸改变事件
     * @param eventName 
     * @param listen 
     * @returns 返回{width,height,oldWidth,oldHeight}，其中width表示当前状态的宽，oldWidth表示尺寸改变之前的高；height表示当前状态的高，oldHeight表示状态改变之前的高
     * @example
     *   do_ListView.on("sizeChanged",function(_data){
            print(JSON.stringify(_data),"sizeChanged事件")
        })
        //sizeChanged事件的返回值示例
        {
            "w":750,
            "h":807.8951917882226,
            "oldw":750,
            "oldh":803.5710426796327
        }
     */
  on(eventName: "sizeChanged", listen: (data: string) => void): void;
}
