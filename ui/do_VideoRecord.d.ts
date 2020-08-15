import { UiBasicInstance } from "../base/uiBase";

export interface DoVideoRecord extends UiBasicInstance {
  /**
   * 是否启用前置摄像头
   *
   * 说明 : 当属性值为true时，启用前置摄像头；为false时，不开启。
   * @default false
   */
  facingFront: boolean;

  /**
   * 开始录制视频
   *
   * 说明: 打开录制界面开始录制视频
   * @param quality 选择录音输出的质量，支持high(19201080)、normal(1280720)、low(640*480),如果手机不支持high,以及normal,默认为low格式
   * @param limit 录制视频的时长限制，以毫秒为单位，-1时表示不限时长
   * @example
   * //以high品质录制不限时视频
   * do_VideoRecord.start({quality:"high", limit:-1});
   */
  start(quality?: string, limit?: number): void;
  start(params: { quality?: string; limit?: number }): void;

  /**
   * 停止录制视频
   * @example
   * do_VideoRecord.stop();
   */
  stop(): void;

  /**
     * 录制出错事件
     * @param eventName 
     * @param listen 
     * @example
     * do_VideoRecord.on("error",function(data){
        appworker.print(data,"错误信息")
        })
     */
  on(eventName: "error", listen: () => void): void;
  /**
     * 完成录制
     * @param eventName 返回值包含两个节点{path:’data://temp/do_VideoRecord/20160101101010111.mp4’,size:’232342’}，其中path为保存视频的路径，文件名是日期+精确到毫秒时间；size为视频大小，单位为KB
     * @param listen 
     * @example
     * do_VideoRecord.on("finish",function(data){
        appworker.print(JSON.stringify(data),"视频信息")
        })
     */
  on(eventName: "finish", listen: (data: object) => void): void;
}
