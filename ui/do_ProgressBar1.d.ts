import { UiBasicInstance } from "../base/uiBase";

export interface DoProgressBar1 extends UiBasicInstance{

    /**
     * 进度条样式
     * 
     * 编辑类型 : 只允许设计区内修改
     * @default normal
     * 
     * 说明 : 进度条样式可以是以下几种类型：normal普通样式：可以设置两种状态对应不同的背景图片，动态改变背景图片。zoom缩放样式：可以设置多种颜色，进度条圆点有缩放效果。
     * 
     * 左图为normal样式的效果图，右图为zoom样式的效果图：
     * @link {http://www.appworker.net/awdoc/web/img/20180507/e332963cf5a94163a7bee06c95ebf606.png}
     * @link {http://www.appworker.net/awdoc/web/img/20180507/bec88d80853f4a2a89fe10e3628f3a1e.png}
     */
    style:string

    /**
     * 圆点的数量
     * 
     * 说明 : 圆点数量需要跟组件宽度相适应，宽度短，设置圆点数量过多，会显示不完整
     * @link {http://www.appworker.net/awdoc/web/img/20180507/7e3d2988d23742ad8d51df75a7a85085.png}
     * @example
     * var do_ProgressBar1 = ui("do_ProgressBar1_1");; //实例化do_ProgressBar组件
     * do_ProgressBar1.pointNum = 7;
     */
    pointNum:number

    /**
     * 默认圆点图片
     * 
     * 说明 : 进度条每个圆点默认的背景图片，支持data://和source://,进度条样式为normal时有效
     * @example do_ProgressBar1.defaultImage = "source://view/do_ProgressBar1/image/circle.png"
     */
    defaultImage:string

    /**
     * 变化圆点图片
     * 
     * 说明 : 进度条变化的圆点图片背景图片，支持data://和source://,进度条样式为normal时有效
     * 
     * @example do_ProgressBar1.changeImage = "source://view/do_ProgressBar1/image/smile.png"
     * @link {http://www.appworker.net/awdoc/web/img/20180507/8522ea35fc754d77a40af4cc320dc9a8.png}
     */
    changeImage:string

    /**
     * 圆点可选颜色组
     * 
     * 说明 : 颜色组成的字符串，比如 000000FF,00FF00FF,00FFFFFF，中间用逗号隔开。该颜色组用于设置圆点颜色，进度条样式为zoom时有效，当颜色数量大于圆点数量时，选中靠前的颜色，当颜色数量小于圆点数量时，重复选择颜色组中颜色
     * @example do_ProgressBar1.pointColors = "000000FF,FF0000FF,00FFFFFF,FF00FFFF";
     * @link {http://www.appworker.net/awdoc/web/img/20180507/428540978cec4269893fac2f935d778d.png}
     */
    pointColors:string
}