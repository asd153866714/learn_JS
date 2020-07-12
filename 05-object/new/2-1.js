/* 
使用new命令时，它后面的函数依次执行下面的步骤。
1. 創建一個空的物件，做為要傳回的物件實例。
2. 將空的物件的原型，指向構造函數的 prototype 實例。
3. 將這個空物件指指派值給函數內部的 this 關鍵字
4. 開始執行構造函數內部的程式碼
*/

// 也就是说，构造函数内部，this指的是一个新生成的空对象，
// 所有针对this的操作，都会发生在这个空对象上。

var Vehicle = function () {
    this.price = 1000;
    return 1000;
};

(new Vehicle()) === 1000
// false

// 上面代码中，构造函数Vehicle的return语句返回一个数值。
// 这时，new命令就会忽略这个return语句，返回“构造”后的this对象。

// 但是，如果return语句返回的是一个跟this无关的新对象，
// new命令会返回这个新对象，而不是this对象。这一点需要特别引起注意。

var Vehicle = function () {
    this.price = 1000;
    return { price: 2000 };
};

(new Vehicle()).price
  // 2000

// 上面代码中，构造函数Vehicle的return语句，返回的是一个新对象。
// new命令会返回这个对象，而不是this对象。