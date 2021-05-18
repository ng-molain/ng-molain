import * as path from 'path';
import { pathExistsSync, mkdirpSync } from 'fs-extra';

export function existsOrCreateDir(filePath: string) {
  const dirname = path.dirname(filePath);
  // console.log(path.dirname(outputFile))
  if (!pathExistsSync(dirname)) {
    try {
      mkdirpSync(dirname);
    } catch (e) {
      // 创建目录失败
    }
  }
}

// export function toHump(str: string) {
//     const re=/-(\w)/g;
//     return str.replace(re,function ($0,$1){
//         return $1.toUpperCase();
//     });
// }
