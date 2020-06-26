var uncommonFromSentences = function(A, B) {
    let a = A.split(" ")
    let b = B.split(" ")
    
    const map = new Map()
    
    a.forEach(s =>{
        if (!map.get(s)) {
            map.set(s, 1)
        } else {
            map.set(s, map.get(s) + 1)
        }
    })

    b.forEach(s =>{
        if (!map.get(s)) {
            map.set(s, 1)
        } else {
            map.set(s, map.get(s) + 1)
        }
    })
    
    let c = []

    for (var [key, value] of map) {
        if (value == 1) {
            c.push(key)
        }
    }
    console.log(c)
    return c
}

uncommonFromSentences("this apple is sweet", "this apple is sour")