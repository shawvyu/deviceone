/*
 * @Author: your name
 * @Date: 2020-08-02 23:00:03
 * @LastEditTime: 2020-08-08 12:52:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \deviceone\sm\doImageBrowser.d.ts
 */

import { SmBasicInstance } from "../base/smBase";

interface ShowData {
  source: string;
  init: string;
}

export interface DoImageBrowser extends SmBasicInstance {
  /**
     * 打开预览，图片底部显示当前图片索引和总图片数
     * @param data 预览图片传递数据结构[{ source : ‘’, init : ‘’},{source :’’ , init : ‘’}, ….. ]其中source 为原图，init为缩略图
     * @param index 设置当前预览图片索引值，默认为0
     * @example var datashow0 = [
                    {"source": "source://image/0.jpg",
                        "init": "initdata://image/0.png"},
                    {"source": "initdata://image/2.png",
                        "init": "source://image/3.jpg"},
                    {"source": "source://image/4.jpg",
                        "init": "source://image/0.jpg"},
                    {"source": "http://f.hiphotos.baidu.com/image/pic/item/8d5494eef01f3a29a8b0ef3e9b25bc315d607cc1.jpg",
                        "init": "initdata://image/77.png"},
                    {"source": "http://g.hiphotos.baidu.com/image/pic/item/95eef01f3a292df566f096e5be315c6034a8730a.jpg",
                        "init": "initdata://image/55.png"}
                    ];
                    do_ImageBrowser.show({data:datashow0, index:0})
     */
  show(data: Array<ShowData>, index: number): void;
  show(params: { data: Array<ShowData>; index: number }): void;

  /**
   * 点击关闭预览时触发
   * @param eventName 
   * @param listen 
   * @returns 当前预览图片的索引{‘index’:’’}
   * @example do_ImageBrowser.on("result",function(){
                print("关闭预览")
                })
   */
  on(eventName: "result", listen: (data: { index: string }) => void);
}
