// 以下都是合法的 JSON。

["one", "two", "three"]

a = { "one": 1, "two": 2, "three": 3 }

b = {"names": ["张三", "李四"] }

c = [ { "name": "张三"}, {"name": "李四"} ]

// 以下都是不合法的 JSON。

d = { name: "张三", 'age': 32 }  // 属性名必须使用双引号

e = [32, 64, 128, 0xFFF] // 不能使用十六进制值

f = { "name": "张三", "age": undefined } // 不能使用 undefined

g = { "name": "张三",
  "birthday": new Date('Fri, 26 Aug 2011 07:13:10 GMT'),
  "getName": function () {
      return this.name;
  }
} // 属性值不能使用函数和日期对象