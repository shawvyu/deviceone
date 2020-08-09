/*
 * @Author: your name
 * @Date: 2020-08-09 14:35:39
 * @LastEditTime: 2020-08-09 15:08:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\ui\do_Canvas.d.ts
 */
import {
  UiBasicInstance,
  FontStyle,
  TextFlag,
  TextAlign,
} from "../base/uiBase";

interface ArcParams {
  /** 左上坐标，如：{x:x坐标,y:y坐标} */
  start: object;
  /** 右下坐标，如：{x:x坐标,y:y坐标} */
  end: object;
  /** 起始角度，0表示与x轴重合 @default 0 */
  startAngle?: number;
  /** 默认为90，以起始角度开始，顺时针扫描90度 @default 90 */
  sweepAngle?: number;
  /** 如果为true，这个弧的区域就会包含中心点 @default true */
  useCenter?: boolean;
}

interface TextParams {
  /** 画出来的文字内容 */
  text: string;
  /** 从此坐标开始画，如：{x:x坐标,y:y坐标} @default {x:0,y:0} */
  coord?: object;
  /** @default normal */
  fontStyle?: FontStyle;
  /** @default normal */
  textflag?: TextFlag;
  /** @default 17 */
  fontSize?: number;
  /** @default left */
  textAlign?: TextAlign;
  /**
   * @default 0
   *
   * 绕坐标原点顺时针旋转偏离x轴的角度，0表示与x轴重合 */
  angle?: number;
}

/**
 * 魅族手机设置下划线或者删除线，同时设置align为right的时下划线和删除线会跑偏。原因：魅族手机原生就有这个问题，无法修复。
 */
export interface DoCanvas extends UiBasicInstance {
  /**
     * 画笔颜色
     * 
     * 说明 : 设置当前的画笔颜色，颜色值为8位16进制
     * @default 000000FF
     * @example   var do_Canvas = ui("do_Canvas_1");
                  do_Canvas.strokeColor = "D869D5FF";    //设置do_Canvas的画笔颜色为紫色
     */
  strokeColor: string;

  /**
   * 画笔宽度
   * @default 1
   * @example  do_Canvas.strokeWidth = 15;    //设置do_Canvas的画笔宽度为15
   * 左图为画笔颜色是黑色、宽度是5的效果图，右图为画笔颜色是紫色、宽度是15的效果图
   * @link {http://www.appworker.net/awdoc/web/img/20180329/7cdbc37f0cf74bb4ae5546d277489fc3.png}
   * @link {http://www.appworker.net/awdoc/web/img/20180329/79605ae5f8ac415890052d564eba004b.png}
   */
  strokeWidth: number;

  /**
   * 笔触样式
   *
   * 说明 : 支持0：正方形，1：圆，默认值为0
   * @default 0
   * @example  do_Canvas.strokeCap = 1;    //设置do_Canvas的笔触样式为圆
   * 左图为笔触样式是正方形的效果图，右图为笔触样式是圆的效果图：
   * @link {http://www.appworker.net/awdoc/web/img/20180329/b17a127bbd97470c99f7ee4a702905e3.png}
   * @link {http://www.appworker.net/awdoc/web/img/20180329/69f738680f354355ade9a087dbc9079a.png}
   */
  strokeCap: number;

  /**
   * 是否填充
   *
   * 说明 : 闭合图形是否填充内容。true:填充,false:不填充。
   * @default 0
   * @example  do_Canvas.isFull = false;    //设置do_Canvas为不填充
   * 左图为填充的效果图，右图为不填充的效果图
   * @link {http://www.appworker.net/awdoc/web/img/20180329/d035db39755d4101adc476ea3d56c24d.png}
   * @link {http://www.appworker.net/awdoc/web/img/20180329/5faad9a1cb9840c2a59bc05a8ef1d592.png}
   */
  isFull: boolean;

  /**
     * 定义点
     * 
     * @param points 
     * @example //定义画的多个点
                do_Canvas.definePoint({
                        points : [ {
                            x : 400,
                            y : 250
                        }, {
                            x : 610,
                            y : 260
                        }, {
                            x : 500,
                            y : 300
                        }, {
                            x : 350,
                            y : 280
                        }, {
                            x : 520,
                            y : 400
                        }, {
                            x : 220,
                            y : 430
                        } ]
                });    
                do_Canvas.paint(); //调用paint方法把点画到画板上
     * 
     */
  definePoint(points: object): void;
  definePoint(param: { points: object }): void;

  /**
   * 定义线
   * 
   * 说明: 传入两点坐标，画一条起始点坐标和终点坐标的连线。
   * @param start 起始点坐标，如：{x:x坐标,y:y坐标}
   * @param end 终点坐标，如：{x:x坐标,y:y坐标}
   * @example   //定义画的线
                do_Canvas.defineLine({
                        start : {
                            x : 180,
                            y : 180
                        },
                        end : {
                            x : 400,
                            y : 450
                        }
                })
                do_Canvas.paint();
    @link {http://www.appworker.net/awdoc/web/img/20180329/f409fa1dfe2843b5b9994024c4a9f572.png}
   */
  defineLine(start: object, end: object): void;
  defineLine(params: { start: object; end: object }): void;

  /**
   * 定义圆
   * 
   * 说明:传入圆心坐标，画一个以point坐标为圆心radius值为半径的圆。
   * @param point 圆心坐标，如：{x:x坐标,y:y坐标}
   * @param radius 半径
   * @example   //定义画的圆形
                do_Canvas.defineCircle({
                        point : {
                            x : 350,
                            y : 250
                        },
                        radius : 100
                });
                do_Canvas.paint();
    @link {http://www.appworker.net/awdoc/web/img/20180329/00ab04b125ee4ad1bd1e778f30a49ae5.png}
   */
  defineCircle(point: object, radius: number): void;
  defineCircle(params: { point: object; radius: number }): void;

  /**
   * 定义椭圆
   * @param start 左上坐标，如：{x:x坐标,y:y坐标}
   * @param end 右下坐标，如：{x:x坐标,y:y坐标}
   * @example   //定义画的椭圆
                do_Canvas.defineOval({
                        start : {
                            x : 220,
                            y : 200
                        },
                        end : {
                            x : 400,
                            y : 300
                        }
                });
                do_Canvas.paint();
    @link {http://www.appworker.net/awdoc/web/img/20180329/8ad1d066978647519f1a0550bb23d291.png}
   */
  defineOval(start: object, end: object): void;
  defineOval(params: { start: object; end: object }): void;

  /**
   * 定义弧
   * @param params 
   * @example   //定义画的弧
                do_Canvas.defineArc({
                        start : {
                            x : 2,
                            y : 2
                        },
                        end : {
                            x : 500,
                            y : 460
                        },
                        startAngle : 0,
                        sweepAngle : 120,
                        useCenter : false  
                });
                do_Canvas.paint();
    左图为不包含中心点的弧，右图为包含中心点的弧：
    @link {http://www.appworker.net/awdoc/web/img/20180329/40763e1ef98d4ccdae13faf4b72579ab.png}
    @link {http://www.appworker.net/awdoc/web/img/20180329/76d0264daedd4ba4bc1eaa95ababd095.png}
   */
  defineArc(params: ArcParams): void;

  /**
   * 定义矩形
   * @param start 左上坐标，如：{x:x坐标,y:y坐标}
   * @param end 右下坐标，如：{x:x坐标,y:y坐标}
   * @example   //定义画的矩形
                do_Canvas.defineRect({
                        start : {
                            x : 200,
                            y : 330
                        },
                        end : {
                            x : 550,
                            y : 500
                        }
                    });
                do_Canvas.paint();
    @link {http://www.appworker.net/awdoc/web/img/20180329/a377f5dab86f407b82bb1e38d2d07870.png}
   */
  defineRect(start: object, end: object): void;
  defineRect(params: { start: object; end: object }): void;

  /**
   * 定义文字
   * @param params 
   * @example   //定义画的文字
                do_Canvas.defineText({
                        text : "定义文字啦啦",
                        coord : {
                            x : 250,
                            y : 300
                        },
                        fontStyle : "italic",
                        textFlag : "strikethrough",
                        fontSize : 40,
                        textAlign : "left",
                        angle : 50
                    });
                do_Canvas.paint();
    @link {http://www.appworker.net/awdoc/web/img/20180329/18c8a8ef62ea445eb9583d4585ae8434.png}
   */
  defineText(params: TextParams): void;

  /**
   *  定义图片
   * @param source 支持do_Bitmap对象或data://开头的图片路径
   * @param coord 从此坐标开始画，如：{x:x坐标,y:y坐标}
   * @example   // 定义画的do_Bitmap图片
                var bitmap = mm("do_Bitmap");
                bitmap.loadFile({
                    source : "http://photocdn.sohu.com/20161128/Img474303098.jpg"
                }, function(data, e) {
                        do_Canvas.defineImage({
                            source : bitmap,
                            coord : {
                                x : 300,
                                y : 200
                            }
                        });
                })
                do_Canvas.paint();
    @link {http://www.appworker.net/awdoc/web/img/20180329/100284f8b1ef46899e91fca6c47c5f3b.png}
   */
  defineImage(source: string, coord?: object): void;

  /**
   * 画
   * 
   * 说明: 将当前定义的图形，在Canvas上画出来，未定义图形时没有效果。
   * @example   //将当前do_Canvas定义的图形画出来，可以定义多个图形调用paint时会把已定义的图形都画出来
                //注意：先定义样式后定义图形，画出来的图形才会有对应的样式
                do_Canvas.paint();
   */
  paint(): void;

  /**
   * 清空画布
   * @example   //清空当前画布，同时会清空已定义的图形
                do_Canvas.clear();
   */
  clear(): void;

  /**
   * 保存为Bitmap
   * @param bitmap Bitmap对象
   * @param listen 
   * @example   //定义一个bitmap1对象
                var bitmap1 = mm("do_Bitmap");
                    do_Canvas.saveAsBitmap(bitmap1, function(data, e) {//将画布上的内容保存为bitmap1
                        var _image = "data://save/" + global.getTime() + ".png";
                    //将bitmap1保存为png格式的图片到手机data文件夹下
                        bitmap1.save("PNG", 100, _image, function(bitmap_image, e) {             
                        if (bitmap_image) {
                            sm("do_Notification").toast("保存成功");
                            print(bitmap_image,"图片路径");
                        }
                        })
                    })
   */
  saveAsBitmap(bitmap: string, listen: () => void): void;
}
