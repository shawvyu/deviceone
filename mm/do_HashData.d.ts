/*
 * @Author: shawvyu
 * @Date: 2020-08-08 17:52:23
 * @LastEditTime: 2020-08-08 18:04:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_HashData.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";

export interface DoHashData extends MmBasicInstance {
  /**
   * 获取元素个数
   * @example var count = do_HashData.getCount();
   */
  getCount(): number;

  /**
   * 增加一条数据
   * @param key key相同时会覆盖之前的值
   * @param value 向数据集添加一条数据，该数据可为String,Number,Boolean, Array, Object.(能够被JSON.stringify序列化的类型)
   * @example do_HashData.addOne({key:"a",value:"123"})
   */
  addOne(key: string, value: string): void;
  addOne(params: { key: string; value: string }): void;

  /**
     * 增加数据
     * @param data 要插入的数据
     * @example var data = [{key:"b","text":"1"},
                    {key:"c","text":"2"},
                    {key:"d","text":"3"},
                    {key:"e","text":"5"},
                    {key:"f","text":"6"}];
                do_HashData.addData(data)
     */
  addData(data: object): void;

  /**
     * 获取某一行数据
     * 
     * 说明: 根据key获取对应值，若没找到返回null
     * @param key 
     * @example var datab = do_HashData.geyOne({key:"a"});
                print(datab,"获取数据")
     */
  getOne(key: string): string | null;
  getOne(param: { key: string }): string | null;

  /**
     * 获取数据
     * 
     * 说明: 根据keys获取多条数据，若没找到返回null
     * @param keys 
     * @returns 返回对应的value集合
     * @example var datac = do_HashData.geyData({keys:["a","b","c"]});
                print(datac,"获取数据")
     */
  getData(keys: Array<string>): Array<string> | null;
  getData(param: { keys: Array<string> }): Array<string> | null;

  /**
     * 获取全部数据
     * 
     * 说明: 获取所有数据，若没找到返回null
     * @example var datad = do_HashData.getAll();
                print(datad,"获取的数据")
     */
  getAll(): object | null;

  /**
   * 删除某一行数据
   *
   * 说明: 根据key删除特定数据
   * @param key
   * @example do_HashData.removeOne({key:"a"})
   */
  removeOne(key: string): void;
  removeOne(param: { key: string }): void;

  /**
   * 据keys删除多条数据
   * @param keys
   * @example do_HashData.removeData({keys:["a","b","c"]})
   */
  removeData(keys: Array<string>): void;
  removeData(param: { keys: Array<string> }): void;

  /**
   * 清空数据
   * @example do_HashData.removeAll()
   */
  removeAll(): void;
}
