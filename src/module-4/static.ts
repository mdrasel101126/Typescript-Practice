class Counter{
    static counter:number =0;
    static increament():number{
        return Counter.counter=Counter.counter+1;
    }
    static decreament():number{
        return Counter.counter=Counter.counter-1;
    }
}

/* const instance1= new Counter();
const instance2= new Counter(); */
console.log(Counter.increament());
console.log(Counter.increament());
