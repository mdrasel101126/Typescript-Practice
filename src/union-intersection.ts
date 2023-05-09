type personType={
    name:string;
    roll:number;
};

const newPerson:personType={
    name:"Rasel",
    roll:566,
}
//console.log(newPerson)

type NoobDeveloper={
    name:string;
}

/* type JuniorDeveloper={
    name:string;
    experience:number,
    expertise:string
}
 */

type JuniorDeveloper=NoobDeveloper & {
    expertise:string,
    experience:number
}

enum Level{
    junior="Junior",
    mid="Mid",
    senior="Senior",
}

type NextLevelDeveloper=JuniorDeveloper &{
    leadershipExperience:number
   // level:"mid" | "medium" | "senior"
   level:Level
}
const newDeveloper:NoobDeveloper|JuniorDeveloper={
    name:"Rasel Miah",
    expertise:"Javascript",
    experience:1,
   
};
const developer:NextLevelDeveloper={
    name:"Rasel",
    expertise:"Javascript",
    experience:3,
    leadershipExperience:5,
    level:Level.senior
}