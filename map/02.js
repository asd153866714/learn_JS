var uncommonFromSentences = function(A, B) {
    const map = new Map()
    let c = []
    
    A.split(" ").forEach(s =>{
        !map.get(s) ? map.set(s, 1) : map.set(s, map.get(s) + 1)
    })

    B.split(" ").forEach(s =>{
        !map.get(s) ? map.set(s, 1) : map.set(s, map.get(s) + 1)
    })
    
    for (var [key, value] of map) {
        if (value == 1) {
            c.push(key)
        }
    }
    return c
}

uncommonFromSentences("this apple is sweet", "this apple is sour")