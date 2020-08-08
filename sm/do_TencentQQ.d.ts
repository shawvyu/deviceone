/*
 * @Author: shawvyu
 * @Date: 2020-08-07 21:34:35
 * @LastEditTime: 2020-08-07 22:38:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_TencentQQ.d.ts
 */
import { SmBasicInstance } from "../base/smBase";
/** 0：默认，图文分享；1：应用分享 */
type QzoneType = 0 | 1;
/** 0：默认，图文分享；1：纯图分享，只支持本地图；2：音乐分享；3：应用分享 */
type ShareQQType = 0 | 1 | 2 | 3;
interface LoginParams {
  /** 在QQ互联申请的appId */
  appId: string;
  /** 在QQ互联验证的Universal Links */
  qqLink: string;
}
interface GetUserInfoParams {
  token: string;
  expires: string;
  openId: string;
}
interface ShareToQzoneParams {
  /** 在QQ互联申请的appId */
  appId: string;
  /** 在QQ互联验证的Universal Links */
  qqLink: string;
  type: QzoneType;
  /** 分享的标题, 最长200个字符 */
  title: string;
  /** 分享后点击文本后打开的地址 */
  url: string;
  /** 分享后显示的图片，仅支持本地图片data://目录 */
  image: string;
  /** 分享的消息摘要，最长600个字 */
  summary?: string;
}
interface ShareToQQParams {
  /** 在QQ互联申请的appId */
  appId: string;
  /** 在QQ互联验证的Universal Links */
  qqLink: string;
  /**  @default 0 */
  type: ShareQQType;
  /** 分享的标题, 最长30个字符 */
  title: string;
  /** 分享后点击文本后打开的地址 */
  url?: string;
  /** 分享后显示的图片，纯图分享时候不能为空，仅支持本地图片data://目录 */
  image?: string;
  /** 分享的消息摘要，最长40个字 */
  summary?: string;
  /** 音乐文件的远程链接, 以URL的形式传入, 不支持本地音乐 */
  audio?: string;
  /**  */
  appName?: string;
}
/**
 * 注：Android这边做了特殊处理，需要IDE上面的app.doproj文件里面配置一下唤醒ID， 且唤醒ID的名称必须是QQWakeupID，如下图：
 * @file http://www.appworker.net/awdoc/web/img/20180525/e8952864eb164d07bc5e8aaeeccc88c0.png
 * @file http://www.appworker.net/awdoc/web/img/20180605/327872c9b98f45efbf919884b403c5f1.jpeg
 */
export interface DoTencentQQ extends SmBasicInstance {
  /**
     * 使用QQ登录
     * @param params 
     * @param listen 
     * @returns 返回用户登录的信息{“ret”: 0,”pay_token”: “0778657200B8F00BAFD7F4BB07814C25”,”pf”: “desktop_m_QQ-10000144-android-2002-“,”query_authority_cost”: 288,”authority_cost”: -831427405,”openid”: “7FA197F8DCDD7AAF58ADFB78ED5EAC1F”,”expires_in”: 7776000,”pfkey”: “357daa137145123b502e4617986ebef3”,”msg”: “”,”access_token”: “08883692C36350C78D7E0F25CBC796F6”,”login_cost”: 342}
     * @example var target_0 = sm("do_TencentQQ");
                target_0.login({appId:AppID,qqLink:"UniversalLinks"}, function(data, e){...}
     */
  login(params: LoginParams, listen: (data: string) => void): void;

  /**
     * 获取用户信息
     * @param params 
     * @param listen 
     * @returns 返回是一个String,里面包含了用户的基本信息，头像，昵称…
     * @example Token = data.access_token;
                Expires = data.expires_in;
                OpenId = data.openid;
                target_0.getUserInfo({token:data.access_token, expires:data.expires_in, openId:data.openid}, function(data, e){...});
     */
  getUserInfo(params: GetUserInfoParams, listen: (data: string) => void): void;

  /**
   * 注销登录
   * @param listen
   * @example target_0.logout(function(data, e) {...}
   */
  logout(listen: (data: boolean) => void): void;

  /**
   * 分享到QQ好友
   * @param params
   * @param listen
   * @returns true 分享成功，false 分享失败
   * @example target_0.shareToQQ({appId:AppID, type:0, qqLink:"Universal Links",title:"hello", url:Url, image:Img, summary:"share test", audio:Audio, appName:"AppWorker"}, function(data, e) {...})
   */
  shareToQQ(params: ShareToQQParams, listen: (data: boolean) => void): void;

  /**
   * 分享到QQ空间
   * @param params
   * @param listen
   * @example target_0.shareToQzone({appId:AppID, type:0 ,qqLink:"Universal Links", title:"hello", url:"data://img/qq/2.png", image:"source://image/0.jpg", summary:"share test"}, function(data, e) {...})
   */
  shareToQzone(
    params: ShareToQzoneParams,
    listen: (data: boolean) => void
  ): void;
}
