/*
 * @Author: shawvyu
 * @Date: 2020-08-09 15:32:02
 * @LastEditTime: 2020-08-09 15:45:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\ui\do_ComboBox.d.ts
 */
import {
  UiBasicInstance,
  FontStyle,
  TextFlag,
  TextAlign,
} from "../base/uiBase";

export interface DoComboBox extends UiBasicInstance {
  /**
   * 字体前景色
   *
   * 说明 : 设置字体显示颜色，值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF
   * @default 000000FF
   * @example //fontColor属性设置为FF0000FF
   * do_ComboBox.fontColor = "FF00FFFF";
   * //fontColor属性设置为后两位是透明度为50
   * do_ComboBox_1.fontColor = "FF00FF50";   //后两位是透明度（Alpha
   *
   * 下图分别为示例代码id为”do_ComboBox”的fontColor属性设置为”FF00FFFF”和id为”do_ComboBox_1”的fontColor属性设置为”FF00FF50”后两位透明度为50的效果图。
   * @link {http://www.appworker.net/awdoc/web/img/20180329/bb50ac230066434796588f73a96ddb5b.png}
   * @link {http://www.appworker.net/awdoc/web/img/20180329/5b1e3fac2d874ca999128e2ef0f1e9af.png}
   */
  fontColor: string;

  /**
   * 字体大小
   * @default 17
   * @example //id为"do_ComboBox"的fontSize属性设置成40
   * do_ComboBox.fontSize = 40;
   * //id为"do_ComboBox_1"的fontSize属性设置成30
   * do_ComboBox_1.fontSize = 30;
   *
   * 下图分别为示例代码id为”do_ComboBox”的fontSize属性设置为40和id为”do_ComboBox_1”的fontSize属性设置为30的效果图。
   * @link {http://www.appworker.net/awdoc/web/img/20180329/3dbf7ffc8c054f6a918d574b7b95fd0f.png}
   * @link {http://www.appworker.net/awdoc/web/img/20180329/6d27838293274beab61877403f0a124b.png}
   */
  fontSize: number;

  /**
   * 字体风格
   * @link {http://www.appworker.net/awdoc/web/img/20180329/a8e06294940849d6ad7bd6672b1a697b.png}
   * @link {http://www.appworker.net/awdoc/web/img/20180329/0365d31c35d34d65a78cd4b03e91c676.png}
   * @link {http://www.appworker.net/awdoc/web/img/20180329/173a42b71fd046ae829e7320bedfcd0a.png}
   * @link {http://www.appworker.net/awdoc/web/img/20180329/37ba361cd93748e190a0a75c32dd3a3e.png}
   */
  fontStyle: FontStyle;

  /**
   *  字体标示
   * @link {http://www.appworker.net/awdoc/web/img/20180329/fa4418491c3a48099de103a1fa039989.png}
   * @link {http://www.appworker.net/awdoc/web/img/20180329/30c40ed59dd143b3bef4f0897a734408.png}
   * @link {http://www.appworker.net/awdoc/web/img/20180329/7fad891f35e2433f9a37d7418ed24110.png}
   */
  textFlag: TextFlag;

  /**
   * 当前选中的数据索引
   *
   * 说明 : 数据的索引值，设置时会切换数据选择，索引小于0时指向数组第一个数据，越界时指向数组最后一个数据
   * @example do_ComboBox.index = 0; // 索引0
   * do_ComboBox_1.index = 1; // 索引1
   * @link {http://www.appworker.net/awdoc/web/img/20180329/d950c3ae6fbe4098ad2a7ac905af9738.png}
   * @link {http://www.appworker.net/awdoc/web/img/20180329/323b23fe2a2c4131b887716b58e6d13e.png}
   */
  index: number;

  /**
   * 数据集合
   *
   * 说明 : 可供选择的数据集合，中间用逗号隔开多个文本，如’北京,上海,广州…’
   * @example do_ComboBox.items = "index0,index1,index2,index3";
   * @link {http://www.appworker.net/awdoc/web/img/20180329/dc201abaedf94de4b5429599d6f79533.png}
   */
  items: string;

  /**
   * 文本对齐方式
   * @default left
   */
  textAlign: TextAlign;

  /**
     * 绑定item的数据
     * @param data 可绑定listData实例
     * @example //--bindItems方法给组件赋值
                var listdata = mm("do_ListData");
                do_ComboBox_1.bindItems(listdata);    // 绑定item的数据
                listdata.addData([ {
                    text : "索引0"
                }, {
                    text : "索引1"
                }, {
                    text : "索引2"
                }, {
                    text : "索引3"
                } ])
                do_ComboBox_1.refreshItems();    //给combobox绑定数据后，需要刷新item数据
     */
  bindItems(data: object): void;

  /**
   * 刷新item数据
   */
  refreshItems(): void;

  /**
     * 当数据变化或数据索引变化触发
     * 
     * 说明: 当数据变化或数据索引变化触发。（点击控件会弹出一个选择列表，单击选项即可修改其索引）
     * @param eventName 
     * @param listen 
     * @example do_ComboBox.on("selectChanged", function(data) {
                    print(data);
                })
     */
  on(eventName: "selectChanged", listen: (data: number) => void): void;
}
