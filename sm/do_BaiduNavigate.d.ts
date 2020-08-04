/*
 * @Author: your name
 * @Date: 2020-08-04 22:44:15
 * @LastEditTime: 2020-08-04 22:51:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_BaiduNavigate.d.ts
 */
import { SmBasicInstance } from "./smBase";

/** BD09_MC：百度墨卡托坐标，ios不支持；BD09LL：百度经纬度坐标；GCJ02：国测局坐标，ios不支持；WGS84：GPS坐标 */
type CoType = "BD09_MC" | "BD09LL" | "GCJ02" | "WGS84";

interface StartParams {
  /** 设置起点经纬度，如39.915174,116.403901表示(纬度,经度) */
  startPoint: string;
  /** 设置终点经纬度，如40.915174,117.403901表示(纬度,经度) */
  endPoint: string;
  /** defaultvalue=BD09LL */
  coType?: CoType;
}

export interface DoBaiduNavigate extends SmBasicInstance {
  /**
     *  开始导航
     * @param params 
     * @example var target_0 = sm("do_BaiduNavigate");
                target_0.start({startPoint:"4846474,12947471", endPoint:"4825947,12958160", coType:"BD09_MC"});
     */
  start(params: StartParams): void;

  /**
     * 导航失败时候触发
     * @param eventName 
     * @param listen 
     * @example target_0.on("failed",function(data,e){
                ...
                })
     */
  on(eventName: "failed", listen: () => void): void;
  /**
     * 开始导航
     * @param eventName 
     * @param listen 
     * @example target_0.on("begin",function(data,e){
                ...
                })
     */
  on(eventName: "begin", listen: () => void): void;
}
