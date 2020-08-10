import { UiBasicInstance, ProgressStyle } from "../base/uiBase";

export interface DoProgressBar extends UiBasicInstance{

    /**
     * 进度值
     * 
     * 说明 : 设置进度值,取值范围是0-100的Number
     */
    progress:number

    /**
     * 进度条样式
     * 
     * 编辑类型 : 只允许设计区内修改
     * @default normal
     */
    style:ProgressStyle
}