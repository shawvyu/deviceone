/*
 * @Author: your name
 * @Date: 2020-08-08 21:21:44
 * @LastEditTime: 2020-08-08 21:29:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_MultiAudio.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";

export interface DoMultiAudio extends MmBasicInstance {
  /**
   * 开始播放
   * @param params
   * @param params.path 支持data://、source://和网络链接
   * @param params.point 从最开始的第几毫秒
   * @example do_MultiAudio.play({path:"source://view/MM/do_MultiAudio/2.mp3", point:0});
   */
  paly(params: { path: string; point?: number }): void;

  /**
     * 暂停播放
     * @returns  返回暂停时播放到第几毫秒
     * @example var time = do_MultiAudio.pause();
                appworker.print(time,"播放时间")
     */
  pause(): number;

  /**
   * 继续播放
   * @example var time = do_MultiAudio.resume();
   */
  resume(): void;

  /**
   * 停止播放
   * @example var time = do_MultiAudio.stop();
   */
  stop(): void;

  /**
     * 音频播放结束后触发
     * @param eventName 
     * @param listen 
     * @example do_MultiAudio.on("playFinished",function(data){
                    appworker.print("播放结束")
                })
     */
  on(eventName: "playFinished", listen: () => void): void;
  /**
     *  音频播放错误时触发
     * @param eventName 
     * @param listen 
     * @example do_MultiAudio.on("error",function(data){
                    appworker.print("错误")
                })
     */
  on(eventName: "error", listen: () => void): void;
  /**
     * 播放进度
     * @param eventName 
     * @param listen 
     * @returns 返回音频总时间和当前播放时间{currentTime,totalTime}，单位为毫秒
     * @example do_MultiAudio.on("playProgress",function(data){
                    appworker.print(JSON.stringify(data),"进度信息")
                })
     */
  on(eventName: "playProgress", listen: (data: object) => void): void;
}
