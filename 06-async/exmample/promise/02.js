function delayAdd(n1, n2, delayTime) {
    let p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject(n1 + n2)
        }, delayTime)
    })
    return p
}

function test() {
    let promise = delayAdd(2, 5, 2000)

    promise.then(function (result){
        console.log(result)
    }).catch(function(error){
        console.log("Error", error)
    })
}

test()

// reject 用 catch 做錯誤處理