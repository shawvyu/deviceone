import { UiBasicInstance } from "../base/uiBase";

export interface DoTencentSVPlayerView extends UiBasicInstance {
  /**
   * 应用AppId
   *
   * 说明 : 和fileId配合使用(enableVod=false无效)
   */
  appId: string;

  /**
   * 播放文件Id
   *
   * 说明 : 和appId配合使用(enableVod=false无效)
   */
  fileId: string;

  /**
   * 是否使用vod点播
   *
   * 编辑方法: 仅设计器修改。
   *
   * 说明 : 默认为true，标明当前播放视图用于播放腾讯云点播视频，则会启用appId和fileId作为参数来初始化播放器
   */
  enableVod: boolean;
  /**
   * 播放文件源路径
   *
   * 说明 : 单独使用;支持data://、source://(本地路径不能带有中文字符串)和网络地址(enableVod=true无效)
   */
  path: string;

  /**
   * 视频封面图片
   *
   * 说明 : 支持data://、source://和网络地址.备注(如果enableVod=true,优先使用appId和fileId获取到的视频信息中的coverUrl来设置视频封面图片;如果vod视频中无法获取封面图片，则用当前值作为图片封面)
   * @default true
   */
  placeHolderImage: string;

  /**
   * 是否自动播放
   *
   * 编辑方法: 仅设计器修改。
   *
   * 说明 : 自动播放，默认不自动播放
   * @default false
   */
  autoPlay: boolean;

  /**
   * 是否开启视频缓存功能
   *
   * 编辑方法: 仅设计器修改。
   *
   * 说明 : 是否自动缓存播放的视频，默认自动缓存
   * @default true
   */
  enableCache: boolean;

  /**
   * 最大缓存视频个数
   *
   * 编辑方法: 仅设计器修改。
   *
   * 说明 : enableCache为true生效，设置最大缓存视频个数，建议不要设置过大，避免缓存太多数据，默认缓存数量为5
   * @default 5
   */
  maxCacheItems: number;

  /**
   * 是否循环播放
   *
   * 编辑方法: 仅设计器修改。
   *
   * 说明 :是否循环播放，默认不循环播放
   * @default false
   */
  loopPlay: boolean;

  /**
   * 视频缓存目录
   *
   * 编辑方法: 仅设计器修改。
   *
   * 说明 :enableCache时会以取cacheDirect为缓存目录，将视频缓存到此目录下。默认缓存目录为：data://do_TencentSVPlayerView
   * @default false
   */
  cacheDirect: boolean;

  /**
   * 暂停播放
   */
  pause(): void;

  /**
   * 继续播放
   */
  resume(): void;

  /**
   * 每次调用，会重新播放
   * @param listen
   */
  play(listen: () => void): void;

  /**
   * 播放进度回调
   *
   * 说明: 播放器右上角部分有个小相机按钮，点击后会截图当前视频的画面并给出预览图，预览图消失后，触发当前事件，返回预览图的本地路径
   * @param eventName
   * @param listen
   * @returns {object} {currentTime:2.00,totalTime:10.00}，currentTime为当前播放时长，totalTime为总时长，单位是秒
   */
  on(eventName: "playProgress", listen: (data: object) => void): void;
}
