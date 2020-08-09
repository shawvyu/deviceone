/*
 * @Author: shawvyu
 * @Date: 2020-08-09 15:58:32
 * @LastEditTime: 2020-08-09 16:03:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\ui\do_FrameAnimationView.d.ts
 */
import { UiBasicInstance } from "../base/uiBase";

export interface DoFrameAnimationView extends UiBasicInstance {
  /**
     * 开始动画
     * @param data 
     * @param repeat [1] 默认值为1执行一次动画效果，小于0时表示无限循环，为0时表示没有动画效果,大于0表示动画效果重复的次数
     * @example   //1.开始动画,支持source://路径下的图片
                    var imgs = [];
                    for (var i = 1; i <= 8; i++) {
                        imgs.push({
                            path : "source://view/do_FrameAnimationView/image/" + i + ".png",
                            duration : 100
                        });
                    }
                    do_FrameAnimationView.startImages({data:imgs, repeat:-1}); //repeat值为-1表示无限循环           
                    //2.开始动画,支持data://路径下的图片
                    var source_images = [], target_images = [];
                        for (var i = 1; i <= 12; i++) {
                            source_images.push("initdata://" + i + ".png");
                        }
                        for (var i = 1; i <= 12; i++) {
                            target_images.push({
                                path : "data://gif/image/" + i + ".png",
                                duration : 100
                            });
                        }
                        if (!sm("do_Storage").fileExist("data://gif/image/12.png")) {
                        // data://gif/image/下不存在图片先拷贝图片
                            sm("do_InitData").copy(source_images, "data://gif/image/",
                                function(_d, e) {
                                    if (_d) { // 拷贝文件成功
                                        do_FrameAnimationView.startImages({
                                            data : target_images,
                                            repeat : -1
                                        });
                                    }
                                })
                        } else {
                            do_FrameAnimationView.startImages({
                                data : target_images,
                                repeat : -1
                            });
                        }
        @link {http://www.appworker.net/awdoc/web/img/20180329/cc44ea3585a14ffaaee921c1b8548fbd.png}
        @link {http://www.appworker.net/awdoc/web/img/20180329/27437d0e13ce4bcc8e369401b83fae59.png}
     */
  startImages(data: object, repeat?: number): void;
  startImages(params: { data: object; repeat?: number }): void;

  /**
     * 开始动画
     * @param data 图片支持data://, source://路径
     * @param repeat 默认值为1执行一次动画效果，小于0时表示无限循环，为0时表示没有动画效果,大于0表示动画效果重复的次数
     * @example //1.开始动画,支持source://路径下的gif图片
                do_FrameAnimationView.startGif({
                    data : "source://view/do_FrameAnimationView/image/timg.gif",
                    repeat : -1
                });
                //2.开始动画,支持data://路径下的gif图片
                if (!sm("do_Storage").fileExist("data://gif/pic.gif")) {
                //data路径下不存在gif图片，先拷贝
                sm("do_InitData").copyFile("initdata://pic.gif",
                        "data://gif/pic.gif", function(_d, e) {
                            if (_d) {
                                do_FrameAnimationView.startGif({
                                    data : "data://gif/pic.gif",
                                    repeat : -1
                                });
                            }
                        })
                } else {
                    do_FrameAnimationView.startGif({
                        data : "data://gif/pic.gif",
                        repeat : -1
                    });
                }
        @link {http://www.appworker.net/awdoc/web/img/20180329/571d8fc154ea43d291f8bc44985c7aa8.png}
        @link {http://www.appworker.net/awdoc/web/img/20180329/1de0938b908f49ad85f829389453f4c7.png}
     */
  startGif(data: object, repeat?: number): void;
  startGif(params: { data: object; repeat?: number }): void;

  /**
   * 结束动画
   * @example do_FrameAnimationView.stop();  //结束动画
   */
  stop(): void;
}
