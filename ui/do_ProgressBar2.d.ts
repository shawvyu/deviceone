import { UiBasicInstance } from "../base/uiBase";

export interface DoProgressBar2 extends UiBasicInstance{
    /**
     * 进度条样式
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 进度条样式可以是以下几种类型：normal,cycle
     * @default normal
     * @link {http://www.appworker.net/awdoc/web/img/20180507/178216f9b4bf4f35afdc52f78bfdf07a.png}
     */
    style:string

    /**
     * 进度值
     * 
     * 说明 : 设置进度值，取值范围是0-100的浮点值,进度条样式是普通样式时有效
     * @default 0
     * @link {http://www.appworker.net/awdoc/web/img/20180507/e0def3e27bb543fe96491e046b21626c.png}
     * @example
     *   //实例化三个do_ProgressBar2组件
            var do_ProgressBar2_1 = ui("do_ProgressBar2_1");
            var do_ProgressBar2_2 = ui("do_ProgressBar2_2");
            var do_ProgressBar2_3 = ui("do_ProgressBar2_3");
            do_ProgressBar2_1.progress = 52;
                do_ProgressBar2_2.progress = 62;
                do_ProgressBar2_3.progress = 28;
     */
    progress:number

    /**
     * 进度颜色
     * @default 000000FF
     * @link {http://www.appworker.net/awdoc/web/img/20180507/8cd3a79b4ce44364be5abe3b32ff0d1f.png}
     * @example
     *   do_ProgressBar2_1.progressColor = "0000FFFF";
            do_ProgressBar2_2.progressColor = "800080FF";
            do_ProgressBar2_3.progressColor = "00FFFFFF";
     */
    progressColor:string

    /**
     * 进度条背景颜色
     * @default FFFFFFFF
     * @link {http://www.appworker.net/awdoc/web/img/20180507/8cd3a79b4ce44364be5abe3b32ff0d1f.png}
     * @example
     *   do_ProgressBar2_1.progressBgColor = "FFFFFFFF";
        do_ProgressBar2_2.progressBgColor = "F0F0F0FF";
        do_ProgressBar2_3.progressBgColor = "FFFFDBFF";
     */
    progressBgColor:string

    /**
     * 进度宽度
     * 
     * 说明 : 进度宽度，范围 为1-100，表示占环形进度条最外圈半径的百分比，如20表示占环形进度条半径的20%宽度
     * @default 1
     * @link {http://www.appworker.net/awdoc/web/img/20180507/98e28899e8314938b5980539471834b0.png}
     * @example
     *   do_ProgressBar2_1.progressWidth = 1;
            do_ProgressBar2_2.progressWidth = 10;
            do_ProgressBar2_3.progressWidth = 20;
     */
    progressWidth:number

    /**
     * 文本
     * 
     * 说明 : 环形进度条中间文本,进度条样式为normal时有效
     * @example do_ProgressBar2_1.text = "52%";
     */
    text:string
    fontColor:string
    /**
     * @link {http://www.appworker.net/awdoc/web/img/20180507/5fac9cdadfe240a3b75a2ed6d6ce1f06.png}
     */
    fontSize:number

}