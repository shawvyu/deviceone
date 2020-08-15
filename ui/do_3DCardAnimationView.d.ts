import { UiBasicInstance } from "../base/uiBase";

export interface Do3DCardAnimationView extends UiBasicInstance {
  /**
   * 卡片视图图片数组
   *
   * 说明 : 支持网络图片和本地图片，本地图片仅支持source://和data://目录
   */
  imageArray: string;
  /**
   * 卡片显示的默认图片
   *
   * 编辑方法: 仅设计器修改
   *
   * 说明 : 由于imageArray可能设置网络图片，网络图片加载需要时间，为了避免出现无图片显示情况，赋值defaultImage会预先给加载网络图片的卡片显示。支持source://和data://目录
   */
  defaultImage: string;

  /**
   * 卡片视图可见的卡片数量
   *
   * 编辑方法: 仅设计器修改。
   *
   * 说明 : 用来指定当前3D卡片视图中公有多少卡片是可见的。visibleCardCount不能大于imageArray的长度,如果大于，则取imageArray.count。一般将visibleCardCount设置为小于imageArray的长度，这样会有更好的动画效果(第visibleCardCount+1 个图片，会在第0个图片滑下去后从最后面动画滑出来)。
   */
  visibleCardCount: number;

  /**
   * 最前面的卡片宽度
   *
   * 编辑方法: 仅设计器修改。
   *
   * 说明 : 3D卡片视图最前面的卡片的宽度，不设置默认为自身的宽度
   */
  visibleCardWidth: number;

  /**
   * 最前面的卡片高度
   *
   * 编辑方法: 仅设计器修改。
   *
   * 说明 : 3D卡片视图最前面的卡片的宽度，不设置默认为自身的高度
   */
  visibleCardHeight: string;

  /**
   * 卡片背面色(仅iOS支持)
   *
   * 编辑方法: 仅设计器修改。
   *
   * 说明 : 3D卡片视图翻转后背面显示的颜色
   * @default 515151FF
   */
  cardBackColor: string;

  /**
   * 最前面的显示的卡片序号改变事件
   * @param eventName
   * @param listen
   * @returns 返回当前最前面的显示的卡片序号
   */
  on(eventName: "frontCardIndexChanged", listen: (data: number) => void): void;
  /**
   * 点击事件
   * @param eventName
   * @param listen
   * @returns 返回当前最前面的显示的卡片序号
   */
  on(eventName: "touch", listen: (data: number) => void): void;
}
