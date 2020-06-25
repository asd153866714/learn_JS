function delayAdd(n1, n2, delayTime) {
    // 建立 Promise 物件: new Promise (function)
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(n1 + n2)
        }, delayTime)
    })
}

async function test() {
    let promise1 = await delayAdd(2, 5, 2000)
    let promise2 = await delayAdd(4, 10, 3000)
    let results = promise1 + promise2
    console.log(results)
}

test()

// 兩個 await 輪流等待總共要 5 秒鐘