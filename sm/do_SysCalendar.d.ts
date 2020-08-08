/*
 * @Author: shawvyu
 * @Date: 2020-08-07 19:50:42
 * @LastEditTime: 2020-08-07 20:28:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_SysCalendar.d.ts
 */
import { SmBasicInstance } from "../base/smBase";

interface CalendarRes {
  id: string;
  /** 日程标题 */
  title: string;
  /** 日程说明 */
  description: string;
  startTime: number;
  endTime: number;
  location: string;
}
interface AddCalendarParams {
  title: string;
  description: string;
  startTime: number;
  endTime: number;
  location?: string;
  /** 提前提醒时间，单位minute比如设置为60，就是在行程开始时间前一小时提醒，不填则准时提醒 */
  reminderTime?: string;
  /** day:每天提醒一次，week:每周提醒一次，month:每月提醒一次，year:每年提醒一次 */
  reminderRepeatMode?: string;
  /** long型时间，reminderRepeatMode设置过后该参数才有效，比如设置重复模式为Day，就是每天提醒，设置该参数后就是截止该时间停止提醒 */
  reminderRepeatEndTime?: string;
}
interface UpdateCalendarParams {
  id: string;
  title?: string;
  description?: string;
  startTime?: number;
  endTime?: number;
  location?: number;
}
export interface DoSysCalendar extends SmBasicInstance {
  /**
     * 根据所有日程信息
     * @param listen 
     * @returns 返回所查询到的所有日程的详细信息{id:’1’,title:’日程标题’,description:’日程说明’,startTime:’1494460800’,endTime:’1494460800’,location:’北京’}，iOS平台获取当前时间前后两年的日程
     * @example var target_0 = sm("do_SysCalendar");
                var data = target_0.getAll(function(data, e) {
                ...})
     */
  getAll(listen: (data: CalendarRes) => void): void;

  /**
   * 添加日程
   * @returns 返回所添加日程的唯一ID
   * @example target_0.add({title:"提醒1", description:"测试", startTime:"1504490400000", endTime:"1504491000000"}, function(data, e) {...})
   */
  add(params: AddCalendarParams, listen: (data: string) => void): void;

  /**
   * 根据id修改对应的日程
   * @param params
   * @param listen
   * @returns 修改成功返回true，失败则返回false
   * @example target_0.update({id:"", title:"", description:"", startTime:"1504492200000", endTime:"1504492800000", location:""}, function(data, e) {...})
   */
  update(params: UpdateCalendarParams, listen: (data: boolean) => void): void;

  /**
   * 根据id删除对应的日程
   * @param id
   * @param listen
   * @example target_0.delete(ID, function(data, e) {...})
   */
  delete(id: string, listen: (data: boolean) => void): void;
}
