const searchName=(value:string|null):void=>{
    if(value===null){
        console.log("There is nothing to search");
    }else{
        console.log("Searching.....");
    }
}

//searchName("Hello");

const getMyCarSpeed=(speed:unknown):void=>{
    if(typeof speed ==='number'){
        const convertSpeed=(speed*1000)/3600;
        console.log(`My spped is ${convertSpeed}`);
    } 
    if(typeof speed === 'string'){
        const value = parseFloat(speed.split(' ')[0]);
        const convertSpeed=(value*1000)/3600;
        console.log(`My spped is ${convertSpeed}`);

    }
}