/*
 * @Author: shawvyu
 * @Date: 2020-08-09 12:54:35
 * @LastEditTime: 2020-08-09 14:01:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\ui\do_ALayout.d.ts
 */
import { UiBasicInstance, FillType, LayoutAlign } from "../base/uiBase";

interface AddParams {
  /** 插入的ui组件在父容器的唯一标识 */
  id: string;
  /** 插入的UI文件路径，支持data://和source:// */
  path: string;
  /** 插入的ui组件相对ALayout的x 坐标,如果没有设置,则是这个ui组件旧的x坐标 */
  x?: string;
  /** 插入的ui组件相对ALayout的y 坐标,如果没有设置,则是这个ui组件旧的y坐标 */
  y?: string;
}

/**
 * 为什么通过代码修改一个ALayout里的ui的width，height，没有效果了?
 * 答: x,y,width,height这几个属性修改后，需要调用一下redraw方法才能生效。这样设计的好处在于，如果一个ALayout里面有多个子View，每个子View都做了这几个属性的修改，然后再调用ALayout的redraw方法，比每一个组件自动的重新绘制，可以节省很多重绘制的次数，提高效率。另外一些属性的调整，比如visible变化，也有可能需要redraw
 * @example
 * ui("button1").x = 30;
 * ui("button2").height = 40;
 * layout.redraw();
 */
export interface DoALayout extends UiBasicInstance {
  /**
   * 是否可点击
   *
   * 说明 : 缺省为true，如果enable为true，则ALayout是可以点击的;否则不可点击,相应的事件也都不会触发.
   * @default true
   */
  enabled: boolean;
  /**
   * 背景图片
   *
   * 说明 : 设置layout的背景图片，支持data://和source://两种方式
   */
  bgImage: string;

  /**
   * 背景图片填充方式
   *
   * 说明 : 背景图片填充方式，缺省为fillxy。
   * @default fillxy
   */
  bgImageFillType: FillType;

  /**
   * 是否自动拉伸
   *
   * 说明 : 通常ALayout包括ALayout内的所有组件都是按照设计器里设计的分辨率映射到手机屏幕的分辨率，按比例缩放的。为了确保不变形，可以通过设置这个属性来控制。
   * @default true
   */
  isStretch: boolean;

  /**
   * 对齐方式
   *
   * 说明 : 这个属性只有当isStretch为false的时候才有意义。正如isStretch属性描述，如果设计器设计的区域分辨率宽高比和运行的手机宽高比不一致的时候，通过设置isStretch为false可以确保ALayout比例不变形，但是有可能会有空白区域，这个属性就是设置这个空白区的停靠方式
   * @default MiddelCenter
   */
  layoutAlign: LayoutAlign;

  /**
     * 插入一个UI
     * 
     * 说明:
     * 可以在ALayout控件内在用户指定的x,y坐标上动态插入新的ui文件,实际是add这个ui文件的根节点对应的ui组件.
     * 这个ui文件可以有自己的脚本代码，但是和这个ui的所在Page共享一个作用域.详细用法包括插入的ui和主ui之间的数据交互参考例子
     * 目前并不支持动态add一个ui对象,只支持add一个ui文件,ui文件本质是一个json字符串,你可以通过网络或其它方式动态生成这个json字符串,然后写入一个临时的ui文件,然后再add.
     * add之后的ui可以通过UI组件的基类方法remove来删除,对应的ui资源会清除,但是add的ui文件对应的ui.js的js资源并不会清空. 如果需要不断的add和remove,可以尝试不使用remove,而是设置visiable为true和false来隐藏和显示.
     * @param params 
     * @returns 返回这个ui文件对应的根节点view的地址
     * @example var layout = ui("ALayout_1");
                // 把header.ui的根节点（是一个id为root的ALayout）加到当前index.ui的0，0位置
                // 并且重新给它命名一个新的唯一标示id "header_id", 这个id不要和index.ui里已有的ui组件的id重复
                var addedheader = layout.add("header_id", "source://view/do_ALayout/header.ui", 0, 0);
                // 获取header.ui的根节点对象（是一个id为root的ALayout），但是我们不能通过
                // var header = ui("root");来获取这个对象，因为root这个id的作用域是在header.ui,而不是在index.ui.js
                // 正确的写法是有2种，第一是：
                var header1 = ui("header_id");
                // 第二是：
                var header2 = ui(addedheader);
                // 判断这二个对象是否相同，可以通过getAddress方法
                nf.toast(header1.getAddress() == header2.getAddress());
                // 进一步我们还可以获取到header.ui根节点之下的子节点，比如statusbar是header.ui最上面的一部分组件的id
                var statusbar = ui(addedheader + ".statusbar");
                statusbar.bgColor = "FF0000FF";
                // 我们并不推荐在index.ui里直接获取header.ui 的子对象，这不符合降低耦合度的原则
                // index.ui不能直接调用header.ui里的函数，因为它们处于不同的js运行环境
                // 要实现这二者之间的数据交换，可以通过二种方式
                // 第一:通过数据bind，在header.ui.js里setmapping,然后通过binddata给header赋值
                var hashdata = mm("do_HashData");
                header1.bindData(hashdata);
                hashdata.addData({
                    "title_value" : "我是首页",
                    "menu_bg_value" : "FF0000FF"
                })
                header1.refreshData();
                // 第二：通过消息机制，订阅和触发消息都在page对象，因为header.ui和index.ui在同一page下
                page.on("click_menu", function(data) {
                        nf.alert(data);
                })
     */
  add(params: AddParams): string;

  /**
     * 获取子view的id
     * 
     * 说明: 获取当前组件内所有第一层子view的id 如果想遍历所有子view,可以判断子view的类型,如果子view是布局组件,可以继续getChildren
     * @returns 返回一个JSON数组，类似[‘do_Button_1’,’do_Button_2’]
     * @example  //获取所有子view的id
                var children = layout.getChildren();
                print(children,typeof(children));
                print(ui(children[0]).text,typeof(children[0]));
     */
  getChildren(): Array<string>;

  /**
   * 点击事件
   * 
   * 说明: 按下并在alayout范围抬起，触发该事件; enabled为false的时候无效
   * @param eventName 
   * @param listen 
   * @example layout.on("touch",function(){
                print("touch 触发")
              })
   */
  on(eventName: "touch", listen: () => void): void;
  /**
   * 按下事件
   * 
   * 说明: alayout范围内按下即可触发;必须先订阅toch事件才会有效果;enabled为false的时候无效
   * @param eventName 
   * @param listen 
   * @example  layout.on("touch",function(){
                    //do nothing
                })
                layout.on("touchDown",function(){
                    print("touchDown 触发")
                })
   */
  on(eventName: "touchDown", listen: () => void): void;
  /**
   * 弹起事件
   * 
   * 说明: 一旦按下，手指离开即触发，不论是否在alayout范围内;必须先订阅toch事件才会有效果;enabled为false的时候无效
   * @param eventName 
   * @param listen 
   * @example layout.on("touch",function(){
                    //do nothing
                })
                layout.on("touchUp",function(){
                    print("touchUp 触发")
                })
   */
  on(eventName: "touchUp", listen: () => void): void;
  /**
   * 长按事件
   * 
   * 说明: 长按事件;必须先订阅toch事件才会有效果;enabled为false的时候无效
   * @param eventName 
   * @param listen 
   * @example layout.on("touch",function(){
                    //do nothing
                })
                layout.on("longTouch",function(){
                    print("longTouch 触发")
                })
   */
  on(eventName: "longTouch", listen: () => void): void;
}
