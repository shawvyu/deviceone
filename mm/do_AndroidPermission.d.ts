/*
 * @Author: your name
 * @Date: 2020-08-08 21:46:45
 * @LastEditTime: 2020-08-08 21:56:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_AndroidPermission.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";

/**
 * Android 6.0 (API 23) 之前应用的权限在安装时全部授予，运行时应用不再需要询问用户。在 Android 6.0 或更高版本对权限进行了分类，对某些涉及到用户隐私的权限可在运行时根据用户的需要动态授予。这样就不需要在安装时被强迫同意某些权限。涵盖应用需要涉及用户隐私信息的数据或资源，或者可能对用户存储的数据或其他应用的操作产生影响的区域。例如: 读取通讯录、读写存储器数据、获取用户位置等。如果应用声明需要这些危险权限，则必须在运行时明确告诉用户，让用户手动授予。更多关于权限的描述请点击
 * @link {https://blog.csdn.net/St_Chan/article/details/74738597}
 * 组件	需要申请的权限
 * do_Audio	android.permission.RECORD_AUDIO，android.permission.READ_MEDIA_AUDIO
 * do_BaiduMapView	android.permission.ACCESS_FINE_LOCATION，android.permission.ACCESS_COARSE_LOCATION
 * do_BaiduLocation	android.permission.ACCESS_FINE_LOCATION，android.permission.ACCESS_COARSE_LOCATION
 * do_BaiduNavigate	android.permission.ACCESS_FINE_LOCATION，android.permission.ACCESS_COARSE_LOCATION
 * do_BarcodeView	android.permission.CAMERA
 * do_Camera	android.permission.CAMERA
 * do_Contact	android.permission.WRITE_CONTACTS，android.permission.GET_ACCOUNTS，android.permission.READ_CONTACTS
 * do_Device	android.permission.ACCESS_FINE_LOCATION，android.permission.ACCESS_COARSE_LOCATION，android.permission.READ_PHONE_STATE，android.permission.CAMERA，android.permission.ACCESS_BACKGROUND_LOCATION，android.permission.READ_PRIVILEGED_PHONE_STATE
 * do_ImageBrowser	android.permission.READ_MEDIA_IMAGES
 * do_InitData	android.permission.READ_EXTERNAL_STORAGE，android.permission.WRITE_EXTERNAL_STORAGE（当申明了WRITE_EXTERNAL_STORAGE权限时， READ_EXTERNAL_STORAGE权限会自动添加的。）
 * do_iFlyVoice	android.permission.RECORD_AUDIO
 * do_Storage	android.permission.READ_EXTERNAL_STORAGE，android.permission.WRITE_EXTERNAL_STORAGE
 * do_JPush	android.permission.READ_PHONE_STATE
 * do_Network	android.permission.READ_PHONE_STATE
 * do_SMSVerificationCode	android.permission.READ_SMS，android.permission.RECEIVE_SMS，android.permission.READ_PHONE_STATE
 * do_SysCalendar	android.permission.READ_CALENDAR，android.permission.WRITE_CALENDAR
 * do_UMengAnalytics	android.permission.READ_PHONE_STATE
 * do_VideoRecord	android.permission.CAMERA，android.permission.RECORD_AUDIO
 */
export interface DoAndroidPermission extends MmBasicInstance {
  /**
   * 检查是否授权
   * ios检查返回undefined
   * @param name 权限名
   * @returns 是否授权(0表示允许，-1表示不允许)
   */
  check(name: string): number;

  /**
   * 申请权限
   * @param names 支持一次性申请多个权限的，系统会通过对话框逐一询问用户是否授权
   * @param code 请求码（用于区别是哪一次请求的）
   */
  request(names: Array<string>, code: string): void;

  /**
   * 解释授权（判断用户是否第一次拒绝授权）
   * @param name 权限名
   * @returns 用户是否第一次拒绝授权
   */
  rationale(name: string): boolean;

  /**
   * 请求结果事件
   * @param eventName
   * @param listen
   * @returns code跟request方法里面的code相对应，grantResults相对应申请的多个请求的返回结果，0表示同意授权，否则为拒绝 示例:{code:10000,grantResults:[0,-1]}
   */
  on(eventName: "result", listen: (data: object) => void): void;
}
