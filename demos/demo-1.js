/**
 * \s表示空格或者tab等空白字符
 */
var regExp = new RegExp('\\s');  
regExp.test('    ');   // true

console.log(/\s/.test('  '));  // true

/**
 * 单词匹配（包括字母和数字）
 */
console.log(/^\w+$/.test('derer2')); // true
console.log(/^\w+$/.test('derer2;')); // false
console.log(/^\w+$/.test('1'));  // true

// 单个字符匹配
console.log(/^..$/.test('12'));  // true
console.log(/^..$/.test('123')); // false
console.log(/^..$/.test('1'));  // false