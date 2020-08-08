/*
 * @Author: your name
 * @Date: 2020-08-01 17:01:23
 * @LastEditTime: 2020-08-08 12:52:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\doContact.d.ts
 */

import { SmBasicInstance } from "../base/smBase";

interface ContactInfo {
  id: string;
  name?: string;
  phone?: Array<string>;
  email?: Array<string>;
}
interface ContactByIdParams {
  id: string;
}
interface ContactDataParams {
  /** 根据条件来模糊查询，目前支持的字段名称有：name(姓名)，phone(电话)，email(电子邮件) */
  value?: string;
  /** 支持[‘name’,’phone’,’email’]，如果参数为空则按全条件查询 */
  types?: Array<string>;
}
interface AddContactDataParams {
  /** 如：[{‘name’:’张三’,’phone’:’13922864549’,’email’:’xxx@appworker.com’}]，目前支持的字段名称有：name(姓名)，phone(电话)，email(邮箱) */
  paras: Array<ContactInfo>;
}
interface UpdateContactDataParams {
  id: string;
  paras: Array<ContactInfo>;
}
interface DeleteContactDataParams {
  /** 如果值为空(不是空数组)，就删除所有，否则就按照数组中的唯一标识依次删除 */
  ids?: Array<string>;
}
/** 针对通讯录的增删查改 */
export interface DoContact extends SmBasicInstance {
  /**
     * @description 根据id获取通讯录联系人信息
     * @param id 
     * @param listen 
     * @returns 根据联系人id查询的联系人信息，{‘id’:’1001’,’name’:’’,’phone’:[‘phone1’,’phone2’…],’email’:[‘email1’,’email2’…]}
     * @example do_Contact.getDataById({id:ID[0]}, function(data, e) {
                    print(JSON.stringify(data),"id0的联系人信息")
                });
     */
  getDataById(id: string, listen: (data: ContactInfo, e: Error) => void): void;
  getDataById(
    params: ContactByIdParams,
    listen: (data: ContactInfo, e: Error) => void
  ): void;

  /**
     * @description 根据name，phone，email的值来查询通讯录联系人信息，如果参数value为空，就获取所有联系人信息，支持模糊查询
     * @param params 
     * @param listen 
     * @returns 根据参数值，返回查询的联系人信息列表，[{‘id’:’1001’,’name’:’’,’phone’:[‘phone1’,’phone2’…],’email’:[‘email1’,’email2’…]},{‘id’:’1002’,’name’:’’,’phone’:[‘phone1’,’phone2’…],’email’:[‘email1’,’email2’…]}…]
     * @example   //查询所有姓李的联系人
                    do_Contact.getData({value:"李", types:["name"]}, function(data, e) {
                        print(JSON.stringify(data),"getData");
                    });
     */
  getData(
    params: ContactDataParams,
    listen: (data: Array<ContactInfo>, e: Error) => void
  ): void;
  getData(listen: (data: Array<ContactInfo>, e: Error) => void): void;

  /**
   * @description 添加联系人信息
   * @param paras 
   * @param listen 
   * @returns 返回添加一组联系人的唯一标识
   * @example var ID;
            do_Contact.addData({paras:[{'name':"张三",'phone':"10086",'email':"123appwork.com"}]}, function(data, e) {
                print(data,"添加联系人");
                ID = data;
            });
   */
  addData(
    paras: Array<ContactInfo>,
    listen: (data: string, e: Error) => void
  ): void;
  addData(
    params: AddContactDataParams,
    listen: (data: string, e: Error) => void
  ): void;

  /**
   * @description 修改联系人信息
   * @param params 
   * @param listen 
   * @returns true：成功，false：失败
   * @example do_Contact.updateData({id:ID[0], paras:[{'name':李四,'phone':"1006811",'email':""}]}, function(data, e) {
                    print(data,"修改是否成功");
                });
   */
  updateData(
    params: UpdateContactDataParams,
    listen: (data: boolean, e: Error) => void
  ): void;

  /**
   * @description 删除联系人信息
   * @param params 
   * @param listen 
   * @returns  true：成功，false：失败
   * @example do_Contact.deleteData({ids:[ID[0]]}, function(data, e) {
                    print(data,"删除是否成功");
                });
   */
  deleteData(
    params: DeleteContactDataParams,
    listen: (data: boolean, e: Error) => void
  ): void;
  deleteData(listen: (data: boolean, e: Error) => void): void;
}
