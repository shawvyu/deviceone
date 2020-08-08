/*
 * @Author: shawvyu
 * @Date: 2020-08-01 17:38:08
 * @LastEditTime: 2020-08-01 17:49:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\doDataCache.d.ts
 */

import { SmBasicInstance } from "../base/smBase";

interface KeyValue {
  key: string;
  value: string;
}
interface Key {
  key: string;
}
export interface DoDataCache extends SmBasicInstance {
  /**
      * @description 把数据写入缓存，不建议存入大文件
      * @param key 
      * @param value 
      * @returns true/false表明写数据是否成功
      * @example var a = do_DataCache.saveData({key:"key1",value:"123"});
                print(a,"写入结果")
      */
  saveData(key: string, value: string): boolean;
  saveData(params: KeyValue): boolean;

  /**
      * @description 判断是否有数据
      * @param key 
      * @returns true有数据，false没有
      * @example var b = do_DataCache.hasData({key:"key1"});
                print(b,"key1数据是否已存在")
      */
  hasData(key: string): boolean;
  hasData(params: Key): boolean;

  /**
      * @description 清除某个key的数据
      * @param key 
      * @returns  true/false表明删除是否成功
      * @example var c = do_DataCache.removeData({key:"key1"});
                    print(c,"清除结果")
      */
  removeData(key: string): boolean;
  removeData(params: Key): boolean;

  /**
      * @description 把数据从缓存取出
      * @param key
      * @example var dataa = do_DataCache.loadData({key:"key1"});
                print(dataa,"数据内容") 
      */
  loadData(key: string): string;
  loadData(params: Key): string;

  /**
      * @description 删除全部数据
      * @returns true为成功，false为失败
      * @example var d = do_DataCache.removeAll();
                    print(d,"删除结果")
      */
  removeAllData(): boolean;
}
