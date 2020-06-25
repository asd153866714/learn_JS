for (var i = 0; i < 5; i++) {

    (function (x) {
        // 將原本的 1000 改成 1000 * x
        setTimeout(function () {
            console.log(x);
        }, 1000 * x);
    })(i);

}

// 比較之前的寫法，在執行 window.setTimeout 的時候， i 早已變成了 5
// 為了了保留每一次執行迴圈時那個「當下的」 i，
// 用一個立即被呼叫的特殊函式將它包覆起來，然後將 i 作為參數傳入：