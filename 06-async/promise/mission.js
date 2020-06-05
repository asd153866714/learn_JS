setTimeout(function() {
    console.log(1);
}, 0);

new Promise(function (resolve, reject){
    resolve(2);
}).then(console.log);

console.log(3);
// 3
// 2
// 1

// then 回調事件本輪循環執行
// setTimeout(fn, 0) 在下一輪事件循環開始執行