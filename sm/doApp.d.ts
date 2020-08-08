/*
 * @Author: your name
 * @Date: 2020-07-31 21:36:56
 * @LastEditTime: 2020-08-08 12:51:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\doApp.d.ts
 */
import { SmBasicInstance } from "../base/smBase";
/**
 * @description 动画效果
 */
type AnimationType =
  | "slide_l2r"
  | "slide_r2l"
  | "slide_b2t"
  | "slide_t2b"
  | "push_l2r"
  | "push_r2l"
  | "push_b2t"
  | "push_t2b"
  | "fade"
  | "page_curl"
  | "page_uncurl"
  | "cube"
  | "slide_l2r_1"
  | "slide_r2l_1"
  | "push_l2r_1"
  | "push_r2l_1";

/**
 * @description 弹出软键盘类型
 */
type KeyboardMode = "hidden" | "visible";

/**
 * @description 顶部状态栏显示的状态
 */
type StatusBarState =
  | "show"
  | "hide"
  | "transparent"
  | "show_XFullScreen"
  | "transparent_XFullScreen";

/** @description 顶部状态栏字体的前景色 */
type StatusBarFgColor = "white" | "black";

/** @description  只针对iOS，V9框架之后的暗黑模式与浅色模式 */
export type TraitMode = "Light" | "Dark";

interface OpenPageParams {
  /** @description 路径支持source://和data://目录。关于文件协议说明可以参考Storage类 */
  source: string;
  /** @description 页面之间的数据传递。比如在页面A的基础上弹出页面B，页面A可以通过data参数把数据传递到页面B，页面B可以通过Page的getData方法来获取传递过来的数据 */
  data?: string;
  /** @description  动画效果*/
  animationType?: AnimationType;
  /** @description 当屏幕中有焦点时是否弹出软键盘（default—跟系统保持一致[已废弃]，visible—总是弹出，hidden—总是隐藏） */
  keyboardMode?: KeyboardMode;
  /** @description 若参数有值，则打开的ui文件对应的脚本文件就是这个参数对应的文件。比如若参数有值，且为javascr，则打开xx.ui.js否则打开xx.ui.lua，若参数没有值，则打开系统全局配置的语言类型脚本文件 */
  scriptType?: string;
  /** 打开一个新的page的时候，控制顶部状态栏显示的状态，有三种值show:缺省值，表示顶部状态栏显示，所有视图都是从状态栏下开始显示；hide: 表示状态栏消失，所有视图都是从屏幕最顶端开始显示；transparent:表示状态栏透明，所有视图是从屏幕最顶端开始显示，可以透过状态栏看到底下的视图。 该属性android只有4.4版本后支持; 新增iPhoneX两种状态,show_XFullScreen和transparent_XFullScreen，这两种效果在iPhoneX上Open的新页面底部不会留安全距离，默认的show和transparent则OpenPage时底部会留安全区域，开发者根据自身App 主体背景设计取舍和进行适配X的满屏效果。 */
  statusBarState?: StatusBarState;
  /** @description 打开一个新的page的时候，如果不是全屏的话，顶部状态栏字体的前景色，只能为’white’和’black’两种值，仅支持iOS平台 */
  statusBarFgColor?: StatusBarFgColor;
  /** @description 打开一个新的page的时候，如果不是全屏的话，顶部状态栏背景色，默认值为000000FF(黑色) */
  statusBarBgColor?: string;
  /** @description 打开一个新的page的时候，增加一个打开的Page的唯一标示，id不能重复，如果重复则从上往下找到第一个为准 */
  id?: string;
  /** @description 强制下一个显示的page位某一显示模式，只针对iOS，V9框架之后的暗黑模式与浅色模式 */
  traitMode?: TraitMode;
}

interface ClosePageParams {
  /** @description 上层Page关闭的时候会触发下层Page一个result事件，这个事件可以把数据传递到下层Page */
  data?: string;
  /** @description 不设置时，默认取openPge动画所对应配套的关闭动画，例如openPage中是从左至右滑出，则配套关闭为从右至左。 */
  animationType?: AnimationType;
  /** @description 表示连续关闭多个page的次数，缺省是1，设置为任何小于1的数字都表示1表示只关闭当前页面。如果这个值大于1，则只有一次动画效果，result事件只会触发一次，中间关闭的页面不会有动画也不会触发result事件 */
  layer?: number;
}

interface UpdateParams {
  /** @description 仅支持data目录下一个或多个子目录或者文件，只处理能找到的文件或目录 */
  source?: Array<string>;
  /** @description 只允许是source目录，如果目录不存在，则创建对应的目录 */
  target?: string;
}

type DoAppListen = (data: string, e: Error) => void;

export interface DoApp extends SmBasicInstance {
  /**
   * @description 当前App的唯一ID
   */
  getAppID(): string;

  /**
   * @description 弹出新的页面
   * @param source
   * @param listen
   */
  openPage(source: string, listen?: DoAppListen): void;
  openPage(openPageParams: OpenPageParams, listen?: DoAppListen): void;

  /**
   * @description 关闭最上层页面
   */
  closePage(): void;
  closePage(closePageParams: ClosePageParams, listen?: DoAppListen);

  /**
   * @description 关闭指定页面
   * @param data
   * @param animationType 不设置时，默认取openPge动画所对应配套的关闭动画，例如openPage中是从左至右滑出，则配套关闭为从右至左。
   * @param id
   * @param listen
   */
  closePageToID(
    data: string,
    animationType: AnimationType,
    id: string,
    listen?: DoAppListen
  ): void;

  /**
   * @description 热更新
   * @param updateParams
   * @param liten
   */
  update(
    updateParams: UpdateParams,
    liten?: (data: boolean, e: Error) => void
  ): void;

  /**
   * @description App启动完成时触发，通常这个事件是整个程序的入口
   */
  on(event: "loaded", listen: DoAppListen): void;
}
