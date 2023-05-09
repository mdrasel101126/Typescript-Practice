class BankAccount{
    public id:number;
    public name:string;
    private _balance:number;

    constructor(id:number,name:string,balance:number){
        this.id=id;
        this.name=name;
        this._balance=balance;
    }

    //getter 
    get balance():number{
      return  this._balance
    }

    //setter

    set deposit(amount:number){
        this._balance=this._balance+amount;
    }

    getBalance():number{
       return this._balance;
    }

    addDeposit(amount:number){
        this._balance=this._balance+amount;
    }
}

class StudentAccount extends BankAccount{
    test(){
      
    }
}

const myAccount= new BankAccount(34,"rasel",500);

console.log(myAccount);

console.log(myAccount.balance)

myAccount.deposit=100;

console.log(myAccount)