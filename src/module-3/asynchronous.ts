
const makePromiseString=():Promise<string>=>{
    return new Promise<string>((resolve,reject)=>{
        const data:string="Successfully Fetched";
        if(data){
            resolve(data)
        }else{
            reject("Failed to fetch");
        }
    })
}

interface IUserType{

        userId: number;
        id: number;
        title: string;
        completed: false;
   
}

const getUser=():Promise<IUserType>=>{
   return new Promise((resolve,reject)=>{
  
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()).then(data=>resolve(data)).catch(err=>reject(err))
   })
}

const getUserData=async():Promise<void>=>{
    const user= await getUser();
    console.log(user);
}
getUserData()


const makePromiseBoolian=():Promise<boolean>=>{
    return new Promise<boolean>((resolve,reject)=>{
        const data:boolean=true;
        if(data){
            resolve(data)
        }else{
            reject(false);
        }
    })
}



const getPromiseDataString=async():Promise<string>=>{
const data=await makePromiseString();
return data;
}
const getPromiseDataBoolian=async():Promise<boolean>=>{
    const data=await makePromiseBoolian();
    return data;
}