/*
 * @Author: your name
 * @Date: 2020-08-04 22:58:54
 * @LastEditTime: 2020-08-04 23:12:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_FingerPrintRecognition.d.ts
 */
import { SmBasicInstance } from "../base/smBase";

interface RecognizeParams {
  /** 应用程序提供的请求身份验证的原因，显示在向用户呈现的身份验证对话框中。在iOS中会显示在副标题中。该字符串应以用户当前的语言提供，应该简短明了。它不应该包含应用程序名称，因为它出现在身份验证对话框的其他位置。（仅iOS有效） defaultvalu=通过Home键验证已有手机指纹 */
  localizedReason: string;
  /** 验证期间向用户呈现的对话框中的取消验证按钮的标题名称。该字符串应以用户当前的语言提供，应该简短明了。（仅iOS有效） defaultvalue=取消 */
  localizedCancelTitle?: string;
  /** 验证期间向用户呈现的对话框中的自定义操作按钮标题名称。该字符串应以用户当前的语言提供，应该简短明了。（仅iOS有效） defaultvalue=前往自定义验证 */
  localizedFallbackTitle?: string;
}
export interface DoFingerPrintRecognition extends SmBasicInstance {
  /**
     * 启动识别
     * @param params 
     * @returns 启动成功返回true,失败返回false(iOS验证弹框为系统自带,不支持设备的不会弹出验证框;Android端默认无验证弹框,用户可以拿到true返回值时弹出自定义验证框)
     * @example var target_0=sm("do_FingerPrintRecognition");
                target_0.startRecognize({localizedReason:"测试验证原因", localizedCancelTitle:"取消操作"});
     */
  startRecognize(params: RecognizeParams): boolean;
  /**
     * 取消识别
     * @example var target_0=sm("do_FingerPrintRecognition");
                target_0.cancel();
     */
  cancel(): void;

  /**
     * 判断手机是否支持指纹识别
     * @returns 支持返回true,失败返回false
     * @example var target_0=sm("do_FingerPrintRecognition");
                target_0.verify();
     */
  verify(): boolean;

  /**
     * 验证过程中，验证弹框自定义验证按钮点击事件(仅iOS有效，订阅该事件，用户处理自定义验证逻辑步骤)
     * @param eventName 
     * @param listen 
     * @returns 
     * @example target_0.on("localizedFallbackButtonClick",function(data,e){
                ...
                })
     */
  on(
    eventName: "localizedFallbackButtonClick",
    listen: (data: string, e: Error) => void
  ): void;

  /**
   * 验证事件(startRecognize方法的识别结果从该事件返回值取)
   *
   * 说明: 验证事件(startRecognize方法的识别结果从该事件返回值取)
   * @param eventName
   * @param listen
   */
  on(
    eventName: "recognizeResult",
    listen: (data: boolean, e: Error) => void
  ): void;
}
