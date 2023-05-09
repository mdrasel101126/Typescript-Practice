const arrayOfNumbers= [1,2,3];
const arrayOfStrings= arrayOfNumbers.map(number=>number.toString());
console.log(arrayOfStrings);

type AreaNumber={
    height:number;
    width:number;
};

type AreaString={
    height:string;
    width:string;
}

type  B= AreaNumber['height'] //look up types
type C= keyof AreaNumber; // 'width' | 'height'
type AreaReadOnly={
   readonly height:number;
   readonly width:number;
}
const rectangularArea:AreaReadOnly={
    height:10,
    width:12,
}

type Volume={
    height:number;
    width:string;
    depth:number;
}

type Area={
    [key in keyof Volume]:Volume[key];
}

type Area2<T>={
    [key in keyof T]:T[key]
};

const area1:Area2<{height:number,width:number}>={height:30, width:50}

/* const obj={
    name:"Rasel",
}
obj['name'] */

function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];
  
    return item[key];
  
  }
  
  
  
  const users = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
  
  console.log(getArrayItem(users, 0, 'name')) 