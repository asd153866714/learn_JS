// （3）对象的方法

// 如果对象的方法里面包含this，this的指向就是方法运行时所在的对象。
// 该方法赋值给另一个对象，就会改变this的指向。

// 但是，这条规则很不容易把握。请看下面的代码。

var obj ={
  foo: function () {
    console.log(this);
  }
};

obj.foo() // obj
// 上面代码中，obj.foo方法执行时，它内部的this指向obj。

// 但是，下面这几种用法，都会改变this的指向。



// 情况一
(obj.foo = obj.foo)() // window
// 情况二
(false || obj.foo)() // window
// 情况三
(1, obj.foo)() // window

// 上面代码中，obj.foo就是一个值。这个值真正调用的时候，
// 运行环境已经不是obj了，而是全局环境，所以this不再指向obj。

// 可以这样理解，JavaScript 引擎内部，obj和obj.foo储存在两个内存地址，称为地址一和地址二。
// obj.foo()这样调用时，是从地址一调用地址二，因此地址二的运行环境是地址一，this指向obj。
// 但是，上面三种情况，都是直接取出地址二进行调用，这样的话，运行环境就是全局环境，因此this指向全局环境。
// 上面三种情况等同于下面的代码。

// 情况一
(obj.foo = function () {
  console.log(this);
})()
// 等同于
(function () {
  console.log(this);
})()

// 情况二
(false || function () {
  console.log(this);
})()

// 情况三
(1, function () {
  console.log(this);
})()