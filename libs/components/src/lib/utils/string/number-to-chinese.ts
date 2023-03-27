
export function numberToChinese(num: number) {
  const chnNumChar = ["零","一","二","三","四","五","六","七","八","九"]
  const chnUnitSection = ["","万","亿","万亿","亿亿"]
  const chnUnitChar = ["","十","百","千"]

  let result = ''
  let unitPos = 0

  while (num > 0) {
    let section = num % 10000
    if (unitPos === 0 && section < 1000) {
      result += chnNumChar[0]
    }
    let secStr = ''
    let zeroFlag = true
    for (let i = 0; i < 4; i++) {
      const digit = section % 10
      if (digit === 0) {
        if (!zeroFlag) {
          zeroFlag = true
          secStr = chnNumChar[digit] + secStr
        }
      } else {
        zeroFlag = false
        secStr = chnNumChar[digit] + chnUnitChar[i] + secStr
      }
      section = Math.floor(section / 10)
    }
    if (secStr !== '') {
      secStr += chnUnitSection[unitPos]
    }
    result = secStr + result
    unitPos++
    num = Math.floor(num / 10000)
  }

  if (result.length > 1 && result.substring(0, 1) == '零') {
    // 清理最前面的 “零”
    result = result.substring(1);
  }

  return result;
}
