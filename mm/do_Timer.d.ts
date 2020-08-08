/*
 * @Author: your name
 * @Date: 2020-08-08 20:06:32
 * @LastEditTime: 2020-08-08 20:11:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_Timer.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";

export interface DoTimer extends MmBasicInstance {
  /**
   * 延时启动时间
   *
   * 从现在起延迟多长时间开始启动，单位为毫秒，<0时不执行定时任务
   * @default 0
   */
  delay: number;

  /**
   * 间隔时间
   * 说明 : 定时器将每隔指定豪秒时间触发一次事件,单位毫秒，默认为1000，<=0时不执行定时任务
   * @default 1000
   */
  interval: number;

  /**
     * 启动定时器
     * @example //开始计时器,5秒后触发第一次,之后每2秒触发一次
                do_Timer.delay = 5000;
                do_Timer.interval = 2000;
                do_Timer.start()
     */
  start(): void;

  /**
   * 取消定时器（ios不停止在页面跳转会有指针问题）
   * @example do_Timer.stop()
   */
  stop(): void;

  /**
   * 是否启动定时器
   * @returns 为true时定时器为启动状态，false时定时器为未启动状态
   * @example var data = do_Timer.isStart();
   * print(data,"计时器是否启动")
   */
  isStart(): boolean;

  /**
     * 固定间隔被调用触发
     * @param eventName 
     * @param listen 
     * @example do_Timer.on("tick",function(){
                    print("计时器触发")
                })
     */
  on(eventName: "tick", listen: () => void): void;
}
