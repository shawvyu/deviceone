/*
 * @Author: shawvyu
 * @Date: 2020-08-08 12:20:52
 * @LastEditTime: 2020-08-08 12:25:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_Unionpay.d.ts
 */
import { SmBasicInstance } from "../base/smBase";

export interface DoUnionpay extends SmBasicInstance{

    /**
     * 支付
     * @param orderInfo 交易流水号，是商户后台通过调用银联后台获取的
     * @param mode 测试类型，取值为”00”、”01”。”00”表示银联正式环境，若开发者已经接入网银联支付，可用正式环境测试；”01”表示银联测试环境，测试环境仅用于测试插件功能是否正常
     * @param verifyUrl 根据银联支付开发者网站提供的网站API文档搭建的商户验证支付结果的接口，如不填写则不进行二次校验，以银联控件支付结果为准，建议填写
     * @param listen 
     * @returns {object} {‘code’:’0’,’msg’:’success’}，其中pay_result的返回值为0表示订单支付成功,1为支付失败,-1为用户取消了支付,-2支付发生未知错误
     * @example var target_0 = sm("do_Unionpay");
                var OrderInfo = ui("do_TextBox_1").text;
                var Mode = ui("do_TextBox_2").text;
                var VerifyUrl = ui("do_TextBox_3").text;
                target_0.startPay({orderInfo:OrderInfo, mode:Mode, verifyUrl:VerifyUrl}, function(data, e) {
                ...})
     */
    startPay(orderInfo:string,mode:string,verifyUrl?:string,listen:(data:object)=>void):void
    startPay(params:{orderInfo:string,mode:string,verifyUrl?:string},listen:(data:object)=>void):void
}