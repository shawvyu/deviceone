/*
 * @Author: shawvyu
 * @Date: 2020-08-08 12:39:25
 * @LastEditTime: 2020-08-08 12:42:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_ZoomVideo.d.ts
 */
import { SmBasicInstance } from "../base/smBase";

export interface DoZoomVideo extends SmBasicInstance{
    /**
     * 加入会议
     * @param userName 用户名字
     * @param meetingNumber 会议号
     * @param meetingPassword 会议密码
     * @example var zoom = sm("do_ZoomVideo");
                zoom.joinMeeting("fengzi","3234567896","123456");
     */
    joinMeeting(userName:string,meetingNumber:string,meetingPassword?:string):number
}