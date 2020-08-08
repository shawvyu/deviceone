/*
 * @Author: your name
 * @Date: 2020-08-04 22:54:10
 * @LastEditTime: 2020-08-04 22:58:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_CacheManager.d.ts
 */
import { SmBasicInstance } from "../base/smBase";

export interface DoCacheManager extends SmBasicInstance {
  /**
   * 获取图片缓存
   * @param listen
   * @returns 返回应用内所有图片缓存的大小总和，单位为k
   */
  getImageCacheSize(listen: (data: string) => void): void;

  /**
   * 清除图片缓存
   *
   * 说明: 清除应用内所有图片缓存
   * @param listen
   * @returns 成功返回true，失败返回false
   */
  clearImageCache(listen: (data: boolean) => void): void;
}
