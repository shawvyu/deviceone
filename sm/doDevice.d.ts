/*
 * @Author: shawvyu
 * @Date: 2020-08-01 18:04:20
 * @LastEditTime: 2020-08-01 18:45:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\doDevice.d.ts
 */

import { SmBasicInstance } from "../base/smBase";

type FlashStatusType = "on" | "off";

interface DeviceInfo {
  /** 操作系统版本 */
  OS?: string;
  /** 操作系统版本号 */
  OSVersion?: string;
  /** 设备唯一标识（当获取不到设备的deviceID时返回设备的MAC地址做为唯一ID） */
  deviceId?: string;
  /** 设备名称 */
  deviceName?: string;
  /** 获取手机操作系统SDK版本号 */
  sdkVersion?: string;
  /** 水平分辨率 */
  resolutionH?: string;
  /** 垂直分辨率 */
  resolutionV?: string;
  /** 水平像素密度 */
  dpiH?: string;
  /** 垂直像素密度 */
  dpiV?: string;
  /** 水平屏幕宽度（dip） */
  screeH?: string;
  /** 垂直屏幕宽度（dip） */
  screeV?: string;
  /** 手机机型（Android返回0：NONE、1：GSM、2：CMDA、3：SIP） */
  phoneType?: number;
  /** 手机号码 */
  phoneNumber?: string;
  /** 运营商类型 */
  communicationType?: string;
  /** SIM卡的序列号 */
  simSerialNumber?: string;
  /** IMSI（国际移动用户识别码） */
  IMSI?: string;
}

interface AppInfo {
  /** app的名称 */
  name?: string;
  /** app的包名 */
  pname?: string;
  /** 是否为系统应用，0 不是，1 是 */
  isSystem?: 0 | 1;
  /** app使用的流量，单位byte */
  traffic?: number;
}

interface SystemLocaleInfo {
  country?: string;
  language?: string;
}

interface ShotAsBitmapParams {
  /**  */
  bitmap: string;
  /** 参数格式为 0,0,300,200，分别表示 x,y,width,height，当不填写该参数时截取当前屏幕的全部内容 */
  rect?: string;
}

export interface DoDevice extends SmBasicInstance {
  /**
   * @description 触发设备振动，缺省是一秒
   * @param duration 振动持续时间，单位是毫秒，iOS平台不支持设置振动时间 defaultvalue=1000
   * @example do_Device.vibrate({duration:"2000"})
   */
  vibrate(duration: number): void;
  vibrate(): void;
  vibrate(params: { duration: number }): void;

  /**
   * @description 播放系统通知提示音
   * @example do_Device.beep()
   */
  beep(): void;

  /**
      * @description 开关手机系统闪光灯
      * @param status 闪光灯状态，支持两种状态：on（开启）、off（关闭）
      * @example //闪光灯开启
                do_Device.flash({status:"on"});
                //闪光灯关闭
                do_Device.flash({status:"off"})
      */
  flash(status: FlashStatusType): void;
  flash(params: { status: FlashStatusType }): void;

  /**
 * 获取设备信息
 * 
 * 说明: 获取设备相关信息，如：唯一设备ID、设备名称、系统类型、系统版本号、分辨率大小、IMSI等
    获取随机分配的 MAC 地址：设备所有者应用和资料所有者应用可以通过调用 getRandomi zedMacAddress() 检索分配给特定网络的随机分配 MAC 地址。
    获取实际的出厂 MAC 地址：设备所有者应用可以通过调用 getWifiMacAddress() 检索设备的实际硬件 MAC 地址。此方法对于跟踪设备队列非常有用。
*/
  getInfo(): DeviceInfo;

  /**
   * 获取当前系统所以应用相关信息，暂时只支持获取每个应用流量使用信息（仅Android支持）
   */
  getAllAppInfo(): AppInfo;

  /**
   * 获取当前系统设置的国家和语言
   * @returns [{‘country’:’系统国家’,’language’:’当前语言’]
   */
  getLocale(): Array<SystemLocaleInfo>;

  /**
   * 应用退到后台
   *
   * 模仿iOS系统中点击home键的效果，让应用退到后台，仅支持android平台
   */
  home(): void;

  /**
   * 控制系统锁屏
   * @param isAuto 为true时与系统设置保持一致，到了系统设置的自动锁屏时间则自动熄灭屏幕并锁屏；为false时则屏幕常亮，且不锁屏 defaultvalue=true
   */
  setScreenAutoDarken(isAuto: boolean): void;
  setScreenAutoDarken(params: { isAuto: boolean }): void;

  /**
   * 获取当前设备电量信息
   * @returns 返回电量百分比
   */
  getBattery(): number;

  /**
   * 获取当前系统平台名称
   * @returns android或者iOS
   */
  getOS(): string;

  /**
   * 获取当前应用的位置权限
   * @returns 返回-2，系统版本小于iOS8，方法不可用；-1，当前应用没有开启位置权限；0，位置权限->使用应用期间；1，位置权限为始终；2，位置权限为永不
   *
   *  iOS8.0以后，如果应用开启了位置权限授权，调用该方法可获取应用的的具体位置权限
   */
  getLocationPermission(): number;

  /**
   * 截取当前屏幕显示内容
   * @param rect 参数格式为 0,0,300,200，分别表示 x,y,width,height，当不填写该参数时截取当前屏幕的全部内容
   * @returns 返回截屏图片保存的地址，是一个data://temp/do_Device目录下一个图片文件，文件名是日期+时间
   * @example do_Device.screenShot({rect:"200,200,400,400"},function(data,e){
                    print(data,"截屏保存地址")
                })
   */
  screenShot(rect: string, listen: (data: string, e: Error) => void): void;
  screenShot(
    params: { rect: string },
    listen: (data: string, e: Error) => void
  ): void;

  /**
   * 截取当前屏幕显示内容
   * @param bitmap 
   * @param listen 
   * @example var bit1 = mm("do_Bitmap");
      do_Device.srceenShotAsBitmap({bitmap:bit1, rect:"400,400,200,200"}, function(data, e) {
          bit1.toGrayScale(function(data, e) {
          })
      })
   */
  srceenShotAsBitmap(bitmap: string, listen: () => void): void;
  srceenShotAsBitmap(params: ShotAsBitmapParams, listen: () => void): void;

  /**
   * 获取设备GPS信息
   * @param listen
   * @returns  [{‘state’:’当前设备GPS状态’]，其中state为0表示关闭，为1表示打开
   */
  getGPSInfo(listen: (data: { state: number }) => void): void;

  /**
   * 获取设备声音状态
   * @param listen
   * @returns {‘mode’:’当前设备声音状态’}，其中mode为0表示静音模式，为1表示正常模式
   */
  getRingerMode(listen: (data: { mode: number }) => void): void;
}
