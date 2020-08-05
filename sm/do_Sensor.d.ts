/*
 * @Author: your name
 * @Date: 2020-08-05 22:14:50
 * @LastEditTime: 2020-08-05 22:22:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_Sensor.d.ts
 */
import { SmBasicInstance } from "./smBase";
/** 传感器类型：1、加速度传感器；2、罗盘；3、转角；4、陀螺仪；5、距离传感器 */
type SensorType = 1 | 2 | 3 | 4 | 5;
export interface DoSensor extends SmBasicInstance {
  /**
     * 获取传感器数值
     * @param sensorType 	传感器类型：1、加速度传感器；2、罗盘；3、转角；4、陀螺仪；5、距离传感器
     * @returns 格式同change事件
     * @example var target_0 = sm("do_Sensor");
                var data = target_0.getSensorData({sensorType:1});
     */
  getSensorData(sensorType: SensorType): object;
  getSensorData(params: { sensorType: SensorType }): object;

  /**
   * 开始从传感器采集数据
   * @param sensorType
   * @example target_0.start({sensorType:1});
   */
  start(sensorType: SensorType): void;
  start(params: { sensorType: SensorType }): void;

  /**
   * 停止从传感器采集数据
   * @param sensorType
   * @example target_0.stop({sensorType:1});
   */
  stop(sensorType: SensorType): void;
  stop(params: { sensorType: SensorType }): void;

  /**
   *  传感器变化触发
   * @param eventName
   * @param listen
   * @returns  1、加速度{sensorType:’1’,data:{x:’沿x轴加速度值’,y:’沿y轴加速度值’,z:’沿z轴加速度值’}};2、罗盘（磁力传感器，特斯拉为磁力感应单位，表示垂直穿过单位面积的磁力线的多少）{sensorType:’2’,data:{x:’x轴微特斯拉值’,y:’y轴微特斯拉值’,z:’z轴微特斯拉值’}}；3、转角，返回角度值{sensorType:’3’,data:{x:’绕x轴旋转的角度’,y:’绕y轴旋转的角度’,z:’绕z轴旋转的角度’}}；4、陀螺仪，返回3轴角速度值 单位：弧度/秒{sensorType:’4’,data:{x:’绕x轴旋转的角速度’,y:’绕y轴旋转的角速度’,z:’绕z轴旋转的角速度’}}；5、距离传感器,没有3轴的返回值，只是一个事件调用{sensorType:’5’,data:{x:’’,y:’’,z:’’}}
   * @example target_0.on("change",function(data,e){})
   */
  on(eventName: "change", listen: (data: object) => void): void;
}
