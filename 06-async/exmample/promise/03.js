function delayAdd(n1, n2, delayTime) {
    // 建立 Promise 物件: new Promise (function)
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(n1 + n2)
        }, delayTime)
    })
}

function test() {
    let promise1 = delayAdd(2, 5, 2000)
    let promise2 = delayAdd(4, 10, 3000)

    // 多個 Promise 完成後，才繼續工作
    Promise.all([promise1, promise2]).then(function(results){
        console.log(results)
    })
}

test()

// 兩個 Promise 背後等待時間最多需 3 秒鐘 