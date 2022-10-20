function oneMore() {
    console.log('one more'); // No.3
}

function run() {
    console.log('run run'); // No.1
    setTimeout(() => { //promis에 양보됨
        console.log('wow'); // No.5
    }, 0); //setTimeout이 0초라고 해서 바로실행X,
    new Promise((resolve) => {
            resolve('hi');
            console.log("3.5"); // No.2, 프로미스내부는 스택
        }) //프로미스는 .then을 만나면 비동기가 되서, 백그라운드에 들어감
        .then((x) => {
            return new Promise((resolve) => {
                resolve('rehi');
                console.log("rehi뒤");
                console.log(x); // No.4
            })
        }).then((y) => {
            console.log(y);
            // setTimeout(console.log('2'), 1000)
        });
    oneMore();
}
// 백그라운드에 있다가 5초후 태스크 큐에 감
// 그리고 이벤트루프에 의해 호출스택이 비워있을때(1개 이상 스택에있으면 이동X) 스택으로 이동.
setTimeout(run, 1000);

// Hello Node Express!