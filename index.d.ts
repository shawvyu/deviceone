/*
 * @Author: shawvyu
 * @Date: 2020-07-29 21:31:39
 * @LastEditTime: 2020-08-01 18:53:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HaiwellCloudAppe:\work\nodejs\@types\deviceone\index.d.ts
 */
import { DoApp } from "./sm/doApp";
import { DoPage } from "./sm/doPage";
import { DoAlbum } from "./sm/doAlbum";
import { DoAlgorithm } from "./sm/doAlgorithm";
import { DoAudio } from "./sm/doAudio";
import { DoCamera } from "./sm/doCamera";
import { DoContact } from "./sm/doContact";
import { DoDataCache } from "./sm/doDataCache";
import { DoDateTimePicker } from "./sm/doDateTimePicker";
import { DoDevice } from "./sm/doDevice";
import { DoDialog } from "./sm/doDialog";

export function sm(name: "do_App"): DoApp;
export function sm(name: "do_Page"): DoPage;
export function sm(name: "do_Album"): DoAlbum;
export function sm(name: "do_Algorithm"): DoAlgorithm;
export function sm(name: "do_Audio"): DoAudio;
export function sm(name: "do_Camera"): DoCamera;
/** 针对通讯录的增删查改 */
export function sm(name: "do_Contact"): DoContact;
/** 缓存一些数据到本地文件，即使程序退出再进入还能获取到值，要确保设置的value值不要过大 */
export function sm(name: "do_DataCache"): DoDataCache;
/** 弹出时间，日期选择窗口来选择时间，时间格式都是long型时间戳格式 */
export function sm(name: "do_DateTimePicker"): DoDateTimePicker;
/** 设备辅助功能，获取设备系统相关信息、提示音、震动、闪光灯、截屏等 */
export function sm(name: "do_Device"): DoDevice;
/** 显示在屏幕上的窗口 */
export function sm(name: "do_Dialog"): DoDialog;

export function ui(name: string): object;
export function mm(name: string): object;
