const example = {
    a: 123,
    b: {
        c: 135,
        d: 146
    }
}

const {a, b:{d}} = example;
console.log(a);
console.log(d);