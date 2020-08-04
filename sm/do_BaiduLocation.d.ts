/*
 * @Author: your name
 * @Date: 2020-08-04 22:05:36
 * @LastEditTime: 2020-08-04 22:43:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_BaiduLocation.d.ts
 */
import { SmBasicInstance } from "./smBase";
/**
 * 	high:高精度定位模式（会同时使用Wi-Fi和基站和GPS定位，优先返回最高精度的定位结果）；low：低精度（不会使用GPS，只会使用Wi-Fi和基站定位）；middle: 中精度（不需要连接网络，只使用GPS进行定位，这种模式下不支持室内环境的定位）
 */
type LocationModel = "high" | "low" | "middle";
interface StartParams {
  model?: LocationModel;
  /** 为false时只获取一次位置，触发一次result事件。 当值为true时,程序会不断获取新的位置（android是依据时间间隔，根据精度参数的不同，每隔30s返回1~2次结果；iOS是依据距离间隔，根据精度参数的不同，每超过10m/100m/1000m时返回结果），触发result事件 */
  isLoop?: boolean;
}

interface StartScanParams {
  model?: LocationModel;
  /** 定位扫描间隔，单位为毫秒，最低为1000毫秒，扫描结果通过result事件返回；iOS平台该参数无效，因机制不同，iOS平台移动距离有变化时返回结果 */
  span?: number;
}
interface LatLng {
  /** 纬度 */
  latitude: string;
  /** 经度 */
  longitude: string;
}
interface LocationInfo extends LatLng {
  /** 北京市海淀区 */
  address: string;
}
interface PoisInfo {
  /** poi id */
  id?: string;
  /** poi名称 */
  name?: string;
  /** poi所在城市 */
  city?: string;
  /** poi点附近是否有街景，可使用uid检索全景组件的全景数据 */
  isPano?: boolean;
  /** poi坐标 */
  location?: LatLng;
  /** poi地址信息 */
  address?: string;
}
interface ReverseInfo {
  address?: string;
  /** 省份名称 */
  province?: string;
  /** 城市名称 */
  city?: string;
  /** 区县名称 */
  district?: string;
  /** 街道名称 */
  streetName?: string;
  /** 街道号码 */
  streetNumber?: string;
  /** 兴趣点 */
  pois?: Array<PoisInfo>;
}
export interface DoBaiduLocation extends SmBasicInstance {
  /**
     * 获取实际距离
     * @param startPoint 设置起点经纬度，如39.915174,116.403901表示(纬度,经度)
     * @param endPoint 设置终点经纬度，如40.915174,117.403901表示(纬度,经度)
     * @returns 返回坐标点之间距离，单位为米
     * @example var target_0 = sm("do_BaiduLocation");
                var data = target_0.getDistance({startPoint:"39.9151190000,116.4039630000", endPoint:"40.0589220000,116.3126150000"});
     */
  getDistance(startPoint: string, endPoint: string): number;
  getDistance(params: { startPoint: string; endPoint: string }): number;

  /**
     * 开启定位
     * @example target_0.start({model:"", isLoop:""});
                target_0.start({model:"middle", isLoop:true});
     */
  start(param: StartParams): void;

  /**
   * 停止定位
   * @example target_0.stop();
   */
  stop(): void;

  /**
     * 开启定位扫描
     * @param params 
     * @example target_0.startScan({model:"", span:""});
                target_0.startScan({model:"middle", span:2000});
     */
  startScan(params: StartScanParams): void;

  /**
   * 停止定位扫描
   * @example target_0.stopScan();
   */
  stopScan(): void;

  /**
     * 定位
     * @param model defaultvalue=high
     * @param listen 
     * @returns {object} {latitude:’纬度​’，longitude:’经度’, address:’北京市海淀区’}
     * @example target_0.locate("middle", function(data, e) {
                })
     */
  locate(model?: LocationModel, listen: (data: LocationInfo) => void): void;
  locate(
    params: { model?: LocationModel },
    listen: (data: LocationInfo) => void
  ): void;

  /**
     * 正向地图编码
     * @param city 
     * @param address 
     * @param listen 
     * @returns {object} {latitude:’纬度​’，longitude:’经度’}
     * @example   target_0.geoCode({city:"北京", address:"上地九街九号数码科技广场"},function(data, e) {
                   })
     */
  getCode(city: string, address: string, listen: (data: LatLng) => void): void;
  getCode(
    params: { city: string; address: string },
    listen: (data: LatLng) => void
  ): void;

  /**
     * 反向地图编码
     * 
     * 说明: 实现将经纬度坐标点转换为地址信息的过程。
     * @param latitude 
     * @param longitude 
     * @param listen 
     * @returns {object} {address:’北京市海淀区上地9街9号’,province:’省份名称’,city:’城市名称’,district:’区县名称’,streetName:’街道名称’,streetNumber:’街道号码’,pois:’兴趣点’}，其中pois为[{‘id’:’poi id’,’name’:’poi名称’,’city’:’poi所在城市’,’isPano’:’poi点附近是否有街景，可使用uid检索全景组件的全景数据’,’location’:’poi坐标，如：{‘latitude’:’纬度’,’longitude’:’经度’}’,’address’:’poi地址信息’}]
     * @example target_0.reverseGeoCode({latitude:"40.057402", longitude:"116.309561"}, function(data, e) {
                ...
                })
     */
  reverseGeoCode(
    latitude: string,
    longitude: string,
    listen: (data: ReverseInfo) => void
  ): void;
  reverseGeoCode(params: LatLng, listen: (data: ReverseInfo) => void): void;

  /**
   * 接收到定位/更新定位时候触发
   * @param eventName
   * @param listen
   * @returns {object} {latitude:’纬度​’，longitude:’经度’, address:’北京市海淀区’}
   */
  on(eventName: "result", listen: (data: LocationInfo) => void): void;
}
