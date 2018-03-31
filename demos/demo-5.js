/**
 *  对于多选分支的匹配顺序， 从待匹配字符串从左到右一一检测匹配字符
 */
/ello|ll|wello/.exec('wellcome ello');  // 结果["ll", index: 2, input: "wellcome ello"]

/**
 * 对于多选分支，如果前面的正则可以匹配，不会再检查后面的了
 */
/tour|to|tournament/.exec('three tournament');  // 结果["tour", index: 6, input: "three tournament"]

/**
 * 同上
 */
/to|tour|tournament/.exec('three tournament');  // 结果 ["to", index: 6, input: "three tournament"]