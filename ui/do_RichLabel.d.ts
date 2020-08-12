import { UiBasicInstance } from "../base/uiBase";

/**
 * font标签只支持color和face两个属性。支持自定义a标签点击事件，href要以#打头点击时会触发linkTouch事件，例如：AppWorker其他情况则不触发事件；如a标签href属性内容以http:或者https开头，会自动使用外部浏览器打开；以mail:打头，会自动使用外部邮箱打开；如果是tel:打头，会自动使用电话拨号打开；如果是sms:打头，会自动使用短信打开。Android要支持的标签更少一点，另外不支持css，总之不能把这个组件当成Webview组件来加载任意的html。只支持加载html内容，不支持直接加载一个html文件。Android下支持width，height都为-1，根据内容自动适应大小，ios只支持height为-1。
 */
export interface DoRichLabel extends UiBasicInstance{

    /**
     * 最大高度
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : label的height为－1的时候，label会根据text内容自动适配变高，但是不会高于maxHeight
     */
    maxHeight:number

    /**
     * 最大宽度
     * 
     * 编辑类型 : 只允许设计区内修改
     * 
     * 说明 : 设置文本框显示最大宽度值，只有在设置width属性值为-1时有效，否则不起作用；iOS平台不支持宽度设置为-1
     */
    maxWidth:number

    /**
     * 文本显示内容
     * 
     * 说明 : 显示标签文本，说明：设置HTML标签显示富文本内容
     * @link {http://www.appworker.net/awdoc/web/img/20180507/0c785fa4137d48609ce372ce2735b31e.png}
     * @example
     *   //实例化三个do_RichLabel组件
            var do_RichLabel_1 = ui("do_RichLabel_1");
            var do_RichLabel_2 = ui("do_RichLabel_2");
            var do_RichLabel_3 = ui("do_RichLabel_3");
            do_RichLabel_1.text = "<a href=\"http://www.appworker.net\">Visit AppWorker</a><h1>ljlkjljk</h1><a href = \"mailto:12345@126.com\">12345@126.com</a> jjjjjj <a href = \"tel:10086\">tel:10086</a> ddffeeff <a href = \"sms:10086\">sms:10086</a>";
            do_RichLabel_2.text = "<font color=red>This is a page with lots of URLs.</font> <a href=\"http://droidyue.com\">droidyue.com</a> "
                    + "This left is a very good blog. There are so many great blogs there. You can find what you want in that blog."
                    +"<a href='#aaa' id='linktouch'> 点击我</a>";
            do_RichLabel_3.text = "<img src='http://www.w3school.com.cn/i/eg_tulip.jpg'  alt='上海鲜花港' /><img src='source://view/do_RichLabel/2.jpg'  alt='img1' />";
     */
    text:string

    /**
     * 链接点击事件
     * @param eventName 
     * @param listen 
     * @returns 有时候用户需要在点击label里的某一段文字触发一个自定义的动作，比如 点击我 ，注意href的值必须是#开始。用户点击“点击我”这个link的时候会触发一个linkTouch事件，返回的data是一个JSON对象类型{value:’点击我’ href:’#aaa’, id:’xx’}。用户可以根据href的值不同case做不同的操作。
     * @example
     *   //通过linkTouch和回调回来的d来确定richlabel里的自定义点击事件
            do_RichLabel_1.on("linkTouch",function(data){
                appworker.print(JSON.stringify(data),"linkTouch事件")
            })
            //返回值示例如下：
            {
                "text":"点击我",
                "href":"#aaa",
                "id":"linktouch"
            }
     */
    on(eventName:'linkTouch',listen:(data:object)=>void):void
}