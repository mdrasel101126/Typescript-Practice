type User={
    name:string;
    age:number;
};

interface IUser{
    name:string;
    age:number;
}

const userWithTypeAlias:User={
    name:"Type Alias",
    age:34,
}

const userWithInterface:User={
    name:"Interface",
    age:200,
}

interface IEUser extends IUser{
    role:number;
}

const newUser:IEUser={
    name:"Rasel",
    age:34,
    role:56,
}

type AddNumberType=(num1:number,num2:number)=>number;

interface IAddNumberType{
    (num1:number,num2:number):number;
}

const addNumbers:IAddNumberType=(num1,num2)=>num1+num2;

type rollNumbersType=number[];
interface IRollNumber{
  [index:number]:number  
}

const rollNumbers:rollNumbersType=[3,5,6];
const rollNumbers2:IRollNumber=[3,5,6];
