import { SmBasicInstance } from "./smBase";

export interface DoAlipay1 extends SmBasicInstance{

    /**
     * 支付
     * @param orderStr orderStr示例如下app_id=2015052600090779&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22seller_id%22%3A%22%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.02%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22314VYGIAGG7ZOYY%22%7D&charset=utf-8&method=alipay.trade.app.pay&sign_type=RSA×tamp=2016-08-15%2012%3A12%3A15&version=1.0&sign=MsbylYkCzlfYLy9PeRwUUIg9nZPeN9SfXPNavUCroGKR5Kqvx0nEnd3eRmKxJuthNUx4ERCXe552EV9PfwexqW%2B1wbKOdYtDIb4%2B7PL3Pc94RZL0zKaWcaY3tSL89%2FuAVUsQuFqEJdhIukuKygrXucvejOUgTCfoUdwTi7z%2BZzQ%3D
     * @link https://opendocs.alipay.com/open/204/105465 
     * @returns {object} {“memo”:”xxxxx”,”result”:{“alipay_trade_app_pay_response”:{“app_id”:”2014072300007148”,”charset”:”utf-8”,”code”:”10000”,”msg”:”Success”,”out_trade_no”:”081622560194853”,”seller_id”:”2088702849871851”,”total_amount”:”0.01”,”trade_no”:”2016081621001004400236957647”},”resultStatus”:”9000.其中code的9000为订单支付成功,8000为正在处理中,（有可能已经支付成功），请查询商户订单列表中订单的支付状态,4000为 订单支付失败,5000为重复请求,6001为用户中途取消,6002为网络连接出错,6004为支付结果未知（有可能已经支付成功），请查询商户订单列表中订单的支付状态,其它为其它支付错误.描述参考网址
     * @link https://opendocs.alipay.com/open/204/105302
     * 
     */
    pay(orderStr:string,listen:(data:object)=>void):void
    pay(params:{orderStr:string},listen:(data:object)=>void):void

    /**
     * 授权登录
     * @param authInfo authInfo示例如下apiname=com.alipay.account.auth&app_id=xxxxx&app_name=mc&auth_type=AUTHACCOUNT&biz_type=openservice&method=alipay.open.auth.sdk.code.get&pid=xxxxx&product_id=APP_FAST_LOGIN&scope=kuaijie&sign_type=RSA2&target_id=20141225xxxx&sign=fMcp4GtiM6rxSIeFnJCVePJKV43eXrUP86CQgiLhDHH2u%2FdN75eEvmywc2ulkm7qKRetkU9fbVZtJIqFdMJcJ9Yp%2BJI%2FF%2FpESafFR6rB2fRjiQQLGXvxmDGVMjPSxHxVtIqpZy5FDoKUSjQ2%2FILDKpu3%2F%2BtAtm2jRw1rUoMhgt0%3D  
     * @link https://opendocs.alipay.com/open/218/105325
     * @param listen 
     * @returns {object} {resultStatus,result,memo}其中，resultStatus为本次操作的状态返回值，标识本次调用的结果，参见“resultStatus状态代码”，示例：9000；result为本次操作返回的结果数据，result_code具体状态码值请参见“result_code状态代码”
     * @link https://opendocs.alipay.com/open/218/105327
     */
    auth(authInfo:string,listen:(data:object)=>void):void
    auth(params:{authInfo:string},listen:(data:object)=>void):void
}