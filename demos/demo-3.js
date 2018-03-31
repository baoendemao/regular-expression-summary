/**
 * \w等价于[a-zA-Z0-9]
 */
/\w/.test(',,');                // false
/\w/.test('hello world');       // true
/^\w/.test(',hello world');     // false


