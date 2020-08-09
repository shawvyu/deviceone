/*
 * @Author: your name
 * @Date: 2020-08-09 16:33:50
 * @LastEditTime: 2020-08-09 16:38:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\ui\do_ImageBrowserView.d.ts
 */
import { UiBasicInstance } from "../base/uiBase";

export interface DoImageBrowserView extends UiBasicInstance{

    /**
     * 索引
     * @default 0
     * @example //组件实例化
     * var do_ImageBrowserView = ui("do_ImageBrowserView_1");
     * do_ImageBrowserView.index = 1; //设置当前视图索引值为1
     */
    index:number

    /**
     * 绑定数据
     * @param data 给视图绑定显示的图片
     * @example var datas = [ {
                    source : "source://view/do_ImageBrowserView/image/1.jpg",
                    init : "source://view/do_ImageBrowserView/image/1.jpg"
                } ,{
                    source : "source://view/do_ImageBrowserView/image/2.jpg",
                    init : "source://view/do_ImageBrowserView/image/2.jpg"
                },{
                    source :"source://view/do_ImageBrowserView/image/3.jpg",
                    init : "source://view/do_ImageBrowserView/image/3.jpg"
                }]
                do_ImageBrowserView.bindItems(datas);
     */
    bindItems(data:object):void

    /**
     * 切换图片后触发该事件
     * @param eventName 
     * @param listen 
     * @returns 返回当前index值
     * @example do_ImageBrowserView.on("indexChanged",function(index){
                    print(index);
                })
     */
    on(eventName:'indexChanged',listen:(data:number)=>void):void
    /**
     * 点击图片触发
     * @param eventName 
     * @param listen 
     * @returns 返回当前index值,如：{‘index’:”1”}
     * @example do_ImageBrowserView.on("touch",function(data){
                    print(JSON.stringify(data));
                })
     */
    on(eventName:'touch',listen:(data:object)=>void):void
    /**
     * 长按图片触发
     * @param eventName 
     * @param listen 
     * @example do_ImageBrowserView.on("longTouch",function(data){
                    print(JSON.stringify(data));
                })
     */
    on(eventName:'longTouch',listen:(data:object)=>void):void
}