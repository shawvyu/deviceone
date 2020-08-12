import { UiBasicInstance } from "../base/uiBase";

export interface DoBaiduPanoramaView extends UiBasicInstance{
    /**
     * 全景图缩放级别
     * 
     * 说明 : 设置全景图的缩放级别，默认缩放级别为2级，缩放级别总共分为5级，分别是1-5级，随着级别的增大清晰度逐渐提高。
     * @default 2
     */
    zoomLevel:number

    /**
     * 全景图片的显示级别
     * 
     * 说明 : 设置全景图片的显示级别，1为较低清晰度, 2为中等清晰度 , 3为较高清晰度。
     * @default 2
     */
    imageLevel:number

    /**
     * 显示全景图
     * @param latitude 坐标纬度
     * @param longitude 坐标经度
     * @example
        var do_BaiduPanoramaView = ui("do_BaiduPanoramaView_1");
        //显示全景图
        do_BaiduPanoramaView.showPanoramaView({
            "latitude" : "41.867335",
            "longitude" : "123.90583"
        });
        @link {http://www.appworker.net/awdoc/web/img/20180507/5bb6624582354d53b37fbdb21026934b.png}
     */
    showPanoramaView(latitude:string,longitude:string):void
    showPanoramaView(params:{latitude:string,longitude:string}):void

    /**
     * 添加一组缩略图标记
     * 
     * 说明: 将一组经纬度用缩略图在百度地图标记出来,缩略图地址为 data:// source:// 打头的URI格式，不能包含@符号。其中文件格式说明可参考Storage类；iOS8.0以下不支持。参数示例，其中标记ID必须唯一
     * @param data 
     * @example
     * //添加一组缩略图标记
        do_BaiduPanoramaView.addImageMarkers([ {
                "id" : "id1",
                "latitude" : "41.867335",
                "longitude" : "123.90583",
                "url" : "source://view/do_BaiduPanoramaView/location.png"
            }, {
                "id" : "id2",
                "latitude" : "41.857335",
                "longitude" : "123.90583",
                "url" : "source://view/do_BaiduPanoramaView/location.png"
            }, {
                "id" : "id3",
                "latitude" : "41.847335",
                "longitude" : "123.90583",
                "url" : "source://view/do_BaiduPanoramaView/location.png"
            }, {
                "id" : "id4",
                "latitude" : "41.837335",
                "longitude" : "123.90583",
                "url" : "source://view/do_BaiduPanoramaView/location.png"
            }
        ])
        @link {http://www.appworker.net/awdoc/web/img/20180507/8b2a86ce172e41608c5af3a53cfb04d1.png}
     */
    addImageMarkers(data:object):boolean

    /**
     * 添加一组文本标记
     * @param data 
     * @example
     * //添加一组文本标记
        do_BaiduPanoramaView.addTextMarkers([ {
                "id" : "01",
                "latitude" : "40.767335",
                "longitude" : "123.80583",
                "text" : "文字标记1",
                "fontColor" : "000000FF",
                "fontSize" : 30
            }, {
                "id" : "02",
                "latitude" : "40.667335",
                "longitude" : "124.70583",
                "text" : "文字标记2",
                "fontColor" : "FF0000FF",
                "fontSize" : 30
            }, {
                "id" : "03",
            "latitude" : "40.567335",
            "longitude" : "125.60583",
            "text" : "文字标记3",
            "fontColor" : "00FF00FF",
            "fontSize" : 20
            }, {
                "id" : "04",
                "latitude" : "40.467335",
                "longitude" : "126.50583",
                "text" : "文字标记4",
                "fontColor" : "FF8000FF",
                "fontSize" : 20
            }, {
            "id" : "05",
                "latitude" : "40.367335",
                "longitude" : "127.40583",
                "text" : "文字标记5",
                "fontColor" : "FF0080FF",
                "fontSize" : 20
        } ])

        [
            {
                "id":标记ID,用户自定义标记唯一ID,
                "latitude":纬度,
                "longitude":经度,
                "text":文字标注的内容,
                "fontColor":字体颜色,
                "fontSize":字体大小
            },
            ...
        ]
        @link {http://www.appworker.net/awdoc/web/img/20180507/a11c0420103a4c8c8015eab08ae12968.png}
     */
    addTextMarkers(data:object):boolean

    /**
     * 移除一组指定标记
     * @param ids 要移除的标记ID数组
     * @example
     * //移除一组指定标记，全景图上有对应标记的时候才可以使用
        do_BaiduPanoramaView.removeMarker({
            ids : [ "01", "02", "03", "04", "05" ]
        });
     */
    removeMarker(ids:Array<string>):void
    removeMarker(param:{ids:Array<string>}):void

    /**
     * 移除所有标记
     * @example
     * //移除当前全景图上添加的所有标记
     * do_BaiduPanoramaView.removeAll();
     */
    removeAll():void

    /**
     * 
     * @param eventName 
     * @param listen 
     * @returns {object} 
     * @example
     * //点击标记时触发该事件
        do_BaiduPanoramaView.on("touchMarker", function(data) {
            appworker.print(JSON.stringify(data), "点击标记");
        });

        返回值描述
        {
            "id":标记ID,用户自定义标记唯一ID,
            "latitude":纬度,
            "longitude":经度,
            "type":ImageMark|TextMark,
            "info":当type为ImageMark时返回缩略图地址|当type为TextMark时返回文字标注内容
        }
     */
    on(eventName:'touchMarker',listen:(data:object)=>void):void
}