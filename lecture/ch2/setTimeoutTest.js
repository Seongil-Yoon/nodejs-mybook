(function () {
    setTimeout(() => {
        console.log("1");

        setTimeout(() => {
            console.log("2");

            setTimeout(() => {
                console.log("3");
            }, 0)

        }, 0);

    }, 0)
    console.log("0");
})();