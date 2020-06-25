const items = [
    { name: 'Bike', price: 100},
    { name: 'Car', price: 200},
    { name: 'Computer', price: 500},
    { name: 'Phone', price: 1000},
    { name: 'Book', price: 10},
]

const foundItem = items.find(item => {
    return item.name === 'Car'
})

console.log(foundItem)

// return the fist item find in the array