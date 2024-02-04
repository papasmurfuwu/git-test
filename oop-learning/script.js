function Vehicle(make, model){
    this.make = make; 
    this.model = model;
    this.info = function(){
        return `The ${this.make} ${this.model} is made in ${this.year}.`;
    }
}

Vehicle.prototype.shout = function(){
    return `This is a ${this.make} ${this.model}!`
}

function Car(make, model, year){
    Vehicle.call(this, make, model);
    this.year = year;
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
// Car.prototype.constructor = Car;

const car1 = new Car("Ford", "Mustang", 1973);

console.log(car1.info());
// console.log(car1.shout());
console.log(Object.getPrototypeOf(car1));


// class Vehicle {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//         this.info = function(){
//             return `The ${this.make} ${this.model} is made in ${this.year}.`;
//         }
//     }
// }

// class Car extends Vehicle {
//     constructor(make, model, year) {
//         super(make, model);
//         this.year = year;
//     }
// }

// let Car1 = new Car("Ford", "Mustang", 1973);
// console.log(Car1.info());