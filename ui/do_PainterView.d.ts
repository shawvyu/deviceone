import { UiBasicInstance } from "../base/uiBase";

export interface DoPainterView extends UiBasicInstance{
    /**
     * 画笔宽度
     * 
     * 说明 : 宽度最小为1，表示1像素宽度
     * @default 3
     */
    brushWidth:number

    /**
     * 画笔颜色
     * 
     * 说明 : 设置画笔颜色，默认为红色。值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF
     * @default FF0000FF
     * @example do_PainterView.brushColor = "0000FFFF";  //设置画笔颜色为蓝色
     */
    brushColor:string

    /**
     * 回退操作
     * 
     * 说明: 撤销当前步骤，回退到上一步
     * @example do_PainterView.undo();  //回退操作，调用多次该方法可以回退多步
     */
    undo():void

    /**
     * 清空画板
     * @example do_PainterView.clear();  //清空画板
     */
    clear():void

    /**
     * 保存为图片
     * @param format [JPEG] 支持两种格式：PNG，JPEG
     * @param quality [100] 图片的压缩质量，支持 1-100，windows平台不支持
     * @param outPath 保存的图片路径支持data://目录。如果为空缺省返回唯一图片路径，会存到data://temp/do_PainterView/目录下
     * @param listen 
     * @returns 返回当前保存的图片路径，为空时表示保存失败
     * @example
     * //保存图片到手机
        do_PainterView.saveAsImage({
            "format" : "PNG"
        }, function(data) {
            if (data) {
                sm("do_Notification").toast("保存成功");
                print(JSON.stringify(data), "保存到手机的图片");
            }
  })
     */
    saveAsImage(format?:string,quality?:number,outPath?:string,listen:(data:string)=>void):void
    saveAsImage(params:{format?:string,quality?:number,outPath?:string},listen:(data:string)=>void):void

    /**
     * 保存为Bitmap
     * 
     * 说明: 将整个view保存为一个Bitmap
     * @param bitmap Bitmap对象
     * @example
     * var global = sm("do_Global");
        var bitmap = mm("do_Bitmap");
        // 保存位图
        do_PainterView.saveAsBitmap(bitmap, function(data, e) {
            // 将位图保存为png格式的图片到手机data://save/目录下
            var _image = "data://save/" + global.getTime() + ".png";
            bitmap.save("PNG", 100, _image, function(bitmap_image, e) {
                if (bitmap_image) {
                    sm("do_Notification").toast("保存位图成功");
                    print(JSON.stringify(bitmap_image), "保存到手机的图片");
                }
            })
        })
     */
    saveAsBitmap(bitmap:string)
}