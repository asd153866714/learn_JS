function delayedAdd(n1, n2, delayTime) {
    setTimeout(function () {
        console.log('2')
        return n1 + n2;
    }, delayTime)
    console.log('1')
}

function test() {
    let result = delayedAdd(3, 4, 2000);
    console.log(result);    //undefined
} 
test()

// setTimeout 被丟到 Event Queue（事件佇列）中，
// 其他的程式碼都跑完了才會執行 setTimeout 內的內容，
// 因此先執行的console.log(result) 抓不到結果，故為 undefined。

// Javascript 是單執行序的程式語言，有一個特性就是順序執行，
// 當遇到比較耗時的任務時，還未執行的任務就會處於等待狀態，
// 一定要等到前面的任務完成了，才會往後執行。