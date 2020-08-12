import { UiBasicInstance } from "../base/uiBase";

export interface DoSeekBar extends UiBasicInstance{
    /**
     * 第一进度值
     * 
     * 说明 : 设置第一进度值，支持手势拖动
     * @example
     * var do_SeekBar_1 = ui("do_SeekBar_1");
     * do_SeekBar_1.progress = 50;
     */
    progress:number

    /**
     * 第二进度值
     * 
     * @example do_SeekBar_1.secondaryProgress = 90;
     * @link {http://www.appworker.net/awdoc/web/img/20180507/e7535e040cb8428093e5315624b14b63.png}
     */
    secondaryProgress:number

    /**
     * 第一进度值变化时候触发
     * @param eventName 
     * @param listen 
     */
    on(eventName:'progressChanged',listen:()=>void):void
}