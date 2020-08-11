/*
 * @Author: shawvyu
 * @Date: 2020-08-08 22:33:57
 * @LastEditTime: 2020-08-09 16:52:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\base\uiBase.d.ts
 */

type Callback = () => void;
/**
 * 所有UI组件的基类(父类),所有UI组件都继承这个组件的属性，事件，方法。所谓UI组件就是可以在设计器可视化布局的组件。
 *
 * 注意：定义自己的组件不能使用和基类名字一样的的属性、事件和方法。
 *
 * UI组件不能直接实例化，通常是从ui文件里根据组件的id获取到对象，类似getElementById，获取实例的方法是ui()函数
 * @example var button1 = ui("do_Button_id1");
 */
export interface UiBasicInstance {
  /** UI组件的ID */
  id: string;
  /** 基于父容器的x轴坐标位置 @default 0 */
  x: number;
  /** 基于父容器的y轴坐标位置 @default 0 */
  y: number;
  /**组件的宽度 @default 100 */
  width: string;
  /** 组件的高度 @default 80 */
  height: string;
  /** 是否可见 @default true */
  visible: boolean;
  /**  颜色值 8位16进制 @default 00000000 */
  bgColor: string;
  /** UI组件的tag */
  tag: string;
  /**
   * 外边距
   *
   * 说明 : 和父容器（必须是LinearLayout）的上，右，下，左边距
   *  @default 0,0,0,0
   *  */
  margin: string;
  /**
   * 类型ID
   *
   * 说明 : 不可修改，通过getType()方法获取
   * */
  type: string;
  /**
   * 边框
   *
   * 说明 : 属性值格式有两种，一种是“颜色，宽度，圆角”，比如’FF9999FF,1,20’，其中这个属性如果为空，则没有border效果；另一种是“颜色，宽度，[左上圆角,右上圆角,右下圆角,左下圆角]”，可单独设置四个角的圆角效果；windows平台不支持；若该属性设置在ImageVIew上，则只支持四个角相同，否则只取第一个值作为四边的圆角
   */
  border: string;
  /**
   * 组件透明度
   *
   * 说明 : 设置组件透明度，若组件为一个容器类组件，则里面所有子组件的透明度一起变化，范围为0~1；当跟bgColor的透明度冲突时以后设置的为准
   * @default 1
   */
  alpha: number;

  /**
   * 获取类型
   *
   * 说明: 获取组件类型ID，用于判断一个对象的类型
   * @example var button = ui("do_Button_id1");print(button.getType()=="do_Button");
   */
  getType(): string;

  /**
   * 获取地址
   * 
   * 说明: 获取组件地址,这个地址是用来区分一个组件的不同对象实例 注意：这个地址是原生地址，在js里打印会发现是一个带{@}符号的特殊字符串
   * @example var button1 = mm("do_Button");
            print(button1.getAddress());//值是类似\"@abcdefg\" 之类的字符串
            var button2 = mm(button1.getAddress());//根据地址获取对象，这里button1和button2指向同样的对象
   */
  getAddress(): string;

  /**
   * 获取UI矩形
   *
   * 说明: 获取UI组件在设备上显示的矩形真实大小，包括x，y，width，height。这几个值和UI对应的x,y,width,height属性的值有可能不一致
   * @returns 组件矩形｛x:Number,y:Number,width:Number,height:Number｝
   */
  getRect(): object;

  /**
   * 取消订阅
   * @param name
   * @param data
   * @returns 说明: 取消订阅消息,所有MM对象可以订阅消息也可以取消订阅，订阅可以重复，触发一次就会触发所有的订阅，取消订阅执行一次就把所有订阅都取消了
   */
  off(name: string, data?: string): void;

  /**
   * 触发消息
   *
   * 说明: 消息机制的详细说明可以参考
   * @param name
   * @param data
   */
  fire(name: string, data?: string): void;

  /**
   * 获取属性值
   * 
   * 说明: 除了单独获取一个属性值外，可以通过这个方法获取一个UI组件的多个属性的属性值
   * @param data 一组属性名对应的JSON Array对象
   * @returns 返回属性的一个json node格式，其中key是属性名，value是属性值
   * @example var button = ui("btn_hello");
                button.x = 100;
                button.height = 200;
                button.text = "test";
                var feature_name = [ "x", "height", "text" ];
                var feature_value = button.get(feature_name);
                print(JSON.stringify(feature_value));//打印出{"x":100,"height":200,"text":"test"}
   */
  get(data: Array): object;

  /**
   * 设置属性
   * 
   * 说明: 除了单独获取一个属性值外，可以通过这个方法获取一个UI组件的多个属性的属性值
   * @param data 多个属性名和它的值合并的json node
   * @example var button = ui("btn_hello");
                button.x = 100;
                button.height = 200;
                button.text = "test";
                var feature_name = [ "x", "height", "text" ];
                var feature_value = button.get(feature_name);
                print(JSON.stringify(feature_value));//打印出{"x":100,"height":200,"text":"test"}
   */
  set(data?: object): void;

  /**
   * 绑定
   *
   * 说明: 利用HashData和ListData绑定对象到一个数据源
   * @param data 这个data只能是HashData和ListData的实例
   * @param mapping 可以同时映射多个数据值到不同的属性上
   */
  bindData(data: string, mapping?: object): void;

  /**
   * 设置和数据源的映射关系
   *
   * 说明: bind方法可以指定mapping，而这个方法是设置缺省的映射关系，如果bind方法传递的mapping参数为空，则使用这个缺省的映射关系
   * @param data 可以同时映射多个数据值到不同的属性上
   */
  setMapping(data?: object): void;

  /**
   * 重画组件
   * 
   * 说明: 重画组件，当组件的x，y、width，height, visible或者margin修改的时候，需要调用自身的redraw方法才能生效。还有一些组件在一些特殊情况下,比如添加，删除一个子View或修改了内容，都有可能需要调用redraw重画。这样设计的好处在于，如果一个父View里面有多个子View，每个子View都做了这几个属性的修改，然后再调用父View的redraw方法，比每一个组件自动的重新绘制，可以节省很多重绘制的次数，提高效率
   * @example var child1 = ui("child_view_id1");
            var child2 = ui("child_view_id2");
            var child3 = ui("child_view_id3");
            child1.x = child1.x+10;
            child2.width = 22;
            child3.visible = false;
            parent.redraw();//parent是child1,child2,child3的父容器
   */
  redraw(): void;

  /**
   * 删除自身
   *
   * 说明: 把自身从父容器中删除
   */
  remove(): void;

  /**
   * 刷新数据
   */
  refreshData(): void;

  /**
   * 订阅消息
   *
   * 说明: 每一个组件都可以有自己的消息中心，可一订阅这个组件的消息
   * @param name
   * @param data 回调函数function(data,e,self),第二个参数e.data就是这个值
   * @param delay 如果值小于1或等于0就直接响应事件
   * @param listen
   */
  on(name: string, data?: string, delay?: number, listen?: Callback): void;
  /**
   * 当对象获取到数据会触发,详细的文档参考
   * @param name
   * @param listen
   */
  on(name: "dataRefreshed", listen: (data: string) => void): void;

  /**
   * 动画
   *
   * 说明: 每一个UI组件都支持一些属性变化的动画效果
   * @param animation 参数是model组件Animation一个实例的地址
   */
  animate(animation?: string, listen?: Callback): void;

  /**
   * 组件显示动画
   *
   * 说明: UI组件被加载后可通过show方法增加动画来显示，若UI组件已是显示状态，再调该方法没有动画效果，默认没有动画
   * @param animationType 目前支持以下几种：’slide_l2r’: 从左至右滑出’slide_r2l’: 从右至左滑出’slide_b2t’: 从底至上滑出’slide_t2b’: 从上至底滑出’expand_l2r’: 从左至右展开’expand_t2b’: 从上至底展开’fadeout’ : 淡入淡出
   * @param {number} animationTime [300] 单位为毫秒
   *
   */
  show(animationType?: string, animationTime?: number, listen?: Callback): void;

  /**
   * 组件隐藏动画
   *
   * 说明: UI组件被加载后可通过show方法增加动画来隐藏，若UI组件已是隐藏状态，再调该方法没有动画效果；默认没有动画效果
   * @param animationType 目前支持以下几种：’slide_l2r’: 从左至右滑出’slide_r2l’: 从右至左滑出’slide_b2t’: 从底至上滑出’slide_t2b’: 从上至底滑出’expand_l2r’: 从左至右展开’expand_t2b’: 从上至底展开’fadeout’ : 淡入淡出
   * @param animationTime 300 单位为毫秒
   * @param listen
   */
  hide(animationType?: string, animationTime?: number, listen?: Callback): void;
}

/**
 * 说明 : 包含4种类型：normal：常规bold：粗体italic：斜体bold_italic：粗斜体（iOS平台不支持）
 */
export type FontStyle = "normal" | "bold" | "italic" | "bold_italic";

/** 说明 :包含3种类型：normal：常规  underline ：下划线  strikethrough ：删除线 */
export type TextFlag = "normal" | "underline" | "strikethrough";

/** 说明 : 对齐方式为以下3种：left 左对齐（默认）；center 居中；right 右对齐。 */
export type TextAlign = "left" | "center" | "right";
/**
 * fillxy:表示无论图片大小，图片会自动拉伸平铺满整个layout
 *
 * repeatxy:表示图片不会有任何自动拉伸，根据layout大小会重复很多个图片 */
export type FillType = "fillxy" | "repeatxy";
/**
 * TopLeft：垂直居上，水平居左
 * TopCenter：垂直居上，水平居中
 * TopRight:垂直居上，水平居右
 * MiddleLeft:垂直居中，水平居左
 * MiddleCenter:垂直水平都居中
 * MiddleRight:垂直居中，水平居右
 * BottomLeft:垂直居下，水平居左
 * BottomCenter:垂直居下，水平居中
 * BottomRight:垂直居下，水平居右
 */
export type LayoutAlign =
  | "TopLeft"
  | "TopCenter"
  | "TopRight"
  | "MiddleLeft"
  | "MiddleCenter"
  | "MiddleRight"
  | "BottomLeft"
  | "BottomCenter"
  | "BottomRight";

/**
 * both、left和right三种类型，缺省both表示同时支持左右滑动
 */
export type GestureType='both'|'left'|'right'

/**
 * 图片显示类型，有以下几种方式,缺省为fillxy；
 * fillxy：拉伸图片（不按比例）以填充View的宽高；
 * center：按原图大小显示图片，但图片宽高大于View的宽高时，截图图片中间部分显示；
 * fillxory：按比例放大原图直至等于某边View的宽高显示；
 * centercrop：当图片大于组件时按图片中心点比例缩小图片，直到图片的宽高大于或等于ImageView组件的宽高时截取图片中间部分显示、当图片小于组件时按比例放大直到填充ImageView的宽或高
 */
export type ScaleType = 'fillxy'|'center'|'fillxory'|'centercrop'
/** 
 * always：表示只读本地缓存，缓存没有的时候从远程读取一次然后就缓存到本地;
 * never：表示永远不读本地缓存，永远都是读远程图片;
 * temporay：表示每次打开这个imageview都会先读缓存的本地图片，然后再读服务器的网络图片，然后再缓存到本地,然后再更新到imageview
 */
export type ImageCacheType = 'always'|'never'|'temporay'

/**
 * 进度条样式
 * @link {http://www.appworker.net/awdoc/web/img/20180522/fc1a28676c8f4ceaaa7325a7e5e84df8.png}
 */
export type ProgressStyle='horizontal'|'large'|'small'|'normal'

/**
 * “ASC” ：支持ASCII的默认键盘
 * 
 * “PHONENUMBER” ：标准电话键盘，支持＋＊＃字符
 * 
 * “URL” ：URL键盘，支持.com按钮 只支持URL字符
 * 
 * “ENG” :英文键盘
 * 
 * “DECIMAL” :数字与小数点键盘（仅支持iOS平台）
 */
export type InputType='ENG'|'ASC'|'PHONENUMBER'|'URL'|'DECIMAL'