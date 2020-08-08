/*
 * @Author: your name
 * @Date: 2020-08-04 23:13:38
 * @LastEditTime: 2020-08-08 12:52:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_GyroSensor.d.ts
 */
import { SmBasicInstance } from "../base/smBase";

interface Info {
  x: string;
  y: string;
  z: string;
}

export interface DoGyroSensor extends SmBasicInstance {
  /**
     * 获取角度
     * 
     * 说明: 手机绕三个方向旋转的角度值
     * @return {object} {x:’绕x轴旋转的角度’,y:’绕y轴旋转的角度’,z:’绕z轴旋转的角度’}
     * @example var target_0 = sm("do_GyroSensor");
                var data = target_0.getGyroData();
     */
  getGyroData(): Info;

  /**
   * 开始采集数据
   */
  start(): void;
  /**
   * 停止采集数据
   */
  stop(): void;

  /**
   * 获取加速度
   * @returns {object} {x:’x轴的加速度’,y:’y轴的加速度’,z:’z轴的加速度’}
   */
  getAccelermeterData(): Info;
}
