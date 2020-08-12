import { UiBasicInstance } from "../base/uiBase";

/**
 * 1.不同图标库聚合到一起的时候,同样的size下显示的大小不相同
 * 2.下载的.ttf文件名,要与项目名一样,否则会报错
 * 3.使用该组件需要先查看”基本配置”,按照”基本配置”进行操作，注：配置完成后增加（图）库之后需要重新打调试包
 * 
 * 1.首先登陆http://www.iconfont.cn 网站
 * 2.找到合适的图标后添加到库image.png
 * @link {http://www.appworker.net/awdoc/web/img/20180611/c0361574d838439ea93cc7fb38474c3d.png}
 * 3.添加完成的图标会显示在网站右上角的购物车中，点开后右侧弹出模态框就能看到我们挑选的图标了，然后添加至项目image.png
 * @link {http://www.appworker.net/awdoc/web/img/20180611/30250f0a994f414b866256a1c0d21ad7.png}
 * @link {http://www.appworker.net/awdoc/web/img/20180611/4b296a7d9ba64084a6907ca43c30c194.png}
 * 4.可以添加到已存在的项目中或新建一个项目image.png
 * @link {http://www.appworker.net/awdoc/web/img/20180611/4b296a7d9ba64084a6907ca43c30c194.png}
 * 5.添加完后就可以在我的项目中看到了image.png
 * @link {http://www.appworker.net/awdoc/web/img/20180611/141febd691f2482b95d642dea27c3ffa.png}
 * 6.工程中我们的代码对应上字库对应图标代码就可以了
 * @link {http://www.appworker.net/awdoc/web/img/20180611/3051c3b4aaaf4605b9280abc3596fe45.png}
 */
export interface DoIconFont extends UiBasicInstance{

    /**
     * 字体颜色
     * 
     * 说明 : 获取或设置控件前景色，为8位16进制整数，前6位为rgb颜色值，后两位为透明度
     * @default 000000FF
     * @example
     * //组件实例化
        var do_IconFont = ui("do_IconFont_1");
        do_IconFont.iconColor = "FF0000FF";
     */
    iconColor:string

    /**
     * 字体大小
     * @default 17
     * @example do_IconFont.iconSize = 300;
     */
    iconSize:number

    /**
     * 字体名称
     * 
     * 说明 : 创建UIFont使用的是字体名，解压缩下载的字库包，双击打开“iconfont.ttf”，取字体名称项即可（Android平台取得是.ttf文件名，所以在DO平台上传的.ttf文件需要保持跟iconfont.ttf文件中字体名称同名）
     * @example do_IconFont.iconName = "IconFont";
     */
    iconName:string

    /**
     * 字库对应图标代码
     * 
     * 说明 : 解压缩下载的字库包，打开“demo_unicode.html”查找该字体名称下每个图标所对应的HTML实体Unicode码，一般为8位的Unicode字符，比如：“关闭”对应的HTML实体Unicode码为：，只需传递后四位字符即可
     * 
     * 下图为大小500,颜色为红色,编号为e6e0的展示效果。
     * @link {http://www.appworker.net/awdoc/web/img/20180507/393680e2ef2b4d30811547decf25aae2.png}
     * @example do_IconFont.iconCode = "e6e0";
     */
    iconCode:string

    /**
     * 点击触发
     * @param eventName 
     * @param listen 
     * @example
     * do_IconFont.on("touch",function(data){})
     */
    on(eventName:'touch',listen:()=>void):void
}