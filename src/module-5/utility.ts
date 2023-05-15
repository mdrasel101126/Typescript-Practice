//pick 

interface Person {
    name:string;
    email?:string;
    contactNo:string;
}

type email=Pick<Person,"email">;
type ContactNo=Pick<Person,"contactNo">
type Contact =Pick<Person,"contactNo"|"email">

//omit

type Name = Omit<Person,"email" | "contactNo">

//partial 
// to make all the properties be optional type

type Optional = Partial<Person>

type RequiredProps= Required<Person>

// 

const person :Readonly<Person >={
    name:"Rasel",
    email:"abc@gmail.com",
    contactNo:"017...."
}
// Record Type

/* type myObj={
    a:string;
    b:string;
    c:string;
} */


// usint index signature

/* type myObj={
    [key:string]:string;
} */

//Record 'a' | 'b' | 'c'
type myObj=Record<'a'|'b'|'c'|'d',string>
const obj:myObj={
    a:'1',
    b:'2',
    c:'3',
    d:'4',
}