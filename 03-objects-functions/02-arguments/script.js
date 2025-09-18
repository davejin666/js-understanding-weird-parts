function myFunc(a, b, c) {
    console.log([...arguments]);
}

myFunc(); // []
myFunc(1, 2, 3); // [1, 2, 3]
myFunc(1, 2, 3, 4); // [1, 2, 3, 4]

function myFunc2(a, b, c, ...rest) {
    console.log([...arguments]);
    console.log('Rest: ', rest);
}

myFunc2(); // []
myFunc2(1, 2, 3); // [1, 2, 3]
myFunc2(1, 2, 3, 4); // [1, 2, 3, 4]
