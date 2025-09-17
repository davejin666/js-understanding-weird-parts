var a = 'David'; // Attached to global object
let b = 'Jack'; // Not attacehd to global object
const c = 'Bauer'; // Not attacehd to global object

function myFunc() {
    console.log(this);
}

const aaa = function () {
    console.log(this);
};

aaa();
