const items = [
    { name: 'Bike', price: 100},
    { name: 'Car', price: 200},
    { name: 'Computer', price: 500},
    { name: 'Phone', price: 1000},
    { name: 'Book', price: 10},
]

const ExpensiveItems = items.some(item => {
    return item.price > 200
})

const InexpensiveItems = items.some(item => {
    return item.price <= 0 
})

console.log(ExpensiveItems)
console.log(InexpensiveItems)
// return Boolean