import { UiBasicInstance } from "../base/uiBase";

export interface DoTencentVodPlayerView extends UiBasicInstance{
    /**
     * 应用AppId
     * 
     * 说明 : 和fileId配合使用(enableVod=false无效)
     */
    appId:string

    /**
     * 播放文件Id
     * 
     * 说明 : 和appId配合使用(enableVod=false无效)
     */
    fileId:string

    /**
     * 是否使用vod点播
     * 
     * 编辑方法: 仅设计器修改
     * 
     * 说明 : 默认为true，标明当前播放视图用于播放腾讯云点播视频，则会启用appId和fileId作为参数来初始化播放器
     */
    enableVod:boolean

    /**
     * 播放文件源路径
     * 
     * 说明 : 单独使用;支持data://、source://(本地路径不能带有中文字符串)和网络地址(enableVod=true无效)
     */
    path:string

    /**
     * 视频封面图片
     * 
     * 说明 : 支持data://、source://和网络地址.备注(如果enableVod=true,优先使用appId和fileId获取到的视频信息中的coverUrl来设置视频封面图片;如果vod视频中无法获取封面图片，则用当前值作为图片封面)(暂时只支持iOS)
     * 
     */
    placeHolderImage:string

    /**
     * 是否自动播放
     * 
     * 编辑方法: 仅设计器修改。
     * 
     * 说明 : 自动播放，默认不自动播放
     * @default false
     */
    autoPlay:boolean

    /**
     * 是否开启视频缓存功能
     * 
     * 编辑方法: 仅设计器修改。
     * 
     * 说明 : 是否自动缓存播放的视频，默认自动缓存
     * @default true
     */
    enableCache:boolean

    /**
     * 最大缓存视频个数
     * 
     * 编辑方法: 仅设计器修改。
     * 
     * 说明 : enableCache为true生效，设置最大缓存视频个数，建议不要设置过大，避免缓存太多数据，默认缓存数量为5
     */
    maxCacheItems:number

    /**
     * 是否竖屏隐藏返回按钮
     * 
     * 编辑方法: 仅设计器修改。
     * @default false
     */
    hideBackBtnWhenPortrait:boolean

    /**
     * 是否隐藏截屏按钮
     * 
     * 编辑方法: 仅设计器修改。
     * @default false
     */
    hideCaptureBtn:boolean

    /**
     * 是否隐藏全屏按钮
     * 
     * 编辑方法: 仅设计器修改。
     * 
     * 说明 :false表示显示全屏按钮，true表示隐藏全屏按钮
     * @default false
     */
    enableFull:boolean

    /**
     * 暂停播放
     */
    pause():void

    /**
     * 继续播放
     */
    resume():void

    /**
     * 禁用进度条
     */
    forbiddenProgressBar():void

    /**
     * 启用进度条
     */
    relieveProgressBar():void

    /**
     * 视频当前播放的时间
     * @returns 返回当前播放的时间，单位为毫秒
     */
    getCurrentPosition():string

    /**
     * 播放
     * 
     * 每次调用，会重新播放
     * @param position 从视频中的某一点开始播放，毫秒值
     * @param listen 
     */
    play(position?:number,listen:()=>void):void

    /**
     * 播放器的截屏按钮点击事件
     * 
     * 说明: 播放器右上角部分有个小相机按钮，点击后会截图当前视频的画面并给出预览图，预览图消失后，触发当前事件，返回预览图的本地路径
     * @param eventName 
     * @param listen 
     * @returns 返回截屏图片保存的地址，是一个data://temp/do_TencentVodPlayerView目录下一个图片文件
     */
    on(eventName:'screenShot',listen:(data:string)=>void):void
    /**
     * 播放器的播放结束事件
     * 
     * 说明: 无返回，只用来协助用户处理播放结束时的逻辑
     * @param eventName 
     * @param listen 
     */
    on(eventName:'finish',listen:()=>void):void
    /**
     * 放器返回按钮点击事件，仅竖屏有效
     * 
     * 说明: 播放器视图左上角有个返回的按钮，竖屏时，点击会触发当前事件。方便用户进行页面操作。例如，closePage
     * @param eventName 
     * @param listen 
     */
    on(eventName:'playBackBtnClick',listen:()=>void):void
}