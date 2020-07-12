/*现在问题就来了，由于函数可以在不同的运行环境执行，所以需要有一种机制，
能够在函数体内部获得当前的运行环境（context）。
所以，this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。
*/
var f = function () {
  console.log(this.x);
}
// 上面代码中，函数体里面的this.x就是指当前运行环境的x。




var f = function () {
  console.log(this.x);
}

var x = 1;
var obj = {
  f: f,
  x: 2,
};

// 单独执行
f() // 1

// obj 环境执行
obj.f() // 2

// 上面代码中，函数f在全局环境执行，this.x指向全局环境的x；在obj环境执行，this.x指向obj.x。