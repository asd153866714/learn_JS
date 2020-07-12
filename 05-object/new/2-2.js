function getMessage() {
    return 'this is a message';
}

var msg = new getMessage();

msg         // {}
typeof msg  // "object"

// 如果对普通函数（内部没有this关键字的函数）使用new命令，
// 则会返回一个空对象。