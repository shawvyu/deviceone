/*
 * @Author: shawvyu
 * @Date: 2020-08-08 21:39:19
 * @LastEditTime: 2020-08-08 21:45:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_WebSocket.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";

export interface DoWebSocket extends MmBasicInstance {
  /**
     *  关闭连接
     * @param listen 
     * @example var do_webSocket = mm("do_WebSocket");
                do_webSocket.close(function(success){
                        print("关闭结果: " + success);
                });
     */
  close(listen: (data: boolean) => void): void;

  /**
     * webSocket服务端建立连接
     * @param url 要连接服务器的地址
     * @param listen 
     * @example var cip = ui("ip");
                var ip1 = cip.text.trim();
                do_webSocket.connect(ip1, function(data, e) {
                ...})
     */
  connect(url: string, listen: (data: boolean) => void): void;

  /**
   * 发送数据
   * @param type 如果发送的数据是字符串,type指定字符串的编码方式,支持UTF-8,GBK;如果发送的是16进制字符串,type为HEX;如果发送的是文件,type为file；Windows平台仅支持UTF-8格式
   * @param content 如果发送的是文件，content指定文件的全路径
   * @param listen
   * @example do_webSocket.send("UTF-8", "你好10", function(data, e) {})
   */
  send(type: string, content: string, listen: (data: boolean) => void): void;

  /**
   * 接收数据
   * @param eventName
   * @param listen
   * @returns 接收到的16进制数据
   * @example do_webSocket.on("receive",function(data,e){})
   */
  on(eventName: "receive", listen: (data: string) => void): void;
  /**
   * 链接异常
   * @param eventName
   * @param listen
   * @returns 连接成功后断开网络或服务器停止服务时触发，返回错误信息msg
   * @example do_webSocket.on("error",function(data,e){})
   */
  on(eventName: "error", listen: (data: object) => void): void;
}
