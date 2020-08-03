import { SmBasicInstance } from "./smBase";

type ReadEncodingType='utf-8'|'gbk'
interface ReadFileParams{
    /** 文件名 */
    path:string
    /** 是否以加密方式读取文件，如果操作的是data://security目录，则该属性无效，默认解密  defaultvalue=false*/
    isSecurity?:boolean
    /** 读文件的编码格式，暂只支持utf-8和gbk两种 defaultvalue=utf-8 */
    encoding?:ReadEncodingType
} 
interface WriteFileParams{
    /** 文件名 */
    path:string
    /** 要写入的文件内容字符串 */
    data:string
    /** 是否以加密方式写文件，如果操作的是data://security目录，则该属性无效，默认加密 */
    isSecurity?:boolean
    /** 写文件的编码格式，暂只支持utf-8和gbk两种 */
    encoding?:ReadEncodingType
    /** 是否以追加方式写文件，如果操作的是data://security目录或isSecurity=true，则该属性无效，默认不追加 */
    isAppend?:boolean
}
interface FileParams{
    /** 只能是data://打头 */
    source:string
    /** 压缩后文件名，需要具体指定到文件名，只能是data://打头 */
    target:string
}

interface FilesParams{
    /** 可支持压缩不在同一目录下的文件，只需指定文件路径，只能是data://打头 */
    source:Array<string>
    /** 压缩后文件名，需要具体指定到文件名，只能是data://打头 */
    target:string
}
export interface DoStorage extends SmBasicInstance{
    /**
     * 判断目录是否存在
     * @param path 
     * @returns 返回true为存在，false为不存在
     * @example var dataa = do_Storage.dirExist({path:"data://test"})
                print(dataa,"目录是否存在")
     */
    dirExist(path:string):boolean
    dirExist(params:{path:string}):boolean

    /**
     * 判断文件是否存在
     * @param path 
     * @example var datab = do_Storage.fileExist({path:"data://test/a.txt"});
                print(datab,"文件是否存在")
     */
    fileExist(path:string):boolean
    fileExist(params:{path:string}):boolean

    /**
     * 读取文件内容
     * @param path 
     * @example do_Storage.readFile({path:"data://a1/1.txt"}, function(data, e) {
                print(data,"文件内容")
                })
     */
    readFileSync(path:string):string
    readFileSync(params:ReadEncodingType):string

    /**
     * 获取文件大小
     * @param path 
     * @returns 返回获取到的文件大小，单位为字节，若path为一个目录或不存在的文件，则返回0
     * @example var datad = do_Storage.getFileSize({path:"data://b2/2.docx"});
                print(datad,"文件大小")
     */
    getFileSize(path:string):string
    getFileSize(params:{path:string}):string

    /**
     * 获取文件列表 
     * @param path 
     * @param listen 
     * @returns 返回是一个JSON Array，里面是文件名的列表，比如[“1.txt”,”2.png”,…]直接返回path下的文件路径
     * @example do_Storage.getFiles({path:"data://b2"}, function(data, e) {
                print(data,"文件列表")
                    })
     */
    getFiles(path:string,listen:(data:Array<string>)=>void):void
    getFiles(params:{path:string},listen:(data:Array<string>)=>void):void

    /**
     * 获取目录列表
     * @param path 
     * @param listen 
     * @returns 返回是一个JSON Array，里面是文件目录的列表，比如[“1”,”2”,…]直接返回path下的目录路径
     * @example do_Storage.getDirs({path:"data://"}, function(data, e) {
          print(JSON.stringify(data),"目录列表")
      })
     */
    getDirs(path:string,listen:(data:Array<string>)=>void):void
    getDirs(params:{path:string},listen:(data:Array<string>)=>void):void

    /**
     * 删除指定目录以及这个目录下所有目录和文件
     * @param path 
     * @param listen 
     * @returns true或者false表明删除目录是否存在，即要删除的文件是否不存在，不存在会返回true
     * @example do_Storage.deleteDir({path:"data://copy"}, function(data, e) {
  print(data,"目录是否存在")
      })
     */
    deleteDir(path:string,listen:(data:boolean)=>void):void
    deleteDir(params:{path:string},listen:(data:boolean)=>void):void

    /**
     *  删除指定文件
     * @param path 
     * @param listen 
     * @returns true或者false表明删除文件是否存在，即要删除的文件是否不存在，不存在会返回true
     * @example do_Storage.deleteFile({path:"data://zipFile.zip"}, function(data, e) {
      print(data,"删除结果")
      })
     */
    deleteFile(path:string,listen:(data:boolean)=>void):void
    deleteFile(params:{path:string},listen:(data:boolean)=>void):void

    /**
     * 读取文件内容
     * @param params 
     * @param listen 
     * @example do_Storage.readFile({path:"data://a1/1.txt"}, function(data, e) {
      print(data,"文件内容")
      })
     */
    readFile(params:ReadFileParams,listen:(data:string)=>void):void

    /**
     *  写文件
     * 说明: 把指定字符串写入指定文件，完全覆盖
     * @param params 
     * @param listen 
     * @example do_Storage.writeFile({path:"data://b2/2.docx", data:"222"}, function(data, e) {
      print(data,"写入文件是否成功")
      })
     */
    writeFile(params:WriteFileParams,listen:(data:boolean)=>void):void

    /**
     * 压缩文件或目录
     * @param params 
     * @param listen 
     * @returns true/false表明压缩是否成功
     * @example do_Storage.zip({source:"data://", target:"data://zipAll.zip"}, function(data, e) {
                print(data,"压缩结果")
                })
     */
    zip(params:FileParams,listen:(data:boolean)=>void):void

    /**
     * 压缩多个文件
     * @param params 
     * @param listen 
     * @example do_Storage.zipFiles({source:["data://a1/1.txt","data://b2/2.docx"], target:"data://zipFile.zip"}, function(data, e) {
      print(data,"压缩结果")
      })
     */
    zipFiles(params:FilesParams,listen:(data:boolean)=>void):void

    /**
     * 解压缩文件
     * 不支持data://security目录
     * @param params 
     * @param listen 
     * @example do_Storage.unzip({source:"data://zipFile.zip", target:"data://security/unzip"}, function(data, e) {
      print(data,"解压缩结果")
      })
     */
    unzip(params:FileParams,listen:(data:boolean)=>void):void

    /**
     * 拷贝文件
     * @param params 
     * @param listen 
     * @example do_Storage.copy({source:["data://a1/1.txt","data://b2/2.docx"], target:"data://security/a/"}, function(data, e) {
      print(data,"拷贝结果")
      })
     */
    copy(params:FilesParams,listen:(data:boolean)=>void):void

    /**
     * 拷贝文件
     * 说明：拷贝后的目标文件，需要为全路径，不支持data://security目录  
     * @param params 
     * @param listen 
     * @example do_Storage.copyFile({source:"data://b2/3.txt", target:"data://security/b/3.txt"}, function(data, e) {
      print(data,"拷贝结果")
      })
     */
    copyFile(params:FileParams,listen:(data:boolean)=>void):void

}