/*
 * @Author: your name
 * @Date: 2020-07-31 23:35:17
 * @LastEditTime: 2020-08-01 10:31:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\doAlbum.d.ts
 */

import { SmBasicInstance } from "./smBase";

type AlbumListen = (data: SelectRes | boolean, e?: Error) => void;

interface SelectParams {
  /** @description 可设置让用户最多一次能选择图片的张数 defaultValue=9 */
  maxCount?: number;
  /** @description 保存后的图片的宽度，不设置就是不缩放，宽度越小，图片的文件大小越小 */
  width?: number;
  /** @description 保存后的图片的高度，不设置就是不缩放，高度越小，图片的文件大小越小 */
  height?: number;
  /** @description 清晰度1-100,缺省是100表示原始的图片质量，质量越小越模糊，但是图片的文件大小越小 */
  quality?: number;
  /** @description 只有在maxCount设置为1时该参数设置成true才有效。defaultValue=false */
  iscut?: boolean;
  /** @description 相册组件选择模式:0-仅图片；1-仅视频；2-图片与视频 defaultValue=0 */
  type?: number;
}

interface SaveParams {
  /** @description 要收藏的图片文件路径,支持initdata://、data://、source://下文件 */
  path: string;
  /** @description 收藏到相册后的图片的名称,如果要收藏多个图片，记得设置不同的名称，否则会被覆盖 defaultValue=default.jpg */
  name?: string;
  /** @description 保存后的图片的宽度，不设置就是不缩放，宽度越小，图片的文件大小越小 */
  width?: number;
  /** @description 保存后的图片的高度，不设置就是不缩放，高度越小，图片的文件大小越小 */
  height?: number;
  /** @description 清晰度1-100,缺省是100表示原始的图片质量，质量越小越模糊，但是图片的文件大小越小 */
  quality?: number;
}
/**
 * @description 返回一个js数组，类似[“data://temp/do_Album/random1.png”,”data://temp/do_Album/random1.png”,…]
 */
type SelectRes = Array<string>;

export interface DoAlbum extends SmBasicInstance {
  /**
   * @description 从系统相册选择照片 说明: 可以单选一张图片或者复选多张图片，选定的图片经过缩放最后默认会保存到data://temp/do_Album/目录下一个随机的名字的png文件上，然后返回给用户。
   *              在Android下保存的文件名的扩展名是.png.do,这是为了避免Android的系统自动把图片加到系统相册。
   *              通常相册里的图片分辨率很高，很多超过1m，在App开发中最好通过缩放和减少图片质量来减少文件大小。
   *              这里图片缩放有可能导致图片变形，因为你选择的宽高比和图片自身的宽高比可能不一致，要解决的办法就是通过设置width或者height的参数值为－1来保证宽高比不变。
   * @param selectParams
   * @param listen
   */
  select(selectParams?: SelectParams, listen: AlbumListen): void;
  select(listen:AlbumListen):void
  /**
   * @description 收藏图片到系统相册 说明: 将一个data://下的图片文件保存到系统相册，保存成功后，在系统的相册里就能看到。
   * @param path 
   * @param listen 
   * @example var album = sm(“do_Album”);
              album.save(“data://test.png”, “test.png”, function(data, e) {
                  appworker.print(“收藏成功”);
              })
              album.save({path:”data://test.png”, name:”test.png”,height:50,quality:100}, function(data, e) {
                  appworker.print(“收藏成功”);
              })
   */
  save(path: string, listen: AlbumListen): void;
  save(saveParams: SaveParams, listen: AlbumListen): void;
}
