/*
 * @Author: your name
 * @Date: 2020-08-08 11:47:40
 * @LastEditTime: 2020-08-08 12:00:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_TencentCOS.d.ts
 */
import { SmBasicInstance } from "../base/smBase";

interface COSInfo {
  /** appId是在成功申请腾讯云账户后，系统分配的账户标识之一 */
  appId: string;
  /** 用户凭证, 用户凭证是腾讯云存储颁发给用户的标识 */
  secretId: string;
  /** 签名密钥 */
  secretKey: string;
  /** 存储桶所在地域,详情可见https://cloud.tencent.com/document/product/436/6224 */
  region: string;
  /** 腾讯存储桶名称, 要下载的文件所在的bucket名称 */
  bucket: string;
}
interface COSDownParams extends COSInfo {
  /** 要下载的文件名称(路径), 例如temp/a.jpg,就是temp目录下,文件名为a.jpg的文件,如果不写前面的目录地址,则找到的就是Bucket根目录下面的a.jpg文件 */
  fileName: string;
  /** 保存地址, 下载到本地的文件的全路径，只支持data:// */
  path: string;
}
interface COSUploadParams extends COSInfo {
  /** 要上传的文件路径, 支持data://、source://目录文件 */
  filePath: string;
  /**上传后的文件名称(路径), 文件上传到腾讯云之后要保存的名称，缺省为原文件名。另外腾讯云支持上传目录,例如temp/a.jpg,就是上传到temp目录下,文件名为a.jpg,如果不写前面的目录地址,则直接保存在Bucket下面的根目录 */
  savePath: string;
}
/** 进度信息 */
interface ProgressInfo {
  /** 单位：kb */
  fileSize: string;
  /** 单位：% */
  percent: string;
}
export interface DoTencentCOS extends SmBasicInstance {
  /**
   * 从腾讯云下载文件
   * @param params
   * @param listen
   */
  download(params: COSDownParams, listen: (data: boolean) => void): void;

  /**
   * 把文件上传到腾讯云存储
   * @param params
   * @param listen
   */
  upload(params: COSUploadParams, listen: (data: boolean) => void): void;

  /** 文件下载进度事件 */
  on(eventName: "DownloadProgress", listen: (data: ProgressInfo) => void): void;
  /**
   * 文件上传进度事件
   * @param eventName
   * @param listen
   */
  on(eventName: "UploadProgress", listen: (data: ProgressInfo) => void): void;
}
