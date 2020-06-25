const items = [
    { name: 'Bike', price: 100},
    { name: 'Car', price: 200},
    { name: 'Computer', price: 500},
    { name: 'Phone', price: 1000},
    { name: 'Book', price: 10},
]

const ExpensiveItems = items.every(item => {
    return item.price > 200
})

console.log(ExpensiveItems)

// if every item in array match the statement
// return true 