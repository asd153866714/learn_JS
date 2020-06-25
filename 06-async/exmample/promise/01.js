// Promise 物件
function delayAdd(n1, n2, delayTime) {
    // 建立 Promise 物件: new Promise (function)
    let p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(n1 + n2)
        }, delayTime)
    })
    return p
}

function test() {
    let promise = delayAdd(2, 5, 2000)
    promise.then(function (result){
        console.log(result)
    })
}

test()

// test() 建立 Promise 物件，主程式不等待直接回傳 p
// Promise 在背後等待兩秒後執行成功，呼叫 resolve
//  promise.then() 接收到 resolve 的內容