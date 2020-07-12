function Fubar(foo, bar){
    'use strict';
    this._foo = foo;
    this._bar = bar;
  }
  
  Fubar()
  // TypeError: Cannot set property '_foo' of undefined

  /*上面代码的Fubar为构造函数，use strict命令保证了该函数在严格模式下运行。
  由于严格模式中，函数内部的this不能指向全局对象，默认等于undefined，
  导致不加new调用会报错（JavaScript 不允许对undefined添加属性）。*/ 