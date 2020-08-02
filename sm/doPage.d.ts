/*
 * @Author: your name
 * @Date: 2020-07-31 22:56:43
 * @LastEditTime: 2020-08-01 10:02:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\doPage.d.ts
 */
import { SmBasicInstance } from "./smBase";
import { TraitMode } from "./doApp";

type DoPageListen = (data?:string) => void;

interface KeyDownMode{
    /** @description 对应按键的值 */
    keyCode:string
}
/**
 * @description 应用程序基本页面类，包括UI布局和逻辑代码。每一个移动应用都是由多个Page一层层的叠加来组成。在当前Page的基础上打开新的Page，新的Page打开后会盖住底部的Page，当新的Page关闭后，又会露出底部的Page。
                每一个Page都有自己的脚本运行环境，Page内所有的组件都公用这一个脚本环境。
 */
export interface DoPage extends SmBasicInstance {
  /** @description 仅限ios系统判读当前设备是否为刘海屏 */
  isNotchScreen(): boolean;
  /** @description 获取从上一层page传递过来的数据 */
  getData(): string;
  /**
   * @description 删除Page里一个子UI
   * @param id 通过子ui的id和地址获取到子ui，然后删除
   */
  remove(id: string): void;
  /**
   * @description 找到当前page是否有键盘弹出，然后把焦点释放，键盘隐藏
   */
  hideKeyboard(): void;
  /**
   * @description 可通过与openPage动画相反手势关闭页面，并从当前页面传递data给下层页面，仅支持iOS平台
   * @param data 数据
   * @param support 单独设置某页支持手势关闭
   */
  supportPanClosePage(data?: string, support?: boolean): void;

  /** @description 点击设备物理或虚拟返回按键触发事件（Android、WindowsPhone有效） */
  on(eventName: "back", listen: DoPageListen):void;
/** @description 点击设备物理或虚拟菜单按键触发事件（Android、WindowsPhone有效） */
  on(eventName:'menu',listen:DoPageListen):void;
  /** @description 页面加载完触发事件 */
  on(eventName:'loaded',listen:DoPageListen):void;
  /** @description 回到前台、Page回到顶端时触发或打开当前页面 */
  on(eventName:'resume',listen:DoPageListen):void;
  /** @description 进入后台、被其他Page盖住或关闭当前页面时触发 */
  on(eventName:'pause',listen:DoPageListen):void;
  /** @description 上层Page关闭的时候会触发下层Page一个result事件。并返回上层页面关闭时传递过来的数据 */
  on(eventName:'result',listen:DoPageListen):void;
  /** @description 点击设备物理或虚拟返回按键触发事件（Android、WindowsPhone有效） */
  on(eventName:'keyDown',listen:(data:KeyDownMode)=>void):void;
  /** @description 设备显示模式变化时触发（只针对iOS 系统 V9版本后 当切换深色浅色模式时触发） */
  on(eventName:'modelchange',listen:(data:TraitMode,e:Error)=>void):void;
}
