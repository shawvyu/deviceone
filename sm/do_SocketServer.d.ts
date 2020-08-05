/*
 * @Author: your name
 * @Date: 2020-08-05 22:42:47
 * @LastEditTime: 2020-08-05 22:58:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_SocketServer.d.ts
 */
import { SmBasicInstance } from "./smBase";

interface SendParam{
    /** 如果发送的数据是字符串,type指定字符串的编码方式,支持UTF-8,GBK;如果发送的是16进制字符串,type为HEX;如果发送的是文件,type为file */
    type:string
    /** 如果发送的是文件，content指定文件的全路径 */
    content:string
    /** 要发送的客户端IP,可以为空,为空时发送给所有的客户端 */
    clientIP?:string
}

interface ReceiveRes{
    /**  */
    receiveData:string
    client:string
}
export interface DoSocketServer extends SmBasicInstance{
    /**
     *  开启监听
     * @param serverPort 
     * @example var target_0 = sm("do_SocketServer");
                var SERVERPORT = ui("do_TextField_1").text.trim();
                target_0.startListen({serverPort:SERVERPORT});
     */
    startListen(serverPort?:string):boolean

    /**
     * 结束监听
     */
    stopListen():void

    /**
     * 发送数据
     * 
     * 说明: 向客户端发送数据,如果clientIP和clientPort指定有值,则发送给对应的客户端,否则发送给所有连接到该服务端的客户端
     * @param params 
     * @param listen 
     * @example target_0.send({type:"HEX", content:cont, clientIP:CLIENTIP, clientPort:CLIENTPORT}, function(data, e) {})
     */
    send(params:SendParam,listen:(data:boolean)=>void):void

    /**
     * 接收数据
     * @param eventName 
     * @param listen 
     * @returns 返回值为Node类型,格式为{receiveData:’aa’, client:’192.168.1.1:8888’}
     * @example target_0.on("receive",function(data,e){})
     */
    on(eventName:'receive',listen:(data:ReceiveRes)=>void):void
    /**
     * 监听事件
     * @param eventName 
     * @param listen 
     * @returns  如果有客户端连接上该服务端,则触发该事件,并且返回该客户端的ip和端口号,格式为’192.168.0.95:8080’
     * @example target_0.on("listen",function(data,e){})
     */
    on(eventName:'listen',listen:(data:string)=>void):void
    /**
     * 监听异常
     * @param eventName 
     * @param listen 
     * @returns 监听成功后，并且当前已经有客户端连接，断开网络或网络切换时触发该事件（error事件触发并不会影响当前的监听，只是会将当前已连接的客户端移除）
     * @example target_0.on("error",function(data,e){})
     */
    on(eventName:'error',listen:()=>void):void
}