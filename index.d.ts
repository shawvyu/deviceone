/*
 * @Author: shawvyu
 * @Date: 2020-07-29 21:31:39
 * @LastEditTime: 2020-08-04 23:15:49
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
import { DoExternal } from "./sm/doExternal";
import { DoGlobal } from "./sm/doGlobal";
import { DoImageBrowser } from "./sm/doImageBrowser";
import { DoInitData } from "./sm/doInitData";
import { DoNetwork } from "./sm/doNetwork";
import { DoNotification } from "./sm/do_Notification";
import { DoStorage } from "./sm/do_Storage";
import { Do3DTouch } from "./sm/do_3DTouch";
import { DoAccelerometerSensor } from "./sm/do_AccelerometerSensor";
import { DoAlipay1 } from "./sm/do_Alipay1";
import { DoAppleIAP } from "./sm/do_AppleIAP";
import { DoAssistiveTouch } from "./sm/do_AssistiveTouch";
import { DoBaiduLocation } from "./sm/do_BaiduLocation";
import { DoBaiduNavigate } from "./sm/do_BaiduNavigate";
import { DoCacheManager } from "./sm/do_CacheManager";
import { DoFingerPrintRecognition } from "./sm/do_FingerPrintRecognition";
import { DoGyroSensor } from "./sm/do_GyroSensor";

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
/** 启动外部应用或系统的一些应用，比如浏览器，短信等 */
export function sm(name: "do_External"): DoExternal;
/** Global组件表示手机上的移动应用App的概念，但是和我们的定义的App组件有差别，一个Global下至少包含一个AppWork的App组件，但是有可能有多个App组件。这个组件负责一些应用全局的事件，负责应用全局范围内数据的交互和设置。 */
export function sm(name: "do_Global"): DoGlobal;
/** 这个组件用于浏览大量网络或本地图片，图片路径可以http://链接或本地data://、source://、initdata://目录，支持放大后缩放原图，多图片支持左右滑动预览，进入浏览界面单击一下屏幕退出 */
export function sm(name: "do_ImageBrowser"): DoImageBrowser;
/** AppWork定义了自己的文件URI，用户可以利用InitData类来处理initdata://开头的只读目录区文件，目前暂时不支持中文目录和中文文件名 */
export function sm(name: "do_InitData"): DoInitData;
/** 能获取当前手机端的网络状态,监听网络状态的变化 */
export function sm(name: "do_Network"): DoNetwork;
/** 各种方式提醒和通知用户 */
export function sm(name: "do_Notification"): DoNotification;
/** AppWork定义了自己的文件URI，用户可以利用Storage类来处理各种文件操作，用户可对data://目录进行读写操作（缺省为utf-8格式）。目前暂时不支持中文目录和中文文件名 */
export function sm(name: "do_Storage"): DoStorage;
/** 目前支持桌面快捷菜单，最多只能添加4个；因苹果特性，该功能只有在第二次启动App时生效 */
export function sm(name: "do_3DTouch"): Do3DTouch;
/** Windows平台不支持 */
export function sm(name: "do_AccelerometerSensor"): DoAccelerometerSensor;
/** 调用手机支付宝客户端，完成支付功能，如果没装支付宝，则会调起H5的支付界面
需要平台项目配置唤醒id,唤醒id格式 alipay+appid（appid为阿里支付平台应用id） */
export function sm(name: "do_Alipay1"): DoAlipay1;
/** 用户通过传入商品ID，数量可以调起Apple支付界面，同时支持商品重复购买更新 */
export function sm(name: "do_AppleIAP"): DoAppleIAP;
/** 可用于模拟类似iOS设备的AssistiveTouch按钮，支持自定义样式和大小；android平台需要通过订阅page组件的pause和result事件来控制组件的显示和隐藏 */
export function sm(name: "do_AssistiveTouch"): DoAssistiveTouch;
/** 利用设备当前的GPS信息（GPS定位），基站信息（基站定位）和Wi-Fi信息（Wi-Fi定位）完成定位，根据设备当前的实际情况（如是否开启GPS，是否连接网络，是否扫描到Wi-Fi信息等）进行定位 */
export function sm(name: "do_BaiduLocation"): DoBaiduLocation;
/** 百度导航支持语音播报（使用语言播报，需要在导航TTS平台中进行注册申请），路线规划及导航
注意：使用该组件的时候，需要在IDE的后台模式管理中加入“音频播放”这个设置 */
export function sm(name: "do_BaiduNavigate"): DoBaiduNavigate;
/** 管理应用内缓存，windows平台不支持 */
export function sm(name:"do_CacheManager"):DoCacheManager
/** 指纹识别组件,iOS为基于系统touchID和密码识别验证,需要iPhone5s设备搭载iOS8以上系统,IOS touchID识别策略(系统原生框架识别策略,不可修改,可以对照支付宝查看。警告！：touchID验证为设备公用功能(设备解锁和所有app)，不要随意故意错误验证，多次错误验证失败后，设备将会被锁，而且锁定时间越来越长，最终可能导致设备永久锁定!!!。): Android系统要求大于6.0. Android是连续验证失败5次之后30秒内不能继续验证. */
export function sm(name:"do_FingerPrintRecognition"):DoFingerPrintRecognition
/** 绕x/y/z三轴旋转的三个角度取值范围为 ±180，其中角度的正负遵循右手原则，即右手大拇指伸直，其余四指握拳，大拇指指向数轴，手指指向的方向为正，相反为负 */
export function sm(name:'do_GyroSensor'):DoGyroSensor
export function ui(name: string): object;
export function mm(name: string): object;
