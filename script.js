// Coclass Car{  // parent class
	constructor(make,model) { // constructor with two arugements.
		this.make=make;
		this.model=model;
	}
	
  getmakeModel(){ 
	  return `${this.make} ${this.model}`
  }
}

class SportsCar extends Car{
	constructor(make,model,topSpeed){
		super(make,model)
		this.topSpeed=topSpeed;
	}
	
	getTopSpeed(){
		return `${this.topSpeed}`
	}
}

const Mclaren=new SportsCar("US","Gt","129kms");
console.log(Mclaren.getmakeModel());
console.log(Mclaren.getTopSpeed());
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
