function oneMore() {
    console.log('one more');
}

function run() {
    console.log('run run');
    setTimeout(() => {
        console.log('wow');
    }, 0); //setTimeout이 0초라고 해서 바로실행X,
    new Promise((resolve) => {
        resolve('hi');
    }).then(console.log());
    oneMore();
}
// 백그라운드에 있다가 5초후 태스크 큐에 감
// 그리고 이벤트루프에 의해 호출스택에 쌓임
setTimeout(run, 5000);