import { SmBasicInstance } from "../base/smBase";

interface ToastParams{
    /**  */
    text?:string
    x?:number
    y?:number
}
interface AlertParams{
    /** alert窗口的正文 */
    text?:string
    /** alert窗口的标题 */
    title?:string
    /** 按钮的正文 defaultvalue=确定 */
    buttontext?:string
}

interface ConfirmParams{
    /** confirm窗口的正文 */
    text?:string
    /** confirm窗口的标题 */
    title?:string
    /** 左边按钮1的正文 */
    button1text?:string
    /** 右边按钮2的正文 */
    button2text?:string
}
export interface DoNotification extends SmBasicInstance{

    /**
     * 弹出toast窗口
     * 支持类似Android的toast的方式，弹出一个提示框，但是很短时间内会自动消隐，x和y都不赋值，即显示默认位置
     * @param params
     * @example //默认位置提示框
                do_Notification.toast({text:"默认位置"});
                //在设定位置提示框
                do_Notification.toast({text:"默认位置",x:300,y:200});
     */
    toast(params:ToastParams):void

    /**
     * 弹出alert窗口
     * 
     * 说明: 通过alert来提示用户，alert是模态的，只有一个确定按钮
     * @param params 
     * @param listen
     * @example do_Notification.alert({text:"弹出测试", title:"warning"}, function(data, e) {
                }); 
     */
    alert(params:AlertParams,listen:()=>void):void

    /**
     * 弹出confirm窗口
     * @param params 
     * @param listen 
     * @returns 1 表示点击了button1按钮 2 表示点击了button2按钮
     * @example do_Notification.confirm({text:"确认按钮测试", title:"select", button1text:"conform", button2text:"cancel"}, function(data, e) {
                    print(data,"点击返回值")
                })
     */
    confirm(params:ConfirmParams,listen:(data:number)=>void):void

}