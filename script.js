// Complete the js code
class Car{  // parent class
	constructor(make,model) { // constructor with two arugements.
		this.make=make;
		this.model=model;
	}
  get makemodel(){ 
	  return `${this.make} ${this.model}`
  }
}

class SportsCar extends Car{
	constructor(make,model,topSpeed){
		super(make,model,topSpeed)
		this.topSpeed=topSpeed;
	}
	get TopSpeed(){
		return `${this.topSpeed}`
	}
}

const Mclaren=new SportsCar("US","Gt","129kms");
Mclaren.getMakeModel;
Mclaren.getTopSpeed;
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
