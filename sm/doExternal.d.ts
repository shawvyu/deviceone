/*
 * @Author: your name
 * @Date: 2020-08-01 18:54:33
 * @LastEditTime: 2020-08-02 22:21:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\doExternal.d.ts
 */

import { SmBasicInstance } from "../base/smBase";

interface MailParams {
  /** 收件人邮箱 */
  to: string;
  /** 邮件标题 */
  subject?: string;
  /** 邮件正文 */
  body?: string;
}

interface SMSParams {
  /** 手机号 */
  number: string;
  /** 内容 */
  body?: string;
}

interface BulkSMSParams {
  /** 手机号，为JSON Array格式，如[‘10086’,’138xxx’] */
  number: Array<string>;
  /** 内容 */
  body?: string;
}

export interface DoExternal extends SmBasicInstance {
  /**
   * 打开系统设置界面
   * @param type 目前仅支持“GPS”，表示打开GPS设置界面；iOS仅支持10以下系统
   */

  openSystemSetting(type: "GPS"): void;

  /**
     * 启动第三方应用 如果唤醒id对应的应用不存在，返回失败。
     * @param wakeupid 其他应用被唤醒的唯一标识。不同的手机操作系统唤醒机制不一样，唤醒id的格式也不一样。我们会有专门的文档介绍
     * @param data 打开其他应用可以传递一些数据，数据的格式是JSON的键值对
     * @returns 返回true或false
     * @example //打开微信
                do_External.openApp("com.tencent.mm", {});
     */
  openApp(wakeupid: string, data?: object): boolean;

  /**
   * 调用系统默认浏览器
   *
   * 该方法可调用移动设备系统自带的浏览器打开指定的url
   * @param url 要访问的url地址
   * @example do_External.openURL({url:"http://www.appwork.net/"});
   */
  openURL(url: string): void;
  openURL(params: { url: string }): void;

  /**
   * 打开拨号界面
   * @param number 拨号界面显示的号码
   * @example do_External.openDial({number:01900-636-533});
   */
  openDial(number: string): void;
  openDial(params: { number: string }): void;

  /**
   * 打开系统通讯录界面
   *
   * iOS平台8.0以下不支持
   * @example do_External.openContact();
   */
  openContact(): void;

  /**
   * 打开发送邮件界面
   * @returns 当手机未设置邮箱账户时，无法发送邮件，返回false
   * @example do_External.openMail({to:"邮箱地址", subject:"test subject", body:"test body"});
   */
  openMail(to: string): boolean;
  openMail(params: MailParams): boolean;

  /**
   * 打开发送短信界面
   * @param params
   * @example do_External.openSMS({number:10086, body:"test SMS"});
   */
  openSMS(params: SMSParams): void;
  openSMS(number: string): void;

  /**
   * 打开发送短信界面，支持群发短信
   * @param number
   * @example do_External.bulkSMS({number:["10086","15918801008","95555"], body:"test bulkSMS"})
   */
  bulkSMS(number: Array<string>): void;
  bulkSMS(params: BulkSMSParams): void;

  /**
   * 安装app
   *
   * 执行这个方法会打开系统的安装界面安装data://目录下的一个apk文件，仅支持android平台
   * @param path 只支持data://目录
   * @example do_External.installApp({path:"data://test.apk"})
   */
  installApp(path: string): void;
  installApp(params: { path: string }): void;
  /**
   *  打开外部文档
   * 
   *  android需要先在手机上安装打开相应文件的第三方软件
   * @param path 只支持data://目录
   * @returns  成功返回true，失败返回false
   * @example initdata.copyFile({source:"initdata://External/test.docx", target:"data://do_External/test.doc"}, function(data, e) {
                    var data = do_External.openFile({path:"data://do_External/test.doc"});
                })
   */
  openFile(path: string): boolean;
  openFile(params: { path: string }): boolean;

  /**
   * 应用是否安装
   * @param path iOS平台该值为应用的URL scheme值，Android平台该值为应用的包名，需区分对待
   * @returns 安装了返回true，没安装返回false
   * @example //是否安装微信
            var dataf = do_External.existApp({key:"com.tencent.mm"});
   */
  existApp(path: string): boolean;
  existApp(params: { path: string }): boolean;

  /**
   * 根据Uri打开应用
   * @param uri 
   * @example //打开淘宝
                var dataf = do_External.openUri("taobao://detail.tmall.com...");    
   */
  openUri(uri: string): void;
  openUri(params: { uri: string }): void;
}
