import { UiBasicInstance } from "../base/uiBase";

/**
 * iOS、Andriod手势与点击事件冲突问题。原因：手势组件就是为了获得手势最高优先级的。手指滑动一下，不会触发touchUP事件。
 */
export interface DoGestureView extends UiBasicInstance{

    /**
     * 按下并在组件范围抬起，触发该事件
     * @param eventName 
     * @param listen 
     * @returns {object}  {x:’100’,y:’100’} 返回手指在组件内x,y的绝对值
     * @example
     * var do_GestureView = ui("do_GestureView_1");
        //按下并在组件范围抬起，触发该事件
        do_GestureView.on("touch",function(_data){
        //将do_Button_1移动到点击的位置
            ui("do_Button_1").x  = _data.x;
            ui("do_Button_1").y  = _data.y;
            ui("do_Button_1").redraw();  
            print(JSON.stringify(_data),"touch事件返回值")
        })
        //返回值格式如下
        {
        "x":496.0684458414714,
        "y":646.5142899195353
        }
        @link {http://www.appworker.net/awdoc/web/img/20180507/92140ef01ea84ddda45169537d3ee6d3.png}
        @link {http://www.appworker.net/awdoc/web/img/20180507/1c63cf31cd8544b482820a6810b7bf81.png}
     */
    on(eventName:'touch',listen:(data:object)=>void):void
    /**
     * 组件范围内按下即可触发
     * @param eventName 
     * @param listen 
     * @returns {object} {x:’100’,y:’100’} 返回手指x,y在屏幕的绝对值
     * @example 
     * //组件范围内按下即可触发
        do_GestureView.on("touchDown",function(_data){
            print(JSON.stringify(_data),"touchDown事件返回值")
        })
        //返回值格式如下
        {
            "x":496.0684458414714,
            "y":646.5142899195353
        }
     */
    on(eventName:'touchDown',listen:(data:object)=>void):void
    /**
     * 一旦按下，手指离开即触发，不论是否在组件范围内
     * @param eventName 
     * @param listen 
     * @returns {object} {x:’100’,y:’100’} 返回手指x,y在屏幕的绝对值
     * @example 
     * //一旦按下，手指离开即触发，不论是否在组件范围内
        do_GestureView.on("touchUp",function(_data){
            print(JSON.stringify(_data),"touchUp事件返回值")
        })
        //返回值格式如下
        {
        "x":496.0684458414714,
        "y":646.5142899195353
        }
     */
    on(eventName:'touchUp',listen:(data:object)=>void):void
    /**
     * 长按触发该事件
     * @param eventName 
     * @param listen 
     * @returns {object} {x:’100’,y:’100’} 返回手指x,y在屏幕的绝对值
     * @example 
     * //长按do_GestureView组件触发事件
        do_GestureView.on("longTouch",function(_data){
        //将do_Button_1移动到长按的位置
            ui("do_Button_1").x  = _data.x;
            ui("do_Button_1").y  = _data.y;
            ui("do_Button_1").redraw();
            print(JSON.stringify(_data),"longTouch事件返回值")
        })
        //返回值格式如下
        {
        "x":448.1961144341363,
        "y":403.4637906392415
        }
     */
    on(eventName:'longTouch',listen:(data:object)=>void):void
    /**
     * 手指在触摸屏上迅速移动，并松开的动作，松开时触发
     * @param eventName 
     * @param listen 
     * @returns {object} {velocityX:’100’,velocityY:’100’} 返回手指在手指x,y方向滑动的速率，其中正值表示的是往下和往右、负值表示的是往上和往左。iOS的速率是固定值
     * @example 
     * //手指在触摸屏上迅速移动，并松开的动作，松开时触发
        do_GestureView.on("fling",function(_data){
            appworker.print(JSON.stringify(_data),"fling事件返回值")
        })
        //返回值格式如下
        {
            "velocityX":1932.673095703125,
            "velocityY":783.9417724609375
        }
     */
    on(eventName:'fling',listen:(data:object)=>void):void
    /**
     * 手指在触摸屏上移动时触发
     * @param eventName 
     * @param listen 
     * @returns {object} {x:’100’,y:’100’} 返回手指x,y在屏幕的绝对值
     * @example
     * //手指在触摸屏上移动时触发
        do_GestureView.on("move",function(_data){
        //将do_Button_1移动到手指移动位置，具体效果可以下载代码查看
            ui("do_Button_1").x  = _data.x;
            ui("do_Button_1").y  = _data.y;
            ui("do_Button_1").redraw();
            appworker.print(JSON.stringify(_data),"move事件返回值")
        })
        //返回值格式如下
        {
            "x":530.6989034016927,
            "y":409.5346091588338
        }
     */
    on(eventName:'move',listen:(data:object)=>void):void
    

}