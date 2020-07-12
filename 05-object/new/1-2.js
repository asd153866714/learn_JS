var Vehicle = function () {
    this.price = 1000;
}

var v = Vehicle();

console.log(v)  // undefined
console.log(price)  // 1000

// 上面代码中，调用Vehicle构造函数时，忘了加上new命令。
// 结果，变量v变成了undefined，而price属性变成了全局变量。
// 因此，应该非常小心，避免不使用new命令、直接调用构造函数。