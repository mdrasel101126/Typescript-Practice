"use strict";
//interface
/* interface IVeichle{
    name:string;
    model:string;
}
const veichle:IVeichle={
    name:"Car",
    model:"2000",
} */
/* interface IVeichle{
    startEngine():void;
    stopEngine():void;
    move():void;
}

class Veichle implements IVeichle{
    constructor(public name:string,public brand:string,public model:number){
        
    }
    startEngine(): void {
        console.log("I am starting engine...");
    }
    stopEngine(): void {
        console.log("I am stoping engine...");
    }
    move(): void {
        console.log("I am moving enginge...");
    }
    test(){
        console.log("I am for testing purpose");
    }
}

const veichle1= new Veichle("Car","Toyota",2000) */
//abstract class
class Veichle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log("I am moving enginge...");
    }
    test() {
        console.log("I am for testing purpose");
    }
}
class Car extends Veichle {
    startEngine() {
        console.log("I am stopping engine");
    }
    stopEngine() {
        console.log("I am starting engine");
    }
}
