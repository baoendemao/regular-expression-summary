# regular-expression-summary
要养成按照字符来理解正则表达式的习惯。
#### 元字符
* ^
    * ^cat 
        * 匹配以c作为一行的第一个字符，紧接一个a，紧接一个t的文本
    * ^
        * 每一行都有开头，所以每一行都能匹配
* $
    * ^$
        * 行开头，然后就是行末尾
        * 空行
* .
    * 点匹配任意字符，包括空格
    * .*
        * 0个或者多个任意字符
* \+
    * 加号表示出现一次或多次。如果连一次匹配都无法完成，则报告失败。
    * [0-9]+ 
        * 至少出现一位数字
    * [A-Za-z]+
        * 至少出现一个字母

* \* 
    * 星号表示出现任意多次，或者不出现。永远不会匹配失败。
* ?
    * u?
        * 问号只作用域之前紧邻的字符
        * u出现或者不出现。永远不会匹配失败
        * (july|jul)可以简化为(july?)
        * 4th|4可以简化为4(th)?
* 量词
    * 量词包括：+ * ？
    * 作用的对象都是它们之前紧邻的子表达式
* |
    * 或，多选
    * gra|ey
        * 匹配gra或者ey
    * abc|def|ghi|klm|nop
        * 匹配abc或者def或者ghi或者klm或者nop
    * ^aaa|bbb|ccc
        * 同 (^aaa)|(bbb)|(ccc)
        
* ()
    * 优先结合
    * gr(a|e)y
        * 匹配gray或者grey
    * (First|1st)[Ss]treet
        * 匹配First或者1st，后面紧跟着S或者s，后面紧跟着treet
        * 可以改写成：(Fir|1)st[Ss]treet
    * Jeff(rey|ery)
        * 匹配Jeff，后面紧跟着rey或者ery
* []
    * 匹配字符组中的任意一个。只能匹配目标文本中的单个字符。
    * [ea]
        * 匹配a或者e
    * gr[ea]y
        * 先找到g，跟着是r，然后是一个a或者e，最后是一个y
    * [123456]
        * 匹配1到6中的任意一个数字
    * 在字符组[]之内，元字符的意义会有区别：
        * ^
        * .
    
* [^XXX]
    * 匹配一个字符，而这个字符不等于XXX中的任意一个
    * [^1-6]
        * 匹配除了1到6以外的任意字符
    * ^ 在字符组内部表示排除，而在其他地方表示行开头
    * q[^u]
        * 字符q之后紧跟着一个除了u以外的字符，且q不在行尾
        * 比如字符串Iraq并不符合，因为q[^u]表示字符q之后必须紧跟着一个字符，而这个字符不能是u
    * [^x]
        * 匹配一个字符，而这个字符不等于x
    * "[^"]*" 
        * 匹配引号内的字符串。[^"]匹配除双引号之外的任意字符
    
* [-]
    * 表示范围，只匹配一个字符
    * <H[1-6]>
        * 字符<, 然后是H, 然后是1到6中的任意一个数字
    * 多重范围
        * [0-9a-fA-F]
        * [0-9A-Z_!.?]
            * 匹配一个数字、大写字母、下划线、惊叹号、点号、或者是问号
            * 虽然.和?也是元字符，但在字符组中则只是一个普通的字符
        * [-./]
            * 匹配- . /三者之一
        * [.-/]
            * 匹配.到/的范围，因为-写在了字符组的中间
    * 
* \\< 和 \\>
    * 单词的分隔符
        * <和>并不是元字符，只有和\结合才有意义
        * \<  单词的开始位置
        * \>  单词的结束位置
    * \\<cat\\>
        * 单词开头位置，然后是cat这三个字符，然后是单词的结束

* \1
    * \1表示第一组括号匹配的文本，\2表示第二组括号匹配的文本，\3表示第三组括号匹配的文本
    *  \<([A-Za-z]+)\1 \>
        * 匹配重复单词
        * 比如匹配thethe, \1代表的文本就是the, \>代表单词结尾
    * ([a-z])([0-9])\1\2
        * \1代表[a-z]匹配的内容, \2表示[0-9]匹配的内容
* \ 
    * 转义
    * \\([a-zA-Z]\\)
        * 匹配一个括号内的单词，如(very)
        * \消除了小括号的优先级含义，小括号变成了普通的字符
    * \\\\*
        * 第一个反斜线用来转义第二个反斜线
    * \\*
        * 第一个反斜线转义*
    * [\\]
        * 注意：字符组内的反斜线没有任何特殊意义，并不是一个转义字符
* {min, max}
    * 区间量词
    * [a-zA-Z_0-9]{0,31}
        * 最长只能是31个字符
    * ?对应的量词是{0,1}
* 特殊元字符
    * \t 
        * 制表符
    * \n
        * 换行符
    * \r 
        * 回车符
    * \s
        * 空白符，包括空格符、制表符等
    * \S
        * 除了\s之外的任何字符
    * \w
        * 匹配[a-zA-Z0-9]
        * \w+ 用来匹配一个单词
    * \W
        * 匹配[^a-zA-Z0-9]
    * \d
        * [0-9]
    * \D
        * [^0-9]
    
#### 修饰符 i、g、m
* i 即ignore, 不区分大小写
    * 例如 /abc/i 可以匹配 abc、aBC、Abc
* g 即global, 全局匹配
    * 如果不带g，正则过程中字符串从左到右匹配，找到第一个符合条件的即匹配成功，返回
    * 如果带g，则字符串从左到右，找到每个符合条件的都记录下来，直到字符串结尾位置
    * 例如: 

    ```
    var str = 'aaaaaaaa'
    var reg1 = /a/
    str.match(reg1)  
    // 结果为：["a", index: 0, input: "aaaaaaaa"]

    var reg2 = /a/g
    str.match(reg2)  
    // 结果为：["a", "a", "a", "a", "a", "a", "a", "a"]
    ```
* m 即more, 多行匹配
    * 若存在换行\n并且有开始^或结束$符的情况下，和g一起使用实现全局匹配, 因为存在换行时默认会把换行符作为一个字符任务匹配字符串是个单行。g只匹配第一行，添加m之后实现多行，每个换行符之后就是开始
    * 例如：
    ```
    var str = "abcggab\nabcoab"
    var reg1 = /^abc/gm
    str.match(reg1)  
    // 结果为：["abc", "abc"]

    var reg2 = /ab$/gm;   
    str.match(reg2)  
    // 结果为：["ab", "ab"]
    ```

#### 匹配规则
* 优先选择最左端的匹配结果
    * 例如 come来匹配字符串"welcome to china. come on."
        * 结果是welcome中的come，而不是最后的come单词，因为前者出现的最早
    * 例如 /fat|cat|belly|yours/.exec('hello belly fat indicates yours too fat')
        * 结果是["belly", index: 6, input: "hello belly fat indicates yours too fat"]，即第一个匹配的结果
* 尝试匹配尽可能多的字符，直到匹配上限为止
    * 例如 /\d+/.exec('hello12345')
        * 结果是[ '12345', index: 5, input: 'hello12345' ]
        * 1匹配之后实际上已经满足了，但是不会停留，而会继续接着匹配
    * 例如 /.*[0-9]/.test('hello12345')
        * 结果是true
        * .* 不会匹配整行，为了最后[0-9]的匹配，会释放出一些字符，所以匹配上限要视情况而定
* 正则匹配中的回溯
    * 例如 
    ```
    /<div>.*<\/div>/.exec('<div>hello</div>world</div>haha')

     结果是["<div>hello</div>world</div>", index: 0, input: "<div>hello</div>world</div>haha"]

    这个例子的.*并没有匹配全部，而是匹配到了第二个</div>。
    虽然根据正则字符的解析, 先匹配<div>成功，然后.*可以匹配全部，但是为了接着的</div>的匹配，.此时的正则匹配会回溯到</div>之前
    ```
    * 例如 /(\.\d\d[1-9]?\d+)/.test(.123)  // true
        * .123中的3是由\d+匹配的，而不是[1-9]?。因为如果[1-9]?匹配3的话，最后的\d+将匹配失败，导致整个正则匹配失败。
        * 这个例子同样是先匹配，然后往下继续监测，如果下面的匹配失败，则回溯
#### JS NFA
* 正则引擎的分类
    * NFA
    * DFA
    * POSIX NFA
* NFA和DFA比较
    * DFA会选择最长的匹配结果, 而NFA是优先匹配
        * 例如 /one(self)?(selfsufficient)?/.exec('oneselfsufficient') 
        * NFA的结果是oneself， 而DFA的结果是oneselfsufficient
* 测试JS
    * /NFA|NFA Not/.exec('NFA Not')结果是 ["NFA", index: 0, input: "NFA Not"]
#### Demos
* [熟悉"常用正则元字符"   demo-1.js](https://github.com/baoendemao/regular-expression-summary/blob/master/demos/demo-1.js)
* [熟悉"数字"相关正则    demo-2.js](https://github.com/baoendemao/regular-expression-summary/blob/master/demos/demo-2.js)
* [熟悉"字符"相关正则    demo-3.js](https://github.com/baoendemao/regular-expression-summary/blob/master/demos/demo-3.js)
* [熟悉"字符组"    demo-4.js](https://github.com/baoendemao/regular-expression-summary/blob/master/demos/demo-4.js)
* [熟悉"多选分支"    demo-5.js](https://github.com/baoendemao/regular-expression-summary/blob/master/demos/demo-5.js)

  
