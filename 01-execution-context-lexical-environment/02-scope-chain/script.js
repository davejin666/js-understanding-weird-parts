let x = 20;

function outer() {
    let y = 10;

    function inner() {
        return x + y;
    }

    return inner;
}
console.log(outer()()); // logs 30
