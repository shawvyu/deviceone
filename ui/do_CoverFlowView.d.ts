import { UiBasicInstance } from "../base/uiBase";

export interface DoCoverFlowView extends UiBasicInstance{

    /**
     * 左右无限滑动
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 左右无限循环滑动视图，设置值为true表示支持无限循环滑动，默认为false，windows平台不支持
     * @default false
     */
    looping:boolean

    /**
     * 间距
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 页间距，控制两个页面之间的距离 左图为spacing是10的效果图，右图为spacing是50的效果图：
     * @link {http://www.appworker.net/awdoc/web/img/20180507/7ef19ecead4744afa257b0bf7332ed01.png}
     * @link {http://www.appworker.net/awdoc/web/img/20180507/ffcc87241acb4f67b246492331b4bcd9.png}
     * @default 30
     */
    spacing:number

    /**
     * 当前滑动View索引
     * 
     * 说明 : 设置滑动视图索引值，默认为0，显示数据的第一个页面
     * @default 0
     * @example
     * var do_CoverFlowView = ui("do_CoverFlowView_1");
        //设置滑动索引为1，即展示第二个页面
        do_CoverFlowView.index = 1;
     */
    index:number

    /**
     * 显示视图对应UI模板文件
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 一个CoverFlowView可以有多个cell模板，这个属性是一个json array，每一个元素都是一个ui文件，这些ui文件没有自己的逻辑代码，和CoverFlowView所在的page共用一个脚本环境，多模版时每个模板页面大小需要一致。
     * @example
     * [
            "source://view/cell1.ui",
            "source://view/cell2.ui",
            "source://view/cell3.ui"
        ]
     */
    templates:Array<string>

    /**
     * 绑定视图模板数据
     * @param data 
     * @example
     * var listdata = mm("do_ListData");           //实例化do_ListData对象
     * do_CoverFlowView.bindItems(listdata);       //do_CoverFlowView绑定do_ListData实例
     */
    bindItems(data?:object):void

    /**
     * 刷新数据
     * 
     * 说明: 支持动态刷新当前视图显示数据
     * @example
     * //给listdata添加数据
        listdata.addData([ {
            template : 0,
            text : "第一步 打开冰箱门",
            bg_image : "source://view/do_CoverFlowView/image/bgimg.png",
            text_fontcolor : "FFFFFFFF"
        }, {
            template : 0,
            text : "第二步 把大象塞冰箱里",
            bg_image : "source://view/do_CoverFlowView/image/bgimg1.png",
            text_fontcolor : "FF00FFFF"
        }, {
            template : 1,
            text : "第三步 把冰箱门关上",
            bg_image : "source://view/do_CoverFlowView/image/bgimg.png",
            _image:"source://view/do_CoverFlowView/image/img3.jpg"
        } ]);
        do_CoverFlowView.refreshItems();   //刷新数据
        
        @link {http://www.appworker.net/awdoc/web/img/20180507/73d3708f222040398ff86fa81b3bd876.png}
        @link {http://www.appworker.net/awdoc/web/img/20180507/892dde8a86b748179f27eee2994fdf79.png}
        @link {http://www.appworker.net/awdoc/web/img/20180507/993a07c5df88456a89cc0e33edc2c4f5.png}
     */
    refreshItems():void

    /**
     * 滑动显示当前视图后触发该事件
     * 
     * 说明: 滑动显示当前视图后触发该事件
     * @param eventName 
     * @param listen 
     * @example
     * //滑动显示当前视图后触发该事件
        do_CoverFlowView.on("indexChanged",function(_index){
            print(_index,"当前index");
        })
     */
    on(eventName:'indexChanged',listen:(data:string)=>void):void
    /**
     * 点击cell触发
     * @param eventName 
     * @param listen 
     * @returns 当前cell的index值
     * @example
     * //点击cell触发
        do_CoverFlowView.on("touch",function(data){
            print(JSON.stringify(data),"当前index");
        })
        //点击cell时回调函数返回的当前index值
        {
            "index":1
        }
     */
    on(eventName:'touch',listen:(data:object)=>void):void
}