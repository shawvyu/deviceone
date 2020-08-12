import { UiBasicInstance } from "../base/uiBase";

export interface DoPDFView extends UiBasicInstance{

    /**
     * 打开的pdf文件路径
     * 
     * 说明 : 支持data://与source://目录
     * @example
     * var do_PDFView = ui("do_PDFView_1");  //实例化
     * do_PDFView.url = "source://view/do_PDFView/text.pdf";
     */
    url:string

    /**
     * 总共页数以及当前页数
     * 
     * @example
     * do_PDFView.getPageCount();
     *   {
            "total": "100",
            "current":"2"
         }
     */
    getPageCount():object

    /**
     * 下一页
     */
    next():void

    /**
     * 上一页
     */
    prev():void

    /**
     * 跳转到指定页
     * @param page 
     * @example
     * var page_count = 3;   
     * do_PDFView.jump(page_count);    //number类型
     */
    jump(page:number):void

    /**
     * 页面切换时触发
     * @param eventName 
     * @param listen 
     * @returns {object}  {"total": "100","current":"2"}
     * @example
     * do_PDFView.on("pageChanged", function(data) {    appworker.print(JSON.stringify(data));})
     */
    on(eventName:'pageChanged',listen:(data:object)=>void):void
}