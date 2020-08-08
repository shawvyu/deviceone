/*
 * @Author: shawvyu
 * @Date: 2020-08-08 12:26:40
 * @LastEditTime: 2020-08-08 12:29:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_VideoPlayer.d.ts
 */
import { SmBasicInstance } from "../base/smBase";

export interface DoVideoPlayer extends SmBasicInstance {
  /**
     * 播放视频
     * @param path 支持data://、source://和网络地址
     * @param point 从视频中的某一点开始播放，毫秒值
     * @example var target_0 = sm("do_VideoPlayer");
                target_0.play({path:"data://Video/2.mp4"});
                target_0.play({path:"http://ocrhq8a07.bkt.clouddn.com/1472545688258.mp4"});
     */
  play(path: string, point?: number): void;
  play(params: { path: string; point?: number }): void;
}
