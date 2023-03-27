
// https://blog.csdn.net/weixin_44727080/article/details/113977267
export function numberToChinese(num: number) {
  const changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const unit = ['', '十', '百', '千', '万']
  num = parseInt(String(num))
  const getWan = (temp: number | string) => {
    const strArr = temp.toString().split('').reverse()
    let newNum = ''
    const newArr: string[] = [];
    strArr.forEach((item: string, index: string | number) => {
      newArr.unshift(item === '0' ? changeNum[item] : changeNum[+item] + unit[+index])
    })
    const numArr: number[] = []
    newArr.forEach((m, n) => {
      if (m !== '零') numArr.push(n)
    })
    if (newArr.length > 1) {
      newArr.forEach((m, n) => {
        if (newArr[newArr.length - 1] === '零') {
          if (n <= numArr[numArr.length - 1]) {
            newNum += m
          }
        } else {
          newNum += m
        }
      })
    } else {
      newNum = newArr[0]
    }

    return newNum
  }
  const overWan = Math.floor(num / 10000)
  let noWan: string | number = num % 10000
  if (noWan.toString().length < 4) {
    noWan = '0' + noWan
  }
  return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num)
}
