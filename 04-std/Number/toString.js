var a = 10

a.toString()    // "10"
a.toString(2)   // "1010"
a.toString(8)   // "12"
a.toString(16)  // "a"

// toString方法可以接受一个参数，表示输出的进制。
// 如果省略这个参数，默认将数值先转为十进制，再输出字符串;
// 否则，就根据参数指定的进制，将一个数字转化成某个进制的字符串。

