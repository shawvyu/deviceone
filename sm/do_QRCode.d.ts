/*
 * @Author: shawvyu
 * @Date: 2020-08-05 20:08:36
 * @LastEditTime: 2020-08-05 20:14:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_QRCode.d.ts
 */
import { SmBasicInstance } from "../base/smBase";
interface CreateParams {
  text: string;
  /** 生成的二维码图片边长 @default 500 */
  length?: number;
  /** 只支持本地文件data:// source:// 打头的URI格式，不能包含{@}符号 */
  logoPath?: string;
  /** 与图片边长的对比百分比，取值范围为1~100，但建议取值范围为1~30，超过30后可能导致二维码无法被识别；默认值为length值的20% @default 20 */
  logoLength?: string;
}
export interface DoQRCode extends SmBasicInstance {
  /**
     * 生成二维码
     * @param params 
     * @param listen 
     * @returns 生成的二维码图片会保存在data://temp/do_QRCode目录下，并返回生成的二维码图片的路径
     * @example var target_0 = sm("do_QRCode");
                target_0.create({text:"123abc你好啊！@#￥%"}, function(data, e) {
                ...
                })
     */
  create(params: CreateParams, listen: (data: string) => void): void;
  /**
   * 识别二维码
   * @param path 可设置html链接或本地文件，支持：http:// https:// data:// source:// 打头的URI格式，不能包含@符号。其中文件格式说明可参考Storage类
   * @param listen
   * @returns 返回二维码的文本内容
   */
  recognition(path: string, listen: (data: string) => void): void;
  recognition(params: { path: string }, listen: (data: string) => void): void;
}
