import { UiBasicInstance, MapType } from "../base/uiBase";

interface AddOverlayParams{
    /** 支持的类型有，0圆形Circle，1折线:Polyline，2多边形:Polygon，3圆弧:Arc */
    type:number
    data:object
    /** 要添加的集合图形ID */
    id:string
    /** 只有闭合图形才有填充颜色 @default 00000000 */
    fillColor?:string
    /** @default 000000FF */
    strokeColor?:string
    /** @default 5 */
    width?:number
    /** 线条是否显示为虚线，android只有折线可以设置为虚线 @default false */
    isDash?:boolean
}
/**
 * do_BaiduMapView-iOSaddMark时，add多个initpopupvisibal为true，popup为true的地标，只能显示一个，这个原生的，不存在多个都显示
 */
export interface DoBaiduMapView extends UiBasicInstance{
    /**
     * 地图场景
     * 
     * 编辑类型 : 只允许设计区内修改。
     * 
     * 说明 : 地图场景，场景目前支持两种：
     * 0：表示当前同一个page里面包含VideoView等视频组件的场景（解决会互相覆盖的问题）。
     * 1：表示不包含，1的渲染效果比0，若不同时在地图页面使用视频组件，建议选1。
     * 注：iOS平台不支持。
     * 
     * 如下图，图一为mapScene设置成0时的显示效果。图二为mapScene设置成1时的显示效果
     * @link {http://www.appworker.net/awdoc/web/img/20180507/8f85e1aead8a4e86adfb9b53ba9778a5.png}
     * @link {http://www.appworker.net/awdoc/web/img/20180507/1dc00f10fba14e1eb0b10a9f5e46998e.png}
     */
    mapScene:number

    /**
     * 地图类型
     * @default standard
     * @example
     *  //标准地图standard
        ui("do_BaiduMapView").mapType = "standard";   
        //卫星地图satellite
        ui("do_BaiduMapView").mapType = "satellite";

        如下图，图一为mapType设置成standard时的显示效果。图二为mapType设置成satellite时的显示效果。
        @link {http://www.appworker.net/awdoc/web/img/20180507/738a668b755e41fda56496c7c2bf0d92.png}
        @link {http://www.appworker.net/awdoc/web/img/20180507/7fec89c2adfe4235a2e6b8a0f0fbaadc.png}
     */
    mapType:MapType

    /**
     * 地图缩放等级
     * 
     * 说明 : 地图缩放等级，可以设置级别为 3-18 ,对应地图比例尺20m - 2000公里，具体对应关系可以参考百度地图开发文档
     * 
     * 如下图，图一为zoomLevel设置成10时的显示效果。图二为zoomLevel设置成13时的显示效果。
     * @link {http://www.appworker.net/awdoc/web/img/20180507/738a668b755e41fda56496c7c2bf0d92.png}
     * @link {http://www.appworker.net/awdoc/web/img/20180507/5199c62dea234867af2381d16423b473.png}
     * @default 10
     * 
     * @example 
     *  //地图缩放等级10级
        ui("do_BaiduMapView").zoomLevel = 10;   
        //地图缩放等级13级
        ui("do_BaiduMapView").zoomLevel = 13;
     */
    zoomLevel:number

    /**
     * 添加一组标记
     * @param data 将一组经纬度用缩略图在百度地图标记出来,点击缩略图后弹出描述信息,缩略图地址为 data:// source:// 打头的URI格式，不能包含@符号。其中文件格式说明可参考Storage类
     * 
     * 说明:参数格式如下：
     * [{
            id:标记ID，用户自定义标记唯一ID，是字符串类型,
            latitude:纬度,
            longitude:经度,
            url:缩略图地址,
            info:描述信息,
            popup:是否可点击，是否支持点击弹出信息，为true时支持，为false时点击marks不弹出信息，仅触发touchMarker事件，默认为true,
            textMarker:文字Mark
        }]。其中id必须唯一，textMarker为一个JSON对象，包含文字Mark的一些属性，textMarker格式如下：
            textMarker:{
            text: 文本,
            fontColor: 设置字体显示颜色，值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），默认值为：000000FF,
            fontSize: 字体大小，默认值为：17,
            fontSize: 设置字体风格包含normal：常规bold：粗体两种风格，默认值为：normal,
            alignX: 支持left(左对齐)，right(右对齐)，center(水平居中对齐)，默认值为：center,
            alignY: 支持top(上对齐)，bottom(下对齐)，center(垂直居中对齐)，默认值为：center ,
            bgColor: 文字背景色，默认值为：FFFFFF00,
            radius: 文字背景圆角，默认值为：0
            }(支持识别换行符 \n)
        @link {http://www.appworker.net/awdoc/web/img/20180507/1cf4fa6723084c3cad99c9b1950a25cf.png}

        @example 
        var do_BaiduMapView = ui("do_BaiduMapView_1");
        do_BaiduMapView.addMarkers([ {
            "id" : "01",    // id为string类型
            "latitude" : "39.915171",
            "longitude" : "116.403808",
            "url" : "source://image/baidumapview/baidumapview_addmarks.png", // 缩略图的图片路径
            "info" : "描述信息1",
            "popup" : true,
            "textMarker" : {
                "text" : "添加的标记1",
                "fontColor" : "FF0000FF",
                "fontStyle" : "bold",
                "fontSize" : 20,
                "alignX" : "center",
                "alignY" : "center",
                "bgColor" : "00FFFFFF",
                "radius" : 0
            }
        } ]);
     */
    addMarkers(data:object):boolean

    /**
     * 添加集合图形
     * 
     *  说明: 添加集合图形遮盖物,参数格式如下:
        圆形:需要中心点坐标(经纬度)和半径(单位:米),圆形的情况只有一个点,代码如下：
        {
        "latitude" : "39.915174",
        "longitude" : "116.403901",
        "radius" : "10000"
        },
        折线和多边形:每一个是一个经纬度点,代码如下：
        [
        {"latitude" : "39.915174","longitude" : "116.403901"},
        {"latitude" : "39.955174","longitude" : "116.403901"},
        {"latitude" : "39.615174","longitude" : "116.603901"},
        {"latitude" : "39.515174","longitude" : "116.553901"},
        {"latitude" : "39.915174","longitude" : "116.403901"},
        ...
        ]
        圆弧:根据指定经纬度生成一段圆弧,指定的经纬度坐标点数组(需传入3个点),每一个是一个经纬度点,代码如下：
        [
        {"latitude":"39.915174","longitude":"116.403901"},
        {"latitude":"39.905174","longitude":"116.002901"},
        {"latitude":"39.855174","longitude":"116.000001"},
        ...
        ]

     * @param params 
     
        @example
          var do_BaiduMapView = ui("do_BaiduMapView_1");
        // 圆形
        do_BaiduMapView.addOverlay({
                "type" : 0,       
                "data" : {         
                    "latitude" : "39.915174",
                    "longitude" : "116.403901",
                    "radius" : "10000"
                },
                "id" : "0",    // 要添加的集合图形ID
                "fillColor" : "00000088",    // 只有闭合图形才有填充颜色
                "strokeColor" : "FFFFFFFF",    // 外边缘颜色
                "width" : 20,     // 外边缘宽度
                "isDash" : true     // 线条是否显示为虚线，android只有折线可以设置为虚线
            });
        //折线
        do_BaiduMapView.addOverlay({
                "type" : 1, // 折线
                "data" : [ { // 折线:每一个是一个经纬度点
                    "latitude" : "39.916174",
                    "longitude" : "116.413911"
                }, {
                    "latitude" : "39.517164",
                    "longitude" : "116.423921"
                }, {
                    "latitude" : "39.915184",
                    "longitude" : "116.433911"
                }, {
                    "latitude" : "39.917154",
                    "longitude" : "116.513921"
                } ],
                "strokeColor" : "FF0000FF",
                "id" : "1", // 要添加的集合图形ID
                "width" : 5,
                "isDash" : false
            });
        //多边形
        do_BaiduMapView.addOverlay({
                "type" : 2, // 多边形
                "data" : [ { // 多边形:每一个是一个经纬度点
                    "latitude" : "39.915174",
                    "longitude" : "116.403901",
                }, {
                    "latitude" : "39.955174",
                    "longitude" : "116.403901",
                }, {
                    "latitude" : "39.615174",
                    "longitude" : "116.603901",
                }, {
                    "latitude" : "39.515174",
                    "longitude" : "116.553901",
                }, {
                    "latitude" : "39.915174",
                    "longitude" : "116.403901",
                } ],
                "strokeColor" : "8000FFFF",
                "id" : "2", // 要添加的集合图形ID
                "width" : 2,
                "isDash" : true
            });
        //圆弧
        do_BaiduMapView.addOverlay({
                "type" : 3, // 圆弧
                "data" : [ { // 圆弧:根据指定经纬度生成一段圆弧,指定的经纬度坐标点数组(需传入3个点),每一个是一个经纬度点
                    "latitude" : "39.915174",
                    "longitude" : "116.403901",
                }, {
                    "latitude" : "39.905174",
                    "longitude" : "116.002901",
                }, {
                    "latitude" : "39.855174",
                    "longitude" : "116.000001",
                } ],
                "strokeColor" : "00FFFFFF",
                "id" : "3", // 要添加的集合图形ID
                "width" : 3,
                "isDash" : false
            });

        @link {http://www.appworker.net/awdoc/web/img/20180507/6f6b016eddc24ad4910b7ef73ab7fdab.png}
        @link {http://www.appworker.net/awdoc/web/img/20180507/57f00b31396f4c7eb4c9e30a2c1b08f3.png}
        @link {http://www.appworker.net/awdoc/web/img/20180507/acaf7abdd8014d1aa9581bc8926036d1.png}
        @link {http://www.appworker.net/awdoc/web/img/20180507/6c8ad64734ca4955813d3f8bd84ea845.png}

     */
    addOverlay(params:AddOverlayParams):void

    /**
     * 移除一组指定标记
     * @param ids 要移除的标记ID数组
     * @example 
     * //ids要和添加标记的自定义标记唯一ID对应上，否则报错
     * var removeMarker = do_BaiduMapView.removeMarker(["01"]);
     */
    removeMarker(ids:Array<string>):void

    /**
     * 移除一组图形集合
     * @param ids 要移除的几何图形ID数组
     * 
     * @example
     * //ids要和添加标记的自定义集合图形唯一ID对应上，否则报错
        //移除圆形（上面示例代码中圆形id为"0"）
        var removeOverlay = do_BaiduMapView.removeOverlay(["0"]);
        //移除折线（上面示例代码中折线id为"1"）
        var removeOverlay = do_BaiduMapView.removeOverlay(["1"]);
        //移除多边形（上面示例代码中多边形id为"2"）
        var removeOverlay = do_BaiduMapView.removeOverlay(["2"]);
        //移除弧形（上面示例代码中弧形id为"3"）
        var removeOverlay = do_BaiduMapView.removeOverlay(["3"]);
        //移除圆形，折线（上面示例代码中圆形id为"0",折线id位"3"）
        var removeOverlay = do_BaiduMapView.removeOverlay(["0","3"]);
     */
    removeOverlay(ids:Array<string>):void

    /**
     * 设置地图中心点
     * @param latitude [39.915174] 设置地图中心点纬度，默认是北京天安门坐标纬度
     * @param longitude [116.403901] 置地图中心点经度，默认是北京天安门坐标经度
     * @example
     * // 设置地图中心点为抚顺
        var setCenter = do_BaiduMapView.setCenter("41.867335","123.90583");
        appworker.print(JSON.stringify(setCenter));
        if (setCenter == true) {
            sm("do_Notification").toast("中心点设置成功");
        } else {
            sm("do_Notification").toast("中心点设置失败");
        }
     */
    setCenter(latitude:string,longitude:string):boolean

    /**
     * 移除所有标记
     * @example var removeAll = do_BaiduMapView.removeAll();
     */
    removeAll():void

    /**
     * 搜索服务
     * @param type 搜索类型，是一个枚举值。0:城市POI检索;1:在矩形范围内POI检索;2:根据中心点、半径POI检索
     * @param keyword 搜索的关键字
     * @param param 根据检索类型设置检索参数，当type = 0时，param为{city:’’}；当type = 1时，param 为{leftBottom:’39.915174,116.403901(纬度,经度)’,rightTop:’39.915174,116.403901(纬度,经度)’}表示矩形区域，左下角和右上角的经纬度坐标点；当type = 2时，param为{location:’39.915174,116.403901(纬度,经度)’,radius:’’}，其中location为检索的中心点经纬度，radius为周边检索半径，单位为米
     * @param pageIndex [0]
     * @param pageSize [10]
     * @returns 搜索结果列表,是一个数组,每一项是一个字典,包括{name:’POI名称’,pt:’POI坐标’,address:’POI地址’,city:’POI所在城市’,phone:’POI电话号码’}
     * @example do_BaiduMapView.poiSearch({
                    "type" : 0,
                    "keyword" : "北京",
                    "param" : {
                        city : "北京"
                    },
                    "pageIndex" : 0,
                    "pageSize" : 10
                },function(data){
                    appworker.print(JSON.stringify(data));
                })
     */
    poiSearch(type:number,keyword:string,param:object,pageIndex?:number,pageSize?:number):object
    poiSearch(params:{type:number,keyword:string,param:object,pageIndex?:number,pageSize?:number}):object


    /**
     * 路线检索
     * 
     * 说明: 路线检索，检索出的路线会直接显示在地图上，并可点击查看详细信息，当检索城市与地点不在同一城市中，以经纬度为准
     * @param type 路线检索类型,包括Bus(公交);Ride(骑行);Walk(步行);Drive(驾车)
     * @param startCityName 城市名称
     * @param endCityName 城市名称
     * @param startCitySite 所在城市的地点名称或者开始地点的经纬度例如39.915174,116.403901表示(纬度,经度)
     * @param endCitySite 所在城市的地点名称或者结束地点的经纬度例如39.915174,116.403901表示(纬度,经度)
     * @example
     * do_BaiduMapView.routePlanSearch({
            "type" : "Drive",
            "startCityName" : "北京",
            "endCityName" : "北京",
            "startCitySite" : 39.721785+","+117.342488,
            "endCitySite" : 39.160025+","+117.193478
        },function(data){
            appworker.print("路线检索routePlanSearch方法："+JSON.stringify(data));
        }
     */
    routePlanSearch(type:string,startCityName:string,endCityName:string,startCitySite:string,endCitySite:string):void
    routePlanSearch(params:{type:string,startCityName:string,endCityName:string,startCitySite:string,endCitySite:string}):void

    /**
     * 地图区域改变完成后会触发，返回地图区域的中心点坐标
     * @param eventName 
     * @param listen 
     * @returns {object} {latitude:’’, longitude:’’}
     * @example
     * do_BaiduMapView.on("regionChange",function(data){
        if (data) {
            appworker.print("regionChange事件："+JSON.stringify(data));  
        }
        });
        以上代码打印返回的值data为：
        {
            "cityID":131,
            "ratio":2,
            "cityName":"北京市"
        }
     */
    on(eventName:'regionChange',listen:(data:object)=>void):void
    /**
     * 点击地图时触发
     * @param eventName 
     * @param listen 
     * @returns 返回当前点击的位置坐标{“latitude”:”纬度”,”longitude”:”经度”}
     * @example 
     * do_BaiduMapView.on("touchMap",function(data){
            if (data) {
                appworker.print("touchMap事件："+JSON.stringify(data));  
            }
        });
        以上代码打印返回的值data为：
        //获取的是我随机点击地图某一位置的经纬度
        {
        "longitude":"116.201987",
        "latitude":"39.655533"
        }
     */
    on(eventName:'touchMap',listen:(data:object)=>void):void
    /**
     * 点击标记时触发，iOS平台只有第一次点击mark会触发该事件，之后需要点击弹出的缩略图触发
     * @param eventName 
     * @param listen 
     * @example
     * do_BaiduMapView.on("touchMarker",function(data){
        if (data) {
            appworker.print("touchMarker事件："+JSON.stringify(data));  
        }
        });

        以上代码打印返回的值data为（点击上述addMarkers方法示例代码实现的标记，触发touchMarker事件返回的data）：
        [ {
            "id" : "01",    // id为string类型
            "latitude" : "39.915171",
            "longitude" : "116.403808",
            "url" : "source://image/baidumapview/baidumapview_addmarks.png", // 缩略图的图片路径
            "info" : "描述信息1",
            "popup" : true,
            "textMarker" : {
                "text" : "添加的标记1",
                "fontColor" : "FF0000FF",
                "fontStyle" : "bold",
                "fontSize" : 20,
                "alignX" : "center",
                "alignY" : "center",
                "bgColor" : "00FFFFFF",
                "radius" : 0
            }
        } ])
     */
    on(eventName:'touchMarker',listen:(data:object)=>void):void

}