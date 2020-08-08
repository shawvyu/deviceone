/*
 * @Author: shawvyu
 * @Date: 2020-08-01 17:51:06
 * @LastEditTime: 2020-08-01 18:03:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\doDateTimePicker.d.ts
 */

import { SmBasicInstance } from "../base/smBase";

type DateTimePickerType = 0 | 1 | 2 | 3 | 4;

type DateTimePickerTitleType = "" | "时间选择" | "日期选择" | "日期时间选择";

interface ShowParams {
  /** 0表示日期及时间，1表示只有日期，2表示只有时间，3表示日期、星期及时间，4表示日期和星期 */
  type: DateTimePickerType;
  /** long型时间，缺失值是当前日期时间long型 */
  data?: string;
  /** long型时间，缺省值是2099年对应的long型 defaultvalue=4102329600000 */
  maxDate?: string;
  /** long型时间，最小日期不能大于最大日期，缺省值是1970年对应的long型 defaultvalue=0*/
  minDate?: string;
  /** 缺省值是‘时间选择’或者‘日期选择’或者‘日期时间选择’，根据type来区分 */
  title?: DateTimePickerTitleType;
  /** 为空或不设值不显示按钮，显示缺省值，如果设值为[]，则不显示按钮 defaultvalue=[“取消”,”确定”] */
  buttons?: Array<string>;
}

interface ShowRes {
  /** flag =0 表示点击了第一个按钮，flag = 1 表示点击了第二个按钮…， */
  flag: number;
  /** time表示long型时间 */
  time: number;
}
export interface DoDateTimePicker extends SmBasicInstance {
  /**
   * @description 弹出选择日期，时间，或日期时间窗口
   * @param params
   * @param listen
   * @returns  {“flag”:0,”time”:”2312412343”}，flag =0 表示点击了第一个按钮，flag = 1 表示点击了第二个按钮…，time表示long型时间
   */
  show(params: ShowParams, listen: (data: ShowRes, e: Error) => void): void;
}
