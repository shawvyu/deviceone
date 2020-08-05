/*
 * @Author: shawvyu
 * @Date: 2020-08-05 19:55:43
 * @LastEditTime: 2020-08-05 20:11:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_Qiniu.d.ts
 */
import { SmBasicInstance } from "./smBase";

interface UploadParams {
  /** 支持data://目录文件 */
  filePath: string;
  /** 用户凭证是七牛云存储颁发给用户的标识。用户将用户凭证放入访问请求，以便七牛云存储识别访问者的身份 */
  accessKey: string;
  /** 是七牛云存储颁发给用户，用于对访问请求签名的字串。用户使用签名密钥对访问请求的核心要素进行签名，获得请求认证令牌。用户将令牌随同访问请求一起发送至七牛云存储服务，七牛云存储将对令牌进行校验，以确认用户请求的合法性 */
  secretKey: string;
  /** 存储空间可以有多个,根据名称存储到对应的存储空间里面 */
  bucket: string;
  /** 文件上传到七牛云之后要保存的名称，也就是在七牛云存储里面显示的名称，缺省为原文件名 */
  saveName?: string;
}
interface DownLoadParams {
  /** */
  domainName: string;
  /**  */
  fileName: string;
  /** 下载到本地的文件的全路径，只支持data:// */
  path: string;
  /** 用户凭证是七牛云存储颁发给用户的标识。用户将用户凭证放入访问请求，以便七牛云存储识别访问者的身份 */
  accessKey?: string;
  /** 是七牛云存储颁发给用户，用于对访问请求签名的字串。用户使用签名密钥对访问请求的核心要素进行签名，获得请求认证令牌。用户将令牌随同访问请求一起发送至七牛云存储服务，七牛云存储将对令牌进行校验，以确认用户请求的合法性 */
  secretKey?: string;
}
interface ProgressRes {
  /**  */
  fileSize: string;
  percent: string;
}
export interface DoQiniu extends SmBasicInstance {
  /**
     * 上传文件
     * @param params 
     * @param listen 
     * @example var target_0 = sm("do_Qiniu");
                target_0.upload({filePath:"...",    accessKey:"...", secretKey:"...", bucket:"...",    saveName:""}, function(data, e) {
                ...
                })
     */
  upload(params: UploadParams, listen: (data: boolean) => void): void;

  /**
     * 从七牛云下载文件 
     * @param params 
     * @param listen 
     * @example target_0.download({domainName:"...", fileName:"...", path:"...", accessKey:"", secretKey:""}, function(data, e) {
                ...
                })
     */
  download(params: DownLoadParams, listen: (data: boolean) => void): void;

  /**
     * 响应进度事件,文件大小和当前上传或者下载的进度
     * @param eventName 
     * @param listen 
     * @returns 返回值包含两个节点{fileSize:’23234245’,percent:’20’}单位分别为kB和%
     * @example target_0.on("progress",function(data,e){ 
                ...
                })
     */
  on(eventName: "progress", listen: (data: ProgressRes) => void): void;
}
