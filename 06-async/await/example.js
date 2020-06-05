let runPromise = (someone, timer, success = true) => {
    console.log(`${someone} 開始跑開始`);
    return new Promise((resolve, reject) => {
        // 傳入 resolve 與 reject，表示資料成功與失敗
        if (success) {
            setTimeout(function () {
                // 3 秒時間後，透過 resolve 來表示完成
                resolve(`${someone}1 跑 ${timer / 1000} 秒時間(fulfilled)\n`);
            }, timer);
        } else {
            // 回傳失敗
            reject(`${someone} 跌倒失敗(rejected)`)
        }
    });
}

const asyncRunFail = async () => {
    let mingRun = await runPromise('小明', 2000, false);
    let auntieRun = await runPromise('漂亮阿姨', 2500);
    return `${mingRun}, ${auntieRun}`
}

asyncRunFail().then(string => {
    console.log(string);
}).catch(response => {
    console.log(response);
    // 小明 跌倒失敗(rejected)
})

// async 本身也是類似 Promise，在正確執行的情況下 return 會傳回 resolved 的狀態，
// 也可以使用 then 來接收正確的資料。

// 當 async 被呼叫時他會回傳一個 Promise，
// 如果正確的運行這個 Promise 會回傳一個 resolved (正確的運行)，
// 如果函式無法正確地完成，則會拋出錯誤的 rejected。