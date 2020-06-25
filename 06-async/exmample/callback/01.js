let a = function (callback) {  
    setTimeout(() => {
      console.log('a function'); //先印‘a function’
      callback()}, 2000);} //叫b
  let b = function () {
    console.log('b function');} //再印‘b function’
  a(b)

  // 2秒後 ‘a function’
  // 2秒後 ‘b function’
  
  // callback 回乎函數: 把函數當作參數傳遞來呼叫