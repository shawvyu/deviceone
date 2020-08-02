/*
 * @Author: your name
 * @Date: 2020-08-01 16:32:21
 * @LastEditTime: 2020-08-01 17:37:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\doCamera.d.ts
 */

import { SmBasicInstance } from "./smBase";

interface CaptureParams {
  /**  */
  width?: number;
  height?: number;
  /** 100表示原始的图片质量，清晰度越低，图片文件大小越小。defaultvalue=100 */
  quality?: number;
  /** 如果这个值为true的话，拍照结束后会出现一个中间的取景界面，有一个矩形框让用户选择局部区域 defaultvalue=false */
  iscut?: boolean;
  /** 如果这个值为true的话，一启动拍照会打开前置摄像头 defaultvalue=false */
  facingFront?: boolean;
  /** 要保存的图片文件路径，支持数据区data://，指定到文件名，若不填写则默认保存到data://temp/do_Camera/目录下 */
  outPath?: string;
}
/** 启动系统的相机拍照获取照片 */
export interface DoCamera extends SmBasicInstance {
  /**
 * @description 拍照、获取照片
 * @param params 
 * @param listen
 * @returns 执行方法后，弹出系统相机，拍照后，图片的原始分辨率通常比较高。拍完的图片缺省会另存到data://temp/do_Camera/目录下可以通过用户传入width，height来裁剪图片大小。如果设置的宽高比例和真实图片宽高比例不一致的话，图片会自动平铺拉伸。width和height均为-1时保持图片的原始宽高不变；width或height有任何一个值为-1，则保持图片的原始宽高比不变 ,以不为-1的那个值做为基准, 保持原图的宽高比。也可以通过设置清晰度quality来使图片文件变小 
 * @example //默认拍照
            do_Camera.capture(function(data, e) {
            print(data,"拍照完成")
                });
            //设置长宽300,质量50,使用前置摄像头拍照
            do_Camera.capture({width:300, height:300, quality:50, iscut:true, facingFront:true, outPath:"data://Camera/1.png"}, function(data, e) {
            print(data,"拍照完成")
            })
 */
  capture(
    params: CaptureParams,
    listen: (data: string, e: Error) => void
  ): void;
  capture(listen: (data: string, e: Error) => void): void;
}

