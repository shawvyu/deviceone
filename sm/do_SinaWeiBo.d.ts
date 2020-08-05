/*
 * @Author: shawvyu
 * @Date: 2020-08-05 22:24:18
 * @LastEditTime: 2020-08-05 22:33:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_SinaWeiBo.d.ts
 */
import { SmBasicInstance } from "./smBase";
/** 0：默认，图文分享；1：网页分享；2：音乐分享；3：视频分享；4：音频分享； */
type ShareType = 0 | 1 | 2 | 3 | 4;
interface LoginInfo {
  uid: string;
  access_token: string;
  refresh_token: string;
  expires_in: string;
}
interface ShareParams {
  /** 在微博开发平台上申请的appId */
  appId: string;
  /** 0：默认，图文分享；1：网页分享；2：音乐分享；3：视频分享；4：音频分享； */
  type: ShareType;
  /** 分享的标题, 最长30个字符 */
  title: string;
  /** 分享后显示的图片，只支持本地图片data:// */
  image: string;
  /** 文件的远程链接, 以URL的形式传入 */
  url: string;
  /** 分享的消息摘要，最长40个字符 */
  summary?: string;
}
export interface DoSinaWeiBo extends SmBasicInstance {
  /**
   * 使用sina微博登录
   *
   * 说明: 使用sina微博登录获取用户登录的信息
   * @param appId 在微博开发平台上申请的appId
   * @param listen
   * @returns 返回用户登录信息{‘uid’: ‘2806220780’, ‘access_token’: ‘2.00UNcuDDswn6rCccbb272dc4SsU7dC’, ‘refresh_token’: ‘2.00UNcuDDswn6rCa14e51baccu2BzTD’,’expires_in’: ‘1429210895335’}
   */
  login(appId: string, listen: (data: LoginInfo) => void): void;

  /**
   * 获取用户信息
   * @param params
   * @param listen
   * @returns 返回是一个String,里面包含了用户的基本信息，头像，昵称…
   */
  getUserInfo(params: LoginInfo, listen: (data: string) => void): void;

  /**
   * 注销
   * @param listen
   * @returns  true 注销成功，false 注销失败
   */
  logout(listen: (data: boolean) => void): void;

  /**
   *  分享到新浪微博
   * @param params
   * @param listen
   * @returns  true 分享成功，false 分享失败
   */
  share(params: ShareParams, listen: (data: boolean) => void): void;
}
