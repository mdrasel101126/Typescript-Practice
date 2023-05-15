"use strict";
/* //key of guard

type Alphanumaric= string |number

function add(param1:Alphanumaric,param2:Alphanumaric):Alphanumaric{
  if(typeof param1 =='number' && typeof param2=='number'){
    return param1+param2;
  }else{
    return param1.toString()+param2.toString();
  }
};

add('1','2');
add(1,2);

//in guard

type NormalUserType={
    name:string;
}
type AdminUserType={
    name:string;
    role:'admin';
}
function getUserRole(user:NormalUserType|AdminUserType){
    if('role' in user){
        return `I am an admin and my role is ${user.role}`
    }else{
        return 'I am a normal user';
    }
}

const normalUser1:NormalUserType={name:'Mr. Kallu'};
const adminUser1:AdminUserType={name:"Mr. Gallu",role:'admin'}

console.log(getUserRole(adminUser1))
console.log(getUserRole(normalUser1))

// instance of guard

class Animal{
    name:string;
    species:string;
    constructor (name:string,species:string){
        this.name=name;
        this.species=species;
    }
    makeSound(){
        console.log("I am making sound");
    }
}

class Dog extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    makeBark(){
        console.log("I am barking");
    }
}


class Cat extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }

    makeMeaw(){
        console.log("I am Meawing");
    }
}

function isDog(animal:Animal):animal is Dog{
    return animal instanceof Dog;
}
function isCat(animal:Animal):animal is Cat{
    return animal instanceof Dog;
}

function getAnimal(animal:Animal){
   if(isDog(animal)){
    animal.makeBark();
   }else if(isCat(animal)){
    animal.makeMeaw()
   }else{
    animal.makeSound()
   }
}

const animal1=new Dog("German Bhai",'dog')//instance of dog

const animal2 = new Cat("Moon",'cat') //instance of cat

getAnimal(animal1)
 */ 
