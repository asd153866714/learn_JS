const items = [
    { name: 'Bike', price: 100},
    { name: 'Car', price: 200},
    { name: 'Computer', price: 500},
    { name: 'Phone', price: 1000},
    { name: 'Book', price: 10},
]

const filterItems = items.filter(item => {
    return item.price <= 100
})

console.log(items)
console.log(filterItems)