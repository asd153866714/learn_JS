// 这样的结构是很清晰的，问题在于属性的值可能是一个函数。

var obj = { foo: function () {} };
// 这时，引擎会将函数单独保存在内存中，然后再将函数的地址赋值给foo属性的value属性。

{
  foo: {
    [[value]]: 函数的地址
    ...
  }
}
// 由于函数是一个单独的值，所以它可以在不同的环境（上下文）执行。

var f = function () {};
var obj = { f: f };

// 单独执行
f()

// obj 环境执行
obj.f()
// JavaScript 允许在函数体内部，引用当前环境的其他变量。

var f = function () {
  console.log(x);
};
// 上面代码中，函数体里面使用了变量x。该变量由运行环境提供。