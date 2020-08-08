/*
 * @Author: shawvyu
 * @Date: 2020-08-08 21:31:05
 * @LastEditTime: 2020-08-08 21:37:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_UdpSocket.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";

export interface DoUdpSocket extends MmBasicInstance {
  /**
   * 本地端口号
   * 说明 : 跟服务端交互使用,服务端发送消息会根据客户端的ip和端口号发送,客户端根据端口号生成socket实例
   * @default 8888
   */
  localPort: string;

  /**
   * 服务端地址
   */
  serverIP: string;

  /**
   * 服务端端口号
   */
  serverPort: string;

  /**
     * 打开连接
     * 
     * 说明: 设置过localPort属性,执行此方法取后才能发送数据
     * @example var do_udpsocket = mm("do_UdpSocket");
                var Ip = ui("ip").text.trim();
                var Sport = ui("SPort").text.trim();
                var Lport = ui("LPort").text.trim();
                do_udpsocket.serverIP = Ip;
                do_udpsocket.serverPort = Sport;
                do_udpsocket.localPort = Lport;
                do_udpsocket.open();
     */
  open(): void;

  /**
   * 关闭连接
   * @example do_udpsocket.close();
   */
  close(): void;

  /**
   * 发送数据
   * @param type 如果发送的数据是字符串,type指定字符串的编码方式,支持UTF-8,GBK;如果发送的是16进制字符串,type为HEX;如果发送的是文件,type为file
   * @param content 如果发送的是文件，content指定文件的全路径，iOS平台最大支持9k大小文件
   * @param listen
   * @example do_udpsocket.send("GBK", "你好10", function(data, e) {})
   */
  send(type: string, content: string, listen: (data: boolean) => void): void;

  /**
   * 接收数据
   * @param eventName 接收数据
   * @param listen
   * @returns 接收到的16进制数据
   * @example do_udosocket.on("receive",function(data,e){})
   */
  on(eventName: "receive", listen: (data: string) => void): void;
}
