import { SmBasicInstance } from "../base/smBase";
interface SpeakParams{
    /** 要读出的文本内容 */
    text:string
    /** 需要朗读的角色,值列表见{@link https://blog.csdn.net/eastlhu/article/details/25436859} defaultvalue=xiaoyan */
    role?:string
}
interface OpenRes{
    result:string
    spell:string
    errorMsg:string
}
export interface DoiFlyVoice extends SmBasicInstance{
    /**
     * 开始播放
     * @param params 
     * @example var iFlayVoice = sm("do_iFlyVoice");
                iFlayVoice.speak(textBox.text, "xiaoyan")；
     */
    speak(params:SpeakParams):void

    /**
     * 暂停播放
     * @example iFlayVoice.pause();
     */
    pause():void

    /**
     * 继续播放
     * @example iFlayVoice.resume();
     */
    resume():void

    /**
     * 停止播放
     * @example  iFlayVoice.stop();
     */
    stop():void

    /**
     * 打开语音识别功能
     * 
     * 说明:调用open方法时，直到语音识别完毕的过程不要手动点击UI页面，手动点击UI界面导致会麦克风界面dismiss掉，导致此次语音识别终止，无法正确的拿到识别结果。   
     * @param listen 
     * @returns {object}  result：语音识别过后的文本结果；spell：语音识别过后的拼音结果；errorMsg：语音识别异常信息
     * @example iFlayVoice.open(function(data, e) {
                    if (data != null) {
                        // 语音识别过后的文本结果
                        textBox.text = data.result;
                        // 语音识别过后的拼音结果
                    }
                });
     */
    open(listen:(data:OpenRes)=>void):void

    /**
     * 合成完成，开始播放时触发
     * @param eventName 
     * @param listen 
     */
    on(eventName:'begin',listen:()=>void):void

    /**
     * 播放完成或播放错误时触发
     * @param eventName 
     * @param listen 
     */
    on(eventName:'finished',listen:()=>void):void
}