/*
 * @Author: your name
 * @Date: 2020-08-04 21:59:33
 * @LastEditTime: 2020-08-04 22:05:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_AssistiveTouch.d.ts
 */
import { SmBasicInstance } from "./smBase";

interface ShowViewParams {
  /** x,y，中间用逗号隔开 */
  location: string;
  /** 图片地址，支持source://、data://路径 */
  image: string;
  /** view是否支持移动，缺省支持 */
  isMove?: boolean;
}
export interface DoAssistiveTouch extends SmBasicInstance {
  /**
     * 显示辅助按钮
     * @param params 
     * @example var assistiveTouch = sm("do_AssistiveTouch");
                assistiveTouch.showView("100,100","source://view/SM/do_AssistiveTouch/test/1.png" , "true");
                assistiveTouch.showView("100,100","data://0.jpg" , "false");
     */
  showView(params: ShowViewParams): void;

  /**
   * 隐藏辅助按钮
   * @example assistiveTouch.hideView();
   */
  hideView(): void;
}
