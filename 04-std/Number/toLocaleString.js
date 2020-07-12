(123).toLocaleString('zh-Hans-CN-u-nu-hanidec')
// "一二三"

(123).toLocaleString('zh-Hans-CN', { style: 'percent' })
// "12,300%"


(123).toLocaleString('zh-Hans-CN', { style: 'currency', currency: 'CNY' })
// "￥123.00"

(123).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
// "123,00 €"

(123).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
// "$123.00"


// Number.prototype.toLocaleString()方法接受一个地区码作为参数，
// 返回一个字符串，表示当前数字在该地区的当地书写形式。