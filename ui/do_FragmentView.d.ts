/*
 * @Author: your name
 * @Date: 2020-08-09 15:47:32
 * @LastEditTime: 2020-08-09 15:57:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\ui\do_FragmentView.d.ts
 */
import { UiBasicInstance, GestureType } from "../base/uiBase";

export interface DoFragmentView extends UiBasicInstance {
  /**
   * 支持手势滑动
   */
  supportGesture: GestureType;

  /**
   * 显示视图对应UI模板文件
   *
   * 说明 : 可以设置一个或多个UI模板文件，值为String类型，多个模板之间分别用“,”分隔，例如：“source://view/temp/left.ui,source://view/temp/middle.ui,source://view/temp/right.ui”
   *
   * 编辑类型 : 只允许设计区内修改
   */
  templates: string;

  /**
   * 动画缩放效果
   *
   * 说明 : 允许滑动或显示时有动画缩放效果,false表示不允许
   *
   * 编辑类型 : 只允许设计区内修改
   * @default false
   */
  allowAnimation: boolean;

  /**
     * 重置为初始视图
     * 
     * 说明:如果组件当前显示的是左侧视图或右侧视图，调用该方法会回到主视图页面
     * @example var do_FragmentView = ui("do_FragmentView_1"); // 实例化do_FragmentView组件
                do_FragmentView.reset();  //重置为初始视图，回到主视图页面
     */
  rest(): void;

  /**
   * 显示左侧视图
   * @example do_FragmentView.showLeft();   //显示左侧视图
   * @link {http://www.appworker.net/awdoc/web/img/20180329/abdd4ca7143448fca5195cf1d229222e.png}
   */
  showLeft(): void;

  /**
   * 显示右侧视图
   * @example do_FragmentView.showRight();   //显示右侧视图
   * @link {http://www.appworker.net/awdoc/web/img/20180329/1ec44b3ea2af4d499bd239a2634e9089.png}
   */
  showRight(): void;

  /**
     * 绑定视图模板数据
     * 
     * 说明: 可绑定listData实例，addData数据内容为JSON字符串，key值分别为：template（主视图），leftTemplate（左侧视图，可选），rightTemplate（右侧视图，可选），value对应templates属性对应UI模板索引值；例如：[{ template:0 ,leftTemplate:1}]表示主视图是templates属性的第一个UI页面，左侧视图是templates属性的第二个UI页面
     * @param data 
     * @example 示例:
                    ```javascript

                    var listdata = mm(“do_ListData”); // 实例化do_ListData对象

                    // 给listdata添加数据，左中右三个页面及页面上绑定的数据
                    listdata.addData([ {

                    leftTemplate : 0,     //左侧视图是templates属性的第一个UI页面
                    template : 1,         //主视图是templates属性的第二个UI页面
                    rightTemplate : 2,    //右侧视图是templates属性的第三个UI页面
                    $leftImage : "source://view/do_FragmentView/image/default.png",
                    middle_title : "多页面滑动视图",
                    $rightImage : "source://view/do_FragmentView/image/right.png"
                    } ]);

                    do_FragmentView.bindItems(listdata); // do_FragmentView绑定do_ListData实例
        @link {http://www.appworker.net/awdoc/web/img/20180329/9fe6872d19364d949aa42a42653602aa.png}
        @link {http://www.appworker.net/awdoc/web/img/20180329/7d24fc9335474fbdb3641b2b1fcf5eae.png}
        @link {http://www.appworker.net/awdoc/web/img/20180329/fef753febb60494d8ae234132181340f.png}
     */
  bindItems(data?: object): void;

  /**
     * 刷新数据
     * @example //重新绑定数据
                listdata.removeAll();
                listdata.addData([ {
                    leftTemplate : 0,
                    template : 1,
                    rightTemplate : 2,
                    $leftImage : "source://view/do_FragmentView/image/right.png",
                    middle_title : "主视图刷新数据",
                    $rightImage : "source://view/do_FragmentView/image/default.png"
                } ]);
                do_FragmentView.refreshItems(); //刷新当前视图显示数据

        @link {http://www.appworker.net/awdoc/web/img/20180329/55188301264c4eb7974fd42718ba6415.png}
        @link {http://www.appworker.net/awdoc/web/img/20180329/350e47d615c84c28ad644a8aeca286d0.png}
        @link {http://www.appworker.net/awdoc/web/img/20180329/2d8b2b9ab256499f9be84ed0bb250a30.png}
     */
  refreshItems(): void;
}
