import { SmBasicInstance } from "../base/smBase";

interface AccelerometerData{
    x:number
    y:number
    z:number
}
export interface DoAccelerometerSensor extends SmBasicInstance{
    /**
     * 获取加速度
     * 
     * 说明: 手机绕三个方向运动的加速度
     * @returns {object} {x:’x轴的加速度’,y:’y轴的加速度’,z:’z轴的加速度’}
     * @example var getAccelerometerData = do_AccelerometerSensor.getAccelerometerData();
                appworker.print(JSON.stringify(getAccelerometerData),"加速度");
                以下为上述代码返回的数据。
                {
                "x":0.6079864501953125,
                "y":-0.0974884033203125,
                "z":-0.8350982666015625
                }
     */
    getAccelerometerData():AccelerometerData

    /**
     * 开始采集数据
     * @example var do_AccelerometerSensor = sm("do_AccelerometerSensor");
                do_AccelerometerSensor.start();
     */
    start():void

    /**
     * 停止采集数据
     * @example do_AccelerometerSensor.stop();
     */
    stop():void

    /**
     * 摇一摇
     * @param eventName 
     * @param listen 
     * @example do_AccelerometerSensor.on("shake",function(data){
                    appworker.print(JSON.stringify(data),"摇一摇");
                })
     */
    on(eventName:'shake',listen:(data:AccelerometerData)=>void):void

    /**
     * 加速度变化触发
     * @param eventName 
     * @param listen 
     * @example do_AccelerometerSensor.on("change",function(data){
                    appworker.print(JSON.stringify(data),"加速度变化触发");
                })
     */
    on(eventName:'change',listen:(data:AccelerometerData)=>void):void
}