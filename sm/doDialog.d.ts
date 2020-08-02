/*
 * @Author: your name
 * @Date: 2020-08-01 18:47:08
 * @LastEditTime: 2020-08-01 18:52:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\doDialog.d.ts
 */

import { SmBasicInstance } from "./smBase";

interface OpenParams {
  /** 支持source和data目录 */
  path: string;
  /** 传递到Dialog的数据，通过getData方法获取该数据 */
  data?: string;
  /** 设置成true时可以通过点击窗口外页面其他空白处关闭当前窗口；为false时则不支持点击关闭 defaultvalue=true */
  supportClickClose?: boolean;
}

export interface DoDialog extends SmBasicInstance {
  /**
   * 获取数据
   * @returns 获取open方法的data参数保存的数据
   */
  getData(): string;

  /**
   * 关闭窗口
   * @param data 在关闭窗口时data参数传递给open方法的回调函数
   */
  close(data: string): void;
  close(params: { data: string }): void;

  /**
   * 打开窗口
   *
   * 说明: 打开的窗口在屏幕中居中显示
   * @param params
   * @param listen
   * @returns 返回close方法的data参数值
   *
   */
  open(params: OpenParams, listen: (data: string, e: Error) => void): void;
}
