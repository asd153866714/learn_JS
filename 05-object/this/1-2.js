// 只要函数被赋给另一个变量，this的指向就会变。

var A = {
    name: '张三',
    describe: function () {
        return '姓名：' + this.name;
    }
};

var name = '李四';
var f = A.describe;
f() // "姓名：李四"
// 上面代码中，A.describe被赋值给变量f，内部的this就会指向f运行时所在的对象（本例是顶层对象）。