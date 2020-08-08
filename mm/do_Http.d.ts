/*
 * @Author: shawvyu
 * @Date: 2020-08-08 18:06:00
 * @LastEditTime: 2020-08-08 18:32:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_Http.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";

/** 请求方式 */
type MethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface Download1Params {
  /** 下载到本地的文件的全路径，只支持data:// */
  path: string;
  /** 下载的任务ID */
  taskId: string;
  /** 支持断点下载，下次下载相同Url文件会从上次停止的位置继续下载；iOS平台不支持设置为false @default true */
  isBreakpoint?: boolean;
}
interface UploadParams {
  /** 需要上传的源文件地址，可以是data://目录，Android 还支持 sdcard:// 打头的目录 */
  path: string;
  /** 表单方式的上传)定义input元素的名称 @default file */
  name?: string;
  /** 文件上传到服务器的名称 */
  filename?: string;
}
export interface DoHttp extends MmBasicInstance {
  /** @default 'GET' 请求方式 */
  method: MethodType;
  /** 说明 : 发送服务器请求地址 */
  url: string;
  /** 说明 : 请求服务器超时时间,单位是毫秒 @default 5000 */
  timeout: number;
  /**
   * 内容类型
   *
   * request时该属性默认值为application/x-www-form-urlencoded，upload和form时的默认值为multipart/form-data
   * @default application/x-www-form-urlencoded
   */
  contentType: string;
  /**
   * 请求数据
   * 说明 : 请求数据，method为get、delete时不支持
   */
  body: string;
  /**
   * 字符集格式
   *
   * 说明 : 设置服务端返回内容的解码格式，通常与服务端开发人员约定，当属性有值时优先以该属性值格式解码，当不设置该属性时以默认值utf-8格式解码。Android平台支持utf-8、GBK；iOS平台支持utf-8、GBK、GB2312、BIG5；除此之外不支持的都以默认utf-8解析
   * @default utf-8
   */
  responseEncoding: string;

  /**
   * 发送请求
   * @example do_Http.request()
   */
  request(): void;

  /**
   * 下载
   * @param path 下载到本地的文件的全路径，只支持data://
   * @example do_Http.download("data://xiazai.png");
   */
  download(path: string): void;

  /**
   * 下载
   *
   * 说明: 下载文件，支持断点续传，当下载中断，对相同url重新调用download1方法即可实现续传
   * @param params
   * @example do_Http.download1({path:"data://download1/http/test1.zip", taskId:"task1", isBreakpoint:"true"});
   */
  download1(params: Download1Params): void;

  /**
   * 停止下载
   * @param taskId 下载的任务ID
   * @example do_Http.stopDownload({taskId:"task1"});
   */
  stopDownload(taskId: string): void;
  stopDownload(param: { taskId: string }): void;

  /**
   * 上传
   * @param params 
   * @example //先将文件从initdata目录复制到data下,再进行upload操作
                sm("do_InitData").copyFile({source:"initdata://do_Http/a.txt", target:"data://http/a.txt"}, function(data, e) {
                    do_Http.upload({path:"data://http/a.txt", name:"file"});
                });
   */
  upload(params: UploadParams): void;

  /**
   * 设置请求头
   * @param key
   * @param value
   * @example do_Http.setRequestHeader("test","setRequestHeader");
   */
  setRequestHeader(key: string, value: string): void;

  /**
   * 获取返回头
   * @param key 为空时返回所有的responseHeader
   * @returns 返回最后一次成功返回的http respose的header里某项或所有属性的值
   * @example var header = do_Http.getResponseHeader();
   */
  getResponseHeader(key?: string): string;

  /**
   * 上传表单
   *
   * 说明: 支持同时上传多个文件和字符串，contentType固定为multipart/form-data，无需再设置
   * @param data 需要上传的数据内容，如{‘files’:[{‘key’:’file1’,’value’:’data://1.png’}…],’texts’:[{‘key’:’text1’,’value’:’data://1.png’}…]}，其中标识key只能是texts或者files，为text时value表示字符串值；为file时value表示需要上传的源文件地址，可以是data://目录，Android 还支持 sdcard:// 打头的目录
   * @example do_Http.form({'files':[],'texts':[{'key':'text1','value':'12345'},{'key':'text2','value':'abcde'}]});
   */
  form(data: object): void;

  /**
   * 
   * 设置重定向
   * @param isSetRedirect 为true时表示自动重定向，为false时表示不重定向，直接返回3xx请求
   * @default true
   * @example do_Http.url = "http://www.baidu.cn";
                do_Http.setRedirect({isSetRedirect:true});
                do_Http.request();
   */
  setRedirect(isSetRedirect?: boolean): void;

  /**
   * 响应请求事件
   * @param eventName 
   * @param listen 
   * @returns 返回值包含五个节点{currentSize:’1221’,totalSize:’23234245’,currentFileSize:’’,index:’’,taskId:’’}单位为kB，其中currentFileSize和index只有调用form方法时返回，分别为当前正在上传文件大小和所在files数据数组中索引，除断点下载其他请求不会返回tastID，断点下载不返回index
   * @example   do_Http.on("progress",function(data,e){
                    print(" 返回值：" + JSON.stringify(data),"progress 事件 ");
                })
   */
  on(eventName: "progress", listen: (data: object) => void): void;

  /**
   * 请求成功事件
   * @param eventName
   * @param listen
   */
  on(eventName: "success", listen: (data: string) => void): void;

  /**
   * 请求出错事件
   * @param eventName 
   * @param listen 
   * @returns 返回值包含两个节点{status:’http错误码’ ,message:’错误的信息’}
   * @example do_Http.on("fail",function(data,e){
                    print(" 返回值：" + JSON.stringify(data), "fail 事件 ");
                })
   */
  on(eventName: "fail", listen: (data: object) => void): void;

  /**
   *  请求结束事件
   * @param eventName 
   * @param listen 
   * @returns 返回值包含两个节点{status:’http状态码’ ,data:’服务端返回信息’,taskId:’’}，除断点下载其他请求不会返回tastID
   * @example do_Http.on("result",function(data,e){
                    print(" 返回值：" + JSON.stringify(data), "result 事件 ");
                })
   */
  on(eventName: "result", listen: (data: object) => void): void;
}
