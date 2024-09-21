// Coclass Car{  // parent class
	class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getMakeModel() {
        return `${this.make} ${this.model}`;
    }
}

class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model);
        this.topSpeed = topSpeed;
    }

    getTopSpeed() {
        return this.topSpeed;
    }
}

const Mclaren = new SportsCar("US", "Gt", 400);
console.log(Mclaren.getMakeModel());
console.log(Mclaren.getTopSpeed());

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
