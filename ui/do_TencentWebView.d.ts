import { UiBasicInstance } from "../base/uiBase";

export interface DoTencentWebView extends UiBasicInstance {
  /**
   * 反弹效果
   *
   * 说明 : 只支持iOS平台，为false时没有上拉下拉的反弹效果
   * @default true
   */
  bounces: boolean;

  /**
   * 缓存类型
   *
   * 说明 : 改变WebView的缓存方式，缺省值为no_cache表示不使用缓存；为normal时根据cache-control决定是否获取新数据；windows平台不支持
   * @default  no_cache
   */
  cacheType: string;

  /**
   * 是否显示进度条
   *
   * 说明 : 组件的顶部有一个绿色进度条，显示加载网页的进度，缺省false不显示
   */
  isShowLoadingProgress: boolean;

  /**
   * 网页地址
   *
   * 说明 : 支持http://,https://,支持source://,data://文件格式。文件格式的说明可以参考Storage类
   */
  url: string;

  /**
   * 手势缩放
   *
   * 说明 : 设置组件是否支持手势缩小放大，设置为true时支持
   * @default false
   */
  zoom: boolean;

  /**
   * 浏览器标识
   */
  userAgent: string;

  /**
   * 回退
   */
  back(): void;

  /**
   * 前进
   */
  forward(): void;

  /**
   * 重新加载
   */
  reload(): void;

  /**
   * 停止刷新
   */
  stop(): void;

  /**
   * 是否可继续前进
   */
  canForward(): boolean;

  /**
   * 是否可后退
   */
  canBack(): boolean;

  /**
   * 设置cookie
   * @param url 如果加载该域名地址，会自动把cookie传给服务器
   * @param value
   */
  setCookie(url: string, value: string): void;

  /**
   * 设置顶部进度条颜色
   * @param color |颜色值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF
   */
  setLoadingProgressColor(color: string): void;

  /**
   * 设置默认转码
   *
   * 说明: 设置是否对url默认按照utf-8编码格式转码，仅支持iOS平台
   * @param isEncode 默认按照utf-8编码方式转码，设置为false则不对原url进行处理
   */
  setDefaultEncodingURL(isEncode?: boolean): void;

  /**
   * 获取加载页面内容尺寸
   *
   * 说明: 获取当前加载页面真实内容的宽高，windows平台不支持
   * @returns 返回{width,height}
   */
  getContentSize(): object;
  /**
   * 加载html字符串
   * @param text
   * @param listen
   */
  loadString(text: string, listen: () => void): void;
  loadString(param: { text: string }, listen: () => void): void;

  /**
   * 执行JavaScript函数
   *
   * 说明: 在页面执行一段Javascript代码，并返回值
   * @param code
   * @param listen
   */
  eval(code: string, listen: (data: string) => void): void;
  eval(param: { code: string }, listen: (data: string) => void): void;

  /**
   * 加载结束事件
   * @param eventName
   * @param listen
   * @returns  返回{url}，其中url表示当前操作的url地址，该地址不一定为网络地址，本地html页面跳转也会触发并返回本地路径
   */
  on(eventName: "loaded", listen: (data: object) => void): void;
  /**
   * 开始加载
   * @param eventName
   * @param listen
   * @returns 返回{url}，其中url表示当前操作的url地址，该地址不一定为网络地址，本地html页面跳转也会触发并返回本地路径
   */
  on(eventName: "start", listen: (data: object) => void): void;
  /**
   * 加载错误事件
   * @param eventName
   * @param listen
   * @returns 加载网页失败或加载一个错误的或者不存在的网页时触发，返回错误信息
   */
  on(eventName: "failed", listen: (data: string) => void): void;
  /**
   * h5执行js事件
   *
   * 说明: 当h5 中执行了javascript:window.do_TencentWebView.fire(‘参数’);时触发
   * @param eventName
   * @param listen
   * @returns 返回fire方法传递的参数
   */
  on(eventName: "eventFromHtml", listen: (data: string) => void): void;
}
