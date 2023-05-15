"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const makePromiseString = () => {
    return new Promise((resolve, reject) => {
        const data = "Successfully Fetched";
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch");
        }
    });
};
const getUser = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(data => resolve(data)).catch(err => reject(err));
    });
};
const getUserData = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield getUser();
    console.log(user);
});
getUserData();
const makePromiseBoolian = () => {
    return new Promise((resolve, reject) => {
        const data = true;
        if (data) {
            resolve(data);
        }
        else {
            reject(false);
        }
    });
};
const getPromiseDataString = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseString();
    return data;
});
const getPromiseDataBoolian = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolian();
    return data;
});
