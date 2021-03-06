function f() {
    console.log(new.target === f);
}

f() // false
new f() // true

// 函数内部可以使用new.target属性。如果当前函数是new命令调用，
// new.target指向当前函数，否则为undefined。



// 使用这个属性，可以判断函数调用的时候，是否使用new命令。

function f() {
  if (!new.target) {
    throw new Error('请使用 new 命令调用！');
  }
  // ...
}

f() // Uncaught Error: 请使用 new 命令调用！