// JSON.parse方法用于将 JSON 字符串转换成对应的值。

JSON.parse('{}') // {}
JSON.parse('true') // true
JSON.parse('"foo"') // "foo"
JSON.parse('[1, 5, "false"]') // [1, 5, "false"]
JSON.parse('null') // null

var o = JSON.parse('{"name": "张三"}');
o.name // 张三

// 如果传入的字符串不是有效的 JSON 格式，JSON.parse方法将报错。

JSON.parse("'String'") // illegal single quotes
// SyntaxError: Unexpected token ILLEGAL