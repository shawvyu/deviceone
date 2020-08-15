import { UiBasicInstance } from "../base/uiBase";

export interface DoVideoView extends UiBasicInstance {
  /**
   * 播放文件源路径
   *
   * 说明 : 支持initdata://、data://、source://和网络地址
   */
  path: string;

  /**
   * 开始播放
   *
   * 说明: 开始播放视频,默认从0开始播放
   * @param point 从视频中的某一点开始播放，毫秒值
   * @example
   * //从100毫秒开始播放
   * do_VideoView.play({point:100})
   */
  play(point: number): void;
  play(param: { point: number }): void;

  /**
   * 暂停播放
   *
   * @returns 返回当前视频暂停时的位置，毫秒值
   * @example
   * var point = do_VideoView.pause()
   * appworker.print(point,"暂停时间")
   */
  pause(): number;

  /**
   * 继续播放
   */
  resume(): void;

  /**
   * 停止播放
   * @example
   * do_VideoView.stop()
   */
  stop(): void;

  /**
   * 当前视频是否正在播放
   *
   * @returns true为正在播放，false 为暂停播放、停止或未开始状态
   * @example
   * var data = do_VideoView.isPlaying();
   * appworker.print(data,"当前视频状态")
   */
  isPlaying(): boolean;

  /**
   * 视频当前播放的时间
   * @returns 返回当前播放的时间，单位为毫秒
   * @example
   * var data = do_VideoView.getCurrentPosition()
   * appworker.print(data,"当前播放时间")
   */
  getCurrentPosition(): string;

  /**
   * 全屏播放
   * @param isFullScreen [false] 为false是表示退出全屏，小窗口播放，若已为小窗口播放则没有变化；为true是表示转为全屏播放，若已为全屏播放则没有变化
   * @example
   * //进入全屏
   * do_VideoView.expand({isFullScreen:true});
   * //退出全屏
   * do_VideoView.expand({isFullScreen:false})
   */
  expand(isFullScreen: boolean): void;
  expand(param: { isFullScreen: boolean }): void;

  /**
   *
   * @param visible
   * @example
   * //显示按钮
   * do_VideoView.setControlVisible({visible:true})
   * //隐藏按钮
   * do_VideoView.setControlVisible({visible:false})
   */
  setControlVisible(visible?: boolean): void;
  setControlVisible(param: { visible?: boolean }): void;

  /**
     * 保存为图片
     * @param time 默认取第一帧截图
     * @param format 支持两种格式：PNG，JPEG
     * @param quality 图片的压缩质量，支持 1-100，windows平台不支持
     * @param outPath 保存的图片路径支持data://目录，如果为空，缺省返回唯一图片路径，会另存到data://temp/do_VideoView/目录下
     * @param listen 
     * @returns  返回当前保存的图片路径，为空时表示保存失败
     * @example
     * do_VideoView.getFrameAsImage(
            {time:5000,format:"PNG",quality:80,outPath:"data://temp/do_VideoView/test/1.png"}, function(data, e) {
                appworker.print(data,"图片保存路径")
            })
     */
  getFrameAsImage(
    time?: number,
    format?: string,
    quality?: number,
    outPath?: string,
    listen: (data: string) => void
  ): void;
  getFrameAsImage(
    params: {
      time?: number;
      format?: string;
      quality?: number;
      outPath?: string;
    },
    listen: (data: string) => void
  ): void;

  /**
     * 保存为Bitmap
     * @param bitmap 
     * @param time 默认取第一帧截图
     * @param listen 
     * @returns 说明: 将获取的那一帧保存为一个Btimap,暂不支持网络视频截取
     * @example
     * var bitmap1 = mm("do_Bitmap");
        do_VideoView.getFrameAsBitmap({bitmap:bitmap1,time:5000}, function(data, e) {
        })
     */
  getFrameAsBitmap(bitmap: string, time?: number, listen: () => void): void;
  getFrameAsBitmap(
    params: { bitmap: string; time?: number },
    listen: () => void
  ): void;

  /**
     * 视频播放完后触发
     * @param eventName 
     * @param listen 
     * @example
     * do_VideoView.on("finish",function(data,e){
        appworker.print(data,"结束返回")
        })
     */
  on(eventName: "finished", listen: () => void): void;
  /**
     * 视频播放异常时触发
     * @param eventName 
     * @param listen 
     * @example
     * do_VideoView.on("error",function(data,e){
        appworker.print(data,"异常返回")
        })
     */
  on(eventName: "error", listen: () => void): void;
}
