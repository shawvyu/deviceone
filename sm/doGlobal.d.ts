/*
 * @Author: your name
 * @Date: 2020-08-02 22:23:26
 * @LastEditTime: 2020-08-02 22:57:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\doGlobal.d.ts
 */

import { SmBasicInstance } from "./smBase";

type GlobalListen = () => void;

type LaunchType = "" | "wakeup" | "notification" | "locaLNotification";

type BroadcastType = string | number;

interface VersionRes {
  /** 版本的显示名称，通常是xxx.yyy.zzz格式’, */
  ver: string;
  /** 版本的build号，是一个唯一序号，通常是一个数字’ */
  code: number;
}

interface SignatureInfo {
  /** 证书版本 */
  version?: string;
  /** 序列号 */
  serialNumber?: string;
  /** 签名算法名称 */
  sigAlgName?: string;
  /** 有效期开始日期 */
  notBefore?: string;
  /** 截止日期 */
  notAfter?: string;
  /** SHA256值 */
  SHA256?: string;
  /** SHA1值 */
  SHA1?: string;
  /** MD5值 */
  MD5?: string;
  /** 证书颁发者 */
  issuerDN?: string;
  /** 证书拥有者 */
  subjectDN?: string;
}

interface LaunchRes {
  /** 启动的类型 */
  type: LaunchRes;
  /** 启动被传递的数据 */
  data?: string;
}

interface BroadcastRes {
  /** 广播类型type type为PACKAGE_ADDED（安装应用）、PACKAGE_REMOVED（卸载应用）、0（开屏、点亮屏幕）、1（锁屏）、2（解锁）这几种枚举值之一 */
  type: BroadcastType;
  /** 应用包名content */
  content: string;
}

export interface DoGlobal extends SmBasicInstance {
  /**
     * 获取当前设备时间
     * 
     * 根据用户传递的时间foramt返回格式化的时间。请使用标准的时间格式标记。
     * @param format 需要返回的时间格式，比如yyyy-MM-dd这种通用时间格式，如果format为空，返回一个时间的长整型毫秒数
     * @returns 当前设备时间
     * @example //获取当前时间
                var timea = do_Global.getTime();
                print(timea,"当前设备时间");
                //获取特定格式时间
                var timeb = do_Global.getTime({format:"yyyy-MM-dd"});
                print(timeb,"特定格式时间")
     */
  getTime(format?: string): string;
  getTime(params: { format?: string }): string;

  /**
     * 获取应用唤醒ID
     * 
     * 说明: 应用可以被其它应用启动，这个唤醒ID可以在云打包中配置。这个值需要告诉其它第三方应用，让其它应用通过这个唤醒ID来启动我们自己的的应用。同时我们如果知道其它移动应用的唤醒ID，也可以通过我们的External类来启动其他应用
     * @returns 唤醒ID
     * @example var wid = do_Global.getWakeupID();
                print(wid,"唤醒ID")
     */
  getWakeupID(): string;

  /**
     * 获取应用安装包的版本号
     * 
     * 说明: 原生应用安装包的版本，可以通过云打包的过程中设置。通常要实现安装包升级需要调用这个方法，通过比较当前应用的版本和远程服务上最新应用安装包的版本来确定是否需要提示用户升级安装包
     * @example var version = do_Global.getVersion();
                print(version,"版本号")
     */
  getVersion(): VersionRes;

  /**
     * 获取全局变量值
     * 
     * 说明: 获取全局变量值，整个应用程序全局的内存共享，在程序的任何位置都可以通过get Memory方法来获取共享数据
     * @param key 变量键值对的key
     * @returns 内存中一个变量的值
     * @example var data1 = do_Global.getMemory({key:"key1"});
                print(data1,"全局变量的值")
     */
  getMemory(key: string): string;
  getMemory(params: { key: string }): string;

  /**
   * 设置全局变量值
   *
   * 说明: 设置全局变量值，整个应用程序全局的内存共享，在程序的任何位置都可以通过set Memory方法来设置共享数据。如有已经有这个变量名，会覆盖旧的变量值
   * @param key
   * @param value
   * @example do_Global.setMemory({key:"key1", value:"12345哈哈"});
   */
  setMemory(key: string, value: string): void;
  setMemory(params: { key: string; value: string }): void;

  /**
   * 退出应用
   * @example do_Global.exit();
   */
  exit(): void;

  /**
   * 拷贝到粘贴板
   *
   * 说明: 拷贝一个字符串到系统的粘贴板共享给其它程序
   * @param data 要拷贝的内容
   * @example do_Global.setToPasteboard({data:"1要拷贝的内容1"});
   */
  setToPasteboard(data: string): boolean;
  setToPasteboard(params: { data: string }): boolean;

  /**
   * 从粘贴板取出内容
   * @example var datab = do_Global.getFromPasteboard();
                print(datab,"粘贴板的内容")
   */
  getFromPasteboard(): string;

  /**
   * 获取签名证书信息
   * @example var info = do_Global.getSignatureInfo();
                print(JSON.stringify(info),"证书信息")
   */
  getSignatureInfo(): SignatureInfo;

  /**
   * 安装升级包
   *
   * 说明: AppWork提供了程序内升级的功能，也就是不需要升级安装包就能升级业务代码和数据。通常升级包的目录结构必须和build.do文件解开后的目录结构一致，build.do实际上一个zip文件，是通过设计器的“Build Local Package”功能生成的文件，但是升级包只包含变化的文件，最后把升级包压缩成zip文件，再把升级包部署在网络服务上。通过http获取别的方式把升级包下载到我们的data目录下，然后再调用这个install方法，这个方法会解压升级包zip文件到系统目录的升级目录。重启程序，程序每次启动会检查这个升级目录，发现里面有文件就会自动拷贝内容到对应的目录从而实现程序内升级功能
   * @param src 只能是data://格式的数据文件，而且只能是zip文件
   * @param listen
   */
  install(src: string, listen: (data: boolean, e: Error) => void): void;
  install(
    params: { src: string },
    listen: (data: boolean, e: Error) => void
  ): void;

  /** 
   * 通常是按手机的home键应用进到后台会触发这个事件 
   * @example do_Global.on("background",function(){
            print("应用进入后台事件")
            }) 
    */
  on(eventName: "background", listen: GlobalListen): void;
  /**
   * 应用从后台回到前台会触发这个事件
   * @param eventName 
   * @param listen 
   * @example do_Global.on("foreground",function(){
                print("应用进入前台事件")
                })
   */
  on(eventName: "foreground", listen: GlobalListen): void;
  /**
 * 应用被启动会触发这个事件，三种情况 1. 正常点击应用图标启动 2. 被启动应用通过唤醒ID被其他应用唤醒启动 3. 通过点击推送过来的消息来启动 这个事件只能在程序入口脚本代码中订阅才有意义，比如app.lua ,app.js
 * 
 * 说明: 应用被启动会触发这个事件，三种情况 1. 正常点击应用图标启动 2. 被启动应用通过唤醒ID被其他应用唤醒启动 3. 通过点击推送过来的消息来启动 这个事件只能在程序入口脚本代码中订阅才有意义，比如app.lua ,app.js
 * @param eventName 
 * @param listen 
 * @returns 这是一个JSON格式的数据，包含type和data2个节点，格式如下{ ‘type’:’启动的类型’, ‘data’:’启动被传递的数据’ }其中type有4种情况1. 正常启动，该值为空；2. 被其他应用唤醒，该值为’wakeup’ 3. 被推送消息启动，该值为’notification’；4. 被本地通知消息启动，该值为’locaLNotification’；而data有3种情况1. 正常启动：这个值为空 2. 被其他应用唤醒：这个值为第三方传递，可以咨询第三方 ，其中andoid需要和第三方约定，唤醒应用的第三方的原生代码里intent需要putStringExtra(‘data’,’必须要有值’); 如果第三方也是do平台的应用，可以通过External的openApp方法，方法里的data参数必须要有值3. 被推送消息启动：这个值的格式可以参考我们的推送类
 * @example do_Global.on("launch",function(data, e){
            print(JSON.stringify(data),"launch事件返回值")
            if (data.type == "wakeup")
                {
                    print("被唤醒启动");
                }
            else if (data.type == "notification")
                {
                    print("被推送启动");
                }
            else{
                    print("正常启动");
                }
            });
 */
  on(eventName: "launch", listen: (data: LaunchRes) => void): void;
  /**
 * android原生系统广播会触发这个事件，当然只有android系统才支持
 * @param eventName 
 * @param listen 
 * @example do_Global.on("broadcast",function(data,e){
            print(JSON.stringify(data),"broadcast事件返回值")
            })
 */
  on(eventName: "broadcast", listen: (data: BroadcastRes) => void): void;
}
