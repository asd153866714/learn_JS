// valueOf方法的作用是返回一个对象的“值”，默认情况下返回对象本身。

var obj = new Object();
obj.valueOf() === obj   // true
// 上面代码比较obj.valueOf() 与 obj 本身，两者是一样的。


var obj = new Object();
1 + obj     // "1[object Object]"
// 上面代码将对象obj与数字1相加，这时 
// JavaScript 就会默认调用valueOf()方法，求出obj的值再与1相加。


// 所以，如果自定义valueOf方法，就可以得到想要的结果。
var obj = new Object();
obj.valueOf = function () {
  return 2;
};

1 + obj // 3