/*
 * @Author: your name
 * @Date: 2020-08-08 12:30:49
 * @LastEditTime: 2020-08-08 12:52:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_TencentUGSV.d.ts
 */
import { SmBasicInstance } from "../base/smBase";
/**
 * @link {https://cloud.tencent.com/document/product/584/9457}
 */
export interface DoTencentUGSV extends SmBasicInstance {
  /**
   * 开启实时录制
   * @example var target_0 = sm("do_TencentUGSV");target_0.startLiveRecord();
   */
  startLiveRecord(): void;

  /**
     * 开启视频编辑
     * @example var target_0 = sm("do_TencentUGSV");
                target_0.startVideoEdit();
     */
  startVideoEdit(): void;

  /**
     * 开启图片编辑
     * @example var target_0 = sm("do_TencentUGSV");
                target_0.startPictureEdit();
     */
  startPictureEdit(): void;

  /**
   * 视频编辑完的保存按钮点击事件
   * @param eventName
   * @param listen
   * @returns {object} {videoPath:\”data://do_TencentUGSV/ouput.mp4\”,videoCoverPath:\”data://do_TencentUGSV/cover.jpg\” } 保存按钮点击会将视频保存到系统相册，同时也会保存一份视频到本地，事件回调参数中给出本地视频路径
   */
  on(eventName: "saveBtnClick", listen: (data: object) => void): void;
  /**
   * 编辑完成后的发布按钮点击事件
   * @param eventName
   * @param listen
   * @returns {object}  {videoPath:\”data://do_TencentUGSV/ouput.mp4\”,videoCoverPath:\”data://do_TencentUGSV/cover.jpg\” } ，事件回调参数中给出本地视频路径和视频封面图片
   */
  on(eventName: "publishBtnClick", listen: (data: object) => void): void;
}
