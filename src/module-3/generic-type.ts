const rollNumbers3:Array<number>=[45,33,63];
const rollNumbers4:Array<string>=["reasl","dkfj"];

const userNamesAndRollNumbers:Array<{name:string,roll:number}>=[{name:"rasel",roll:56},{name:"akash",roll:34}]

type GenericArray<T>=Array<T>;
type NameAndRollType={
    name:string;
    roll:number;
}

const rollNumbers5:GenericArray<number>=[5,3,3];
const userNamesAndRollNumbers2:GenericArray<NameAndRollType>=[
    {
        name:"Rasel",
        roll:34,
    },
]

type GenericTuple<X,Y>=[X,Y];

const relation:GenericTuple<string,number>=["Rasel",56]
