import { UiBasicInstance } from "../base/uiBase";

export interface DoImageCropView extends UiBasicInstance{
    /**
     * 图片路径
     * 
     * 说明 : 可设置本地文件，支持 data:// source:// 打头
     * 
     * @example
     * var do_ImageCropView = ui("do_ImageCropView_1");
     * do_ImageCropView.source = "source://view/do_ImageCropView/image/1.jpg";
     */
    source:string

    /**
     * 裁剪的区域
     * 
     * 说明 : 设置裁剪区域的宽高，width,height，中间用逗号隔开；裁剪区域不建议设置超出组件本身宽高和范围；默认值取控件的一半宽高，居中显示
     * @example 
     * var do_ImageCropView = ui("do_ImageCropView_1");
     * do_ImageCropView.cropArea = "500,500";
     * 
     * 
     * 下图分别为剪裁区域为(500,500)和(300,500)的效果图。
     * @link {http://www.appworker.net/awdoc/web/img/20180507/bd04ea515463471b9f16d7f3d5090b10.png}
     * @link {http://www.appworker.net/awdoc/web/img/20180507/8bc2e6ae877a40d88540300acabd7713.png}
     */
    cropArea:string

    /**
     * 裁剪图片
     * @param listen 
     * @returns 返回裁剪图片的路径
     * @example
     * do_ImageCropView.crop(function(data, e) {print(data);}
     * 
     * 以上示例代码返回的data如下:
     * ios剪裁后返回的图片路径:data://tmp/do_ImageCropView/2C6B2461-64D0-4828-A43B-4589245468DE.jpg
     * android剪裁后返回的图片路径:data://temp/do_ImageCropView/201709151506334.png.do
     */
    crop(listen:(data:string)=>void):void
}