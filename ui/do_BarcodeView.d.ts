/*
 * @Author: shawvyu
 * @Date: 2020-08-09 14:27:27
 * @LastEditTime: 2020-08-09 14:33:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\ui\do_BarcodeView.d.ts
 */
import { UiBasicInstance } from "../base/uiBase";

/**
 * IOS二维码生成时选择定位区域图形,不规则图形导致的无法扫描成功。原因： iOS使用的是原生的框架，如果扫描失败就无法识别了
 */
export interface DoBarcodeView extends UiBasicInstance {
  /**
   * 扫描的区域
   *
   * 说明 : 设置扫描区域的位置和宽高，x,y,width,height，中间用逗号隔开；扫描区域不建议设置超出组件本身宽高和范围；默认值取控件的一半宽高，居中显示，修改后必须重新调start方法才会生效
   *
   * @example var do_BarcodeView = ui("do_BarcodeView_1");
   * //设置扫描的区域 150,150,300,300,设置后需要调用start方法重新启动扫描才可以生效
   * do_BarcodeView.scanArea = "150,150,300,300";
   * do_BarcodeView.start(function(data) {
   * if (data)
   *  .print(JSON.stringify(data), "扫描结果");
   * });
   * @link {http://www.appworker.net/awdoc/web/img/20180329/95f3b3e34c9b4dccaa59e2c6d5cd51e6.png}
   */
  scanArea: string;

  /**
     * 开关闪光灯
     * @param status 闪光灯状态，支持两种状态：on（开启）、off（关闭）
     * @example //开启闪光灯
                do_BarcodeView.flash("on");
                //关闭闪光灯
                do_BarcodeView.flash("off");
     */
  flash(status: string): void;

  /**
     * 启动扫描
     * 
     * 说明: 条码扫描成功后会自动停止并执行异步回调，将扫描结果返回，如需再次扫描需重新调用该方法
     * @param listen 
     * @returns 返回data是一个JSON对象类型
     * @example // 启动扫描
                do_BarcodeView.start(function(data) {
                        if (data)
                            print(JSON.stringify(data), "扫描结果");
                });
                //扫描结果示例
                {
                    "code":"QR_CODE",
                    "value":"http://www.appwork.net"
                }
     */
  start(listen: (data: object) => void): void;
}
