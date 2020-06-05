function timeout(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    })  
}

timeout(100);

// Promise <pending>

// resolve -> fulfilled
// reject -> rejected