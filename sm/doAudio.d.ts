/*
 * @Author: your name
 * @Date: 2020-08-01 11:39:59
 * @LastEditTime: 2020-08-01 12:08:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\doAudio.d.ts
 */

import { SmBasicInstance } from "./smBase";

type RecordOutType = "mp3" | "amr" | "aac";
type RecordOutQuality = "high" | "normal" | "low";

type AudioListen = () => void;

interface PalyParams {
  /** @description 支持data://、source://和网络链接 */
  path: string;
  /** @description 从最开始的第几毫秒 */
  point?: number;
}
interface StartRecordParams {
  /** 要保存的录音文件路径，支持数据区data://，指定到目录 */
  path: string;
  /** 选择录音输出的格式，支持mp3、amr、aac格式 defaultvalue=mp3 */
  type?: RecordOutType;
  /** 选择录音输出的质量，支持high、normal、low defalutvalue=normal */
  quality?: RecordOutQuality;
  /** 录音的时长限制，以毫秒为单位，-1时表示不限制录音时长 defalutvalue=-1 */
  limit?: number;
}

interface RecordFinishedParams {
  /** 返回录音文件保存的路径 */
  path: string;
  /** 本次录音时长，单位为毫秒 */
  time: number;
  /** 返回的录音文件大小，单位为字节 */
  size: number;
}

interface PlayProgressParams {
  /** 当前播放时间 */
  currentTime: number;
  /** 音频总时间 */
  totalTime: number;
}

interface RecordVolumeParams {
  /** 实时音量大小 */
  volume: number;
}

/**
 * @description 播放音频，能支持播放mp3、amr（iOS 4.0系统后不支持）、aac格式的本地和网络音频，录制音频可支持mp3、amr、aac格式输出
 */
export interface DoAudio extends SmBasicInstance {
  /**
     * @description 开始播放
     * @param params 
     * @example do_Audio().play({
                    path:"data://test/a1.mp3",
                    point:""
                });
     */
  play(params: PalyParams): void;

  /**
     * @description 暂停播放
     * @returns 返回暂停时播放到第几毫秒
     * @example var dataa = do_Audio.pause();
                print(dataa,"播放停止")
     */
  pause(): number;

  /**
   * @description 继续播放
   * @example do_Audio.resume()
   */
  resume(): void;

  /**
   * @description 停止播放
   * @example do_Audio.stop()
   */
  stop(): void;

  /**
     * @description 开始录音
     * @param params 
     * @param listen 
     * @example do_Audio.startRecord({path:"data://do_Audio",type:"mp3",quality:"normal",limit:-1})(function(data){
                    print("开始录音");
                });
     */
  startRecord(params: StartRecordParams, listen: AudioListen): void;

  /**
     * @description 结束录音
     * @returns 返回录音文件保存的目录及文件名
     * @example var datab = do_Audio.stopRecord();
                print(datab,"结束录音")
     */
  stopRecord(): string;

  /**
     * @description 结束录音
     * @param listen 
     * @example do_Audio.stopRecordAsync(function(data, e) {
                    print(data,"结束录音")
                });
     */
  stopRecordAsync(listen: AudioListen): void;

  /**
   * @description  开始播放 说明: 不可与play方法同时使用，播放网络音频时建议使用该方法，避免卡顿
   * @param params
   * @param listen
   */
  palyAsync(params: PalyParams, listen: AudioListen): void;

  /** @description 音频播放结束后触发 */
  on(eventName: "playFinished", listen: AudioListen): void;
  /** @description 录音结束后触发 */
  on(
    eventName: "recordFinished",
    listen: (data: RecordFinishedParams) => void
  ): void;
  /** 音频播放、录音错误时触发 */
  on(eventName: "error", listen: AudioListen): void;
  /** 音频播放进度 */
  on(
    eventName: "playProgress",
    listen: (data: PlayProgressParams) => void
  ): void;
  /**
   * @description 录音进度
   * @param eventName
   * @param listen
   * @returns 返回录音总时间totalTime
   */
  on(eventName: "recordProgress", listen: (data: number) => void): void;
  /**
   * @description 录音音量变化事件
   * @param eventName
   * @param listen
   */
  on(
    eventName: "recordVolume",
    listen: (data: RecordVolumeParams) => void
  ): void;
}
