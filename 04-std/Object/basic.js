var obj = {
    p1: 123,
    p2: 456
};

Object.keys(obj) // ["p1", "p2"]

Object.getOwnPropertyNames(obj) // ["p1", "p2"]

/**Object.getOwnPropertyNames方法与Object.keys类似，
 * 也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。 */




// 由于 JavaScript 没有提供计算对象属性个数的方法，所以可以用这两个方法代替。
Object.keys(obj).length // 2
Object.getOwnPropertyNames(obj).length // 2