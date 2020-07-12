// Object.prototype.hasOwnProperty方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性。

var obj = {
    p: 123
};
  
obj.hasOwnProperty('p') // true
obj.hasOwnProperty('toString') // false