var preloadImage = function (path){
    return new Promise(function (resolve, reject){
        let image = new Image();
        image.onload = resolve;
        image.onerror =  reject;
        image.src = path;
    })
}
 preloadImage('https://example.com/my.jpg')
    .then(function (e){document.body.append(e.target)})
    .then(function (){console.log('加載成功')})

// 图片加载成功以后，onload属性会返回一个事件对象，
// 因此第一个then()方法的回调函数，会接收到这个事件对象。
// 该对象的target属性就是图片加载后生成的 DOM 节点。