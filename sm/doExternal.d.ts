/*
 * @Author: your name
 * @Date: 2020-08-01 18:54:33
 * @LastEditTime: 2020-08-01 22:41:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\doExternal.d.ts
 */ 
import { SmBasicInstance } from "./smBase";

export interface DoExternal extends SmBasicInstance{
    /**
     * 打开系统设置界面
     * @param type 目前仅支持“GPS”，表示打开GPS设置界面；iOS仅支持10以下系统
     */         
    openSystemSetting(type:string):void
}