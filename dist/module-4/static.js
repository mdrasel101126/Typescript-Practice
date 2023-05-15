"use strict";
class Counter {
    static increament() {
        return Counter.counter = Counter.counter + 1;
    }
    static decreament() {
        return Counter.counter = Counter.counter - 1;
    }
}
Counter.counter = 0;
/* const instance1= new Counter();
const instance2= new Counter(); */
console.log(Counter.increament());
console.log(Counter.increament());
