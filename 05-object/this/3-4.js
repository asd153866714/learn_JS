var a = {
    p: 'Hello',
    b: {
        m: function () {
            console.log(this.p);
        }
    }
};

a.b.m() // undefined

// 上面代码中，a.b.m方法在a对象的第二层，该方法内部的this不是指向a，
// 而是指向a.b，因为实际执行的是下面的代码。
var b = {
    m: function () {
        console.log(this.p);
    }
};

var a = {
    p: 'Hello',
    b: b
};

(a.b).m() // 等同于 b.m()

// 如果要达到预期效果，只有写成下面这样。
var a = {
  b: {
    m: function() {
      console.log(this.p);
    },
    p: 'Hello'
  }
};