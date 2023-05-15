"use strict";
const arrayOfNumbers = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map(number => number.toString());
console.log(arrayOfStrings);
const rectangularArea = {
    height: 10,
    width: 12,
};
const area1 = { height: 30, width: 50 };
/* const obj={
    name:"Rasel",
}
obj['name'] */
function getArrayItem(arr, index, key) {
    const item = arr[index];
    return item[key];
}
const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
console.log(getArrayItem(users, 0, 'name'));
