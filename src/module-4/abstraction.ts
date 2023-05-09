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

abstract class Veichle {
    constructor(public name:string,public brand:string,public model:number){
        
    }
    abstract startEngine(): void 
    abstract stopEngine(): void 
    move(): void {
        console.log("I am moving enginge...");
    }
    test(){
        console.log("I am for testing purpose");
    }
}

class Car extends Veichle{
    startEngine(): void {
        console.log("I am stopping engine")
    }
    stopEngine(): void {
        console.log("I am starting engine")
}}
