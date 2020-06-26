/* JSON.stringify方法用于将一个值转为 JSON 字符串。
 * 该字符串符合 JSON 格式，
 * 并且可以被JSON.parse方法还原。 */

JSON.stringify('abc') // ""abc""
JSON.stringify(1) // "1"
JSON.stringify(false) // "false"
JSON.stringify([]) // "[]"
JSON.stringify({}) // "{}"

JSON.stringify([1, "false", false])
// '[1,"false",false]'

JSON.stringify({ name: "张三" })
// '{"name":"张三"}