/**
 * 中文汉字转成拼音，非中文汉字部分则保留原格式
 */
// 引入字符编码（JSON）
import Pinyin from './pingyin-encode';
import {findKey, kebabCase} from "lodash-es";

export function toPinyin(cnStr: string) {
  return new PinyinConverter().toPinyin(cnStr);
}

/**
 * 转换类
 */
export class PinyinConverter {
  /**
   * 获取所有编码
   */
  static getPinYin() {
    return Pinyin;
  }

  /**
   * 汉字转拼音
   * @param {String} cnStr 需要转成拼音的汉字字符串
   */
  toPinyin(cnStr: string): string {
    if (!cnStr) {
      return cnStr;
    }
    const chars = cnStr.split('');
    const words: string[] = [];
    let temp: string[] = [];
    chars.forEach((it, index) => {
      const py = this.search(it);
      if (py === it) {
        temp.push(it);
      } else {
        if (temp.length > 0) {
          words.push(temp.join(''));
          temp = [];
        }
        words.push(py);
      }
      // 如果最后一个字不是汉字需要处理缓存
      if (index === chars.length -1 && temp.length > 0) {
        words.push(temp.join(''));
        temp = [];
      }
    });

    return kebabCase(words.join('-'));
  }

  /**
   * 在对象中搜索
   * @param {String} cn 单个汉字
   */
  search(cn: string): string {
    return findKey(Pinyin, (value) => value.indexOf(cn) !== -1) || cn;
  }
}

