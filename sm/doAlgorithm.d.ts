/*
 * @Author: your name
 * @Date: 2020-08-01 10:32:00
 * @LastEditTime: 2020-08-08 12:51:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\doAlgrithe.d.ts
 */

import { SmBasicInstance } from "../base/smBase";

type Base64Type = "encode" | "decode";

type Des3Type = "encrypt" | "decrypt";

type Sha1Type = "uppercase" | "lowercase";

type Md5Type = "string" | "file";

type EncodeType = "utf-8" | "GB2312";

type RsaType = 0 | 1;

type AlgorithmListen = (data: string | number, e: Error) => void;

interface Base64SyncParams {
  /** @description 目前支持两种类型，’encode’为编码、’decode’为解码 defaultValue=encode*/
  type?: Base64Type;
  /** @description */
  source?: string;
}

interface Base64Params extends Base64SyncParams {
  /** @description 支持两种’string’:字符串类型、 ‘file’：文件类型,如果是file类型的话，encode是把一个file读出内容编码为base64字符串，如果是decode的时候是把一个base64字符串解码为一个data://temp/随机名字的文件 */
  sourceType?: Md5Type;
}

interface Des3SyncParams {
  /** @description 3DES算法的key值，不支持小于24位 */
  key: string;
  /** @description 目前支持两种类型，’encrypt’为加密、’decrypt’为解密 defaultValue=encrypt */
  type?: Des3Type;
  source?: string;
}

interface Des3Params extends Des3SyncParams {}

interface Md5SyncParams {
  value?: string;
}

interface Md5Params {
  /** @description 目前支持两种类型，’string’为字符串类型、’file’为文件类型 defaultValue=string */
  type?: Md5Type;
  /** @description 如果type为’string’类型，是一个字符串的值；如果为’file’类型，这就是一个文件的路径，只支持data://数据区目录 */
  value?: string;
}

interface Sha1SyncParams {
  /** @description 目前支持两种类型，’uppercase’为加密后返回大写字母、’lowercase’为加密后返回小写字母 defaultValue=lowercase */
  type?: Sha1Type;
  value?: string;
}
interface Sha1Params extends Sha1SyncParams {}

interface Hex2StrParams {
  /** @description 用十六进制字符串表示的数据 */
  source: string;
  /** @description 指定编码格式，默认使用utf-8格式 */
  encoding?: EncodeType;
}
interface Hex2BinaryParams {
  /** @description 用十六进制字符串表示的数据 */
  source: string;
  /** @description 要保存的二进制文件全路径,支持data:// */
  path: string;
}
interface Xml2JsonParams {
  source: string;
}
interface RsaPublicParams {
  source: string;
  publicKey: string;
  /** @description 0为加密，1为解密 defaultvalue=0 */
  type?: RsaType;
}
interface RsaPrivateParams {
  source: string;
  privateKey: string;
  type?: RsaType;
}

/**
 * @description 包含一些常用的算法实现，包括md5算法、3DES算法、sha1安全哈希算法和Base64算法
 */
export interface DoAlgorithm extends SmBasicInstance {
  /** 
   * @description 同步的Base64算法，只支持字符串的处理 
   * @example var dataa = do_Algorithm.base64Sync({type:"encode", source:"123456abc"});
                print(dataa,"base64")
   * */
  base64Sync(base64Params: Base64SyncParams): string;
  base64Sync(): string;

  /**
   * @description 3DES算法
   * @param key 
   * @example var datab = do_Algorithm.des3Sync({key:"d9893b98d5ae542ccd206d6b83cb456286044307681abf16", type:"encrypt", source:"hello world"});
                print(datab,"des3")
   */
  des3Sync(key: string): string;
  des3Sync(des3Params: Des3SyncParams): string;

  /**
   * @description 同步md5算法，只支持字符串的处理
   * @param value
   * @returns 返回md5后的值，使用的是32位小写加密方式
   * @example var datac = do_Algorithm.md5Sync({value:"hell oworld12345!#$"});
   * print(datac,"md5")
   */
  md5Sync(value: string): string;
  md5Sync(md5Params: Md5SyncParams): string;

  /**
   * @description 安全哈希算法
   * @param sha1Params 
   * @returns 返回SHA1加密后的值
   * @example var datad = do_Algorithm.sha1Sync({type:"lowercase", value:"abcd123"});
                print(datad,"SHA1")
   */
  sha1Sync(sha1Params: Sha1SyncParams): string;
  sha1Sync(): string;

  /**
   * @description md5算法
   * @param listen 
   * @returns 返回md5后的值，使用的是32位小写加密方式
   * @example do_Algorithm.md5({type:"string", value:"12345abcde"}, function(data, e) {
                print(data,"md5加密字符串")
                })
   */
  md5(listen: AlgorithmListen): void;
  md5(md5Params: Md5Params, listen: AlgorithmListen): void;

  /**
   * @description 3DES算法
   * @param key 
   * @param listen 
   * @returns {string} 返回des3后的值
   * @example   加密do_Algorithm.des3({key:"d9893b98d5ae542ccd206d6b83cb456286044307681abf16", type:"encrypt", source:"123456"}, function(data, e) {
                        print(data,"des3加密")
                    })
                解密
                    do_Algorithm.des3({key:"d9893b98d5ae542ccd206d6b83cb456286044307681abf16", type:"decrypt", source:"9k4LzG7DdHg="}, function(data, e) {
                        print(data,"des3解密")
                    })
   */
  des3(key: string, listen: AlgorithmListen): void;
  des3(des3Params: Des3Params, listen: AlgorithmListen): void;

  /**
   * @description 安全哈希算法
   * @param sha1Params 
   * @param listen 
   * @example do_Algorithm.sha1({type:"lowercase", value:"123abc!#"}, function(data, e) {
                print(data,"SHA1")
              })
   */
  sha1(sha1Params: Sha1Params, listen: AlgorithmListen): void;
  sha1(listen: AlgorithmListen): void;

  /**
   * @description Base64算法
   * @param base64Params 
   * @param listen 
   * @example var base64String;
        编码
        do_Algorithm.base64({type:"encode", sourceType:"string", source:"123abc!#"}, function(data, e) {
        print(data,"base64编码");
        base64String = data;
        })
        do_Algorithm.base64({type:"decode", sourceType:"string", source:base64String}, function(data, e) {
        print(data,"base64编码")
        })
   */
  base64(base64Params: Base64Params, listen: AlgorithmListen): void;
  base64(listen: AlgorithmListen): void;

  /**
   * @description 把十六进制数据按特定编码格式转成字符串
   * @param source 
   * @param listen 
   * @returns 返回转换之后的字符串
   * @example do_Algorithm.hex2Str({source:"6162634f60597d", encoding:"GB2312"}, function(data, e) {
  print(data,"十六进制转字符串")
      })
   */
  hex2Str(source: string, listen: AlgorithmListen): void;
  hex2Str(hex2StrParams: Hex2StrParams, listen: AlgorithmListen): void;

  /**
   * @description 把十六进制数据转换成二进制并保存成文件放在指定目录下
   * @param source 
   * @param path 
   * @param listen 
   * @returns {boolean} 返回转换是否成功，true为成功，false失败
   * @example do_Algorithm.hex2Binary({source:"6162634f60597d", path:"data://Algorithm/1.txt"}, function(data, e) {
          var storage = sm("do_Storage");
          storage.readFile({path:"data://Algorithm/1.txt"}, function(data, e) {
              print(data , "读取二进制文件");
          })
      })
   */
  hex2Binary(source: string, path: string, listen: AlgorithmListen): void;
  hex2Binary(hex2BinaryParams: Hex2BinaryParams, listen: AlgorithmListen): void;

  /**
   * @description 把xml格式转换成标准Json格式
   * @param source 
   * @param listen 
   * @example target_0.xml2Json({source:"<?xml version=\"1.0\" encoding=\"utf-8\"?>"
              + "<mobilegate>"    
          +"<timestamp>232423423423</timestamp>"                          
          + "<txn>" + "Transaction" + "</txn>" 
          + "<amt>" + 0 + "</amt>" 
          + "</mobilegate>"}, function(data, e) {
  print(data,"xml转Json")
      })
   */
  xml2Json(source: string, listen: AlgorithmListen): void;
  xml2Json(xml2JsonParams: Xml2JsonParams, listen: AlgorithmListen): void;

  /**
   * @description RSA公钥加密解密算法(版本2有效)
   * @param source 
   * @param publicKey 
   * @param listen 
   * @returns {number} 返回转换之后的字符串
   * @example   sm("do_Algorithm").RSAPublic({source:oriStr, publicKey:publicKey, type:0}, function(data,e) {
                        print(data);
                });
   */
  RSAPublic(source: string, publicKey: string, listen: AlgorithmListen): void;
  RSAPublic(rsaPubParams: RsaPublicParams, listen: AlgorithmListen): void;

  /**
   * @description RSA私钥加解密算法(版本2有效)
   * @param source 
   * @param privateKey 
   * @param listen 
   * @example   sm("do_Algorithm").RSAPrivate({source:oriStr, publicKey:privateKey, type:0}, function(data,e) {
                        print(data);
                });
   */
  RSAPrivate(source: string, privateKey: string, listen: AlgorithmListen): void;
  RSAPrivate(rsaPrvParams: RsaPrivateParams, listen: AlgorithmListen): void;
}
