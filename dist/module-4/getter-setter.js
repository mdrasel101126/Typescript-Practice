"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    //getter 
    get balance() {
        return this._balance;
    }
    //setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
    getBalance() {
        return this._balance;
    }
    addDeposit(amount) {
        this._balance = this._balance + amount;
    }
}
class StudentAccount extends BankAccount {
    test() {
    }
}
const myAccount = new BankAccount(34, "rasel", 500);
console.log(myAccount);
console.log(myAccount.balance);
myAccount.deposit = 100;
console.log(myAccount);
