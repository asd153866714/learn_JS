// （2）构造函数

// 构造函数中的this，指的是实例对象。

var Obj = function (p) {
  this.p = p;
};
// 上面代码定义了一个构造函数Obj。由于this指向实例对象，
// 所以在构造函数内部定义this.p，就相当于定义实例对象有一个p属性。

var o = new Obj('Hello World!');
o.p // "Hello World!"