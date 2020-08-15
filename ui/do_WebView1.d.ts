import { DoWebView } from "./do_WebView";

export interface DoWebView1 extends DoWebView {
  /**
   * 控制WebView内部是否可滚动
   *
   * 说明 : 控制WebView内部是否可滚动
   * @default true
   */
  scrollEnable: boolean;
}
