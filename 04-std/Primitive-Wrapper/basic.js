var v1 = new Number(123);
var v2 = new String('abc');
var v3 = new Boolean(true);

typeof v1 // "object"
typeof v2 // "object"
typeof v3 // "object"

v1 === 123 // false
v2 === 'abc' // false
v3 === true // false





// Number、String和Boolean这三个原生对象，如果不作为构造函数调用（即调用时不加new），
// 而是作为普通函数调用，常常用于将任意类型的值转为数值、字符串和布尔值。

// 字符串转为数值
Number('123') // 123

// 数值转为字符串
String(123) // "123"

// 数值转为布尔值
Boolean(123) // true
