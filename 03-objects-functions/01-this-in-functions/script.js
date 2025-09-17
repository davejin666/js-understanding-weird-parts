console.log(this); // `Window` object

function funcOne() {
    console.log(this); // `Window` object
}

funcOne();

const obj = {
    name: 'David',
    funcTwo() {
        console.log('Inside funcTwo(): ', this); // `obj` object

        function funcThree() {
            console.log('Inside funcThree: ', this); // `Window` object
        }

        funcThree.call(this);
    },
};

obj.funcTwo();
