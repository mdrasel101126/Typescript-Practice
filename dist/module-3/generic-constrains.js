"use strict";
/* const a:newType="address";
const b:newTypeUsingKeyOf="address"; */
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: "Mr. X", age: 100 }, "age");
