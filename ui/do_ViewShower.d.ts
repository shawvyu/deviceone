import { UiBasicInstance } from "../base/uiBase";
import { AnimationType } from "../sm/doApp";

export interface DoViewShower extends UiBasicInstance{
    /**
     * 切换View
     * @param id 切换的目标View的 ID
     * @param animationType 
     * @param animationTime [300] 动画效果持续时间，单位为ms毫秒
     * @example
     * //切换显示id为"1"的子view
     * do_ViewShower.showView({id:"1", animationType:"slide_l2r", animationTime:1000});
     */
    showView(id:string,animationType?:AnimationType,animationTime?:number):void
    showView(params:{id:string,animationType?:AnimationType,animationTime?:number}):void

    /**
     * 增加多个View
     * 
     * 说明:增加多个View到ViewShower中
     * @param data 要增加的View的索引，默认值为增加到最后，如果id已经存在，会覆盖之前的View，结构[{ id : ‘’, path : ‘’},{id :’’ , path : ‘’}, ….. ]
     * @example
     * //定义变量
        var adata = [
                    { id :"id0", path :"source://view/UI/do_ViewShower/id0.ui"},
                    { id :"id1", path :"source://view/UI/do_ViewShower/id1.ui"}
                    ]
        //添加到ViewShower
        do_ViewShower.addViews({data:adata})
     */
    addViews(data:object):void
    addViews(param:{data:object}):void

    /**
     * 删除某个View
     * @param id 要删除的View的id
     * @example
     * //删除掉id为"id0"的子view
     * do_ViewShower.removeView({id:"id0"})
     */
    removeView(id:string):void
    removeView(param:{id:string}):void

    /**
     * 获取子View
     * @param id 要获取的View的id
     * @returns 子view对应的ui文件RootView地址
     * @example
     * //获取id为"id1"的子View的地址
     * var data = do_ViewShower.getView("id1");
     * appworker.print(data,"id1的地址")
     */
    getView(id:string):string
    getView(param:{id:string}):string

    /**
     * View切换完成时触发
     * @param eventName 
     * @param listen 
     * @returns 返回View切换后的id
     * @example
     * do_ViewShower.on("viewChanged",function(data){
     * appworker.print(data,"切换到的id")
     * })
     */
    on(eventName:'viewChanged',listen:(data:string)=>void):void
}