/*
 * @Author: your name
 * @Date: 2020-08-09 16:41:52
 * @LastEditTime: 2020-08-09 16:58:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\ui\do_ImageView.d.ts
 */
import { UiBasicInstance, ScaleType } from "../base/uiBase";

/**
 * - 1.为什么do_ImageView的touch事件无效？
 * do_ImageView缺省是用来加载图片，缺省是不支持点击的，有一个属性enable设置为true就可以了。
 */
export interface DoImageView extends UiBasicInstance{

    /**
     * 动画效果
     * 
     * 说明 : 加载图片时的动画效果，支持none没有动画效果和fade淡入淡出效果
     * @default none
     * @example var do_ImageView = ui("do_ImageView_1");  //实例化
                do_ImageView.animation = "fade"; //fade淡入淡出效果
     */
    animation:string

    /**
     * 网络初始化图片
     * 
     * 说明 : 当加载一个网络图片比较慢的时候，先显示这个图片，生命周期为从开始加载网络图片到完全正确加载完网络图片为止；支持data://和source://
     * @example do_ImageView.defaultImage = "source://view/do_ImageCropView/image/1.jpg";
     */
    defaultImage:string

    /**
     * 圆角半径
     * 
     * 说明 : 像素值，为0时表示不是圆角图片；当同时设置了border属性，则radius属性失效（已废弃，建议使用border属性）
     * @default 0
     * @example do_ImageView.border = "ffffffff,1,[175,175,175,175]"
     * 下图为未设置border和设置border为”ffffffff,1,[175,175,175,175]”的效果图。
     * @link {http://www.appworker.net/awdoc/web/img/20180329/2d288186e05f4d5b883685da717a8573.png}
     * @link {http://www.appworker.net/awdoc/web/img/20180329/f778903c19d943e6b8671517566b3f56.png}
     */
    radius:number

    /**
     * 是否可点击
     * 
     * 说明 : 缺省为false，控制imageview是否可点击，如果enabled为true，则imageview是可以点击的，否则不可点击
     * @example do_ImageView.enabled = true; //可点击
     */
    enabled:boolean

    /**
     * 图片路径
     * 
     * 说明 : 可设置网络或本地文件，支持：http:// https:// data:// source:// 打头的URI格式，不能包含@符号。其中文件格式说明可参考Storage类
     * @example do_ImageView.source = "http://photocdn.sohu.com/20161128/Img474303098.jpg?qq-pf-to=pcqq.discussion"; //网络图片
     */
    source:string

    /**
     *  图片显示类型
     */
    scale:ScaleType

    /**
     * 是否支持网络图片的本地cache
     * 
     * 编辑类型 : 只允许设计区内修改。
     * 
     * 说明 : 只有当imageview的source是http或者https的网络图片时，这个属性才有意义
     */
    cacheType:string

    /**
     * 绑定bitmap对象
     * @param bitmap 
     * @example var bitmap = mm("do_Bitmap");do_ImageView.setBitmap(bitmap);
     */
    setBitmap(bitmap:string)

    /**
     * 
     * @param eventName 
     * @param listen 
     * @example 
     * //点击图片给图片增加"AppWork"水印,并将imageview组件赋值为新增加水印的图片。写的时候记得将do_ImageView组件绑定bitmap对象，即setBitmap方法。
        do_ImageView.on("touch",function(){
        //支持添加文本水印和图片水印，添加水印之前必须先loadFile
            bitmap.loadFile(do_ImageView.source, function(data, e) {
                if (data) {
                    bitmap.addWatermark("text", "AppWork", 50, 20, "8080FFFF", "bold", "underline",80, function(_data, e) {
                        if (_data) {
                            var _image = "data://save/" + sm("do_Global").getTime() + ".png";
                            bitmap.save("PNG", 100, _image, function(bitmap_image, e) {
                                if (bitmap_image) {
                                    do_ImageView.source = bitmap_image;
                                    print(bitmap_image);
                                };
                            });
                        };
                    });
                };
            });
        });
        @link {http://www.appworker.net/awdoc/web/img/20180329/653f2fd7f2e148179544c6bb1f4e3d3c.png}
     */
    on(eventName:'touch',listen:()=>void):void
}