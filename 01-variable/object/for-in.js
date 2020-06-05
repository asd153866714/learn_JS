var obj = {a:1, b:2, c:3};

for (let i in obj){
    console.log('key: ', i);
    console.log('value: ', obj[i]);
}