// 如果这时将嵌套对象内部的方法赋值给一个变量，this依然会指向全局对象。

var a = {
    b: {
        m: function () {
            console.log(this.p);
        },
        p: 'Hello'
    }
};

var hello = a.b.m;
hello() // undefined

// 上面代码中，m是多层对象内部的一个方法。为求简便，将其赋值给hello变量，结果调用时，this指向了顶层对象。为了避免这个问题，可以只将m所在的对象赋值给hello，这样调用时，this的指向就不会变。
var hello = a.b;
hello.m() // Hello