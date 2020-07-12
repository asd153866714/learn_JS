// toString方法的作用是返回一个对象的字符串形式，默认情况下返回类型字符串。

// 对于一个对象调用toString方法，会返回字符串[object Object]，该字符串说明对象的类型。

// 字符串[object Object]本身没有太大的用处，
// 但是通过自定义toString方法，可以让对象在自动类型转换时，得到想要的字符串形式。
var obj = new Object();

obj.toString = function () {
    return 'hello';
};

obj + ' ' + 'world' // "hello world"


// 数组、字符串、函数、Date 对象都分别部署了自定义的toString方法，覆盖了Object.prototype.toString方法。
[1, 2, 3].toString() // "1,2,3"

'123'.toString() // "123"

(function () {
    return 123;
}).toString()
// "function () {
//   return 123;
// }"

(new Date()).toString()
// "Tue May 10 2016 09:11:31 GMT+0800 (CST)"