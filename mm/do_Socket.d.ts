/*
 * @Author: your name
 * @Date: 2020-08-08 18:50:08
 * @LastEditTime: 2020-08-08 18:55:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_Socket.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";

export interface DoSocket extends MmBasicInstance {
  /**
   * 关闭连接
   * @example do_Socket.close();
   */
  close(): boolean;

  /**
     * 说明: 与socket服务端建立连接
     * @param ip 
     * @param port 
     * @param listen 
     * @example var ip1 = "text    192.168.0.55";
                var port1 = "9921";
                do_Socket.connect(ip1, port1, function(data, e) {
                    print(data,"connect");
                })
     */
  connect(ip: string, port: string, listen: (data: boolean) => void): void;

  /**
     * 发送数据
     * 
     * 说明: 向服务端发送数据
     * @param type 如果发送的数据是字符串,type指定字符串的编码方式,支持UTF-8,GBK;如果发送的是16进制字符串,type为HEX;如果发送的是文件,type为file
     * @param content 如果发送的是文件，content指定文件的全路径
     * @param listen 
     * @example //发送utf_8格式内容
                do_Socket.send("UTF-8", "你好10", function(data, e) {
                    print(data,"发送是否成功");
                })
     */
  send(type: string, content: string, listen: (data: boolean) => void): void;

  /**
     * 接收数据
     * @param eventName 
     * @param listen 
     * @example do_Socket.on("receive",function(data,e){
                    print(" 返回值：" + JSON.stringify(data), "receive 事件 ");
                })
     */
  on(eventName: "receive", listen: (data: string) => void): void;

  /**
     * 链接异常
     * @param eventName 
     * @param listen 
     * @returns 连接成功后断开网络或服务器停止服务时触发，返回错误信息msg
     * @example do_Socket.on("error",function(data,e){
                    print(" 返回值：" + JSON.stringify(data), "error 事件 ");
                })
     */
  on(eventName: "error", listen: (data: object) => void): void;
}
