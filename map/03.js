var uncommonFromSentences = function(A, B, map = new Map(), ans = []) {
    A.split(" ").forEach(s => map.set(s, 1 + (map.get(s) || 0)))
    B.split(" ").forEach(s => map.set(s, 1 + (map.get(s) || 0)))
    return Array.from( map.entries()).filter(a => a[1] == 1).map(a => a[0])
}

uncommonFromSentences("this apple is sweet", "this apple is sour")