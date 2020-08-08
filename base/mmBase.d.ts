/*
 * @Author: shawvyu
 * @Date: 2020-08-08 12:53:56
 * @LastEditTime: 2020-08-08 14:37:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\base\mmBase.d.ts
 */
import { OnParams } from "./smBase";

/**
 * 所有多例组件的基类(父类),所有多例组件都继承这个组件的属性，事件，方法。所谓多例就是可以一个组件多次实例化，可以构建多个对象，这些对象是有作用域区分的，关于作用域的结束参考文档
 *
 * 注意：定义自己的组件不能使用和基类名字一样的的属性、事件和方法。
 *
 * 创建实例或者获取实例的方法是mm()函数，这个函数有三个参数(MM类型,MM的标示id,MM的作用域)
 * @example
 * //表示在app作用域内创建一个do_Animation对象
 * var animation1 = mm(‘do_Animation’,’id1’,’app’)；
 * //表示在app作用域里返回id为id1的do_Animation的组件，这里animation2==animation1
 * var animation2 = mm(‘do_Animation’,’id1’,’app’)；
 *
 * 表示在app作用域内创建一个do_Animation对象，再执行同样一句代码就不再表示创建新的，而是直接返回旧的，其中MM的作用域参数是一个枚举类型，目前包括两种’app’，’page’，如果不设置值则表示page作用域，mm函数后2个参数是可选参数，第一个是必填参数，关于MM类和mm函数的说明也可以参考
 */
export interface MmBasicInstance {
  /**
   * 获取类型
   *
   * 说明: 获取组件类型ID，用于判断一个对象的类型
   * @returns 类型ID
   * @example var http = mm("do_Http");
   * print(http.getType()=="do_Http");
   */
  getType(): string;

  /**
   * 获取地址
   *
   * 说明: 获取组件地址,这个地址是用来区分一个组件的不同对象实例
   * 注意：这个地址是原生地址，在js里打印会发现是一个带{@}符号的特殊字符串
   * @returns 组件地址
   * @example var http1 = mm("do_Http");
   * print(http1.getAddress());//值是类似\"@abcdefg\" 之类的字符串
   * var http2 = mm(http1.getAddress());//根据地址获取对象，这里http1和http2指向同样的对象
   */
  getAddress(): string;

  /**
   * 取消订阅
   *
   * 说明: 取消订阅消息,所有MM对象可以订阅消息也可以取消订阅，订阅可以重复，触发一次就会触发所有的订阅，取消订阅执行一次就把所有订阅都取消了。
   * @param name
   */
  off(name: string): void;

  /**
   * 触发消息
   *
   * 说明: 消息机制的详细说明可以参考文档@link {http://doc.deviceone.net/web/doc/detail_course/event_message.htm}
   * @param name
   * @param data
   */
  fire(name: string, data?: string): void;

  /**
   * 获取属性值
   *
   * 说明: 除了单独获取一个属性值外，可以通过这个方法获取一个MM组件的多个属性的属性值
   * @param data 一组属性名对应的JSON Array对象
   * @returns 返回属性的一个JSON Object格式，其中key是属性名，value是属性值
   * @example  var http1 = mm("do_Http");
   * http1.url = "http://www.baidu.com";
   * http1.method = "GET";
   * http1.timeout = 30000;
   * var feature_name = ["url","method","timeout"];
   * var feature_value = http1.get(feature_name);
   * print(JSON.stringify(feature_value));//打印出{"url":"http://www.baidu.com","method":"GET","timeout":30000}
   */
  get(data: object): object;

  /**
   * 设置属性
   *
   * 说明: 除了单独设置一个属性值外，可以通过这个方法设置一个MM组件的多个属性的属性值
   * @param data 多个属性名和它的值合并的JSON Object对象
   * @example var http1 = mm("do_Http");
   * var values = {
   * "url" : "http://www.baidu.com",
   * "method" : "GET",
   * "timeout" : 30000
   * }
   * http1.set(values);
   * print(http1.url);
   */
  set(data?: object): object;

  /**
   * 绑定
   *
   * 说明: 利用HashData和ListData绑定对象到一个数据源，详细的文档参考数据绑定@link {http://doc.deviceone.net/web/doc/detail_course/databind.htm}
   * @param data 这个data只能是do_HashData和do_ListData的实例
   * @param mapping 可以同时映射多个数据值到不同的属性上
   */
  bindData(data: string, mapping?: object): void;

  /**
   * 设置和数据源的映射关系
   *
   * 说明: bind方法可以指定mapping，而这个方法是设置缺省的映射关系，如果bind方法传递的mapping参数为空，则使用这个缺省的映射关系.
   * @param data 可以同时映射多个数据值到不同的属性上
   */
  setMapping(data?: object): void;

  /**
   * 刷新数据
   */
  refreshData(): void;

  /**
   * 加载配置文件或者字符串
   *
   * 说明: 通过加载一个json文件或json字符串来构建Model实例的数据
   * @param source
   */
  loadSync(source: string): void;

  /**
   * 释放MM对象
   *
   * 说明: 调用该方法可将一个MM对象彻底释放
   */
  release(): void;

  /**
   * @description 每一个组件都可以有自己的消息中心，可以订阅这个组件的自定义消息，消息机制的详细说明可以参考
   * @param onParams
   * @param listen
   * @link http://doc.deviceone.net/web/doc/detail_course/event_message.htm
   */
  on(onParams: OnParams, listen: (data: string, e: object) => void): void;
  on(eventName: string, listen: (data: string, e: object) => void): void;

  /**
   * 加载配置文件或者字符串
   *
   * 说明: 通过加载一个json文件或字符串来构建Model实例的数据
   * @param source
   *
   */
  load(source: string): void;

  /**
   * 当对象获取到数据会触发,详细的文档参考数据绑定
   * @param eventName
   * @param listen
   * @returns {string} 返回获取到的数据
   */
  on(eventName: "dataRefreshed", listen: (data: string) => void): void;
}
