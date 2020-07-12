var Vehicle = function () {
    this.price = 1000;
}

var v = new Vehicle()
console.log(v.price)    // 1000
var a = new Vehicle(500)
console.log(a.price)    // 1000

/*上面代码通过new命令，让构造函数Vehicle生成一个实例对象，
保存在变量v中。这个新生成的实例对象，从构造函数Vehicle得到了price属性。
new命令执行时，构造函数内部的this，就代表了新生成的实例对象，
this.price表示实例对象有一个price属性，值是1000。*/