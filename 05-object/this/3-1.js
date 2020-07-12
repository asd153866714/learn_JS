// this主要有以下几个使用场合。

// （1）全局环境

// 全局环境使用this，它指的就是顶层对象window。

this === window // true

function f() {
  console.log(this === window);
}
f() // true

// 上面代码说明，不管是不是在函数内部，只要是在全局环境下运行，this就是指顶层对象window。