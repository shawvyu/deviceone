/*
 * @Author: shawvyu
 * @Date: 2020-08-08 12:09:51
 * @LastEditTime: 2020-08-08 12:19:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_UMengAnalytics.d.ts
 */
import { SmBasicInstance } from "../base/smBase";

/**
 * 关于计数事件与计算事件的详细文档http://dev.umeng.com/analytics/functions/numekv#1_1_1
 */
export interface DoUMengAnalytics extends SmBasicInstance {
  /**
   * 进入页面的统计
   *
   * 说明: 建议放在page的resume事件中
   * @param pageName
   */
  beginPageLog(pageName: string): void;

  /**
   * 离开页面的统计
   *
   * 说明: 建议放在page的pause事件中
   * @param pageName
   *
   */
  endPageLog(pageName: string): void;

  /**
   * 单次事件统计
   * @param id
   * @param data
   */
  eventLog(id: string, data?: object): void;

  /**
   * 单次事件计算
   * @param id
   * @param data
   * @param counter
   */
  eventValueLog(id: string, data?: object, counter?: number): void;

  /**
   * 读取在线参数
   *
   * 说明: iOS平台不支持
   * @param configID
   */
  readConfig(configID: string): void;

  /**
   * 是否加密传输日志
   * @param value
   */
  setEncryptLog(value: boolean): void;

  /**
   * 是否支持后台模式
   *
   * 说明: 只支持iOS
   * @param value
   */
  setBackgroundTask(value: boolean): void;

  /**
   * 是否统计后异常信息
   * @param [value=true]
   */
  setCrashReportEnabled(value: boolean): void;
}
