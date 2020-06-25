function eatBreakfast() {
    console.log('eatBreakfast');
}
function washingPlate() {
    console.log('washingPlate');
}
function callSomeone(someone) {
    console.log('call ' + someone)
    setTimeout(function () {
        console.log(someone + ' call back');
    }, 2000);
}
function doWork() {
    var auntie = "Jack";
    eatBreakfast();
    callSomeone(auntie);
    washingPlate();
}
doWork();