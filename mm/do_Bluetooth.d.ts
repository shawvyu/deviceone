/*
 * @Author: your name
 * @Date: 2020-08-08 20:12:50
 * @LastEditTime: 2020-08-08 21:20:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_Bluetooth.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";

interface WriteParams {
  /** 写入数据（不进行任何处理） */
  data: string;
  /** 写入服务UUID */
  sUUID: string;
  /** 写入特征UUID */
  cUUID: string;
  /** 设备一次性写入多少个字节，Android平台最大字节数为20 @default 20 */
  length?: number;
  /** 支持：binary 二进制数据(用十六进制字符串表示)，string 字符串。默认支持UTF-8编码 @default string */
  type?: string;
}

interface UUIDParams {
  sUUID: string;
  cUUID: string;
}
export interface DoBluetooth extends MmBasicInstance {
  /**
     * 停止扫描设备
     * @example var target_0 = mm("do_Bluetooth");
                var data = target_0.stopScan();
     */
  stopScan(): void;

  /**
   * 关闭后需要重新打开蓝牙
   * @example target_0.close();
   */
  close(): void;

  /**
   * 打开手机蓝牙
   *
   * 说明: iOS平台不支持
   * @example var data = target_0.enable();
   */
  enable(): boolean;

  /**
   * 关闭手机蓝牙
   *
   * 说明: iOS平台不支持
   * @example var data = target_0.disable();
   */
  disable(): boolean;

  /**
   * 打开蓝牙连接
   * @returns  0表示成功，1表示设备不支持BLE功能，2表示设备不支持蓝牙，3表示蓝牙没打开
   * @example var data = target_0.open();
   */
  open(listen: (data: number) => void): void;

  /**
   * 开始扫描
   *
   * 说明: 扫描BLE外围设备，扫描到设备会触发scan事件
   * @param listen
   * @example var data = target_0.startScan();
   *
   */
  startScan(listen: (data: boolean) => void): void;

  /**
   * 连接外围设备
   *
   * 说明: 根据指定唯一标识（MAC/UUID）连接BLE终端蓝牙设备，连接成功，发现该设备支持的服务
   * @param address BLE终端设备mac地址/IOS对应设备UUID
   * @param listen
   * @returns
   * @example var data = target_0.connect({address:ADDRESS});
   */
  connect(address: string, listen: (data: boolean) => void): void;

  /**
     * 写入数据
     * 
     * 说明: 往BLE终端蓝牙模块服务特征写入数据，该特征需具备WRITE权限
     * @param params 
     * @param listen 
     * @returns 0:成功;-1:失败;1:设备不支持;2:服务没找到;3:特征没有找到
     * @example SUUID = "ACFAB58A-2475-49E9-9C49-F042F624DA4F";
                CUUID1 = "A8F7C5E4-32D1-4D90-A197-7143E73BC155";//写
                CUUID2 = "5C12B902-EC54-44FD-AF78-8C3F7FD90D26";//读
                CUUID3 = "90D94F8F-D2B9-40B7-96BE-D284BC3247F1"//通知
                target_0.write({data:"178f15555f", sUUID:SUUID, cUUID:CUUID1, length:"", type:"binary"});
                target_0.write({data:"写入数据123abcd", sUUID:SUUID, cUUID:CUUID1, length:"", type:"string"});
     */
  write(params: WriteParams, listen: (data: number) => void): void;

  /**
   * 读取数据
   *
   * 说明: 读取BLE终端蓝牙模块服务特征数据，该特征需具备READ权限，调用这个方法会触发characteristicChanged事件，在事件中通过uuid区别是特征通知或者主动read触发
   * @param sUUID 服务UUID
   * @param cUUID 特征UUID
   * @param listen
   * @returns 0:成功;-1:失败;1:设备不支持;2:服务没找到;3:特征没有找到
   * @example target_0.read({sUUID:SUUID, cUUID:CUUID2});
   */
  read(sUUID: string, cUUID: string, listen: (data: number) => void): void;
  read(params: UUIDParams, listen: (data: number) => void): void;

  /**
   * 注册监听
   *
   * 说明: 注册可以监听的特征,当特征改变的时候,会触发characteristicChanged事件
   * @param params
   * @param listen
   * @returns  0:成功;-1:失败;1:设备不支持;2:服务没找到;3:特征没有找到
   * @example target_0.registerListener({sUUID:SUUID, cUUID:CUUID3});
   */
  registerListener(params: UUIDParams, listen: (data: number) => void): void;

  /**
   * 特征改变
   * @param eventName
   * @param listen
   * @returns 收到BLE终端服务特征写入数据时触发该事件{特征uuid:’28923DE7-2E5D-4E81-8264-86BE1B9C4B51’,value:’hello’}
   * @example target_0.on("characteristicChanged",function(data,e){})
   */
  on(eventName: "characteristicChanged", listen: (data: object) => void): void;

  /**
     * 搜索外围设备
     * @param eventName 
     * @param listen 
     * @returns 搜索到外围设备触发该事件，{address:’Android(设备MAC B4:99:4C:25:29:51)’/‘IOS(设备UUID)’,name:’device1’,RSSI:’接收的信号强度指示,单位dBm,127是保留值，标示无效’}
     * @example target_0.on("scan",function(data,e){
                if(os == "iOS"){
                    if((data.name == "DeviceOneBluetoothPeripheral") || (data.name == "Padmini")){
                        ADDRESS = data.address
                        deviceone.print("deviceUUID->" + data.address);
                        target_0.stopScan();
                    }
                }
                if(os == "android"){
                    if(data.name == "DeviceOneBluetoothPeripheral") {
                        ADDRESS = data.address
                        deviceone.print("deviceMAC->" + data.address);
                        target_0.stopScan();
                    }
                }
                })
     */
  on(eventName: "scan", listen: (data: object) => void): void;

  /**
   * 连接状态改变
   * @param eventName
   * @param listen
   * @returns 监听连接状态，当连接状态发生变化触发该事件，0：断开、1：连接
   * @example target_0.on("connectionStateChange",function(data,e){})
   */
  on(eventName: "connectionStateChange", listen: (data: string) => void): void;
}
