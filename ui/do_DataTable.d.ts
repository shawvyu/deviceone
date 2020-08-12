import { UiBasicInstance, FontStyle, TextFlag } from "../base/uiBase";


/**
 * 所有的样式设置完必须再掉一次setRowData
 */
export interface DoDataTable extends UiBasicInstance{
    /**
     * 是否显示表头
     * 
     * 说明 : 如果显示表头的话，表头是不会随表格上下滑动的时候滑动的
     * @default true
     * @example
     * // 实例化
        var do_DataTable = ui("do_DataTable_1");
        //表头不显示
        do_DataTable.isHeaderVisible = false;
        //表头显示
        do_DataTable.isHeaderVisible = true;
     */
    isHeaderVisible:boolean

    /**
     * 冻结的列个数
     * 
     * 编辑类型 : 只允许设计区内修改。
     * 
     * 说明 : 只允许从左到右数起的列被冻结，左右滑动的时候固定不动
     * @default 1
     */
    freezeColumn:number

    /**
     * 设置表头样式
     * @param width [100] 可以全局设置，如：100; 也可以支持对每列设置，格式为一个JsonArray，如：[100,50,40,50]，需与表头列数对应
     * @param height [80]
     * @param bgColor [00000000] 设置背景显示颜色，值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF
     * @param fontColor [000000FF] 设置字体显示颜色，值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF
     * @param fontStyle [normal] 
     * @param textFlag [normal]
     * @param fontSize [17]
     * 
     * @example
     * //1.宽度格式为JsonArray格式
        //（设置表头每列宽度不一,高度80,背景红色,字体蓝色,斜体,常规字体大小26）
        do_DataTable.setHeaderStyle([
            "70",
            "100",
            "100",
            "100",
            "100",
            "100",
            "100",
            "100"
        ],
        "80",
        "FF0000FF",
        "FFFFFFFF",
        "italic",
        "normal",
        26
        );
        do_DataTable.setRowData([]); //所有的样式设置完必须再掉一次setRowData
        //宽度格式为字符串格式
        //设置表头每列宽度100,高度100,背景透明度为50的红色,字体为蓝色,粗斜体,删除线,字体大小26）
        do_DataTable.setHeaderStyle(
        "100",
        "80",
        "FF000050",
        "0080FFFF",
        "bold_italic",
        "strikethrough",
        26
        );
        do_DataTable.setRowData([]);//所有的样式设置完必须再掉一次setRowData
     */
    setHeaderStyle(width?:string,height?:string,bgColor?:string,fontColor?:string,fontStyle?:FontStyle,textFlag?:TextFlag,fontSize?:number):void
    setHeaderStyle(params:{width?:string,height?:string,bgColor?:string,fontColor?:string,fontStyle?:FontStyle,textFlag?:TextFlag,fontSize?:number}):void

    /**
     * 设置表头数据
     * @param data ["姓名","性别","年龄"...]
     * @example
     * do_DataTable.setHeaderData([
            "课程",
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
            "周天"
        ]);
        do_DataTable.setRowData([]);//所有的样式设置完必须再掉一次setRowData
     */
    setHeaderData(data:object):void

    /**
     * 设置数据样式
     * 
     * 说明:注：设置数据样式后，需要在重新设置表格数据,即调用do_DataTable.setRowData()设置数据，否则设置样式会不起作用;
     * @param height [80]
     * @param bgColor [[“00000000”]] 设置背景显示颜色，值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF，可以支持2个颜色，也可以支持一个颜色，2个颜色比如[“000000FF”,“FFFFFFFF”]表示奇数偶数行的背景色是可以不同的
     * @param fontColor [000000FF] 设置字体显示颜色，值格式为：8位16进制字符，前6位是RGB颜色值，后两位是透明度（Alpha），例如：000000FF
     * @param fontStyle [normal]
     * @param textFlag [normal]
     * @param fontSize [17]
     * @example
     * do_DataTable.setRowStyle("80", ["0080FFFF","FF0000FF"], "FFFFFFFF", "normal", "normal",30);
        var lists = [
                [ "1", "班级会", "数学", "数学", "化学", "音乐", "化学","物理" ],
                [ "2", "语文", "语文", "地理", "数学", "美术", "生物","数学" ],
                [ "3", "英语", "体育", "生物", "美术", "体育", "语文","英语" ],
                [ "4", "物理", "化学", "历史", "体育", "语文", "物理","地理" ],
                [ "午休", "", "", "", "", "", "","" ],
                [ "1", "英语", "体育", "生物", "美术", "体育", "语文","英语" ],
                [ "2", "物理", "化学", "历史", "体育", "语文", "物理","地理" ]
            ];
        do_DataTable.setRowData(lists);
        @link {http://www.appworker.net/awdoc/web/img/20180507/f2ccd5f3f33d4ede957d68a038f1b537.png}
     */
    setRowStyle(height?:string,bgColor?:Array<string>,fontColor?:string,fontStyle?:FontStyle,textFlag?:TextFlag,fontSize?:number):void

    /**
     * 设置表格数据
     * @param data 数据可以是data://目录文件，也可以是一个JSON array二维表格式字符串
     * @example
     * var lists = [
                [ "1", "班级会", "数学", "数学", "化学", "音乐", "化学","物理" ],
                [ "2", "语文", "语文", "地理", "数学", "美术", "生物","数学" ],
                [ "3", "英语", "体育", "生物", "美术", "体育", "语文","英语" ],
                [ "4", "物理", "化学", "历史", "体育", "语文", "物理","地理" ],
                [ "午休", "", "", "", "", "", "","" ],
                [ "1", "英语", "体育", "生物", "美术", "体育", "语文","英语" ],
                [ "2", "物理", "化学", "历史", "体育", "语文", "物理","地理" ]
            ];
        do_DataTable.setRowData(lists);
     */
    setRowData(data:string):void

    /**
     * 
     * @param data 是一个数组
     * 
     * 说明:注：其中row,column都从0开始,代表第一行第一列,以此类推。格式如下：
     * 
     * @example
     * do_DataTable.setCellDatas([
            {
                row: 0,
                column: 0,
                text: "第一行第一列",
                style: {
                    bgColor: "FF8040FF",
                    fontColor: "0080FFFF",
                    fontStyle: "normal",
                    textFlag: "strikethrough",
                    fontSize: "20"
                }
            },
            {
                row: 1,
                column: 1,
                text: "第二行第二列",
                style: {
                    bgColor: "FF8040FF",
                    fontColor: "0080FFFF",
                    fontStyle: "bold",
                    textFlag: "normal",
                    fontSize: "25"
                }
            }
        ])

        [
            {
                row: 第几行,
                column: 第几列,
                text: 文本内容,
                style: {
                    bgColor: '背景颜色',
                    fontColor: '字体颜色',
                    fontStyle: '字体风格',
                    textFlag: '字体标示',
                    fontSize: '字体大小'
                }
            },
            {
                ...
            }
        ]
        @link {http://www.appworker.net/awdoc/web/img/20180507/36b4e959b74b430985b033bed16c247a.png}
     */
    setCellDatas(data:Array<object>):void

    /**
     * 长按单元格触发
     * @param eventName 
     * @param listen 
     * @returns 当前单元格的位置（不含表头）{row:第几行,column:第几列}
     * @example
     * do_DataTable.on("longTouch", function(data) {
            print(JSON.stringify(data));
        })
     */
    on(eventName:'longTouch',listen:(data:object)=>void):void
    /**
     * 点击单元格触发
     * @param eventName 
     * @param listen 
     * @returns 当前单元格的位置（不含表头）{row:第几行,column:第几列}
     * @example
     * do_DataTable.on("touch", function(data) {
            print(JSON.stringify(data));
        })
     */
    on(eventName:'touch',listen:(data:object)=>void):void


}