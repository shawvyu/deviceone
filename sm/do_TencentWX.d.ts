/*
 * @Author: shawvyu
 * @Date: 2020-08-07 22:39:18
 * @LastEditTime: 2020-08-08 11:45:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_TencentWX.d.ts
 */
import { SmBasicInstance } from "../base/smBase";

/** 拉起小程序类型, 默认拉取正式版； 0：正式版；1：开发版；2：体验版 */
type MiniProgramType = 0 | 1 | 2;

interface LaunchWXMiniProgramParams {
  /** 在微信开发平台申请的appId */
  appId: string;
  /** 原始id,拉起小程序的username */
  userName: string;
  /** 路径， 拉起微信小程序启动的页面和需要传递的参数，不传默认跳转至小程序首页；tip:路径后面跟参数，例如:page/index?name=adoube&age=18 , 后面带的参数可在app启动的微信小程序的调用的方法的入口参数(比如data)data.query这个object中获取到，比如 data.query.name。即实现了app想小程序传递参数。 */
  path: string;
  /** @default 0 */
  type: MiniProgramType;
  /** 通用链接 */
  wxLink: string;
}
interface PayParams {
  /** 在微信开放平台创建应用后，分配的appid */
  appId: string;
  /** 通用链接 */
  wxLink: string;
  /** 微信支付分配的商户号 */
  partnerId: string;
  /** 商户服务器返回的的预支付交易会话ID,长度为32个字符 */
  prepayId: string;
  /** 商户服务器返回的扩展字段,长度不超过128个字符 */
  package: string;
  /** 商户服务器返回的随机字符串，长度不能超过32个字符 */
  nonceStr: string;
  /** 商户服务器返回的时间戳,长度为10个字符 */
  timeStamp: string;
  /** 商户服务器返回的签名,长度为32个字符 */
  sign: string;
}
interface ShareParams {
  /** 在微信开放平台申请的appId */
  appId: string;
  /** 通用链接 */
  wxLink: string;
  /** 0：分享到微信好友；1：分享到微信朋友圈 @default 0 */
  scene: number;
  /** 0：默认，图文分享；1：纯图分享，只支持本地图片；2：音乐分享 ；3：文件分享 @default 0 */
  type: number;
  /** 分享的标题 */
  title?: string;
  /** 分享的文本内容,图文分享时不能为空 */
  content?: string;
  /** 分享后点击文本打开的地址 */
  url?: string;
  /** 分享后显示的图片，微信sdk限制网络图片是32k，纯图分享时候不能为空，仅支持本地图片data://目录 */
  image?: string;
  /** 音乐文件的远程链接, 以URL的形式传入, 不支持本地音乐 */
  audio?: string;
  /** 纯图分享时显示的缩略图，仅支持本地图片，为空时则自动取缩放后的image参数图片，不建议超过32k大小限制，否则为了保证能分享成功，还是会对图片进行缩放 */
  trumb?: string;
  /** 分享文件的路径，微信sdk限制网络文件是10m，仅支持本地图片data://目录;source://目录 */
  filePath?: string;
}
/**
 * 1.目前移动应用上微信登陆只提供原生的登录方式，需要用户安装微信客户端才能配合使用。
 *
 * 2.对于Android应用，建议总是显示微信登录按钮，当用户手机没有安装微信客户端时，请引导用户下载安装微信客户端。
 *
 * 3.对于iOS应用，考虑到iOS应用商店审核指南中的相关规定，建议开发者接入微信登录时，先检测用户手机是否已安装微信客户端（使用sdk中的isWXAppInstalled函数），对未安装的用户使用隐藏微信登陆按钮，只提供其他微信登录方式（比如手机号注册登陆，游客登录等）。
 */
export interface DoTencentWX extends SmBasicInstance {
  /**
   * 微信APP是否安装
   * @returns true 安装，false 没有安装
   */
  isWXAppInstalled(): boolean;

  /**
     * 拉起微信小程序
     * 
     * 具体的说明，这里But写的一个博客（@link {https://www.jianshu.com/p/c08b54299e8a})
     * @param params 
     * @return  true 拉起成功；false 拉起失败
     * @example var appid = "***";
                var userName = "***";
                var wxLink = "***"
                var path = "page/index?name=zmjfdfs&age=18";
                var type = 2;
                ui("do_Button_2").on("touch",function(){
                var success = wx.launchWXMiniProgram({appId:appid,userName:userName,path:path,type:type,wxLink:wxLink});
                print("拉起小程序: " + success);
                });
     */
  launchWXMiniProgram(params: LaunchWXMiniProgramParams): boolean;

  /**
   * 微信登录
   * @param appId 在微信开发平台申请的appId
   * @param wxLink 通用链接
   * @param listen 
   * @returns 用户点击授权后，微信客户端会被调起，跳转至授权界面，用户在该界面点击允许或取消，返回数据给调用方。返回
                ErrCode ERR_OK = 0(用户同意)
                ERR_AUTH_DENIED = -4（用户拒绝授权）
                ERR_USER_CANCEL = -2（用户取消）
                code 用户换取access_token的code，仅在errCode为0时有效
                state 第三方程序发送时用来标识其请求的唯一性的标志，由第三方程序调用sendReq时传入，由微信终端回传，state字符串长度不能超过1K
                lang 微信客户端当前语言
                country 微信用户当前国家信息
    @example var target_0 = sm("do_TencentWX");
            var AppID = "wxba6c0c3cf39df3eb";
            var wxLink = "****"
            target_0.login({appId:AppID,wxLink:wxLink}, function(data, e) {
            ...})
   */
  login(appId: string, wxLink: string, listen: (data: object) => void): void;
  login(
    params: { appId: string; wxLink: string },
    listen: (data: object) => void
  ): void;

  /**
   * 微信支付
   * @param params
   * @param listen
   * @returns 0 支付完成,-1 错误,-2 用户取消
   * @example target_0.pay({appId:AppID, partnerId:PartnerID, prepayId:PrePayID, package:Package, nonceStr:NonceStr, timeStamp:TimeStamp, sign:Sign,wxLink:wxLink}, function(data, e) {})
   */
  pay(params: PayParams, listen: (data: number) => void): void;

  /**
   * 微信分享
   * @param params
   * @param listen
   * @example target_0.share({appId:AppID, scene:0, type:0, title:Title, content:Content, url:Url, image:Img, audio:Audio,wxLink:wxLink,filePath:filePath}, function(data, e) {})
   */
  share(params: ShareParams, listen: (data: boolean) => void): void;

  /**
   * 微信小程序唤醒应用回调事件
   *
   * 说明: 目前微信小程序给app传递参数，需要在微信小程序中自己判断当前设备类型，如果是android，则给app传递js对象，如果是iOS，则需传递字符串类型，目前来看，这个是微信SDK或者小程序的bug
   * @param eventName
   * @param listen
   * @returns {object} {extMsg:’微信小程序中返回的参数’,errCode:’错误码’,errStr:’错误信息’}
   *
   */
  on(
    eventName: "receiveWXMiniProgramResp",
    listen: (data: object) => void
  ): void;
}
