import { SmBasicInstance } from "../base/smBase";

interface ShortcutItemParams{
    /** 快捷菜单中Item的唯一标示 */
    id:string
    /**  */
    title:string
    /** 显示的图标，目前只支持官方提供的图标，AppWorker集成了官方图标，修改了短码。 */
    icon:string
    /** Item的子标题 */
    subTitle:string
    /** 自定义内容，为空或者json字符串 */
    userInfo:object
}
export interface Do3DTouch extends SmBasicInstance{
    /**
     * 添加桌面快捷菜单
     * @param params 
     */
    addShortcutItemI(params:ShortcutItemParams):void

    /**
     * 删除桌面快捷菜单
     * @param id 快捷菜单中Item的唯一标示，如[‘id1’,’id2’…]
     */
    removeShortcutItem(id:Array<string>):void

    /**
     * 点击item触发
     * @param eventName 
     * @param listen 
     * @returns 返回值包括，{‘id’:’’,’title’:’’,’subTitle’:’’,’userInfo’:’’}
     */
    on(eventName:'touch',listen:(data:ShortcutItemParams)=>void):void
}