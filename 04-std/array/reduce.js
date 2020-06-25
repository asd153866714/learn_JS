const items = [
    { name: 'Bike', price: 100},
    { name: 'Car', price: 200},
    { name: 'Computer', price: 500},
    { name: 'Phone', price: 1000},
    { name: 'Book', price: 10},
]

const total = items.reduce((currentTotal, item, currentIndex) => {
    console.log(currentTotal, item,  currentIndex)
    return item.price + currentTotal
}, 0)

const max = items.reduce((currentTotal, item) => {
    return Math.max(item.price, currentTotal)
}, 0)


console.log('total:', total)
console.log("max:", max)

// reduce() 可以與前一個回傳的值做運算
// currentTotal: 前一個參數
// item: 當前變數
// currentIndex: 當前索引