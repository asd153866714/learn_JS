function delayAdd(n1, n2, delayTime) {
    let p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(n1 + n2)
        }, delayTime)
    })
    return p
}

async function test() {
    // await 回傳 Promise 對象
    let result = await delayAdd(2, 5, 2000)
    console.log(result)
}

test()