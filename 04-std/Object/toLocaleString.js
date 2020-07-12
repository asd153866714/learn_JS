// 这个方法的主要作用是留出一个接口，让各种不同的对象实现自己版本的toLocaleString，用来返回针对某些地域的特定的值。

var person = {
    toString: function () {
        return 'Henry Norman Bethune';
    },
    toLocaleString: function () {
        return '白求恩';
    }
};

person.toString() // Henry Norman Bethune
person.toLocaleString() // 白求恩


// 上面代码中，toString()方法返回对象的一般字符串形式，toLocaleString()方法返回本地的字符串形式。

// 目前，主要有三个对象自定义了toLocaleString方法。

Array.prototype.toLocaleString()
Number.prototype.toLocaleString()
Date.prototype.toLocaleString()
// 举例来说，日期的实例对象的toString和toLocaleString返回值就不一样，而且toLocaleString的返回值跟用户设定的所在地域相关。

var date = new Date();
date.toString() // "Tue Jan 01 2018 12:01:33 GMT+0800 (CST)"
date.toLocaleString() // "1/01/2018, 12:01:33 PM"