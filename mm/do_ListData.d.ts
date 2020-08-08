/*
 * @Author: your name
 * @Date: 2020-08-08 18:33:36
 * @LastEditTime: 2020-08-08 18:48:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\mm\do_ListData.d.ts
 */
import { MmBasicInstance } from "../base/mmBase";

interface RangeParams{
    /** 从0开始，fromIndex必须小于或等于toIndex */
    formIndex:number
    /** 截止索引位置(可选项)，从0开始; 如果为空，则表示数组的最后一个元素位置 */
    toIndex?:number
}
export interface DoListData extends MmBasicInstance{
    /**
     * 获取数量
     * @example var count = do_ListData.getCount()
     */
    getCount():number

    /**
     * 获取多条数据
     * 
     * 说明: indexs数组中的每一个值表示要读取的索引位置，从0开始;其它越界的索引位置都返回null
     * @param indexs 表示需要得到的索引队列;如[0,2,3,4,6]
     * @example //获取第0,1,2条数据
                var data1 = do_ListData.getData({indexs:[0,1,2]})
     */
    getData(indexs:Array<number>):string
    getData(param:{indexs:Array<number>}):string

    /**
     * 获取某一行数据
     * 
     * 说明: 根据index获取特定行的数据，从0开始; 如果index参数小于0则取数组第一个元素；如果 index参数越界，则返回数组最后一个元素（如果数据源为空则返回null）
     * @param index 
     * @example var data2 = do_ListData.getOne({index:0})
     */
    getOne(index:number):string|null
    getOne(param:{index:number}):string|null

    /**
     * 获取多条数据
     * 
     * 说明: 从起始索引到截止索引，获取多条数据
     * @param params 
     * @example var datas = do_ListData.getRange({fromIndex:0,toIndex:2})
     */
    getRange(params:RangeParams):object

    /**
     * 增加数据
     * 
     * 说明: 在list增加一个或多个数据，index是可选参数，如果该参数不填表示插入到队列最尾
     * @param data 要插入的数据
     * @param index 表示要添加的位置，从0开始; 如果 index参数为空或者越界, 就添加到数组最后面
     * @example var data = [{template:0,"text":"1"},
                        {template:0,"text":"2"},
                        {template:0,"text":"3"},
                        {template:0,"text":"5"},
                        {template:0,"text":"6"},
                        {template:0,"text":"7"}]
                do_ListData.addData({data:data})
     */
    addData(data:object,index?:number):void
    addData(params:{data:object,index?:number}):void

    /**
     * 插入一条数据
     * 
     * 说明: 在list增加一条数据，index是可选参数，表示要添加的位置，从0开始; 如果 index参数为空或者越界, 就添加到数组最后面
     * @param data 向数据集添加一条数据，该数据可为String,Number,Boolean, Array, Object.(能够被JSON.stringify序列化的类型)
     * @param index 插入索引
     * @example var dataa = {"text":"8"}
                do_ListData.addOne({data:dataa})
     */
    addOne(data:object,index?:number):void
    addOne(params:{data:object,index?:number}):void

    /** 
     * 清空数据
     * @example do_ListData.removeAll()
     */
    removeAll():void

    /**
     * 删除指定行数据
     * 
     * 说明: 从起始索引到截止索引删除多条数据
     * @param params 
     * @example //删除从0到6,共7条数据
                do_ListData.removeRange({fromIndex:0,toIndex:6})
     */
    removeRange(params:RangeParams):void

    /**
     * 删除特定行的对象
     * 
     * 说明: 根据多个index删除多条数据
     * @param indexs 
     * @example do_ListData.removeData({indexs:[0]})
     */
    removeData(indexs:Array<number>):void
    removeData(params:{indexs:Array<number>}):void

    /**
     * 更新一条数据
     * 
     * 说明: 更新特定行的数据，index表示要修改的位置，从0开始; 如果index参数为空或者越界就什么都不改
     * @param index 
     * @param data 
     * @example datab = {text:"100"}
                do_ListData.updateOne({index:0,data:datab})
     */
    updateOne(index:number,data:string):void
    updateOne(params:{index:number,data:string}):void
}