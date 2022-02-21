function countDown(i) {
    return promise = new Promise((resolve, reject) => {
        if (i > 0) {
            setTimeout(() => {
                countDown(i).then(resolve(i--));
                document.getElementById("display").innerHTML = (i--);
            }, 1000);
        } else {
            resolve('Happy independence day');
        }
    });
}

let counter = countDown(10);
counter.then((msg) => {
    document.getElementById("display").innerHTML = (msg);
});