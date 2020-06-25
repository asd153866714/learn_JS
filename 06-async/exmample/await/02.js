function delayAdd(n1, n2, delayTime) {
    let p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject(n1 + n2)
        }, delayTime)
    })
    return p
}

async function test() {
    // await 回傳 Promise 對象
    let result = await delayAdd(2, 5, 2000).catch(error => {
        console.log("Error", error)
    })
    console.log(result)
}

test()

// reject 用 await 處理