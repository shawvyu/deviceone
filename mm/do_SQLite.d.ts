/*
 * @Author: shawvyu
 * @Date: 2020-08-08 18:57:38
 * @LastEditTime: 2020-08-08 20:05:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_SQLite.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";

type BindType = string | number | boolean;
export interface DoSQLite extends MmBasicInstance {
  /**
   * 打开数据库
   *
   * 说明: 打开一个本地数据库链接，只支持data://的路径或者:memory:，其中:memory:表示内存数据库
   * @param path
   */
  open(path: string): boolean;

  /**
   * 关闭数据库
   */
  close(): boolean;

  /**
   * 同步执行SQL语句
   *
   * 说明: 用于执行任意的单条SQL语句
   * @param sql
   * @param bind 是一个数组，里面每一项对应一个sql语句中的？占位符，支持三种类型：string、Number、Boolean
   */
  executeSync(sql: string, bind?: Array<BindType>): boolean;

  /**
   *  同步执行SQL语句
   * 说明: 用于执行任意的多条SQL语句
   * @param sqls 要执行的多条SQL语句，用逗号隔开的JSON Array；如[‘insert into…’,’insert into…’]
   * @param [isTransaction=false] 设置是否支持事务，默认false为不支持
   */
  executeSync1(sqls: Array<string>, isTransaction: boolean): number;

  /**
   * 执行SQL查询语句
   *
   * 说明: 用于执行查询语句的同步方法；使用需谨慎，若查询的数据较多会导致UI卡顿
   * @param sql
   * @param bind 是一个数组，里面每一项对应一个sql语句中的？占位符，支持三种类型：string、Number、Boolean
   * @returns 返回的每一个元素都是json node，node的每一个节点都是column名比如[ {column1:’value1’,clolumn2:’value2’},{column1:’value1’,clolumn2:’value2’},…]
   */
  querySync(sql: string, bind?: Array<BindType>): object;

  /**
   * 异步执行SQL语句
   *
   * 说明: 用于执行任意的单条SQL语句
   * @param sql
   * @param bind 是一个数组，里面每一项对应一个sql语句中的？占位符，支持三种类型：string、Number、Boolean
   */
  execute(sql: string, bind?: Array<BindType>): boolean;

  /**
   * 异步执行SQL语句
   *
   * 说明: 用于执行任意的多条SQL语句
   * @param sqls 要执行的多条SQL语句，用逗号隔开的JSON Array；；如[‘insert into…’,’insert into…’]
   * @param isTransaction 设置是否支持事务，默认false为不支持
   */
  execute1(sqls: Array<string>, isTransaction: boolean): number;

  /**
   * 执行SQL查询语句
   * @param sql
   * @param bind 是一个数组，里面每一项对应一个sql语句中的？占位符，支持三种类型：string、Number、Boolean
   * @returns  返回的每一个元素都是json node，node的每一个节点都是column名比如[ {column1:’value1’,clolumn2:’value2’},{column1:’value1’,clolumn2:’value2’},…]
   */
  query(sql: string, bind?: Array<BindType>): object;
}
