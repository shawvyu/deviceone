import { SmBasicInstance } from "../base/smBase";

interface DidLoginRes{
    /**  */
    registrationID:string
}
interface MessageRes{
    /** 推送的通知的标题 */
    title:string
    /** 推送的消息 */
    content:string
    /** 自定义内容，为空或者json字符串 */
    extra:string

}

interface CustomMessageRes{
    /** 推送的消息 */
    content:string
    /** 自定义内容，为空或者json字符串 */
    extra:string
}
export interface DoJPush extends SmBasicInstance{
    /**
     * 获取未读推送消息数量 
     * 
     * 说明: 该方法可获取极光推送的未读消息数量；仅支持iOS平台
     * @returns 返回未读推送消息数量
     * @example var target_0 = sm("do_JPush");
                var data = target_0.getIconBadgeNumber();
     * 
     */
    getIconBadgeNumber():number

    /**
     * 设置未读推送消息数量
     * 
     * 说明: 该方法可设置极光推送的未读消息数量并显示在应用图标的右上角；仅支持iOS平台
     * @param quantity 
     * @example target_0.setIconBadgeNumber({quantity:5});
     */
    setIconBadgeNumber(quantity:number):void
    setIconBadgeNumber(params:{quantity:number}):void

    /**
     * 恢复推送服务
     * 
     * 说明: 调用了此API后，极光推送完全恢复正常工作；仅支持Android平台
     * @example target_0.resumePush();
     */
    resumePush():void

    /**
     * 停止推送服务
     * 
     * 说明: 调用了本API后，极光推送服务完全被停止；仅支持Android平台
     * @example target_0.stopPush();
     */
    stopPush():void

    /**
     * 获取注册ID
     * @returns 返回触发didLogin事件后返回的RegistrationID
     * @example var data = target_0.getRegistrationID();
     */
    getRegistrationID():string


    /**
     * 设置自定义消息铃声
     * @param ringing 只支持data://目录，支持wav,m4a格式（音频文件需小于30秒,超过30秒IOS端会使用默认铃声）.Android端自定义铃音生效的推送消息类型为’自定义消息’;iOS端自定义铃音生效的推送消息类型为’发送通知’,然后在设置界面中展开’可选设置’，更改’sound’为ringing参数的音频文件名
     * @example target_0.setRinging({ringing:"data://jpush/1.wav"});
     */
    setRinging(ringing:string):void
    setRinging(params:{ringing:string}):void

    /**
     * 设置自定义消息是否在通知栏显示(仅支持Android平台)
     * @param isDisplay 默认不显示，Android平台设置自定义铃声需要发送自定义消息，故添加此方法兼容setRinging方法
     */
    setCustomMessageDisplay(isDisplay:boolean):void
    setCustomMessageDisplay(params:{isDisplay:boolean}):void

    /**
     * 设置标签
     * 
     * 说明: 给当前设备设置标签，可从后台按标签分类推送
     * @param tag 是一个标签数组，每一个标签是一个字符串类型。不支持增量添加，每次添加都会覆盖之前的标签；如果数组为空，则为删除所有的tag
     * @param listen 
     * @example target_0.setTags({tag:["苹果","abc"]}, function(data, e) {
                ...
                })
     */
    setTags(tag:Array<string>,listen:(data:boolean)=>void):void
    setTags(params:{tag:Array<string>},listen:(data:boolean)=>void):void

    /**
     * 设置别名
     * 
     * 说明: 给当前设备设置别名，每个用户只能指定一个别名
     * @param alias alias 命名长度限制为 40 字节，设置为空表示取消之前的设置，每次调用设置有效的别名，覆盖之前的设置
     * @param listen 
     * @example target_0.setAlias({alias:"中文"}, function(data, e) {
                ...
                })
     */
    setAlias(alias:string,listen:(data:boolean)=>void):void
    setAlias(params:{alias:string},listen:(data:boolean)=>void):void

    /**
     * 已连接，需要注册在app.js或app.lua
     * @param eventName 
     * @param listen 
     * @returns 初始化连接成功
     */
    on(eventName:'didConnect',listen:()=>void):void
    /**
     * 未连接，需要注册在app.js或app.lua
     * @param eventName 
     * @param listen 
     * @returns  断开连接，当无网络时会触发或者被极光关闭
     */
    on(eventName:'didClose',listen:()=>void):void

    /**
     * 返回登陆成功后的RegistrationID，在极光的后台可以根据这个id进行个推，需要注册在app.js或app.lua
     * @param eventName 
     * @param listen 
     */
    on(eventName:'didLogin',listen:(data:DidLoginRes)=>void):void
    /**
     * 需要注册在app.js或app.lua。分三种情况：1、程序已启动且运行在前台，此时接到推送消息会触发该事件，可在该事件里对推送消息进行处理；2、程序已启动但运行在后台，此时ios只会显示一个横幅的消息提醒，android会在状态栏中显示消息提醒，建议用messageClicked事件处理推送消息；3、程序未运行或者被杀死进程，此时接到推送消息不会触发该事件，而会触发do_Global的launch事件，返回值中type为notification，若消息未读，会在状态栏中显示
     * @param eventName 
     * @param listen 
     * @returns {MessageRes} iOS不支持title输入，所以也不返回title；当android发送推送消息时不填写标题，title则会获取到应用名称
     */
    on(eventName:'message',listen:(data:MessageRes)=>void):void
    /**
     * 自定义推送消息，收到自定义消息并且应用在前台时触发，需要注册在app.js或app.lua
     * @param eventName 
     * @param listen 
     */
    on(eventName:'customMessage',listen:(data:CustomMessageRes)=>void):void
    /**
     * 点击通知消息触发，需要注册在app.js或app.lua
     * @param eventName 
     * @param listen 
     * @returns iOS不支持title输入，所以也不返回title
     */
    on(eventName:'messageClicked',listen:(data:MessageRes)=>void):void

    
}