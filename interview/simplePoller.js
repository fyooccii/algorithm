function simplePoller(queryFn, callback, times = 0) {
    new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(`延迟${times ? times : 1}秒`);
                let resultOfQueryFn = queryFn();
                if (resultOfQueryFn) {
                    resolve();
                } else {
                    reject(times ? times * 1.5 : 1.5);
                }
            },
            times ? times * 1000 : 1000
        );
    })
        .then(() => callback())
        .catch(time => simplePoller(queryFn, callback, time));
}

// test
let resultArray = [0, 0, 0, 1];
function queryFn() {
    return !!resultArray.shift();
}
function callback() {
    console.log('success');
}
simplePoller(queryFn, callback);
