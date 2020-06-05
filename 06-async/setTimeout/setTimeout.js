var x = 1 ;

var obj = {
    x: 2,
    y: function(){
        console.log(this.x);
    }
}

setTimeout(obj.y, 1000); // 1

// 上面代码输出的是1，而不是2。
// 因为当obj.y在1000毫秒后运行时，
// this所指向的已经不是obj了，而是全局环境。