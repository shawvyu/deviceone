import { SmBasicInstance } from "../base/smBase";
import { MessageRes } from "./do_JPush";
type RepeatMode= 'None'|'Minute'|'Hour'|'Day'|'Week'
interface AddNotifyParams{
    /** 通知一次时间格式为yyyy-MM-dd HH:mm:ss，iOS平台因系统限制，不同通知的时间不能重复 */
    notifyTime:string
    /** 通知唯一标示 */
    notifyId:number
    contentText:string
    /** iOS平台不支持 */
    contentTitle?:string
    /** 自定义内容不显示在通知中，只在通知中携带，比如{‘key1’:’value1’} */
    extra?:object
    /** None：默认值按照指定时间执行一次，Minute:每隔一分钟重复执行,Hour:每隔一小时进行重复执行,Day:每隔一天进行重复执行,Week:每隔一周进行重复执行 */
    repeatMode?:RepeatMode
    /** 只支持data://目录；不填时默认用系统通知铃声；iOS平台只支持m4a格式，且若铃声超过30秒则无效 */
    ringing?:string
    /** 收到通知时是否震动;iOS平台是否能震动与系统设置相同 */
    isVibrate?:boolean
}
interface MessageClickedRes extends MessageRes{
    /** 通知id */
    notifyId:number
}
export interface DoLocalNotification extends SmBasicInstance{

    /**
     * 添加本地通知
     * 
     * 说明: iOS平台应用在前台时，震动和自定义铃声无效，只触发message事件
     * @param params 
     * @example var target_0 = sm("do_LocalNotification");
                target_0.addNotify({notifyTime:time, notifyId:0, contentText:"定时通知0", contentTitle:"通知测试0", extra:{"key0":"value0"}, repeatMode:"Minute"});
                target_0.addNotify({notifyTime:time, notifyId:1, contentText:"定时通知1", contentTitle:"通知测试1", extra:{"key0":"value0"}, repeatMode:"Hour"});
     * 
     */
    addNotify(params:AddNotifyParams):void

    /**
     * 移除通知消息
     * 
     * 说明: 数组不为空，移除数组里notifyId，数组为空移除所有通知，移除后通知不再触发
     * @param notifyIds 通知id数组
     * @example target_0.removeNotify({notifyIds:[0,1]});
     */
    removeNotify(notifyIds:Array<number>):void
    removeNotify(params:{notifyIds:Array<number>}):void

    /**
     * 需要注册在app.js或app.lua。分三种情况：1、程序已启动且运行在前台，此时接到推送消息会触发该事件，可在该事件里对推送消息进行处理，否则推送消息只会显示在状态栏中（iOS不显示）；2、程序已启动但运行在后台，此时只会显示一个横幅的消息提醒，建议用messageClicked事件处理推送消息；3、程序未运行或者被杀死进程，此时接到推送消息不会触发该事件，而会触发do_Global的launch事件，返回值中type为locaLNotification
     * @param eventName 
     * @param listen 
     * @returns {object} {contentTitle:’通知标题’,contentText:’通知内容’,notifyId:’通知id’,extra:’自定义内容，为空或者json字符串’}
     * @example target_0.on("message",function(data,e){
                ...
                })
     */
    on(eventName:'message',listen:(data:MessageRes)=>void):void
    /**
     * 接收通知点击触发，需要注册在app.js或app.lua
     * @param eventName 
     * @param listen 
     * @returns iOS不支持contentTitle输入，所以也不返回contentTitle
     * @example target_0.on("messageClicked",function(data,e){
                ...
                })
     */
    on(eventName:'messageClicked',listen:(data:MessageClickedRes)=>void):void


}