/*
 * @Author: your name
 * @Date: 2020-08-05 21:49:40
 * @LastEditTime: 2020-08-05 22:13:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\do_RongCloud.d.ts
 */
import { SmBasicInstance } from "./smBase";

type MessageType = "text" | "location" | "file" | "image" | "voice";
interface MessageRes {
  /** 消息用户id */
  userId: string;
  /** 消息内容 若为语言或图片消息时，仅返回[图片]或[语音] */
  message: string;
  /** 消息接收时间 */
  receivedTime: number;
  /** 消息发送的时间 */
  sentTime: number;
  /** 消息是否发送成功 当最新一条消息为接收消息时，不返回该字段 */
  isSend: boolean;
}
interface LoginParams {
  /**  */
  appKey: string;
  token: string;
  /** 仅支持Android平台，用来配置Android推送的一些数据，目前用到小米推送，集成后推送整体到达率会大大提升，格式为{‘xiaomi’:{‘appId’:’KWSFSKDFBKS’,’appKey’:’DFGHFHFFRT’}} */
  extraData?: string;
}
interface ConversationParams {
  userId: string;
  /** 通常是用户名 */
  title: string;
  /** 支持本地文件,data:// source:// 打头的URI格式和网络图片,不写为默认头像 */
  headPortrait?: string;
}
interface SetUserInfoParams {
  nickName?: string;
  /** 支持本地文件,data:// source:// 打头的URI格式和网络图片,不写为默认头像 */
  headPortrait?: string;
}

interface EventMessageRes {
  /** 所属会话类型 */
  conversationType: string;
  /** 消息的唯一id */
  messageId: string;
  /** 发送者id */
  fromUserId: string;
  /** 发送时间 */
  sendTime: number;
  /** 接收时间 */
  receiveTime: number;
  /** 消息类型(text,location,file,image,voice) */
  messageType: MessageType;
  /** 消息内容 */
  messageContent: string;
}
interface PortraitClickRes {
  /** 当前所属会话类型 */
  conversationType: string;
  /** 所点击头像的用户id */
  userId: string;
  /** 所点击头像的用户昵称 */
  userName: string;
}
export interface DoRongCloud extends SmBasicInstance {
  /**
     * 设置标题栏颜色,不调用此方法默认标题栏颜色为蓝色
     * @param color 
     * @example var target_0 = sm("do_RongCloud");
                target_0.setTitleBarColor("64B1FFFF");
     */
  setTitleBarColor(color: string): void;

  /**
   * 设置标题颜色,不调用此方法默认标题颜色为白色
   * @param color
   * @example target_0.setTitleColor("FFFFDFFF");
   */
  setTitleColor(color: string): void;

  /**
   * 退出登录
   *
   * 说明: 退出登录后,接收不到推送消息
   */
  logout(): void;

  /**
   * 获取会话列表最新一条消息
   * @example var data = target_0.getLatestMessage();
   */
  getLatestMessage(): MessageRes;

  /**
   * 用户登录
   * @returns  登录成功返回当前登录的用户id,登录失败返回错误信息
   * @example target_0.login({appKey:APPKEY, token:TOKEN, extraData:EXTRADATA}, function(data, e) { })
   */
  login(params: LoginParams, listen: (data: string) => void): void;

  /**
   * 根据用户id打开会话
   * @param params
   * @param listen
   * @example target_0.openConversation({userId:USERID, title:"source图片",   headPortrait:"source://view/SM/do_RongCloud/test/1.png"}, function(data, e) {})
   */
  openConversation(params: ConversationParams, listen: () => void): void;

  /**
   *  打开会话列表
   * @param listen
   * @example target_0.openConversationList(function(data, e) { })
   */
  openConversationList(listen: () => void): void;

  /**
   *
   *  打开群聊会话
   * 根据groupId打开会话
   * @param groupId
   * @param title 通常是群组名
   * @param listen
   */
  openGroupConversation(
    groupId: string,
    title: string,
    listen: () => void
  ): void;

  /**
   * 设置当前用户信息
   * @param params
   * @param listen
   * @returns 设置成功返回true，失败返回false
   * @example target_0.setUserInfo({nickName:"source图片", headPortrait:"source://view/SM/do_RongCloud/test/1.png"}, function(data, e) {})
   */
  setUserInfo(params: SetUserInfoParams, listen: (data: boolean) => void): void;

  /**
   * 接收到新消息触发事件
   * @param eventName
   * @param listen
   * @example target_0.on("message",function(data,e){})
   */
  on(eventName: "message", listen: (data: EventMessageRes) => void): void;
  /**
   * 头像点击事件
   * @param eventName
   * @param listen
   * @example target_0.on("userPortraitClick",function(data,e){})
   */
  on(
    eventName: "userPortraitClick",
    listen: (data: PortraitClickRes) => void
  ): void;
}
