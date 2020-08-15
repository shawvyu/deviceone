import { UiBasicInstance } from "../base/uiBase";

export interface DoVerticalSlideView extends UiBasicInstance {
  /**
   * 是否支持手势滑动
   *
   * 说明 : 当属性值为true时，组件可通过手势上下滑动来切换页面；为false时，手势无法滑动，只能通过修改index来切换页面，windowsPC平台不支持
   * @default true
   */
  allowGesture: boolean;

  /**
   * 当前滑动UIView索引
   *
   * 说明 : 设置滑动视图索引值，默认为0
   * @default 0
   */
  index: number;

  /**
   * 显示视图对应UI模板文件
   *
   * 说明 : 可以设置一个或多个UI模板文件，值为String类型，多个模板之间分别用“,”分隔，例如：“source://view/temp/t0.ui, source://view/temp/t1.ui”
   */
  templates: string;

  /**
     * 绑定视图模板数据
     * 
     * 说明: 绑定数据类型为do_ListData实例
     * @param data 
     * @example
     * var listData1 = mm("do_ListData");
        var do_VerticalSlideView = ui("do_VerticalSlideView")
        var data1 = [
                            {template:0,"$text":"5"},
                            {template:1,"$text":"6"},
                            {template:2,"$text":"7"},
                            {template:3,"$text":"8"},
                            {template:4,"$text":"9"}
                        ];
        listdata1.addData(data1)
        do_VerticalSlideView.bindItems({data:listData1});
     * 
     */
  bindItems(data?: object): void;

  /**
   * 刷新数据
   * @example
   * do_VerticalSlideView.refreshItems()
   */
  refreshItems(): void;

  /**
     * 滑动显示当前视图后触发该事件
     * @param eventName 
     * @param listen 
     * @example
     * do_VerticalSlideView.on("indexChanged",function(data){
        appworker.print(data,"切换后的index")
        })
     */
  on(eventName: "indexChanged", listen: (data: number) => void): void;
}
