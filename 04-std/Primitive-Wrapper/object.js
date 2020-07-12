
// 两种它们共同具有、从Object对象继承的方法：valueOf()和toString()。

// valueOf()方法返回包装对象实例对应的原始类型的值。

new Number(123).valueOf()  // 123
new String('abc').valueOf() // "abc"
new Boolean(true).valueOf() // true




// toString()方法返回对应的字符串形式。

new Number(123).toString() // "123"
new String('abc').toString() // "abc"
new Boolean(true).toString() // "true"