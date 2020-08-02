/*
 * @Author: your name
 * @Date: 2020-08-01 09:47:25
 * @LastEditTime: 2020-08-01 10:02:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\smBase.d.ts
 */

interface OnParams {
  /** @description 事件名 */
  name: string;
  /** @description 回调函数function(data,e),第二个参数e.data就是这个值 */
  data?: string;
  /** @description 如果值小于或等于0就直接响应事件 defaultValue=-1 */
  delay?: number;
}

export interface SmBasicInstance {
  /**
   * @description 获取组件类型ID，用于判断一个对象的类型
   * @returns
   * @example print(sm(“do_Global”).getType()===”do_Global”)
   */
  getType(): string;

  /**
   * @description 获取地址
   * @returns 组件地址,这个地址是用来区分一个组件的不同对象实例，但是SM组件是单例的，所以在任何地方获取SM对象的地址都是相同的。
   * @example print(sm(“do_Global”).getAddress());//值是类似@abcdefg 之类的字符串
   */
  getAddress(): string;

  /**
   * @description 取消订阅消息,所有SM对象可以订阅消息也可以取消订阅，但是注意SM对象是单例，不会自动取消订阅，只能调用off方法去取消。订阅可以重复，触发一次就会触发所有的订阅，取消订阅执行一次就把所有订阅都取消了
   * @param eventName 事件名
   */
  off(eventName: string): void;

  /**
   * @description 触发消息
   * @param eventName
   * @param data
   */
  fire(eventName: string, data?: string): void;

  /**
   * @description 每一个组件都可以有自己的消息中心，可以订阅这个组件的自定义消息，消息机制的详细说明可以参考
   * @param onParams
   * @param listen
   * @link http://doc.deviceone.net/web/doc/detail_course/event_message.htm
   */
  on(onParams: OnParams, listen: (data: string, e: object) => void): void;
  on(eventName: string, listen: (data: string, e: object) => void): void;
}
