var div = document.getElementById('someDiv');
var opacity = 1;
var fader = setInterval(function(){
    opacity -= 0.1;
    if(opacity >= 0){
        div.style.opacity = opacity;
    }
    else{
        clearInterval(fader);
    }
},100);

// 上面代码每隔100毫秒，设置一次div元素的透明度，直至其完全透明为止。