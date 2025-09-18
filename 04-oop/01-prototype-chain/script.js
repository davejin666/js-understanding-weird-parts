const pType = {
    abc: 888,
    def: [1, 2, 3],
    name: 'Tony',
    printName() {
        console.log(this.name);
    },
};

const obj1 = {
    a: 1,
    __proto__: pType,
};

const obj2 = {
    b: 2,
    name: 'David',
    __proto__: pType,
};

console.log(obj1.abc, obj2.abc); // 888 888
obj1.abc = 777;
console.log(obj1.abc, obj2.abc); // 777 888

console.log(obj1.def === obj2.def); // true
obj1.def[1] = 42;
console.log(obj1.def, obj2.def); // [1, 42, 3] [1, 42, 3]

console.log(obj2.printName());

/* Object reflection */
for (const prop in obj2) {
    if (obj2.hasOwnProperty(prop)) {
        console.log(prop, obj2[prop]);
    }
}

function Car(make, model) {
    this.make = make;
    this.model = model;
    this.brake = function () {
        console.log(`${this.make} ${this.model} is pulling over...`);
    };
}

Car.prototype.drive = function () {
    console.log(`${this.make} ${this.model} drives off...`);
};

const car1 = new Car('Nissan', 'GT-R');
const car2 = new Car('Honda', 'CR-V');

console.log(car1.drive === car2.drive); // true
console.log(car1.brake === car2.brake); // false
car1.brake();
car2.brake();
