import { UiBasicInstance } from "../base/uiBase";

export interface DoImageCropView1 extends UiBasicInstance{
    /**
     * 图片路径
     * 
     * 说明 : 可设置本地文件，支持 data:// source:// 打头
     * @example
     * var do_ImageCropView = ui("do_ImageCropView1_1");
     * do_ImageCropView.source = "source://view/do_ImageCropView/image/1.jpg";
     * 
     * @link {http://www.appworker.net/awdoc/web/img/20180507/f337fc42ce124dfeb69c92cd64fad9e7.png}
     */
    source:string

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