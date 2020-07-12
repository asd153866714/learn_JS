var person1 = {
    name: '张三',
    age: 38,
    greeting: function () {
        console.log('Hi! I\'m ' + this.name + '.');
    }
};

var person2 = Object.create(person1);

person2.name // 张三
person2.greeting() // Hi! I'm 张三.

// 如果沒有構造函數，只能取得現有的物件，可以用 Object.create() 方法。
// person2 繼承了 person1 
