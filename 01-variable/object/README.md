# 物件操作

### 讀取
```
var obj = {
  p: 'Hello World'
};

obj.p // "Hello World"
obj['p'] // "Hello World"
```

### 賦值
```
var obj = {};

obj.foo = 'Hello';
obj['bar'] = 'World';
```

### 刪除 : delete
```
var obj = { p: 1 };
Object.keys(obj) // ["p"]

delete obj.p // true
obj.p // undefined
Object.keys(obj) // []
```

### 檢查是否存在 : in
```
var obj = {};
if ('toString' in obj) {
  console.log(obj.hasOwnProperty('toString')) // false
}
```