/*
 * @Author: shawvyu
 * @Date: 2020-08-08 15:10:26
 * @LastEditTime: 2020-08-08 15:31:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_Bitmap.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";

interface ExifInfo {
  /** 图像横向像素数 */
  Width: number;
  /** 图像纵向像素数 */
  Height: number;
  /** 相机生产厂家 */
  Make: string;
  /** 型号 */
  Model: string;
  /** 快门速度 */
  ExposureTime: number;
  /** 光圈 */
  FNumber: number;
  /** 感光度 */
  IOS: string;
  /** 拍摄时间2016:01:01 09:00:00 */
  Date: string;
  /** 镜头焦距 */
  FocalLength: number;
  /** 镜头生产商 */
  LensMake: string;
  /** 镜头型号 */
  LensModel: string;
  /** 测光模式 */
  MeteringMode: string;
  /** 白平衡设定 */
  LightSource: string;
}

interface AddWatermarkParams {
  /** text：文本类型，image：图片类型 */
  type: string;
  /** 当type = text，source就是要添加的文本内容；type = image，source就是要添加图片的路径，支持source://和data://打头的文件和bitmap对象 */
  source: string;
  /** 相对于图片大小的一个百分比位置 @default 50 */
  percentX?: number;
  /** 相对于图片大小的一个百分比位置 @default 50 */
  precentY?: number;
  /** 设置字体显示颜色，值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF @default 000000FF */
  fontColor?: string;
  /** @default normal 包含4种类型：normal：常规bold：粗体italic：斜体bold_italic：粗斜体（iOS平台不支持） */
  fontStyle?: string;
  /** @default normal 包含3种类型：normal：常规underline ：下划线strikethrough ：删除线 */
  textFlag?: string;
  /** @default 17 */
  fontSize?: number;
}
interface SaveParams {
  /**
   * 支持两种格式：PNG，JPEG
   * @default JPEG
   */
  format?: string;
  /** 图片的压缩质量，支持 1-100 @default 100 */
  quality?: number;
  /** 保存的图片路径支持：data://开头，如果为空，缺省返回唯一图片路径，会另存到data://temp/do_Bitmap/目录下 */
  outPath?: string;
}
export interface DoBitmap extends MmBasicInstance {
  /**
     * 获取图片拍摄信息
     * @param source 只支持本地文件，支持： data:// source:// 打头的URI格式，不能包含@符号。其中文件格式说明可参考Storage类
     * @example var data = do_Bitmap.getExif({source:"source://view/MM/do_Bitmap/1.jpg"});
  print(JSON.stringify(data),"获取信息")
     */
  getExif(source: string): ExifInfo;
  getExif(params: { source: string }): ExifInfo;

  /**
   * 添加水印
   * 
   * 说明: 支持添加文本水印和图片水印，添加水印之前必须先loadFile
   * @param params 
   * @param listen 
   * @example do_Bitmap.addWatermark({type:"text", source:"12345abcde", fontColor:"64B1FFFF", fontStyle:"italic", textFlag:"strikethrough", fontSize:"33"}, function(data, e) {
      print(data,"添加结果")
  })
   */
  addWatermark(
    params: AddWatermarkParams,
    listen: (data: boolean) => void
  ): void;

  /**
   * 加载位图
   * 
   * 说明: 加载位图到内存中，当加在网络图片时耗时可能稍长
   * @param source 可设置网络或本地文件，支持：http:// https:// data:// source:// 打头的URI格式，不能包含@符号。其中文件格式说明可参考Storage类
   * @param listen 
   * @example do_Bitmap.loadFile({source:"source://view/MM/do_Bitmap/1.jpg"}, function(data, e) {
    print(data,"loadFile结果")
})
   */
  loadFile(source: string, listen: (data: boolean) => void): void;
  loadFile(params: { source: string }, listen: (data: boolean) => void): void;

  /**
   * 保存位图
   * 
   * 说明: 保存位图到本地
   * @param params 
   * @param listen 
   * @example do_Bitmap.save({format:"PNG", quality:50, outPath:"source://view/MM/do_Bitmap/1.jpg"}, function(data, e) {
      do_ImageView_1.source=data
  })
   */
  save(params: SaveParams, listen: (data: string) => void): void;

  /**
   * 转成灰色位图
   * @param listen 
   * @example do_Bitmap.toGrayScale(function(data, e) {
      print(data,"转换结果")
  })
   */
  toGrayScale(listen: (data: boolean) => void): void;

  /**
   * 转成毛玻璃位图
   * @param degree 图片的模糊程度，支持 1-100
   * @param listen 
   * @example do_Bitmap.toGrayScale(function(data, e) {
      print(data,"转换结果")
  })
   */
  toFrostedGlass(degree: number, listen: (data: boolean) => void): void;

  /**
   * 添加圆角
   * 
   * 说明: 为位图添加圆角效果
   * @param radius 
   * @param listen 
   * @example do_Bitmap.toRoundCorner({radius:250}, function(data, e) {
      print(data,"添加结果")
  })
   */
  toRoundCorner(radius: number, listen: (data: boolean) => void): void;
  toRoundCorner(
    param: { radius: number },
    listen: (data: boolean) => void
  ): void;
}
