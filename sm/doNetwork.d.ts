import { SmBasicInstance } from "../base/smBase";

interface WifiInfo{
    /** 可连wifi列表 */
    wifiNameList:Array<{wifiName:string}>
    /** 当前连接的wifi名称 */
    currentWifiName:string
    /** 当前连接WiFi的路由器地址 */
    routerMacAddress:string
}
export interface DoNetwork extends SmBasicInstance{
    /**
     * 获取当前网络状态
     * @returns 以下枚举类型的一种：’wifi’-wifi网络，’2G/3G/4G’-2G、3G或者4G，’none’-没有网络连接，’unknown’-未知网络连接
     * @example var dataa = do_Network.getStatus();
                print(dataa,"网路状态")
     */
    getStatus():string

    /**
     * 获取移动终端ip地址
     * @returns 
     * @example var datab = do_Network.getIP();
                print(datab,"当前IP")
     */
    getIP():string

    /**
     * 获取物理地址
     * @returns 返回当前设备的物理地址，iOS平台不支持
     * @example var datac = do_Network.getMACAddress();
                print(datac,"物理地址")
     */
    getMACAddress():string

    /**
     * 打开无线网络连接界面
     * @returns 打开无线网络连接界面，选择网络连接，iOS平台10及以上系统无法使用该功能
     * @example do_Network.openWifiSetting();
     */
    openWifiSetting():void

    /**
     * 是否使用代理
     * @returns 使用代理返回true，没有使用返回false
     * @example var datad = do_Network.isProxyUsed();
                print(datad,"是否使用代理")
     */
    isProxyUsed():boolean

    /**
     * 获取wifi相关信息
     * @param listen 
     * @returns 返回可连wifi列表及当前已连接wifi名称{‘wifiNameList’: [{‘wifiName’: ‘列表中的wifiName’}],’currentWifiName’: ‘当前连接的wifi名称’,’routerMacAddress’: ‘当前连接WiFi的路由器地址’}
     * @example do_Network.getWifiInfo(function(data, e) {
                    print(JSON.stringify(data) , "获取wifi相关信息");
                })
     */
    getWifiInfo(listen:(data:WifiInfo)=>void):void

    /**
     * 网络状态发生变化的回调方法
     * @param eventName 
     * @param listen 
     * @returns 返回以下枚举类型的一种：’wifi’-wifi网络，’2G/3G/4G’-2G、3G或者4G，’none’-没有网络连接，’unknown’-未知网络连接
     * @example do_Network.on("changed",function(data,e){
                    print(data,"网络发生变化")
                    })
     */
    on(eventName:'changed',listen:(data:string)=>void):void

}