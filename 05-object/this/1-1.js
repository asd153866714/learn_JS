// this就是属性或方法“当前”所在的对象。
this.property
// 上面代码中，this就代表property属性当前所在的对象。

var person = {
  name: '张三',
  describe: function () {
    return '姓名：' + this.name;
  }
};

person.describe()
  // "姓名：张三"

/**上面代码中，this.name表示name属性所在的那个对象。
 * 由于this.name是在describe方法中调用，而describe方法所在的当前对象是person，
 * 因此this指向person，this.name就是person.name */