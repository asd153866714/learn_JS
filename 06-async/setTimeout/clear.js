var id1 = setTimeout(f, 1000);
var id2 = setInterval(f, 1000);

clearTimeout(id1);
clearInterval(id2);

// 上面代码中，回调函数f不会再执行了，因为两个定时器都被取消了。