import { SmBasicInstance } from "../base/smBase";

interface ZipParams{
    /** 只能是initdata://打头 */
    source:string
    /** 压缩后文件名，需要具体指定到文件名，只能是data://打头 */
    target:string
}

interface FilesParams{
    /** 可支持压缩不在同一目录下的文件，只需指定文件路径，只能是initdata://打头 */
    source:Array<string>
    /** 压缩后文件名，需要具体指定到文件名，只能是data://打头 */
    target:string
}

export interface DoInitData extends SmBasicInstance{
    /**
     * 判断目录是否存在
     * @param path 只能是initdata://打头
     * @returns 返回true为存在，false为不存在
     * @example var a = do_InitData.dirExist({path:"initdata://test1"});
                print(a,"test1文件夹是否存在")
     */
    dirExist(path:string):boolean
    dirExist(params:{path:string}):boolean

    /**
     * 判断文件是否存在
     * @param path 只能是initdata://打头
     * @returns 返回true为存在，false为不存在
     * @example var data = do_InitData.fileExist({path:"initdata://test1/c.docx"});
                print(datab,"a.docx是否存在")
     */
    fileExist(path:string):boolean
    fileExist(params:{path:string}):boolean

    /**
     *  读取文件内容
     * @param path 文件名，只能是initdata://打头
     * @returns 返回读取到的指定文件的内容
     * @example var datac = do_InitData.readFileSync({path:"initdata://test2/b.txt"});
                print(datac,"文件内容")
     */
    readFileSync(path:string):string
    readFileSync(param:{path:string}):string

    /**
     *  获取文件列表
     * @param path 只能是initdata://打头
     * @returns 返回是一个JSON Array，里面是文件名的列表，比如[“1.txt”,”2.png”,…]直接返回path下的文件路径
     * @example do_InitData.getFiles({path:"initdata://test2/"}, function(data, e) {
                    print(JSON.stringify(data),"文件名列表")
                })
     */
    getFiles(path:string,listen:(data:Array<string>)=>void):void
    getFiles(params:{path:string},listen:(data:Array<string>)=>void):void
    /**
     * 获取目录列表
     * @param path 只能是initdata://打头
     * @param listen 
     * @returns 返回是一个JSON Array，里面是文件目录的列表，比如[“1”,”2”,…]直接返回path下的目录路径
     * @example do_InitData.getDirs({path:"initdata://"}, function(data, e) {
                print(JSON.stringify(data),"目录列表")
                    })
     */
    getDirs(path:string,listen:(data:Array<string>)=>void):void
    getDirs(params:{path:string},listen:(data:Array<string>)=>void):void

    /**
     * 读取文件内容
     * @param path 文件名，只能是initdata://打头
     * @param listen 
     * @returns 返回读取到的指定文件的内容
     * @example do_InitData.readFile({path:"initdata://test2//b.txt"}, function(data, e) {
                print(data,"文件内容")
                    })
     */
    readFile(path:string,listen:(data:string)=>void):void
    readFile(params:{path:string},listen:(data:string)=>void):void

    /**
     * 压缩文件或目录
     * @param params 
     * @param listen 
     * @returns true/false表明压缩是否成功
     * @example do_InitData.zip({source:"initdata://test1/a.txt", target:"data://SM/do_InitData/a.zip"}, function(data, e) {
                print(data,"压缩结果")
                    })
     */
    zip(params:ZipParams,listen:(data:boolean)=>void):void

    /**
     * 压缩多个文件
     * @param params 
     * @param listen 
     * @example do_InitData.zipFiles({source:["initdata://a.txt","initdata://test2/b.txt"], target:"data://SM/do_InitData/all.zip"}, function(data, e) {
                print(data,"压缩结果")
                    })
     */
    zipFiles(params:FilesParams,listen:(data:boolean)=>void):void

    /**
     * 解压缩文件
     * @param params 
     * @param listen 
     * @example do_InitData.unzip({source:"initdata://SP.zip", target:"data://SM/do_InitData/unzip"}, function(data, e) {
                print(data,"压缩结果")
                    })
     */
    unzip(params:ZipParams,listen:(data:boolean)=>void):void

    /**
     * 拷贝文件
     * @param params 
     * @param listen 
     * @example do_InitData.copy({source:["initdata://test1/a.txt","initdata://test2/b.txt"], target:"data://SM/do_InitData/copy"}, function(data, e) {
                print(data,"拷贝结果")
                    })
     */
    copy(params:FilesParams,listen:(data:boolean)=>void):void

    /**
     *  拷贝文件  
     * @param params 
     * @param listen 
     * @example do_InitData.copyFile({source:"initdata://test1/a.txt", target:"data://SM/do_InitData/copy/aa.txt"}, function(data, e) {
                print(data,"拷贝解雇")
                    })
     */
    copyFile(params:ZipParams,listen:(data:boolean)=>void):void
}