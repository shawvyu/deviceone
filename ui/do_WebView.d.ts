import { UiBasicInstance } from "../base/uiBase";

/**
 * 安卓下webview加载的页面,点击输入框,页面如何自动上跳?
 * 答: 可以将webview高度设置成自动(-1),或者将页面根ui换为webview.
 *
 * 安卓下可滚动页面中的webview加载完成,页面自动滑到webview位置,如何解决?
 * 答: 可以将webview的enabled属性设为false
 *
 * IOS对带”#”的url无法识别,如何处理?
 * 答: 设置webView.setDefaultEncodingURL(false)
 */
export interface DoWebView extends UiBasicInstance {
  /**
   * 控制WebView是否可以获取输入框焦点
   *
   * 说明 : 为true时可以获取焦点，false的时候无法获取焦点，仅支持Android平台
   * @default true
   */
  enabled: boolean;

  /**
   * 反弹效果
   *
   * 说明 : 只支持iOS平台，为false时没有上拉下拉的反弹效果
   * @default true
   */
  private bounces: boolean;

  /**
   * 缓存类型
   *
   * 说明 : 改变WebView的缓存方式，缺省值为no_cache表示不使用缓存；为normal时根据cache-control决定是否获取新数据；windows平台不支持
   * @default no_cache
   */
  cacheType: string;

  /**
   * 是否加载AppWorker函数
   *
   * 说明 : 若想要WebView可以调用AppWorker的函数，必须将该属性值设置为true，且在该页面的中将代码加到一个特定的函数window.onAppWorkerLoaded = function(){ //do something }方可
   * @default true
   */
  private allowAppWorker: boolean;

  /**
   * 是否显示进度条
   *
   * 说明 : webview的顶部有一个绿色进度条，显示加载网页的进度，缺省false不显示
   */
  isShowLoadingProgress: boolean;

  /**
   * 是否显示headerview
   * @default false
   */
  isHeaderVisible: boolean;

  /**
   * 网页地址
   *
   * 说明 : 支持http: //,https: //,支持source: //,data: //文件格式。文件格式的说明可以参考Storage类,ios的url里不能有#号或其他特殊服务，如果有需要转码
   * https在ios下会加载很慢，可以还是使用webview1
   */
  url: string;

  /**
   * 表头视图
   *
   * 说明 : 设置要显示的表头视图地址，不填但isHeaderVisible为true时有缺省样式
   */
  headerView: string;

  /**
   * 手势缩放
   *
   * 说明 : 设置webview是否支持手势缩小放大，设置为true时支持
   * @default false
   */
  zoom: boolean;

  /**
   * 浏览器标识
   *
   * 说明 : 设置浏览器的User-Agent
   */
  userAgent: string;

  /**
   * HTML中的视频是否自动全屏播放
   *
   * 说明 : 为true时则播放HTML页面中视频时自动全屏，为false时则在播放的时候不改变原有视频窗口大小
   */
  allowVideoFullScreenPlayback: boolean;

  /**
   * 回退
   *
   * 说明: 回退到上一个页面
   * @example do_WebView.back()
   */
  back(): void;

  /**
   * 前进到下一个页面
   * @example do_WebView.forward()
   */
  forward(): void;

  /**
   * 重新加载
   * @example do_WebView.reload()
   */
  reload(): void;

  /**
   * 停止刷新
   * @example do_WebView.stop()
   */
  stop(): void;

  /**
   * 是否可继续前进
   *
   * 说明: 判断页面是否能前进到下一页面
   * @example
   * var CanForward = do_WebView.canForward()
   * appworker.print(CanForward,"是否可以继续前进")
   */
  canForward(): boolean;

  /**
   * 是否可后退
   *
   * 说明: 判断页面是否可以后退
   * @example
   * var CanForward = do_WebView.canBack()
   * appworker.print(CanBack,"是否可以回退")
   */
  canBack(): boolean;

  /**
   * headerview复位
   * @example do_WebView.rebound()
   */
  rebound(): void;

  /**
   * 设置cookie
   *
   * 说明: 设置浏览器的cookie
   * @param url 如果webview加载该域名地址，会自动把cookie传给服务器
   * @param value
   * @example
   * do_WebView.setCookie({url:url,value:cookie});
   */
  setCookie(url: string, value: string): void;
  setCookie(params: { url: string; value: string }): void;

  /**
   * 设置顶部进度条颜色
   *
   * 说明: 设置加载html页面时，组件顶部进度条的颜色
   * @param color 颜色值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF
   * @example do_WebView.setLoadingProgressColor("000000FF")
   */
  setLoadingProgressColor(color: string): void;
  setLoadingProgressColor(param: { color: string }): void;

  /**
   * 设置是否跨域（仅支持Android平台，iOS默认支持）
   * @param allow [false]
   * @example do_WebView.allowUniversalAccessFromFileURLs(true)
   */
  allowUniversalAccessFromFileURLs(allow?: boolean): void;
  allowUniversalAccessFromFileURLs(param: { allow?: boolean }): void;

  /**
   * 设置默认转码
   *
   * 说明: 设置是否对url默认按照utf-8编码格式转码，仅支持iOS平台
   * @param isEncode 默认按照utf-8编码方式转码，设置为false则不对原url进行处理
   * @example do_WebView.setDefaultEncodingURL(true)
   */
  setDefaultEncodingURL(isEncode?: boolean): void;
  setDefaultEncodingURL(param: { isEncode?: boolean }): void;

  /**
   * 获取加载页面内容尺寸
   *
   * 说明: 获取当前加载页面真实内容的宽高
   * @returns 返回{width,height}
   * @example
   * var size = do_WebView.getContentSize()
   * appworker.print(JSON.stringify(size),"网页加载尺寸")
   */
  getContentSize(): object;

  /**
   * 加载html字符串
   * @param text
   * @param listen
   * @example
   *
   * var htmlString = "<a href=\"http://www.appworker.net\">Visit AppWorker</a>";
   * do_WebView.loadString({text:htmlString}, function(data, e) {
   *      appworker.print(data,"加载结果")
   * })
   */
  loadString(text: string, listen: () => void): void;
  loadString(param: { text: string }, listen: () => void): void;

  /**
     * 执行JavaScript函数
     * 
     * 说明: 在WebView页面执行一段Javascript代码，并返回值；Android平台仅支持单语句执行
     * @param code 
     * @param listen 
     * @example
     * //加载的html网页有function getbtn(val){}
        do_WebView.url="source://view/do_WebView/abc.html";
        //通过执行Javascript代码对网页中方法进行调用
        do_WebView.eval({code:"getbtn('evaltest')"}, function(data, e) {
        appworker.print(data,"加载结果")
        })
     */
  eval(code: string, listen: () => void): void;
  eval(param: { code: string }, listen: () => void): void;

  /**
   * 加载结束事件
   * @param eventName
   * @param listen
   * @returns 返回{url}，其中url表示当前操作的url地址，该地址不一定为网络地址，本地html页面跳转也会触发并返回本地路径
   * @example do_WebView.on("loaded",function(data){
   * appworker.print(data,"加载完成返回")
   * })
   */
  on(eventName: "loaded", listen: (data: object) => void): void;
  /**
   * 开始加载
   * @param eventName
   * @param listen
   * @returns 返回{url}，其中url表示当前操作的url地址，该地址不一定为网络地址，本地html页面跳转也会触发并返回本地路径,因平台限制ios无法在start事件中拿到准确地址
   * @example do_WebView.on("start",function(data){
   *  appworker.print(data)
   * }
   */
  on(eventName: "start", listen: (data: object) => void): void;
  /**
   * 下拉headerview事件
   * @param eventName
   * @param listen
   * @returns 返回{state,offset}，其中state表示headerview的状态，offset为headerview下拉的位移量；其中state=0：表示开始下拉headerview，在headerview下拉到headerview复位整个过程中，pull事件会触发很多次；state=1：表示下拉headerview超过headerview的高度，触发一次这个事件，前端开发者接受到这个事件会更新headerview的ui；state=2：下拉超过一定值，触发state=1事件后，松手会触发一次这个事件，前端开发者接受到这个事件会更新headerview的ui，然后开始加载数据，数据加载完后需要调用rebound方法让header复位
   * @example
   * do_WebView.on("pull",function(data){
   *  appworker.print("state属性:"+data.state+"offset属性"+data.offset)
   * })
   */
  on(eventName: "pull", listen: (data: object) => void): void;
  /**
   * 加载错误事件
   * @param eventName
   * @param listen
   * @returns 加载网页失败或加载一个错误的或者不存在的网页时触发，返回错误信息
   * @example
   * do_WebView.on("failed",function(data){
   * appworker.print(data,"加载失败回调")
   * })
   */
  on(eventName: "failed", listen: (data: string) => void): void;
}
